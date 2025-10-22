import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
15.8
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
15+
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
1.0
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1-
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
12.5
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
12
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
