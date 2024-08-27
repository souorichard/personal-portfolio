'use client'

import { useTheme } from 'next-themes'

import { Button } from './ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  function handleToggleMode(theme: string | undefined) {
    if (theme === 'dark') setTheme('light')
    if (theme === 'light') setTheme('dark')

    return theme
  }

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => handleToggleMode(theme)}
      className="h-7"
    >
      <span className="block dark:hidden">Lights on</span>
      <span className="hidden dark:block">Lights off</span>
    </Button>
  )
}
