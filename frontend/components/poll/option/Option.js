import React, { Component } from 'react'

class Option extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.option.description}
                </div>
            </div>
        )
    }
}

export default Option