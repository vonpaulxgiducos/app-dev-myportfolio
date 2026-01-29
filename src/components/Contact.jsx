import './Contact.css'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: false, message: '' })

    try {
      // Create FormData from the form element
      const formDataToSend = new FormData(e.target)
      formDataToSend.append('access_key', '9b15141a-f37e-4dc1-b221-7ec5c13689ef')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: 'Message sent successfully! I will get back to you soon.'
        })
        setFormData({ name: '', email: '', message: '' })
        e.target.reset()
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: false, message: '' })
        }, 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: '❌ Something went wrong. Please try again or email me directly.'
      })
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: '✉',
      label: 'Email',
      value: 'vonpaul.giducos@email.com',
      link: 'mailto:vonpaul.giducos@email.com'
    },
    {
      icon: '☎',
      label: 'Phone',
      value: '+63 976 042 9330',
      link: 'tel:+639760429330'
    },
    {
      icon: '⚲',
      label: 'Location',
      value: 'Philippines',
      link: null
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'linkedin.com/in/vongiducos',
      link: 'https://linkedin.com/in/vongiducos'
    }
  ]

  return (
    <section className="contact">
      <div className="contact-content">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          I'm currently open to opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="contact-container">
          <div className="contact-info-section">
            <h3>Contact Information</h3>
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <span className="contact-icon">{info.icon}</span>
                  <div className="contact-details">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Send a Message</h3>
            
            {status.message && (
              <div className={`form-status ${status.error ? 'error' : 'success'}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="submit-button"
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
