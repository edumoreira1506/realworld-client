import React from 'react';
import Input from '../Input';
import Button from '../Button';

import './index.scss';

const Form = ({ inputs, buttonText, onSubmit }) => (
  <form className="Form" onSubmit={onSubmit}>
    {
      inputs.map(input =>
        <div className="Form__field" key={input.name}>
          <Input
            value={input.value}
            placeholder={input.placeholder}
            type={input.type}
            onChange={input.onChange}
            required={input.required}
            name={input.name}
          />
        </div>
      )
    }
    <div className="Form__submit-button">
      <Button type="submit" onClick={onSubmit}>
        { buttonText }
      </Button>
    </div>
  </form>
);

export default Form;
