import { Outlet } from 'react-router-dom'

// import AddNewItem from './AddNewItem'
import Header from './Header'
import Footer from './Footer'
// import Homepage from './Homepage'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <Homepage /> */}
      {/* // <AddNewItem /> } */}
    </>
  )
}

export default App
