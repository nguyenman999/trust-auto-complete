import React from 'react';
import classNames from 'classnames';
import RcSelect from 'rc-select';

const Select = (props) => {
  const renderSelect = () => {
    const {
      prefixCls,
      className,
      mode,
      listHeight = 256,
      listItemHeight = 24,
      getPopupContainer,
      dropdownClassName,
      inputIcon,
    } = props;

    const rcSelectRtlDropDownClassName = classNames(dropdownClassName);

    const mergedClassName = classNames(className, {
      [`${prefixCls}-borderless`]: false,
    });

    return (
      <RcSelect
        virtual={true}
        dropdownMatchSelectWidth={true}
        {...props}
        listHeight={listHeight}
        listItemHeight={listItemHeight}
        mode={mode}
        prefixCls={prefixCls}
        direction="ltr"
        showArrow={inputIcon ? true : false}
        inputIcon={inputIcon}
        menuItemSelectedIcon={undefined}
        removeIcon={undefined}
        clearIcon={undefined}
        notFoundContent={undefined}
        className={mergedClassName}
        getPopupContainer={getPopupContainer}
        dropdownClassName={rcSelectRtlDropDownClassName}
      />
    );
  };

  return renderSelect();
};

Select.Option = Option;
Select.defaultProps = {
  prefixCls: 'ts-select',
  transitionName: 'slide-up',
  mode: 'combobox',
};

export default Select;
