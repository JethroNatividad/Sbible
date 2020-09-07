import React, { Component } from 'react'
import Books from './Books'
import {Link} from 'react-router-dom'
import {Animated} from "react-animated-css";

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <div className='text-center mb-5'>
                    <Animated animationIn="fadeIn" animationInDuration={1000} animationOut="fadeOut" isVisible={true}>
                        <img src='https://fontmeme.com/permalink/200906/dddd2f3a9ea6026d93546dc6bf2367da.png' alt='SBIBLE'/>
                    </Animated>
                    <Animated animationInDuration={2000} animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
                        <h3>Grow in your walk with the Lord.</h3>
                    </Animated>
                </div>
                <div className='text-center mt-5 mb-5'>
                    <Animated animationIn="swing" animationInDuration={2000} animationOut="fadeOut" isVisible={true}>
                        <Link className='btn btn-outline-dark btn-lg' to='/bibles'>Choose a bible</Link>
                    </Animated>
                </div>
                <div>
                    <p>Read the (ASV) American Standard Version</p>
                    <Books/>
                </div>
            </div>
        )
    }
}
export default Home