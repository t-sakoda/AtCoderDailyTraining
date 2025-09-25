export function Main(input: string[]) {
  const X = Number(input[0])
  // X = n! のときの n を求める

  let x = X

  for (let i = 2; ; i++) {
    if (x === i) {
      return i.toString()
    }
    x = x / i
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
