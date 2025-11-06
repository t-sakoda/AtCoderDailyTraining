export function Main(input: string[]) {
  const [N, L, R] = input[0].split(" ").map((v) => Number(v));
  const A = input[1].split(" ").map((v) => Number(v));

  // L <= X[i] <= R
  // 絶対値 X[i] - A[i] が最小となるような X[i] を求める

  const X: number[] = [];
  for (let i = 0; i < N; i++) {
    let candidate = L;

    // L から Rまでの値のうち、A[i] との距離が最小となるものを探す
    // A[i] <= L なら L
    // R <= A[i] なら R
    // L < A[i] < R なら A[i]

    if (A[i] <= L) {
      candidate = L;
    } else if (R <= A[i]) {
      candidate = R;
    } else {
      candidate = A[i];
    }

    X.push(candidate);
  }

  return X.join(" ");
}

//*この行以降は提出するときに有効にする。
/*
const readInput = async (): Promise<string[]> => {
  const input = await Deno.readTextFile("/dev/stdin");
  return input.split("\n")
};
const input = await readInput();
console.log(Main(input));
*/
