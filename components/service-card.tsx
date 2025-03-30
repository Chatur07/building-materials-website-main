import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Service } from "@/lib/types"

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg?height=200&width=400"}
          alt={service.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>

      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button variant="ghost" className="p-0 h-auto" asChild>
          <Link href={`/services#${service.id}`} className="flex items-center text-primary">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

