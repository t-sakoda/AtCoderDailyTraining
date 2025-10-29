export function Main(input: string[]) {
  const [A, B] = input[0].split(" ").map(Number);

  const result = 32 ** (A - B);

  return result.toString();
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
