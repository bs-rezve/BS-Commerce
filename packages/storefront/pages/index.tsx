import { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');

import { CustomerProduct, Category, Wishlist, Customer } from 'models';
import { userAPI } from 'APIs';
import { useAppDispatch } from 'customHooks/hooks';
import { storeCategory } from 'toolkit/categorySlice';
import { storeCustomerDetails } from 'toolkit/userSlice';

import {
  storeFeaturedProducts,
  storeProducts,
  storeWishlist,
} from 'toolkit/productsSlice';

import HomeComponent from '@/components/home';

interface Props {
  products: CustomerProduct[];
  featuredProducts: CustomerProduct[];
  category: Category[];
  wishlistedProducts: Wishlist;
  customerProfile: Customer;
}

const Home: NextPage<Props> = ({
  products,
  featuredProducts,
  category,
  wishlistedProducts,
  customerProfile,
}: Props) => {
  const dispatch = useAppDispatch();

  dispatch(storeCategory(category));
  dispatch(storeProducts(products));
  dispatch(storeFeaturedProducts(featuredProducts));
  dispatch(storeWishlist(wishlistedProducts));
  dispatch(storeCustomerDetails(customerProfile));

  return <HomeComponent />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const reqCookie = context.req.headers.cookie;
  const token = reqCookie === undefined ? undefined : cookie.parse(reqCookie);
  const allProducts = await userAPI.getPublicProducts();
  const featuredProducts = await userAPI.getFeaturedProducts();
  const category = await userAPI.getCategoryList();
  const customerProfile = await userAPI.getCustomerProfile(token.token);
  // JSON.parse(JSON.stringify(category));
  let wishlistedProducts;
  if (reqCookie) {
    wishlistedProducts = await userAPI.getCustomerWishlist(token.token);
  }

  return {
    props: {
      products: allProducts,
      featuredProducts: featuredProducts,
      category: category,
      wishlistedProducts: wishlistedProducts || [],
      customerProfile: customerProfile,
    },
  };
};

export default Home;
