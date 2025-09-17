
export function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map(Number);
  const S = input[1];
  const T = input[2];

  // Sの長さはN, Tの長さはM
  // N <= M

  /**
   * S が T の接頭辞であり、かつ接尾辞でもある場合は 0 を、
   * S が T の接頭辞であるが、接尾辞でない場合は 1 を、
   * S が T の接尾辞であるが、接頭辞でない場合は 2 を、
   * S が T の接頭辞でも接尾辞でもない場合は 3 を出力してください。
   */

  const isPrefix = (S: string, T: string): boolean => {
    for (let i = 0; i < N; i++) {
      if (S[i] !== T[i]) return false;
    }
    return true;
  }

  const isSuffix = (S: string, T: string): boolean => {
    for (let i = 0; i < N; i++) {
      if (S[N - 1 - i] !== T[M - 1 - i]) return false;
    }
    return true;
  }

  if (isPrefix(S, T) && isSuffix(S, T)) {
    return "0";
  } else if (isPrefix(S, T)) {
    return "1";
  } else if (isSuffix(S, T)) {
    return "2";
  } else {
    return "3";
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
