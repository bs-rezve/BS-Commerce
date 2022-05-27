import { render, screen, fireEvent } from "@testing-library/react";
import TestEvents from "../components/counter";

it("increments counter", () => {
  const { getByTestId } = render(<TestEvents />);

  fireEvent.click(getByTestId("button-up"));

  expect(getByTestId("counter")).toHaveTextContent("1");
});

it("decrements counter", () => {
  const { getByTestId } = render(<TestEvents />);

  fireEvent.click(getByTestId("button-down"));

  expect(getByTestId("counter")).toHaveTextContent("-1");
});
