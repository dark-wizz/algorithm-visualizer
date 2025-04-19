export default function insertionSort(arr) {
    let logs = []
    let n = arr.length

    for (let i = 1; i < n; i++) {
        let j = i;
        while (j > 0 && arr[j].v < arr[j - 1].v) {
            logs.push({ type: "swapBars", i: j-1, i_id: arr[j-1].i, j: j, j_id: arr[j].i });
            let temp = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temp
            j--
        }
    }
    return logs
}
