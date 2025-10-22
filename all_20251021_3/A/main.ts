export function Main(input: string[]) {
  const N = Number(input[0]);
  const S = input[1];

  // Sの中でaとbが隣接する箇所があればYesをなければNoを返す

  // Sを走査して、aが出てきたら次がbであれば、bが出てきたら次がaであれば、Yesを返す
  for (let i = 0; i < N - 1; i++) {
    if ((S[i] === "a" && S[i + 1] === "b") || (S[i] === "b" && S[i + 1] === "a")) {
      return "Yes";
    }
  }
  return "No";
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
