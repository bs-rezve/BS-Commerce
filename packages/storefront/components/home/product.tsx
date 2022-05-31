import type { GetServerSideProps, NextPage } from "next";
// import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Layout from "../layout";
import Icon from "../global/components/product/icon";
import Picture from "../global/components/product/picture";
import ProductInfo from "../global/components/product/productInfo";

const Product = (props: any) => {
    const { product, layout }: any = props;

    return (
        <>
            <div className="col mb-0  " key={product.id}>
                <div className="transition duration-0 hover:duration-700 group py-3 hover:bg-white cursor-pointer featuredProducts">
                    <div className="rounded overflow-hidden max-w-sm">
                        <div className="relative">
                            <div className={`grid grid-cols-3 gap-4 relative text-white overflow-hidden transition-all duration-700`}>
                                <div className="relative inset-0 bg-cover bg-center z-0">
                                    <Picture
                                        product={product}
                                        height={280}
                                        width={280}
                                        src={product.images[0]}
                                        alt={product.category}
                                    />
                                </div>
                                <div className="hover:-translate-y-3 opacity-0 hover:opacity-100 duration-300 absolute  z-10 flex inset-0 justify-center flex-row-reverse text-6xl text-black font-semibold ">
                                    <div className= " absolute scale-50 sm:scale-75 xl:scale-100  absolute bottom-0 right-0 w-100 md:w-90 lg:w-95 ">
                                        <Icon/>
                                    </div>
                                </div>
                                <div className= "col-span-2 text-left">
                                    <ProductInfo
                                        product={product}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
