import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "6",
  ]), [
    "3"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "2432902008176640000",
  ]), [
    "20"
  ].join("\n"));
});
