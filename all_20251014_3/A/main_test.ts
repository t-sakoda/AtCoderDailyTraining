import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
5
alice 31
bob 41
carol 5
dave 92
ellen 65
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
carol
dave
ellen
alice
bob
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
2
takahashi 1000000000
aoki 999999999
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
aoki
takahashi
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
