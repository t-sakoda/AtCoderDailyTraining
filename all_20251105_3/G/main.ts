export function Main(input: string[]) {
  const N = Number(input[0]);
  const presents = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
  const Q = Number(input[N + 1]);
  const X = input.slice(N + 2, N + 2 + Q).map(Number);

  // N個のプレゼントをもらう
  // テンションがP[i]以上のとき、テンションがA[i]あがる
  // テンションがP[i]未満のとき、テンションがB[i]さがる
  // はじめのテンションがX[j]のときの最終的なテンションを求める

  const results: number[] = [];
  for (let q = 0; q < Q; q++) {
    let tension = X[q];
    for (let i = 0; i < N; i++) {
      const [P, A, B] = presents[i];
      if (tension <= P) {
        tension += A;
      } else {
        if (tension < B) {
          tension = 0;
        } else {
          tension -= B;
        }
      }
    }
    results.push(tension);
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
