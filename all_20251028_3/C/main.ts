export function Main(input: string[]) {
  const N = Number(input[0]);
  const S = input.slice(1, N + 1);

  let current = "logged-out";
  let count = 0;

  for (let i = 0; i < N; i++) {
    switch (S[i]) {
      case "login":
        if (current === "logged-out") {
          current = "logged-in";
        }
        break;
      case "logout":
        if (current === "logged-in") {
          current = "logged-out";
        }
        break;
      case "private":
        if (current === "logged-out") {
          count++;
        }
        break;
      case "public":
        // do nothing
        break;
      default:
        throw new Error("未対応の操作です");
    }
  }
  return count.toString();
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
