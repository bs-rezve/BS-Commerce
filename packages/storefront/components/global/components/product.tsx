import type { GetServerSideProps, NextPage } from "next";
// import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Icon from "./product/icon";
import ProductInfo from "./product/productInfo";

const Product = (props: any) => {
    const { product ,layout }: any = props;

    return (
        <>
            <div className="col mb-0 " key={product.id}>
                <div className="transition duration-0 hover:duration-700 group py-3 hover:bg-white cursor-pointer">
                    <div className="rounded overflow-hidden max-w-sm">
                        <div className="relative">
                            <div className={`${layout === "row" ? " grid grid-cols-3 gap-4 " : ""} relative text-white overflow-hidden transition-all duration-700`}>
                                <div className="">
                                    <Image
                                        src={product.images[0]}
                                        alt="laptop"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="col-span-2 ">
                                    <div className="absolute right-5 bottom-0 w-100 scale-75 ">
                                        <div className="opacity-0 hover:opacity-100 duration-300 z-10 text-5xl text-black font-semibold px-0.1 py-0.1 ">
                                            <Icon />
                                        </div>
                                    </div>
                                    <ProductInfo
                                        product={product}
                                        textAllignment="left"
                                    ></ProductInfo>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="col mb-5" key={product.id}>
                <div className="transition duration-0 hover:duration-700 group py-3 hover:bg-white cursor-pointer">
                    <div className="rounded overflow-hidden shadow-lg max-w-sm">
                        <div className="relative">
                            <div className="relative w-96 h-60  text-white overflow-hidden transition-all duration-700">
                                <div className="absolute inset-0 bg-cover bg-center z-0">
                                    <Image
                                        src={product.images[0]}
                                        alt="laptop"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <Icon></Icon>
                            </div>
                            <ProductInfo product={product}></ProductInfo>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Product;
