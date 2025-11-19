import { H as x } from "./HCMThanks__loadShare__react__loadShare__-BfNi1N3x.mjs";
import { g as R } from "./_commonjsHelpers-B4e78b8K.mjs";
import { H as v, i as y } from "./HCMThanks__mf_v__runtimeInit__mf_v__-CPaAOdwv.mjs";
var f = { exports: {} }, t = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var m;
function S() {
  if (m) return t;
  m = 1;
  var o = x, c = Symbol.for("react.element"), p = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(_, r, i) {
    var e, n = {}, s = null, u = null;
    i !== void 0 && (s = "" + i), r.key !== void 0 && (s = "" + r.key), r.ref !== void 0 && (u = r.ref);
    for (e in r) l.call(r, e) && !h.hasOwnProperty(e) && (n[e] = r[e]);
    if (_ && _.defaultProps) for (e in r = _.defaultProps, r) n[e] === void 0 && (n[e] = r[e]);
    return { $$typeof: c, type: _, key: s, ref: u, props: n, _owner: d.current };
  }
  return t.Fragment = p, t.jsx = a, t.jsxs = a, t;
}
f.exports = S();
var w = f.exports;
const { loadShare: O } = y, { initPromise: j } = v, k = j.then((o) => O("react-dom", {
  customShareInfo: { shareConfig: {
    singleton: !0,
    strictVersion: !1,
    requiredVersion: "^18.3.1"
  } }
})), E = await k.then((o) => o());
var C = E;
const I = /* @__PURE__ */ R(C);
export {
  C as H,
  I as R,
  w as j
};
