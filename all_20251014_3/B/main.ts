export function Main(input: string[]) {
  const [A, B] = input[0].split(" ").map((v) => parseInt(v));

  // A xor C = B となるCを求める
  const C = A ^ B;
  return C.toString();
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
