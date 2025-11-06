export function Main(input: string[]) {
  const Q = Number(input[0]);
  const queries = input.slice(1).map((line) => line.split(" ").map(Number));

  const map = new Map<number, number>();
  const results: number[] = [];

  for (let i = 0; i < Q; i++) {
    const [type, x] = queries[i];
    if (type === 1) {
      if (map.has(x)) {
        const count = map.get(x)!;
        map.set(x, count + 1);
      } else {
        map.set(x, 1);
      }
    } else if (type === 2) {
      if (map.has(x)) {
        const count = map.get(x)!;
        if (count > 1) {
          map.set(x, count - 1);
        } else {
          map.delete(x);
        }
      }
    } else if (type === 3) {
      results.push(map.size)
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
