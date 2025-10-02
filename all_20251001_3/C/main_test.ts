import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
4
SSRS
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
2 -1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
20
SRSRSSRSSSRSRRRRRSRR
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
0 1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
