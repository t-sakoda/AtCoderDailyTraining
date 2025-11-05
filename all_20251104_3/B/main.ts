export function Main(input: string[]) {
  const S = input[0].split("");
  if (S.sort().join("") === "ABC") {
    return "Yes";
  } else {
    return "No";
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
