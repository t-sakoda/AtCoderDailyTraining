import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "2048 2",
  ]), [
    "2100"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "1 15",
  ]), [
    "0"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "999 3",
  ]), [
    "1000"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "314159265358979 12",
  ]), [
    "314000000000000"
  ].join("\n"));
});
