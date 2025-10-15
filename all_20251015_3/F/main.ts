export function Main(input: string[]) {
  const N = Number(input[0]);
  const S = input[1];

  // 同じ座標にいたことがあるかどうか

  let x = 0;
  let y = 0;
  const visited = new Set<string>();
  visited.add(`${x},${y}`);
  for (let i = 0; i < N - 1; i++) {
    const c = S[i];
    if (c === "R") {
      x++;
    } else if (c === "L") {
      x--;
    } else if (c === "U") {
      y++;
    } else if (c === "D") {
      y--;
    }
    if (visited.has(`${x},${y}`)) {
      return "Yes";
    }
    visited.add(`${x},${y}`);
  }

  // 最後の1文字
  const c = S[N - 1];
  if (c === "R") {
    x++;
  } else if (c === "L") {
    x--;
  } else if (c === "U") {
    y++;
  } else if (c === "D") {
    y--;
  }
  if (visited.has(`${x},${y}`)) {
    return "Yes";
  }

  return "No"
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
