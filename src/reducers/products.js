import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    SEARCH_PRODUCT,
    SEARCH_TEXT,
    SEARCH_FAILURE,SEARCH_SUCCESS,
    RELATED_PRODUCTS,
    RELATED_PRODUCTS_FAILURE,
    RELATED_PRODUCTS_SUCCESS
  } from "../actionTypes/products";

export default (prevState ={products: [],
  isLoading: true,
  searching:true,
  searchList:[],
  searchKey:"" ,
  relatedProducts: []
}, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
          return {
            ...prevState,
            isLoading: true
        };
        case GET_PRODUCTS_SUCCESS:
          return {
            ...prevState,
            isLoading: false,
            products: action.products
        };
        case GET_PRODUCTS_FAILURE:
          return {
            ...prevState,
            isLoading: false,
            products: action.products
        };       
        case SEARCH_PRODUCT:
          return {
          ...prevState,
          searching: false
        };
        case SEARCH_SUCCESS:
        return {
          ...prevState,
          searching: false,
          searchList: action.searchItems
        };
        case SEARCH_FAILURE:
        return {
          ...prevState,
          searching: false
        };
        case SEARCH_TEXT:
        return {
          ...prevState,
          searchKey:action.searchText
        }
        case RELATED_PRODUCTS:
          return {
          ...prevState,
          searching: true
        };
        case RELATED_PRODUCTS_SUCCESS:
        return {
          ...prevState,
          searching: false,
          relatedProducts: action.products
        };
        case RELATED_PRODUCTS_FAILURE:
        return {
          ...prevState,
          searching: false,
          relatedProducts: action.products
        };
        default: 
        return prevState;
    }
};