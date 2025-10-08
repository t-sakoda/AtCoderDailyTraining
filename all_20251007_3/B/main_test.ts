import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
45
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
21:45
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
100
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
22:40
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
63
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
22:03
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

