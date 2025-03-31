export default function bubbleSort(arr) {
  let logs = [];
  logs.push({
    type: "codeHighlight", lines: [1], vars: { arr: arr },
    desc: "Starting Bubble Sort on the given array."
  });
  const n = arr.length;
  logs.push({
    type: "codeHighlight", lines: [2], vars: { arr: arr, n: n },
    desc: `Array size determined: ${n}`
  });
  let swapped;
  logs.push({
    type: "codeHighlight", lines: [3], vars: { arr: arr, n: n },
    desc: "Beginning the outer loop to traverse the array."
  });
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    logs.push({
      type: "codeHighlight", lines: [4], vars: { arr: arr, n: n, i: i, swapped: swapped },
      desc: "Setting swapped flag to false for this pass."
    });
    logs.push({
      type: "codeHighlight", lines: [5], vars: { arr: arr, n: n, i: i, swapped: swapped },
      desc: `Starting inner loop iteration ${i + 1}.`
    });
    for (let j = 0; j < n - i - 1; j++) {
      logs.push({
        type: "codeHighlight", lines: [6], vars: { arr: arr, n: n, i: i, j: j, swapped: swapped },
        desc: `Comparing values: ${arr[j].v} and ${arr[j + 1].v}`
      });
      logs.push({ type: "checkBars", i: j, i_id: arr[j].i, j: j + 1, j_id: arr[j + 1].i });
      if (arr[j].v > arr[j + 1].v) {
        logs.push({
          type: "codeHighlight", lines: [7], vars: { arr: arr, n: n, i: i, j: j, swapped: swapped },
          desc: `Swapping ${arr[j].v} and ${arr[j + 1].v}`
        });
        logs.push({ type: "swapBars", i: j, i_id: arr[j].i, j: j + 1, j_id: arr[j + 1].i });
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
        logs.push({
          type: "codeHighlight", lines: [8], vars: { arr: arr, n: n, i: i, j: j, swapped: swapped },
          desc: "Swapped occurred, setting swapped to true."
        });
      }
    }
    logs.push({
      type: "codeHighlight", lines: [9, 10], vars: { arr: arr, n: n, i: i, swapped: swapped },
      desc: swapped ? "At least one swap occurred, continuing sorting." : "No swaps in this pass, checking for early termination."
    });
    if (!swapped) {
      logs.push({
        type: "codeHighlight", lines: [11, 12], vars: { arr: arr, n: n, i: i, swapped: swapped },
        desc: "No swaps detected, array is sorted. Breaking early."
      });
      break;
    }
  }
  logs.push({
    type: "codeHighlight", lines: [13], vars: { arr: arr, n: n, swapped: swapped },
    desc: "Sorting complete. Array is now sorted."
  });
  return logs;
}

