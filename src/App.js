import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  SetPageSize=5;
  api=process.env.REACT_APP_api2
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })

  }
  render() {
     

    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color="rgb(235, 118, 9)"
        height={3}
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/" element={<News key="general" setProgress={this.setProgress} setProgress={this.setProgress} useApi={this.api} setProgress={this.setProgress}  pageSize={this.SetPageSize} country="in" category="general"/>}>
          </Route>
          <Route exact path="/business" element={<News key="business" setProgress={this.setProgress} useApi={this.api} pageSize={this.SetPageSize} country="in" category="business"/>}>
          </Route>
          <Route exact path="/entertainment" element={<News key="entertainment" setProgress={this.setProgress} useApi={this.api} pageSize={this.SetPageSize} country="in" category="entertainment"/>}>
          </Route>
          <Route exact path="/health" element={<News key="health" setProgress={this.setProgress} useApi={this.api} pageSize={this.SetPageSize} country="in" category="health"/>}>
          </Route>
          <Route exact path="/science" element={<News key="science" setProgress={this.setProgress} useApi={this.api} pageSize={this.SetPageSize} country="in" category="science"/>}>
          </Route>
          <Route exact path="/sports" element={<News key="sports" setProgress={this.setProgress} useApi={this.api} pageSize={this.SetPageSize} country="in" category="sports"/>}>
          </Route>
          <Route exact path="/technology" element={<News key="technology" setProgress={this.setProgress} useApi={this.api} pageSize={this.SetPageSize} country="in" category="technology"/>}>
          </Route>
        </Routes>
        </Router>
      </div>
    )
  }
}


export default App;
