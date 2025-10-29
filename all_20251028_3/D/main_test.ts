import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
5 3
abc
aaaaa
xyz
a
def
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
aaaaa
abc
xyz
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
4 4
z
zyx
zzz
rbg
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
rbg
z
zyx
zzz
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
3 1
abc
arc
agc
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
abc
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
