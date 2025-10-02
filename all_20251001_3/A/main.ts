export function Main(input: string[]) {
  const [a, b, c] = input[0].split(" ").map(Number);

  // bが与えられた整数の中央値ならYes、そうでなければNoを出力してください。
  const median = [a, b, c].sort((x, y) => x - y)[1];
  return median === b ? "Yes" : "No";
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
