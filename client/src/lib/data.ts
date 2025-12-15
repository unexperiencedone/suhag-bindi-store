import heroImage from '@assets/generated_images/luxurious_indian_jewelry_on_maroon_velvet.png';
import bindiImage from '@assets/generated_images/traditional_indian_bindis_on_white.png';
import mangalsutraImage from '@assets/generated_images/gold_mangalsutra_necklace.png';
import earringsImage from '@assets/generated_images/gold_jhumka_earrings.png';

export const CATEGORIES = [
  { id: 'bindi', name: 'Fancy Bindi', image: bindiImage },
  { id: 'mangalsutra', name: 'Mangalsutra', image: mangalsutraImage },
  { id: 'earrings', name: 'Earrings', image: earringsImage },
  { id: 'chains', name: 'Chains & Lockets', image: heroImage },
  { id: 'bracelets', name: 'Bracelets', image: heroImage },
  { id: 'nazaraiya', name: 'Nazaraiya (Kids)', image: heroImage },
  { id: 'crystal', name: 'Crystal Mala', image: heroImage },
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'Bridal Velvet Bindi Set',
    category: 'bindi',
    image: bindiImage,
    description: 'Premium velvet bindis with stone work, perfect for bridal wear.',
    featured: true,
  },
  {
    id: 2,
    name: 'Gold Plated Mangalsutra',
    category: 'mangalsutra',
    image: mangalsutraImage,
    description: 'Traditional black bead mangalsutra with gold plated pendant.',
    featured: true,
  },
  {
    id: 3,
    name: 'Antique Jhumka Earrings',
    category: 'earrings',
    image: earringsImage,
    description: 'Handcrafted antique finish jhumka earrings.',
    featured: true,
  },
  {
    id: 4,
    name: 'Daily Wear Stone Bindi',
    category: 'bindi',
    image: bindiImage,
    description: 'Simple and elegant stone bindis for daily use. Available in multiple colors.',
    featured: false,
  },
  {
    id: 5,
    name: 'Crystal Mala Necklace',
    category: 'crystal',
    image: heroImage,
    description: 'Pure crystal mala for spiritual and fashion wear.',
    featured: false,
  },
  {
    id: 6,
    name: 'Baby Nazaraiya Bracelet',
    category: 'nazaraiya',
    image: heroImage,
    description: 'Black bead protection bracelets for infants.',
    featured: true,
  },
];

export const MOCK_STATS = [
  { label: 'Total Products', value: '124' },
  { label: 'Pending Enquiries', value: '12' },
  { label: 'Total Views', value: '1.2k' },
];

export const MOCK_ENQUIRIES = [
  { id: 1, name: 'Rahul Gupta', phone: '+91 9876543210', product: 'Bridal Velvet Bindi Set', date: '2023-10-25', status: 'Pending' },
  { id: 2, name: 'Priya Singh', phone: '+91 9876543211', product: 'Gold Plated Mangalsutra', date: '2023-10-24', status: 'Contacted' },
  { id: 3, name: 'Amit Kumar', phone: '+91 9876543212', product: 'Bulk Order - Bindi', date: '2023-10-23', status: 'Closed' },
];
