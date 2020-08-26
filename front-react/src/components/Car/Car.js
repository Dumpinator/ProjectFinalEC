import React from 'react'
import './Car.css'

class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            brand: "Ford",
            model: "mustang",
            color: "red",
            year: 1664
        }
    }

    changeColor = () => {
        this.setState({ color: "blue" })
    }

    render() {
        console.log(this.state);
        return (
            <>
                <h1>My { this.props.brand }</h1>
                <p className="car">It's a { this.state.color } { this.state.model } from { this.state.year }</p>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </>
        )
    }
}

export default Car