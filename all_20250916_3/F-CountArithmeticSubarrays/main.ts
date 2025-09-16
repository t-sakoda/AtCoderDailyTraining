export function Main(input: string[]) {
  // N: Aの長さ
  const N = Number(input[0]);
  // A: 正整数列
  const A = input[1].split(" ").map(Number);

  // 等差数列の組み合わせの個数を求める
  let result = 0;

  // l, r: Aの部分列の両端のインデックス
  const check = (l: number, r: number): boolean => {
    // 長さが1なら等差数列
    if (r - l <= 1) return true;

    // d: 公差
    const d = A[l + 1] - A[l];
    for (let i = l + 1; i < r; i++) {
      if (A[i + 1] - A[i] !== d) return false;
    }
    return true;
  };

  for (let l = 0; l < N; l++) {
    for (let r = l; r < N; r++) {
      if (check(l, r)) result++;
    }
  }

  return result.toString();
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
