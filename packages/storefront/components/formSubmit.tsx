import Image from "next/image";
import { FC, useState } from "react";

const Home: FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const add = () => {
    setResult(num1 + num2);
  };

  const sub = () => {
    setResult(num1 - num2);
  };

  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 data-testid="heading" className="display-4 fw-bolder">
              Storefront
            </h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div>
            <div data-testid="result">{result}</div>
            <input
              type="number"
              data-testid="num1"
              value={num1}
              onChange={(e) => setNum1(parseInt(e.target.value))}
            />
            <input
              type="number"
              data-testid="num2"
              value={num2}
              onChange={(e) => setNum2(parseInt(e.target.value))}
            />
            <button onClick={add} data-testid="add">
              Add
            </button>

            <button onClick={sub} data-testid="sub">
              Sub
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
