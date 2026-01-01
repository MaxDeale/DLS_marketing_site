import styles from './page.module.scss'

export const metadata = {
  title: 'About | Deale Legal Systems',
  description: 'Learn about Deale Legal Systems and our mission to provide document intelligence infrastructure for law firms.',
}

export default function About() {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>About Deale Legal Systems</h1>
            <p className={styles.subtitle}>
              We provide document intelligence infrastructure for law firms, enabling efficient 
              case material processing without replacing legal expertise.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionContent}>
            <h2>Our Mission</h2>
            <p>
              Deale Legal Systems exists to transform how law firms process and understand legal 
              documents. We believe that document intelligence should augment legal professionals, 
              not replace them.
            </p>
            <p>
              Our platform provides the infrastructure for document classification, extraction, 
              summarization, and retrieval—enabling legal teams to focus on what matters most: 
              providing legal expertise and strategic counsel to their clients.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.positioning}>
        <div className="container">
          <div className={styles.positioningContent}>
            <h2>Our Positioning</h2>
            <div className={styles.positioningGrid}>
              <div className={styles.positionCard}>
                <h3>What We Are</h3>
                <ul>
                  <li>Document intelligence platform</li>
                  <li>Case material processing infrastructure</li>
                  <li>Legal tech tool for law firms</li>
                  <li>Source-grounded document processing</li>
                </ul>
              </div>
              <div className={styles.positionCard}>
                <h3>What We Are Not</h3>
                <ul>
                  <li>Not a law firm</li>
                  <li>Not a legal advisor</li>
                  <li>Not a source of legal opinions</li>
                  <li>Not a replacement for legal judgment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Source Grounding</h3>
              <p>
                Every output is traceable to source documents. We believe in transparency and 
                verifiability in document intelligence.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Professional Respect</h3>
              <p>
                We respect the expertise of legal professionals. Our platform supports their work 
                without attempting to replace their judgment.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Security First</h3>
              <p>
                Legal documents are sensitive. We prioritize security, compliance, and data 
                protection in everything we build.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Enterprise Ready</h3>
              <p>
                Built for law firms and legal teams that need reliable, scalable, and compliant 
                document processing infrastructure.
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
              <strong>Deale Legal Systems is not a law firm and does not provide legal advice, 
              opinions, predictions, or recommendations.</strong> Our platform performs document 
              classification, extraction, summarization, and retrieval of uploaded legal documents only.
            </p>
            <p>
              All outputs are derived strictly from the documents you upload and do not constitute 
              legal analysis, strategy, or advice. Legal professionals must review all outputs and 
              exercise their professional judgment in using the information provided.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

