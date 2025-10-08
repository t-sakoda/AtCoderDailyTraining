export function Main(input: string[]) {
  const [nStr, tStr] = input[0].split(" ")
  const N = Number(nStr);
  const T = BigInt(tStr);
  const A = input[1].split(" ").map(BigInt);

  // N曲からなるプレイリスト
  // 曲iの長さはA[i]秒
  // プレイリストを再生してからT秒後に流れているのはどの曲か。その曲が流れてから何秒の時点か

  // N <= 10 ** 5
  // T <= 10 ** 18
  // A[i] <= 10 ** 9

  // 累積秒数を保持しておく
  const cumulative = new Array(N + 1).fill(0n);
  for (let i = 0; i < N; i++) {
    cumulative[i + 1] = cumulative[i] + A[i];
  }

  const t = T % cumulative[N];
  if (t === 0n) {
    // ちょうどループ境界: 最初の曲が0秒から再生中
    return `1 0`;
  }

  // cumulative[i] <= t < cumulative[i + 1] となる最小のiを二分探索で求める
  let left = 0, right = N;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (cumulative[mid] <= t) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  const i = left - 1;

  // iが見つかったら、tが流れている曲の情報を出力する
  const seconds = t - cumulative[i];
  return `${i + 1} ${seconds}`;
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
