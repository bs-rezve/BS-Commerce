import { GET_PRODUCTS } from "graphqlSchema/queries/productQueries";
import { User } from "utils/types";
import client from "./apollo-client";
import { CreateUserRequest, CreateUserSuccessResponse, SignInRequest, SignInSuccessResponse } from "models";

// export async function getUserGraphQl():Promise<User[] | undefined>{
//     const { data } = await client.query({
//         query: gql`
//           query Example {
//             countries {
//               code
//               name
//               emoji
//             }
//           }
//         `,
//       });
//  return data
// }

export async function signUpGraphQL(data: CreateUserRequest){
}

export async function signInGraphQL(data: SignInRequest){
}

export async function forgotPasswordGraphQL(data: SignInRequest){
}

export async function getUserGraphQl(): Promise<User[] | undefined> {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });
  return data as User[];
}
