import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
abcdaxayz
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
7
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
bcbbbz
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
-1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
aaaaa
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
5
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

