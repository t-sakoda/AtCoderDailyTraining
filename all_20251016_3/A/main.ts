export function Main(input: string[]) {
  const [A, B] = input[0].split(" ").map(Number);

  if (A === B) {
    return "1";
  }

  // A, B, x を並び替えて、等差数列を作れるxが何通りあるか？

  if ((A + B) % 2 === 0) {
    return "3"
  }
  return "2";
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
