import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "Takahashi Chokudai"
  ]), [
    "Takahashi san"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "K Eyence"
  ]), [
    "K san"
  ].join("\n"));
});
