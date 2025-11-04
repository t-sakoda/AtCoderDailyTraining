export function Main(input: string[]) {
  const [A, B, C, X] = input[0].split(" ").map(Number);

  // 上位A位までは必ずTシャツをもらえる
  let p = 0;
  if (X <= A) {
    p = 1;
    return p.toFixed(12);
  } else if (X <= B) {
    p = C / (B - A);
  }
  return p.toFixed(12);
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
