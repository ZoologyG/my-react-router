import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrimaryHeader from '../ui/PrimaryHeader'
import AppHomePage from '../pages/AppHomePage'
import './PrimaryLayout.css'

// Sub Layouts
import UserSubLayout from './UserSubLayout'
import ProductSubLayout from './ProductSubLayout'

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <PrimaryHeader />
    <main style={{ border: '1px solid blue', marginTop: '10px' }}>
      <Switch>
        <Route path={`${match.path}`} exact component={AppHomePage} />
        <Route path={`${match.path}/users`} component={UserSubLayout} />
        <Route path={`${match.path}/products`} component={ProductSubLayout} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout