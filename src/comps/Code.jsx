
const codes = [
  "FUNCTION bubbleSort(arr):",
  "  n ← length of arr",
  "  FOR i FROM 0 TO n - 1:",
  "    swapped ← false",
  "    FOR j FROM 0 TO n - i - 1:",
  "      IF arr[j].v > arr[j + 1].v:",
  "        SWAP arr[j] WITH arr[j + 1]",
  "        swapped ← true",
  "    END FOR",
  "    IF swapped = false:",
  "      BREAK",
  "  END FOR",
  "END FUNCTION"
]

const Code = () => {
  return <div className="code">
    <div className="wrap">

    {codes.map((v,i)=>{
      return <pre id={`c${i}`} key={i}>{i+1} {v}</pre>
    })}
  </div>
    </div>
}

export default Code;
