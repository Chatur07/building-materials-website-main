import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getSpecialOffers } from "@/lib/data"
import SpecialOfferCard from "@/components/special-offer-card"

export default async function SpecialOffers() {
  const offers = await getSpecialOffers(2) // Get only 2 special offers for the homepage

  return (
    <section className="container px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold">Special Offers</h2>
          <p className="text-muted-foreground mt-2">Take advantage of our limited-time promotions</p>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/special-offers" className="flex items-center">
            View All Offers
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <SpecialOfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  )
}

