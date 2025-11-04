import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
30 500 20 103
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
0.042553191489
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
50 500 100 1
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1.000000000000
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
1 2 1 1000
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
0.000000000000
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

