import React, { Component } from 'react'
import logo from '../assets/logo.png'


class Home extends Component {
    render() {
        return(
            <div className="d-flex justify-content-center">
                <img src={logo} alt="" className="bg-dark"/>
            </div>
        )
    }
}

export default Home;