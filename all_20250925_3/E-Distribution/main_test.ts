import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "3",
    "4 1 5",
    "3 10 100",
  ]), [
    "3",
    "7",
    "8",
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "4",
    "100 100 100 100",
    "1 1 1 1",
  ]), [
    "1",
    "1",
    "1",
    "1",
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "4",
    "1 2 3 4",
    "1 2 4 7",
  ]), [
    "1",
    "2",
    "4",
    "7"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "8",
    "84 87 78 16 94 36 87 93",
    "50 22 63 28 91 60 64 27",
  ]), [
    "50",
    "22",
    "63",
    "28",
    "44",
    "60",
    "64",
    "27",
  ].join("\n"));
});
