import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS,
   SEARCH_PRODUCT, SEARCH_SUCCESS, SEARCH_FAILURE, SEARCH_TEXT, RELATED_PRODUCTS, 
   RELATED_PRODUCTS_FAILURE,RELATED_PRODUCTS_SUCCESS ,SEARCH_PROD} from "../actionTypes/products";

export function getProducts() {
    return {
      type: GET_PRODUCTS
    };
}
export function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  };
}
export function getProductsFailure(error) {
    return {
      type: GET_PRODUCTS_FAILURE,
      error
    };
}
export function searchProducts(search) {
  return {
    type: SEARCH_PRODUCT,
    search
  };
}
export function searchSuccess(searchItems) {
  return {
    type: SEARCH_SUCCESS,
    searchItems
  };
}
export function searchFailure(error) {
  return {
    type: SEARCH_FAILURE,
    error
  };
}
export function onSearching(searchText) {
  return {
    type: SEARCH_TEXT,
    searchText
  };
}

export function relatedProduct(product) {
  return {
    type: RELATED_PRODUCTS,
    product
  };
}
export function relatedProductSuccess(products) {
return {
  type: RELATED_PRODUCTS_SUCCESS,
  products
};
}
export function relatedProductFailure(error) {
  return {
    type: RELATED_PRODUCTS_FAILURE,
    error
  };
}
export function onSearchPrd(productcat) {
  return {
    type: SEARCH_PROD,
    productcat
  };
}