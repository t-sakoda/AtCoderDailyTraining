import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
5 4 7
8 3 10 5 13
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
12
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
5 100 7
8 3 10 5 13
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
0
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
20 815 60
2066 3193 2325 4030 3725 1669 1969 763 1653 159 5311 5341 4671 2374 4513 285 810 742 2981 202
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
112
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

