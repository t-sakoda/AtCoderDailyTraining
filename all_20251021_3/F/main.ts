export function Main(input: string[]) {
  const T = Number(input[0]);
  const testCases = input.slice(1, T + 1).map((line) => line.split(" ").map(Number));
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
