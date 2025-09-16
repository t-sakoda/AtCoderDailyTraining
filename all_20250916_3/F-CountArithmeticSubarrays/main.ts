export function Main(input: string[]) {
  // N: Aの長さ
  const N = Number(input[0]);
  // A: 正整数列
  const A = input[1].split(" ").map(Number);

  // 等差数列の個数を求める
  let result = 0;
  let runLength = 0; // 直近で等差になっている部分列の長さ

  for (let i = 0; i < N; i++) {
    if (i < 2 || A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      runLength++;
    } else {
      runLength = 2;
    }
    result += runLength;
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
