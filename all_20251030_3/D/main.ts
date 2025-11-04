export function Main(input: string[]) {
  const [H, W] = input[0].split(" ").map(Number);
  const grid = input.slice(1, H + 1).map((line) => line.split(""));

  // snukeを探す
  // 3文字目uを最初に見つけて、その周囲を調べる
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (grid[i][j] !== "u") {
        continue;
      }
      // →: 水平方向
      if (2 <= j && j < W - 2) {
        if (
          grid[i][j - 2] === "s" &&
          grid[i][j - 1] === "n" &&
          grid[i][j] === "u" &&
          grid[i][j + 1] === "k" &&
          grid[i][j + 2] === "e"
        ) {
          const result = [
            [i + 1, j - 2 + 1],
            [i + 1, j - 1 + 1],
            [i + 1, j + 1],
            [i + 1, j + 1 + 1],
            [i + 1, j + 2 + 1],
          ].map((v) => v.join(" ")).join("\n");
          return result;
        }
      }
      // ↘: 左上から斜め下方向
      if (2 <= i && i < H - 2 && 2 <= j && j < W - 2) {
        if (
          i - 2 >= 0 &&
          j - 2 >= 0 &&
          grid[i - 2][j - 2] === "s" &&
          grid[i - 1][j - 1] === "n" &&
          grid[i][j] === "u" &&
          grid[i + 1][j + 1] === "k" &&
          grid[i + 2][j + 2] === "e"
        ) {
          const result = [
            [i - 2 + 1, j - 2 + 1],
            [i - 1 + 1, j - 1 + 1],
            [i + 1, j + 1],
            [i + 1 + 1, j + 1 + 1],
            [i + 2 + 1, j + 2 + 1],
          ].map((v) => v.join(" ")).join("\n");
          return result;
        }
      }

      // ↓: 上から下
      if (2 <= i && i < H - 2) {
        if (
          grid[i - 2][j] === "s" &&
          grid[i - 1][j] === "n" &&
          grid[i][j] === "u" &&
          grid[i + 1][j] === "k" &&
          grid[i + 2][j] === "e"
        ) {
          const result = [
            [i - 2 + 1, j + 1],
            [i - 1 + 1, j + 1],
            [i + 1, j + 1],
            [i + 1 + 1, j + 1],
            [i + 2 + 1, j + 1],
          ].map((v) => v.join(" ")).join("\n");
          return result;
        }
      }

      // ↙: 右上から斜め下方向
      if (2 <= i && i < H - 2 && 2 <= j && j < W - 2) {
        if (
          grid[i - 2][j + 2] === "s" &&
          grid[i - 1][j + 1] === "n" &&
          grid[i][j] === "u" &&
          grid[i + 1][j - 1] === "k" &&
          grid[i + 2][j - 2] === "e"
        ) {
          const result = [
            [i - 2 + 1, j + 2 + 1],
            [i - 1 + 1, j + 1 + 1],
            [i + 1, j + 1],
            [i + 1 + 1, j - 1 + 1],
            [i + 2 + 1, j - 2 + 1],
          ].map((v) => v.join(" ")).join("\n");
          return result;
        }
      }

      // ←: 水平方向、逆順
      if (2 <= j && j < W - 2) {
        if (
          j - 2 >= 0 &&
          j + 2 < W &&
          grid[i][j + 2] === "s" &&
          grid[i][j + 1] === "n" &&
          grid[i][j] === "u" &&
          grid[i][j - 1] === "k" &&
          grid[i][j - 2] === "e"
        ) {
          const result = [
            [i + 1, j + 2 + 1],
            [i + 1, j + 1 + 1],
            [i + 1, j + 1],
            [i + 1, j - 1 + 1],
            [i + 1, j - 2 + 1],
          ].map((v) => v.join(" ")).join("\n");
          return result;
        }
      }
      // ↖: 右下から斜め上方向
      if (0 <= i - 2 && i + 2 < H && 0 <= j - 2 && j + 2 < W) {
        if (
          i + 2 < H &&
          j + 2 < W &&
          i - 2 >= 0 &&
          j - 2 >= 0 &&
          grid[i + 2][j + 2] === "s" &&
          grid[i + 1][j + 1] === "n" &&
          grid[i][j] === "u" &&
          grid[i - 1][j - 1] === "k" &&
          grid[i - 2][j - 2] === "e"
        ) {
          const result = [
            [i + 2 + 1, j + 2 + 1],
            [i + 1 + 1, j + 1 + 1],
            [i + 1, j + 1],
            [i - 1 + 1, j - 1 + 1],
            [i - 2 + 1, j - 2 + 1],
          ].map((v) => v.join(" ")).join("\n");
          return result;
        }
      }

      // ↑: 下から上
      if (2 <= i && i < H - 2) {
        if (
          i + 2 < H &&
          grid[i + 2][j] === "s" &&
          grid[i + 1][j] === "n" &&
          grid[i][j] === "u" &&
          grid[i - 1][j] === "k" &&
          grid[i - 2][j] === "e"
        ) {
          const result = [
            [i + 2 + 1, j + 1],
            [i + 1 + 1, j + 1],
            [i + 1, j + 1],
            [i - 1 + 1, j + 1],
            [i - 2 + 1, j + 1],
          ].map((v) => v.join(" ")).join("\n");
          return result;
        }
      }

      // ↗: 左下から斜め上方向
      if (2 <= i && i < H - 2 && 2 <= j && j < W - 2) {
        if (
          i + 2 < H &&
          j - 2 >= 0 &&
          i - 2 >= 0 &&
          j + 2 < W &&
          grid[i + 2][j - 2] === "s" &&
          grid[i + 1][j - 1] === "n" &&
          grid[i][j] === "u" &&
          grid[i - 1][j + 1] === "k" &&
          grid[i - 2][j + 2] === "e"
        ) {
          const result = [
            [i + 2 + 1, j - 2 + 1],
            [i + 1 + 1, j - 1 + 1],
            [i + 1, j + 1],
            [i - 1 + 1, j + 1 + 1],
            [i - 2 + 1, j + 2 + 1],
          ].map((v) => v.join(" ")).join("\n");
          return result;
        }
      }
    }
  }
  return "";
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
