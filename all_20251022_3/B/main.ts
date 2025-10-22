export function Main(input: string[]) {
  const [a, b, c, d] = input[0].split(" ").map(Number);
  // 1行目は (a+b)*(c-d) を計算して出力
  // 2行目は "Takahashi" を出力

  return [
    `${(a + b) * (c - d)}`,
    'Takahashi'
  ].join("\n");
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
