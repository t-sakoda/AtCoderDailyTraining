import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
4 1 10
5 7 5
2 10
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
Yes
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
4 1 10
10 7 5
2 10
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
No
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
