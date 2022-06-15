export interface crateValues {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  gender: string;
  dob: string;
  companyname: string;
  ite: boolean;
  newsletter: any;
  customerRoles: any;
  mofVendor: any;
  active: boolean;
  adminCommit: string;
}

export interface editValues {
  customerInfo: crateValues;
  orders: orders[];
  address: orders[];
  shoppingandWishlist: [];
  activityLog: [];
  pOrder: string;
  binstocksub: [];
  rewordPoints: [];
}

export interface orders {
  id: string;
  total: number;
  status: string;
  pstatus: string;
  shipStatus: string;
  store: string;
  createdOn: string;
}

export interface DDL {
  value: number;
  label: string;
}

export type searchValue = {
  email: string;
  company: string;
  fName: string;
  ipAddress: string;
  lastName: string;
  role: DDL | string | [];
  month: DDL | string | [];
  day: DDL | string | [];
};

export type searchvendor = {
  name: string;
  email: string;
};

export interface addressData {
  fname: string;
  lname: string;
  email: string;
  company: string;
  country: string;
  state: string;
  region: string;
  city: string;
  address1: string;
  address2: string;
  zip: string;
  phone: string;
  fax: string;
}
