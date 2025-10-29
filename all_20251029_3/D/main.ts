const floorDiv = (a: bigint, b: bigint): bigint => {
  if (b < 0n) return floorDiv(-a, -b);
  let q = a / b;
  const r = a % b;
  if (r !== 0n && a < 0n) q -= 1n;
  return q;
};

const ceilDiv = (a: bigint, b: bigint): bigint => {
  // ceil(a/b) = -floorDiv(-a, b)
  return -floorDiv(-a, b);
};

export function Main(input: string[]) {
  const [A, M, L, R] = input[0].split(" ").map((v) => BigInt(v));

  const kMin = ceilDiv(L - A, M);
  const kMax = floorDiv(R - A, M);

  let ans = 0n;
  if (kMax >= kMin) ans = kMax - kMin + 1n;

  return ans.toString();
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
