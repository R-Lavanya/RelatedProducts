import {
    getProductsSuccess,
    getProductsFailure,searchFailure,searchSuccess,relatedProductSuccess, relatedProductFailure
  } from "../actionCreators/products";
  import { put, takeLatest } from "redux-saga/effects";
  import { GET_PRODUCTS, SEARCH_PRODUCT,RELATED_PRODUCTS} from "../actionTypes/products";
  function* getProducts() {
    let url = "http://localhost:4000/products";
    try {
      let products = yield fetch(url).then(r =>
        r.json()
      );
      yield put(getProductsSuccess(products));
    } catch (error) {
      yield put(getProductsFailure(error));
    }
  }

  function* searchProducts(action) {
    try {
      let searchItems = yield fetch(`http://localhost:4000/products?productName_like=${action.search}`).then(s =>
      s.json()
      );
      yield put(searchSuccess(searchItems));
    } catch (error) {
      yield put(searchFailure(error));
    }
  }
  function* relatedProduct(action) {
    console.log(action.product.category)
    try {
      let products = yield fetch(`http://localhost:4000/products?category_like=${action.product.category}`).then(s =>
      s.json()
      );
      yield put(relatedProductSuccess(products));
    } catch (error) {
      yield put(relatedProductFailure(error));
    }
  }
  
  export function* getProductsWatcher() {
    yield [takeLatest(GET_PRODUCTS, getProducts),
      takeLatest(SEARCH_PRODUCT, searchProducts),
    takeLatest(RELATED_PRODUCTS, relatedProduct)];
  }
  