/*
 * @Author: Chen Baolong 
 * @Date: 2018-10-15 18:45:24 
 * @Last Modified by: Chen Baolong
 * @Last Modified time: 2018-10-15 18:45:51
 */

import React from 'react'

/**
 *
 *
 * @param {*} { match }
 */
const UserProfilePage = ({ match }) => (
  <div>
    User Profile for user: {match.params.userId}
  </div>
)

export default UserProfilePage