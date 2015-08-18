import React from 'react';
import { Button } from 'react-bootstrap';

class PreventiveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };

    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);
  }

  enable() {
    this.setState( { disabled: false } );
  }

  disable() {
    this.setState( { disabled: true } );
  }

  render () {
    let { disabled } = this.state;
    return <Button bsStyle='primary' disabled={disabled}>Submit</Button>;
  }
}

export default PreventiveButton;
