import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/data"

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts()

  return (
    <section className="container px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <p className="text-muted-foreground mt-2">Discover our selection of high-quality building materials</p>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/products" className="flex items-center">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

