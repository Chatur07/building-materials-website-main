import type { Product, Service, Project, Testimonial, SpecialOffer, TeamMember } from "./types"

// Mock data for products with Indian currency
const products: Product[] = [
  {
    id: "p1",
    name: "Premium Hardwood Timber",
    description: "High-quality hardwood timber for construction and furniture making.",
    price: 6749, // Converted to INR
    category: "Lumber & Timber",
    image: "/timber.svg?height=300&width=300&text=Hardwood+Timber", // Replace with image of Indian teak or sal wood planks
    rating: 4.8,
    isNew: false,
    discount: 0,
    material: "Teak",
    dimensions: "2400mm x 200mm x 50mm",
    weight: "12kg",
    sku: "LT-001",
    stock: 150,
  },
  {
    id: "p2",
    name: "Structural Concrete Mix",
    description: "High-strength concrete mix for structural applications.",
    price: 3449, // Converted to INR
    category: "Concrete & Cement",
    image: "/concrete.svg?height=300&width=300&text=Concrete+Mix", // Replace with image of concrete mix bags with Indian branding
    rating: 4.6,
    isNew: false,
    discount: 10,
    material: "Portland Cement, Aggregates",
    dimensions: "25kg bag",
    weight: "25kg",
    sku: "CC-001",
    stock: 200,
  },
  {
    id: "p3",
    name: "Engineered Hardwood Flooring",
    description: "Premium engineered hardwood flooring for residential and commercial spaces.",
    price: 5999, // Converted to INR
    category: "Flooring",
    image: "/flooring.svg?height=300&width=300&text=Hardwood+Flooring", // Replace with image of engineered wood flooring in an Indian home setting
    rating: 4.9,
    isNew: true,
    discount: 0,
    material: "Teak with Plywood Base",
    dimensions: "1200mm x 190mm x 14mm",
    weight: "18kg per box",
    sku: "FL-001",
    stock: 75,
  },
  {
    id: "p4",
    name: "Thermal Insulation Panels",
    description: "High-performance thermal insulation panels for energy-efficient buildings.",
    price: 2624, // Converted to INR
    category: "Insulation",
    image: "/insulation.svg?height=300&width=300&text=Insulation+Panels", // Replace with image of insulation panels being installed in an Indian building
    rating: 4.7,
    isNew: false,
    discount: 15,
    material: "Expanded Polystyrene",
    dimensions: "1200mm x 600mm x 50mm",
    weight: "2kg per panel",
    sku: "IN-001",
    stock: 120,
  },
  {
    id: "p5",
    name: "Premium Ceramic Tiles",
    description: "Durable and stylish ceramic tiles for floors and walls.",
    price: 2249, // Converted to INR
    category: "Flooring",
    image: "/tiles.svg?height=300&width=300&text=Ceramic+Tiles", // Replace with image of Indian-made ceramic tiles with traditional or modern patterns
    rating: 4.5,
    isNew: false,
    discount: 0,
    material: "Ceramic",
    dimensions: "600mm x 600mm x 10mm",
    weight: "22kg per box",
    sku: "FL-002",
    stock: 180,
  },
  {
    id: "p6",
    name: "Weather-Resistant Exterior Paint",
    description: "Long-lasting exterior paint with excellent weather resistance for Indian climate.",
    price: 4499, // Converted to INR
    category: "Paint & Finishes",
    image: "/paints.svg?height=300&width=300&text=Exterior+Paint", // Replace with image of paint buckets with Indian branding
    rating: 4.8,
    isNew: true,
    discount: 5,
    material: "Acrylic",
    dimensions: "10L bucket",
    weight: "10.5kg",
    sku: "PF-001",
    stock: 90,
  },
  {
    id: "p7",
    name: "Solid Brass Door Hardware Set",
    description: "Complete set of high-quality brass door hardware with traditional Indian designs.",
    price: 9749, // Converted to INR
    category: "Hardware & Fasteners",
    image: "/hardware.svg?height=300&width=300&text=Door+Hardware", // Replace with image of ornate Indian brass door handles and fixtures
    rating: 4.9,
    isNew: false,
    discount: 0,
    material: "Solid Brass",
    dimensions: "Various",
    weight: "2.5kg",
    sku: "HF-001",
    stock: 45,
  },
  {
    id: "p8",
    name: "Premium Roof Shingles",
    description: "Durable asphalt roof shingles with excellent weather protection for Indian monsoon season.",
    price: 3749, // Converted to INR
    category: "Roofing Materials",
    image: "/roof.svg?height=300&width=300&text=Roof+Shingles", // Replace with image of roof shingles on an Indian home
    rating: 4.7,
    isNew: false,
    discount: 0,
    material: "Asphalt",
    dimensions: "1m² per pack",
    weight: "10kg per pack",
    sku: "RM-001",
    stock: 110,
  },
]

// Mock data for services
const services: Service[] = [
  {
    id: "s1",
    title: "Material Consultation",
    description: "Expert advice on selecting the right materials for your specific project requirements.",
    image: "/consult.svg?height=200&width=400&text=Material+Consultation", // Replace with image of Indian consultants discussing with clients
    features: [
      "One-on-one consultation with material experts",
      "Customized material recommendations",
      "Budget optimization",
      "Sustainability considerations",
    ],
  },
  {
    id: "s2",
    title: "Delivery Services",
    description: "Reliable and timely delivery of materials directly to your construction site anywhere in India.",
    image: "/delivery.svg?height=200&width=400&text=Delivery+Services", // Replace with image of delivery trucks with Indian branding
    features: [
      "Scheduled deliveries",
      "Real-time tracking",
      "Careful handling of materials",
      "Flexible delivery options",
    ],
  },
  {
    id: "s3",
    title: "Custom Cutting & Sizing",
    description: "Precision cutting and sizing services for lumber, glass, and other materials.",
    image: "/cutting.svg?height=200&width=400&text=Custom+Cutting", // Replace with image of workers cutting materials in an Indian workshop
    features: [
      "Precision cutting to your specifications",
      "Multiple material types supported",
      "Quick turnaround times",
      "Minimal waste",
    ],
  },
  {
    id: "s4",
    title: "Project Estimation",
    description: "Accurate material quantity estimation for your construction or renovation project.",
    image: "/project.svg?height=200&width=400&text=Project+Estimation", // Replace with image of Indian engineers reviewing blueprints
    features: [
      "Detailed material lists",
      "Cost estimates",
      "Waste factor calculations",
      "Alternative material suggestions",
    ],
  },
  {
    id: "s5",
    title: "Technical Support",
    description: "Expert technical assistance for material installation and application.",
    image: "/support.svg?height=200&width=400&text=Technical+Support", // Replace with image of Indian technical support staff helping customers
    features: [
      "Installation guidance",
      "Troubleshooting assistance",
      "Product specifications",
      "Best practices advice",
    ],
  },
  {
    id: "s6",
    title: "Bulk Ordering",
    description: "Special pricing and handling for large-scale construction projects across India.",
    image: "/bulk.svg?height=200&width=400&text=Bulk+Ordering", // Replace with image of large material stockpile at an Indian construction site
    features: ["Volume discounts", "Project-based pricing", "Scheduled deliveries", "Dedicated account manager"],
  },
]

// Update the projects with Indian locations
const projects: Project[] = [
  {
    id: "pr1",
    title: "Ashoka Residential Complex",
    description: "A modern residential complex featuring sustainable building materials.",
    longDescription:
      "The Ashoka Residential Complex is a showcase of modern sustainable construction. This project utilized our premium hardwood timber, energy-efficient insulation, and eco-friendly finishes to create a comfortable, environmentally responsible living space. The complex includes 24 residential units across 3 buildings, with shared green spaces and amenities.",
    category: "Residential",
    image: "/ashoka.svg?height=400&width=600&text=Residential+Complex", // Replace with image of a modern apartment complex in Pune
    client: "Ashoka Developments",
    location: "Pune, Maharashtra",
    year: 2022,
    size: "4,500 sq.m",
    materialsUsed: [
      "Premium Hardwood Timber",
      "Thermal Insulation Panels",
      "Weather-Resistant Exterior Paint",
      "Engineered Hardwood Flooring",
      "Premium Roof Shingles",
    ],
  },
  {
    id: "pr2",
    title: "Ganga Riverfront Office Tower",
    description: "A 15-story commercial office building with state-of-the-art materials.",
    longDescription:
      "The Ganga Riverfront Office Tower stands as a testament to modern commercial construction excellence. This 15-story building features our high-strength structural concrete, premium glass facades, and advanced insulation systems. The project prioritized energy efficiency and occupant comfort while maintaining a striking architectural presence on the city skyline.",
    category: "Commercial",
    image: "/ganga.svg?height=400&width=600&text=Office+Tower", // Replace with image of a modern office building in Kolkata
    client: "Metro Commercial Properties",
    location: "Kolkata, West Bengal",
    year: 2021,
    size: "12,000 sq.m",
    materialsUsed: [
      "Structural Concrete Mix",
      "Premium Glass Panels",
      "Steel Structural Elements",
      "Acoustic Ceiling Tiles",
      "Commercial Grade Flooring",
    ],
  },
  {
    id: "pr3",
    title: "Lodi Garden Pavilion",
    description: "A public pavilion constructed with sustainable and durable materials.",
    longDescription:
      "The Lodi Garden Pavilion serves as a community gathering space that harmoniously blends with its natural surroundings. Using our weather-resistant timber and sustainable building practices, this project demonstrates how construction can enhance public spaces while respecting the environment. The pavilion includes covered seating areas, information displays, and integrated landscaping.",
    category: "Public",
    image: "/lodi.svg?height=400&width=600&text=Park+Pavilion", // Replace with image of a pavilion in Lodi Gardens, Delhi
    client: "Delhi Parks Department",
    location: "New Delhi, Delhi",
    year: 2023,
    size: "350 sq.m",
    materialsUsed: [
      "Weather-Treated Timber",
      "Natural Stone Pavers",
      "Sustainable Composite Decking",
      "Solar Roof Panels",
      "Eco-Friendly Sealants",
    ],
  },
  {
    id: "pr4",
    title: "Heritage Haveli Restoration",
    description: "Careful restoration of a 19th-century heritage haveli using period-appropriate materials.",
    longDescription:
      "The Heritage Haveli Restoration project involved the meticulous renovation of a 19th-century traditional Indian mansion. Our team sourced and supplied historically accurate materials, including specially milled hardwood trim, period-appropriate fixtures, and custom-matched paint colors. The project successfully preserved the haveli's historical character while updating its infrastructure for modern living.",
    category: "Restoration",
    image: "/heritage.svg?height=400&width=600&text=Heritage+Haveli", // Replace with image of a restored haveli in Jaipur
    client: "Rajasthan Heritage Trust",
    location: "Jaipur, Rajasthan",
    year: 2022,
    size: "420 sq.m",
    materialsUsed: [
      "Reclaimed Hardwood",
      "Traditional Lime Plaster",
      "Reproduction Heritage Tiles",
      "Heritage Paint Colors",
      "Restored Original Fixtures",
    ],
  },
  {
    id: "pr5",
    title: "Greenview Shopping Mall",
    description: "A modern retail complex built with eco-friendly materials and energy-efficient design.",
    longDescription:
      "The Greenview Shopping Mall represents the future of retail construction, combining aesthetic appeal with environmental responsibility. This project utilized our sustainable building materials, energy-efficient windows, and solar-ready roofing systems. The 15-store complex includes outdoor gathering spaces, green roofs, and state-of-the-art water management systems.",
    category: "Commercial",
    image: "/mall.svg?height=400&width=600&text=Shopping+Mall", // Replace with image of a modern shopping mall in Bengaluru
    client: "Greenview Retail Developers",
    location: "Bengaluru, Karnataka",
    year: 2023,
    size: "8,200 sq.m",
    materialsUsed: [
      "Eco-Certified Concrete",
      "Recycled Steel Framing",
      "Energy-Efficient Glazing",
      "Sustainable Flooring",
      "Solar-Ready Roofing",
    ],
  },
  {
    id: "pr6",
    title: "Lakeside International School",
    description: "A new educational facility built with durable, child-friendly materials.",
    longDescription:
      "The Lakeside International School project focused on creating a safe, inspiring learning environment for students. Our team supplied non-toxic, durable materials that meet the highest safety standards while providing excellent acoustic properties and natural lighting. The school features flexible learning spaces, a library, gymnasium, and outdoor educational areas.",
    category: "Educational",
    image: "/school.svg?height=400&width=600&text=International+School", // Replace with image of a modern school building in Chennai
    client: "Lakeside Education Trust",
    location: "Chennai, Tamil Nadu",
    year: 2021,
    size: "5,800 sq.m",
    materialsUsed: [
      "Non-Toxic Flooring",
      "Acoustic Wall Panels",
      "Impact-Resistant Materials",
      "Low-VOC Paints",
      "Durable Hardware",
    ],
  },
]

// Update the testimonials with Indian names
const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Amit Kumar",
    company: "Kumar Construction",
    content:
      "BuildMaster India has been our go-to supplier for over 5 years. Their materials are consistently high-quality, and their delivery is always on time. The team's expertise has been invaluable for our projects.",
    rating: 5,
    avatar: "/avatar.svg?height=100&width=100&text=AK", // Replace with professional headshot of an Indian businessman
  },
  {
    id: "t2",
    name: "Sanjana Reddy",
    company: "Reddy Architecture",
    content:
      "As an architect, I need suppliers who understand the importance of both aesthetics and performance. BuildMaster India excels in both areas, offering beautiful materials that meet our strict specifications.",
    rating: 5,
    avatar: "/avatar.svg?height=100&width=100&text=SR", // Replace with professional headshot of an Indian female architect
  },
  {
    id: "t3",
    name: "Deepak Joshi",
    company: "Homeowner",
    content:
      "I was renovating my home and knew nothing about building materials. The team at BuildMaster India took the time to educate me and help me make informed decisions. My renovation turned out better than I imagined!",
    rating: 4,
    avatar: "/avatar.svg?height=100&width=100&text=DJ", // Replace with image of an Indian homeowner
  },
  {
    id: "t4",
    name: "Meera Iyer",
    company: "Iyer Builders",
    content:
      "The quality of materials from BuildMaster India is unmatched. We've tried other suppliers, but we always come back for the consistency and reliability. Their technical support team is also incredibly helpful.",
    rating: 5,
    avatar: "/avatar.svg?height=100&width=100&text=MI", // Replace with professional headshot of an Indian businesswoman
  },
  {
    id: "t5",
    name: "Ravi Malhotra",
    company: "Malhotra Renovations",
    content:
      "BuildMaster India's custom cutting service has saved us countless hours on the job site. Their precision is impressive, and it allows us to work more efficiently. Highly recommended for any contractor.",
    rating: 4,
    avatar: "/avatar.svg?height=100&width=100&text=RM", // Replace with image of an Indian contractor
  },
  {
    id: "t6",
    name: "Lakshmi Nair",
    company: "Nair Properties",
    content:
      "As a property developer, I need reliable partners who can handle large orders. BuildMaster India has never let us down, even with our most demanding projects. Their bulk ordering system is seamless.",
    rating: 5,
    avatar: "/avatar.svg?height=100&width=100&text=LN", // Replace with professional headshot of an Indian female property developer
  },
]

// Mock data for special offers with Indian currency
const specialOffers: SpecialOffer[] = [
  {
    id: "so1",
    title: "Summer Flooring Sale",
    description:
      "Get 15% off on all hardwood and engineered flooring products. Perfect timing for your summer renovation projects.",
    productId: "p3",
    originalPrice: 5999,
    discountedPrice: 5099,
    discountPercentage: 15,
    image: "/flooring_sale.svg?height=300&width=600&text=Flooring+Sale", // Replace with image of flooring products with sale banner in Hindi/English
    startDate: "2025-06-01",
    endDate: "2025-07-31",
  },
  {
    id: "so2",
    title: "Concrete Mix Bundle Deal",
    description:
      "Buy 10 bags of our Structural Concrete Mix and get 2 bags free. Limited time offer for large projects.",
    productId: "p2",
    originalPrice: 34490,
    discountedPrice: 27592,
    discountPercentage: 20,
    image: "/concrete_bags.svg?height=300&width=600&text=Concrete+Bundle", // Replace with image of concrete bags stacked with promotional banner
    startDate: "2025-05-15",
    endDate: "2025-06-30",
  },
  {
    id: "so3",
    title: "Exterior Paint Promotion",
    description: "Purchase our Weather-Resistant Exterior Paint and receive a free set of premium brushes and rollers.",
    productId: "p6",
    originalPrice: 4499,
    discountedPrice: 4499,
    discountPercentage: 0,
    image: "/paint_buckets.svg?height=300&width=600&text=Paint+Promotion", // Replace with image of paint buckets with free brushes and rollers
    startDate: "2025-06-15",
    endDate: "2025-07-15",
  },
  {
    id: "so4",
    title: "Insulation Special",
    description: "Save 15% on all insulation products. Prepare your building for energy efficiency and comfort.",
    productId: "p4",
    originalPrice: 2624,
    discountedPrice: 2230,
    discountPercentage: 15,
    image: "/insulation_products.svg?height=300&width=600&text=Insulation+Special", // Replace with image of insulation products with promotional banner
    startDate: "2025-05-01",
    endDate: "2025-06-30",
  },
]

// Update the team members with Indian names
const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "Rajesh Sharma",
    position: "CEO & Founder",
    avatar: "/avatar.svg?height=300&width=300&text=RS", // Replace with professional headshot of an Indian businessman in formal attire
    socialLinks: {
      linkedin: "https://linkedin.com/in/rajeshsharma",
      twitter: "https://twitter.com/rajeshsharma",
    },
  },
  {
    id: "tm2",
    name: "Priya Patel",
    position: "Operations Director",
    avatar: "/avatar.svg?height=300&width=300&text=PP", // Replace with professional headshot of an Indian businesswoman in formal attire
    socialLinks: {
      linkedin: "https://linkedin.com/in/priyapatel",
    },
  },
  {
    id: "tm3",
    name: "Vikram Singh",
    position: "Head of Sales",
    avatar: "/avatar.svg?height=300&width=300&text=VS", // Replace with professional headshot of an Indian businessman in business casual attire
    socialLinks: {
      linkedin: "https://linkedin.com/in/vikramsingh",
      twitter: "https://twitter.com/vikramsingh",
    },
  },
  {
    id: "tm4",
    name: "Ananya Desai",
    position: "Technical Specialist",
    avatar: "/avatar.svg?height=300&width=300&text=AD", // Replace with professional headshot of an Indian female engineer
    socialLinks: {
      linkedin: "https://linkedin.com/in/ananyaDesai",
    },
  },
  {
    id: "tm5",
    name: "Arjun Mehta",
    position: "Logistics Manager",
    avatar: "/avatar.svg?height=300&width=300&text=AM", // Replace with professional headshot of an Indian logistics professional
    socialLinks: {
      linkedin: "https://linkedin.com/in/arjunmehta",
    },
  },
  {
    id: "tm6",
    name: "Divya Kapoor",
    position: "Customer Service Manager",
    avatar: "/avatar.svg?height=300&width=300&text=DK", // Replace with professional headshot of an Indian customer service professional
    socialLinks: {
      linkedin: "https://linkedin.com/in/divyakapoor",
      twitter: "https://twitter.com/divyakapoor",
    },
  },
  {
    id: "tm7",
    name: "Rahul Verma",
    position: "Product Specialist",
    avatar: "/avatar.svg?height=300&width=300&text=RV", // Replace with professional headshot of an Indian product specialist
    socialLinks: {
      linkedin: "https://linkedin.com/in/rahulverma",
    },
  },
  {
    id: "tm8",
    name: "Neha Gupta",
    position: "Marketing Director",
    avatar: "/avatar.svg?height=300&width=300&text=NG", // Replace with professional headshot of an Indian marketing professional
    socialLinks: {
      linkedin: "https://linkedin.com/in/nehagupta",
      twitter: "https://twitter.com/nehagupta",
    },
  },
]

// Data retrieval functions
export async function getProducts(limit?: number) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (limit) {
    return products.slice(0, limit)
  }

  return products
}

export async function getFeaturedProducts() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Return a subset of products marked as featured
  return products.filter((product, index) => index % 2 === 0).slice(0, 4)
}

export async function getProductById(id: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return products.find((product) => product.id === id)
}

export async function getRelatedProducts(category: string, excludeId?: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return products
    .filter((product) => product.category === category && (!excludeId || product.id !== excludeId))
    .slice(0, 4)
}

export async function getServices(limit?: number) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (limit) {
    return services.slice(0, limit)
  }

  return services
}

export async function getProjects(limit?: number) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (limit) {
    return projects.slice(0, limit)
  }

  return projects
}

export async function getProjectById(id: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return projects.find((project) => project.id === id)
}

export async function getRelatedProjects(category: string, excludeId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return projects.filter((project) => project.category === category && project.id !== excludeId).slice(0, 3)
}

export async function getTestimonials(limit?: number) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (limit) {
    return testimonials.slice(0, limit)
  }

  return testimonials
}

export async function getSpecialOffers(limit?: number) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (limit) {
    return specialOffers.slice(0, limit)
  }

  return specialOffers
}

export async function getTeamMembers() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return teamMembers
}

