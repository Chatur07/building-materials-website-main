import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import type { Product } from "@/lib/types"
import AddToCartButton from "./add-to-cart-button"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Link href={`/products/${product.id}`}>
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg?height=300&width=300"}
              alt={product.name}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>
        {product.isNew && <Badge className="absolute top-2 right-2">New</Badge>}
        {product.discount > 0 && (
          <Badge variant="destructive" className="absolute top-2 left-2">
            {product.discount}% OFF
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full"
        >
          <Heart className="h-5 w-5" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="space-y-1">
          <Link href={`/products/${product.id}`} className="font-medium hover:underline">
            {product.name}
          </Link>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          {product.discount > 0 ? (
            <div className="flex items-center gap-2">
              <span className="font-bold">₹{(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
              <span className="text-sm text-muted-foreground line-through">₹{product.price.toFixed(2)}</span>
            </div>
          ) : (
            <span className="font-bold">₹{product.price.toFixed(2)}</span>
          )}
          {product.rating && (
            <div className="flex items-center">
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-yellow-400 ml-1">★</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <AddToCartButton productId={product.id} />
      </CardFooter>
    </Card>
  )
}

