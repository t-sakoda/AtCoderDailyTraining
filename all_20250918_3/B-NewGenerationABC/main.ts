export function Main(input: string[]) {
  // N: 文字列の長さ
  const N = Number(input[0])

  /**
   * 1 回目から 125 回目までは 4 問
   * 126 回目から 211 回目までは 6 問
   * 212 回目から 214 回目までは 8 問
   * N 回目の AtCoder Beginner Contest において出題された問題数を求めてください。
   */

  if (N <= 125) {
    return "4"
  } else if (N <= 211) {
    return "6"
  } else {
    return "8"
  }
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
