
// gridの中に、大きさnのバツ印がいくつあるか数える
const countCrosses = (grid: string[][], H: number, W: number, n: number): number => {
  // 頂点の位置は n <= i < H - n, n <= j < W - n
  let count = 0;
  for (let i = n; i < H - n; i++) {
    for (let j = n; j < W - n; j++) {
      // 中心も '#' である必要がある
      if (grid[i][j] !== '#') continue;
      let isCross = true;
      for (let d = 1; d <= n; d++) {
        if (grid[i - d][j - d] !== '#' || grid[i - d][j + d] !== '#' ||
          grid[i + d][j - d] !== '#' || grid[i + d][j + d] !== '#') {
          isCross = false;
          break;
        }
      }
      if (isCross) {
        count++;
      }
    }
  }
  return count;
}

export function Main(input: string[]) {
  const [H, W] = input[0].split(" ").map(Number);
  // C[1][1]C[1][2]...C[1][W]
  // C[2][1]C[2][2]...C[2][W]
  // ...
  // C[H][1]C[H][2]...C[H][W]
  // のようなグリッドが与えられる。
  const grid = input.slice(1, H + 1).map((line) => line.split(""));

  const N = Math.min(H, W)

  const counts = new Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    const n = i + 1;
    counts[i] = countCrosses(grid, H, W, n);
  }

  // 大は小を兼ねるので、iのバツ印の数はi+1のバツ印の数を含んでしまっている。
  const result = counts.map((count, i) => count - (i + 1 < N ? counts[i + 1] : 0));
  return result.join(" ");
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
