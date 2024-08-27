import Link from 'next/link'
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi'
import { LuDownload } from 'react-icons/lu'

import { Button } from './ui/button'

export function AboutSection() {
  return (
    <section>
      <div className="space-y-1 text-sm">
        <p className="font-bold">Richard Rodrigues</p>
        <p className="text-foreground/80">
          Full-stack Developer & UI Designer
          <br />
          Lençóis Paulista, SP, Brasil
        </p>
      </div>

      <div className="w-[94%] mt-12 space-y-5 text-sm">
        <p className="font-bold">From Visual Concepts to Functional Code</p>
        <div className="space-y-2 text-muted-foreground">
          <p>
            Specializing in frontend development with{' '}
            <span className="font-semibold text-foreground font-mono">
              React Js
            </span>{' '}
            and{' '}
            <span className="font-semibold text-foreground font-mono">
              Next.js
            </span>
            . I have a strong passion for creating dynamic and responsive web
            applications. In addition to my frontend skills, I have experience
            in backend development using{' '}
            <span className="font-semibold text-foreground font-mono">
              Node.js, JavaScript, and Java.
            </span>
          </p>
          <p>
            Alongside my development skills, I also have experience in UI design
            using Figma, which allows me to create visually appealing and
            user-friendly interfaces.
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <Button size="sm" className="text-sm">
          Resume
          <LuDownload className="size-4 ml-2" />
        </Button>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="size-8 px-0" asChild>
            <Link href="mailto:rodrigues.lpta@gmail.com" target="_blank">
              <BiLogoGmail className="size-4" />
            </Link>
          </Button>

          <Button variant="ghost" className="size-8 px-0" asChild>
            <Link
              href="https://www.linkedin.com/in/richdrodrigues"
              target="_blank"
            >
              <BiLogoLinkedin className="size-4" />
            </Link>
          </Button>

          <Button variant="ghost" className="size-8 px-0" asChild>
            <Link href="https://www.github.com/souorichard" target="_blank">
              <BiLogoGithub className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
