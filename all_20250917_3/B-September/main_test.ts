import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(Main([
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ]), [
    "1"
  ].join("\n"));
});

Deno.test(function addTest() {
  assertEquals(Main([
    "ve",
    "inrtfa",
    "npccxva",
    "djiq",
    "lmbkktngaovl",
    "mlfiv",
    "fmbvcmuxuwggfq",
    "qgmtwxmb",
    "jii",
    "ts",
    "bfxrvs",
    "eqvy",
  ]), [
    "2"
  ].join("\n"));
});
