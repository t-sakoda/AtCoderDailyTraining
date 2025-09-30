export function Main(input: string[]) {
  const N = Number(input[0]);
  // rows: [A, B][]
  const rows = input.slice(1, 1 + N).map((line) => line.split(" ").map(Number));

  // コイントス
  // 人[i] は A[i]回表、B[i]回裏を出した。
  // 人[i]のコイントスの成功率は A[i] / (A[i] + B[i]) である。
  // 成功率の高い順に人1〜Nを並べたときの人番号の順番を出力
  // 成功率が同じ場合は人の番号が小さい順に並べる

  return rows
    .map(([A, B], i) => ({ A: BigInt(A), B: BigInt(B), index: i + 1 }))
    .sort((a, b) => {
      const left = a.A * (b.A + b.B);
      const right = b.A * (a.A + a.B);
      if (left === right) {
        return a.index - b.index;
      }
      return right > left ? 1 : -1;
    })
    .map((r) => r.index)
    .join(" ");
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
