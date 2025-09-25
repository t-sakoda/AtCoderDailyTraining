import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "3",
    "1 1 1",
  ]), [
    "0"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "10",
    "2 2 4 1 1 1 4 2 2 1",
  ]), [
    "8"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "4",
    "1 1 3 2",
  ]), [
    "3"
  ].join("\n"));
});
