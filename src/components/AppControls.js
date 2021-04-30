import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Menu from "./Menu";
import { Button } from "@chakra-ui/react";
import DarkModeToggle from "react-dark-mode-toggle";
const AppControls = ({
  algorithm,
  onAlgorithmChange,
  onGenerateRandomArray,
  arraySize,
  onArraySizeChange,
  onToggleDarkMode,
  darkMode,
}) => {
  return (
    <Fragment>
      <Menu
        placeholder="Sort Algorithm"
        items={[
          "Bubble Sort",
          "Selection Sort",
          "Insertion Sort",
          "Quick Sort",
          "Shell Sort",
          "Quick Sort 3",
          "Merge Sort",

          "Heap Sort",
        ]}
        selected={algorithm}
        onSelect={onAlgorithmChange}
      />

      <div className="AppControls__Size">
        <Menu
          placeholder="Size"
          items={["5", "10", "20", "30", "65", "100"]}
          selected={String(arraySize)}
          onSelect={onArraySizeChange}
        />
      </div>
      <Button
        onClick={onGenerateRandomArray}
        variant="solid"
        colorScheme="twitter"
      >
        Randomize
      </Button>

      <DarkModeToggle
        onChange={onToggleDarkMode}
        checked={darkMode}
        size={65}
        className="toggle__btn"
      />
    </Fragment>
  );
};

AppControls.propTypes = {
  algorithm: PropTypes.string,
  onAlgorithmChange: PropTypes.func.isRequired,
  onGenerateRandomArray: PropTypes.func.isRequired,
  arraySize: PropTypes.number,
  onArraySizeChange: PropTypes.func.isRequired,
  onToggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool,
};

export default AppControls;
