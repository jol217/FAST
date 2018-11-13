import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CreateListing from '../CreateListing/create_listing'
import ForgotPassword from '../ForgotPassword/forgot_password'
import Home from '../Home/home'
import Login from '../Login/login'
import Messages from '../Messages/messages'
import MyListings from '../MyListings/my_listings'
import Profile from '../Profile/profile'
import Register from '../Register/register'
import TransactionHistory from '../TransactionHistory/transaction_history'

const Main = () => (
  <Switch>
    <Route exact path='/' component={Login}/>
    <Route path='/create_listing' component={CreateListing}/>
    <Route path='/forgot_password' component={ForgotPassword}/>
    <Route path='/home' component={Home}/>
    <Route path='/login' component={Login}/>
    <Route path='/messages' component={Messages}/>
    <Route path='/my_listings' component={MyListings}/>
    <Route path='/profile' component={Profile}/>
    <Route path='/register' component={Register}/>
    <Route path='/transaction_history' component={TransactionHistory}/>
  </Switch>
)

export default Main