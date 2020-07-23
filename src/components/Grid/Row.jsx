import * as React from 'react';
import classNames from 'classnames';

const Row = (props) => {
  const {
    prefixCls,
    justify,
    align,
    className,
    style,
    children,
    gutter,
    direction,
    ...others
  } = props;
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${justify}`]: justify,
      [`${prefixCls}-${align}`]: align,
      [`${prefixCls}-rtl`]: direction === 'rtl',
    },
    className,
  );

  let mergedStyle = { ...style };
  if (gutter) {
    mergedStyle = {
      ...(gutter[0] > 0
        ? {
            marginLeft: gutter[0] / -2,
            marginRight: gutter[0] / -2,
          }
        : {}),
      ...(gutter[1] > 0
        ? {
            marginTop: gutter[1] / -2,
            marginBottom: gutter[1] / 2,
          }
        : {}),
      ...style,
    };
  }

  const otherProps = { ...others };

  return (
    <div {...otherProps} className={classes} style={mergedStyle}>
      {children}
    </div>
  );
};

Row.defaultProps = {
  prefixCls: 'ts-row',
  direction: 'ltr',
};

export default Row;
