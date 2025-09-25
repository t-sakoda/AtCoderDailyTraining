import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "abc atcoder",
  ]), [
    "Yes"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "arc agc",
  ]), [
    "No"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "a aa",
  ]), [
    "Yes"
  ].join("\n"));
});
