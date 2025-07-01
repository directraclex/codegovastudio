'use server';

/**
 * @fileOverview Generates marketing copy (taglines, headlines, etc.) based on a brief description of an agency.
 *
 * - generateMarketingCopy - A function that generates marketing copy options.
 * - GenerateMarketingCopyInput - The input type for the generateMarketingCopy function.
 * - GenerateMarketingCopyOutput - The return type for the generateMarketingCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketingCopyInputSchema = z.object({
  agencyDescription: z
    .string()
    .describe('A brief description of the agency, its services, and its target audience.'),
});
export type GenerateMarketingCopyInput = z.infer<typeof GenerateMarketingCopyInputSchema>;

const GenerateMarketingCopyOutputSchema = z.object({
  taglineOptions: z
    .array(z.string())
    .describe('An array of potential taglines for the agency.'),
  headlineOptions: z
    .array(z.string())
    .describe('An array of potential headlines for the agency.'),
  marketingCopyOptions: z
    .array(z.string())
    .describe('An array of potential marketing copy snippets for the agency.'),
});
export type GenerateMarketingCopyOutput = z.infer<typeof GenerateMarketingCopyOutputSchema>;

export async function generateMarketingCopy(
  input: GenerateMarketingCopyInput
): Promise<GenerateMarketingCopyOutput> {
  return generateMarketingCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMarketingCopyPrompt',
  input: {schema: GenerateMarketingCopyInputSchema},
  output: {schema: GenerateMarketingCopyOutputSchema},
  prompt: `You are a marketing expert specializing in crafting compelling taglines, headlines, and marketing copy.

  Based on the following description of an agency, generate multiple options for taglines, headlines, and short marketing copy snippets.

  Agency Description: {{{agencyDescription}}}

  Please provide at least 5 options for each category.

  Format your response as a JSON object with the following structure:
  {
    "taglineOptions": ["tagline 1", "tagline 2", "tagline 3", "tagline 4", "tagline 5"],
    "headlineOptions": ["headline 1", "headline 2", "headline 3", "headline 4", "headline 5"],
    "marketingCopyOptions": ["copy 1", "copy 2", "copy 3", "copy 4", "copy 5"]
  }`,
});

const generateMarketingCopyFlow = ai.defineFlow(
  {
    name: 'generateMarketingCopyFlow',
    inputSchema: GenerateMarketingCopyInputSchema,
    outputSchema: GenerateMarketingCopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
