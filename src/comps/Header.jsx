import { MenuItem } from '@mui/material';
import Select from '@mui/material/Select';

const Header = () => {
  return <div className="header">
    <Select value="bubbleSort">
      <MenuItem value="bubbleSort">Bubble Sort</MenuItem>
      <MenuItem value="selectionSort">Selection Sort</MenuItem>
    </Select>
  </div>
}

export default Header;
