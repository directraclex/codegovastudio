"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
};

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error: Please check your input and try again.",
    };
  }

  // In a real application, you would use a service like Resend or Nodemailer
  // to send the email to the specified address.
  // For this prototype, we'll log the action to the console.
  console.log(`Simulating sending email to support@codegova.site`);
  console.log("Contact form submitted:", validatedFields.data);

  return {
    message: "Thank you for your message! We will get back to you soon.",
  };
}
