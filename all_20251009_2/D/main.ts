export function Main(input: string[]) {
  const S = input[0];

  // AAABBBCCCCCCC: extended ABC => Yes
  // ABBAAAC => No
  // BBBCCCCCCCAAA => No
  // '' => Yes

  return /^A*B*C*$/.test(S) ? 'Yes' : 'No';

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
