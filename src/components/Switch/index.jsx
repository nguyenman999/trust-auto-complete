import React from 'react';
import Toggle from 'react-toggle';
import PropTypes from 'prop-types';

const Switch = (props) => {
  return <Toggle {...props} />;
};

Switch.propTypes = {
  icons: PropTypes.shape({
    checked: PropTypes.node,
    unchecked: PropTypes.node,
  }),
};

export default Switch;
