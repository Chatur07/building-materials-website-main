import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Services from "@/components/services-section"
import Testimonials from "@/components/testimonials-section"
import SpecialOffers from "@/components/special-offers"
import LatestProjects from "@/components/latest-projects"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <FeaturedProducts />
      <Services />
      <LatestProjects />
      <Testimonials />
      <SpecialOffers />
      <CTASection />
    </div>
  )
}

