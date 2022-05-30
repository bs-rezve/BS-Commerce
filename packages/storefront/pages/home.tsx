import Image from "next/image";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 data-testid="heading" className="display-4 fw-bolder">
              Storefront
            </h1>
            <p data-testid="para" className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <Image
                  className="card-img-top"
                  src={
                    "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about1_71e1f591-e3d4-456e-be12-03e0afed0c73.jpg?v=1588135206"
                  }
                  alt="..."
                  layout="fill"
                />
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
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <Image
                  className="card-img-top"
                  src={
                    "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about1_71e1f591-e3d4-456e-be12-03e0afed0c73.jpg?v=1588135206"
                  }
                  alt="..."
                  layout="fill"
                />
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
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <Image
                  className="card-img-top"
                  src={
                    "https://cdn.shopify.com/s/files/1/0359/6350/2651/files/about1_71e1f591-e3d4-456e-be12-03e0afed0c73.jpg?v=1588135206"
                  }
                  alt="..."
                  layout="fill"
                />
                <div className="card-body p-4">
                  <div className="text-center" data-testid="product">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
