export function Main(input: string[]) {
  const N = Number(input[0]);
  const T = input[1];

  let x = 0;
  let y = 0;
  let dir: "N" | "E" | "S" | "W" = "E";
  for (let i = 0; i < N; i++) {
    if (T[i] === "S") {
      switch (dir) {
        case "N":
          y++;
          break;
        case "E":
          x++;
          break;
        case "S":
          y--;
          break;
        case "W":
          x--;
          break;
      }
    } else {
      switch (dir) {
        case "N":
          dir = "E";
          break;
        case "E":
          dir = "S";
          break;
        case "S":
          dir = "W";
          break;
        case "W":
          dir = "N";
          break;
      }
    }
  }

  return `${x} ${y}`;
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
