import servicesData from "@/data/services.json";

export type ServiceItem = {
  id: string;
  title: string;
  category: string;
  slug: string;
  description: string;
  quote: string;
  price: number;
  features: string[];
};

export const services = servicesData as ServiceItem[];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs() {
  return services.map((service) => service.slug);
}
