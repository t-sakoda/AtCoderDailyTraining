export function Main(input: string[]) {
  const [N, P, Q] = input[0].split(" ").map(Number);
  const D = input[1].split(" ").map(Number);

  // P円払うとドリンクが飲める
  // 割引券を使うと、Q円でドリンクが飲めるが、料理を1つ注文しなければならない
  // 料理はD[i]円
  // 最小値を求める

  const minD = Math.min(...D);
  const ans = Math.min(P, Q + minD);

  return ans.toString();
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
