export function Main(input: string[]) {
  const [a, b, c] = input[0].split("").map((v) => Number(v));
  const ans = (
    a * 100 + b * 10 + c
    + b * 100 + c * 10 + a
    + c * 100 + a * 10 + b
  );
  return String(ans);
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
