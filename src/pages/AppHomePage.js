/*
 * @Author: Chen Baolong 
 * @Date: 2018-10-15 18:08:04 
 * @Last Modified by: mshop[Chen Baolong]
 * @Last Modified time: 2018-10-16 20:22:35
 */
import React from 'react'
import { logout } from '@/utils/xhr'
import styles from './AppHomePage.css'

/**
 *
 *
 * @param {*} { history }
 */
const AppHomePage = ({ history }) => (
  <div className={styles.title}>
  
    <h1>App Home Page</h1>
    <h1>App Home Page</h1>
    <h1>App Home Page</h1>
    <h1>App Home Page</h1>

    <br />

    <button onClick={() => {
      logout().then(() => {
        history.push('/')
      })
    }}>Logout</button>

  </div>
)

export default AppHomePage