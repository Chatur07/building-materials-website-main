interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h1>
      <p className="mt-4 text-muted-foreground">{description}</p>
    </div>
  )
}

