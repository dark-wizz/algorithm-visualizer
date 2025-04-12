const Bars = (p) => {
  return (
    <div
      className="bar"
      id={`b${p.id}`}
      style={{
        width: "1em",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>{p.val}</div>

      <div
        style={{
          fontSize: "1rem",
          height: `${p.val}em`,
        }}
      ></div>

      <div style={{ fontSize: "0.8em", fontWeight: "bold" }}>{p.id}</div>
    </div>
  );
};

export default Bars;
