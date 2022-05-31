import type { NextComponentType } from "next";

const AvaialabilityOptions: NextComponentType = () => {
  const availableOptions = ["In Stock", "Out of Stock"];
  return (
    <>
      <div>
        {availableOptions.map((option) => {
          return (
            <div key="option.index">
              <div className="flex justify-between py-4">
                <input
                  id="radio1"
                  type="radio"
                  name="radio"
                  className="hidden"
                  checked
                />
                <label className="flex items-center cursor-pointer">
                  <span className="w-4 h-4 inline-block mr-1 border border-grey rounded-md"></span>
                  {option}
                </label>
                <div>(3)</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AvaialabilityOptions;
