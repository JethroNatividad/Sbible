import React, { Component } from 'react'
import Bible from './Bible'
import './Bible.css'
import axios from 'axios';
class Bibles extends Component {
    state = {
        Bibles: []
    }
    fetchBibles = () => {
        axios.get(`${this.props.BASE_API}/v1/bibles?language=eng`, {
            headers: {
            "api-key": '530486e6f07ce795f80f622c3f223cea'
            }
        }).then(res =>{
            this.setState({Bibles: res.data.data})
        })
    }
    componentDidMount(){
        this.fetchBibles()
    }
    render() {
        return (
            <div className='Bibles'>
                <ul>
                    {this.state.Bibles.map(b => (
                        <Bible props={this.props.props} key={b.id} bible={b}/>
                    ))}
                </ul>
            </div>
        )
    }
}
export default Bibles;
