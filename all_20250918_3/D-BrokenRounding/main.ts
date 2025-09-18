export function Main(input: string[]) {
  // N: 文字列の長さ
  const [X, K] = input[0].split(" ").map(Number)

  // Xの10^iの位以下を四捨五入する
  // 厳密には X を |Y - X| が最小となる10^iの倍数のうち最大のものであるYに置き換える
  // 273 1 -> 300
  // 999 2 -> 1000
  // 100 9 -> 0
  // 1015 0 -> 1020

  let y = X
  for (let i = 0; i < K; i++) {
    // 10^iの位
    const d = 10 ** i
    // 10^iの位以下の数値
    const r = y % (d * 10)
    // 四捨五入
    y -= r
    if (r >= 5 * d) {
      y += d * 10
    }
  }

  return String(y)
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
