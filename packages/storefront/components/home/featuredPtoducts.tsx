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
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon inline-block bg-no-repeat"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                   >
                    <span
                        className="carousel-control-next-icon inline-block bg-no-repeat"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
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
