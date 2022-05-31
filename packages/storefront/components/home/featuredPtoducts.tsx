import type { GetServerSideProps, NextPage } from "next";
import Product from "./product";
import productData from "../../allData/product-data.json";

const FeaturedProducts: NextPage = (props) => {
    return (
        <>
            <div className="text-center">
                <p className="text-sm text-italic">Recently added our store</p>
                <h1 className="text-bold text-xl">Featured Products</h1>
            </div>
            <div className="w-70">
                <div className="grid grid-cols-1 gap-0 p-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
                    {productData["products"] &&
                        productData["products"].length > 0 &&
                        productData.products.map((product: any , index ) => (
                           index <9 ?
                            <Product
                                key={product.id}
                                product={product}
                                layout="row"
                            /> : ""
                        ))}
                </div>
            </div>
        </>
    );
};

export default FeaturedProducts;
