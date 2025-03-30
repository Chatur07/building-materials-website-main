import { getProjectById, getRelatedProjects } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = await getProjectById(params.id)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found",
    }
  }

  return {
    title: `${project.title} - BuildMaster Projects`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await getProjectById(params.id)

  if (!project) {
    notFound()
  }

  const relatedProjects = await getRelatedProjects(project.category, project.id)

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/projects">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="text-muted-foreground mt-2">{project.location}</p>
          </div>

          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg?height=600&width=1200&text=Project+Image"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <p className="text-muted-foreground">{project.description}</p>
            <p className="text-muted-foreground">{project.longDescription}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Gallery+${i}`}
                  alt={`Project gallery image ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-bold">Project Details</h2>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Client:</span>
                <span className="font-medium">{project.client}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location:</span>
                <span className="font-medium">{project.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Year:</span>
                <span className="font-medium">{project.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category:</span>
                <span className="font-medium">{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Size:</span>
                <span className="font-medium">{project.size}</span>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-bold">Materials Used</h2>
            <Separator />
            <ul className="space-y-2">
              {project.materialsUsed?.map((material, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>{material}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-bold">Need Similar Materials?</h2>
            <p className="text-muted-foreground">
              Interested in using the same high-quality materials for your project? Contact our team for a consultation.
            </p>
            <Button className="w-full">Contact Us</Button>
          </div>
        </div>
      </div>

      {relatedProjects.length > 0 && (
        <>
          <Separator className="my-12" />
          <div>
            <h2 className="text-2xl font-bold mb-6">Similar Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

