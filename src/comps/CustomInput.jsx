import { Label } from "@mui/icons-material";
import { Dialog, Box, TextField, Typography, Button } from "@mui/material";

const CustomInput = (p) => {
  return <>
    <Dialog 
      fullWidth
      open={p.openInput}
      onClose={()=>p.setOpenInput(false)}
    >
      <Box
        sx={{
          padding: "2em",
          display: "grid",
        }}
      >
        <TextField variant="outlined"
          label="Custom Input"
          id="custInput"
        />
        <Typography sx={{padding: "0.5em", color:"gray"}}>
          Please enter comma seperated numbers ie. 2, 4, 5, 6, 34, 3
        </Typography>
      </Box>
      <Box sx={{
        display: "flex",
        padding: "1em",
        justifyContent: "end",
        gap: "1em"
      }}>
        <Button color="error" variant="contained">Cancel</Button>
        <Button color="success" variant="contained">Submit</Button>
      </Box>
    </Dialog>
  </>
}

export default CustomInput;
