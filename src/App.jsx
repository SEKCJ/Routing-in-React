import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Films from './Components/films'
import Home from './Components/home'
import People from './Components/people'
import Singlefilm from './Components/SingleFilm'
import SinglePerson from './Components/SinglePerson'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="d-flex justify-content-center my-5">
                    <Link className="btn btn-primary btn-lg mx-4" to="/">Go Home</Link>
                    <Link className="btn btn-primary btn-lg mx-4" to="/films">View Films</Link>
                    <Link className="btn btn-primary btn-lg mx-4" to="/people">View People</Link>
                </div>
                <Switch>
                    <Route exact path="/films" component={Films} />
                    <Route exact path="/people" component={People} />
                    <Route exact path="/films/:id" component={Singlefilm} />
                    <Route exact path="/people/:id" component={SinglePerson} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        )
    }
}

export default App