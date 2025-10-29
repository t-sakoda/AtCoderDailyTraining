import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
7 0 6 30
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
Aoki
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
7 30 7 30
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
Takahashi
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
0 0 23 59
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
Takahashi
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

