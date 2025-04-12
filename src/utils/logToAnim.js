import { bubbleCode } from "./pseudocode";
import gsap from "gsap";



export const animateLog = (log) => {
  let steps = [];
  let counterSteps = [];
  const tl = gsap.timeline({paused:true});
  for (let l of log) {
    if (l.type == "checkBars") animCheckBars(l, tl);
    else if (l.type == "swapBars") animSwapBars(l, tl);
    else if (l.type == "codeHighlight") animCode(l, tl);
  }
  return tl;
};

function animCode(l, tl){
  for(let i=0; i<bubbleCode.length; i++){
    console.log(i)
    tl.to(`#c${i-1}`,{
      duration: 0,
    })
  }

  for(let line of l.lines){
    tl.to(`#c${line-1}`,{backgroundColor: "pink"})
  }
}

function animSwapBars(l, tl){
  let dist = l.j - l.i;
  tl.to(`#b${l.i_id}`,{
    x: `+=${dist*2}em`
  })
  tl.to(`#b${l.j_id}`,{
    x: `+=${dist*-2}em`
  }, "<")
}

function animCheckBars(l, tl){
  tl.to(`#b${l.i_id}`,{keyframes: {y:[-20, 0]}})
  tl.to(`#b${l.j_id}`,{keyframes: {y:[-20, 0]}}, "<")
}
