import { Box, Card, Container } from "@mui/material"
import Bar from "./Bar"

const Display = (P) => {
return <Card
    className="display"
    style={{
      display: "flex",
      gap: "1em",
      alignItems: "flex-end",
    }}
  >
    {P.vals.map((v, k) => (
      <Bar val={v.v} id={k} key={k} />
    ))}
  </Card>
}

export default Display