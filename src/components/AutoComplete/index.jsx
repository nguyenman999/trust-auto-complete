import React from 'react';
import classNames from 'classnames';
import Select from '../Select';

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

export default AutoComplete;
