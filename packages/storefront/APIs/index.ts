import { getUserRest, signInRest, signUpRest } from "./restApi";
import { getUserGraphQl, signInGraphQL, signUpGraphQL } from "./graphQL";
import { config } from "config";
import { apiFunction } from "utils/types";

const graphqlApi:apiFunction = {
    getUser: getUserGraphQl,
    signUp: signUpGraphQL,
    signIn: signInGraphQL,
}

const restApi:apiFunction = {
    getUser: getUserRest,
    signUp: signUpRest,
    signIn: signInRest,
}

export const userAPI:apiFunction = config?.apiService === 'GRAPHQL' ? graphqlApi : restApi
