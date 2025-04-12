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
import gsap from "gsap";
import {useGSAP} from "@gsap/react"
import { bubbleCode, selectionCode } from "../utils/pseudocode";

const Player = (p) => {
  const { selectedAlgo, setDesc } = useApp();

  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0)
  const [totalTime, setTotalTime] = useState(0)
  const [speed, setSpeed] = useState(1)

  const control = useRef(null);

  useEffect(()=>{
    control.current?.seek(time)
  },[time])

  useEffect(()=>{
    if(playing) control.current?.play()
    else control.current?.pause()
  },[playing])

  useEffect(() => {
    let log;
    let algo;
    switch (selectedAlgo) {
      case "bubbleSort":
        log = bubbleSort([...p.vals]);
        algo = bubbleCode
        break;
      case "selectionSort":
        log = selectionSort([...p.vals]);
        algo = selectionCode
        break;
    }
    control.current = animateLog(log, algo.length,{
      setTime, setTotalTime, setPlaying
    });
  },[p.vals, selectedAlgo]);

  const onPlay = () => {
    setPlaying(p=>!p)
  };

  const onNext = () => {
    setTime(p => p+1) 
  };

  const onPrev = () => {
    setTime(p => p-1) 
  };

  const onSpeedSelect = (e) => {
    setSpeed(e.target.value)
    control.current.timeScale(e.target.value)
  };

  const onGen = () => {
    p.onGen();
  };

  const onReset = () => {
    setPlaying(false)
    control.current.revert()
    setTime(0)
  };

  const onSlide = (e) => {
    const t = e.target.value 
    control.current.seek(t)
    setTime(t)
  };
  return (
    <div className="player">
      <div className="wrap">
        <div className="slider">
          {time.toFixed(1)}
          <Slider
            max={totalTime.toFixed(1)}
            value={time}
            onChange={onSlide} 
            step = {0.000001}
          />
          {totalTime.toFixed(1)}
        </div>
        <div className="player_control">
          <FormControl sx={{ minWidth: "3em" }} size="small">
            <InputLabel id="player_speed_label">speed</InputLabel>
            <Select
              MenuProps={{
                PaperProps: {
                  className: "custom-select-menu",
                },
              }}
              labelId="player_speed_label"
              id="player_speed"
              label="speed"
              defaultValue={1}
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
            <div className="reset" onClick={onReset}>
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
            <InputLabel id="player_size_label">size</InputLabel>
            <Input
              type="number"
              id="sizeInp"
              value={p.size}
              onChange={(e)=>{
                p.setSize(e.target.value)
              }}
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Player;
