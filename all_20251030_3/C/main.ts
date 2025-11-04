export function Main(input: string[]) {
  const [K, G, M] = input[0].split(" ").map(Number);

  // グラスとマグカップ
  // G[ml]のグラス
  // M[ml]のマグカップ
  // G < M

  // K回の操作：グラスとマグカップに何mlずつ入っているか
  // グラスにGml入っているときグラスの水を全て捨てる
  // そうではなく、マグカップが空であるとき、マグカップを水で満たす
  // いずれでもないとき、マグカップが空になるか、グラスが水で満たされるまでマグカップからグラスに水を移す

  let glass = 0
  let mug = 0

  for (let i = 0; i < K; i++) {
    if (glass === G) {
      // グラスの水を全て捨てる
      glass = 0
    } else if (mug === 0) {
      // マグカップを水で満たす
      mug = M
    } else {
      if (mug + glass <= G) {
        // マグカップが空になる
        glass += mug
        mug = 0
      } else {
        // グラスが水で満たされる
        const need = G - glass
        glass += need
        mug -= need
      }
    }

  }
  return `${glass} ${mug}`;
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
