import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "atcoder",
  ]), [
    "o"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "a",
  ]), [
    "a"
  ].join("\n"));
});
