export function Main(input: string[]) {
  const T = Number(input[0]);
  const rows = input.slice(1);

  const results: number[] = []
  for (let t = 0; t < T; t++) {
    const N = Number(rows[t * 2]);
    const A = rows[t * 2 + 1].split(" ").map(Number);
    let oddCount = 0;
    for (let i = 0; i < N; i++) {
      if (A[i] % 2 === 1) {
        oddCount++;
      }
    }
    results.push(oddCount);
  }

  return results.join("\n");
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
