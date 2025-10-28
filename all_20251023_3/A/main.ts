export function Main(input: string[]) {
  const [A, B, C, D, E] = input[0].split(" ").map(Number);

  const set = new Set<number>();
  set.add(A)
  set.add(B)
  set.add(C)
  set.add(D)
  set.add(E)

  return set.size.toString();
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
