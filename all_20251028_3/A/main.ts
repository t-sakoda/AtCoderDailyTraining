export function Main(input: string[]) {
  const [A, B, C, D] = input[0].split(" ").map(Number);

  // A時B分の締め切り、C時D分の提出
  // 締め切り前に提出していれば"Yes"、そうでなければ"No"

  if (A * 60 + B > C * 60 + D) {
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
