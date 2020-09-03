import React, { Component } from 'react'
import Bibles from './Bibles'
import Books from './Books'
import Chapters from './Chapters'
import Verses from './Verses'
import './custom.scss';
import './App.css';
import { Switch, Route } from 'react-router-dom'

const BASE_API = 'https://api.scripture.api.bible'
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/bibles' render={(p) => <Bibles BASE_API={BASE_API} props={p} />} />
          <Route exact path='/bibles/:bibleId/books' render={(p) => <Books BASE_API={BASE_API} props={p} />} />
          <Route exact path='/bibles/:bibleId/books/:bookId/chapters' render={(p) => <Chapters BASE_API={BASE_API} props={p} />} />
          <Route exact path='/bibles/:bibleId/books/:bookId/chapters/:chapterId/verses' render={(p) => <Verses BASE_API={BASE_API} props={p} />}/>
          <Route exact path='/bibles/:bibleId/search'/>
        </Switch>
      </div>
    )
  }
}
export default App;