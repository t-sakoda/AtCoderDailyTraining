
export function Main(input: string[]) {
  // H行W列の格子状にHW枚のカードが並べられています。
  // i = 1, ... , Nについて、上からAi行目、左からBi列目にあるカードには数iが書かれています、それ以外のHW - NHW - N米のカードには何も書かれていません
  // これらのカードに対し、以下の2種類の操作を可能な限り繰り返します
  // - 数の書かれたカードを含まない行が存在するとき、その行のカードを全て取り除き、残りのカードを上へ詰める
  // - 数の書かれたカードを含まない列が存在するとき、その列のカードを全て取り除き、残りのカードを左へ詰める
  // 操作が終了したとき、数が書かれたカードがそれぞれどこにあるか求めてください。なお、答えは操作の仕方に依らず一意に定まることが証明されます。

  const [H, W, N] = input[0].split(" ").map(Number);
  const cards = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));

  const rowSet = new Set<number>();
  const colSet = new Set<number>();
  for (let i = 0; i < N; i++) {
    const [r, c] = cards[i];
    rowSet.add(r);
    colSet.add(c);
  }
  const rowList = Array.from(rowSet).sort((a, b) => a - b);
  const colList = Array.from(colSet).sort((a, b) => a - b);
  const rowMap = new Map<number, number>();
  const colMap = new Map<number, number>();
  rowList.forEach((r, i) => {
    rowMap.set(r, i + 1);
  });
  colList.forEach((c, i) => {
    colMap.set(c, i + 1);
  });
  const result: string[] = [];
  for (let i = 0; i < N; i++) {
    const [r, c] = cards[i];
    result.push(`${rowMap.get(r)} ${colMap.get(c)}`);
  }
  return result.join("\n");
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
