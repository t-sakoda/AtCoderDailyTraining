export function Main(input: string[]) {
  const [L, R] = input[0].split(" ").map(Number);

  if (L === 1 && R === 0) {
    return "Yes";
  } else if (L === 0 && R === 1) {
    return "No";
  }
  return "Invalid";
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
