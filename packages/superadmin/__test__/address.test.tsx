import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MyForm from '../pages/Order/address';

test('rendering and submitting a basic Formik form', async () => {
    const handleSubmit = jest.fn()
    render(<MyForm onSubmit={handleSubmit} />)
    const user = userEvent.setup()
  
    await user.type(screen.getByLabelText(/first name/i), 'Null')
    await user.type(screen.getByLabelText(/last name/i), 'Dee')
    await user.type(screen.getByLabelText(/email/i), 'john.dee@someemail.com')
  
    await user.click(screen.getByRole('button', {name: /Save/i}))
  
    // await waitFor(() =>
    //   expect(handleSubmit).toHaveBeenCalledWith({
    //     email: 'john.dee@someemail.com',
    //     firstName: 'John',
    //     lastName: 'Dee',
    //   }),
    // )
  })