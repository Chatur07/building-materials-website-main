"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Search</h3>
        <div className="relative">
          <Input placeholder="Search products..." />
        </div>
      </div>

      <Separator />

      <Accordion type="multiple" defaultValue={["categories", "price"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[
                "Lumber & Timber",
                "Concrete & Cement",
                "Bricks & Blocks",
                "Roofing Materials",
                "Insulation",
                "Drywall & Plaster",
                "Flooring",
                "Paint & Finishes",
                "Hardware & Fasteners",
                "Plumbing Supplies",
                "Electrical Supplies",
                "Tools & Equipment",
              ].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} />
                  <Label htmlFor={`category-${category}`} className="text-sm font-normal">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 1000]} max={1000} step={10} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <div className="border rounded-md overflow-hidden flex-1 mr-2">
                  <Input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                    className="border-0"
                    min={0}
                    max={priceRange[1]}
                  />
                </div>
                <span className="text-muted-foreground">to</span>
                <div className="border rounded-md overflow-hidden flex-1 ml-2">
                  <Input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="border-0"
                    min={priceRange[0]}
                    max={1000}
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brands">
          <AccordionTrigger>Brands</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[
                "BuildMaster",
                "ConstructPro",
                "DuraBuild",
                "EcoConstruct",
                "MasterCraft",
                "PremiumBuild",
                "SolidCore",
                "TrustBuild",
              ].map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={`brand-${brand}`} />
                  <Label htmlFor={`brand-${brand}`} className="text-sm font-normal">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ratings">
          <AccordionTrigger>Ratings</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <Label htmlFor={`rating-${rating}`} className="text-sm font-normal flex items-center">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className={`text-sm ${i < rating ? "text-yellow-400" : "text-muted"}`}>
                          ★
                        </span>
                      ))}
                    {rating === 5 ? " & up" : ""}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator />

      <div className="flex flex-col gap-2">
        <Button>Apply Filters</Button>
        <Button variant="outline">Reset Filters</Button>
      </div>
    </div>
  )
}

