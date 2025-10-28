import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
5
1 6
1 7
2
1 1
2
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
6
1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
8
1 5
1 1
1 1
1 9
2
2
1 2
2
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1
1
2
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
