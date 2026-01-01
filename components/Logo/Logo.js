import styles from './Logo.module.scss'

export default function Logo({ size = 'default', showText = true, variant = 'default' }) {
  return (
    <div className={`${styles.logo} ${styles[size]} ${styles[variant]}`}>
      <div className={styles.logoIcon}>
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Isometric cube - top face (red with black horizontal stripes) */}
          <path
            d="M25 55 L60 30 L95 55 L60 80 Z"
            fill="#dc2626"
            stroke="#000000"
            strokeWidth="1.5"
          />
          {/* Top face horizontal stripes */}
          <line x1="35" y1="50" x2="85" y2="50" stroke="#000000" strokeWidth="2"/>
          <line x1="37" y1="55" x2="83" y2="55" stroke="#000000" strokeWidth="2"/>
          <line x1="39" y1="60" x2="81" y2="60" stroke="#000000" strokeWidth="2"/>
          <line x1="41" y1="65" x2="79" y2="65" stroke="#000000" strokeWidth="2"/>
          <line x1="43" y1="70" x2="77" y2="70" stroke="#000000" strokeWidth="2"/>
          
          {/* Isometric cube - left face (red with black vertical stripes) */}
          <path
            d="M25 55 L25 95 L60 115 L60 80 Z"
            fill="#dc2626"
            stroke="#000000"
            strokeWidth="1.5"
          />
          {/* Left face vertical stripes */}
          <line x1="30" y1="60" x2="30" y2="100" stroke="#000000" strokeWidth="2"/>
          <line x1="35" y1="62" x2="35" y2="102" stroke="#000000" strokeWidth="2"/>
          <line x1="40" y1="64" x2="40" y2="104" stroke="#000000" strokeWidth="2"/>
          <line x1="45" y1="66" x2="45" y2="106" stroke="#000000" strokeWidth="2"/>
          <line x1="50" y1="68" x2="50" y2="108" stroke="#000000" strokeWidth="2"/>
          
          {/* Isometric cube - right face (solid red, no stripes) */}
          <path
            d="M60 80 L95 55 L95 95 L60 115 Z"
            fill="#dc2626"
            stroke="#000000"
            strokeWidth="1.5"
          />
          
          {/* Shadow beneath cube */}
          <ellipse cx="60" cy="118" rx="40" ry="6" fill="#000000" opacity="0.4"/>
        </svg>
      </div>
      {showText && (
        <div className={styles.logoText}>
          <div className={styles.logoMain}>DEALE</div>
          <div className={styles.logoSub}>
            <span className={styles.decorativeLine}>—</span>
            <span>Legal Systems</span>
            <span className={styles.decorativeLine}>—</span>
          </div>
        </div>
      )}
    </div>
  )
}

