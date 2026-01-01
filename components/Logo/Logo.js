import Image from 'next/image'
import styles from './Logo.module.scss'

export default function Logo({ size = 'default', showText = true, variant = 'default', className = '' }) {
  return (
    <div className={`${styles.logo} ${styles[size]} ${styles[variant]} ${className}`}>
      <div className={styles.logoImage}>
        <Image
          src="/DLS_logo.png"
          alt="Deale Legal Systems Logo"
          width={400}
          height={400}
          priority={variant === 'hero'}
          className={styles.logoImg}
        />
      </div>
    </div>
  )
}

