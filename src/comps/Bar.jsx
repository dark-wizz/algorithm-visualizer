import { Box, Paper, Typography } from "@mui/material";

const Bars = (p) => {
  const hPerc = (p.val / p.max) * 100
  return (
    <Paper
      className="bar"
      elevation={10}
      id={`b${p.id}`}
      sx={{
        height: `calc(${hPerc}% + 2em)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontSize: "0.8em" }}>
        {p.val}
      </Typography>
      <Typography sx={{ fontSize: "0.8em" }}>{p.id}</Typography>
    </Paper>
  );
};

export default Bars;
