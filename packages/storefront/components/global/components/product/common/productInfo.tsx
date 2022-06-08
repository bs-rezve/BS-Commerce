import React from "react";

interface PRODUCT_INFO {
    title: string;
    category: string;
    discountPercentage: number;
    price: number;
}

const ProductInfo = ({
    title,
    category,
    discountPercentage,
    price,
}: PRODUCT_INFO) => {
    return (
        <div className="text-center py-4">
            <div className="text-inherit text-xl font-medium text-gray-600">
                {title}
            </div>
            <p className="text-lg font-['arial'] text-gray-600 m-1">
                {category}
            </p>
            <div className="text-lg font-semibold text-green-600">
                {discountPercentage ? (
                    <div>
                        <span className="">
                            $
                            {discountPercentage
                                ? (
                                      price -
                                      (price * discountPercentage) / 100.0
                                  ).toFixed(0)
                                : null}
                        </span>
                        <span className="text-lg font-semibold text-black ml-2">
                            <s>${price}</s>
                        </span>
                    </div>
                ) : (
                    <div> ${price}</div>
                )}
            </div>
        </div>
    );
};

export default ProductInfo;
