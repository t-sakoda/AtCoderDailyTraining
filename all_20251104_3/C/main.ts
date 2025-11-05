// 回文かどうか判定する
function isPalindrome(s: string): boolean {
  const len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

export function Main(input: string[]) {
  const N = Number(input[0]);
  const S = input.slice(1, N + 1);

  // 回文が成立する組み合わせがあればYes
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) continue;
      const combined = S[i] + S[j];
      if (isPalindrome(combined)) {
        return "Yes";
      }
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
