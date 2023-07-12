import { render } from '@testing-library/react';

import Home from './Home';

describe('<Home /> test suite', () => {
  it('Should render the <Home /> component', () => {
    render(<Home />);
  });
});
