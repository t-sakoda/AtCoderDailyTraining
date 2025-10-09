export function Main(input: string[]) {
  const [V, A, B, C] = input[0].split(" ").map((v) => parseInt(v));

  // 一日で使うシャンプーの量
  const usePerDay = A + B + C;

  const remain = V % usePerDay;

  if (remain < A) {
    return "F";
  } else if (remain < A + B) {
    return "M";
  } else {
    return "T";
  }
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
