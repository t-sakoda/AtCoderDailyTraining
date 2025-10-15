export function Main(input: string[]) {
  const [R, C] = input[0].split(" ").map(Number);

  // 縦15行, 横15列
  // (7, 7) がwhite
  // その周りがblack
  // さらにその周りがwhite
  // さらにその周りがblack
  // ・・・
  // R行C列のマス目の色を求める

  // 盤面を再現する
  const board: string[][] = Array.from({ length: 15 }, () => new Array(15).fill(""));

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      const layer = Math.max(Math.abs(i - 7), Math.abs(j - 7));
      board[i][j] = layer % 2 === 0 ? "□" : "■";
    }
  }
  return board[R - 1][C - 1] === "■" ? "black" : "white";
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
