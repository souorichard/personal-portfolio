import { AboutSection } from '@/components/about-section'
import { ExperiencesSession } from '@/components/experiences-session'
import { Header } from '@/components/header'
import { ProjectsSession } from '@/components/projects-session'

export default function Home() {
  return (
    <>
      <Header />

      <main className="space-y-12">
        <AboutSection />
        <ProjectsSession />
        <ExperiencesSession />
      </main>
    </>
  )
}
