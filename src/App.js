import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import HomePage from './HomePage'
import OrderPage from './Store/OrderPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={< HomePage />}></Route>
          <Route exact path='/order' element={< OrderPage />}></Route>
        </Routes>
      </Router>
    )
  }
}
