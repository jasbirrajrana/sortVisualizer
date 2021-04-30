import React from "react";
import { Progress } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ProgressBar = ({ width }) => (
  <Progress value={width} colorScheme="linkedin" />
);

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
};

export default ProgressBar;
