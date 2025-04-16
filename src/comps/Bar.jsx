import { Box, Paper, Typography } from "@mui/material";

const Bars = (p) => {
  return (
    <Paper
      className="bar"
      id={`b${p.id}`}
    >
      <Typography>
        {p.val}
        </Typography>

      <Box
        style={{
          height: `${p.val}em`,
        }}
      ></Box>
      <Typography>{p.id}</Typography>
    </Paper>
  );
};

export default Bars;
