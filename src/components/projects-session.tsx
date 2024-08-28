import {
  ProjectCard,
  ProjectCardContent,
  ProjectCardInfo,
  ProjectImage,
  ProjectStacks,
  ProjectTitle,
} from './project-card'

export function ProjectsSession() {
  return (
    <section>
      <p className="text-sm font-bold">Project (s)</p>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-6">
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <ProjectCard key={i} path="https://www.github.com/souorichard">
              <ProjectImage path="/test-project.jpeg" />
              <ProjectCardContent>
                <ProjectCardInfo>
                  <ProjectTitle>Project name</ProjectTitle>
                  <ProjectStacks>
                    Stack names used in the project.
                  </ProjectStacks>
                </ProjectCardInfo>
              </ProjectCardContent>
            </ProjectCard>
          )
        })}
      </div>
    </section>
  )
}
