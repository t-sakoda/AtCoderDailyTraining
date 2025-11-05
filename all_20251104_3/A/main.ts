export function Main(input: string[]) {
  const N = Number(input[0]);

  const results: string[] = [];
  for (let i = 0; i < N; i++) {
    if ((i + 1) % 3 === 0) {
      results.push("x");
    } else {
      results.push("o");
    }
  }
  return results.join("");
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
