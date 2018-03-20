import React, { Component } from "react";
class SearchList extends Component {
  constructor(props) {
    super(props);
  }
  tableHeader = (products) => {
    // console.log(products);
    return (
        <div className="container" style={{marginTop: 30}}>
            <table className="table table-striped">
                <thead>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Add to Cart</th>
                </thead>
                {products.map(p => {
                    return this.tableRow(p);
                })}
            </table>
        </div>
    );
  }
  
  tableRow = (products) => {
    return (
        <tr key={products.id}>
            <td><img src = {products.image} alt="image"/></td>
            <td>{products.productName}</td>   
            <td>{products.price}</td>
            <td>
                <button className="btn btn-primary" href="prd-desc.html">Description</button>
            </td>
            <td>
                <button className="btn btn-success">Add to Cart</button>
            </td>
        </tr>
  
    );
  }
  
  
  render() {
    return (
        <div>
            <div>{this.tableHeader(this.props.searchedList)}</div>
        </div>
    );
  }
}
export default SearchList;

