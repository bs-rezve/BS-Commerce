import { render } from "@testing-library/react";
import Index from "../pages/demo";

describe("Shipping", () => {
    //it or test
    test("Show heading output", () => {
        const { getByTestId } = render(<Index />);
        expect(getByTestId("test")).toHaveTextContent("Hello");
    });
});
