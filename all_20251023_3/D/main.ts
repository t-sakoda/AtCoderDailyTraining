export function Main(input: string[]) {
  const Q = Number(input[0]);
  const queries = input.slice(1);

  const bag: number[] = []

  const results = [];
  for (let i = 0; i < Q; i++) {
    const query = queries[i];
    const type = Number(query.split(" ")[0]);
    if (type === 1) {
      const x = Number(query.split(" ")[1]);
      bag.push(x);
      bag.sort((a, b) => b - a); // Sort in descending order
    } else {
      const min = bag.pop();
      if (min) {
        results.push(min);
      }
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
