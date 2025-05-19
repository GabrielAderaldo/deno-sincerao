import { TYPES } from "./types.ts";

/**
 * -------------------------------------------
 *      isReallyThisTypeOf(value, type)
 * -------------------------------------------
 * 
 * Autor: Gabriel (mas com a ajuda absurda do ChatGPT porque, né, tempo é dinheiro e paciência é luxo).
 * 
 * 🧠 Propósito:
 * TypeScript é bonitinho na teoria, mas em tempo de execução ele tira férias. 
 * Essa função resolve esse abandono parental e verifica se o valor é REALMENTE do tipo que ele diz ser.
 * 
 * Porque sim, meu querido, o TypeScript deixa tu passar `new String("abc")` como se fosse string,
 * `NaN` como se fosse um number de verdade e até `undefined` escondido debaixo do tapete.
 * 
 * Então aqui a gente trata dado igual segurança de aeroporto: passou no scanner ou volta pro fim da fila.
 * 
 * @param {unknown} value - O bicho que você quer verificar.
 * @param {TYPES} type - O tipo que ele diz ser (e que vamos verificar se é mesmo).
 * @returns {boolean} true se for o tipo certo MESMO. false se for impostor.
 * 
 * @example
 * isReallyThisTypeOf("Gabriel", TYPES.STRING); // true
 * isReallyThisTypeOf(new String("Gabriel"), TYPES.STRING); // false, aqui não passa nem com reza
 * isReallyThisTypeOf(42, TYPES.NUMBER); // true
 * isReallyThisTypeOf(NaN, TYPES.NUMBER); // false, porque é um number com crise de identidade
 */
export function isReallyThisTypeOf(value: unknown, type: TYPES): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value !== type) return false;

  switch (type) {
    case TYPES.STRING:
      return typeof value === 'string' &&
             !(value as any instanceof String) &&
             Object.prototype.toString.call(value) === '[object String]' &&
             value.trim().length > 0;

    case TYPES.NUMBER:
      return typeof value === 'number' &&
             !isNaN(value) &&
             Number.isFinite(value);

    case TYPES.BOOLEAN:
      return typeof value === 'boolean';

    case TYPES.FUNCTION:
      return typeof value === 'function';

    case TYPES.SYMBOL:
      return typeof value === 'symbol';

    case TYPES.BIGINT:
      return typeof value === 'bigint';

    case TYPES.OBJECT:
      return typeof value === 'object' &&
             !Array.isArray(value) &&
             value !== null;

    default:
      return false;
  }
}