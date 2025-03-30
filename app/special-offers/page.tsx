import { getSpecialOffers } from "@/lib/data"
import PageHeader from "@/components/page-header"
import SpecialOfferCard from "@/components/special-offer-card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Clock } from "lucide-react"

export const metadata = {
  title: "Special Offers - BuildMaster",
  description: "Discover our current promotions, discounts, and special deals on building materials",
}

export default async function SpecialOffersPage() {
  const specialOffers = await getSpecialOffers()

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Special Offers"
        description="Take advantage of our limited-time promotions and exclusive deals on high-quality building materials."
      />

      <div className="bg-primary/10 rounded-lg p-6 flex items-center justify-between mt-8 mb-12">
        <div className="flex items-center gap-4">
          <Clock className="h-6 w-6 text-primary" />
          <p className="font-medium">These offers are valid for a limited time only. Don't miss out!</p>
        </div>
        <Button>Subscribe to Offers</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialOffers.map((offer) => (
          <SpecialOfferCard key={offer.id} offer={offer} />
        ))}
      </div>

      <Separator className="my-16" />

      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Bulk Order Discounts</h2>
        <p className="text-muted-foreground">
          Planning a large project? We offer special discounts for bulk orders. Contact our sales team to discuss your
          requirements and get a customized quote.
        </p>
        <Button size="lg">Request a Quote</Button>
      </div>
    </div>
  )
}

