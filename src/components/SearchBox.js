import React, { Component } from "react";
import {Link} from 'react-router-dom';
import * as searchActions from '../actionCreators/products';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class Search extends Component {
  constructor(props) {
    super(props);
  }
  handleSearch=()=>{
    this.props.actions.searchProducts(this.props.search)
  }
  onSearch=(e)=>{
    let searchText=e.target.value;
    console.log(searchText);
    this.props.actions.onSearching(searchText)
  }
  render() {
    return (
        <div className="search pull-right">
        <form className="search-input">
          <input
            type="search"
            placeholder="Search for Electronics"
            className="search-label"
            onChange={this.onSearch}
          />
          <Link to="search-page"><button className="search-iconbutton" type="submit" onClick={this.handleSearch}         
          /></Link>
        </form>
       </div>
    )
  }
}
function mapStateToProps(state){
    return{
        store:0
    }
}
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(searchActions, dispatch)
    };
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Search);
















