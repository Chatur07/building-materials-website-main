export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image?: string
  rating?: number
  isNew?: boolean
  discount: number
  material?: string
  dimensions?: string
  weight?: string
  sku: string
  stock: number
}

export interface Service {
  id: string
  title: string
  description: string
  image?: string
  features?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  category: string
  image?: string
  client: string
  location: string
  year: number
  size: string
  materialsUsed?: string[]
}

export interface Testimonial {
  id: string
  name: string
  company: string
  content: string
  rating: number
  avatar?: string
}

export interface SpecialOffer {
  id: string
  title: string
  description: string
  productId: string
  originalPrice: number
  discountedPrice: number
  discountPercentage: number
  image?: string
  startDate: string
  endDate: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  avatar?: string
  socialLinks?: {
    facebook?: string
    twitter?: string
    linkedin?: string
  }
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

