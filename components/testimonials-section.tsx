import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getTestimonials } from "@/lib/data"
import TestimonialCard from "@/components/testimonial-card"

export default async function Testimonials() {
  const testimonials = await getTestimonials(3) // Get only 3 testimonials for the homepage

  return (
    <section className="container px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-2">
            Hear from our satisfied customers about their experience with BuildMaster
          </p>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/testimonials" className="flex items-center">
            View All Testimonials
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}

