import ProductInfo from "./common/productInfo";
import Picture from "./common/picture";
import Icon from "../icon";
import Status from "./common/status";

// interface PRODUCT {
//   product: object,
//   id: number,
//   img: string,
//   title: string,
//   prevPrice: number,
//   price: number,
//   discountPercentage: number,
//   stock: number,
//   category: string,
// }

const Product = ({product}: any) => {
  // const { product, id, img, title, prevPrice, price, discountPercentage, stock, category }  = props;

  return (
    <>
      <div className="mb-0 overflow-hidden" key={product.id}>
        <div className="transition duration-0 hover:duration-700 group hover:bg-white cursor-pointer">
          <div className="rounded overflow-hidden max-w-sm">
            <div className="relative flex items-center justify-center flex-col">
              <div className="relative text-white overflow-hidden transition-all duration-700">
                <div className="relative inset-0 bg-cover bg-center z-0">
                  <Picture
                    height={200}
                    width={200}
                    img={product.images[0]}
                    alt={product.category}
                  />
                  <Status stock={product.stock} discountPercentage={product.discountPercentage}/>
                </div>
              </div>
              <div className="hover:-translate-y-3 opacity-0 hover:opacity-70 duration-300 absolute inset-0 z-10 flex justify-center items-center text-black font-semibold">
                <Icon />
              </div>
              <ProductInfo title={product.title} category={product.category} discountPercentage={product.discountPercentage} price={product.price}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
