import { z } from 'zod';

export const businessTypes = [
  'Riad',
  'Hotel',
  'Tour Operator',
  'Activity Provider',
  'Guide',
  'Restaurant',
  'Transport',
  'Other',
] as const;

export const goalOptions = [
  'Website',
  'Bookings',
  'Guest experience',
  'Operations',
  'WhatsApp',
  'Automation',
  'AI',
  'Not sure',
] as const;

export const stepOneSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  whatsapp: z.string().min(6, 'Please enter a valid WhatsApp number').optional().or(z.literal('')),
});

export const stepTwoSchema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  businessType: z.enum(businessTypes),
  city: z.string().min(2, 'City must be at least 2 characters'),
  website: z.string().url('Invalid URL').optional().or(z.literal('')),
});

export const stepThreeSchema = z.object({
  goals: z.array(z.enum(goalOptions)).min(1, 'Select at least one area to improve'),
  message: z.string().optional(),
});

export const fullLeadSchema = stepOneSchema.merge(stepTwoSchema).merge(stepThreeSchema);

export type LeadFormData = z.infer<typeof fullLeadSchema>;
