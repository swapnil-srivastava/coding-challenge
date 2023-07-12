import { render } from '@testing-library/react';

import FilterBar from './FilterBar';

describe('<FilterBar />', () => {
  it('Should render the listing form component', () => {
    render(
      <FilterBar
        submittedForm={function (listings: ListingPayload): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
  });
});
