import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
10
o-oooo---o
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
4
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
1
-
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
-1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
30
-o-o-oooo-oo-o-ooooooo--oooo-o
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
7
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
22
-o-o-oooo-oo-o-ooooooo
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
7
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
2
oo
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
-1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const dango = "o".repeat(2 * (10 ** 5));
  const input = `
${2 * (10 ** 5)}
${dango}
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
-1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});


Deno.test(function addTest() {
  const dango = "o".repeat(2 * (10 ** 5) - 1);
  const input = `
${2 * (10 ** 5)}
${dango}-
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
${2 * (10 ** 5) - 1}
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

