export function Main(input: string[]) {
  const [N, K] = input[0].split(" ").map(Number);
  const S = input.slice(1, N + 1);

  return S.filter((_, i) => i < K).sort().join("\n");
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
