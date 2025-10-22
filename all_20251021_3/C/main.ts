export function Main(input: string[]) {
  // 長さMの整数列A
  // Aの各要素は 1以上N以下で全ての要素が異なる
  // Aの要素として含まれない1以上N以下の整数を昇順に全て列挙してください
  const [N, M] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);

  const candidate = new Set<number>();
  for (let i = 1; i <= N; i++) {
    candidate.add(i);
  }

  for (const a of A) {
    candidate.delete(a);
  }

  // 結果を昇順にソートして出力
  const result = Array.from(candidate).sort((x, y) => x - y);
  if (result.length === 0) {
    return `0\n`;
  }
  return `${result.length}\n${result.join(" ")}`;
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
