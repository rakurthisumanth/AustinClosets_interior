"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { budgetOptions, projectTypeOptions } from "@/data/site";
import {
  hasValidationErrors,
  validateContactForm,
  type ValidationErrors,
} from "@/lib/validation";
import type { ContactFormData } from "@/types";
import { cn } from "@/lib/utils";

const initialForm: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  location: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    const nextErrors = validateContactForm(form);
    if (hasValidationErrors(nextErrors)) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string; errors?: ValidationErrors };

      if (!response.ok) {
        if (data.errors) setErrors(data.errors);
        setServerError(data.message || "Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
      setForm(initialForm);
    } catch {
      setServerError("Unable to send your request. Please try again shortly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div
        className="border border-border bg-ivory p-8 md:p-10"
        role="status"
        aria-live="polite"
      >
        <p className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-bronze">
          Request Received
        </p>
        <h3 className="font-display mt-4 text-3xl text-charcoal">Thank you.</h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
          We&apos;ve received your request and will be in touch shortly.
        </p>
        <button
          type="button"
          className="mt-8 text-[0.68rem] font-medium tracking-[0.16em] uppercase text-bronze underline-offset-4 hover:underline"
          onClick={() => setSuccess(false)}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="First Name"
          required
          error={errors.firstName}
          id="firstName"
        >
          <input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            value={form.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            className={fieldClass(!!errors.firstName)}
          />
        </Field>
        <Field label="Last Name" required error={errors.lastName} id="lastName">
          <input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            value={form.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            className={fieldClass(!!errors.lastName)}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email" required error={errors.email} id="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={fieldClass(!!errors.email)}
          />
        </Field>
        <Field label="Phone" required error={errors.phone} id="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={fieldClass(!!errors.phone)}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Project Type"
          required
          error={errors.projectType}
          id="projectType"
        >
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={(e) => updateField("projectType", e.target.value)}
            className={fieldClass(!!errors.projectType)}
          >
            <option value="">Select a project type</option>
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Approximate Budget" id="budget">
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={(e) => updateField("budget", e.target.value)}
            className={fieldClass(false)}
          >
            <option value="">Select a budget range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Location" id="location">
        <input
          id="location"
          name="location"
          autoComplete="address-level2"
          placeholder="City, State"
          value={form.location}
          onChange={(e) => updateField("location", e.target.value)}
          className={fieldClass(false)}
        />
      </Field>

      <Field label="Message" id="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={cn(fieldClass(false), "resize-y min-h-[8rem]")}
          placeholder="Tell us about your space and goals."
        />
      </Field>

      {serverError ? (
        <p className="text-sm text-red-700" role="alert">
          {serverError}
        </p>
      ) : null}

      <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "Sending..." : "Request a Consultation"}
      </Button>
    </form>
  );
}

function fieldClass(hasError: boolean) {
  return cn(
    "w-full border bg-cream px-4 py-3.5 text-sm text-charcoal outline-none transition-colors",
    "placeholder:text-stone/50 focus:border-bronze",
    hasError ? "border-red-600" : "border-border-strong",
  );
}

function Field({
  label,
  id,
  required,
  error,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[0.68rem] font-medium tracking-[0.16em] uppercase text-stone"
      >
        {label}
        {required ? <span className="text-bronze"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-xs text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
