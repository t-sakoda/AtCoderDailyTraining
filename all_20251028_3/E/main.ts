export function Main(input: string[]) {
  const [N, Q] = input[0].split(" ").map(Number);
  const S = input[1].split("");
  const queries = input.slice(2, 2 + Q).map((line) => line.split(" "));

  // 長さNの文字列Sに対してQ個のクエリを処理する
  // Sの中に'ABC'がいくつ含まれるか
  const results: number[] = [];

  // あらかじめ数えておく
  let count = 0;
  for (let i = 0; i < N - 2; i++) {
    if (S[i] === 'A' && S[i + 1] === 'B' && S[i + 2] === 'C') {
      count++;
    }
  }

  for (let i = 0; i < Q; i++) {
    const [strX, C] = queries[i];
    const X = Number(strX);
    // X番目の文字の前後をチェックして、ABCの出現数を数えておく
    if (X - 1 >= 2) {
      for (let j = X - 3; j <= X - 1; j++) {
        if (S[j] === 'A' && S[j + 1] === 'B' && S[j + 2] === 'C') {
          count--;
        }
      }
    } else if (X - 1 === 1) {
      for (let j = 0; j <= X - 1; j++) {
        if (S[j] === 'A' && S[j + 1] === 'B' && S[j + 2] === 'C') {
          count--;
        }
      }
    } else if (X - 1 === 0) {
      if (S[0] === 'A' && S[1] === 'B' && S[2] === 'C') {
        count--;
      }
    }

    // SのX番目の文字をCに変更
    const x = Number(X) - 1;
    S[x] = C;

    // 変更した後に、X番目の文字の前後をチェックして、ABCの出現数を数えておく
    if (X - 1 >= 2) {
      for (let j = X - 3; j <= X - 1; j++) {
        if (S[j] === 'A' && S[j + 1] === 'B' && S[j + 2] === 'C') {
          count++;
        }
      }
    } else if (X - 1 === 1) {
      for (let j = 0; j <= X - 1; j++) {
        if (S[j] === 'A' && S[j + 1] === 'B' && S[j + 2] === 'C') {
          count++;
        }
      }
    } else if (X - 1 === 0) {
      if (S[0] === 'A' && S[1] === 'B' && S[2] === 'C') {
        count++;
      }
    }

    results.push(count);
  }

  return results.join("\n");
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
