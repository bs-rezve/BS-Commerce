import Icon from "../global/components/icon";
import ProductInfo from "../global/components/product/common/productInfo";
import Picture from "../global/components/product/common/picture";
import Counter from "../global/components/product/common/counter";
import Status from "../global/components/product/common/status";

const time = {
    day: 10,
    hour: 10,
    min: 10,
    sec: 10,
};

const DealProduct = (props: any) => {
    const { product }: any = props;

    return (
        <>
            <div className="col mb-0" key={product.id}>
                <div className="transition duration-0 hover:duration-700 group py-3 hover:bg-white cursor-pointer">
                    <div className="rounded overflow-hidden max-w-sm">
                        <div className="relative">
                            <div className="relative text-white overflow-hidden transition-all duration-700">
                                <div className="relative inset-0 bg-cover bg-center z-0">
                                    <Picture
                                        height={280}
                                        width={280}
                                        img={product.images[0]}
                                        alt={product.category}
                                    />
                                    <Status stock={product.stock} discountPercentage={product.discountPercentage}></Status>
                                </div>
                            </div>
                            

                            <div className="flex-wrap md:flex md:flex-wrap lg:flex lg:flex-wrap hover:-translate-y-20 opacity-70 hover:opacity-70 duration-300 absolute inset-8 z-10 sm:justify-center items-center text-black font-semibold">
                                <Counter day={time.day} hour={time.hour} min={time.min} sec={time.sec}/>
                                <div className="md:hover:hover:translate-y-28 hover:translate-y-20 opacity-0 hover:opacity-90 duration-300 absolute inset-0 z-10 flex justify-center items-center text-black font-semibold">
                                    <Icon />
                                </div>
                            </div>
                            <div className="text-center">
                                <ProductInfo title={product.title} category={product.category} discountPercentage={product.discountPercentage} price={product.price} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DealProduct;
