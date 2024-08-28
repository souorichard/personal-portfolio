import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { LuArrowUpRight } from 'react-icons/lu'

import { cn } from '@/lib/utils'

type ProjectCardGenericProps<T = unknown> = {
  className?: string
  children?: ReactNode
} & T

interface ProjectCardProps {
  path: string
}

export function ProjectCard({
  path,
  className,
  children,
}: ProjectCardGenericProps<ProjectCardProps>) {
  return (
    <div
      className={cn(
        'hover:scale-[1.03] cursor-pointer transition-all ease-in-out duration-200',
        className,
      )}
    >
      <Link href={path} target="_blank">
        <div className="overflow-hidden">{children}</div>
      </Link>
    </div>
  )
}

interface ProjectImageProps {
  path: string
}

export function ProjectImage({
  path,
  className,
}: ProjectCardGenericProps<ProjectImageProps>) {
  return (
    <Image
      src={path}
      width={4000}
      height={3200}
      loading="lazy"
      decoding="async"
      alt="Project image"
      className={cn('rounded-md', className)}
    />
  )
}

export function ProjectCardContent({
  className,
  children,
}: ProjectCardGenericProps) {
  return (
    <div className={cn('py-2 flex items-center gap-3', className)}>
      {children}
      <LuArrowUpRight className="size-4 ml-auto text-foreground/80" />
    </div>
  )
}

export function ProjectCardInfo({
  className,
  children,
}: ProjectCardGenericProps) {
  return <div className={cn('text-sm', className)}>{children}</div>
}

export function ProjectTitle({ className, children }: ProjectCardGenericProps) {
  return <p className={cn('', className)}>{children}</p>
}

export function ProjectStacks({
  className,
  children,
}: ProjectCardGenericProps) {
  return <p className={cn('text-foreground/80', className)}>{children}</p>
}
