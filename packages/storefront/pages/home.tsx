import type { NextPage } from "next";
import FeaturedProducts from "../components/home/featuredPtoducts";
import Counter from "../components/global/components/product/counter";
import Icon from "../components/global/components/product/icon";
import Products from "./products";
import type { User } from "models";

const newUser: User = {
  id: "2",
  name: "Asad",
};
const Home: NextPage = () => {
  return (
    <>
      <FeaturedProducts />
      {/* <Products></Products>    */}
    </>
  );
};

export default Home;
