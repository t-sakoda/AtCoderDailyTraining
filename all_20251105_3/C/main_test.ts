import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
4
8 2 5 1
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
8
1 2 3 4 5 10 9 11
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
6
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

