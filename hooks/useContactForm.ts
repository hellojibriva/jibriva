"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { enquiryTypes } from "@/content/contact";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  organization: z.string().trim().optional(),
  email: z.string().trim().min(1, "Please enter your email.").email("Enter a valid email address."),
  enquiryType: z.enum(enquiryTypes, { message: "Please choose a type of enquiry." }),
  subject: z.string().trim().min(1, "Please enter a subject."),
  description: z.string().trim().min(1, "Please write a short message."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function useContactForm() {
  return useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      enquiryType: enquiryTypes[0],
      subject: "",
      description: "",
    },
  });
}
