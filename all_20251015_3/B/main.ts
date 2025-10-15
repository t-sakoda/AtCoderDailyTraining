export function Main(input: string[]) {
  const N = Number(input[0]);
  const S = input[1];

  // 男女が交互に並んでいるかどうか判定

  for (let i = 0; i < N - 1; i++) {
    if (S[i] === S[i + 1]) {
      return "No";
    }
  }
  return "Yes";
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
