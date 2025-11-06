import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
8
1 3
1 1
1 4
3
2 1
3
1 5
3
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3
2
3
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
8
1 2
1 2
3
2 2
1 4
1 4
2 2
3
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
1
1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

