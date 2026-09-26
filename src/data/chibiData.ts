export interface CreationItem {
  id: string;
  name: string;
  category: 'couples' | 'families' | 'pets' | 'personalized' | 'desk' | 'gifts';
  categoryLabel: string;
  description: string;
  image: string;
  badge?: string;
  suggestedPrompt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface GiftMoment {
  id: string;
  title: string;
  description: string;
  popularFor: string;
  icon: string;
}

export const BRAND_CONTACTS = {
  name: 'CHIBS & CO.',
  tagline: 'Hand-painted wooden dolls, made with love.',
  instagramHandle: '@chibs_n.co',
  instagramUrl: 'https://www.instagram.com/chibs_n.co/',
  whatsappNumber: '+94 76 770 3581',
  whatsappRaw: '94767703581',
  whatsappUrl: 'https://wa.me/94767703581',
  email: 'chibicuegallery@gmail.com',
  emailUrl: 'mailto:chibicuegallery@gmail.com',
  callUrl: 'tel:+94767703581',
  logo: '/src/assets/images/chibs_logo_badge_1790424045068.jpg',
};

// Image assets generated for the brand
export const IMAGES = {
  logo: '/src/assets/images/chibs_logo_badge_1790424045068.jpg',
  hero: '/src/assets/images/hero_sweet_chibis_1790422314987.jpg',
  couples: '/src/assets/images/chibi_couples_family_1790422327832.jpg',
  artistStudio: '/src/assets/images/chibi_artist_studio_1790422338113.jpg',
  workspace: '/src/assets/images/chibi_desk_workspace_1790422349719.jpg',
  giftBox: '/src/assets/images/chibi_gift_arrangement_1790422361236.jpg',
  workshop: '/src/assets/images/chibi_creative_workshop_1790422377531.jpg',
  petCompanion: '/src/assets/images/chibi_pet_companion_1790422390860.jpg',
  familyPortrait: '/src/assets/images/chibi_family_portrait_1790422402697.jpg',
};

export const CREATIONS_DATA: CreationItem[] = [
  {
    id: 'creation-couple',
    name: 'Custom Couple Chibis',
    category: 'couples',
    categoryLabel: 'Couples',
    description: 'Hand-painted characters created from your story. Capturing wedding outfits, anniversaries, or everyday moments.',
    image: IMAGES.couples,
    badge: 'Customizable',
    suggestedPrompt: 'Hello Chibs & Co.! I would love to order a Custom Couple Chibi set.',
  },
  {
    id: 'creation-family',
    name: 'Family Portrait Set',
    category: 'families',
    categoryLabel: 'Families',
    description: 'Cherish your whole family in miniature wooden form. Tailored hairstyles, outfits, and height hierarchy.',
    image: IMAGES.familyPortrait,
    badge: 'Customizable',
    suggestedPrompt: 'Hi Chibs & Co.! I am interested in a customized Family Chibi set.',
  },
  {
    id: 'creation-pet',
    name: 'Pet Companion Chibi',
    category: 'pets',
    categoryLabel: 'Pets',
    description: 'A tiny wooden version of your favourite companion. Hand-painted markings, collar colors, and joyful charm.',
    image: IMAGES.petCompanion,
    badge: 'Customizable',
    suggestedPrompt: 'Hello! I would love to get a custom painted Pet Chibi of my furry best friend.',
  },
  {
    id: 'creation-desk',
    name: 'Work Desk Chibi',
    category: 'desk',
    categoryLabel: 'Work Desk',
    description: 'A little personality for your workspace. Bringing warmth, smiles, and creative energy to your daily routine.',
    image: IMAGES.workspace,
    badge: 'Customizable',
    suggestedPrompt: 'Hi! I would like to order a Sweet Chibi for my work desk setup.',
  },
  {
    id: 'creation-gift',
    name: 'Bespoke Keepsake Box',
    category: 'gifts',
    categoryLabel: 'Gift Sets',
    description: 'Delicately packaged in natural kraft shredding with botanical twine and a personalized handwritten gift note.',
    image: IMAGES.giftBox,
    badge: 'Gift Ready',
    suggestedPrompt: 'Hello Chibs & Co.! I want to inquire about a personalized Gift Set for an upcoming occasion.',
  },
  {
    id: 'creation-personalized',
    name: 'Solo Character Chibi',
    category: 'personalized',
    categoryLabel: 'Personalized',
    description: 'Individually detailed with specific hobbies, uniforms, favorite patterns, glasses, or signature hairstyles.',
    image: IMAGES.artistStudio,
    badge: 'Customizable',
    suggestedPrompt: 'Hi Chibs & Co.! I would love to order a personalized Solo Chibi for a friend.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Sweet Chibi Collection',
    subtitle: 'Hand-painted wooden characters on solid oak',
    category: 'Studio Feature',
    image: IMAGES.hero,
    aspect: 'landscape',
  },
  {
    id: 'gal-2',
    title: 'Custom Couple Keepsake',
    subtitle: 'Bespoke wedding attire with floral embroidery patterns',
    category: 'Couples',
    image: IMAGES.couples,
    aspect: 'portrait',
  },
  {
    id: 'gal-3',
    title: 'Hand-Lettered & Painted Details',
    subtitle: 'Delicate fine brush strokes in the artisan studio',
    category: 'Behind The Scenes',
    image: IMAGES.artistStudio,
    aspect: 'portrait',
  },
  {
    id: 'gal-4',
    title: 'Four-Piece Family Set',
    subtitle: 'Crafted for a milestone anniversary celebration',
    category: 'Families',
    image: IMAGES.familyPortrait,
    aspect: 'landscape',
  },
  {
    id: 'gal-5',
    title: 'Desk Companion Chibis',
    subtitle: 'Adding organic warmth and smiles to creative workspaces',
    category: 'Workspace',
    image: IMAGES.workspace,
    aspect: 'portrait',
  },
  {
    id: 'gal-6',
    title: 'Furry Companions in Miniature',
    subtitle: 'Hand-painted dog and cat peg dolls with real fur markings',
    category: 'Pets',
    image: IMAGES.petCompanion,
    aspect: 'square',
  },
  {
    id: 'gal-7',
    title: 'Artisan Gift Presentation',
    subtitle: 'Eco-conscious packaging with botanical accents',
    category: 'Gift Packaging',
    image: IMAGES.giftBox,
    aspect: 'square',
  },
  {
    id: 'gal-8',
    title: 'Summer Creative Workshop',
    subtitle: 'Hands-on wooden doll painting sessions with joyful makers',
    category: 'Events & Workshops',
    image: IMAGES.workshop,
    aspect: 'landscape',
  },
];

export const GIFT_MOMENTS: GiftMoment[] = [
  {
    id: 'birthday',
    title: 'Birthday Surprise',
    description: 'Celebrate their unique style, hobbies, and favorite colors in a charming miniature wooden doll.',
    popularFor: 'Friends & Family',
    icon: 'Cake',
  },
  {
    id: 'anniversary',
    title: 'Anniversary Keepsake',
    description: 'Recreate a memorable anniversary trip outfit, proposal moment, or first date memory.',
    popularFor: 'Couples',
    icon: 'Heart',
  },
  {
    id: 'wedding',
    title: 'Wedding & Cake Topper',
    description: 'A timeless keepsake capturing the bride and groom attire, flowers, and smiles to treasure forever.',
    popularFor: 'Newlyweds',
    icon: 'Sparkles',
  },
  {
    id: 'friendship',
    title: 'Friendship Token',
    description: 'A sweet memento of your best friend to keep on their bookshelf or bedside table.',
    popularFor: 'Best Friends',
    icon: 'Users',
  },
  {
    id: 'pet-lovers',
    title: 'Pet Lovers',
    description: 'Commemorate beloved cats, dogs, or companion animals with lovingly matched markings.',
    popularFor: 'Animal Lovers',
    icon: 'PawPrint',
  },
  {
    id: 'work-desk',
    title: 'Workplace Addition',
    description: 'A pocket-sized companion to sit next to your monitor, bringing a smile on busy workdays.',
    popularFor: 'Colleagues & Creators',
    icon: 'Briefcase',
  },
  {
    id: 'special-moments',
    title: 'Special Milestones',
    description: 'Graduations, new beginnings, housewarmings, or personal achievements captured with love.',
    popularFor: 'Milestone Celebrations',
    icon: 'Trophy',
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: 't-1',
    quote: 'The Sweet Chibis captured our wedding outfits down to the tiniest lace detail on the dress. It now sits proudly on our mantelpiece and brings back that day every time we look at it.',
    author: '[Customer Name]',
    occasion: 'Wedding Keepsake',
    location: 'Custom Order',
  },
  {
    id: 't-2',
    quote: 'Ordered a custom chibi of my sister and her golden retriever for her birthday. Her reaction was priceless — tears of pure joy! The craftsmanship and packaging are exceptional.',
    author: '[Customer Name]',
    occasion: 'Birthday & Pet Chibi',
    location: 'Custom Order',
  },
  {
    id: 't-3',
    quote: 'Having our little desk chibis by our work monitors genuinely brightens up the daily grind. The wooden texture and hand-painted finish feel so warm and genuine.',
    author: '[Customer Name]',
    occasion: 'Workspace Companion',
    location: 'Custom Order',
  },
];
