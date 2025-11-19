import { g as i } from "./_commonjsHelpers-B4e78b8K.mjs";
import { H as _, i as c } from "./HCMThanks__mf_v__runtimeInit__mf_v__-CPaAOdwv.mjs";
function f(e, n) {
  for (var o = 0; o < n.length; o++) {
    const t = n[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in e)) {
          const a = Object.getOwnPropertyDescriptor(t, r);
          a && Object.defineProperty(e, r, a.get ? a : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const { loadShare: l } = c, { initPromise: m } = _, u = m.then((e) => l("react", {
  customShareInfo: { shareConfig: {
    singleton: !0,
    strictVersion: !1,
    requiredVersion: "^18.3.1"
  } }
})), d = await u.then((e) => e());
var s = d;
const g = /* @__PURE__ */ i(s), y = /* @__PURE__ */ f({
  __proto__: null,
  default: g
}, [s]);
export {
  s as H,
  y as R,
  g as m
};
