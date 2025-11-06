export function Main(input: string[]) {
  const [N, K, X] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);

  // N個の商品がある。値段はA[i]
  // K枚のクーポンがある。1枚でX引き。ただし、値段は0以下にはならない。
  // 全部の商品を買うときの最小金額を求める。

  // 残りのクーポン枚数
  let remainingCoupons = K;

  A.sort((a, b) => b - a);

  // 値段X以上の商品にクーポンを使えるだけ使う
  const discountedPrices = A.map((price) => {
    if (price >= X) {
      const numCouponsToUse = Math.min(Math.floor(price / X), remainingCoupons);
      remainingCoupons -= numCouponsToUse;
      return price - numCouponsToUse * X;
    } else {
      return price;
    }
  })

  // クーポンを適用した値段の降順にソート
  discountedPrices.sort((a, b) => b - a);

  // 値段の高い順にクーポンを使い切るまで適用
  for (let i = 0; i < discountedPrices.length; i++) {
    if (remainingCoupons <= 0) break;

    const price = discountedPrices[i];
    // この時点ではprice < Xなので1枚ずつしか使えない
    discountedPrices[i] = 0;
    remainingCoupons--;
  }
  const totalPrice = discountedPrices.reduce((sum, price) => sum + price, 0);
  return totalPrice.toString();
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
