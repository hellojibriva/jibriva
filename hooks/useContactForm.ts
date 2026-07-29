"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  organization: z.string().trim().optional(),
  email: z.string().trim().min(1, "Please enter your email.").email("Enter a valid email address."),
  subject: z.string().trim().min(1, "Please enter a subject."),
  description: z.string().trim().min(1, "Please describe your project."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function useContactForm() {
  return useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      subject: "",
      description: "",
    },
  });
}
