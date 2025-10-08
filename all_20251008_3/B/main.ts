export function Main(input: string[]) {
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);
  let sum = 0;

  // A の奇数番目の要素の総和
  for (let i = 0; i < N; i += 2) {
    sum += A[i];
  }
  return sum.toString()
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
