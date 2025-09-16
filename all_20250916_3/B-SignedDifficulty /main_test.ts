import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "15.8"
  ]), [
    "15+"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "1.0"
  ]), [
    "1-"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "12.5"
  ]), [
    "12"
  ].join("\n"));
});
