import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
    3
    1 3 5
    7
    2 2
    2 3
    1 3 0
    2 3
    1 2 8
    2 2
    2 1
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
    3
    5
    0
    8
    1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
5
22 2 16 7 30
10
1 4 0
1 5 0
2 2
2 3
2 4
2 5
1 4 100
1 5 100
2 3
2 4
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
2
16
0
0
16
100
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});


Deno.test(function addTest() {
  const input = `
7
478 369 466 343 541 42 165
20
2 1
1 7 729
1 6 61
1 6 838
1 3 319
1 4 317
2 4
1 1 673
1 3 176
1 5 250
1 1 468
2 6
1 7 478
1 5 595
2 6
1 6 599
1 6 505
2 3
2 5
2 1
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
478
317
838
838
176
595
468
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

