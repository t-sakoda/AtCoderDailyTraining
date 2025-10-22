import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
5
3 1 2
100 0 0
1000000 1000000 1000000
31 41 59
1000000000 10000 1
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
2
0
1000000
31
1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
