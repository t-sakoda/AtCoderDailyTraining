const transform = (grid: string[], H: number, W: number): string[] => {
  // H行W列のデータをW行H列に変換
  const transformed: string[] = Array.from({ length: W }, () => "");
  for (let h = 0; h < H; h++) {
    for (let w = 0; w < W; w++) {
      transformed[w] += grid[h][w];
    }
  }
  return transformed;
}

export function Main(input: string[]) {
  const [H, W] = input[0].split(" ").map((v) => Number(v));
  const S = input.slice(1, H + 1);
  const T = input.slice(H + 1, 2 * H + 1);

  // #と.からなるH行W列の図形SとT
  // Sの列を並べ替えてTと等しくできるか

  // 行のデータを列に変換
  // 列データをソートして比較

  const sColumns = transform(S, H, W).sort();
  const tColumns = transform(T, H, W).sort();

  for (let i = 0; i < W; i++) {
    if (sColumns[i] !== tColumns[i]) {
      return "No";
    }
  }
  return "Yes";
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
