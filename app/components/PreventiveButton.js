import React from 'react';
import { Button } from 'react-bootstrap';

class PreventiveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
  }

  render () {
    let { disabled } = this.state;
    return <Button bsStyle='primary' disabled={disabled}>Submit</Button>;
  }
}

export default PreventiveButton;
