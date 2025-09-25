export function Main(input: string[]) {
  const [R, G, B] = input[0].split(" ").map(Number);
  const C = input[1];

  // Cと一致する色のペンは買わない。
  // ペンを買うために必要な金額の最小値を求める。

  if (C === "Red") {
    return Math.min(G, B).toString()
  }
  if (C === "Green") {
    return Math.min(R, B).toString()
  }
  return Math.min(R, G).toString()
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
