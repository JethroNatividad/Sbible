import React, { Component } from 'react'
import Verse from './Verse'
import axios from 'axios'
class Verses extends Component {
    state = {
        Verse: []
    }
    bibleId = this.props.props.match.params.bibleId
    chapterId = this.props.props.match.params.chapterId

    fetchVerse = () => {
        axios.get(`${this.props.BASE_API}/v1/bibles/${this.bibleId}/chapters/${this.chapterId}/verses`, {
            headers: {
            "api-key": '530486e6f07ce795f80f622c3f223cea'
            }
        }).then(res =>{
            console.log(res)
            this.setState({Verse: res.data.data})
        })
    }
    componentDidMount(){
        this.fetchVerse()
    }
    render() {
        return (
            <div>
                {this.state.Verse.map(v => (
                    <Verse BASE_API={this.props.BASE_API} verse={v} props={this.props.props} key={v.id}/>
                ))}
            </div>
        )
    }
}
export default Verses