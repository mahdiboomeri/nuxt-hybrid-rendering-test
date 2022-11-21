import { defineComponent, useSSRContext } from 'vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cat1",
  __ssrInlineRender: true,
  setup(__props) {
    console.log("log blog category 1");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`Category 1`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/category/cat1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cat1.59c4cb3d.mjs.map
