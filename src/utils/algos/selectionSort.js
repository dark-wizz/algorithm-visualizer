export default function selectionSort(arr) {
  let logs = [];
  logs.push({
    type: "codeHighlight", lines: [1], vars: { arr: arr },
    desc: "Starting Selection Sort on the given array."
  });
  const n = arr.length;
  logs.push({
    type: "codeHighlight", lines: [2], vars: { arr: arr, n: n },
    desc: `Array size determined: ${n}`
  });
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    logs.push({
      type: "codeHighlight", lines: [3,4], vars: { arr: arr, n: n, i: i, minIndex: minIndex },
      desc: `Starting pass ${i + 1}, assuming index ${i} (${arr[i].v}) as the minimum.`
    });
    
    for (let j = i + 1; j < n; j++) {
      logs.push({
        type: "codeHighlight", lines: [5,6], vars: { arr: arr, n: n, i: i, j: j, minIndex: minIndex },
        desc: `Comparing ${arr[j].v} with current minimum ${arr[minIndex].v}`
      });
      logs.push({ type: "checkBars", i: j, i_id: arr[j].i, j: minIndex, j_id: arr[minIndex].i });
      
      if (arr[j].v < arr[minIndex].v) {
        minIndex = j;
        logs.push({
          type: "codeHighlight", lines: [7], vars: { arr: arr, n: n, i: i, j: j, minIndex: minIndex },
          desc: `New minimum found at index ${j} (${arr[j].v}). Updating minIndex.`
        });
      }
    }
    
    if (minIndex !== i) {
      logs.push({
        type: "codeHighlight", lines: [8, 9, 10], vars: { arr: arr, n: n, i: i, minIndex: minIndex },
        desc: `Swapping ${arr[i].v} with new minimum ${arr[minIndex].v}`
      });
      logs.push({ type: "swapBars", i: i, i_id: arr[i].i, j: minIndex, j_id: arr[minIndex].i });
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  
  logs.push({
    type: "codeHighlight", lines: [11,12], vars: { arr: arr, n: n },
    desc: "Sorting complete. Array is now sorted."
  });
  return logs;
}

