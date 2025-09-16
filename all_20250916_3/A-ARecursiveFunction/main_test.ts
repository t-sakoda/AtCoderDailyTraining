import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "2"
  ]), [
    "2"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "3"
  ]), [
    "6"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "0"
  ]), [
    "1"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "10"
  ]), [
    "3628800"
  ].join("\n"));
});
