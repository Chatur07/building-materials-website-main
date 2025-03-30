import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="bg-primary/10 py-16">
      <div className="container px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Whether you're a contractor, builder, or homeowner in India, we have everything you need to bring your
          construction project to life. Contact us today for a consultation or visit our showroom in Mumbai.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

