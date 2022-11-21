import { u as useRoute } from '../server.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrInterpolate } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import '../../nitro/vercel.mjs';
import 'node-fetch-native/polyfill';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    console.log("log blog single page");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`Post Id: ${ssrInterpolate(unref(route).params.id)}`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...id_.fd7b7f93.mjs.map
