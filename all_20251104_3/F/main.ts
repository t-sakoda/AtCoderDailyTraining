export function Main(input: string[]) {
  // 1 <= Q <= 2x10^5
  const Q = Number(input[0]);
  const queries = input.slice(1, Q + 1).map((line) => line.split(" ").map(Number));
  const A: {c: number, x: number}[] = [];

  const result: bigint[] = [];
  let prev = 0;

  for (let i = 0; i < Q; i++) {
    const query = queries[i];
    const type = query[0];
    if (type === 1) {
      const c = query[1];
      const x = query[2];
      A.push({c, x});
    } else if (type === 2) {
      let k = query[1];
      // 先頭のk個を取り出す
      let sum = 0n;
      for (let j = prev; j < A.length; j++) {
        if (k === 0) break;
        const { c, x } = A[j];
        if (c === 0) continue;
        if (c <= k) {
          sum += BigInt(x) * BigInt(c);
          k -= c;
          A[j].c = 0;
        } else {
          // c > k
          sum += BigInt(x) * BigInt(k);
          A[j].c -= k;
          k = 0;
        }
        prev = j;
      }
      result.push(sum);
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
