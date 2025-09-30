import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "3",
    "2 3 5",
  ]), [
    "4"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "8",
    "3 1 4 5 9 2 6 8",
  ]), [
    "7"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "16",
    "152 153 154 147 148 149 158 159 160 155 156 157 144 145 146 150",
  ]), [
    "151"
  ].join("\n"));
});
