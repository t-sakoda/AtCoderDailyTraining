import { assertEquals } from "@std/assert";
import { Main } from "../E-Distribution/main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "3 4",
  ]), [
    "0.600000000000 0.800000000000"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "1 0",
  ]), [
    "1.000000000000 0.000000000000"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "246 402",
  ]), [
    "0.521964870245 0.852966983083"
  ].join("\n"));
});
