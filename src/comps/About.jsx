import { useApp } from "./contexts/AppProvider";

const About = () => {
  const { desc, selectedAlgo } = useApp();

  const algorithms = {
    bubbleSort: "Bubble Sort",
    selectionSort: "Selection Sort",
  };
  return (
    <div className="about">
      <div className="wrap">
        <h4 className="title" style={{ marginBottom: "0.7em" }}>
          {algorithms[selectedAlgo]}
        </h4>
        <div className="desc">{desc}</div>
      </div>
    </div>
  );
};

export default About;
