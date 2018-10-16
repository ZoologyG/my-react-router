/*
 * @Author: Chen Baolong 
 * @Date: 2018-10-15 18:47:30 
 * @Last Modified by: Chen Baolong
 * @Last Modified time: 2018-10-15 18:48:38
 */
import React from 'react'
import { Link } from 'react-router-dom'

/**
 *
 *
 * @param {*} { match }
 */
const BrowseUsersPage = ({ match }) => (
  <div>
    Browse Users
    <ul>
      <li><Link to={`${match.path}/1`}>Brad</Link></li>
      <li><Link to={`${match.path}/2`}>Chris</Link></li>
      <li><Link to={`${match.path}/3`}>Michael</Link></li>
      <li><Link to={`${match.path}/4`}>Ryan</Link></li>
    </ul>
  </div>
)

export default BrowseUsersPage