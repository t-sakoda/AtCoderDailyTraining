import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "4",
    "3 6 9 3"
  ]), [
    "8",
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "5",
    "1 1 1 1 1"
  ]), [
    "15",
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "8",
    "7 42 64 86 72 58 44 30",
  ]), [
    "22",
  ].join("\n"));
});
