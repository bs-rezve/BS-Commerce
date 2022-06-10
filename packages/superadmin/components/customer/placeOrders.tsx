import React, { FC } from "react";
import AddButton from "../global/AddButton";

interface Props {}

const PlaceOrders: FC<Props> = () => {
  return (
    <div className="">
      <div className="mb-2 fs-6">
        During the order placement process, you will see almost exactly what the
        customer would see while browsing this site, with the exception of the
        header menu (you will see the following text 'Impersonated as
        customer@email.here - finish session'). Navigate to the products the
        customer wants and add them to the cart exactly as the customer would,
        then use the 'Checkout' button to proceed through the usual checkout
        process. Note: Click 'finish session' link in order to finish this
        session
      </div>
      <div>
        <AddButton title="Place Order" link={"users/customer/addressCreate"} />
      </div>
    </div>
  );
};

export default PlaceOrders;
