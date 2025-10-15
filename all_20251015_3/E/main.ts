export function Main(input: string[]) {
  const N = Number(input[0]);
  const S = input[1];

  // ダンゴ文字列のレベルの最大値を求める
  let candidate = 0
  let level = 0
  let hasStick = false
  let hasDango = false
  for (let i = 0; i < N; i++) {
    if (S[i] === 'o') {
      hasDango = true
      candidate++
    } else if (S[i] === '-') {
      hasStick = true
      level = Math.max(level, candidate)
      candidate = 0
    }
  }
  level = Math.max(level, candidate)
  if (!hasStick || !hasDango) return "-1"
  return level.toString();

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
