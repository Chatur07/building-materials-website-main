import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getProjects } from "@/lib/data"
import ProjectCard from "@/components/project-card"

export default async function LatestProjects() {
  const projects = await getProjects(3) // Get only 3 projects for the homepage

  return (
    <section className="container px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold">Latest Projects</h2>
          <p className="text-muted-foreground mt-2">
            See how our materials have been used in recent construction projects
          </p>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/projects" className="flex items-center">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

