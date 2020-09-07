import React, { Component } from 'react'
import Book from './Book'
import Loader from './Loader'
import { Row, Col } from 'react-bootstrap'
import './Books.css'
import {fetchData} from './helpers'
class Books extends Component {
    state = {
        Books: [],
        Loading: true
    }
    bibleId = this.props.match ? this.props.match.params.bibleId : '06125adad2d5898a-01'
    componentDidMount() {
        fetchData('Books', `/v1/bibles/${this.bibleId}/books`, this )
    }
    render() {
        return (
            this.state.Loading 
            ?   <Loader/>
            :   <div className='Books'>
                    <Row className='Book-cont'>
                        {this.state.Books.map(b => (
                            <Col key={b.id} xs={6} md={4} lg={3}>
                                <Book props={this.props} book={b} />
                            </Col>
                        ))}
                    </Row>
                </div>
        )
    }
}
export default Books