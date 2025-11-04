import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
6
abcarc
agcahc
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
2
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
7
atcoder
contest
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
7
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
8
chokudai
chokudai
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
0
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
10
vexknuampx
vzxikuamlx
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
4
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

