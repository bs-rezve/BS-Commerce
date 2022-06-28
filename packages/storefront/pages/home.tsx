import type { NextPage } from "next";
import HomeComponent from "@/components/home";
import axios from "axios";
import { userAPI } from "APIs";
import { storeAllCartItems } from "toolkit/cart/getAllCartItems";
import { useAppDispatch, useAppSelector } from "customHooks/hooks";
var cookie = require("cookie");
import Axios from "axios";
import { config } from "config";

const Home: NextPage = ({ products, featuredProducts, cartData }: any) => {
    // let token = document.cookie.split("=")[1];
    // let token = localStorage.getItem("token")
    // console.log("&&&&&&&&&&&&&&&&&&&&&", products)
    // Axios.defaults.baseURL = config?.restPrefix;
    // Axios.defaults.headers.common = {
    //     Authorization: `Bearer ${token}`,
    // };
    const dispatch = useAppDispatch();
    dispatch(storeAllCartItems(cartData));
    const store = useAppSelector(
        (state) => state.getAllCartItemsStore.allCartItems
    );
    // console.log("Products---------------------", products)
    // console.log("Carts---------------------", cartData)
    return (
        <HomeComponent
            products={products}
            featuredProducts={featuredProducts}
        />
    );
};

export async function getServerSideProps() {
    const allProducts = await userAPI.getPublicProducts();
    // console.log(JSON.stringify(allProducts))
    const featuredProducts = await userAPI.getFeaturedProducts();
    const cartData = await userAPI.getCart();
    return {
      props: {
        products: allProducts || [],
        featuredProducts: featuredProducts ||[],
        cartData: cartData || [],
      }
    }
  }

export default Home;
