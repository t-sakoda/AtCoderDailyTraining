export function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);

  // 長さNの整数列A,正整数M
  // Aの末尾を0回以上N回以下行うことで、「Aには1以上M以下の整数が全て含まれている」としたい
  // 最小操作回数を求める

  // Aの中でM以下の数が出現する最初の位置を求める
  const positions = new Array(M + 1).fill(0);
  for (let i = 0; i < N; i++) {
    if (A[i] <= M && positions[A[i]] === 0) {
      positions[A[i]] = i + 1;
    }
  }

  // positionsに0が含まれている場合は操作する必要がない
  if (positions.slice(1).some((v) => v === 0)) {
    return "0";
  }

  const maxPosition = Math.max(...positions.slice(1, M + 1));
  if (maxPosition - 1 === N) {
    return N.toString()
  }
  return (N - maxPosition + 1).toString();
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
