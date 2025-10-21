import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
4
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
5
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
100
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
323
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
100000000000
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
5745290566750
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
