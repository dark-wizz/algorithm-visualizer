import { MenuItem } from '@mui/material';
import Select from '@mui/material/Select';

const Header = (p) => {
  return <div className="header">
    <Select value={p.selectedAlgo} 
      onChange={(e)=>p.setSelectedAlgo(e.target.value)}>
      <MenuItem value="bubbleSort"> Bubble Sort </MenuItem>
      <MenuItem value="selectionSort">Selection Sort</MenuItem>
    </Select>
  </div>
}

export default Header;
