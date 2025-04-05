import Slider from "@mui/material/Slider";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { genRandomArr } from "../utils/funcs";
import bubbleSort from "../utils/algos/bubbleSort";
import { animateLog } from "../utils/logToAnim";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useApp } from "./contexts/AppProvider";
import selectionSort from "../utils/algos/selectionSort";

const Player = (p) => {
  const { selectedAlgo, setDesc } = useApp();

  const [playing, setPlaying] = useState(false);
  const playingRef = useRef(false);

  const stepsRef = useRef([]);
  const counterStepsRef = useRef([]);
  const [stepsSize, setStepsSize] = useState(0);

  const [speed, setSpeed] = useState(1);
  const speedRef = useRef(1);

  const [currStep, setCurrStep] = useState(0);
  const currStepRef = useRef(0);

  const controlRef = useRef(null);

  useEffect(() => {
    currStepRef.current = currStep;
    playingRef.current = playing;
    speedRef.current = speed;
  }, [currStep, playing, speed]);

  useEffect(() => {
    let log;
    switch (selectedAlgo) {
      case "bubbleSort":
        log = bubbleSort([...p.vals]);
        break;
      case "selectionSort":
        log = selectionSort([...p.vals]);
        break;
    }
    const { steps, counterSteps } = animateLog(log, p.vals.length);
    stepsRef.current = steps;
    counterStepsRef.current = counterSteps;
    setStepsSize(steps.length);
  });

  const play = (dir) => {
    console.log("enter");
    if (!playingRef.current) return;
    setDesc(stepsRef.current[currStepRef.current].desc);
    stepsRef.current[currStepRef.current].script?.();
    if (dir == "forwd") {
      const ctrl = p.animate(stepsRef.current[currStepRef.current].animation);
      if (currStepRef.current >= stepsSize - 1) {
        setPlaying(false);
        return;
      }
      setCurrStep((p) => p + 1);
      ctrl.speed = speedRef.current;
      controlRef.current = ctrl;
    } else if (dir == "backwd") {
      p.animate(counterStepsRef.current[currStepRef.current].animation);
      if (currStepRef.current <= 0) {
        setPlaying(false);
        return;
      }
      setCurrStep((p) => p - 1);
    }
  };

  const onPlay = async () => {
    playingRef.current = !playingRef.current;
    setPlaying((p) => !p);
    while (currStepRef.current <= stepsSize - 1) {
      if (!playingRef.current) break;
      play("forwd");
      await controlRef.current;
    }
  };

  const onNext = () => {
    setPlaying(true);
    play("forwd");
  };

  const onPrev = () => {
    setPlaying(true);
    play("backwd");
  };

  const onSpeedSelect = (e) => {
    setSpeed(e.target.value);
  };

  const onGen = () => {
    p.setVals(genRandomArr(2, 15, p.size));
  };
  const onSizeChange = (e) => {
    p.setSize(e.target.value);
  };

  const onRestart = () => {
    setPlaying(false);
    while (currStepRef.current >= 0) {
      setDesc(counterStepsRef.current[currStepRef.current].desc);
      p.animate(counterStepsRef.current[currStepRef.current--].animation);
      if (currStepRef.current > 0) setCurrStep((p) => p - 1);
    }
    setCurrStep(0);
  };

  const onSlide = (e) => {
    let v = e.target.value;
    setPlaying(false);
    const isForward = currStep - v < 0;
    if (isForward) {
      for (let i = currStep; i <= v; i++) {
        setDesc(counterStepsRef.current[currStepRef.current].desc);
        p.animate(stepsRef.current[i].animation);
      }
    } else {
      for (let i = currStep; i >= v; i--) {
        setDesc(counterStepsRef.current[currStepRef.current].desc);
        p.animate(counterStepsRef.current[i].animation);
      }
    }
    setCurrStep(v);
  };
  return (
    <div className="player">
      <div className="wrap">
        <div className="slider">
          {currStep}
          <Slider
            sx={{
              "& .MuiSlider-thumb": {
                width: 30,
                height: 30,
                backgroundColor: "#23eded",
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "0 0 20px #23eded",
                },
              },
              "& .MuiSlider-track": {
                backgroundColor: "#23eded",
                height: ".4rem",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#02143E",
                height: ".4rem",
              },
            }}
            max={stepsSize - 1}
            value={currStep}
            onChange={onSlide}
          />
          {stepsSize - 1}
        </div>
        <div className="player_control">
          <FormControl sx={{ minWidth: "3em" }} size="small">
            <InputLabel
              id="player_speed_label"
              sx={{
                color: "#23EDED",
                textShadow: "0 0 5px #23EDED",
              }}
            >
              speed
            </InputLabel>
            <Select
              sx={{
                color: "#23EDED",
                fontWeight: "bold",
                textShadow: "0 0 5px #23EDED",
                ".MuiSvgIcon-root": {
                  color: "#23EDED",
                  filter: "drop-shadow(0 0 5px #23EDED)",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "#23EDED",
                  borderWidth: "2px",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#23EDED",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#23EDED",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#010812",
                    color: "#23EDED",
                    boxShadow: "0 0 5px #23EDED",
                    border: "2px solid #23EDED",
                  },
                },
              }}
              labelId="player_speed_label"
              id="player_speed"
              label="speed"
              defaultValue="1"
              autoWidth
              onChange={onSpeedSelect}
            >
              <MenuItem value={0.25}>0.25x</MenuItem>
              <MenuItem value={0.5}>0.5x</MenuItem>
              <MenuItem value={1}>1x</MenuItem>
              <MenuItem value={1.5}>1.5x</MenuItem>
              <MenuItem value={2}>2x</MenuItem>
              <MenuItem value={3}>3x</MenuItem>
            </Select>
          </FormControl>
          <div className="buttons">
            <div className="restart" onClick={onRestart}>
              <RestartAltOutlinedIcon />
            </div>
            <div className="prev" onClick={onPrev}>
              <SkipPreviousOutlinedIcon />
            </div>
            <div className="play" onClick={onPlay}>
              {!playing && <PlayCircleFilledWhiteOutlinedIcon />}
              {playing && <PauseCircleOutlineOutlinedIcon />}
            </div>
            <div className="next" onClick={onNext}>
              <SkipNextOutlinedIcon />
            </div>
            <div className="gen" onClick={onGen}>
              <AutoFixHighOutlinedIcon />
            </div>
          </div>
          <FormControl sx={{ width: "5em" }} size="small">
            <InputLabel
              id="player_size_label"
              sx={{
                color: "#23EDED",
                textShadow: "0 0 5px #23EDED",
              }}
            >
              size
            </InputLabel>
            <Input
              sx={{
                color: "#23EDED",
                textShadow: "0 0 5px #23EDED",
                "&:before": {
                  borderBottom: "2px solid #23EDED",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "2px solid #23EDED",
                },
              }}
              type="number"
              defaultValue={p.size}
              onChange={onSizeChange}
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Player;
