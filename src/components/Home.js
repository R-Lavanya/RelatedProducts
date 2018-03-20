import React, { Component } from "react";
import Search from './SearchBox';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="navbar navbar-inverse">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>

                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li className="active"><Link to="/"><a href="#">Home</a></Link></li>
                                    <li><a href="#ViewCart">View Cart</a></li>
                                    <li><a href="#CheckOut">Checkout</a></li>
                                </ul>
                                {/* <div className="pull-right basic-search">
                                    <form>
                                        <input type="text" name="search" placeholder="Search.." />
                                    </form>
                                </div> */}
                                <Search search={this.props.searches}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="text-left">
                        <h1>Home</h1>
                        <p className="lead">To search for products you can either select a product group or enter the product name.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <select className="form-control" id="productSelect">
                            <option>Please Select a Product Group</option>                                 
                            </select>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;