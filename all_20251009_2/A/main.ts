export function Main(input: string[]) {
  const [x1, y1] = input[0].split(" ").map((v) => parseInt(v));
  const [x2, y2] = input[1].split(" ").map((v) => parseInt(v));
  const [x3, y3] = input[2].split(" ").map((v) => parseInt(v));

  // 長方形の座標が与えられている。残りの1点を求める
  let x4 = 0;
  let y4 = 0;

  if (x1 === x2) {
    x4 = x3;
  } else if (x2 === x3) {
    x4 = x1;
  } else if (x3 === x1) {
    x4 = x2;
  }

  if (y1 === y2) {
    y4 = y3;
  } else if (y2 === y3) {
    y4 = y1;
  } else if (y3 === y1) {
    y4 = y2;
  }

  return `${x4} ${y4}`;
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
