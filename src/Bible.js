import React, { Component } from 'react'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import {Animated} from "react-animated-css";
import './Bible.css'
class Bible extends Component {
    handleClick = () => {
        this.props.props.history.push(`/bibles/${this.props.bible.id}/books`)
    }
    render() {
        const {name, abbreviation, description} = this.props.bible
        return (
            <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
                <ListGroupItem onClick={this.handleClick} className='Bible'>
                    <p>
                        <span className='abbr'>{abbreviation}</span> <br/>{name} - <span className='desc'>{description}</span>
                    </p>
                </ListGroupItem>
            </Animated>
        )
    }
}
export default Bible