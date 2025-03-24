import Slider from '@mui/material/Slider';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { genRandomArr } from '../utils/funcs';
import bubbleSort from '../utils/algos/bubbleSort';
import { bubbleLog } from '../utils/logToAnim';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDesc } from './contexts/DescProvider';


const Player = (p) => {

  const [playing, setPlaying] = useState(false)
  const [control, setControl] = useState(null)
  const stepsRef = useRef([])

  const [speed, setSpeed] = useState(1);
  const speedRef = useRef(1)

  const {setDesc} = useDesc()

  const cancelRef = useRef(false)
  const currStepRef = useRef(0)
  const playingRef = useRef(false)

  useEffect(()=>{
    playingRef.current = playing;
  },[playing])

  useEffect(()=>{
    speedRef.current=speed;
  },[speed])

  useEffect(()=>{
    const log = bubbleSort([...p.vals])
    const seq = bubbleLog(log, p.vals)
    stepsRef.current = seq
  })

  useEffect(()=>{

    cancelRef.current = true
    currStepRef.current = 0
    if (control) control.stop()
  },[p.size, p.vals])

  const onPlay = async() => {
    console.log(currStepRef.current)
    cancelRef.current = false
    playingRef.current = !playingRef.current
    setPlaying(p=>!p)
    while(currStepRef.current<stepsRef.current.length){
      if(cancelRef.current || !playingRef.current) break;
      setDesc(stepsRef.current[currStepRef.current].desc)
      const ctrl = p.animate(stepsRef.current[currStepRef.current++].animation)
      ctrl.speed = speedRef.current
      setControl(ctrl)
      await ctrl
    }
  }

  const onNext = () => {
    setPlaying(false)
    cancelRef.current = true
    if(currStepRef.current < stepsRef.current.length){
      setDesc(stepsRef.current[currStepRef.current].desc)
      p.animate(stepsRef.current[currStepRef.current++].animation)
    }
  }

  const onPrev = () => {
    setPlaying(false)
    cancelRef.current = true
    if(currStepRef.current > 0){
      setDesc(stepsRef.current[currStepRef.current].desc)
      p.animate(stepsRef.current[currStepRef.current--].animation)
    }
  }
  
  const onSpeedSelect = (e) => {
    console.log(e.target.value)
    setSpeed(e.target.value)
  }

  const onGen = () => {
    p.setVals(genRandomArr(2,20,p.size))
  }
  const onSizeChange = (e) => {
    p.setSize(e.target.value)
  }

  const onRestart = () => {
    control.cancel()
  }

  return <div className="player">
    <div className="wrap">
      <Slider 
        max={stepsRef.current.length}
        value={currStepRef.current}
      />
      <div className="player_control">
      <FormControl sx={{ minWidth: "3em" }} size="small">
        <InputLabel id="player_speed_label">speed</InputLabel>
        <Select
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
        <InputLabel id="player_size_label">size</InputLabel>
        <Input type="number" defaultValue={p.size} onChange={onSizeChange}/>
      </FormControl>
      </div>
    </div>
  </div>
}

export default Player;
