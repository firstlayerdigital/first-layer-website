import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_j3K3mwhu.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BKIl1pTT.mjs';
export { renderers } from '../renderers.mjs';

const $$Success = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-2xl mx-auto mt-20 text-center"> <h1 class="text-4xl font-bold text-green-600 mb-4">Message Sent!</h1> <p class="text-xl text-slate-600 mb-8">Thanks for reaching out. We will be in touch shortly.</p> <a href="/" class="text-blue-600 underline">Return Home</a> </div> ` })}`;
}, "C:/Users/kenny/Documents/FirstLayer Digital/Documents/first-layer-site/src/pages/success.astro", void 0);

const $$file = "C:/Users/kenny/Documents/FirstLayer Digital/Documents/first-layer-site/src/pages/success.astro";
const $$url = "/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Success,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
