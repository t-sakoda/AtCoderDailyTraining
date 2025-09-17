import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "3 7",
    "abc",
    "abcdefg",
  ]), [
    "1"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "3 4",
    "abc",
    "aabc",

  ]), [
    "2"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "3 3",
    "abc",
    "xyz",
  ]), [
    "3"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "3 3",
    "aaa",
    "aaa",
  ]), [
    "0"
  ].join("\n"));
});
