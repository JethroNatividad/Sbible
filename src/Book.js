import React, { Component } from 'react'

class Book extends Component {
    handleClick = () => {
        this.props.props.history.push(`/bibles/${this.props.book.bibleId}/books/${this.props.book.id}/chapters`)
    }
    render() {
        const {name} = this.props.book
        return (
            <div onClick={this.handleClick} className='Book'>
                {name}
            </div>
        )
    }
}
export default Book