import React, { Component } from 'react'
import Chapter from './Chapter'
import axios from 'axios'
class Chapters extends Component {
    state = {
        Chapters: []
    }
    bibleId = this.props.props.match.params.bibleId
    bookId = this.props.props.match.params.bookId
    fetchChapters = () => {
        axios.get(`${this.props.BASE_API}/v1/bibles/${this.bibleId}/books/${this.bookId}/chapters`, {
            headers: {
            "api-key": '530486e6f07ce795f80f622c3f223cea'
            }
        }).then(res =>{
            console.log(res)
            this.setState({Chapters: res.data.data})
        })
    }
    componentDidMount(){
        this.fetchChapters()
    }
    render() {
        return (
            <div>
                {this.state.Chapters.map(c => (
                    <Chapter chapter={c} props={this.props.props} key={c.id}/>
                ))}
            </div>
        )
    }
}
export default Chapters