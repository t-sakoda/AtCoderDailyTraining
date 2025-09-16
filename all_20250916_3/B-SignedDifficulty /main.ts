const f = (n: number): number => {
  if (n === 0) return 1;
  return n * f(n - 1);
}

export function Main(input: string[]) {
  const [X, Y] = input[0].split(".").map(Number);

  if (0 <= Y && Y <= 2) {
    return `${X}-`;
  } else if (3 <= Y && Y <= 6) {
    return `${X}`;
  } else {
    return `${X}+`;
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
