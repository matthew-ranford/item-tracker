// import { Outlet } from 'react-router-dom'

import ItemsList from './ItemsList'
import AddNewItem from './AddNewItem'
import Homepage from './Homepage'

function App() {
  return (
    <>
      <Homepage />
      <section className="main">
        {/* <ItemsList />
        <AddNewItem /> */}
      </section>
    </>
  )
}

export default App
