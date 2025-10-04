export function Main(input: string[]) {
  // 2 ** n > n ** 2 なら Yes, そうでないなら No
  // 1 <= n <= 10^9
  const n = BigInt(input[0]);
  if (n === 1n) {
    return "Yes";
  } else if (n === 2n) {
    return "No";
  } else if (n === 3n) {
    return "No";
  } else if (n === 4n) {
    return "No";
  }
  return "Yes";
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
