
const red = "#ef0000"
const green = "#00ef00"
const white = "#fff"

export const bubbleLog = (log) => {
  let seq = []
  for(let l of log){
    if(l.type == "checkBars") animCheckBars(l, seq)
    else if(l.type == "swapBars") animswapBars(l, seq)
    else if(l.type == "codeHighlight") animCode(l, seq)
  }
  return seq
}

function animCode(l, seq){
  seq.push(
    ...l.lines.map((v,i) => {
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
  )
}

function animCheckBars (l, seq){
  seq.push({
    animation:[
      [`#b${l.i_id}`, {y: "-2em"}],
      [`#b${l.j_id}`, {y: "-2em"},{at:"<"}],
      [`#b${l.i_id}`, {y: "0em"}],
      [`#b${l.j_id}`, {y: "0em"},{at:"<"}],
    ],
    desc: l.desc  
  })
}
function animswapBars(l, seq){
  let b1 = document.getElementById(`b${l.i_id}`);
  let b2 = document.getElementById(`b${l.j_id}`);

  seq.push({
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
    desc: l.desc
  })
}
