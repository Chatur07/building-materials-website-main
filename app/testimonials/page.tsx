import { getTestimonials } from "@/lib/data"
import PageHeader from "@/components/page-header"
import TestimonialCard from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Testimonials - BuildMaster",
  description: "See what our clients say about our products and services",
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Client Testimonials"
        description="Don't just take our word for it. See what our clients have to say about their experience working with BuildMaster."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <Separator className="my-16" />

      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Share Your Experience</h2>
        <p className="text-muted-foreground">
          We value your feedback. If you've worked with us, we'd love to hear about your experience. Your testimonial
          helps us improve our services and helps other customers make informed decisions.
        </p>
        <Button size="lg">Submit a Testimonial</Button>
      </div>
    </div>
  )
}

