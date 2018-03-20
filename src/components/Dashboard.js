import React, { Component } from "react";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-7 col-xs-10">
                            <h1>Dashboard</h1>
                        </div>
                        <div id="cartStatus" className="col-md-1 col-md-push-5 col-sm-2 col-sm-push-3 col-xs-2">
                            <span id="cartCount">0</span>
                            <i className="glyphicon glyphicon-shopping-cart"></i></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
