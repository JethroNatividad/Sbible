import React, { Component } from 'react'
import Bible from './Bible'
import Loader from './Loader'
import './Bibles.css'
import { ListGroup } from 'react-bootstrap';
import { Animated } from "react-animated-css";
import {fetchData} from './helpers'
class Bibles extends Component {
    state = {
        Bibles: [],
        Loading: true
    }
    componentDidMount() {
        fetchData('Bibles', '/v1/bibles?language=eng',this)
        
    }
    render() {
        return (
            <div className='Bibles'>
                <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
                    <h1>CHOOSE A BIBLE</h1>
                </Animated>
                <hr />
                {
                    this.state.Loading 
                    ? <Loader/>
                    : <div className='Bibles-cont'>
                            <ListGroup>
                                {this.state.Bibles.map(b => (
                                    <Bible props={this.props} key={b.id} bible={b} />
                                ))}
                            </ListGroup>
                        </div>
                }
            </div>
        )
    }
}
export default Bibles;
