import Image from 'next/image'
import Link from 'next/link'
import { LuArrowUpRight } from 'react-icons/lu'

export function ProjectCard() {
  return (
    <div className="hover:scale-[1.03] cursor-pointer transition-all ease-in-out duration-200">
      <Link href="https://www.github.com/souorichard" target="_blank">
        <div className="overflow-hidden">
          <Image
            src="/test-project.jpeg"
            width={4000}
            height={3200}
            loading="lazy"
            decoding="async"
            alt="Project image"
            className="rounded-md"
          />

          <div className="py-2 flex items-center gap-3">
            <div className="text-sm">
              <p>Project Name</p>
              <p className="text-foreground/80">
                Stack names used in the project.
              </p>
            </div>

            <LuArrowUpRight className="size-4 ml-auto text-foreground/80" />
          </div>
        </div>
      </Link>
    </div>
  )
}
