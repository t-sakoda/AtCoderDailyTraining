import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
8 3 2
3 5 10 4 1 7 3 9
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
23
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
5 1 3
1000 1 10000 100 10
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
10101
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
15 5 2
401054171 63773035 986525245 157986893 799814573 139201145 649233932 351289844 409065258 406122133 957285954 529460482 21179081 795984182 727882733
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
3522058414
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

