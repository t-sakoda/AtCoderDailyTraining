export function Main(input: string[]) {
  const [A, B] = input[0].split(" ").map(Number);

  // 3問の問題, 1, 2, 4点
  // 髙橋君はA点, 青木君はB点
  // すぬけ君は、髙橋君と青木君のうち少なくとも一方が解けた問題は解け、二人とも解けなかった問題は解けませんでした。
  // すぬけ君の点数を求めてください

  // 例
  // A = 1, B = 2
  // 1問目: 髙橋君が解けた, 青木君は解けなかった -> すぬけ君は解けた (1点)
  // 2問目: 髙橋君は解けなかった, 青木君が解けた -> すぬけ君は解けた (2点)
  // 3問目: 髙橋君は解けなかった, 青木君は解けなかった -> すぬけ君も解けなかった (0点)
  // よって、すぬけ君の点数は3点

  // 組み合わせは限られる
  // 0pt: x, x, x
  // 1pt: o, x, x
  // 2pt: x, o, x
  // 3pt: o, o, x
  // 4pt: x, x, o
  // 5pt: o, x, o
  // 6pt: x, o, o
  // 7pt: o, o, o

  // ビット演算と同じ
  // A と B のビット和を求める
  const result = A | B;

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
