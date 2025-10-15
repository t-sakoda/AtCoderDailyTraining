import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
1 2 4 3 5
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
Yes
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
5 3 2 4 1
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
No
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
1 2 3 4 5
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
No
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
2 1 3 4 5
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
Yes
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
