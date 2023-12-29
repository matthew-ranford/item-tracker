import { Outlet } from 'react-router-dom'

// import AddNewItem from './AddNewItem'
import Header from './Header'
// import Homepage from './Homepage'

function App() {
  return (
    <>
      <Header />
      <Outlet />

      {/* <Homepage /> */}
      {/* // <AddNewItem /> } */}
    </>
  )
}

export default App
