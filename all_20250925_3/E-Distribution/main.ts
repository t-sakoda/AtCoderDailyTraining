export function Main(input: string[]) {
  const N = Number(input[0])
  const S = input[1].split(" ").map(Number)
  const T = input[2].split(" ").map(Number)


  /*
  N 人のすぬけ君が円周上に並んでおり、反時計回りに 1,2,...,N の番号がついています。
  i(1≤i≤N) 番目のすぬけ君は時刻 t に宝石をもらうと S[i] 単位時間後、すなわち時刻 t+S[i] にその宝石を (i+1) 番目のすぬけ君に渡します。
  ただし、(N+1) 番目のすぬけ君とは 1 番目のすぬけ君のことを指すとします。
  また、高橋君は時刻 T[i] ​に i 番目のすぬけ君に宝石を渡します。
  全てのi(1≤i≤N) について、i 番目のすぬけ君が初めて宝石をもらう時刻を求めてください。なお、宝石の受け渡しにかかる時間は無視できるものとします。
  */

  const ans = new Array(N).fill(Infinity)

  // 少なくとも時刻T[i]にi番目のすぬけ君は髙橋君から宝石をもらう。
  for (let i = 0; i < N; i++) {
    ans[i] = T[i]
  }

  while (true) {
    let changed = false
    for (let i = 1; i < N; i++) {
      const newTime = ans[i - 1] + S[i - 1]
      if (ans[i] > newTime) {
        ans[i] = newTime
        changed = true
      }
    }
    const newTime = ans[N - 1] + S[N - 1]
    if (ans[0] > newTime) {
      ans[0] = newTime
      changed = true
    }
    if (!changed) break
  }
  return ans.join("\n")
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
