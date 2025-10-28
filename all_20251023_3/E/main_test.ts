import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
4
3 -5 7 -4
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
5
0 0 0 0 0
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
0
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
4
-1 1000000000 1000000000 1000000000
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3000000000
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
