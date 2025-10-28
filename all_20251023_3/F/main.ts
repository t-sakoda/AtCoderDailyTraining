export function Main(input: string[]) {
  // 3 以上 30 以下の整数
  const [h1, h2, h3, w1, w2, w3] = input[0].split(" ").map(Number);

  // a[1][1] + a[1][2] + a[1][3] = h1
  // a[2][1] + a[2][2] + a[2][3] = h2
  // a[3][1] + a[3][2] + a[3][3] = h3
  //
  // a[1][1] + a[2][1] + a[3][1] = w1
  // a[1][2] + a[2][2] + a[3][2] = w2
  // a[1][3] + a[2][3] + a[3][3] = w3

  // これを満たす組み合わせは何通りか？
  // 各マスは1以上（ということは28以下）

  // 総当たりで何通りか調べ
  let answer = 0;
  for (let a11 = 1; a11 <= Math.min(h1 - 2, w1 - 2); a11++) {
    for (let a12 = 1; a12 <= Math.min(h1 - a11 - 1, w2 - 2); a12++) {
      const a13 = h1 - a11 - a12;
      if (a13 < 1) continue;

      for (let a21 = 1; a21 <= Math.min(h2 - 2, w1 - a11 - 1); a21++) {
        for (let a22 = 1; a22 <= Math.min(h2 - a21 - 1, w2 - a12 - 1); a22++) {
          const a23 = h2 - a21 - a22;
          if (a23 < 1) continue;

          const a31 = w1 - a11 - a21;
          if (a31 < 1) continue;
          const a32 = w2 - a12 - a22;
          if (a32 < 1) continue;
          const a33 = h3 - a31 - a32;
          if (a33 < 1) continue;

          if (a13 + a23 + a33 === w3) {
            answer++;
          }
        }
      }
    }
  }
  return answer.toString();
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
