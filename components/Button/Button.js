import Link from 'next/link'
import styles from './Button.module.scss'

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  type = 'button',
  ...props 
}) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={className} {...props}>
      {children}
    </button>
  )
}

