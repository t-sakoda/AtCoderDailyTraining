export function Main(input: string[]) {
  const [N, K, T] = input[0].split(" ").map(Number);
  const P = input[1].split(" ").map(Number);

  // アトラクションにK回乗る
  // アトラクションの所要時間はT
  // 時刻0からNまでの降水量: 時刻iから時刻i+1までの降水量P[i]
  // アトラクションには時刻0, 1, ... N-Tに乗ることができる
  // 時刻tにアトラクションに乗ると時刻t+Tにアトラクションから降りる
  // アトラクションに乗っている間、P[t]+P[t+1]+...+P[t+T-1]、濡れる

  // できるだけ雨に濡れたくない
  // K回アトラクションに乗るときの、濡れる量の最小値を求める

  // 動的計画法
  // dp[i][j]: 時刻jまでにi回アトラクションに乗ったときの、濡れる量の最小値
  const dp: number[][] = Array.from({ length: K + 1 }, () =>
    Array(N + 1).fill(Infinity)
  );
  dp[0][0] = 0;

  // 累積和
  const S: number[] = Array(N + 1).fill(0);
  for (let i = 0; i < N; i++) {
    S[i + 1] = S[i] + P[i];
  }

  for (let i = 0; i <= K; i++) {
    for (let j = 0; j <= N; j++) {
      // アトラクションに乗らない場合
      if (j + 1 <= N) {
        dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i][j]);
      }
      // アトラクションに乗る場合
      if (i + 1 <= K && j + T <= N) {
        const rain = S[j + T] - S[j];
        dp[i + 1][j + T] = Math.min(dp[i + 1][j + T], dp[i][j] + rain);
      }
    }
  }
  return dp[K][N].toString();

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
