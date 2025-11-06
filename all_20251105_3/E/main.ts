export function Main(input: string[]) {
  const [Ax, Ay] = input[0].split(" ").map(Number);
  const [Bx, By] = input[1].split(" ").map(Number);
  const [Cx, Cy] = input[2].split(" ").map(Number);
  const [Dx, Dy] = input[3].split(" ").map(Number);

  // ベクトル
  const v1 = [Bx - Ax, By - Ay];
  const v2 = [Cx - Bx, Cy - By];
  const v3 = [Dx - Cx, Dy - Cy];
  const v4 = [Ax - Dx, Ay - Dy];

  // 外積
  const c1 = v1[0] * v2[1] - v1[1] * v2[0];
  const c2 = v2[0] * v3[1] - v2[1] * v3[0];
  const c3 = v3[0] * v4[1] - v3[1] * v4[0];
  const c4 = v4[0] * v1[1] - v4[1] * v1[0];

  if (
    (c1 > 0 && c2 > 0 && c3 > 0 && c4 > 0) ||
    (c1 < 0 && c2 < 0 && c3 < 0 && c4 < 0) ||
    (c1 === 0 || c2 === 0 || c3 === 0 || c4 === 0)
  ) {
    return "Yes";
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
