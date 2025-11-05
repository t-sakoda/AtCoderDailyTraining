import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
7
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
ooxooxo
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
9
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
ooxooxoox
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

