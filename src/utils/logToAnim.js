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

export const bubbleLog = (log, vals) => {
  let seq = []
  for(let l of log){
    seq.push(
      [`#b${l.i_id}`, {y: "-2em"}],
      [`#b${l.j_id}`, {y: "-2em"},{at:"<"}],
      [`#b${l.i_id}`, {y: "0em"}],
      [`#b${l.j_id}`, {y: "0em"},{at:"<"}],
    )
    if (l.swap){
      let b1 = document.getElementById(`b${l.i_id}`);
      let b2 = document.getElementById(`b${l.j_id}`);

      seq.push(
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
      )
    }
  }
  return seq
}
