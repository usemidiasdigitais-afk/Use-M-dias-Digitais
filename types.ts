import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceDetail {
  heroImage: string;
  longDescription: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  ctaText: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details?: ServiceDetail;
}

export interface NicheProject {
  id: string;
  nicheName: string;
  description: string;
  imageUrl: string;
  features: string[];
  relatedServiceId: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}