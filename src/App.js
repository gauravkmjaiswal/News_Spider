import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {

  render() {
    let SetPageSize=5;
    let api1="d83d3319d9c540b3bf5a492670aa841a"
    let api2="db05e412641f4991a294284f82c1e131"
    let api=api1
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" useApi={api} useApi={api} pageSize={SetPageSize} country="in" category="general"/>}>
          </Route>
          <Route exact path="/business" element={<News key="business" useApi={api} pageSize={SetPageSize} country="in" category="business"/>}>
          </Route>
          <Route exact path="/entertainment" element={<News key="entertainment" useApi={api} pageSize={SetPageSize} country="in" category="entertainment"/>}>
          </Route>
          <Route exact path="/health" element={<News key="health" useApi={api} pageSize={SetPageSize} country="in" category="health"/>}>
          </Route>
          <Route exact path="/science" element={<News key="science" useApi={api} pageSize={SetPageSize} country="in" category="science"/>}>
          </Route>
          <Route exact path="/sports" element={<News key="sports" useApi={api} pageSize={SetPageSize} country="in" category="sports"/>}>
          </Route>
          <Route exact path="/technology" element={<News key="technology" useApi={api} pageSize={SetPageSize} country="in" category="technology"/>}>
          </Route>
        </Routes>
        </Router>
      </div>
    )
  }
}


export default App;
