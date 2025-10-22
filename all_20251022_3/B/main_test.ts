import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
1 2 5 3
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
6
Takahashi
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
10 -20 30 -40
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
-700
Takahashi
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
100 100 100 -100
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
40000
Takahashi
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
