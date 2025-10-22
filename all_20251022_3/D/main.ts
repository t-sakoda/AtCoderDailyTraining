export function Main(input: string[]) {
  // N匹の蛇
  const [N, D] = input[0].split(" ").map(Number);
  const snakes = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
  // 蛇の重さ = 太さT 　＊ 長さL
  // 1 <= k <= Dの各整数について、全ての蛇の長さがk延びたときの最も重い蛇の重さを求める

  const results: number[] = [];
  for (let k = 1; k <= D; k++) {
    let maxWeight = 0;
    for (let i = 0; i < N; i++) {
      const [T, L] = snakes[i];
      const weight = T * (L + k);
      maxWeight = Math.max(maxWeight, weight);
    }
    results.push(maxWeight);
  }

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
