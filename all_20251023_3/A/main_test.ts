import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
31 9 24 31 24
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
0 0 0 0 0
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

