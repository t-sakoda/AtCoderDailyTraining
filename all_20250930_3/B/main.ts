export function Main(input: string[]) {
  // 3桁の整数N
  const N = Number(input[0]);

  // N の 100 の位をa、10 の位をb、1 の位をc としたとき、
  // b, c, a をこの順に並べた整数と
  // c, a, b をこの順に並べた整数をそれぞれ出力してください。

  const a = Math.floor(N / 100);
  const b = Math.floor((N % 100) / 10);
  const c = N % 10;

  const first = b * 100 + c * 10 + a;
  const second = c * 100 + a * 10 + b;

  return [first, second].join(" ");
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
