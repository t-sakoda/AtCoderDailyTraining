import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "1000",
  ]), [
    "10"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "50",
  ]), [
    "0.5"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "3141",
  ]), [
    "31.41"
  ].join("\n"));
});
