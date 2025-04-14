import gsap from "gsap";

const bgClr = "#010812"
const activeCodeClr = "#3DF3F120"
const pickBarClr = "red"
const mainCol = "#23eded"

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
    else if (l.type == "newMin") animNewMin(l, tl)
      else if (l.type == "resetMin") animResetMin(l, tl)
  }
  return tl;
};

function animNewMin(l, tl){
  tl.to(`#b${l.old}`, {borderColor:mainCol})
    .to(`#b${l.new}`, {borderColor:pickBarClr})
}

function animResetMin(l,tl){
  tl.to(`#b${l.i}`, {borderColor:mainCol})
}

function animCode(l, tl, setDesc, codeLen){
  for(let line of l.lines){
    for(let i=0; i<codeLen; i++){
      tl.to(`#c${i}`,{
        backgroundColor: bgClr,
        duration: 0,
      })
    }
    tl.to(`#c${line-1}`,{
      backgroundColor: activeCodeClr,
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
