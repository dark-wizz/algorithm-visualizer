import LinearProgress from '@mui/material/LinearProgress';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';


const Player = () => {
  return <div className="player">
    <LinearProgress variant="determinate" value={10} />
    <div className="player_control">
      <RestartAltOutlinedIcon /> 
      <SkipPreviousOutlinedIcon />
      <PlayCircleFilledWhiteOutlinedIcon />
      <SkipNextOutlinedIcon />
      <AutoFixHighOutlinedIcon />
    </div>
  </div>
}

export default Player;
