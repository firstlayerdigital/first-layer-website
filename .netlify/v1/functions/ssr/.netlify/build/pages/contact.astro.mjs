import { c as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_j3K3mwhu.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BKIl1pTT.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-2xl mx-auto mt-16 px-4"> <h1 class="text-4xl font-bold text-slate-900 mb-6 text-center">Let's Work Together</h1> <p class="text-slate-600 text-center mb-10">
Tell us about your project. We'll get back to you within 24 hours.
</p> <form name="contact" method="POST" action="/success" data-netlify="true" netlify class="bg-white p-8 rounded-xl shadow-lg border border-slate-100"> <input type="hidden" name="form-name" value="contact"> <div class="mb-6"> <label for="name" class="block text-sm font-medium text-slate-700 mb-2">Name</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"> </div> <div class="mb-6"> <label for="email" class="block text-sm font-medium text-slate-700 mb-2">Email</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"> </div> <div class="mb-6"> <label for="message" class="block text-sm font-medium text-slate-700 mb-2">Project Details</label> <textarea id="message" name="message" rows="4" required class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"></textarea> </div> <button type="submit" class="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
Send Message
</button> </form> </main> ` })}`;
}, "C:/Users/kenny/Documents/FirstLayer Digital/Documents/first-layer-site/src/pages/contact.astro", void 0);

const $$file = "C:/Users/kenny/Documents/FirstLayer Digital/Documents/first-layer-site/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
