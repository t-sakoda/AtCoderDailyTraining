export function Main(input: string[]) {
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);

  let count = 0;
  for (let i = 0; i < N; i++) {
    count += A[i];
    if (count < 0) {
      count = 0;
    }
  }

  return count.toString();
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
