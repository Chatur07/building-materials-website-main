"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Check } from "lucide-react"
import { addToCart } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"

interface AddToCartButtonProps {
  productId: string
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export default function AddToCartButton({
  productId,
  variant = "default",
  size = "default",
  className = "w-full",
}: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const { toast } = useToast()

  async function handleAddToCart() {
    setIsLoading(true)
    try {
      await addToCart(productId)
      setIsAdded(true)
      toast({
        title: "Added to cart",
        description: "The product has been added to your cart",
      })

      // Reset the button after 2 seconds
      setTimeout(() => {
        setIsAdded(false)
      }, 2000)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add the product to your cart",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button variant={variant} size={size} className={className} onClick={handleAddToCart} disabled={isLoading}>
      {isAdded ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Added
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </>
      )}
    </Button>
  )
}

