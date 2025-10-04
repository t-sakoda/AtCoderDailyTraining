import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3
5 0
3 3
2 18
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
8
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
2
1 10
1000000 20
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1000000
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
6
31 3
20 8
11 5
4 3
47 14
1 18
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
67
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

