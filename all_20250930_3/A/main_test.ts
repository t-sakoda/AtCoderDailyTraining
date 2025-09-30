import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "5",
    "1 4 4 4 2",
  ]), [
    "Yes"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "6",
    "2 4 4 2 2 4",
  ]), [
    "No"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "8",
    "1 4 2 5 7 7 7 2",
  ]), [
    "Yes"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "10",
    "1 2 3 4 5 6 7 8 9 10",
  ]), [
    "No"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "13",
    "1 1 1 1 1 1 1 1 1 1 1 1 1",
  ]), [
    "Yes"
  ].join("\n"));
});
