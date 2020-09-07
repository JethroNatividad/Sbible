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
    //grab the bibleId from the route parameters. this component is reused on the homepage with the id of ASV bible
    bibleId = this.props.match ? this.props.match.params.bibleId : '06125adad2d5898a-01' //<<<<< this one
    //onMount, fetch data from api. See 'helpers.js'
    componentDidMount() {
        //          name              api endpoint             this
        //           v                    v                      v
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