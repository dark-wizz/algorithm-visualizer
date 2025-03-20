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


const Player = (p) => {

  const onPlay = () => {
    const log = bubbleSort([...p.vals])
    const seq = bubbleLog(log, p.vals)
    p.animate(seq)
  }

  const onGen = () => {
    p.setVals(genRandomArr(2,10,p.size))
  }
  const onSizeChange = (e) => {
    p.setSize(e.target.value)
  }

  return <div className="player">
    <div className="wrap">
      <Slider />
      <div className="player_control">
      <FormControl sx={{ minWidth: "3em" }} size="small">
        <InputLabel id="player_speed_label">speed</InputLabel>
        <Select
          labelId="player_speed_label"
          id="player_speed"
          label="speed"
          value="1"
          autoWidth
        >
          <MenuItem value={0.5}>0.5x</MenuItem>
          <MenuItem value={1}>1x</MenuItem>
          <MenuItem value={1.5}>1.5x</MenuItem>
          <MenuItem value={2}>2x</MenuItem>
        </Select>
      </FormControl>
      <div className="buttons">
        <div className="restart">
          <RestartAltOutlinedIcon /> 
        </div>
        <div className="prev">
          <SkipPreviousOutlinedIcon />
        </div>
        <div className="play" onClick={onPlay}>
          <PlayCircleFilledWhiteOutlinedIcon />
        </div>
        <div className="next">
          <SkipNextOutlinedIcon />
        </div>
        <div className="gen" onClick={onGen}>
          <AutoFixHighOutlinedIcon />
        </div>
      </div>
      <FormControl sx={{ width: "5em" }} size="small">
        <InputLabel id="player_speed_label">size</InputLabel>
        <Input type="number" defaultValue={p.size} onChange={onSizeChange}/>
      </FormControl>
      </div>
    </div>
  </div>
}

export default Player;
