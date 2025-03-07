
const Bars = ({val}) => {
  return <div className="bars">
    <div className="bar"
      style={{
          border: "1px solid black",
          width: "1em",
          height: `${val}em`,
      }}
    ></div>
  </div>
}

export default Bars;
