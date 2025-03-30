import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getServices } from "@/lib/data"
import ServiceCard from "@/components/service-card"

export default async function Services() {
  const services = await getServices(4) // Get only 4 services for the homepage

  return (
    <section className="container px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-muted-foreground mt-2">Comprehensive solutions for your construction needs</p>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/services" className="flex items-center">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

