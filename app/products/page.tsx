import { Suspense } from "react"
import { getProducts } from "@/lib/data"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"
import { Skeleton } from "@/components/ui/skeleton"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Products - BuildMaster",
  description: "Browse our extensive collection of high-quality building materials",
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Our Products"
        description="Browse our extensive collection of high-quality building materials for your construction needs."
      />

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="w-full md:w-1/4">
          <ProductFilters />
        </div>
        <div className="w-full md:w-3/4">
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid products={products} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <div className="p-4 space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          </div>
        ))}
    </div>
  )
}

