import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import type { SpecialOffer } from "@/lib/types"

interface SpecialOfferCardProps {
  offer: SpecialOffer
}

export default function SpecialOfferCard({ offer }: SpecialOfferCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={offer.image || "/placeholder.svg?height=200&width=400"}
          alt={offer.title}
          fill
          className="object-cover"
        />
        <Badge variant="destructive" className="absolute top-2 left-2">
          {offer.discountPercentage}% OFF
        </Badge>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
        <p className="text-muted-foreground mb-4">{offer.description}</p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Clock className="h-4 w-4" />
          <span>Offer ends: {new Date(offer.endDate).toLocaleDateString()}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">₹{offer.discountedPrice.toFixed(2)}</span>
          <span className="text-muted-foreground line-through">₹{offer.originalPrice.toFixed(2)}</span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button className="w-full" asChild>
          <Link href={`/products/${offer.productId}`}>Shop Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

