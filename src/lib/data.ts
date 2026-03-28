export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  phone: string;
  category: string; // matches service slug
}

export const SAMPLE_ITEMS: ServiceItem[] = [
  // Tailoring
  {
    id: "t1",
    title: "Designer Bridal Blouse",
    description: "Expertly stitched bridal blouse with perfect fitting and neck patterns.",
    price: "₹1,200",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "tailoring"
  },
  {
    id: "t2",
    title: "Ladies Chudidar Stitching",
    description: "Traditional and modern chudidar designs stitched to your measurement.",
    price: "₹850",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "tailoring"
  },
  // Aari Work
  {
    id: "a1",
    title: "Heavy Bridal Aari Design",
    description: "Intricate gold thread work with stone and bead embellishments.",
    price: "₹4,500",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "aari-work"
  },
  {
    id: "a2",
    title: "Simple Neck Aari Work",
    description: "Minimalist yet elegant Aari designs for daily wear blouses.",
    price: "₹1,800",
    image: "https://images.unsplash.com/photo-1620794354252-09292db20b41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "aari-work"
  },
  // Beauty
  {
    id: "b1",
    title: "HD Bridal Makeup",
    description: "High-definition makeup for a flawless look on your special day.",
    price: "₹18,000",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "beauty-makeup"
  },
  {
    id: "b2",
    title: "Gold Facial & Cleanup",
    description: "Rejuvenating gold facial treatement for instant glow.",
    price: "₹2,500",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "beauty-makeup"
  },
  // Salon
  {
    id: "s1",
    title: "Premium Hair Coloring",
    description: "Root touch-up or full hair coloring with professional brands.",
    price: "₹3,000",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "hair-cutting-salon"
  },
  {
    id: "s2",
    title: "Bridal Hair Styling",
    description: "Elegant hairstyles for weddings and special occasions.",
    price: "₹2,500",
    image: "https://images.unsplash.com/photo-1522337300245-22765c142db3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "hair-cutting-salon"
  },
  // Designing
  {
    id: "d1",
    title: "Brand Logo Packaging",
    description: "Full branding kit including logo, business cards, and social headers.",
    price: "₹5,000",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "designing"
  },
  {
    id: "d2",
    title: "Visiting Card Design",
    description: "Premium double-sided visiting card designs with 3 revisions.",
    price: "₹800",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "designing"
  },
  // Photography
  {
    id: "p1",
    title: "Wedding Photography Kit",
    description: "Full day coverage with high-end cameras and professional editing.",
    price: "₹45,000",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "photography-camera"
  },
  {
    id: "p2",
    title: "Outdoor Photoshoot",
    description: "2-hour outdoor session for portraits or couples.",
    price: "₹5,000",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "photography-camera"
  },
  // Cakes
  {
    id: "c1",
    title: "Birthday Party Cake",
    description: "Freshly baked customized cream cake for your celebrations.",
    price: "₹800/kg",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "cakes"
  },
  {
    id: "c2",
    title: "Wedding Tier Cake",
    description: "Elegant 3-tier wedding cake with floral decorations.",
    price: "₹5,000+",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "cakes"
  },
  // Vehicles
  {
    id: "v1",
    title: "Luxury Wedding Car",
    description: "Premium car rental for wedding entry and couple transport.",
    price: "₹10,000",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "vehicles"
  },
  // Poultry
  {
    id: "po1",
    title: "Country Chicken (Koli)",
    description: "Fresh, healthy, and high-quality country chicken available daily.",
    price: "₹450/kg",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "poultry"
  },
  // Panthal
  {
    id: "pa1",
    title: "Event Panthal & Decor",
    description: "Traditional and modern panthal setup for weddings and functions.",
    price: "On Quote",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: "919876543210",
    category: "panthal"
  }
];

export const SERVICE_NAMES: Record<string, string> = {
  "tailoring": "Tailoring Services",
  "aari-work": "Aari Work Services",
  "beauty-makeup": "Beauty & Makeup Services",
  "hair-cutting-salon": "Hair Cutting & Salon",
  "designing": "Designing Services",
  "photography-camera": "Photography & Camera",
  "cakes": "Cake Services",
  "vehicles": "Vehicle Services",
  "poultry": "Poultry Services",
  "panthal": "Panthal Services"
};
