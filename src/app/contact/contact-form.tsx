"use client";

import { useFormStatus } from "react-dom";
import { useEffect, useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type State } from "./actions";
import { ArrowRight } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? "Sending..." : "Send Message"}
      {!pending && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  );
}

export function ContactForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if(state.errors && Object.keys(state.errors).length > 0) {
        toast({
            variant: "destructive",
            title: "Error",
            description: state.message,
        });
      } else {
        toast({
            title: "Success!",
            description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <form action={dispatch} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="John Doe" required />
        {state.errors?.name &&
          state.errors.name.map((error: string) => (
            <p className="text-sm font-medium text-destructive" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
         {state.errors?.email &&
          state.errors.email.map((error: string) => (
            <p className="text-sm font-medium text-destructive" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Tell us about your project..." rows={5} required />
         {state.errors?.message &&
          state.errors.message.map((error: string) => (
            <p className="text-sm font-medium text-destructive" key={error}>
              {error}
            </p>
          ))}
      </div>
      <SubmitButton />
    </form>
  );
}
