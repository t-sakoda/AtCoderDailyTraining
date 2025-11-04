export function Main(input: string[]) {
  const N = Number(input[0]);
  const S = input[1];
  const T = input[2];

  let count = 0;
  for (let i = 0; i < N; i++) {
    if (S[i] !== T[i]) {
      count++;
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
