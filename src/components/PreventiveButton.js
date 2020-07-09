import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function PreventiveButton(props) {
  const [disabled, setDisabled] = useState(false);

  const disable = () => {
    setDisabled(true);
  }

  const enable = () => {
    setDisabled(false);
  }

  const handleButtonClick = () => {
    disable();
    props.action(reset);
  }

  const reset = () => {
    enable();
  }

  const { label } = props;
  const text = (disabled) ? "Submitting..." : label;
  return <Button bsstyle='primary' disabled={disabled} onClick={handleButtonClick}>{text}</Button>;
}

export default PreventiveButton;
