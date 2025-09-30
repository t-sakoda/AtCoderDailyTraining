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

  // 食べられない料理とその食材の組み合わせを保存しておく
  const dislikedDishes = new Map<number, Set<number>>();
  for (let i = 0; i < M; i++) {
    const [K, ...A] = rows[i];
    dislikedDishes.set(i, new Set(A));
  }

  let count = 0;
  for (let i = 0; i < N; i++) {
    const ingredient = B[i];
    // 克服した食材が使われている料理を探す
    for (const [dishIndex, ingredients] of dislikedDishes) {
      if (ingredients.has(ingredient)) {
        // その料理から、克服した食材を取り除く
        ingredients.delete(ingredient);
        // その料理に使われている食材がなくなったら、すなわち食べられる料理とみなせる
        if (ingredients.size === 0) {
          // その料理を食べられる料理の数に加える
          count++;
          dislikedDishes.delete(dishIndex);
        }
      }
    }
    results.push(count);
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
