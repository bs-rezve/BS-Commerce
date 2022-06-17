import { render } from "@testing-library/react";
import Index from "../../storefront/components/checkout/shippingPage/shipping";
describe("Shipping", () => {
    //it or test
    test("Show heading output", () => {
        const { getByTestId } = render(<Index />);
        expect(getByTestId("id")).toHaveTextContent("Contact");
    });
})
