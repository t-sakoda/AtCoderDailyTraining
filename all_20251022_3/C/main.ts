export function Main(input: string[]) {
  // ABC , ARC , AGC , AHC の4つのうち、与えられた3つに含まれないものを出力する
  const ALL = ["ABC", "ARC", "AGC", "AHC"];
  for (const s of ALL) {
    if (!input.includes(s)) {
      return s
    }
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
