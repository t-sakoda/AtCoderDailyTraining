export function Main(input: string[]) {
  const [A, B, C, D] = input[0].split(" ").map(Number);
  // A時B分0秒とC時D分1秒を比較する
  // A時B分の方が早い場合: Takahashi
  // そうでない場合: Aoki

  const takahashi = A * 3600 + B * 60 + 0;
  const aoki = C * 3600 + D * 60 + 1;

  if (takahashi < aoki) {
    return "Takahashi";
  } else {
    return "Aoki";
  }
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
