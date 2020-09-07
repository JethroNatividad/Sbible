import React, { Component } from 'react'
import './Book.css'
import {Animated} from "react-animated-css";
import {withRouter} from 'react-router-dom'
class Book extends Component {
    //on clicking a book
    handleClick = () => {
        //redirect to its page with the chapters listed
        this.props.history.push(`/bibles/${this.props.book.bibleId}/books/${this.props.book.id}/chapters`)
    }
    render() {
        const {name} = this.props.book
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <div onClick={this.handleClick} className='Book'>
                    {name}
                </div>
            </Animated>
        )
    }
}
export default withRouter(Book)