export interface BuffetMeal {
  title: string;
  timeSlot: string;
  kids: {
    label: string;
    originalPrice: number;
    discountedPrice: number;
  };
  adult: {
    label: string;
    originalPrice: number;
    discountedPrice: number;
  };
  description: string;
}

export interface IncludedCategory {
  id: string;
  title: string;
  count: string;
  category: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}
