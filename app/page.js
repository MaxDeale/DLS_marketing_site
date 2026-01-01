import Link from 'next/link'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
import styles from './page.module.scss'

export const metadata = {
  title: 'Home | Deale Legal Systems',
  description: 'Enterprise document intelligence and case material processing platform for law firms.',
}

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Logo size="hero" variant="hero" />
          <div className={styles.heroBadge}>Document Intelligence Platform</div>
          <h1 className={styles.heroTitle}>
            Transform Legal Document Processing with{' '}
            <span className={styles.gradientText}>Source-Grounded Intelligence</span>
          </h1>
          <p className={styles.heroDescription}>
            Deale Legal Systems provides enterprise-grade document intelligence and case material 
            processing for law firms. Classify, extract, and retrieve insights from legal documents 
            with precision and speed.
          </p>
          <div className={styles.heroCta}>
            <Button href="/contact" variant="primary" size="lg">
              Request Access
            </Button>
            <Button href="/product" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          <div className={styles.disclaimer}>
            <p>
              <strong>Important:</strong> Deale Legal Systems does not provide legal advice, 
              opinions, predictions, or recommendations. All outputs are derived strictly from 
              uploaded documents.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className={styles.valueProp}>
        <div className="container">
          <div className={styles.valuePropContent}>
            <h2 className={styles.sectionTitle}>Built for Legal Teams</h2>
            <p className={styles.sectionDescription}>
              Streamline case preparation, accelerate document review, and build comprehensive 
              chronologies with our document intelligence platform.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                    <path d="M13 12h3a2 2 0 0 1 2 2v1"/>
                    <path d="M5 12H2a2 2 0 0 0-2 2v1"/>
                  </svg>
                </div>
                <h3>Document Classification</h3>
                <p>Automatically categorize and organize legal documents by type, relevance, and context.</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                </div>
                <h3>Intelligent Extraction</h3>
                <p>Extract key information, dates, parties, and facts from case materials with precision.</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                  </svg>
                </div>
                <h3>RAG-Powered Retrieval</h3>
                <p>Find relevant documents and passages instantly using advanced retrieval-augmented generation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className={styles.workflow}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Streamlined Workflow</h2>
          <p className={styles.sectionDescription}>
            From document upload to structured outputs, our platform handles the entire pipeline.
          </p>
          <div className={styles.workflowSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3>Upload Documents</h3>
              <p>Securely upload case materials, contracts, correspondence, and legal documents.</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3>Classification & Processing</h3>
              <p>Documents are automatically classified, indexed, and processed through our intelligence pipeline.</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3>Structured Outputs</h3>
              <p>Access summaries, extracted data, and source-grounded insights derived from your documents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your Document Processing?</h2>
            <p>Join leading law firms using Deale Legal Systems for case material intelligence.</p>
            <Button href="/contact" variant="primary" size="lg">
              Request Access
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

