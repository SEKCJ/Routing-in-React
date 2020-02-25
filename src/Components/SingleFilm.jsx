import React, { Component } from 'react'
import 'isomorphic-fetch';
import 'es6-promise';
import Card from './card'
import { Link } from 'react-router-dom'

class Singlefilm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            card: undefined,
        }
    }

    componentDidMount() {
        fetch(`http://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then((response) => response.json())
            .then((obj) => this.makeCard(obj))
    }

    makeCard(obj) {
        this.setState({
            card: <Card property1={obj.title} property2={obj.description}
                property3={`${obj.director}, ${obj.producer}, ${obj.release_date}`}
                property4={obj.id} property5={<Link to={"/films"}
                    className="btn btn-info">Go Back To Films</Link>} />
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

export default Singlefilm