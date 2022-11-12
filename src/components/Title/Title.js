import React from "react";
import PropTypes from "prop-types";
import styles from "src/components/Title/Title.module.scss";
import cx from "classnames";

const Title = ({ as = "h2", className, children, ...props }) => {
  const cName = Object.keys(styles)
    .filter((cn) => className?.includes(cn))
    .map((key) => styles[key]);

  return React.createElement(as, { className: cx(...cName), ...props }, children);
};

export default Title;

Title.propTypes = {
  as: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};
