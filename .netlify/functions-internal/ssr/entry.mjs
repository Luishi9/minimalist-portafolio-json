import { renderers } from './renderers.mjs';
import { manifest } from './manifest_C7LIs9g5.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BT8mL7gQ.mjs');
const _page1 = () => import('./chunks/alert_CNKU6uWG.mjs');
const _page2 = () => import('./chunks/index_54rW7dlm.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.6.1_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/alert.astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "ab8e2d9c-4c3d-4fe5-b376-93e61cd67adc"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
