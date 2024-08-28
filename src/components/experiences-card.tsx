import Link from 'next/link'

export function ExperienceCard() {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
      <p className="min-w-fit text-muted-foreground">March, 2023 - Present</p>
      <div>
        <p className="font-medium">
          <Link
            href="https://supportsistemas.com.br/"
            target="_blank"
            className="hover:font-bold underline underline-offset-4 transition-all"
          >
            SUPPORT
          </Link>{' '}
          | UI/UX Designer
        </p>
        <p className="mt-2">
          Develop and improve screen layouts for the company&apos;s projects and
          programs, ensuring compliance with established standards and focusing
          on optimizing the end-user experience and interface. I intend to
          utilize my skills in design and usability to create intuitive and
          efficient interfaces that meet the needs of users and contribute to
          the success of the company&apos;s products.
        </p>
      </div>
    </div>
  )
}
