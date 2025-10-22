import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3 b g
abc
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
gbg
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
1 s h
s
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
s
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
7 d a
atcoder
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
aaaadaa
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
10 b a
acaabcabba
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
aaaabaabba
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
