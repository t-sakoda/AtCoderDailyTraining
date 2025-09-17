
export function Main(input: string[]) {
  const [X, Y] = input[0].split(" ").map(Number);

  // サイコロを2つ振ったとき、次の2つの条件の少なくとも一方を満たす確率を求めてください
  // 2つの出目の合計がX以上である
  // 2つの出目の差の絶対値がY以上である

  // 条件を満たす組み合わせの数
  const calc = (x: number, y: number) => {
    let count = 0;
    for (let i = 1; i <= 6; i++) {
      for (let j = 1; j <= 6; j++) {
        if ((i + j >= x) || (Math.abs(i - j) >= y)) {
          count++;
        }
      }
    }
    return count;
  }


  const p = calc(X, Y) / 36;
  return p.toString();
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
