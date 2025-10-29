import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3
4 2 3
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
26
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
2
9 45
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
405
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
10
7781 8803 8630 9065 8831 9182 8593 7660 7548 8617
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3227530139
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
