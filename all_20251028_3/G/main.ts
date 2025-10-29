export function Main(input: string[]) {
  // N匹のモンスター
  // 1 <= N <= 2 * 10^5
  const N = Number(input[0]);
  // i匹目のモンスターの強さはA[i]
  // 1 <= A[i] <= 10^9
  const A = input[1].split(" ").map(Number);

  // 倒すのが偶数回目のモンスターを倒すと2倍の経験値が得られる
  // 得られる経験値の最大値を求める
  // 単純にモンスターを倒すよりも、敢えて見送って、偶数回目に倒すほうが良い場合がある

  // 動的計画法で解く
  // EXP[i][0]: i匹目までのモンスターに出会ったとき、倒したモンスターの数が偶数の場合の最大経験値
  // EXP[i][1]: i匹目までのモンスターに出会ったとき、倒したモンスターの数が奇数の場合の最大経験値
  // EXP[i][0] = max(EXP[i-1][0] + 0, EXP[i-1][1] + 2 * A[i])
  // EXP[i][1] = max(EXP[i-1][0] + A[i], EXP[i-1][1] + 0)
  // 最終的に求めるのは max(EXP[N][0], EXP[N][1])

  const EXP: number[][] = [];
  EXP[0] = [0, Number.NEGATIVE_INFINITY];
  for (let i = 1; i <= N; i++) {
    const exp = [
      Math.max(EXP[i - 1][0] + 0, EXP[i - 1][1] + 2 * A[i - 1]),
      Math.max(EXP[i - 1][0] + A[i - 1], EXP[i - 1][1] + 0),
    ];
    EXP.push(exp)
  }

  return Math.max(EXP[N][0], EXP[N][1]).toString();
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
