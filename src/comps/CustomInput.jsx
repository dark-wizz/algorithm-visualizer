import { Label } from "@mui/icons-material";
import { Dialog, Box, TextField, Typography, Button } from "@mui/material";
import { useRef } from "react";

const CustomInput = (p) => {
  const inputRef = useRef()
  const close = ()=>{
    p.setOpenInput(false)
  }
  const submit = ()=>{
    const str = inputRef.current.value
    const numbers = str.split(',').map(num => parseInt(num.trim()));
    p.setVals(numbers.map((v,k)=>{
      return {i:k,v:v}
    }))
    close()
  }
  return <>
    <Dialog 
      fullWidth
      open={p.openInput}
      onClose={close}
    >
      <Box
        sx={{
          padding: "2em",
          display: "grid",
        }}
      >
        <TextField inputRef={inputRef} variant="outlined"
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
        <Button color="error" variant="contained"
          onClick={close}
        >Cancel</Button>
        <Button color="success" variant="contained"
          onClick={submit}
        >Submit</Button>
      </Box>
    </Dialog>
  </>
}

export default CustomInput;
