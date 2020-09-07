import React, { Component } from 'react'
import './Verse.css'
import { Animated } from "react-animated-css";
import {fetchData} from './helpers'
class Verse extends Component {
    state = {
        Verse: ''
    }
    // bibleId from the params
    bibleId = this.props.verse.bibleId
    // verse id from the params
    id = this.props.verse.id
    // same as always. onMount, fetch data from api. See 'helpers.js'
    componentDidMount() {
        //          name                            api endpoint                            this
        //           v                                  v                                     v
        fetchData('Verse', `/v1/bibles/${this.bibleId}/verses/${this.id}?content-type=text`, this)
    }
    render() {
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <p>
                    {this.state.Verse}
                </p>
            </Animated>
        )
    }
}
export default Verse