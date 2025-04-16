import { Box, Card, Container } from "@mui/material"
import Bar from "./Bar"

const Display = (P) => {
return <Card
    className="display"
  >
    {P.vals.map((v, k) => (
      <Bar val={v.v} id={k} key={k} />
    ))}
  </Card>
}

export default Display