export function Main(input: string[]) {
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);

  // 「(A[i] + A[j]) を 10 ** 8 で割ったあまり」 の総和を求める
  // 二重ループでやると O(N^2) で間に合わない。

  const MOD = 10 ** 8;

  // i < j のペアのみを考慮
  // 累積和を使ってO(N)で計算
  const S: bigint[] = new Array(N + 1).fill(0n);
  for (let i = 0; i < N; i++) {
    S[i + 1] = S[i] + BigInt(A[i]);
  }

  let totalSum = 0n;
  for (let i = 0; i < N - 1; i++) {
    // A[i]は(N-i-1)回現れる
    totalSum += BigInt(A[i]) * BigInt(N - i - 1);
    // A[j] (j > i)の合計はS[N] - S[i+1]
    totalSum += S[N] - S[i + 1];
  }

  // A[i] + A[j] >= MOD となるペア数を数える
  let overCount = 0n;
  const sortedA = [...A].sort((a, b) => a - b);

  for (let i = 0; i < N - 1; i++) {
    const target = MOD - sortedA[i];
    // sortedA[j] >= target となる最小のjを二分探索
    let left = i + 1, right = N;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedA[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    overCount += BigInt(N - left);
  }

  const answer = totalSum - overCount * BigInt(MOD);
  return answer.toString();

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
