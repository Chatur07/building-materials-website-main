import { Suspense } from "react"
import ContactForm from "@/components/contact-form"
import { Skeleton } from "@/components/ui/skeleton"
import PageHeader from "@/components/page-header"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us - BuildMaster",
  description: "Get in touch with our team for inquiries, quotes, or support",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Contact Us"
        description="Have questions or need assistance? Our team is here to help. Reach out to us through any of the channels below."
      />

      <div className="grid lg:grid-cols-2 gap-12 mt-12">
        <div>
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Visit Us</h3>
                </div>
                <p className="text-muted-foreground">
                  123 Construction Avenue
                  <br />
                  Andheri East
                  <br />
                  Mumbai, Maharashtra 400069
                </p>
              </div>

              <div className="border rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Call Us</h3>
                </div>
                <p className="text-muted-foreground">
                  Main Office: +91 98765 43210
                  <br />
                  Customer Support: +91 98765 43211
                  <br />
                  Toll-Free: 1800 123 4567
                </p>
              </div>

              <div className="border rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Email Us</h3>
                </div>
                <p className="text-muted-foreground">
                  General Inquiries: info@buildmaster.in
                  <br />
                  Sales: sales@buildmaster.in
                  <br />
                  Support: support@buildmaster.in
                </p>
              </div>

              <div className="border rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Hours</h3>
                </div>
                <p className="text-muted-foreground">
                  Monday - Friday: 8:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="aspect-video relative rounded-lg overflow-hidden border">
              {/* This would be replaced with an actual map component in a real implementation */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Interactive Map Would Be Here</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <Suspense fallback={<ContactFormSkeleton />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function ContactFormSkeleton() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-32 w-full" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  )
}

