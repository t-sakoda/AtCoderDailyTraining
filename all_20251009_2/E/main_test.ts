import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3 4
110 90 120
100 80 120 10000
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
110
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
5 2
100000 100000 100000 100000 100000
100 200
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
201
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
3 2
100 100 100
80 120
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
100
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

