// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="main-app-container">
    <h1>Alert Notifications</h1>
    <Notification>
      <div className="notification-container">
        <AiFillCheckCircle className="notification-icons success" />

        <div>
          <h1 className="notification-title success">Success</h1>
          <p className="notification-description">
            You can access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="notification-container">
        <RiErrorWarningFill className="notification-icons error" />

        <div>
          <h1 className="notification-title error">Error</h1>
          <p className="notification-description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="notification-container">
        <MdWarning className="notification-icons warning" />

        <div>
          <h1 className="notification-title warning">Warning</h1>
          <p className="notification-description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>

    <Notification>
      <div className="notification-container">
        <MdInfo className="notification-icons info" />

        <div>
          <h1 className="notification-title info">Info</h1>
          <p className="notification-description">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
