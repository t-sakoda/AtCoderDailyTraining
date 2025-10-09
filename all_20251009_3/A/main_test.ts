import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
25 10 11 12
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
T
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
30 10 10 10
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
F
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
100000 1 1 1
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
M
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

