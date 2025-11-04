import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
5 300 500
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
200 500
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
5 100 200
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
0 0
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
