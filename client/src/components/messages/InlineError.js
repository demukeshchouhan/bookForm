import React from "react";
import PropTypes from "prop-types";

const InlineError = ({ msg }) => {
  return <span style={{ color: "red" }}>{msg}</span>;
};

InlineError.propTYpes = {
  msg: PropTypes.string.isRequired
};
export default InlineError;
