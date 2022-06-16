import React from "react";

interface STATUS {
    discountPercentage: number,
    stock: number
}

const Status = ({ discountPercentage, stock }: STATUS) => {
    return (
        <div>
            <div className="border text-xs border-[#40a944] rounded-lg bg-[#40a944] absolute top-3 left-3 px-1 py-1 text-white">
                {stock > 0 ? "Sale" : "Soldout"}
            </div>

            {discountPercentage && stock > 0 ? (
                <div className="border border-[#40a944] rounded-lg bg-[#40a944] absolute top-3 right-3 px-1 py-1 text-white text-xs">
                    <p>{`-${discountPercentage}%`}</p>
                </div>
            ) : null}
        </div>
    );
};

export default Status;