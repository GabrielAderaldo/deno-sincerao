/**
 * Enum de tipos primitivos seguros para validação runtime.
 * Compatível com `typeof` do JavaScript, mas usado de forma estrita.
 * 
 * Este enum deve ser usado com a função `isReallyThisTypeOf` para garantir
 * que você está validando contra um tipo permitido e com regras específicas.
 * 
 * Obs: Se você tentar validar algo fora dessa lista, não será aceito (de propósito).
 * 
 * @readonly
 * @enum {string}
 * 
 * @example
 * import { TYPES } from "./types.ts";
 * 
 * const isNameValid = isReallyThisTypeOf("Gabriel", TYPES.STRING);
 */
export enum TYPES {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  OBJECT = 'object',
  FUNCTION = 'function',
  SYMBOL = 'symbol',
  BIGINT = 'bigint',
}
