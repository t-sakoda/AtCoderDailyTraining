export function Main(input: string[]) {
  // 正の整数N 1 <= N M= 10 ** 11
  const N = Number(input[0])

  // A <= B <= C かつ ABC <= Nであるような整数の組(A, B, C)の個数を求める

  // 例えば N = 4
  // (1, 1, C): C = 1, 2, 3, 4 (4個)
  // (1, 2, C): C = 2 （1個)
  // (1, 3, C): 最小でも 1 * 3 * 3 = 9 > 4 なので終了
  // A = 2: 最小でも 2 * 2 * 2 = 8 > 4 なので終了

  let count = 0n;
  for (let A = 1; A * A * A <= N; A++) {
    for (let B = A; A * B * B <= N; B++) {
      const maxC = Math.floor(N / (A * B));
      if (maxC < B) break;
      count += BigInt(maxC - B + 1);
    }
  }

  return count.toString();
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
