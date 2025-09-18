export function Main(input: string[]) {
  // N: コンテストの参加人数
  const N = Number(input[0])
  // Pi: 人 i の点数 (1≤i≤N)
  const P = input[1].split(" ").map(Number)

  /*
  このコンテストでは、以下の手順によってN 人それぞれの 順位 が定まります。

  1. 変数r を用意し、r = 1 と初期化する。最初、N 人の順位はすべて未確定である。
  2. N 人全員の順位が確定するまで以下の操作を繰り返す。
    - 順位が未確定である人の中での得点の最大値を x とし、得点が x である人の数を k とおく。得点が x である k 人すべての順位を r 位と確定させたのち、r に k を足す。

    N 人それぞれの順位を出力してください。
  */

  // N 行出力せよ。 i(1≤i≤N) 行目には、人 i の順位を整数として出力せよ。

  const result: number[] = Array(N).fill(0);

  // 得点ごとの人
  const scoreMap = new Map<number, number[]>();
  for (let i = 0; i < N; i++) {
    const score = P[i];
    if (scoreMap.has(score)) {
      scoreMap.get(score)?.push(i);
    } else {
      scoreMap.set(score, [i]);
    }
  }
  // 得点の高い順にソート
  const sortedScores = Array.from(scoreMap.keys()).sort((a, b) => b - a);

  let rank = 1;
  for (const score of sortedScores) {
    const people = scoreMap.get(score) || [];
    for (const person of people) {
      result[person] = rank;
    }
    rank += people.length;
  }

  return result.join("\n");
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
