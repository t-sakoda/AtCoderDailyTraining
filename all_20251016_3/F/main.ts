export function Main(input: string[]) {
  const N = Number(input[0]);
  const positions = input.slice(1, N + 1).map((line) => {
    const [x, y] = line.split(" ").map(Number);
    return { x, y };
  });
  const S: ('L' | 'R')[] = input[N + 1].split("").map((v) => v as 'L' | 'R');

  // N人の人がいる
  // 人iは(X[i], Y[i])にいる
  // S: L, Rからなる長さNの文字列
  // 人iはS[i]の方向に同じ速度で歩き始める
  // 全ての人が歩き続けたとき衝突は発生するか？

  // 衝突が発生するのは、同じy座標にいる人が、左と右に向かって歩き始めた場合のみ
  // 各y座標について、正の方向（R）に歩き始める人のx座標 < 負の方向（L）に歩き始める人のx座標となっていたら衝突する

  const positionsByY = new Map<number, { x: number; dir: 'L' | 'R' }[]>();
  for (let i = 0; i < N; i++) {
    const y = positions[i].y;
    if (!positionsByY.has(y)) {
      positionsByY.set(y, []);
    }
    positionsByY.get(y)!.push({ x: positions[i].x, dir: S[i] });
  }

  const keys = Array.from(positionsByY.keys())
  for (let i = 0; i < keys.length; i++) {
    const y = keys[i];
    const group = positionsByY.get(y);
    if (!group) continue;

    // 衝突判定
    let leftMostR = Infinity;
    let rightMostL = -Infinity;
    for (const { x, dir } of group) {
      if (dir === 'R') {
        leftMostR = Math.min(leftMostR, x);
      } else {
        rightMostL = Math.max(rightMostL, x);
      }
    }
    if (leftMostR < rightMostL) {
      return "Yes";
    }
  }
  return "No";
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
