import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import PageHeader from "@/components/page-header"
import TeamMember from "@/components/team-member"
import { getTeamMembers } from "@/lib/data"

export const metadata = {
  title: "About Us - BuildMaster",
  description: "Learn about our company, mission, and the team behind BuildMaster",
}

export default async function AboutPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="About BuildMaster"
        description="Your trusted partner in construction and building materials since 1995."
      />

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-muted-foreground">
            Founded in 1995, BuildMaster has grown from a small family business to one of the leading suppliers of
            building materials in the region. Our journey began with a simple mission: to provide high-quality
            construction materials at fair prices with exceptional customer service.
          </p>
          <p className="text-muted-foreground">
            Over the years, we've expanded our product range and services to meet the evolving needs of contractors,
            builders, and homeowners. Today, we pride ourselves on offering comprehensive solutions for all construction
            projects, from residential renovations to large commercial developments.
          </p>
          <p className="text-muted-foreground">
            What sets us apart is our commitment to quality, sustainability, and customer satisfaction. We carefully
            select our suppliers, ensuring that all products meet the highest industry standards and environmental
            regulations.
          </p>
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/about.svg?height=400&width=600&text=Our+Headquarters"
            alt="BuildMaster Headquarters"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <Separator className="my-12" />

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Quality",
              description: "We never compromise on the quality of our products and services.",
              icon: "🏆",
            },
            {
              title: "Integrity",
              description: "We conduct our business with honesty, transparency, and ethical practices.",
              icon: "🤝",
            },
            {
              title: "Innovation",
              description: "We continuously seek new products and solutions to meet changing market needs.",
              icon: "💡",
            },
            {
              title: "Sustainability",
              description: "We are committed to environmentally responsible practices and products.",
              icon: "🌱",
            },
          ].map((value, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-medium mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Our Team</h2>
        <p className="text-muted-foreground max-w-3xl">
          Meet the dedicated professionals who make BuildMaster the company it is today. Our team combines decades of
          industry experience with a passion for customer service.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}

