"use server";

import {
  generateMarketingCopy,
  type GenerateMarketingCopyInput,
  type GenerateMarketingCopyOutput,
} from "@/ai/flows/generate-marketing-copy";
import { z } from "zod";

const GenerateMarketingCopyInputSchema = z.object({
  agencyDescription: z.string(),
});

export async function runGenerateMarketingCopy(
  input: GenerateMarketingCopyInput
): Promise<GenerateMarketingCopyOutput> {
  const validatedInput = GenerateMarketingCopyInputSchema.parse(input);
  const result = await generateMarketingCopy(validatedInput);
  return result;
}
