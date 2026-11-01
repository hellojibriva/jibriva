"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { contactForm, enquiryTypes } from "@/content/contact";
import { useContactForm, type ContactFormValues } from "@/hooks/useContactForm";

const inputClasses =
  "w-full border border-input-border bg-ivory px-4 py-3 text-[15px] text-text outline-none focus-visible:border-navy focus-visible:ring-2 focus-visible:ring-navy/20";

/*
 * No server backend: on a valid submit the form opens the visitor's own email
 * app with the message pre-filled, addressed to siteConfig.contact.email.
 * Swap buildMailto() for a fetch() to Resend/Formspree once one is chosen.
 */
function buildMailto(data: ContactFormValues) {
  const subject = `[${data.enquiryType}] ${data.subject}`;
  const body = [
    data.description,
    "",
    "—",
    `Name: ${data.name}`,
    data.organization ? `Organisation: ${data.organization}` : null,
    `Email: ${data.email}`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useContactForm();

  const onSubmit = (data: ContactFormValues) => {
    window.location.assign(buildMailto(data));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-border p-9" role="status">
        <h2 className="text-[22px] font-bold text-navy">{contactForm.success.heading}</h2>
        <p className="mt-3 text-[15.5px] leading-relaxed text-text-muted">
          {contactForm.success.body}{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-gold-text hover:text-navy">
            {siteConfig.contact.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-[14px] font-semibold text-navy underline underline-offset-4"
        >
          Back to the form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
        <Field id="name" label={contactForm.fields.name.label} required error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder={contactForm.fields.name.placeholder}
            {...aria("name", true, errors.name?.message)}
            className={inputClasses}
            {...register("name")}
          />
        </Field>
        <Field id="organization" label={contactForm.fields.organization.label} error={errors.organization?.message}>
          <input
            id="organization"
            type="text"
            autoComplete="organization"
            placeholder={contactForm.fields.organization.placeholder}
            {...aria("organization", false, errors.organization?.message)}
            className={inputClasses}
            {...register("organization")}
          />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
        <Field id="email" label={contactForm.fields.email.label} required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder={contactForm.fields.email.placeholder}
            {...aria("email", true, errors.email?.message)}
            className={inputClasses}
            {...register("email")}
          />
        </Field>
        <Field id="enquiryType" label={contactForm.fields.enquiryType.label} required error={errors.enquiryType?.message}>
          <select
            id="enquiryType"
            {...aria("enquiryType", true, errors.enquiryType?.message)}
            className={inputClasses}
            {...register("enquiryType")}
          >
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="subject" label={contactForm.fields.subject.label} required error={errors.subject?.message}>
        <input
          id="subject"
          type="text"
          placeholder={contactForm.fields.subject.placeholder}
          {...aria("subject", true, errors.subject?.message)}
          className={inputClasses}
          {...register("subject")}
        />
      </Field>

      <Field id="description" label={contactForm.fields.description.label} required error={errors.description?.message}>
        <textarea
          id="description"
          rows={6}
          placeholder={contactForm.fields.description.placeholder}
          {...aria("description", true, errors.description?.message)}
          className={inputClasses}
          {...register("description")}
        />
      </Field>

      <div>
        <Button type="submit" disabled={isSubmitting}>
          {contactForm.submitLabel}
        </Button>
        <p className="mt-3 text-[13px] text-text-muted">
          Sending opens your email app with your message ready to go.
        </p>
      </div>
    </form>
  );
}

function aria(id: string, required: boolean, error?: string) {
  return {
    "aria-required": required || undefined,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${id}-error` : undefined,
  };
}

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[14px] font-semibold text-navy">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
