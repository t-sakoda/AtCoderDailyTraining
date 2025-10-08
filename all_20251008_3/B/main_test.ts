import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
7
3 1 4 1 5 9 2
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
14
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
1
100
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
100
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
14
100 10 1 10 100 10 1 10 100 10 1 10 100 10
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
403
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

