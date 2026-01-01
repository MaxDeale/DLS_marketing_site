import styles from './page.module.scss'

export const metadata = {
  title: 'How It Works | Deale Legal Systems',
  description: 'Learn how Deale Legal Systems processes legal documents through classification, extraction, and intelligent retrieval.',
}

export default function HowItWorks() {
  return (
    <div className={styles.howItWorks}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>How It Works</h1>
            <p className={styles.subtitle}>
              A step-by-step guide to our document intelligence platform—no technical jargon, just clear explanations.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.steps}>
        <div className="container">
          <div className={styles.stepList}>
            <div className={styles.stepItem}>
              <div className={styles.stepVisual}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                </div>
              </div>
              <div className={styles.stepContent}>
                <h2>Upload Your Documents</h2>
                <p>
                  Start by uploading your legal documents through our secure interface. You can upload 
                  individual files or batch upload entire case folders. Supported formats include PDF, 
                  Word documents, emails, and scanned images.
                </p>
                <p>
                  All documents are encrypted during upload and stored securely. You maintain full control 
                  over your data at all times.
                </p>
              </div>
            </div>

            <div className={styles.stepConnector}></div>

            <div className={styles.stepItem}>
              <div className={styles.stepVisual}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                  </svg>
                </div>
              </div>
              <div className={styles.stepContent}>
                <h2>Automatic Classification</h2>
                <p>
                  Our platform automatically classifies each document by type, relevance, and context. 
                  Documents are categorized as contracts, correspondence, pleadings, discovery materials, 
                  or other legal document types.
                </p>
                <p>
                  The classification engine understands legal document structures and can identify key 
                  metadata such as dates, parties, and document relationships.
                </p>
              </div>
            </div>

            <div className={styles.stepConnector}></div>

            <div className={styles.stepItem}>
              <div className={styles.stepVisual}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                </div>
              </div>
              <div className={styles.stepContent}>
                <h2>Information Extraction</h2>
                <p>
                  Key information is extracted from each document, including dates, parties, amounts, 
                  clauses, and legal terms. The extraction process identifies entities and relationships 
                  that are relevant to your case.
                </p>
                <p>
                  All extracted information is source-grounded, meaning every piece of data can be traced 
                  back to the original document.
                </p>
              </div>
            </div>

            <div className={styles.stepConnector}></div>

            <div className={styles.stepItem}>
              <div className={styles.stepVisual}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                  </svg>
                </div>
              </div>
              <div className={styles.stepContent}>
                <h2>Intelligent Indexing</h2>
                <p>
                  Documents are indexed using advanced semantic understanding, enabling intelligent 
                  search and retrieval. The RAG (Retrieval-Augmented Generation) pipeline creates 
                  searchable indexes that understand context and meaning, not just keywords.
                </p>
                <p>
                  This allows you to find relevant documents and passages using natural language queries, 
                  making it easy to locate information across large document sets.
                </p>
              </div>
            </div>

            <div className={styles.stepConnector}></div>

            <div className={styles.stepItem}>
              <div className={styles.stepVisual}>
                <div className={styles.stepNumber}>5</div>
                <div className={styles.stepIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 18H8"/>
                    <path d="M16 14H8"/>
                    <path d="M10 6H8"/>
                  </svg>
                </div>
              </div>
              <div className={styles.stepContent}>
                <h2>Access Structured Outputs</h2>
                <p>
                  Access your processed documents through various structured outputs:
                </p>
                <ul>
                  <li><strong>Document Summaries:</strong> Concise summaries of each document</li>
                  <li><strong>Extracted Entities:</strong> Dates, parties, amounts, and key terms</li>
                  <li><strong>Chronologies:</strong> Timeline views of events and documents</li>
                  <li><strong>Search Results:</strong> Relevant documents and passages based on queries</li>
                </ul>
                <p>
                  All outputs include source references, ensuring you can verify information and trace 
                  it back to the original documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.disclaimer}>
        <div className="container">
          <div className={styles.disclaimerBox}>
            <h3>Important Note</h3>
            <p>
              Deale Legal Systems processes and organizes your documents—it does not provide legal 
              advice, opinions, or recommendations. All outputs are derived strictly from the 
              documents you upload. Legal professionals must review all outputs and exercise their 
              professional judgment.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

