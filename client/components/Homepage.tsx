import '../styles/homepage.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useEffect } from 'react'

function Homepage() {
  useEffect(() => {
    const mainLeft = document.querySelector('.main-left')
    mainLeft?.classList.add('slide-in')
  }, [])

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
        <form className="contact-form" method="post">
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

          <label id="comments" htmlFor="comments">
            <br />
            <textarea
              id="comment"
              name="comments"
              rows="5"
              cols="10"
              placeholder="Message..."
            ></textarea>
          </label>
          <button className="button-contact" type="submit">
            <a href="mailto:matt.ranford16@gmail.com" id="email-link">
              Send Message
            </a>
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
