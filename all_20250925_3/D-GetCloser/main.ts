export function Main(input: string[]) {
  // 数列Aの長さN, 数列Bの長さM
  const [A, B] = input[0].split(" ").map(Number)

  /*
    二次元平面上の点 (0,0) から点 (A,B) に向かって距離 1 だけ移動します。移動後の座標を求めてください。
    ただし、点 X から点 Y に向かって距離 d (≤ 線分 XY の長さ) だけ移動すると、線分 XY 上で点 X からの距離が d であるような点に辿りつくものとします。
    なお、制約より点 (0,0) と点 (A,B) の距離は 1 以上であることが保証されます。
  */


  const d = Math.sqrt(A * A + B * B);
  // 小数で表す
  const x = A / d;
  const y = B / d;

  return `${x} ${y}`;
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
