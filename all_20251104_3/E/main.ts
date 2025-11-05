export function Main(input: string[]) {
  const N = Number(input[0]);

  const S: number[][] = [[1]];
  // S[n]: S[n-1] + n + S[n-1]

  for (let i = 1; i < N; i++) {
    S[i] = [...S[i - 1], i + 1, ...S[i - 1]];
  }

  return S[N - 1].join(" ");
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
