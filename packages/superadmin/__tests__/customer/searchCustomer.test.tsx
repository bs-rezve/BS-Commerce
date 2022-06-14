import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "../../components/customer/searchForm";
import { searchValue } from "../../utils/typs";

const initData: searchValue = {
  email: "",
  company: "",
  fName: "",
  ipAddress: "",
  lastName: "",
  role: [],
  month: [],
  day: [],
};

test("Search Customer Form", async () => {
  const handleSubmit = jest.fn();
  const result = render(
    <SearchForm saveHandler={handleSubmit} initData={initData} />
  );
  const user = userEvent.setup();

  await user.type(screen.getByLabelText(/Email/i), "john.dee@someemail.com");
  await user.type(screen.getByLabelText(/Company/i), "Company");
  await user.type(screen.getByLabelText(/First name/i), "First name");
  await user.type(screen.getByLabelText(/IP address/i), "IP address");
  await user.type(screen.getByLabelText(/Last name/i), "Last name");
  await user.selectOptions(screen.getByLabelText(/Customer roles/i), []);
  const month: any = result.container.querySelector("#Month");
  await user.selectOptions(month, []);
  const day: any = result.container.querySelector("#Day");
  await user.selectOptions(day, []);

  await user.click(screen.getByRole("button", { name: /Search/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: "john.dee@someemail.com",
      company: "Company",
      fName: "First name",
      ipAddress: "IP address",
      lastName: "Last name",
      role: [],
      month: [],
      day: [],
    })
  );
});
