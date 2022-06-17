import { render } from "@testing-library/react";
import Index from "../pages/home";

describe("Home", () => {
    //it or test
    test('Show heading output', () => {
        const { getByTestId } = render(<Index />);
        expect(getByTestId("section")).toHaveTextContent("Section title");
    });
});
