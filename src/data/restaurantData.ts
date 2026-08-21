export const RESTAURANT_INFO = {
  name: 'Kudrat Unlimited Pizza Hub',
  tagline: 'Eat More. Smile More.',
  openedDate: '13 August 2026',
  servingText: 'Serving food lovers in Ahmedabad since August 2026.',
  phone: '+91 7228871304',
  phoneTel: 'tel:+917228871304',
  address: 'Shop No. A/101,102, First Floor, Galaxy Central, Opp. D-Mart, Naroda Dahegam Road, Circle, Sardar Patel Ring Road, Hanspura, Ahmedabad, Gujarat – 382330',
  openingHours: '11:00 AM – 11:00 PM',
  openDaily: 'Open Daily: 11:00 AM – 11:00 PM',
  googleMapsUrl: 'https://share.google/6fobnM4huemCzDzh0',
  whatsappUrl: 'https://wa.me/917228871304',
  instagramUrl: 'https://www.instagram.com/kudratpizzahub/',
  instagramHandle: '@kudratpizzahub',
  mapEmbedQuery: 'Galaxy+Central+Hanspura+Ahmedabad+Gujarat+382330',
};

export interface InstagramPost {
  id: string;
  type: 'reel' | 'post';
  title: string;
  caption: string;
  thumbnail: string;
  likes: string;
  comments: string;
  views?: string;
  tag: string;
  postUrl: string;
  date: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-reel-1',
    type: 'reel',
    title: '🔥 Cheesy Unlimited Pizza Pulls!',
    caption: 'Ahmedabad’s most satisfying cheese pull! 🍕 Unlimited hot 4-types pan pizzas at Kudrat Unlimited Pizza Hub. Visit Hanspura today! #AhmedabadFood #UnlimitedPizza #KudratPizzaHub',
    thumbnail: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    likes: '1.4k',
    comments: '88',
    views: '24.5k',
    tag: 'Trending Reel',
    postUrl: 'https://www.instagram.com/kudratpizzahub/',
    date: 'Latest Reel',
  },
  {
    id: 'ig-reel-2',
    type: 'reel',
    title: '🥗 20+ Cold Salad Counter Tour',
    caption: 'Fresh, crunchy, and endless! Explore our colorful salad bar with Italian pasta salad, Russian salad, sprouted beans, and tangy corn. #SaladBar #UnlimitedBuffet',
    thumbnail: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    likes: '980',
    comments: '42',
    views: '16.2k',
    tag: 'Buffet Tour',
    postUrl: 'https://www.instagram.com/kudratpizzahub/',
    date: 'Recent Reel',
  },
  {
    id: 'ig-post-3',
    type: 'post',
    title: '🍟 Crispy French Fries & Sizzling Starters',
    caption: 'Golden french fries, garlic bread, crispy spring rolls and mouth-watering starters ready to serve unlimited! What’s your favorite starter? #Foodie #Ahmedabad',
    thumbnail: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80',
    likes: '1.1k',
    comments: '56',
    tag: 'Hot Starters',
    postUrl: 'https://www.instagram.com/kudratpizzahub/',
    date: 'Featured Post',
  },
  {
    id: 'ig-reel-4',
    type: 'reel',
    title: '🍨 Warm Chocolate Brownie with Vanilla Ice Cream',
    caption: 'The sweetest grand finale to your dinner buffet! Warm rich chocolate brownie topped with creamy vanilla ice cream. 🍫🍦 #DessertLover #BrownieIceCream',
    thumbnail: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    likes: '2.1k',
    comments: '114',
    views: '32.8k',
    tag: 'Dessert Special',
    postUrl: 'https://www.instagram.com/kudratpizzahub/',
    date: 'Viral Reel',
  },
  {
    id: 'ig-post-5',
    type: 'post',
    title: '🎉 Family & Friends Unlimited Dining Celebration',
    caption: 'Creating unforgettable memories with great food and good vibes! Pure Vegetarian with Jain options available. Book your table or walk in! #Hanspura #AhmedabadEats',
    thumbnail: 'https://lh3.googleusercontent.com/d/1OYl9dO11JOiy1zNs9SLTbzHliV828PBe',
    likes: '1.8k',
    comments: '73',
    tag: 'Hub Moments',
    postUrl: 'https://www.instagram.com/kudratpizzahub/',
    date: 'Community',
  },
];

export const BUFFET_PRICING = {
  lunch: {
    title: 'Lunch',
    timeSlot: '11:00 AM – 03:30 PM',
    kids: {
      label: 'Kids – Age 3 to 8 Years',
      originalPrice: 219,
      discountedPrice: 159,
    },
    adult: {
      label: 'Adult',
      originalPrice: 249,
      discountedPrice: 199,
    },
    description: 'Perfect afternoon feast with unlimited pizzas, hot starters, fresh cold salads, and chilled drinks.',
  },
  dinner: {
    title: 'Dinner',
    timeSlot: '06:30 PM – 11:00 PM',
    kids: {
      label: 'Kids – Age 3 to 8 Years',
      originalPrice: 249,
      discountedPrice: 179,
    },
    adult: {
      label: 'Adult',
      originalPrice: 299,
      discountedPrice: 249,
    },
    description: 'Grand evening unlimited spread with all hot pizzas, starters, salads, chat, brownie & ice cream.',
  },
  disclaimer: 'GST Extra | Wastage Charged Extra | Only Available Items Will Be Served',
};

export interface IncludedCategory {
  id: string;
  title: string;
  count: string;
  category: string;
  description: string;
  image: string;
}

export const INCLUDED_ITEMS: IncludedCategory[] = [
  {
    id: 'soup',
    title: 'Types of Soup',
    count: '02',
    category: 'Warm Comfort',
    description: 'Freshly prepared hot and comforting soups served with crispy croutons.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'salad',
    title: 'Types of Cold Salad',
    count: '20',
    category: 'Fresh & Crisp',
    description: 'Exotic Russian, Macaroni, Sweet Corn, Coleslaw, Herb and healthy salad counter.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'starters',
    title: 'Types of Hot Starter',
    count: '12',
    category: 'Hot & Crispy',
    description: 'Delicious hot starters, crispy finger foods, and freshly prepared bites.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'bbq',
    title: 'Type of BBQ',
    count: '01',
    category: 'Smoky Flavors',
    description: 'Tender marinated barbecued delights with signature spices.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'cold-drinks',
    title: 'Types of Cold Drinks',
    count: '02',
    category: 'Chilled Refreshment',
    description: 'Unlimited chilled soft drinks to complement your meal.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'chat',
    title: 'Types of Chat',
    count: '05',
    category: 'Tangy Street Chat',
    description: 'Crispy, tangy, and sweet Ahmedabad street-style chaat varieties.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'garlic-bread',
    title: 'Types of Garlic Bread',
    count: '02',
    category: 'Melted Cheese',
    description: 'Crispy toasted golden garlic bread and supreme cheese garlic bread.',
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pizza',
    title: 'Types of Pizza',
    count: '04',
    category: 'Oven Fresh Slices',
    description: 'Freshly baked pan pizzas with rich molten mozzarella cheese and generous toppings.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pastry',
    title: 'Types of Pastry',
    count: '02',
    category: 'Sweet Indulgence',
    description: 'Soft and delightful sweet pastry slices to treat your sweet tooth.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fries-panipuri',
    title: 'French Fries & Panipuri',
    count: 'Combo',
    category: 'All-Time Favorites',
    description: 'Golden salted French fries paired with refreshing, spicy and tangy panipuri.',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'dessert-brownie',
    title: 'Brownie Mix Ice Cream',
    count: 'Dessert',
    category: 'Grand Finale',
    description: 'Rich warm chocolate brownie served with velvety vanilla ice cream.',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=600&q=80',
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-pizza',
    title: 'Oven Fresh Pan Pizza',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g-garlic-bread',
    title: 'Supreme Cheese Garlic Bread',
    category: 'Garlic Bread',
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g-starters',
    title: 'Hot Starters & Finger Foods',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g-salads',
    title: '20+ Fresh Cold Salads Counter',
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g-fries',
    title: 'Crispy Golden French Fries',
    category: 'French Fries',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g-chat',
    title: 'Tangy Street Chat & Panipuri',
    category: 'Chat',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g-drinks',
    title: 'Chilled Cold Drinks',
    category: 'Cold Drinks',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g-pastries',
    title: 'Delightful Pastries',
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g-icecream',
    title: 'Brownie Mix Ice Cream',
    category: 'Ice Cream',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=80',
  },
];
