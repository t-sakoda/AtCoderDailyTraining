import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "5",
    "11/22"
  ]), [
    "Yes"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "1",
    "/",
  ]), [
    "Yes"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "4",
    "1/22",
  ]), [
    "No"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "5",
    "22/11",
  ]), [
    "No"
  ].join("\n"));
});
