import type { GetServerSideProps, NextPage } from "next";
import Product from "../global/components/product";
import productData from "../../allData/product-data.json"

const FeaturedProducts: NextPage = (props) => {

    return (
        <>
            <div className="text-center">
                <p className="text-sm text-italic">Recently added our store</p>
                <h1 className="text-bold text-xl">Featured Products</h1>
            </div>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
                {productData["products"] &&
                    productData["products"].length > 0 &&
                    productData.products.map((product: any) => (
                        <Product key = {product.id} product={product} layout="row"></Product>
                    ))}
            </div>
        </>
    );
};

export default FeaturedProducts;
