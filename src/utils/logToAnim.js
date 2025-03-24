
const red = "#ef0000"
const green = "#00ef00"
const white = "#fff"

export const bubbleLog = (log) => {
  let steps = []
  let counterSteps = []
  for(let l of log){
    if(l.type == "checkBars") animCheckBars(l, steps, counterSteps)
    else if(l.type == "swapBars") animswapBars(l, steps, counterSteps)
    else if(l.type == "codeHighlight") animCode(l, steps, counterSteps)
  }
  return {steps, counterSteps}
}

function animCode(l, steps, counterSteps){
  const s = l.lines.map((v,i) => {
    return {
      animation: [
        ...Array.from({length:13}).map((v,i) => [
          `#c${i-1}`, {backgroundColor: white}, {duration: 0}
        ]),
        [`#c${v-1}`, {backgroundColor: green}]
      ],
      desc: l.desc
    };
  })
  steps.push(...s)
  counterSteps.push(...s)
}

function animCheckBars (l, steps, counterSteps){
  const s = {
    animation:[
      [`#b${l.i_id}`, {y: "-2em"}],
      [`#b${l.j_id}`, {y: "-2em"},{at:"<"}],
      [`#b${l.i_id}`, {y: "0em"}],
      [`#b${l.j_id}`, {y: "0em"},{at:"<"}],
    ],
    desc: "comparing bars..." 
  }
  steps.push(s)
  counterSteps.push(s)
}
function animswapBars(l, steps, counterSteps){
  let b1 = document.getElementById(`b${l.i_id}`);
  let b2 = document.getElementById(`b${l.j_id}`);

  steps.push({
    animation:[
      [b1,
        {
          x: `${2 * (l.i - l.i_id) + 2}em`,
        },
      ],
      [b2,
        {
          x: `${2 * (l.j - l.j_id) - 2}em`,
        },
        {
          at: "<"
        },
      ], 
    ],
    desc: "swapping bars..."
  })

  counterSteps.push({
    animation:[
      [b1,
        {
          x: `${2 * (l.i - l.i_id)}em`,
        },
      ],
      [b2,
        {
          x: `${2 * (l.j - l.j_id)}em`,
        },
        {
          at: "<"
        },
      ], 
    ],
    desc: "swapping bars..."
  })
}
