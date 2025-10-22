import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
ARC
AGC
AHC
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
ABC
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
AGC
ABC
ARC
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
AHC
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
