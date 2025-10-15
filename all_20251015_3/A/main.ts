export function Main(input: string[]) {
  const A = input[0]

  // Aの隣り合う2つの項を入れ替える操作をちょうど1回行うことでAを昇順にすることができるか判定する

  const allowed = [
    "2 1 3 4 5",
    "1 3 2 4 5",
    "1 2 4 3 5",
    "1 2 3 5 4",
  ];
  return allowed.includes(A) ? "Yes" : "No";
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
