import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-sm-12 bg-dark my-2">
                        <div className="card-body">
                            <h1 className="card-title pb-1 border-bottom border-light"
                                style={{ "borderBottom": "3px solid" }}>{this.props.property1}</h1>
                            <h4 className="card-text">{this.props.property2}</h4>
                            <h4 className="card-text">{this.props.property3}</h4>
                            <h4 className="card-text">{this.props.property4}</h4>
                            <h4 className="card-text">{this.props.property5}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card