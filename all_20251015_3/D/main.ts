const ctz = (x: number): number => {
  let count = 0;
  while ((x & 1) === 0) {
    count++;
    x >>= 1;
  }
  return count;
}

export function Main(input: string[]) {
  const N = Number(input[0]);

  // 正の整数Xに対して、二進表記表記したときに末尾に連続する0の個数ををctz(X)で表す
  // Xを二進表記したとき末尾が1なら ctz(X) = 0
  // ctz(N)を出力する

  return ctz(N).toString();
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
