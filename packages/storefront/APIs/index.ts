import { getUserRest, signUpRest } from "./restApi";
import { getUserGraphQl, signUpGraphQL } from "./graphQL";
import { config } from "config";

const graphqlApi = {
    getUser: getUserGraphQl,
    signUp: signUpGraphQL,
}

const restApi = {
    getUser: getUserRest,
    signUp: signUpRest,
}

export const userAPI = config?.apiService === 'GRAPHQL' ? graphqlApi : restApi
