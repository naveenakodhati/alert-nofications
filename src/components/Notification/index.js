// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="row-styling">
      {children}
      <button type="button" className="delete-btn">
        <GrFormClose className="icon" />
      </button>
    </div>
  )
}

export default Notification
