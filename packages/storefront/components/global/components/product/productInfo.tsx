import React from "react";
import Icon from "../icon";

const ProductInfo = (props: any) => {
    const { product }: any = props;
    return (
        <div>
            <div className="px-6">
                <div className="text-base font-medium text-gray-600">
                    {product.title}
                </div>
                <p className="text-xs font-['arial'] text-gray-600 py-2">
                    {product.category}
                </p>
                <div className="text-lg font-semibold text-green-600">
                    ${product.price}
                    {product.prevPrice ? (
                        <span className="text-lg font-semibold text-black ml-2">
                            <s>$</s>
                            {product.prevPrice ? (
                                <s>{product.prevPrice}</s>
                            ) : null}
                        </span>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
