import { getProductById, getRelatedProducts } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import ProductCard from "@/components/product-card"
import { Heart } from "lucide-react"
import AddToCartButton from "@/components/add-to-cart-button"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found",
    }
  }

  return {
    title: `${product.name} - BuildMaster India`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.category)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="aspect-square relative overflow-hidden rounded-lg border">
            <Image
              src={product.image || "/about.svg?height=600&width=600"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square relative overflow-hidden rounded-lg border">
                <Image
                  src={product.image || `/placeholder.svg?height=150&width=150&text=Image${i}`}
                  alt={`${product.name} view ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl font-semibold mt-2">₹{product.price.toFixed(2)}</p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-2">
            <h3 className="font-medium">Specifications:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Material: {product.material}</li>
              <li>Dimensions: {product.dimensions}</li>
              <li>Weight: {product.weight}</li>
              <li>SKU: {product.sku}</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <AddToCartButton productId={product.id} />
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">Free shipping on orders over ₹35,000</p>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      <div>
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

