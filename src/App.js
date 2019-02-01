import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from 'pages/Main'
import Followeds from 'pages/Followeds'

class App extends Component {  
  componentDidMount(){
    document.title = 'Followed List'
  }

  render() {
    return (      
      <Switch>
        <Route path='/' exact={true} component={ Main } />
        <Route path='/followed' component={ Followeds } />        
      </Switch>              
    )
  }
}

export default App;
