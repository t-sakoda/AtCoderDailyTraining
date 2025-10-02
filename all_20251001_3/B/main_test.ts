import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
4
3 5
2 -6
-5 0
314159265 123456789
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
8
-4
-5
437616054
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
