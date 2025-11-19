import { H as l, R as Qo, m as Pn } from "./HCMThanks__loadShare__react__loadShare__-BfNi1N3x.mjs";
import { H as jn, j as Qe, R as yi } from "./HCMThanks__loadShare__react_mf_2_dom__loadShare__-DdgCLszr.mjs";
import { g as Jo } from "./_commonjsHelpers-B4e78b8K.mjs";
function Da(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Da(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function I() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Da(e)) && (n && (n += " "), n += t);
  return n;
}
function An() {
  return typeof window < "u";
}
function Dt(e) {
  return Yo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Fe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function xt(e) {
  var t;
  return (t = (Yo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Yo(e) {
  return An() ? e instanceof Node || e instanceof Fe(e).Node : !1;
}
function _e(e) {
  return An() ? e instanceof Element || e instanceof Fe(e).Element : !1;
}
function Re(e) {
  return An() ? e instanceof HTMLElement || e instanceof Fe(e).HTMLElement : !1;
}
function Eo(e) {
  return !An() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Fe(e).ShadowRoot;
}
const nl = /* @__PURE__ */ new Set(["inline", "contents"]);
function zr(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = Je(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !nl.has(o);
}
const ol = /* @__PURE__ */ new Set(["table", "td", "th"]);
function il(e) {
  return ol.has(Dt(e));
}
const al = [":popover-open", ":modal"];
function On(e) {
  return al.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const sl = ["transform", "translate", "scale", "rotate", "perspective"], ll = ["transform", "translate", "scale", "rotate", "perspective", "filter"], cl = ["paint", "layout", "strict", "content"];
function ei(e) {
  const t = Dn(), r = _e(e) ? Je(e) : e;
  return sl.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ll.some((n) => (r.willChange || "").includes(n)) || cl.some((n) => (r.contain || "").includes(n));
}
function ul(e) {
  let t = yt(e);
  for (; Re(t) && !gt(t); ) {
    if (ei(t))
      return t;
    if (On(t))
      return null;
    t = yt(t);
  }
  return null;
}
function Dn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const dl = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function gt(e) {
  return dl.has(Dt(e));
}
function Je(e) {
  return Fe(e).getComputedStyle(e);
}
function zn(e) {
  return _e(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function yt(e) {
  if (Dt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Eo(e) && e.host || // Fallback.
    xt(e)
  );
  return Eo(t) ? t.host : t;
}
function za(e) {
  const t = yt(e);
  return gt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Re(t) && zr(t) ? t : za(t);
}
function cr(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = za(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Fe(o);
  if (i) {
    const s = Ro(a);
    return t.concat(a, a.visualViewport || [], zr(o) ? o : [], s && r ? cr(s) : []);
  }
  return t.concat(o, cr(o, [], r));
}
function Ro(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const _i = Math.min, Mr = Math.max, xn = Math.round, ct = (e) => ({
  x: e,
  y: e
});
function Ia(e) {
  return e.split("-")[0];
}
function fl(e) {
  return e.split("-")[1];
}
function pl(e) {
  return e === "x" ? "y" : "x";
}
function vl(e) {
  return e === "y" ? "height" : "width";
}
const hl = /* @__PURE__ */ new Set(["top", "bottom"]);
function $a(e) {
  return hl.has(Ia(e)) ? "y" : "x";
}
function ml(e) {
  return pl($a(e));
}
function Fa(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: o
  } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r
  };
}
/*!
* tabbable 6.3.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var gl = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], wn = /* @__PURE__ */ gl.join(","), Ba = typeof Element > "u", hr = Ba ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Cn = !Ba && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Pr = function(t, r) {
  var n;
  r === void 0 && (r = !0);
  var o = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), i = o === "" || o === "true", a = i || r && t && Pr(t.parentNode);
  return a;
}, bl = function(t) {
  var r, n = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "contenteditable");
  return n === "" || n === "true";
}, Wa = function(t, r, n) {
  if (Pr(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(wn));
  return r && hr.call(t, wn) && o.unshift(t), o = o.filter(n), o;
}, Sn = function(t, r, n) {
  for (var o = [], i = Array.from(t); i.length; ) {
    var a = i.shift();
    if (!Pr(a, !1))
      if (a.tagName === "SLOT") {
        var s = a.assignedElements(), u = s.length ? s : a.children, c = Sn(u, !0, n);
        n.flatten ? o.push.apply(o, c) : o.push({
          scopeParent: a,
          candidates: c
        });
      } else {
        var d = hr.call(a, wn);
        d && n.filter(a) && (r || !t.includes(a)) && o.push(a);
        var f = a.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(a), h = !Pr(f, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
        if (f && h) {
          var p = Sn(f === !0 ? a.children : f.children, !0, n);
          n.flatten ? o.push.apply(o, p) : o.push({
            scopeParent: a,
            candidates: p
          });
        } else
          i.unshift.apply(i, a.children);
      }
  }
  return o;
}, Ha = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Va = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || bl(t)) && !Ha(t) ? 0 : t.tabIndex;
}, yl = function(t, r) {
  var n = Va(t);
  return n < 0 && r && !Ha(t) ? 0 : n;
}, _l = function(t, r) {
  return t.tabIndex === r.tabIndex ? t.documentOrder - r.documentOrder : t.tabIndex - r.tabIndex;
}, qa = function(t) {
  return t.tagName === "INPUT";
}, xl = function(t) {
  return qa(t) && t.type === "hidden";
}, wl = function(t) {
  var r = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return r;
}, Cl = function(t, r) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === r)
      return t[n];
}, Sl = function(t) {
  if (!t.name)
    return !0;
  var r = t.form || Cn(t), n = function(s) {
    return r.querySelectorAll('input[type="radio"][name="' + s + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = n(window.CSS.escape(t.name));
  else
    try {
      o = n(t.name);
    } catch (a) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
    }
  var i = Cl(o, t.form);
  return !i || i === t;
}, El = function(t) {
  return qa(t) && t.type === "radio";
}, Rl = function(t) {
  return El(t) && !Sl(t);
}, kl = function(t) {
  var r, n = t && Cn(t), o = (r = n) === null || r === void 0 ? void 0 : r.host, i = !1;
  if (n && n !== t) {
    var a, s, u;
    for (i = !!((a = o) !== null && a !== void 0 && (s = a.ownerDocument) !== null && s !== void 0 && s.contains(o) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !i && o; ) {
      var c, d, f;
      n = Cn(o), o = (c = n) === null || c === void 0 ? void 0 : c.host, i = !!((d = o) !== null && d !== void 0 && (f = d.ownerDocument) !== null && f !== void 0 && f.contains(o));
    }
  }
  return i;
}, xi = function(t) {
  var r = t.getBoundingClientRect(), n = r.width, o = r.height;
  return n === 0 && o === 0;
}, Ll = function(t, r) {
  var n = r.displayCheck, o = r.getShadowRoot;
  if (n === "full-native" && "checkVisibility" in t) {
    var i = t.checkVisibility({
      // Checking opacity might be desirable for some use cases, but natively,
      // opacity zero elements _are_ focusable and tabbable.
      checkOpacity: !1,
      opacityProperty: !1,
      contentVisibilityAuto: !0,
      visibilityProperty: !0,
      // This is an alias for `visibilityProperty`. Contemporary browsers
      // support both. However, this alias has wider browser support (Chrome
      // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
      // we include it anyway.
      checkVisibilityCSS: !0
    });
    return !i;
  }
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var a = hr.call(t, "details>summary:first-of-type"), s = a ? t.parentElement : t;
  if (hr.call(s, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof o == "function") {
      for (var u = t; t; ) {
        var c = t.parentElement, d = Cn(t);
        if (c && !c.shadowRoot && o(c) === !0)
          return xi(t);
        t.assignedSlot ? t = t.assignedSlot : !c && d !== t.ownerDocument ? t = d.host : t = c;
      }
      t = u;
    }
    if (kl(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return xi(t);
  return !1;
}, Ml = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var r = t.parentElement; r; ) {
      if (r.tagName === "FIELDSET" && r.disabled) {
        for (var n = 0; n < r.children.length; n++) {
          var o = r.children.item(n);
          if (o.tagName === "LEGEND")
            return hr.call(r, "fieldset[disabled] *") ? !0 : !o.contains(t);
        }
        return !0;
      }
      r = r.parentElement;
    }
  return !1;
}, ko = function(t, r) {
  return !(r.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Pr(r) || xl(r) || Ll(r, t) || // For a details element with a summary, the summary element gets the focus
  wl(r) || Ml(r));
}, Lo = function(t, r) {
  return !(Rl(r) || Va(r) < 0 || !ko(t, r));
}, Nl = function(t) {
  var r = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, Ka = function(t) {
  var r = [], n = [];
  return t.forEach(function(o, i) {
    var a = !!o.scopeParent, s = a ? o.scopeParent : o, u = yl(s, a), c = a ? Ka(o.candidates) : s;
    u === 0 ? a ? r.push.apply(r, c) : r.push(s) : n.push({
      documentOrder: i,
      tabIndex: u,
      item: o,
      isScope: a,
      content: c
    });
  }), n.sort(_l).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(r);
}, In = function(t, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = Sn([t], r.includeContainer, {
    filter: Lo.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: Nl
  }) : n = Wa(t, r.includeContainer, Lo.bind(null, r)), Ka(n);
}, Tl = function(t, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = Sn([t], r.includeContainer, {
    filter: ko.bind(null, r),
    flatten: !0,
    getShadowRoot: r.getShadowRoot
  }) : n = Wa(t, r.includeContainer, ko.bind(null, r)), n;
}, Ua = function(t, r) {
  if (r = r || {}, !t)
    throw new Error("No node provided");
  return hr.call(t, wn) === !1 ? !1 : Lo(r, t);
};
function Za() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function Ga() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: r,
      version: n
    } = t;
    return r + "/" + n;
  }).join(" ") : navigator.userAgent;
}
function Pl() {
  return /apple/i.test(navigator.vendor);
}
function Mo() {
  const e = /android/i;
  return e.test(Za()) || e.test(Ga());
}
function jl() {
  return Ga().includes("jsdom/");
}
const wi = "data-floating-ui-focusable", Al = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function ar(e) {
  let t = e.activeElement;
  for (; ((r = t) == null || (r = r.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function Ie(e, t) {
  if (!e || !t)
    return !1;
  const r = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Eo(r)) {
    let n = t;
    for (; n; ) {
      if (e === n)
        return !0;
      n = n.parentNode || n.host;
    }
  }
  return !1;
}
function jt(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function uo(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const r = e;
  return r.target != null && t.contains(r.target);
}
function Ol(e) {
  return e.matches("html,body");
}
function nt(e) {
  return e?.ownerDocument || document;
}
function Dl(e) {
  return Re(e) && e.matches(Al);
}
function Ci(e) {
  return e ? e.getAttribute("role") === "combobox" && Dl(e) : !1;
}
function No(e) {
  return e ? e.hasAttribute(wi) ? e : e.querySelector("[" + wi + "]") || e : null;
}
function ur(e, t, r) {
  return r === void 0 && (r = !0), e.filter((o) => {
    var i;
    return o.parentId === t && (!r || ((i = o.context) == null ? void 0 : i.open));
  }).flatMap((o) => [o, ...ur(e, o.id, r)]);
}
function Si(e, t) {
  var r;
  let n = [], o = (r = e.find((i) => i.id === t)) == null ? void 0 : r.parentId;
  for (; o; ) {
    const i = e.find((a) => a.id === o);
    o = i?.parentId, i && (n = n.concat(i));
  }
  return n;
}
function fo(e) {
  e.preventDefault(), e.stopPropagation();
}
function zl(e) {
  return "nativeEvent" in e;
}
function Il(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Mo() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function $l(e) {
  return jl() ? !1 : !Mo() && e.width === 0 && e.height === 0 || Mo() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
var Fl = typeof document < "u", Bl = function() {
}, Ne = Fl ? l.useLayoutEffect : Bl;
const Wl = {
  ...Qo
};
function Ut(e) {
  const t = l.useRef(e);
  return Ne(() => {
    t.current = e;
  }), t;
}
const Hl = Wl.useInsertionEffect, Vl = Hl || ((e) => e());
function lt(e) {
  const t = l.useRef(() => {
  });
  return Vl(() => {
    t.current = e;
  }), l.useCallback(function() {
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...n);
  }, []);
}
const Ir = () => ({
  getShadowRoot: !0,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function Xa(e, t) {
  const r = In(e, Ir()), n = r.length;
  if (n === 0) return;
  const o = ar(nt(e)), i = r.indexOf(o), a = i === -1 ? t === 1 ? 0 : n - 1 : i + t;
  return r[a];
}
function Qa(e) {
  return Xa(nt(e).body, 1) || e;
}
function Ja(e) {
  return Xa(nt(e).body, -1) || e;
}
function Nr(e, t) {
  const r = t || e.currentTarget, n = e.relatedTarget;
  return !n || !Ie(r, n);
}
function ql(e) {
  In(e, Ir()).forEach((r) => {
    r.dataset.tabindex = r.getAttribute("tabindex") || "", r.setAttribute("tabindex", "-1");
  });
}
function Ei(e) {
  e.querySelectorAll("[data-tabindex]").forEach((r) => {
    const n = r.dataset.tabindex;
    delete r.dataset.tabindex, n ? r.setAttribute("tabindex", n) : r.removeAttribute("tabindex");
  });
}
function Ri(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const i = $a(t), a = ml(t), s = vl(a), u = Ia(t), c = i === "y", d = n.x + n.width / 2 - o.width / 2, f = n.y + n.height / 2 - o.height / 2, h = n[s] / 2 - o[s] / 2;
  let p;
  switch (u) {
    case "top":
      p = {
        x: d,
        y: n.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      p = {
        x: n.x + n.width,
        y: f
      };
      break;
    case "left":
      p = {
        x: n.x - o.width,
        y: f
      };
      break;
    default:
      p = {
        x: n.x,
        y: n.y
      };
  }
  switch (fl(t)) {
    case "start":
      p[a] -= h * (r && c ? -1 : 1);
      break;
    case "end":
      p[a] += h * (r && c ? -1 : 1);
      break;
  }
  return p;
}
const Kl = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = r, s = i.filter(Boolean), u = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let c = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = Ri(c, n, u), h = n, p = {}, g = 0;
  for (let y = 0; y < s.length; y++) {
    const {
      name: v,
      fn: x
    } = s[y], {
      x: b,
      y: _,
      data: S,
      reset: E
    } = await x({
      x: d,
      y: f,
      initialPlacement: n,
      placement: h,
      strategy: o,
      middlewareData: p,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = b ?? d, f = _ ?? f, p = {
      ...p,
      [v]: {
        ...p[v],
        ...S
      }
    }, E && g <= 50 && (g++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (c = E.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: f
    } = Ri(c, h, u)), y = -1);
  }
  return {
    x: d,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: p
  };
};
function Ya(e) {
  const t = Je(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = Re(e), i = o ? e.offsetWidth : r, a = o ? e.offsetHeight : n, s = xn(r) !== i || xn(n) !== a;
  return s && (r = i, n = a), {
    width: r,
    height: n,
    $: s
  };
}
function es(e) {
  return _e(e) ? e : e.contextElement;
}
function dr(e) {
  const t = es(e);
  if (!Re(t))
    return ct(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: i
  } = Ya(t);
  let a = (i ? xn(r.width) : r.width) / n, s = (i ? xn(r.height) : r.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const Ul = /* @__PURE__ */ ct(0);
function ts(e) {
  const t = Fe(e);
  return !Dn() || !t.visualViewport ? Ul : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Zl(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== Fe(e) ? !1 : t;
}
function jr(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), i = es(e);
  let a = ct(1);
  t && (n ? _e(n) && (a = dr(n)) : a = dr(e));
  const s = Zl(i, r, n) ? ts(i) : ct(0);
  let u = (o.left + s.x) / a.x, c = (o.top + s.y) / a.y, d = o.width / a.x, f = o.height / a.y;
  if (i) {
    const h = Fe(i), p = n && _e(n) ? Fe(n) : n;
    let g = h, y = Ro(g);
    for (; y && n && p !== g; ) {
      const v = dr(y), x = y.getBoundingClientRect(), b = Je(y), _ = x.left + (y.clientLeft + parseFloat(b.paddingLeft)) * v.x, S = x.top + (y.clientTop + parseFloat(b.paddingTop)) * v.y;
      u *= v.x, c *= v.y, d *= v.x, f *= v.y, u += _, c += S, g = Fe(y), y = Ro(g);
    }
  }
  return Fa({
    width: d,
    height: f,
    x: u,
    y: c
  });
}
function $n(e, t) {
  const r = zn(e).scrollLeft;
  return t ? t.left + r : jr(xt(e)).left + r;
}
function rs(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - $n(e, r), o = r.top + t.scrollTop;
  return {
    x: n,
    y: o
  };
}
function Gl(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const i = o === "fixed", a = xt(n), s = t ? On(t.floating) : !1;
  if (n === a || s && i)
    return r;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ct(1);
  const d = ct(0), f = Re(n);
  if ((f || !f && !i) && ((Dt(n) !== "body" || zr(a)) && (u = zn(n)), Re(n))) {
    const p = jr(n);
    c = dr(n), d.x = p.x + n.clientLeft, d.y = p.y + n.clientTop;
  }
  const h = a && !f && !i ? rs(a, u) : ct(0);
  return {
    width: r.width * c.x,
    height: r.height * c.y,
    x: r.x * c.x - u.scrollLeft * c.x + d.x + h.x,
    y: r.y * c.y - u.scrollTop * c.y + d.y + h.y
  };
}
function Xl(e) {
  return Array.from(e.getClientRects());
}
function Ql(e) {
  const t = xt(e), r = zn(e), n = e.ownerDocument.body, o = Mr(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = Mr(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -r.scrollLeft + $n(e);
  const s = -r.scrollTop;
  return Je(n).direction === "rtl" && (a += Mr(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
const ki = 25;
function Jl(e, t) {
  const r = Fe(e), n = xt(e), o = r.visualViewport;
  let i = n.clientWidth, a = n.clientHeight, s = 0, u = 0;
  if (o) {
    i = o.width, a = o.height;
    const d = Dn();
    (!d || d && t === "fixed") && (s = o.offsetLeft, u = o.offsetTop);
  }
  const c = $n(n);
  if (c <= 0) {
    const d = n.ownerDocument, f = d.body, h = getComputedStyle(f), p = d.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, g = Math.abs(n.clientWidth - f.clientWidth - p);
    g <= ki && (i -= g);
  } else c <= ki && (i += c);
  return {
    width: i,
    height: a,
    x: s,
    y: u
  };
}
const Yl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ec(e, t) {
  const r = jr(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, i = Re(e) ? dr(e) : ct(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, u = o * i.x, c = n * i.y;
  return {
    width: a,
    height: s,
    x: u,
    y: c
  };
}
function Li(e, t, r) {
  let n;
  if (t === "viewport")
    n = Jl(e, r);
  else if (t === "document")
    n = Ql(xt(e));
  else if (_e(t))
    n = ec(t, r);
  else {
    const o = ts(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Fa(n);
}
function ns(e, t) {
  const r = yt(e);
  return r === t || !_e(r) || gt(r) ? !1 : Je(r).position === "fixed" || ns(r, t);
}
function tc(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = cr(e, [], !1).filter((s) => _e(s) && Dt(s) !== "body"), o = null;
  const i = Je(e).position === "fixed";
  let a = i ? yt(e) : e;
  for (; _e(a) && !gt(a); ) {
    const s = Je(a), u = ei(a);
    !u && s.position === "fixed" && (o = null), (i ? !u && !o : !u && s.position === "static" && !!o && Yl.has(o.position) || zr(a) && !u && ns(e, a)) ? n = n.filter((d) => d !== a) : o = s, a = yt(a);
  }
  return t.set(e, n), n;
}
function rc(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const a = [...r === "clippingAncestors" ? On(t) ? [] : tc(t, this._c) : [].concat(r), n], s = a[0], u = a.reduce((c, d) => {
    const f = Li(t, d, o);
    return c.top = Mr(f.top, c.top), c.right = _i(f.right, c.right), c.bottom = _i(f.bottom, c.bottom), c.left = Mr(f.left, c.left), c;
  }, Li(t, s, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function nc(e) {
  const {
    width: t,
    height: r
  } = Ya(e);
  return {
    width: t,
    height: r
  };
}
function oc(e, t, r) {
  const n = Re(t), o = xt(t), i = r === "fixed", a = jr(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = ct(0);
  function c() {
    u.x = $n(o);
  }
  if (n || !n && !i)
    if ((Dt(t) !== "body" || zr(o)) && (s = zn(t)), n) {
      const p = jr(t, !0, i, t);
      u.x = p.x + t.clientLeft, u.y = p.y + t.clientTop;
    } else o && c();
  i && !n && o && c();
  const d = o && !n && !i ? rs(o, s) : ct(0), f = a.left + s.scrollLeft - u.x - d.x, h = a.top + s.scrollTop - u.y - d.y;
  return {
    x: f,
    y: h,
    width: a.width,
    height: a.height
  };
}
function po(e) {
  return Je(e).position === "static";
}
function Mi(e, t) {
  if (!Re(e) || Je(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return xt(e) === r && (r = r.ownerDocument.body), r;
}
function os(e, t) {
  const r = Fe(e);
  if (On(e))
    return r;
  if (!Re(e)) {
    let o = yt(e);
    for (; o && !gt(o); ) {
      if (_e(o) && !po(o))
        return o;
      o = yt(o);
    }
    return r;
  }
  let n = Mi(e, t);
  for (; n && il(n) && po(n); )
    n = Mi(n, t);
  return n && gt(n) && po(n) && !ei(n) ? r : n || ul(e) || r;
}
const ic = async function(e) {
  const t = this.getOffsetParent || os, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: oc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function ac(e) {
  return Je(e).direction === "rtl";
}
const sc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gl,
  getDocumentElement: xt,
  getClippingRect: rc,
  getOffsetParent: os,
  getElementRects: ic,
  getClientRects: Xl,
  getDimensions: nc,
  getScale: dr,
  isElement: _e,
  isRTL: ac
}, lc = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: sc,
    ...r
  }, i = {
    ...o.platform,
    _c: n
  };
  return Kl(e, t, {
    ...o,
    platform: i
  });
};
var cc = typeof document < "u", uc = function() {
}, gn = cc ? l.useLayoutEffect : uc;
function En(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!En(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const i = o[n];
      if (!(i === "_owner" && e.$$typeof) && !En(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function is(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ni(e, t) {
  const r = is(e);
  return Math.round(t * r) / r;
}
function vo(e) {
  const t = l.useRef(e);
  return gn(() => {
    t.current = e;
  }), t;
}
function dc(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: u,
    open: c
  } = e, [d, f] = l.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = l.useState(n);
  En(h, n) || p(n);
  const [g, y] = l.useState(null), [v, x] = l.useState(null), b = l.useCallback((C) => {
    C !== w.current && (w.current = C, y(C));
  }, []), _ = l.useCallback((C) => {
    C !== L.current && (L.current = C, x(C));
  }, []), S = i || g, E = a || v, w = l.useRef(null), L = l.useRef(null), M = l.useRef(d), j = u != null, A = vo(u), P = vo(o), H = vo(c), T = l.useCallback(() => {
    if (!w.current || !L.current)
      return;
    const C = {
      placement: t,
      strategy: r,
      middleware: h
    };
    P.current && (C.platform = P.current), lc(w.current, L.current, C).then((q) => {
      const B = {
        ...q,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: H.current !== !1
      };
      R.current && !En(M.current, B) && (M.current = B, jn.flushSync(() => {
        f(B);
      }));
    });
  }, [h, t, r, P, H]);
  gn(() => {
    c === !1 && M.current.isPositioned && (M.current.isPositioned = !1, f((C) => ({
      ...C,
      isPositioned: !1
    })));
  }, [c]);
  const R = l.useRef(!1);
  gn(() => (R.current = !0, () => {
    R.current = !1;
  }), []), gn(() => {
    if (S && (w.current = S), E && (L.current = E), S && E) {
      if (A.current)
        return A.current(S, E, T);
      T();
    }
  }, [S, E, T, A, j]);
  const k = l.useMemo(() => ({
    reference: w,
    floating: L,
    setReference: b,
    setFloating: _
  }), [b, _]), N = l.useMemo(() => ({
    reference: S,
    floating: E
  }), [S, E]), D = l.useMemo(() => {
    const C = {
      position: r,
      left: 0,
      top: 0
    };
    if (!N.floating)
      return C;
    const q = Ni(N.floating, d.x), B = Ni(N.floating, d.y);
    return s ? {
      ...C,
      transform: "translate(" + q + "px, " + B + "px)",
      ...is(N.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: q,
      top: B
    };
  }, [r, s, N.floating, d.x, d.y]);
  return l.useMemo(() => ({
    ...d,
    update: T,
    refs: k,
    elements: N,
    floatingStyles: D
  }), [d, T, k, N, D]);
}
function fc(e) {
  const t = l.useRef(void 0), r = l.useCallback((n) => {
    const o = e.map((i) => {
      if (i != null) {
        if (typeof i == "function") {
          const a = i, s = a(n);
          return typeof s == "function" ? s : () => {
            a(null);
          };
        }
        return i.current = n, () => {
          i.current = null;
        };
      }
    });
    return () => {
      o.forEach((i) => i?.());
    };
  }, e);
  return l.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
const pc = "data-floating-ui-focusable", Ti = "active", Pi = "selected", vc = {
  ...Qo
};
let ji = !1, hc = 0;
const Ai = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + hc++
);
function mc() {
  const [e, t] = l.useState(() => ji ? Ai() : void 0);
  return Ne(() => {
    e == null && t(Ai());
  }, []), l.useEffect(() => {
    ji = !0;
  }, []), e;
}
const gc = vc.useId, ti = gc || mc;
function bc() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, r) {
      var n;
      (n = e.get(t)) == null || n.forEach((o) => o(r));
    },
    on(t, r) {
      e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(r);
    },
    off(t, r) {
      var n;
      (n = e.get(t)) == null || n.delete(r);
    }
  };
}
const yc = /* @__PURE__ */ l.createContext(null), _c = /* @__PURE__ */ l.createContext(null), as = () => {
  var e;
  return ((e = l.useContext(yc)) == null ? void 0 : e.id) || null;
}, ri = () => l.useContext(_c);
function Ar(e) {
  return "data-floating-ui-" + e;
}
function xc(e) {
  e.current !== -1 && (clearTimeout(e.current), e.current = -1);
}
let Oi = 0;
function er(e, t) {
  t === void 0 && (t = {});
  const {
    preventScroll: r = !1,
    cancelPrevious: n = !0,
    sync: o = !1
  } = t;
  n && cancelAnimationFrame(Oi);
  const i = () => e?.focus({
    preventScroll: r
  });
  o ? i() : Oi = requestAnimationFrame(i);
}
function wc(e) {
  return e?.ownerDocument || document;
}
const fr = {
  inert: /* @__PURE__ */ new WeakMap(),
  "aria-hidden": /* @__PURE__ */ new WeakMap(),
  none: /* @__PURE__ */ new WeakMap()
};
function Di(e) {
  return e === "inert" ? fr.inert : e === "aria-hidden" ? fr["aria-hidden"] : fr.none;
}
let cn = /* @__PURE__ */ new WeakSet(), un = {}, ho = 0;
const Cc = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, ss = (e) => e && (e.host || ss(e.parentNode)), Sc = (e, t) => t.map((r) => {
  if (e.contains(r))
    return r;
  const n = ss(r);
  return e.contains(n) ? n : null;
}).filter((r) => r != null);
function Ec(e, t, r, n) {
  const o = "data-floating-ui-inert", i = n ? "inert" : r ? "aria-hidden" : null, a = Sc(t, e), s = /* @__PURE__ */ new Set(), u = new Set(a), c = [];
  un[o] || (un[o] = /* @__PURE__ */ new WeakMap());
  const d = un[o];
  a.forEach(f), h(t), s.clear();
  function f(p) {
    !p || s.has(p) || (s.add(p), p.parentNode && f(p.parentNode));
  }
  function h(p) {
    !p || u.has(p) || [].forEach.call(p.children, (g) => {
      if (Dt(g) !== "script")
        if (s.has(g))
          h(g);
        else {
          const y = i ? g.getAttribute(i) : null, v = y !== null && y !== "false", x = Di(i), b = (x.get(g) || 0) + 1, _ = (d.get(g) || 0) + 1;
          x.set(g, b), d.set(g, _), c.push(g), b === 1 && v && cn.add(g), _ === 1 && g.setAttribute(o, ""), !v && i && g.setAttribute(i, i === "inert" ? "" : "true");
        }
    });
  }
  return ho++, () => {
    c.forEach((p) => {
      const g = Di(i), v = (g.get(p) || 0) - 1, x = (d.get(p) || 0) - 1;
      g.set(p, v), d.set(p, x), v || (!cn.has(p) && i && p.removeAttribute(i), cn.delete(p)), x || p.removeAttribute(o);
    }), ho--, ho || (fr.inert = /* @__PURE__ */ new WeakMap(), fr["aria-hidden"] = /* @__PURE__ */ new WeakMap(), fr.none = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ new WeakSet(), un = {});
  };
}
function zi(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const n = wc(e[0]).body;
  return Ec(e.concat(Array.from(n.querySelectorAll('[aria-live],[role="status"],output'))), n, t, r);
}
const Fn = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
}, Rn = /* @__PURE__ */ l.forwardRef(function(t, r) {
  const [n, o] = l.useState();
  Ne(() => {
    Pl() && o("button");
  }, []);
  const i = {
    ref: r,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: n,
    "aria-hidden": n ? void 0 : !0,
    [Ar("focus-guard")]: "",
    style: Fn
  };
  return /* @__PURE__ */ Qe.jsx("span", {
    ...t,
    ...i
  });
}), ls = /* @__PURE__ */ l.createContext(null), Ii = /* @__PURE__ */ Ar("portal");
function Rc(e) {
  e === void 0 && (e = {});
  const {
    id: t,
    root: r
  } = e, n = ti(), o = cs(), [i, a] = l.useState(null), s = l.useRef(null);
  return Ne(() => () => {
    i?.remove(), queueMicrotask(() => {
      s.current = null;
    });
  }, [i]), Ne(() => {
    if (!n || s.current) return;
    const u = t ? document.getElementById(t) : null;
    if (!u) return;
    const c = document.createElement("div");
    c.id = n, c.setAttribute(Ii, ""), u.appendChild(c), s.current = c, a(c);
  }, [t, n]), Ne(() => {
    if (r === null || !n || s.current) return;
    let u = r || o?.portalNode;
    u && !Yo(u) && (u = u.current), u = u || document.body;
    let c = null;
    t && (c = document.createElement("div"), c.id = t, u.appendChild(c));
    const d = document.createElement("div");
    d.id = n, d.setAttribute(Ii, ""), u = c || u, u.appendChild(d), s.current = d, a(d);
  }, [t, r, n, o]), i;
}
function kc(e) {
  const {
    children: t,
    id: r,
    root: n,
    preserveTabOrder: o = !0
  } = e, i = Rc({
    id: r,
    root: n
  }), [a, s] = l.useState(null), u = l.useRef(null), c = l.useRef(null), d = l.useRef(null), f = l.useRef(null), h = a?.modal, p = a?.open, g = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!a && // Guards are only for non-modal focus management.
    !a.modal && // Don't render if unmount is transitioning.
    a.open && o && !!(n || i)
  );
  return l.useEffect(() => {
    if (!i || !o || h)
      return;
    function y(v) {
      i && Nr(v) && (v.type === "focusin" ? Ei : ql)(i);
    }
    return i.addEventListener("focusin", y, !0), i.addEventListener("focusout", y, !0), () => {
      i.removeEventListener("focusin", y, !0), i.removeEventListener("focusout", y, !0);
    };
  }, [i, o, h]), l.useEffect(() => {
    i && (p || Ei(i));
  }, [p, i]), /* @__PURE__ */ Qe.jsxs(ls.Provider, {
    value: l.useMemo(() => ({
      preserveTabOrder: o,
      beforeOutsideRef: u,
      afterOutsideRef: c,
      beforeInsideRef: d,
      afterInsideRef: f,
      portalNode: i,
      setFocusManagerState: s
    }), [o, i]),
    children: [g && i && /* @__PURE__ */ Qe.jsx(Rn, {
      "data-type": "outside",
      ref: u,
      onFocus: (y) => {
        if (Nr(y, i)) {
          var v;
          (v = d.current) == null || v.focus();
        } else {
          const x = a ? a.domReference : null, b = Ja(x);
          b?.focus();
        }
      }
    }), g && i && /* @__PURE__ */ Qe.jsx("span", {
      "aria-owns": i.id,
      style: Fn
    }), i && /* @__PURE__ */ jn.createPortal(t, i), g && i && /* @__PURE__ */ Qe.jsx(Rn, {
      "data-type": "outside",
      ref: c,
      onFocus: (y) => {
        if (Nr(y, i)) {
          var v;
          (v = f.current) == null || v.focus();
        } else {
          const x = a ? a.domReference : null, b = Qa(x);
          b?.focus(), a?.closeOnFocusOut && a?.onOpenChange(!1, y.nativeEvent, "focus-out");
        }
      }
    })]
  });
}
const cs = () => l.useContext(ls);
function $i(e) {
  return l.useMemo(() => (t) => {
    e.forEach((r) => {
      r && (r.current = t);
    });
  }, e);
}
const Lc = 20;
let At = [];
function ni() {
  At = At.filter((e) => e.isConnected);
}
function Mc(e) {
  ni(), e && Dt(e) !== "body" && (At.push(e), At.length > Lc && (At = At.slice(-20)));
}
function Fi() {
  return ni(), At[At.length - 1];
}
function Nc(e) {
  const t = Ir();
  return Ua(e, t) ? e : In(e, t)[0] || e;
}
function Bi(e, t) {
  var r;
  if (!t.current.includes("floating") && !((r = e.getAttribute("role")) != null && r.includes("dialog")))
    return;
  const n = Ir(), i = Tl(e, n).filter((s) => {
    const u = s.getAttribute("data-tabindex") || "";
    return Ua(s, n) || s.hasAttribute("data-tabindex") && !u.startsWith("-");
  }), a = e.getAttribute("tabindex");
  t.current.includes("floating") || i.length === 0 ? a !== "0" && e.setAttribute("tabindex", "0") : (a !== "-1" || e.hasAttribute("data-tabindex") && e.getAttribute("data-tabindex") !== "-1") && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
const Tc = /* @__PURE__ */ l.forwardRef(function(t, r) {
  return /* @__PURE__ */ Qe.jsx("button", {
    ...t,
    type: "button",
    ref: r,
    tabIndex: -1,
    style: Fn
  });
});
function Pc(e) {
  const {
    context: t,
    children: r,
    disabled: n = !1,
    order: o = ["content"],
    guards: i = !0,
    initialFocus: a = 0,
    returnFocus: s = !0,
    restoreFocus: u = !1,
    modal: c = !0,
    visuallyHiddenDismiss: d = !1,
    closeOnFocusOut: f = !0,
    outsideElementsInert: h = !1,
    getInsideElements: p = () => []
  } = e, {
    open: g,
    onOpenChange: y,
    events: v,
    dataRef: x,
    elements: {
      domReference: b,
      floating: _
    }
  } = t, S = lt(() => {
    var V;
    return (V = x.current.floatingContext) == null ? void 0 : V.nodeId;
  }), E = lt(p), w = typeof a == "number" && a < 0, L = Ci(b) && w, M = Cc(), j = M ? i : !0, A = !j || M && h, P = Ut(o), H = Ut(a), T = Ut(s), R = ri(), k = cs(), N = l.useRef(null), D = l.useRef(null), C = l.useRef(!1), q = l.useRef(!1), B = l.useRef(-1), F = l.useRef(-1), W = k != null, $ = No(_), ie = lt(function(V) {
    return V === void 0 && (V = $), V ? In(V, Ir()) : [];
  }), G = lt((V) => {
    const X = ie(V);
    return P.current.map((z) => b && z === "reference" ? b : $ && z === "floating" ? $ : X).filter(Boolean).flat();
  });
  l.useEffect(() => {
    if (n || !c) return;
    function V(z) {
      if (z.key === "Tab") {
        Ie($, ar(nt($))) && ie().length === 0 && !L && fo(z);
        const U = G(), Q = jt(z);
        P.current[0] === "reference" && Q === b && (fo(z), z.shiftKey ? er(U[U.length - 1]) : er(U[1])), P.current[1] === "floating" && Q === $ && z.shiftKey && (fo(z), er(U[0]));
      }
    }
    const X = nt($);
    return X.addEventListener("keydown", V), () => {
      X.removeEventListener("keydown", V);
    };
  }, [n, b, $, c, P, L, ie, G]), l.useEffect(() => {
    if (n || !_) return;
    function V(X) {
      const z = jt(X), Q = ie().indexOf(z);
      Q !== -1 && (B.current = Q);
    }
    return _.addEventListener("focusin", V), () => {
      _.removeEventListener("focusin", V);
    };
  }, [n, _, ie]), l.useEffect(() => {
    if (n || !f) return;
    function V() {
      q.current = !0, setTimeout(() => {
        q.current = !1;
      });
    }
    function X(Q) {
      const Y = Q.relatedTarget, ye = Q.currentTarget, ae = jt(Q);
      queueMicrotask(() => {
        const ue = S(), te = !(Ie(b, Y) || Ie(_, Y) || Ie(Y, _) || Ie(k?.portalNode, Y) || Y != null && Y.hasAttribute(Ar("focus-guard")) || R && (ur(R.nodesRef.current, ue).find((oe) => {
          var pe, ee;
          return Ie((pe = oe.context) == null ? void 0 : pe.elements.floating, Y) || Ie((ee = oe.context) == null ? void 0 : ee.elements.domReference, Y);
        }) || Si(R.nodesRef.current, ue).find((oe) => {
          var pe, ee, Oe;
          return [(pe = oe.context) == null ? void 0 : pe.elements.floating, No((ee = oe.context) == null ? void 0 : ee.elements.floating)].includes(Y) || ((Oe = oe.context) == null ? void 0 : Oe.elements.domReference) === Y;
        })));
        if (ye === b && $ && Bi($, P), u && ye !== b && !(ae != null && ae.isConnected) && ar(nt($)) === nt($).body) {
          Re($) && $.focus();
          const oe = B.current, pe = ie(), ee = pe[oe] || pe[pe.length - 1] || $;
          Re(ee) && ee.focus();
        }
        if (x.current.insideReactTree) {
          x.current.insideReactTree = !1;
          return;
        }
        (L || !c) && Y && te && !q.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        Y !== Fi() && (C.current = !0, y(!1, Q, "focus-out"));
      });
    }
    const z = !!(!R && k);
    function U() {
      xc(F), x.current.insideReactTree = !0, F.current = window.setTimeout(() => {
        x.current.insideReactTree = !1;
      });
    }
    if (_ && Re(b))
      return b.addEventListener("focusout", X), b.addEventListener("pointerdown", V), _.addEventListener("focusout", X), z && _.addEventListener("focusout", U, !0), () => {
        b.removeEventListener("focusout", X), b.removeEventListener("pointerdown", V), _.removeEventListener("focusout", X), z && _.removeEventListener("focusout", U, !0);
      };
  }, [n, b, _, $, c, R, k, y, f, u, ie, L, S, P, x]);
  const J = l.useRef(null), fe = l.useRef(null), ce = $i([J, k?.beforeInsideRef]), be = $i([fe, k?.afterInsideRef]);
  l.useEffect(() => {
    var V, X;
    if (n || !_) return;
    const z = Array.from((k == null || (V = k.portalNode) == null ? void 0 : V.querySelectorAll("[" + Ar("portal") + "]")) || []), Q = (X = (R ? Si(R.nodesRef.current, S()) : []).find((ae) => {
      var ue;
      return Ci(((ue = ae.context) == null ? void 0 : ue.elements.domReference) || null);
    })) == null || (X = X.context) == null ? void 0 : X.elements.domReference, Y = [_, Q, ...z, ...E(), N.current, D.current, J.current, fe.current, k?.beforeOutsideRef.current, k?.afterOutsideRef.current, P.current.includes("reference") || L ? b : null].filter((ae) => ae != null), ye = c || L ? zi(Y, !A, A) : zi(Y);
    return () => {
      ye();
    };
  }, [n, b, _, c, P, k, L, j, A, R, S, E]), Ne(() => {
    if (n || !Re($)) return;
    const V = nt($), X = ar(V);
    queueMicrotask(() => {
      const z = G($), U = H.current, Q = (typeof U == "number" ? z[U] : U.current) || $, Y = Ie($, X);
      !w && !Y && g && er(Q, {
        preventScroll: Q === $
      });
    });
  }, [n, g, $, w, G, H]), Ne(() => {
    if (n || !$) return;
    const V = nt($), X = ar(V);
    Mc(X);
    function z(Y) {
      let {
        reason: ye,
        event: ae,
        nested: ue
      } = Y;
      if (["hover", "safe-polygon"].includes(ye) && ae.type === "mouseleave" && (C.current = !0), ye === "outside-press")
        if (ue)
          C.current = !1;
        else if (Il(ae) || $l(ae))
          C.current = !1;
        else {
          let te = !1;
          document.createElement("div").focus({
            get preventScroll() {
              return te = !0, !1;
            }
          }), te ? C.current = !1 : C.current = !0;
        }
    }
    v.on("openchange", z);
    const U = V.createElement("span");
    U.setAttribute("tabindex", "-1"), U.setAttribute("aria-hidden", "true"), Object.assign(U.style, Fn), W && b && b.insertAdjacentElement("afterend", U);
    function Q() {
      if (typeof T.current == "boolean") {
        const Y = b || Fi();
        return Y && Y.isConnected ? Y : U;
      }
      return T.current.current || U;
    }
    return () => {
      v.off("openchange", z);
      const Y = ar(V), ye = Ie(_, Y) || R && ur(R.nodesRef.current, S(), !1).some((ue) => {
        var te;
        return Ie((te = ue.context) == null ? void 0 : te.elements.floating, Y);
      }), ae = Q();
      queueMicrotask(() => {
        const ue = Nc(ae);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        T.current && !C.current && Re(ue) && // If the focus moved somewhere else after mount, avoid returning focus
        // since it likely entered a different element which should be
        // respected: https://github.com/floating-ui/floating-ui/issues/2607
        (!(ue !== Y && Y !== V.body) || ye) && ue.focus({
          preventScroll: !0
        }), U.remove();
      });
    };
  }, [n, _, $, T, x, v, R, W, b, S]), l.useEffect(() => (queueMicrotask(() => {
    C.current = !1;
  }), () => {
    queueMicrotask(ni);
  }), [n]), Ne(() => {
    if (!n && k)
      return k.setFocusManagerState({
        modal: c,
        closeOnFocusOut: f,
        open: g,
        onOpenChange: y,
        domReference: b
      }), () => {
        k.setFocusManagerState(null);
      };
  }, [n, k, c, g, y, f, b]), Ne(() => {
    n || $ && Bi($, P);
  }, [n, $, P]);
  function ke(V) {
    return n || !d || !c ? null : /* @__PURE__ */ Qe.jsx(Tc, {
      ref: V === "start" ? N : D,
      onClick: (X) => y(!1, X.nativeEvent),
      children: typeof d == "string" ? d : "Dismiss"
    });
  }
  const Ce = !n && j && (c ? !L : !0) && (W || c);
  return /* @__PURE__ */ Qe.jsxs(Qe.Fragment, {
    children: [Ce && /* @__PURE__ */ Qe.jsx(Rn, {
      "data-type": "inside",
      ref: ce,
      onFocus: (V) => {
        if (c) {
          const z = G();
          er(o[0] === "reference" ? z[0] : z[z.length - 1]);
        } else if (k != null && k.preserveTabOrder && k.portalNode)
          if (C.current = !1, Nr(V, k.portalNode)) {
            const z = Qa(b);
            z?.focus();
          } else {
            var X;
            (X = k.beforeOutsideRef.current) == null || X.focus();
          }
      }
    }), !L && ke("start"), r, ke("end"), Ce && /* @__PURE__ */ Qe.jsx(Rn, {
      "data-type": "inside",
      ref: be,
      onFocus: (V) => {
        if (c)
          er(G()[0]);
        else if (k != null && k.preserveTabOrder && k.portalNode)
          if (f && (C.current = !0), Nr(V, k.portalNode)) {
            const z = Ja(b);
            z?.focus();
          } else {
            var X;
            (X = k.afterOutsideRef.current) == null || X.focus();
          }
      }
    })]
  });
}
let dn = 0;
const Wi = "--floating-ui-scrollbar-width";
function jc() {
  const e = Za(), t = /iP(hone|ad|od)|iOS/.test(e) || // iPads can claim to be MacIntel
  e === "MacIntel" && navigator.maxTouchPoints > 1, r = document.body.style, o = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight", i = window.innerWidth - document.documentElement.clientWidth, a = r.left ? parseFloat(r.left) : window.scrollX, s = r.top ? parseFloat(r.top) : window.scrollY;
  if (r.overflow = "hidden", r.setProperty(Wi, i + "px"), i && (r[o] = i + "px"), t) {
    var u, c;
    const d = ((u = window.visualViewport) == null ? void 0 : u.offsetLeft) || 0, f = ((c = window.visualViewport) == null ? void 0 : c.offsetTop) || 0;
    Object.assign(r, {
      position: "fixed",
      top: -(s - Math.floor(f)) + "px",
      left: -(a - Math.floor(d)) + "px",
      right: "0"
    });
  }
  return () => {
    Object.assign(r, {
      overflow: "",
      [o]: ""
    }), r.removeProperty(Wi), t && (Object.assign(r, {
      position: "",
      top: "",
      left: "",
      right: ""
    }), window.scrollTo(a, s));
  };
}
let Hi = () => {
};
const Ac = /* @__PURE__ */ l.forwardRef(function(t, r) {
  const {
    lockScroll: n = !1,
    ...o
  } = t;
  return Ne(() => {
    if (n)
      return dn++, dn === 1 && (Hi = jc()), () => {
        dn--, dn === 0 && Hi();
      };
  }, [n]), /* @__PURE__ */ Qe.jsx("div", {
    ref: r,
    ...o,
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...o.style
    }
  });
}), Oc = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Dc = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, Vi = (e) => {
  var t, r;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e?.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (r = e?.outsidePress) != null ? r : !0
  };
};
function zc(e, t) {
  t === void 0 && (t = {});
  const {
    open: r,
    onOpenChange: n,
    elements: o,
    dataRef: i
  } = e, {
    enabled: a = !0,
    escapeKey: s = !0,
    outsidePress: u = !0,
    outsidePressEvent: c = "pointerdown",
    referencePress: d = !1,
    referencePressEvent: f = "pointerdown",
    ancestorScroll: h = !1,
    bubbles: p,
    capture: g
  } = t, y = ri(), v = lt(typeof u == "function" ? u : () => !1), x = typeof u == "function" ? v : u, b = l.useRef(!1), {
    escapeKey: _,
    outsidePress: S
  } = Vi(p), {
    escapeKey: E,
    outsidePress: w
  } = Vi(g), L = l.useRef(!1), M = lt((R) => {
    var k;
    if (!r || !a || !s || R.key !== "Escape" || L.current)
      return;
    const N = (k = i.current.floatingContext) == null ? void 0 : k.nodeId, D = y ? ur(y.nodesRef.current, N) : [];
    if (!_ && (R.stopPropagation(), D.length > 0)) {
      let C = !0;
      if (D.forEach((q) => {
        var B;
        if ((B = q.context) != null && B.open && !q.context.dataRef.current.__escapeKeyBubbles) {
          C = !1;
          return;
        }
      }), !C)
        return;
    }
    n(!1, zl(R) ? R.nativeEvent : R, "escape-key");
  }), j = lt((R) => {
    var k;
    const N = () => {
      var D;
      M(R), (D = jt(R)) == null || D.removeEventListener("keydown", N);
    };
    (k = jt(R)) == null || k.addEventListener("keydown", N);
  }), A = lt((R) => {
    var k;
    const N = i.current.insideReactTree;
    i.current.insideReactTree = !1;
    const D = b.current;
    if (b.current = !1, c === "click" && D || N || typeof x == "function" && !x(R))
      return;
    const C = jt(R), q = "[" + Ar("inert") + "]", B = nt(o.floating).querySelectorAll(q);
    let F = _e(C) ? C : null;
    for (; F && !gt(F); ) {
      const G = yt(F);
      if (gt(G) || !_e(G))
        break;
      F = G;
    }
    if (B.length && _e(C) && !Ol(C) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !Ie(C, o.floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(B).every((G) => !Ie(F, G)))
      return;
    if (Re(C) && T) {
      const G = gt(C), J = Je(C), fe = /auto|scroll/, ce = G || fe.test(J.overflowX), be = G || fe.test(J.overflowY), ke = ce && C.clientWidth > 0 && C.scrollWidth > C.clientWidth, Ce = be && C.clientHeight > 0 && C.scrollHeight > C.clientHeight, V = J.direction === "rtl", X = Ce && (V ? R.offsetX <= C.offsetWidth - C.clientWidth : R.offsetX > C.clientWidth), z = ke && R.offsetY > C.clientHeight;
      if (X || z)
        return;
    }
    const W = (k = i.current.floatingContext) == null ? void 0 : k.nodeId, $ = y && ur(y.nodesRef.current, W).some((G) => {
      var J;
      return uo(R, (J = G.context) == null ? void 0 : J.elements.floating);
    });
    if (uo(R, o.floating) || uo(R, o.domReference) || $)
      return;
    const ie = y ? ur(y.nodesRef.current, W) : [];
    if (ie.length > 0) {
      let G = !0;
      if (ie.forEach((J) => {
        var fe;
        if ((fe = J.context) != null && fe.open && !J.context.dataRef.current.__outsidePressBubbles) {
          G = !1;
          return;
        }
      }), !G)
        return;
    }
    n(!1, R, "outside-press");
  }), P = lt((R) => {
    var k;
    const N = () => {
      var D;
      A(R), (D = jt(R)) == null || D.removeEventListener(c, N);
    };
    (k = jt(R)) == null || k.addEventListener(c, N);
  });
  l.useEffect(() => {
    if (!r || !a)
      return;
    i.current.__escapeKeyBubbles = _, i.current.__outsidePressBubbles = S;
    let R = -1;
    function k(B) {
      n(!1, B, "ancestor-scroll");
    }
    function N() {
      window.clearTimeout(R), L.current = !0;
    }
    function D() {
      R = window.setTimeout(
        () => {
          L.current = !1;
        },
        // 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
        // Only apply to WebKit for the test to remain 0ms.
        Dn() ? 5 : 0
      );
    }
    const C = nt(o.floating);
    s && (C.addEventListener("keydown", E ? j : M, E), C.addEventListener("compositionstart", N), C.addEventListener("compositionend", D)), x && C.addEventListener(c, w ? P : A, w);
    let q = [];
    return h && (_e(o.domReference) && (q = cr(o.domReference)), _e(o.floating) && (q = q.concat(cr(o.floating))), !_e(o.reference) && o.reference && o.reference.contextElement && (q = q.concat(cr(o.reference.contextElement)))), q = q.filter((B) => {
      var F;
      return B !== ((F = C.defaultView) == null ? void 0 : F.visualViewport);
    }), q.forEach((B) => {
      B.addEventListener("scroll", k, {
        passive: !0
      });
    }), () => {
      s && (C.removeEventListener("keydown", E ? j : M, E), C.removeEventListener("compositionstart", N), C.removeEventListener("compositionend", D)), x && C.removeEventListener(c, w ? P : A, w), q.forEach((B) => {
        B.removeEventListener("scroll", k);
      }), window.clearTimeout(R);
    };
  }, [i, o, s, x, c, r, n, h, a, _, S, M, E, j, A, w, P]), l.useEffect(() => {
    i.current.insideReactTree = !1;
  }, [i, x, c]);
  const H = l.useMemo(() => ({
    onKeyDown: M,
    ...d && {
      [Oc[f]]: (R) => {
        n(!1, R.nativeEvent, "reference-press");
      },
      ...f !== "click" && {
        onClick(R) {
          n(!1, R.nativeEvent, "reference-press");
        }
      }
    }
  }), [M, n, d, f]), T = l.useMemo(() => ({
    onKeyDown: M,
    onMouseDown() {
      b.current = !0;
    },
    onMouseUp() {
      b.current = !0;
    },
    [Dc[c]]: () => {
      i.current.insideReactTree = !0;
    }
  }), [M, c, i]);
  return l.useMemo(() => a ? {
    reference: H,
    floating: T
  } : {}, [a, H, T]);
}
function Ic(e) {
  const {
    open: t = !1,
    onOpenChange: r,
    elements: n
  } = e, o = ti(), i = l.useRef({}), [a] = l.useState(() => bc()), s = as() != null, [u, c] = l.useState(n.reference), d = lt((p, g, y) => {
    i.current.openEvent = p ? g : void 0, a.emit("openchange", {
      open: p,
      event: g,
      reason: y,
      nested: s
    }), r?.(p, g, y);
  }), f = l.useMemo(() => ({
    setPositionReference: c
  }), []), h = l.useMemo(() => ({
    reference: u || n.reference || null,
    floating: n.floating || null,
    domReference: n.reference
  }), [u, n.reference, n.floating]);
  return l.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: d,
    elements: h,
    events: a,
    floatingId: o,
    refs: f
  }), [t, d, h, a, o, f]);
}
function $c(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, r = Ic({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), n = e.rootContext || r, o = n.elements, [i, a] = l.useState(null), [s, u] = l.useState(null), d = o?.domReference || i, f = l.useRef(null), h = ri();
  Ne(() => {
    d && (f.current = d);
  }, [d]);
  const p = dc({
    ...e,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), g = l.useCallback((_) => {
    const S = _e(_) ? {
      getBoundingClientRect: () => _.getBoundingClientRect(),
      getClientRects: () => _.getClientRects(),
      contextElement: _
    } : _;
    u(S), p.refs.setReference(S);
  }, [p.refs]), y = l.useCallback((_) => {
    (_e(_) || _ === null) && (f.current = _, a(_)), (_e(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    _ !== null && !_e(_)) && p.refs.setReference(_);
  }, [p.refs]), v = l.useMemo(() => ({
    ...p.refs,
    setReference: y,
    setPositionReference: g,
    domReference: f
  }), [p.refs, y, g]), x = l.useMemo(() => ({
    ...p.elements,
    domReference: d
  }), [p.elements, d]), b = l.useMemo(() => ({
    ...p,
    ...n,
    refs: v,
    elements: x,
    nodeId: t
  }), [p, v, x, t, n]);
  return Ne(() => {
    n.dataRef.current.floatingContext = b;
    const _ = h?.nodesRef.current.find((S) => S.id === t);
    _ && (_.context = b);
  }), l.useMemo(() => ({
    ...p,
    context: b,
    refs: v,
    elements: x
  }), [p, v, x, b]);
}
function mo(e, t, r) {
  const n = /* @__PURE__ */ new Map(), o = r === "item";
  let i = e;
  if (o && e) {
    const {
      [Ti]: a,
      [Pi]: s,
      ...u
    } = e;
    i = u;
  }
  return {
    ...r === "floating" && {
      tabIndex: -1,
      [pc]: ""
    },
    ...i,
    ...t.map((a) => {
      const s = a ? a[r] : null;
      return typeof s == "function" ? e ? s(e) : null : s;
    }).concat(e).reduce((a, s) => (s && Object.entries(s).forEach((u) => {
      let [c, d] = u;
      if (!(o && [Ti, Pi].includes(c)))
        if (c.indexOf("on") === 0) {
          if (n.has(c) || n.set(c, []), typeof d == "function") {
            var f;
            (f = n.get(c)) == null || f.push(d), a[c] = function() {
              for (var h, p = arguments.length, g = new Array(p), y = 0; y < p; y++)
                g[y] = arguments[y];
              return (h = n.get(c)) == null ? void 0 : h.map((v) => v(...g)).find((v) => v !== void 0);
            };
          }
        } else
          a[c] = d;
    }), a), {})
  };
}
function Fc(e) {
  e === void 0 && (e = []);
  const t = e.map((s) => s?.reference), r = e.map((s) => s?.floating), n = e.map((s) => s?.item), o = l.useCallback(
    (s) => mo(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = l.useCallback(
    (s) => mo(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  ), a = l.useCallback(
    (s) => mo(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  );
  return l.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: a
  }), [o, i, a]);
}
const Bc = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function Wc(e, t) {
  var r, n;
  t === void 0 && (t = {});
  const {
    open: o,
    elements: i,
    floatingId: a
  } = e, {
    enabled: s = !0,
    role: u = "dialog"
  } = t, c = ti(), d = ((r = i.domReference) == null ? void 0 : r.id) || c, f = l.useMemo(() => {
    var b;
    return ((b = No(i.floating)) == null ? void 0 : b.id) || a;
  }, [i.floating, a]), h = (n = Bc.get(u)) != null ? n : u, g = as() != null, y = l.useMemo(() => h === "tooltip" || u === "label" ? {
    ["aria-" + (u === "label" ? "labelledby" : "describedby")]: o ? f : void 0
  } : {
    "aria-expanded": o ? "true" : "false",
    "aria-haspopup": h === "alertdialog" ? "dialog" : h,
    "aria-controls": o ? f : void 0,
    ...h === "listbox" && {
      role: "combobox"
    },
    ...h === "menu" && {
      id: d
    },
    ...h === "menu" && g && {
      role: "menuitem"
    },
    ...u === "select" && {
      "aria-autocomplete": "none"
    },
    ...u === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [h, f, g, o, d, u]), v = l.useMemo(() => {
    const b = {
      id: f,
      ...h && {
        role: h
      }
    };
    return h === "tooltip" || u === "label" ? b : {
      ...b,
      ...h === "menu" && {
        "aria-labelledby": d
      }
    };
  }, [h, f, d, u]), x = l.useCallback((b) => {
    let {
      active: _,
      selected: S
    } = b;
    const E = {
      role: "option",
      ..._ && {
        id: f + "-fui-option"
      }
    };
    switch (u) {
      case "select":
      case "combobox":
        return {
          ...E,
          "aria-selected": S
        };
    }
    return {};
  }, [f, u]);
  return l.useMemo(() => s ? {
    reference: y,
    floating: v,
    item: x
  } : {}, [s, y, v, x]);
}
const qi = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (t, r) => (r ? "-" : "") + t.toLowerCase());
function tr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Hc(e, t) {
  const [r, n] = l.useState(e);
  return e && !r && n(!0), l.useEffect(() => {
    if (!e && r) {
      const o = setTimeout(() => n(!1), t);
      return () => clearTimeout(o);
    }
  }, [e, r, t]), r;
}
function Vc(e, t) {
  t === void 0 && (t = {});
  const {
    open: r,
    elements: {
      floating: n
    }
  } = e, {
    duration: o = 250
  } = t, a = (typeof o == "number" ? o : o.close) || 0, [s, u] = l.useState("unmounted"), c = Hc(r, a);
  return !c && s === "close" && u("unmounted"), Ne(() => {
    if (n) {
      if (r) {
        u("initial");
        const d = requestAnimationFrame(() => {
          jn.flushSync(() => {
            u("open");
          });
        });
        return () => {
          cancelAnimationFrame(d);
        };
      }
      u("close");
    }
  }, [r, n]), {
    isMounted: c,
    status: s
  };
}
function qc(e, t) {
  t === void 0 && (t = {});
  const {
    initial: r = {
      opacity: 0
    },
    open: n,
    close: o,
    common: i,
    duration: a = 250
  } = t, s = e.placement, u = s.split("-")[0], c = l.useMemo(() => ({
    side: u,
    placement: s
  }), [u, s]), d = typeof a == "number", f = (d ? a : a.open) || 0, h = (d ? a : a.close) || 0, [p, g] = l.useState(() => ({
    ...tr(i, c),
    ...tr(r, c)
  })), {
    isMounted: y,
    status: v
  } = Vc(e, {
    duration: a
  }), x = Ut(r), b = Ut(n), _ = Ut(o), S = Ut(i);
  return Ne(() => {
    const E = tr(x.current, c), w = tr(_.current, c), L = tr(S.current, c), M = tr(b.current, c) || Object.keys(E).reduce((j, A) => (j[A] = "", j), {});
    if (v === "initial" && g((j) => ({
      transitionProperty: j.transitionProperty,
      ...L,
      ...E
    })), v === "open" && g({
      transitionProperty: Object.keys(M).map(qi).join(","),
      transitionDuration: f + "ms",
      ...L,
      ...M
    }), v === "close") {
      const j = w || E;
      g({
        transitionProperty: Object.keys(j).map(qi).join(","),
        transitionDuration: h + "ms",
        ...L,
        ...j
      });
    }
  }, [h, _, x, b, S, f, v, c]), {
    isMounted: y,
    styles: p
  };
}
var us = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        s && (i = o(i, n(s)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var a = "";
      for (var s in i)
        t.call(i, s) && i[s] && (a = o(a, s));
      return a;
    }
    function o(i, a) {
      return a ? i ? i + " " + a : i + a : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(us);
var Kc = us.exports;
const To = /* @__PURE__ */ Jo(Kc);
function Uc(e) {
  var t = e.children, r = e.prefixCls, n = e.id, o = e.overlayInnerStyle, i = e.bodyClassName, a = e.className, s = e.style;
  return /* @__PURE__ */ l.createElement("div", {
    className: To("".concat(r, "-content"), a),
    style: s
  }, /* @__PURE__ */ l.createElement("div", {
    className: To("".concat(r, "-inner"), i),
    id: n,
    role: "tooltip",
    style: o
  }, typeof t == "function" ? t() : t));
}
function Zt() {
  return Zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zt.apply(null, arguments);
}
function We(e) {
  "@babel/helpers - typeof";
  return We = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, We(e);
}
function Zc(e, t) {
  if (We(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (We(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ds(e) {
  var t = Zc(e, "string");
  return We(t) == "symbol" ? t : t + "";
}
function Me(e, t, r) {
  return (t = ds(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Ki(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ki(Object(r), !0).forEach(function(n) {
      Me(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ki(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Gc(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function kn(e, t) {
  if (e == null) return {};
  var r, n, o = Gc(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Xc(e) {
  if (Array.isArray(e)) return e;
}
function Qc(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, i, a, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!u && r.return != null && (a = r.return(), Object(a) !== a)) return;
      } finally {
        if (c) throw o;
      }
    }
    return s;
  }
}
function Po(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function fs(e, t) {
  if (e) {
    if (typeof e == "string") return Po(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Po(e, t) : void 0;
  }
}
function Jc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ne(e, t) {
  return Xc(e) || Qc(e, t) || fs(e, t) || Jc();
}
function _t() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var ps = { exports: {} }, se = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ui;
function Yc() {
  if (Ui) return se;
  Ui = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function y(v) {
    if (typeof v == "object" && v !== null) {
      var x = v.$$typeof;
      switch (x) {
        case e:
          switch (v = v.type, v) {
            case r:
            case o:
            case n:
            case c:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case a:
                case u:
                case h:
                case f:
                case i:
                  return v;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return se.ContextConsumer = a, se.ContextProvider = i, se.Element = e, se.ForwardRef = u, se.Fragment = r, se.Lazy = h, se.Memo = f, se.Portal = t, se.Profiler = o, se.StrictMode = n, se.Suspense = c, se.SuspenseList = d, se.isAsyncMode = function() {
    return !1;
  }, se.isConcurrentMode = function() {
    return !1;
  }, se.isContextConsumer = function(v) {
    return y(v) === a;
  }, se.isContextProvider = function(v) {
    return y(v) === i;
  }, se.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, se.isForwardRef = function(v) {
    return y(v) === u;
  }, se.isFragment = function(v) {
    return y(v) === r;
  }, se.isLazy = function(v) {
    return y(v) === h;
  }, se.isMemo = function(v) {
    return y(v) === f;
  }, se.isPortal = function(v) {
    return y(v) === t;
  }, se.isProfiler = function(v) {
    return y(v) === o;
  }, se.isStrictMode = function(v) {
    return y(v) === n;
  }, se.isSuspense = function(v) {
    return y(v) === c;
  }, se.isSuspenseList = function(v) {
    return y(v) === d;
  }, se.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === o || v === n || v === c || v === d || v === p || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === f || v.$$typeof === i || v.$$typeof === a || v.$$typeof === u || v.$$typeof === g || v.getModuleId !== void 0);
  }, se.typeOf = y, se;
}
ps.exports = Yc();
var go = ps.exports;
function eu(e, t, r) {
  var n = l.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var tu = Symbol.for("react.element"), ru = Symbol.for("react.transitional.element"), nu = Symbol.for("react.fragment");
function vs(e) {
  return (
    // Base object type
    e && We(e) === "object" && // React Element type
    (e.$$typeof === tu || e.$$typeof === ru) && // React Fragment type
    e.type === nu
  );
}
var ou = Number(l.version.split(".")[0]), oi = function(t, r) {
  typeof t == "function" ? t(r) : We(t) === "object" && t && "current" in t && (t.current = r);
}, hs = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var o = r.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    r.forEach(function(a) {
      oi(a, i);
    });
  };
}, ii = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return eu(function() {
    return hs.apply(void 0, r);
  }, r, function(o, i) {
    return o.length !== i.length || o.every(function(a, s) {
      return a !== i[s];
    });
  });
}, Bn = function(t) {
  var r, n;
  if (!t)
    return !1;
  if (ms(t) && ou >= 19)
    return !0;
  var o = go.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== go.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== go.ForwardRef);
};
function ms(e) {
  return /* @__PURE__ */ l.isValidElement(e) && !vs(e);
}
var ai = function(t) {
  if (t && ms(t)) {
    var r = t;
    return r.props.propertyIsEnumerable("ref") ? r.props.ref : r.ref;
  }
  return null;
}, gs = /* @__PURE__ */ l.createContext(null);
function iu(e) {
  if (Array.isArray(e)) return Po(e);
}
function au(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function su() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jo(e) {
  return iu(e) || au(e) || fs(e) || su();
}
var Zi = _t() ? l.useLayoutEffect : l.useEffect, $e = function(t, r) {
  var n = l.useRef(!0);
  Zi(function() {
    return t(n.current);
  }, r), Zi(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Gi = [];
function lu(e, t) {
  var r = l.useState(function() {
    if (!_t())
      return null;
    var g = document.createElement("div");
    return g;
  }), n = ne(r, 1), o = n[0], i = l.useRef(!1), a = l.useContext(gs), s = l.useState(Gi), u = ne(s, 2), c = u[0], d = u[1], f = a || (i.current ? void 0 : function(g) {
    d(function(y) {
      var v = [g].concat(jo(y));
      return v;
    });
  });
  function h() {
    o.parentElement || document.body.appendChild(o), i.current = !0;
  }
  function p() {
    var g;
    (g = o.parentElement) === null || g === void 0 || g.removeChild(o), i.current = !1;
  }
  return $e(function() {
    return e ? a ? a(h) : h() : p(), p;
  }, [e]), $e(function() {
    c.length && (c.forEach(function(g) {
      return g();
    }), d(Gi));
  }, [c]), [o, f];
}
function cu(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var Xi = "data-rc-order", Qi = "data-rc-priority", uu = "rc-util-key", Ao = /* @__PURE__ */ new Map();
function bs() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : uu;
}
function Wn(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function du(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function si(e) {
  return Array.from((Ao.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ys(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!_t())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, a = du(n), s = a === "prependQueue", u = document.createElement("style");
  u.setAttribute(Xi, a), s && i && u.setAttribute(Qi, "".concat(i)), r != null && r.nonce && (u.nonce = r?.nonce), u.innerHTML = e;
  var c = Wn(t), d = c.firstChild;
  if (n) {
    if (s) {
      var f = (t.styles || si(c)).filter(function(h) {
        if (!["prepend", "prependQueue"].includes(h.getAttribute(Xi)))
          return !1;
        var p = Number(h.getAttribute(Qi) || 0);
        return i >= p;
      });
      if (f.length)
        return c.insertBefore(u, f[f.length - 1].nextSibling), u;
    }
    c.insertBefore(u, d);
  } else
    c.appendChild(u);
  return u;
}
function _s(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Wn(t);
  return (t.styles || si(r)).find(function(n) {
    return n.getAttribute(bs(t)) === e;
  });
}
function Oo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = _s(e, t);
  if (r) {
    var n = Wn(t);
    n.removeChild(r);
  }
}
function fu(e, t) {
  var r = Ao.get(e);
  if (!r || !cu(document, r)) {
    var n = ys("", t), o = n.parentNode;
    Ao.set(e, o), e.removeChild(n);
  }
}
function xs(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Wn(r), o = si(n), i = K(K({}, r), {}, {
    styles: o
  });
  fu(n, i);
  var a = _s(t, i);
  if (a) {
    var s, u;
    if ((s = i.csp) !== null && s !== void 0 && s.nonce && a.nonce !== ((u = i.csp) === null || u === void 0 ? void 0 : u.nonce)) {
      var c;
      a.nonce = (c = i.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return a.innerHTML !== e && (a.innerHTML = e), a;
  }
  var d = ys(e, i);
  return d.setAttribute(bs(i), t), d;
}
function pu(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), r = document.createElement("div");
  r.id = t;
  var n = r.style;
  n.position = "absolute", n.left = "0", n.top = "0", n.width = "100px", n.height = "100px", n.overflow = "scroll";
  var o, i;
  if (e) {
    var a = getComputedStyle(e);
    n.scrollbarColor = a.scrollbarColor, n.scrollbarWidth = a.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), u = parseInt(s.width, 10), c = parseInt(s.height, 10);
    try {
      var d = u ? "width: ".concat(s.width, ";") : "", f = c ? "height: ".concat(s.height, ";") : "";
      xs(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(d, `
`).concat(f, `
}`), t);
    } catch (g) {
      console.error(g), o = u, i = c;
    }
  }
  document.body.appendChild(r);
  var h = e && o && !isNaN(o) ? o : r.offsetWidth - r.clientWidth, p = e && i && !isNaN(i) ? i : r.offsetHeight - r.clientHeight;
  return document.body.removeChild(r), Oo(t), {
    width: h,
    height: p
  };
}
function vu(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : pu(e);
}
function hu() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var mu = "rc-util-locker-".concat(Date.now()), Ji = 0;
function gu(e) {
  var t = !!e, r = l.useState(function() {
    return Ji += 1, "".concat(mu, "_").concat(Ji);
  }), n = ne(r, 1), o = n[0];
  $e(function() {
    if (t) {
      var i = vu(document.body).width, a = hu();
      xs(`
html body {
  overflow-y: hidden;
  `.concat(a ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), o);
    } else
      Oo(o);
    return function() {
      Oo(o);
    };
  }, [t, o]);
}
var bu = !1;
function yu(e) {
  return bu;
}
var Yi = function(t) {
  return t === !1 ? !1 : !_t() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, ws = /* @__PURE__ */ l.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, o = e.getContainer;
  e.debug;
  var i = e.autoDestroy, a = i === void 0 ? !0 : i, s = e.children, u = l.useState(r), c = ne(u, 2), d = c[0], f = c[1], h = d || r;
  l.useEffect(function() {
    (a || r) && f(r);
  }, [r, a]);
  var p = l.useState(function() {
    return Yi(o);
  }), g = ne(p, 2), y = g[0], v = g[1];
  l.useEffect(function() {
    var P = Yi(o);
    v(P ?? null);
  });
  var x = lu(h && !y), b = ne(x, 2), _ = b[0], S = b[1], E = y ?? _;
  gu(n && r && _t() && (E === _ || E === document.body));
  var w = null;
  if (s && Bn(s) && t) {
    var L = s;
    w = L.ref;
  }
  var M = ii(w, t);
  if (!h || !_t() || y === void 0)
    return null;
  var j = E === !1 || yu(), A = s;
  return t && (A = /* @__PURE__ */ l.cloneElement(s, {
    ref: M
  })), /* @__PURE__ */ l.createElement(gs.Provider, {
    value: S
  }, j ? A : /* @__PURE__ */ jn.createPortal(A, E));
}), Cs = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        s && (i = o(i, n(s)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var a = "";
      for (var s in i)
        t.call(i, s) && i[s] && (a = o(a, s));
      return a;
    }
    function o(i, a) {
      return a ? i ? i + " " + a : i + a : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Cs);
var _u = Cs.exports;
const pr = /* @__PURE__ */ Jo(_u);
function Do(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return Pn.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(Do(n)) : vs(n) && n.props ? r = r.concat(Do(n.props.children, t)) : r.push(n));
  }), r;
}
function Or(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function xu(e) {
  return e && We(e) === "object" && Or(e.nativeElement) ? e.nativeElement : Or(e) ? e : null;
}
function bn(e) {
  var t = xu(e);
  if (t)
    return t;
  if (e instanceof Pn.Component) {
    var r;
    return (r = yi.findDOMNode) === null || r === void 0 ? void 0 : r.call(yi, e);
  }
  return null;
}
var zo = /* @__PURE__ */ l.createContext(null);
function wu(e) {
  var t = e.children, r = e.onBatchResize, n = l.useRef(0), o = l.useRef([]), i = l.useContext(zo), a = l.useCallback(function(s, u, c) {
    n.current += 1;
    var d = n.current;
    o.current.push({
      size: s,
      element: u,
      data: c
    }), Promise.resolve().then(function() {
      d === n.current && (r?.(o.current), o.current = []);
    }), i?.(s, u, c);
  }, [r, i]);
  return /* @__PURE__ */ l.createElement(zo.Provider, {
    value: a
  }, t);
}
var Ss = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(o, i) {
      return o[0] === r ? (n = i, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), o = this.__entries__[n];
        return o && o[1];
      }, t.prototype.set = function(r, n) {
        var o = e(this.__entries__, r);
        ~o ? this.__entries__[o][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, o = e(n, r);
        ~o && n.splice(o, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var o = 0, i = this.__entries__; o < i.length; o++) {
          var a = i[o];
          r.call(n, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), Io = typeof window < "u" && typeof document < "u" && window.document === document, Ln = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Cu = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Ln) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Su = 2;
function Eu(e, t) {
  var r = !1, n = !1, o = 0;
  function i() {
    r && (r = !1, e()), n && s();
  }
  function a() {
    Cu(i);
  }
  function s() {
    var u = Date.now();
    if (r) {
      if (u - o < Su)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(a, t);
    o = u;
  }
  return s;
}
var Ru = 20, ku = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Lu = typeof MutationObserver < "u", Mu = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Eu(this.refresh.bind(this), Ru);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Io || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Lu ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Io || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, o = ku.some(function(i) {
        return !!~n.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Es = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var o = n[r];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, mr = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Ln;
}, Rs = Hn(0, 0, 0, 0);
function Mn(e) {
  return parseFloat(e) || 0;
}
function ea(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, o) {
    var i = e["border-" + o + "-width"];
    return n + Mn(i);
  }, 0);
}
function Nu(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
    var i = o[n], a = e["padding-" + i];
    r[i] = Mn(a);
  }
  return r;
}
function Tu(e) {
  var t = e.getBBox();
  return Hn(0, 0, t.width, t.height);
}
function Pu(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return Rs;
  var n = mr(e).getComputedStyle(e), o = Nu(n), i = o.left + o.right, a = o.top + o.bottom, s = Mn(n.width), u = Mn(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + i) !== t && (s -= ea(n, "left", "right") + i), Math.round(u + a) !== r && (u -= ea(n, "top", "bottom") + a)), !Au(e)) {
    var c = Math.round(s + i) - t, d = Math.round(u + a) - r;
    Math.abs(c) !== 1 && (s -= c), Math.abs(d) !== 1 && (u -= d);
  }
  return Hn(o.left, o.top, s, u);
}
var ju = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof mr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof mr(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Au(e) {
  return e === mr(e).document.documentElement;
}
function Ou(e) {
  return Io ? ju(e) ? Tu(e) : Pu(e) : Rs;
}
function Du(e) {
  var t = e.x, r = e.y, n = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return Es(a, {
    x: t,
    y: r,
    width: n,
    height: o,
    top: r,
    right: t + n,
    bottom: o + r,
    left: t
  }), a;
}
function Hn(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var zu = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Hn(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Ou(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Iu = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      var n = Du(r);
      Es(this, { target: t, contentRect: n });
    }
    return e;
  }()
), $u = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new Ss(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof mr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new zu(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof mr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new Iu(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), ks = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ss(), Ls = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = Mu.getInstance(), n = new $u(t, r, this);
      ks.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Ls.prototype[e] = function() {
    var t;
    return (t = ks.get(this))[e].apply(t, arguments);
  };
});
var Fu = function() {
  return typeof Ln.ResizeObserver < "u" ? Ln.ResizeObserver : Ls;
}(), Ot = /* @__PURE__ */ new Map();
function Bu(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = Ot.get(n)) === null || r === void 0 || r.forEach(function(o) {
      return o(n);
    });
  });
}
var Ms = new Fu(Bu);
function Wu(e, t) {
  Ot.has(e) || (Ot.set(e, /* @__PURE__ */ new Set()), Ms.observe(e)), Ot.get(e).add(t);
}
function Hu(e, t) {
  Ot.has(e) && (Ot.get(e).delete(t), Ot.get(e).size || (Ms.unobserve(e), Ot.delete(e)));
}
function li(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ta(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ds(n.key), n);
  }
}
function ci(e, t, r) {
  return t && ta(e.prototype, t), r && ta(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function $o(e, t) {
  return $o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, $o(e, t);
}
function ui(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && $o(e, t);
}
function Nn(e) {
  return Nn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Nn(e);
}
function Ns() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ns = function() {
    return !!e;
  })();
}
function Fo(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vu(e, t) {
  if (t && (We(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Fo(e);
}
function di(e) {
  var t = Ns();
  return function() {
    var r, n = Nn(e);
    if (t) {
      var o = Nn(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return Vu(this, r);
  };
}
var qu = /* @__PURE__ */ function(e) {
  ui(r, e);
  var t = di(r);
  function r() {
    return li(this, r), t.apply(this, arguments);
  }
  return ci(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(l.Component);
function Ku(e, t) {
  var r = e.children, n = e.disabled, o = l.useRef(null), i = l.useRef(null), a = l.useContext(zo), s = typeof r == "function", u = s ? r(o) : r, c = l.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), d = !s && /* @__PURE__ */ l.isValidElement(u) && Bn(u), f = d ? ai(u) : null, h = ii(f, o), p = function() {
    var x;
    return bn(o.current) || // Support `nativeElement` format
    (o.current && We(o.current) === "object" ? bn((x = o.current) === null || x === void 0 ? void 0 : x.nativeElement) : null) || bn(i.current);
  };
  l.useImperativeHandle(t, function() {
    return p();
  });
  var g = l.useRef(e);
  g.current = e;
  var y = l.useCallback(function(v) {
    var x = g.current, b = x.onResize, _ = x.data, S = v.getBoundingClientRect(), E = S.width, w = S.height, L = v.offsetWidth, M = v.offsetHeight, j = Math.floor(E), A = Math.floor(w);
    if (c.current.width !== j || c.current.height !== A || c.current.offsetWidth !== L || c.current.offsetHeight !== M) {
      var P = {
        width: j,
        height: A,
        offsetWidth: L,
        offsetHeight: M
      };
      c.current = P;
      var H = L === Math.round(E) ? E : L, T = M === Math.round(w) ? w : M, R = K(K({}, P), {}, {
        offsetWidth: H,
        offsetHeight: T
      });
      a?.(R, v, _), b && Promise.resolve().then(function() {
        b(R, v);
      });
    }
  }, []);
  return l.useEffect(function() {
    var v = p();
    return v && !n && Wu(v, y), function() {
      return Hu(v, y);
    };
  }, [o.current, n]), /* @__PURE__ */ l.createElement(qu, {
    ref: i
  }, d ? /* @__PURE__ */ l.cloneElement(u, {
    ref: h
  }) : u);
}
var Uu = /* @__PURE__ */ l.forwardRef(Ku), Zu = "rc-observer-key";
function Gu(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : Do(r);
  return n.map(function(o, i) {
    var a = o?.key || "".concat(Zu, "-").concat(i);
    return /* @__PURE__ */ l.createElement(Uu, Zt({}, e, {
      key: a,
      ref: i === 0 ? t : void 0
    }), o);
  });
}
var fi = /* @__PURE__ */ l.forwardRef(Gu);
fi.Collection = wu;
function Ts(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Xu(e) {
  return Ts(e) instanceof ShadowRoot;
}
function Bo(e) {
  return Xu(e) ? Ts(e) : null;
}
function st(e) {
  var t = l.useRef();
  t.current = e;
  var r = l.useCallback(function() {
    for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(i));
  }, []);
  return r;
}
function Qu() {
  var e = K({}, Qo);
  return e.useId;
}
var ra = 0, na = Qu();
const Ps = na ? (
  // Use React `useId`
  function(t) {
    var r = na();
    return t || r;
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var r = l.useState("ssr-id"), n = ne(r, 2), o = n[0], i = n[1];
    return l.useEffect(function() {
      var a = ra;
      ra += 1, i("rc_unique_".concat(a));
    }, []), t || o;
  }
), Ju = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e?.substr(0, 4));
};
var js = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        s && (i = o(i, n(s)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var a = "";
      for (var s in i)
        t.call(i, s) && i[s] && (a = o(a, s));
      return a;
    }
    function o(i, a) {
      return a ? i ? i + " " + a : i + a : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(js);
var Yu = js.exports;
const ed = /* @__PURE__ */ Jo(Yu);
var td = /* @__PURE__ */ l.createContext({}), rd = /* @__PURE__ */ function(e) {
  ui(r, e);
  var t = di(r);
  function r() {
    return li(this, r), t.apply(this, arguments);
  }
  return ci(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(l.Component);
function Wo(e) {
  var t = l.useRef(!1), r = l.useState(e), n = ne(r, 2), o = n[0], i = n[1];
  l.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function a(s, u) {
    u && t.current || i(s);
  }
  return [o, a];
}
function nd(e) {
  var t = l.useReducer(function(s) {
    return s + 1;
  }, 0), r = ne(t, 2), n = r[1], o = l.useRef(e), i = st(function() {
    return o.current;
  }), a = st(function(s) {
    o.current = typeof s == "function" ? s(o.current) : s, n();
  });
  return [i, a];
}
var Pt = "none", fn = "appear", pn = "enter", vn = "leave", oa = "none", rt = "prepare", sr = "start", lr = "active", pi = "end", As = "prepared";
function ia(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function od(e, t) {
  var r = {
    animationend: ia("Animation", "AnimationEnd"),
    transitionend: ia("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var id = od(_t(), typeof window < "u" ? window : {}), Os = {};
if (_t()) {
  var ad = document.createElement("div");
  Os = ad.style;
}
var hn = {};
function Ds(e) {
  if (hn[e])
    return hn[e];
  var t = id[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var i = r[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Os)
        return hn[e] = t[i], hn[e];
    }
  return "";
}
var zs = Ds("animationend"), Is = Ds("transitionend"), $s = !!(zs && Is), aa = zs || "animationend", sa = Is || "transitionend";
function la(e, t) {
  if (!e) return null;
  if (We(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const sd = function(e) {
  var t = l.useRef();
  function r(o) {
    o && (o.removeEventListener(sa, e), o.removeEventListener(aa, e));
  }
  function n(o) {
    t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(sa, e), o.addEventListener(aa, e), t.current = o);
  }
  return l.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var Fs = _t() ? l.useLayoutEffect : l.useEffect, Bs = function(t) {
  return +setTimeout(t, 16);
}, Ws = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Bs = function(t) {
  return window.requestAnimationFrame(t);
}, Ws = function(t) {
  return window.cancelAnimationFrame(t);
});
var ca = 0, vi = /* @__PURE__ */ new Map();
function Hs(e) {
  vi.delete(e);
}
var Ho = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ca += 1;
  var n = ca;
  function o(i) {
    if (i === 0)
      Hs(n), t();
    else {
      var a = Bs(function() {
        o(i - 1);
      });
      vi.set(n, a);
    }
  }
  return o(r), n;
};
Ho.cancel = function(e) {
  var t = vi.get(e);
  return Hs(e), Ws(t);
};
const ld = function() {
  var e = l.useRef(null);
  function t() {
    Ho.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = Ho(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = i;
  }
  return l.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var cd = [rt, sr, lr, pi], ud = [rt, As], Vs = !1, dd = !0;
function qs(e) {
  return e === lr || e === pi;
}
const fd = function(e, t, r) {
  var n = Wo(oa), o = ne(n, 2), i = o[0], a = o[1], s = ld(), u = ne(s, 2), c = u[0], d = u[1];
  function f() {
    a(rt, !0);
  }
  var h = t ? ud : cd;
  return Fs(function() {
    if (i !== oa && i !== pi) {
      var p = h.indexOf(i), g = h[p + 1], y = r(i);
      y === Vs ? a(g, !0) : g && c(function(v) {
        function x() {
          v.isCanceled() || a(g, !0);
        }
        y === !0 ? x() : Promise.resolve(y).then(x);
      });
    }
  }, [e, i]), l.useEffect(function() {
    return function() {
      d();
    };
  }, []), [f, i];
};
function pd(e, t, r, n) {
  var o = n.motionEnter, i = o === void 0 ? !0 : o, a = n.motionAppear, s = a === void 0 ? !0 : a, u = n.motionLeave, c = u === void 0 ? !0 : u, d = n.motionDeadline, f = n.motionLeaveImmediately, h = n.onAppearPrepare, p = n.onEnterPrepare, g = n.onLeavePrepare, y = n.onAppearStart, v = n.onEnterStart, x = n.onLeaveStart, b = n.onAppearActive, _ = n.onEnterActive, S = n.onLeaveActive, E = n.onAppearEnd, w = n.onEnterEnd, L = n.onLeaveEnd, M = n.onVisibleChanged, j = Wo(), A = ne(j, 2), P = A[0], H = A[1], T = nd(Pt), R = ne(T, 2), k = R[0], N = R[1], D = Wo(null), C = ne(D, 2), q = C[0], B = C[1], F = k(), W = l.useRef(!1), $ = l.useRef(null);
  function ie() {
    return r();
  }
  var G = l.useRef(!1);
  function J() {
    N(Pt), B(null, !0);
  }
  var fe = st(function(te) {
    var oe = k();
    if (oe !== Pt) {
      var pe = ie();
      if (!(te && !te.deadline && te.target !== pe)) {
        var ee = G.current, Oe;
        oe === fn && ee ? Oe = E?.(pe, te) : oe === pn && ee ? Oe = w?.(pe, te) : oe === vn && ee && (Oe = L?.(pe, te)), ee && Oe !== !1 && J();
      }
    }
  }), ce = sd(fe), be = ne(ce, 1), ke = be[0], Ce = function(oe) {
    switch (oe) {
      case fn:
        return Me(Me(Me({}, rt, h), sr, y), lr, b);
      case pn:
        return Me(Me(Me({}, rt, p), sr, v), lr, _);
      case vn:
        return Me(Me(Me({}, rt, g), sr, x), lr, S);
      default:
        return {};
    }
  }, V = l.useMemo(function() {
    return Ce(F);
  }, [F]), X = fd(F, !e, function(te) {
    if (te === rt) {
      var oe = V[rt];
      return oe ? oe(ie()) : Vs;
    }
    if (Q in V) {
      var pe;
      B(((pe = V[Q]) === null || pe === void 0 ? void 0 : pe.call(V, ie(), null)) || null);
    }
    return Q === lr && F !== Pt && (ke(ie()), d > 0 && (clearTimeout($.current), $.current = setTimeout(function() {
      fe({
        deadline: !0
      });
    }, d))), Q === As && J(), dd;
  }), z = ne(X, 2), U = z[0], Q = z[1], Y = qs(Q);
  G.current = Y;
  var ye = l.useRef(null);
  Fs(function() {
    if (!(W.current && ye.current === t)) {
      H(t);
      var te = W.current;
      W.current = !0;
      var oe;
      !te && t && s && (oe = fn), te && t && i && (oe = pn), (te && !t && c || !te && f && !t && c) && (oe = vn);
      var pe = Ce(oe);
      oe && (e || pe[rt]) ? (N(oe), U()) : N(Pt), ye.current = t;
    }
  }, [t]), l.useEffect(function() {
    // Cancel appear
    (F === fn && !s || // Cancel enter
    F === pn && !i || // Cancel leave
    F === vn && !c) && N(Pt);
  }, [s, i, c]), l.useEffect(function() {
    return function() {
      W.current = !1, clearTimeout($.current);
    };
  }, []);
  var ae = l.useRef(!1);
  l.useEffect(function() {
    P && (ae.current = !0), P !== void 0 && F === Pt && ((ae.current || P) && M?.(P), ae.current = !0);
  }, [P, F]);
  var ue = q;
  return V[rt] && Q === sr && (ue = K({
    transition: "none"
  }, ue)), [F, Q, ue, P ?? t];
}
function vd(e) {
  var t = e;
  We(e) === "object" && (t = e.transitionSupport);
  function r(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var n = /* @__PURE__ */ l.forwardRef(function(o, i) {
    var a = o.visible, s = a === void 0 ? !0 : a, u = o.removeOnLeave, c = u === void 0 ? !0 : u, d = o.forceRender, f = o.children, h = o.motionName, p = o.leavedClassName, g = o.eventProps, y = l.useContext(td), v = y.motion, x = r(o, v), b = l.useRef(), _ = l.useRef();
    function S() {
      try {
        return b.current instanceof HTMLElement ? b.current : bn(_.current);
      } catch {
        return null;
      }
    }
    var E = pd(x, s, S, o), w = ne(E, 4), L = w[0], M = w[1], j = w[2], A = w[3], P = l.useRef(A);
    A && (P.current = !0);
    var H = l.useCallback(function(C) {
      b.current = C, oi(i, C);
    }, [i]), T, R = K(K({}, g), {}, {
      visible: s
    });
    if (!f)
      T = null;
    else if (L === Pt)
      A ? T = f(K({}, R), H) : !c && P.current && p ? T = f(K(K({}, R), {}, {
        className: p
      }), H) : d || !c && !p ? T = f(K(K({}, R), {}, {
        style: {
          display: "none"
        }
      }), H) : T = null;
    else {
      var k;
      M === rt ? k = "prepare" : qs(M) ? k = "active" : M === sr && (k = "start");
      var N = la(h, "".concat(L, "-").concat(k));
      T = f(K(K({}, R), {}, {
        className: ed(la(h, L), Me(Me({}, N, N && k), h, typeof h == "string")),
        style: j
      }), H);
    }
    if (/* @__PURE__ */ l.isValidElement(T) && Bn(T)) {
      var D = ai(T);
      D || (T = /* @__PURE__ */ l.cloneElement(T, {
        ref: H
      }));
    }
    return /* @__PURE__ */ l.createElement(rd, {
      ref: _
    }, T);
  });
  return n.displayName = "CSSMotion", n;
}
const hi = vd($s);
var Vo = "add", qo = "keep", Ko = "remove", bo = "removed";
function hd(e) {
  var t;
  return e && We(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, K(K({}, t), {}, {
    key: String(t.key)
  });
}
function Uo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(hd);
}
function md() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, i = Uo(e), a = Uo(t);
  i.forEach(function(c) {
    for (var d = !1, f = n; f < o; f += 1) {
      var h = a[f];
      if (h.key === c.key) {
        n < f && (r = r.concat(a.slice(n, f).map(function(p) {
          return K(K({}, p), {}, {
            status: Vo
          });
        })), n = f), r.push(K(K({}, h), {}, {
          status: qo
        })), n += 1, d = !0;
        break;
      }
    }
    d || r.push(K(K({}, c), {}, {
      status: Ko
    }));
  }), n < o && (r = r.concat(a.slice(n).map(function(c) {
    return K(K({}, c), {}, {
      status: Vo
    });
  })));
  var s = {};
  r.forEach(function(c) {
    var d = c.key;
    s[d] = (s[d] || 0) + 1;
  });
  var u = Object.keys(s).filter(function(c) {
    return s[c] > 1;
  });
  return u.forEach(function(c) {
    r = r.filter(function(d) {
      var f = d.key, h = d.status;
      return f !== c || h !== Ko;
    }), r.forEach(function(d) {
      d.key === c && (d.status = qo);
    });
  }), r;
}
var gd = ["component", "children", "onVisibleChanged", "onAllRemoved"], bd = ["status"], yd = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function _d(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : hi, r = /* @__PURE__ */ function(n) {
    ui(i, n);
    var o = di(i);
    function i() {
      var a;
      li(this, i);
      for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
        u[c] = arguments[c];
      return a = o.call.apply(o, [this].concat(u)), Me(Fo(a), "state", {
        keyEntities: []
      }), Me(Fo(a), "removeKey", function(d) {
        a.setState(function(f) {
          var h = f.keyEntities.map(function(p) {
            return p.key !== d ? p : K(K({}, p), {}, {
              status: bo
            });
          });
          return {
            keyEntities: h
          };
        }, function() {
          var f = a.state.keyEntities, h = f.filter(function(p) {
            var g = p.status;
            return g !== bo;
          }).length;
          h === 0 && a.props.onAllRemoved && a.props.onAllRemoved();
        });
      }), a;
    }
    return ci(i, [{
      key: "render",
      value: function() {
        var s = this, u = this.state.keyEntities, c = this.props, d = c.component, f = c.children, h = c.onVisibleChanged;
        c.onAllRemoved;
        var p = kn(c, gd), g = d || l.Fragment, y = {};
        return yd.forEach(function(v) {
          y[v] = p[v], delete p[v];
        }), delete p.keys, /* @__PURE__ */ l.createElement(g, p, u.map(function(v, x) {
          var b = v.status, _ = kn(v, bd), S = b === Vo || b === qo;
          return /* @__PURE__ */ l.createElement(t, Zt({}, y, {
            key: _.key,
            visible: S,
            eventProps: _,
            onVisibleChanged: function(w) {
              h?.(w, {
                key: _.key
              }), w || s.removeKey(_.key);
            }
          }), function(E, w) {
            return f(K(K({}, E), {}, {
              index: x
            }), w);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, u) {
        var c = s.keys, d = u.keyEntities, f = Uo(c), h = md(d, f);
        return {
          keyEntities: h.filter(function(p) {
            var g = d.find(function(y) {
              var v = y.key;
              return p.key === v;
            });
            return !(g && g.status === bo && p.status === Ko);
          })
        };
      }
    }]), i;
  }(l.Component);
  return Me(r, "defaultProps", {
    component: "div"
  }), r;
}
_d($s);
function xd(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, o = e.arrowPos, i = n || {}, a = i.className, s = i.content, u = o.x, c = u === void 0 ? 0 : u, d = o.y, f = d === void 0 ? 0 : d, h = l.useRef();
  if (!r || !r.points)
    return null;
  var p = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var g = r.points[0], y = r.points[1], v = g[0], x = g[1], b = y[0], _ = y[1];
    v === b || !["t", "b"].includes(v) ? p.top = f : v === "t" ? p.top = 0 : p.bottom = 0, x === _ || !["l", "r"].includes(x) ? p.left = c : x === "l" ? p.left = 0 : p.right = 0;
  }
  return /* @__PURE__ */ l.createElement("div", {
    ref: h,
    className: pr("".concat(t, "-arrow"), a),
    style: p
  }, s);
}
function wd(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, o = e.mask, i = e.motion;
  return o ? /* @__PURE__ */ l.createElement(hi, Zt({}, i, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(a) {
    var s = a.className;
    return /* @__PURE__ */ l.createElement("div", {
      style: {
        zIndex: n
      },
      className: pr("".concat(t, "-mask"), s)
    });
  }) : null;
}
var Cd = /* @__PURE__ */ l.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
}), Sd = /* @__PURE__ */ l.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, o = e.prefixCls, i = e.style, a = e.target, s = e.onVisibleChanged, u = e.open, c = e.keepDom, d = e.fresh, f = e.onClick, h = e.mask, p = e.arrow, g = e.arrowPos, y = e.align, v = e.motion, x = e.maskMotion, b = e.forceRender, _ = e.getPopupContainer, S = e.autoDestroy, E = e.portal, w = e.zIndex, L = e.onMouseEnter, M = e.onMouseLeave, j = e.onPointerEnter, A = e.onPointerDownCapture, P = e.ready, H = e.offsetX, T = e.offsetY, R = e.offsetR, k = e.offsetB, N = e.onAlign, D = e.onPrepare, C = e.stretch, q = e.targetWidth, B = e.targetHeight, F = typeof r == "function" ? r() : r, W = u || c, $ = _?.length > 0, ie = l.useState(!_ || !$), G = ne(ie, 2), J = G[0], fe = G[1];
  if ($e(function() {
    !J && $ && a && fe(!0);
  }, [J, $, a]), !J)
    return null;
  var ce = "auto", be = {
    left: "-1000vw",
    top: "-1000vh",
    right: ce,
    bottom: ce
  };
  if (P || !u) {
    var ke, Ce = y.points, V = y.dynamicInset || ((ke = y._experimental) === null || ke === void 0 ? void 0 : ke.dynamicInset), X = V && Ce[0][1] === "r", z = V && Ce[0][0] === "b";
    X ? (be.right = R, be.left = ce) : (be.left = H, be.right = ce), z ? (be.bottom = k, be.top = ce) : (be.top = T, be.bottom = ce);
  }
  var U = {};
  return C && (C.includes("height") && B ? U.height = B : C.includes("minHeight") && B && (U.minHeight = B), C.includes("width") && q ? U.width = q : C.includes("minWidth") && q && (U.minWidth = q)), u || (U.pointerEvents = "none"), /* @__PURE__ */ l.createElement(E, {
    open: b || W,
    getContainer: _ && function() {
      return _(a);
    },
    autoDestroy: S
  }, /* @__PURE__ */ l.createElement(wd, {
    prefixCls: o,
    open: u,
    zIndex: w,
    mask: h,
    motion: x
  }), /* @__PURE__ */ l.createElement(fi, {
    onResize: N,
    disabled: !u
  }, function(Q) {
    return /* @__PURE__ */ l.createElement(hi, Zt({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: b,
      leavedClassName: "".concat(o, "-hidden")
    }, v, {
      onAppearPrepare: D,
      onEnterPrepare: D,
      visible: u,
      onVisibleChanged: function(ye) {
        var ae;
        v == null || (ae = v.onVisibleChanged) === null || ae === void 0 || ae.call(v, ye), s(ye);
      }
    }), function(Y, ye) {
      var ae = Y.className, ue = Y.style, te = pr(o, ae, n);
      return /* @__PURE__ */ l.createElement("div", {
        ref: hs(Q, t, ye),
        className: te,
        style: K(K(K(K({
          "--arrow-x": "".concat(g.x || 0, "px"),
          "--arrow-y": "".concat(g.y || 0, "px")
        }, be), U), ue), {}, {
          boxSizing: "border-box",
          zIndex: w
        }, i),
        onMouseEnter: L,
        onMouseLeave: M,
        onPointerEnter: j,
        onClick: f,
        onPointerDownCapture: A
      }, p && /* @__PURE__ */ l.createElement(xd, {
        prefixCls: o,
        arrow: p,
        arrowPos: g,
        align: y
      }), /* @__PURE__ */ l.createElement(Cd, {
        cache: !u && !d
      }, F));
    });
  }));
}), Ed = /* @__PURE__ */ l.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, o = Bn(r), i = l.useCallback(function(s) {
    oi(t, n ? n(s) : s);
  }, [n]), a = ii(i, ai(r));
  return o ? /* @__PURE__ */ l.cloneElement(r, {
    ref: a
  }) : r;
}), ua = /* @__PURE__ */ l.createContext(null);
function da(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function Rd(e, t, r, n) {
  return l.useMemo(function() {
    var o = da(r ?? t), i = da(n ?? t), a = new Set(o), s = new Set(i);
    return e && (a.has("hover") && (a.delete("hover"), a.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [a, s];
  }, [e, t, r, n]);
}
const kd = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), i = o.width, a = o.height;
      if (i || a)
        return !0;
    }
  }
  return !1;
};
function Ld() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Md(e, t, r, n) {
  for (var o = r.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
    var s, u = i[a];
    if (Ld((s = e[u]) === null || s === void 0 ? void 0 : s.points, o, n))
      return "".concat(t, "-placement-").concat(u);
  }
  return "";
}
function fa(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function $r(e) {
  return e.ownerDocument.defaultView;
}
function Zo(e) {
  for (var t = [], r = e?.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var o = $r(r).getComputedStyle(r), i = o.overflowX, a = o.overflowY, s = o.overflow;
    [i, a, s].some(function(u) {
      return n.includes(u);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function Dr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Er(e) {
  return Dr(parseFloat(e), 0);
}
function pa(e, t) {
  var r = K({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var o = $r(n).getComputedStyle(n), i = o.overflow, a = o.overflowClipMargin, s = o.borderTopWidth, u = o.borderBottomWidth, c = o.borderLeftWidth, d = o.borderRightWidth, f = n.getBoundingClientRect(), h = n.offsetHeight, p = n.clientHeight, g = n.offsetWidth, y = n.clientWidth, v = Er(s), x = Er(u), b = Er(c), _ = Er(d), S = Dr(Math.round(f.width / g * 1e3) / 1e3), E = Dr(Math.round(f.height / h * 1e3) / 1e3), w = (g - y - b - _) * S, L = (h - p - v - x) * E, M = v * E, j = x * E, A = b * S, P = _ * S, H = 0, T = 0;
      if (i === "clip") {
        var R = Er(a);
        H = R * S, T = R * E;
      }
      var k = f.x + A - H, N = f.y + M - T, D = k + f.width + 2 * H - A - P - w, C = N + f.height + 2 * T - M - j - L;
      r.left = Math.max(r.left, k), r.top = Math.max(r.top, N), r.right = Math.min(r.right, D), r.bottom = Math.min(r.bottom, C);
    }
  }), r;
}
function va(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function ha(e, t) {
  var r = t || [], n = ne(r, 2), o = n[0], i = n[1];
  return [va(e.width, o), va(e.height, i)];
}
function ma() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function rr(e, t) {
  var r = t[0], n = t[1], o, i;
  return r === "t" ? i = e.y : r === "b" ? i = e.y + e.height : i = e.y + e.height / 2, n === "l" ? o = e.x : n === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: i
  };
}
function Nt(e, t) {
  var r = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(n, o) {
    return o === t ? r[n] || "c" : n;
  }).join("");
}
function Nd(e, t, r, n, o, i, a) {
  var s = l.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: o[n] || {}
  }), u = ne(s, 2), c = u[0], d = u[1], f = l.useRef(0), h = l.useMemo(function() {
    return t ? Zo(t) : [];
  }, [t]), p = l.useRef({}), g = function() {
    p.current = {};
  };
  e || g();
  var y = st(function() {
    if (t && r && e) {
      let Ke = function(Cr, pt) {
        var Mt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Oe, Sr = W.x + Cr, an = W.y + pt, ao = Sr + z, so = an + X, lo = Math.max(Sr, Mt.left), O = Math.max(an, Mt.top), Z = Math.min(ao, Mt.right), ve = Math.min(so, Mt.bottom);
        return Math.max(0, (Z - lo) * (ve - O));
      }, Yt = function() {
        St = W.y + me, Et = St + X, Ft = W.x + de, ft = Ft + z;
      };
      var b, _, S, E, w = t, L = w.ownerDocument, M = $r(w), j = M.getComputedStyle(w), A = j.position, P = w.style.left, H = w.style.top, T = w.style.right, R = w.style.bottom, k = w.style.overflow, N = K(K({}, o[n]), i), D = L.createElement("div");
      (b = w.parentElement) === null || b === void 0 || b.appendChild(D), D.style.left = "".concat(w.offsetLeft, "px"), D.style.top = "".concat(w.offsetTop, "px"), D.style.position = A, D.style.height = "".concat(w.offsetHeight, "px"), D.style.width = "".concat(w.offsetWidth, "px"), w.style.left = "0", w.style.top = "0", w.style.right = "auto", w.style.bottom = "auto", w.style.overflow = "hidden";
      var C;
      if (Array.isArray(r))
        C = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var q, B, F = r.getBoundingClientRect();
        F.x = (q = F.x) !== null && q !== void 0 ? q : F.left, F.y = (B = F.y) !== null && B !== void 0 ? B : F.top, C = {
          x: F.x,
          y: F.y,
          width: F.width,
          height: F.height
        };
      }
      var W = w.getBoundingClientRect(), $ = M.getComputedStyle(w), ie = $.height, G = $.width;
      W.x = (_ = W.x) !== null && _ !== void 0 ? _ : W.left, W.y = (S = W.y) !== null && S !== void 0 ? S : W.top;
      var J = L.documentElement, fe = J.clientWidth, ce = J.clientHeight, be = J.scrollWidth, ke = J.scrollHeight, Ce = J.scrollTop, V = J.scrollLeft, X = W.height, z = W.width, U = C.height, Q = C.width, Y = {
        left: 0,
        top: 0,
        right: fe,
        bottom: ce
      }, ye = {
        left: -V,
        top: -Ce,
        right: be - V,
        bottom: ke - Ce
      }, ae = N.htmlRegion, ue = "visible", te = "visibleFirst";
      ae !== "scroll" && ae !== te && (ae = ue);
      var oe = ae === te, pe = pa(ye, h), ee = pa(Y, h), Oe = ae === ue ? ee : pe, Se = oe ? ee : Oe;
      w.style.left = "auto", w.style.top = "auto", w.style.right = "0", w.style.bottom = "0";
      var Fr = w.getBoundingClientRect();
      w.style.left = P, w.style.top = H, w.style.right = T, w.style.bottom = R, w.style.overflow = k, (E = w.parentElement) === null || E === void 0 || E.removeChild(D);
      var ut = Dr(Math.round(z / parseFloat(G) * 1e3) / 1e3), wt = Dr(Math.round(X / parseFloat(ie) * 1e3) / 1e3);
      if (ut === 0 || wt === 0 || Or(r) && !kd(r))
        return;
      var Vn = N.offset, Br = N.targetOffset, ot = ha(W, Vn), Wr = ne(ot, 2), He = Wr[0], Ye = Wr[1], Xt = ha(C, Br), De = ne(Xt, 2), Ct = De[0], qn = De[1];
      C.x -= Ct, C.y -= qn;
      var Kn = N.points || [], Hr = ne(Kn, 2), Un = Hr[0], Vr = Hr[1], dt = ma(Vr), Te = ma(Un), Le = rr(C, dt), qr = rr(W, Te), Ve = K({}, N), de = Le.x - qr.x + He, me = Le.y - qr.y + Ye, et = Ke(de, me), zt = Ke(de, me, ee), qe = rr(C, ["t", "l"]), Kr = rr(W, ["t", "l"]), gr = rr(C, ["b", "r"]), It = rr(W, ["b", "r"]), $t = N.overflow || {}, Zn = $t.adjustX, Ur = $t.adjustY, Qt = $t.shiftX, br = $t.shiftY, Zr = function(pt) {
        return typeof pt == "boolean" ? pt : pt >= 0;
      }, St, Et, Ft, ft;
      Yt();
      var Gr = Zr(Ur), Pe = Te[0] === dt[0];
      if (Gr && Te[0] === "t" && (Et > Se.bottom || p.current.bt)) {
        var Bt = me;
        Pe ? Bt -= X - U : Bt = qe.y - It.y - Ye;
        var Xr = Ke(de, Bt), Gn = Ke(de, Bt, ee);
        // Of course use larger one
        Xr > et || Xr === et && (!oe || // Choose recommend one
        Gn >= zt) ? (p.current.bt = !0, me = Bt, Ye = -Ye, Ve.points = [Nt(Te, 0), Nt(dt, 0)]) : p.current.bt = !1;
      }
      if (Gr && Te[0] === "b" && (St < Se.top || p.current.tb)) {
        var Wt = me;
        Pe ? Wt += X - U : Wt = gr.y - Kr.y - Ye;
        var Qr = Ke(de, Wt), Xn = Ke(de, Wt, ee);
        // Of course use larger one
        Qr > et || Qr === et && (!oe || // Choose recommend one
        Xn >= zt) ? (p.current.tb = !0, me = Wt, Ye = -Ye, Ve.points = [Nt(Te, 0), Nt(dt, 0)]) : p.current.tb = !1;
      }
      var Jr = Zr(Zn), Yr = Te[1] === dt[1];
      if (Jr && Te[1] === "l" && (ft > Se.right || p.current.rl)) {
        var Ht = de;
        Yr ? Ht -= z - Q : Ht = qe.x - It.x - He;
        var Vt = Ke(Ht, me), yr = Ke(Ht, me, ee);
        // Of course use larger one
        Vt > et || Vt === et && (!oe || // Choose recommend one
        yr >= zt) ? (p.current.rl = !0, de = Ht, He = -He, Ve.points = [Nt(Te, 1), Nt(dt, 1)]) : p.current.rl = !1;
      }
      if (Jr && Te[1] === "r" && (Ft < Se.left || p.current.lr)) {
        var qt = de;
        Yr ? qt += z - Q : qt = gr.x - Kr.x - He;
        var _r = Ke(qt, me), Jt = Ke(qt, me, ee);
        // Of course use larger one
        _r > et || _r === et && (!oe || // Choose recommend one
        Jt >= zt) ? (p.current.lr = !0, de = qt, He = -He, Ve.points = [Nt(Te, 1), Nt(dt, 1)]) : p.current.lr = !1;
      }
      Yt();
      var tt = Qt === !0 ? 0 : Qt;
      typeof tt == "number" && (Ft < ee.left && (de -= Ft - ee.left - He, C.x + Q < ee.left + tt && (de += C.x - ee.left + Q - tt)), ft > ee.right && (de -= ft - ee.right - He, C.x > ee.right - tt && (de += C.x - ee.right + tt)));
      var Rt = br === !0 ? 0 : br;
      typeof Rt == "number" && (St < ee.top && (me -= St - ee.top - Ye, C.y + U < ee.top + Rt && (me += C.y - ee.top + U - Rt)), Et > ee.bottom && (me -= Et - ee.bottom - Ye, C.y > ee.bottom - Rt && (me += C.y - ee.bottom + Rt)));
      var kt = W.x + de, Lt = kt + z, xr = W.y + me, Qn = xr + X, en = C.x, tn = en + Q, rn = C.y, Jn = rn + U, Yn = Math.max(kt, en), nn = Math.min(Lt, tn), eo = (Yn + nn) / 2, to = eo - kt, on = Math.max(xr, rn), ro = Math.min(Qn, Jn), no = (on + ro) / 2, oo = no - xr;
      a?.(t, Ve);
      var it = Fr.right - W.x - (de + W.width), wr = Fr.bottom - W.y - (me + W.height);
      ut === 1 && (de = Math.round(de), it = Math.round(it)), wt === 1 && (me = Math.round(me), wr = Math.round(wr));
      var io = {
        ready: !0,
        offsetX: de / ut,
        offsetY: me / wt,
        offsetR: it / ut,
        offsetB: wr / wt,
        arrowX: to / ut,
        arrowY: oo / wt,
        scaleX: ut,
        scaleY: wt,
        align: Ve
      };
      d(io);
    }
  }), v = function() {
    f.current += 1;
    var _ = f.current;
    Promise.resolve().then(function() {
      f.current === _ && y();
    });
  }, x = function() {
    d(function(_) {
      return K(K({}, _), {}, {
        ready: !1
      });
    });
  };
  return $e(x, [n]), $e(function() {
    e || x();
  }, [e]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, v];
}
function Td(e, t, r, n, o) {
  $e(function() {
    if (e && t && r) {
      let f = function() {
        n(), o();
      };
      var i = t, a = r, s = Zo(i), u = Zo(a), c = $r(a), d = new Set([c].concat(jo(s), jo(u)));
      return d.forEach(function(h) {
        h.addEventListener("scroll", f, {
          passive: !0
        });
      }), c.addEventListener("resize", f, {
        passive: !0
      }), n(), function() {
        d.forEach(function(h) {
          h.removeEventListener("scroll", f), c.removeEventListener("resize", f);
        });
      };
    }
  }, [e, t, r]);
}
function Pd(e, t, r, n, o, i, a, s) {
  var u = l.useRef(e);
  u.current = e;
  var c = l.useRef(!1);
  l.useEffect(function() {
    if (t && n && (!o || i)) {
      var f = function() {
        c.current = !1;
      }, h = function(v) {
        var x;
        u.current && !a(((x = v.composedPath) === null || x === void 0 || (x = x.call(v)) === null || x === void 0 ? void 0 : x[0]) || v.target) && !c.current && s(!1);
      }, p = $r(n);
      p.addEventListener("pointerdown", f, !0), p.addEventListener("mousedown", h, !0), p.addEventListener("contextmenu", h, !0);
      var g = Bo(r);
      return g && (g.addEventListener("mousedown", h, !0), g.addEventListener("contextmenu", h, !0)), function() {
        p.removeEventListener("pointerdown", f, !0), p.removeEventListener("mousedown", h, !0), p.removeEventListener("contextmenu", h, !0), g && (g.removeEventListener("mousedown", h, !0), g.removeEventListener("contextmenu", h, !0));
      };
    }
  }, [t, r, n, o, i]);
  function d() {
    c.current = !0;
  }
  return d;
}
var jd = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function Ad() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ws, t = /* @__PURE__ */ l.forwardRef(function(r, n) {
    var o = r.prefixCls, i = o === void 0 ? "rc-trigger-popup" : o, a = r.children, s = r.action, u = s === void 0 ? "hover" : s, c = r.showAction, d = r.hideAction, f = r.popupVisible, h = r.defaultPopupVisible, p = r.onPopupVisibleChange, g = r.afterPopupVisibleChange, y = r.mouseEnterDelay, v = r.mouseLeaveDelay, x = v === void 0 ? 0.1 : v, b = r.focusDelay, _ = r.blurDelay, S = r.mask, E = r.maskClosable, w = E === void 0 ? !0 : E, L = r.getPopupContainer, M = r.forceRender, j = r.autoDestroy, A = r.destroyPopupOnHide, P = r.popup, H = r.popupClassName, T = r.popupStyle, R = r.popupPlacement, k = r.builtinPlacements, N = k === void 0 ? {} : k, D = r.popupAlign, C = r.zIndex, q = r.stretch, B = r.getPopupClassNameFromAlign, F = r.fresh, W = r.alignPoint, $ = r.onPopupClick, ie = r.onPopupAlign, G = r.arrow, J = r.popupMotion, fe = r.maskMotion, ce = r.popupTransitionName, be = r.popupAnimation, ke = r.maskTransitionName, Ce = r.maskAnimation, V = r.className, X = r.getTriggerDOMNode, z = kn(r, jd), U = j || A || !1, Q = l.useState(!1), Y = ne(Q, 2), ye = Y[0], ae = Y[1];
    $e(function() {
      ae(Ju());
    }, []);
    var ue = l.useRef({}), te = l.useContext(ua), oe = l.useMemo(function() {
      return {
        registerSubPopup: function(Z, ve) {
          ue.current[Z] = ve, te?.registerSubPopup(Z, ve);
        }
      };
    }, [te]), pe = Ps(), ee = l.useState(null), Oe = ne(ee, 2), Se = Oe[0], Fr = Oe[1], ut = l.useRef(null), wt = st(function(O) {
      ut.current = O, Or(O) && Se !== O && Fr(O), te?.registerSubPopup(pe, O);
    }), Vn = l.useState(null), Br = ne(Vn, 2), ot = Br[0], Wr = Br[1], He = l.useRef(null), Ye = st(function(O) {
      Or(O) && ot !== O && (Wr(O), He.current = O);
    }), Xt = l.Children.only(a), De = Xt?.props || {}, Ct = {}, qn = st(function(O) {
      var Z, ve, we = ot;
      return we?.contains(O) || ((Z = Bo(we)) === null || Z === void 0 ? void 0 : Z.host) === O || O === we || Se?.contains(O) || ((ve = Bo(Se)) === null || ve === void 0 ? void 0 : ve.host) === O || O === Se || Object.values(ue.current).some(function(ge) {
        return ge?.contains(O) || O === ge;
      });
    }), Kn = fa(i, J, be, ce), Hr = fa(i, fe, Ce, ke), Un = l.useState(h || !1), Vr = ne(Un, 2), dt = Vr[0], Te = Vr[1], Le = f ?? dt, qr = st(function(O) {
      f === void 0 && Te(O);
    });
    $e(function() {
      Te(f || !1);
    }, [f]);
    var Ve = l.useRef(Le);
    Ve.current = Le;
    var de = l.useRef([]);
    de.current = [];
    var me = st(function(O) {
      var Z;
      qr(O), ((Z = de.current[de.current.length - 1]) !== null && Z !== void 0 ? Z : Le) !== O && (de.current.push(O), p?.(O));
    }), et = l.useRef(), zt = function() {
      clearTimeout(et.current);
    }, qe = function(Z) {
      var ve = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      zt(), ve === 0 ? me(Z) : et.current = setTimeout(function() {
        me(Z);
      }, ve * 1e3);
    };
    l.useEffect(function() {
      return zt;
    }, []);
    var Kr = l.useState(!1), gr = ne(Kr, 2), It = gr[0], $t = gr[1];
    $e(function(O) {
      (!O || Le) && $t(!0);
    }, [Le]);
    var Zn = l.useState(null), Ur = ne(Zn, 2), Qt = Ur[0], br = Ur[1], Zr = l.useState(null), St = ne(Zr, 2), Et = St[0], Ft = St[1], ft = function(Z) {
      Ft([Z.clientX, Z.clientY]);
    }, Gr = Nd(Le, Se, W && Et !== null ? Et : ot, R, N, D, ie), Pe = ne(Gr, 11), Bt = Pe[0], Xr = Pe[1], Gn = Pe[2], Wt = Pe[3], Qr = Pe[4], Xn = Pe[5], Jr = Pe[6], Yr = Pe[7], Ht = Pe[8], Vt = Pe[9], yr = Pe[10], qt = Rd(ye, u, c, d), _r = ne(qt, 2), Jt = _r[0], tt = _r[1], Rt = Jt.has("click"), kt = tt.has("click") || tt.has("contextMenu"), Lt = st(function() {
      It || yr();
    }), xr = function() {
      Ve.current && W && kt && qe(!1);
    };
    Td(Le, ot, Se, Lt, xr), $e(function() {
      Lt();
    }, [Et, R]), $e(function() {
      Le && !(N != null && N[R]) && Lt();
    }, [JSON.stringify(D)]);
    var Qn = l.useMemo(function() {
      var O = Md(N, i, Vt, W);
      return pr(O, B?.(Vt));
    }, [Vt, B, N, i, W]);
    l.useImperativeHandle(n, function() {
      return {
        nativeElement: He.current,
        popupElement: ut.current,
        forceAlign: Lt
      };
    });
    var en = l.useState(0), tn = ne(en, 2), rn = tn[0], Jn = tn[1], Yn = l.useState(0), nn = ne(Yn, 2), eo = nn[0], to = nn[1], on = function() {
      if (q && ot) {
        var Z = ot.getBoundingClientRect();
        Jn(Z.width), to(Z.height);
      }
    }, ro = function() {
      on(), Lt();
    }, no = function(Z) {
      $t(!1), yr(), g?.(Z);
    }, oo = function() {
      return new Promise(function(Z) {
        on(), br(function() {
          return Z;
        });
      });
    };
    $e(function() {
      Qt && (yr(), Qt(), br(null));
    }, [Qt]);
    function it(O, Z, ve, we) {
      Ct[O] = function(ge) {
        var sn;
        we?.(ge), qe(Z, ve);
        for (var co = arguments.length, bi = new Array(co > 1 ? co - 1 : 0), ln = 1; ln < co; ln++)
          bi[ln - 1] = arguments[ln];
        (sn = De[O]) === null || sn === void 0 || sn.call.apply(sn, [De, ge].concat(bi));
      };
    }
    (Rt || kt) && (Ct.onClick = function(O) {
      var Z;
      Ve.current && kt ? qe(!1) : !Ve.current && Rt && (ft(O), qe(!0));
      for (var ve = arguments.length, we = new Array(ve > 1 ? ve - 1 : 0), ge = 1; ge < ve; ge++)
        we[ge - 1] = arguments[ge];
      (Z = De.onClick) === null || Z === void 0 || Z.call.apply(Z, [De, O].concat(we));
    });
    var wr = Pd(Le, kt, ot, Se, S, w, qn, qe), io = Jt.has("hover"), Ke = tt.has("hover"), Yt, Cr;
    io && (it("onMouseEnter", !0, y, function(O) {
      ft(O);
    }), it("onPointerEnter", !0, y, function(O) {
      ft(O);
    }), Yt = function(Z) {
      (Le || It) && Se !== null && Se !== void 0 && Se.contains(Z.target) && qe(!0, y);
    }, W && (Ct.onMouseMove = function(O) {
      var Z;
      (Z = De.onMouseMove) === null || Z === void 0 || Z.call(De, O);
    })), Ke && (it("onMouseLeave", !1, x), it("onPointerLeave", !1, x), Cr = function() {
      qe(!1, x);
    }), Jt.has("focus") && it("onFocus", !0, b), tt.has("focus") && it("onBlur", !1, _), Jt.has("contextMenu") && (Ct.onContextMenu = function(O) {
      var Z;
      Ve.current && tt.has("contextMenu") ? qe(!1) : (ft(O), qe(!0)), O.preventDefault();
      for (var ve = arguments.length, we = new Array(ve > 1 ? ve - 1 : 0), ge = 1; ge < ve; ge++)
        we[ge - 1] = arguments[ge];
      (Z = De.onContextMenu) === null || Z === void 0 || Z.call.apply(Z, [De, O].concat(we));
    }), V && (Ct.className = pr(De.className, V));
    var pt = l.useRef(!1);
    pt.current || (pt.current = M || Le || It);
    var Mt = K(K({}, De), Ct), Sr = {}, an = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    an.forEach(function(O) {
      z[O] && (Sr[O] = function() {
        for (var Z, ve = arguments.length, we = new Array(ve), ge = 0; ge < ve; ge++)
          we[ge] = arguments[ge];
        (Z = Mt[O]) === null || Z === void 0 || Z.call.apply(Z, [Mt].concat(we)), z[O].apply(z, we);
      });
    });
    var ao = /* @__PURE__ */ l.cloneElement(Xt, K(K({}, Mt), Sr)), so = {
      x: Xn,
      y: Jr
    }, lo = G ? K({}, G !== !0 ? G : {}) : null;
    return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement(fi, {
      disabled: !Le,
      ref: Ye,
      onResize: ro
    }, /* @__PURE__ */ l.createElement(Ed, {
      getTriggerDOMNode: X
    }, ao)), pt.current && /* @__PURE__ */ l.createElement(ua.Provider, {
      value: oe
    }, /* @__PURE__ */ l.createElement(Sd, {
      portal: e,
      ref: wt,
      prefixCls: i,
      popup: P,
      className: pr(H, Qn),
      style: T,
      target: ot,
      onMouseEnter: Yt,
      onMouseLeave: Cr,
      onPointerEnter: Yt,
      zIndex: C,
      open: Le,
      keepDom: It,
      fresh: F,
      onClick: $,
      onPointerDownCapture: wr,
      mask: S,
      motion: Kn,
      maskMotion: Hr,
      onVisibleChanged: no,
      onPrepare: oo,
      forceRender: M,
      autoDestroy: U,
      getPopupContainer: L,
      align: Vt,
      arrow: lo,
      arrowPos: so,
      ready: Bt,
      offsetX: Xr,
      offsetY: Gn,
      offsetR: Wt,
      offsetB: Qr,
      onAlign: Lt,
      stretch: q,
      targetWidth: rn / Yr,
      targetHeight: eo / Ht
    })));
  });
  return t;
}
const Od = Ad(ws);
var nr = {
  shiftX: 64,
  adjustY: 1
}, or = {
  adjustX: 1,
  shiftY: !0
}, Ue = [0, 0], Dd = {
  left: {
    points: ["cr", "cl"],
    overflow: or,
    offset: [-4, 0],
    targetOffset: Ue
  },
  right: {
    points: ["cl", "cr"],
    overflow: or,
    offset: [4, 0],
    targetOffset: Ue
  },
  top: {
    points: ["bc", "tc"],
    overflow: nr,
    offset: [0, -4],
    targetOffset: Ue
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: nr,
    offset: [0, 4],
    targetOffset: Ue
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: nr,
    offset: [0, -4],
    targetOffset: Ue
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: or,
    offset: [-4, 0],
    targetOffset: Ue
  },
  topRight: {
    points: ["br", "tr"],
    overflow: nr,
    offset: [0, -4],
    targetOffset: Ue
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: or,
    offset: [4, 0],
    targetOffset: Ue
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: nr,
    offset: [0, 4],
    targetOffset: Ue
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: or,
    offset: [4, 0],
    targetOffset: Ue
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: nr,
    offset: [0, 4],
    targetOffset: Ue
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: or,
    offset: [-4, 0],
    targetOffset: Ue
  }
}, zd = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"], Id = function(t, r) {
  var n = t.overlayClassName, o = t.trigger, i = o === void 0 ? ["hover"] : o, a = t.mouseEnterDelay, s = a === void 0 ? 0 : a, u = t.mouseLeaveDelay, c = u === void 0 ? 0.1 : u, d = t.overlayStyle, f = t.prefixCls, h = f === void 0 ? "rc-tooltip" : f, p = t.children, g = t.onVisibleChange, y = t.afterVisibleChange, v = t.transitionName, x = t.animation, b = t.motion, _ = t.placement, S = _ === void 0 ? "right" : _, E = t.align, w = E === void 0 ? {} : E, L = t.destroyTooltipOnHide, M = L === void 0 ? !1 : L, j = t.defaultVisible, A = t.getTooltipContainer, P = t.overlayInnerStyle;
  t.arrowContent;
  var H = t.overlay, T = t.id, R = t.showArrow, k = R === void 0 ? !0 : R, N = t.classNames, D = t.styles, C = kn(t, zd), q = Ps(T), B = l.useRef(null);
  l.useImperativeHandle(r, function() {
    return B.current;
  });
  var F = K({}, C);
  "visible" in t && (F.popupVisible = t.visible);
  var W = function() {
    return /* @__PURE__ */ l.createElement(Uc, {
      key: "content",
      prefixCls: h,
      id: q,
      bodyClassName: N?.body,
      overlayInnerStyle: K(K({}, P), D?.body)
    }, H);
  }, $ = function() {
    var G = l.Children.only(p), J = G?.props || {}, fe = K(K({}, J), {}, {
      "aria-describedby": H ? q : null
    });
    return /* @__PURE__ */ l.cloneElement(p, fe);
  };
  return /* @__PURE__ */ l.createElement(Od, Zt({
    popupClassName: To(n, N?.root),
    prefixCls: h,
    popup: W,
    action: i,
    builtinPlacements: Dd,
    popupPlacement: S,
    ref: B,
    popupAlign: w,
    getPopupContainer: A,
    onPopupVisibleChange: g,
    afterPopupVisibleChange: y,
    popupTransitionName: v,
    popupAnimation: x,
    popupMotion: b,
    defaultPopupVisible: j,
    autoDestroy: M,
    mouseLeaveDelay: c,
    popupStyle: K(K({}, d), D?.root),
    mouseEnterDelay: s,
    arrow: k
  }, F), $());
};
const $d = /* @__PURE__ */ l.forwardRef(Id);
function Fd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ga = { exports: {} }, Rr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ba;
function Bd() {
  if (ba) return Rr;
  ba = 1;
  var e = Pn, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, u, c) {
    var d, f = {}, h = null, p = null;
    c !== void 0 && (h = "" + c), u.key !== void 0 && (h = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (d in u) n.call(u, d) && !i.hasOwnProperty(d) && (f[d] = u[d]);
    if (s && s.defaultProps) for (d in u = s.defaultProps, u) f[d] === void 0 && (f[d] = u[d]);
    return { $$typeof: t, type: s, key: h, ref: p, props: f, _owner: o.current };
  }
  return Rr.Fragment = r, Rr.jsx = a, Rr.jsxs = a, Rr;
}
var ya;
function Wd() {
  return ya || (ya = 1, ga.exports = Bd()), ga.exports;
}
var m = Wd();
const Hd = (e) => e.as === "a", Vd = (e) => e.as === void 0 || e.as === "button", _a = (e) => e.displayAs === void 0 || e.displayAs === "button", qd = (e) => e.displayAs === "link", Kd = "_button_11kkg_1", Ud = "_link_11kkg_22", Zd = "_disabled_11kkg_27", Gd = "_loading_11kkg_27", Xd = "_neutral_11kkg_59", Qd = "_accent_11kkg_63", Jd = "_positive_11kkg_67", Yd = "_negative_11kkg_71", ef = "_contrast_11kkg_75", tf = "_primary_11kkg_79", rf = "_secondary_11kkg_80", nf = "_tertiary_11kkg_81", of = "_gray_11kkg_91", af = "_spaceBetween_11kkg_119", sf = "_rightGroup_11kkg_119", lf = "_withSubcaption_11kkg_127", cf = "_label_11kkg_139", uf = "_icon_11kkg_148", df = "_labelText_11kkg_153", ff = "_isLink_11kkg_159", pf = "_iconOnly_11kkg_174", vf = "_stretched_11kkg_190", hf = "_postfix_11kkg_195", mf = "_underline_11kkg_225", gf = "_backButton_11kkg_428", bf = "_warning_11kkg_1159", yf = "_subcaption_11kkg_1389", _f = "_content_11kkg_1394", xf = "_contentHidden_11kkg_1398", wf = "_loaderWrapper_11kkg_1402", Cf = "_l_11kkg_22", Sf = "_m_11kkg_1441", Ef = "_s_11kkg_80", Rf = "_xs_11kkg_1484", kf = "_noPaddings_11kkg_1506", Lf = "_iconRight_11kkg_1542", Mf = "_spin_11kkg_1", le = {
  button: Kd,
  link: Ud,
  disabled: Zd,
  loading: Gd,
  neutral: Xd,
  accent: Qd,
  positive: Jd,
  negative: Yd,
  contrast: ef,
  primary: tf,
  secondary: rf,
  tertiary: nf,
  gray: of,
  spaceBetween: af,
  rightGroup: sf,
  withSubcaption: lf,
  label: cf,
  icon: uf,
  labelText: df,
  isLink: ff,
  iconOnly: pf,
  stretched: vf,
  postfix: hf,
  underline: mf,
  backButton: gf,
  warning: bf,
  subcaption: yf,
  content: _f,
  contentHidden: xf,
  loaderWrapper: wf,
  l: Cf,
  m: Sf,
  s: Ef,
  xs: Rf,
  noPaddings: kf,
  iconRight: Lf,
  spin: Mf
}, Nf = /* @__PURE__ */ new Set([
  "mode",
  "size",
  "buttonStyle",
  "loading",
  "disabled",
  "displayAs",
  "stretched",
  "iconRight",
  "className",
  "children",
  "subcaption",
  "postfix",
  "iconLeft",
  "as",
  "showUnderline",
  "isExternal",
  "asBackButton",
  "paddings"
]), xa = (e) => {
  const t = {};
  for (const r in e)
    Nf.has(r) || (t[r] = e[r]);
  return t;
}, Tf = {
  l: "typography-subtitle-1-semibold",
  m: "typography-label-2-regular",
  s: "typography-label-3-regular"
};
function Pf(e) {
  return Tf[e] || "typography-label-2-regular";
}
const jf = (e, t, r) => e ? "gray" : t === "primary" ? {
  contrast: "neutral",
  gray: "gray"
}[r] ?? "contrast" : r === "warning" ? "neutral" : r, xe = {
  "typography-title-1-semibold": "_typography-title-1-semibold_1lyxn_1",
  "typography-title-2-semibold": "_typography-title-2-semibold_1lyxn_10",
  "typography-title-3-semibold": "_typography-title-3-semibold_1lyxn_19",
  "typography-title-4-semibold": "_typography-title-4-semibold_1lyxn_28",
  "typography-title-5-semibold": "_typography-title-5-semibold_1lyxn_37",
  "typography-subtitle-1-semibold": "_typography-subtitle-1-semibold_1lyxn_45",
  "typography-subtitle-2-semibold": "_typography-subtitle-2-semibold_1lyxn_53",
  "typography-subtitle-3-semibold": "_typography-subtitle-3-semibold_1lyxn_62",
  "typography-subtitle-4-semibold": "_typography-subtitle-4-semibold_1lyxn_71",
  "typography-label-1-medium": "_typography-label-1-medium_1lyxn_80",
  "typography-label-2-medium": "_typography-label-2-medium_1lyxn_89",
  "typography-label-3-medium": "_typography-label-3-medium_1lyxn_97",
  "typography-label-4-medium": "_typography-label-4-medium_1lyxn_106",
  "typography-label-5-medium": "_typography-label-5-medium_1lyxn_115",
  "typography-label-1-regular": "_typography-label-1-regular_1lyxn_124",
  "typography-label-2-regular": "_typography-label-2-regular_1lyxn_133",
  "typography-label-3-regular": "_typography-label-3-regular_1lyxn_141",
  "typography-label-4-regular": "_typography-label-4-regular_1lyxn_150",
  "typography-label-5-regular": "_typography-label-5-regular_1lyxn_159",
  "typography-paragraph-1-regular": "_typography-paragraph-1-regular_1lyxn_168",
  "typography-paragraph-2-regular": "_typography-paragraph-2-regular_1lyxn_176",
  "typography-paragraph-3-regular": "_typography-paragraph-3-regular_1lyxn_185",
  "typography-paragraph-4-regular": "_typography-paragraph-4-regular_1lyxn_194"
}, Af = "_loader_isv17_1", Of = "_spin_isv17_1", Df = "_accent_isv17_19", zf = "_neutral_isv17_23", If = "_positive_isv17_27", $f = "_negative_isv17_31", Ff = "_gray_isv17_35", Bf = "_special_isv17_39", Wf = "_contrast_isv17_43", Hf = "_container_isv17_47", Vf = "_overlay_isv17_57", Tr = {
  loader: Af,
  spin: Of,
  accent: Df,
  neutral: zf,
  positive: If,
  negative: $f,
  gray: Ff,
  special: Bf,
  contrast: Wf,
  container: Hf,
  overlay: Vf,
  "size-16": "_size-16_isv17_72",
  "size-24": "_size-24_isv17_76",
  "size-48": "_size-48_isv17_80",
  "size-64": "_size-64_isv17_84",
  "size-96": "_size-96_isv17_88"
};
var wa = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ca;
function qf() {
  return Ca || (Ca = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var i = "", a = 0; a < arguments.length; a++) {
          var s = arguments[a];
          s && (i = o(i, n(s)));
        }
        return i;
      }
      function n(i) {
        if (typeof i == "string" || typeof i == "number")
          return i;
        if (typeof i != "object")
          return "";
        if (Array.isArray(i))
          return r.apply(null, i);
        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
          return i.toString();
        var a = "";
        for (var s in i)
          t.call(i, s) && i[s] && (a = o(a, s));
        return a;
      }
      function o(i, a) {
        return a ? i ? i + " " + a : i + a : i;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(wa)), wa.exports;
}
var Kf = qf();
const Gt = /* @__PURE__ */ Fd(Kf), Ks = l.forwardRef(
  ({
    size: e = 24,
    variant: t = "accent",
    className: r,
    "data-testid": n = "loader",
    style: o,
    ...i
  }, a) => {
    const s = Gt(
      Tr.loader,
      Tr[t],
      Tr[`size-${e}`],
      r
    );
    return /* @__PURE__ */ m.jsx(
      "svg",
      {
        ref: a,
        className: s,
        fill: "none",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        "data-testid": n,
        style: o,
        ...i,
        children: /* @__PURE__ */ m.jsx(
          "path",
          {
            d: "M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "1.33333"
          }
        )
      }
    );
  }
), Uf = l.forwardRef((e, t) => {
  const {
    loading: r = !1,
    size: n = 24,
    variant: o = "accent",
    children: i,
    className: a,
    style: s,
    "data-testid": u,
    ...c
  } = e, d = Gt(Tr.container, a);
  return /* @__PURE__ */ m.jsxs("div", { ref: t, className: d, style: s, "data-testid": u, ...c, children: [
    i,
    r && /* @__PURE__ */ m.jsx("div", { className: Tr.overlay, children: /* @__PURE__ */ m.jsx(Ks, { size: n, variant: o, "data-testid": `${u}-spinner` }) })
  ] });
}), Us = l.forwardRef((e, t) => e.children ? /* @__PURE__ */ m.jsx(
  Uf,
  {
    ref: t,
    ...e
  }
) : /* @__PURE__ */ m.jsx(Ks, { ref: t, ...e })), Zf = (e) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    width: "100%",
    height: "100%",
    stroke: "currentColor",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: /* @__PURE__ */ m.jsx(
      "path",
      {
        d: "M14 2L2 14M2 2L14 14",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Gf = ({
  width: e = 24,
  height: t = 24,
  className: r = "",
  color: n = "currentColor",
  ...o
}) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    className: r,
    width: e,
    height: t,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...o,
    children: /* @__PURE__ */ m.jsx(
      "path",
      {
        d: "M19 12H5m0 0 7 7m-7-7 7-7",
        stroke: n,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2"
      }
    )
  }
), Xf = {
  l: "typography-subtitle-1-semibold",
  m: "typography-subtitle-2-semibold",
  s: "typography-label-3-medium",
  xs: "typography-label-3-medium"
}, Qf = (e) => Xf[e] || "typography-subtitle-2-semibold", Sa = ({
  iconRight: e,
  iconLeft: t,
  children: r,
  postfix: n,
  subcaption: o,
  size: i,
  isAsButton: a
}) => {
  const s = !!(o && a && i === "l"), u = !!(!r && a && t), c = a && !!(s && !r && n || n && !s);
  return /* @__PURE__ */ m.jsxs(l.Fragment, { children: [
    s && r && /* @__PURE__ */ m.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ m.jsx("span", { "data-testid": "button-label", className: I(le.label, le.labelText), children: r }),
      /* @__PURE__ */ m.jsx(
        "span",
        {
          "data-testid": "button-subcaption",
          className: I(le.subcaption, xe["typography-label-4-regular"]),
          children: o
        }
      )
    ] }),
    !s && r && /* @__PURE__ */ m.jsxs("span", { "data-testid": "button-label", className: le.label, children: [
      t && /* @__PURE__ */ m.jsx("span", { "data-testid": "button-left-icon", className: le.icon, children: t }),
      /* @__PURE__ */ m.jsx("span", { className: I(le.labelText, { [le.isLink]: !a }), children: r }),
      !a && e && /* @__PURE__ */ m.jsx("span", { "data-testid": "button-icon", className: I(le.icon, le.iconRight), children: e })
    ] }),
    u && /* @__PURE__ */ m.jsx("span", { "data-testid": "button-icon", className: le.icon, children: a ? t : e }),
    c && /* @__PURE__ */ m.jsx("div", { "data-testid": "button-right-group", className: le.rightGroup, children: /* @__PURE__ */ m.jsx(
      "span",
      {
        "data-testid": "button-postfix",
        className: I(le.postfix, xe["typography-subtitle-2-semibold"]),
        children: n
      }
    ) })
  ] });
}, mi = l.forwardRef((e, t) => {
  const {
    mode: r = "primary",
    size: n = "m",
    buttonStyle: o = _a(e) ? "neutral" : "accent",
    disabled: i = !1,
    className: a,
    children: s,
    tabIndex: u
  } = e, c = r === "tertiary", d = _a(e), f = qd(e), h = c && "paddings" in e ? e.paddings ?? !0 : !0, p = d ? e.subcaption : void 0, g = d ? e.postfix : void 0, y = d ? e.stretched : void 0, v = !(f && e.size === void 0), x = f && v ? e.iconLeft : void 0, b = f && v ? e.iconRight : void 0, _ = !!(d && "loading" in e && e.loading), S = d ? i : i || _, E = !S && !_, w = d ? e.iconLeft : void 0, L = !!(!s && (d && w && !g || f && b)), M = typeof y == "object" ? y.justify === "space-between" : void 0, j = Qf(n), A = xe[j], P = f ? Pf(e.size ?? "m") : void 0, H = P ? xe[P] : void 0, T = jf(S, r, o), R = S || _ ? -1 : u, k = I(
    le.button,
    le[n],
    le[r],
    le[o],
    f && H,
    d && A,
    {
      [le.disabled]: S,
      [le.loading]: d && "loading" in e && e.loading,
      [le.stretched]: y,
      [le.spaceBetween]: M,
      [le.withSubcaption]: !!(p && n === "l" && s),
      [le.iconOnly]: L,
      [le.link]: f,
      [le.underline]: f && "showUnderline" in e && e.showUnderline,
      [le.noPaddings]: c && d && !h
    },
    a
  ), N = {
    iconRight: b,
    iconLeft: d ? w : x,
    children: s,
    postfix: g,
    subcaption: p,
    size: n,
    isAsButton: d
  };
  if (Hd(e)) {
    const { href: D, onClick: C, style: q, target: B, rel: F, "data-testid": W, ...$ } = e, ie = xa($), G = B ?? (e.isExternal ? "_blank" : void 0);
    let J = F;
    if (G === "_blank") {
      const ce = new Set((F ?? "").split(/\s+/).filter(Boolean));
      ce.add("noopener").add("noreferrer"), J = Array.from(ce).join(" ");
    }
    const fe = (ce) => {
      if (!E) {
        ce.preventDefault();
        return;
      }
      C?.(ce);
    };
    return /* @__PURE__ */ m.jsx(
      "a",
      {
        ref: t,
        className: k,
        href: E ? D : void 0,
        tabIndex: R,
        onClick: fe,
        "data-testid": W,
        "aria-disabled": S || _,
        style: q,
        target: G,
        rel: J,
        ...ie,
        children: /* @__PURE__ */ m.jsx(Sa, { ...N })
      }
    );
  }
  if (Vd(e)) {
    const { type: D = "button", onClick: C, style: q, "data-testid": B, ...F } = e, W = xa(F), $ = n === "l" ? 24 : 16, ie = (G) => {
      E && C && C(G);
    };
    return /* @__PURE__ */ m.jsxs(
      "button",
      {
        ref: t,
        type: D,
        className: k,
        disabled: S,
        tabIndex: R,
        onClick: ie,
        "data-testid": B,
        "aria-disabled": S || _,
        style: q,
        ...W,
        children: [
          /* @__PURE__ */ m.jsx("div", { className: I(le.content, { [le.contentHidden]: _ }), children: /* @__PURE__ */ m.jsx(Sa, { ...N }) }),
          _ && /* @__PURE__ */ m.jsx("div", { className: le.loaderWrapper, children: /* @__PURE__ */ m.jsx(
            Us,
            {
              variant: T,
              "aria-hidden": "true",
              "data-testid": "button-loader",
              size: $
            }
          ) })
        ]
      }
    );
  }
  return null;
});
mi.displayName = "Button";
const Zs = l.forwardRef(
  (e, t) => {
    const { iconLeft: r, className: n, ...o } = e, i = {
      ...o,
      displayAs: "button",
      mode: "tertiary",
      buttonStyle: "neutral",
      size: "m",
      iconLeft: r ?? /* @__PURE__ */ m.jsx(Gf, {}),
      className: I(le.backButton, xe["typography-subtitle-1-semibold"], n)
    };
    return /* @__PURE__ */ m.jsx(mi, { ref: t, ...i });
  }
);
Zs.displayName = "Button.Back";
const Go = Object.assign(mi, {
  Back: Zs
}), Jf = "_avatar_19ug4_18", Yf = "_clickable_19ug4_40", e1 = "_icon_19ug4_57", t1 = "_disabled_19ug4_62", r1 = "_loading_19ug4_67", n1 = "_image_19ug4_73", o1 = "_name_19ug4_73", at = {
  avatar: Jf,
  clickable: Yf,
  icon: e1,
  disabled: t1,
  loading: r1,
  image: n1,
  name: o1,
  "variant-filled": "_variant-filled_19ug4_125",
  "color-brand": "_color-brand_19ug4_130",
  "color-red": "_color-red_19ug4_134",
  "color-orange": "_color-orange_19ug4_138",
  "color-yellow": "_color-yellow_19ug4_142",
  "color-green": "_color-green_19ug4_146",
  "color-blue": "_color-blue_19ug4_150",
  "color-lightblue": "_color-lightblue_19ug4_154",
  "color-purple": "_color-purple_19ug4_158",
  "color-gray": "_color-gray_19ug4_162",
  "color-contrast": "_color-contrast_19ug4_166",
  "variant-light": "_variant-light_19ug4_172",
  "variant-outline": "_variant-outline_19ug4_244"
}, Ea = 99;
function i1(e) {
  return e < Ea ? `+${e}` : `${Ea}+`;
}
function Tn(e) {
  const t = typeof e == "string" ? e : JSON.stringify(e);
  let r = 5381;
  for (let n = 0; n < t.length; n++) {
    const o = t.charCodeAt(n);
    r = (r << 5) + r + o;
  }
  return r >>> 0;
}
const a1 = (e, t, r) => Math.min(Math.max(e, t), r), s1 = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "lightblue",
  "purple"
];
function l1(e, t = s1) {
  if (!e) return "gray";
  const r = Tn(e), n = Math.abs(r) % t.length;
  return t[n];
}
const Ra = 2;
function c1(e) {
  if (!e) return "";
  const t = e.trim().split(/\s+/);
  return t.length === 1 ? e.slice(0, Ra).toUpperCase() : t.map((r) => r[0]).slice(0, Ra).join("").toUpperCase();
}
const u1 = {
  24: 8,
  32: 12,
  40: 12,
  44: 12,
  48: 12,
  56: 16,
  84: 24,
  96: 24,
  208: 8
};
function d1(e, t) {
  return t === "circle" ? e / 2 : u1[e] || 12;
}
const f1 = {
  24: "typography-subtitle-4-semibold",
  32: "typography-subtitle-2-semibold",
  40: "typography-subtitle-1-semibold",
  44: "typography-subtitle-1-semibold",
  48: "typography-subtitle-1-semibold",
  56: "typography-subtitle-1-semibold",
  84: "typography-title-3-semibold",
  96: "typography-title-3-semibold",
  208: "typography-title-1-semibold"
};
function p1(e) {
  return f1[e] || "typography-subtitle-1-semibold";
}
const v1 = "data:image/svg+xml,%3csvg%20opacity='0.9'%20preserveAspectRatio='xMinYMin%20meet'%20viewBox='0%200%20208%20208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cfilter%20id='shadowW'%20filterUnits='userSpaceOnUse'%3e%3cfeDropShadow%20dx='-2'%20dy='-1'%20stdDeviation='5'%20flood-color='rgba(0,0,0,0.5)'/%3e%3c/filter%3e%3c/defs%3e%3cg%20filter='url(%23shadowW)'%3e%3cpath%20d='M23.9835%20174.59L113.41%20157.735L225.224%20191.671C225.224%20191.671%20250.259%20479.463%20243.525%20478.31C236.655%20477.167%20-7.79434%20482.039%20-8.17876%20476.943C-8.56308%20471.849%20-34.4445%20341.701%20-34.4445%20341.701L23.9835%20174.59Z'%20fill='darkgrey'/%3e%3cpath%20d='M-54.5558%20212.781C-85.688%20282.842%20-94.2122%20303.839%20-94.2122%20303.839L-213.504%20213.002C-214.953%20197.465%20-218.637%20181.68%20-225.636%20167.806C-234.412%20150.606%20-246.154%20149.138%20-259.595%20136.166C-267.368%20128.583%20-275.073%20140.242%20-267.3%20147.825L-259.338%20156.087C-258.869%20160.482%20-255.518%20171.861%20-254.634%20176.226C-267.475%20165.702%20-284.704%20150.246%20-300.665%20144.25C-305.079%20142.644%20-308.958%20144.46%20-311.08%20147.528C-314.628%20148.211%20-317.292%20151.458%20-317.858%20154.963C-321.103%20157.839%20-322.625%20163.354%20-319.254%20167.67C-321.407%20170.323%20-322.376%20173.998%20-320.433%20177.728C-320.274%20177.993%20-320.127%20178.12%20-320.106%20178.395C-320.997%20179.432%20-319.498%20182.78%20-320.337%20184.506C-324.035%20192.401%20-309.357%20221.757%20-285.221%20235.167C-277.291%20250.355%20-262.477%20259.485%20-261.354%20259.677C-234.512%20290.608%20-141.301%20400.999%20-97.2451%20436.169C-47.2868%20476.158%20-12.9855%20418.735%2010.6424%20317.115C34.2598%20215.358%2037.6457%20181.315%2037.6457%20181.315L116.374%20158.482C14.4423%20160.079%20-23.2964%20142.572%20-54.5558%20212.781Z'%20fill='darkgrey'/%3e%3cpath%20d='M116.781%20158.313L114.885%20158.871L61.4974%20174.391L38.0516%20181.145C38.0516%20181.145%2034.6758%20215.325%2011.0481%20316.945C9.47097%20323.572%207.88344%20330.061%206.27525%20336.275C-22.5942%20315.191%20-52.217%20295.131%20-82.0946%20275.368C-75.9632%20261.197%20-67.1116%20240.867%20-54.4359%20212.493C-30.4015%20158.477%20-2.57835%20156.516%2055.793%20157.512C72.5674%20157.77%2091.7239%20158.403%20114.133%20158.096C114.98%20158.309%20115.807%20158.247%20116.781%20158.313Z'%20fill='darkgrey'/%3e%3cpath%20d='M113.269%20157.745C175.26%20159.023%20252.771%20143.897%20266.382%20199.504C279.867%20255.26%20288.576%20280.774%20295.899%20320.932C303.221%20361.091%20322.043%20408.689%20271.897%20417.595C221.75%20426.502%20106.238%20444.495%20106.238%20444.495L78.8767%20384.662C78.8767%20384.662%20170.648%20343.813%20200.242%20332.303L185.17%20211.448L113.269%20157.745Z'%20fill='darkgrey'/%3e%3cpath%20d='M292.122%20302.108C260.506%20305.187%20228.942%20308.953%20198.219%20316.533L185.178%20211.585L140.855%20178.374L114.874%20158.871L114.144%20158.372L113.266%20157.746C127.138%20158.084%20141.774%20157.534%20156.283%20157.131C206.726%20155.818%20255.78%20156.271%20266.252%20199.654C277.643%20246.012%20285.665%20271.578%20292.122%20302.108Z'%20fill='darkgrey'/%3e%3cpath%20d='M108.001%20172.269C119.623%20168.485%20130.939%20164.308%20142.395%20160.12L112.224%20101.608L68.8441%20124.959C69.7222%20125.585%2079.0944%20154.372%2086.547%20177.904C93.7406%20175.977%20100.965%20174.463%20108.001%20172.269Z'%20fill='white'/%3e%3cpath%20d='M99.3655%20112.96C99.0934%20111.18%2098.8213%20109.401%2098.2722%20107.642L68.9864%20125.083C69.5682%20125.455%2073.8492%20138.148%2078.7406%20153.426C89.4856%20141.676%2097.5757%20127.773%2099.3655%20112.96Z'%20fill='darkgrey'/%3e%3cpath%20d='M144.524%2069.1209C143.075%2053.5829%20118.601%2039.3668%2099.9856%2038.5556C91.9262%2038.1943%2089.5107%2031.8684%2086.0605%2037.5291C77.5782%2051.7392%2049.6837%2094.9694%2052.2654%20110.837C56.0862%20133.951%2084.5691%20137.063%20102.228%20127.008C120.022%20116.942%20146.6%2091.1195%20144.524%2069.1209Z'%20fill='white'/%3e%3cpath%20d='M145.753%2072.4915C147.93%2068.3116%20146.317%2063.4483%20142.804%2060.944C142.656%2060.8166%20142.656%2060.8166%20142.507%2060.6894C143.028%2052.8957%20136.915%2047.1257%20129.979%2046.9567C129.007%2045.0914%20127.379%2043.691%20125.24%2042.883C124.903%2042.0778%20124.575%2041.4101%20123.982%2040.9009C122.651%2039.7551%20121.095%2039.3187%20119.441%2039.4435C118.081%2036.0843%20115.925%2033.2005%20112.495%2031.7977C110.348%2030.8519%20108.027%2031.304%20106.311%2032.4027C102.006%2028.5734%2096.789%2025.5051%2091.8112%2025.6038C89.736%2025.6218%2085.678%2026.8973%2084.2724%2032.1268C82.1968%2032.1449%2080.3522%2033.3917%2079.5546%2035.6676C78.427%2039.0759%2080.339%2042.3935%2083.1109%2044.2613C84.719%2045.3863%2086.9841%2046.0462%2089.0391%2045.7526C95.9026%2052.2969%20114.028%2063.1149%20118.148%2062.6657C115.532%2070.202%20113.218%2087.2698%20122.007%2088.1299C124.21%2095.3028%20116.99%20107.894%20121.368%20112.688C129.639%20104.863%20137.246%2095.5655%20141.359%2085.8391C141.496%2085.8288%20141.772%2085.808%20142.047%2085.7872C148.14%2083.9429%20149.527%2076.6377%20145.753%2072.4915Z'%20fill='darkgrey'/%3e%3cpath%20d='M140.151%20104.76C141.594%2096.3432%20132.67%2086.3542%20121.049%2088.3387C116.251%2096.3166%20111.305%20104.167%20106.21%20111.89C109.317%20116.364%20118.141%20121.376%20125.535%20120.264C133.872%20118.804%20138.613%20113.738%20140.151%20104.76Z'%20fill='white'/%3e%3cpath%20d='M156.755%20156.883C153.217%20165.043%20147.805%20172.237%20141.188%20178.136C133.925%20184.639%20125.011%20189.465%20114.809%20191.896C95.2214%20196.558%2072.2825%20189.842%2061.6836%20174.164C58.5559%20169.414%2056.4778%20163.894%2056%20157.561C72.7744%20157.818%2091.9311%20158.451%20114.34%20158.144L113.462%20157.519C127.463%20157.709%20142.098%20157.159%20156.755%20156.883Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e", h1 = "data:image/svg+xml,%3csvg%20viewBox='0%200%20208%20208'%20opacity='0.9'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23shadow)'%3e%3cpath%20filter='url(%23shadow)'%20d='M127.173%2079.8894C127.189%2079.1933%20128.026%2079.1201%20128.436%2079.4316C128.754%2079.6091%20128.895%2080.1021%20128.809%2080.5518C129.241%2083.1982%20129.581%2085.7106%20130.013%2088.357C136.835%2079.7558%20149.235%2076.9989%20158.979%2083.174C168.086%2088.9941%20171.001%20111.745%20135.501%20120.502C131.5%20123.502%20117%20125.002%20111.753%20103.279C111.682%2093.2427%20118.526%2084.529%20127.173%2079.8894Z'%20fill='darkgrey'/%3e%3cpath%20d='M28.0441%20167.788C21.826%20195.052%2018.7311%20223.361%2014.1881%20250.885C9.42226%20279.982%204.68042%20308.967%20-0.0853729%20338.064L-1.00047%20342.848C14.5039%20346.419%2030.8401%20350.407%2046.3671%20353.868C90.9428%20363.918%20134.837%20376.598%20179.293%20387.201C200.345%20337.142%20219.778%20286.027%20235.82%20234.041C243.806%20208.213%20244.758%20181.282%20225.443%20160.043C216.099%20149.841%20204.347%20143.858%20191.629%20140.212C188.924%20139.377%20186.108%20138.517%20183.355%20137.905C179.635%20136.959%20175.781%20136.1%20171.989%20135.487C167.45%20134.592%20162.753%20133.893%20158.277%20133.243L127.871%20128.671L116.251%20126.895C115.457%20126.833%20114.686%20126.662%20113.915%20126.49C102.87%20124.724%2091.7381%20122.824%2080.6188%20123.013C69.1682%20123.13%2056.9012%20125.964%2047.8363%20133.224C36.9821%20141.825%2031.1109%20154.087%2028.0441%20167.788Z'%20fill='darkgrey'/%3e%3cpath%20d='M103.74%20123.732L95.6984%20197.532C95.6984%20197.532%20137.13%20157.315%20158.742%20133.268C155.051%20132.316%20151.227%20131.449%20147.465%20130.831C142.962%20129.929%20138.302%20129.224%20133.861%20128.569L103.74%20123.732Z'%20fill='white'/%3e%3cpath%20d='M97.8143%20115.298C99.0227%20116.625%20108.229%20179.332%20108.229%20179.332L148.012%20142.157L129%20100L97.8143%20115.298Z'%20fill='white'/%3e%3cpath%20d='M101.71%20148.534C100.068%20137.868%2098.402%20127.706%2098.0001%20127.274L112.673%20122C113.831%20131.449%20108.467%20141.173%20101.71%20148.534Z'%20fill='grey'/%3e%3cpath%20d='M121.545%2040.7383C111.161%2030.599%2085.3871%2035.4814%2071.93%2046.2862C66.0912%2051.0172%2060.5415%2047.9025%2061.6427%2054.0842C64.3767%2069.3597%2074.0239%20120.283%2082.7631%20126.794C100.374%20139.728%20121.191%20125.699%20127.329%20107.658C133.554%2089.7517%20136.293%2055.2372%20121.545%2040.7383Z'%20fill='white'/%3e%3cpath%20d='M56.0176%2041.9837C61.9834%2036.7831%2074.9427%2037.4243%2081.3074%2039.639C95.1733%2033.9235%20112.672%2032.6801%20120.968%2040.1438C131.22%2049.4771%20133.446%2067.5345%20132.042%2083.8281C125.848%2083.0025%20122.779%2078.6471%20116.718%2075.0286C97.7466%2073.2611%2084.9353%2061.0313%2082.042%2054.2301C78.3492%2058.2067%2063.3398%2059.3993%2058.12%2055.1646C51.1278%2048.7596%2054.1283%2043.6248%2056.0176%2041.9837Z'%20fill='darkgrey'/%3e%3cpath%20d='M142.838%2074.8316C138.561%2067.841%20123.674%2066.785%20116.5%2075.5006C118.078%2084.3219%20121.503%2092.5524%20122.726%20101.41C127.77%20102.657%20137.388%20100.869%20141.908%2095.386C147.168%2089.1414%20147.462%2082.3637%20142.838%2074.8316Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='shadow'%3e%3cfeDropShadow%20dx='0'%20dy='0'%20stdDeviation='3'%20flood-color='rgba(0,0,0,0.3)'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e", m1 = "data:image/svg+xml,%3csvg%20opacity='0.9'%20viewBox='0%200%20208%20208'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cmask%20id='hole'%3e%3crect%20width='100%25'%20height='100%25'%20fill='white'/%3e%3ccircle%20cx='121.333'%20cy='121.333'%20r='52'%20fill='black'/%3e%3c/mask%3e%3cfilter%20id='shadow'%3e%3cfeDropShadow%20dx='-2'%20dy='-1'%20stdDeviation='10'%20flood-color='rgba(0,0,0,0.2)'/%3e%3c/filter%3e%3c/defs%3e%3cg%20filter='url(%23shadow)'%3e%3ccircle%20cx='104'%20cy='225.333'%20r='95.3333'%20fill='darkgray'/%3e%3ccircle%20cx='104'%20cy='225.333'%20r='95.3333'%20fill='white'%20mask='url(%23hole)'/%3e%3ccircle%20cx='104'%20cy='86.6666'%20r='52'%20fill='white'/%3e%3c/g%3e%3c/svg%3e", g1 = "data:image/svg+xml,%3csvg%20opacity='0.9'%20viewBox='0%200%20208%20208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23shadow)'%3e%3cpath%20d='M168%20208V118.053C168%20113.824%20165.34%20110.052%20161.356%20108.633L134%2098.885V208H168Z'%20fill='darkgrey'/%3e%3cpath%20d='M40%2072.3726C40%2070.7381%2040.9944%2069.268%2042.5116%2068.6598L111.951%2040.8215C113.226%2040.3102%20114.675%2040.4893%20115.787%2041.2958L129.87%2051.5056C132.464%2053.3866%20134%2056.397%20134%2059.6017V208H40V72.3726Z'%20fill='white'/%3e%3cpath%20d='M114%2047.5001L126.325%2056.3036C127.376%2057.0544%20128%2058.2667%20128%2059.5585V208H114V47.5001Z'%20fill='darkgrey'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='shadow'%3e%3cfeDropShadow%20dx='-2'%20dy='-1'%20stdDeviation='7'%20flood-color='rgba(0,0,0,0.2)'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e", b1 = {
  male: v1,
  female: h1,
  org: g1,
  neutral: m1
}, yn = l.forwardRef((e, t) => {
  const {
    style: r,
    size: n = 40,
    isLoading: o = !1,
    isDisabled: i = !1,
    shape: a = "circle",
    variant: s = "filled",
    placeholderType: u = "neutral",
    name: c,
    imgSrc: d,
    imgAlt: f,
    icon: h,
    imgProps: p,
    colorScheme: g,
    className: y,
    "data-testid": v,
    ...x
  } = e, { onClick: b, onPointerDown: _ } = x, S = !i && !o && (!!b || !!_), [E, w] = l.useState(!1);
  l.useEffect(() => {
    d && w(!1);
  }, [d]);
  const L = d && !E ? "image" : h ? "icon" : c ? "name" : "placeholder", M = g || L === "name" && l1(c) || "gray", j = p1(n), A = d1(n, a), P = I(
    y,
    at.avatar,
    at[`variant-${s}`],
    at[`color-${M}`],
    xe[j],
    {
      [at.disabled]: i,
      [at.loading]: o,
      [at.clickable]: S
    }
  ), H = {
    "--avatar-size": `${n}px`,
    "--avatar-border-radius": `${A}px`,
    ...r
  }, T = {
    icon: () => /* @__PURE__ */ m.jsx("span", { "data-testid": "avatar-icon", title: f || void 0, role: "img", className: at.icon, children: h?.({}) }),
    name: () => /* @__PURE__ */ m.jsx(
      "span",
      {
        role: "textbox",
        "data-testid": "avatar-name",
        className: at.name,
        title: f || void 0,
        children: c1(c || "")
      }
    ),
    placeholder: () => /* @__PURE__ */ m.jsx(
      "img",
      {
        ...p,
        "data-testid": "avatar-placeholder",
        className: at.image,
        src: b1[u],
        alt: f || void 0
      }
    ),
    image: () => /* @__PURE__ */ m.jsx(
      "img",
      {
        "data-testid": "avatar-image",
        ...p,
        className: at.image,
        src: d || void 0,
        alt: f || void 0,
        onLoad: () => w(!1),
        onError: (k) => {
          var N;
          w(!0), (N = p?.onError) == null || N.call(p, k);
        }
      }
    )
  }, R = (k) => {
    S && b?.(k);
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      ref: t,
      onClick: R,
      className: P,
      style: H,
      "data-testid": v,
      "aria-disabled": i || o,
      children: T[L](null)
    }
  );
}), y1 = "_avatarGroup_157g4_1", _1 = {
  avatarGroup: y1
}, x1 = (e) => e === "rgba(0, 0, 0, 0)" || e === "transparent" || e.startsWith("rgba") && e.endsWith(", 0)"), w1 = (e) => {
  if (!e) return null;
  let t = e;
  for (; t; ) {
    const r = window.getComputedStyle(t).backgroundColor;
    if (!x1(r)) return r;
    t = t.parentElement;
  }
  return null;
}, gi = () => {
  const e = l.useRef(null), [t, r] = l.useState(null);
  return l.useEffect(() => {
    if (e.current) {
      const n = w1(e.current);
      r(n);
    }
  }, []), { ref: e, bgColor: t };
};
function ka(e, t, r) {
  l.useEffect(() => (window.addEventListener(e, t, r), () => window.removeEventListener(e, t, r)), [e, t]);
}
const La = {
  passive: !0
};
function C1() {
  const [e, t] = l.useState({
    width: 0,
    height: 0
  }), r = l.useCallback(() => {
    t({ width: window.innerWidth || 0, height: window.innerHeight || 0 });
  }, []);
  return ka("resize", r, La), ka("orientationchange", r, La), l.useEffect(r, []), e;
}
function S1(e = 768) {
  const { width: t } = C1();
  return l.useMemo(() => t <= e, [t, e]);
}
const E1 = 2, R1 = (e) => {
  const {
    avatars: t = [],
    size: r = 40,
    overlap: n = 0.3,
    shape: o = "circle",
    overflowCount: i = 0,
    overflowProps: a,
    cutoutBackground: s
  } = e, u = -(r * n) + E1, { ref: c, bgColor: d } = gi(), f = s || d || "#ffffff", h = Gt(_1.avatarGroup), p = {
    "--avatar-cutout-bg": f
  };
  return t.length === 0 ? null : /* @__PURE__ */ m.jsxs("div", { className: h, ref: c, style: p, children: [
    t.map((g, y) => {
      if (g.wrapper) {
        const v = g.wrapper;
        return /* @__PURE__ */ m.jsx(
          "div",
          {
            style: {
              marginRight: u
            },
            children: /* @__PURE__ */ m.jsx(v, { children: /* @__PURE__ */ m.jsx(yn, { size: r, shape: o, ...g }) })
          },
          Tn(g) + y
        );
      }
      return /* @__PURE__ */ m.jsx(
        "div",
        {
          style: {
            marginRight: u
          },
          children: /* @__PURE__ */ m.jsx(yn, { size: r, shape: o, ...g })
        },
        Tn(g) + y
      );
    }),
    i > 0 && /* @__PURE__ */ m.jsx("div", { style: { marginRight: u }, children: /* @__PURE__ */ m.jsx(
      yn,
      {
        size: r,
        shape: o,
        icon: () => i1(i),
        colorScheme: "gray",
        variant: "light",
        ...a
      }
    ) })
  ] });
}, k1 = Object.assign(yn, {
  Group: R1
}), L1 = "_overlay_g6rp8_6", M1 = "_container_g6rp8_20", yo = {
  overlay: L1,
  container: M1,
  "placement-default": "_placement-default_g6rp8_34",
  "placement-default-stretched": "_placement-default-stretched_g6rp8_41",
  "placement-center": "_placement-center_g6rp8_48",
  "placement-center-stretched": "_placement-center-stretched_g6rp8_54",
  "placement-left-drawer": "_placement-left-drawer_g6rp8_62",
  "placement-right-drawer": "_placement-right-drawer_g6rp8_66",
  "placement-mobile": "_placement-mobile_g6rp8_71"
};
function N1(e) {
  switch (e) {
    case "default":
      return "top";
    case "mobile":
      return "bottom";
    // Для 'center' мы не возвращаем значение, так как центрирование
    // полностью контролируется через CSS в оверлее.
    case "center":
    default:
      return;
  }
}
const T1 = (e) => {
  switch (e) {
    case "mobile":
      return {
        initial: { transform: "translateY(100%)" },
        open: { opacity: 1, transform: "translateY(0)" },
        close: { transform: "translateY(100%)" }
      };
    case "right-drawer":
      return {
        initial: { transform: "translateX(100%)" },
        open: { opacity: 1, transform: "translateX(0)" },
        close: { transform: "translateX(100%)" }
      };
    case "left-drawer":
      return {
        initial: { transform: "translateX(-100%)" },
        open: { opacity: 1, transform: "translateX(0)" },
        close: { transform: "translateX(-100%)" }
      };
    default:
      return {
        initial: { transform: "scale(0.95)" },
        open: { opacity: 1, transform: "scale(1)" },
        close: { transform: "scale(0.95)" }
      };
  }
};
function P1({
  open: e,
  onOpenChange: t,
  placement: r = "center",
  disableOutsideClick: n = !1,
  disableEscapeKey: o = !1
}) {
  const i = l.useCallback(
    (y) => {
      t?.(y);
    },
    [t]
  ), a = N1(r), { context: s, refs: u } = $c({
    open: e,
    onOpenChange: i,
    placement: a
  }), c = T1(r), { isMounted: d, styles: f } = qc(s, {
    duration: 200,
    common: {
      transitionProperty: "opacity, transform",
      transitionTimingFunction: "ease-in-out",
      transformOrigin: a,
      position: "fixed",
      opacity: 0
    },
    ...c
  }), h = zc(s, {
    outsidePress: !n,
    outsidePressEvent: "mousedown",
    escapeKey: !o
  }), p = Wc(s, { role: "dialog" }), { getFloatingProps: g } = Fc([h, p]);
  return l.useMemo(
    () => ({
      /** Состояние для условного рендеринга с поддержкой анимации закрытия. */
      isMounted: d,
      /** Стили для CSS-переходов (анимации). */
      transitionStyles: f,
      /** Контекст Floating UI. */
      context: s,
      /** Ссылки на элементы для Floating UI. */
      refs: u,
      /** Пропсы для плавающего элемента. */
      getFloatingProps: g
    }),
    [d, f, s, u, g]
  );
}
const Gs = l.forwardRef((e, t) => {
  const {
    placement: r = "default",
    open: n,
    onOpenChange: o,
    overlayClassName: i,
    children: a,
    disableOutsideClick: s = !1,
    disableEscapeKey: u = !1,
    className: c,
    style: d,
    "data-testid": f,
    ...h
  } = e;
  n === void 0 && console.error(
    "Dialog: компонент должен быть контролируемым. Используйте пропсы open и onOpenChange."
  );
  const p = P1({
    open: n,
    onOpenChange: o,
    placement: r,
    disableOutsideClick: s,
    disableEscapeKey: u
  }), { isMounted: g, transitionStyles: y } = p, v = fc([t, p.refs.setFloating]);
  return g ? /* @__PURE__ */ m.jsxs(kc, { children: [
    /* @__PURE__ */ m.jsx(
      Ac,
      {
        "data-testid": "dialog-overlay",
        className: I(yo.overlay, i),
        lockScroll: !0,
        style: { opacity: y?.opacity, transition: y?.transition }
      }
    ),
    /* @__PURE__ */ m.jsx(Pc, { context: p.context, children: /* @__PURE__ */ m.jsx(
      "div",
      {
        ref: v,
        "aria-modal": "true",
        role: "dialog",
        className: I(c, yo.container, yo[`placement-${r}`]),
        style: { ...d, ...y },
        "data-testid": f,
        ...p.getFloatingProps(h),
        children: a
      }
    ) })
  ] }) : null;
}), j1 = "_container_e56bn_5", A1 = "_header_e56bn_22", O1 = "_title_e56bn_32", D1 = "_subTitle_e56bn_36", z1 = "_actions_e56bn_40", I1 = "_content_e56bn_62", $1 = "_footer_e56bn_75", F1 = "_divider_e56bn_82", Ze = {
  container: j1,
  header: A1,
  title: O1,
  subTitle: D1,
  actions: z1,
  "title-text": "_title-text_e56bn_46",
  "description-text": "_description-text_e56bn_54",
  content: I1,
  "content-for-side-drawer": "_content-for-side-drawer_e56bn_69",
  footer: $1,
  divider: F1
}, B1 = "_typography_zt7xg_1", W1 = "_disabled_zt7xg_8", H1 = "_primary_zt7xg_13", V1 = "_secondary_zt7xg_18", q1 = "_tertiary_zt7xg_23", K1 = "_accent_zt7xg_28", U1 = "_positive_zt7xg_38", Z1 = "_negative_zt7xg_48", G1 = "_warning_zt7xg_58", X1 = "_special_zt7xg_68", Q1 = "_contrast_zt7xg_78", vr = {
  typography: B1,
  disabled: W1,
  primary: H1,
  secondary: V1,
  tertiary: q1,
  accent: K1,
  "accent-secondary": "_accent-secondary_zt7xg_33",
  positive: U1,
  "positive-secondary": "_positive-secondary_zt7xg_43",
  negative: Z1,
  "negative-secondary": "_negative-secondary_zt7xg_53",
  warning: G1,
  "warning-secondary": "_warning-secondary_zt7xg_63",
  special: X1,
  "special-secondary": "_special-secondary_zt7xg_73",
  contrast: Q1,
  "contrast-secondary": "_contrast-secondary_zt7xg_83"
}, J1 = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5"
}, Ma = (e) => {
  const t = l.forwardRef(
    ({
      size: r = 3,
      children: n,
      className: o,
      "data-testid": i,
      as: a,
      fontWeight: s = "semibold",
      disabled: u = !1,
      typographyStyle: c = "primary",
      ...d
    }, f) => {
      const h = a || J1[r], p = I(
        vr.typography,
        xe[`typography-${e}-${r}-${s}`],
        vr[c],
        {
          [vr.disabled]: u
        },
        o
      );
      return n ? /* @__PURE__ */ m.jsx(h, { ref: f, className: p, "data-testid": i, ...d, children: n }) : null;
    }
  );
  return t.displayName = `Typography.${e === "title" ? "Title" : "Subtitle"}`, t;
}, Na = (e) => {
  const t = l.forwardRef(
    ({
      size: r = 3,
      children: n,
      className: o,
      "data-testid": i,
      as: a = "p",
      fontWeight: s = "regular",
      disabled: u = !1,
      typographyStyle: c = "primary",
      ...d
    }, f) => {
      const h = a, p = I(
        vr.typography,
        xe[`typography-${e}-${r}-${s}`],
        vr[c],
        {
          [vr.disabled]: u
        },
        o
      );
      return n ? /* @__PURE__ */ m.jsx(
        h,
        {
          ref: f,
          className: p,
          "data-testid": i,
          ...d,
          children: n
        }
      ) : null;
    }
  );
  return t.displayName = `Typography.${e.charAt(0).toUpperCase() + e.slice(1)}`, t;
}, Xo = {
  Title: Ma("title"),
  Subtitle: Ma("subtitle"),
  Label: Na("label"),
  Paragraph: Na("paragraph")
}, { Paragraph: Y1, Title: e0 } = Xo, t0 = [
  "right-drawer",
  "left-drawer"
], r0 = (e) => {
  const { closeButtonProps: t, onOpenChange: r } = e, { wrapper: n, ...o } = t || {}, i = {
    size: "xs",
    mode: "primary",
    buttonStyle: "gray",
    iconLeft: /* @__PURE__ */ m.jsx(Zf, {}),
    "aria-label": "Close modal",
    onClick: () => r(!1),
    ...o
  };
  return n ? /* @__PURE__ */ m.jsx(n, { children: /* @__PURE__ */ m.jsx(Go, { ...i }) }) : /* @__PURE__ */ m.jsx(Go, { ...i });
}, im = l.forwardRef((e, t) => {
  const {
    open: r,
    onOpenChange: n,
    size: o,
    placement: i = "default",
    showCloseButton: a = !0,
    closeButtonProps: s,
    title: u,
    subTitle: c,
    actions: d,
    children: f,
    footer: h,
    hideHeaderDivider: p,
    hideFooterDivider: g,
    className: y,
    classNames: v,
    styles: x,
    ...b
  } = e, _ = t0.includes(i), S = !!(u || c || d);
  return /* @__PURE__ */ m.jsx(
    Gs,
    {
      open: r,
      onOpenChange: n,
      placement: i,
      ref: t,
      style: { width: o },
      ...b,
      children: /* @__PURE__ */ m.jsxs(
        "div",
        {
          className: I(Ze.container, y, v?.container),
          style: { width: o, ...x?.container },
          "data-testid": b["data-testid"] ? `${b["data-testid"]}-container` : void 0,
          children: [
            S && /* @__PURE__ */ m.jsxs("div", { className: Ze.header, children: [
              /* @__PURE__ */ m.jsx("div", { className: I(Ze.title, v?.title), style: x?.title, children: typeof u == "string" ? /* @__PURE__ */ m.jsx(e0, { size: 5, className: Ze["title-text"], children: u }) : u }),
              /* @__PURE__ */ m.jsxs("div", { className: Ze.actions, children: [
                d,
                a && /* @__PURE__ */ m.jsx(r0, { closeButtonProps: s, onOpenChange: n })
              ] }),
              c && /* @__PURE__ */ m.jsx("div", { className: I(Ze.subTitle, v?.subTitle), style: x?.subTitle, children: typeof c == "string" ? /* @__PURE__ */ m.jsx(
                Y1,
                {
                  size: 2,
                  typographyStyle: "secondary",
                  className: Ze["description-text"],
                  children: c
                }
              ) : c })
            ] }),
            !p && S && /* @__PURE__ */ m.jsx("hr", { className: Ze.divider }),
            /* @__PURE__ */ m.jsx(
              "div",
              {
                className: I(
                  _ ? Ze["content-for-side-drawer"] : Ze.content,
                  v?.content
                ),
                style: {
                  ...x?.content
                },
                "data-testid": b["data-testid"] ? `${b["data-testid"]}-content` : void 0,
                children: f
              }
            ),
            !g && h && /* @__PURE__ */ m.jsx("hr", { className: Ze.divider }),
            h && /* @__PURE__ */ m.jsx("div", { className: I(Ze.footer, v?.footer), style: x?.footer, children: h })
          ]
        }
      )
    }
  );
}), n0 = () => /* @__PURE__ */ m.jsx(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ m.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9H12.01C12.5623 9 13.01 8.55228 13.01 8C13.01 7.44772 12.5623 7 12.01 7H12ZM13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12Z"
      }
    )
  }
), o0 = () => /* @__PURE__ */ m.jsx(
  "svg",
  {
    width: "23",
    height: "22",
    viewBox: "0 0 23 22",
    fill: "none",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ m.jsx(
      "path",
      {
        d: "M5.09436 10.2288C5.03221 9.82823 4.99996 9.41786 4.99996 9C4.99996 4.58172 8.60525 1 13.0526 1C17.4999 1 21.1052 4.58172 21.1052 9C21.1052 9.99807 20.9213 10.9535 20.5852 11.8345C20.5154 12.0175 20.4804 12.109 20.4646 12.1804C20.4489 12.2512 20.4428 12.301 20.4411 12.3735C20.4394 12.4466 20.4493 12.5272 20.4692 12.6883L20.8717 15.9585C20.9153 16.3125 20.9371 16.4895 20.8782 16.6182C20.8266 16.731 20.735 16.8205 20.6211 16.8695C20.4911 16.9254 20.3146 16.8995 19.9617 16.8478L16.7765 16.3809C16.6101 16.3565 16.527 16.3443 16.4512 16.3448C16.3763 16.3452 16.3245 16.3507 16.2511 16.3661C16.177 16.3817 16.0823 16.4172 15.893 16.4881C15.0097 16.819 14.0524 17 13.0526 17C12.6344 17 12.2237 16.9683 11.8227 16.9073M6.63158 21C9.59648 21 12 18.5376 12 15.5C12 12.4624 9.59648 10 6.63158 10C3.66668 10 1.26316 12.4624 1.26316 15.5C1.26316 16.1106 1.36028 16.6979 1.53955 17.2467C1.61533 17.4787 1.65322 17.5947 1.66566 17.6739C1.67864 17.7567 1.68091 17.8031 1.67608 17.8867C1.67145 17.9668 1.65141 18.0573 1.61134 18.2383L1 21L3.9948 20.591C4.15827 20.5687 4.24 20.5575 4.31137 20.558C4.38652 20.5585 4.42641 20.5626 4.50011 20.5773C4.5701 20.5912 4.67416 20.6279 4.88227 20.7014C5.43059 20.8949 6.01911 21 6.63158 21Z",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), i0 = () => /* @__PURE__ */ m.jsx(
  "svg",
  {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "currentColor",
    stroke: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ m.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11ZM16.2071 7.29289C16.5976 7.68342 16.5976 8.31658 16.2071 8.70711L10.2071 14.7071C9.81658 15.0976 9.18342 15.0976 8.79289 14.7071L5.79289 11.7071C5.40237 11.3166 5.40237 10.6834 5.79289 10.2929C6.18342 9.90237 6.81658 9.90237 7.20711 10.2929L9.5 12.5858L14.7929 7.29289C15.1834 6.90237 15.8166 6.90237 16.2071 7.29289Z"
      }
    )
  }
), a0 = () => /* @__PURE__ */ m.jsx(
  "svg",
  {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "currentColor",
    stroke: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ m.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM12 7C12 6.44772 11.5523 6 11 6C10.4477 6 10 6.44772 10 7V11C10 11.5523 10.4477 12 11 12C11.5523 12 12 11.5523 12 11V7ZM11 14C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H11.01C11.5623 16 12.01 15.5523 12.01 15C12.01 14.4477 11.5623 14 11.01 14H11Z"
      }
    )
  }
), s0 = () => /* @__PURE__ */ m.jsx(
  "svg",
  {
    width: "22",
    height: "20",
    viewBox: "0 0 22 20",
    fill: "currentColor",
    stroke: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ m.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.556 0.392576C9.99433 0.136202 10.4918 0 11 0C11.5082 0 12.0057 0.136202 12.444 0.392576C12.882 0.648777 13.2446 1.01526 13.5002 1.45305L13.503 1.45776L21.6098 15.5175L21.6175 15.5312C21.8676 15.9811 21.9986 16.4885 22 17.0032C22.0014 17.5179 21.8731 18.026 21.6255 18.4773C21.3778 18.9288 21.018 19.3098 20.5781 19.5786C20.1379 19.8477 19.6345 19.994 19.1182 19.9999L19.1068 20.0001L2.88178 20C2.36548 19.9941 1.86205 19.8477 1.4219 19.5786C0.982049 19.3098 0.62222 18.9288 0.374484 18.4773C0.126864 18.026 -0.00137604 17.5179 1.1135e-05 17.0032C0.00139837 16.4885 0.132377 15.9811 0.382473 15.5312L0.390218 15.5175L8.49974 1.45305C8.75537 1.01525 9.11797 0.648777 9.556 0.392576ZM12 7.06811C12 6.51582 11.5523 6.06811 11 6.06811C10.4477 6.06811 10 6.51582 10 7.06811V11.0454C10 11.5977 10.4477 12.0454 11 12.0454C11.5523 12.0454 12 11.5977 12 11.0454V7.06811ZM11 14.0227C10.4477 14.0227 10 14.4704 10 15.0227C10 15.575 10.4477 16.0227 11 16.0227H11.0096C11.5619 16.0227 12.0096 15.575 12.0096 15.0227C12.0096 14.4704 11.5619 14.0227 11.0096 14.0227H11Z"
      }
    )
  }
), _o = {
  avatar: { icon: null, colorScheme: "gray" },
  info: { icon: n0, colorScheme: "gray" },
  success: { icon: i0, colorScheme: "green" },
  warning: { icon: s0, colorScheme: "yellow" },
  error: { icon: a0, colorScheme: "red" },
  dialog: { icon: o0, colorScheme: "blue" }
}, l0 = "_container_dd9oq_1", c0 = {
  container: l0
}, u0 = "_container_r24j4_1", d0 = "_iconContainer_r24j4_11", f0 = "_textContainer_r24j4_18", p0 = "_title_r24j4_27", v0 = "_subtitle_r24j4_27", kr = {
  container: u0,
  iconContainer: d0,
  textContainer: f0,
  title: p0,
  subtitle: v0
}, xo = {
  m: { title: "typography-subtitle-1-semibold", subtitle: "typography-paragraph-3-regular" },
  l: { title: "typography-title-5-semibold", subtitle: "typography-paragraph-2-regular" }
};
function h0(e) {
  return xo?.[e] || xo.m;
}
const m0 = (e) => {
  const {
    iconSlot: t,
    title: r,
    subTitle: n,
    titleProps: o,
    subTitleProps: i,
    className: a,
    children: s,
    "data-testid": u,
    size: c = "m",
    style: d
  } = e, f = h0(c);
  return /* @__PURE__ */ m.jsxs("div", { className: I(kr.container, a), "data-testid": u, style: d, children: [
    !!t && /* @__PURE__ */ m.jsx("div", { className: kr.iconContainer, children: t }),
    (r || n) && /* @__PURE__ */ m.jsxs("div", { className: kr.textContainer, children: [
      r && /* @__PURE__ */ m.jsx(
        "p",
        {
          style: o?.style,
          className: I(kr.title, xe[f.title], o?.className),
          children: r
        }
      ),
      n && /* @__PURE__ */ m.jsx(
        "p",
        {
          style: i?.style,
          className: I(kr.subtitle, xe[f.subtitle], i?.className),
          children: n
        }
      )
    ] }),
    s
  ] });
}, am = (e) => {
  const {
    open: t,
    onOpenChange: r,
    placement: n = "default",
    variant: o = "info",
    title: i,
    description: a,
    children: s,
    variantAvatarProps: u,
    "data-testid": c
  } = e, { icon: d, colorScheme: f } = _o?.[o] || _o.info, h = o === "avatar" ? {
    size: 48,
    colorScheme: "gray",
    variant: "light",
    "data-testid": "alert-avatar",
    ...u
  } : {
    size: 48,
    icon: d,
    colorScheme: f,
    variant: "light",
    style: { fontSize: 24, outline: "none" },
    "data-testid": "alert-icon"
  };
  return /* @__PURE__ */ m.jsx(
    Gs,
    {
      open: t,
      onOpenChange: r,
      placement: n,
      "data-testid": c,
      className: c0.container,
      children: /* @__PURE__ */ m.jsx(
        m0,
        {
          title: i,
          subTitle: a,
          size: "m",
          iconSlot: /* @__PURE__ */ m.jsx(k1, { ...h }),
          children: s
        }
      )
    }
  );
}, g0 = "_wrapper_1mnix_5", b0 = "_badge__container_1mnix_6", y0 = "_badge__content_1mnix_7", _0 = "_interactive_1mnix_20", x0 = "_disabled_1mnix_21", w0 = "_icon_1mnix_22", vt = {
  wrapper: g0,
  badge__container: b0,
  badge__content: y0,
  interactive: _0,
  disabled: x0,
  icon: w0,
  "variant-filled": "_variant-filled_1mnix_98",
  "color-brand": "_color-brand_1mnix_103",
  "color-red": "_color-red_1mnix_111",
  "color-orange": "_color-orange_1mnix_119",
  "color-yellow": "_color-yellow_1mnix_127",
  "color-green": "_color-green_1mnix_135",
  "color-blue": "_color-blue_1mnix_143",
  "color-lightblue": "_color-lightblue_1mnix_151",
  "color-purple": "_color-purple_1mnix_159",
  "color-gray": "_color-gray_1mnix_167",
  "color-contrast": "_color-contrast_1mnix_175",
  "variant-light": "_variant-light_1mnix_184",
  "variant-outline": "_variant-outline_1mnix_260",
  "variant-transparent": "_variant-transparent_1mnix_338",
  "position-top-left": "_position-top-left_1mnix_409",
  "position-top-right": "_position-top-right_1mnix_415",
  "position-bottom-left": "_position-bottom-left_1mnix_421",
  "position-bottom-right": "_position-bottom-right_1mnix_427",
  "position-top-center": "_position-top-center_1mnix_433",
  "position-bottom-center": "_position-bottom-center_1mnix_439",
  "position-middle-left": "_position-middle-left_1mnix_445",
  "position-middle-right": "_position-middle-right_1mnix_451",
  "position-middle-center": "_position-middle-center_1mnix_457",
  "position-top-left-inside": "_position-top-left-inside_1mnix_464",
  "position-top-right-inside": "_position-top-right-inside_1mnix_470",
  "position-bottom-left-inside": "_position-bottom-left-inside_1mnix_476",
  "position-bottom-right-inside": "_position-bottom-right-inside_1mnix_482",
  "position-top-center-inside": "_position-top-center-inside_1mnix_488",
  "position-bottom-center-inside": "_position-bottom-center-inside_1mnix_494",
  "position-middle-left-inside": "_position-middle-left-inside_1mnix_500",
  "position-middle-right-inside": "_position-middle-right-inside_1mnix_506"
}, C0 = l.forwardRef((e, t) => {
  const {
    icon: r,
    children: n,
    variant: o = "filled",
    label: i,
    isHidden: a = !1,
    colorScheme: s = "red",
    size: u = 20,
    position: c = "top-right",
    positionOffset: d = { x: 0, y: 0 },
    cutoutBackground: f,
    isDisabled: h,
    className: p,
    "data-testid": g = "badge",
    ...y
  } = e, { onClick: v, onPointerDown: x } = y, { ref: b, bgColor: _ } = gi(), S = f || _, E = !h && (!!v || !!x), w = Gt(vt.badge__container, vt[`position-${c}`]), L = Gt(
    p,
    vt.badge__content,
    vt[`color-${s}`],
    vt[`variant-${o}`],
    {
      [vt.disabled]: h,
      [vt.icon]: !!r,
      [vt.interactive]: E
    }
  ), M = {
    "--badge-height": `${u}px`,
    "--badge-offset-x": `${d.x}px`,
    "--badge-offset-y": `${d.y}px`,
    ...S && { "--badge-cutout-bg": S },
    ...o === "transparent" && { "--badge-cutout-bg": "transparent" }
  }, j = r?.({}) || i, A = (P) => {
    E && v?.(P);
  };
  return /* @__PURE__ */ m.jsxs("div", { className: vt.wrapper, ref: b, "data-testid": g + "-wrapper", children: [
    n,
    !a && /* @__PURE__ */ m.jsx(
      "span",
      {
        className: w,
        style: M,
        "data-testid": g + "-container",
        children: /* @__PURE__ */ m.jsx(
          "span",
          {
            ...y,
            onClick: A,
            className: L,
            "data-testid": g + "-content",
            ref: t,
            "aria-disabled": h,
            children: j
          }
        )
      }
    )
  ] });
}), S0 = "_container_yn8yz_7", E0 = "_loading_yn8yz_17", R0 = "_error_yn8yz_18", k0 = "_image_yn8yz_22", Lr = {
  container: S0,
  loading: E0,
  error: R0,
  image: k0
}, L0 = ({ width: e = 48, height: t = 48, className: r, "data-testid": n }) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: r,
    "data-testid": n,
    children: /* @__PURE__ */ m.jsx(
      "path",
      {
        d: "M32.4 42H13.8627C12.6511 42 12.0453 42 11.7648 41.7604C11.5214 41.5525 11.3922 41.2407 11.4173 40.9215C11.4462 40.5538 11.8746 40.1254 12.7314 39.2686L29.7373 22.2627C30.5293 21.4707 30.9253 21.0747 31.382 20.9263C31.7837 20.7958 32.2163 20.7958 32.618 20.9263C33.0747 21.0747 33.4707 21.4707 34.2627 22.2627L42 30V32.4M32.4 42C35.7603 42 37.4405 42 38.7239 41.346C39.8529 40.7708 40.7708 39.8529 41.346 38.7239C42 37.4405 42 35.7603 42 32.4M32.4 42H15.6C12.2397 42 10.5595 42 9.27606 41.346C8.14708 40.7708 7.2292 39.8529 6.65396 38.7239C6 37.4405 6 35.7603 6 32.4V15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H32.4C35.7603 6 37.4405 6 38.7239 6.65396C39.8529 7.2292 40.7708 8.14708 41.346 9.27606C42 10.5595 42 12.2397 42 15.6V32.4M21 17C21 19.2091 19.2091 21 17 21C14.7909 21 13 19.2091 13 17C13 14.7909 14.7909 13 17 13C19.2091 13 21 14.7909 21 17Z",
        stroke: "#AABBCA",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), sm = l.forwardRef((e, t) => {
  const {
    alt: r = "",
    loading: n = "lazy",
    src: o,
    isLoading: i = !1,
    style: a,
    className: s,
    containerProps: u,
    "data-testid": c = "image",
    onError: d,
    onLoad: f,
    ...h
  } = e, { className: p, ...g } = u ?? {}, [y, v] = l.useState("loading"), x = y === "error", b = (i || y === "loading") && !x, _ = y === "loaded" && !i, S = I(
    Lr.container,
    { [Lr.loading]: b && !_, [Lr.error]: x && !_ },
    p
  ), E = I(
    Lr.image,
    {
      [Lr.loading]: b
    },
    s
  ), w = l.useCallback(
    (j) => {
      v("loaded"), f?.(j);
    },
    [f]
  ), L = l.useCallback(
    (j) => {
      v("error"), d?.(j);
    },
    [d]
  ), M = {
    loader: /* @__PURE__ */ m.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ m.jsx(Us, { size: 48, variant: "special", "data-testid": `${c}-loader` }),
      /* @__PURE__ */ m.jsx(
        "img",
        {
          alt: r,
          src: o,
          onLoad: w,
          onError: L,
          style: { display: "none" }
        }
      )
    ] }),
    error: /* @__PURE__ */ m.jsx(L0, { "data-testid": `${c}-fallback` }),
    image: /* @__PURE__ */ m.jsx(
      "img",
      {
        ref: t,
        alt: r,
        "data-testid": c,
        loading: n,
        src: o,
        className: E,
        ...h
      }
    )
  };
  return l.useEffect(() => {
    if (!o) {
      v("error");
      return;
    }
    v("loading");
  }, [o]), /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: S,
      "data-testid": `${c}-container`,
      style: a,
      ...g,
      children: [
        b && M.loader,
        x && M.error,
        _ && M.image
      ]
    }
  );
}), M0 = {}, Xs = l.createContext({
  locale: M0
}), N0 = () => {
  const e = l.useContext(Xs);
  if (!e)
    throw new Error("useConfig must be used within a ConfigProvider");
  return e;
}, lm = () => {
  const { locale: e } = N0();
  return e;
}, T0 = {}, P0 = {}, j0 = {}, A0 = {}, O0 = {}, D0 = "_base_1p0qo_50", z0 = "_content_1p0qo_54", I0 = "_background_1p0qo_58", $0 = "_button_1p0qo_62", F0 = "_link_1p0qo_66", B0 = "_input_1p0qo_70", W0 = "_suffix_1p0qo_74", H0 = "_prefix_1p0qo_78", V0 = "_tooltip_1p0qo_82", q0 = "_hint_1p0qo_86", K0 = "_dropdown_1p0qo_90", U0 = "_popover_1p0qo_94", Z0 = "_modalBackdrop_1p0qo_98", G0 = "_modal_1p0qo_98", X0 = "_overlay_1p0qo_106", Q0 = "_drawer_1p0qo_110", J0 = "_notification_1p0qo_114", Y0 = "_alert_1p0qo_118", e2 = "_toast_1p0qo_122", t2 = "_loading_1p0qo_126", r2 = "_error_1p0qo_130", n2 = "_critical_1p0qo_134", o2 = {
  base: D0,
  content: z0,
  background: I0,
  button: $0,
  link: F0,
  input: B0,
  suffix: W0,
  prefix: H0,
  tooltip: V0,
  hint: q0,
  dropdown: K0,
  popover: U0,
  modalBackdrop: Z0,
  modal: G0,
  overlay: X0,
  drawer: Q0,
  notification: J0,
  alert: Y0,
  toast: e2,
  loading: t2,
  error: r2,
  critical: n2
}, cm = ({
  locale: e = {},
  theme: t,
  children: r,
  className: n
}) => (l.useLayoutEffect(() => {
  if (t) {
    const o = document.documentElement;
    Object.entries(t).forEach(([i, a]) => {
      o.style.setProperty(i, a);
    });
  }
}, [t]), /* @__PURE__ */ m.jsxs(l.Fragment, { children: [
  /* @__PURE__ */ m.jsx(
    "div",
    {
      "data-testid": "ConfigProvider-component",
      className: I(T0, P0, j0, A0, O0, o2, xe, n)
    }
  ),
  /* @__PURE__ */ m.jsx(Xs.Provider, { value: { locale: e }, children: r })
] })), um = {}, i2 = "_tag_1llsi_1", a2 = "_label_1llsi_16", s2 = "_iconWrapper_1llsi_20", l2 = "_medium_1llsi_27", c2 = "_large_1llsi_33", u2 = "_disabled_1llsi_43", d2 = "_neutral_1llsi_47", f2 = "_positive_1llsi_53", p2 = "_negative_1llsi_59", v2 = "_warning_1llsi_65", h2 = "_vivid_1llsi_71", m2 = "_special_1llsi_77", g2 = "_accent_1llsi_84", b2 = "_blue_1llsi_90", y2 = "_lovely_1llsi_96", _2 = "_dreamy_1llsi_102", Kt = {
  tag: i2,
  label: a2,
  iconWrapper: s2,
  medium: l2,
  large: c2,
  disabled: u2,
  neutral: d2,
  positive: f2,
  negative: p2,
  warning: v2,
  vivid: h2,
  special: m2,
  accent: g2,
  blue: b2,
  lovely: y2,
  dreamy: _2
}, dm = l.forwardRef((e, t) => {
  const {
    className: r,
    children: n,
    componentStyle: o = "neutral",
    size: i = "medium",
    disabled: a = !1,
    showLabel: s = !!n,
    slotStart: u,
    slotEnd: c,
    slotStartWrapperProps: d = {},
    slotEndWrapperProps: f = {},
    "data-testid": h,
    ...p
  } = e, { className: g, ...y } = d, { className: v, ...x } = f;
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: I(
        Kt.tag,
        Kt[i],
        Kt[o],
        {
          [Kt.disabled]: a,
          [xe["typography-label-3-regular"]]: i === "medium",
          [xe["typography-subtitle-1-semibold"]]: i === "large"
        },
        r
      ),
      "data-testid": h || "tag-component",
      ref: t,
      ...p,
      children: [
        u && /* @__PURE__ */ m.jsx("span", { className: I([Kt.iconWrapper, g]), ...y, children: u }),
        s && /* @__PURE__ */ m.jsx("span", { className: I([Kt.label]), children: n }),
        c && /* @__PURE__ */ m.jsx("span", { className: I([Kt.iconWrapper, v]), ...x, children: c })
      ]
    }
  );
}), x2 = "_checkbox_gtrs6_43", w2 = "_input_gtrs6_64", C2 = "_icon_gtrs6_72", S2 = "_container_gtrs6_92", E2 = "_error_gtrs6_143", R2 = "_checkboxWrapper_gtrs6_156", k2 = "_medium_gtrs6_211", L2 = "_large_gtrs6_216", M2 = "_label_gtrs6_258", mt = {
  checkbox: x2,
  input: w2,
  icon: C2,
  container: S2,
  error: E2,
  checkboxWrapper: R2,
  medium: k2,
  large: L2,
  label: M2
}, N2 = ({
  width: e = 12,
  height: t = 9,
  className: r = "",
  color: n = "currentColor",
  ...o
}) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    className: r,
    width: e,
    height: t,
    viewBox: "0 0 14 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...o,
    children: /* @__PURE__ */ m.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.0001 2.49999C13.3906 2.10946 13.3906 1.4763 13.0001 1.08578C12.6095 0.695251 11.9764 0.695251 11.5859 1.08578L5.29296 7.37867L2.00007 4.08578C1.60954 3.69525 0.976378 3.69525 0.585855 4.08578C0.19533 4.4763 0.19533 5.10946 0.585855 5.49999L4.58585 9.49999C4.97638 9.89051 5.60954 9.89051 6.00007 9.49999L13.0001 2.49999Z",
        fill: n
      }
    )
  }
), T2 = ({
  width: e = 12,
  height: t = 2,
  className: r = "",
  color: n = "currentColor",
  ...o
}) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    className: r,
    width: e,
    height: t,
    viewBox: "0 0 12 2",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...o,
    children: /* @__PURE__ */ m.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1C12 1.55228 11.5523 2 11 2H1C0.447715 2 0 1.55228 0 1Z",
        fill: n
      }
    )
  }
), P2 = {
  medium: { width: 10.83, height: 7.5 },
  large: { width: 13, height: 9 }
}, j2 = ({
  size: e,
  isChecked: t,
  isDisabled: r,
  indeterminate: n,
  dataTestId: o
}) => {
  const { width: i, height: a } = P2[e];
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: mt.icon,
      "data-testid": `${o}-icon`,
      "data-checked": t,
      "data-disabled": r,
      "data-indeterminate": n,
      children: n ? /* @__PURE__ */ m.jsx(T2, { width: i, height: a }) : /* @__PURE__ */ m.jsx(N2, { width: i, height: a })
    }
  );
}, fm = l.forwardRef((e, t) => {
  const {
    name: r,
    value: n,
    size: o = "medium",
    indeterminate: i = !1,
    loading: a = !1,
    error: s,
    disabled: u = !1,
    containerClassName: c,
    className: d,
    containerStyle: f,
    style: h,
    children: p,
    clickableLabel: g = !0,
    tabIndex: y,
    onChange: v,
    onClick: x,
    "data-testid": b = "checkbox"
  } = e, [_, S] = l.useState(!1), E = n ?? _, w = u || a, L = !!s, M = E || i, j = I(mt.container, mt[o], c), A = I(
    mt.checkbox,
    mt[o],
    {
      [mt.error]: L
    },
    d
  ), P = (R) => {
    w || (S(R.target.checked), v?.(R.target.checked, R));
  }, H = (R) => {
    if (R.key === "Enter" && !w) {
      R.preventDefault();
      const k = !M;
      S(k), v?.(k);
    }
  }, T = (R) => {
    g || R.preventDefault(), x?.(R);
  };
  return /* @__PURE__ */ m.jsxs(
    "label",
    {
      className: j,
      htmlFor: r,
      style: f,
      "data-testid": b,
      "data-clickable-label": g,
      children: [
        /* @__PURE__ */ m.jsx("div", { className: mt.checkboxWrapper, children: /* @__PURE__ */ m.jsxs(
          "div",
          {
            tabIndex: y || 0,
            className: A,
            style: h,
            onKeyDown: H,
            "aria-checked": M,
            "aria-disabled": w,
            "aria-invalid": L,
            "aria-describedby": s ? `${r}-error` : void 0,
            "data-testid": `${b}-label`,
            children: [
              /* @__PURE__ */ m.jsx(
                "input",
                {
                  ref: t,
                  type: "checkbox",
                  id: r,
                  name: r,
                  checked: M,
                  disabled: w,
                  className: mt.input,
                  onChange: P,
                  "aria-checked": M,
                  "aria-invalid": L,
                  "aria-describedby": s ? `${r}-error` : void 0,
                  "data-testid": `${b}-input`
                }
              ),
              /* @__PURE__ */ m.jsx(
                j2,
                {
                  name: r,
                  size: o,
                  isChecked: M,
                  isDisabled: w,
                  indeterminate: i,
                  dataTestId: b
                }
              )
            ]
          }
        ) }),
        p && /* @__PURE__ */ m.jsx(
          "span",
          {
            "data-testid": `${b}-label-text`,
            "data-clickable-label": g,
            className: mt.label,
            onClick: T,
            children: p
          }
        )
      ]
    }
  );
}), A2 = "_base_10oxr_1", O2 = "_content_10oxr_1", D2 = "_background_10oxr_1", z2 = "_button_10oxr_1", I2 = "_link_10oxr_1", $2 = "_input_10oxr_96", F2 = "_suffix_10oxr_1", B2 = "_prefix_10oxr_1", W2 = "_tooltip_10oxr_1", H2 = "_hint_10oxr_794", V2 = "_dropdown_10oxr_1", q2 = "_popover_10oxr_1", K2 = "_modalBackdrop_10oxr_1", U2 = "_modal_10oxr_1", Z2 = "_overlay_10oxr_1", G2 = "_drawer_10oxr_1", X2 = "_notification_10oxr_1", Q2 = "_alert_10oxr_1", J2 = "_toast_10oxr_1", Y2 = "_loading_10oxr_291", ep = "_error_10oxr_252", tp = "_critical_10oxr_1", rp = "_inputBase_10oxr_96", np = "_wrapper_10oxr_106", op = "_gripHandle_10oxr_186", ip = "_tabFocused_10oxr_259", ap = "_disabled_10oxr_284", sp = "_label_10oxr_301", lp = "_S_10oxr_315", cp = "_M_10oxr_321", up = "_XL_10oxr_328", dp = "_leftSection_10oxr_335", fp = "_rightSection_10oxr_347", pp = "_helper_10oxr_385", vp = "_floatingLabel_10oxr_415", hp = "_focused_10oxr_481", mp = "_filled_10oxr_482", gp = "_L_10oxr_522", bp = "_characterLimit_10oxr_564", yp = "_textarea_10oxr_124", _p = "_truncate_10oxr_707", re = {
  base: A2,
  content: O2,
  background: D2,
  button: z2,
  link: I2,
  input: $2,
  suffix: F2,
  prefix: B2,
  tooltip: W2,
  hint: H2,
  dropdown: V2,
  popover: q2,
  modalBackdrop: K2,
  modal: U2,
  overlay: Z2,
  drawer: G2,
  notification: X2,
  alert: Q2,
  toast: J2,
  loading: Y2,
  error: ep,
  critical: tp,
  inputBase: rp,
  wrapper: np,
  "textarea-wrapper": "_textarea-wrapper_10oxr_124",
  gripHandle: op,
  tabFocused: ip,
  disabled: ap,
  label: sp,
  S: lp,
  M: cp,
  XL: up,
  leftSection: dp,
  rightSection: fp,
  helper: pp,
  floatingLabel: vp,
  focused: hp,
  filled: mp,
  L: gp,
  characterLimit: bp,
  textarea: yp,
  "size-S": "_size-S_10oxr_646",
  "size-M": "_size-M_10oxr_656",
  "size-L": "_size-L_10oxr_662",
  "size-XL": "_size-XL_10oxr_668",
  "with-floating-label": "_with-floating-label_10oxr_675",
  truncate: _p,
  "has-hint": "_has-hint_10oxr_815",
  "has-suffix": "_has-suffix_10oxr_821",
  "has-limit": "_has-limit_10oxr_844"
}, xp = ({
  width: e = 8,
  height: t = 8,
  className: r,
  color: n = "#AABBCA"
}) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 8 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: r,
    children: /* @__PURE__ */ m.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.10178 0.236172C6.41679 -0.0787239 6.93824 -0.0787239 7.25325 0.236172C7.56826 0.551067 7.56826 1.07227 7.25325 1.38717L1.38772 7.25074C1.22479 7.41362 1.01837 7.48963 0.811988 7.48963C0.605604 7.48963 0.399189 7.41362 0.236255 7.25074C-0.0787516 6.93584 -0.0787516 6.41464 0.236255 6.09974L6.10178 0.236172ZM6.61276 4.19954C6.92777 3.88464 7.44895 3.88464 7.76396 4.19954C8.07897 4.52529 8.07897 5.03564 7.76396 5.35053L5.35256 7.76111C5.18963 7.92399 4.98321 8 4.77683 8C4.57045 8 4.36403 7.92399 4.2011 7.76111C3.88609 7.44622 3.88609 6.92501 4.2011 6.61012L6.61276 4.19954Z",
        fill: n
      }
    )
  }
), Qs = ({
  className: e = "",
  style: t,
  size: r = "md",
  color: n = "currentColor",
  onClick: o,
  ...i
}) => {
  const a = {
    display: "inline-block",
    color: n,
    ...{
      xxxs: { width: "8px", height: "8px" },
      xxs: { width: "12px", height: "12px" },
      xs: { width: "20px", height: "20px" },
      sm: { width: "24px", height: "24px" },
      md: { width: "32px", height: "32px" },
      lg: { width: "40px", height: "40px" }
    }[r],
    ...t
  };
  return /* @__PURE__ */ m.jsx(
    "svg",
    {
      className: e,
      style: a,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      onClick: o,
      ...i,
      children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M12 4L4 12M4 4L12 12",
          stroke: "currentColor",
          strokeWidth: "1.33333",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}, wp = (e, t) => {
  const r = l.useRef(null), n = l.useRef(null);
  return l.useEffect(() => {
    const o = t === "textarea" ? r.current : n.current;
    o && o.value !== e && (o.value = e || "");
  }, [e, t]), {
    textareaRef: r,
    inputRef: n,
    currentRef: t === "textarea" ? r : n
  };
}, Cp = (e, t, r) => {
  const n = () => {
    if (!r.current || t !== "hug") return;
    const o = r.current.scrollTop;
    if (r.current.style.setProperty("height", "auto", "important"), !e) return;
    const i = r.current.scrollHeight + "px";
    r.current.style.setProperty("height", i, "important"), r.current.scrollTop = o;
    const a = r.current.closest(`.${re.wrapper}`);
    a && (a.setAttribute("data-resize", "hug"), a.setAttribute("data-show-grip", "false"));
  };
  return l.useEffect(n, [e, t]), l.useEffect(() => {
    t === "hug" && r.current && n();
  }, []), { resizeTextArea: n };
}, Sp = (e, t, r, n) => ({ handleGripMouseDown: l.useCallback(
  (o) => {
    if (!e || t || r || !(n === "fixed" || !n)) return;
    o.preventDefault(), o.stopPropagation();
    const i = o.currentTarget.closest(`.${re.wrapper}`);
    if (!i) return;
    const a = o.clientY, s = i.clientHeight, u = (d) => {
      const f = d.clientY - a, h = Math.min(100, s), p = Math.max(h, s + f);
      i.style.height = `${p}px`;
    }, c = () => {
      document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", c);
    };
    document.addEventListener("mousemove", u), document.addEventListener("mouseup", c);
  },
  [e, t, r, n]
) }), Ta = 30, Ep = l.forwardRef(
  ({
    component: e = "input",
    size: t = "L",
    value: r = "",
    placeholder: n,
    disabled: o = !1,
    loading: i = !1,
    onFocus: a,
    onBlur: s,
    onChange: u,
    onKeyDown: c,
    onKeyUp: d,
    maxLength: f,
    className: h,
    style: p,
    truncate: g = !1,
    shouldShowFloatingLabelClass: y = !1,
    "aria-invalid": v,
    "aria-errormessage": x,
    id: b,
    resize: _,
    ...S
  }, E) => {
    const { textareaRef: w, inputRef: L, currentRef: M } = wp(r, e);
    if (Cp(r, _, w), l.useImperativeHandle(E, () => M.current, [M]), e === "textarea")
      return /* @__PURE__ */ m.jsx(
        "textarea",
        {
          ref: w,
          id: b,
          value: r,
          placeholder: n,
          disabled: o || i,
          onFocus: a,
          onBlur: s,
          onChange: u,
          onKeyDown: c,
          onKeyUp: d,
          maxLength: f,
          className: I(
            re.textarea,
            re[`size-${t}`],
            y && re["with-floating-label"],
            h
          ),
          style: p,
          "aria-invalid": v,
          "aria-errormessage": x,
          "aria-describedby": x ? `${b}-error` : void 0,
          tabIndex: 0,
          "data-resize": _,
          ...S
        }
      );
    if (e === "input")
      return /* @__PURE__ */ m.jsx(
        "input",
        {
          ref: L,
          id: b,
          value: r,
          placeholder: n,
          disabled: o || i,
          onFocus: a,
          onBlur: s,
          onChange: u,
          onKeyDown: c,
          onKeyUp: d,
          maxLength: f,
          className: I(
            re.input,
            re[`size-${t}`],
            y && re["with-floating-label"],
            g && re.truncate,
            h
          ),
          style: p,
          "aria-invalid": v,
          "aria-errormessage": x,
          "aria-describedby": x ? `${b}-error` : void 0,
          tabIndex: 0,
          ...S
        }
      );
    if (e !== "input" && e !== "textarea")
      return console.error(
        `[Input] Недопустимое значение prop 'component': "${String(e)}". Допустимые значения: 'input', 'textarea'`
      ), null;
  }
), Js = l.forwardRef(
  ({
    children: e,
    size: t = "L",
    error: r = !1,
    disabled: n = !1,
    loading: o = !1,
    className: i,
    wrapperProps: a,
    wrapperStyles: s,
    floatingLabelStyles: u,
    prefixStyles: c,
    suffixStyles: d,
    labelProps: f,
    helperProps: h,
    showLimit: p = !1,
    maxLength: g,
    hint: y,
    showHint: v = !1,
    showHintOnEmpty: x = !1,
    prefix: b,
    suffix: _,
    onSuffixClick: S,
    placeholder: E,
    showLabel: w = !0,
    labelClassName: L,
    hasValue: M = !1,
    helper: j,
    id: A,
    value: P = "",
    resize: H,
    showGrip: T = !1,
    ...R
  }, k) => {
    const N = l.useId(), D = A || N, C = v && y && (M || x), q = y && y.length > Ta ? y.substring(0, Ta) + "..." : y, B = I(
      re.wrapper,
      re[`size-${t}`],
      r && re.error,
      n && re.disabled,
      o && re.loading,
      C && re["has-hint"],
      _ && re["has-suffix"],
      p && re["has-limit"],
      i
    ), F = I(
      re.floatingLabel,
      re[t],
      M && re.filled,
      L
    ), { handleGripMouseDown: W } = Sp(T, n, o, H);
    return /* @__PURE__ */ m.jsxs("div", { ref: k, className: re.inputBase, "data-testid": "input-base-wrapper", ...R, children: [
      /* @__PURE__ */ m.jsxs(
        "div",
        {
          className: B,
          style: s,
          "data-resize": H,
          "data-show-grip": T ? "true" : "false",
          ...a,
          children: [
            b && /* @__PURE__ */ m.jsx("label", { htmlFor: D, className: re.leftSection, style: c, children: b }),
            _ && /* @__PURE__ */ m.jsx(
              "label",
              {
                htmlFor: D,
                className: re.rightSection,
                style: d,
                onClick: S,
                children: _
              }
            ),
            E && w && /* @__PURE__ */ m.jsx(
              "label",
              {
                htmlFor: D,
                className: F,
                style: u,
                ...f,
                children: E
              }
            ),
            e,
            T && !p && (H === "fixed" || !H) && /* @__PURE__ */ m.jsx(
              "div",
              {
                className: re.gripHandle,
                onMouseDown: W,
                role: "button",
                tabIndex: -1,
                "aria-label": "Изменить размер",
                children: /* @__PURE__ */ m.jsx(xp, {})
              }
            ),
            C && /* @__PURE__ */ m.jsx(
              "div",
              {
                className: I(re.hint, M && re.truncate),
                "data-disabled": n || o,
                children: q
              }
            ),
            p && g && /* @__PURE__ */ m.jsxs("div", { className: re.characterLimit, children: [
              (P || "").length,
              " из ",
              g
            ] })
          ]
        }
      ),
      j && /* @__PURE__ */ m.jsx(
        "div",
        {
          className: I(
            re.helper,
            r && re.error,
            (n || o) && re.disabled
          ),
          ...h,
          id: r ? `${D}-error` : void 0,
          children: j
        }
      )
    ] });
  }
);
Js.displayName = "InputWrapperComponent";
const Pa = Object.assign(Ep, {
  Wrapper: Js
}), Ys = l.forwardRef(
  ({
    component: e = "input",
    size: t = "L",
    className: r,
    error: n = !1,
    disabled: o = !1,
    loading: i = !1,
    placeholder: a,
    showLabel: s = !0,
    labelClassName: u,
    helper: c,
    prefix: d,
    suffix: f,
    id: h,
    onFocus: p,
    onBlur: g,
    onKeyDown: y,
    onSuffixClick: v,
    onChange: x,
    value: b = "",
    wrapperProps: _,
    wrapperStyles: S,
    floatingLabelStyles: E,
    prefixStyles: w,
    suffixStyles: L,
    textareaStyles: M,
    labelProps: j,
    helperProps: A,
    showLimit: P = !1,
    maxLength: H,
    inputProps: T,
    hint: R,
    showHint: k = !1,
    showHintOnEmpty: N = !1,
    truncate: D = !1,
    resize: C,
    showGrip: q = !1,
    ...B
  }, F) => {
    const W = l.useId(), $ = h || W, [ie, G] = l.useState(b), J = b !== void 0 ? b : ie, fe = (J || "").length > 0, ce = J || "", be = s && (t === "XL" || e === "textarea") && !d, ke = l.useCallback(
      (z) => {
        var U;
        o || i || (p?.(), (U = T?.onFocus) == null || U.call(
          T,
          z
        ));
      },
      [p, T, o, i]
    ), Ce = l.useCallback(
      (z) => {
        var U;
        if (z.key === "Tab") {
          const Q = z.target.closest(`.${re.wrapper}`);
          Q && Q.classList.add(re.tabFocused);
        }
        (U = T?.onKeyUp) == null || U.call(
          T,
          z
        );
      },
      [T]
    ), V = l.useCallback(
      (z) => {
        var U;
        const Q = z.target.closest(`.${re.wrapper}`);
        Q && Q.classList.remove(re.tabFocused), g?.(), (U = T?.onBlur) == null || U.call(
          T,
          z
        );
      },
      [g, T]
    ), X = l.useCallback(
      (z) => {
        var U;
        if (o || i) return;
        const Q = z.target.value;
        G(Q), x?.(Q, z), (U = T?.onChange) == null || U.call(
          T,
          z
        );
      },
      [x, T, o, i]
    );
    return l.useEffect(() => {
      G(b || "");
    }, [b]), /* @__PURE__ */ m.jsx(
      Pa.Wrapper,
      {
        ref: F,
        size: t,
        error: n,
        disabled: o || i,
        loading: i,
        className: I(r, e === "textarea" && re["textarea-wrapper"]),
        wrapperProps: _,
        wrapperStyles: S,
        floatingLabelStyles: E,
        prefixStyles: w,
        suffixStyles: L,
        labelProps: j,
        helperProps: A,
        showLimit: P,
        maxLength: H,
        hint: R,
        showHint: k,
        showHintOnEmpty: N,
        prefix: d,
        suffix: f,
        onSuffixClick: v,
        placeholder: a,
        showLabel: s,
        labelClassName: u,
        hasValue: fe,
        helper: c,
        id: $,
        value: ce,
        showGrip: q,
        resize: C,
        ...B,
        children: /* @__PURE__ */ m.jsx(
          Pa,
          {
            component: e,
            size: t,
            value: ce,
            placeholder: a,
            disabled: o,
            loading: i,
            onFocus: ke,
            onBlur: V,
            onChange: X,
            onKeyDown: y,
            onKeyUp: Ce,
            maxLength: H,
            truncate: D,
            "data-empty": !fe,
            shouldShowFloatingLabelClass: be,
            style: e === "textarea" ? M : void 0,
            "aria-invalid": !!n,
            "aria-errormessage": n ? `${$}-error` : void 0,
            id: $,
            resize: C,
            ...T
          }
        )
      }
    );
  }
), he = {
  S: "S",
  M: "M",
  L: "L",
  XL: "XL"
}, Rp = (e, t, r, n) => {
  switch (e) {
    case he.XL:
      return t && r ? "8px 16px 8px 16px" : "16px 16px 16px 16px";
    case he.L:
      return n ? "12px 12px 12px 12px" : "12px 16px 12px 16px";
    case he.M:
      return "10px 12px 10px 12px";
    case he.S:
      return "6px 10px 6px 10px";
    default:
      return "12px 16px 12px 16px";
  }
}, kp = (e) => {
  switch (e) {
    case he.XL:
      return "56px";
    case he.L:
      return "48px";
    case he.M:
      return "40px";
    case he.S:
      return "32px";
    default:
      return "48px";
  }
}, Lp = (e) => {
  switch (e) {
    case he.S:
    case he.M:
    case he.L:
      return 4;
    case he.XL:
      return 8;
    default:
      return 8;
  }
}, Mp = (e) => {
  switch (e) {
    case he.S:
    case he.M:
      return 8;
    case he.L:
    case he.XL:
      return 12;
    default:
      return 12;
  }
}, Np = (e, t, r, n) => ({
  wrapperStyles: {
    minHeight: e,
    maxHeight: e,
    boxSizing: "border-box",
    padding: t
  },
  floatingLabelStyles: {
    left: "10px"
  },
  prefixStyles: {
    paddingRight: `${r}px`
  },
  suffixStyles: {
    right: `${n}px`,
    maxWidth: "32px",
    maxHeight: "32px",
    padding: "6px",
    cursor: "pointer"
  }
}), Tp = (e, t, r, n) => ({
  wrapperStyles: {
    height: e,
    minHeight: e,
    maxHeight: e,
    boxSizing: "border-box",
    padding: t
  },
  floatingLabelStyles: {
    left: "16px",
    transformOrigin: "left top"
  },
  prefixStyles: {
    paddingRight: `${r}px`
  },
  suffixStyles: {
    right: `${n}px`,
    maxWidth: "40px",
    maxHeight: "40px",
    padding: "8px",
    cursor: "pointer"
  }
}), Pp = (e, t, r, n) => ({
  wrapperStyles: {
    minHeight: e,
    maxHeight: e,
    boxSizing: "border-box",
    padding: t
  },
  floatingLabelStyles: {
    left: "16px"
  },
  prefixStyles: {
    paddingRight: `${r}px`
  },
  suffixStyles: {
    right: `${n}px`,
    maxWidth: "40px",
    maxHeight: "40px",
    padding: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}), jp = (e, t, r, n) => ({
  wrapperStyles: {
    minHeight: e,
    maxHeight: e,
    boxSizing: "border-box",
    padding: t
  },
  floatingLabelStyles: {
    left: "12px"
  },
  prefixStyles: {
    paddingRight: `${r}px`
  },
  suffixStyles: {
    right: `${n}px`,
    maxWidth: "32px",
    maxHeight: "32px",
    padding: "6px",
    cursor: "pointer"
  }
}), Ap = (e, t, r, n) => {
  const o = kp(e), i = Rp(e, t, r, n), a = Mp(e), s = Lp(e);
  switch (e) {
    case he.XL:
      return Tp(o, i, a, s);
    case he.L:
      return Pp(o, i, a, s);
    case he.M:
      return jp(o, i, a, s);
    case he.S:
      return Np(o, i, a, s);
    default:
      return {
        wrapperStyles: {},
        floatingLabelStyles: {},
        prefixStyles: {},
        suffixStyles: {}
      };
  }
}, pm = l.forwardRef(
  ({
    value: e = "",
    onChange: t,
    type: r = "text",
    placeholder: n,
    maxLength: o,
    minLength: i,
    autoComplete: a,
    autoFocus: s,
    size: u = he.L,
    inputProps: c,
    error: d,
    disabled: f,
    loading: h,
    helper: p,
    prefix: g,
    suffix: y,
    clearable: v = !1,
    id: x,
    showLabel: b = !0,
    onFocus: _,
    onBlur: S,
    onSuffixClick: E,
    onClear: w,
    className: L,
    truncate: M = !0,
    hint: j,
    showHint: A = !1,
    showHintOnEmpty: P = !1,
    wrapperProps: H,
    labelProps: T,
    helperProps: R,
    ...k
  }, N) => {
    const D = (e || "").length > 0, C = u === he.XL, q = !!g, B = C && b && !g, F = v && D && !(f || h), W = () => {
      t?.(""), w?.();
    }, $ = () => {
      F && W(), E?.();
    }, ie = F ? /* @__PURE__ */ m.jsx(
      Qs,
      {
        size: u === he.S || u === he.M ? "xs" : "sm",
        color: "var(--icon-secondary)",
        style: { cursor: "pointer" },
        "data-testid": "x-icon"
      }
    ) : y, G = {
      type: r,
      minLength: i,
      autoComplete: a,
      autoFocus: s,
      ...c
    }, J = Ap(u, B, D, q);
    return /* @__PURE__ */ m.jsx(
      Ys,
      {
        size: u,
        error: d,
        disabled: f || h,
        loading: h,
        helper: p,
        prefix: g,
        suffix: ie,
        id: x,
        showLabel: B,
        onFocus: _,
        onBlur: S,
        onSuffixClick: $,
        onChange: t,
        value: e,
        placeholder: n,
        className: L,
        wrapperStyles: J.wrapperStyles,
        floatingLabelStyles: J.floatingLabelStyles,
        prefixStyles: J.prefixStyles,
        suffixStyles: J.suffixStyles,
        wrapperProps: H,
        labelProps: T,
        helperProps: R,
        showLimit: !1,
        maxLength: o,
        inputProps: G,
        hint: j,
        showHint: A,
        showHintOnEmpty: P,
        truncate: M,
        ...k
      }
    );
  }
), Be = {
  M: "M",
  L: "L"
}, _n = {
  M: "12px",
  L: "16px"
}, Op = {
  M: "xs",
  L: "sm"
}, mn = {
  FILL: "fill",
  FIXED: "fixed"
}, wo = {
  M: "112px",
  L: "56px"
}, ir = {
  M: "48px",
  L: "22px"
}, ht = {
  M: "12px 12px 12px 12px",
  L: "16px 16px 16px 16px",
  L_WITH_PREFIX: "12px 16px 12px 16px",
  L_FLOATING_LABEL: "8px 16px 8px 16px"
}, bt = {
  M: 48,
  L: 56,
  XL: 112
}, Dp = (e, t) => {
  if (e === Be.M)
    return wo.M;
  if (t)
    return `${t}px`;
  switch (e) {
    case Be.L:
      return wo.L;
    default:
      return wo.L;
  }
}, zp = (e, t) => {
  if (e === Be.M)
    return ir.M;
  if (t)
    switch (t) {
      case bt.M:
      case bt.L:
        return ir.L;
      case bt.XL:
        return ir.M;
      default:
        return ir.L;
    }
  switch (e) {
    case Be.L:
      return ir.L;
    default:
      return ir.L;
  }
}, Ip = (e, t, r) => {
  if (e === Be.M)
    return ht.M;
  if (t)
    switch (t) {
      case bt.M:
        return ht.L_WITH_PREFIX;
      case bt.L:
        return r ? ht.L_FLOATING_LABEL : ht.L;
      case bt.XL:
        return ht.L;
      default:
        return ht.L;
    }
  switch (e) {
    case Be.L:
      return r ? ht.L_FLOATING_LABEL : ht.L;
    default:
      return ht.L;
  }
}, $p = (e, t) => {
  if (e === Be.M)
    return "M";
  if (t)
    switch (t) {
      case bt.M:
        return "M";
      case bt.L:
        return "L";
      case bt.XL:
        return "L";
      default:
        return "L";
    }
  return e;
}, Fp = (e) => Op[e], Bp = (e) => _n[e], Wp = (e, t, r, n) => {
  const o = Dp(e, t), i = zp(e, t), a = Ip(e, t, r);
  return {
    wrapperStyles: {
      minHeight: o,
      // Для fill resize устанавливаем height: 100%
      ...n === mn.FILL && { height: "100%" },
      // Для fixed resize устанавливаем фиксированную высоту
      ...n === mn.FIXED && t && { height: o },
      boxSizing: "border-box",
      padding: a
    },
    floatingLabelStyles: {
      left: e === Be.M ? _n.M : _n.L,
      transformOrigin: "left top",
      top: t === 112 && r && e === Be.L ? _n.L : void 0
    },
    suffixStyles: {
      right: Bp(e),
      top: t === 48 && e === Be.L ? "11px" : void 0,
      boxSizing: "border-box"
    },
    textareaStyles: {
      minHeight: i,
      // Для fill resize flex: 1
      ...n === mn.FILL && { flex: 1, minHeight: 0 },
      // Для fixed resize фиксированная высота
      ...n === mn.FIXED && t && { height: i }
    }
  };
}, vm = l.forwardRef(
  ({
    value: e = "",
    onChange: t,
    placeholder: r,
    maxLength: n,
    minLength: o,
    autoFocus: i,
    size: a = Be.L,
    textareaProps: s,
    error: u,
    disabled: c,
    loading: d,
    helper: f,
    suffix: h,
    clearable: p = !1,
    id: g,
    showLabel: y = !0,
    onFocus: v,
    onBlur: x,
    onClear: b,
    onKeyDown: _,
    className: S,
    rows: E = 1,
    showLimit: w = !1,
    wrapperProps: L,
    labelProps: M,
    helperProps: j,
    showGrip: A,
    minHeight: P,
    resize: H,
    ...T
  }, R) => {
    const k = (e || "").length > 0, N = y && !!r && (a === Be.M || P !== 48), D = p && k && !(c || d), C = () => {
      t?.(""), b?.();
    }, q = () => {
      D && C();
    }, B = D ? /* @__PURE__ */ m.jsx(
      Qs,
      {
        size: Fp(a),
        color: "var(--icon-secondary)",
        style: { cursor: "pointer" },
        "data-testid": "x-icon"
      }
    ) : h, F = Wp(a, P, N && k, H), W = $p(a, P), $ = {
      rows: E,
      minLength: o,
      autoFocus: i,
      resize: H,
      ...s
    };
    return /* @__PURE__ */ m.jsx(
      Ys,
      {
        ref: R,
        component: "textarea",
        size: W,
        error: u,
        disabled: c || d,
        loading: d,
        onSuffixClick: q,
        helper: f,
        suffix: B,
        id: g,
        showLabel: N,
        onFocus: v,
        onBlur: x,
        onKeyDown: _,
        onChange: t,
        value: e || "",
        placeholder: r,
        className: S,
        "data-floating-label": N,
        wrapperStyles: F.wrapperStyles,
        floatingLabelStyles: F.floatingLabelStyles,
        suffixStyles: F.suffixStyles,
        textareaStyles: F.textareaStyles,
        wrapperProps: L,
        labelProps: M,
        helperProps: j,
        showLimit: w && (P === 112 || a === Be.M),
        maxLength: n,
        inputProps: $,
        resize: H,
        showGrip: A,
        ...T
      }
    );
  }
), Hp = "_helper_1jq7j_16", Co = {
  helper: Hp,
  "helper--error": "_helper--error_1jq7j_28",
  "helper--disabled": "_helper--disabled_1jq7j_33"
}, hm = ({
  title: e,
  error: t,
  className: r = "",
  style: n,
  disabled: o = !1,
  "data-testid": i,
  "aria-label": a,
  "aria-describedby": s
}) => {
  const u = !!t, c = I(
    Co.helper,
    u && Co["helper--error"],
    o && Co["helper--disabled"],
    r
  ), d = o ? e : t || e;
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: c,
      style: n,
      "data-testid": i,
      "aria-label": a,
      "aria-describedby": s,
      children: /* @__PURE__ */ m.jsx("p", { children: d })
    }
  );
}, Vp = "_radio_1n8zx_59", qp = "_checked_1n8zx_80", Kp = "_error_1n8zx_85", Up = "_disabled_1n8zx_94", Zp = "_icon_1n8zx_130", Gp = "_small_1n8zx_138", Xp = "_medium_1n8zx_145", Qp = "_large_1n8zx_152", Jp = "_label_1n8zx_159", Yp = "_container_1n8zx_185", ev = "_input_1n8zx_198", tv = "_card_1n8zx_205", rv = "_smallCard_1n8zx_211", nv = "_mediumCard_1n8zx_215", ov = "_largeCard_1n8zx_219", ze = {
  default: "_default_1n8zx_53",
  radio: Vp,
  checked: qp,
  error: Kp,
  disabled: Up,
  icon: Zp,
  small: Gp,
  medium: Xp,
  large: Qp,
  label: Jp,
  container: Yp,
  input: ev,
  card: tv,
  smallCard: rv,
  mediumCard: nv,
  largeCard: ov
}, iv = "radio-container-", av = "radio-label", el = l.forwardRef(
  (e, t) => {
    const {
      name: r,
      id: n,
      value: o,
      size: i = "large",
      loading: a = !1,
      error: s,
      disabled: u = !1,
      checked: c = !1,
      containerClassName: d,
      className: f,
      children: h,
      clickable: p = "all",
      mode: g = "default",
      tabIndex: y,
      style: v,
      containerStyle: x,
      onChange: b,
      "data-testid": _,
      ...S
    } = e, E = !!s, w = u || a, L = p === "all", M = g === "card", j = ze[`${i}Card`], A = n ?? r, P = (N) => {
      w || b == null || b(o, N);
    }, H = (N) => {
      N.key === "Enter" && !w && (N.preventDefault(), b?.(o));
    }, T = (N) => N.stopPropagation(), R = () => /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: I(
          ze.radio,
          ze[i],
          {
            [ze.checked]: c,
            [ze.disabled]: w,
            [ze.error]: E && !w
          },
          f
        ),
        style: v,
        tabIndex: y || 1,
        "data-testid": `${iv}${A}`,
        children: [
          /* @__PURE__ */ m.jsx(
            "input",
            {
              "aria-errormessage": s,
              "aria-invalid": E,
              checked: c,
              className: ze.input,
              "data-testid": `radio-${A}`,
              disabled: w,
              id: A,
              name: r,
              ref: t,
              type: "radio",
              value: o,
              onChange: P,
              onClick: T
            }
          ),
          /* @__PURE__ */ m.jsx("svg", { "data-testid": `radio-icon-${A}`, viewBox: "0 0 8 8", className: ze.icon, children: /* @__PURE__ */ m.jsx("circle", { cx: 4, cy: 4, fill: "current", r: 4 }) })
        ]
      }
    ), k = () => /* @__PURE__ */ m.jsxs(
      "label",
      {
        "aria-checked": c,
        "aria-disabled": w,
        "data-testid": L ? _ : av,
        htmlFor: A,
        style: x,
        className: I(ze.label, {
          [I(ze.container, ze[g], d)]: L,
          [j]: L && M
        }),
        onKeyDown: H,
        ...S,
        children: [
          R(),
          L && h
        ]
      }
    );
    return L ? k() : /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: I(ze.container, ze[g], d, {
          [j]: M
        }),
        "data-testid": _,
        children: [
          k(),
          h
        ]
      }
    );
  }
), sv = "_group_tnviu_7", lv = "_vertical_tnviu_12", cv = "_horizontal_tnviu_16", ja = {
  group: sv,
  vertical: lv,
  horizontal: cv
}, uv = l.forwardRef(
  (e, t) => {
    const {
      id: r,
      name: n,
      value: o,
      options: i,
      className: a,
      radioClassName: s,
      disabled: u = !1,
      layout: c = "vertical",
      "data-testid": d,
      ...f
    } = e;
    return /* @__PURE__ */ m.jsx(
      "div",
      {
        className: Gt(ja.group, ja[c], a),
        "data-testid": d ?? `radio-group-${n}`,
        id: r,
        ref: t,
        children: i.map(({ label: h, value: p, disabled: g }) => {
          const y = `${n}-${String(p)}`, v = String(p) === String(o);
          return /* @__PURE__ */ m.jsx(
            el,
            {
              id: y,
              checked: v,
              "data-testid": y,
              disabled: u || g,
              name: n,
              value: p,
              className: s,
              ...f,
              children: h
            },
            y
          );
        })
      }
    );
  }
), mm = Object.assign(el, {
  Group: uv
}), dv = "_root_1jj3e_25", fv = "_unordered_1jj3e_39", pv = "_ordered_1jj3e_43", vv = "_sm_1jj3e_48", hv = "_md_1jj3e_59", mv = "_lg_1jj3e_70", gv = "_xl_1jj3e_81", So = {
  root: dv,
  unordered: fv,
  ordered: pv,
  sm: vv,
  md: hv,
  lg: mv,
  xl: gv
}, bv = (e) => {
  const { children: t, className: r, "data-testid": n = "list-item" } = e;
  return /* @__PURE__ */ m.jsx("li", { "data-testid": n, className: r, children: t });
}, gm = Object.assign(
  l.forwardRef((e, t) => {
    const {
      variant: r = "unordered",
      className: n,
      children: o,
      size: i = "md",
      "data-testid": a = "list",
      ...s
    } = e, u = r === "ordered" ? "ol" : "ul";
    return /* @__PURE__ */ m.jsx(
      u,
      {
        "data-testid": a,
        ref: t,
        className: Gt(So.root, So[r], So[i], n),
        ...r === "ordered" && s,
        children: o
      }
    );
  }),
  { Item: bv }
), yv = "_wrapper_1v8xn_5", _v = "_viewport_1v8xn_12", xv = "_mask_1v8xn_26", wv = "_maskLeft_1v8xn_37", Cv = "_maskRight_1v8xn_42", Sv = "_visible_1v8xn_46", Ev = "_control_1v8xn_51", Rv = "_xs_1v8xn_70", kv = "_sm_1v8xn_73", Lv = "_md_1v8xn_76", Mv = "_left_1v8xn_80", Nv = "_right_1v8xn_83", je = {
  wrapper: yv,
  viewport: _v,
  mask: xv,
  maskLeft: wv,
  maskRight: Cv,
  visible: Sv,
  control: Ev,
  xs: Rv,
  sm: kv,
  md: Lv,
  left: Mv,
  right: Nv
}, Tv = "white", Pv = ({
  children: e,
  withControls: t = !0,
  className: r,
  size: n
}) => {
  const o = l.useRef(null), [i, a] = l.useState(!1), [s, u] = l.useState(!1), { ref: c, bgColor: d } = gi(), f = c ?? { current: null }, h = d ?? Tv, p = t && i, g = t && s, y = ({ direction: b }) => /* @__PURE__ */ m.jsx(
    "svg",
    {
      height: "12px",
      width: "12px",
      viewBox: "0 0 185.343 185.343",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ m.jsx("g", { transform: b === "left" ? "scale(-1,1) translate(-185.343,0)" : void 0, children: /* @__PURE__ */ m.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
        }
      ) })
    }
  ), v = () => {
    const b = o.current;
    if (!b) return;
    const _ = Math.round(b.scrollLeft), S = Math.round(b.scrollLeft + b.clientWidth), E = Math.round(b.scrollWidth);
    a(_ > 0), u(S < E);
  }, x = (b) => {
    const _ = o.current;
    if (!_) return;
    const S = _.clientWidth;
    _.scrollBy({ left: b === "left" ? -S : S, behavior: "smooth" });
  };
  return l.useEffect(() => {
    const b = o.current;
    if (!b) return;
    const _ = (S) => {
      Math.abs(S.deltaX) > Math.abs(S.deltaY) || b.scrollWidth > b.clientWidth && (S.preventDefault(), b.scrollBy({ left: S.deltaY, behavior: "auto" }));
    };
    return b.addEventListener("wheel", _, { passive: !1 }), () => b.removeEventListener("wheel", _);
  }, []), l.useEffect(() => {
    v();
    const b = o.current;
    if (b)
      return b.addEventListener("scroll", v, { passive: !0 }), window.addEventListener("resize", v), () => {
        b.removeEventListener("scroll", v), window.removeEventListener("resize", v);
      };
  }, []), /* @__PURE__ */ m.jsxs("div", { ref: f, className: I(je.wrapper, r), children: [
    p && /* @__PURE__ */ m.jsx(
      "div",
      {
        className: I(je.mask, je.maskLeft, i && je.visible),
        style: {
          background: `linear-gradient(to right, ${h} 17%, transparent 80%)`
        }
      }
    ),
    g && /* @__PURE__ */ m.jsx(
      "div",
      {
        className: I(je.mask, je.maskRight, s && je.visible),
        style: {
          background: `linear-gradient(to left, ${h} 17%, transparent 80%)`
        }
      }
    ),
    /* @__PURE__ */ m.jsx("div", { ref: o, className: je.viewport, children: e }),
    p && /* @__PURE__ */ m.jsx(
      "button",
      {
        type: "button",
        tabIndex: -1,
        "aria-hidden": "true",
        className: I(je.control, je.left, je[n]),
        onClick: () => x("left"),
        children: /* @__PURE__ */ m.jsx(y, { direction: "left" })
      }
    ),
    g && /* @__PURE__ */ m.jsx(
      "button",
      {
        type: "button",
        tabIndex: -1,
        "aria-hidden": "true",
        className: I(je.control, je.right, je[n]),
        onClick: () => x("right"),
        children: /* @__PURE__ */ m.jsx(y, { direction: "right" })
      }
    )
  ] });
}, jv = "_tabBar_1ndpm_82", Av = "_primary_1ndpm_88", Ov = "_secondary_1ndpm_93", Dv = "_tab_1ndpm_82", zv = "_md_1ndpm_125", Iv = "_sm_1ndpm_129", $v = "_xs_1ndpm_133", Fv = "_disabled_1ndpm_137", Bv = "_selected_1ndpm_143", Wv = "_tabLabel_1ndpm_222", Hv = "_tabPrefix_1ndpm_234", Vv = "_tabPostfix_1ndpm_270", Ee = {
  tabBar: jv,
  primary: Av,
  secondary: Ov,
  tab: Dv,
  md: zv,
  sm: Iv,
  xs: $v,
  disabled: Fv,
  selected: Bv,
  tabLabel: Wv,
  tabPrefix: Hv,
  tabPostfix: Vv
}, qv = "md", Kv = !1, Uv = 8, Zv = "top-right-inside", tl = l.createContext(null), rl = () => {
  const e = l.useContext(tl);
  if (!e) throw new Error("useTabs должен использоваться внутри TabsProvider");
  return e;
}, Gv = ({
  children: e,
  defaultActiveTab: t,
  activeTab: r,
  onChange: n
}) => {
  const [o, i] = l.useState(t), a = r !== void 0, s = a ? r : o, u = (c) => {
    a || i(c), n && n(c);
  };
  return /* @__PURE__ */ m.jsx(tl.Provider, { value: { activeTab: s, setTab: u }, children: e });
}, Xv = ({
  mode: e,
  item: t,
  isActive: r,
  showBadge: n,
  badgeProps: o,
  size: i,
  isDisabled: a,
  onSelectTab: s
}) => {
  const {
    value: u,
    label: c,
    prefix: d,
    prefixWrapperProps: f = {},
    postfix: h,
    postfixWrapperProps: p = {}
  } = t, { className: g, ...y } = f, { className: v, ...x } = p, b = {
    primary: xe["typography-label-3-medium"],
    secondary: xe["typography-label-3-regular"],
    prefix: xe["typography-label-3-medium"],
    postfix: xe["typography-label-3-medium"]
  }, _ = {
    size: Uv,
    position: Zv,
    ...o
  }, S = I(Ee.tab, Ee[e], Ee[i], {
    [Ee.selected]: r,
    [Ee.disabled]: a
  }), E = I(
    Ee.tabPrefix,
    g,
    Ee[e],
    b.prefix,
    {
      [Ee.selected]: r,
      [Ee.disabled]: a
    }
  ), w = I(
    Ee.tabPostfix,
    v,
    Ee[e],
    b.postfix,
    {
      [Ee.selected]: r,
      [Ee.disabled]: a
    }
  ), L = I(Ee.tabLabel, Ee[e], b[e]), M = (A) => {
    r || a || (s(u), A.currentTarget.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" }));
  }, j = /* @__PURE__ */ m.jsxs(
    "button",
    {
      className: S,
      role: "tab",
      "aria-label": c,
      "aria-selected": r,
      "aria-disabled": a,
      "aria-controls": `tab-panel-${u}`,
      "data-testid": `tab-item-${u}`,
      onClick: M,
      children: [
        d && /* @__PURE__ */ m.jsx(
          "span",
          {
            className: E,
            ...y,
            "data-testid": `tab-prefix-${u}`,
            children: d
          }
        ),
        /* @__PURE__ */ m.jsx("span", { className: L, "data-testid": `tab-label-${u}`, children: c }),
        h && /* @__PURE__ */ m.jsx(
          "span",
          {
            className: w,
            ...x,
            "data-testid": `tab-postfix-${u}`,
            children: h
          }
        )
      ]
    }
  );
  return n ? /* @__PURE__ */ m.jsx(C0, { ..._, "data-testid": `tab-badge-${u}`, children: j }) : j;
}, Qv = ({
  mode: e,
  items: t,
  size: r = qv,
  isAllItemsDisabled: n = Kv
}) => {
  const { activeTab: o, setTab: i } = rl(), a = S1();
  return /* @__PURE__ */ m.jsx(Pv, { size: r, withControls: a, children: /* @__PURE__ */ m.jsx(
    "div",
    {
      role: "tablist",
      "data-testid": "tabs-bar",
      "aria-orientation": "horizontal",
      className: I(Ee.tabBar, Ee[e]),
      children: t.map((s) => /* @__PURE__ */ m.jsx(
        Xv,
        {
          size: r,
          item: s,
          mode: e,
          showBadge: s.showBadge,
          badgeProps: s.badgeProps,
          isActive: o === s.value,
          isDisabled: n || s.isDisabled,
          onSelectTab: i
        },
        s.value
      ))
    }
  ) });
}, Jv = ({ tabValue: e, children: t, ...r }) => /* @__PURE__ */ m.jsx(
  "div",
  {
    role: "tabpanel",
    "data-testid": `tab-panel-${e}`,
    "aria-labelledby": `tab-item-${e}`,
    ...r,
    children: t
  }
), Yv = ({ children: e, ...t }) => {
  const { activeTab: r } = rl(), n = Array.isArray(e) ? e : [e], o = (i, a) => Pn.isValidElement(i) && typeof i.props == "object" && i.props !== null && a in i.props;
  return /* @__PURE__ */ m.jsx("div", { "data-testid": "tab-content", ...t, children: n.map((i) => o(i, "tabValue") && String(i.props.tabValue) === r ? i : null) });
}, bm = {
  Provider: Gv,
  Content: Yv,
  Panel: Jv,
  Bar: Qv
}, eh = "_root_1fbbw_34", th = "_open_1fbbw_51", rh = "_xs_1fbbw_55", nh = "_s_1fbbw_61", oh = "_m_1fbbw_67", ih = "_neutral_1fbbw_73", ah = "_contrast_1fbbw_78", sh = "_accent_1fbbw_84", lh = "_typography_1fbbw_89", ch = "_title_1fbbw_89", uh = "_text_1fbbw_93", dh = "_mediaWrapper_1fbbw_97", fh = "_content_1fbbw_112", ph = "_closeButton_1fbbw_116", vh = "_hasMedia_1fbbw_142", hh = "_buttonStack_1fbbw_148", Ae = {
  root: eh,
  open: th,
  xs: rh,
  s: nh,
  m: oh,
  neutral: ih,
  contrast: ah,
  accent: sh,
  typography: lh,
  title: ch,
  text: uh,
  mediaWrapper: dh,
  content: fh,
  closeButton: ph,
  hasMedia: vh,
  buttonStack: hh
}, mh = () => /* @__PURE__ */ m.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ m.jsx("path", { d: "M18 6 6 18M6 6l12 12" }) }), gh = () => /* @__PURE__ */ m.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 9", fill: "currentColor", children: [
  /* @__PURE__ */ m.jsx(
    "path",
    {
      d: "M0.155001 0.000390053L23.845 0.000390053C21.4147 0.000390053 19.1162 1.10511 17.598 3.00283L13.5617 8.04822C12.7611 9.04903 11.2389 9.04903 10.4383 8.04822L6.40195 3.00283C4.88377 1.10511 2.58527 0.000390053 0.155001 0.000390053Z"
    }
  ),
  /* @__PURE__ */ m.jsx("path", { d: "M-2 0.000390053L26 0.000390053V-1L-2 -1L-2 0.000390053Z" })
] }), Ge = {
  shiftX: 64,
  adjustY: 1
}, Xe = { adjustX: 1, shiftY: !0 }, bh = {
  left: {
    points: ["cr", "cl"],
    overflow: Xe,
    offset: [-22, 0]
  },
  right: {
    points: ["cl", "cr"],
    overflow: Xe,
    offset: [22, 0]
  },
  top: {
    points: ["bc", "tc"],
    overflow: Ge,
    offset: [0, -22]
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Ge,
    offset: [0, 22]
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ge,
    offset: [0, -22]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Xe,
    offset: [-22, 0]
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ge,
    offset: [0, -22]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Xe,
    offset: [22, 0]
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ge,
    offset: [0, 22]
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Xe,
    offset: [22, 0]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ge,
    offset: [0, 22]
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Xe,
    offset: [-22, 0]
  }
}, yh = {
  left: {
    points: ["cr", "cl"],
    overflow: Xe,
    offset: [-16, 0]
  },
  right: {
    points: ["cl", "cr"],
    overflow: Xe,
    offset: [16, 0]
  },
  top: {
    points: ["bc", "tc"],
    overflow: Ge,
    offset: [0, -16]
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Ge,
    offset: [0, 16]
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ge,
    offset: [0, -16]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Xe,
    offset: [-16, 0]
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ge,
    offset: [0, -16]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Xe,
    offset: [16, 0]
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ge,
    offset: [0, 16]
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Xe,
    offset: [16, 0]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ge,
    offset: [0, 16]
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Xe,
    offset: [-16, 0]
  }
}, _h = {
  neutral: {
    1: [{ mode: "secondary", buttonStyle: "neutral", size: "s" }],
    2: [
      { mode: "secondary", buttonStyle: "neutral", size: "s" },
      { mode: "primary", buttonStyle: "neutral", size: "s" }
    ],
    3: [
      { mode: "primary", buttonStyle: "accent", size: "s" },
      { mode: "secondary", buttonStyle: "neutral", size: "s" },
      { mode: "primary", buttonStyle: "neutral", size: "s" }
    ]
  },
  contrast: {
    1: [{ mode: "primary", buttonStyle: "neutral", size: "s" }],
    2: [
      { mode: "primary", buttonStyle: "neutral", size: "s" },
      { mode: "secondary", buttonStyle: "neutral", size: "s" }
    ],
    3: [
      { mode: "primary", buttonStyle: "accent", size: "s" },
      { mode: "primary", buttonStyle: "neutral", size: "s" },
      { mode: "secondary", buttonStyle: "neutral", size: "s" }
    ]
  },
  accent: {
    1: [{ mode: "secondary", buttonStyle: "neutral", size: "s" }],
    2: [
      { mode: "secondary", buttonStyle: "neutral", size: "s" },
      { mode: "primary", buttonStyle: "accent", size: "s" }
    ],
    3: [
      { mode: "primary", buttonStyle: "neutral", size: "s" },
      { mode: "secondary", buttonStyle: "neutral", size: "s" },
      { mode: "primary", buttonStyle: "accent", size: "s" }
    ]
  }
}, xh = (e, t, r) => ({ ...t, ...r ?? {}, ...e }), wh = (e, t, r) => {
  const n = a1(t, 1, 3), o = _h[r][n];
  return o[Math.min(e, o.length - 1)];
}, Aa = ({
  text: e,
  title: t,
  media: r,
  variant: n = "neutral",
  size: o,
  classNames: i = {},
  onClose: a,
  buttons: s,
  buttonProps: u,
  showClose: c
}) => {
  const d = ["neutral", "accent"].includes(n) ? "contrast" : "primary", f = o === "m", h = !!(t && f), p = !!(r && f), g = s && !!s.length, y = !!(c && f) || !c && f && !g, v = o === "xs" ? 4 : 3;
  return /* @__PURE__ */ m.jsxs("div", { className: Ae.content, children: [
    p && /* @__PURE__ */ m.jsx("div", { className: I(Ae.mediaWrapper, i.mediaWrapper), children: r }),
    /* @__PURE__ */ m.jsxs("div", { className: i.textWrapper, children: [
      h && /* @__PURE__ */ m.jsx(
        Xo.Subtitle,
        {
          className: I(Ae.typography, Ae.title, i.typography),
          size: 1,
          as: "h3",
          typographyStyle: d,
          children: t
        }
      ),
      /* @__PURE__ */ m.jsx(
        Xo.Label,
        {
          className: I(Ae.typography, Ae.text, i.typography),
          typographyStyle: d,
          size: v,
          children: e
        }
      )
    ] }),
    y && /* @__PURE__ */ m.jsx(
      "button",
      {
        type: "button",
        className: I(Ae.closeButton, Ae[n], i.closeButton, {
          [Ae.hasMedia]: p
        }),
        onClick: a,
        "aria-label": "Закрыть подсказку",
        "data-testid": "tooltip-close-button",
        children: /* @__PURE__ */ m.jsx(mh, {})
      }
    ),
    f && g && /* @__PURE__ */ m.jsx("div", { className: Ae.buttonStack, children: s.map((x, b) => {
      const _ = wh(b, s.length, n), S = xh(x, _, u), { closeOnClick: E, ...w } = S, L = (M) => {
        var j;
        (j = w.onClick) == null || j.call(w, M), E && a?.();
      };
      return /* @__PURE__ */ m.jsx(Go, { ...w, onClick: L }, b);
    }) })
  ] });
}, ym = ({
  customContent: e,
  children: t,
  placement: r = "top",
  contentClassNames: n,
  mouseEnterDelay: o = 0,
  mouseLeaveDelay: i = 0.1,
  showArrow: a = !0,
  showClose: s = !0,
  trigger: u = "hover",
  variant: c = "neutral",
  size: d = "s",
  text: f,
  title: h,
  media: p,
  buttons: g,
  buttonProps: y,
  onClose: v,
  ...x
}) => {
  const [b, _] = l.useState(!1), [S, E] = l.useState(!1), w = d === "m" ? bh : yh, L = () => {
    _(!1), v?.();
  }, M = e || (d === "m" ? /* @__PURE__ */ m.jsx(
    Aa,
    {
      classNames: n,
      text: f,
      variant: c,
      size: d,
      onClose: L,
      title: h,
      media: p,
      showClose: s,
      buttons: g,
      buttonProps: y
    }
  ) : /* @__PURE__ */ m.jsx(
    Aa,
    {
      classNames: n,
      text: f,
      variant: c,
      size: d,
      onClose: L
    }
  ));
  return l.useEffect(() => {
    if (b) {
      const j = requestAnimationFrame(() => E(!0));
      return () => cancelAnimationFrame(j);
    }
    E(!1);
  }, [b]), /* @__PURE__ */ m.jsx(
    $d,
    {
      visible: b,
      onVisibleChange: _,
      classNames: {
        root: I(Ae.root, Ae[c], Ae[d], S && Ae.open),
        ...x.classNames
      },
      placement: r,
      overlay: () => M,
      trigger: u,
      mouseEnterDelay: o,
      mouseLeaveDelay: i,
      motion: { motionName: "tooltipMotion" },
      builtinPlacements: w,
      showArrow: a ? {
        content: /* @__PURE__ */ m.jsx(gh, {}),
        className: `tooltipArrow tooltipArrow-${d}`
      } : !1,
      destroyTooltipOnHide: !0,
      ...x,
      children: t
    }
  );
}, Ch = "_base_4dkq5_1", Sh = "_content_4dkq5_1", Eh = "_background_4dkq5_1", Rh = "_button_4dkq5_1", kh = "_link_4dkq5_1", Lh = "_input_4dkq5_1", Mh = "_suffix_4dkq5_1", Nh = "_prefix_4dkq5_1", Th = "_tooltip_4dkq5_1", Ph = "_hint_4dkq5_1", jh = "_dropdown_4dkq5_1", Ah = "_popover_4dkq5_1", Oh = "_modalBackdrop_4dkq5_1", Dh = "_modal_4dkq5_1", zh = "_overlay_4dkq5_1", Ih = "_drawer_4dkq5_1", $h = "_notification_4dkq5_1", Fh = "_alert_4dkq5_1", Bh = "_toast_4dkq5_1", Wh = "_loading_4dkq5_1", Hh = "_error_4dkq5_1", Vh = "_critical_4dkq5_1", qh = "_segmentedControl_4dkq5_7", Kh = "_segment_4dkq5_7", Uh = "_activeSegmentIndicator_4dkq5_61", Zh = "_selected_4dkq5_80", Gh = "_stretched_4dkq5_89", Xh = "_disabled_4dkq5_97", Qh = "_s_4dkq5_7", Jh = "_icon_4dkq5_110", Yh = "_label_4dkq5_114", em = "_m_4dkq5_1", tm = "_l_4dkq5_114", Tt = {
  base: Ch,
  content: Sh,
  background: Eh,
  button: Rh,
  link: kh,
  input: Lh,
  suffix: Mh,
  prefix: Nh,
  tooltip: Th,
  hint: Ph,
  dropdown: jh,
  popover: Ah,
  modalBackdrop: Oh,
  modal: Dh,
  overlay: zh,
  drawer: Ih,
  notification: $h,
  alert: Fh,
  toast: Bh,
  loading: Wh,
  error: Hh,
  critical: Vh,
  segmentedControl: qh,
  segment: Kh,
  activeSegmentIndicator: Uh,
  selected: Zh,
  stretched: Gh,
  disabled: Xh,
  s: Qh,
  icon: Jh,
  label: Yh,
  m: em,
  l: tm
}, Oa = {
  s: xe["typography-label-3-regular"],
  m: xe["typography-label-2-regular"],
  l: xe["typography-label-2-regular"]
}, _m = (e) => {
  const {
    className: t,
    defaultValue: r,
    value: n,
    size: o = "m",
    segments: i,
    stretched: a,
    disabled: s = !1,
    mode: u = "label",
    onChange: c,
    ...d
  } = e, f = l.useId(), [h, p] = l.useState(r || i[0].value), [g, y] = l.useState({ width: 0, left: 0, height: 0 }), v = l.useRef(null);
  l.useEffect(() => {
    n != null && p(n);
  }, [n]), l.useLayoutEffect(() => {
    x();
  }, [h, i, o, a, u]);
  const x = () => {
    if (!(v != null && v.current)) return;
    const _ = v.current.querySelector(
      '[data-is-active-segment="true"]'
    );
    _ && y({
      width: _.offsetWidth,
      left: _.offsetLeft,
      height: _.offsetHeight
    });
  }, b = (_) => {
    s || (p(_), c?.(_));
  };
  return i?.length === 0 ? null : /* @__PURE__ */ m.jsxs(
    "fieldset",
    {
      className: I(
        Tt.segmentedControl,
        Tt[o],
        Tt[u],
        {
          [Tt.stretched]: a,
          [Tt.disabled]: s
        },
        t
      ),
      "data-testid": "segmented-control-container",
      ref: v,
      disabled: s,
      ...d,
      children: [
        i?.map(({ label: _, value: S, containerProps: E = {} }, w) => {
          const { className: L, ...M } = E, j = () => b(S), A = JSON.stringify(S), P = h === S;
          return /* @__PURE__ */ m.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: f + A,
                value: A,
                type: "radio",
                checked: P,
                readOnly: !0
              }
            ),
            /* @__PURE__ */ m.jsx(
              "label",
              {
                "data-is-active-segment": P,
                className: I(Tt.segment, Oa[o], { [Tt.selected]: P }, L),
                htmlFor: f + A,
                "data-testid": "segmented-control-segment",
                onClick: j,
                ...M,
                children: _
              }
            )
          ] }, Tn(A) + w);
        }),
        /* @__PURE__ */ m.jsx(
          "div",
          {
            className: I(Tt.activeSegmentIndicator, Oa[o]),
            "data-testid": "segmented-control-segment-active-indicator",
            style: g
          }
        )
      ]
    }
  );
};
export {
  am as Alert,
  k1 as Avatar,
  C0 as Badge,
  Go as Button,
  fm as Checkbox,
  cm as ConfigProvider,
  hm as Helper,
  sm as Image,
  gm as List,
  Us as Loader,
  im as Modal,
  m0 as Placeholder,
  mm as Radio,
  _m as SegmentedControl,
  bm as Tabs,
  dm as Tag,
  vm as TextArea,
  pm as TextInput,
  ym as Tooltip,
  Xo as Typography,
  M0 as enUS,
  um as ruRU,
  N0 as useConfig,
  lm as useLocale
};
