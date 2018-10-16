import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './PrimaryHeader.css'

const PrimaryHeader = () => (
  <header className="primary-header">
    <h1>Welcome to our app!</h1>
    <nav className="nav">
      <NavLink to="/app" exact activeClassName={style.active}>Home</NavLink>
      <NavLink to="/app/users" activeClassName="active">Users</NavLink>
      <NavLink to="/app/products" activeClassName="active">Products</NavLink>
    </nav>
  </header>
)

export default PrimaryHeader