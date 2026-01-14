import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Artisan Stand Mixer',
    price: 499.00,
    category: 'Appliances',
    image: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?q=80&w=1000&auto=format&fit=crop',
    description: 'Professional-grade stand mixer with 10 speeds and 5qt polished stainless steel bowl.',
    rating: 4.9,
    stock: 25
  },
  {
    id: '2',
    name: 'Cast Iron Dutch Oven',
    price: 129.99,
    category: 'Kitchenware',
    image: 'https://images.unsplash.com/photo-1585250462002-3c874246835a?q=80&w=1000&auto=format&fit=crop',
    description: 'Enameled cast iron dutch oven, perfect for slow cooking and bread baking. 6 Quart.',
    rating: 4.8,
    stock: 45
  },
  {
    id: '3',
    name: 'Barista Pro Espresso Machine',
    price: 799.95,
    category: 'Appliances',
    image: 'https://images.unsplash.com/photo-1590458872533-e9d685292415?q=80&w=1000&auto=format&fit=crop',
    description: 'Integrated conical burr grinder and precise espresso extraction.',
    rating: 4.9,
    stock: 12
  },
  {
    id: '4',
    name: 'Japanese Chef Knife Set',
    price: 249.50,
    category: 'Kitchenware',
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?q=80&w=1000&auto=format&fit=crop',
    description: 'High-carbon stainless steel Damascus blades with ergonomic Pakkawood handles.',
    rating: 4.7,
    stock: 30
  },
  {
    id: '5',
    name: 'Smart Air Fryer Toaster Oven',
    price: 229.00,
    category: 'Appliances',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1000&auto=format&fit=crop',
    description: '13-in-1 functionality with Wi-Fi connectivity and app control.',
    rating: 4.6,
    stock: 50
  },
  {
    id: '6',
    name: 'Ceramic Non-Stick Cookware',
    price: 349.00,
    category: 'Kitchenware',
    image: 'https://images.unsplash.com/photo-1583345237708-8dc04c5520e5?q=80&w=1000&auto=format&fit=crop',
    description: 'Non-toxic, eco-friendly ceramic coating. 12-piece set in Terracotta.',
    rating: 4.8,
    stock: 18
  }
];

export const MOCK_ADMIN_STATS = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 2000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];