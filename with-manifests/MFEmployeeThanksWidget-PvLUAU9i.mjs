import { j as r } from "./HCMThanks__loadShare__react_mf_2_dom__loadShare__-DjJM2tHZ.mjs";
import { H as o } from "./HCMThanks__loadShare__react__loadShare__-f0QrFw1m.mjs";
import { u as n, A as l, M as m } from "./MFApp-CMoPSYk9.mjs";
function i(e) {
  return typeof e == "string" ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e) : !1;
}
const p = ({ id: e, onCreated: a }) => {
  const t = n("employees"), s = o.useCallback(() => i(e) ? t.getEmployeeByEmail(e) : t.getEmployee(e), [e, t]);
  return /* @__PURE__ */ r.jsx(l, { getEmployee: s });
}, E = ({ baseUrl: e }) => {
  const a = o.useMemo(() => new URLSearchParams(window.location.search).get("ExternalId"), []);
  return a ? /* @__PURE__ */ r.jsx(m, { baseUrl: e, children: /* @__PURE__ */ r.jsx(p, { id: a }) }) : null;
};
export {
  E as default
};
