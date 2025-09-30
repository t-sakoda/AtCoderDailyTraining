export function Main(input: string[]) {
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);

  // A の中に同じ要素が 3 つ以上連続する箇所が存在するか判定してください。

  for (let i = 0; i < N - 2; i++) {
    if (A[i] === A[i + 1] && A[i] === A[i + 2]) {
      return "Yes";
    }
  }
  return "No";
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
