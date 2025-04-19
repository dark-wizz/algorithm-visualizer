import { Box, Card, Container } from "@mui/material"
import Bar from "./Bar"

const Display = (p) => {
  const max = Math.max(...p.vals.map((v,_)=>v.v))
  return <Card
    className="display"
    sx={{
      paddingTop: "4em"
    }}
  >
    {p.vals.map((v, k) => (
      <Bar val={v.v} id={k} key={k} max={max}
      />
    ))}
  </Card>
}

export default Display