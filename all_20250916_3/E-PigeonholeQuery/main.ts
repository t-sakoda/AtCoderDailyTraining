export function Main(input: string[]) {
  // N: 鳩の数, 巣の数, Q: クエリの数
  const [N, Q] = input[0].split(" ").map(Number);
  const queries = input.slice(1).map(line => line.split(" ").map(Number));

  const result: number[] = [];

  const pigeons = new Map<number, number>(); // key: 鳩, value: 巣
  const holes = new Map<number, Set<number>>(); // key: 巣, value: 鳩の集合
  for (let i = 1; i <= N; i++) {
    pigeons.set(i, i); // 鳩 i は最初、巣 i にいる。
    holes.set(i, new Set([i])); // 巣 i には最初、鳩 i がいる。
  }

  // 鳩が2羽以上いる巣の数
  let count = 0;

  for (const query of queries) {
    const [type, P, H] = query;
    if (type === 1) {
      // 鳩 P を取得
      const pigeon = pigeons.get(P);
      // 鳩 P が現在入っている巣箱を取得
      const currentHole = holes.get(pigeon!);
      // 現在の巣箱から鳩 P を削除
      currentHole!.delete(P);
      if (currentHole!.size === 1) {
        // 現在の巣箱の中に鳩が1羽ちょうどいる場合、2 -> 1になるので、countを1減らす
        count--;
      }

      // 移動先となる巣箱 H を取得
      const nextHole = holes.get(H);
      // 巣箱 H に鳩 P を追加
      nextHole!.add(P);
      if (nextHole!.size === 2) {
        // 移動先の巣箱の中に鳩が2羽ちょうどいる場合、1 -> 2になるので、countを1増やす
        count++;
      }

      // 鳩 P の現在の巣箱を H に更新
      pigeons.set(P, H);

    } else if (type === 2) {
      result.push(count);
    }
  }

  return result.join("\n");
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
