export function Main(input: string[]) {
  const N = Number(input[0])
  const A = input[1].split(" ").map(Number);

  let P = 0;
  const batters = Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    // A[i] の分だけ、累を進める
    for (let j = 0; j <= i; j++) {
      batters[j] += A[i];
    }
  }

  P = batters.filter(x => x >= 4).length;

  return P.toString();
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
