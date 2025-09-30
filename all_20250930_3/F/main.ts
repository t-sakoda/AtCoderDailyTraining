export function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map(Number);

  // rows: K[i], A[i, 1], A[i, 2], ..., A[i, K[i]]
  const rows = input.slice(1, M + 1).map((line) => line.split(" ").map(Number));
  const B = input[1 + M].split(" ").map(Number);

  //レストランでは 1 から N までの番号がつけられている N 種類の食材を扱っています。
  // 1 から M までの番号がつけられている M 個の料理を提供しています。
  //料理 i にはK[i] 種類の食材が使われており、食材 A[i, 1], A[i, 2], …, A[i, K[i]] が使われています。

  // すぬけくんは現在 N 種類の食材がすべて苦手です。
  // また、すぬけ君は苦手な食材が 1 種類でも使われている料理を食べることができず、苦手な食材が 1 種類も使われていない料理を食べることができます。
  // すぬけ君はこれから N 日間かけて苦手な食材を克服しようとしています。
  // すぬけ君は i 日目に食材 B[i] を克服し、それ以降苦手な食材でなくなります。

  // i=1,2,…,N について以下の値を求めてください。
  // i 日目にすぬけ君が食材B[i]を克服した直後、すぬけ君が食べることができるAtCoderレストランの料理の個数

  // N 行出力せよ。k 行目には、i = k のときの値を出力せよ。

  const results: number[] = []

  // 食材 -> 料理のマッピング
  const ingredientToDishes = new Map<number, number[]>();
  // 料理ごとの食材数
  const dishToIngredientCount = new Array(M)

  rows.forEach((row, dishIndex) => {
    const [K, ...A] = row;
    A.forEach((ingredient) => {
      if (!ingredientToDishes.has(ingredient)) {
        ingredientToDishes.set(ingredient, []);
      }
      const dishes = ingredientToDishes.get(ingredient)!;
      dishes.push(dishIndex);
    });
    dishToIngredientCount[dishIndex] = K;
  });

  let count = 0
  for (let day = 0; day < N; day++) {
    const ingredient = B[day];
    const dishes = ingredientToDishes.get(ingredient) || [];
    dishes.forEach((dishIndex) => {
      dishToIngredientCount[dishIndex]--;
      if (dishToIngredientCount[dishIndex] === 0) {
        count++;
      }
    });
    results.push(count);;
  }
  return results.join("\n");
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
