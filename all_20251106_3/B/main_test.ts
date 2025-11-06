import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
123
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
666
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
999
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
2997
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
