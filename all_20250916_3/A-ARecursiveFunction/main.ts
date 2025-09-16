const f = (n: number): number => {
  if (n === 0) return 1;
  return n * f(n - 1);
}

export function Main(input: string[]) {
  const [N] = input[0].split(" ").map(Number);
  const result = f(N);
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
