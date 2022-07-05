import {
  forgotPasswordRest,
  getFeaturedProductsRest,
  getPublicProductByIdRest,
  getPublicProductsRest,
  getSignedInUserRest,
  getUserRest,
  signinRest,
  signUpRest,
} from './restApi';
import {
  forgotPasswordGraphql,
  getFeaturedProductsGraphql,
  getPublicProductByIdGraphql,
  getPublicProductsGraphql,
  getSignedInUserGraphql,
  getUserGraphQl,
  signInGraphql,
  signUpGraphql,
} from './graphQL';
import { config } from 'config';
import { apiFunction } from 'utils/types';

const graphqlApi: apiFunction = {
  getUser: getUserGraphQl,
  signIn: signInGraphql,
  signUp: signUpGraphql,
  forgotPassword: forgotPasswordGraphql,
  getPublicProducts: getPublicProductsGraphql,
  getPublicProductsById: getPublicProductByIdGraphql,
  getFeaturedProducts: getFeaturedProductsGraphql,
  getSignedInUser: getSignedInUserGraphql,
  
};

const restApi: apiFunction = {
  getUser: getUserRest,
  signIn: signinRest,
  signUp: signUpRest,
  forgotPassword: forgotPasswordRest,
  getPublicProducts: getPublicProductsRest,
  getPublicProductsById: getPublicProductByIdRest,
  getFeaturedProducts: getFeaturedProductsRest,
  getSignedInUser: getSignedInUserRest,
};

export const userAPI: apiFunction =
  config?.apiService === 'GRAPHQL' ? graphqlApi : restApi;
