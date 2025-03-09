
const codes = [
  "procedure bubbleSort(A : list of sortable items)",
  "  n := length(A)",
  "  repeat",
  "      swapped := false",
  "      for i := 1 to n - 1 inclusive do",
  "          if A[i - 1] > A[i] then",
  "              swap(A[i - 1], A[i])",
  "              swapped := true",
  "          end if",
  "      end for",
  "      n := n - 1",
  "  until not swapped",
  "end procedure",
]

const Code = () => {
  return <div className="code">
    <div className="wrap">

    {codes.map((v,i)=>{
      return <pre key={i}>{v}</pre>
    })}
  </div>
    </div>
}

export default Code;
