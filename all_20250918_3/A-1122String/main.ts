
const YES = 'Yes'
const NO = 'No'

export function Main(input: string[]) {
  // N: 文字列の長さ
  const N = Number(input[0])
  //S は 1, 2, / からなる長さ N の文字列
  const S = input[1]

  // 11/22 文字列の定義
  // 文字列の長さが奇数
  // 一文字目から (（長さ） + 1) / 2 - 1文字目までが1である
  // (（長さ） + 1) / 2 文字目が/である
  // (（長さ） + 1) / 2 + 1 文字目から（長さ）文字目までが2である

  // 11/22: yes
  // 111/222: yes
  // 1122: no
  // 1/22: no
  // 11/2222: no
  // 22/11: no
  // //2/2/211: no

  // S が 11/22 文字列であれば Yes を、そうでなければ No を出力せよ

  if (N % 2 === 0) {
    return NO
  }
  const mid = ((N + 1) / 2)

  for (let i = 0; i < mid - 1; i++) {
    if (S[i] !== '1') {
      return NO
    }
  }
  if (S[mid - 1] !== '/') {
    return NO
  }
  for (let i = mid; i < N; i++) {
    if (S[i] !== '2') {
      return NO
    }
  }
  return YES
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
