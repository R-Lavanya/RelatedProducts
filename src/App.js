import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./actionCreators/products";
import { withRouter } from "react-router-dom";
import SearchList from "./components/SearchList";
class App extends Component {
  constructor(props) {
    super(props);  
  }
  componentWillMount() {
    this.props.actions.getProducts();
  }
  handleProduct=(product)=> {
    this.props.actions.relatedProduct(product);
  }
  render() {
    return (
      <div>
        <Dashboard />
        <Home  searches={this.props.searchTerms}/>
        <Switch>
          <Route
            exact
            path="/"
    render={props => this.props.isLoading ? (<p style={{paddingTop:100}}>Loading...</p>) : (
              <ProductList
                {...props}
                products={this.props.products}
                handleProduct={this.handleProduct}
              />
            )}
          />
          <Route
            path="/product-detail/:name/:price/:category"
            render={props => (
              <ProductDetail
                {...props}
                relatedProducts={this.props.relatedProducts}

              />
            )} 
          />
          <Route
            exact
            path="/search-page"
            render={props =>
              this.props.isSearch ? (
                <p>Searching...</p>
              ) : (
                <SearchList
                  {...props}
                  searchedList={this.props.searchResults}
                />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    isLoading: state.isLoading,
    isSearch:state.searching,
    searchResults:state.searchList,
    searchTerms:state.searchKey,
    relatedProducts: state.relatedProducts,
    productcat: state.productcat
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
