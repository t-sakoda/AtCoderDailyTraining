import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
4
90 180 45 195
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
120
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
1
1
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
359
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
10
215 137 320 339 341 41 44 18 241 149
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
170
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
