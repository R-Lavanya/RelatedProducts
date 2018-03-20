import React, { Component } from "react";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props.relatedProducts,"productdetail");
  }
  render() {
    console.log(this.props.relatedProducts)
    return (
      <div className="container">
        <h1 style={{ paddingTop: "40px" }}>Product detail</h1>
        <p>Name: {this.props.match.params.name}</p>
        <p>Price: {this.props.match.params.price}</p>
        <p>category: {this.props.match.params.category}</p>
        <div>
          <h2>Related Products</h2>
          <div className="row">
          {this.props.relatedProducts.map(relatedProduct=>{
            return(              
              <div className="col-md-3">
                <p>Name: {relatedProduct.productName}</p>
                <p>Price: {relatedProduct.price}</p>
                <p>Category: {relatedProduct.category}</p>
              </div>
            )          
          })
          }
            </div>
        </div>
      </div>
    );
  }
}
export default ProductDetail;