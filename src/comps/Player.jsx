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


const Player = () => {
  return <div className="player">
    <Slider />
     <div className="player_control">
      <FormControl sx={{ minWidth: 50 }} size="small">
        <InputLabel id="player_speed_label">speed</InputLabel>
        <Select
          labelId="player_speed_label"
          id="player_speed"
          value={1}
          label="speed"
          autoWidth
        >
          <MenuItem value={0.5}>0.5x</MenuItem>
          <MenuItem value={1}>1x</MenuItem>
          <MenuItem value={1.5}>1.5x</MenuItem>
          <MenuItem value={2}>2x</MenuItem>
        </Select>
      </FormControl>
      <div className="buttons">
        <RestartAltOutlinedIcon /> 
        <SkipPreviousOutlinedIcon />
        <PlayCircleFilledWhiteOutlinedIcon />
        <SkipNextOutlinedIcon />
        <AutoFixHighOutlinedIcon />
      </div>
      <FormControl sx={{ width: "5em" }} size="small">
        <InputLabel id="player_speed_label">size</InputLabel>
        <Input type="number" defaultValue={10}/>
      </FormControl>
    </div>
  </div>
}

export default Player;
