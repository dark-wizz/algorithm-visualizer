import gsap from "gsap";

const bgClr = "#010812"
const activeCodeClr ="rgba(61, 243, 240, 0.30)"
const activeCodeFontClr ="rgba(61, 243, 240)"
const pickBarClr = "red"
const mainClr = "#23eded"

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
    else if (l.type == "pick") animPick(l, tl)
      else if (l.type == "drop") animDrop (l, tl)
  }
  return tl;
};

function animPick(l, tl){
  tl.to(`#b${l.i}`, {borderColor:pickBarClr})
}

function animDrop (l,tl){
  tl.to(`#b${l.i}`, {borderColor:mainClr})
}

function animCode(l, tl, setDesc, codeLen){
  for(let line of l.lines){
    for(let i=0; i<codeLen; i++){
      tl.to(`#c${i}`,{
        backgroundColor: "transparent",
        color: "white",
        duration: 0,
      })
    }
    tl.to(`#c${line-1}`,{
        color: activeCodeFontClr,
        borderRadius: "5px",
        backgroundColor: activeCodeClr,
      onStart: ()=>setDesc(l.desc),
      onReverseComplete: ()=>setDesc(l.desc)
    })
  }
}

function animSwapBars(l, tl){
  let dist = l.j - l.i;
  tl.to(`#b${l.i_id}`,{
    xPercent: `+=${dist*200}`
  })
  tl.to(`#b${l.j_id}`,{
    xPercent: `+=${dist*-200}`
  }, "<")
}

function animCheckBars(l, tl){
  tl.to(`#b${l.i_id}`,{keyframes: {y:[-20, 0]}})
  tl.to(`#b${l.j_id}`,{keyframes: {y:[-20, 0]}}, "<")
}
