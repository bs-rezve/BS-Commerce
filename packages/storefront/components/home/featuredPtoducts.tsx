import type { GetServerSideProps, NextPage } from "next";
import Product from "./product";
import productData from "../../allData/product-data.json";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper";

import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/grid";
import "swiper/css/pagination";


const FeaturedProducts: NextPage = (props) => {
    return (
        <>
            <div className="text-center mb-5 featuredProducts">
                <p className="text-xs italic md:text-sm lg:text-base ">Recently added our store</p>
                <h1 className="font-bold  text-lg md:text-2xl lg:text-4xl ">Featured Products</h1>
            </div>
            <>
                <Swiper
                     spaceBetween={30}
                     slidesPerView={3}
                     modules={[Grid, Pagination,Navigation]}
                     loop ={true}
                     grid={{
                         fill: 'row',
                         rows: 3,
                     }}
                     
                     breakpoints={{
                        // when window width is >= 320px
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                          slidesPerView: 2,
                          spaceBetween: 30
                        },
                        // when window width is >= 1024px
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 30
                        },
                        // when window width is >= 2560px
                        2560: {
                          slidesPerView: 4,
                          spaceBetween: 30
                        }}}
                     navigation= {true}
                     className="mySwiper"
                >
                    {productData["products"] &&
                        productData["products"].length > 0 &&
                        productData.products.map((product: any, index) => (
                            <>
                                <SwiperSlide>
                                    <Product
                                        key={product.id}
                                        product={product}
                                        layout="row"
                                    />
                                </SwiperSlide>
                            </>
                        ))}
                    ...
                </Swiper>
            </>
        </>
    );
};

export default FeaturedProducts;
