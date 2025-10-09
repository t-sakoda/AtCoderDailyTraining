export function Main(input: string[]) {
  const K = parseInt(input[0]);

  // 大文字のAからK個までつなげて出力
  const result = [];
  const startCharCode = "A".charCodeAt(0); // Aの文字コード
  for (let i = 0; i < K; i++) {
    result.push(String.fromCharCode(startCharCode + i));
  }

  return result.join("");
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
