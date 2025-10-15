import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3 5
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
black
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
4 5
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
white
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
