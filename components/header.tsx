'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NEXT_PUBLIC_SITE_TITLE } from '../app/server-constants'
import styles from '../styles/header.module.css'
import { ChangeThemeButton } from './change-theme-button'

interface NavItem {
  label: string
  path: string
}

const Header = () => {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
  ]

  return (
    <header className={styles.header}>
      <nav
        id="header"
        className="w-full z-10 pin-t bg-white border-b border-grey-light"
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
          <div className="pl-4 flex items-center">
            <div className="text-black text-base no-underline hover:no-underline font-extrabold text-xl">
              <Link href="/">
                <h2>{NEXT_PUBLIC_SITE_TITLE}</h2>
              </Link>
            </div>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-black hover:border-purple appearance-none focus:outline-none"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className="w-full flex-grow lg:flex  lg:content-center lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 z-20"
            id="nav-content"
          ></div>
              <ChangeThemeButton />
        </div>

        <ul className="w-full container items-center justify-between text-right">
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <Link
                href={path}
                className={pathname === path ? 'active, text-blue-600' : null}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={toggleDarkMode}>テーマ切り替え</button>
    </header>
  )
}

function toggleDarkMode() {

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')

}
export default Header
