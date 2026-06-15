'use client';

import { useState } from 'react';
import { Play, ShieldCheck, ScanSearch } from 'lucide-react';
import { SectionLabel } from '../section-label';

interface TestTypeScope {
  title: string;
  howWeTest: string[];
  whatWeCheck: string[];
  automationNote: string;
}

const whatWeTest = {
  blackBoxAutomationScope: {
    endToEndUserFlows: {
      title: '1. End-to-End User Flows',
      howWeTest: [
        'Scripts a full login flow by entering valid credentials and confirming the correct page loads.',
        'Performs the core task the user came to do such as submitting a form, placing an order, or updating a profile.',
        'Navigates across multiple pages within the same logged-in session to simulate real usage patterns.',
        'Triggers a logout and confirms the session is fully cleared from the browser.',
        'Attempts to access a protected page immediately after logout to verify the session is gone.',
        'Re-runs the entire flow back to back to confirm consistent behavior across multiple cycles.',
        'Scripts alternate user roles such as admin and regular user to verify each sees the correct interface.',
      ],
      whatWeCheck: [
        'User lands on the correct page after login with no error or redirect loop.',
        'The core task completes successfully and the result is reflected on screen as expected.',
        'Each page within the session loads correctly and carries the right user context throughout.',
        'After logout the user is sent to the correct page with the session fully terminated.',
        'Logged-out users cannot reach protected pages via direct URL or browser back button.',
        'The flow produces the same correct result on every repeated run with no flaky behavior.',
        'Each user role sees only the pages, buttons, and data they are permitted to access.',
      ],
      automationNote:
        'The entire flow runs inside one continuous browser session with no manual steps in between. This is the closest automation gets to simulating a real human using your website from start to finish.',
    },

    smokeAndSanity: {
      title: '2. Smoke & Sanity',
      howWeTest: [
        'Opens every main page route from a cold browser with zero cached data or cookies.',
        'Clicks the primary CTA buttons on the homepage and landing pages.',
        'After a reported bug fix, re-runs targeted scripts only on the affected area.',
        'Fires rapid page refreshes back-to-back to stress the server response consistency.',
        'Navigates directly to a deleted or invalid URL to trigger the error handling page.',
        'Loads the site on a freshly cleared browser profile to simulate a brand new visitor.',
      ],
      whatWeCheck: [
        'Every critical page loads fully with no blank screen, white flash, or server crash.',
        'CTA buttons route to the correct destination page without errors.',
        'The specific fixed feature now behaves correctly without breaking adjacent pages.',
        'The server returns a consistent response on every reload with no random timeouts.',
        'A proper 404 page shows instead of a raw server stack trace exposed to users.',
        'New visitors see the correct default state of the site with no leftover session data.',
      ],
      automationNote: 'Smoke scripts run first as the entry gate. If they fail, deeper test suites are paused until the build is confirmed stable.',
    },

    formsAndInputValidation: {
      title: '3. Forms & Input Validation',
      howWeTest: [
        'Fills every required field with valid data and clicks the submit button.',
        'Submits the form with all required fields intentionally left blank.',
        'Types invalid formats such as a wrong email structure or letters inside a phone number field.',
        'Clicks the submit button rapidly multiple times in quick succession.',
        'Pastes an extremely long text string into every available input field.',
        'Clears a pre-filled field completely and submits to test empty-after-edit behavior.',
        'Pastes special characters and emoji into text inputs to test handling of unexpected content.',
        'Fills only some required fields and skips others to test partial submission behavior.',
      ],
      whatWeCheck: [
        'User lands on the correct success page or sees a confirmation message after a valid submit.',
        'Inline error messages appear per field and the form does not submit or proceed when blank.',
        'Site rejects bad formats with specific readable error text next to the affected field.',
        'Only one submission goes through with no duplicate entries or repeated requests.',
        'UI stays intact with no overflow, layout break, or silent data loss on long inputs.',
        'Empty-after-edit fields are treated the same as never-filled fields by validation.',
        'Special characters are handled or cleanly rejected with no crash or garbled output.',
        'Partially filled forms show errors only on the skipped required fields and not the completed ones.',
      ],
      automationNote:
        'All form interactions go through the visible browser UI only with no direct API calls or database reads. Pure black-box from the user perspective.',
    },

    navigationAndLinks: {
      title: '4. Navigation & Links',
      howWeTest: [
        'Clicks every link in the header, footer, sidebar, and main navigation bar.',
        'Clicks all anchor hash links on the page such as #about, #contact, and #pricing.',
        'Hovers over dropdown and flyout menus to trigger their open states.',
        'Uses the browser back and forward buttons after multi-page navigation.',
        'Types a deep internal URL directly into the address bar on a fresh browser load.',
        'Scans every href on the page and checks the HTTP status code of each destination.',
        'Clicks external links to confirm they open in a new tab as expected.',
      ],
      whatWeCheck: [
        'Every nav link loads the correct page with no wrong destinations or redirect loops.',
        'Page scrolls accurately to the matching section and not off-target or static.',
        'Dropdown menus open and stay open long enough to be usable with no instant collapse.',
        'Browser history works correctly and back or forward does not break the page state.',
        'Deep-linked pages load correctly without requiring prior navigation to get there.',
        'All links return HTTP 200 and dead 404 links are flagged in the test report.',
        'External links open in a new tab and do not navigate the user away from the current page.',
      ],
      automationNote:
        'Link scans run against the live or staging URL. Routing behavior is validated across both environments separately to catch deployment-specific issues.',
    },

    crossBrowserAndResponsive: {
      title: '5. Cross-Browser & Responsive',
      howWeTest: [
        'Runs the full site at 1920x1080 desktop and 1280x800 laptop screen sizes.',
        'Resizes the browser to 375x812 and 390x844 to simulate common iPhone screen sizes.',
        'Tests at 768x1024 tablet portrait and 1024x768 tablet landscape orientations.',
        'Dynamically flips the viewport between portrait and landscape mid-session.',
        'Checks the navigation bar behavior across all breakpoints where the layout shifts.',
        'Runs the same interaction scripts on Chrome and Firefox to surface browser-specific failures.',
      ],
      whatWeCheck: [
        'Layouts, fonts, buttons, and images display correctly at every tested desktop size.',
        'Mobile layout stacks properly with no overlapping elements, clipped text, or cut-off buttons.',
        'Tablet layout renders a proper mid-size view and not a stretched mobile or squished desktop.',
        'Page reflows immediately and correctly when orientation changes with no broken columns.',
        'Desktop navigation collapses into a working mobile menu at the correct pixel breakpoint.',
        'No browser-specific visual bug or broken interaction appears on Firefox compared to Chrome.',
      ],
      automationNote:
        'Selenium handles cross-browser runs across Chrome and Firefox. Puppeteer covers headless Chrome for fast viewport resize checks. Both operate purely through the rendered UI.',
    },

    componentStability: {
      title: '6. Component Stability',
      howWeTest: [
        'Clicks through every tab panel to open each tab one by one.',
        'Opens and closes every accordion item including rapid repeated open and close sequences.',
        'Triggers every modal and dialog then closes it using the close button, ESC key, and backdrop click.',
        'Drags sliders and range inputs from their minimum to maximum values.',
        'Scrolls the full page from top to bottom and back while monitoring for layout shifts.',
        'Loads a page directly into a specific tab or sub-section via a deep-linked URL.',
        'Scans all visible images, icons, and embedded media on active page views for load errors.',
      ],
      whatWeCheck: [
        'Each tab panel shows its correct content with no empty body or missing sections.',
        'Accordions open and close cleanly with no animation stutter or stuck-open panel.',
        'Modals open fully, keep focus locked inside, and close completely on all three dismiss methods.',
        'Slider values update correctly and stay within the defined min and max boundaries.',
        'No elements shift or reposition unexpectedly as the user scrolls through the page.',
        'Page initializes directly into the correct sub-section without requiring manual navigation.',
        'No broken image placeholders, missing icons, or failed media loads are visible to users.',
      ],
      automationNote:
        'All component interactions are executed against the live rendered DOM with no source code access or internal state inspection at any point.',
    },

    accessibilityAndKeyboard: {
      title: '7. Accessibility & Keyboard',
      howWeTest: [
        'Navigates the entire page using only the Tab key to move between interactive elements.',
        'Activates buttons, links, and dropdowns using only the Enter and Space keys.',
        'Checks that modal dialogs trap keyboard focus and prevent Tab from escaping to the page behind.',
        'Verifies the Escape key closes any open modal, dropdown, or flyout menu.',
        'Inspects all images on the page for the presence of alt text attributes.',
        'Checks all form input fields for associated label elements readable by assistive tools.',
        'Measures color contrast ratios on primary text and button elements against their backgrounds.',
      ],
      whatWeCheck: [
        'Every interactive element is reachable by keyboard alone with no skipped or unreachable elements.',
        'Buttons and links activate correctly without requiring a mouse click at any point.',
        'Tab key stays locked inside open modals and returns focus to the trigger element on close.',
        'Escape key consistently dismisses all overlay elements across the entire site.',
        'No image is missing an alt attribute that would leave screen reader users without context.',
        'Every form field has a readable label so assistive tools announce the correct field purpose.',
        'Text and button contrast meets the minimum WCAG AA ratio so content is readable for all users.',
      ],
      automationNote:
        'Keyboard and accessibility checks are run through the browser with no assistive software installed. All findings are reported as clear actionable items for the developer to address.',
    },

    securitySurfaceChecks: {
      title: '8. Security Surface',
      howWeTest: [
        'Types basic script injection strings into every visible text input and search field.',
        'Attempts to directly navigate to known admin or dashboard routes without logging in first.',
        'Submits forms with SQL-like strings in text fields to check if the site surfaces database errors.',
        'Inspects browser-visible error messages triggered by invalid actions for exposed system details.',
        'Checks all external links across the site for correct security-related attributes.',
        'Tries accessing a previously visited protected page directly after logging out.',
      ],
      whatWeCheck: [
        'No injected script string executes or renders as live HTML anywhere in the browser.',
        'Unauthenticated users are redirected to the login page and never reach protected routes.',
        'No raw database error messages or internal table names appear after a bad input.',
        'Error messages shown to users are generic and friendly with no internal system details exposed.',
        'All external links include correct security attributes to prevent tab hijacking exploits.',
        'Logged-out users cannot access previously visited protected pages via back button or direct URL.',
      ],
      automationNote:
        'These are surface-level black-box checks only. No penetration testing, no network interception, and no server access is involved. Findings are flagged for a security specialist to investigate further if needed.',
    },

    // performancePulse: {
    //   title: '9. Performance Pulse',
    //   howWeTest: [
    //     'Loads the page on a simulated fast 4G connection and records the full load timeline.',
    //     'Throttles the network down to slow 3G speeds and reloads every main page.',
    //     'Disables the browser cache entirely and performs a hard reload to measure true load time.',
    //     'Scrolls through image-heavy pages to trigger lazy-loaded assets and records any visible delays.',
    //     'Opens 5 pages in sequence without closing tabs to observe memory and speed degradation.',
    //     'Identifies all third-party scripts loaded on the page and flags their individual load cost.',
    //   ],
    //   whatWeCheck: [
    //     'Time to Interactive stays within an acceptable range on a normal connection.',
    //     'Skeleton screens or loading spinners appear on slow connections so the page never looks broken.',
    //     'Hard reload time reflects real first-visit performance with no inflated cache hits.',
    //     'Lazy-loaded images appear before the user scrolls to them with no visible blank boxes.',
    //     'Site speed remains consistent across sequential page loads in the same session.',
    //     'Heavy or blocking third-party scripts are flagged in the report for the developer to review.',
    //   ],
    //   automationNote:
    //     'Performance data is collected through the browser runtime during automation runs with no server-side profiling or code instrumentation required.',
    // },
  },
} as const;

export function TestsSection() {
  const [selectedKey, setSelectedKey] = useState<keyof typeof whatWeTest.blackBoxAutomationScope>('smokeAndSanity');

  const activeScope = whatWeTest.blackBoxAutomationScope[selectedKey] as unknown as TestTypeScope;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border bg-muted/20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Automation Coverage Matrix</SectionLabel>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Every critical function that touches your visitors.</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground max-w-3xl">
          We run black-box automation scripts against your live or staging site, no source code needed. Every test simulates a real user through the
          browser and reports exactly what works and what doesn&apos;t.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[300px_1fr]">
          <div className="flex flex-row overflow-x-auto pb-4 gap-2 lg:flex-col lg:overflow-x-visible lg:pb-0">
            {Object.entries(whatWeTest.blackBoxAutomationScope).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setSelectedKey(key as keyof typeof whatWeTest.blackBoxAutomationScope)}
                className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all border ${
                  selectedKey === key
                    ? 'bg-card border-border shadow-sm text-foreground'
                    : 'border-transparent text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                }`}
              >
                {value.title}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm flex flex-col min-h-160">
            <div className="mb-6 pb-4 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shrink-0">
              <h3 className="text-lg font-semibold text-foreground">{activeScope.title}</h3>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground border border-border w-fit">
                <ShieldCheck className="h-3 w-3 text-primary" />
                Black-Box Only
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-2 grow overflow-y-auto pr-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-500 sticky top-0 bg-card pb-1">
                  <Play className="h-3.5 w-3.5 shrink-0" />
                  <span>How We Test It</span>
                </div>
                <ul className="space-y-3">
                  {activeScope.howWeTest.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground leading-6 flex gap-2">
                      <span className="text-muted-foreground/40 shrink-0 tabular-nums">{index + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 border-t border-border pt-6 md:border-t-0 md:pt-0 md:border-l md:pl-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-500 sticky top-0 bg-card pb-1">
                  <ScanSearch className="h-3.5 w-3.5 shrink-0" />
                  <span>What We Check</span>
                </div>
                <ul className="space-y-3">
                  {activeScope.whatWeCheck.map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground leading-6 flex gap-2">
                      <span className="text-muted-foreground/40 shrink-0 tabular-nums">{index + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 shrink-0">
              <div className="w-full bg-muted/30 p-4 border-t border-border flex justify-center rounded-b-2xl">
                <p className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="font-semibold text-foreground uppercase tracking-wider shrink-0 bg-background border px-1.5 py-0.5 rounded text-[10px]">
                    Note
                  </span>
                  {activeScope.automationNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
