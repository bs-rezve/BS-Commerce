import {
  getProductsRest,
  getProductSearchRest,
  createProductRest,
  getProductRest,
  updateProductRest,
  // createManufacturerRest,
  getManufacturerRest,
} from "./restApi";
import {
  getProductsGraphQL,
  getProductSearchGraphQL,
  createProductGraphQl,
  getManufacturerGraphQl,
  // createManufacturerGraphQl,
} from "./graphQL";
import { config } from "../config/index";
import { apiFunction } from "../utils/types";

const graphqlApi: apiFunction = {
  getProducts: getProductsGraphQL,
  searchProduct: getProductSearchGraphQL,
  createProduct: createProductRest,
  updateProduct: updateProductRest,
  getProduct: getProductRest,
  getManufacturer: getManufacturerGraphQl,
  // createManufacturer: createManufacturerGraphQl
};

const restApi: apiFunction = {
  getProducts: getProductsRest,
  searchProduct: getProductSearchRest,
  createProduct: createProductRest,
  updateProduct: updateProductRest,
  getProduct: getProductRest,
  // createManufacturer: createManufacturerRest,
  getManufacturer: getManufacturerRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
