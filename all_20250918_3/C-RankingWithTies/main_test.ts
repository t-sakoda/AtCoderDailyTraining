import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "4",
    "3 12 9 9",
  ]), [
    "4",
    "1",
    "2",
    "2",
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "3",
    "3 9 6",
  ]), [
    "3",
    "1",
    "2",
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "4",
    "100 100 100 100",
  ]), [
    "1",
    "1",
    "1",
    "1",
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "8",
    "87 87 87 88 41 38 41 38",
  ]), [
    "2",
    "2",
    "2",
    "1",
    "5",
    "7",
    "5",
    "7",
  ].join("\n"));
});
