import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3 100 50
60 20 40
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
70
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
3 100 50
60000 20000 40000
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
100
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

