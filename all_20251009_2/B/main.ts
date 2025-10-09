export function Main(input: string[]) {
  const X = input[0].split(" ").map((v) => Number(v));

  // i=kのとき、ボタンを押すと、X[k]が表示される。
  // 3回ボタンを押すと、何が表示されるか
  // i=0のとき、0が表示される。

  const ans = X[X[X[0]]];
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
