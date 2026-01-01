import Button from '@/components/Button'
import styles from './page.module.scss'

export const metadata = {
  title: 'Use Cases | Deale Legal Systems',
  description: 'Discover how law firms use Deale Legal Systems for case preparation, chronology building, and document review acceleration.',
}

export default function UseCases() {
  return (
    <div className={styles.useCases}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Use Cases</h1>
            <p className={styles.subtitle}>
              See how legal teams leverage document intelligence to streamline case preparation and accelerate document review.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cases}>
        <div className="container">
          <div className={styles.caseGrid}>
            <div className={styles.caseCard}>
              <div className={styles.caseIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <path d="M14 2v6h6"/>
                  <path d="M16 13H8"/>
                  <path d="M16 17H8"/>
                  <path d="M10 9H8"/>
                </svg>
              </div>
              <h2>Case Preparation</h2>
              <p>
                Accelerate case preparation by automatically processing and organizing discovery materials, 
                pleadings, and correspondence. Quickly identify relevant documents, extract key facts, 
                and build a comprehensive understanding of case materials.
              </p>
              <ul>
                <li>Process thousands of discovery documents</li>
                <li>Identify relevant materials automatically</li>
                <li>Extract key facts and dates</li>
                <li>Organize documents by relevance and type</li>
              </ul>
            </div>

            <div className={styles.caseCard}>
              <div className={styles.caseIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h2>Chronology Building</h2>
              <p>
                Automatically build comprehensive chronologies from case documents. Extract dates, events, 
                and relationships to create timeline visualizations that support case strategy and 
                presentation preparation.
              </p>
              <ul>
                <li>Extract dates and events from documents</li>
                <li>Build chronological timelines</li>
                <li>Identify relationships between events</li>
                <li>Export structured chronology data</li>
              </ul>
            </div>

            <div className={styles.caseCard}>
              <div className={styles.caseIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                </svg>
              </div>
              <h2>Document Review Acceleration</h2>
              <p>
                Speed up document review processes by pre-classifying documents, extracting key information, 
                and enabling intelligent search. Reduce time spent on manual document sorting and 
                information extraction.
              </p>
              <ul>
                <li>Pre-classify documents by type and relevance</li>
                <li>Extract key information automatically</li>
                <li>Enable semantic search across documents</li>
                <li>Highlight important passages and entities</li>
              </ul>
            </div>

            <div className={styles.caseCard}>
              <div className={styles.caseIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <h2>Contract Analysis</h2>
              <p>
                Process and analyze contracts, agreements, and legal documents. Extract clauses, terms, 
                dates, parties, and obligations to support due diligence and contract review workflows.
              </p>
              <ul>
                <li>Extract contract terms and clauses</li>
                <li>Identify parties and obligations</li>
                <li>Extract dates and deadlines</li>
                <li>Compare contract provisions</li>
              </ul>
            </div>

            <div className={styles.caseCard}>
              <div className={styles.caseIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h2>Litigation Support</h2>
              <p>
                Support litigation teams with comprehensive document intelligence. Process case materials, 
                build document indexes, and enable rapid retrieval of relevant information during 
                litigation proceedings.
              </p>
              <ul>
                <li>Process litigation documents at scale</li>
                <li>Build searchable document indexes</li>
                <li>Enable rapid information retrieval</li>
                <li>Support deposition and trial preparation</li>
              </ul>
            </div>

            <div className={styles.caseCard}>
              <div className={styles.caseIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <h2>Due Diligence</h2>
              <p>
                Accelerate due diligence processes by processing and analyzing large volumes of legal 
                documents. Extract key information, identify risks, and organize materials for 
                efficient review.
              </p>
              <ul>
                <li>Process due diligence document sets</li>
                <li>Extract key information and risks</li>
                <li>Organize materials by category</li>
                <li>Generate summary reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your Legal Workflows?</h2>
            <p>See how Deale Legal Systems can accelerate your document processing and case preparation.</p>
            <Button href="/contact" variant="primary" size="lg">
              Request Access
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.disclaimer}>
        <div className="container">
          <div className={styles.disclaimerBox}>
            <p>
              <strong>Note:</strong> Deale Legal Systems provides document intelligence and processing 
              capabilities only. All outputs are derived from uploaded documents and do not constitute 
              legal advice, opinions, or recommendations.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

