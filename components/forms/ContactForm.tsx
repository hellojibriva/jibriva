"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { contactForm } from "@/content/contact";
import { useContactForm, type ContactFormValues } from "@/hooks/useContactForm";

/*
 * No submission backend is wired yet (see DEPLOYMENT_GUIDE.md §3 — pick one
 * of Formspree/Resend/EmailJS via env vars). This client-side success-state
 * swap is the documented current behavior; wiring a real provider is a
 * follow-up task, not a launch blocker.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useContactForm();

  const onSubmit = async (data: ContactFormValues, honeypot: string) => {
    if (honeypot) return; // silently drop likely-bot submissions
    await new Promise((resolve) => setTimeout(resolve, 300));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-border p-9">
        <h2 className="text-[22px] font-bold text-navy">{contactForm.success.heading}</h2>
        <p className="mt-3 text-[15.5px] leading-relaxed text-text-muted">
          {contactForm.success.body}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit((data, event) => {
        const honeypot = (event?.target as HTMLFormElement)?.elements.namedItem(
          "company",
        ) as HTMLInputElement | null;
        return onSubmit(data, honeypot?.value ?? "");
      })}
      noValidate
      className="space-y-6"
    >
      {/* Honeypot — real users never see or fill this field. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
        <Field
          id="name"
          label={contactForm.fields.name.label}
          placeholder={contactForm.fields.name.placeholder}
          required
          error={errors.name?.message}
          registration={register("name")}
        />
        <Field
          id="organization"
          label={contactForm.fields.organization.label}
          placeholder={contactForm.fields.organization.placeholder}
          error={errors.organization?.message}
          registration={register("organization")}
        />
      </div>

      <Field
        id="email"
        type="email"
        label={contactForm.fields.email.label}
        placeholder={contactForm.fields.email.placeholder}
        required
        error={errors.email?.message}
        registration={register("email")}
      />

      <Field
        id="subject"
        label={contactForm.fields.subject.label}
        placeholder={contactForm.fields.subject.placeholder}
        required
        error={errors.subject?.message}
        registration={register("subject")}
      />

      <div>
        <label htmlFor="description" className="mb-2 block text-[14px] font-semibold text-navy">
          {contactForm.fields.description.label}
          <span aria-hidden="true"> *</span>
        </label>
        <textarea
          id="description"
          rows={5}
          placeholder={contactForm.fields.description.placeholder}
          aria-required="true"
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? "description-error" : undefined}
          className="w-full border border-input-border px-4 py-3 text-[15px] text-text outline-none focus-visible:border-navy focus-visible:ring-2 focus-visible:ring-navy/20"
          {...register("description")}
        />
        {errors.description && (
          <p id="description-error" className="mt-1.5 text-[13px] text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {contactForm.submitLabel}
      </Button>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  error?: string;
  registration: ReturnType<ReturnType<typeof useContactForm>["register"]>;
}

function Field({ id, label, placeholder, type = "text", required, error, registration }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[14px] font-semibold text-navy">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full border border-input-border px-4 py-3 text-[15px] text-text outline-none focus-visible:border-navy focus-visible:ring-2 focus-visible:ring-navy/20"
        {...registration}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
