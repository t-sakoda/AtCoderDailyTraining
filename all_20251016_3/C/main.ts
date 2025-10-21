export function Main(input: string[]) {
  const S = input[0];
  const T = input[1];

  // Sが正しい文字列
  // Tが間違って入力してしまった文字列

  const result: number[] = [];
  let indexS = 0
  for (let i = 0; i < T.length; i++) {
    if (T[i] === S[indexS]) {
      result.push(i + 1);
      indexS++;
      if (indexS === S.length) {
        break;
      }
    }
  }

  return result.join(" ");
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
