import React from "react";
import Image from "next/image";

// interface IMG { 
//     height: number,
//     width: number,
//     img: string,
//     alt: string,
// }

const Picture = (props: any) => {
    const { height, width, img, alt } = props;

    return (
        <div>
            <Image
                src={img}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    );
};

export default Picture;
