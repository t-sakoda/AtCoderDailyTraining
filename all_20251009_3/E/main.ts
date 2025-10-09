export function Main(input: string[]) {
  const [N, K] = input[0].split(" ").map((v) => parseInt(v));
  const A = input[1].split(" ").map((v) => parseInt(v)).sort((a, b) => a - b);

  // AのうちＫ個選んで消す。
  // 残った要素を順序を保って連結した数列をBとする
  // (Bの最大値) - (Bの最小値) としてあり得る最小値を求める

  let minDiff = A[N - 1] - A[0];
  for (let i = 0; i <= K; i++) {
    const currentDiff = A[i + (N-K) - 1] - A[i];
    minDiff = Math.min(minDiff, currentDiff);
  }

  return minDiff.toString();
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
