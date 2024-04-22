import { c as createAstro, d as createComponent, r as renderTemplate, e as renderHead } from '../astro_CdGMreOr.mjs';

const $$Astro = createAstro();
const $$Alert = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Alert;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderHead()}</head> <body> <h1>¡Hola, mundo!</h1> <button class="alert">¡Haz Click!</button>  </body> </html>`;
}, "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/pages/alert.astro", void 0);

const $$file = "C:/Users/Luis-Eduardo/Desktop/ASTRO/minimalist-portafolio-json/src/pages/alert.astro";
const $$url = "/alert";

export { $$Alert as default, $$file as file, $$url as url };
