"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { runGenerateMarketingCopy } from "./actions";
import { type GenerateMarketingCopyOutput } from "@/ai/flows/generate-marketing-copy";
import { Loader2, Wand2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  agencyDescription: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function AICopywriterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<GenerateMarketingCopyOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agencyDescription: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResults(null);
    try {
      const data = await runGenerateMarketingCopy(values);
      setResults(data);
       toast({
        title: "Success!",
        description: "Your new marketing copy is ready.",
      });
    } catch (error) {
      console.error("Failed to generate copy:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to generate marketing copy. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      description: "Copied to clipboard!",
    });
  };

  const ResultCard = ({ title, options }: { title: string, options: string[] | undefined }) => (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {options && options.length > 0 ? (
          options.map((option, index) => (
            <div key={index} className="flex items-center justify-between gap-4 p-3 bg-secondary rounded-md">
              <p className="text-secondary-foreground">{option}</p>
              <Button variant="ghost" size="icon" onClick={() => copyToClipboard(option)}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          ))
        ) : (
          <p className="text-muted-foreground">No options generated.</p>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-12">
        <Wand2 className="mx-auto h-12 w-12 text-accent" />
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mt-4">
          AI-Powered Copywriter
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Describe your agency, and our AI will generate compelling taglines, headlines, and marketing copy in seconds.
        </p>
      </div>

      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardContent className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="agencyDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">Agency Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., We are a boutique design agency specializing in minimalist branding for luxury startups. We focus on clean aesthetics and powerful storytelling..."
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full text-lg py-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoading ? (
                  <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-6 w-6" />
                )}
                {isLoading ? "Generating..." : "Generate Copy"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {results && (
        <div className="mt-16 max-w-5xl mx-auto">
            <Separator className="my-8" />
            <div className="text-center mb-8">
                <h2 className="font-headline text-3xl font-bold">Your Results</h2>
                <p className="text-muted-foreground">Here are some creative options to get you started.</p>
            </div>
          <div className="space-y-8">
            <ResultCard title="Tagline Options" options={results.taglineOptions} />
            <ResultCard title="Headline Options" options={results.headlineOptions} />
            <ResultCard title="Marketing Copy Options" options={results.marketingCopyOptions} />
          </div>
        </div>
      )}
    </div>
  );
}
