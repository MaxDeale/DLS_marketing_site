'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import styles from './Header.module.scss'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/product', label: 'Product' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/security', label: 'Security' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 45 L50 25 L80 45 L50 65 Z" fill="#1a0d2e" stroke="#000000" stroke-width="1.2"/>
              <rect x="24" y="42" width="52" height="4.5" fill="#dc2626"/>
              <rect x="26" y="48" width="48" height="4.5" fill="#dc2626"/>
              <rect x="28" y="54" width="44" height="4.5" fill="#dc2626"/>
              <rect x="30" y="60" width="40" height="3.5" fill="#dc2626"/>
              <path d="M20 45 L20 75 L50 85 L50 65 Z" fill="#1a0d2e" stroke="#000000" stroke-width="1.2"/>
              <rect x="22" y="50" width="4.5" height="25" fill="#dc2626"/>
              <rect x="28" y="52" width="4.5" height="23" fill="#dc2626"/>
              <rect x="34" y="54" width="4.5" height="21" fill="#dc2626"/>
              <rect x="40" y="56" width="4.5" height="19" fill="#dc2626"/>
              <path d="M50 65 L80 45 L80 75 L50 85 Z" fill="#dc2626" stroke="#000000" stroke-width="1.2"/>
            </svg>
          </div>
          <span className={styles.logoText}>Deale Legal Systems</span>
        </Link>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={styles.ctaButton} onClick={() => setIsMobileMenuOpen(false)}>
            Request Access
          </Link>
        </nav>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
        </button>
      </div>
    </header>
  )
}

