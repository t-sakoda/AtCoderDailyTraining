import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "100 100 100",
    "Red",
  ]), [
    "100"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "20 30 10",
    "Blue",
  ]), [
    "20"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "37 39 93",
    "Blue",
  ]), [
    "37"
  ].join("\n"));
});
