import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10" />
      <div
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200&text=Indian+Building+Materials')" }}
        // Replace with an image of an Indian construction site or modern Indian building with workers
      >
        <div className="container px-4 relative z-20">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Quality Building Materials for Your Projects in India
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              From foundation to finish, we provide premium building supplies to contractors, builders, and homeowners
              across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/products">
                  Browse Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

