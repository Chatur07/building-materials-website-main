"use server"

import { revalidatePath } from "next/cache"
import type { ContactFormData } from "./types"

export async function addToCart(productId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real application, this would add the product to the user's cart in the database
  console.log(`Adding product ${productId} to cart`)

  // Return success
  return { success: true }
}

export async function submitContactForm(formData: FormData) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Extract form data
  const data: ContactFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || undefined,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  }

  // In a real application, this would save the contact form submission to the database
  console.log("Contact form submission:", data)

  // Revalidate the contact page
  revalidatePath("/contact")

  // Return success
  return { success: true }
}

