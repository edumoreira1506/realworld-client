import React from 'react';
import Input from '../Input';
import TextArea from '../TextArea';
import Button from '../Button';

import './index.scss';

const Form = ({ inputs = [], buttonText, onSubmit, textAreas = [] }) => (
  <form className="Form" onSubmit={onSubmit} data-testid="form">
    {
      inputs.map(input =>
        <div className="Form__field" key={input.placeholder}>
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
    {
      textAreas.map(textArea =>
        <div className="Form__field" key={textArea.placeholder}>
          <TextArea
            value={textArea.value}
            placeholder={textArea.placeholder}
            onChange={textArea.onChange}
            required={textArea.required}
            name={textArea.name}
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
