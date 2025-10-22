import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
10 3
3 9 2
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
7
1 4 5 6 7 8 10
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
6 6
1 3 5 2 4 6
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = "0\n";

  assertEquals(Main(input), output);
});

Deno.test(function addTest() {
  const input = `
9 1
9
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
8
1 2 3 4 5 6 7 8
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
