export function Main(input: string[]) {
  const [nStr, c1, c2] = input[0].split(" ");
  const S = input[1];
  const N = parseInt(nStr);

  // Sのうち、ｃ1であるもの以外を全てc2に置き換えた文字列を求める
  let result = "";
  for (let i = 0; i < N; i++) {
    if (S[i] === c1) {
      result += c1
    } else {
      result += c2
    }
  }

  return result
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
