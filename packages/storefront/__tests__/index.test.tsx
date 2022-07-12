import { render } from '@testing-library/react';
import PageNotFOund from '../pages/404';

describe('Home Page', () => {
  //it or test
  it('Show heading output', () => {
    const { getByTestId } = render(<PageNotFOund />);
    expect(getByTestId('heading')).toHaveTextContent('Ooops! Error 404');
  });
});
