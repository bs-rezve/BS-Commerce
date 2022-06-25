import type { NextPage } from "next";
import HomeComponent from "@/components/home";
import axios from "axios";
import { userAPI } from "APIs";
import { storeAllCartItems } from "toolkit/cart/getAllCartItems";
import { useAppDispatch, useAppSelector } from "customHooks/hooks";

const Home: NextPage = ({ products, featuredProducts, cartData }: any) => {

  const dispatch = useAppDispatch()
  dispatch(storeAllCartItems(cartData));
  const store = useAppSelector((state)=> state.getAllCartItemsStore.allCartItems);

  return <HomeComponent products={products} featuredProducts={featuredProducts} />;
};

export async function getServerSideProps(context: any) {
  const allProducts = await userAPI.getPublicProducts();
  const featuredProducts = await userAPI.getFeaturedProducts();
  const cartData = await userAPI.getCart();
  console.log("22================", allProducts);
  return {
    props: {
      products: allProducts,
      featuredProducts: featuredProducts,
      cartData: cartData || [],
    }
  }
}

export default Home;
