export function Main(input: string[]) {
  // N拠点
  const N = Number(input[0]);
  // 拠点i は W[i] 人, 世界標準時で0時の時、 X[i] 時
  const rows = input.slice(1, N + 1).map((v) => v.split(" ").map(Number));

  // 全社で1時間の会議を開きたい
  // 9:00〜18:00の時間帯に含まれる場合にのみ会議に出席できる
  // なるべく多くの社員が会議に出席できるようにしたい
  // 会議に出席できる社員の数の最大値を求めよ

  // 各時間帯で出席可能な人数を求める
  const attend = new Array(24).fill(0);
  for (let t = 0; t < 24; t++) {
    for (let i = 0; i < N; i++) {
      const [W, X] = rows[i];
      // t 時に会議を開くと、X[i] + t 時に出席することになる
      const localTime = (X + t) % 24;
      if (9 <= localTime && localTime <= 17) {
        attend[t] += W;
      }
    }
  }

  // 出席可能な社員の数の最大値を求める
  const maxAttend = Math.max(...attend);
  return maxAttend.toString();
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
