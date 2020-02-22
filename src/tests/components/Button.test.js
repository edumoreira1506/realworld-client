import React from 'react';
import Button from '../../components/Button';
import { render, fireEvent } from '@testing-library/react';

describe('<Button />', () => {
  const renderButton = overrideProps => {
    const defaultProps = {
      onClick: jest.fn(),
      children: 'children',
      type: 'text',
      disabled: false
    };
    const {
      container, getByTestId
    } = render(<Button {...defaultProps} {...overrideProps} />);

    return { container, getByTestId };
  }

  it('renders the component', () => {
    const { container } = renderButton();

    expect(container).toBeInTheDocument();
  });

  describe('onClick', () => {
    let onClick;

    beforeEach(() => {
      onClick = jest.fn();
    });

    it('call onClick when button is clicked', () => {
      const props = { onClick };
      const { getByTestId } = renderButton(props);

      fireEvent.click(getByTestId('button'));

      expect(onClick).toBeCalled();
    });
  });
});
