import {
  ExperienceCard,
  ExperienceCardContent,
  ExperienceDate,
  ExperienceWork,
  ExperienceWorkDescription,
  ExperienceWorkLink,
} from './experiences-card'

export function ExperiencesSession() {
  return (
    <section>
      <p className="text-sm font-bold">Experience (s)</p>

      <div className="mt-5 flex flex-col gap-5">
        <ExperienceCard>
          <ExperienceDate>March, 2023 - Present</ExperienceDate>
          <ExperienceCardContent>
            <ExperienceWork>
              <ExperienceWorkLink path="https://supportsistemas.com.br/">
                SUPPORT
              </ExperienceWorkLink>{' '}
              | UI/UX Designer
            </ExperienceWork>

            <ExperienceWorkDescription>
              Develop and improve screen layouts for the company&apos;s projects
              and programs, ensuring compliance with established standards and
              focusing on optimizing the end-user experience and interface. I
              intend to utilize my skills in design and usability to create
              intuitive and efficient interfaces that meet the needs of users
              and contribute to the success of the company&apos;s products.
            </ExperienceWorkDescription>
          </ExperienceCardContent>
        </ExperienceCard>
      </div>
    </section>
  )
}
