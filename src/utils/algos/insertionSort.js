export default function insertionSort(arr) {
    let logs = [];
    let n = arr.length;

    logs.push({
        type: "codeHighlight", lines: [1], vars: { arr: arr },
        desc: "Starting Insertion Sort on the given array."
    });
    logs.push({
        type: "codeHighlight", lines: [2], vars: { arr: arr, n: n },
        desc: `Array size determined: ${n}`
    });

    for (let i = 1; i < n; i++) {
        let j = i;
        let ind = arr[i].i;
        logs.push({
            type: "codeHighlight", lines: [3, 4], vars: { arr: arr, n: n, i: i, j: j },
            desc: `Starting pass ${i}, picking element at index ${i} (${arr[i].v}).`
        });
        logs.push({
            type: "pick", i: ind
        });

        logs.push({
            type: "codeHighlight", lines: [5], vars: { arr: arr, n: n, i: i, j: j },
            desc: `Comparing ${arr[j].v} with ${arr[j - 1].v}.`
        });
        while (j > 0 && arr[j].v < arr[j - 1].v) {
            logs.push({
                type: "codeHighlight", lines: [6], vars: { arr: arr, n: n, i: i, j: j },
                desc: `Swapping ${arr[j].v} with ${arr[j - 1].v}.`
            });
            logs.push({ type: "swapBars", i: j - 1, i_id: arr[j - 1].i, j: j, j_id: arr[j].i });
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
            logs.push({
                type: "codeHighlight", lines: [7], vars: { arr: arr, n: n, i: i, j: j },
                desc: `Decrement j(${j}) by 1.`
            });
        }

        logs.push({
            type: "drop", i: ind
        });
        logs.push({
            type: "codeHighlight", lines: [8], vars: { arr: arr, n: n, i: i, j: j },
            desc: `Element at index ${i} placed in correct position.`
        });
    }

    logs.push({
        type: "codeHighlight", lines: [9, 10], vars: { arr: arr, n: n },
        desc: "Sorting complete. Array is now sorted."
    });

    return logs;
}
