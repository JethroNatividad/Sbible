import React, { Component } from 'react'
import Book from './Book'
import axios from 'axios'

class Books extends Component {
    state = {
        Books: []
    }
    bibleId = this.props.props.match.params.bibleId
    fetchBooks = () => {
        axios.get(`${this.props.BASE_API}/v1/bibles/${this.bibleId}/books`, {
            headers: {
            "api-key": '530486e6f07ce795f80f622c3f223cea'
            }
        }).then(res =>{
            console.log(res)
            this.setState({Books: res.data.data})
        })
    }
    componentDidMount(){
        this.fetchBooks()
    }
    render() {
        return (
            <div className='Books'>
                {this.state.Books.map(b => (
                    <Book props={this.props.props} book={b} key={b.id} />
                ))}
            </div>
        )
    }
}
export default Books