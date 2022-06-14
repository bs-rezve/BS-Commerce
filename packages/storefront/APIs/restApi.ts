import axios from "axios"
import { config } from "config";
import { User } from "utils/types";
import { CreateUserRequest, CreateUserSuccessResponse, SignInRequest, SignInSuccessResponse } from "models";

export async function getUserRest():Promise<User[] | undefined> {
    try {
      const response = await axios.get(`${config.restPrefix}/user`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export async function signUpRest(data: CreateUserRequest) {
  try {
    const response = await axios.post(`${config.restPrefix}/api/auth/signup`, data);
    return response.data;
  } catch(error) {
    console.log(error);
  }
}

export async function signInRest(data: SignInRequest): Promise<SignInSuccessResponse | undefined> {
  try {
    const response = await axios.post(`${config.restPrefix}/api/auth/signin`, data);
    return response.data;
  } catch(error) {
    console.log(error);
  }
}

