import { getProjects } from "@/lib/data"
import PageHeader from "@/components/page-header"
import ProjectCard from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Projects - BuildMaster",
  description: "Explore our completed projects and see how our materials contribute to successful construction",
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  // Group projects by category
  const categories = [...new Set(projects.map((project) => project.category))]

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Our Projects"
        description="Explore our portfolio of completed projects where our materials have been used to create outstanding structures."
      />

      <Tabs defaultValue="all" className="mt-12">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === category)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

