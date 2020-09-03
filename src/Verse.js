import React, { Component } from 'react'
import axios from 'axios'

class Verse extends Component {
    state = {
        Verse: ''
    }
    bibleId = this.props.verse.bibleId
    id = this.props.verse.id
    fetchVerse = () => {
        axios.get(`${this.props.BASE_API}/v1/bibles/${this.bibleId}/verses/${this.id}?content-type=text`, {
            headers: {
            "api-key": '530486e6f07ce795f80f622c3f223cea'
            }
        }).then(res =>{
            this.setState({Verse: res.data.data.content})
        })
    }
    componentDidMount(){
        this.fetchVerse()
    }
    render() {
        return (
            <div>
                <p>
                    {this.state.Verse}
                </p>
            </div>
        )
    }
}
export default Verse