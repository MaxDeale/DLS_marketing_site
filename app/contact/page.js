'use client'

import { useState } from 'react'
import styles from './page.module.scss'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would submit to a backend API
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Request Access</h1>
            <p className={styles.subtitle}>
              Interested in Deale Legal Systems? Request access to learn more about our document 
              intelligence platform for law firms.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formContainer}>
            {submitted ? (
              <div className={styles.successMessage}>
                <h2>Thank You</h2>
                <p>
                  Your request has been received. Our team will contact you shortly to discuss 
                  how Deale Legal Systems can support your document intelligence needs.
                </p>
              </div>
            ) : (
              <>
                <div className={styles.formHeader}>
                  <h2>Get in Touch</h2>
                  <p>
                    Fill out the form below and we'll get back to you as soon as possible. 
                    All fields are required.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="organization">Organization / Law Firm</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="role">Role / Title</label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your document processing needs, use cases, or questions..."
                      required
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Submit Request
                  </button>
                </form>
              </>
            )}
          </div>

          <div className={styles.infoBox}>
            <h3>What Happens Next?</h3>
            <ul>
              <li>Our team will review your request within 1-2 business days</li>
              <li>We'll schedule a call to discuss your specific needs</li>
              <li>We'll provide information about our platform and pricing</li>
              <li>If approved, we'll set up your account and provide access</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.disclaimer}>
        <div className="container">
          <div className={styles.disclaimerBox}>
            <p>
              <strong>Note:</strong> Deale Legal Systems is currently available by request only. 
              We work directly with law firms and legal teams to ensure proper setup and compliance. 
              There is no self-serve signup available at this time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

