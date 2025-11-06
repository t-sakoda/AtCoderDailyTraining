export function Main(input: string[]) {
  // 2 <= X <= 3 * 10 ** 18
  const X = BigInt(input[0]);

  // N! = X となるNを求める
  const arr = [1n];
  let n = 1;
  while (true) {
    if (n > 3n * 10n ** 18n) {
      throw new Error("Not found");
    }
    arr[n] = arr[n - 1] * BigInt(n);
    if (arr[n] === X) {
      return n.toString();
    }
    n++;
  }
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
