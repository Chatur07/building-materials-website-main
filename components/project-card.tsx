import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/projects/${project.id}`}>
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg?height=200&width=400"}
            alt={project.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          <Badge className="absolute top-2 right-2">{project.category}</Badge>
        </div>
      </Link>

      <CardContent className="p-6">
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-primary">{project.title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-4">{project.location}</p>
        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button variant="ghost" className="p-0 h-auto" asChild>
          <Link href={`/projects/${project.id}`} className="flex items-center text-primary">
            View Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

