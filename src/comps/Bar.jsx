import { motion } from "motion/react";
const Bars = (p) => {
  return <div className="bars">
    <motion.div className="bar"
      id={`b${p.id}`}
      layout
      style={{
          border: "1px solid black",
          backgroundColor: "gray",
          width: "1em",
          height: `${p.val}em`,
      }}
    ></motion.div>
  </div>
}

export default Bars;
