# Reymond Godoy Freelance Website

A Next.js App Router website for Reymond Godoy's freelance web development services. The project presents service pages, an about page, FAQs, a contact funnel, SEO metadata, static robots and sitemap files, and a validated contact form that sends email through Gmail using Nodemailer.

## Project Overview

This site is built as a freelance portfolio and service website. It helps visitors understand the services offered, browse focused service pages, learn about the working process, and submit a consultation request.

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI and shadcn-style UI components
- Zod for contact form validation
- Nodemailer for email delivery
- Lucide React for icons

## How It Works

The project uses the `src/app` directory for App Router pages and file conventions.

- `src/app/page.tsx` renders the home page.
- Route folders under `src/app` render the public pages.
- `src/app/layout.tsx` defines global metadata, structured data, theme state, and the root layout.
- `src/app/api/contact/route.ts` handles contact form submissions.
- `src/lib/validators/contact.ts` validates form data with Zod before email is sent.
- `src/lib/site-content.ts` stores shared brand, navigation, service, FAQ, and footer content.
- `src/components` contains reusable UI and page section components.
- `src/themes` contains theme CSS files.
- `src/app/robots.txt` and `src/app/sitemap.xml` provide static SEO crawler files.

When a user submits the contact form, the API route validates the request body, sends a notification email to the configured receiver, and sends an acknowledgement email to the visitor.

## Installation

Install Node.js first. This project is intended for a modern Node.js environment compatible with Next.js 16.

Clone or open the project, then install dependencies:

```bash
npm install
```

Create a `.env` file in the project root and add the required email variables:

```env
GMAIL_USER="your-gmail-address@gmail.com"
GMAIL_APP_PASSWORD="your-gmail-app-password"
CONTACT_RECEIVER="where-contact-requests-should-go@example.com"
```

Use a Gmail app password, not your normal Gmail account password.

## Running Locally

Start the development server:

```bash
npm run dev
```

Open the site in your browser:

```text
http://localhost:3000
```

If port `3000` is already in use, Next.js may offer another local port.

## Available Scripts

```bash
npm run dev
```

Runs the local development server.

```bash
npm run build
```

Builds the production version of the site.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs ESLint checks.

## Production Build

To test the production flow locally:

```bash
npm run build
npm run start
```

Then visit:

```text
http://localhost:3000
```

## Project Structure

```text
src/
  app/
    api/contact/          Contact form API route
    about-me/             About page
    contact/              Contact page
    faqs/                 FAQ page
    seo-optimization/     SEO service page
    services/             Services overview page
    support-and-maintenance/
    website-design/
    website-development/
    website-hosting/
    website-testing/
    layout.tsx            Root layout and metadata
    page.tsx              Home page
    robots.txt            Static robots file
    sitemap.xml           Static sitemap file
  components/             Shared UI and page sections
  data/                   Static JSON data
  lib/                    Shared content, helpers, validators, theme logic
  themes/                 Theme CSS files
public/                   Images, icons, and static assets
```

## SEO Notes

The site includes:

- Global metadata in `src/app/layout.tsx`
- Static `robots.txt`
- Static `sitemap.xml`
- JSON-LD structured data for the professional service
- Page content structured around freelance web development services

The canonical site URL is configured as:

```text
https://reymond.online
```

## Contact Form Notes

The contact form will only send email when the required environment variables are configured correctly. If email sending fails, check:

- Gmail app password is valid
- `GMAIL_USER` matches the Gmail account
- `CONTACT_RECEIVER` is set
- The deployment platform has the same environment variables configured

## Deployment

This project can be deployed to any platform that supports Next.js applications, such as Vercel or a Node.js server. For deployment, make sure to:

- Run a successful production build
- Configure all required environment variables
- Use the production domain in SEO files and metadata
- Verify the contact form after deployment

## Contact

Email: [reymondgodoy89@gmail.com](mailto:reymondgodoy89@gmail.com)

Website: [https://reymond.online](https://reymond.online)
