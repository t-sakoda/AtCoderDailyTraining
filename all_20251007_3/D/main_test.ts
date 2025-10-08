import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
1 1
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
415
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
3 7
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
895
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
90701 90204
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
9560800101
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

