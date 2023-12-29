// CSS styling in itemslist.css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Spinner() {
  return (
    <div className="spinner">
      <FontAwesomeIcon icon={faSpinner} spin />
      <p className="data">Loading data...</p>
    </div>
  )
}

export default Spinner
