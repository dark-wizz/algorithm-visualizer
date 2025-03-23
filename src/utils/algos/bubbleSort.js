export default function bubbleSort(arr){
  let logs = []
  logs.push({
    type: "codeHighlight", lines:[1], vars:{arr: arr},
    desc: "Entering BubbleSort"
  })
  const n = arr.length
  logs.push({
    type: "codeHighlight", lines:[2], vars:{arr: arr, n: n},
    desc:"Exctracting array size"
  })
  let swapped;
  logs.push({
    type: "codeHighlight", lines:[3], vars:{arr: arr, n: n},
    desc:"Entering Loop1"
  })
  for (let i = 0; i < n - 1; i++){
    swapped = false;
    logs.push({
      type: "codeHighlight", lines:[4], vars:{arr: arr, n: n, i:i, swapped: swapped},
      desc:"Setting swap to false"
    })
    logs.push({
      type: "codeHighlight", lines:[5], vars:{arr: arr, n: n, i:i, swapped: swapped},
      desc:"Entering Loop2"
    })
    for (let j = 0; j < n - i - 1; j++){
      logs.push({
        type: "codeHighlight", lines:[6], vars:{arr: arr, n: n,
          i:i, j:j, swapped: swapped},
        desc:"checking whether the arr[j] is greater than arr[j+1] "
      })
      logs.push({type: "checkBars", i: j, i_id:arr[j].i,j:j+1, j_id:arr[j+1].i})
      if (arr[j].v > arr[j + 1].v){
        logs.push({
          type: "codeHighlight", lines:[7], vars:{arr: arr, n: n,
            i:i, j:j, swapped: swapped},
          desc:"swapping arr[j] with arr[j+1] "
        })
        logs.push({type: "swapBars", i: j, i_id:arr[j].i,j:j+1, j_id:arr[j+1].i})
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
        logs.push({
          type: "codeHighlight", lines:[8], vars:{arr: arr, n: n,
            i:i, j:j, swapped: swapped},
          desc:"setting swapped to be true"
        })
      }
    }

    logs.push({
      type: "codeHighlight", lines:[9,10], vars:{arr: arr, n: n,
        i:i, swapped: swapped},
      desc:"Checking whether the swapped is false"
    })
    if (swapped == false){
      logs.push({
        type: "codeHighlight", lines:[11,12], vars:{arr: arr, n: n,
        i:i, swapped: swapped},
        desc:"Breaking the loop"
      })
      break;
    }
  }
  logs.push({
    type: "codeHighlight", lines:[13], vars:{arr: arr, n: n,
    swapped: swapped},
    desc:"Sorting completed"
  })
  return logs
}
