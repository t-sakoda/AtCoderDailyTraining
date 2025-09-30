export function Main(input: string[]) {
  const D = Number(input[0])

  // 水深D[m]における水圧は何[MPa]か？
  const x = D * 0.01
  return x.toString()
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
