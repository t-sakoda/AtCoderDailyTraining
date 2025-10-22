export function Main(input: string[]) {
  const N = Number(input[0]);
  // 縦Nマス横Nマスのグリッドが2つ与えられる
  const A: string[] = input.slice(1, N + 1);
  const B: string[] = input.slice(N + 1, 2 * N + 1);
  // 2つのグリッドは1箇所だけ書かれている文字が異なる
  // その行番号、列番号を出力する

  for (let i = 0; i < N; i++) {
    if (A[i] !== B[i]) {
      for (let j = 0; j < N; j++) {
        if (A[i][j] !== B[i][j]) {
          return `${i + 1} ${j + 1}`;
        }
      }
    }
  }
  throw new Error("No difference found");
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
