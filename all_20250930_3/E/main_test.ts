import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3
1 3
3 1
2 2
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
2 3 1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
2
1 3
2 6
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1 2
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});


Deno.test(function addTest() {
  const input = `
4
999999999 1000000000
333333333 999999999
1000000000 999999997
999999998 1000000000
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3 1 4 2
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

