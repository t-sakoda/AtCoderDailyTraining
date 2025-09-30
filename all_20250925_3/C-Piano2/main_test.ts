import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "3 2",
    "3 2 5",
    "4 1",
  ]), [
    "Yes"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "3 2",
    "3 1 5",
    "4 2",
  ]), [
    "No"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "1 1",
    "1",
    "2",
  ]), [
    "No"
  ].join("\n"));
});
