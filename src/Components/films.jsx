import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from './card'
import { Link } from 'react-router-dom'

class Films extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: [],
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((response) => response.json())
            .then((obj) => this.splitInfo(obj))
    }

    splitInfo(obj) {
        obj.forEach((element, index) => {
            let ref = <Link to={`/films/${element.id}`}
                className="btn btn-primary">Learn More!</Link>
            this.setState({
                cards: [...this.state.cards, <Card property1={element.title}
                    property2={element.description} property3={ref} key={index} />]
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.cards}
            </div>
        )
    }
}

export default Films;