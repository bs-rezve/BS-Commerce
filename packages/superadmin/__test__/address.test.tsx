import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";

import MyForm from "../pages/Order/address";

test("rendering and submitting a basic Formik form", async () => {
    const handleSubmit = jest.fn();
    render(<MyForm onSubmit={handleSubmit} />);
    // const user = userEvent.setup()

    await user.type(
        screen.getByRole("textbox", { name: /first name/i }),
        "Anik"
    );
    await user.type(
        screen.getByRole("textbox", { name: /last name/i }),
        "Barua"
    );
    await user.click(screen.getByRole('button', {
      name: /save/i
    }))

    // await waitFor(() =>
    //     expect(handleSubmit).toHaveBeenCalledWith({
    //         firstName: "Anik",
    //         lastName: "Barua",
    //     })
    // );
    // expect(handleSubmit).toHaveBeenCalledTimes(1);
});

// test("has 2 required fields on first step", async () => {
//     clickSubmitButton();

//     await waitFor(() => {
//         expect(
//             screen.getAllByText("This field must not be empty")
//         ).toBeInTheDocument();
//         // expect(getFirstName()).toHaveErrorMessage('This field must not be empty');
//     });

//     // expect(getCity()).toHaveErrorMessage('city is a required field');
//     // expect(getSelectJobSituation()).toHaveErrorMessage(
//     //   'You need to select your job situation'
//     // );
// });

function getFirstName() {
    return screen.getByRole("textbox", { name: /first name/i });
}

// function clickSubmitButton() {
//     return user.click(screen.findByRole(/save/i))
// }

// import * as React from 'react';
// import '@testing-library/jest-dom/extend-expect';
// import { Formik, Form, Field } from 'formik';
// import { render, fireEvent, waitFor } from '@testing-library/react';

// describe('Very important form', () => {
//   it('submits values and fires', async () => {
//     const mock = jest.fn();
//     const { getByText, getByTestId } = render(
//       <Formik initialValues={{ name: '' }} onSubmit={mock}>
//         <Form>
//           <Field name="name" data-testid="Input" />
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     );

//     const input = await waitFor(() => getByTestId('Input'));
//     const button = await waitFor(() => getByText('Submit'));

//     fireEvent.change(input, {
//       target: {
//         value: 'Charles',
//       },
//     });

//     fireEvent.click(button);

//     expect(mock).toBeCalled();
//     expect(mock.mock.calls[0][0].name).toBe('Charles');
//   });
// });
