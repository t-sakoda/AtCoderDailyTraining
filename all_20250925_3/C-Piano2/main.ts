const YES = "Yes"
const NO = "No"

export function Main(input: string[]) {
  // 数列Aの長さN, 数列Bの長さM
  const [N, M] = input[0].split(" ").map(Number)
  const A = input[1].split(" ").map(Number)
  const B = input[2].split(" ").map(Number)

  // A, B全ての要素は互いに相異なる
  // A,B のすべての要素を昇順に並べた長さ N + M の数列Cにおいて、
  // A に現れる要素が2つ連続するかどうか判定してください。

  const C = [...A, ...B].sort((a, b) => a - b)
  for (let i = 0; i < C.length - 1; i++) {
    // C[i], C[i+1]がAに含まれるか
    if (A.includes(C[i]) && A.includes(C[i + 1])) {
      return YES
    }
  }
  return NO
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
