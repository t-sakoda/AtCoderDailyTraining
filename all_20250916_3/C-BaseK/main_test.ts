import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "2",
    "1011 10100"
  ]), [
    "220"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "7",
    "123 456",
  ]), [
    "15642"
  ].join("\n"));
});
