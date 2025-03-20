export default function bubbleSort(arr){
  const n = arr.length
  let logs = []
  let swapped;
  for (let i = 0; i < n - 1; i++){
    swapped = false;
    for (let j = 0; j < n - i - 1; j++){
      let log = {i: j, i_id:arr[j].i,j:j+1, j_id:arr[j+1].i,swap:false}
      if (arr[j].v > arr[j + 1].v){
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
        log.swap=true;
      }
      logs.push(log)
    }

    if (swapped == false)
      break;
  }
  return logs
}
