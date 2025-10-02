export function Main(input: string[]) {
  const N = Number(input[0]);
  const rows = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));

  // A[i] + B[i] を計算して出力
  const results = rows.map(([A, B]) => A + B);
  return results.join("\n");
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
