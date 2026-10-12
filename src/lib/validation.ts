import type { ContactFormData } from "@/types";

export type ValidationErrors = Partial<Record<keyof ContactFormData, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[\d\s()+-]{7,20}$/;

export function validateContactForm(data: ContactFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.firstName.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!phonePattern.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!data.projectType.trim()) {
    errors.projectType = "Please select a project type.";
  }

  return errors;
}

export function hasValidationErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0;
}
