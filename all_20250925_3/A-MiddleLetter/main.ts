export function Main(input: string[]) {
  const S = input[0]

  // 中央値の文字を取得する
  const midIndex = Math.floor(S.length / 2);
  return S[midIndex];
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
