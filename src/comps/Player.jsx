import LinearProgress from '@mui/material/LinearProgress';

const Player = () => {
  return <div className="player">
    <LinearProgress variant="determinate" value={10} />
    
  </div>
}

export default Player;
