export function Main(input: string[]) {
  const K = Number(input[0]);

  // 21:00からK分後の時刻をHH:MM形式で出力
  // 0 <= K <= 100

  const h = 21 + Math.floor(K / 60);
  const m = K % 60;

  const hh = h.toString().padStart(2, "0");
  const mm = m.toString().padStart(2, "0");
  return `${hh}:${mm}`;
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
