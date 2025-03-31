import { bubbleCode } from "./pseudocode"

const red = "#ef0000"
const green = "#00ef00"
const white = "#fff"
const gray = "#808080"
const teal = "#008080"

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
        ...Array.from({length:bubbleCode.length}).map((v,i) => [
          `#c${i}`, {backgroundColor: white}, {duration: 0}
        ]),
        [`#c${v-1}`, {backgroundColor: green}]
      ],
      desc: l.desc,
      script: ()=>
        document.getElementById(`c${v-1}`)
          .scrollIntoView({block:"center", behavior:"smooth"})
    };
  })
  steps.push(...s)
  counterSteps.push(...s)
}

function animCheckBars (l, steps, counterSteps){
  const s = {
    animation:[
      [`#b${l.i_id}`, {
        y: "-2em", 
        backgroundColor: teal
      }
      ],
      [`#b${l.j_id}`, 
        {
        y: "-2em",
        backgroundColor: teal
        },
        {
          at:"<"
        }
      ],
      [`#b${l.i_id}`, 
        {
          y: "0em",
          backgroundColor: [teal,gray]
        }
      ],
      [`#b${l.j_id}`, 
        {
          y: "0em",
          backgroundColor: [teal,gray]
        },
        {
          at:"<"
        }
      ],
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
          x: `${2 * (l.i - l.i_id) + (l.i-l.j)*-2}em`,
          backgroundColor: green
        }
      ],
      [b2,
        {
          x: `${2 * (l.j - l.j_id) + (l.i-l.j)*2}em`,
          backgroundColor: green
        },
        {
          at: "<",
        },
      ], 
      [b1, {backgroundColor: gray},{times: 1}],
      [b2, {backgroundColor: gray},{times: 1}]
    ],
    desc: "swapping bars..."
  })

  counterSteps.push({
    animation:[
      [b1,
        {
          x: `${2 * (l.i - l.i_id)}em`,
          backgroundColor: green
        },
      ],
      [b2,
        {
          x: `${2 * (l.j - l.j_id)}em`,
          backgroundColor: green
        },
        {
          at: "<"
        },
      ], 
      [b1, {backgroundColor: gray},{times: 1}],
      [b2, {backgroundColor: gray},{times: 1}]
    ],
    desc: "swapping bars..."
  })
}
