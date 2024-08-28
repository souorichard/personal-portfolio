import { ExperienceCard } from './experiences-card'

export function ExperiencesSession() {
  return (
    <section>
      <p className="text-sm font-bold">Experience (s)</p>

      <div className="mt-5 flex flex-col gap-5">
        <ExperienceCard />
      </div>
    </section>
  )
}
