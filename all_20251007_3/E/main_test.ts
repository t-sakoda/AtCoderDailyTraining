import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
5 9
#.#.#...#
.#...#.#.
#.#...#..
.....#.#.
....#...#
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1 1 0 0 0
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
3 3
...
...
...
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
0 0 0
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
3 16
#.#.....#.#..#.#
.#.......#....#.
#.#.....#.#..#.#
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3 0 0
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
15 20
#.#..#.............#
.#....#....#.#....#.
#.#....#....#....#..
........#..#.#..#...
#.....#..#.....#....
.#...#....#...#..#.#
..#.#......#.#....#.
...#........#....#.#
..#.#......#.#......
.#...#....#...#.....
#.....#..#.....#....
........#.......#...
#.#....#....#.#..#..
.#....#......#....#.
#.#..#......#.#....#
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
5 0 1 0 0 0 1 0 0 0 0 0 0 0 0
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

