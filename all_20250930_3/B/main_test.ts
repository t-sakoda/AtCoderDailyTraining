import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "379",
  ]), [
    "793 937"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "919",
  ]), [
    "199 991"
  ].join("\n"));
});
