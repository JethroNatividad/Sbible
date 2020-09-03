import React, { Component } from 'react'

class Bible extends Component {
    handleClick = () => {
        this.props.props.history.push(`/bibles/${this.props.bible.id}/books`)
    }
    render() {
        const {name, abbreviation, description} = this.props.bible
        return (
            <div onClick={this.handleClick} className='Bible'>
                {`${abbreviation} ${name} - ${description}`}
            </div>
        )
    }
}
export default Bible