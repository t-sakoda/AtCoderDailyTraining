export function Main(input: string[]) {
  // 行列A: 10 ** 100 行 7列
  // (i, j)成分は（i-1）*7+j

  // N行M列の行列B
  const [N, M] = input[0].split(" ").map((v) => parseInt(v));
  const B = input.slice(1, 1 + N).map((v) => v.split(" ").map((x) => parseInt(x)));

  // BがAの一部の矩形領域を切り出したものかどうかを出力する

  // Aは
  // 1 2 3 4 5 6 7
  // 8 9 10 11 12 13 14
  // 15 16 17 18 19 20 21
  // ...
  // のようになっている

  // Bの左上の要素から計算して一致していればYes, そうでなければNoを出力する



  for (let i = 0; i < N; i++) {

    // B[i][0]の行番号を求める
    const row = Math.floor((B[i][0] - 1) / 7) + 1;
    // B[i][0]の列番号を求める
    const col = (B[i][0] - 1) % 7;
    // 列番号がMを超える場合はNo
    if (col + M > 7) {
      return "No";
    }

    for (let j = 0; j < M; j++) {
      const expected = B[0][0] + i * 7 + j;
      if (B[i][j] !== expected) {
        return "No";
      }
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
