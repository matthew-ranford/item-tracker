import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App'
import Homepage from './components/Homepage'
import ItemsList from './components/ItemsList.tsx'
import AddNewItem from './components/AddNewItem.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Homepage />} />
    <Route path="/items" element={<ItemsList />} />
    <Route path="/items/add" element={<AddNewItem />} />
  </Route>
)
