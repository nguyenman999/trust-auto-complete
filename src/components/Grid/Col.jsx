import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function parseFlex(flex) {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
}

/**
 * The responsive column that render div as a resposive container. The applicable class
 * will apply when the screen size meet the breakpoint
 */
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
};

Col.propTypes = {
  /**
   * Raster number of cells to occupy, 0 corresponds to display: none
   */
  span: PropTypes.number,
  /**
   * The number of cells to offset Col from the left
   */
  offset: PropTypes.number,
  /**
   * screen < 576px and also default setting, could be a span value or an object containing above props
   */
  xs: PropTypes.number,
  /**
   * screen ≥ 576px, could be a span value or an object containing above props
   */
  sm: PropTypes.number,
  /**
   * screen ≥ 768px, could be a span value or an object containing above props
   */
  md: PropTypes.number,
  /**
   * screen ≥ 992px, could be a span value or an object containing above props
   */
  lg: PropTypes.number,
  /**
   * screen ≥ 1200px, could be a span value or an object containing above props
   */
  xl: PropTypes.number,
  /**
   * screen ≥ 1600px, could be a span value or an object containing above props
   */
  xxl: PropTypes.number,
};

export default Col;
