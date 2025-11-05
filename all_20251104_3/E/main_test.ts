import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
2
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1 2 1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
1
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
4
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1 2 1 3 1 2 1 4 1 2 1 3 1 2 1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
