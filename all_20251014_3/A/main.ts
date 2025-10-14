export function Main(input: string[]) {
  // 人数
  const N = Number(input[0]);
  const rows = input.slice(1, N + 1).map((v) => v.split(" "));
  // 名前
  const S = rows.map((v) => v[0]);
  // 年齢
  const A = rows.map((v) => Number(v[1]));

  // 同じ年齢、同じ名前はいない

  let minAgeIndex = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] < A[minAgeIndex]) {
      minAgeIndex = i;
    }
  }


  // 一番年齢が若い人から順に名前を出力
  // N番目の次は1番目にもどる
  const result: string[] = [];
  for (let i = minAgeIndex; i < N; i++) {
    result.push(S[i]);
  }
  for (let i = 0; i < minAgeIndex; i++) {
    result.push(S[i]);
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
