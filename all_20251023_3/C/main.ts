export function Main(input: string[]) {
  const grid = input.map((line) => line.split(""));

  for (let i = 0; i < 8; i++) {
    const row = grid[i]
    if (row.includes("#")) {
      for (let j = 0; j < 8; j++) {
        if (row[j] === ".") {
          row[j] = "="
        }
      }
    }
  }

  // 行と列を入れ替えて、再度同じ処理を行う
  const transposedGrid = Array.from({ length: 8 }, (_, colIndex) =>
    Array.from({ length: 8 }, (_, rowIndex) => grid[rowIndex][colIndex])
  );

  for (let i = 0; i < 8; i++) {
    const row = transposedGrid[i]
    if (row.includes("#")) {
      for (let j = 0; j < 8; j++) {
        if (row[j] === ".") {
          row[j] = "="
        }
      }
    }
  }

  // 残っているマスが"."の数を数える
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (transposedGrid[i][j] === ".") {
        count++;
      }
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
