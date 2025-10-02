import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3
2 3 4
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
6
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
2
1 0
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
-1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
