export function Main(input: string[]) {
  const [N, P] = input[0].split(" ").map(Number);
  const a = input[1].split(" ").map(Number);

  let count = 0;
  for (let i = 0; i < N; i++) {
    if (a[i] < P) {
      count++;
    }
  }
  return String(count);
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
