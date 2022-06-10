export interface crateValues {
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    gender: string,
    dob: string,
    companyname: string,
    ite: boolean,
    newsletter: any,
    customerRoles: any,
    mofVendor: any,
    active: boolean,
    adminCommit: string,
  };

  export interface editValues {
    customerInfo: crateValues,
    orders: orders[],
    address: orders[],
    shoppingandWishlist: [],
    activityLog: [],
    pOrder: string,
    binstocksub:[],
    rewordPoints:[]
  };

  export interface orders {id:string ,total:number, status:string,pstatus:string,shipStatus:string,store:string,createdOn:string }