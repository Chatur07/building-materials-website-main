import { getServices } from "@/lib/data"
import PageHeader from "@/components/page-header"
import ServiceCard from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export const metadata = {
  title: "Services - BuildMaster",
  description: "Explore our comprehensive range of services for your construction projects",
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Our Services"
        description="From material selection to delivery and technical support, we offer comprehensive services to support your construction projects."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <Separator className="my-16" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Custom Solutions for Your Project</h2>
          <p className="text-muted-foreground">
            We understand that every construction project is unique. That's why we offer customized solutions tailored
            to your specific requirements. Our team of experts will work closely with you to understand your needs and
            provide the best materials and services for your project.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Personalized consultation with industry experts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Custom material sourcing for specialized projects</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Tailored delivery schedules to match your timeline</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Project-specific technical support and advice</span>
            </li>
          </ul>
          <Button size="lg">Request a Consultation</Button>
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/services.svg?height=400&width=600&text=Custom+Solutions"
            alt="Custom Solutions"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

