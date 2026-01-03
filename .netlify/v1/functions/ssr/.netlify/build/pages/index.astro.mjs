import { c as createComponent, d as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_j3K3mwhu.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BKIl1pTT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="max-w-4xl mx-auto mt-20 text-center px-4 mb-24"> <h1 class="text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
We Build <span class="text-blue-600">Digital Experiences</span> that Matter.
</h1> <p class="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
FirstLayer Digital transforms ideas into high-performance websites. 
				Fast, secure, and built for growth.
</p> <div class="flex justify-center gap-4"> <a href="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
Start a Project
</a> <a href="/about" class="bg-white text-slate-700 border border-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
Learn More
</a> </div> </section> <section class="bg-slate-50 py-20 border-t border-slate-200"> <div class="max-w-5xl mx-auto px-4"> <h2 class="text-3xl font-bold text-center text-slate-900 mb-12">Our Expertise</h2> <div class="grid md:grid-cols-3 gap-8"> <div class="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"> <div class="text-blue-600 text-4xl mb-4">⚡</div> <h3 class="text-xl font-bold text-slate-900 mb-3">Fast Development</h3> <p class="text-slate-600 leading-relaxed">
We build with Astro and React to ensure your site loads instantly, keeping your customers engaged.
</p> </div> <div class="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"> <div class="text-blue-600 text-4xl mb-4">📱</div> <h3 class="text-xl font-bold text-slate-900 mb-3">Mobile Responsive</h3> <p class="text-slate-600 leading-relaxed">
Your site will look perfect on every device, from massive desktop monitors to the smallest iPhone.
</p> </div> <div class="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"> <div class="text-blue-600 text-4xl mb-4">🔍</div> <h3 class="text-xl font-bold text-slate-900 mb-3">SEO Optimized</h3> <p class="text-slate-600 leading-relaxed">
Built-in best practices to help your business rank higher on Google and attract more local traffic.
</p> </div> </div> </div> </section> </main> ` })}`;
}, "C:/Users/kenny/Documents/FirstLayer Digital/Documents/first-layer-site/src/pages/index.astro", void 0);

const $$file = "C:/Users/kenny/Documents/FirstLayer Digital/Documents/first-layer-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
