import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_j3K3mwhu.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BKIl1pTT.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found | FirstLayer Digital" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"> <h1 class="text-9xl font-extrabold text-slate-200 mb-4">404</h1> <h2 class="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2> <p class="text-slate-600 mb-8 max-w-md">
Oops! The page you are looking for doesn't exist. It might have been moved or deleted.
</p> <a href="/" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
Go Back Home
</a> </div> ` })}`;
}, "C:/Users/kenny/Documents/FirstLayer Digital/Documents/first-layer-site/src/pages/404.astro", void 0);

const $$file = "C:/Users/kenny/Documents/FirstLayer Digital/Documents/first-layer-site/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
