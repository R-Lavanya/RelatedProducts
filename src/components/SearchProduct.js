import React from "react";
import { Link } from "react-router-dom";

function SearchProduct({ searchProduct }) {
  return (
    <div className="col-md-3">
      <div className="each-product">
        <div className="product-image-properties">
          <Link to={`product-detail/${searchProduct.name}/${searchProduct.price}`}>
            <img src="assets/images/Samsung1.jpeg" className="images" alt="image"/>
          </Link>
        </div>
        <h4 className="product-name">{searchProduct.productName}</h4>
        <p className="product-price">{searchProduct.price}</p>
        <div className="number-input">
          <a href="#" className="decrement">
            –
          </a>
          <input type="number" className="value-result" defaultValue={1} />
          <a href="#" className="increment">
            +
          </a>
        </div>
        <div className="product-button">
          <button
            type="button"
            className="cart-add-button"
            disabled={searchProduct.isClick}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchProduct;
