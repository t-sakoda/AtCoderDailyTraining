import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "4 50",
    "80 60 40 0"
  ]), [
    "2"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "3 90",
    "89 89 89"
  ]), [
    "3"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "2 22",
    "6 37"
  ]), [
    "1"
  ].join("\n"));
});
