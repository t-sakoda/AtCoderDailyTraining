import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
3
3 50000001 50000002
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
100000012

  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
5
1 3 99999999 99999994 1000000
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
303999988
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
