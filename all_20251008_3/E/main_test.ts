import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3 600
180 240 120
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1 60
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
3 281
94 94 94
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3 93
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
10 5678912340
1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
6 678912340
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
