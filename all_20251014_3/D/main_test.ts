import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
5 5 3 4
#####
#...#
#.@.#
#..@#
#####
LLLDRUU
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
2 3 1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
6 13 4 6
#############
#@@@@@@@@@@@#
#@@@@@@@@@@@#
#@@@@.@@@@@@#
#@@@@@@@@@@@#
#############
UURUURLRLUUDDURDURRR
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3 11 11
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
12 35 7 10
###################################
#.................................#
#..........@......................#
#......@................@.........#
#.............##............@.....#
#...##........##....##............#
#...##........##....##.......##...#
#....##......##......##....##.....#
#....##......##......##..##.......#
#.....#######.........###.........#
#.................................#
###################################
LRURRRUUDDULUDUUDLRLRDRRLULRRUDLDRU
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
4 14 1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
