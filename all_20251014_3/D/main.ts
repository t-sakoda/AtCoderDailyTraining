export function Main(input: string[]) {
  const [H, W, X, Y] = input[0].split(" ").map((v) => parseInt(v));
  const grid = input.slice(1, H + 1).map((line) => line.split(""));
  const T = input[H + 1].split("");

  // #: 通行不可能
  // .: 通行可能で家が建っていない
  // @: 通行可能で家が建っている

  // (X, Y): 初期値
  // Tに従って移動する
  // T[i] が U かつ (x-1, y)が通行可能ならば(x-1, y)に移動する
  // T[i] が D かつ (x+1, y)が通行可能ならば(x+1, y)に移動する
  // T[i] が L かつ (x, y-1)が通行可能ならば(x, y-1)に移動する
  // T[i] が R かつ (x, y+1)が通行可能ならば(x, y+1)に移動する

  // 移動した後の座標と、通過または到達した家の数を出力する

  let x = X - 1;
  let y = Y - 1;
  const visited = Array.from({ length: H }, () => Array(W).fill(false));
  if (grid[x][y] === "@") {
    visited[x][y] = true;
  }
  for (let i = 0; i < T.length; i++) {
    const direction = T[i];
    let nx = x;
    let ny = y;
    if (direction === "U" && x > 0 && grid[x - 1][y] !== "#") {
      nx = x - 1;
    } else if (direction === "D" && x < H - 1 && grid[x + 1][y] !== "#") {
      nx = x + 1;
    } else if (direction === "L" && y > 0 && grid[x][y - 1] !== "#") {
      ny = y - 1;
    } else if (direction === "R" && y < W - 1 && grid[x][y + 1] !== "#") {
      ny = y + 1;
    }
    if (nx !== x || ny !== y) {
      x = nx;
      y = ny;
      if (grid[x][y] === "@") {
        visited[x][y] = true;
      }
    }
  }

  return `${x + 1} ${y + 1} ${visited.flat().filter(Boolean).length}`;
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
