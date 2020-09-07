import React, { Component } from 'react'
import Chapter from './Chapter'
import Loader from './Loader'
import { Row, Col } from 'react-bootstrap'
import {Animated} from "react-animated-css";
import {fetchData} from './helpers'

class Chapters extends Component {
    state = {
        Chapters: [],
        Loading: true
    }
    bibleId = this.props.match.params.bibleId
    bookId = this.props.match.params.bookId
    componentDidMount() {
        fetchData('Chapters', `/v1/bibles/${this.bibleId}/books/${this.bookId}/chapters`, this)
    }
    render() {
        let chapters = this.state.Chapters.filter(c => c.number !== 'intro')
        return (
            this.state.Loading 
            ?   <Loader/>
            :
            <div className='Chapters'>
                <h1 style={{textAlign: 'center'}}>{this.state.Chapters[0].reference}</h1>
                <Row>
                    {chapters.map(c => (
                        <Col key={c.id} xs={12} md={2}>
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                <Chapter chapter={c} props={this.props} key={c.id} />
                            </Animated>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}
export default Chapters