import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Productlist extends Component {
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

tableRow = (product) => {
  return (
        <tr>
            <td><Link to={`product-detail/${product.productName}/${product.price}/${product.category}`}>
                <img src={product.image}  onClick={()=>this.props.handleProduct(product)} alt="image"/>
                </Link></td>          
            <td>{product.productName}</td>   
            <td>{product.price}</td>
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
          <div>{this.tableHeader(this.props.products)}</div>
      </div>
  );
}
}
export default Productlist;
