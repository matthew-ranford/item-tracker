import '../styles/homepage.css'

function Homepage() {
  return (
    <>
      <section className="hero">
        <div className="main-left">
          <h1 className="header-left">
            Keep track of the items you've lent so you always know where they
            are
          </h1>
          <p className="p-left">Always misplacing your items?</p>

          <p className="p-left">Simpy add an item below to get started </p>
          <button className="button-left">
            The key to tracking your items
          </button>
        </div>
        <div className="main-right">
          <h1 className="header-right">Sign Up</h1>
        </div>
      </section>
    </>
  )
}

export default Homepage

// TODO:
// Add link to add item page in button
// Maybe change navbar so the hero section goes to the top of the page and it doesnt actually show a navbar
