import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
4 3
3 3
5 1
2 4
1 10
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
12
15
20
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
1 4
100 100
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
10100
10200
10300
10400
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
