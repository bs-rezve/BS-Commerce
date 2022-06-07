import React from "react";

const Status = ({ product }: any) => {
    return (
        <div>
            <div className="border text-xs border-[#40a944] rounded-lg bg-[#40a944] absolute top-3 left-3 px-1 py-1 text-white">
                {product.stock > 0 ? "Sale" : "Soldout"}
            </div>

            {product.discountPercentage && product.stock > 0 ? (
                <div className="border border-[#40a944] rounded-lg bg-[#40a944] absolute top-3 right-3 px-1 py-1 text-white text-xs">
                    <p>{`-${product.discountPercentage}%`}</p>
                </div>
            ) : null}
        </div>
    );
};

export default Status;
