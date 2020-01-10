import React from "react";
import PropTypes from "prop-types";

const TextField = ({ value, onChange }) => (
  <input value={value} onChange={onChange} />
);

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default TextField;
