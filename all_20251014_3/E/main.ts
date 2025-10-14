export function Main(input: string[]) {
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);
  const W = input[2].split(" ").map(Number);

  // N個の荷物と箱がある
  // 荷物iは箱A[i]の中にあり、重さはW[i]
  // 全ての箱に荷物が1つずつ入っている状態にするためにかかるコストの最小値を求める

  // 複数の荷物が入っている箱のうち、最も重い荷物を残す
  // それ以外の荷物は全て取り出して、空いている箱に入れる

  const boxMap = new Map<number, number[]>();
  for (let i = 0; i < N; i++) {
    const boxNum = A[i];
    if (!boxMap.has(boxNum)) {
      boxMap.set(boxNum, []);
    }
    boxMap.get(boxNum)!.push(W[i]);
  }

  let totalCost = 0;
  for (const [boxNum, weights] of boxMap.entries()) {
    if (weights.length > 1) {
      weights.sort((a, b) => b - a);
      // 最も重い荷物を残す
      const heaviest = weights[0];
      // それ以外の荷物を取り出す
      const cost = weights.slice(1).reduce((a, b) => a + b, 0);
      totalCost += cost;
    }
  }

  return totalCost.toString();
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
