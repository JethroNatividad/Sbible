import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap';
import './Loader.css'
class Loader extends Component {
    render() {
        return (
            <div className='Loader'>
                <Spinner animation="border" variant='bitDark' /> 
            </div>
        )
    }
}
export default Loader