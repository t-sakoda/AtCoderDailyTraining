import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "214",
  ]), [
    "8"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "1",
  ]), [
    "4"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "126",
  ]), [
    "6"
  ].join("\n"));
});
