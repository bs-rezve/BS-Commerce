import { GetProductParams } from "./../../models/src/product/getProduct";
import axios from "axios";
import { apiEndPoints } from "../utils/apiEndPoints";
import {
  CreateProductRequest,
  UpdateProductRequest,
} from "../../models/src/product";
import {
  CreateManufacturerRequest,
  UpdateManufacturerRequest,
} from "../../models/src/manufacturer";
import { User } from "../utils/types";
import { GetManufacturerSuccessResponse, Manufacturer, Product } from "models";
import { toast } from "react-toastify";

export async function getUserRest(): Promise<User[] | undefined> {
  try {
    const response = await axios.get<User[]>(`${apiEndPoints.getUser}`);
    return response.data as User[];
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}
export async function createProductRest(
  data: CreateProductRequest,
  router
): Promise<CreateProductRequest | undefined> {
  try {
    const response = await axios.post<CreateProductRequest>(
      `${apiEndPoints.product}`,
      data
    );
    router.push("/Product");
    toast.success("Create Successful");
    return response.data as CreateProductRequest;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
  }
}

export async function getProductsRest(
  pageSize: number
): Promise<Product[] | undefined> {
  try {
    const { data } = await axios?.get(
      `${apiEndPoints?.product}?skip=1&limit=${pageSize}`
    );
    return data?.data as Product[];
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function getProductSearchRest(
  search: string
): Promise<Product | undefined> {
  try {
    const { data } = await axios.get(`${apiEndPoints?.product}/sku/${search}`);
    return data?.data as Product;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export async function getProductRest(
  data: GetProductParams
): Promise<GetProductParams | undefined> {
  try {
    const res = await axios.get(`${apiEndPoints.product}/${data.productId}`);

    return res?.data as Product;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}


export async function updateProductRest(
  data: UpdateProductRequest,
  id: string
): Promise<UpdateProductRequest | undefined> {
  try {
    const response = await axios.patch<UpdateProductRequest>(
      `${apiEndPoints.product}/${id}`,
      data
    );
    toast.success("Edit Successful");
    return response.data as UpdateProductRequest;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
  }
}

export async function getSingleManufacturerRest(
  data: any,
  manufacturerId: any
): Promise<any | undefined> {
  try {
    console.log("*",data)
    // const res = await axios.get(`${apiEndPoints.manufacturer}/${data.productId}`);
    const res = await axios.get(`manufacturers/${data}`,{
      headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3NTc0YmEyLWQ1MjctNDgwYi1iZTAzLWIyMjZlMGY2M2ZkNCIsInVzZXJuYW1lIjoiYUBiLmNvbSIsImxvZ0luVGltZSI6MTY1NTk1ODY1NTkxNSwiaWF0IjoxNjU1OTU4NjU1LCJleHAiOjE2NTYwNDUwNTV9.pVu4Pm0EjUdg3sfEd4l2gvBazLO_BMzsTSq_vykVGuc"}`,
      },
    });
    console.log(res.data);

    return res?.data as Manufacturer;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}


export async function updateManufacturerRest(
  data: UpdateManufacturerRequest,
  id: string
): Promise<UpdateManufacturerRequest | undefined> {
  try {
    const response = await axios.patch<UpdateManufacturerRequest>(`manufacturers/${data}`,
    data,
    {
      headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3NTc0YmEyLWQ1MjctNDgwYi1iZTAzLWIyMjZlMGY2M2ZkNCIsInVzZXJuYW1lIjoiYUBiLmNvbSIsImxvZ0luVGltZSI6MTY1NTk1ODY1NTkxNSwiaWF0IjoxNjU1OTU4NjU1LCJleHAiOjE2NTYwNDUwNTV9.pVu4Pm0EjUdg3sfEd4l2gvBazLO_BMzsTSq_vykVGuc"}`,
      },
    });
    toast.success("Edit Successful");
    return response.data as UpdateManufacturerRequest;
  } catch (error) {
    toast.error(error?.response?.data?.error);
    toast.error(error?.response?.data?.message);
  }
}

export async function getManufacturerRest(
  pageSize: number
  ): Promise<Manufacturer[] | undefined> {
      try {
          const { data } = await axios?.get(`${apiEndPoints?.manufacturerList}`, {
              headers: {
                  Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3NTc0YmEyLWQ1MjctNDgwYi1iZTAzLWIyMjZlMGY2M2ZkNCIsInVzZXJuYW1lIjoiYUBiLmNvbSIsImxvZ0luVGltZSI6MTY1NTkyNjMxMDU3MSwiaWF0IjoxNjU1OTI2MzEwLCJleHAiOjE2NTYwMTI3MTB9.VqJQuq17nHRY2pNdR1odwlNH8F8Kiz0HHprWFuxLD_o"}`,
              },
          });
          return data?.data as Manufacturer[];
      } catch (error) {
          toast.error(error?.response?.data?.message);
      }
  }
  
  export async function deleteManufacturerRest(
    id: string
  ): Promise<Manufacturer[] | undefined> {
    try {
        const { data } = await axios?.delete(`${apiEndPoints?.manufacturerList}/${id}`, {
            headers: {
                Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3NTc0YmEyLWQ1MjctNDgwYi1iZTAzLWIyMjZlMGY2M2ZkNCIsInVzZXJuYW1lIjoiYUBiLmNvbSIsImxvZ0luVGltZSI6MTY1NTkyNjMxMDU3MSwiaWF0IjoxNjU1OTI2MzEwLCJleHAiOjE2NTYwMTI3MTB9.VqJQuq17nHRY2pNdR1odwlNH8F8Kiz0HHprWFuxLD_o"}`,
            },
        });
        return data?.data as Manufacturer[];
    } catch (error) {
        toast.error(error?.response?.data?.message);
        }
}
