import { useApp } from "../comps/contexts/AppProvider";
import { bubbleCode } from "./pseudocode";
import gsap from "gsap";

const bgColor = "#010812"
const activeColor = "#3DF3F120"

export const animateLog = (log, codeLen, p) => {
  const tl = gsap.timeline({
    onUpdate:()=>{
      p.setTime(tl.time())
    },
    onComplete: ()=>{
      tl.pause()
      p.setPlaying(false)
    },
    onReverseComplete: ()=>{
      tl.pause()
      p.setPlaying(false)
    },
    paused:true,
  });
  for (let l of log) {
    if (l.type == "checkBars") animCheckBars(l, tl);
    else if (l.type == "swapBars") animSwapBars(l, tl);
    else if (l.type == "codeHighlight") animCode(l, tl, p.setDesc, codeLen);
  }
  return tl;
};

function animCode(l, tl, setDesc, codeLen){
  for(let line of l.lines){
    for(let i=0; i<codeLen; i++){
      tl.to(`#c${i}`,{
        backgroundColor: bgColor,
        duration: 0,
      })
    }
    tl.to(`#c${line-1}`,{
      backgroundColor: activeColor,
      onStart: ()=>setDesc(l.desc),
      onReverseComplete: ()=>setDesc(l.desc)
    })
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
