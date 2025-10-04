export function Main(input: string[]) {
  // N人, 髪の長さL[i], 1日で1ずつ伸びる
  const [N, T, P] = input[0].split(" ").map(Number);
  const L = input[1].split(" ").map(Number);
  // 髪の長さがT以上の人がP人以上になるのは何日後か
  // ただし、現在の時点でT以上のひとがP人以上いる場合は0を出力する

  // 現在の時点でT以上の人が何人いるか？
  // 足りない人数は何人か？ => x 人とする
  // T未満の人の中で、上位x番目の人の髪の長さ + l >= T となるようなlを求める

  const sortedL = L.sort((a, b) => b - a);

  // L[i] >= T でsortedLを分割
  const [overT, underT] = [sortedL.filter((v) => v >= T), sortedL.filter((v) => v < T)];

  if (overT.length >= P) {
    return "0";
  }

  const needPersonCount = P - overT.length;
  // 残り必要な人数 x 人 = underTのx番目の人の髪の長さ + l >= T となるようなlを求める
  const targetPersonHair = underT[needPersonCount - 1];
  const l = T - targetPersonHair;
  return String(l);
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
