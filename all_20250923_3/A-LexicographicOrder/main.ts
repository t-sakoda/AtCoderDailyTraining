
const YES = 'Yes'
const NO = 'No'

export function Main(input: string[]) {
  const [S, T] = input[0].split(" ")

  if (S < T) {
    return YES
  } else {
    return NO
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
