export function Main(input: string[]) {
  const [H, W] = input[0].split(" ").map((v) => Number(v));
  let [Si, Sj] = input[1].split(" ").map((v) => Number(v) - 1);
  const C = input.slice(2, 2 + H).map((v) => v.split(""));
  const X = input[2 + H].split("");

  // マスが空いているなら"."、そうでないなら"#"
  // 現在座標:Si, Sj

  for (let i = 0, len = X.length; i < len; i++) {
    const dir = X[i];
    switch (dir) {
      case "U":
        if (Si - 1 >= 0 && C[Si - 1][Sj] === ".") {
          Si--;
        }
        break;
      case "D":
        if (Si + 1 < H && C[Si + 1][Sj] === ".") {
          Si++;
        }
        break;
      case "L":
        if (Sj - 1 >= 0 && C[Si][Sj - 1] === ".") {
          Sj--;
        }
        break;
      case "R":
        if (Sj + 1 < W && C[Si][Sj + 1] === ".") {
          Sj++;
        }
        break;
    }
  }
  return `${Si + 1} ${Sj + 1}`;
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
