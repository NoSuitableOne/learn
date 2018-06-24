import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

class Button extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <button
        type="button"
        onClick={this.props.clickHandler}
      >
        { this.props.value }
      </button>
    );
  }
}

Button.defaultProps = {
  value: "button"
};

Button.propTypes = {
  value: PropTypes.string,
  clickHandler: PropTypes.func
};

export default Button;
