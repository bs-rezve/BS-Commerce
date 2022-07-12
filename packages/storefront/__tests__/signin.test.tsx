import { render, screen } from '@testing-library/react';
import SignIn from '../pages/account/sign-up';

test('renders text in signup page', () => {
  const { getByTestId } = render(<SignIn />);
  expect(getByTestId('create')).toHaveTextContent('Create Account');
});
