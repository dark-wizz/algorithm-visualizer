import Slider from "@mui/material/Slider";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import KeyboardIcon from '@mui/icons-material/Keyboard';
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
import bubbleSort from "../utils/algos/bubbleSort";
import { animateLog } from "../utils/logToAnim";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useApp } from "./contexts/AppProvider";
import selectionSort from "../utils/algos/selectionSort";
import { bubbleCode, selectionCode } from "../utils/pseudocode";
import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import CustomInput from "./CustomInput";

const Player = (p) => {
  const { selectedAlgo, setDesc, speed, setSpeed} = useApp();

  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0)
  const [totalTime, setTotalTime] = useState(0)
  const [steps, setSteps] = useState([])
  const [openInput, setOpenInput] = useState(false)

  const control = useRef(null);

  useEffect(()=>{
    control.current?.seek(time)
  },[time])

  useEffect(()=>{
    control.current?.revert()
    setPlaying(false)
    setTime(0)
  },[p.size,p.vals, selectedAlgo])

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
      setTime, setPlaying, setDesc
    });
    control.current?.timeScale(speed)
    setSteps(control.current?.getChildren())
    setTotalTime(control.current?.totalDuration())
  },[p.vals, selectedAlgo]);

  useEffect(()=>{
    control.current?.timeScale(speed)
  },[speed])

  const onPlay = () => {
    setPlaying(p=>!p)
  };

  const onNext = () => {
    setPlaying(false)
    if(!control.current) return
    const currentTime = control.current.time();
    setTime(control.current.time());
    const currentIndex = steps.findIndex(
      tween => currentTime >= tween.startTime() && currentTime < tween.endTime()
    );
    if (currentIndex >= 0 && currentIndex < steps.length - 1) {
      control.current.tweenTo(steps[currentIndex+1].endTime());
    }
  };

  const onPrev = () => {
    setPlaying(false)
    if(!control.current) return
    const currentTime = control.current.time();
    setTime(control.current.time());
    const currentIndex = steps.findIndex(
      tween => currentTime > tween.startTime() && currentTime <= tween.endTime()
    );
    if (currentIndex > 0) {
      control.current.tweenTo(steps[currentIndex-1].startTime());
    }
  };

  const onSpeedSelect = (e) => {
    setSpeed(e.target.value)
  };

  const onGen = () => {
    p.onGen();
  };

  const onReset = () => {
    setPlaying(false)
    control.current?.revert()
    setTime(0)
  };

  const onSlide = (e) => {
    const t = e.target.value 
    control.current.seek(t)
    setTime(t)
  };
  const onCustInp = () => {
    setOpenInput(true)
  }
  return (<>
    <CustomInput openInput={openInput} setOpenInput={setOpenInput} />
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
          <FormControl sx={{ minWidth: "3em" }} size="small">
            <InputLabel id="player_speed_label">speed</InputLabel>
            <Select
              MenuProps={{
                PaperProps: {
                  className: "custom-select-menu",
                },
              }}
              labelId="player_speed"
              id="player_speed_label"
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
        </div>
        <div className="player_control">
          <Tooltip title="custom input" placement="top" arrow>
            <IconButton onClick={onCustInp}>
              <KeyboardIcon />
            </IconButton>
          </Tooltip>
          <div className="buttons">
            <Tooltip title="Reset" placement="top" arrow>
              <IconButton onClick={onReset}>
                <RestartAltOutlinedIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Previous" placement="top" arrow>
              <IconButton onClick={onPrev}>
                <SkipPreviousOutlinedIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title={playing ? "Pause" : "Play"} placement="top" arrow>
              <IconButton onClick={onPlay}>
                {!playing ? <PlayCircleFilledWhiteOutlinedIcon /> : <PauseCircleOutlineOutlinedIcon />}
              </IconButton>
            </Tooltip>

            <Tooltip title="Next" placement="top" arrow>
              <IconButton onClick={onNext}>
                <SkipNextOutlinedIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Generate" placement="top" arrow>
              <IconButton onClick={onGen}>
                <AutoFixHighOutlinedIcon />
              </IconButton>
            </Tooltip>
          </div>          <FormControl sx={{ width: "5em" }} size="small">
            <Box className="sizeBox">
              <Typography>Size</Typography>
              <Slider
                max={25}
                min={1}
                valueLabelDisplay="auto"
                marks={[1,5,10,15,20,25].map(v=>{return {value:v}})}
                value={p.size}
                onChange={(e)=>p.setSize(e.target.value)} 
              />
            </Box>
          </FormControl>
        </div>
      </div>
    </div>
  </>);
};

export default Player;
