export function Main(input: string[]) {
  const [H, W] = input[0].split(" ").map(Number);
  const cookies = input.slice(1, H + 1).map((line) => line.split("").map((c) => ({ color: c, removed: false })));

  // 1. 各行に対して次の操作を行う : その行に 2 枚以上のクッキーが残っており、それらの色がすべて同じならば、それらに印をつける。
  // 2. 各列に対して次の操作を行う: その列に 2 枚以上のクッキーが残っており、それらの色がすべて同じならば、それらに印をつける。
  // 3. 印のついたクッキーがあればそれらをすべて取り除いて 1. に戻り、なければ手続きを終了する。
  // 手続きを終了した時点で残っているクッキーの枚数を求めてください。

  while (true) {
    let changed = false;
    for (let i = 0; i < cookies.length; i++) {
      const row = cookies[i];
      if (row.length < 2) continue;
      if (row.every((cookie) => cookie.color === row[0].color)) {
        for (let r = 0; r < row.length; r++) {
          row[r].removed = true;
          changed = true;
        }
      }
    }
    const columnsNum = cookies[0]?.length || 0;
    for (let j = 0; j < columnsNum; j++) {
      const column = cookies.map((row) => row[j]);
      if (column.length < 2) continue;
      if (column.every((cookie) => cookie.color === column[0].color)) {
        for (let r = 0; r < column.length; r++) {
          column[r].removed = true;
          changed = true;
        }
      }
    }
    // 変更がなければ終了
    if (!changed) {
      break;
    }
    // 取り除く
    for (let i = 0; i < cookies.length; i++) {
      cookies[i] = cookies[i].filter((cookie) => !cookie.removed);
    }
    // 空行を取り除く
    for (let i = cookies.length - 1; i >= 0; i--) {
      if (cookies[i].length === 0) {
        cookies.splice(i, 1);
      }
    }
  }

  // 残っているクッキーの枚数を数える
  let remaining = 0;
  for (let i = 0; i < cookies.length; i++) {
    remaining += cookies[i].length;
  }
  return remaining.toString();
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
