import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3 4
##.#
##..
#...
.###
..##
...#
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
Yes
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
3 3
#.#
.#.
#.#
##.
##.
.#.
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
No
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
2 1
#
.
#
.
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
Yes
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
8 7
#..#..#
.##.##.
#..#..#
.##.##.
#..#..#
.##.##.
#..#..#
.##.##.
....###
####...
....###
####...
....###
####...
....###
####...
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
Yes
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
