import * as React from 'react';
import classNames from 'classnames';

// https://github.com/ant-design/ant-design/issues/14324
// const ColSpanType = [number, string];

// const FlexType = [number, 'none', 'auto', string];

// export interface ColSize {
//   span?: ColSpanType;
//   order?: ColSpanType;
//   offset?: ColSpanType;
//   push?: ColSpanType;
//   pull?: ColSpanType;
// }

function parseFlex(flex) {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
}

const Col = (props) => {
  const {
    prefixCls,
    span,
    order,
    offset,
    push,
    pull,
    className,
    children,
    flex,
    style,
    gutter,
    direction,
    ...others
  } = props;
  let sizeClassObj = {};
  ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach((size) => {
    let sizeProps = {};
    const propSize = props[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if (typeof propSize === 'object') {
      sizeProps = propSize || {};
    }

    delete others[size];

    sizeClassObj = {
      ...sizeClassObj,
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]:
        sizeProps.order || sizeProps.order === 0,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]:
        sizeProps.offset || sizeProps.offset === 0,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]:
        sizeProps.push || sizeProps.push === 0,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]:
        sizeProps.pull || sizeProps.pull === 0,
      [`${prefixCls}-rtl`]: direction === 'rtl',
    };
  });
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${span}`]: span !== undefined,
      [`${prefixCls}-order-${order}`]: order,
      [`${prefixCls}-offset-${offset}`]: offset,
      [`${prefixCls}-push-${push}`]: push,
      [`${prefixCls}-pull-${pull}`]: pull,
    },
    className,
    sizeClassObj,
  );

  let mergedStyle = { ...style };
  if (gutter) {
    mergedStyle = {
      ...(gutter[0]
        ? {
            paddingLeft: gutter[0] / 2,
            paddingRight: gutter[0] / 2,
          }
        : {}),
      ...(gutter[1]
        ? {
            paddingTop: gutter[1] / 2,
            paddingBottom: gutter[1] / 2,
          }
        : {}),
      ...mergedStyle,
    };
  }
  if (flex) {
    mergedStyle.flex = parseFlex(flex);
  }

  return (
    <div {...others} style={mergedStyle} className={classes}>
      {children}
    </div>
  );
};

Col.defaultProps = {
  prefixCls: 'ts-col',
  direction: 'ltr',
};

// Col.propTypes = {
//   span: PropTypes.oneOf();
//   order?: ColSpanType;
//   offset?: ColSpanType;
//   push?: ColSpanType;
//   pull?: ColSpanType;
//   xs?: ColSpanType | ColSize;
//   sm?: ColSpanType | ColSize;
//   md?: ColSpanType | ColSize;
//   lg?: ColSpanType | ColSize;
//   xl?: ColSpanType | ColSize;
//   xxl?: ColSpanType | ColSize;
//   prefixCls: string;
//   flex: FlexType;
// }

export default Col;
