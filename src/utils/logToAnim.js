import { xFromTranslate } from "./funcs"
[
  { "i": 0, "j": 1, "swap": true },
  { "i": 1, "j": 2, "swap": true },
  { "i": 2, "j": 3, "swap": true },
  { "i": 0, "j": 1, "swap": true },
  { "i": 1, "j": 2, "swap": false },
  { "i": 0, "j": 1, "swap": false }
]

const red = "#ef0000"
const green = "#00ef00"

export const bubbleLog = (log) => {
  let seq = []
  for(let l of log){
    seq.push(
      [`#b${l.i}`, {y: "-2em"}],
      [`#b${l.j}`, {y: "-2em"},{at:"<"}],
      [`#b${l.i}`, {y: "0em"}],
      [`#b${l.j}`, {y: "0em"},{at:"<"}],
    )
    if (l.swap){
      let b1 = document.getElementById(`b${l.i}`);
      let b2 = document.getElementById(`b${l.j}`);

      let x1 = xFromTranslate(b1.style.transform);
      let x2 = xFromTranslate(b2.style.transform);
      const distance = l.j - l.i;

      seq.push(
        [b1,
          {
            x: `${x1 + distance * 2}em`,
          },
        ],
        [b2,
          {
            x: `${x2 - distance * 2}em`,
          },
          {
            at: "<"
          },
        ], 
      )
    }
  }
  return seq
}
