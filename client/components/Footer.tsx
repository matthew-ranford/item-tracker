import '../styles/footer.css'

function Footer() {
  return (
    <>
      <footer className="contact">
        <div className="icons">
          <a
            href="https://github.com/matthew-ranford"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          {/* <span className="icon">GitHub</span> */}
          <a
            href="https://www.linkedin.com/in/matthew-ranford-23b759261/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          {/* <span className="icon">LinkedIn</span> */}
          <a
            href="mailto:matt.ranford16@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          {/* <span className="icon">Email</span> */}
          <a href="tel: 020-4099-4076" target="_blank" rel="noreferrer">
            <i className="fa-solid fa-phone"></i>
          </a>
          {/* <span className="icon">Phone</span> */}
          <a
            href="https://www.instagram.com/mattranny/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          {/* <span className="icon">Instagram</span> */}
        </div>
      </footer>
    </>
  )
}

export default Footer
