export function Main(input: string[]) {
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);
  const Q = Number(input[2]);
  const queries = input.slice(3, 3 + Q).map((line) => line.split(" ").map(Number));

  // クエリ
  // 1 k x : A[k] の値を x に変更する。
  // 2 k : A[k] の値を出力する。

  const results: number[] = [];
  for (const query of queries) {
    const [type, k, x] = query;
    if (type === 1) {
      A[k - 1] = x;
    } else if (type === 2) {
      // 1-indexed to 0-indexed
      results.push(A[k - 1]);
    }
  }

  return results.join("\n");
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
