import '../styles/homepage.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'

function Homepage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: '',
  })

  useEffect(() => {
    const mainLeft = document.querySelector('.main-left')
    mainLeft?.classList.add('slide-in')
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()

    const { name, email, comments } = formData
    if (!name || !email || !comments) {
      alert('Please fill in all fields')
      return
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: comments,
    }

    emailjs.init('3F64Uwf82y_srndD5')
    emailjs
      .send('service_9pwwz21', 'template_k9u7mtg', templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response)
        alert('Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          comments: '',
        })
      })
      .catch((error) => {
        console.error('Error sending email:', error)
        alert('Failed to send message. Please try again later.')
      })
  }

  return (
    <>
      <section className="hero">
        <div className="main-left">
          <h1 className="header-left">
            Keep track of the items you've lent so you always know where they
            are
          </h1>
          <p className="p-left">Always misplacing your items?</p>

          <p className="p-left">Simpy add an item to get started </p>
          <button className="button-left">
            The key to tracking your items
          </button>
        </div>
        <div className="main-right">
          <h1 className="header-right">Sign Up</h1>
        </div>
      </section>

      <section className="form">
        <h2 className="form-header">Contact me!</h2>
        <form className="contact-form" onSubmit={handleEmailSubmit}>
          <label id="name-label" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name.."
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>

          <label id="email-label" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email.."
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>

          <label id="comments" htmlFor="comments">
            <br />
            <textarea
              id="comment"
              name="comments"
              rows="5"
              cols="10"
              placeholder="Message..."
              value={formData.comments}
              onChange={handleInputChange}
            ></textarea>
          </label>
          <button className="button-contact" type="submit">
            Send Message
          </button>
        </form>
      </section>

      <footer className="contact">
        <h2 className="contact-header">Contact</h2>
        <div className="icons">
          <i className="fa-brands fa-instagram">
            <span className="icons">Instagram</span>
          </i>
          <i className="fa-solid fa-envelope">
            <span className="icons">Email</span>
          </i>
          <i className="fa-solid fa-phone">
            <span className="icons">Phone</span>
          </i>
          <i className="fa-brands fa-github">
            <span className="icons">GitHub</span>
          </i>
          <i className="fa-brands fa-linkedin">
            <span className="icons">LinkedIn</span>
          </i>
        </div>
      </footer>
    </>
  )
}
export default Homepage

// TODO:
// Add link to add item page in button
// Maybe change navbar so the hero section goes to the top of the page and it doesnt actually show a navbar
// Contact form
