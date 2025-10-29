import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
abcdef
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
badcfe
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
aaaa
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
aaaa
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
atcoderbeginnercontest
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
taocedbrgeniencrnoetts
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

