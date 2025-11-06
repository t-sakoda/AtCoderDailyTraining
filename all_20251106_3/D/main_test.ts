import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
5 4 7
3 1 4 9 7
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
4 4 4 7 7
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
3 10 10
11 10 9
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
10 10 10
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

