export function Main(input: string[]) {
  const [K] = input[0].split(" ").map(Number);
  const [A, B] = input[1].split(" ");

  // K進数のAを10進数に変換
  const aInDecimal = parseInt(A, K);
  const bInDecimal = parseInt(B, K);
  // 10進数で積を計算
  const product = aInDecimal * bInDecimal;

  // 10進数の和をK進数に変換
  return product.toString();
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
