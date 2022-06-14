import { getUserRest, signInRest, signUpRest } from "./restApi";
import { getUserGraphQl, signInGraphQL, signUpGraphQL } from "./graphQL";
import { config } from "config";

const graphqlApi = {
    getUser: getUserGraphQl,
    signUp: signUpGraphQL,
    signIn: signInGraphQL,
}

const restApi = {
    getUser: getUserRest,
    signUp: signUpRest,
    signIn: signInRest,
}

export const userAPI = config?.apiService === 'GRAPHQL' ? graphqlApi : restApi
