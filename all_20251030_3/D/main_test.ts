import { assertEquals } from "@std/assert";
import { Main } from "./main.ts";

Deno.test(function addTest() {
  const input = `
6 6
vgxgpu
amkxks
zhkbpp
hykink
esnuke
zplvfj
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
5 2
5 3
5 4
5 5
5 6
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
5 5
ezzzz
zkzzz
ezuzs
zzznz
zzzzs
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
5 5
4 4
3 3
2 2
1 1
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

Deno.test(function addTest() {
  const input = `
10 10
kseeusenuk
usesenesnn
kskekeeses
nesnusnkkn
snenuuenke
kukknkeuss
neunnennue
sknuessuku
nksneekknk
neeeuknenk
    `.split("\n").map((v) => v.trim()).filter((v) => v !== "");
  const output = `
9 3
8 3
7 3
6 3
5 3
  `.split("\n").map((v) => v.trim()).filter((v) => v !== "");

  assertEquals(Main(input), output.join("\n"));
});

