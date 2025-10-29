import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
5
1 5 3 2 7
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
28
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
2
1000000000 1000000000
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3000000000
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
