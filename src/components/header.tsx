import Link from 'next/link'

import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <header className="mb-10 flex justify-between items-center gap-3">
      <Link
        href="/"
        className="size-5 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-full"
      />

      <ModeToggle />
    </header>
  )
}
