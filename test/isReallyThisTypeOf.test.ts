import {
  isReallyThisTypeOf,
  TYPES,
} from "../deno-sincerao.ts";
import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";

// STRINGS
Deno.test("STRING válida (primitiva)", () => {
  assertEquals(isReallyThisTypeOf("Gabriel", TYPES.STRING), true);
});

Deno.test("STRING inválida (new String)", () => {
  assertEquals(isReallyThisTypeOf(new String("Gabriel"), TYPES.STRING), false);
});

Deno.test("STRING inválida (vazia)", () => {
  assertEquals(isReallyThisTypeOf("", TYPES.STRING), false);
});

Deno.test("STRING inválida (só espaços)", () => {
  assertEquals(isReallyThisTypeOf("     ", TYPES.STRING), false);
});

// NUMBERS
Deno.test("NUMBER válido", () => {
  assertEquals(isReallyThisTypeOf(123, TYPES.NUMBER), true);
});

Deno.test("NUMBER inválido (NaN)", () => {
  assertEquals(isReallyThisTypeOf(NaN, TYPES.NUMBER), false);
});

Deno.test("NUMBER inválido (Infinity)", () => {
  assertEquals(isReallyThisTypeOf(Infinity, TYPES.NUMBER), false);
});

// BOOLEAN
Deno.test("BOOLEAN verdadeiro", () => {
  assertEquals(isReallyThisTypeOf(true, TYPES.BOOLEAN), true);
});

Deno.test("BOOLEAN falso", () => {
  assertEquals(isReallyThisTypeOf(false, TYPES.BOOLEAN), true);
});

// OBJECT
Deno.test("OBJECT válido", () => {
  assertEquals(isReallyThisTypeOf({ nome: "Gabriel" }, TYPES.OBJECT), true);
});

Deno.test("OBJECT inválido (array)", () => {
  assertEquals(isReallyThisTypeOf(["não"], TYPES.OBJECT), false);
});

Deno.test("OBJECT inválido (null)", () => {
  assertEquals(isReallyThisTypeOf(null, TYPES.OBJECT), false);
});

// FUNCTION
Deno.test("FUNCTION válida", () => {
  assertEquals(isReallyThisTypeOf(() => {}, TYPES.FUNCTION), true);
});

// SYMBOL
Deno.test("SYMBOL válido", () => {
  assertEquals(isReallyThisTypeOf(Symbol("x"), TYPES.SYMBOL), true);
});

// BIGINT
Deno.test("BIGINT válido", () => {
  assertEquals(isReallyThisTypeOf(BigInt(10), TYPES.BIGINT), true);
});
