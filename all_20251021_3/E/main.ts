export function Main(input: string[]) {
  // 長さNの文字列S
  // Sの各文字は色1, 色2, ... 色Mのいずれかに塗られている
  // その色はC[i]

  // 色1, 2, ..., Mについて順番に以下の操作を行う
  // Sの中で色iに塗られた文字かならなる部分を右に1つ巡回シフトする

  // 最終的なSを出力する

  const [N, M] = input[0].split(" ").map(Number);
  const S = input[1].split("");
  const C = input[2].split(" ").map(Number);

  const result = new Array(N);

  // 色ごとのfirst indexを覚えておく
  const firstIndexes = new Array(M+1).fill(-1);
  const prevChars = new Array(M+1).fill("");
  for (let i = 0; i < N; i++) {
    const color = C[i]
    if (firstIndexes[color] === -1) {
      firstIndexes[color] = i;
      prevChars[color] = S[i];
    } else {
      const temp = S[i];
      S[i] = prevChars[color];
      prevChars[color] = temp;
    }
  }
  // 最後にfirstIndexesの位置にprevCharsを入れる
  for (let color = 1; color <= M; color++) {
    const firstIndex = firstIndexes[color];
    if (firstIndex !== -1) {
      S[firstIndex] = prevChars[color];
    }
  }
  return S.join("");
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
