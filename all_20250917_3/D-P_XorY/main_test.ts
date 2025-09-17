import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "9 3",
  ]), [
    // "0.555555555555555555555555555555"
    "0.5555555555555556",
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "13 6",
  ]), [
    "0"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "10 3",
  ]), [
    "0.5"
  ].join("\n"));
});
