import styles from './page.module.scss'

export const metadata = {
  title: 'Security & Compliance | Deale Legal Systems',
  description: 'Enterprise-grade security, access control, audit trails, and data isolation for legal document processing.',
}

export default function Security() {
  return (
    <div className={styles.security}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Security & Compliance</h1>
            <p className={styles.subtitle}>
              Enterprise-grade security designed for the sensitive nature of legal documents and 
              compliance requirements of law firms.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h2>Access Control</h2>
              <p>
                Granular access control ensures that only authorized users can access specific documents 
                and features. Role-based permissions allow you to control who can upload, view, process, 
                and export documents.
              </p>
              <ul>
                <li>Role-based access control (RBAC)</li>
                <li>User and group management</li>
                <li>Document-level permissions</li>
                <li>Multi-factor authentication (MFA)</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <path d="M14 2v6h6"/>
                  <path d="M16 13H8"/>
                  <path d="M16 17H8"/>
                </svg>
              </div>
              <h2>Audit Trails</h2>
              <p>
                Comprehensive audit trails track all user actions, document access, and system events. 
                Maintain a complete record of who accessed what, when, and what actions were performed 
                for compliance and security purposes.
              </p>
              <ul>
                <li>Complete activity logging</li>
                <li>User action tracking</li>
                <li>Document access history</li>
                <li>Exportable audit reports</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="9" y1="3" x2="9" y2="21"/>
                  <line x1="15" y1="3" x2="15" y2="21"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="3" y1="15" x2="21" y2="15"/>
                </svg>
              </div>
              <h2>Data Isolation</h2>
              <p>
                Strict data isolation ensures that documents and data from different clients, cases, 
                or organizations are completely separated. Multi-tenancy architecture prevents any 
                cross-contamination of data.
              </p>
              <ul>
                <li>Tenant-level data isolation</li>
                <li>Case-level document separation</li>
                <li>Encrypted data storage</li>
                <li>Logical and physical separation</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h2>Encryption</h2>
              <p>
                All data is encrypted both in transit and at rest using industry-standard encryption 
                protocols. Documents are protected throughout the entire processing pipeline.
              </p>
              <ul>
                <li>End-to-end encryption</li>
                <li>Encryption at rest</li>
                <li>Encryption in transit (TLS 1.3)</li>
                <li>Key management best practices</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                </svg>
              </div>
              <h2>Compliance</h2>
              <p>
                Our platform is designed to support compliance with legal and regulatory requirements 
                relevant to law firms and legal document processing.
              </p>
              <ul>
                <li>Data protection compliance</li>
                <li>Legal industry standards</li>
                <li>Regular security assessments</li>
                <li>Compliance documentation</li>
              </ul>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h2>Backup & Recovery</h2>
              <p>
                Regular automated backups ensure your documents and data are protected. Disaster recovery 
                procedures are in place to minimize downtime and data loss.
              </p>
              <ul>
                <li>Automated daily backups</li>
                <li>Point-in-time recovery</li>
                <li>Redundant storage systems</li>
                <li>Disaster recovery planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className="container">
          <div className={styles.contactBox}>
            <h2>Security Questions?</h2>
            <p>
              For detailed information about our security practices, compliance certifications, 
              or to discuss your specific security requirements, please contact us.
            </p>
            <a href="/contact" className={styles.ctaLink}>
              Contact Security Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

