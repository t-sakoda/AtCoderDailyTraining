export function Main(input: string[]) {
  const S = input[0];

  // S[2i-1]　と S[2i] を入れ替える
  const result: string[] = [];
  for (let i = 0; i < S.length; i += 2) {
    result.push(S[i + 1] ?? S[i]);
    result.push(S[i]);
  }

  return result.join("");

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
