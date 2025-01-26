'use client'

import { useState, useEffect } from 'react'
import Logo from '../public/Logo'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface NavItem {
  title: string;
  href: string;
  dropdownItems?: { title: string; href: string }[];
}

const navItems: NavItem[] = [
  { title: 'About', href: '/about' },
  {
    title: 'Academics',
    href: '/academics',
    dropdownItems: [
      { title: 'Programs', href: '/academics/programs' },
      { title: 'Courses', href: '/academics/courses' },
      { title: 'Faculty', href: '/academics/faculty' },
      { title: 'Calendar', href: '/academics/calendar' },
      { title: 'Resources', href: '/academics/resources' },
      { title: 'Student Life', href: '/academics/student-life' },
    ],
  },
  {
    title: 'Research',
    href: '/research',
    dropdownItems: [
      { title: 'Areas', href: '/research/areas' },
      { title: 'Publications', href: '/research/publications' },
      { title: 'Projects', href: '/research/projects' },
      { title: 'Labs', href: '/research/labs' },
      { title: 'Opportunities', href: '/research/opportunities' },
    ],
  },
  {
    title: 'Blog',
    href: '/blog',
    dropdownItems: [
      { title: 'Latest Posts', href: '/blog/latest' },
      { title: 'Categories', href: '/blog/categories' },
      { title: 'Archives', href: '/blog/archives' },
      { title: 'Featured', href: '/blog/featured' },
    ],
  },
  {
    title: 'Archives',
    href: '/archives',
    dropdownItems: [
      { title: 'Publications', href: '/archives/publications' },
      { title: 'Projects', href: '/archives/projects' },
      { title: 'Events', href: '/archives/events' },
      { title: 'Media', href: '/archives/media' },
    ],
  },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5
      setScrolled(isScrolled)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-5 left-0 right-0 z-50 mx-auto transition-all duration-500 ease-in-out ${
        scrolled ? 'max-w-xl' : 'max-w-6xl'
      }`}
    >
      <div
        className={`rounded-full relative transition-all duration-500 ease-in-out px-4 py-1 ${
          scrolled
            ? 'bg-white/20 shadow-lg backdrop-blur-md'
            : ''
        }`}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="w-20"
          >
            <Link href="/" className="shrink-0">
              <Logo className="h-9 w-9 text-black"/>
            </Link>
          </div>

          {/* Vertical line when scrolled */}
          {/*{scrolled && (*/}
          {/*  <div className="mx-4 h-6 w-px bg-gray-800 transition-opacity duration-500 ease-in-out" />*/}
          {/*)}*/}

          {/* Navigation items */}
          <div className="flex items-center">
            {navItems.map((item) => (
              <div key={item.title} className="group relative">
                <Link
                  href={item.href}
                  className="inline-block px-3 py-2 text-md font-medium text-gray-800 transition-colors hover:bg-gray-100/80 rounded-lg"
                >
                  {item.title}
                </Link>

                {/* Dropdown menu */}
                {item.dropdownItems && (
                  <div
                    className="invisible absolute left-1/2 mt-2 w-[40rem] -translate-x-1/2 transform opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                    <div className="rounded-xl bg-white p-6 shadow-xl ring-1 ring-gray-200">
                      <div className="grid grid-cols-2 gap-8">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.title}
                            href={dropdownItem.href}
                            className="block rounded-lg p-3 transition-colors hover:bg-gray-50"
                          >
                            <p className="font-medium text-gray-900">
                              {dropdownItem.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Learn more about {dropdownItem.title.toLowerCase()}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search icon */}
          <div
            className="w-20 text-right"
          >
            <button
              type="button"
              className="shrink-0 rounded-lg p-2 transition-colors hover:bg-gray-100"
            >
              <FontAwesomeIcon
                icon={faSearch}
                className="h-5 w-5 text-gray-600"
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header