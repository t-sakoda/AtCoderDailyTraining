export function Main(input: string[]) {
  const S = input[0];

  let result = -2
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "a") {
      result = i;
    }
  }
  return (result + 1).toString();
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
