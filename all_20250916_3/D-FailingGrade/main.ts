export function Main(input: string[]) {
  // N: 学生の数, P: 合格点
  const [N, P] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);

  // 点P未満の点数の学生の数を数える
  let result = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] < P) {
      result++;
    }
  }

  return result.toString();
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
