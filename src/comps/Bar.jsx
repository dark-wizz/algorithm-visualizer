import { Box, Paper, Typography } from "@mui/material";

const Bars = (p) => {
  return (
    <Paper
      className="bar"
      id={`b${p.id}`}
      style={{
        width: "1em",
        textAlign: "center",
      }}
    >
      <Typography style={{ fontSize: "0.8em", fontWeight: "bold" }}>
        {p.val}
        </Typography>

      <Box
        style={{
          fontSize: "1rem",
          height: `${p.val}em`,
        }}
      ></Box>
      <Typography style={{ fontSize: "0.8em", fontWeight: "bold" }}>{p.id}</Typography>
    </Paper>
  );
};

export default Bars;
