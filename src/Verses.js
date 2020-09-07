import React, { Component } from 'react'
import Verse from './Verse'
import {fetchData} from './helpers'
class Verses extends Component {
    state = {
        Verses: []
    }
    bibleId = this.props.match.params.bibleId
    chapterId = this.props.match.params.chapterId
    header = this.chapterId.replace('.', ' CHAPTER ')
    componentDidMount(){
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