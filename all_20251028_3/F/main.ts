export function Main(input: string[]) {
  // 2 <= N <= 3 * 10^5
  const N = Number(input[0]);
  // 1 <= A[i] <= 10^4
  const A = input[1].split(" ").map(Number);

  //　長さNの整数列A
  // A[i]A[j]の総和を求める
  let result = 0n;

  // A[1]A[2] + A[1]A[3] + ...            + A[1]A[N]
  //          + A[2]A[3] + A[2]A[4] + ... + A[2]A[N]
  // + ...
  //                                      + A[N-1]A[N]

  // 累積和
  const prefixSum = new Array(N + 1).fill(0n);
  for (let i = 1; i <= N; i++) {
    prefixSum[i] = prefixSum[i - 1] + BigInt(A[i - 1]);
  }

  for (let i = 0; i < N - 1; i++) {
    // A[i] * (A[i+1] + A[i+2] + ... + A[N-1])
    const sumAfter = prefixSum[N] - prefixSum[i + 1];
    result += BigInt(A[i]) * BigInt(sumAfter);
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
