export interface Service {
  id: string;
  title: string;
  slug: string;
  category: ServiceCategory;
  price: number;
  currency: string;
  description: string;
  features: string[];
  image: string;
  rating: number;
  reviews: number;
  duration: string;
  popular?: boolean;
}

export type ServiceCategory =
  | "Study Abroad"
  | "Test Prep"
  | "Visa & Docs"
  | "Scholarships"
  | "Career Guidance"
  | "Post Landing";

export interface Mentor {
  id: string;
  name: string;
  image: string;
  title: string;
  university: string;
  country: string;
  expertise: string[];
  bio: string;
  rating: number;
  reviews: number;
  sessionsCompleted: number;
  hourlyRate: number;
  languages: string[];
  servicesOffered: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  role: string;
  destination: string;
  quote: string;
  rating: number;
}

export interface Destination {
  id: string;
  name: string;
  code: string;
  flag: string;
  universities: number;
  services: number;
  description: string;
  image: string;
}
