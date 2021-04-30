import React from "react";
import PropTypes from "prop-types";
import { CSS_CLASSES } from "../utils/backdropConstants";

function buildClassNames(rootClass, ClassMappings, userClassName) {
  let classNames = `${rootClass}`;
  Object.keys(ClassMappings).forEach((className) => {
    if (ClassMappings[className]) {
      classNames += ` ${className}`;
    }
  });
  classNames += ` ${userClassName}`;
  return classNames;
}

const BackDrop = ({ show, opaque, dark, className, onClick }) => {
  const classNames = buildClassNames(
    CSS_CLASSES.ROOT,
    {
      [CSS_CLASSES.OPAQUE]: opaque,
      [CSS_CLASSES.DARK]: dark,
      [CSS_CLASSES.CLICKABLE]: onClick !== undefined,
    },
    className
  );

  return show ? <div className={classNames} onClick={onClick} /> : null;
};

BackDrop.propTypes = {
  show: PropTypes.bool,
  opaque: PropTypes.bool,
  dark: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default BackDrop;
