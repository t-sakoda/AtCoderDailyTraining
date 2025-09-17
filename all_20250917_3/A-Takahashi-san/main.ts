
export function Main(input: string[]) {
  // S: 苗字, T: 名前
  const [S, T] = input[0].split(" ");

  // 苗字、スペース（ ）、敬称（san）をこの順に連結した文字列を出力してください。

  const result = `${S} san`;
  return result.toString();
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
