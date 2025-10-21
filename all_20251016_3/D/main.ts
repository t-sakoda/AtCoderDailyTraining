export function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map(Number);
  const A = input.slice(1, 1 + M).map((line) => line.split(" ").map(Number));

  // N人 (2 <= N <= 50)
  // M回写真を取る (1 <= M <= 50)
  // i番目の撮影で左から並んだ人の番号は A[i][j]
  // M回の撮影で一度も連続して並ばなかった場合不仲である可能性
  // 不仲である二人組の個数を求める

  // 全てのペア - 仲良しペア = 不仲ペア

  // 全てのペア
  const totalPairs = BigInt(N * (N - 1) / 2);
  const friendlySet = new Set<string>();

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N - 1; j++) {
      const a = A[i][j];
      const b = A[i][j + 1];
      const key = a < b ? `${a},${b}` : `${b},${a}`;
      friendlySet.add(key);
    }
  }

  const friendlyPairs = BigInt(friendlySet.size);
  const unfriendlyPairs = totalPairs - friendlyPairs;

  return unfriendlyPairs.toString();
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
