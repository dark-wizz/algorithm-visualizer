import { motion } from "motion/react";
const Bars = ({val}) => {
  return <div className="bars">
    <motion.div className="bar"
      layout
      style={{
          border: "1px solid black",
          backgroundColor: "gray",
          width: "1em",
          height: `${val}em`,
      }}
    ></motion.div>
  </div>
}

export default Bars;
