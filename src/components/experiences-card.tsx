import Link from 'next/link'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type ExperienceCardGenericProps<T = unknown> = {
  className?: string
  children: ReactNode
} & T

export function ExperienceCard({
  className,
  children,
}: ExperienceCardGenericProps) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function ExperienceDate({
  className,
  children,
}: ExperienceCardGenericProps) {
  return (
    <p className={cn('min-w-fit text-muted-foreground', className)}>
      {children}
    </p>
  )
}

export function ExperienceCardContent({
  className,
  children,
}: ExperienceCardGenericProps) {
  return <div className={cn('', className)}>{children}</div>
}

interface ExperienceWorkProps {
  path: string
}

export function ExperienceWork({
  className,
  children,
}: ExperienceCardGenericProps) {
  return <p className={cn('font-medium', className)}>{children}</p>
}

export function ExperienceWorkLink({
  path,
  className,
  children,
}: ExperienceCardGenericProps<ExperienceWorkProps>) {
  return (
    <Link
      href={path}
      target="_blank"
      className={cn(
        'hover:font-bold underline underline-offset-4 transition-all',
        className,
      )}
    >
      {children}
    </Link>
  )
}

export function ExperienceWorkDescription({
  className,
  children,
}: ExperienceCardGenericProps) {
  return <p className={cn('mt-2', className)}>{children}</p>
}
