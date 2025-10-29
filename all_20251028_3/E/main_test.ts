import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
7 4
ABCDABC
4 B
3 A
5 C
4 G
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
2
1
1
0
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
3 3
ABC
1 A
2 B
3 C
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1
1
1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
15 10
BBCCBCACCBACACA
9 C
11 B
5 B
11 B
4 A
8 C
8 B
5 B
7 B
14 B
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
0
0
0
0
1
1
2
2
1
1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
