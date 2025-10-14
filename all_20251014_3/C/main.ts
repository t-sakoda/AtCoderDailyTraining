export function Main(input: string[]) {
  const [N, X] = input[0].split(" ").map((v) => parseInt(v));
  const A = input[1].split(" ").map((v) => parseInt(v));

  // i = A[X]
  // j = A[i]
  // k = A[j]
  // ...
  // 何人辿れるか？
  const visited = new Set<number>();
  let current = X;
  while (!visited.has(current)) {
    visited.add(current);
    current = A[current - 1];
  }

  return visited.size.toString();
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
