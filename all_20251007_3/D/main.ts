const rev = (x: number): number => {
  const s = x.toString()
  return Number(s.split("").reverse().join(""))
}

const fibonacci_reversed = (x: number, y: number, n: number): number => {
  if (n === 1) return x
  return fibonacci_reversed(y, rev(x + y), n - 1)
}

export function Main(input: string[]) {
  const [X, Y] = input[0].split(" ").map(Number);
  return fibonacci_reversed(X, Y, 10).toString();
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
