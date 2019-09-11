import React from 'react';
import { render } from '@testing-library/react';

import { ComponentExample } from './ComponentExample';

it('should render ComponentExample', () => {
  const { container } = render(<ComponentExample />);

  expect(container).toMatchSnapshot();
});
