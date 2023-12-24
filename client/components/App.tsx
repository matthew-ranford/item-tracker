import { Outlet } from 'react-router-dom'

// import ItemsList from './ItemsList'
// import AddNewItem from './AddNewItem'
import Header from './Header'
// import Homepage from './Homepage'

function App() {
  return (
    <>
      <Header />
      <Outlet />

      {/* <Homepage /> */}
      {/* <ItemsList />
        <AddNewItem /> */}
    </>
  )
}

export default App
