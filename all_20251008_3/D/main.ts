export function Main(input: string[]) {
  const N = Number(input[0]);
  const rows = input.slice(1, 1 + N).map((line) => line.split(" ").map(Number));

  // N個の数列
  // 何種類の数列があるか

  const uniqueSequences = new Set<string>();
  for (const row of rows) {
    uniqueSequences.add(row.join(","));
  }
  return uniqueSequences.size.toString();
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
