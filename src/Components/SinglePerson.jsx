import React, { Component } from 'react'
import 'isomorphic-fetch';
import 'es6-promise';
import Card from './card'
import { Link } from 'react-router-dom'

class SinglePerson extends Component {

    constructor(props) {
        super(props)
        this.state = {
            card: undefined,
        }
    }

    componentDidMount() {
        fetch(`http://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then((response) => response.json())
            .then((obj) => this.makeCard(obj))
    }

    makeCard(obj) {
        this.setState({
            card: <Card property1={obj.name} property2={obj.gender}
                property3={`Age: ${obj.age}, Eye Color: ${obj.eye_color}, Hair Color: ${obj.hair_color}`}
                property4={`Id: ${obj.id}`} property5={<Link to={"/people"}
                    className="btn btn-info">Go Back To People</Link>} />
        })
    }

    render() {
        return (
            <div>
                {this.state.card}
            </div>
        )
    }
}

export default SinglePerson