export type ProjectCategory =
  | "closets-main"
  | "cabinets"
  | "closets"
  | "bedrooms"
  | "living-rooms"
  | "home-offices"
  | "storage"
  | "full-interiors";

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  image: string;
  imageAlt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  image: string;
  imageAlt: string;
  description: string;
  challenge: string;
  solution: string;
  materials: string[];
  gallery: { src: string; alt: string }[];
  beforeImage: string;
  afterImage: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
}

export interface SiteStats {
  yearsExperience: number;
  projectsCompleted: number;
  happyClients: number;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  location: string;
  message: string;
}
