export function Main(input: string[]) {
  const [N, Q] = input[0].split(" ").map(Number);
  const T = input[1].split(" ").map(Number);

  // 最終的に抜いて終わる歯の本数を数えて合計から引く
  const set = new Set<number>();
  for (let i = 0; i < Q; i++) {
    const t = T[i];
    if (set.has(t)) {
      set.delete(t);
    } else {
      set.add(t);
    }
  }
  return (N - set.size).toString();
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
