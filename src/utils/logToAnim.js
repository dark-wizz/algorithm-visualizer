import { bubbleCode } from "./pseudocode";

const red = "#ef0000";
const green = "#3DF3F120";
const white = "#010812";
const gray = "linear-gradient(#23eded, #ffffff)";
const teal = "#008080";

export const animateLog = (log) => {
  let steps = [];
  let counterSteps = [];
  for (let l of log) {
    if (l.type == "checkBars") animCheckBars(l, steps, counterSteps);
    else if (l.type == "swapBars") animswapBars(l, steps, counterSteps);
    else if (l.type == "codeHighlight") animCode(l, steps, counterSteps);
  }
  return { steps, counterSteps };
};

function animCode(l, steps, counterSteps) {
  const s = l.lines.map((v, i) => {
    return {
      animation: [
        ...Array.from({ length: bubbleCode.length }).map((v, i) => [
          `#c${i} `,
          { backgroundColor: white, color: "white" },
          { duration: 0 },
        ]),
        [
          `#c${v - 1}`,
          {
            backgroundColor: green,
            color: "#23eded",
            borderRadius: "3px",
          },
        ],
      ],
      desc: l.desc,
      script: () =>
        document
          .getElementById(`c${v - 1}`)
          .scrollIntoView({ block: "center", behavior: "smooth" }),
    };
  });
  steps.push(...s);
  counterSteps.push(...s);
}

function animCheckBars(l, steps, counterSteps) {
  const s = {
    animation: [
      [
        `#b${l.i_id}`,
        {
          y: "-2em",
          boxShadow: "0 0 10px #23eded",
        },
      ],
      [
        `#b${l.j_id}`,
        {
          y: "-2em",
          boxShadow: "0 0 10px #23eded",
        },
        {
          at: "<",
        },
      ],
      [
        `#b${l.i_id}`,
        {
          y: "0em",
          boxShadow: "none",
        },
      ],
      [
        `#b${l.j_id}`,
        {
          y: "0em",
          boxShadow: "none",
        },
        {
          at: "<",
        },
      ],
    ],
    desc: "Comparing bars...",
  };
  steps.push(s);
  counterSteps.push(s);
}
function animswapBars(l, steps, counterSteps) {
  let b1 = document.getElementById(`b${l.i_id}`);
  let b2 = document.getElementById(`b${l.j_id}`);

  steps.push({
    animation: [
      [
        b1,
        {
          x: `${2 * (l.i - l.i_id) + (l.i - l.j) * -2}em`,
          boxShadow: "0 0 10px #2AFF31",
        },
      ],
      [
        b2,
        {
          x: `${2 * (l.j - l.j_id) + (l.i - l.j) * 2}em`,
          boxShadow: "0 0 10px #2AFF31",
        },
        {
          at: "<",
        },
      ],
      [b1, { boxShadow: "none" }, { times: 1 }],
      [b2, { boxShadow: "none" }, { times: 1 }],
    ],
    desc: "Swapping bars...",
  });

  counterSteps.push({
    animation: [
      [
        b1,
        {
          x: `${2 * (l.i - l.i_id)}em`,
          boxShadow: "0 0 10px #2AFF31",
        },
      ],
      [
        b2,
        {
          x: `${2 * (l.j - l.j_id)}em`,
          boxShadow: "0 0 10px #2AFF31",
        },
        {
          at: "<",
        },
      ],
      [b1, { boxShadow: "none" }, { times: 1 }],
      [b2, { boxShadow: "none" }, { times: 1 }],
    ],
    desc: "Swapping bars...",
  });
}
