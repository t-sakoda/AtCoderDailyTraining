export function Main(input: string[]) {
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);

  // 降順にソートして2番目に大きい要素を見つける
  const sortedA = [...A].sort((a, b) => b - a);
  const secondLargest = sortedA[1];

  const idx = A.indexOf(secondLargest);
  return (idx + 1).toString();
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
