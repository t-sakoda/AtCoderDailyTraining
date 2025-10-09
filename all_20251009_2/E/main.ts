export function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map((v) => parseInt(v));
  const A = input[1].split(" ").map((v) => parseInt(v));
  const B = input[2].split(" ").map((v) => parseInt(v));

  // リンゴ市場にN人の売り手とM人の買い手
  // i番目の売り手は、A[i]円以上でリンゴを売ってもよい
  // i番目の買い手は、B[i]円以下でリンゴを買ってもよい

  // リンゴをX円で売ってもよい考える売り手の人数が、りんごをＸ円で買ってもよいと考える買い手の人数以上である、Xの最小値を求める

  // 二分探索
  let left = 0;
  let right = 10 ** 9 + 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // X円で売ってもよいと考える売り手の人数
    const sellCount = A.filter((v) => v <= mid).length;
    // X円で買ってもよいと考える買い手の人数
    const buyCount = B.filter((v) => v >= mid).length;
    if (sellCount >= buyCount) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left.toString();
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
