import { Item } from '../../models/items'
import { getAllItems } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import DeleteItem from './DeleteItem'
import EditItem from './EditItem'
import Spinner from './Spinner'
import Error from './Error'
import '../styles/itemslist.css'
import '../styles/footer.css'

function ItemsList() {
  const {
    data: items,
    isLoading,
    isError,
    refetch,
  } = useQuery({ queryKey: ['items'], queryFn: getAllItems })
  // console.log(getAllItems())
  console.log(items)
  // items currently coming back as null
  // in aplClient changed request.get('/') to request.get('/api/v1/') now coming back as undefined
  // Promise currently getting rejected
  // ..... Hadn't set up the following in my server.ts file ;; server.use('/api/v1/', itemsRoute)
  // Data now displaying in insomnia and rendering on home page

  if (isError) {
    return <Error />
  }

  if (!items || isLoading) {
    return <Spinner />
  }

  const handleItemDelete = async () => {
    await refetch()
  }

  const handleItemEdit = async () => {
    await refetch()
  }

  return (
    <>
      <div className="all-items">
        <h1 className="items-header">Current Items Lent</h1>
        <ul className="items-list">
          {items.map((item: Item) => {
            // console.log(item)
            return (
              <>
                <li className="single-item" key={item.id}>
                  <strong className="bold">Person:</strong> {item.name} <br />
                  <strong className="bold">Item:</strong> {item.genre} <br />
                  <strong className="bold">Description:</strong>{' '}
                  {item.description} <br />
                  <strong className="bold">Date Lent:</strong> {item.dateLent}
                  <DeleteItem id={item.id} onSuccess={handleItemDelete} />
                  {/* <EditItem id={item.id} onSuccess={handleItemEdit} /> */}
                </li>
              </>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default ItemsList
