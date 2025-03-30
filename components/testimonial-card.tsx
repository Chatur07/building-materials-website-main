import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { Testimonial } from "@/lib/types"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex items-center mb-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i} className={`text-xl ${i < testimonial.rating ? "text-yellow-400" : "text-muted"}`}>
                  ★
                </span>
              ))}
          </div>

          <p className="italic mb-6">"{testimonial.content}"</p>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.avatar || "/placeholder.svg?height=48&width=48"}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

