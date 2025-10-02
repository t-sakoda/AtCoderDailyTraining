export function Main(input: string[]) {
  // 長さN, 非負整数列 A
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);

  // 異なる2要素の和として表せる値のなかに偶数が存在するか判定し、存在する場合、その最大値を求める
  // 存在しない場合は -1 を出力する

  // 偶数 + 偶数 = 偶数
  // 奇数 + 奇数 = 偶数

  // 2個以上の偶数、または,2個以上の奇数が存在する場合は答えが存在する

  // 偶数と奇数を分ける
  // 偶数 + 偶数の最大値
  // 奇数 + 奇数の最大値
  // そのうち大きい方が答え

  const evens: number[] = [];
  const odds: number[] = [];

  for (let i = 0; i < N; i++) {
    if (A[i] % 2 === 0) {
      evens.push(A[i]);
    } else {
      odds.push(A[i]);
    }
  }

  if (evens.length < 2 && odds.length < 2) {
    return "-1";
  }

  // 偶数の最大値と2番目に大きい数
  evens.sort((a, b) => b - a);
  const evenMax = evens[0] ?? -1;
  const evenSecondMax = evens[1] ?? -1;

  // 奇数の最大値と2番目に大きい数
  odds.sort((a, b) => b - a);
  const oddMax = odds[0] ?? -1;
  const oddSecondMax = odds[1] ?? -1;

  const evenSum = evenMax + evenSecondMax;
  const oddSum = oddMax + oddSecondMax;

  return Math.max(evenSum, oddSum).toString();

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
