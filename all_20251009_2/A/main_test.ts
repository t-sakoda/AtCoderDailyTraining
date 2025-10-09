import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
-1 -1
-1 2
3 2
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3 -1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
-60 -40
-60 -80
-20 -80
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
-20 -40
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

