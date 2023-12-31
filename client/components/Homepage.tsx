import '../styles/homepage.css'
import '../styles/footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
      <section className="hero" id="about">
        <div className="main-left">
          <h1 className="header-left">
            Keep track of the items you've lent so you always know where they
            are
          </h1>
          <p className="p-left">Always misplacing your items?</p>

          <p className="p-left">Simpy add an item to get started </p>
          <button className="button-left">
            <Link to={'/items'} className="button-link">
              The key to tracking your items
            </Link>
          </button>
        </div>
        <div className="main-right">
          <form className="signup-form">
            <label id="name-label" htmlFor="name">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name.."
                required
              />
            </label>

            <label id="email-label" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email.."
                required
              />
            </label>
            <button className="button-signup" type="submit">
              SIGN UP
            </button>
          </form>
        </div>
      </section>

      <section className="form" id="contact">
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
              required
            ></textarea>
          </label>
          <button className="button-contact" type="submit">
            Send Message
          </button>
        </form>
      </section>
    </>
  )
}
export default Homepage

// TODO:
// Link to About, Contact, Log in sections (Need to remove navbar links when on a different component)
