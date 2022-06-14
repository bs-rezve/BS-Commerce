import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CreateForm from "../../components/customer/createForm";
import userEvent from "@testing-library/user-event";

const initData = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  gender: "",
  dob: "",
  companyname: "",
  ite: false,
  newsletter: [],
  customerRoles: [],
  mofVendor: [],
  active: false,
  adminCommit: "",
};

test("Create customer form", async () => {
  const handleSubmit = jest.fn();
  render(<CreateForm saveHandler={handleSubmit} initData={initData} />);
  const user = userEvent.setup();

  await user.type(screen.getByLabelText(/Email/i), "john.dee@someemail.com");
  await user.type(screen.getByLabelText(/Password/i), "123");
  await user.type(screen.getByLabelText(/First name/i), "First name");
  await user.type(screen.getByLabelText(/Last name/i), "Last name");
  await user.type(screen.getByLabelText(/Admin comment/i), "Admin comment");
  await user.click(screen.getByLabelText(/Active/i));
  await user.type(screen.getByLabelText(/Date of birth/i), "2019-03-29");
  await user.type(screen.getByLabelText(/Company name/i), "abc");
  await user.click(screen.getByLabelText(/Is tax exempt/i));
  await user.selectOptions(screen.getByLabelText(/Newsletter/i), []);
  await user.selectOptions(screen.getByLabelText(/Customer roles/i), []);
  await user.selectOptions(screen.getByLabelText(/Manager of vendor/i), []);
  await user.click(screen.getByLabelText("Male"));

  await user.click(screen.getByRole("button", { name: /submit/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: "john.dee@someemail.com",
      password: "123",
      firstname: "First name",
      lastname: "Last name",
      adminCommit: "Admin comment",
      active: true,
      dob: "2019-03-29",
      companyname: "abc",
      ite: true,
      newsletter: [],
      customerRoles: [],
      mofVendor: [],
      gender: "Male",
    })
  );
});
