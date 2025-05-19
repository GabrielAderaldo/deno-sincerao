# 🦖 deno-sincerao

> Um tapa na cara do TypeScript em tempo de execução.  
> Aqui é `string` de verdade, `number` que presta e `NaN` vai direto pro inferno.

---

## 💡 O que é isso?

O `deno-sincerao` é a minha tentativa de fazer o que o TypeScript **deveria fazer em runtime, mas não faz**.  
É uma função simples (por enquanto) que garante que valores são **realmente** do tipo que dizem ser.  
Não aceitamos falsos `string`, `number` de mentira (`NaN`), nem aquele `undefined` sorrateiro que passa batido no `typeof`.

Isso aqui nasceu da minha frustração ao perceber que o TS é firme... até o momento em que o código começa a rodar.  
Aí ele vira o fiscal de segurança que deixa passar gente com mochila suspeita.

---

## 🤖 Por que eu fiz isso?

Porque um dia, no meio da raiva com `new String()` sendo aceito como string, eu gritei:  
**"NÃO, AGORA VOU FAZER DO MEU JEITO!"**

A ideia nasceu comigo, **Gabriel**, mas teve o empurrão técnico do ChatGPT (sim, eu usei com gosto e sem vergonha).  
Eu escrevi, revisei, coloquei meu veneno, e agora tô abrindo pro mundo.

---

## 🙏 Contribuições? POR FAVOR.

Eu **não sou especialista em TypeScript**, mas eu sou teimoso.  
Pretendo expandir isso com:

- Mais validações refinadas
- Suporte a tipos compostos e customizados
- Um dia (quem sabe) **implementar um `guard let` igual ao do Swift**, com sintaxe própria e tudo

Se você manja mais que eu, **mande PR**, **corrija** as bobagens e **me ajude a deixar isso melhor**.  
E se você achar bug... **PELO AMOR DE DEUS, ARRUME**.

---

## 🚀 Instalação

Importe direto do Deno.land (versão 1.0.0 como exemplo):

```ts
import { isReallyThisTypeOf, TYPES } from "https://deno.land/x/deno_sincerao@v1.0.0/mod.ts";
```

---

## ✅ Uso

```ts
isReallyThisTypeOf("Gabriel", TYPES.STRING); // true
isReallyThisTypeOf(new String("Gabriel"), TYPES.STRING); // false (isso aqui não cola)
isReallyThisTypeOf(42, TYPES.NUMBER); // true
isReallyThisTypeOf(NaN, TYPES.NUMBER); // false (vai embora)
isReallyThisTypeOf(undefined, TYPES.STRING); // false
```

---

## 🔎 Tipos suportados

```ts
enum TYPES {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  OBJECT = 'object',
  FUNCTION = 'function',
  SYMBOL = 'symbol',
  BIGINT = 'bigint',
}
```

Cada tipo passa por uma validação real, não só o `typeof`:

- `STRING` → só strings primitivas, sem `new String()`, nem vazias ou com espaço
- `NUMBER` → precisa ser `number` real, sem `NaN`, sem `Infinity`
- `OBJECT` → só objetos simples, não arrays, nem `null`
- E assim por diante...

---

## 😎 Filosofia por trás

**TypeScript é útil. Mas não é perfeito.**  
Em runtime, ele confia demais. Aqui, a confiança é conquistada — e testada.

Esse projeto é pequeno, mas nasceu pra crescer.  
E um dia, quem sabe, pode virar um mini framework de validações, ou pelo menos te salvar de bugs bestas.

---

## 🙌 Feito por Gabriel, com ajuda técnica do ChatGPT, e uma dose generosa de ódio ao `typeof`.

---

## 📄 Licença

MIT — use, compartilhe, modifique, e se der bug, leia o código com carinho antes de xingar no Twitter.