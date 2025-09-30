export function Main(input: string[]) {
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);

  // N + 1 個の連続する整数のうち,N個が与えられるので,欠けている整数を見つける

  // 数列の和 - 与えられた数列の和 = 答え
  // 与えられた数列の最小値
  const min = Math.min(...A);
  const max = min + N;
  const expectedSum = ((min + max) * (N + 1)) / 2;
  const actualSum = A.reduce((a, b) => a + b, 0);
  const missingNumber = expectedSum - actualSum;

  return missingNumber.toString();
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
