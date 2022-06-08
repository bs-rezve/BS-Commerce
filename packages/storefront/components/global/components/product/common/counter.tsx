import React from "react";

interface COUNTER {
    day: number,
    hour: number,
    min: number,
    sec: number
}

const Counter = ({day, hour, min, sec}: COUNTER) => {
    return (
        <div className="rounded flex flex-wrap mb-0 justify-center text-xs">
            <div className="bg-white rounded m-0.5 p-1.5 sm:p-2.5 md:p-2.5 lg:p-2.5 xl:p-2.5">
                <p className="text-center">{day}</p>
                <p className="p-2.0">Days</p>
            </div>

            <div className="bg-white rounded m-0.5 p-1.5 sm:p-2.5 md:p-2.5 lg:p-2.5 xl:p-2.5">
                <p className="text-center">{hour}</p>
                <p className="p-2.0">Hour</p>
            </div>

            <div className="bg-white rounded m-0.5 p-1.5 sm:p-2.5 md:p-2.5 lg:p-2.5 xl:p-2.5">
                <p className="text-center">{min}</p>
                <p className="p-2.0">Mint</p>
            </div>

            <div className="bg-white rounded m-0.5 p-1.5 sm:p-2.5 md:p-2.5 lg:p-2.5 xl:p-2.5">
                <p className="text-center">{sec}</p>
                <p className="p-2.0">Sec</p>
            </div>
        </div>
    );
};

export default Counter;
