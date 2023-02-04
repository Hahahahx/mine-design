import { spread as n, insert as r, template as o } from "solid-js/web";
const u = /* @__PURE__ */ o('<button class="m-10 btn "></button>', 2);
function c(e) {
  return (() => {
    const t = u.cloneNode(!0);
    return n(t, e, !1, !0), r(t, () => e.children), t;
  })();
}
export {
  c as Button
};
