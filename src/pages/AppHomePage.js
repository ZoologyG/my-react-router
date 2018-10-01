import React from 'react'
import { logout } from '../utils/xhr'
import styles from './AppHomePage.css'

const AppHomePage = ({ history }) => (
  <div className={styles.title}>
    App Home Page
    <br /><br />
    <button onClick={() => {
      logout().then(() => {
        history.push('/')
      })
    }}>Logout</button>
  </div>
)

export default AppHomePage