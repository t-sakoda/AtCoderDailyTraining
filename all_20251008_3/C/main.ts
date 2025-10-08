export function Main(input: string[]) {
  const [N, M, T] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);
  const rows = input.slice(2, 2 + M).map((line) => line.split(" ").map(Number));

  console.log(N, M, T)
  console.log(A)
  console.log(rows)

  // 持ち時間T
  // N個の部屋
  // M個のボーナス
  // 部屋iで持ち時間をA[i]消費するとi+1の部屋に移動できる
  // i=X[i]はボーナス部屋。持ち時間がY[i]増える
  // 部屋Nにたどり着けるか？

  const bonusMap = new Map<number, number>()
  for (let i = 0; i < M; i++) {
    const [X, Y] = rows[i]
    bonusMap.set(X - 1, Y) // 0-indexedに変換
  }

  let remain = T
  for (let i = 0; i < N - 1; i++) {
    console.log(`部屋${i + 1}の残り時間: ${remain}`);
    const Y = bonusMap.get(i) ?? 0
    console.log(`部屋${i + 1}のボーナス: ${Y}`);
    remain += Y
    remain -= A[i]
    if (remain <= 0) {
      return "No"
    }
  }

  return "Yes"
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
