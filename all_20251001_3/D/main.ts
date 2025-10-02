export function Main(input: string[]) {
  const N = Number(input[0]);
  const A = input[1].split(" ").map(Number);

  // 最も大きなピザの角度を求める
  // A=(90,180,45,195)

  /*
    0: 0 | 360
    1: 0 | 90 | 360
    2: 0 | 180 | 270 | 360
    3: 0 | 45 | 225 | 315 | 360
    4: 0 | 195 | 240 | 420 = 60 | 515 = 155 | 360

    sort: 0, 60, 155, 195, 240, 360
    diff: 60, 95, 40, 45, 120
  */

  const angles: number[] = [];
  // angles[0] = A[N-1];
  // angles[1] = A[N-1] + A[N-2];
  // angles[2] = A[N-1] + A[N-2] + A[N-3];
  // ...
  // angles[N-1] = A[N-1] + A[N-2] + ... + A[0];

  for (let i = 0; i < N; i++) {
    if (i === 0) {
      angles[i] = A[N - 1] % 360;
    } else {
      angles[i] = (angles[i - 1] + A[N - 1 - i]) % 360;
    }
  }

  const sortedAngles = angles.slice().sort((a, b) => a - b);
  const cuts = [0, ...sortedAngles, 360];
  let maxAngle = 0;
  for (let i = 1; i < cuts.length; i++) {
    const angle = cuts[i] - cuts[i - 1];
    if (angle > maxAngle) {
      maxAngle = angle;
    }
  }

  return String(maxAngle);
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
