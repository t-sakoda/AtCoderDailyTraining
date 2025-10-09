export function Main(input: string[]) {
  const S = input[0];
  const T = input[1];

  const chars = [];
  for (let i = 1; i < S.length; i++) {
    if (S[i] === S[i].toUpperCase()) {
      chars.push(S[i-1]);
    }
  }
  return chars.every(c => T.includes(c)) ? "Yes" : "No"
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
