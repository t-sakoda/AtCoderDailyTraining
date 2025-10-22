import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
400 500 600 700 800
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
ABCDE
BCDE
ACDE
ABDE
ABCE
ABCD
CDE
BDE
ADE
BCE
ACE
BCD
ABE
ACD
ABD
ABC
DE
CE
BE
CD
AE
BD
AD
BC
AC
AB
E
D
C
B
A
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
800 800 900 900 1000
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
ABCDE
ACDE
BCDE
ABCE
ABDE
ABCD
CDE
ACE
ADE
BCE
BDE
ABE
ACD
BCD
ABC
ABD
CE
DE
AE
BE
CD
AC
AD
BC
BD
AB
E
C
D
A
B
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
128 256 512 1024 2048
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
ABCDE
BCDE
ACDE
CDE
ABDE
BDE
ADE
DE
ABCE
BCE
ACE
CE
ABE
BE
AE
E
ABCD
BCD
ACD
CD
ABD
BD
AD
D
ABC
BC
AC
C
AB
B
A
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});
