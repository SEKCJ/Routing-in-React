import React, { Component } from 'react'
import 'isomorphic-fetch';
import 'es6-promise';
import Card from './card'
import { Link } from 'react-router-dom'


class People extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: [],
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then((response) => response.json())
            .then((obj) => this.splitInfo(obj))
    }

    splitInfo(obj) {
        obj.forEach((element, index) => {
            let ref = <Link to={`/people/${element.id}`}
                className="btn btn-primary">Learn More!</Link>
            this.setState({
                people: [...this.state.people, <Card property1={element.name}
                    property2={element.gender} property3={element.age}
                    property4={ref} key={index} />]
            })
        }
        )
    }

    render() {
        return (
            <div>
                {this.state.people}
            </div>
        )
    }
}

export default People