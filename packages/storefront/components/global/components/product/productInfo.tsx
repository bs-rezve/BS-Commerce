import React from "react";
import Icon from "./icon";

const ProductInfo = (props: any) => {
    const { product , textAllignment }: any = props;
    return (
        <div>    
            <div className= {`px-6 ${textAllignment == "left" ? "text-left" : "text-center"} `}>
                <div className={`${textAllignment == "left" ? " mb-2" : "text-inherit"} text-xl font-medium text-gray-600`}>
                    {product.title}
                </div>
                <p className="text-lg font-['arial'] text-gray-600 m-1">{product.category}</p>
                <p className="text-lg font-semibold text-green-600">
                    ${product.price}
                </p>
            </div>
        </div>
    );
};

export default ProductInfo;
