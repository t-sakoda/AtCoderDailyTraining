
export function Main(input: string[]) {
  const S = input

  // S[i]の長さがiであるような整数iがいくつあるか出力せよ
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i].length === i + 1) {
      count++;
    }
  }

  return count.toString();
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
