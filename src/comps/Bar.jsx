import { Box, Paper, Typography } from "@mui/material";

const Bars = (p) => {
  return (
    <Paper
      className="bar"
      elevation={10}
      id={`b${p.id}`}
    >
      <Typography sx={{fontSize: "0.8em"}}>
        {p.val}
        </Typography>

      <Box
        style={{
          height: `${p.val}em`,
        }}
      ></Box>
      <Typography sx={{fontSize: "0.8em"}}>{p.id}</Typography>
    </Paper>
  );
};

export default Bars;
