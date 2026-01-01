import styles from './page.module.scss'

export const metadata = {
  title: 'Product | Deale Legal Systems',
  description: 'Document intelligence platform with classification, extraction, summarization, and RAG-powered retrieval for legal documents.',
}

export default function Product() {
  return (
    <div className={styles.product}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Document Intelligence Platform</h1>
            <p className={styles.subtitle}>
              Transform unstructured legal documents into structured, searchable, and actionable intelligence.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.pipeline}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Processing Pipeline</h2>
          <p className={styles.sectionDescription}>
            Our platform processes documents through a sophisticated pipeline designed for legal document intelligence.
          </p>

          <div className={styles.pipelineSteps}>
            <div className={styles.pipelineStep}>
              <div className={styles.stepHeader}>
                <div className={styles.stepIcon}>1</div>
                <h3>Document Ingestion</h3>
              </div>
              <div className={styles.stepContent}>
                <p>
                  Securely upload legal documents in multiple formats including PDF, Word, email, 
                  and scanned images. Our platform supports batch uploads and integrates with 
                  common legal document management systems.
                </p>
                <ul>
                  <li>Multi-format support (PDF, DOCX, TXT, images)</li>
                  <li>Batch processing capabilities</li>
                  <li>Secure upload with encryption</li>
                  <li>Document validation and preprocessing</li>
                </ul>
              </div>
            </div>

            <div className={styles.pipelineStep}>
              <div className={styles.stepHeader}>
                <div className={styles.stepIcon}>2</div>
                <h3>Classification & Indexing</h3>
              </div>
              <div className={styles.stepContent}>
                <p>
                  Documents are automatically classified by type, relevance, date, parties, and 
                  legal context. Our classification engine understands legal document structures 
                  and categorizes materials accordingly.
                </p>
                <ul>
                  <li>Document type classification</li>
                  <li>Relevance scoring</li>
                  <li>Metadata extraction</li>
                  <li>Full-text indexing</li>
                </ul>
              </div>
            </div>

            <div className={styles.pipelineStep}>
              <div className={styles.stepHeader}>
                <div className={styles.stepIcon}>3</div>
                <h3>RAG Pipelines</h3>
              </div>
              <div className={styles.stepContent}>
                <p>
                  Retrieval-Augmented Generation (RAG) pipelines enable intelligent document search 
                  and context-aware retrieval. Find relevant passages and documents based on semantic 
                  understanding, not just keyword matching.
                </p>
                <ul>
                  <li>Semantic search and retrieval</li>
                  <li>Context-aware document ranking</li>
                  <li>Cross-document relationship mapping</li>
                  <li>Source-grounded query responses</li>
                </ul>
              </div>
            </div>

            <div className={styles.pipelineStep}>
              <div className={styles.stepHeader}>
                <div className={styles.stepIcon}>4</div>
                <h3>Structured Outputs</h3>
              </div>
              <div className={styles.stepContent}>
                <p>
                  Access processed documents through structured outputs including summaries, 
                  extracted entities, chronologies, and searchable indexes. All outputs are 
                  derived directly from your uploaded documents.
                </p>
                <ul>
                  <li>Document summaries</li>
                  <li>Entity extraction (dates, parties, amounts)</li>
                  <li>Chronology generation</li>
                  <li>Structured data exports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Key Capabilities</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3>Document Classification</h3>
              <p>
                Automatically categorize legal documents by type, including contracts, 
                correspondence, pleadings, discovery materials, and more.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>Information Extraction</h3>
              <p>
                Extract key information including dates, parties, amounts, clauses, and 
                legal terms from documents with high accuracy.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>Summarization</h3>
              <p>
                Generate concise summaries of legal documents that capture essential 
                information while maintaining source fidelity.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>Intelligent Retrieval</h3>
              <p>
                Find relevant documents and passages using natural language queries 
                powered by advanced RAG technology.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>Chronology Building</h3>
              <p>
                Automatically organize documents and events chronologically to support 
                case preparation and timeline analysis.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3>Source Grounding</h3>
              <p>
                All outputs include source references, ensuring traceability and 
                verification of information back to original documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.disclaimer}>
        <div className="container">
          <div className={styles.disclaimerBox}>
            <h3>Important Disclaimer</h3>
            <p>
              <strong>Deale Legal Systems does not provide legal advice, opinions, predictions, 
              or recommendations.</strong> Our platform performs document classification, extraction, 
              summarization, and retrieval of uploaded legal documents only. All outputs are derived 
              strictly from the documents you upload and do not constitute legal analysis or strategy.
            </p>
            <p>
              The platform is a tool for document intelligence and case material processing. 
              Legal professionals must review all outputs and exercise their professional judgment 
              in using the information provided.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

