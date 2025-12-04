import { j as r } from "./HCMThanks__loadShare__react_mf_2_dom__loadShare__-D2nP2U3y.mjs";
import { H as o } from "./HCMThanks__loadShare__react__loadShare__-oj8hoKOc.mjs";
import { u as n, A as l, M as i, H as m } from "./MFApp-CNi0jkeK.mjs";
function p(e) {
  return typeof e == "string" ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e) : !1;
}
const c = ({ id: e, onCreated: a }) => {
  const t = n("employees"), s = o.useCallback(() => p(e) ? t.getEmployeeByEmail(e) : t.getEmployee(e), [e, t]);
  return /* @__PURE__ */ r.jsx(l, { getEmployee: s });
}, g = ({ baseApiUrl: e }) => {
  const a = o.useMemo(() => new URLSearchParams(window.location.search).get("externalId"), [window.location.search]);
  return a ? /* @__PURE__ */ r.jsx(i, { baseApiUrl: e, children: /* @__PURE__ */ r.jsx(m, { children: /* @__PURE__ */ r.jsx(c, { id: a }) }) }) : null;
};
export {
  g as default
};
