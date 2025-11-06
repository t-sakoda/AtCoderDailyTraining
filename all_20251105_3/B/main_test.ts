import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
1 0
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
Yes
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
1 1
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
Invalid
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

