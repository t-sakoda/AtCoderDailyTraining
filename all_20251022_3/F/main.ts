export function Main(input: string[]) {
  const [a, b, c, d, e] = input[0].split(" ").map(Number);
  // 31人がコンテストに参加
  // AさんはA問題のみを解きa点獲得
  // BCEさんはB,C,E問題を解きb+c+e点獲得
  // 得点順、名前の辞書順で出力せよ

  // 参加者名簿
  const participants = []
  // 1 から 2^5 -1 までのビット全探索
  for (let i = 1; i < (1 << 5); i++) {
    let name = "";
    let score = 0;
    if (i & (1 << 0)) { name += "A"; score += a; }
    if (i & (1 << 1)) { name += "B"; score += b; }
    if (i & (1 << 2)) { name += "C"; score += c; }
    if (i & (1 << 3)) { name += "D"; score += d; }
    if (i & (1 << 4)) { name += "E"; score += e; }
    participants.push({ name, score });
  }

  participants.sort((p1, p2) => {
    if (p1.score !== p2.score) {
      return p2.score - p1.score; // 得点の降順
    } else {
      return p1.name < p2.name ? -1 : 1; // 名前の辞書順
    }
  });

  return participants.map(p => p.name).join("\n");
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
