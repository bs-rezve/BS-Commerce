import type { NextPage } from "next";
import HomeComponent from "@/components/home";
import { userAPI } from "APIs";
import { useAppDispatch } from "customHooks/hooks";;
var cookie = require("cookie");
import { storeFeaturedProducts, storeProducts } from "toolkit/ProductsSlice";

const Home: NextPage = ({
  products,
  featuredProducts,
}: any) => {

  const dispatch = useAppDispatch();
  dispatch(storeFeaturedProducts(featuredProducts));
  dispatch(storeProducts(products));

  return (
    <>
      <HomeComponent />
    </>
  );
};

export async function getServerSideProps({ req }: any) {
  let token = cookie?.parse(req.headers?.cookie);
  const allProducts = await userAPI.getPublicProducts();
  const featuredProducts = await userAPI.getFeaturedProducts();
  return {
    props: {
      products: allProducts || [],
      featuredProducts: featuredProducts || [],
    },
  };
}

export default Home;
