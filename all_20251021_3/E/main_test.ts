import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
8 3
apzbqrcs
1 2 3 1 2 2 1 2
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
cszapqbr
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
2 1
aa
1 1
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
aa
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
