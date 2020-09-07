import React, { Component } from 'react'
import Home from './Home'
import Bibles from './Bibles'
import Books from './Books'
import Chapters from './Chapters'
import Verses from './Verses'
import NavBar from './NavBar'
import './App.css';
import './custom.scss';
import { Switch, Route } from 'react-router-dom'
import {Container} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar/>
        <Container style={{marginTop: '90px'}}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/bibles' component={Bibles} />
            <Route exact path='/bibles/:bibleId/books' component={Books} />
            <Route exact path='/bibles/:bibleId/books/:bookId/chapters' component={Chapters} />
            <Route exact path='/bibles/:bibleId/books/:bookId/chapters/:chapterId/verses' component={Verses} />
            <Route exact path='/bibles/:bibleId/search'/>
          </Switch>
        </Container>
      </div>
    )
  }
}

export default App;