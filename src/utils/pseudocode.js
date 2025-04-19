
export const bubbleCode = [
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

export const selectionCode = [
  "FUNCTION selectionSort(arr):",
  "  n ← length of arr",
  "  FOR i FROM 0 TO n - 1:",
  "    minIndex ← i",
  "    FOR j FROM i + 1 TO n - 1:",
  "      IF arr[j].v < arr[minIndex].v:",
  "        minIndex ← j",
  "    END FOR",
  "    IF minIndex ≠ i:",
  "      SWAP arr[i] WITH arr[minIndex]",
  "  END FOR",
  "END FUNCTION"
]


export const insertionCode = [
  "FUNCTION insertionSort(arr):",
  "  n ← length of arr",
  "  FOR i FROM 1 TO n - 1:",
  "    j ← i",
  "    WHILE j > 0 AND arr[j].v < arr[j - 1].v:",
  "      SWAP arr[j] WITH arr[j - 1]",
  "      j ← j - 1",
  "    END WHILE",
  "  END FOR",
  "END FUNCTION"
]
