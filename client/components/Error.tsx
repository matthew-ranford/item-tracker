import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

function Error() {
  return (
    <div className="error">
      <FontAwesomeIcon icon={faExclamationCircle} />
      <p className="data">Error loading the data...</p>
    </div>
  )
}

export default Error

// CSS styling in itemslist.css
