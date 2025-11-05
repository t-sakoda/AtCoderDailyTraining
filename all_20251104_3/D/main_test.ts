import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
30 6
2 9 18 27 18 9
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
28
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
1 7
1 1 1 1 1 1 1
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
0
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
9 20
9 5 1 2 2 2 8 9 2 1 6 2 6 5 8 7 8 5 9 8
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
5
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
