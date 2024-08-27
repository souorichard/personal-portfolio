import { ProjectCard } from './project-card'

export function ProjectsSession() {
  return (
    <section>
      <p className="text-sm font-bold">Project (s)</p>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}
