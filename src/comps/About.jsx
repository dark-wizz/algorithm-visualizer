import { useApp } from "./contexts/AppProvider";

const About = () => {
  const { desc } = useApp();
  return (
    <div className="about">
      <div className="wrap">
        <h4 className="title" style={{ marginBottom: "0.7em" }}>
          BubbleSort
        </h4>
        <div className="desc">{desc}</div>
      </div>
    </div>
  );
};

export default About;
