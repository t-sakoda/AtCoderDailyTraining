import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
abc
axbxyc
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1 3 6
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
aaaa
bbbbaaaa
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
5 6 7 8
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
atcoder
atcoder
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1 2 3 4 5 6 7
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
