import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3 4 6 3 3 7
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
3 4 5 6 7 8
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
0
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
5 13 10 6 13 9
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
120
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
20 25 30 22 29 24
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
30613
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
