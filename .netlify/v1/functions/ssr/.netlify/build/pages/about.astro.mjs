import { c as createComponent, d as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_j3K3mwhu.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BKIl1pTT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us | FirstLayer Digital" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto mt-16 px-4"> <div class="text-center mb-16"> <h1 class="text-4xl font-bold text-slate-900 mb-4">Versatile Solutions, Engineered for Growth</h1> <p class="text-xl text-slate-600 max-w-2xl mx-auto">
We bridge the gap between custom engineering and user-friendly platforms. Whether you need a high-speed custom site or a powerful e-commerce store, we have you covered.
</p> </div> <div class="grid md:grid-cols-2 gap-12 items-start mb-20"> <div> <h2 class="text-2xl font-bold text-slate-900 mb-4">The Engineer's Advantage</h2> <p class="text-slate-600 mb-4 leading-relaxed">
Many agencies are limited to one tool. At FirstLayer Digital, we take a <strong>Computer Science approach</strong> to the entire web ecosystem. We don't just drag and drop; we configure, optimize, and engineer solutions that fit <em>your</em> specific business needs.
</p> <p class="text-slate-600 mb-4 leading-relaxed">
We specialize in setting up complex <strong>E-commerce</strong> environments, configuring <strong>Inventory Management</strong> systems, and building professional portfolios that stand out.
</p> <p class="text-slate-600 leading-relaxed font-medium">
Already have a site? We can optimize it. Need something new? We can build it. We bring technical precision to every platform we touch.
</p> </div> <div class="bg-slate-50 p-8 rounded-xl border border-slate-200"> <h3 class="font-bold text-slate-900 mb-4">Platforms We Master</h3> <div class="grid grid-cols-2 gap-4 text-slate-700 text-sm font-medium mb-6"> <div class="flex items-center"><span class="text-blue-500 mr-2">●</span> WordPress</div> <div class="flex items-center"><span class="text-green-500 mr-2">●</span> Shopify</div> <div class="flex items-center"><span class="text-purple-500 mr-2">●</span> Astro / Custom</div> <div class="flex items-center"><span class="text-black mr-2">●</span> Wix</div> <div class="flex items-center"><span class="text-slate-500 mr-2">●</span> Squarespace</div> <div class="flex items-center"><span class="text-blue-400 mr-2">●</span> Weebly</div> <div class="flex items-center"><span class="text-gray-800 mr-2">●</span> Square</div> <div class="flex items-center"><span class="text-orange-500 mr-2">●</span> Others on Request</div> </div> <h3 class="font-bold text-slate-900 mb-2 border-t border-slate-200 pt-4">Core Services</h3> <ul class="space-y-2 text-slate-600 text-sm"> <li class="flex items-start"> <span class="text-blue-500 mr-2">✓</span> E-commerce & Inventory Setup
</li> <li class="flex items-start"> <span class="text-blue-500 mr-2">✓</span> Professional Portfolios
</li> <li class="flex items-start"> <span class="text-blue-500 mr-2">✓</span> Business Site Migrations
</li> </ul> </div> </div> <div class="text-center bg-blue-600 rounded-2xl p-12 mb-20"> <h2 class="text-3xl font-bold text-white mb-4">Not sure which platform is right for you?</h2> <p class="text-blue-100 mb-8 max-w-xl mx-auto">
We can help you choose the best tool for your budget and goals.
</p> <a href="/contact" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors inline-block">
Book a Consultation
</a> </div> </main> ` })}`;
}, "C:/Users/kenny/Documents/FirstLayer Digital/Documents/first-layer-site/src/pages/about.astro", void 0);

const $$file = "C:/Users/kenny/Documents/FirstLayer Digital/Documents/first-layer-site/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
