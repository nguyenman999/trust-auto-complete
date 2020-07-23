import * as React from 'react';
import classNames from 'classnames';
// import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
// import RowContext from './RowContext';
// import { tuple } from '../_util/type';
// import ResponsiveObserve, {
//   Breakpoint,
//   ScreenMap,
//   responsiveArray,
// } from '../_util/responsiveObserve';

// const RowAligns = tuple('top', 'middle', 'bottom', 'stretch');
// const RowJustify = tuple('start', 'end', 'center', 'space-around', 'space-between');

// export type Gutter = number | Partial<Record<Breakpoint, number>>;
// export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
//   gutter?: Gutter | [Gutter, Gutter];
//   align?: typeof RowAligns[number];
//   justify?: typeof RowJustify[number];
//   prefixCls?: string;
// }

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
