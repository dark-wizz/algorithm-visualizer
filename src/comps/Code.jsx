import { Card, Box, Typography } from "@mui/material";
import { bubbleCode, selectionCode } from "../utils/pseudocode.js";
import { useApp } from "./contexts/AppProvider.jsx";

const Code = () => {
  const { selectedAlgo } = useApp();

  let currCode;
  switch (selectedAlgo) {
    case "bubbleSort":
      currCode = bubbleCode;
      break;
    case "selectionSort":
      currCode = selectionCode;
      break;
  }
  return (
    <Card className="code">
      <Box className="wrap">
        {currCode.map((v, i) => {
          return (
            <Typography component="pre"
              sx={{
                fontFamily:"JetBrains Mono",
                fontSize: "0.6em !important"
              }}
              id={`c${i}`} key={i}
            >
                {i + 1} {v}
              </Typography>
            );
        })}
      </Box>
    </Card>
  );
};

export default Code;
