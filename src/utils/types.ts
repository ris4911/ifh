// Global types comes here...
export type NavLinks = {
  name: string;
  href: string;
  icons?: string;
};

export type VideoType = {
  src: string;
  height?: number;
  width?: number;
};

export type Course = {
  id: number;
  title: string;
  image?: string;
  videoUrl?: string;
  originalPrice?: number;
  discountedPrice?: number;
  validity?: string;
};
