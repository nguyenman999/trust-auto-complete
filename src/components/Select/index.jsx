import React, { useRef } from 'react';
import classNames from 'classnames';
import RcSelect, { Option } from 'rc-select';

// type RawValue = string | number;

// export { OptionProps };

// export type OptionType = typeof Option;

// export interface LabeledValue {
//   key?: string;
//   value: RawValue;
//   label: React.ReactNode;
// }

// export type SelectValue = RawValue | RawValue[] | LabeledValue | LabeledValue[];

// export interface InternalSelectProps<VT> extends Omit<RcSelectProps<VT>, 'mode'> {
//   suffixIcon?: React.ReactNode;
//   size?: SizeType;
//   mode?: 'multiple' | 'tags' | 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
//   bordered?: boolean;
// }

// export interface SelectProps<VT>
//   extends Omit<InternalSelectProps<VT>, 'inputIcon' | 'mode' | 'getInputElement' | 'backfill'> {
//   mode?: 'multiple' | 'tags';
// }

// We still use class here since `forwardRef` not support generic in typescript
const Select = (props) => {
  //static SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';

  // static defaultProps = {
  //   transitionName: 'slide-up',
  //   choiceTransitionName: 'zoom',
  //   bordered: true,
  // };

  const selectRef = useRef(undefined);

  const renderSelect = () => {
    const {
      prefixCls,
      className,
      mode,
      listHeight = 256,
      listItemHeight = 24,
      getPopupContainer,
      dropdownClassName,
      bordered,
    } = props;

    const rcSelectRtlDropDownClassName = classNames(dropdownClassName);

    const mergedClassName = classNames(className, {
      [`${prefixCls}-borderless`]: !bordered,
    });

    return (
      <RcSelect
        ref={selectRef}
        virtual={true}
        dropdownMatchSelectWidth={true}
        {...props}
        listHeight={listHeight}
        listItemHeight={listItemHeight}
        mode={mode}
        prefixCls={prefixCls}
        direction="ltr"
        inputIcon={undefined}
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
  choiceTransitionName: 'zoom',
  bordered: true,
};

export default Select;
