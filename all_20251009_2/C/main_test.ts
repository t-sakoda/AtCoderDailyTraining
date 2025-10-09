import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
2 3
2 1
.#.
...
ULDRU
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
2 2
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
4 4
4 2
....
.#..
...#
....
DUUUURULRD
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
2 4
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
6 6
1 1
.#####
######
######
######
######
######
RURLDLULLRULRDL
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1 1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

