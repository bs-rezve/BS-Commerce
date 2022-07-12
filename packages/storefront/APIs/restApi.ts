import axios from 'axios';
import { toast } from 'react-toastify';
import {
  GetCustomerAllProductsResponse,
  GetCustomerQuery,
  GetCustomerResponse,
  GetCustomerAllProductsSuccessResponse,
  updateCartItemRequest,
  updateCartItemResponse,
  GetCustomerProductResponse,
  CustomerSignInRequest,
  CreateCustomerResponse,
  CreateCustomerRequest,
  CustomerSignInResponse,
  GetCustomerProductParams,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  addToWishlistRequest,
  AddToWishlistResponse,
  getUserWishlistResponse,
  DeleteWishlistItemParams,
  deleteWishlistItemResponse,
  deleteAllWishlistItemsResponse,
} from 'models';

import { apiEndPoints } from 'utils/apiEndPoints';
import { User } from 'utils/types';

// function getToken() {
//   console.log("Token ====>");
//   console.log(localStorage.getItem("persist:root"));
//   console.log("Hey In GetToken ====>");
// }

export async function getUserRest(): Promise<User[] | undefined> {
  try {
    // getToken();
    const response = await axios.get<User[]>(`${apiEndPoints.getUser}`);
    return response.data as User[];
  } catch (error: any) {
    return error;
  }
}

export async function getSignedInUserRest(
  isEmail: boolean,
  data: GetCustomerQuery
): Promise<GetCustomerResponse | undefined> {
  try {
    const res = await axios.get(
      `${apiEndPoints.getSignedInUser}${
        isEmail ? `?email=${data.email}` : `?phone=${data.phone}`
      }`
    );
    return res.data;
  } catch (error: any) {
    return error;
  }
}

export async function signinRest(
  data: CustomerSignInRequest
): Promise<CustomerSignInResponse | undefined> {
  try {
    const res = await axios.post(`${apiEndPoints.login}`, data);
    return res.data;
  } catch (error: any) {
    toast.error('Some error happend. Try again.');
    return error;
  }
}

export async function signUpRest(
  data: CreateCustomerRequest
): Promise<CreateCustomerResponse | undefined> {
  try {
    const res = await axios.post(`${apiEndPoints.register}`, data);
    return res.data;
  } catch (error: any) {
    return error;
  }
}

export async function forgotPasswordRest(
  data: ForgotPasswordRequest
): Promise<ForgotPasswordResponse | undefined> {
  // try {
  //   const res = await axios.post("http://localhost:3000/api/auth/forgot", data);
  //   return res.data;
  // } catch (error: any) {
  //   return error;
  // }
  return;
}

export async function getPublicProductsRest(): Promise<
  GetCustomerAllProductsResponse | undefined
> {
  try {
    const res = await axios.get(`${apiEndPoints.getPublicProducts}`);
    return res.data.data as GetCustomerAllProductsSuccessResponse;
  } catch (error: any) {
    return error;
  }
}

export async function getFeaturedProductsRest(): Promise<
  GetCustomerAllProductsResponse | undefined
> {
  try {
    const res = await axios.get(
      `${apiEndPoints.getPublicProducts}?isFeatured=true`
    );
    return res.data.data;
  } catch (error: any) {
    return error;
  }
}

export async function getPublicProductByIdRest(
  productId: GetCustomerProductParams
): Promise<GetCustomerProductResponse | undefined> {
  try {
    const res = await axios.get(
      `${apiEndPoints.getPublicProducts}/${productId}`
    );
    return res.data.data;
  } catch (error: any) {
    return error;
  }
}

export async function addToWishlistRest(
  data: addToWishlistRequest
): Promise<AddToWishlistResponse | undefined> {
  try {
    const res = await axios.post(`${apiEndPoints.addToWishList}`, data);

    return res.data.data;
  } catch (error: any) {
    return error;
  }
}

export async function getCustomerWishlistRest(
  token: string
): Promise<getUserWishlistResponse | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.getCustomerWishlist}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data.data;
  } catch (error: any) {
    return error;
  }
}

export async function deleteWishlistItemRest(
  data: string
): Promise<deleteWishlistItemResponse | undefined> {
  try {
    const res = await axios.delete(`${apiEndPoints.deleteWishlistItem}/${data}`);

    return res.data.data;
  } catch (error: any) {
    return error;
  }
}

export async function deleteFullWishlistRest(): Promise<deleteAllWishlistItemsResponse| undefined> {
  try {
    const res = await axios.delete(`${apiEndPoints.deleteFullWishlist}`);
    return res.data.message;
  } catch (error: any) {
    return error;
  }
}
