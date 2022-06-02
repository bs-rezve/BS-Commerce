import type { NextComponentType } from "next";
import Product from "./product";
import productData from "../../allData/product-data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";

const BestSell = () => {
  return (
    <>
      <div className="text-center mb-5  ">
        <p className="text-sm font-light italic pt-5 md:text-sm lg:text-base ">
          Recently added our store
        </p>
        <h1 className="font-bold mb-10 text-xl md:text-3xl lg:text-4xl ">
          Best Sell
        </h1>
      </div>
      <div  className="grid grid-cols-3">
          <div>

          </div>
        <div className="col-span-2">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Grid, Pagination, Navigation]}
            loop={true}
            grid={{
              fill: "row",
              rows: 3,
            }}
            breakpoints={{
              // when window width is >= 320px
              768: {
                slidesPerView: 2,
                //   spaceBetween: 20
              },
            }}
            navigation={true}
            className="mySwiper m-5"
          >
            {productData["products"] &&
              productData["products"].length > 0 &&
              productData.products.map((product: any, index) => (
                <SwiperSlide key={product.id} className="p-4">
                  <Product product={product} />
                </SwiperSlide>
              ))}
            ...
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BestSell;
