import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Full name must be at least 2 characters.').max(100, 'Full name is too long.'),

  email: z.string().email('Please enter a valid email address.'),

  phone: z
    .string()
    .min(7, 'Phone number is too short.')
    .max(20, 'Phone number is too long.')
    .regex(/^[0-9+\-\s()]+$/, 'Phone number contains invalid characters.'),

  company: z.string().max(100, 'Company name is too long.').optional(),

  industry: z.string().min(1, 'Please select your industry.'),

  company_size: z.string().optional(),

  services: z.array(z.string()).min(1, 'Please select at least one service.'),

  budget: z.string().optional(),

  timeline: z.string().optional(),

  message: z
    .string()
    .min(1, 'Project description is required.')
    .refine(val => val.trim().split(/\s+/).length >= 25, 'Project description must be at least 25 words.'),

  contact_method: z.enum(['Email', 'Phone Call', 'Video Conference (Zoom/Google Meet)'], {
    error: () => 'Please select a contact method.',
  }),

  contact_time: z.enum(['Morning (9:00 AM – 12:00 PM)', 'Afternoon (1:00 PM – 5:00 PM)', 'Any Business Hours']).optional(),

  referral: z.string().optional(),

  consent: z.boolean().refine(val => val === true, { message: 'You must agree to the Privacy Policy.' }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
