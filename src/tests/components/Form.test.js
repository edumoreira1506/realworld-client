import React from 'react';
import Form from '../../components/Form';
import { render, fireEvent } from '@testing-library/react';

describe('<Form />', () => {
  const renderForm = overrideProps => {
    const defaultProps = {
      inputs: [],
      buttonText: 'button text',
      onSubmit: jest.fn()
    };

    const {
      container,
      getByTestId
    } = render(<Form {...defaultProps} {...overrideProps} />);

    return { container, getByTestId };
  };

  it('renders the component', () => {
    const { container } = renderForm();

    expect(container).toBeInTheDocument();
  });

  describe('on submit', () => {
    let onSubmit;

    beforeEach(() => {
      onSubmit = jest.fn();
    });

    it('calls onSubmit when form is submited', () => {
      const props = { onSubmit };
      const { getByTestId } = renderForm(props);

      fireEvent.submit(getByTestId('form'));

      expect(onSubmit).toBeCalled();
    });
  });
});
