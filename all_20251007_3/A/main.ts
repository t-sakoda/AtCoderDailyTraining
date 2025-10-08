export function Main(input: string[]) {
  const [a, b] = input[0].split(" ").map(Number);

  // 二分木のノードa, bが直接結ばれているかどうか
  // bを2で割った値がaと一致するかどうか
  // bを2で割る、つまり、ビットシフトしていって、aに一致するかどうかを確認

  if (b >> 1 === a) {
    return "Yes";
  } else {
    return "No";
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
