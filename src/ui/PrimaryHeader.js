import React from 'react'
import { NavLink } from 'react-router-dom'
// import style from './PrimaryHeader.css'
import styled from 'styled-components'

/**
 *
 *
 * @param {*} {buttonName='按钮'}
 */
const Button = ({buttonName='按钮'}) => (
  <button>{buttonName}</button>
)

const PrimaryHeader = () => (
  <header className="primary-header">
    <h1>Welcome to our app!</h1>
    <nav className="nav">
      <NavLink to="/app" exact activeClassName="active">Home</NavLink>
      <NavLink to="/app/users" activeClassName="active">Users</NavLink>
      <NavLink to="/app/products" activeClassName="active">Products</NavLink>
      <Button></Button>
      <Button></Button>
    </nav>
  </header>
)

export default PrimaryHeader