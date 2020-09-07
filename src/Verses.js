import React, { Component } from 'react'
import Verse from './Verse'
import {fetchData} from './helpers'
class Verses extends Component {
    state = {
        Verses: []
    }
    // BibleId from the parameters
    bibleId = this.props.match.params.bibleId
    // chapterId from the parameters
    chapterId = this.props.match.params.chapterId
    // I didn't pass the book title and the chapter

    // and I dont want to request from the api using the chapter id just to take the book name, so

    // The id of a chapter looks like this 'GEN.1' , replacing the '.' between GEN and 1 with ' CHAPTER '
    // it will look like this 'GEN CHAPTER 1'
    header = this.chapterId.replace('.', ' CHAPTER ')
    //onMount, fetch data from api. See 'helpers.js'
    componentDidMount(){
        //          name                            api endpoint                            this
        //           v                                  v                                     v
        fetchData('Verses', `/v1/bibles/${this.bibleId}/chapters/${this.chapterId}/verses`, this)
    }
    render() {
        return (
            <div>
                <h2>{this.header}</h2>
                {this.state.Verses.map(v => (
                    <Verse verse={v} props={this.props} key={v.id}/>
                ))}
            </div>
        )
    }
}
export default Verses