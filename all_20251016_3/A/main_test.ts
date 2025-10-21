import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
5 7
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
6 1
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
2
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
3 3
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
