import axios from "axios"
import { config } from "config";
import { User } from "utils/types";
import { CreateUserRequest, CreateUserSuccessResponse } from "models";

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
    console.log(response);
    return response.data;
  } catch(error) {
    console.log(error);
  }
}

