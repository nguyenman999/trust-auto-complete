import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Select from '../Select';

/**
 * The AutoComplete component that will show the suggestion as the dropdown
 * every time use type something in the input box. By clicking on the suggestion
 * item the input will fill in with this value.
 */
const AutoComplete = (props) => {
  const { className, prefixCls, ...otherProps } = props;
  return (
    <Select
      className={classNames(className, `${prefixCls}-auto-complete`)}
      showSearch
      mode="combobox"
      {...otherProps}
    />
  );
};

AutoComplete.defaultProps = {
  prefixCls: 'ts-select',
};

AutoComplete.propTypes = {
  /**
   * Icon will show before the input box.
   */
  inputIcon: PropTypes.node,
  /**
   * List of suggestion item
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  /**
   * The inline css style
   */
  style: PropTypes.object,
};

export default AutoComplete;
