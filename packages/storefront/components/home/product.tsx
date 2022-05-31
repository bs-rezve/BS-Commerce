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
            <div className="col mb-0 " key={product.id}>
                <div className="transition duration-0 hover:duration-700 group py-3 hover:bg-white cursor-pointer">
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
                                <div className={`hover:-translate-y-3 opacity-0 hover:opacity-70 duration-300 absolute  z-10 flex inset-0 ${
                                        layout === "row"
                                            ? "hover:opacity-100 justify-center flex-row-reverse "
                                            : "hover:opacity-70 justify-center items-center" } 
                                        text-6xl text-black font-semibold`} >
                                    <div className= "absolute scale-75 absolute bottom-0 right-10 w-90">
                                        <Icon></Icon>
                                    </div>
                                </div>
                                <div className= "col-span-2">
                                    <ProductInfo
                                        product={product}
                                        textAllignment={`${ layout === "row" ? "left" : "center" }`}
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
