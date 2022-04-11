import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import productPic from "../public/product.jpeg";
import { InferGetServerSidePropsType } from "next";

const Home: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Storefront</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* <div className="col mb-5">
              <div className="card h-100">
                <Image className="card-img-top" src={productPic} alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="/product/10"
                    >
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col mb-5">
              <div className="card h-100">
                <Image className="card-img-top" src={productPic} alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="/product/10"
                    >
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            { props.data.map((product : any) => (
              <div className="col mb-5" key={product.id}>
              <div className="card h-100">
                <Image className="card-img-top" src={product.image} alt="..."  width="450" height="300"/>
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{ product.title }</h5>
                    { product.price }
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href={`/product/${product.id}`}
                    >
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            ))}
            {/* <div className="col mb-5">
              <div className="card h-100">
                <Image className="card-img-top" src={productPic} alt="..."  />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="/product/10"
                    >
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async(context) => {
  // const res = await fetch(`http://localhost:3000/products`);
  const res = await fetch('https://fakestoreapi.com/products')
  const data : [] = await res.json()
  // console.log(data)
  return {
    props:{
      data
    } // will be passed to the page component as props
  }
}

export default Home;
