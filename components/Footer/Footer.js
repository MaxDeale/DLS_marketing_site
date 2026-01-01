import Link from 'next/link'
import Logo from '@/components/Logo'
import styles from './Footer.module.scss'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Logo size="default" showText={true} />
            <p className={styles.tagline}>
              Document intelligence infrastructure for law firms.
            </p>
            <p className={styles.disclaimer}>
              Deale Legal Systems does not provide legal advice, opinions, predictions, or recommendations. 
              All outputs are derived strictly from uploaded documents.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Product</h4>
              <Link href="/product">Product</Link>
              <Link href="/use-cases">Use Cases</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/security">Security & Compliance</Link>
            </div>

            <div className={styles.linkGroup}>
              <h4>Company</h4>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Deale Legal Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

