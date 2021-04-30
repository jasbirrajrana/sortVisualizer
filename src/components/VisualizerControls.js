import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { Slider } from "@chakra-ui/slider";
import { SliderTrack } from "@chakra-ui/slider";
import { SliderFilledTrack } from "@chakra-ui/slider";
import { SliderThumb } from "@chakra-ui/slider";
import { MdGraphicEq } from "react-icons/md";
import { Box } from "@chakra-ui/layout";

// Helper function
function isDisabled(action, disabled = false) {
  return action === undefined || disabled;
}

const Forward = () => <i class="fas fa-forward fa-lg "></i>;

const Backward = () => <i class="fas fa-backward fa-lg"></i>;

const Repeat = () => <i class="fas fa-random fa-lg"></i>;

const Play = () => <i class="fas fa-play fa-lg"></i>;

const Pause = () => <i class="fas fa-pause fa-lg"></i>;

const VisualizerControls = ({
  // Actions
  onPlay,
  onPause,
  onBackward,
  onForward,
  onRepeat,
  onAdjustSpeed,

  // States
  playing,
  playDisabled,
  pauseDisabled,
  backwardDisabled,
  forwardDisabled,
  repeatDisabled,
  playbackSpeed,
}) => {
  return (
    <div className="VisualizerControls">
      {/* Repeat */}
      <Button
        icon={Repeat}
        onClick={onRepeat}
        disabled={isDisabled(onRepeat, repeatDisabled)}
        className="VisualizerControls__Button"
      />

      {/* Backward Button  */}
      <Button
        icon={Backward}
        onClick={onBackward}
        disabled={isDisabled(onBackward, backwardDisabled)}
        iconClass="VisualizerControls__Icon"
        className="VisualizerControls__Button"
      />

      {/* {/* Play or Pause button  */}
      <Button
        icon={playing ? Pause : Play}
        onClick={playing ? onPause : onPlay}
        disabled={
          playing
            ? isDisabled(onPause, pauseDisabled)
            : isDisabled(onPlay, playDisabled)
        }
        raised
        iconClass="VisualizerControls__Icon"
        className="VisualizerControls__CenterButton"
      />

      {/* Forward Button  */}

      <Button
        icon={Forward}
        onClick={onForward}
        disabled={isDisabled(onForward, forwardDisabled)}
        iconClass="VisualizerControls__Icon"
        className="VisualizerControls__Button"
      />

      {/* Playback Slider */}

      <div className="Size__Slider">
        <Slider
          aria-label="slider-ex-4"
          defaultValue={0.25}
          min={0.25}
          max={4}
          selected={playbackSpeed}
          onChangeEnd={(val) => onAdjustSpeed(val)}
        >
          <SliderTrack bg="blue.100">
            <SliderFilledTrack bg="blue.600" />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color="blue.400" as={MdGraphicEq} />
          </SliderThumb>
        </Slider>
      </div>
    </div>
  );
};

VisualizerControls.propTypes = {
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onBackward: PropTypes.func,
  onForward: PropTypes.func,
  onRepeat: PropTypes.func,
  onAdjustSpeed: PropTypes.func,

  playing: PropTypes.bool,
  playDisabled: PropTypes.bool,
  pauseDisabled: PropTypes.bool,
  backwardDisabled: PropTypes.bool,
  forwardDisabled: PropTypes.bool,
  repeatDisabled: PropTypes.bool,
  playbackSpeed: PropTypes.number,
};

export default VisualizerControls;
