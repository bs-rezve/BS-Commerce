import type { NextComponentType } from "next";
import React, { useState } from "react";
// import counterElement from "../../global/components/counter/counterElement";
import AvaialabilityOptions from "./subComponent/availability";
import ProductTypeOptions from "./subComponent/productTypes";
import BrandTypeOptions from "./subComponent/brandTypes";
import ColourTypeOptions from "./subComponent/colorAvailibility";
const DealsFilter: NextComponentType = () => {
  const [displayStatus1, setDisplayStatus1] = useState(false);
  const [displayStatus2, setDisplayStatus2] = useState(false);
  const [displayStatus3, setDisplayStatus3] = useState(false);
  const [displayStatus4, setDisplayStatus4] = useState(false);
  const [displayStatus5, setDisplayStatus5] = useState(false);
  const accorditionStatus1 = () => {
    setDisplayStatus1(!displayStatus1);
  };
  const accorditionStatus2 = () => {
    setDisplayStatus2(!displayStatus2);
  };
  const accorditionStatus3 = () => {
    setDisplayStatus3(!displayStatus3);
  };
  const accorditionStatus4 = () => {
    setDisplayStatus4(!displayStatus4);
  };
  const accorditionStatus5 = () => {
    setDisplayStatus5(!displayStatus5);
  };
  return (
    <>
      <div className="mt-60">
        <div className="accordion" id="accordionExample5">
          <div className="accordion-item bg-white">
            <h2 className="accordion-header mb-0" id="headingOne5">
              <button
                className="
                accordion-button
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base text-gray-800 text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none
                flex justify-between
              "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne5"
                aria-expanded="false"
                aria-controls="collapseOne5"
                onClick={accorditionStatus1}
              >
                <span className="text-base font-semibold"> PRICE</span>
                <span>
                  {displayStatus1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseOne5"
              className={
                displayStatus1
                  ? "accordion-collapse collapse"
                  : "accordion-collapse collapse hidden"
              }
              aria-labelledby="headingOne5"
            >
              <div className="accordion-body py-4 px-5">
                <div className="grid grid-cols-3">
                  <div className="flex flex-row">
                    <span className="text-sm">$</span>
                    <span className="px-2">
                      <input
                        type="number"
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-24 h-12 rounded-md sm:text-sm focus:ring-1"
                        placeholder="0"
                      />
                    </span>
                  </div>
                  <div className="text-sm ml-4 text-center">From</div>
                  <div>
                    <div className="flex flex-row">
                      <span className="text-sm mr-2">$</span>
                      <span className="mr-4">
                        <input
                          type="number"
                          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-24 h-12 rounded-md sm:text-sm focus:ring-1"
                          placeholder="0"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="py-4">
                    {/* temporaty button here */}
                    <button className="bg-green-500 hover:bg-black text-white font-bold py-2 px-4 rounded">
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item bg-white">
            <h2 className="accordion-header mb-0" id="headingTwo5">
              <button
                className="
                   accordion-button
                   collapsed
                   relative
                   flex
                   items-center
                   w-full
                   py-4
                   px-5
                   text-base text-gray-800 text-left
                   bg-white
                   border-0
                   rounded-none
                   transition
                   focus:outline-none
                   flex justify-between
               "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
                onClick={accorditionStatus2}
              >
                <span className="text-base font-semibold"> AVAILABILITY</span>
                <span>
                  {displayStatus2 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseTwo5"
              aria-labelledby="headingTwo5"
              className={
                displayStatus2
                  ? "accordion-collapse collapse"
                  : "accordion-collapse collapse hidden"
              }
            >
              <div className="accordion-body py-4 px-5">
                <AvaialabilityOptions />
              </div>
            </div>
          </div>

          <div className="accordion-item bg-white">
            <h2 className="accordion-header mb-0" id="headingTwo5">
              <button
                className="
                   accordion-button
                   collapsed
                   relative
                   flex
                   items-center
                   w-full
                   py-4
                   px-5
                   text-base text-gray-800 text-left
                   bg-white
                   border-0
                   rounded-none
                   transition
                   focus:outline-none
                   flex justify-between
               "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
                onClick={accorditionStatus3}
              >
                <span className="text-base font-semibold"> PRODUCT TYPE</span>
                <span>
                  {displayStatus3 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseTwo5"
              aria-labelledby="headingTwo5"
              className={
                displayStatus3
                  ? "accordion-collapse collapse"
                  : "accordion-collapse collapse hidden"
              }
            >
              <div className="accordion-body py-4 px-5">
                <ProductTypeOptions />
              </div>
            </div>
          </div>
          <div className="accordion-item bg-white">
            <h2 className="accordion-header mb-0" id="headingTwo5">
              <button
                className="
                   accordion-button
                   collapsed
                   relative
                   flex
                   items-center
                   w-full
                   py-4
                   px-5
                   text-base text-gray-800 text-left
                   bg-white
                   border-0
                   rounded-none
                   transition
                   focus:outline-none
                   flex justify-between
               "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
                onClick={accorditionStatus4}
              >
                <span className="text-base font-semibold"> BRAND</span>
                <span>
                  {displayStatus4 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseTwo5"
              aria-labelledby="headingTwo5"
              className={
                displayStatus4
                  ? "accordion-collapse collapse"
                  : "accordion-collapse collapse hidden"
              }
            >
              <div className="accordion-body py-4 px-5">
                <BrandTypeOptions />
              </div>
            </div>
          </div>

          <div className="accordion-item bg-white">
            <h2 className="accordion-header mb-0" id="headingTwo5">
              <button
                className="
                   accordion-button
                   collapsed
                   relative
                   flex
                   items-center
                   w-full
                   py-4
                   px-5
                   text-base text-gray-800 text-left
                   bg-white
                   border-0
                   rounded-none
                   transition
                   focus:outline-none
                   flex justify-between
               "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
                onClick={accorditionStatus5}
              >
                <span className="text-base font-semibold"> COLOR</span>
                <span>
                  {displayStatus5 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </button>
            </h2>
            <div className="border-t border-gray-300"></div>
            <div
              id="collapseTwo5"
              aria-labelledby="headingTwo5"
              className={
                displayStatus5
                  ? "accordion-collapse collapse"
                  : "accordion-collapse collapse hidden"
              }
            >
              <div className="accordion-body py-4 px-5">
                <ColourTypeOptions />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid colspan-4"></div>
    </>
  );
};

export default DealsFilter;
