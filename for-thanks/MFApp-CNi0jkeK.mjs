import { j as f } from "./HCMThanks__loadShare__react_mf_2_dom__loadShare__-D2nP2U3y.mjs";
import { H as C, m as Nc } from "./HCMThanks__loadShare__react__loadShare__-oj8hoKOc.mjs";
import { H as Xt, i as Zt } from "./HCMThanks__mf_v__runtimeInit__mf_v__-COyOS3qf.mjs";
import { g as qe, a as Ac, c as jc } from "./_commonjsHelpers-B4e78b8K.mjs";
const { loadShare: Pc } = Zt, { initPromise: Rc } = Xt, Tc = Rc.then((e) => Pc("zod", {
  customShareInfo: { shareConfig: {
    singleton: !0,
    strictVersion: !1,
    requiredVersion: "^3.21.4"
  } }
})), Ic = await Tc.then((e) => e());
var Le = Ic;
Le.z.ZodObject.prototype.getFields = function(e) {
  return Po(this, e);
};
Le.z.ZodObject.prototype.nonNullable = function(e) {
  return Dc(this, e);
};
function ce(e) {
  return e({ ...Le.z });
}
function Dc(e, t) {
  const r = {};
  return Le.util.objectKeys(e.shape).map((n) => {
    if (Le.util.objectKeys(t).indexOf(n) === -1)
      r[n] = e.shape[n];
    else {
      let i = e.shape[n];
      for (; i instanceof Le.ZodOptional || i instanceof Le.z.ZodNullable; )
        i = i.unwrap();
      r[n] = i;
    }
  }), new Le.z.ZodObject({
    ...e._def,
    shape: () => r
  });
}
function Po(e, t = !1, r = "") {
  const n = e.shape;
  return Object.keys(n).reduce((s, i) => {
    const o = r ? `${r}.${i}` : i;
    return s[o] = o, t && n[i] instanceof Le.z.ZodObject && (s = { ...s, ...Po(n[i], t, i) }), s;
  }, {});
}
function er(e) {
  return Object.keys(e);
}
function Vc(e) {
  return Buffer.from(e).toString("utf8");
}
function $c(e) {
  return String.fromCharCode.apply(null, new Uint16Array(e));
}
function Lc() {
  return "UNSUPPORTED";
}
typeof Buffer < "u" && Buffer.from;
function Bc(e) {
  return (t, r, n) => ({
    get() {
      const s = (...i) => {
        const o = n.get ? n.get.apply(this) : n.value;
        return e(() => o.apply(this, i), this, r, ...i);
      };
      return Object.defineProperty(this, r, {
        value: s,
        configurable: !0,
        writable: !0
      }), s;
    }
  });
}
function Uc(e, t = !0) {
  return Bc((r, n, s, ...i) => new Promise((o, a) => {
    t ? setTimeout(() => {
      Promise.resolve(r()).then((c) => {
        o(c);
      }).catch((c) => {
        a(c);
      });
    }, e) : Promise.resolve(r()).then((c) => {
      setTimeout(() => {
        o(c);
      }, e);
    }).catch((c) => {
      a(c);
    });
  }));
}
function qc(e, t = 1) {
  return new Promise((r) => {
    const n = new IntersectionObserver(
      ([s]) => {
        r(s.isIntersecting), n.disconnect();
      },
      { threshold: t }
    );
    n.observe(e);
  });
}
async function zc(e, t) {
  return qc(e, t.threshold ?? 1).then((r) => {
    r || e.scrollIntoView(t);
  });
}
const { loadShare: Hc } = Zt, { initPromise: Qc } = Xt, Wc = Qc.then((e) => Hc("lodash", {
  customShareInfo: { shareConfig: {
    singleton: !0,
    strictVersion: !1,
    requiredVersion: "^4.17.21"
  } }
})), Yc = await Wc.then((e) => e());
var Q = Yc;
class Ro {
  _subscriptions;
  constructor() {
    this._subscriptions = {};
  }
  fire(t, r) {
    let n, s, i, o = 0, a;
    if (this._subscriptions[t])
      n = this._subscriptions[t].slice();
    else
      return !1;
    for (i = n.length; o < i && (s = n[o], !(!(s.context && s.context.isDestroyed && s.context.isDestroyed()) && (s.context && (s.context.observableTopic = t), a = s.callback.call(s.context, r), s.context && delete s.context.observableTopic, a === !1))); o++)
      ;
    return a !== !1;
  }
  hasSubscriptions(t) {
    return !Q.isEmpty(this._subscriptions[t]);
  }
  on(t, r, n, s) {
    if (typeof t != "string")
      throw new Error("You must provide a valid topic to createEllipse a subscription.");
    s === void 0 && (s = 10);
    let i = 0, o;
    const a = t.split(/\s/), c = a.length;
    for (; i < c; i++) {
      t = a[i], o = !1, this._subscriptions[t] || (this._subscriptions[t] = []);
      const l = this._subscriptions[t];
      let u = 0;
      const d = l.length, h = {
        callback: r,
        context: n,
        priority: s
      };
      for (; u < d; u++)
        if (l[u].priority <= s) {
          l.splice(u, 0, h), o = !0;
          break;
        }
      o || l.push(h);
    }
    return this;
  }
  once(t, r, n, s) {
    return r.wrapper = (i) => (this.off(t, r), r.call(n, i)), this.on(t, r.wrapper, n, s), this;
  }
  off(t, r, n) {
    if (!t)
      return this._subscriptions = {}, this;
    if (!this._subscriptions[t])
      return this;
    const s = this._subscriptions[t].length;
    let i = 0;
    for (; i < s; i++)
      if (!r || (n == null || n === this._subscriptions[t][i].context) && this._subscriptions[t][i].callback === r) {
        this._subscriptions[t].splice(i, 1);
        break;
      }
    if (r && r.wrapper) {
      for (r = r.wrapper, i = 0; i < s; i++)
        if (!r || (n == null || n === this._subscriptions[t][i].context) && this._subscriptions[t][i].callback === r) {
          this._subscriptions[t].splice(i, 1);
          break;
        }
    }
    return this;
  }
}
const { loadShare: Gc } = Zt, { initPromise: Kc } = Xt, Jc = Kc.then((e) => Gc("dayjs", {
  customShareInfo: { shareConfig: {
    singleton: !0,
    strictVersion: !1,
    requiredVersion: "^1.11.13"
  } }
})), Xc = await Jc.then((e) => e());
var To = Xc;
const Se = /* @__PURE__ */ qe(To);
var Io = { exports: {} }, Zc = Io.exports;
(function(e, t) {
  (function(r, n) {
    e.exports = n(To);
  })(Zc, function(r) {
    function n(v) {
      return v && typeof v == "object" && "default" in v ? v : { default: v };
    }
    var s = n(r), i = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), o = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), a = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), c = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"), l = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function u(v, m, y) {
      var g, O;
      return y === "m" ? m ? "минута" : "минуту" : v + " " + (g = +v, O = { mm: m ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[y].split("_"), g % 10 == 1 && g % 100 != 11 ? O[0] : g % 10 >= 2 && g % 10 <= 4 && (g % 100 < 10 || g % 100 >= 20) ? O[1] : O[2]);
    }
    var d = function(v, m) {
      return l.test(m) ? i[v.month()] : o[v.month()];
    };
    d.s = o, d.f = i;
    var h = function(v, m) {
      return l.test(m) ? a[v.month()] : c[v.month()];
    };
    h.s = c, h.f = a;
    var p = { name: "ru", weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), months: d, monthsShort: h, weekStart: 1, yearStart: 4, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: u, mm: u, h: "час", hh: u, d: "день", dd: u, M: "месяц", MM: u, y: "год", yy: u }, ordinal: function(v) {
      return v;
    }, meridiem: function(v) {
      return v < 4 ? "ночи" : v < 12 ? "утра" : v < 17 ? "дня" : "вечера";
    } };
    return s.default.locale(p, null, !0), p;
  });
})(Io);
var Ps = { exports: {} }, eu = Ps.exports;
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(eu, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, o = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, c = {}, l = function(y) {
      return (y = +y) + (y > 68 ? 1900 : 2e3);
    }, u = function(y) {
      return function(g) {
        this[y] = +g;
      };
    }, d = [/[+-]\d\d:?(\d\d)?|Z/, function(y) {
      (this.zone || (this.zone = {})).offset = function(g) {
        if (!g || g === "Z") return 0;
        var O = g.match(/([+-]|\d\d)/g), b = 60 * O[1] + (+O[2] || 0);
        return b === 0 ? 0 : O[0] === "+" ? -b : b;
      }(y);
    }], h = function(y) {
      var g = c[y];
      return g && (g.indexOf ? g : g.s.concat(g.f));
    }, p = function(y, g) {
      var O, b = c.meridiem;
      if (b) {
        for (var E = 1; E <= 24; E += 1) if (y.indexOf(b(E, 0, g)) > -1) {
          O = E > 12;
          break;
        }
      } else O = y === (g ? "pm" : "PM");
      return O;
    }, v = { A: [a, function(y) {
      this.afternoon = p(y, !1);
    }], a: [a, function(y) {
      this.afternoon = p(y, !0);
    }], Q: [s, function(y) {
      this.month = 3 * (y - 1) + 1;
    }], S: [s, function(y) {
      this.milliseconds = 100 * +y;
    }], SS: [i, function(y) {
      this.milliseconds = 10 * +y;
    }], SSS: [/\d{3}/, function(y) {
      this.milliseconds = +y;
    }], s: [o, u("seconds")], ss: [o, u("seconds")], m: [o, u("minutes")], mm: [o, u("minutes")], H: [o, u("hours")], h: [o, u("hours")], HH: [o, u("hours")], hh: [o, u("hours")], D: [o, u("day")], DD: [i, u("day")], Do: [a, function(y) {
      var g = c.ordinal, O = y.match(/\d+/);
      if (this.day = O[0], g) for (var b = 1; b <= 31; b += 1) g(b).replace(/\[|\]/g, "") === y && (this.day = b);
    }], w: [o, u("week")], ww: [i, u("week")], M: [o, u("month")], MM: [i, u("month")], MMM: [a, function(y) {
      var g = h("months"), O = (h("monthsShort") || g.map(function(b) {
        return b.slice(0, 3);
      })).indexOf(y) + 1;
      if (O < 1) throw new Error();
      this.month = O % 12 || O;
    }], MMMM: [a, function(y) {
      var g = h("months").indexOf(y) + 1;
      if (g < 1) throw new Error();
      this.month = g % 12 || g;
    }], Y: [/[+-]?\d+/, u("year")], YY: [i, function(y) {
      this.year = l(y);
    }], YYYY: [/\d{4}/, u("year")], Z: d, ZZ: d };
    function m(y) {
      var g, O;
      g = y, O = c && c.formats;
      for (var b = (y = g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(_, w, A) {
        var k = A && A.toUpperCase();
        return w || O[A] || r[A] || O[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, R, V) {
          return R || V.slice(1);
        });
      })).match(n), E = b.length, N = 0; N < E; N += 1) {
        var S = b[N], x = v[S], M = x && x[0], F = x && x[1];
        b[N] = F ? { regex: M, parser: F } : S.replace(/^\[|\]$/g, "");
      }
      return function(_) {
        for (var w = {}, A = 0, k = 0; A < E; A += 1) {
          var j = b[A];
          if (typeof j == "string") k += j.length;
          else {
            var R = j.regex, V = j.parser, I = _.slice(k), D = R.exec(I)[0];
            V.call(w, D), _ = _.replace(D, "");
          }
        }
        return function(T) {
          var $ = T.afternoon;
          if ($ !== void 0) {
            var L = T.hours;
            $ ? L < 12 && (T.hours += 12) : L === 12 && (T.hours = 0), delete T.afternoon;
          }
        }(w), w;
      };
    }
    return function(y, g, O) {
      O.p.customParseFormat = !0, y && y.parseTwoDigitYear && (l = y.parseTwoDigitYear);
      var b = g.prototype, E = b.parse;
      b.parse = function(N) {
        var S = N.date, x = N.utc, M = N.args;
        this.$u = x;
        var F = M[1];
        if (typeof F == "string") {
          var _ = M[2] === !0, w = M[3] === !0, A = _ || w, k = M[2];
          w && (k = M[2]), c = this.$locale(), !_ && k && (c = O.Ls[k]), this.$d = function(I, D, T, $) {
            try {
              if (["x", "X"].indexOf(D) > -1) return new Date((D === "X" ? 1e3 : 1) * I);
              var L = m(D)(I), z = L.year, U = L.month, K = L.day, B = L.hours, W = L.minutes, le = L.seconds, Y = L.milliseconds, G = L.zone, ee = L.week, Ce = /* @__PURE__ */ new Date(), ge = K || (z || U ? 1 : Ce.getDate()), Ne = z || Ce.getFullYear(), ue = 0;
              z && !U || (ue = U > 0 ? U - 1 : Ce.getMonth());
              var pe, Ie = B || 0, Ze = W || 0, Ot = le || 0, lt = Y || 0;
              return G ? new Date(Date.UTC(Ne, ue, ge, Ie, Ze, Ot, lt + 60 * G.offset * 1e3)) : T ? new Date(Date.UTC(Ne, ue, ge, Ie, Ze, Ot, lt)) : (pe = new Date(Ne, ue, ge, Ie, Ze, Ot, lt), ee && (pe = $(pe).week(ee).toDate()), pe);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(S, F, x, O), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), A && S != this.format(F) && (this.$d = /* @__PURE__ */ new Date("")), c = {};
        } else if (F instanceof Array) for (var j = F.length, R = 1; R <= j; R += 1) {
          M[1] = F[R - 1];
          var V = O.apply(this, M);
          if (V.isValid()) {
            this.$d = V.$d, this.$L = V.$L, this.init();
            break;
          }
          R === j && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else E.call(this, N);
      };
    };
  });
})(Ps);
var tu = Ps.exports;
const ru = /* @__PURE__ */ qe(tu);
var Rs = { exports: {} }, nu = Rs.exports;
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(nu, function() {
    var r, n, s = 1e3, i = 6e4, o = 36e5, a = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, l = 31536e6, u = 2628e6, d = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, h = { years: l, months: u, days: a, hours: o, minutes: i, seconds: s, milliseconds: 1, weeks: 6048e5 }, p = function(S) {
      return S instanceof E;
    }, v = function(S, x, M) {
      return new E(S, M, x.$l);
    }, m = function(S) {
      return n.p(S) + "s";
    }, y = function(S) {
      return S < 0;
    }, g = function(S) {
      return y(S) ? Math.ceil(S) : Math.floor(S);
    }, O = function(S) {
      return Math.abs(S);
    }, b = function(S, x) {
      return S ? y(S) ? { negative: !0, format: "" + O(S) + x } : { negative: !1, format: "" + S + x } : { negative: !1, format: "" };
    }, E = function() {
      function S(M, F, _) {
        var w = this;
        if (this.$d = {}, this.$l = _, M === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), F) return v(M * h[m(F)], this);
        if (typeof M == "number") return this.$ms = M, this.parseFromMilliseconds(), this;
        if (typeof M == "object") return Object.keys(M).forEach(function(j) {
          w.$d[m(j)] = M[j];
        }), this.calMilliseconds(), this;
        if (typeof M == "string") {
          var A = M.match(d);
          if (A) {
            var k = A.slice(2).map(function(j) {
              return j != null ? Number(j) : 0;
            });
            return this.$d.years = k[0], this.$d.months = k[1], this.$d.weeks = k[2], this.$d.days = k[3], this.$d.hours = k[4], this.$d.minutes = k[5], this.$d.seconds = k[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var x = S.prototype;
      return x.calMilliseconds = function() {
        var M = this;
        this.$ms = Object.keys(this.$d).reduce(function(F, _) {
          return F + (M.$d[_] || 0) * h[_];
        }, 0);
      }, x.parseFromMilliseconds = function() {
        var M = this.$ms;
        this.$d.years = g(M / l), M %= l, this.$d.months = g(M / u), M %= u, this.$d.days = g(M / a), M %= a, this.$d.hours = g(M / o), M %= o, this.$d.minutes = g(M / i), M %= i, this.$d.seconds = g(M / s), M %= s, this.$d.milliseconds = M;
      }, x.toISOString = function() {
        var M = b(this.$d.years, "Y"), F = b(this.$d.months, "M"), _ = +this.$d.days || 0;
        this.$d.weeks && (_ += 7 * this.$d.weeks);
        var w = b(_, "D"), A = b(this.$d.hours, "H"), k = b(this.$d.minutes, "M"), j = this.$d.seconds || 0;
        this.$d.milliseconds && (j += this.$d.milliseconds / 1e3, j = Math.round(1e3 * j) / 1e3);
        var R = b(j, "S"), V = M.negative || F.negative || w.negative || A.negative || k.negative || R.negative, I = A.format || k.format || R.format ? "T" : "", D = (V ? "-" : "") + "P" + M.format + F.format + w.format + I + A.format + k.format + R.format;
        return D === "P" || D === "-P" ? "P0D" : D;
      }, x.toJSON = function() {
        return this.toISOString();
      }, x.format = function(M) {
        var F = M || "YYYY-MM-DDTHH:mm:ss", _ = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return F.replace(c, function(w, A) {
          return A || String(_[w]);
        });
      }, x.as = function(M) {
        return this.$ms / h[m(M)];
      }, x.get = function(M) {
        var F = this.$ms, _ = m(M);
        return _ === "milliseconds" ? F %= 1e3 : F = _ === "weeks" ? g(F / h[_]) : this.$d[_], F || 0;
      }, x.add = function(M, F, _) {
        var w;
        return w = F ? M * h[m(F)] : p(M) ? M.$ms : v(M, this).$ms, v(this.$ms + w * (_ ? -1 : 1), this);
      }, x.subtract = function(M, F) {
        return this.add(M, F, !0);
      }, x.locale = function(M) {
        var F = this.clone();
        return F.$l = M, F;
      }, x.clone = function() {
        return v(this.$ms, this);
      }, x.humanize = function(M) {
        return r().add(this.$ms, "ms").locale(this.$l).fromNow(!M);
      }, x.valueOf = function() {
        return this.asMilliseconds();
      }, x.milliseconds = function() {
        return this.get("milliseconds");
      }, x.asMilliseconds = function() {
        return this.as("milliseconds");
      }, x.seconds = function() {
        return this.get("seconds");
      }, x.asSeconds = function() {
        return this.as("seconds");
      }, x.minutes = function() {
        return this.get("minutes");
      }, x.asMinutes = function() {
        return this.as("minutes");
      }, x.hours = function() {
        return this.get("hours");
      }, x.asHours = function() {
        return this.as("hours");
      }, x.days = function() {
        return this.get("days");
      }, x.asDays = function() {
        return this.as("days");
      }, x.weeks = function() {
        return this.get("weeks");
      }, x.asWeeks = function() {
        return this.as("weeks");
      }, x.months = function() {
        return this.get("months");
      }, x.asMonths = function() {
        return this.as("months");
      }, x.years = function() {
        return this.get("years");
      }, x.asYears = function() {
        return this.as("years");
      }, S;
    }(), N = function(S, x, M) {
      return S.add(x.years() * M, "y").add(x.months() * M, "M").add(x.days() * M, "d").add(x.hours() * M, "h").add(x.minutes() * M, "m").add(x.seconds() * M, "s").add(x.milliseconds() * M, "ms");
    };
    return function(S, x, M) {
      r = M, n = M().$utils(), M.duration = function(w, A) {
        var k = M.locale();
        return v(w, { $l: k }, A);
      }, M.isDuration = p;
      var F = x.prototype.add, _ = x.prototype.subtract;
      x.prototype.add = function(w, A) {
        return p(w) ? N(this, w, 1) : F.bind(this)(w, A);
      }, x.prototype.subtract = function(w, A) {
        return p(w) ? N(this, w, -1) : _.bind(this)(w, A);
      };
    };
  });
})(Rs);
var su = Rs.exports;
const iu = /* @__PURE__ */ qe(su);
var Ts = { exports: {} }, ou = Ts.exports;
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(ou, function() {
    return function(r, n, s) {
      n.prototype.isToday = function() {
        var i = "YYYY-MM-DD", o = s();
        return this.format(i) === o.format(i);
      };
    };
  });
})(Ts);
var au = Ts.exports;
const cu = /* @__PURE__ */ qe(au);
var Is = { exports: {} }, uu = Is.exports;
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(uu, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(n, s, i) {
      var o = s.prototype, a = o.format;
      i.en.formats = r, o.format = function(c) {
        c === void 0 && (c = "YYYY-MM-DDTHH:mm:ssZ");
        var l = this.$locale().formats, u = function(d, h) {
          return d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(p, v, m) {
            var y = m && m.toUpperCase();
            return v || h[m] || r[m] || h[y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, O, b) {
              return O || b.slice(1);
            });
          });
        }(c, l === void 0 ? {} : l);
        return a.call(this, u);
      };
    };
  });
})(Is);
var lu = Is.exports;
const du = /* @__PURE__ */ qe(lu);
var Ds = { exports: {} }, fu = Ds.exports;
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(fu, function() {
    return function(r, n, s) {
      r = r || {};
      var i = n.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function a(l, u, d, h) {
        return i.fromToBase(l, u, d, h);
      }
      s.en.relativeTime = o, i.fromToBase = function(l, u, d, h, p) {
        for (var v, m, y, g = d.$locale().relativeTime || o, O = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], b = O.length, E = 0; E < b; E += 1) {
          var N = O[E];
          N.d && (v = h ? s(l).diff(d, N.d, !0) : d.diff(l, N.d, !0));
          var S = (r.rounding || Math.round)(Math.abs(v));
          if (y = v > 0, S <= N.r || !N.r) {
            S <= 1 && E > 0 && (N = O[E - 1]);
            var x = g[N.l];
            p && (S = p("" + S)), m = typeof x == "string" ? x.replace("%d", S) : x(S, u, N.l, y);
            break;
          }
        }
        if (u) return m;
        var M = y ? g.future : g.past;
        return typeof M == "function" ? M(m) : M.replace("%s", m);
      }, i.to = function(l, u) {
        return a(l, u, this, !0);
      }, i.from = function(l, u) {
        return a(l, u, this);
      };
      var c = function(l) {
        return l.$u ? s.utc() : s();
      };
      i.toNow = function(l) {
        return this.to(c(this), l);
      }, i.fromNow = function(l) {
        return this.from(c(this), l);
      };
    };
  });
})(Ds);
var hu = Ds.exports;
const mu = /* @__PURE__ */ qe(hu);
var Vs = { exports: {} }, pu = Vs.exports;
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(pu, function() {
    var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, s = /([+-]|\d\d)/g;
    return function(i, o, a) {
      var c = o.prototype;
      a.utc = function(m) {
        var y = { date: m, utc: !0, args: arguments };
        return new o(y);
      }, c.utc = function(m) {
        var y = a(this.toDate(), { locale: this.$L, utc: !0 });
        return m ? y.add(this.utcOffset(), r) : y;
      }, c.local = function() {
        return a(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var l = c.parse;
      c.parse = function(m) {
        m.utc && (this.$u = !0), this.$utils().u(m.$offset) || (this.$offset = m.$offset), l.call(this, m);
      };
      var u = c.init;
      c.init = function() {
        if (this.$u) {
          var m = this.$d;
          this.$y = m.getUTCFullYear(), this.$M = m.getUTCMonth(), this.$D = m.getUTCDate(), this.$W = m.getUTCDay(), this.$H = m.getUTCHours(), this.$m = m.getUTCMinutes(), this.$s = m.getUTCSeconds(), this.$ms = m.getUTCMilliseconds();
        } else u.call(this);
      };
      var d = c.utcOffset;
      c.utcOffset = function(m, y) {
        var g = this.$utils().u;
        if (g(m)) return this.$u ? 0 : g(this.$offset) ? d.call(this) : this.$offset;
        if (typeof m == "string" && (m = function(N) {
          N === void 0 && (N = "");
          var S = N.match(n);
          if (!S) return null;
          var x = ("" + S[0]).match(s) || ["-", 0, 0], M = x[0], F = 60 * +x[1] + +x[2];
          return F === 0 ? 0 : M === "+" ? F : -F;
        }(m), m === null)) return this;
        var O = Math.abs(m) <= 16 ? 60 * m : m, b = this;
        if (y) return b.$offset = O, b.$u = m === 0, b;
        if (m !== 0) {
          var E = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (b = this.local().add(O + E, r)).$offset = O, b.$x.$localOffset = E;
        } else b = this.utc();
        return b;
      };
      var h = c.format;
      c.format = function(m) {
        var y = m || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return h.call(this, y);
      }, c.valueOf = function() {
        var m = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * m;
      }, c.isUTC = function() {
        return !!this.$u;
      }, c.toISOString = function() {
        return this.toDate().toISOString();
      }, c.toString = function() {
        return this.toDate().toUTCString();
      };
      var p = c.toDate;
      c.toDate = function(m) {
        return m === "s" && this.$offset ? a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : p.call(this);
      };
      var v = c.diff;
      c.diff = function(m, y, g) {
        if (m && this.$u === m.$u) return v.call(this, m, y, g);
        var O = this.local(), b = a(m).local();
        return v.call(O, b, y, g);
      };
    };
  });
})(Vs);
var yu = Vs.exports;
const vu = /* @__PURE__ */ qe(yu), gu = "DD.MM.YYYY", bu = [
  { l: "s", r: 1 },
  { l: "m", r: 1 },
  { l: "mm", r: 59, d: "minute" },
  { l: "h", r: 1 },
  { l: "hh", r: 23, d: "hour" },
  { l: "d", r: 1 },
  { l: "dd", r: 28, d: "day" },
  { l: "M", r: 1 },
  { l: "MM", r: 11, d: "month" },
  { l: "y", r: 1 },
  { l: "yy", d: "year" }
];
Se.locale("ru");
Se.extend(mu, {
  thresholds: bu,
  rounding: (e) => Math.floor(e)
});
Se.extend(cu);
Se.extend(ru);
Se.extend(vu);
Se.extend(iu);
Se.extend(du);
function Ur(...e) {
  let t = gu, r = "-";
  const n = e[0];
  if (e.length === 2 ? r = e[1] : e.length === 3 && (t = e[1], r = e[2]), e.length === 2 || e.length === 3 && (t = e[1], r = e[2]), typeof n == "string" || typeof n == "number" || n instanceof Date) {
    const s = Q.isNil(n) ? void 0 : Se(n);
    if (s)
      return s.format(t);
  }
  return r;
}
function tr(e) {
  return e == null || typeof e == "number" || typeof e == "string" || typeof e == "boolean" || e instanceof Date || e instanceof BigInt;
}
function Su(e, t) {
  return !tr(e) && e[t] !== void 0;
}
function xu(e, t) {
  return !tr(e) && typeof e[t] == "object";
}
function Vt(e, t) {
  return !tr(e) && typeof e[t] == "string";
}
function wu(e, t) {
  return !tr(e) && typeof e[t] == "function";
}
function Eu(e, t) {
  return !tr(e) && typeof e[t] == "function";
}
async function ku(e = 0) {
  return new Promise((t) => {
    setTimeout(() => {
      t();
    }, e);
  });
}
function Do(e) {
  return Q.isObject(e) ? e !== null && !Q.isEmpty(e) : typeof e == "string" ? !Q.isEmpty(e) : !Q.isNil(e);
}
const Mu = /^[0-9]+$/;
function _u(e) {
  return typeof e == "number" ? !0 : typeof e == "string" && e.startsWith("`") ? !1 : Mu.test(String(e));
}
function Fu(e) {
  return e.startsWith("`") ? e.replaceAll("`", "") : e;
}
function mi(e, t) {
  return We(e, t) !== void 0;
}
function We(e, t, r) {
  let n;
  if (!Q.isNil(e)) {
    const s = t.split(".");
    n = e, s.forEach((i) => {
      !Q.isNil(n) && Su(n, i) ? n = n[i] : n = void 0;
    });
  }
  return Q.isNil(n) && r !== void 0 && (n = r), n;
}
function $s(e, t, r) {
  if (!e)
    return;
  const n = t.split("."), s = Fu(n.shift());
  if (n.length) {
    let i = e[s];
    Q.isNil(i) && (_u(n[0]) ? i = [] : i = {}, e[s] = i), $s(i, n.join("."), r), Array.isArray(i) ? e[s] = [...i] : typeof i == "object" ? e[s] = { ...i } : e[s] = i;
  } else
    e[s] = r;
}
function pi(e) {
  if (C.isValidElement(e) && typeof e.type != "string" && Vt(e.type, "displayName"))
    return We(e.type, "displayName");
}
function Ou(e, t) {
  return t ? C.Children.toArray(e).reduce((r, n) => (pi(n) === t ? r.push(n) : Q.isArray(n) && r.push(
    ...n.filter((s) => pi(s) === t)
  ), r), []) : [];
}
function yi(e) {
  return e.indexOf("//") === 0 && (e = location.protocol + e), e.toLowerCase().replace(/([a-z])?:\/\//, "$1").split("/")[0];
}
function Cu(e) {
  return Nu(e) && yi(location.href) !== yi(e);
}
function Nu(e) {
  return e ? e.indexOf("http:") === 0 || e.indexOf("https:") === 0 : !1;
}
function rr(e, t, r = !1, n = !1) {
  return !t || Cu(e) || (e === "" && (e = "/"), e.indexOf(t) === 0 && (e = e.substring(t.length)), e.indexOf("/") === 0 && (e = e.substring(1)), t.charAt(t.length - 1) === "/" && (t = t.substring(0, t.length - 1)), n && e.indexOf(t + "/") === 0 && (e = e.substring(t.length + 1)), e = e ? t + "/" + e : t, r && (e = window.location.protocol + "//" + window.location.host + e)), e;
}
function Au(e) {
  const t = [];
  return Object.keys(e).forEach((r) => {
    Array.isArray(e[r]) ? Array.from(e[r]).forEach((n) => {
      t.push(`${r}[]=${encodeURIComponent(String(n))}`);
    }) : t.push(`${r}=${encodeURIComponent(String(e[r]))}`);
  }), t.join("&");
}
class sn extends Error {
  data;
  constructor(t, r) {
    super(t), this.name = "AbstractError", this.data = r;
  }
}
class Me extends sn {
  constructor(t, r) {
    super(t, r), this.name = "ApplicationError";
  }
}
class ju extends Me {
  constructor(t) {
    super(`Необходимо зарегистрировать сервис ${String(t)}`), this.name = "ServiceNotFoundError";
  }
}
class Pu extends sn {
}
class Te extends Pu {
}
class Ru extends Te {
  code;
  constructor(t = "Доступ запрещен", r) {
    super(t, r), this.name = "ForbiddenAccessError", this.code = 403;
  }
}
class es extends Te {
  code;
  constructor() {
    super("Пользователь не авторизован"), this.name = "UnauthorizedError", this.code = 401;
  }
}
class Tu extends Te {
  code;
  constructor(t, r) {
    super(t, r), this.name = "BadRequestError", this.code = 400;
  }
}
class Iu extends Te {
  code;
  constructor(t, r) {
    super(t, r), this.name = "UnprocessableEntityError", this.code = 422;
  }
}
class Du extends Te {
  code;
  constructor(t, r) {
    super(t, r), this.name = "NotFoundError", this.code = 404;
  }
}
class Vu extends Te {
  code;
  constructor(t, r) {
    super(t, r), this.name = "InternalServerError", this.code = 500;
  }
}
class $u extends Te {
  code;
  constructor(t) {
    super(t), this.name = "BadGatewayError", this.code = 502;
  }
}
class Lu extends Te {
  code;
  constructor(t) {
    super(t), this.name = "ServiceUnavailableError", this.code = 503;
  }
}
class Bu extends Te {
  code;
  constructor(t) {
    super(t), this.name = "GatewayTimeoutError", this.code = 504;
  }
}
class ts extends Te {
  constructor(t) {
    super(t), this.name = "RestError";
  }
}
class Uu extends Me {
  constructor(t) {
    super(`такого не должно произойти ${t ? ":" + t : ""}`), this.name = "AssertError";
  }
}
function qu(e) {
  throw new Uu(e);
}
const oe = ce((e) => e.number().or(e.string())), Vo = ce((e) => e.object({
  id: oe,
  name: e.string()
})), zu = ce((e) => e.object({
  id: oe,
  name: e.string()
})), rs = ce((e) => e.object({
  id: oe,
  firstName: e.string().nullish(),
  middleName: e.string().nullish(),
  lastName: e.string().nullish(),
  position: Vo.nullish(),
  department: zu.nullish(),
  image: e.string().nullish()
}));
ce((e) => e.object({
  id: oe,
  firstName: e.string().nullish(),
  middleName: e.string().nullish(),
  lastName: e.string().nullish(),
  email: e.string(),
  position: Vo.nullish(),
  image: e.string().nullish()
}));
ce((e) => e.object({
  totalElements: e.number(),
  employees: e.array(rs)
}));
const $o = C.createContext(null), Mn = {
  didCatch: !1,
  error: null
};
class Hu extends C.Component {
  constructor(t) {
    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Mn;
  }
  static getDerivedStateFromError(t) {
    return {
      didCatch: !0,
      error: t
    };
  }
  resetErrorBoundary() {
    const {
      error: t
    } = this.state;
    if (t !== null) {
      for (var r, n, s = arguments.length, i = new Array(s), o = 0; o < s; o++)
        i[o] = arguments[o];
      (r = (n = this.props).onReset) === null || r === void 0 || r.call(n, {
        args: i,
        reason: "imperative-api"
      }), this.setState(Mn);
    }
  }
  componentDidCatch(t, r) {
    var n, s;
    (n = (s = this.props).onError) === null || n === void 0 || n.call(s, t, r);
  }
  componentDidUpdate(t, r) {
    const {
      didCatch: n
    } = this.state, {
      resetKeys: s
    } = this.props;
    if (n && r.error !== null && Qu(t.resetKeys, s)) {
      var i, o;
      (i = (o = this.props).onReset) === null || i === void 0 || i.call(o, {
        next: s,
        prev: t.resetKeys,
        reason: "keys"
      }), this.setState(Mn);
    }
  }
  render() {
    const {
      children: t,
      fallbackRender: r,
      FallbackComponent: n,
      fallback: s
    } = this.props, {
      didCatch: i,
      error: o
    } = this.state;
    let a = t;
    if (i) {
      const c = {
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof r == "function")
        a = r(c);
      else if (n)
        a = C.createElement(n, c);
      else if (s !== void 0)
        a = s;
      else
        throw o;
    }
    return C.createElement($o.Provider, {
      value: {
        didCatch: i,
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, a);
  }
}
function Qu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((r, n) => !Object.is(r, t[n]));
}
function Wu(e) {
  if (e == null || typeof e.didCatch != "boolean" || typeof e.resetErrorBoundary != "function")
    throw new Error("ErrorBoundaryContext not found");
}
function Yu() {
  const e = C.useContext($o);
  Wu(e);
  const [t, r] = C.useState({
    error: null,
    hasError: !1
  }), n = C.useMemo(() => ({
    resetBoundary: () => {
      e.resetErrorBoundary(), r({
        error: null,
        hasError: !1
      });
    },
    showBoundary: (s) => r({
      error: s,
      hasError: !0
    })
  }), [e.resetErrorBoundary]);
  if (t.hasError)
    throw t.error;
  return n;
}
class Lo {
  constructor(t) {
    this.parent = t;
  }
  services = {};
  getService(t) {
    let r = this.services[t];
    if (r || this.parent && (r = this.parent.getService(t)), !r)
      throw new ju(t);
    return r;
  }
  registerService(t, r) {
    return this.services[t] = r, this;
  }
}
const Gu = C.createContext(void 0);
function Ku({
  children: e,
  servicesContainer: t
}) {
  return /* @__PURE__ */ f.jsx(Gu.Provider, { value: t, children: e });
}
const Ls = Symbol("IConfigProvider");
class Ju {
  constructor(t) {
    this.data = t;
  }
  getProperty(t, r) {
    return We(this.data, t, r);
  }
}
class Xu {
  config;
  pendingFetchResult;
  async getProperty(t, r) {
    let n = {};
    if (!this.config) {
      try {
        n = await this.fetchConfigData();
      } catch {
        n = this.getDefaultData();
      }
      this.config = new Ju(n);
    }
    return this.config.getProperty(t, r);
  }
  async fetchConfigData() {
    return this.pendingFetchResult || (this.pendingFetchResult = this.doFetchData()), this.pendingFetchResult;
  }
  getDefaultData() {
    return {};
  }
}
function Bo(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Zu } = Object.prototype, { getPrototypeOf: Bs } = Object, { iterator: on, toStringTag: Uo } = Symbol, an = /* @__PURE__ */ ((e) => (t) => {
  const r = Zu.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Oe = (e) => (e = e.toLowerCase(), (t) => an(t) === e), cn = (e) => (t) => typeof t === e, { isArray: Mt } = Array, zt = cn("undefined");
function el(e) {
  return e !== null && !zt(e) && e.constructor !== null && !zt(e.constructor) && fe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qo = Oe("ArrayBuffer");
function tl(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qo(e.buffer), t;
}
const rl = cn("string"), fe = cn("function"), zo = cn("number"), un = (e) => e !== null && typeof e == "object", nl = (e) => e === !0 || e === !1, Ar = (e) => {
  if (an(e) !== "object")
    return !1;
  const t = Bs(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Uo in e) && !(on in e);
}, sl = Oe("Date"), il = Oe("File"), ol = Oe("Blob"), al = Oe("FileList"), cl = (e) => un(e) && fe(e.pipe), ul = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || fe(e.append) && ((t = an(e)) === "formdata" || // detect form-data instance
  t === "object" && fe(e.toString) && e.toString() === "[object FormData]"));
}, ll = Oe("URLSearchParams"), [dl, fl, hl, ml] = ["ReadableStream", "Request", "Response", "Headers"].map(Oe), pl = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function nr(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), Mt(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let a;
    for (n = 0; n < o; n++)
      a = i[n], t.call(null, e[a], a, e);
  }
}
function Ho(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const nt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Qo = (e) => !zt(e) && e !== nt;
function ns() {
  const { caseless: e } = Qo(this) && this || {}, t = {}, r = (n, s) => {
    const i = e && Ho(t, s) || s;
    Ar(t[i]) && Ar(n) ? t[i] = ns(t[i], n) : Ar(n) ? t[i] = ns({}, n) : Mt(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && nr(arguments[n], r);
  return t;
}
const yl = (e, t, r, { allOwnKeys: n } = {}) => (nr(t, (s, i) => {
  r && fe(s) ? e[i] = Bo(s, r) : e[i] = s;
}, { allOwnKeys: n }), e), vl = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), gl = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, bl = (e, t, r, n) => {
  let s, i, o;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!n || n(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = r !== !1 && Bs(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Sl = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, xl = (e) => {
  if (!e) return null;
  if (Mt(e)) return e;
  let t = e.length;
  if (!zo(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, wl = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Bs(Uint8Array)), El = (e, t) => {
  const n = (e && e[on]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, kl = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Ml = Oe("HTMLFormElement"), _l = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), vi = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Fl = Oe("RegExp"), Wo = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  nr(r, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (n[i] = o || s);
  }), Object.defineProperties(e, n);
}, Ol = (e) => {
  Wo(e, (t, r) => {
    if (fe(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (fe(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Cl = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((i) => {
      r[i] = !0;
    });
  };
  return Mt(e) ? n(e) : n(String(e).split(t)), r;
}, Nl = () => {
}, Al = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function jl(e) {
  return !!(e && fe(e.append) && e[Uo] === "FormData" && e[on]);
}
const Pl = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (un(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const i = Mt(n) ? [] : {};
        return nr(n, (o, a) => {
          const c = r(o, s + 1);
          !zt(c) && (i[a] = c);
        }), t[s] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, Rl = Oe("AsyncFunction"), Tl = (e) => e && (un(e) || fe(e)) && fe(e.then) && fe(e.catch), Yo = ((e, t) => e ? setImmediate : t ? ((r, n) => (nt.addEventListener("message", ({ source: s, data: i }) => {
  s === nt && i === r && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), nt.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  fe(nt.postMessage)
), Il = typeof queueMicrotask < "u" ? queueMicrotask.bind(nt) : typeof process < "u" && process.nextTick || Yo, Dl = (e) => e != null && fe(e[on]), P = {
  isArray: Mt,
  isArrayBuffer: qo,
  isBuffer: el,
  isFormData: ul,
  isArrayBufferView: tl,
  isString: rl,
  isNumber: zo,
  isBoolean: nl,
  isObject: un,
  isPlainObject: Ar,
  isReadableStream: dl,
  isRequest: fl,
  isResponse: hl,
  isHeaders: ml,
  isUndefined: zt,
  isDate: sl,
  isFile: il,
  isBlob: ol,
  isRegExp: Fl,
  isFunction: fe,
  isStream: cl,
  isURLSearchParams: ll,
  isTypedArray: wl,
  isFileList: al,
  forEach: nr,
  merge: ns,
  extend: yl,
  trim: pl,
  stripBOM: vl,
  inherits: gl,
  toFlatObject: bl,
  kindOf: an,
  kindOfTest: Oe,
  endsWith: Sl,
  toArray: xl,
  forEachEntry: El,
  matchAll: kl,
  isHTMLForm: Ml,
  hasOwnProperty: vi,
  hasOwnProp: vi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Wo,
  freezeMethods: Ol,
  toObjectSet: Cl,
  toCamelCase: _l,
  noop: Nl,
  toFiniteNumber: Al,
  findKey: Ho,
  global: nt,
  isContextDefined: Qo,
  isSpecCompliantForm: jl,
  toJSONObject: Pl,
  isAsyncFn: Rl,
  isThenable: Tl,
  setImmediate: Yo,
  asap: Il,
  isIterable: Dl
};
function q(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
P.inherits(q, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: P.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Go = q.prototype, Ko = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ko[e] = { value: e };
});
Object.defineProperties(q, Ko);
Object.defineProperty(Go, "isAxiosError", { value: !0 });
q.from = (e, t, r, n, s, i) => {
  const o = Object.create(Go);
  return P.toFlatObject(e, o, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), q.call(o, e.message, t, r, n, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Vl = null;
function ss(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function Jo(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function gi(e, t, r) {
  return e ? e.concat(t).map(function(s, i) {
    return s = Jo(s), !r && i ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function $l(e) {
  return P.isArray(e) && !e.some(ss);
}
const Ll = P.toFlatObject(P, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ln(e, t, r) {
  if (!P.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = P.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, y) {
    return !P.isUndefined(y[m]);
  });
  const n = r.metaTokens, s = r.visitor || u, i = r.dots, o = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && P.isSpecCompliantForm(t);
  if (!P.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(v) {
    if (v === null) return "";
    if (P.isDate(v))
      return v.toISOString();
    if (!c && P.isBlob(v))
      throw new q("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(v) || P.isTypedArray(v) ? c && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function u(v, m, y) {
    let g = v;
    if (v && !y && typeof v == "object") {
      if (P.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), v = JSON.stringify(v);
      else if (P.isArray(v) && $l(v) || (P.isFileList(v) || P.endsWith(m, "[]")) && (g = P.toArray(v)))
        return m = Jo(m), g.forEach(function(b, E) {
          !(P.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? gi([m], E, i) : o === null ? m : m + "[]",
            l(b)
          );
        }), !1;
    }
    return ss(v) ? !0 : (t.append(gi(y, m, i), l(v)), !1);
  }
  const d = [], h = Object.assign(Ll, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: ss
  });
  function p(v, m) {
    if (!P.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(v), P.forEach(v, function(g, O) {
        (!(P.isUndefined(g) || g === null) && s.call(
          t,
          g,
          P.isString(O) ? O.trim() : O,
          m,
          h
        )) === !0 && p(g, m ? m.concat(O) : [O]);
      }), d.pop();
    }
  }
  if (!P.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function bi(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Us(e, t) {
  this._pairs = [], e && ln(e, this, t);
}
const Xo = Us.prototype;
Xo.append = function(t, r) {
  this._pairs.push([t, r]);
};
Xo.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, bi);
  } : bi;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function Bl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Zo(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Bl;
  P.isFunction(r) && (r = {
    serialize: r
  });
  const s = r && r.serialize;
  let i;
  if (s ? i = s(t, r) : i = P.isURLSearchParams(t) ? t.toString() : new Us(t, r).toString(n), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Si {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    P.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const ea = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ul = typeof URLSearchParams < "u" ? URLSearchParams : Us, ql = typeof FormData < "u" ? FormData : null, zl = typeof Blob < "u" ? Blob : null, Hl = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ul,
    FormData: ql,
    Blob: zl
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, qs = typeof window < "u" && typeof document < "u", is = typeof navigator == "object" && navigator || void 0, Ql = qs && (!is || ["ReactNative", "NativeScript", "NS"].indexOf(is.product) < 0), Wl = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Yl = qs && window.location.href || "http://localhost", Gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: qs,
  hasStandardBrowserEnv: Ql,
  hasStandardBrowserWebWorkerEnv: Wl,
  navigator: is,
  origin: Yl
}, Symbol.toStringTag, { value: "Module" })), ae = {
  ...Gl,
  ...Hl
};
function Kl(e, t) {
  return ln(e, new ae.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, i) {
      return ae.isNode && P.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Jl(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Xl(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let i;
  for (n = 0; n < s; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function ta(e) {
  function t(r, n, s, i) {
    let o = r[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), c = i >= r.length;
    return o = !o && P.isArray(s) ? s.length : o, c ? (P.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !a) : ((!s[o] || !P.isObject(s[o])) && (s[o] = []), t(r, n, s[o], i) && P.isArray(s[o]) && (s[o] = Xl(s[o])), !a);
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const r = {};
    return P.forEachEntry(e, (n, s) => {
      t(Jl(n), s, r, 0);
    }), r;
  }
  return null;
}
function Zl(e, t, r) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const sr = {
  transitional: ea,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, i = P.isObject(t);
    if (i && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t))
      return s ? JSON.stringify(ta(t)) : t;
    if (P.isArrayBuffer(t) || P.isBuffer(t) || P.isStream(t) || P.isFile(t) || P.isBlob(t) || P.isReadableStream(t))
      return t;
    if (P.isArrayBufferView(t))
      return t.buffer;
    if (P.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Kl(t, this.formSerializer).toString();
      if ((a = P.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ln(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || s ? (r.setContentType("application/json", !1), Zl(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || sr.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (P.isResponse(t) || P.isReadableStream(t))
      return t;
    if (t && P.isString(t) && (n && !this.responseType || s)) {
      const o = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? q.from(a, q.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ae.classes.FormData,
    Blob: ae.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
P.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  sr.headers[e] = {};
});
const ed = P.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), td = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), r = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!r || t[r] && ed[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, xi = Symbol("internals");
function Ct(e) {
  return e && String(e).trim().toLowerCase();
}
function jr(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(jr) : String(e);
}
function rd(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const nd = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function _n(e, t, r, n, s) {
  if (P.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!P.isString(t)) {
    if (P.isString(n))
      return t.indexOf(n) !== -1;
    if (P.isRegExp(n))
      return n.test(t);
  }
}
function sd(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function id(e, t) {
  const r = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, i, o) {
        return this[n].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
let he = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function i(a, c, l) {
      const u = Ct(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = P.findKey(s, u);
      (!d || s[d] === void 0 || l === !0 || l === void 0 && s[d] !== !1) && (s[d || c] = jr(a));
    }
    const o = (a, c) => P.forEach(a, (l, u) => i(l, u, c));
    if (P.isPlainObject(t) || t instanceof this.constructor)
      o(t, r);
    else if (P.isString(t) && (t = t.trim()) && !nd(t))
      o(td(t), r);
    else if (P.isObject(t) && P.isIterable(t)) {
      let a = {}, c, l;
      for (const u of t) {
        if (!P.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? P.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      o(a, r);
    } else
      t != null && i(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Ct(t), t) {
      const n = P.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return rd(s);
        if (P.isFunction(r))
          return r.call(this, s, n);
        if (P.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ct(t), t) {
      const n = P.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || _n(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function i(o) {
      if (o = Ct(o), o) {
        const a = P.findKey(n, o);
        a && (!r || _n(n, n[a], a, r)) && (delete n[a], s = !0);
      }
    }
    return P.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || _n(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return P.forEach(this, (s, i) => {
      const o = P.findKey(n, i);
      if (o) {
        r[o] = jr(s), delete r[i];
        return;
      }
      const a = t ? sd(i) : String(i).trim();
      a !== i && delete r[i], r[a] = jr(s), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return P.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && P.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[xi] = this[xi] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const a = Ct(o);
      n[a] || (id(s, o), n[a] = !0);
    }
    return P.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
he.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
P.reduceDescriptors(he.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
P.freezeMethods(he);
function Fn(e, t) {
  const r = this || sr, n = t || r, s = he.from(n.headers);
  let i = n.data;
  return P.forEach(e, function(a) {
    i = a.call(r, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function ra(e) {
  return !!(e && e.__CANCEL__);
}
function _t(e, t, r) {
  q.call(this, e ?? "canceled", q.ERR_CANCELED, t, r), this.name = "CanceledError";
}
P.inherits(_t, q, {
  __CANCEL__: !0
});
function na(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new q(
    "Request failed with status code " + r.status,
    [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function od(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ad(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = n[i];
    o || (o = l), r[s] = c, n[s] = l;
    let d = i, h = 0;
    for (; d !== s; )
      h += r[d++], d = d % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), l - o < t)
      return;
    const p = u && l - u;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function cd(e, t) {
  let r = 0, n = 1e3 / t, s, i;
  const o = (l, u = Date.now()) => {
    r = u, s = null, i && (clearTimeout(i), i = null), e.apply(null, l);
  };
  return [(...l) => {
    const u = Date.now(), d = u - r;
    d >= n ? o(l, u) : (s = l, i || (i = setTimeout(() => {
      i = null, o(s);
    }, n - d)));
  }, () => s && o(s)];
}
const qr = (e, t, r = 3) => {
  let n = 0;
  const s = ad(50, 250);
  return cd((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, c = o - n, l = s(c), u = o <= a;
    n = o;
    const d = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && a && u ? (a - o) / l : void 0,
      event: i,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, r);
}, wi = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Ei = (e) => (...t) => P.asap(() => e(...t)), ud = ae.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, ae.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(ae.origin),
  ae.navigator && /(msie|trident)/i.test(ae.navigator.userAgent)
) : () => !0, ld = ae.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, i) {
      const o = [e + "=" + encodeURIComponent(t)];
      P.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), P.isString(n) && o.push("path=" + n), P.isString(s) && o.push("domain=" + s), i === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function dd(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function fd(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function sa(e, t, r) {
  let n = !dd(t);
  return e && (n || r == !1) ? fd(e, t) : t;
}
const ki = (e) => e instanceof he ? { ...e } : e;
function it(e, t) {
  t = t || {};
  const r = {};
  function n(l, u, d, h) {
    return P.isPlainObject(l) && P.isPlainObject(u) ? P.merge.call({ caseless: h }, l, u) : P.isPlainObject(u) ? P.merge({}, u) : P.isArray(u) ? u.slice() : u;
  }
  function s(l, u, d, h) {
    if (P.isUndefined(u)) {
      if (!P.isUndefined(l))
        return n(void 0, l, d, h);
    } else return n(l, u, d, h);
  }
  function i(l, u) {
    if (!P.isUndefined(u))
      return n(void 0, u);
  }
  function o(l, u) {
    if (P.isUndefined(u)) {
      if (!P.isUndefined(l))
        return n(void 0, l);
    } else return n(void 0, u);
  }
  function a(l, u, d) {
    if (d in t)
      return n(l, u);
    if (d in e)
      return n(void 0, l);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (l, u, d) => s(ki(l), ki(u), d, !0)
  };
  return P.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || s, h = d(e[u], t[u], u);
    P.isUndefined(h) && d !== a || (r[u] = h);
  }), r;
}
const ia = (e) => {
  const t = it({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: a } = t;
  t.headers = o = he.from(o), t.url = Zo(sa(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (P.isFormData(r)) {
    if (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((c = o.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      o.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (ae.hasStandardBrowserEnv && (n && P.isFunction(n) && (n = n(t)), n || n !== !1 && ud(t.url))) {
    const l = s && i && ld.read(i);
    l && o.set(s, l);
  }
  return t;
}, hd = typeof XMLHttpRequest < "u", md = hd && function(e) {
  return new Promise(function(r, n) {
    const s = ia(e);
    let i = s.data;
    const o = he.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = s, u, d, h, p, v;
    function m() {
      p && p(), v && v(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let y = new XMLHttpRequest();
    y.open(s.method.toUpperCase(), s.url, !0), y.timeout = s.timeout;
    function g() {
      if (!y)
        return;
      const b = he.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), N = {
        data: !a || a === "text" || a === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: b,
        config: e,
        request: y
      };
      na(function(x) {
        r(x), m();
      }, function(x) {
        n(x), m();
      }, N), y = null;
    }
    "onloadend" in y ? y.onloadend = g : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, y.onabort = function() {
      y && (n(new q("Request aborted", q.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function() {
      n(new q("Network Error", q.ERR_NETWORK, e, y)), y = null;
    }, y.ontimeout = function() {
      let E = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const N = s.transitional || ea;
      s.timeoutErrorMessage && (E = s.timeoutErrorMessage), n(new q(
        E,
        N.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
        e,
        y
      )), y = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in y && P.forEach(o.toJSON(), function(E, N) {
      y.setRequestHeader(N, E);
    }), P.isUndefined(s.withCredentials) || (y.withCredentials = !!s.withCredentials), a && a !== "json" && (y.responseType = s.responseType), l && ([h, v] = qr(l, !0), y.addEventListener("progress", h)), c && y.upload && ([d, p] = qr(c), y.upload.addEventListener("progress", d), y.upload.addEventListener("loadend", p)), (s.cancelToken || s.signal) && (u = (b) => {
      y && (n(!b || b.type ? new _t(null, e, y) : b), y.abort(), y = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const O = od(s.url);
    if (O && ae.protocols.indexOf(O) === -1) {
      n(new q("Unsupported protocol " + O + ":", q.ERR_BAD_REQUEST, e));
      return;
    }
    y.send(i || null);
  });
}, pd = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), s;
    const i = function(l) {
      if (!s) {
        s = !0, a();
        const u = l instanceof Error ? l : this.reason;
        n.abort(u instanceof q ? u : new _t(u instanceof Error ? u.message : u));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new q(`timeout ${t} of ms exceeded`, q.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = n;
    return c.unsubscribe = () => P.asap(a), c;
  }
}, yd = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, vd = async function* (e, t) {
  for await (const r of gd(e))
    yield* yd(r, t);
}, gd = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Mi = (e, t, r, n) => {
  const s = vd(e, t);
  let i = 0, o, a = (c) => {
    o || (o = !0, n && n(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: l, value: u } = await s.next();
        if (l) {
          a(), c.close();
          return;
        }
        let d = u.byteLength;
        if (r) {
          let h = i += d;
          r(h);
        }
        c.enqueue(new Uint8Array(u));
      } catch (l) {
        throw a(l), l;
      }
    },
    cancel(c) {
      return a(c), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, dn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", oa = dn && typeof ReadableStream == "function", bd = dn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), aa = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Sd = oa && aa(() => {
  let e = !1;
  const t = new Request(ae.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), _i = 64 * 1024, os = oa && aa(() => P.isReadableStream(new Response("").body)), zr = {
  stream: os && ((e) => e.body)
};
dn && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !zr[t] && (zr[t] = P.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new q(`Response type '${t}' is not supported`, q.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const xd = async (e) => {
  if (e == null)
    return 0;
  if (P.isBlob(e))
    return e.size;
  if (P.isSpecCompliantForm(e))
    return (await new Request(ae.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (P.isArrayBufferView(e) || P.isArrayBuffer(e))
    return e.byteLength;
  if (P.isURLSearchParams(e) && (e = e + ""), P.isString(e))
    return (await bd(e)).byteLength;
}, wd = async (e, t) => {
  const r = P.toFiniteNumber(e.getContentLength());
  return r ?? xd(t);
}, Ed = dn && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: s,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: l,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: h
  } = ia(e);
  l = l ? (l + "").toLowerCase() : "text";
  let p = pd([s, i && i.toAbortSignal()], o), v;
  const m = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let y;
  try {
    if (c && Sd && r !== "get" && r !== "head" && (y = await wd(u, n)) !== 0) {
      let N = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), S;
      if (P.isFormData(n) && (S = N.headers.get("content-type")) && u.setContentType(S), N.body) {
        const [x, M] = wi(
          y,
          qr(Ei(c))
        );
        n = Mi(N.body, _i, x, M);
      }
    }
    P.isString(d) || (d = d ? "include" : "omit");
    const g = "credentials" in Request.prototype;
    v = new Request(t, {
      ...h,
      signal: p,
      method: r.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: g ? d : void 0
    });
    let O = await fetch(v);
    const b = os && (l === "stream" || l === "response");
    if (os && (a || b && m)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((F) => {
        N[F] = O[F];
      });
      const S = P.toFiniteNumber(O.headers.get("content-length")), [x, M] = a && wi(
        S,
        qr(Ei(a), !0)
      ) || [];
      O = new Response(
        Mi(O.body, _i, x, () => {
          M && M(), m && m();
        }),
        N
      );
    }
    l = l || "text";
    let E = await zr[P.findKey(zr, l) || "text"](O, e);
    return !b && m && m(), await new Promise((N, S) => {
      na(N, S, {
        data: E,
        headers: he.from(O.headers),
        status: O.status,
        statusText: O.statusText,
        config: e,
        request: v
      });
    });
  } catch (g) {
    throw m && m(), g && g.name === "TypeError" && /Load failed|fetch/i.test(g.message) ? Object.assign(
      new q("Network Error", q.ERR_NETWORK, e, v),
      {
        cause: g.cause || g
      }
    ) : q.from(g, g && g.code, e, v);
  }
}), as = {
  http: Vl,
  xhr: md,
  fetch: Ed
};
P.forEach(as, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Fi = (e) => `- ${e}`, kd = (e) => P.isFunction(e) || e === null || e === !1, ca = {
  getAdapter: (e) => {
    e = P.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let o;
      if (n = r, !kd(r) && (n = as[(o = String(r)).toLowerCase()], n === void 0))
        throw new q(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(s).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(Fi).join(`
`) : " " + Fi(i[0]) : "as no adapter specified";
      throw new q(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: as
};
function On(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new _t(null, e);
}
function Oi(e) {
  return On(e), e.headers = he.from(e.headers), e.data = Fn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ca.getAdapter(e.adapter || sr.adapter)(e).then(function(n) {
    return On(e), n.data = Fn.call(
      e,
      e.transformResponse,
      n
    ), n.headers = he.from(n.headers), n;
  }, function(n) {
    return ra(n) || (On(e), n && n.response && (n.response.data = Fn.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = he.from(n.response.headers))), Promise.reject(n);
  });
}
const ua = "1.9.0", fn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  fn[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ci = {};
fn.transitional = function(t, r, n) {
  function s(i, o) {
    return "[Axios v" + ua + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, a) => {
    if (t === !1)
      throw new q(
        s(o, " has been removed" + (r ? " in " + r : "")),
        q.ERR_DEPRECATED
      );
    return r && !Ci[o] && (Ci[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, o, a) : !0;
  };
};
fn.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Md(e, t, r) {
  if (typeof e != "object")
    throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], o = t[i];
    if (o) {
      const a = e[i], c = a === void 0 || o(a, i, e);
      if (c !== !0)
        throw new q("option " + i + " must be " + c, q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new q("Unknown option " + i, q.ERR_BAD_OPTION);
  }
}
const Pr = {
  assertOptions: Md,
  validators: fn
}, Ae = Pr.validators;
let st = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Si(),
      response: new Si()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = it(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: i } = r;
    n !== void 0 && Pr.assertOptions(n, {
      silentJSONParsing: Ae.transitional(Ae.boolean),
      forcedJSONParsing: Ae.transitional(Ae.boolean),
      clarifyTimeoutError: Ae.transitional(Ae.boolean)
    }, !1), s != null && (P.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : Pr.assertOptions(s, {
      encode: Ae.function,
      serialize: Ae.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Pr.assertOptions(r, {
      baseUrl: Ae.spelling("baseURL"),
      withXsrfToken: Ae.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = i && P.merge(
      i.common,
      i[r.method]
    );
    i && P.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete i[v];
      }
    ), r.headers = he.concat(o, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(r) === !1 || (c = c && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let u, d = 0, h;
    if (!c) {
      const v = [Oi.bind(this), void 0];
      for (v.unshift.apply(v, a), v.push.apply(v, l), h = v.length, u = Promise.resolve(r); d < h; )
        u = u.then(v[d++], v[d++]);
      return u;
    }
    h = a.length;
    let p = r;
    for (d = 0; d < h; ) {
      const v = a[d++], m = a[d++];
      try {
        p = v(p);
      } catch (y) {
        m.call(this, y);
        break;
      }
    }
    try {
      u = Oi.call(this, p);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, h = l.length; d < h; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = it(this.defaults, t);
    const r = sa(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Zo(r, t.params, t.paramsSerializer);
  }
};
P.forEach(["delete", "get", "head", "options"], function(t) {
  st.prototype[t] = function(r, n) {
    return this.request(it(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
P.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, o, a) {
      return this.request(it(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  st.prototype[t] = r(), st.prototype[t + "Form"] = r(!0);
});
let _d = class la {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((a) => {
        n.subscribe(a), i = a;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(i);
      }, o;
    }, t(function(i, o, a) {
      n.reason || (n.reason = new _t(i, o, a), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new la(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Fd(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Od(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const cs = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(cs).forEach(([e, t]) => {
  cs[t] = e;
});
function da(e) {
  const t = new st(e), r = Bo(st.prototype.request, t);
  return P.extend(r, st.prototype, t, { allOwnKeys: !0 }), P.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return da(it(e, s));
  }, r;
}
const J = da(sr);
J.Axios = st;
J.CanceledError = _t;
J.CancelToken = _d;
J.isCancel = ra;
J.VERSION = ua;
J.toFormData = ln;
J.AxiosError = q;
J.Cancel = J.CanceledError;
J.all = function(t) {
  return Promise.all(t);
};
J.spread = Fd;
J.isAxiosError = Od;
J.mergeConfig = it;
J.AxiosHeaders = he;
J.formToJSON = (e) => ta(P.isHTMLForm(e) ? new FormData(e) : e);
J.getAdapter = ca.getAdapter;
J.HttpStatusCode = cs;
J.default = J;
const {
  Axios: qg,
  AxiosError: zg,
  CanceledError: Hg,
  isCancel: Qg,
  CancelToken: Wg,
  VERSION: Yg,
  all: Gg,
  Cancel: Kg,
  isAxiosError: Jg,
  spread: Xg,
  toFormData: Zg,
  AxiosHeaders: eb,
  HttpStatusCode: tb,
  formToJSON: rb,
  getAdapter: nb,
  mergeConfig: sb
} = J;
class us {
  headers = {};
  baseURL;
  interceptionRequestContext;
  cleanInterceptionTimerId;
  async getHeaders() {
    return this.headers;
  }
  getJSON(t, r, n) {
    return this.makeRequest(t, {
      ...n,
      method: "get",
      contentType: "application/json",
      data: r
    });
  }
  putJSON(t, r, n) {
    return this.makeRequest(t, {
      ...n,
      method: "put",
      contentType: "application/json",
      data: r
    });
  }
  postJSON(t, r, n) {
    return this.makeRequest(t, {
      ...n,
      method: "post",
      contentType: "application/json",
      data: r
    });
  }
  patchJSON(t, r, n) {
    return this.makeRequest(t, {
      ...n,
      method: "patch",
      contentType: "application/json",
      data: r
    });
  }
  delete(t, r, n) {
    return this.makeRequest(t, {
      ...n,
      method: "delete",
      contentType: "application/json",
      data: r
    });
  }
  getBlob(t, r, n) {
    return this.makeRequest(t, {
      ...n,
      method: "get",
      contentType: "application/json",
      data: r,
      responseType: "blob"
    });
  }
  postBlob(t, r, n) {
    return this.makeRequest(t, {
      ...n,
      method: "post",
      contentType: "application/json",
      data: r,
      responseType: "blob"
    });
  }
  postStream(t, r, n) {
    return this.makeRequest(t, {
      ...n,
      method: "post",
      contentType: "application/json",
      data: r,
      responseType: "stream"
    });
  }
  getStream(t, r, n) {
    return this.makeRequest(t, {
      ...n,
      method: "get",
      contentType: "application/json",
      data: r,
      responseType: "stream"
    });
  }
  postForm(t, r, n) {
    return this.makeRequest(t, {
      ...n,
      method: "post",
      contentType: "application/x-www-form-urlencoded",
      data: r,
      transformRequestData: (s) => new URLSearchParams(s)
    });
  }
  getInterceptors() {
    return [];
  }
  isServerErrorResponse(t) {
    return xu(t, "response");
  }
  makeRequest(t, r) {
    const { method: n, data: s, headers: i, responseType: o, contentType: a, onUploadProgress: c, ...l } = r;
    clearTimeout(this.cleanInterceptionTimerId);
    const u = this.interceptionRequestContext = {
      requestContext: {
        url: t,
        method: n
      },
      interceptors: this.getInterceptors(),
      startInterceptionContexts: []
    };
    try {
      u.interceptors.forEach((m) => {
        let y;
        m.onStartRequest && (y = m.onStartRequest(u.requestContext), u.startInterceptionContexts.push(y));
      });
      let d = (m) => {
      }, h = (m) => {
      }, p = null;
      const v = new Promise((m, y) => {
        d = m, h = y;
      });
      return v.withResponse = () => v.then((m) => ({
        data: m,
        status: p ? p.status : 0,
        statusText: p ? p.statusText : "",
        headers: p ? p.headers : {}
      })), (r?.resolve !== !1 ? this.resolve(t) : Promise.resolve(t)).then(async (m) => {
        const y = {
          method: n,
          url: m
        }, g = {
          ...await this.getHeaders(),
          ...i || {}
        };
        if (!Q.isNil(s)) {
          const b = r.transformRequestData ? r.transformRequestData(s) : s;
          n === "get" ? y.params = b : y.data = b;
        }
        if (o && (y.responseType = o), a) {
          g["Content-Type"] = a;
          const b = this.getTransformResponse(a);
          b && (y.transformResponse = b);
        }
        return y.headers = g, y.onUploadProgress = c, this.sendRequest(y, l).then((b) => {
          if (b.status >= 200 && b.status < 400)
            return p = b, this.getResponseData(b, r);
          (b.status >= 400 || b.status === 0) && this.handleRequestError(b, u);
        }).catch((b) => {
          this.handleRequestError(b, u);
        }).finally(() => {
          u.interceptors.forEach((b, E) => {
            const N = u.startInterceptionContexts[E];
            b.onCompleteRequest && b.onCompleteRequest(u.requestContext, N);
          }), this.cleanInterceptionTimerId = setTimeout(() => {
            this.interceptionRequestContext = void 0;
          }, 0), this.onComplete();
        }).then(d, h);
      }), v;
    } catch (d) {
      return this.handleRequestError(d, u);
    }
  }
  async sendRequest(t, r) {
    return J({ ...t, withCredentials: !0, adapter: "fetch" });
  }
  async onComplete() {
  }
  handleError(t) {
    this.interceptionRequestContext && (this.handleRequestError(t, this.interceptionRequestContext), this.interceptionRequestContext = void 0);
  }
  handleRequestError(t, r) {
    let n = t;
    throw this.isServerErrorResponse(t) && (n = this.handleServerErrors(t.response)), n ? (r.interceptors.forEach((s, i) => {
      const o = r.startInterceptionContexts[i];
      s.onFailedRequest && s.onFailedRequest(r, n, o);
    }), n) : new ts("неизвестная ошибка");
  }
  handleServerErrors(t) {
    let r;
    return t.status === 400 ? r = this.handleBadRequest(t.statusText, t.data) : t.status === 401 ? r = this.handleNotAuthorized(t.data) : t.status === 403 ? r = this.handleForbidden(t.statusText, t.data) : t.status === 404 ? r = this.handleNotFound(t.statusText, t.data) : t.status === 422 ? r = this.handleUnprocessableEntity(t.statusText, t.data) : t.status === 500 ? r = this.handleInternalError(t.statusText, t.data) : t.status === 502 ? r = this.handleBadGateway(t.statusText) : t.status === 503 ? r = this.handleServiceUnavailable(t.statusText) : t.status === 504 ? r = this.handleGatewayTimeout(t.statusText) : r = new ts(t.statusText), r;
  }
  handleBadRequest(t, r) {
    return new Tu(this.getErrorMessage(r, t), r);
  }
  handleNotAuthorized(t) {
    return new es();
  }
  handleNotFound(t, r) {
    return new Du(this.getErrorMessage(r, t), r);
  }
  handleUnprocessableEntity(t, r) {
    return new Iu(this.getErrorMessage(r, t));
  }
  handleInternalError(t, r) {
    return new Vu(this.getErrorMessage(r, t));
  }
  handleForbidden(t, r) {
    return new Ru(this.getErrorMessage(r, t), r);
  }
  handleBadGateway(t) {
    return new $u(t);
  }
  handleServiceUnavailable(t) {
    return new Lu(t);
  }
  handleGatewayTimeout(t) {
    return new Bu(t);
  }
  getErrorMessage(t, r = "Ошибка") {
    return Vt(t, "detail") ? t.detail : Vt(t, "message") ? t.message : Vt(t, "errorMessage") ? t.errorMessage : r;
  }
  async getResponseData(t, r) {
    return t.data;
  }
  getTransformResponse(t) {
    switch (t) {
      case "text/xml":
        return (r) => r;
    }
    return null;
  }
  toQueryString(t) {
    return Au(t);
  }
  appendQuery(t, r) {
    const n = this.toQueryString(r);
    return n ? `${t}?${n}` : t;
  }
  async getBaseURL() {
    return this.baseURL;
  }
  async resolve(t) {
    return rr(t, await this.getBaseURL());
  }
}
class ls extends us {
}
class Cd extends ls {
  async getHeaders() {
    return await this.getAuthenticationService().signIn(await super.getHeaders());
  }
}
const Cn = /* @__PURE__ */ new WeakMap();
class fa {
  servicesContainer = void 0;
  apiServiceFactories = {};
  apiServiceClasses = {};
  parentScope;
  initializedServices = /* @__PURE__ */ new WeakMap();
  callContext;
  getCallContext() {
    return this.callContext || (this.callContext = this.createCallContext()), this.callContext;
  }
  createCallContext() {
    return {};
  }
  setParent(t) {
    return this.parentScope && this.unmount(), this.parentScope = t, this.mount(), this;
  }
  mount() {
  }
  unmount() {
  }
  getParent() {
    return this.parentScope;
  }
  getServicesContainer() {
    return this.servicesContainer || (this.servicesContainer = this.createServicesContainer()), this.servicesContainer;
  }
  createServicesContainer() {
    return new Lo(this.getParent()?.getServicesContainer());
  }
  registerAPIService(t, r) {
    const n = this.apiServiceClasses[t];
    return r ? (this.apiServiceClasses[t] = r, this.registerAPIServiceFactory(
      t,
      (s) => this.initAPIService(r, s)
    )) : (delete this.apiServiceClasses[t], delete this.apiServiceFactories[t]), n;
  }
  hasAPIService(t) {
    return this.apiServiceFactories[t] !== void 0;
  }
  registerAPIServiceFactory(t, r) {
    this.apiServiceFactories[t] = r;
  }
  getAPIService(t, r) {
    const n = er(this.apiServiceFactories).reduce(
      (i, o) => (o.split(".")[0] === t && $s(i, o, this.apiServiceFactories[o](r)), i),
      {}
    );
    if (n[t])
      return n[t];
    const s = this.getParent();
    return s ? s.getAPIService(t, r) : void 0;
  }
  handleError(t, r) {
    throw t;
  }
  async handleUnauthorizedError(t, r) {
    throw t;
  }
  throwError(t) {
    setTimeout(() => {
      throw t;
    }, 0);
  }
  initAPIService(t, r) {
    let n = t.singleton ? Cn.get(t) : t.scoped ? this.initializedServices.get(t) : void 0;
    return (!t.singleton || !Cn.has(t)) && (!t.scoped || !this.initializedServices.has(t)) && (n = this.createAPIService(t, this.getServicesContainer(), r), wu(n, "initialize") && n.initialize(), t.singleton && Cn.set(t, n), t.scoped && this.initializedServices.set(t, n)), n || qu("сервис не создан"), n;
  }
  createAPIService(t, r, n) {
    return new t(r);
  }
  destroy() {
  }
}
class Ni {
  constructor(t) {
    this.servicesContainer = t;
  }
  async getConfigProperty(t, r) {
    return this.servicesContainer.getService(Ls).getProperty(t, r);
  }
  initialize() {
  }
}
const Be = [];
let ds, Nt;
function ha(e) {
  for (let t = 0; t < Be.length; t++)
    if (Be[t].tryHandleUnhandledError(e.error)) {
      e.error instanceof sn && e.preventDefault();
      break;
    }
}
function ma(e) {
  if (e.reason) {
    for (let t = 0; t < Be.length; t++)
      if (Be[t].tryHandleUnhandledError(e.reason)) {
        e.reason instanceof sn && e.preventDefault();
        break;
      }
  }
}
function Nd(e) {
  Be.length === 0 && (window.addEventListener("error", ha), window.addEventListener("unhandledrejection", ma)), Be.unshift(e);
}
function Ad(e) {
  const t = Be.indexOf(e);
  Be.splice(t, 1), Be.length === 0 && (window.removeEventListener("error", ha), window.removeEventListener("unhandledrejection", ma));
}
class ir extends fa {
  unhandledErrorContext = null;
  handledErrors = /* @__PURE__ */ new WeakSet();
  constructor() {
    super(), this.cleanHandledErrors = Q.debounce(this.cleanHandledErrors.bind(this), 1e3), Nd(this);
  }
  //@internal
  tryHandleUnhandledError = (t) => {
    const r = t;
    if (!this.unhandledErrorContext)
      return !1;
    try {
      return this.handledErrors.has(r) || (this.handledErrors.add(r), t instanceof es ? this.handleUnauthorizedError(t, this.unhandledErrorContext) : this.handleError(t, this.unhandledErrorContext)), !0;
    } catch {
      return !1;
    } finally {
      this.cleanHandledErrors(), this.unhandledErrorContext = null;
    }
  };
  //@internal
  handleUnhandledError = (t, r) => {
    try {
      t instanceof es ? this.handleUnauthorizedError(t, r) : this.handleError(t, r);
    } catch (n) {
      const s = this.getParent();
      if (s instanceof ir)
        s.handleUnhandledError(n, r);
      else
        throw n;
    }
  };
  cleanHandledErrors() {
    setTimeout(() => {
      this.handledErrors = /* @__PURE__ */ new WeakSet();
    }, 1e3);
  }
  isOverridable(t, r) {
    return !(t instanceof Ni && r in Ni.prototype || t instanceof ls && r in ls.prototype || t instanceof us && r in us.prototype);
  }
  createAPIService(t, r, n) {
    const s = new t(r);
    return new Proxy(s, {
      get: (i, o, a) => {
        const c = i;
        if (typeof c[o] == "function" && this.isOverridable(i, o)) {
          const l = c[o];
          return (...d) => {
            try {
              const h = l.call(i, ...d);
              return h != null && Eu(h, "catch") && h.catch(async (p) => {
                await this.#e(p, n);
              }), h;
            } catch (h) {
              return this.#e(h, n);
            }
          };
        }
        return c[o];
      }
    });
  }
  async #e(t, r) {
    this.unhandledErrorContext = ds || r;
  }
  handleError(t, r) {
    r.handleError(t);
  }
  async handleUnauthorizedError(t, r) {
    const n = this.getParent();
    if (n)
      return await n.handleUnauthorizedError(t, r);
    r.handleError(t);
  }
  destroy() {
    Ad(this);
  }
}
function jd() {
  const e = hn();
  e instanceof ir && (Nt && (clearTimeout(Nt), Nt = void 0), ds = e.getCallContext(), Nt = setTimeout(() => {
    ds = void 0, Nt = void 0;
  }, 0));
}
class Pd extends ir {
  constructor(t) {
    super(), this.errorsBoundary = t;
  }
  createCallContext() {
    return {
      handleError: (t) => {
        this.errorsBoundary.showBoundary(t);
      }
    };
  }
}
const pa = Nc.createContext(void 0);
function hn(e = !1) {
  const t = C.useContext(pa);
  if (t)
    return t;
  if (e !== !0)
    throw new Me("scope не задан");
  return null;
}
function Rd(e) {
  if (!(e instanceof fa))
    throw new Me("не является scope");
}
const ya = ({
  children: e,
  createScope: t
}) => {
  const [r, n] = C.useState(!1), [s] = C.useState(() => t()), i = hn(!0);
  return Rd(s), C.useEffect(() => (i && s.setParent(i), n(!0), () => {
    s.destroy();
  }), [s, i]), r ? /* @__PURE__ */ f.jsx(pa.Provider, { value: s, children: e }) : null;
}, Td = ({
  children: e,
  createScope: t
}) => {
  const r = Yu();
  return /* @__PURE__ */ f.jsx(ya, { createScope: () => t(r), children: e });
}, Id = ({
  children: e,
  fallbackRender: t,
  createScope: r
}) => /* @__PURE__ */ f.jsx(Hu, { fallbackRender: t, children: /* @__PURE__ */ f.jsx(Td, { createScope: r, children: e }) });
class Dd extends Cd {
  constructor(t) {
    super(), this.servicesContainer = t;
  }
  async getConfigProperty(t, r) {
    return this.servicesContainer.getService(Ls).getProperty(t, r);
  }
  initialize() {
  }
}
const Vd = /* @__PURE__ */ new WeakMap(), $d = {};
function Ld(e) {
  const t = e.getCallContext(), r = Vd;
  return r.has(e) || r.set(
    e,
    new Proxy($d, {
      get(n, s, i) {
        const o = e.getAPIService(s, t);
        if (!o)
          throw new Me(`${s} не найден`);
        return o;
      }
    })
  ), r.get(e);
}
function xt(e) {
  const t = hn(), [r] = C.useState(t.getCallContext()), n = C.useMemo(() => t.getAPIService(e, r), [t, r]);
  if (!n)
    throw new Me(`${e} не найден`);
  return n;
}
function Bd(e) {
  return async (r, n, s) => {
    let i = null;
    if (r instanceof Promise)
      try {
        return {
          data: await r
        };
      } catch (o) {
        return i = o, {
          error: o
        };
      } finally {
        i && e.throwError(i);
      }
    else {
      const o = new Me("Некорректный параметр запроса. Поддерживается только передача промисов");
      return e.throwError(o), {
        error: o
      };
    }
  };
}
const va = C.createContext(void 0);
function ga() {
  const e = C.useContext(va);
  if (jd(), !e)
    throw new Me("Не задан контекст приложения");
  return e;
}
var ba = { exports: {} }, Nn = {}, An = { exports: {} }, jn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ai;
function Ud() {
  if (Ai) return jn;
  Ai = 1;
  var e = C;
  function t(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, s = e.useEffect, i = e.useLayoutEffect, o = e.useDebugValue;
  function a(d, h) {
    var p = h(), v = n({ inst: { value: p, getSnapshot: h } }), m = v[0].inst, y = v[1];
    return i(
      function() {
        m.value = p, m.getSnapshot = h, c(m) && y({ inst: m });
      },
      [d, p, h]
    ), s(
      function() {
        return c(m) && y({ inst: m }), d(function() {
          c(m) && y({ inst: m });
        });
      },
      [d]
    ), o(p), p;
  }
  function c(d) {
    var h = d.getSnapshot;
    d = d.value;
    try {
      var p = h();
      return !r(d, p);
    } catch {
      return !0;
    }
  }
  function l(d, h) {
    return h();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : a;
  return jn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, jn;
}
var ji;
function qd() {
  return ji || (ji = 1, An.exports = Ud()), An.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pi;
function zd() {
  if (Pi) return Nn;
  Pi = 1;
  var e = C, t = qd();
  function r(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var n = typeof Object.is == "function" ? Object.is : r, s = t.useSyncExternalStore, i = e.useRef, o = e.useEffect, a = e.useMemo, c = e.useDebugValue;
  return Nn.useSyncExternalStoreWithSelector = function(l, u, d, h, p) {
    var v = i(null);
    if (v.current === null) {
      var m = { hasValue: !1, value: null };
      v.current = m;
    } else m = v.current;
    v = a(
      function() {
        function g(S) {
          if (!O) {
            if (O = !0, b = S, S = h(S), p !== void 0 && m.hasValue) {
              var x = m.value;
              if (p(x, S))
                return E = x;
            }
            return E = S;
          }
          if (x = E, n(b, S)) return x;
          var M = h(S);
          return p !== void 0 && p(x, M) ? (b = S, x) : (b = S, E = M);
        }
        var O = !1, b, E, N = d === void 0 ? null : d;
        return [
          function() {
            return g(u());
          },
          N === null ? void 0 : function() {
            return g(N());
          }
        ];
      },
      [u, d, h, p]
    );
    var y = s(l, v[0], v[1]);
    return o(
      function() {
        m.hasValue = !0, m.value = y;
      },
      [y]
    ), c(y), y;
  }, Nn;
}
ba.exports = zd();
var Sa = ba.exports;
class Hd extends Pd {
  async handleUnauthorizedError(t) {
    this.errorsBoundary.showBoundary(t);
  }
}
class Qd extends Hd {
}
const xa = Symbol.for("IAuthenticationService");
class Wd extends Ro {
  async initialize() {
    return this;
  }
}
class Yd extends Wd {
  async isAuthenticated() {
    return !0;
  }
  async login(t) {
  }
  async logout(t) {
  }
  async signIn(t) {
    return t;
  }
  async verify(...t) {
  }
}
/*! js-cookie v3.0.5 | MIT */
function mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      e[n] = r[n];
  }
  return e;
}
var Gd = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function fs(e, t) {
  function r(s, i, o) {
    if (!(typeof document > "u")) {
      o = mr({}, t, o), typeof o.expires == "number" && (o.expires = new Date(Date.now() + o.expires * 864e5)), o.expires && (o.expires = o.expires.toUTCString()), s = encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var a = "";
      for (var c in o)
        o[c] && (a += "; " + c, o[c] !== !0 && (a += "=" + o[c].split(";")[0]));
      return document.cookie = s + "=" + e.write(i, s) + a;
    }
  }
  function n(s) {
    if (!(typeof document > "u" || arguments.length && !s)) {
      for (var i = document.cookie ? document.cookie.split("; ") : [], o = {}, a = 0; a < i.length; a++) {
        var c = i[a].split("="), l = c.slice(1).join("=");
        try {
          var u = decodeURIComponent(c[0]);
          if (o[u] = e.read(l, u), s === u)
            break;
        } catch {
        }
      }
      return s ? o[s] : o;
    }
  }
  return Object.create(
    {
      set: r,
      get: n,
      remove: function(s, i) {
        r(
          s,
          "",
          mr({}, i, {
            expires: -1
          })
        );
      },
      withAttributes: function(s) {
        return fs(this.converter, mr({}, this.attributes, s));
      },
      withConverter: function(s) {
        return fs(mr({}, this.converter, s), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) }
    }
  );
}
fs(Gd, { path: "/" });
var Kd = { exports: {} };
const Jd = {}, Xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jd
}, Symbol.toStringTag, { value: "Module" })), Ri = /* @__PURE__ */ Ac(Xd);
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2025
 * @license MIT
 */
(function(e) {
  (function() {
    var t = "input is invalid type", r = typeof window == "object", n = r ? window : {};
    n.JS_SHA256_NO_WINDOW && (r = !1);
    var s = !r && typeof self == "object", i = !n.JS_SHA256_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node && process.type != "renderer";
    i ? n = jc : s && (n = self);
    var o = !n.JS_SHA256_NO_COMMON_JS && !0 && e.exports, a = !n.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", c = "0123456789abcdef".split(""), l = [-2147483648, 8388608, 32768, 128], u = [24, 16, 8, 0], d = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ], h = ["hex", "array", "digest", "arrayBuffer"], p = [];
    (n.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(S) {
      return Object.prototype.toString.call(S) === "[object Array]";
    }), a && (n.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(S) {
      return typeof S == "object" && S.buffer && S.buffer.constructor === ArrayBuffer;
    });
    var v = function(S, x) {
      return function(M) {
        return new b(x, !0).update(M)[S]();
      };
    }, m = function(S) {
      var x = v("hex", S);
      i && (x = y(x, S)), x.create = function() {
        return new b(S);
      }, x.update = function(_) {
        return x.create().update(_);
      };
      for (var M = 0; M < h.length; ++M) {
        var F = h[M];
        x[F] = v(F, S);
      }
      return x;
    }, y = function(S, x) {
      var M = Ri, F = Ri.Buffer, _ = x ? "sha224" : "sha256", w;
      F.from && !n.JS_SHA256_NO_BUFFER_FROM ? w = F.from : w = function(k) {
        return new F(k);
      };
      var A = function(k) {
        if (typeof k == "string")
          return M.createHash(_).update(k, "utf8").digest("hex");
        if (k == null)
          throw new Error(t);
        return k.constructor === ArrayBuffer && (k = new Uint8Array(k)), Array.isArray(k) || ArrayBuffer.isView(k) || k.constructor === F ? M.createHash(_).update(w(k)).digest("hex") : S(k);
      };
      return A;
    }, g = function(S, x) {
      return function(M, F) {
        return new E(M, x, !0).update(F)[S]();
      };
    }, O = function(S) {
      var x = g("hex", S);
      x.create = function(_) {
        return new E(_, S);
      }, x.update = function(_, w) {
        return x.create(_).update(w);
      };
      for (var M = 0; M < h.length; ++M) {
        var F = h[M];
        x[F] = g(F, S);
      }
      return x;
    };
    function b(S, x) {
      x ? (p[0] = p[16] = p[1] = p[2] = p[3] = p[4] = p[5] = p[6] = p[7] = p[8] = p[9] = p[10] = p[11] = p[12] = p[13] = p[14] = p[15] = 0, this.blocks = p) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], S ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = S;
    }
    b.prototype.update = function(S) {
      if (!this.finalized) {
        var x, M = typeof S;
        if (M !== "string") {
          if (M === "object") {
            if (S === null)
              throw new Error(t);
            if (a && S.constructor === ArrayBuffer)
              S = new Uint8Array(S);
            else if (!Array.isArray(S) && (!a || !ArrayBuffer.isView(S)))
              throw new Error(t);
          } else
            throw new Error(t);
          x = !0;
        }
        for (var F, _ = 0, w, A = S.length, k = this.blocks; _ < A; ) {
          if (this.hashed && (this.hashed = !1, k[0] = this.block, this.block = k[16] = k[1] = k[2] = k[3] = k[4] = k[5] = k[6] = k[7] = k[8] = k[9] = k[10] = k[11] = k[12] = k[13] = k[14] = k[15] = 0), x)
            for (w = this.start; _ < A && w < 64; ++_)
              k[w >>> 2] |= S[_] << u[w++ & 3];
          else
            for (w = this.start; _ < A && w < 64; ++_)
              F = S.charCodeAt(_), F < 128 ? k[w >>> 2] |= F << u[w++ & 3] : F < 2048 ? (k[w >>> 2] |= (192 | F >>> 6) << u[w++ & 3], k[w >>> 2] |= (128 | F & 63) << u[w++ & 3]) : F < 55296 || F >= 57344 ? (k[w >>> 2] |= (224 | F >>> 12) << u[w++ & 3], k[w >>> 2] |= (128 | F >>> 6 & 63) << u[w++ & 3], k[w >>> 2] |= (128 | F & 63) << u[w++ & 3]) : (F = 65536 + ((F & 1023) << 10 | S.charCodeAt(++_) & 1023), k[w >>> 2] |= (240 | F >>> 18) << u[w++ & 3], k[w >>> 2] |= (128 | F >>> 12 & 63) << u[w++ & 3], k[w >>> 2] |= (128 | F >>> 6 & 63) << u[w++ & 3], k[w >>> 2] |= (128 | F & 63) << u[w++ & 3]);
          this.lastByteIndex = w, this.bytes += w - this.start, w >= 64 ? (this.block = k[16], this.start = w - 64, this.hash(), this.hashed = !0) : this.start = w;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }
    }, b.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var S = this.blocks, x = this.lastByteIndex;
        S[16] = this.block, S[x >>> 2] |= l[x & 3], this.block = S[16], x >= 56 && (this.hashed || this.hash(), S[0] = this.block, S[16] = S[1] = S[2] = S[3] = S[4] = S[5] = S[6] = S[7] = S[8] = S[9] = S[10] = S[11] = S[12] = S[13] = S[14] = S[15] = 0), S[14] = this.hBytes << 3 | this.bytes >>> 29, S[15] = this.bytes << 3, this.hash();
      }
    }, b.prototype.hash = function() {
      var S = this.h0, x = this.h1, M = this.h2, F = this.h3, _ = this.h4, w = this.h5, A = this.h6, k = this.h7, j = this.blocks, R, V, I, D, T, $, L, z, U, K, B;
      for (R = 16; R < 64; ++R)
        T = j[R - 15], V = (T >>> 7 | T << 25) ^ (T >>> 18 | T << 14) ^ T >>> 3, T = j[R - 2], I = (T >>> 17 | T << 15) ^ (T >>> 19 | T << 13) ^ T >>> 10, j[R] = j[R - 16] + V + j[R - 7] + I << 0;
      for (B = x & M, R = 0; R < 64; R += 4)
        this.first ? (this.is224 ? (z = 300032, T = j[0] - 1413257819, k = T - 150054599 << 0, F = T + 24177077 << 0) : (z = 704751109, T = j[0] - 210244248, k = T - 1521486534 << 0, F = T + 143694565 << 0), this.first = !1) : (V = (S >>> 2 | S << 30) ^ (S >>> 13 | S << 19) ^ (S >>> 22 | S << 10), I = (_ >>> 6 | _ << 26) ^ (_ >>> 11 | _ << 21) ^ (_ >>> 25 | _ << 7), z = S & x, D = z ^ S & M ^ B, L = _ & w ^ ~_ & A, T = k + I + L + d[R] + j[R], $ = V + D, k = F + T << 0, F = T + $ << 0), V = (F >>> 2 | F << 30) ^ (F >>> 13 | F << 19) ^ (F >>> 22 | F << 10), I = (k >>> 6 | k << 26) ^ (k >>> 11 | k << 21) ^ (k >>> 25 | k << 7), U = F & S, D = U ^ F & x ^ z, L = k & _ ^ ~k & w, T = A + I + L + d[R + 1] + j[R + 1], $ = V + D, A = M + T << 0, M = T + $ << 0, V = (M >>> 2 | M << 30) ^ (M >>> 13 | M << 19) ^ (M >>> 22 | M << 10), I = (A >>> 6 | A << 26) ^ (A >>> 11 | A << 21) ^ (A >>> 25 | A << 7), K = M & F, D = K ^ M & S ^ U, L = A & k ^ ~A & _, T = w + I + L + d[R + 2] + j[R + 2], $ = V + D, w = x + T << 0, x = T + $ << 0, V = (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10), I = (w >>> 6 | w << 26) ^ (w >>> 11 | w << 21) ^ (w >>> 25 | w << 7), B = x & M, D = B ^ x & F ^ K, L = w & A ^ ~w & k, T = _ + I + L + d[R + 3] + j[R + 3], $ = V + D, _ = S + T << 0, S = T + $ << 0, this.chromeBugWorkAround = !0;
      this.h0 = this.h0 + S << 0, this.h1 = this.h1 + x << 0, this.h2 = this.h2 + M << 0, this.h3 = this.h3 + F << 0, this.h4 = this.h4 + _ << 0, this.h5 = this.h5 + w << 0, this.h6 = this.h6 + A << 0, this.h7 = this.h7 + k << 0;
    }, b.prototype.hex = function() {
      this.finalize();
      var S = this.h0, x = this.h1, M = this.h2, F = this.h3, _ = this.h4, w = this.h5, A = this.h6, k = this.h7, j = c[S >>> 28 & 15] + c[S >>> 24 & 15] + c[S >>> 20 & 15] + c[S >>> 16 & 15] + c[S >>> 12 & 15] + c[S >>> 8 & 15] + c[S >>> 4 & 15] + c[S & 15] + c[x >>> 28 & 15] + c[x >>> 24 & 15] + c[x >>> 20 & 15] + c[x >>> 16 & 15] + c[x >>> 12 & 15] + c[x >>> 8 & 15] + c[x >>> 4 & 15] + c[x & 15] + c[M >>> 28 & 15] + c[M >>> 24 & 15] + c[M >>> 20 & 15] + c[M >>> 16 & 15] + c[M >>> 12 & 15] + c[M >>> 8 & 15] + c[M >>> 4 & 15] + c[M & 15] + c[F >>> 28 & 15] + c[F >>> 24 & 15] + c[F >>> 20 & 15] + c[F >>> 16 & 15] + c[F >>> 12 & 15] + c[F >>> 8 & 15] + c[F >>> 4 & 15] + c[F & 15] + c[_ >>> 28 & 15] + c[_ >>> 24 & 15] + c[_ >>> 20 & 15] + c[_ >>> 16 & 15] + c[_ >>> 12 & 15] + c[_ >>> 8 & 15] + c[_ >>> 4 & 15] + c[_ & 15] + c[w >>> 28 & 15] + c[w >>> 24 & 15] + c[w >>> 20 & 15] + c[w >>> 16 & 15] + c[w >>> 12 & 15] + c[w >>> 8 & 15] + c[w >>> 4 & 15] + c[w & 15] + c[A >>> 28 & 15] + c[A >>> 24 & 15] + c[A >>> 20 & 15] + c[A >>> 16 & 15] + c[A >>> 12 & 15] + c[A >>> 8 & 15] + c[A >>> 4 & 15] + c[A & 15];
      return this.is224 || (j += c[k >>> 28 & 15] + c[k >>> 24 & 15] + c[k >>> 20 & 15] + c[k >>> 16 & 15] + c[k >>> 12 & 15] + c[k >>> 8 & 15] + c[k >>> 4 & 15] + c[k & 15]), j;
    }, b.prototype.toString = b.prototype.hex, b.prototype.digest = function() {
      this.finalize();
      var S = this.h0, x = this.h1, M = this.h2, F = this.h3, _ = this.h4, w = this.h5, A = this.h6, k = this.h7, j = [
        S >>> 24 & 255,
        S >>> 16 & 255,
        S >>> 8 & 255,
        S & 255,
        x >>> 24 & 255,
        x >>> 16 & 255,
        x >>> 8 & 255,
        x & 255,
        M >>> 24 & 255,
        M >>> 16 & 255,
        M >>> 8 & 255,
        M & 255,
        F >>> 24 & 255,
        F >>> 16 & 255,
        F >>> 8 & 255,
        F & 255,
        _ >>> 24 & 255,
        _ >>> 16 & 255,
        _ >>> 8 & 255,
        _ & 255,
        w >>> 24 & 255,
        w >>> 16 & 255,
        w >>> 8 & 255,
        w & 255,
        A >>> 24 & 255,
        A >>> 16 & 255,
        A >>> 8 & 255,
        A & 255
      ];
      return this.is224 || j.push(k >>> 24 & 255, k >>> 16 & 255, k >>> 8 & 255, k & 255), j;
    }, b.prototype.array = b.prototype.digest, b.prototype.arrayBuffer = function() {
      this.finalize();
      var S = new ArrayBuffer(this.is224 ? 28 : 32), x = new DataView(S);
      return x.setUint32(0, this.h0), x.setUint32(4, this.h1), x.setUint32(8, this.h2), x.setUint32(12, this.h3), x.setUint32(16, this.h4), x.setUint32(20, this.h5), x.setUint32(24, this.h6), this.is224 || x.setUint32(28, this.h7), S;
    };
    function E(S, x, M) {
      var F, _ = typeof S;
      if (_ === "string") {
        var w = [], A = S.length, k = 0, j;
        for (F = 0; F < A; ++F)
          j = S.charCodeAt(F), j < 128 ? w[k++] = j : j < 2048 ? (w[k++] = 192 | j >>> 6, w[k++] = 128 | j & 63) : j < 55296 || j >= 57344 ? (w[k++] = 224 | j >>> 12, w[k++] = 128 | j >>> 6 & 63, w[k++] = 128 | j & 63) : (j = 65536 + ((j & 1023) << 10 | S.charCodeAt(++F) & 1023), w[k++] = 240 | j >>> 18, w[k++] = 128 | j >>> 12 & 63, w[k++] = 128 | j >>> 6 & 63, w[k++] = 128 | j & 63);
        S = w;
      } else if (_ === "object") {
        if (S === null)
          throw new Error(t);
        if (a && S.constructor === ArrayBuffer)
          S = new Uint8Array(S);
        else if (!Array.isArray(S) && (!a || !ArrayBuffer.isView(S)))
          throw new Error(t);
      } else
        throw new Error(t);
      S.length > 64 && (S = new b(x, !0).update(S).array());
      var R = [], V = [];
      for (F = 0; F < 64; ++F) {
        var I = S[F] || 0;
        R[F] = 92 ^ I, V[F] = 54 ^ I;
      }
      b.call(this, x, M), this.update(V), this.oKeyPad = R, this.inner = !0, this.sharedMemory = M;
    }
    E.prototype = new b(), E.prototype.finalize = function() {
      if (b.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var S = this.array();
        b.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(S), b.prototype.finalize.call(this);
      }
    };
    var N = m();
    N.sha256 = N, N.sha224 = m(!0), N.sha256.hmac = O(), N.sha224.hmac = O(!0), o ? e.exports = N : (n.sha256 = N.sha256, n.sha224 = N.sha224);
  })();
})(Kd);
class mn extends Dd {
  getAuthenticationService() {
    return this.servicesContainer.getService(xa);
  }
  async getBaseURL() {
    return this.getConfigProperty("HCM_API_BASE");
  }
}
const wa = Symbol.for("INotificationsService");
class Zd extends ir {
  constructor(t) {
    super(), this.appServiceProvider = t;
  }
  createServicesContainer() {
    return this.appServiceProvider;
  }
  getNotificationsService() {
    return this.appServiceProvider.getService(wa);
  }
  showError(t) {
    this.getNotificationsService().show({
      type: "error",
      message: Vt(t, "message") ? t.message : Q.toString(t),
      id: "hcm-micro-frontend-error"
    });
  }
  createCallContext() {
    return {
      handleError: (t) => {
        this.showError(t);
      }
    };
  }
  handleError(t) {
    this.showError(t);
  }
}
const { loadShare: ef } = Zt, { initPromise: tf } = Xt, rf = tf.then((e) => ef("skillgrid", {
  customShareInfo: { shareConfig: {
    singleton: !0,
    strictVersion: !1,
    requiredVersion: "^0.0.36"
  } }
})), nf = await rf.then((e) => e());
var H = nf;
const { loadShare: sf } = Zt, { initPromise: of } = Xt, af = of.then((e) => sf("lottie-react", {
  customShareInfo: { shareConfig: {
    singleton: !0,
    strictVersion: !1,
    requiredVersion: "^2.4.1"
  } }
})), cf = await af.then((e) => e());
var uf = cf;
const lf = /* @__PURE__ */ qe(uf), df = "animation", ff = 0, hf = 260, mf = 440, pf = { g: "LottieFiles Figma v92" }, yf = /* @__PURE__ */ JSON.parse('[{"ty":4,"nm":"icon","sr":1,"st":0,"op":79.06,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[10,9.51]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[220,247.51],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[361,104.51],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[361,104.51],"t":48},{"s":[358,17.51],"t":78}]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[0],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[100],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[100],"t":48},{"s":[0],"t":78}]}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[10,0],[13.09,6.26],[20,7.27],[15,12.14],[16.18,19.02],[10,15.77],[3.82,19.02],[5,12.14],[0,7.27],[6.91,6.26],[10,0]]}}},{"ty":"st","bm":0,"hd":false,"nm":"","lc":2,"lj":2,"ml":4,"o":{"a":0,"k":100},"w":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[1.7000000476837158],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[1.7000000476837158],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[1.7000000476837158],"t":48},{"s":[1.7000000476837158],"t":78}]},"c":{"a":0,"k":[0.353,0.7844,1]}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[0.353,0.7844,1]},"r":1,"o":{"a":0,"k":100}}],"ind":1},{"ty":4,"nm":"icon","sr":1,"st":0,"op":79.06,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[10,9.51]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[220,247.51],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[186,184.51],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[186,184.51],"t":48},{"s":[183,97.51],"t":78}]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[0],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[100],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[100],"t":48},{"s":[0],"t":78}]}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[10,0],[13.09,6.26],[20,7.27],[15,12.14],[16.18,19.02],[10,15.77],[3.82,19.02],[5,12.14],[0,7.27],[6.91,6.26],[10,0]]}}},{"ty":"st","bm":0,"hd":false,"nm":"","lc":2,"lj":2,"ml":4,"o":{"a":0,"k":100},"w":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[1.7000000476837158],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[1.7000000476837158],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[1.7000000476837158],"t":48},{"s":[1.7000000476837158],"t":78}]},"c":{"a":0,"k":[0.353,0.7844,1]}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[0.353,0.7844,1]},"r":1,"o":{"a":0,"k":100}}],"ind":2},{"ty":4,"nm":"icon","sr":1,"st":0,"op":79.06,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[10,8.92]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[220,247.92],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[399,147.92],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[399,147.92],"t":48},{"s":[396,60.92],"t":78}]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[0],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[100],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[100],"t":48},{"s":[0],"t":78}]}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[2.51,-2.14],[-1.97,-2.53],[-1.62,-1.44],[-0.11,-0.03],[-0.09,0.03],[-0.18,0.16],[-1.64,2.1],[2.55,2.12],[2,-2.34]],"o":[[-2,-2.34],[-2.51,2.14],[1.64,2.1],[0.18,0.16],[0.09,0.03],[0.11,-0.03],[1.62,-1.44],[1.97,-2.53],[-2.55,-2.12],[0,0]],"v":[[9.99,2.14],[2.15,1.31],[1.26,9.56],[9.47,17.54],[9.85,17.81],[10.14,17.81],[10.51,17.54],[18.72,9.56],[17.83,1.31],[9.99,2.14]]}}},{"ty":"st","bm":0,"hd":false,"nm":"","lc":2,"lj":2,"ml":4,"o":{"a":0,"k":100},"w":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":48},{"s":[2],"t":78}]},"c":{"a":0,"k":[0.5647,0.3295,0.9177]}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[0.5647,0.3295,0.9177]},"r":2,"o":{"a":0,"k":100}}],"ind":3},{"ty":4,"nm":"icon","sr":1,"st":0,"op":79.06,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[10,8.92]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[220,247.92],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[125,113.92],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[125,113.92],"t":48},{"s":[122,26.92],"t":78}]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[0],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[100],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[100],"t":48},{"s":[0],"t":78}]}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[2.51,-2.14],[-1.97,-2.53],[-1.62,-1.44],[-0.11,-0.03],[-0.09,0.03],[-0.18,0.16],[-1.64,2.1],[2.55,2.12],[2,-2.34]],"o":[[-2,-2.34],[-2.51,2.14],[1.64,2.1],[0.18,0.16],[0.09,0.03],[0.11,-0.03],[1.62,-1.44],[1.97,-2.53],[-2.55,-2.12],[0,0]],"v":[[9.99,2.14],[2.15,1.31],[1.26,9.56],[9.47,17.54],[9.85,17.81],[10.14,17.81],[10.51,17.54],[18.72,9.56],[17.83,1.31],[9.99,2.14]]}}},{"ty":"st","bm":0,"hd":false,"nm":"","lc":2,"lj":2,"ml":4,"o":{"a":0,"k":100},"w":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":48},{"s":[2],"t":78}]},"c":{"a":0,"k":[1,0.2353,0.4667]}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[1,0.2353,0.4667]},"r":2,"o":{"a":0,"k":100}}],"ind":4},{"ty":4,"nm":"icon","sr":1,"st":0,"op":79.06,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[9.75,10]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[219.75,248],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[48.75,146],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[48.75,146],"t":48},{"s":[45.75,59],"t":78}]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[0],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[100],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[100],"t":48},{"s":[0],"t":78}]}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[1.48,0],[0,0],[0,1.1],[0,0],[-1.1,0],[0,0],[-0.16,0.36],[0,0],[-0.32,0],[0,-1.36],[0,0],[-0.55,0],[0,0],[0.28,-1.82],[0,0]],"o":[[-0.23,1.46],[0,0],[-1.1,0],[0,0],[0,-1.1],[0,0],[0.4,0],[0,0],[0.13,-0.3],[1.36,0],[0,0],[0,0.55],[0,0],[1.84,0],[0,0],[0,0]],"v":[[18.39,17.46],[15.43,20],[2,20],[0,18],[0,11],[2,9],[4.35,9],[5.26,8.41],[8.78,0.49],[9.53,0],[12,2.47],[12,6],[13,7],[16.5,7],[19.47,10.46],[18.39,17.46]]}}},{"ty":"st","bm":0,"hd":false,"nm":"","lc":2,"lj":2,"ml":4,"o":{"a":0,"k":100},"w":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":48},{"s":[2],"t":78}]},"c":{"a":0,"k":[0.353,0.7844,1]}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[0.353,0.7844,1]},"r":1,"o":{"a":0,"k":100}}],"ind":5},{"ty":4,"nm":"icon","sr":1,"st":0,"op":79.06,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[9.75,10]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[219.75,248],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[242.75,118],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[242.75,118],"t":48},{"s":[239.75,31],"t":78}]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[0],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[100],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[100],"t":48},{"s":[0],"t":78}]}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[1.48,0],[0,0],[0,1.1],[0,0],[-1.1,0],[0,0],[-0.16,0.36],[0,0],[-0.32,0],[0,-1.36],[0,0],[-0.55,0],[0,0],[0.28,-1.82],[0,0]],"o":[[-0.23,1.46],[0,0],[-1.1,0],[0,0],[0,-1.1],[0,0],[0.4,0],[0,0],[0.13,-0.3],[1.36,0],[0,0],[0,0.55],[0,0],[1.84,0],[0,0],[0,0]],"v":[[18.39,17.46],[15.43,20],[2,20],[0,18],[0,11],[2,9],[4.35,9],[5.26,8.41],[8.78,0.49],[9.53,0],[12,2.47],[12,6],[13,7],[16.5,7],[19.47,10.46],[18.39,17.46]]}}},{"ty":"st","bm":0,"hd":false,"nm":"","lc":2,"lj":2,"ml":4,"o":{"a":0,"k":100},"w":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":48},{"s":[2],"t":78}]},"c":{"a":0,"k":[0.5647,0.3295,0.9177]}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[0.5647,0.3295,0.9177]},"r":1,"o":{"a":0,"k":100}}],"ind":6},{"ty":4,"nm":"icon","sr":1,"st":0,"op":79.06,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[9.75,10]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[219.75,248],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[322.75,168],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[322.75,168],"t":48},{"s":[319.75,81],"t":78}]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[0],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[100],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[100],"t":48},{"s":[0],"t":78}]}},"shapes":[{"ty":"sh","bm":0,"hd":false,"nm":"","d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[1.48,0],[0,0],[0,1.1],[0,0],[-1.1,0],[0,0],[-0.16,0.36],[0,0],[-0.32,0],[0,-1.36],[0,0],[-0.55,0],[0,0],[0.28,-1.82],[0,0]],"o":[[-0.23,1.46],[0,0],[-1.1,0],[0,0],[0,-1.1],[0,0],[0.4,0],[0,0],[0.13,-0.3],[1.36,0],[0,0],[0,0.55],[0,0],[1.84,0],[0,0],[0,0]],"v":[[18.39,17.46],[15.43,20],[2,20],[0,18],[0,11],[2,9],[4.35,9],[5.26,8.41],[8.78,0.49],[9.53,0],[12,2.47],[12,6],[13,7],[16.5,7],[19.47,10.46],[18.39,17.46]]}}},{"ty":"st","bm":0,"hd":false,"nm":"","lc":2,"lj":2,"ml":4,"o":{"a":0,"k":100},"w":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[2],"t":48},{"s":[2],"t":78}]},"c":{"a":0,"k":[1,0.2353,0.4667]}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[1,0.2353,0.4667]},"r":1,"o":{"a":0,"k":100}}],"ind":7},{"ty":4,"nm":"Анимация 5 Bg","sr":1,"st":0,"op":79.06,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[220,130]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[220.5,130.5]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"st","bm":0,"hd":false,"nm":"","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100},"w":{"a":1,"k":[{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[1],"t":0},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[1],"t":30},{"o":{"x":0.65,"y":0},"i":{"x":0.35,"y":0},"s":[1],"t":48},{"s":[1],"t":78}]},"c":{"a":0,"k":[0.8628,0.8902,0.9216]}},{"ty":"fl","bm":0,"hd":false,"nm":"","c":{"a":0,"k":[1,1,1]},"r":1,"o":{"a":0,"k":100}}],"ind":8}]'), vf = "5.7.0", gf = 60, bf = 78.06, Sf = 0, xf = [], wf = {
  nm: df,
  ddd: ff,
  h: hf,
  w: mf,
  meta: pf,
  layers: yf,
  v: vf,
  fr: gf,
  op: bf,
  ip: Sf,
  assets: xf
}, Ef = ({ width: e, ...t }, r) => {
  const [n, s] = C.useState(!1), i = C.useCallback(() => {
    s(!1);
  }, []);
  return C.useImperativeHandle(r, () => ({
    play: () => s(!0),
    stop: () => s(!1)
  })), n ? /* @__PURE__ */ f.jsx("div", { style: e ? { width: `${e}px` } : void 0, children: /* @__PURE__ */ f.jsx(lf, { loop: !1, autoplay: !0, ...t, onComplete: i, animationData: wf }) }) : null;
}, kf = C.forwardRef(Ef), Mf = "src-shared-ui-blocks-view-C1Ed", _f = "src-shared-ui-blocks-header-du56", Ff = "src-shared-ui-blocks-footer-rHys", Of = "src-shared-ui-blocks-title-rcOI", Cf = "src-shared-ui-blocks-actions-iZ-L", Nf = "src-shared-ui-blocks-content-P-WZ", dt = {
  view: Mf,
  header: _f,
  footer: Ff,
  title: Of,
  actions: Cf,
  content: Nf
}, Ye = ({
  title: e,
  actions: t,
  footer: r,
  children: n
}) => /* @__PURE__ */ f.jsxs("div", { className: dt.view, children: [
  (e || t) && /* @__PURE__ */ f.jsxs("div", { className: dt.header, children: [
    e && /* @__PURE__ */ f.jsx("div", { className: dt.title, children: e }),
    t && /* @__PURE__ */ f.jsx("div", { className: dt.actions, children: t })
  ] }),
  /* @__PURE__ */ f.jsx("div", { className: dt.content, children: n }),
  r && /* @__PURE__ */ f.jsx("div", { className: dt.footer, children: r })
] }), Ea = C.createContext(!1), Af = ({ loading: e, children: t }) => /* @__PURE__ */ f.jsx(Ea.Provider, { value: e || !1, children: t }), zs = () => C.useContext(Ea), gt = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), Hr = {
  current: []
};
let Pn = !1, $t = 0;
const Tt = /* @__PURE__ */ new Set(), pr = /* @__PURE__ */ new Map();
function ka(e) {
  const t = Array.from(e).sort((r, n) => r instanceof Pe && r.options.deps.includes(n) ? 1 : n instanceof Pe && n.options.deps.includes(r) ? -1 : 0);
  for (const r of t) {
    if (Hr.current.includes(r))
      continue;
    Hr.current.push(r), r.recompute();
    const n = Rr.get(r);
    if (n)
      for (const s of n) {
        const i = gt.get(s);
        i && ka(i);
      }
  }
}
function jf(e) {
  const t = {
    prevVal: e.prevState,
    currentVal: e.state
  };
  for (const r of e.listeners)
    r(t);
}
function Pf(e) {
  const t = {
    prevVal: e.prevState,
    currentVal: e.state
  };
  for (const r of e.listeners)
    r(t);
}
function Ma(e) {
  if ($t > 0 && !pr.has(e) && pr.set(e, e.prevState), Tt.add(e), !($t > 0) && !Pn)
    try {
      for (Pn = !0; Tt.size > 0; ) {
        const t = Array.from(Tt);
        Tt.clear();
        for (const r of t) {
          const n = pr.get(r) ?? r.prevState;
          r.prevState = n, jf(r);
        }
        for (const r of t) {
          const n = gt.get(r);
          n && (Hr.current.push(r), ka(n));
        }
        for (const r of t) {
          const n = gt.get(r);
          if (n)
            for (const s of n)
              Pf(s);
        }
      }
    } finally {
      Pn = !1, Hr.current = [], pr.clear();
    }
}
function je(e) {
  $t++;
  try {
    e();
  } finally {
    if ($t--, $t === 0) {
      const t = Tt.values().next().value;
      t && Ma(t);
    }
  }
}
function Rf(e) {
  return typeof e == "function";
}
class hs {
  constructor(t, r) {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = (n) => {
      var s, i;
      this.listeners.add(n);
      const o = (i = (s = this.options) == null ? void 0 : s.onSubscribe) == null ? void 0 : i.call(s, n, this);
      return () => {
        this.listeners.delete(n), o?.();
      };
    }, this.prevState = t, this.state = t, this.options = r;
  }
  setState(t) {
    var r, n, s;
    this.prevState = this.state, (r = this.options) != null && r.updateFn ? this.state = this.options.updateFn(this.prevState)(t) : Rf(t) ? this.state = t(this.prevState) : this.state = t, (s = (n = this.options) == null ? void 0 : n.onUpdate) == null || s.call(n), Ma(this);
  }
}
class Pe {
  constructor(t) {
    this.listeners = /* @__PURE__ */ new Set(), this._subscriptions = [], this.lastSeenDepValues = [], this.getDepVals = () => {
      const r = this.options.deps.length, n = new Array(r), s = new Array(r);
      for (let i = 0; i < r; i++) {
        const o = this.options.deps[i];
        n[i] = o.prevState, s[i] = o.state;
      }
      return this.lastSeenDepValues = s, {
        prevDepVals: n,
        currDepVals: s,
        prevVal: this.prevState ?? void 0
      };
    }, this.recompute = () => {
      var r, n;
      this.prevState = this.state;
      const s = this.getDepVals();
      this.state = this.options.fn(s), (n = (r = this.options).onUpdate) == null || n.call(r);
    }, this.checkIfRecalculationNeededDeeply = () => {
      for (const i of this.options.deps)
        i instanceof Pe && i.checkIfRecalculationNeededDeeply();
      let r = !1;
      const n = this.lastSeenDepValues, { currDepVals: s } = this.getDepVals();
      for (let i = 0; i < s.length; i++)
        if (s[i] !== n[i]) {
          r = !0;
          break;
        }
      r && this.recompute();
    }, this.mount = () => (this.registerOnGraph(), this.checkIfRecalculationNeededDeeply(), () => {
      this.unregisterFromGraph();
      for (const r of this._subscriptions)
        r();
    }), this.subscribe = (r) => {
      var n, s;
      this.listeners.add(r);
      const i = (s = (n = this.options).onSubscribe) == null ? void 0 : s.call(n, r, this);
      return () => {
        this.listeners.delete(r), i?.();
      };
    }, this.options = t, this.state = t.fn({
      prevDepVals: void 0,
      prevVal: void 0,
      currDepVals: this.getDepVals().currDepVals
    });
  }
  registerOnGraph(t = this.options.deps) {
    for (const r of t)
      if (r instanceof Pe)
        r.registerOnGraph(), this.registerOnGraph(r.options.deps);
      else if (r instanceof hs) {
        let n = gt.get(r);
        n || (n = /* @__PURE__ */ new Set(), gt.set(r, n)), n.add(this);
        let s = Rr.get(this);
        s || (s = /* @__PURE__ */ new Set(), Rr.set(this, s)), s.add(r);
      }
  }
  unregisterFromGraph(t = this.options.deps) {
    for (const r of t)
      if (r instanceof Pe)
        this.unregisterFromGraph(r.options.deps);
      else if (r instanceof hs) {
        const n = gt.get(r);
        n && n.delete(this);
        const s = Rr.get(this);
        s && s.delete(r);
      }
  }
}
const re = [];
for (let e = 0; e < 256; ++e)
  re.push((e + 256).toString(16).slice(1));
function Tf(e, t = 0) {
  return (re[e[t + 0]] + re[e[t + 1]] + re[e[t + 2]] + re[e[t + 3]] + "-" + re[e[t + 4]] + re[e[t + 5]] + "-" + re[e[t + 6]] + re[e[t + 7]] + "-" + re[e[t + 8]] + re[e[t + 9]] + "-" + re[e[t + 10]] + re[e[t + 11]] + re[e[t + 12]] + re[e[t + 13]] + re[e[t + 14]] + re[e[t + 15]]).toLowerCase();
}
let Rn;
const If = new Uint8Array(16);
function Df() {
  if (!Rn) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Rn = crypto.getRandomValues.bind(crypto);
  }
  return Rn(If);
}
const Vf = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ti = { randomUUID: Vf };
function $f(e, t, r) {
  e = e || {};
  const n = e.random ?? e.rng?.() ?? Df();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Tf(n);
}
function Lf(e, t, r) {
  return Ti.randomUUID && !e ? Ti.randomUUID() : $f(e);
}
function or(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function He(e, t) {
  return pn(t).reduce((n, s) => {
    if (n === null) return null;
    if (typeof n < "u")
      return n[s];
  }, e);
}
function yr(e, t, r) {
  const n = pn(t);
  function s(i) {
    if (!n.length)
      return or(r, i);
    const o = n.shift();
    if (typeof o == "string" || typeof o == "number" && !Array.isArray(i))
      return typeof i == "object" ? (i === null && (i = {}), {
        ...i,
        [o]: s(i[o])
      }) : {
        [o]: s()
      };
    if (Array.isArray(i) && typeof o == "number") {
      const a = i.slice(0, o);
      return [
        ...a.length ? a : new Array(o),
        s(i[o]),
        ...i.slice(o + 1)
      ];
    }
    return [...new Array(o), s()];
  }
  return s(e);
}
function Bf(e, t) {
  const r = pn(t);
  function n(s) {
    if (!s) return;
    if (r.length === 1) {
      const o = r[0];
      if (Array.isArray(s) && typeof o == "number")
        return s.filter((l, u) => u !== o);
      const { [o]: a, ...c } = s;
      return c;
    }
    const i = r.shift();
    if (typeof i == "string" && typeof s == "object")
      return {
        ...s,
        [i]: n(s[i])
      };
    if (typeof i == "number" && Array.isArray(s)) {
      if (i >= s.length)
        return s;
      const o = s.slice(0, i);
      return [
        ...o.length ? o : new Array(i),
        n(s[i]),
        ...s.slice(i + 1)
      ];
    }
    throw new Error("It seems we have created an infinite loop in deleteBy. ");
  }
  return n(e);
}
const Uf = /^(\d+)$/gm, qf = /\.(\d+)(?=\.)/gm, zf = /^(\d+)\./gm, Hf = /\.(\d+$)/gm, Qf = /\.{2,}/gm, ms = "__int__", vr = `${ms}$1`;
function pn(e) {
  if (Array.isArray(e))
    return [...e];
  if (typeof e != "string")
    throw new Error("Path must be a string.");
  return e.replace(/(^\[)|]/gm, "").replace(/\[/g, ".").replace(Uf, vr).replace(qf, `.${vr}.`).replace(zf, `${vr}.`).replace(Hf, `.${vr}`).replace(Qf, ".").split(".").map((t) => {
    if (t.startsWith(ms)) {
      const r = t.substring(ms.length), n = parseInt(r, 10);
      return String(n) === r ? n : r;
    }
    return t;
  });
}
function Ii(e, t) {
  return e.length === 0 ? t : t.length === 0 ? e : t.startsWith("[") || t.startsWith(".") ? e + t : `${e}.${t}`;
}
function Wf(e) {
  return !(Array.isArray(e) && e.length === 0);
}
function ps(e, t) {
  const r = (n) => n.validators.filter(Boolean).map((s) => ({
    cause: s.cause,
    validate: s.fn
  }));
  return t.validationLogic({
    form: t.form,
    validators: t.validators,
    event: { type: e, async: !1 },
    runValidation: r
  });
}
function ys(e, t) {
  const { asyncDebounceMs: r } = t, {
    onBlurAsyncDebounceMs: n,
    onChangeAsyncDebounceMs: s,
    onDynamicAsyncDebounceMs: i
  } = t.validators || {}, o = r ?? 0, a = (c) => c.validators.filter(Boolean).map((l) => {
    const u = l?.cause || e;
    let d = o;
    switch (u) {
      case "change":
        d = s ?? o;
        break;
      case "blur":
        d = n ?? o;
        break;
      case "dynamic":
        d = i ?? o;
        break;
      case "submit":
        d = 0;
        break;
    }
    return e === "submit" && (d = 0), {
      cause: u,
      validate: l.fn,
      debounceMs: d
    };
  });
  return t.validationLogic({
    form: t.form,
    validators: t.validators,
    event: { type: e, async: !0 },
    runValidation: a
  });
}
const vs = (e) => !!e && typeof e == "object" && "fields" in e;
function ht(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Date && t instanceof Date)
    return e.getTime() === t.getTime();
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [s, i] of e)
      if (!t.has(s) || !Object.is(i, t.get(s))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const s of e)
      if (!t.has(s)) return !1;
    return !0;
  }
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (const s of r)
    if (!n.includes(s) || !ht(e[s], t[s]))
      return !1;
  return !0;
}
const Di = ({
  newFormValidatorError: e,
  isPreviousErrorFromFormValidator: t,
  previousErrorValue: r
}) => e ? { newErrorValue: e, newSource: "form" } : t ? { newErrorValue: void 0, newSource: void 0 } : r ? { newErrorValue: r, newSource: "field" } : { newErrorValue: void 0, newSource: void 0 }, Vi = ({
  formLevelError: e,
  fieldLevelError: t
}) => t ? { newErrorValue: t, newSource: "field" } : e ? { newErrorValue: e, newSource: "form" } : { newErrorValue: void 0, newSource: void 0 };
function de(e, t) {
  return e == null ? t : { ...e, ...t };
}
const vt = (e) => {
  if (!e.validators)
    return e.runValidation({
      validators: [],
      form: e.form
    });
  const t = e.event.async, r = t ? void 0 : { fn: e.validators.onMount, cause: "mount" }, n = {
    fn: t ? e.validators.onChangeAsync : e.validators.onChange,
    cause: "change"
  }, s = {
    fn: t ? e.validators.onBlurAsync : e.validators.onBlur,
    cause: "blur"
  }, i = {
    fn: t ? e.validators.onSubmitAsync : e.validators.onSubmit,
    cause: "submit"
  }, o = t ? void 0 : { fn: () => {
  }, cause: "server" };
  switch (e.event.type) {
    case "mount":
      return e.runValidation({
        validators: [r],
        form: e.form
      });
    case "submit":
      return e.runValidation({
        validators: [
          n,
          s,
          i,
          o
        ],
        form: e.form
      });
    case "server":
      return e.runValidation({
        validators: [],
        form: e.form
      });
    case "blur":
      return e.runValidation({
        validators: [s, o],
        form: e.form
      });
    case "change":
      return e.runValidation({
        validators: [n, o],
        form: e.form
      });
    default:
      throw new Error(`Unknown validation event type: ${e.event.type}`);
  }
};
function Yf(e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of e) {
    const n = [...r.path ?? []].map((s) => {
      const i = typeof s == "object" ? s.key : s;
      return typeof i == "number" ? `[${i}]` : i;
    }).join(".").replace(/\.\[/g, "[");
    t.set(n, (t.get(n) ?? []).concat(r));
  }
  return Object.fromEntries(t);
}
const $i = (e) => {
  const t = Yf(e);
  return {
    form: t,
    fields: t
  };
}, bt = {
  validate({
    value: e,
    validationSource: t
  }, r) {
    const n = r["~standard"].validate(e);
    if (n instanceof Promise)
      throw new Error("async function passed to sync validator");
    if (n.issues)
      return t === "field" ? n.issues : $i(n.issues);
  },
  async validateAsync({
    value: e,
    validationSource: t
  }, r) {
    const n = await r["~standard"].validate(e);
    if (n.issues)
      return t === "field" ? n.issues : $i(n.issues);
  }
}, _a = (e) => !!e && "~standard" in e, Qr = {
  isValidating: !1,
  isTouched: !1,
  isBlurred: !1,
  isDirty: !1,
  isPristine: !0,
  isValid: !0,
  isDefaultValue: !0,
  errors: [],
  errorMap: {},
  errorSourceMap: {}
};
function gr(e) {
  function t(d, h, p, v) {
    const m = n(d, h, p, v);
    ({
      insert: () => a(m, d, h),
      remove: () => c(m),
      swap: () => v !== void 0 && u(m, d, h, v),
      move: () => v !== void 0 && l(m, d, h, v)
    })[p]();
  }
  function r(d, h) {
    return `${d}[${h}]`;
  }
  function n(d, h, p, v) {
    const m = [r(d, h)];
    if (p === "swap")
      m.push(r(d, v));
    else if (p === "move") {
      const [y, g] = [
        Math.min(h, v),
        Math.max(h, v)
      ];
      for (let O = y; O <= g; O++)
        m.push(r(d, O));
    } else {
      const y = e.getFieldValue(d), g = Array.isArray(y) ? y.length : 0;
      for (let O = h + 1; O < g; O++)
        m.push(r(d, O));
    }
    return Object.keys(e.fieldInfo).filter(
      (y) => m.some((g) => y.startsWith(g))
    );
  }
  function s(d, h) {
    return d.replace(/\[(\d+)\]/, (p, v) => {
      const m = parseInt(v, 10);
      return `[${h === "up" ? m + 1 : Math.max(0, m - 1)}]`;
    });
  }
  function i(d, h) {
    (h === "up" ? d : [...d].reverse()).forEach((v) => {
      const m = s(v.toString(), h), y = e.getFieldMeta(m);
      y ? e.setFieldMeta(v, y) : e.setFieldMeta(v, o());
    });
  }
  const o = () => Qr, a = (d, h, p) => {
    i(d, "down"), d.forEach((v) => {
      v.toString().startsWith(r(h, p)) && e.setFieldMeta(v, o());
    });
  }, c = (d) => {
    i(d, "up");
  }, l = (d, h, p, v) => {
    const m = new Map(
      Object.keys(e.fieldInfo).filter(
        (y) => y.startsWith(r(h, p))
      ).map((y) => [
        y,
        e.getFieldMeta(y)
      ])
    );
    i(d, p < v ? "up" : "down"), Object.keys(e.fieldInfo).filter((y) => y.startsWith(r(h, v))).forEach((y) => {
      const g = y.replace(
        r(h, v),
        r(h, p)
      ), O = m.get(g);
      O && e.setFieldMeta(y, O);
    });
  }, u = (d, h, p, v) => {
    d.forEach((m) => {
      if (!m.toString().startsWith(r(h, p))) return;
      const y = m.toString().replace(
        r(h, p),
        r(h, v)
      ), [g, O] = [
        e.getFieldMeta(m),
        e.getFieldMeta(y)
      ];
      g && e.setFieldMeta(y, g), O && e.setFieldMeta(m, O);
    });
  };
  return { handleArrayFieldMetaShift: t };
}
class Gf {
  on(t, r) {
  }
  onAll(t) {
  }
  onAllPluginEvents(t) {
  }
  emit(t, ...r) {
  }
  getPluginId() {
  }
}
const Kf = Gf;
class Jf extends Kf {
  constructor() {
    super({
      pluginId: "form-devtools"
    });
  }
}
const xe = new Jf();
function Tn(e) {
  return {
    values: e.values ?? {},
    errorMap: e.errorMap ?? {},
    fieldMetaBase: e.fieldMetaBase ?? {},
    isSubmitted: e.isSubmitted ?? !1,
    isSubmitting: e.isSubmitting ?? !1,
    isValidating: e.isValidating ?? !1,
    submissionAttempts: e.submissionAttempts ?? 0,
    isSubmitSuccessful: e.isSubmitSuccessful ?? !1,
    validationMetaMap: e.validationMetaMap ?? {
      onChange: void 0,
      onBlur: void 0,
      onSubmit: void 0,
      onMount: void 0,
      onServer: void 0,
      onDynamic: void 0
    }
  };
}
class Xf {
  /**
   * Constructs a new `FormApi` instance with the given form options.
   */
  constructor(t) {
    this.options = {}, this.fieldInfo = {}, this.prevTransformArray = [], this.mount = () => {
      const r = this.fieldMetaDerived.mount(), n = this.store.mount(), s = () => {
        r(), n(), xe.emit("form-unmounted", {
          id: this._formId
        });
      };
      this.options.listeners?.onMount?.({ formApi: this });
      const { onMount: i } = this.options.validators || {};
      return xe.emit("form-state-change", {
        id: this._formId,
        state: this.store.state,
        options: this.options
      }), i && this.validateSync("mount"), s;
    }, this.update = (r) => {
      if (!r) return;
      const n = this.options;
      this.options = r;
      const s = !!r.transform?.deps?.some(
        (a, c) => a !== this.prevTransformArray[c]
      ), i = r.defaultValues && !ht(r.defaultValues, n.defaultValues) && !this.state.isTouched, o = !ht(r.defaultState, n.defaultState) && !this.state.isTouched;
      !i && !o && !s || je(() => {
        this.baseStore.setState(
          () => Tn(
            Object.assign(
              {},
              this.state,
              o ? r.defaultState : {},
              i ? {
                values: r.defaultValues
              } : {},
              s ? { _force_re_eval: !this.state._force_re_eval } : {}
            )
          )
        );
      });
    }, this.reset = (r, n) => {
      const { fieldMeta: s } = this.state, i = this.resetFieldMeta(s);
      r && !n?.keepDefaultValues && (this.options = {
        ...this.options,
        defaultValues: r
      }), this.baseStore.setState(
        () => Tn({
          ...this.options.defaultState,
          values: r ?? this.options.defaultValues ?? this.options.defaultState?.values,
          fieldMetaBase: i
        })
      );
    }, this.validateAllFields = async (r) => {
      const n = [];
      return je(() => {
        Object.values(this.fieldInfo).forEach(
          (i) => {
            if (!i.instance) return;
            const o = i.instance;
            n.push(
              // Remember, `validate` is either a sync operation or a promise
              Promise.resolve().then(
                () => o.validate(r, { skipFormValidation: !0 })
              )
            ), i.instance.state.meta.isTouched || i.instance.setMeta((a) => ({ ...a, isTouched: !0 }));
          }
        );
      }), (await Promise.all(n)).flat();
    }, this.validateArrayFieldsStartingFrom = async (r, n, s) => {
      const i = this.getFieldValue(r), o = Array.isArray(i) ? Math.max(i.length - 1, 0) : null, a = [`${r}[${n}]`];
      for (let d = n + 1; d <= (o ?? 0); d++)
        a.push(`${r}[${d}]`);
      const c = Object.keys(this.fieldInfo).filter(
        (d) => a.some((h) => d.startsWith(h))
      ), l = [];
      return je(() => {
        c.forEach((d) => {
          l.push(
            Promise.resolve().then(() => this.validateField(d, s))
          );
        });
      }), (await Promise.all(l)).flat();
    }, this.validateField = (r, n) => {
      const s = this.fieldInfo[r]?.instance;
      return s ? (s.state.meta.isTouched || s.setMeta((i) => ({ ...i, isTouched: !0 })), s.validate(n)) : [];
    }, this.validateSync = (r) => {
      const n = ps(r, {
        ...this.options,
        form: this,
        validationLogic: this.options.validationLogic || vt
      });
      let s = !1;
      const i = {};
      return je(() => {
        for (const c of n) {
          if (!c.validate) continue;
          const l = this.runValidator({
            validate: c.validate,
            value: {
              value: this.state.values,
              formApi: this,
              validationSource: "form"
            },
            type: "validate"
          }), { formError: u, fieldErrors: d } = Tr(l), h = At(c.cause);
          for (const p of Object.keys(
            this.state.fieldMeta
          )) {
            const v = this.getFieldMeta(p);
            if (!v) continue;
            const {
              errorMap: m,
              errorSourceMap: y
            } = v, g = d?.[p], { newErrorValue: O, newSource: b } = Di({
              newFormValidatorError: g,
              isPreviousErrorFromFormValidator: (
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                y?.[h] === "form"
              ),
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              previousErrorValue: m?.[h]
            });
            b === "form" && (i[p] = {
              ...i[p],
              [h]: g
            }), // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            m?.[h] !== O && this.setFieldMeta(p, (E) => ({
              ...E,
              errorMap: {
                ...E.errorMap,
                [h]: O
              },
              errorSourceMap: {
                ...E.errorSourceMap,
                [h]: b
              }
            }));
          }
          this.state.errorMap?.[h] !== u && this.baseStore.setState((p) => ({
            ...p,
            errorMap: {
              ...p.errorMap,
              [h]: u
            }
          })), (u || d) && (s = !0);
        }
        const o = At("submit");
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        this.state.errorMap?.[o] && r !== "submit" && !s && this.baseStore.setState((c) => ({
          ...c,
          errorMap: {
            ...c.errorMap,
            [o]: void 0
          }
        }));
        const a = At("server");
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        this.state.errorMap?.[a] && r !== "server" && !s && this.baseStore.setState((c) => ({
          ...c,
          errorMap: {
            ...c.errorMap,
            [a]: void 0
          }
        }));
      }), { hasErrored: s, fieldsErrorMap: i };
    }, this.validateAsync = async (r) => {
      const n = ys(r, {
        ...this.options,
        form: this,
        validationLogic: this.options.validationLogic || vt
      });
      this.state.isFormValidating || this.baseStore.setState((c) => ({ ...c, isFormValidating: !0 }));
      const s = [];
      let i;
      for (const c of n) {
        if (!c.validate) continue;
        const l = At(c.cause);
        this.state.validationMetaMap[l]?.lastAbortController.abort();
        const d = new AbortController();
        this.state.validationMetaMap[l] = {
          lastAbortController: d
        }, s.push(
          new Promise(async (h) => {
            let p;
            try {
              p = await new Promise((g, O) => {
                setTimeout(async () => {
                  if (d.signal.aborted) return g(void 0);
                  try {
                    g(
                      await this.runValidator({
                        validate: c.validate,
                        value: {
                          value: this.state.values,
                          formApi: this,
                          validationSource: "form",
                          signal: d.signal
                        },
                        type: "validateAsync"
                      })
                    );
                  } catch (b) {
                    O(b);
                  }
                }, c.debounceMs);
              });
            } catch (g) {
              p = g;
            }
            const { formError: v, fieldErrors: m } = Tr(p);
            m && (i = i ? {
              ...i,
              ...m
            } : m);
            const y = At(c.cause);
            for (const g of Object.keys(
              this.state.fieldMeta
            )) {
              const O = this.getFieldMeta(g);
              if (!O) continue;
              const {
                errorMap: b,
                errorSourceMap: E
              } = O, N = i?.[g], { newErrorValue: S, newSource: x } = Di({
                newFormValidatorError: N,
                isPreviousErrorFromFormValidator: (
                  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                  E?.[y] === "form"
                ),
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                previousErrorValue: b?.[y]
              });
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              b?.[y] !== S && this.setFieldMeta(g, (M) => ({
                ...M,
                errorMap: {
                  ...M.errorMap,
                  [y]: S
                },
                errorSourceMap: {
                  ...M.errorSourceMap,
                  [y]: x
                }
              }));
            }
            this.baseStore.setState((g) => ({
              ...g,
              errorMap: {
                ...g.errorMap,
                [y]: v
              }
            })), h(
              i ? { fieldErrors: i, errorMapKey: y } : void 0
            );
          })
        );
      }
      let o = [];
      const a = {};
      if (s.length) {
        o = await Promise.all(s);
        for (const c of o)
          if (c?.fieldErrors) {
            const { errorMapKey: l } = c;
            for (const [u, d] of Object.entries(
              c.fieldErrors
            )) {
              const p = {
                ...a[u] || {},
                [l]: d
              };
              a[u] = p;
            }
          }
      }
      return this.baseStore.setState((c) => ({
        ...c,
        isFormValidating: !1
      })), a;
    }, this.validate = (r) => {
      const { hasErrored: n, fieldsErrorMap: s } = this.validateSync(r);
      return n && !this.options.asyncAlways ? s : this.validateAsync(r);
    }, this.getFieldValue = (r) => He(this.state.values, r), this.getFieldMeta = (r) => this.state.fieldMeta[r], this.getFieldInfo = (r) => this.fieldInfo[r] ||= {
      instance: null,
      validationMetaMap: {
        onChange: void 0,
        onBlur: void 0,
        onSubmit: void 0,
        onMount: void 0,
        onServer: void 0,
        onDynamic: void 0
      }
    }, this.setFieldMeta = (r, n) => {
      this.baseStore.setState((s) => ({
        ...s,
        fieldMetaBase: {
          ...s.fieldMetaBase,
          [r]: or(
            n,
            s.fieldMetaBase[r]
          )
        }
      }));
    }, this.resetFieldMeta = (r) => Object.keys(r).reduce(
      (n, s) => {
        const i = s;
        return n[i] = Qr, n;
      },
      {}
    ), this.setFieldValue = (r, n, s) => {
      const i = s?.dontUpdateMeta ?? !1, o = s?.dontRunListeners ?? !1, a = s?.dontValidate ?? !1;
      je(() => {
        i || this.setFieldMeta(r, (c) => ({
          ...c,
          isTouched: !0,
          isDirty: !0,
          errorMap: {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            ...c?.errorMap,
            onMount: void 0
          }
        })), this.baseStore.setState((c) => ({
          ...c,
          values: yr(c.values, r, n)
        }));
      }), o || this.getFieldInfo(r).instance?.triggerOnChangeListener(), a || this.validateField(r, "change");
    }, this.deleteField = (r) => {
      const s = [...Object.keys(this.fieldInfo).filter((i) => {
        const o = r.toString();
        return i !== o && i.startsWith(o);
      }), r];
      this.baseStore.setState((i) => {
        const o = { ...i };
        return s.forEach((a) => {
          o.values = Bf(o.values, a), delete this.fieldInfo[a], delete o.fieldMetaBase[a];
        }), o;
      });
    }, this.pushFieldValue = (r, n, s) => {
      this.setFieldValue(
        r,
        (i) => [...Array.isArray(i) ? i : [], n],
        s
      );
    }, this.insertFieldValue = async (r, n, s, i) => {
      this.setFieldValue(
        r,
        (o) => [
          ...o.slice(0, n),
          s,
          ...o.slice(n)
        ],
        de(i, { dontValidate: !0 })
      ), await this.validateField(r, "change"), gr(this).handleArrayFieldMetaShift(r, n, "insert"), await this.validateArrayFieldsStartingFrom(r, n, "change");
    }, this.replaceFieldValue = async (r, n, s, i) => {
      this.setFieldValue(
        r,
        (o) => o.map(
          (a, c) => c === n ? s : a
        ),
        de(i, { dontValidate: !0 })
      ), await this.validateField(r, "change"), await this.validateArrayFieldsStartingFrom(r, n, "change");
    }, this.removeFieldValue = async (r, n, s) => {
      const i = this.getFieldValue(r), o = Array.isArray(i) ? Math.max(i.length - 1, 0) : null;
      if (this.setFieldValue(
        r,
        (a) => a.filter(
          (c, l) => l !== n
        ),
        de(s, { dontValidate: !0 })
      ), gr(this).handleArrayFieldMetaShift(r, n, "remove"), o !== null) {
        const a = `${r}[${o}]`;
        this.deleteField(a);
      }
      await this.validateField(r, "change"), await this.validateArrayFieldsStartingFrom(r, n, "change");
    }, this.swapFieldValues = (r, n, s, i) => {
      this.setFieldValue(
        r,
        (o) => {
          const a = o[n], c = o[s];
          return yr(yr(o, `${n}`, c), `${s}`, a);
        },
        de(i, { dontValidate: !0 })
      ), gr(this).handleArrayFieldMetaShift(r, n, "swap", s), this.validateField(r, "change"), this.validateField(`${r}[${n}]`, "change"), this.validateField(`${r}[${s}]`, "change");
    }, this.moveFieldValues = (r, n, s, i) => {
      this.setFieldValue(
        r,
        (o) => {
          const a = [...o];
          return a.splice(s, 0, a.splice(n, 1)[0]), a;
        },
        de(i, { dontValidate: !0 })
      ), gr(this).handleArrayFieldMetaShift(r, n, "move", s), this.validateField(r, "change"), this.validateField(`${r}[${n}]`, "change"), this.validateField(`${r}[${s}]`, "change");
    }, this.clearFieldValues = (r, n) => {
      const s = this.getFieldValue(r), i = Array.isArray(s) ? Math.max(s.length - 1, 0) : null;
      if (this.setFieldValue(
        r,
        [],
        de(n, { dontValidate: !0 })
      ), i !== null)
        for (let o = 0; o <= i; o++) {
          const a = `${r}[${o}]`;
          this.deleteField(a);
        }
      this.validateField(r, "change");
    }, this.resetField = (r) => {
      this.baseStore.setState((n) => ({
        ...n,
        fieldMetaBase: {
          ...n.fieldMetaBase,
          [r]: Qr
        },
        values: this.options.defaultValues ? yr(n.values, r, He(this.options.defaultValues, r)) : n.values
      }));
    }, this.getAllErrors = () => ({
      form: {
        errors: this.state.errors,
        errorMap: this.state.errorMap
      },
      fields: Object.entries(this.state.fieldMeta).reduce(
        (r, [n, s]) => (Object.keys(s).length && s.errors.length && (r[n] = {
          errors: s.errors,
          errorMap: s.errorMap
        }), r),
        {}
      )
    }), this.parseValuesWithSchema = (r) => bt.validate(
      { value: this.state.values, validationSource: "form" },
      r
    ), this.parseValuesWithSchemaAsync = (r) => bt.validateAsync(
      { value: this.state.values, validationSource: "form" },
      r
    ), this.timeoutIds = {
      validations: {},
      listeners: {},
      formListeners: {}
    }, this._formId = t?.formId ?? Lf(), this._devtoolsSubmissionOverride = !1, this.baseStore = new hs(
      Tn({
        ...t?.defaultState,
        values: t?.defaultValues ?? t?.defaultState?.values
      })
    ), this.fieldMetaDerived = new Pe({
      deps: [this.baseStore],
      fn: ({ prevDepVals: r, currDepVals: n, prevVal: s }) => {
        const i = s, o = r?.[0], a = n[0];
        let c = 0;
        const l = {};
        for (const u of Object.keys(
          a.fieldMetaBase
        )) {
          const d = a.fieldMetaBase[u], h = o?.fieldMetaBase[u], p = i?.[u], v = He(a.values, u);
          let m = p?.errors;
          if (!h || d.errorMap !== h.errorMap) {
            m = Object.values(d.errorMap ?? {}).filter(
              (E) => E !== void 0
            );
            const b = this.getFieldInfo(u)?.instance;
            b && !b.options.disableErrorFlat && (m = m?.flat(
              1
            ));
          }
          const y = !Wf(m ?? []), g = !d.isDirty, O = ht(
            v,
            He(this.options.defaultValues, u)
          ) || ht(
            v,
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            this.getFieldInfo(u)?.instance?.options.defaultValue
          );
          if (p && p.isPristine === g && p.isValid === y && p.isDefaultValue === O && p.errors === m && d === h) {
            l[u] = p, c++;
            continue;
          }
          l[u] = {
            ...d,
            errors: m,
            isPristine: g,
            isValid: y,
            isDefaultValue: O
          };
        }
        return Object.keys(a.fieldMetaBase).length && i && c === Object.keys(a.fieldMetaBase).length ? i : l;
      }
    }), this.store = new Pe({
      deps: [this.baseStore, this.fieldMetaDerived],
      fn: ({ prevDepVals: r, currDepVals: n, prevVal: s }) => {
        const i = s, o = r?.[0], a = n[0], c = n[1], l = Object.values(c).filter(
          Boolean
        ), u = l.some(
          (k) => k.isValidating
        ), d = l.every((k) => k.isValid), h = l.some((k) => k.isTouched), p = l.some((k) => k.isBlurred), v = l.every(
          (k) => k.isDefaultValue
        ), m = (
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          h && a.errorMap?.onMount
        ), y = l.some((k) => k.isDirty), g = !y, O = !!// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        (a.errorMap?.onMount || // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        l.some((k) => k?.errorMap?.onMount)), b = !!u;
        let E = i?.errors ?? [];
        (!o || a.errorMap !== o.errorMap) && (E = Object.values(a.errorMap).reduce((k, j) => j === void 0 ? k : j && vs(j) ? (k.push(j.form), k) : (k.push(j), k), []));
        const N = E.length === 0, S = d && N, x = this.options.canSubmitWhenInvalid ?? !1, M = a.submissionAttempts === 0 && !h && !O || !b && !a.isSubmitting && S || x;
        let F = a.errorMap;
        if (m && (E = E.filter(
          (k) => k !== a.errorMap.onMount
        ), F = Object.assign(F, { onMount: void 0 })), i && o && i.errorMap === F && i.fieldMeta === this.fieldMetaDerived.state && i.errors === E && i.isFieldsValidating === u && i.isFieldsValid === d && i.isFormValid === N && i.isValid === S && i.canSubmit === M && i.isTouched === h && i.isBlurred === p && i.isPristine === g && i.isDefaultValue === v && i.isDirty === y && ht(o, a))
          return i;
        let _ = {
          ...a,
          errorMap: F,
          fieldMeta: this.fieldMetaDerived.state,
          errors: E,
          isFieldsValidating: u,
          isFieldsValid: d,
          isFormValid: N,
          isValid: S,
          canSubmit: M,
          isTouched: h,
          isBlurred: p,
          isPristine: g,
          isDefaultValue: v,
          isDirty: y
        };
        const w = this.options.transform?.deps ?? [];
        if (w.length !== this.prevTransformArray.length || w.some((k, j) => k !== this.prevTransformArray[j])) {
          const k = Object.assign({}, this, { state: _ });
          this.options.transform?.fn(k), _ = k.state, this.prevTransformArray = w;
        }
        return _;
      }
    }), this.handleSubmit = this.handleSubmit.bind(this), this.update(t || {}), this.store.subscribe(() => {
      xe.emit("form-state-change", {
        id: this._formId,
        state: this.store.state,
        options: this.options
      });
    }), xe.on("request-form-state", (r) => {
      r.payload.id === this._formId && xe.emit("form-state-change", {
        id: this._formId,
        state: this.store.state,
        options: this.options
      });
    }), xe.on("request-form-reset", (r) => {
      r.payload.id === this._formId && this.reset();
    }), xe.on("request-form-force-submit", (r) => {
      r.payload.id === this._formId && (this._devtoolsSubmissionOverride = !0, this.handleSubmit(), this._devtoolsSubmissionOverride = !1);
    });
  }
  get state() {
    return this.store.state;
  }
  formId() {
    return this._formId;
  }
  /**
   * @private
   */
  runValidator(t) {
    return _a(t.validate) ? bt[t.type](
      t.value,
      t.validate
    ) : t.validate(t.value);
  }
  async handleSubmit(t) {
    if (this.baseStore.setState((s) => ({
      ...s,
      // Submission attempts mark the form as not submitted
      isSubmitted: !1,
      // Count submission attempts
      submissionAttempts: s.submissionAttempts + 1,
      isSubmitSuccessful: !1
      // Reset isSubmitSuccessful at the start of submission
    })), je(() => {
      Object.values(this.fieldInfo).forEach(
        (s) => {
          s.instance && (s.instance.state.meta.isTouched || s.instance.setMeta((i) => ({ ...i, isTouched: !0 })));
        }
      );
    }), !this.state.canSubmit && !this._devtoolsSubmissionOverride) return;
    const r = t ?? this.options.onSubmitMeta;
    this.baseStore.setState((s) => ({ ...s, isSubmitting: !0 }));
    const n = () => {
      this.baseStore.setState((s) => ({ ...s, isSubmitting: !1 }));
    };
    if (await this.validateAllFields("submit"), !this.state.isFieldsValid) {
      n(), this.options.onSubmitInvalid?.({
        value: this.state.values,
        formApi: this,
        meta: r
      }), xe.emit("form-submission-state-change", {
        id: this._formId,
        submissionAttempt: this.state.submissionAttempts,
        successful: !1,
        stage: "validateAllFields",
        errors: Object.values(this.state.fieldMeta).map((s) => s.errors).flat()
      });
      return;
    }
    if (await this.validate("submit"), !this.state.isValid) {
      n(), this.options.onSubmitInvalid?.({
        value: this.state.values,
        formApi: this,
        meta: r
      }), xe.emit("form-submission-state-change", {
        id: this._formId,
        submissionAttempt: this.state.submissionAttempts,
        successful: !1,
        stage: "validate",
        errors: this.state.errors
      });
      return;
    }
    je(() => {
      Object.values(this.fieldInfo).forEach(
        (s) => {
          s.instance?.options.listeners?.onSubmit?.({
            value: s.instance.state.value,
            fieldApi: s.instance
          });
        }
      );
    }), this.options.listeners?.onSubmit?.({ formApi: this, meta: r });
    try {
      await this.options.onSubmit?.({
        value: this.state.values,
        formApi: this,
        meta: r
      }), je(() => {
        this.baseStore.setState((s) => ({
          ...s,
          isSubmitted: !0,
          isSubmitSuccessful: !0
          // Set isSubmitSuccessful to true on successful submission
        })), xe.emit("form-submission-state-change", {
          id: this._formId,
          submissionAttempt: this.state.submissionAttempts,
          successful: !0
        }), n();
      });
    } catch (s) {
      throw this.baseStore.setState((i) => ({
        ...i,
        isSubmitSuccessful: !1
        // Ensure isSubmitSuccessful is false if an error occurs
      })), xe.emit("form-submission-state-change", {
        id: this._formId,
        submissionAttempt: this.state.submissionAttempts,
        successful: !1,
        stage: "inflight",
        onError: s
      }), n(), s;
    }
  }
  /**
   * Updates the form's errorMap
   */
  setErrorMap(t) {
    je(() => {
      Object.entries(t).forEach(([r, n]) => {
        const s = r;
        if (vs(n)) {
          const { formError: i, fieldErrors: o } = Tr(n);
          for (const a of Object.keys(
            this.fieldInfo
          ))
            this.getFieldMeta(a) && this.setFieldMeta(a, (l) => ({
              ...l,
              errorMap: {
                ...l.errorMap,
                [s]: o?.[a]
              },
              errorSourceMap: {
                ...l.errorSourceMap,
                [s]: "form"
              }
            }));
          this.baseStore.setState((a) => ({
            ...a,
            errorMap: {
              ...a.errorMap,
              [s]: i
            }
          }));
        } else
          this.baseStore.setState((i) => ({
            ...i,
            errorMap: {
              ...i.errorMap,
              [s]: n
            }
          }));
      });
    });
  }
}
function Tr(e) {
  if (e) {
    if (vs(e)) {
      const t = Tr(e.form).formError, r = e.fields;
      return { formError: t, fieldErrors: r };
    }
    return { formError: e };
  }
  return { formError: void 0 };
}
function At(e) {
  switch (e) {
    case "submit":
      return "onSubmit";
    case "blur":
      return "onBlur";
    case "mount":
      return "onMount";
    case "server":
      return "onServer";
    case "dynamic":
      return "onDynamic";
    case "change":
    default:
      return "onChange";
  }
}
class Zf {
  /**
   * Initializes a new `FieldApi` instance.
   */
  constructor(t) {
    this.options = {}, this.mount = () => {
      const r = this.store.mount();
      this.options.defaultValue !== void 0 && this.form.setFieldValue(this.name, this.options.defaultValue, {
        dontUpdateMeta: !0
      });
      const n = this.getInfo();
      n.instance = this, this.update(this.options);
      const { onMount: s } = this.options.validators || {};
      if (s) {
        const i = this.runValidator({
          validate: s,
          value: {
            value: this.state.value,
            fieldApi: this,
            validationSource: "field"
          },
          type: "validate"
        });
        i && this.setMeta(
          (o) => ({
            ...o,
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            errorMap: { ...o?.errorMap, onMount: i },
            errorSourceMap: {
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              ...o?.errorSourceMap,
              onMount: "field"
            }
          })
        );
      }
      return this.options.listeners?.onMount?.({
        value: this.state.value,
        fieldApi: this
      }), r;
    }, this.update = (r) => {
      this.options = r;
      const n = this.name !== r.name;
      if (this.name = r.name, this.state.value === void 0) {
        const s = He(r.form.options.defaultValues, r.name), i = r.defaultValue ?? s;
        n ? this.setValue((o) => o || i, {
          dontUpdateMeta: !0
        }) : i !== void 0 && this.setValue(i, {
          dontUpdateMeta: !0
        });
      }
      this.form.getFieldMeta(this.name) === void 0 && this.setMeta(this.state.meta);
    }, this.getValue = () => this.form.getFieldValue(this.name), this.setValue = (r, n) => {
      this.form.setFieldValue(
        this.name,
        r,
        de(n, { dontRunListeners: !0, dontValidate: !0 })
      ), n?.dontRunListeners || this.triggerOnChangeListener(), n?.dontValidate || this.validate("change");
    }, this.getMeta = () => this.store.state.meta, this.setMeta = (r) => this.form.setFieldMeta(this.name, r), this.getInfo = () => this.form.getFieldInfo(this.name), this.pushValue = (r, n) => {
      this.form.pushFieldValue(
        this.name,
        r,
        de(n, { dontRunListeners: !0 })
      ), n?.dontRunListeners || this.triggerOnChangeListener();
    }, this.insertValue = (r, n, s) => {
      this.form.insertFieldValue(
        this.name,
        r,
        n,
        de(s, { dontRunListeners: !0 })
      ), s?.dontRunListeners || this.triggerOnChangeListener();
    }, this.replaceValue = (r, n, s) => {
      this.form.replaceFieldValue(
        this.name,
        r,
        n,
        de(s, { dontRunListeners: !0 })
      ), s?.dontRunListeners || this.triggerOnChangeListener();
    }, this.removeValue = (r, n) => {
      this.form.removeFieldValue(
        this.name,
        r,
        de(n, { dontRunListeners: !0 })
      ), n?.dontRunListeners || this.triggerOnChangeListener();
    }, this.swapValues = (r, n, s) => {
      this.form.swapFieldValues(
        this.name,
        r,
        n,
        de(s, { dontRunListeners: !0 })
      ), s?.dontRunListeners || this.triggerOnChangeListener();
    }, this.moveValue = (r, n, s) => {
      this.form.moveFieldValues(
        this.name,
        r,
        n,
        de(s, { dontRunListeners: !0 })
      ), s?.dontRunListeners || this.triggerOnChangeListener();
    }, this.clearValues = (r) => {
      this.form.clearFieldValues(
        this.name,
        de(r, { dontRunListeners: !0 })
      ), r?.dontRunListeners || this.triggerOnChangeListener();
    }, this.getLinkedFields = (r) => {
      const n = Object.values(this.form.fieldInfo), s = [];
      for (const i of n) {
        if (!i.instance) continue;
        const { onChangeListenTo: o, onBlurListenTo: a } = i.instance.options.validators || {};
        r === "change" && o?.includes(this.name) && s.push(i.instance), r === "blur" && a?.includes(this.name) && s.push(i.instance);
      }
      return s;
    }, this.validateSync = (r, n) => {
      const s = ps(r, {
        ...this.options,
        form: this.form,
        validationLogic: this.form.options.validationLogic || vt
      }), o = this.getLinkedFields(r).reduce(
        (l, u) => {
          const d = ps(r, {
            ...u.options,
            form: u.form,
            validationLogic: u.form.options.validationLogic || vt
          });
          return d.forEach((h) => {
            h.field = u;
          }), l.concat(d);
        },
        []
      );
      let a = !1;
      je(() => {
        const l = (u, d) => {
          const h = br(d.cause), p = d.validate ? Li(
            u.runValidator({
              validate: d.validate,
              value: {
                value: u.store.state.value,
                validationSource: "field",
                fieldApi: u
              },
              type: "validate"
            })
          ) : void 0, v = n[h], { newErrorValue: m, newSource: y } = Vi({
            formLevelError: v,
            fieldLevelError: p
          });
          u.state.meta.errorMap?.[h] !== m && u.setMeta((g) => ({
            ...g,
            errorMap: {
              ...g.errorMap,
              [h]: m
            },
            errorSourceMap: {
              ...g.errorSourceMap,
              [h]: y
            }
          })), m && (a = !0);
        };
        for (const u of s)
          l(this, u);
        for (const u of o)
          u.validate && l(u.field, u);
      });
      const c = br("submit");
      return (
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        this.state.meta.errorMap?.[c] && r !== "submit" && !a && this.setMeta((l) => ({
          ...l,
          errorMap: {
            ...l.errorMap,
            [c]: void 0
          },
          errorSourceMap: {
            ...l.errorSourceMap,
            [c]: void 0
          }
        })), { hasErrored: a }
      );
    }, this.validateAsync = async (r, n) => {
      const s = ys(r, {
        ...this.options,
        form: this.form,
        validationLogic: this.form.options.validationLogic || vt
      }), i = await n, o = this.getLinkedFields(r), a = o.reduce(
        (h, p) => {
          const v = ys(r, {
            ...p.options,
            form: p.form,
            validationLogic: p.form.options.validationLogic || vt
          });
          return v.forEach((m) => {
            m.field = p;
          }), h.concat(v);
        },
        []
      );
      this.state.meta.isValidating || this.setMeta((h) => ({ ...h, isValidating: !0 }));
      for (const h of o)
        h.setMeta((p) => ({ ...p, isValidating: !0 }));
      const c = [], l = [], u = (h, p, v) => {
        const m = br(p.cause);
        h.getInfo().validationMetaMap[m]?.lastAbortController.abort();
        const g = new AbortController();
        this.getInfo().validationMetaMap[m] = {
          lastAbortController: g
        }, v.push(
          new Promise(async (O) => {
            let b;
            try {
              b = await new Promise((M, F) => {
                this.timeoutIds.validations[p.cause] && clearTimeout(this.timeoutIds.validations[p.cause]), this.timeoutIds.validations[p.cause] = setTimeout(
                  async () => {
                    if (g.signal.aborted) return M(void 0);
                    try {
                      M(
                        await this.runValidator({
                          validate: p.validate,
                          value: {
                            value: h.store.state.value,
                            fieldApi: h,
                            signal: g.signal,
                            validationSource: "field"
                          },
                          type: "validateAsync"
                        })
                      );
                    } catch (_) {
                      F(_);
                    }
                  },
                  p.debounceMs
                );
              });
            } catch (M) {
              b = M;
            }
            if (g.signal.aborted) return O(void 0);
            const E = Li(b), N = i[this.name]?.[m], { newErrorValue: S, newSource: x } = Vi({
              formLevelError: N,
              fieldLevelError: E
            });
            h.setMeta((M) => ({
              ...M,
              errorMap: {
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                ...M?.errorMap,
                [m]: S
              },
              errorSourceMap: {
                ...M.errorSourceMap,
                [m]: x
              }
            })), O(S);
          })
        );
      };
      for (const h of s)
        h.validate && u(this, h, c);
      for (const h of a)
        h.validate && u(
          h.field,
          h,
          l
        );
      let d = [];
      (c.length || l.length) && (d = await Promise.all(c), await Promise.all(l)), this.setMeta((h) => ({ ...h, isValidating: !1 }));
      for (const h of o)
        h.setMeta((p) => ({ ...p, isValidating: !1 }));
      return d.filter(Boolean);
    }, this.validate = (r, n) => {
      if (!this.state.meta.isTouched) return [];
      const { fieldsErrorMap: s } = n?.skipFormValidation ? { fieldsErrorMap: {} } : this.form.validateSync(r), { hasErrored: i } = this.validateSync(
        r,
        s[this.name] ?? {}
      );
      if (i && !this.options.asyncAlways)
        return this.getInfo().validationMetaMap[br(r)]?.lastAbortController.abort(), this.state.meta.errors;
      const o = n?.skipFormValidation ? Promise.resolve({}) : this.form.validateAsync(r);
      return this.validateAsync(r, o);
    }, this.handleChange = (r) => {
      this.setValue(r);
    }, this.handleBlur = () => {
      this.state.meta.isTouched || this.setMeta((n) => ({ ...n, isTouched: !0 })), this.state.meta.isBlurred || this.setMeta((n) => ({ ...n, isBlurred: !0 })), this.validate("blur"), this.triggerOnBlurListener();
    }, this.parseValueWithSchema = (r) => bt.validate(
      { value: this.state.value, validationSource: "field" },
      r
    ), this.parseValueWithSchemaAsync = (r) => bt.validateAsync(
      { value: this.state.value, validationSource: "field" },
      r
    ), this.form = t.form, this.name = t.name, this.timeoutIds = {
      validations: {},
      listeners: {},
      formListeners: {}
    }, this.store = new Pe({
      deps: [this.form.store],
      fn: () => {
        const r = this.form.getFieldValue(this.name), n = this.form.getFieldMeta(this.name) ?? {
          ...Qr,
          ...t.defaultMeta
        };
        return {
          value: r,
          meta: n
        };
      }
    }), this.options = t;
  }
  /**
   * The current field state.
   */
  get state() {
    return this.store.state;
  }
  /**
   * @private
   */
  runValidator(t) {
    return _a(t.validate) ? bt[t.type](
      t.value,
      t.validate
    ) : t.validate(t.value);
  }
  /**
   * Updates the field's errorMap
   */
  setErrorMap(t) {
    this.setMeta((r) => ({
      ...r,
      errorMap: {
        ...r.errorMap,
        ...t
      }
    }));
  }
  triggerOnBlurListener() {
    const t = this.form.options.listeners?.onBlurDebounceMs;
    t && t > 0 ? (this.timeoutIds.formListeners.blur && clearTimeout(this.timeoutIds.formListeners.blur), this.timeoutIds.formListeners.blur = setTimeout(() => {
      this.form.options.listeners?.onBlur?.({
        formApi: this.form,
        fieldApi: this
      });
    }, t)) : this.form.options.listeners?.onBlur?.({
      formApi: this.form,
      fieldApi: this
    });
    const r = this.options.listeners?.onBlurDebounceMs;
    r && r > 0 ? (this.timeoutIds.listeners.blur && clearTimeout(this.timeoutIds.listeners.blur), this.timeoutIds.listeners.blur = setTimeout(() => {
      this.options.listeners?.onBlur?.({
        value: this.state.value,
        fieldApi: this
      });
    }, r)) : this.options.listeners?.onBlur?.({
      value: this.state.value,
      fieldApi: this
    });
  }
  /**
   * @private
   */
  triggerOnChangeListener() {
    const t = this.form.options.listeners?.onChangeDebounceMs;
    t && t > 0 ? (this.timeoutIds.formListeners.change && clearTimeout(this.timeoutIds.formListeners.change), this.timeoutIds.formListeners.change = setTimeout(() => {
      this.form.options.listeners?.onChange?.({
        formApi: this.form,
        fieldApi: this
      });
    }, t)) : this.form.options.listeners?.onChange?.({
      formApi: this.form,
      fieldApi: this
    });
    const r = this.options.listeners?.onChangeDebounceMs;
    r && r > 0 ? (this.timeoutIds.listeners.change && clearTimeout(this.timeoutIds.listeners.change), this.timeoutIds.listeners.change = setTimeout(() => {
      this.options.listeners?.onChange?.({
        value: this.state.value,
        fieldApi: this
      });
    }, r)) : this.options.listeners?.onChange?.({
      value: this.state.value,
      fieldApi: this
    });
  }
}
function Li(e) {
  if (e)
    return e;
}
function br(e) {
  switch (e) {
    case "submit":
      return "onSubmit";
    case "blur":
      return "onBlur";
    case "mount":
      return "onMount";
    case "server":
      return "onServer";
    case "dynamic":
      return "onDynamic";
    case "change":
    default:
      return "onChange";
  }
}
class Wr {
  /**
   * Constructs a new `FieldGroupApi` instance with the given form options.
   */
  constructor(t) {
    if (this.getFormFieldName = (r) => {
      if (typeof this.fieldsMap == "string")
        return Ii(this.fieldsMap, r);
      const n = pn(r)[0];
      if (typeof n != "string")
        return "";
      const s = r.slice(n.length), i = (
        // TFields is either a string or this. See guard above.
        this.fieldsMap[n]
      );
      return Ii(i, s);
    }, this.getFormFieldOptions = (r) => {
      const n = { ...r }, s = n.validators;
      if (n.name = this.getFormFieldName(r.name), s && (s.onChangeListenTo || s.onBlurListenTo)) {
        const i = { ...s }, o = (a) => {
          if (a)
            return a.map(
              (c) => this.getFormFieldName(c)
            );
        };
        i.onChangeListenTo = o(
          s.onChangeListenTo
        ), i.onBlurListenTo = o(s.onBlurListenTo), n.validators = i;
      }
      return n;
    }, this.mount = () => this.store.mount(), this.validateArrayFieldsStartingFrom = async (r, n, s) => this.form.validateArrayFieldsStartingFrom(
      this.getFormFieldName(r),
      n,
      s
    ), this.validateField = (r, n) => this.form.validateField(this.getFormFieldName(r), n), this.getFieldValue = (r) => this.form.getFieldValue(this.getFormFieldName(r)), this.getFieldMeta = (r) => this.form.getFieldMeta(this.getFormFieldName(r)), this.setFieldMeta = (r, n) => this.form.setFieldMeta(this.getFormFieldName(r), n), this.setFieldValue = (r, n, s) => this.form.setFieldValue(
      this.getFormFieldName(r),
      n,
      s
    ), this.deleteField = (r) => this.form.deleteField(this.getFormFieldName(r)), this.pushFieldValue = (r, n, s) => this.form.pushFieldValue(
      this.getFormFieldName(r),
      // since unknown doesn't extend an array, it types `value` as never.
      n,
      s
    ), this.insertFieldValue = async (r, n, s, i) => this.form.insertFieldValue(
      this.getFormFieldName(r),
      n,
      // since unknown doesn't extend an array, it types `value` as never.
      s,
      i
    ), this.replaceFieldValue = async (r, n, s, i) => this.form.replaceFieldValue(
      this.getFormFieldName(r),
      n,
      // since unknown doesn't extend an array, it types `value` as never.
      s,
      i
    ), this.removeFieldValue = async (r, n, s) => this.form.removeFieldValue(this.getFormFieldName(r), n, s), this.swapFieldValues = (r, n, s, i) => this.form.swapFieldValues(
      this.getFormFieldName(r),
      n,
      s,
      i
    ), this.moveFieldValues = (r, n, s, i) => this.form.moveFieldValues(
      this.getFormFieldName(r),
      n,
      s,
      i
    ), this.clearFieldValues = (r, n) => this.form.clearFieldValues(this.getFormFieldName(r), n), this.resetField = (r) => this.form.resetField(this.getFormFieldName(r)), this.validateAllFields = (r) => this.form.validateAllFields(r), t.form instanceof Wr) {
      const r = t.form;
      if (this.form = r.form, typeof t.fields == "string")
        this.fieldsMap = r.getFormFieldName(t.fields);
      else {
        const n = {
          ...t.fields
        };
        for (const s in n)
          n[s] = r.getFormFieldName(n[s]);
        this.fieldsMap = n;
      }
    } else
      this.form = t.form, this.fieldsMap = t.fields;
    this.store = new Pe({
      deps: [this.form.store],
      fn: ({ currDepVals: r }) => {
        const n = r[0];
        let s;
        if (typeof this.fieldsMap == "string")
          s = He(n.values, this.fieldsMap);
        else {
          s = {};
          const i = this.fieldsMap;
          for (const o in i)
            s[o] = He(n.values, i[o]);
        }
        return {
          values: s
        };
      }
    });
  }
  get state() {
    return this.store.state;
  }
  async handleSubmit(t) {
    return this.form.handleSubmit(t);
  }
}
function Hs(e, t = (r) => r) {
  return Sa.useSyncExternalStoreWithSelector(
    e.subscribe,
    () => e.state,
    () => e.state,
    t,
    eh
  );
}
function eh(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [n, s] of e)
      if (!t.has(n) || !Object.is(s, t.get(n))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const n of e)
      if (!t.has(n)) return !1;
    return !0;
  }
  if (e instanceof Date && t instanceof Date)
    return e.getTime() === t.getTime();
  const r = Bi(e);
  if (r.length !== Bi(t).length)
    return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Object.is(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
function Bi(e) {
  return Object.keys(e).concat(
    Object.getOwnPropertySymbols(e)
  );
}
const Ht = typeof window < "u" ? C.useLayoutEffect : C.useEffect;
function th(e) {
  const [t] = C.useState(() => {
    const n = new Zf({
      ...e,
      form: e.form,
      name: e.name
    });
    return n.Field = Fa, n;
  });
  return Ht(t.mount, [t]), Ht(() => {
    t.update(e);
  }), Hs(
    t.store,
    e.mode === "array" ? (r) => [
      r.meta,
      Object.keys(r.value ?? []).length
    ] : void 0
  ), t;
}
const Fa = ({
  children: e,
  ...t
}) => {
  const r = th(t), n = C.useMemo(
    () => or(e, r),
    /**
     * The reason this exists is to fix an issue with the React Compiler.
     * Namely, functionalUpdate is memoized where it checks for `fieldApi`, which is a static type.
     * This means that when `state.value` changes, it does not trigger a re-render. The useMemo explicitly fixes this problem
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, r, r.state.value, r.state.meta]
  );
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: n });
};
function rh({
  form: e,
  selector: t,
  children: r
}) {
  const n = Hs(e.store, t);
  return or(r, n);
}
function nh(e) {
  const [t] = C.useState(() => {
    const r = new Xf(e), n = r;
    return n.Field = function(i) {
      return /* @__PURE__ */ f.jsx(Fa, { ...i, form: r });
    }, n.Subscribe = function(i) {
      return /* @__PURE__ */ f.jsx(
        rh,
        {
          form: r,
          selector: i.selector,
          children: i.children
        }
      );
    }, n;
  });
  return Ht(t.mount, []), Ht(() => {
    t.update(e);
  }), t;
}
function sh({
  lens: e,
  selector: t,
  children: r
}) {
  const n = Hs(e.store, t);
  return or(r, n);
}
function ih(e) {
  const [t] = C.useState(() => {
    const r = new Wr(e), n = e.form instanceof Wr ? e.form.form : e.form, s = r;
    return s.AppForm = function(o) {
      return /* @__PURE__ */ f.jsx(n.AppForm, { ...o });
    }, s.AppField = function(o) {
      return /* @__PURE__ */ f.jsx(n.AppField, { ...t.getFormFieldOptions(o) });
    }, s.Field = function(o) {
      return /* @__PURE__ */ f.jsx(n.Field, { ...t.getFormFieldOptions(o) });
    }, s.Subscribe = function(o) {
      return /* @__PURE__ */ f.jsx(
        sh,
        {
          lens: t,
          selector: o.selector,
          children: o.children
        }
      );
    }, Object.assign(s, {
      ...e.formComponents
    });
  });
  return Ht(t.mount, [t]), t;
}
const Ui = C.createContext(null), qi = C.createContext(null);
function oh() {
  function e() {
    const r = C.useContext(Ui);
    if (!r)
      throw new Error(
        "`fieldContext` only works when within a `fieldComponent` passed to `createFormHook`"
      );
    return r;
  }
  function t() {
    const r = C.useContext(qi);
    if (!r)
      throw new Error(
        "`formContext` only works when within a `formComponent` passed to `createFormHook`"
      );
    return r;
  }
  return { fieldContext: Ui, useFieldContext: e, useFormContext: t, formContext: qi };
}
function ah({
  fieldComponents: e,
  fieldContext: t,
  formContext: r,
  formComponents: n
}) {
  function s(a) {
    const c = nh(a), l = C.useMemo(() => ({ children: p }) => /* @__PURE__ */ f.jsx(r.Provider, { value: c, children: p }), [c]), u = C.useMemo(() => ({ children: p, ...v }) => /* @__PURE__ */ f.jsx(c.Field, { ...v, children: (m) => (
      // eslint-disable-next-line @eslint-react/no-context-provider
      /* @__PURE__ */ f.jsx(t.Provider, { value: m, children: p(Object.assign(m, e)) })
    ) }), [c]);
    return C.useMemo(() => Object.assign(c, {
      AppField: u,
      AppForm: l,
      ...n
    }), [c, u, l]);
  }
  function i({
    render: a,
    props: c
  }) {
    return (l) => a({ ...c, ...l });
  }
  function o({
    render: a,
    props: c,
    defaultValues: l
  }) {
    return function(d) {
      const h = C.useMemo(() => ({
        form: d.form,
        fields: d.fields,
        defaultValues: l,
        formComponents: n
      }), [d.form, d.fields]), p = ih(h);
      return a({ ...c, ...d, group: p });
    };
  }
  return {
    useAppForm: s,
    withForm: i,
    withFieldGroup: o
  };
}
const { fieldContext: zi, useFieldContext: ar, formContext: gs } = oh(), ut = () => C.useContext(gs), ch = "_-_-forms-src-components-collections-view-OJbl", uh = "_-_-forms-src-components-collections-items-egiS", lh = "_-_-forms-src-components-collections-item-YocW", dh = "_-_-forms-src-components-collections-item-content-IklM", fh = "_-_-forms-src-components-collections-item-controls--nxf", hh = "_-_-forms-src-components-collections-add-item-wb-8", mh = "_-_-forms-src-components-collections-no-data-view-h8N8", ze = {
  view: ch,
  items: uh,
  item: lh,
  itemContent: dh,
  itemControls: fh,
  addItem: hh,
  noDataView: mh
}, Ir = Symbol("newCollectionItemId"), Hi = C.createContext(void 0);
class Lt extends Ro {
  static ON_CHANGED = "on.changed";
  addOnChangedListener(t, r) {
    this.on(Lt.ON_CHANGED, t, r);
  }
  removeOnChangedListener(t, r) {
    this.off(Lt.ON_CHANGED, t, r);
  }
  fireChanged() {
    this.fire(Lt.ON_CHANGED);
  }
}
function ft(e) {
  let t = e[Ir];
  if (!t) {
    const r = e;
    r[Ir] = Q.uniqueId("id-"), t = r[Ir];
  }
  return t.toString();
}
const ph = ({
  label: e,
  required: t,
  children: r,
  createNewItem: n,
  renderFormLabel: s,
  renderAddButton: i,
  renderSkeleton: o,
  renderDeleteButton: a,
  renderNoDataView: c = () => /* @__PURE__ */ f.jsx("div", { className: ze.noDataView, children: "Нет данных" }),
  name: l,
  addItemText: u = "Создать",
  appendNewToBegin: d = !0,
  maxCount: h,
  onAdded: p,
  onChanged: v,
  canRemoveItem: m = () => !0,
  removeItemTooltipText: y = "Удалить"
}) => {
  const g = C.useRef({}), O = ut(), b = O.isLoading(), E = C.useRef(null), N = C.useId(), [S, x] = C.useState(null), M = C.useRef(/* @__PURE__ */ new Map()), F = C.useRef(!1), _ = (I, ...D) => {
    const T = M.current.get(ft(I));
    v?.(I), T && T.fireChanged();
  }, w = C.useCallback(
    ({
      children: I,
      name: D,
      ...T
    }) => {
      const { index: $, item: L, itemsChanging: z } = C.useContext(Hi);
      return /* @__PURE__ */ f.jsx(
        O.Field,
        {
          ...T,
          listeners: {
            onChange: (...U) => z ? void 0 : _(L, ...U)
          },
          name: `${l}[${$}].${D}`,
          children: I
        }
      );
    },
    [O]
  ), A = C.useCallback(
    (I) => n ? h !== void 0 && I ? I.length <= h - 1 : !0 : !1,
    [n, h]
  );
  function k(I, D) {
    const T = ft(I);
    if (!g.current[T]) {
      let $ = M.current.get(T);
      $ || ($ = new Lt(), M.current.set(T, $));
      const L = {
        ...O,
        addOnChangedListener(z, U) {
          $.addOnChangedListener(z, U);
        },
        removeOnChangedListener(z, U) {
        },
        deleteField: (z) => {
          O.deleteField(`${l}[${D}].${z}`);
        },
        setFieldValue: (z, U, K) => {
          O.setFieldValue(`${l}[${D}].${z}`, U, K);
        },
        getFieldValue: (z) => O.getFieldValue(`${l}[${D}].${z}`),
        useFieldValue: (z) => O.useFieldValue(`${l}[${D}].${z}`)
      };
      L.Field = w, g.current[T] = L;
    }
    return r(g.current[T]);
  }
  function j(I, D, T) {
    O.pauseValidation(), F.current = !0, I.removeValue(T), g.current = {}, O.resumeValidation(), setTimeout(() => {
      F.current = !1;
    }, 0);
  }
  function R(I, D) {
    const T = Q.cloneDeep(D());
    I.state.value || I.setValue([]), F.current = !0, g.current = {}, O.pauseValidation();
    const $ = Q.uniqueId("new-");
    I.pushValue(T), T[Ir] = $, x($), p?.(T), O.resumeValidation(), setTimeout(() => {
      F.current = !1;
    }, 0);
  }
  C.useEffect(() => {
    if (E.current && S) {
      const I = E.current.querySelector(`[data-id="${S}"]`);
      I && zc(I, {
        block: "start",
        behavior: "smooth",
        threshold: 0.95
      }), x(null);
    }
  }, [E.current, S]);
  function V(I, D) {
    const T = ft(I.item), $ = ft(D.item);
    return T.indexOf("new-") !== -1 && $.indexOf("new-") === -1 ? d ? -1 : 1 : $.indexOf("new-") !== -1 && T.indexOf("new-") === -1 ? d ? 1 : -1 : $.indexOf("new-") !== -1 && T.indexOf("new-") !== -1 ? parseInt($.replace("new-", "")) - parseInt(T.replace("new-", "")) : 0;
  }
  return b ? o() : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    s({
      required: t,
      id: N,
      label: e
    }),
    /* @__PURE__ */ f.jsx("div", { className: ze.view, ref: E, children: /* @__PURE__ */ f.jsx(O.Field, { name: l, mode: "array", children: (I) => /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      A(I.state.value) && /* @__PURE__ */ f.jsx("div", { className: ze.addItem, children: i({
        onClick: n ? () => R(I, n) : Q.noop,
        addItemText: u
      }) }),
      I.state.value && !Q.isEmpty(I.state.value) ? /* @__PURE__ */ f.jsx("div", { className: ze.items, children: I.state.value.map((D, T) => ({
        item: D,
        index: T,
        itemsChanging: F.current
      })).sort(V).map((D) => /* @__PURE__ */ f.jsxs("div", { "data-id": ft(D.item), className: ze.item, children: [
        /* @__PURE__ */ f.jsx("div", { className: ze.itemContent, children: /* @__PURE__ */ f.jsx(Hi.Provider, { value: D, children: k(D.item, D.index) }) }),
        /* @__PURE__ */ f.jsx("div", { className: ze.itemControls, children: m(D.item) && /* @__PURE__ */ f.jsx("div", { className: ze.removeControl, children: a({
          tooltip: y,
          onClick: () => j(I, D.item, D.index)
        }) }) })
      ] }, ft(D.item))) }) : c()
    ] }) }) })
  ] });
}, yh = ({ children: e, disabled: t = !1 }) => {
  const r = ut();
  return /* @__PURE__ */ f.jsx(
    r.Subscribe,
    {
      selector: (n) => ({
        isSubmitting: n.isSubmitting
      }),
      children: ({ isSubmitting: n }) => e({
        isSubmitting: n,
        disabled: t,
        loading: r.isLoading(),
        formId: r.id
      })
    }
  );
};
function vh(e, t) {
  return Do(e) ? void 0 : "Поле обязательное";
}
function gh(e, t, r) {
  return Q.size(e) < r ? `Поле не может быть короче ${r} символов` : void 0;
}
function bh(e, t, r) {
  return Q.size(e) > r ? `Поле не может быть длиннее ${r} символов` : void 0;
}
function Sh(e, t, r) {
  return e < r ? `Поле не может быть меньше ${r}` : void 0;
}
function xh(e, t, r) {
  return e > r ? `Поле не может быть больше ${r}` : void 0;
}
function wh() {
  return ["required", "minLength", "maxLength", "min", "max"];
}
function Eh() {
  const e = ["required"];
  return wh().filter((t) => !e.includes(t));
}
function kh(e) {
  switch (e) {
    case "required":
      return vh;
    case "minLength":
      return gh;
    case "maxLength":
      return bh;
    case "min":
      return Sh;
    case "max":
      return xh;
    default:
      return;
  }
}
function Mh(e, t, r) {
  const n = C.useMemo(() => er(r).reduce(
    (i, o) => {
      const a = kh(o);
      return a && i.push(({ value: c }) => a(c, t, r[o])), i;
    },
    []
  ), [r]), s = C.useMemo(() => {
    const i = [];
    if (e.getFieldValidator(t)) {
      const o = e.getFieldValidator(t);
      i.push(o);
    }
    return i;
  }, [r]);
  return {
    onChangeAsync: async (i) => {
      let o;
      for (let a = 0; a < s.length; a++)
        if (o = await s[a](i), o)
          return o;
      return o;
    },
    onChange: (i) => {
      let o;
      for (let a = 0; a < n.length; a++)
        if (o = n[a](i), o)
          return o;
      return o;
    }
  };
}
function yn() {
  const e = ar(), t = C.useMemo(() => Q.isEmpty(e.state.meta.errors) ? void 0 : e.state.meta.errors.map((n) => n).join(`
`), [e.state.meta.errors]);
  return {
    hasErrors: C.useMemo(() => !Q.isEmpty(e.state.meta.errors), [e.state.meta.errors]),
    errorMessage: t
  };
}
function Oa({
  resetOnDisabled: e,
  resetOnHid: t,
  disabled: r,
  visible: n,
  fieldApi: s
}) {
  C.useEffect(() => {
    e && r === !0 && s.unset();
  }, [e, r, s]), C.useEffect(() => {
    t && n === !1 && s.unset();
  }, [t, n, s]);
}
function _h(e, t = (r) => r) {
  return Sa.useSyncExternalStoreWithSelector(
    e.subscribe,
    () => e.state,
    () => e.state,
    t,
    Fh
  );
}
function Fh(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [n, s] of e)
      if (!t.has(n) || !Object.is(s, t.get(n))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const n of e)
      if (!t.has(n)) return !1;
    return !0;
  }
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Object.is(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const Oh = "_-_-forms-src-errorsView-w1ox", Ch = {
  errorsView: Oh
};
function Qi(e) {
  return e.unset || (e.unset = () => {
    e.setValue(void 0), delete e.__humanReadableValue, e.options.listeners?.onChange?.({
      value: void 0,
      fieldApi: e
    });
  }), e.originalRunValidator || (e.originalRunValidator = e.runValidator, e.runValidator = (...t) => {
    if (!e.form.skipValidation)
      return e.originalRunValidator(...t);
  }), e.setHumanReadableValue || (e.setHumanReadableValue = (t) => {
    e.__humanReadableValue = t;
  }), e.getHumanReadableValue || (e.getHumanReadableValue = () => e.__humanReadableValue ?? Q.toString(e.state.value)), e;
}
function Wi(e) {
  if (mi(e, "fieldValidators") || $s(e, "fieldValidators", {}), !mi(e, "fieldValidators"))
    throw new Me("Не заданы fieldValidators");
}
const Nh = ({
  onApply: e,
  onComplete: t,
  onError: r,
  className: n,
  children: s,
  data: i,
  formComponents: o,
  fieldComponents: a
}, c) => {
  const [l, u] = C.useState(), d = C.useRef(!1), [h, p] = C.useState(i), [, v] = C.useReducer(() => ({}), {}), m = C.useId(), y = C.useMemo(() => l ? We(l, "message") : void 0, [l]), { useAppForm: g } = ah({
    fieldComponents: a,
    formComponents: o,
    fieldContext: zi,
    formContext: gs
  }), O = g({
    defaultValues: h,
    asyncDebounceMs: 0,
    onSubmit: async ({ value: _, formApi: w }) => {
      u(void 0);
      try {
        await e(_, w.options.defaultValues || {}), t?.();
      } catch (A) {
        if (A instanceof ts)
          r ? r?.(A) : u(A);
        else
          throw A;
      }
    }
  }), b = C.useMemo(() => Object.assign(O, {
    useFieldValue(_) {
      return _h(O.store, (w) => He(w.values, _));
    },
    setFieldValidator(_, w) {
      Wi(O), O.fieldValidators[_] = w;
    },
    getFieldValidator(_) {
      return Wi(O), O.fieldValidators[_];
    },
    pauseValidation() {
      O.skipValidation = !0, O.skipValidationDelayTimerId && (clearTimeout(O.skipValidationDelayTimerId), delete O.skipValidationDelayTimerId);
    },
    resumeValidation() {
      O.skipValidationDelayTimerId = setTimeout(() => {
        delete O.skipValidation, delete O.skipValidationDelayTimerId;
      }, 50);
    },
    setValues: (_) => {
      p(_);
    },
    isLoading: () => !!d.current,
    setLoading: (_) => {
      d.current = _, v();
    }
  }), [O, d, v]), E = C.useCallback(
    (_) => {
      _.preventDefault(), _.stopPropagation(), b.handleSubmit();
    },
    [b]
  ), N = C.useCallback(
    (_) => {
      _.key === "Enter" && b.handleSubmit();
    },
    [b]
  ), S = Eh(), x = C.useMemo(() => ({ children: _, name: w, defaultValue: A, ...k }) => {
    const j = Mh(b, w, k), R = C.useMemo(() => {
      if (A != null) {
        const D = b.getFieldValue(w);
        return Do(D) ? D : A;
      }
    }, [w, b, A]), V = Q.omit(k, S), I = C.useMemo(
      () => Object.fromEntries(
        Object.entries(a).map(([D, T]) => [
          D,
          ($) => T({ size: "medium", ...V, ...$ })
        ])
      ),
      [b]
    );
    return /* @__PURE__ */ f.jsx(b.Field, { ...k, defaultValue: R, name: w, validators: j, children: (D) => /* @__PURE__ */ f.jsx(zi.Provider, { value: Qi(D), children: C.cloneElement(C.Children.only(_(Object.assign(Qi(D), I))), {
      name: w,
      ...V
    }) }) });
  }, [b]), M = C.useMemo(() => ({ ...b, id: m, Field: x }), [b, x, m]);
  C.useImperativeHandle(c, () => M, [M]);
  const F = C.useMemo(() => ({ children: _ }) => /* @__PURE__ */ f.jsx(gs.Provider, { value: M, children: _ }), [b]);
  return /* @__PURE__ */ f.jsx("form", { id: m, className: n, onSubmit: E, onKeyUp: N, children: /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    y ? /* @__PURE__ */ f.jsx("div", { className: Ch.errorsView, children: y }) : void 0,
    /* @__PURE__ */ f.jsx(F, { children: s ? s(M) : null }),
    /* @__PURE__ */ f.jsx("input", { type: "submit", hidden: !0 })
  ] }) });
}, Ah = C.forwardRef(Nh), jh = ({
  dataProvider: e,
  children: t,
  onError: r,
  fallback: n
}, s) => {
  const [i, o] = C.useState(void 0), [a, c] = C.useState(!0), [l, u] = C.useState(void 0), d = ut(), h = C.useCallback(
    (p = !1) => {
      p && c(!0), Promise.resolve(e()).then(
        (v) => {
          o(v);
        },
        (v) => {
          u(v);
        }
      ).finally(() => c(!1));
    },
    [e]
  );
  if (C.useEffect(() => {
    h();
  }, [h]), C.useEffect(() => {
    d && d.setLoading(a);
  }, [a, d]), C.useImperativeHandle(s, () => ({
    refresh: () => h(!0)
  })), l) {
    if (r)
      return r(l);
    throw l;
  }
  return a && n ? C.Children.only(n) : /* @__PURE__ */ f.jsx(Af, { loading: a, children: t(i, a) });
}, Ca = C.forwardRef(jh);
var Na = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], s = 0; s < arguments.length; s++) {
        var i = arguments[s];
        if (i) {
          var o = typeof i;
          if (o === "string" || o === "number")
            n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var a = r.apply(null, i);
              a && n.push(a);
            }
          } else if (o === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              n.push(i.toString());
              continue;
            }
            for (var c in i)
              t.call(i, c) && i[c] && n.push(c);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Na);
var Ph = Na.exports;
const _e = /* @__PURE__ */ qe(Ph), Rh = "src-shared-ui-loadings-indicators-skeleton-te1L", Th = "src-shared-ui-loadings-indicators-skeleton-inline-EgKm", Ih = "src-shared-ui-loadings-indicators-checkbox-skeleton-container-NHpi", Dh = "src-shared-ui-loadings-indicators-checkbox-skeleton-dqBS", Vh = "src-shared-ui-loadings-indicators-radio-skeleton-container--6Vs", $h = "src-shared-ui-loadings-indicators-radio-skeleton-j4Lp", Lh = "src-shared-ui-loadings-indicators-centered-tpYU", Bh = "src-shared-ui-loadings-indicators-list-kvwQ", Ge = {
  skeleton: Rh,
  skeletonInline: Th,
  checkboxSkeletonContainer: Ih,
  checkboxSkeleton: Dh,
  radioSkeletonContainer: Vh,
  radioSkeleton: $h,
  centered: Lh,
  list: Bh
}, Uh = ({ centered: e = !0, loading: t, ...r }) => /* @__PURE__ */ f.jsx("div", { className: _e({ [Ge.centered]: e }), children: t && /* @__PURE__ */ f.jsx(H.Loader, { size: 64, variant: "accent", ...r }) }), te = ({
  children: e,
  width: t,
  height: r = 14,
  borderRadius: n = 4,
  borderTopLeftRadius: s,
  borderTopRightRadius: i,
  borderBottomLeftRadius: o,
  borderBottomRightRadius: a,
  inline: c = !1,
  additionalClass: l = "",
  loading: u = !0
}) => {
  const d = u || zs(), h = [
    n,
    o,
    a,
    s,
    i
  ].includes("halfHeight");
  return d ? /* @__PURE__ */ f.jsx(
    "div",
    {
      className: _e(Ge.skeleton, l, { [Ge.skeletonInline]: c }),
      style: l ? {} : Object.fromEntries(
        Object.entries({
          width: t,
          height: r,
          ...h ? { borderRadius: "halfHeight" } : {
            borderRadius: n,
            borderTopLeftRadius: s,
            borderTopRightRadius: i,
            borderBottomLeftRadius: o,
            borderBottomRightRadius: a
          }
        }).filter((p) => p[1] !== void 0).map((p) => p[1] === "halfHeight" ? [p[0], 99999] : p)
      )
    }
  ) : /* @__PURE__ */ f.jsx(f.Fragment, { children: e });
}, Qs = ({
  count: e = 5,
  renderItem: t = () => /* @__PURE__ */ f.jsx(te, {})
}) => /* @__PURE__ */ f.jsx("div", { className: Ge.list, children: Array.from(new Array(e)).map((r, n) => /* @__PURE__ */ f.jsx("div", { children: t(n) }, n)) }), qh = () => /* @__PURE__ */ f.jsx("div", { className: Ge.checkboxSkeletonContainer, children: /* @__PURE__ */ f.jsx(te, { loading: !0, additionalClass: Ge.checkboxSkeleton }) }), zh = () => /* @__PURE__ */ f.jsx("div", { className: Ge.radioSkeletonContainer, children: /* @__PURE__ */ f.jsx(te, { additionalClass: Ge.radioSkeleton, loading: !0 }) }), Hh = "src-shared-ui-blocks-view-agA9", Qh = "src-shared-ui-blocks-header-vB5t", Wh = "src-shared-ui-blocks-info-q7Gn", Yh = "src-shared-ui-blocks-info-header-Utjj", Gh = "src-shared-ui-blocks-info-primary-1RfV", Kh = "src-shared-ui-blocks-info-secondary-ZaOS", Jh = "src-shared-ui-blocks-info--tetriary-dk7g", se = {
  view: Hh,
  header: Qh,
  info: Wh,
  infoHeader: Yh,
  infoPrimary: Gh,
  infoSecondary: Kh,
  infoTetriary: Jh
}, Xh = () => /* @__PURE__ */ f.jsx("div", { className: se.view, children: /* @__PURE__ */ f.jsxs("div", { className: se.header, children: [
  /* @__PURE__ */ f.jsx("div", { className: se.avatar, children: /* @__PURE__ */ f.jsx(te, { width: 40, height: 40 }) }),
  /* @__PURE__ */ f.jsxs("div", { className: se.info, children: [
    /* @__PURE__ */ f.jsx("div", { className: se.infoHeader, children: /* @__PURE__ */ f.jsx("div", { className: se.infoPrimary, children: /* @__PURE__ */ f.jsx(te, {}) }) }),
    /* @__PURE__ */ f.jsx("div", { className: se.infoTetriary, children: /* @__PURE__ */ f.jsx(te, { width: 150 }) })
  ] })
] }) }), Yr = ({
  actions: e,
  name: t,
  avatar: r,
  position: n,
  department: s
}) => /* @__PURE__ */ f.jsx("div", { className: se.view, children: /* @__PURE__ */ f.jsxs("div", { className: se.header, children: [
  /* @__PURE__ */ f.jsx("div", { className: se.avatar, children: /* @__PURE__ */ f.jsx(H.Avatar, { name: t, imgSrc: r, shape: "circle" }) }),
  /* @__PURE__ */ f.jsxs("div", { className: se.info, children: [
    /* @__PURE__ */ f.jsxs("div", { className: se.infoHeader, children: [
      /* @__PURE__ */ f.jsx("div", { className: se.infoPrimary, children: t }),
      e && /* @__PURE__ */ f.jsx("div", { className: se.infoActions, children: e })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { children: [
      n && s ? /* @__PURE__ */ f.jsx("div", { className: se.infoSecondary, children: n }) : /* @__PURE__ */ f.jsx("div", { className: se.infoTetriary, children: n }),
      s && /* @__PURE__ */ f.jsx("div", { className: se.infoTetriary, children: s })
    ] })
  ] })
] }) });
Yr.Skeleton = Xh;
const Ws = ({ children: e, size: t = "m", buttonStyle: r = "accent", mode: n = "primary", displayAs: s = "button", ...i }) => (
  // @ts-expect-error неправильный тип для rest
  /* @__PURE__ */ f.jsx(H.Button, { mode: n, size: t, buttonStyle: r, displayAs: s, ...i, children: e })
), X = ({ color: e, name: t, prefix: r = "hcm", size: n = "small" }) => {
  if (!t)
    return null;
  const s = `#icon-${r}-${t}`, i = n !== "auto" ? `svg-icon svg-icon-${n}` : "svg-icon", o = C.useMemo(() => e ? {
    color: e
  } : {}, [e]);
  return /* @__PURE__ */ f.jsx("svg", { className: i, style: o, xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ f.jsx("use", { href: s }) });
}, Zh = "src-shared-ui-actions-action-text-BnS6", em = "src-shared-ui-actions-action-with-icon-YHdJ", In = {
  actionText: Zh,
  actionWithIcon: em
}, tm = ({
  onClick: e,
  mode: t = "tertiary",
  style: r = "accent",
  size: n = "s",
  iconName: s,
  iconColor: i,
  iconSize: o = "medium",
  children: a,
  className: c,
  ...l
}) => (
  // @ts-expect-error неправильно определяет buttonStyle почему-то
  /* @__PURE__ */ f.jsx(H.Button, { ...l, onClick: e, mode: t, size: n, buttonStyle: r, children: /* @__PURE__ */ f.jsxs("div", { className: In.actionWithIcon, children: [
    /* @__PURE__ */ f.jsx("span", { className: _e(In.actionIcon, c), children: /* @__PURE__ */ f.jsx(X, { size: o, color: i, name: s }) }),
    /* @__PURE__ */ f.jsx("span", { className: In.actionText, children: a })
  ] }) })
), rm = "src-shared-ui-no-data-view-IMQQ", nm = "src-shared-ui-no-data-text-6QkB", Yi = {
  view: rm,
  text: nm
}, sm = ({ children: e = "Нет данных", ...t }) => /* @__PURE__ */ f.jsx("div", { className: Yi.view, children: /* @__PURE__ */ f.jsx(H.Typography.Title, { variant: "subtitle", children: /* @__PURE__ */ f.jsx("div", { className: Yi.text, children: e }) }) }), im = "src-shared-ui-forms-items-checkbox-Ho5x", om = "src-shared-ui-forms-items-radio-xwuB", am = "src-shared-ui-forms-items-radio-group-gGJH", cm = "src-shared-ui-forms-items-horizontal-w6EI", um = "src-shared-ui-forms-items-vertical-A-mD", lm = "src-shared-ui-forms-items-is-errored--nrs", mt = {
  checkbox: im,
  radio: om,
  radioGroup: am,
  horizontal: cm,
  vertical: um,
  isErrored: lm
}, dm = ({ name: e = "", label: t, required: r, ...n }) => {
  const { hasErrors: s, errorMessage: i } = yn(), o = ar(), a = ut(), c = C.useCallback(
    (l) => {
      o.setValue(l);
    },
    [o]
  );
  return a.isLoading() ? /* @__PURE__ */ f.jsx(qh, {}) : /* @__PURE__ */ f.jsx("div", { className: mt.checkbox, children: /* @__PURE__ */ f.jsx(
    H.Checkbox,
    {
      name: e,
      value: o.state.value,
      onChange: c,
      ...n,
      error: s ? i : void 0,
      children: t
    }
  ) });
}, fm = "src-shared-ui-labels-label-nNBn", hm = "src-shared-ui-labels-error-suffix-lXX9", Dn = {
  label: fm,
  errorSuffix: hm
}, cr = ({ className: e, children: t, required: r, fontWeight: n, label: s, ...i }) => /* @__PURE__ */ f.jsxs("label", { className: _e(Dn.view, e), children: [
  /* @__PURE__ */ f.jsx(H.Typography.Label, { as: "div", ...i, fontWeight: "medium", children: s && /* @__PURE__ */ f.jsxs("div", { className: Dn.label, children: [
    s,
    " ",
    r ? /* @__PURE__ */ f.jsx("span", { className: Dn.errorSuffix, children: "*" }) : null
  ] }) }),
  t
] }), Aa = ({ className: e, layout: t = "vertical", disabled: r, name: n = "", labelProps: s, required: i, label: o, options: a, ...c }) => {
  const l = ar(), { hasErrors: u, errorMessage: d } = yn(), h = ut(), p = C.useCallback(
    (v) => {
      l.setValue(v);
    },
    [l]
  );
  return h.isLoading() ? /* @__PURE__ */ f.jsx(Qs, { count: a.length, renderItem: () => /* @__PURE__ */ f.jsx(zh, {}) }) : /* @__PURE__ */ f.jsx(cr, { ...s, required: i, label: o, children: /* @__PURE__ */ f.jsx(
    "span",
    {
      className: _e(mt.radioGroup, e, {
        [mt.vertical]: t === "vertical",
        [mt.horizontal]: t === "horizontal",
        [mt.isErrored]: u
      }),
      children: a.map(({ value: v, label: m, disabled: y }, g) => /* @__PURE__ */ f.jsx("span", { className: mt.radio, children: /* @__PURE__ */ f.jsx(
        H.Radio,
        {
          ...c,
          id: `${n}_${g}`,
          checked: l.state.value === v,
          onChange: p,
          name: n,
          value: v,
          disabled: !!r || y,
          error: u ? d : void 0,
          children: m
        }
      ) }, v))
    }
  ) });
}, ja = ({ labelProps: e, type: t, label: r, required: n, visible: s, resetOnHid: i, resetOnDisabled: o, disabled: a, ...c }) => {
  const l = ut(), { hasErrors: u, errorMessage: d } = yn(), h = ar(), p = C.useId();
  Oa({
    fieldApi: h,
    visible: s,
    resetOnHid: i,
    resetOnDisabled: o,
    disabled: a
  });
  const v = C.useCallback(
    (m) => {
      h.setValue(m);
    },
    [h]
  );
  return l.isLoading() ? /* @__PURE__ */ f.jsx(te, {}) : s !== !1 && /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsx(cr, { ...e, required: n, label: r, children: /* @__PURE__ */ f.jsx(
    H.TextInput,
    {
      error: u,
      helper: d,
      type: "text",
      value: h.state.value || "",
      onChange: v,
      disabled: a,
      ...c,
      id: p
    }
  ) }) });
}, mm = ({
  placeholder: e = "Поиск",
  size: t = "medium",
  ...r
}) => /* @__PURE__ */ f.jsx(ja, { ...r, placeholder: e, prefix: /* @__PURE__ */ f.jsx(X, { name: "search", size: t }) }), pm = ({
  children: e,
  disabled: t = !1,
  ...r
}) => /* @__PURE__ */ f.jsx(yh, { children: ({ isSubmitting: n, loading: s, disabled: i, formId: o }) => /* @__PURE__ */ f.jsx(
  Ws,
  {
    ...r,
    loading: n || s,
    disabled: i || s,
    type: "submit",
    form: o,
    children: e
  }
) }), ym = ({
  maxLength: e,
  showLimit: t,
  minHeight: r = 112,
  labelProps: n,
  label: s,
  required: i,
  visible: o,
  resetOnHid: a,
  resetOnDisabled: c,
  disabled: l,
  helper: u,
  ...d
}) => {
  const h = ut(), { hasErrors: p, errorMessage: v } = yn(), m = ar(), y = C.useId();
  Oa({
    fieldApi: m,
    visible: o,
    resetOnHid: a,
    resetOnDisabled: c,
    disabled: l
  });
  const g = C.useCallback(
    (O) => {
      m.setValue(O);
    },
    [m]
  );
  return h.isLoading() ? /* @__PURE__ */ f.jsx(te, { height: 122 }) : o !== !1 && /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsx(cr, { ...n, required: i, label: s, children: /* @__PURE__ */ f.jsx(
    H.TextArea,
    {
      error: p,
      helper: v || u,
      minHeight: r,
      showLimit: !0,
      maxLength: e,
      value: m.state.value || "",
      onChange: g,
      disabled: l,
      ...d,
      id: y
    }
  ) }) });
}, vm = {
  TextField: ja,
  TextAreaField: ym,
  SearchField: mm,
  RadioGroupField: Aa,
  CheckboxField: dm
}, gm = ({
  children: e,
  noDataView: t = "Нет данных",
  ...r
}) => /* @__PURE__ */ f.jsx(
  ph,
  {
    renderNoDataView: () => /* @__PURE__ */ f.jsx(sm, { children: t }),
    renderSkeleton: () => null,
    renderAddButton: ({ onClick: n, addItemText: s }) => /* @__PURE__ */ f.jsx(
      tm,
      {
        mode: "secondary",
        size: "s",
        style: "accent",
        iconName: "add-outlined",
        iconSize: "small",
        onClick: n,
        children: s
      }
    ),
    renderDeleteButton: ({ onClick: n, tooltip: s }) => /* @__PURE__ */ f.jsx(H.Tooltip, { text: s, children: /* @__PURE__ */ f.jsx(H.Button, { mode: "secondary", size: "s", buttonStyle: "negative", onClick: n, children: /* @__PURE__ */ f.jsx(X, { size: "small", name: "delete" }) }) }),
    renderFormLabel: ({ label: n, required: s, id: i }) => /* @__PURE__ */ f.jsx("label", { htmlFor: i, children: n }),
    ...r,
    children: e
  }
), bm = { SubmitButton: pm, CollectionField: gm }, Sm = ({
  children: e,
  ...t
}, r) => /* @__PURE__ */ f.jsx(
  Ah,
  {
    ...t,
    ref: r,
    formComponents: bm,
    fieldComponents: vm,
    children: e
  }
), xm = C.forwardRef(Sm), wm = ({
  items: e,
  getGroup: t,
  compareGroups: r = () => 0,
  renderItem: n,
  renderGroupHeader: s
}) => {
  const [i] = C.useState(() => t), o = C.useMemo(() => e.reduce(
    (a, c) => {
      const l = i(c);
      return a[l] || (a[l] = []), a[l].push(c), a;
    },
    {}
  ), [e, i]);
  return er(o).sort(r).map((a) => /* @__PURE__ */ f.jsxs("div", { children: [
    s(a),
    /* @__PURE__ */ f.jsx(f.Fragment, { children: o[a].map((c) => n(c)) })
  ] }, a));
}, Em = "src-shared-ui-infinite-scrolling-bottom-anchor-iWWT", Vn = {
  bottomAnchor: Em
}, Pa = ({
  children: e,
  getItems: t,
  noData: r,
  renderHeader: n,
  pageSize: s = 25,
  renderSkeleton: i = () => /* @__PURE__ */ f.jsx(te, {})
}) => {
  const o = C.useRef(!1), a = C.useRef(!1), [, c] = C.useReducer(() => ({}), {}), l = C.useRef(null), u = C.useRef(0), d = C.useCallback(
    async (m) => {
      a.current || o.current || (o.current = !0, c(), await Promise.resolve(t(u.current, s)).then((y) => {
        let g, O = !0;
        Q.isArray(y) ? (g = y, O = g.length >= s) : (g = y.items, O = y.hasMore), !(!O && (a.current = !0, g.length === 0)) && p({
          type: "ADD",
          payload: g
        });
      }).finally(() => {
        setTimeout(() => {
          o.current = !1, c(), m();
        }, 0);
      }));
    },
    [o, t, s]
  ), [h, p] = C.useReducer(
    (m, y) => y.type === "ADD" ? (u.current += y.payload.length, [...m, ...y.payload]) : (u.current = 0, d(() => {
      l.current && (v.disconnect(), v.observe(l.current));
    }), []),
    [],
    () => []
  ), v = C.useMemo(() => new IntersectionObserver((m, y) => {
    let g;
    m.some((O) => O.isIntersecting ? (g = O.target, !0) : !1) && d(() => {
      g && (y.disconnect(), y.observe(g));
    });
  }), [d, o]);
  return C.useEffect(() => (l.current && (v.observe(l.current), a.current = !1, p({
    type: "RESET",
    payload: []
  })), v.disconnect()), [v, l.current]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    !o.current && Q.isEmpty(h) ? r : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      n && /* @__PURE__ */ f.jsx("div", { className: Vn.header, children: n?.() }),
      /* @__PURE__ */ f.jsxs("div", { className: Vn.list, children: [
        e(h),
        o.current && i()
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: Vn.bottomAnchor, ref: l })
  ] });
}, Ra = ({ children: e, modalPosition: t, trigger: r }) => {
  const [n, s] = C.useState(!1), i = () => s(!0);
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    C.cloneElement(r, { onClick: i, key: "trigger" }),
    n && C.cloneElement(C.Children.only(e), {
      visible: n,
      onClose: () => s(!1),
      position: t,
      key: "modal"
    })
  ] });
}, km = "src-shared-ui-modals-content-NULx", Mm = {
  content: km
}, Ys = ({ position: e = "right-drawer", closeButtonStyle: t = "neutral", onClose: r, size: n = 620, children: s, visible: i, ...o }) => {
  const a = C.useCallback(
    (c) => {
      c || r?.();
    },
    [r]
  );
  return /* @__PURE__ */ f.jsx(
    H.Modal,
    {
      showCloseButton: !0,
      size: n,
      ...o,
      placement: e,
      open: !!i,
      onOpenChange: a,
      children: /* @__PURE__ */ f.jsx("div", { className: Mm.content, children: s })
    }
  );
}, _m = "src-shared-ui-modals-stacks-footer-9qKk", Fm = "src-shared-ui-modals-stacks-footer-left-GkEi", $n = {
  footer: _m,
  footerLeft: Fm
}, Gs = () => null, Om = ({ currentModal: e, onClose: t, visible: r, ...n }) => /* @__PURE__ */ f.jsx(
  Ys,
  {
    ...e,
    visible: r,
    onClose: t,
    actions: e.actions?.(n),
    footer: n.footer?.(n),
    children: e.children?.(n)
  },
  e.name
), Cm = ({
  currentModal: e,
  prevModals: t,
  onClose: r,
  visible: n,
  ...s
}) => {
  const i = t.concat(e);
  return i.map((o, a) => /* @__PURE__ */ f.jsx(
    Ys,
    {
      ...o,
      visible: n,
      onClose: a === i.length - 1 ? r : () => {
      },
      actions: o.actions?.(s),
      footer: s.footer?.(s),
      children: o.children?.(s)
    },
    o.name
  ));
};
Gs.displayName = "ModalStackItem";
function Ln(e) {
  return Q.omit(e, ["canGotoPrev", "renderPrevButton"]);
}
const Nm = ({
  initialStep: e,
  children: t,
  visible: r = !1,
  onClose: n = Q.noop,
  onCurrentChanged: s,
  strategy: i = "onlyCurrent",
  showCloseButton: o = !0,
  renderPrevButton: a = ({ title: u, onClick: d }) => /* @__PURE__ */ f.jsx(H.Button, { onClick: d, children: u }),
  ...c
}, l) => {
  const [u, d] = C.useState(-10), [h, p] = C.useState(-1), v = C.useRef(void 0), m = C.useMemo(() => Ou(t, Gs.displayName), [t]), y = C.useMemo(() => m.findIndex((R) => e ? R.props.name === e : !0), [m, e]), g = C.useMemo(() => m[u] || null, [u, m]), O = C.useMemo(
    () => m.slice(0, u).map((R) => Ln(R.props)),
    [u, m]
  ), b = C.useMemo(
    () => m.slice(u + 1).map((R) => Ln(R.props)),
    [u, m]
  );
  C.useLayoutEffect(() => {
    d(y);
  }, [y]);
  const E = C.useCallback(() => {
    n?.();
  }, [n]), N = C.useCallback(() => {
    v.current && s?.(v.current);
  }, [v.current]), S = C.useCallback(() => u === 0 ? !1 : g ? g.props.canGotoPrev ? g.props.canGotoPrev(v.current) : !0 : !1, [g, u, v.current]), x = C.useCallback(() => u === m.length - 1 ? !1 : g ? g.props.canGotoNext ? g.props.canGotoNext(v.current) : !0 : !1, [g, m, v.current]), M = C.useCallback(() => {
    S && (p(u), d(Math.max(0, u - 1)));
  }, [u, S, s, v.current]), F = C.useCallback(() => {
    x() && (p(u), d(Math.min(m.length, u + 1)));
  }, [u, m, x, v.current]), _ = C.useCallback(
    (R) => {
      const V = m.findIndex((I) => I.props.name === R);
      V !== -1 && (p(u), d(V));
    },
    [m, x]
  ), w = C.useCallback(() => {
    const R = m[h];
    return R ? R.props.name : void 0;
  }, [h, m]), A = C.useCallback(() => {
    const R = m[u];
    return R ? R.props.name : void 0;
  }, [u, m]), k = C.useCallback(() => {
    const R = m[u + 1];
    return R ? R.props.name : void 0;
  }, [u, m]);
  C.useEffect(() => {
    N();
  }, [u]), v.current = C.useMemo(
    () => ({
      gotoNext: F,
      gotoPrev: M,
      canGotoPrev: S,
      canGotoNext: x,
      gotoStep: _,
      getCurrentModalName: A,
      getNextModalName: k,
      getPrevModalName: w,
      close: E
    }),
    [
      F,
      M,
      S,
      x,
      _,
      A,
      k,
      w,
      E
    ]
  ), C.useImperativeHandle(l, () => v.current, [v.current]);
  const j = C.useMemo(() => i === "onlyCurrent" ? Om : i === "previousAndCurrent" ? Cm : i, [i]);
  return g ? C.Children.map(
    j({
      currentModal: Ln(g.props),
      prevModals: O,
      nextModals: b,
      visible: r,
      onClose: n,
      footer: (R) => {
        const V = g.props.footer?.(R), I = S() ? (g.props.renderPrevButton || a)({
          title: g.props.getPrevTitle ? g.props.getPrevTitle(R) : "Назад",
          onClick: () => M()
        }) : null;
        return V || I ? /* @__PURE__ */ f.jsxs("div", { className: $n.footer, children: [
          /* @__PURE__ */ f.jsx("div", { className: $n.footerLeft, children: I }),
          /* @__PURE__ */ f.jsx("div", { className: $n.footerRight, children: V })
        ] }) : null;
      },
      ...v.current
    }),
    (R) => C.cloneElement(R, { showCloseButton: o, ...c })
  ) : null;
}, Qe = C.forwardRef(Nm);
Qe.Modal = Gs;
function Am(e, t, r) {
  var n = this, s = C.useRef(null), i = C.useRef(0), o = C.useRef(null), a = C.useRef([]), c = C.useRef(), l = C.useRef(), u = C.useRef(e), d = C.useRef(!0);
  u.current = e;
  var h = typeof window < "u", p = !t && t !== 0 && h;
  if (typeof e != "function") throw new TypeError("Expected a function");
  t = +t || 0;
  var v = !!(r = r || {}).leading, m = !("trailing" in r) || !!r.trailing, y = "maxWait" in r, g = "debounceOnServer" in r && !!r.debounceOnServer, O = y ? Math.max(+r.maxWait || 0, t) : null;
  C.useEffect(function() {
    return d.current = !0, function() {
      d.current = !1;
    };
  }, []);
  var b = C.useMemo(function() {
    var E = function(_) {
      var w = a.current, A = c.current;
      return a.current = c.current = null, i.current = _, l.current = u.current.apply(A, w);
    }, N = function(_, w) {
      p && cancelAnimationFrame(o.current), o.current = p ? requestAnimationFrame(_) : setTimeout(_, w);
    }, S = function(_) {
      if (!d.current) return !1;
      var w = _ - s.current;
      return !s.current || w >= t || w < 0 || y && _ - i.current >= O;
    }, x = function(_) {
      return o.current = null, m && a.current ? E(_) : (a.current = c.current = null, l.current);
    }, M = function _() {
      var w = Date.now();
      if (S(w)) return x(w);
      if (d.current) {
        var A = t - (w - s.current), k = y ? Math.min(A, O - (w - i.current)) : A;
        N(_, k);
      }
    }, F = function() {
      if (h || g) {
        var _ = Date.now(), w = S(_);
        if (a.current = [].slice.call(arguments), c.current = n, s.current = _, w) {
          if (!o.current && d.current) return i.current = s.current, N(M, t), v ? E(s.current) : l.current;
          if (y) return N(M, t), E(s.current);
        }
        return o.current || N(M, t), l.current;
      }
    };
    return F.cancel = function() {
      o.current && (p ? cancelAnimationFrame(o.current) : clearTimeout(o.current)), i.current = 0, a.current = s.current = c.current = o.current = null;
    }, F.isPending = function() {
      return !!o.current;
    }, F.flush = function() {
      return o.current ? x(Date.now()) : l.current;
    }, F;
  }, [v, y, t, O, m, p, h, g]);
  return b;
}
const jm = ({
  onChange: e,
  value: t,
  wait: r = 100,
  ...n
}) => {
  const [s, i] = C.useState(t), o = Am(
    (c) => {
      e && e(c);
    },
    r,
    {
      leading: !1,
      trailing: !0
    }
  ), a = C.useCallback((c) => {
    i(c), c === "" ? (o.flush(), e && e(c)) : o(c);
  }, []);
  return /* @__PURE__ */ f.jsx(H.TextInput, { ...n, value: s, onChange: a });
}, Pm = ({
  size: e,
  onChange: t,
  wait: r = 500,
  value: n,
  placeholder: s = "Поиск",
  ...i
}) => {
  const o = C.useCallback(
    (a) => {
      t && t(a);
    },
    [t]
  );
  return C.useEffect(() => {
    n !== void 0 && o(n);
  }, [n, o]), /* @__PURE__ */ f.jsx(
    jm,
    {
      ...i,
      value: n,
      onChange: o,
      placeholder: s,
      wait: r,
      prefix: /* @__PURE__ */ f.jsx(X, { name: "search", size: e })
    }
  );
}, Rm = "src-shared-ui-search-view-pf7l", Tm = "src-shared-ui-search-header-VW4L", Im = "src-shared-ui-search-content-YZMw", Sr = {
  view: Rm,
  header: Tm,
  content: Im
}, Dm = ({
  children: e,
  getItems: t,
  renderLoading: r = () => /* @__PURE__ */ f.jsx(Uh, { loading: !0 }),
  initialQuery: n
}) => {
  const [s, i] = C.useState([]), [o, a] = C.useState(!1), [c, l] = C.useState(""), u = C.useCallback(
    async (d) => {
      try {
        if (a(!0), l(d), t) {
          const h = await t(d);
          i(h);
        }
      } finally {
        a(!1);
      }
    },
    [t]
  );
  return /* @__PURE__ */ f.jsxs("div", { className: Sr.view, children: [
    /* @__PURE__ */ f.jsx("div", { className: Sr.header, children: /* @__PURE__ */ f.jsx(Pm, { value: n, onChange: u }) }),
    /* @__PURE__ */ f.jsxs("div", { className: Sr.content, children: [
      o ? r() : null,
      /* @__PURE__ */ f.jsx("div", { className: Sr.list, children: e({
        items: s,
        query: c
      }) })
    ] })
  ] });
}, Vm = "src-shared-ui-text-text-CrLA", $m = "src-shared-ui-text-toggler-SskF", Lm = "src-shared-ui-text-icon-yu8k", Bm = "src-shared-ui-text-expanded-zrHv", xr = {
  text: Vm,
  toggler: $m,
  icon: Lm,
  expanded: Bm
}, Um = ({
  className: e,
  maxCount: t,
  mode: r = "toggle",
  expanded: n,
  text: s,
  togglerText: i = "Развернуть текст",
  expandedTogglerText: o = "Свернуть текст",
  renderText: a = (l, u) => u ? `${l}...` : l,
  renderToggler: c = ({ onClick: l, expanded: u }) => /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: _e(xr.toggler, {
        [xr.expanded]: u
      }),
      onClick: l,
      children: [
        /* @__PURE__ */ f.jsx("span", { className: xr.icon, children: /* @__PURE__ */ f.jsx(X, { name: "chevron-bottom", size: "small" }) }),
        u ? o : i
      ]
    }
  )
}) => {
  const [l, u] = C.useState(!1), d = C.useMemo(() => {
    const v = s.length;
    return !!(t && !l && v > t);
  }, [s, l, t]), h = C.useMemo(() => d ? `${s.substring(0, t)}` : s, [s, d]);
  C.useLayoutEffect(() => {
    u(l);
  }, [n]);
  const p = () => {
    u((v) => !v);
  };
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx("div", { className: _e(xr.text, e), children: a(h, d) }),
    d || l && r === "toggle" ? c({
      onClick: p,
      expanded: l
    }) : null
  ] });
}, qm = "src-shared-scopes-view-vPh7", zm = {
  view: qm
}, ib = ({
  onTryAgain: e,
  children: t,
  blockTitle: r
}) => {
  function n(s) {
    e ? e(s) : s();
  }
  return /* @__PURE__ */ f.jsx(
    Id,
    {
      fallbackRender: ({ error: s, resetErrorBoundary: i }) => /* @__PURE__ */ f.jsx(Ye, { title: r, children: /* @__PURE__ */ f.jsxs("div", { className: zm.view, children: [
        /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(X, { name: "alert", size: "xlarge" }) }),
        /* @__PURE__ */ f.jsx("div", { children: s.message || "Что-то пошло не так" }),
        /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(H.Button, { buttonStyle: "accent", onClick: () => n(i), children: "Попробуйте снова" }) })
      ] }) }),
      createScope: (s) => new Qd(s),
      children: t
    }
  );
};
function Ke(e) {
  return [We(e, "lastName", ""), We(e, "firstName", ""), We(e, "middleName", "")].filter(Boolean).join(" ");
}
function Hm(e, t = {}) {
  const { speed: r = 1, smooth: n = !1, preventDefault: s = !0 } = t;
  function i(o) {
    s && o.preventDefault();
    const a = o.deltaY * r;
    n ? e.scrollBy({
      left: a,
      behavior: "smooth"
    }) : e.scrollLeft += a;
  }
  return e.addEventListener("wheel", i), () => e.removeEventListener("wheel", i);
}
class Qm extends mn {
  getEmployees(t, r, n) {
    return this.getJSON("employees", { page: Math.floor(t / r), size: r, search: n });
  }
  getEmployeeByEmail(t) {
    return this.getJSON(`employees-by-email/${t}`);
  }
  async getEmployee(t) {
    return this.getJSON(`employees/${t}`);
  }
  async getBaseURL() {
    return rr("/v1", await super.getBaseURL());
  }
}
class Wm extends mn {
  getProfile() {
    return this.getJSON("employees");
  }
  async getBaseURL() {
    return rr("/v1/auth", await super.getBaseURL());
  }
}
const Ym = "src-modules-employees-ui-info-view-T2Kr", Gm = "src-modules-employees-ui-info-header-kHEb", Km = "src-modules-employees-ui-info-info-4N7n", Jm = "src-modules-employees-ui-info-info-name-ZXl8", Xm = "src-modules-employees-ui-info-info-position-s9tE", Zm = "src-modules-employees-ui-info-text-qUCc", be = {
  view: Ym,
  header: Gm,
  info: Km,
  infoName: Jm,
  infoPosition: Xm,
  text: Zm
}, bs = ({ name: e, icon: t, position: r }) => /* @__PURE__ */ f.jsx(Ye, { children: /* @__PURE__ */ f.jsxs("div", { className: be.view, children: [
  /* @__PURE__ */ f.jsx("div", { className: be.avatar, children: /* @__PURE__ */ f.jsx(H.Avatar, { name: e, shape: "circle" }) }),
  /* @__PURE__ */ f.jsxs("div", { className: be.info, children: [
    /* @__PURE__ */ f.jsx("div", { className: be.infoName, children: e }),
    r && /* @__PURE__ */ f.jsx("div", { className: be.infoPosition, children: r })
  ] })
] }) });
bs.Skeleton = () => /* @__PURE__ */ f.jsxs("div", { className: be.view, children: [
  /* @__PURE__ */ f.jsxs("div", { className: be.header, children: [
    /* @__PURE__ */ f.jsx("div", { className: be.avatar, children: /* @__PURE__ */ f.jsx(te, { width: 40, height: 36 }) }),
    /* @__PURE__ */ f.jsxs("div", { className: be.info, children: [
      /* @__PURE__ */ f.jsx("div", { className: be.infoName, children: /* @__PURE__ */ f.jsx(te, { width: 98 }) }),
      /* @__PURE__ */ f.jsx("div", { className: be.infoPosition, children: /* @__PURE__ */ f.jsx(te, { width: 173 }) })
    ] })
  ] }),
  /* @__PURE__ */ f.jsx("div", { className: be.text, children: /* @__PURE__ */ f.jsx(te, { width: 98, height: 14 }) })
] });
const ep = "src-modules-employees-ui-search-clickable-cjcZ", tp = {
  clickable: ep
}, rp = ({
  query: e,
  children: t,
  ...r
}) => {
  const n = xt("employees"), s = C.useCallback(
    async (i, o) => (await n.getEmployees(i, o, e)).employees,
    [n, e]
  );
  return /* @__PURE__ */ f.jsx(Pa, { ...r, getItems: s, children: t });
};
function np({ onClick: e }) {
  function t(r) {
    e?.(r);
  }
  return /* @__PURE__ */ f.jsx(Dm, { children: ({ query: r }) => /* @__PURE__ */ f.jsx(
    rp,
    {
      query: r,
      renderSkeleton: () => /* @__PURE__ */ f.jsx(Qs, { count: 3, renderItem: () => /* @__PURE__ */ f.jsx(Yr.Skeleton, {}) }),
      children: (n) => n.map((s, i) => /* @__PURE__ */ f.jsx(
        "div",
        {
          className: _e({
            [tp.clickable]: e
          }),
          onClick: () => t(s),
          children: /* @__PURE__ */ f.jsx(Yr, { name: Ke(s), position: s.position?.name }, i)
        },
        s.id
      ))
    }
  ) });
}
const sp = [
  {
    category: "CARE_AND_HUMANITY",
    priority: 1,
    title: "Забота и человечность",
    smallIconName: "values/care/small",
    largeIconName: "values/care/large",
    titleIconName: "values/care/title",
    backgroundColor: "#FFF1F3"
  },
  {
    category: "PARTNERSHIP",
    priority: 2,
    title: "Доверие и партнерство",
    smallIconName: "values/trust/small",
    largeIconName: "values/trust/large",
    titleIconName: "values/trust/title",
    backgroundColor: "#F7F4FF"
  },
  {
    category: "LEADERSHIP",
    priority: 3,
    title: "Лидерство и смелость мышления",
    smallIconName: "values/leadership/small",
    largeIconName: "values/leadership/large",
    titleIconName: "values/leadership/title",
    backgroundColor: "#E8F7FE"
  }
];
function ur(e) {
  return sp.find((t) => t.category === e);
}
function Ta(e) {
  return ur(e)?.largeIconName;
}
function Ia(e) {
  return ur(e)?.smallIconName;
}
function Da(e) {
  return ur(e)?.backgroundColor;
}
function Va(e) {
  return ur(e)?.titleIconName;
}
function ip(e) {
  return ur(e)?.priority || 1e3;
}
ce((e) => e.object({
  senderId: oe,
  recipientId: oe,
  valueId: oe,
  text: e.string().max(1e3)
}));
ce((e) => e.object({
  id: oe,
  senderId: oe,
  recipientId: oe,
  valueId: oe,
  text: e.string(),
  createDate: e.string()
}));
const $a = ce((e) => e.object({
  id: oe,
  value: e.object({
    id: oe,
    name: e.string()
  }),
  isNew: e.boolean().optional(),
  text: e.string(),
  createDate: e.string(),
  sender: rs,
  receiver: rs
})), op = $a, ap = $a, cp = ce((e) => e.object({
  valueName: e.string(),
  count: e.number(),
  valueId: oe
}));
ce((e) => e.object({
  id: oe,
  category: e.string(),
  name: e.string(),
  count: e.number()
}));
ce((e) => e.object({
  totalReceived: e.number(),
  statsByValue: e.array(cp)
}));
ce((e) => e.object({
  totalElements: e.number(),
  thanks: e.array(op)
}));
ce((e) => e.object({
  totalElements: e.number(),
  thanks: e.array(ap)
}));
ce((e) => e.object({
  id: oe,
  category: e.string(),
  name: e.string(),
  description: e.string(),
  isActive: e.boolean()
}));
ce((e) => e.object({
  valueId: oe,
  text: e.string()
}));
class up extends mn {
  async create(t) {
    this.postJSON("", t);
  }
  getThanksStats(t) {
    return this.getJSON(`received-stats/${t}`);
  }
  getReceivedThanks(t, r, n) {
    return this.getJSON(`received/${t}`, {
      page: Math.floor(r / n),
      size: n
    });
  }
  getSentThanks(t, r, n) {
    return this.getJSON(`sent/${t}`, {
      page: Math.floor(r / n),
      size: n
    });
  }
  async getBaseURL() {
    return rr("/v1/thanks", await super.getBaseURL());
  }
}
const Gi = /* @__PURE__ */ JSON.parse('[{"id":1,"text":"Хочу выразить огромную благодарность за оперативную помощь в решении сложного технического вопроса. Ваша экспертиза и готовность помочь были неоценимы для нашего проекта!","createDate":"2022-03-15","value":{"id":1,"name":"Забота и человечность"},"sender":{"id":1,"lastName":"Иванов","firstName":"Иван","middleName":"Иванович","position":{"id":1,"name":"Senior Backend Developer"}},"receiver":{"id":2,"lastName":"Петров","firstName":"Сергей","middleName":"Владимирович","position":{"id":2,"name":"Заместитель CTO"}}},{"id":2,"text":"Спасибо за отличную организацию рабочих процессов и внимание к деталям! Ваш менеджерский подход помогает команде эффективно достигать поставленных целей.","createDate":"2022-05-20","value":{"id":2,"name":"Доверие и партнерство"},"sender":{"id":3,"lastName":"Сидоров","firstName":"Алексей","middleName":"Петрович","position":{"id":3,"name":"QA Инженер"}},"receiver":{"id":4,"lastName":"Кузнецова","firstName":"Мария","middleName":"Ивановна","position":{"id":4,"name":"Менеджер по продукту"}}},{"id":3,"text":"Благодарю за смелые технические решения и архитектурный подход! Ваше видение помогло создать масштабируемую и надежную систему для нашего продукта.","createDate":"2022-07-10","value":{"id":3,"name":"Лидерство и смелость мышления"},"sender":{"id":5,"lastName":"Смирнов","firstName":"Дмитрий","middleName":"Сергеевич","position":{"id":4,"name":"Менеджер по продукту"}},"receiver":{"id":6,"lastName":"Попова","firstName":"Ольга","middleName":"Владимировна","position":{"id":2,"name":"Заместитель CTO"}}},{"id":4,"text":"Огромное спасибо за тщательное тестирование и внимание к качеству! Ваша работа помогает нам выпускать надежные продукты и избегать критических ошибок.","createDate":"2022-09-05","value":{"id":1,"name":"Забота и человечность"},"sender":{"id":7,"lastName":"Васильев","firstName":"Андрей","middleName":"Викторович","position":{"id":1,"name":"Senior Backend Developer"}},"receiver":{"id":8,"lastName":"Новикова","firstName":"Екатерина","middleName":"Игоревна","position":{"id":3,"name":"QA Инженер"}}},{"id":5,"text":"Спасибо за открытость к новым идеям и готовность экспериментировать с технологиями! Ваш подход способствует инновациям в нашей компании.","createDate":"2022-11-18","value":{"id":2,"name":"Доверие и партнерство"},"sender":{"id":9,"lastName":"Федоров","firstName":"Михаил","middleName":"Юрьевич","position":{"id":3,"name":"QA Инженер"}},"receiver":{"id":10,"lastName":"Морозова","firstName":"Наталья","middleName":"Сергеевна","position":{"id":2,"name":"Заместитель CTO"}}},{"id":6,"text":"Благодарю за стратегическое видение продукта и умение находить баланс между техническими требованиями и бизнес-потребностями!","createDate":"2023-01-12","value":{"id":3,"name":"Лидерство и смелость мышления"},"sender":{"id":11,"lastName":"Волков","firstName":"Павел","middleName":"Николаевич","position":{"id":1,"name":"Senior Backend Developer"}},"receiver":{"id":12,"lastName":"Алексеева","firstName":"Елена","middleName":"Витальевна","position":{"id":4,"name":"Менеджер по продукту"}}},{"id":7,"text":"Спасибо за поддержку в освоении новых технологий и терпеливые объяснения сложных концепций! Ваше наставничество очень помогает в профессиональном росте.","createDate":"2023-02-28","value":{"id":1,"name":"Забота и человечность"},"sender":{"id":13,"lastName":"Лебедев","firstName":"Константин","middleName":"Васильевич","position":{"id":3,"name":"QA Инженер"}},"receiver":{"id":14,"lastName":"Семенова","firstName":"Татьяна","middleName":"Борисовна","position":{"id":1,"name":"Senior Backend Developer"}}},{"id":8,"text":"Выражаю искреннюю благодарность за доверие в реализации сложных технических решений! Ваша поддержка позволяет нам внедрять инновационные подходы в разработке.","createDate":"2023-04-15","value":{"id":2,"name":"Доверие и партнерство"},"sender":{"id":15,"lastName":"Егоров","firstName":"Артем","middleName":"Романович","position":{"id":1,"name":"Senior Backend Developer"}},"receiver":{"id":16,"lastName":"Козлов","firstName":"Роман","middleName":"Анатольевич","position":{"id":2,"name":"Заместитель CTO"}}},{"id":9,"text":"Благодарю за смелый выбор технологического стека и архитектурные решения! Ваша техническая экспертиза помогла создать устойчивую платформу для будущего роста.","createDate":"2023-06-08","value":{"id":3,"name":"Лидерство и смелость мышления"},"sender":{"id":17,"lastName":"Степанова","firstName":"Юлия","middleName":"Денисовна","position":{"id":4,"name":"Менеджер по продукту"}},"receiver":{"id":18,"lastName":"Николаев","firstName":"Сергей","middleName":"Андреевич","position":{"id":1,"name":"Senior Backend Developer"}}},{"id":10,"text":"Спасибо за внимание к пользовательскому опыту и настойчивость в улучшении интерфейсов! Ваша работа делает наши продукты удобнее для клиентов.","createDate":"2023-08-22","value":{"id":1,"name":"Забота и человечность"},"sender":{"id":19,"lastName":"Орлова","firstName":"Людмила","middleName":"Фёдоровна","position":{"id":2,"name":"Заместитель CTO"}},"receiver":{"id":20,"lastName":"Андреев","firstName":"Виктор","middleName":"Григорьевич","position":{"id":4,"name":"Менеджер по продукту"}}},{"id":11,"text":"Хочу поблагодарить за тщательную проверку кода и ценные замечания! Ваш вклад в code review значительно повышает качество нашей кодовой базы.","createDate":"2023-10-05","value":{"id":2,"name":"Доверие и партнерство"},"sender":{"id":21,"lastName":"Макаров","firstName":"Георгий","middleName":"Станиславович","position":{"id":1,"name":"Senior Backend Developer"}},"receiver":{"id":22,"lastName":"Зайцев","firstName":"Игорь","middleName":"Анатольевич","position":{"id":3,"name":"QA Инженер"}}},{"id":12,"text":"Благодарю за проактивный подход к решению проблем и инициативу в оптимизации процессов! Ваше лидерство вдохновляет команду на новые достижения.","createDate":"2023-12-19","value":{"id":3,"name":"Лидерство и смелость мышления"},"sender":{"id":23,"lastName":"Белов","firstName":"Алексей","middleName":"Иванович","position":{"id":3,"name":"QA Инженер"}},"receiver":{"id":24,"lastName":"Григорьева","firstName":"Лариса","middleName":"Валерьевна","position":{"id":2,"name":"Заместитель CTO"}}},{"id":13,"text":"Спасибо за помощь в настройке CI/CD процессов и автоматизации тестирования! Ваша работа значительно ускорила наш процесс разработки.","createDate":"2024-01-25","value":{"id":1,"name":"Забота и человечность"},"sender":{"id":25,"lastName":"Титов","firstName":"Никита","middleName":"Олегович","position":{"id":4,"name":"Менеджер по продукту"}},"receiver":{"id":26,"lastName":"Комаров","firstName":"Максим","middleName":"Семёнович","position":{"id":3,"name":"QA Инженер"}}},{"id":14,"text":"Выражаю благодарность за четкое планирование спринтов и реалистичную оценку задач! Ваш подход помогает команде эффективно распределять ресурсы.","createDate":"2024-03-10","value":{"id":2,"name":"Доверие и партнерство"},"sender":{"id":27,"lastName":"Власов","firstName":"Евгений","middleName":"Романович","position":{"id":1,"name":"Senior Backend Developer"}},"receiver":{"id":28,"lastName":"Мельникова","firstName":"Дарья","middleName":"Аркадьевна","position":{"id":4,"name":"Менеджер по продукту"}}},{"id":15,"text":"Благодарю за смелость в принятии архитектурных решений и готовность внедрять современные практики разработки! Ваш пример мотивирует команду.","createDate":"2024-05-17","value":{"id":3,"name":"Лидерство и смелость мышления"},"sender":{"id":29,"lastName":"Борисов","firstName":"Георгий","middleName":"Владимирович","position":{"id":2,"name":"Заместитель CTO"}},"receiver":{"id":30,"lastName":"Киселёва","firstName":"Валентина","middleName":"Георгиевна","position":{"id":1,"name":"Senior Backend Developer"}}},{"id":16,"text":"Спасибо за внимательное отношение к баг-репортам и оперативное реагирование на критические issues! Ваша работа обеспечивает стабильность продукта.","createDate":"2024-07-03","value":{"id":1,"name":"Забота и человечность"},"sender":{"id":31,"lastName":"Сидоров","firstName":"Станислав","middleName":"Леонидович","position":{"id":4,"name":"Менеджер по продукту"}},"receiver":{"id":32,"lastName":"Филиппова","firstName":"Зоя","middleName":"Вениаминовна","position":{"id":3,"name":"QA Инженер"}}},{"id":17,"text":"Благодарю за открытость к обсуждению технических решений и готовность учитывать мнение команды! Такой подход укрепляет доверие между разработчиками.","createDate":"2024-08-14","value":{"id":2,"name":"Доверие и партнерство"},"sender":{"id":33,"lastName":"Марков","firstName":"Вадим","middleName":"Эдуардович","position":{"id":1,"name":"Senior Backend Developer"}},"receiver":{"id":34,"lastName":"Чернова","firstName":"Лидия","middleName":"Яковлевна","position":{"id":2,"name":"Заместитель CTO"}}},{"id":18,"text":"Хочу выразить признательность за внедрение современных практик тестирования и автоматизации! Ваши инициативы значительно повысили качество продукта.","createDate":"2024-09-27","value":{"id":3,"name":"Лидерство и смелость мышления"},"sender":{"id":35,"lastName":"Беляева","firstName":"Алла","middleName":"Степановна","position":{"id":2,"name":"Заместитель CTO"}},"receiver":{"id":36,"lastName":"Абрамов","firstName":"Григорий","middleName":"Аркадьевич","position":{"id":3,"name":"QA Инженер"}}},{"id":19,"text":"Спасибо за заботу о техническом долге и настойчивость в рефакторинге! Ваша работа делает код чище и поддерживаемее для всей команды.","createDate":"2024-11-08","value":{"id":1,"name":"Забота и человечность"},"sender":{"id":37,"lastName":"Давыдов","firstName":"Эдуард","middleName":"Валерьевич","position":{"id":3,"name":"QA Инженер"}},"receiver":{"id":38,"lastName":"Жукова","firstName":"Ксения","middleName":"Геннадьевна","position":{"id":1,"name":"Senior Backend Developer"}}},{"id":20,"text":"Благодарю за прозрачность в коммуникации и честность в оценке сроков! Такое отношение создает основу для успешного партнерства между командами.","createDate":"2024-12-20","value":{"id":2,"name":"Доверие и партнерство"},"sender":{"id":39,"lastName":"Романова","firstName":"Валерия","middleName":"Борисовна","position":{"id":1,"name":"Senior Backend Developer"}},"receiver":{"id":40,"lastName":"Медведев","firstName":"Фёдор","middleName":"Денисович","position":{"id":4,"name":"Менеджер по продукту"}}},{"id":21,"text":"Выражаю благодарность за смелость в выборе технологий и готовность инвестировать в обучение команды! Это способствует нашему профессиональному росту.","createDate":"2025-01-30","value":{"id":3,"name":"Лидерство и смелость мышления"},"sender":{"id":41,"lastName":"Ефимова","firstName":"София","middleName":"Алексеевна","position":{"id":3,"name":"QA Инженер"}},"receiver":{"id":42,"lastName":"Щербаков","firstName":"Тимофей","middleName":"Григорьевич","position":{"id":2,"name":"Заместитель CTO"}}},{"id":22,"text":"Спасибо за поддержку в освоении новых инструментов тестирования и терпеливые консультации! Ваше наставничество очень ценно для моего развития.","createDate":"2025-03-12","value":{"id":1,"name":"Забота и человечность"},"sender":{"id":43,"lastName":"Блинова","firstName":"Регина","middleName":"Викторовна","position":{"id":4,"name":"Менеджер по продукту"}},"receiver":{"id":44,"lastName":"Колесников","firstName":"Ярослав","middleName":"Ильич","position":{"id":3,"name":"QA Инженер"}}},{"id":23,"text":"Благодарю за открытость к feedback и готовность совершенствовать процессы! Такой подход делает наше сотрудничество более эффективным.","createDate":"2025-04-25","value":{"id":2,"name":"Доверие и партнерство"},"sender":{"id":45,"lastName":"Карпова","firstName":"Ульяна","middleName":"Сергеевна","position":{"id":2,"name":"Заместитель CTO"}},"receiver":{"id":46,"lastName":"Афанасьев","firstName":"Семён","middleName":"Павлович","position":{"id":1,"name":"Senior Backend Developer"}}},{"id":24,"text":"Хочу поблагодарить за проактивный мониторинг системы и быстрое реагирование на инциденты! Ваша работа обеспечивает высокую доступность нашего сервиса.","createDate":"2025-06-07","value":{"id":3,"name":"Лидерство и смелость мышления"},"sender":{"id":47,"lastName":"Воронова","firstName":"Инна","middleName":"Рудольфовна","position":{"id":4,"name":"Менеджер по продукту"}},"receiver":{"id":48,"lastName":"Цветков","firstName":"Арсений","middleName":"Евгеньевич","position":{"id":1,"name":"Senior Backend Developer"}}},{"id":25,"text":"Спасибо за внимание к performance тестированию и оптимизацию критических участков кода! Ваша работа напрямую влияет на удовлетворенность пользователей.","createDate":"2025-07-19","value":{"id":1,"name":"Забота и человечность"},"sender":{"id":49,"lastName":"Денисова","firstName":"Эльвира","middleName":"Филипповна","position":{"id":2,"name":"Заместитель CTO"}},"receiver":{"id":50,"lastName":"Голубева","firstName":"Раиса","middleName":"Георгиевна","position":{"id":3,"name":"QA Инженер"}}}]');
var lp = Object.defineProperty, dp = Object.getOwnPropertyDescriptor, fp = (e, t, r, n) => {
  for (var s = dp(t, r), i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (s = o(t, r, s) || s);
  return s && lp(t, r, s), s;
};
class hp {
  async create(t) {
  }
  async getThanksStats(t) {
    return {
      statsByValue: [
        {
          valueName: "Забота и человечность",
          count: 3,
          valueId: 1
        },
        {
          valueName: "Доверие и партнерство",
          count: 2,
          valueId: 2
        },
        {
          valueName: "Лидерство и смелость мышления",
          count: 5,
          valueId: 3
        }
      ],
      totalReceived: 10
    };
  }
  async getReceivedThanks(t, r, n) {
    return this.getThanks(t, r, n);
  }
  async getSentThanks(t, r, n) {
    return this.getThanks(t, r, n, !0);
  }
  async getThanks(t, r, n, s) {
    return r === 0 && n === 1 || await ku(1e3), {
      thanks: Gi.sort((o, a) => Se(a.createDate).valueOf() - Se(o.createDate).valueOf()).slice(r, r + n),
      totalElements: Gi.length
    };
  }
}
fp([
  Uc(3e3)
], hp.prototype, "getThanksStats");
class mp extends mn {
  getValues() {
    return this.getJSON("");
  }
  async getBaseURL() {
    return rr("/v1/values", await super.getBaseURL());
  }
}
function Ft() {
  const { useGetValuesDictionaryQuery: e } = ga(), { data: t } = e(), r = C.useMemo(() => {
    if (!t)
      throw new Me(
        "Не найден словарь для ценностей. Оберните свой компонент в AppValuesDictionaryProvider"
      );
    function n(s, i) {
      const o = s.find((a) => a.id === i);
      if (!o)
        throw new Me(`Не найдена value метадата для ${i}`);
      return o;
    }
    return {
      getItems: () => t,
      getCategory: (s) => n(t, s).category,
      getName: (s) => n(t, s).name,
      getPriority: (s) => ip(r.getCategory(s)),
      getLargeIconName: (s) => Ta(r.getCategory(s)),
      getSmallIconName: (s) => Ia(r.getCategory(s)),
      getBackgroundColor: (s) => Da(r.getCategory(s)),
      getTitleIconName: (s) => Va(r.getCategory(s))
    };
  }, [t]);
  return r;
}
const pp = "src-modules-thanks-ui-blocks-view-gpCv", yp = "src-modules-thanks-ui-blocks-participant-Aflz", vp = "src-modules-thanks-ui-blocks-arrow-RuAB", wr = {
  view: pp,
  participant: yp,
  arrow: vp
}, La = ({ from: e, to: t }) => /* @__PURE__ */ f.jsxs("div", { className: wr.view, children: [
  /* @__PURE__ */ f.jsx("div", { className: wr.participant, children: /* @__PURE__ */ f.jsx(bs, { ...e }) }),
  /* @__PURE__ */ f.jsx("div", { className: wr.arrow, children: /* @__PURE__ */ f.jsx(X, { name: "to-right" }) }),
  /* @__PURE__ */ f.jsx("div", { className: wr.participant, children: /* @__PURE__ */ f.jsx(bs, { ...t }) })
] }), gp = "src-modules-thanks-ui-blocks-view-HGFh", bp = "src-modules-thanks-ui-blocks-header-7hN-", Sp = "src-modules-thanks-ui-blocks-info-jt7a", xp = "src-modules-thanks-ui-blocks-info-name-y5Vj", wp = "src-modules-thanks-ui-blocks-info-position-wVYF", Ep = "src-modules-thanks-ui-blocks-text-GLTC", kp = "src-modules-thanks-ui-blocks-clickable-00LW", Mp = "src-modules-thanks-ui-blocks-extra-info-Gds7", _p = "src-modules-thanks-ui-blocks-is-new-label-Cr9x", Z = {
  view: gp,
  header: bp,
  info: Sp,
  infoName: xp,
  infoPosition: wp,
  text: Ep,
  clickable: kp,
  extraInfo: Mp,
  isNewLabel: _p
}, Ba = () => /* @__PURE__ */ f.jsxs("div", { className: Z.view, children: [
  /* @__PURE__ */ f.jsxs("div", { className: Z.header, children: [
    /* @__PURE__ */ f.jsx("div", { className: Z.avatar, children: /* @__PURE__ */ f.jsx(te, { width: 40, height: 40, borderRadius: 20 }) }),
    /* @__PURE__ */ f.jsxs("div", { className: Z.info, children: [
      /* @__PURE__ */ f.jsx("div", { className: Z.infoName, children: /* @__PURE__ */ f.jsx(te, { width: 98 }) }),
      /* @__PURE__ */ f.jsx("div", { className: Z.infoPosition, children: /* @__PURE__ */ f.jsx(te, { width: 173 }) })
    ] })
  ] }),
  /* @__PURE__ */ f.jsx("div", { className: Z.text, children: /* @__PURE__ */ f.jsx(te, {}) })
] }), wt = ({
  name: e,
  text: t,
  position: r,
  onClick: n,
  onTextClick: s,
  footer: i,
  iconName: o,
  isNew: a
}) => zs() ? /* @__PURE__ */ f.jsx(Ba, {}) : /* @__PURE__ */ f.jsxs(
  "div",
  {
    onClick: n,
    className: _e(Z.view, {
      [Z.clickable]: n !== void 0
    }),
    children: [
      /* @__PURE__ */ f.jsxs("div", { className: Z.header, children: [
        /* @__PURE__ */ f.jsx("div", { className: Z.avatar, children: /* @__PURE__ */ f.jsx(H.Avatar, { name: e, shape: "circle" }) }),
        /* @__PURE__ */ f.jsxs("div", { className: Z.info, children: [
          /* @__PURE__ */ f.jsx("div", { className: Z.infoName, children: e }),
          r && /* @__PURE__ */ f.jsx("div", { className: Z.infoPosition, children: r })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: Z.extraInfo, children: [
          a && /* @__PURE__ */ f.jsx("span", { className: Z.isNewLabel, children: "Новое" }),
          /* @__PURE__ */ f.jsx("div", { className: Z.icon, children: /* @__PURE__ */ f.jsx(X, { name: o, size: "xmedium" }) })
        ] })
      ] }),
      /* @__PURE__ */ f.jsx(
        "div",
        {
          onClick: s,
          className: _e(Z.text, {
            [Z.clickable]: s !== void 0
          }),
          children: t
        }
      ),
      i
    ]
  }
);
wt.Skeleton = Ba;
const Fp = "src-modules-thanks-ui-blocks-previews-view-CofM", Op = "src-modules-thanks-ui-blocks-previews-icon-holder-6FaX", Cp = "src-modules-thanks-ui-blocks-previews-icon-sU09", pt = {
  view: Fp,
  iconHolder: Op,
  icon: Cp
}, Np = ({ title: e, text: t, icon: r }) => /* @__PURE__ */ f.jsxs("div", { className: pt.view, children: [
  /* @__PURE__ */ f.jsx("div", { className: pt.header, children: /* @__PURE__ */ f.jsx("div", { className: pt.title, children: e }) }),
  /* @__PURE__ */ f.jsx("div", { className: pt.text, children: /* @__PURE__ */ f.jsx(Um, { text: t, maxCount: 100 }) }),
  r && /* @__PURE__ */ f.jsx("div", { className: pt.icon, children: typeof r == "string" ? /* @__PURE__ */ f.jsx(X, { name: r, size: "auto" }) : r })
] }), Ua = ({ category: e, text: t }) => /* @__PURE__ */ f.jsx(
  Np,
  {
    text: t,
    title: /* @__PURE__ */ f.jsx("div", { className: pt.iconHolder, children: /* @__PURE__ */ f.jsx(X, { name: Va(e), size: "auto" }) }),
    icon: Ta(e)
  }
), Ap = "src-modules-thanks-ui-blocks-warnings-view-9F--", jp = {
  view: Ap
}, Pp = () => /* @__PURE__ */ f.jsx("div", { className: jp.view, children: "После отправки твое Спасибо будет доступно для просмотра всем сотрудникам hh в профиле коллеги. Обрати внимание, что изменить получателя или текст будет невозможно." }), Rp = "src-modules-thanks-ui-blocks-previews-preview-thanks-lqG8", Tp = "src-modules-thanks-ui-blocks-previews-preview-value-P4P6", Ip = "src-modules-thanks-ui-blocks-previews-create-date-OGgq", Dp = "src-modules-thanks-ui-blocks-previews-warnings-PJVi", Er = {
  previewThanks: Rp,
  previewValue: Tp,
  createDate: Ip,
  warnings: Dp
};
function Vp({
  valueId: e,
  text: t,
  sender: r,
  recipient: n
}) {
  const s = Ft(), i = C.useMemo(() => ({
    name: Ke(r),
    position: r?.position?.name
  }), [r]), o = C.useMemo(() => ({
    name: Ke(n),
    position: n?.position?.name
  }), [n]);
  return /* @__PURE__ */ f.jsxs("div", { className: Er.previewThanks, children: [
    /* @__PURE__ */ f.jsx("div", { className: Er.warnings, children: /* @__PURE__ */ f.jsx(Pp, {}) }),
    /* @__PURE__ */ f.jsx(La, { from: i, to: o }),
    /* @__PURE__ */ f.jsx("div", { className: Er.createDate, children: Ur(Date.now(), "D MMMM", void 0) }),
    e !== void 0 && t !== void 0 ? /* @__PURE__ */ f.jsx("div", { className: Er.previewValue, children: /* @__PURE__ */ f.jsx(Ua, { category: s.getCategory(e), text: t }) }) : null
  ] });
}
const $p = "src-modules-thanks-ui-blocks-preview-thanks--TOT", Lp = "src-modules-thanks-ui-blocks-preview-value-JLtO", Bp = "src-modules-thanks-ui-blocks-create-date-V28H", Bn = {
  previewThanks: $p,
  previewValue: Lp,
  createDate: Bp
};
function qa({ thanks: e }) {
  const t = Ft(), r = C.useMemo(() => ({
    name: Ke(e.sender),
    position: e.sender.position?.name
  }), [e]), n = C.useMemo(() => ({
    name: Ke(e.receiver),
    position: e.receiver.position?.name
  }), [e]);
  return /* @__PURE__ */ f.jsxs("div", { className: Bn.previewThanks, children: [
    /* @__PURE__ */ f.jsx(La, { from: r, to: n }),
    /* @__PURE__ */ f.jsx("div", { className: Bn.createDate, children: Ur(Date.now(), "D MMMM", void 0) }),
    /* @__PURE__ */ f.jsx("div", { className: Bn.previewValue, children: /* @__PURE__ */ f.jsx(Ua, { text: e.text, category: t.getCategory(e.value.id) }) })
  ] });
}
function Up({
  thanks: e,
  ...t
}) {
  return /* @__PURE__ */ f.jsx(Ys, { ...t, title: "Спасибо", children: /* @__PURE__ */ f.jsx(qa, { thanks: e }) });
}
const qp = "src-modules-thanks-ui-no-data-view-JD7j", zp = "src-modules-thanks-ui-no-data-content-vhDt", Ki = {
  view: qp,
  content: zp
}, vn = ({ title: e, description: t, children: r, ...n }) => /* @__PURE__ */ f.jsxs("div", { className: Ki.view, children: [
  /* @__PURE__ */ f.jsx(X, { name: "no-thanks", size: "xxlarge" }),
  e && /* @__PURE__ */ f.jsx(H.Typography.Title, { variant: "title", size: 5, children: e }),
  t && /* @__PURE__ */ f.jsx(H.Typography.Paragraph, { children: t }),
  r && /* @__PURE__ */ f.jsx("div", { className: Ki.content, children: r })
] }), Hp = "src-modules-thanks-ui-lists-view-3jvY", Qp = "src-modules-thanks-ui-lists-content-9PlH", Wp = "src-modules-thanks-ui-lists-group-header-KiRq", Yp = "src-modules-thanks-ui-lists-item-qnC-", kr = {
  view: Hp,
  content: Qp,
  groupHeader: Wp,
  item: Yp
}, za = ({
  getItems: e,
  getEmployee: t,
  noData: r,
  onItemClick: n,
  renderHeader: s
}) => {
  const i = Se().year(), o = Ft(), a = C.useCallback(
    (u) => {
      const d = t(u);
      return /* @__PURE__ */ f.jsx("div", { className: kr.item, children: /* @__PURE__ */ f.jsx(
        wt,
        {
          name: Ke(d),
          position: d.position?.name,
          text: u.text,
          onClick: n ? () => n(u) : void 0,
          isNew: u.isNew,
          iconName: o.getSmallIconName(u.value.id)
        }
      ) }, u.id);
    },
    [t, n]
  ), c = C.useCallback((u) => /* @__PURE__ */ f.jsx("div", { className: kr.groupHeader, children: u }), []), l = C.useCallback((u) => Se(u.createDate).year() === i ? Ur(u.createDate, "D MMMM", void 0) : Ur(u.createDate, "D MMMM YYYY", void 0), []);
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsx("div", { className: kr.view, children: /* @__PURE__ */ f.jsx("div", { className: kr.content, children: /* @__PURE__ */ f.jsx(
    Pa,
    {
      renderHeader: s,
      getItems: e,
      renderSkeleton: () => /* @__PURE__ */ f.jsx(Qs, { count: 3, renderItem: () => /* @__PURE__ */ f.jsx(wt.Skeleton, {}) }),
      noData: r || /* @__PURE__ */ f.jsx(vn, { title: "Пока нет спасибо" }),
      children: (u) => /* @__PURE__ */ f.jsx(
        wm,
        {
          items: u,
          getGroup: l,
          renderItem: a,
          renderGroupHeader: c
        }
      )
    }
  ) }) }) });
}, Gp = "src-modules-thanks-ui-stats-view-R9Jk", Kp = "src-modules-thanks-ui-stats-hasMoreItems-ruGP", Jp = "src-modules-thanks-ui-stats-container-PVA2", Xp = "src-modules-thanks-ui-stats-item-H5eS", Zp = "src-modules-thanks-ui-stats-item-title-HBqv", e0 = "src-modules-thanks-ui-stats-item-footer-HfCa", t0 = "src-modules-thanks-ui-stats-item-count-QnV9", r0 = "src-modules-thanks-ui-stats-item-icon-VhvN", n0 = "src-modules-thanks-ui-stats-skeleton-item-HFYn", we = {
  view: Gp,
  hasMoreItems: Kp,
  container: Jp,
  item: Xp,
  itemTitle: Zp,
  itemFooter: e0,
  itemCount: t0,
  itemIcon: r0,
  skeletonItem: n0
}, Ha = () => /* @__PURE__ */ f.jsx("div", { className: we.skeletonItem, children: /* @__PURE__ */ f.jsx(te, { height: 128 }) }), Qa = ({ count: e = 3 }) => /* @__PURE__ */ f.jsx("div", { className: we.view, children: /* @__PURE__ */ f.jsx("div", { className: we.container, children: Array.from(new Array(e)).map((t, r) => /* @__PURE__ */ f.jsx(Ha, {}, r)) }) }), Gr = ({ items: e }) => {
  const t = zs(), r = C.useRef(null), n = e.length > 3;
  return C.useEffect(() => {
    let s = () => {
    };
    return r.current && n && (s = Hm(r.current, {
      preventDefault: !0
    })), s;
  }, [r.current, n]), t ? /* @__PURE__ */ f.jsx(Qa, {}) : Q.isEmpty(e) ? null : /* @__PURE__ */ f.jsx(
    "div",
    {
      className: _e(we.view, {
        [we.hasMoreItems]: n
      }),
      children: /* @__PURE__ */ f.jsx("div", { className: we.container, ref: r, children: e.map(({ name: s, category: i, id: o, count: a }) => /* @__PURE__ */ f.jsxs("div", { className: we.item, style: { background: Da(i) }, children: [
        /* @__PURE__ */ f.jsx("div", { className: we.itemTitle, children: s }),
        /* @__PURE__ */ f.jsxs("div", { className: we.itemFooter, children: [
          /* @__PURE__ */ f.jsx("div", { className: we.itemCount, children: a }),
          /* @__PURE__ */ f.jsx("div", { className: we.itemIcon, children: /* @__PURE__ */ f.jsx(X, { name: Ia(i), size: "xmedium" }) })
        ] })
      ] }, o)) })
    }
  );
};
Gr.ItemSkeleton = Ha;
Gr.Skeleton = Qa;
const s0 = ({ employeeId: e }) => {
  const t = xt("thanks"), r = Ft(), n = C.useCallback(async () => {
    const s = await t.getThanksStats(e);
    return r.getItems().map((i) => {
      const o = s.statsByValue.find(({ valueId: a }) => a === i.id);
      return {
        ...i,
        count: o ? o.count : 0
      };
    }).sort((i, o) => {
      const a = r.getPriority(i.id) - r.getPriority(o.id);
      return a === 0 ? o.count - i.count : a;
    });
  }, [t, e, r]);
  return /* @__PURE__ */ f.jsx(Ca, { dataProvider: n, fallback: /* @__PURE__ */ f.jsx(Gr.Skeleton, {}), children: (s) => /* @__PURE__ */ f.jsx(Gr, { items: s }) });
};
function i0({
  employeeId: e,
  onItemClick: t
}) {
  const r = xt("thanks"), n = C.useCallback(
    async (s, i) => {
      const o = await r.getReceivedThanks(e, s, i);
      return {
        items: o.thanks,
        hasMore: s + i < o.totalElements
      };
    },
    [r, e]
  );
  return /* @__PURE__ */ f.jsx(
    za,
    {
      getItems: n,
      onItemClick: t,
      noData: /* @__PURE__ */ f.jsx(vn, { title: "Пока нет спасибо" }),
      renderHeader: () => /* @__PURE__ */ f.jsx(s0, { employeeId: e }),
      getEmployee: (s) => s.sender
    },
    e
  );
}
const o0 = "src-modules-thanks-ui-values-view-VgXW", a0 = "src-modules-thanks-ui-values-main-part-XNz7", c0 = "src-modules-thanks-ui-values-title-xNUi", u0 = "src-modules-thanks-ui-values-description-ElO6", l0 = "src-modules-thanks-ui-values-cards-ZczK", yt = {
  view: o0,
  mainPart: a0,
  title: c0,
  description: u0,
  cards: l0
}, d0 = ({ title: e, description: t, iconName: r }) => /* @__PURE__ */ f.jsxs("div", { className: yt.view, children: [
  /* @__PURE__ */ f.jsxs("div", { className: yt.mainPart, children: [
    /* @__PURE__ */ f.jsx("div", { className: yt.title, children: e }),
    /* @__PURE__ */ f.jsx("div", { className: yt.description, children: t })
  ] }),
  /* @__PURE__ */ f.jsx("div", { className: yt.auxPart, children: /* @__PURE__ */ f.jsx(X, { name: r, size: "large" }) })
] }), f0 = () => {
  const e = Ft(), t = e.getItems();
  return /* @__PURE__ */ f.jsx(
    Aa,
    {
      className: yt.cards,
      layout: "vertical",
      mode: "card",
      options: t.map(({ description: r, name: n, id: s }, i) => ({
        value: s,
        label: /* @__PURE__ */ f.jsx(d0, { title: n, description: r, iconName: e.getSmallIconName(s) })
      }))
    }
  );
}, h0 = ({ children: e, fallback: t }) => {
  const { useGetValuesDictionaryQuery: r } = ga(), { data: n } = r();
  return n ? e : t;
}, m0 = "src-modules-thanks-ui-forms-view-FXI9", p0 = "src-modules-thanks-ui-forms-layout-dD0t", y0 = "src-modules-thanks-ui-forms-content-obQm", v0 = "src-modules-thanks-ui-forms-values-UVzn", g0 = "src-modules-thanks-ui-forms-values-layout-vov6", b0 = "src-modules-thanks-ui-forms-values-list-7wFd", S0 = "src-modules-thanks-ui-forms-value-header-5-68", x0 = "src-modules-thanks-ui-forms-value-label-uYdl", w0 = "src-modules-thanks-ui-forms-link-to-values-tHOb", De = {
  view: m0,
  layout: p0,
  content: y0,
  values: v0,
  valuesLayout: g0,
  valuesList: b0,
  valueHeader: S0,
  valueLabel: x0,
  linkToValues: w0
};
function E0({
  onApply: e,
  children: t
}, r) {
  return /* @__PURE__ */ f.jsx(xm, { className: De.view, ref: r, onApply: e, children: (n) => /* @__PURE__ */ f.jsxs("div", { className: De.layout, children: [
    /* @__PURE__ */ f.jsxs("div", { className: De.content, children: [
      /* @__PURE__ */ f.jsx(n.Field, { name: "valueId", required: !0, children: (s) => /* @__PURE__ */ f.jsx("div", { className: De.values, children: /* @__PURE__ */ f.jsx(
        cr,
        {
          className: De.valuesLayout,
          label: /* @__PURE__ */ f.jsxs("div", { className: De.valueHeader, children: [
            /* @__PURE__ */ f.jsx("div", { className: De.valueLabel, children: "Ценность" }),
            /* @__PURE__ */ f.jsx(
              H.Button,
              {
                className: De.linkToValues,
                size: "s",
                as: "a",
                target: "_blank",
                href: "https://wiki.hh.ru/pages/viewpage.action?pageId=495523220",
                buttonStyle: "neutral",
                displayAs: "link",
                iconRight: /* @__PURE__ */ f.jsx(X, { name: "external-link", color: "#768694", size: "xmedium" }),
                children: "Про ценности"
              }
            )
          ] }),
          children: /* @__PURE__ */ f.jsx("div", { className: De.valuesList, children: /* @__PURE__ */ f.jsx(f0, {}) })
        }
      ) }) }),
      /* @__PURE__ */ f.jsx(n.Field, { name: "text", minLength: 60, children: (s) => /* @__PURE__ */ f.jsx(
        s.TextAreaField,
        {
          label: "Сообщение",
          placeholder: "Спасибо...",
          helper: "Например, спасибо за советы на проекте, которые сократили сроки разработки. Не менее 60 символов.",
          maxLength: 600
        }
      ) })
    ] }),
    t ? t(n) : null
  ] }) });
}
const k0 = C.forwardRef(E0), M0 = "src-modules-thanks-ui-features-modals-form-qlCo", _0 = {
  form: M0
}, F0 = ({
  visible: e,
  recipient: t,
  sender: r,
  create: n,
  onClose: s
}) => {
  const i = C.useRef(t), o = C.useRef(void 0), a = C.useRef(null), c = C.useCallback(() => {
    a.current?.handleSubmit();
  }, [a.current]), l = C.useCallback(
    async (p) => {
      const v = o.current, m = i.current;
      await n({
        valueId: v.valueId,
        text: v.text,
        senderId: r.id,
        recipientId: m.id
      }), p();
    },
    [o.current, i.current, n, r]
  ), u = C.useCallback((p, v) => {
    i.current = p, v();
  }, []);
  function d(p, v) {
    o.current = p, v();
  }
  function h(p) {
  }
  return /* @__PURE__ */ f.jsxs(
    Qe,
    {
      onCurrentChanged: h,
      visible: e,
      position: "right-drawer",
      strategy: "previousAndCurrent",
      onClose: s,
      children: [
        t === void 0 ? /* @__PURE__ */ f.jsx(Qe.Modal, { name: "pick-employee", title: "Кому", hideFooterDivider: !0, children: ({ gotoNext: p }) => /* @__PURE__ */ f.jsx(np, { onClick: (v) => u(v, p) }) }) : void 0,
        /* @__PURE__ */ f.jsx(
          Qe.Modal,
          {
            name: "create-thanks",
            canGotoPrev: () => !1,
            footer: ({ gotoNext: p }) => /* @__PURE__ */ f.jsx(H.Button, { buttonStyle: "accent", onClick: c, children: "Посмотреть" }),
            title: "Написание Спасибо",
            children: ({ gotoPrev: p, gotoNext: v }) => /* @__PURE__ */ f.jsxs("div", { className: _0.form, children: [
              i.current && /* @__PURE__ */ f.jsx(cr, { label: "Сотрудник", children: /* @__PURE__ */ f.jsx(Ye, { children: /* @__PURE__ */ f.jsx(
                Yr,
                {
                  name: Ke(i.current),
                  position: i.current.position?.name,
                  department: i.current.department?.name,
                  actions: /* @__PURE__ */ f.jsx(H.Tooltip, { text: "Поменять сотрудника", size: "s", children: /* @__PURE__ */ f.jsx(
                    H.Button,
                    {
                      size: "m",
                      as: "a",
                      displayAs: "link",
                      onClick: p,
                      iconRight: /* @__PURE__ */ f.jsx(X, { color: "#768694", name: "edit", size: "xmedium" }),
                      children: " "
                    }
                  ) })
                }
              ) }) }),
              /* @__PURE__ */ f.jsx(k0, { ref: a, onApply: (m) => d(m, v) })
            ] })
          }
        ),
        /* @__PURE__ */ f.jsx(
          Qe.Modal,
          {
            name: "preview-thanks",
            title: "Предпросмотр Спасибо",
            renderPrevButton: ({ onClick: p }) => /* @__PURE__ */ f.jsx(H.Button, { size: "s", as: "a", displayAs: "link", onClick: p, iconLeft: /* @__PURE__ */ f.jsx(X, { name: "arrow-left" }), children: "Изменить" }),
            footer: ({ close: p }) => /* @__PURE__ */ f.jsx(H.Button, { onClick: () => l(p), buttonStyle: "accent", children: "Отправить" }),
            children: () => /* @__PURE__ */ f.jsx(
              Vp,
              {
                text: o.current?.text,
                valueId: o.current?.valueId,
                sender: r,
                recipient: i.current
              }
            )
          }
        )
      ]
    }
  );
}, Wa = ({
  trigger: e = /* @__PURE__ */ f.jsx(Ws, { size: "xs", mode: "secondary", buttonStyle: "neutral", iconLeft: /* @__PURE__ */ f.jsx(X, { name: "write", size: "xsmall" }), children: "Написать" }),
  sender: t,
  create: r,
  recipient: n,
  ...s
}) => /* @__PURE__ */ f.jsx(Ra, { trigger: e, ...s, children: /* @__PURE__ */ f.jsx(F0, { sender: t, recipient: n, create: r }) }), O0 = "src-modules-thanks-ui-features-tabs-content-vltB", C0 = "src-modules-thanks-ui-features-tabs-panel-WH40", Un = {
  content: O0,
  panel: C0
}, N0 = [
  { value: "received", label: "Полученные" },
  { value: "sent", label: "Отправленные" }
], A0 = ({
  employee: e,
  canViewSent: t,
  onItemClick: r,
  create: n
}) => {
  const s = N0.filter(({ value: i }) => i !== "sent" || t);
  return /* @__PURE__ */ f.jsxs(H.Tabs.Provider, { defaultActiveTab: "received", children: [
    /* @__PURE__ */ f.jsx(H.Tabs.Bar, { mode: "primary", items: s.length <= 1 ? [] : s }),
    /* @__PURE__ */ f.jsxs(H.Tabs.Content, { className: Un.content, children: [
      /* @__PURE__ */ f.jsx(H.Tabs.Panel, { tabValue: "received", className: Un.panel, children: /* @__PURE__ */ f.jsx(i0, { employeeId: e.id, onItemClick: r }) }),
      /* @__PURE__ */ f.jsx(H.Tabs.Panel, { tabValue: "sent", className: Un.panel, children: /* @__PURE__ */ f.jsx(R0, { employee: e, create: n }) })
    ] })
  ] });
}, j0 = "src-modules-thanks-ui-features-modals-title-HXSl", Ji = {
  title: j0
}, P0 = ({
  visible: e,
  employee: t,
  create: r,
  canViewSent: n,
  onClose: s
}) => {
  const i = C.useRef(null), [o, a] = C.useState(), c = C.useCallback(
    async (u) => {
      await r(u), i.current?.close();
    },
    [r, i]
  ), l = C.useCallback(
    (u) => {
      a(u), i.current?.gotoStep("show-thanks");
    },
    [i.current]
  );
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsxs(Qe, { ref: i, visible: e, position: "right-drawer", strategy: "previousAndCurrent", onClose: s, children: [
    /* @__PURE__ */ f.jsx(
      Qe.Modal,
      {
        name: "pick-employee",
        title: /* @__PURE__ */ f.jsxs("div", { className: Ji.title, children: [
          /* @__PURE__ */ f.jsx("span", { children: "Спасибочная" }),
          /* @__PURE__ */ f.jsx(Ks, { sender: t, create: c })
        ] }),
        hideFooterDivider: !0,
        children: () => /* @__PURE__ */ f.jsx(
          A0,
          {
            canViewSent: n,
            employee: t,
            create: c,
            onItemClick: l
          }
        )
      }
    ),
    /* @__PURE__ */ f.jsx(
      Qe.Modal,
      {
        name: "show-thanks",
        renderPrevButton: () => null,
        title: /* @__PURE__ */ f.jsxs("div", { className: Ji.title, children: [
          /* @__PURE__ */ f.jsx(
            H.Button,
            {
              size: "l",
              as: "a",
              buttonStyle: "neutral",
              mode: "secondary",
              displayAs: "link",
              onClick: () => i.current?.gotoPrev(),
              iconLeft: /* @__PURE__ */ f.jsx(X, { name: "arrow-left", size: "xlarge" }),
              children: " "
            }
          ),
          /* @__PURE__ */ f.jsx("span", { children: "Спасибо" })
        ] }),
        hideFooterDivider: !0,
        children: () => o && /* @__PURE__ */ f.jsx(qa, { thanks: o })
      }
    )
  ] }) });
}, Ya = ({
  trigger: e = /* @__PURE__ */ f.jsx(
    H.Button,
    {
      size: "s",
      as: "a",
      mode: "secondary",
      buttonStyle: "neutral",
      displayAs: "link",
      iconRight: /* @__PURE__ */ f.jsx(X, { name: "chevron-right", size: "xmedium" }),
      children: "Смотреть все"
    }
  ),
  employee: t,
  canViewSent: r,
  create: n,
  ...s
}) => /* @__PURE__ */ f.jsx(Ra, { trigger: e, ...s, children: /* @__PURE__ */ f.jsx(P0, { employee: t, canViewSent: r, create: n }) }), Ks = ({
  trigger: e = /* @__PURE__ */ f.jsx(
    H.Button,
    {
      size: "s",
      as: "a",
      buttonStyle: "neutral",
      mode: "secondary",
      displayAs: "link",
      iconLeft: /* @__PURE__ */ f.jsx(X, { name: "write", size: "xmedium" }),
      children: "Написать"
    }
  ),
  ...t
}) => /* @__PURE__ */ f.jsx(Wa, { trigger: e, ...t });
function R0({
  employee: e,
  create: t
}) {
  const r = xt("thanks"), n = C.useCallback(
    async (s, i) => {
      const o = await r.getSentThanks(e.id, s, i);
      return {
        items: o.thanks,
        hasMore: s + i < o.totalElements
      };
    },
    [r, e]
  );
  return /* @__PURE__ */ f.jsx(
    za,
    {
      getItems: n,
      noData: /* @__PURE__ */ f.jsx(vn, { title: "Пока нет отправленных спасибо", description: "Самое время исправить", children: /* @__PURE__ */ f.jsx(
        Ks,
        {
          sender: e,
          create: t,
          trigger: /* @__PURE__ */ f.jsx(Ws, { iconRight: /* @__PURE__ */ f.jsx(X, { color: "#fff", name: "write", size: "xsmall" }), children: "Написать" })
        }
      ) }),
      getEmployee: (s) => s.sender
    },
    e.id
  );
}
const T0 = ({
  create: e,
  recipient: t,
  sender: r
}) => /* @__PURE__ */ f.jsx(Ye, { children: /* @__PURE__ */ f.jsx(vn, { title: "Пока нет спасибо", description: "Самое время исправить", children: /* @__PURE__ */ f.jsx(Wa, { create: e, sender: r, recipient: t }) }) }), I0 = ({
  employee: e,
  create: t
}) => /* @__PURE__ */ f.jsx(
  Ye,
  {
    actions: /* @__PURE__ */ f.jsx(Ks, { sender: e, create: t }),
    footer: /* @__PURE__ */ f.jsx(Ya, { employee: e, create: t }),
    title: "Спасибочная",
    children: "Вы ещё не получали спасибо, но уже успели поблагодарить коллег"
  }
), D0 = "src-modules-thanks-ui-widgets-view-SRho", V0 = "src-modules-thanks-ui-widgets-animation-container-XgpQ", Xi = {
  view: D0,
  animationContainer: V0
}, $0 = ({
  getEmployee: e,
  onCreated: t
}) => {
  const r = xt("thanks"), n = xt("employees"), s = C.useRef(null), i = C.useRef(), [o, a] = C.useState(!1), c = C.useCallback(async () => {
    try {
      i.current || (a(!1), i.current = await e());
      const m = await r.getReceivedThanks(i.current.id, 0, 1);
      if (m.totalElements === 0) {
        const y = await r.getSentThanks(i.current.id, 0, 1);
        return y.totalElements === 0 ? {
          received: [],
          sent: []
        } : {
          received: [],
          sent: y.thanks
        };
      } else
        return {
          received: m.thanks,
          sent: []
        };
    } finally {
      a(!0);
    }
  }, [r, n, e, i]), l = Ft(), [u, d] = C.useState(!1), h = C.useRef(null), p = C.useCallback(() => {
    d(!0);
  }, []), v = C.useCallback(
    async (m) => {
      await r.create(m), h.current?.play(), m.recipientId === i.current?.id && s.current?.refresh(), t?.();
    },
    [h, t, r, i.current, s.current]
  );
  return C.useEffect(() => {
    i.current = void 0;
  }, [e]), /* @__PURE__ */ f.jsxs("div", { className: Xi.view, children: [
    /* @__PURE__ */ f.jsx(
      Ca,
      {
        ref: s,
        dataProvider: c,
        fallback: o ? void 0 : /* @__PURE__ */ f.jsx(Ye, { children: /* @__PURE__ */ f.jsx(wt.Skeleton, {}) }),
        children: (m) => {
          if (Q.isEmpty(m.received) && Q.isEmpty(m.sent))
            return /* @__PURE__ */ f.jsx(T0, { create: v, sender: i.current });
          if (Q.isEmpty(m.received))
            return /* @__PURE__ */ f.jsx(I0, { create: v, employee: i.current });
          {
            const y = m.received[0], {
              text: g,
              sender: O,
              value: { id: b },
              isNew: E
            } = y;
            return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(Ye, { children: /* @__PURE__ */ f.jsx(
                wt,
                {
                  onTextClick: p,
                  name: Ke(O),
                  iconName: l.getSmallIconName(b),
                  text: g,
                  isNew: E,
                  position: We(O, "position.name"),
                  footer: /* @__PURE__ */ f.jsx(
                    Ya,
                    {
                      canViewSent: !b,
                      employee: i.current,
                      create: v
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ f.jsx(Up, { thanks: y, visible: u, onClose: () => d(!1) })
            ] });
          }
        }
      }
    ),
    /* @__PURE__ */ f.jsx("div", { className: Xi.animationContainer, children: /* @__PURE__ */ f.jsx(kf, { ref: h }) })
  ] });
}, ob = (e) => /* @__PURE__ */ f.jsx(
  h0,
  {
    fallback: /* @__PURE__ */ f.jsx(Ye, { children: /* @__PURE__ */ f.jsx(wt.Skeleton, {}) }),
    children: /* @__PURE__ */ f.jsx($0, { ...e })
  }
);
var Ga = { exports: {} }, qn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zi;
function L0() {
  if (Zi) return qn;
  Zi = 1;
  var e = C;
  function t(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, s = e.useRef, i = e.useEffect, o = e.useMemo, a = e.useDebugValue;
  return qn.useSyncExternalStoreWithSelector = function(c, l, u, d, h) {
    var p = s(null);
    if (p.current === null) {
      var v = { hasValue: !1, value: null };
      p.current = v;
    } else v = p.current;
    p = o(
      function() {
        function y(N) {
          if (!g) {
            if (g = !0, O = N, N = d(N), h !== void 0 && v.hasValue) {
              var S = v.value;
              if (h(S, N))
                return b = S;
            }
            return b = N;
          }
          if (S = b, r(O, N)) return S;
          var x = d(N);
          return h !== void 0 && h(S, x) ? (O = N, S) : (O = N, b = x);
        }
        var g = !1, O, b, E = u === void 0 ? null : u;
        return [
          function() {
            return y(l());
          },
          E === null ? void 0 : function() {
            return y(E());
          }
        ];
      },
      [l, u, d, h]
    );
    var m = n(c, p[0], p[1]);
    return i(
      function() {
        v.hasValue = !0, v.value = m;
      },
      [m]
    ), a(m), m;
  }, qn;
}
Ga.exports = L0();
var B0 = Ga.exports;
function Ka(e) {
  e();
}
function U0() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Ka(() => {
        let r = e;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; )
        r.push(n), n = n.next;
      return r;
    },
    subscribe(r) {
      let n = !0;
      const s = t = {
        callback: r,
        next: null,
        prev: t
      };
      return s.prev ? s.prev.next = s : e = s, function() {
        !n || e === null || (n = !1, s.next ? s.next.prev = s.prev : t = s.prev, s.prev ? s.prev.next = s.next : e = s.next);
      };
    }
  };
}
var eo = {
  notify() {
  },
  get: () => []
};
function q0(e, t) {
  let r, n = eo, s = 0, i = !1;
  function o(m) {
    u();
    const y = n.subscribe(m);
    let g = !1;
    return () => {
      g || (g = !0, y(), d());
    };
  }
  function a() {
    n.notify();
  }
  function c() {
    v.onStateChange && v.onStateChange();
  }
  function l() {
    return i;
  }
  function u() {
    s++, r || (r = e.subscribe(c), n = U0());
  }
  function d() {
    s--, r && s === 0 && (r(), r = void 0, n.clear(), n = eo);
  }
  function h() {
    i || (i = !0, u());
  }
  function p() {
    i && (i = !1, d());
  }
  const v = {
    addNestedSub: o,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: h,
    tryUnsubscribe: p,
    getListeners: () => n
  };
  return v;
}
var z0 = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", H0 = /* @__PURE__ */ z0(), Q0 = () => typeof navigator < "u" && navigator.product === "ReactNative", W0 = /* @__PURE__ */ Q0(), Y0 = () => H0 || W0 ? C.useLayoutEffect : C.useEffect, G0 = /* @__PURE__ */ Y0();
function to(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Bt(e, t) {
  if (to(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let s = 0; s < r.length; s++)
    if (!Object.prototype.hasOwnProperty.call(t, r[s]) || !to(e[r[s]], t[r[s]]))
      return !1;
  return !0;
}
var K0 = /* @__PURE__ */ Symbol.for("react-redux-context"), J0 = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function X0() {
  if (!C.createContext) return {};
  const e = J0[K0] ??= /* @__PURE__ */ new Map();
  let t = e.get(C.createContext);
  return t || (t = C.createContext(
    null
  ), e.set(C.createContext, t)), t;
}
var Je = /* @__PURE__ */ X0();
function Z0(e) {
  const { children: t, context: r, serverState: n, store: s } = e, i = C.useMemo(() => {
    const c = q0(s);
    return {
      store: s,
      subscription: c,
      getServerState: n ? () => n : void 0
    };
  }, [s, n]), o = C.useMemo(() => s.getState(), [s]);
  G0(() => {
    const { subscription: c } = i;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), o !== s.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [i, o]);
  const a = r || Je;
  return /* @__PURE__ */ C.createElement(a.Provider, { value: i }, t);
}
var ey = Z0;
function Js(e = Je) {
  return function() {
    return C.useContext(e);
  };
}
var Ja = /* @__PURE__ */ Js();
function Xa(e = Je) {
  const t = e === Je ? Ja : (
    // @ts-ignore
    Js(e)
  ), r = () => {
    const { store: n } = t();
    return n;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Za = /* @__PURE__ */ Xa();
function ty(e = Je) {
  const t = e === Je ? Za : Xa(e), r = () => t().dispatch;
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var ry = /* @__PURE__ */ ty(), ny = (e, t) => e === t;
function sy(e = Je) {
  const t = e === Je ? Ja : Js(e), r = (n, s = {}) => {
    const { equalityFn: i = ny } = typeof s == "function" ? { equalityFn: s } : s, o = t(), { store: a, subscription: c, getServerState: l } = o;
    C.useRef(!0);
    const u = C.useCallback(
      {
        [n.name](h) {
          return n(h);
        }
      }[n.name],
      [n]
    ), d = B0.useSyncExternalStoreWithSelector(
      c.addNestedSub,
      a.getState,
      l || a.getState,
      u,
      i
    );
    return C.useDebugValue(d), d;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var iy = /* @__PURE__ */ sy(), oy = Ka, Xs = "persist:", ec = "persist/FLUSH", Zs = "persist/REHYDRATE", tc = "persist/PAUSE", rc = "persist/PERSIST", nc = "persist/PURGE", sc = "persist/REGISTER", ay = -1;
function Dr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Dr = function(r) {
    return typeof r;
  } : Dr = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Dr(e);
}
function ro(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ro(r, !0).forEach(function(n) {
      uy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ro(r).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uy(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ly(e, t, r, n) {
  n.debug;
  var s = cy({}, r);
  return e && Dr(e) === "object" && Object.keys(e).forEach(function(i) {
    i !== "_persist" && t[i] === r[i] && (s[i] = e[i]);
  }), s;
}
function dy(e) {
  var t = e.blacklist || null, r = e.whitelist || null, n = e.transforms || [], s = e.throttle || 0, i = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Xs).concat(e.key), o = e.storage, a;
  e.serialize === !1 ? a = function(N) {
    return N;
  } : typeof e.serialize == "function" ? a = e.serialize : a = fy;
  var c = e.writeFailHandler || null, l = {}, u = {}, d = [], h = null, p = null, v = function(N) {
    Object.keys(N).forEach(function(S) {
      g(S) && l[S] !== N[S] && d.indexOf(S) === -1 && d.push(S);
    }), Object.keys(l).forEach(function(S) {
      N[S] === void 0 && g(S) && d.indexOf(S) === -1 && l[S] !== void 0 && d.push(S);
    }), h === null && (h = setInterval(m, s)), l = N;
  };
  function m() {
    if (d.length === 0) {
      h && clearInterval(h), h = null;
      return;
    }
    var E = d.shift(), N = n.reduce(function(S, x) {
      return x.in(S, E, l);
    }, l[E]);
    if (N !== void 0)
      try {
        u[E] = a(N);
      } catch (S) {
        console.error("redux-persist/createPersistoid: error serializing state", S);
      }
    else
      delete u[E];
    d.length === 0 && y();
  }
  function y() {
    Object.keys(u).forEach(function(E) {
      l[E] === void 0 && delete u[E];
    }), p = o.setItem(i, a(u)).catch(O);
  }
  function g(E) {
    return !(r && r.indexOf(E) === -1 && E !== "_persist" || t && t.indexOf(E) !== -1);
  }
  function O(E) {
    c && c(E);
  }
  var b = function() {
    for (; d.length !== 0; )
      m();
    return p || Promise.resolve();
  };
  return {
    update: v,
    flush: b
  };
}
function fy(e) {
  return JSON.stringify(e);
}
function hy(e) {
  var t = e.transforms || [], r = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Xs).concat(e.key), n = e.storage;
  e.debug;
  var s;
  return e.deserialize === !1 ? s = function(o) {
    return o;
  } : typeof e.deserialize == "function" ? s = e.deserialize : s = my, n.getItem(r).then(function(i) {
    if (i) try {
      var o = {}, a = s(i);
      return Object.keys(a).forEach(function(c) {
        o[c] = t.reduceRight(function(l, u) {
          return u.out(l, c, a);
        }, s(a[c]));
      }), o;
    } catch (c) {
      throw c;
    }
    else
      return;
  });
}
function my(e) {
  return JSON.parse(e);
}
function py(e) {
  var t = e.storage, r = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Xs).concat(e.key);
  return t.removeItem(r, yy);
}
function yy(e) {
}
function no(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? no(r, !0).forEach(function(n) {
      vy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : no(r).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vy(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gy(e, t) {
  if (e == null) return {};
  var r = by(e, t), n, s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (s = 0; s < i.length; s++)
      n = i[s], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function by(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), s, i;
  for (i = 0; i < n.length; i++)
    s = n[i], !(t.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
var Sy = 5e3;
function xy(e, t) {
  var r = e.version !== void 0 ? e.version : ay;
  e.debug;
  var n = e.stateReconciler === void 0 ? ly : e.stateReconciler, s = e.getStoredState || hy, i = e.timeout !== void 0 ? e.timeout : Sy, o = null, a = !1, c = !0, l = function(d) {
    return d._persist.rehydrated && o && !c && o.update(d), d;
  };
  return function(u, d) {
    var h = u || {}, p = h._persist, v = gy(h, ["_persist"]), m = v;
    if (d.type === rc) {
      var y = !1, g = function(M, F) {
        y || (d.rehydrate(e.key, M, F), y = !0);
      };
      if (i && setTimeout(function() {
        !y && g(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(e.key, '"')));
      }, i), c = !1, o || (o = dy(e)), p)
        return Ve({}, t(m, d), {
          _persist: p
        });
      if (typeof d.rehydrate != "function" || typeof d.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
      return d.register(e.key), s(e).then(function(x) {
        var M = e.migrate || function(F, _) {
          return Promise.resolve(F);
        };
        M(x, r).then(function(F) {
          g(F);
        }, function(F) {
          g(void 0, F);
        });
      }, function(x) {
        g(void 0, x);
      }), Ve({}, t(m, d), {
        _persist: {
          version: r,
          rehydrated: !1
        }
      });
    } else {
      if (d.type === nc)
        return a = !0, d.result(py(e)), Ve({}, t(m, d), {
          _persist: p
        });
      if (d.type === ec)
        return d.result(o && o.flush()), Ve({}, t(m, d), {
          _persist: p
        });
      if (d.type === tc)
        c = !0;
      else if (d.type === Zs) {
        if (a) return Ve({}, m, {
          _persist: Ve({}, p, {
            rehydrated: !0
          })
          // @NOTE if key does not match, will continue to default else below
        });
        if (d.key === e.key) {
          var O = t(m, d), b = d.payload, E = n !== !1 && b !== void 0 ? n(b, u, O, e) : O, N = Ve({}, E, {
            _persist: Ve({}, p, {
              rehydrated: !0
            })
          });
          return l(N);
        }
      }
    }
    if (!p) return t(u, d);
    var S = t(m, d);
    return S === m ? u : l(Ve({}, S, {
      _persist: p
    }));
  };
}
function ne(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var wy = typeof Symbol == "function" && Symbol.observable || "@@observable", so = wy, zn = () => Math.random().toString(36).substring(7).split("").join("."), Ey = {
  INIT: `@@redux/INIT${/* @__PURE__ */ zn()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ zn()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${zn()}`
}, Kr = Ey;
function Et(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ei(e, t, r) {
  if (typeof e != "function")
    throw new Error(ne(2));
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(ne(0));
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(ne(1));
    return r(ei)(e, t);
  }
  let n = e, s = t, i = /* @__PURE__ */ new Map(), o = i, a = 0, c = !1;
  function l() {
    o === i && (o = /* @__PURE__ */ new Map(), i.forEach((y, g) => {
      o.set(g, y);
    }));
  }
  function u() {
    if (c)
      throw new Error(ne(3));
    return s;
  }
  function d(y) {
    if (typeof y != "function")
      throw new Error(ne(4));
    if (c)
      throw new Error(ne(5));
    let g = !0;
    l();
    const O = a++;
    return o.set(O, y), function() {
      if (g) {
        if (c)
          throw new Error(ne(6));
        g = !1, l(), o.delete(O), i = null;
      }
    };
  }
  function h(y) {
    if (!Et(y))
      throw new Error(ne(7));
    if (typeof y.type > "u")
      throw new Error(ne(8));
    if (typeof y.type != "string")
      throw new Error(ne(17));
    if (c)
      throw new Error(ne(9));
    try {
      c = !0, s = n(s, y);
    } finally {
      c = !1;
    }
    return (i = o).forEach((O) => {
      O();
    }), y;
  }
  function p(y) {
    if (typeof y != "function")
      throw new Error(ne(10));
    n = y, h({
      type: Kr.REPLACE
    });
  }
  function v() {
    const y = d;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(g) {
        if (typeof g != "object" || g === null)
          throw new Error(ne(11));
        function O() {
          const E = g;
          E.next && E.next(u());
        }
        return O(), {
          unsubscribe: y(O)
        };
      },
      [so]() {
        return this;
      }
    };
  }
  return h({
    type: Kr.INIT
  }), {
    dispatch: h,
    subscribe: d,
    getState: u,
    replaceReducer: p,
    [so]: v
  };
}
function ky(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: Kr.INIT
    }) > "u")
      throw new Error(ne(12));
    if (typeof r(void 0, {
      type: Kr.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ne(13));
  });
}
function ti(e) {
  const t = Object.keys(e), r = {};
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    typeof e[o] == "function" && (r[o] = e[o]);
  }
  const n = Object.keys(r);
  let s;
  try {
    ky(r);
  } catch (i) {
    s = i;
  }
  return function(o = {}, a) {
    if (s)
      throw s;
    let c = !1;
    const l = {};
    for (let u = 0; u < n.length; u++) {
      const d = n[u], h = r[d], p = o[d], v = h(p, a);
      if (typeof v > "u")
        throw a && a.type, new Error(ne(14));
      l[d] = v, c = c || v !== p;
    }
    return c = c || n.length !== Object.keys(o).length, c ? l : o;
  };
}
function Jr(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function My(...e) {
  return (t) => (r, n) => {
    const s = t(r, n);
    let i = () => {
      throw new Error(ne(15));
    };
    const o = {
      getState: s.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, a = e.map((c) => c(o));
    return i = Jr(...a)(s.dispatch), {
      ...s,
      dispatch: i
    };
  };
}
function ic(e) {
  return Et(e) && "type" in e && typeof e.type == "string";
}
function io(e) {
  return Oy(e) || Fy(e) || _y();
}
function _y() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function Fy(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") return Array.from(e);
}
function Oy(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = new Array(e.length); t < e.length; t++)
      r[t] = e[t];
    return r;
  }
}
function oo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ss(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oo(r, !0).forEach(function(n) {
      Cy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oo(r).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Cy(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var oc = {
  registry: [],
  bootstrapped: !1
}, Ny = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : oc, r = arguments.length > 1 ? arguments[1] : void 0;
  switch (r.type) {
    case sc:
      return Ss({}, t, {
        registry: [].concat(io(t.registry), [r.key])
      });
    case Zs:
      var n = t.registry.indexOf(r.key), s = io(t.registry);
      return s.splice(n, 1), Ss({}, t, {
        registry: s,
        bootstrapped: s.length === 0
      });
    default:
      return t;
  }
};
function Ay(e, t, r) {
  var n = ei(Ny, oc, void 0), s = function(c) {
    n.dispatch({
      type: sc,
      key: c
    });
  }, i = function(c, l, u) {
    var d = {
      type: Zs,
      payload: l,
      err: u,
      key: c
      // dispatch to `store` to rehydrate and `persistor` to track result
    };
    e.dispatch(d), n.dispatch(d);
  }, o = Ss({}, n, {
    purge: function() {
      var c = [];
      return e.dispatch({
        type: nc,
        result: function(u) {
          c.push(u);
        }
      }), Promise.all(c);
    },
    flush: function() {
      var c = [];
      return e.dispatch({
        type: ec,
        result: function(u) {
          c.push(u);
        }
      }), Promise.all(c);
    },
    pause: function() {
      e.dispatch({
        type: tc
      });
    },
    persist: function() {
      e.dispatch({
        type: rc,
        register: s,
        rehydrate: i
      });
    }
  });
  return o.persist(), o;
}
function Vr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vr = function(r) {
    return typeof r;
  } : Vr = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Vr(e);
}
function jy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Py(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ry(e, t, r) {
  return t && Py(e.prototype, t), e;
}
function Ty(e, t) {
  return t && (Vr(t) === "object" || typeof t == "function") ? t : $r(e);
}
function xs(e) {
  return xs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xs(e);
}
function $r(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Iy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ws(e, t);
}
function ws(e, t) {
  return ws = Object.setPrototypeOf || function(n, s) {
    return n.__proto__ = s, n;
  }, ws(e, t);
}
function Lr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var ac = /* @__PURE__ */ function(e) {
  Iy(t, e);
  function t() {
    var r, n;
    jy(this, t);
    for (var s = arguments.length, i = new Array(s), o = 0; o < s; o++)
      i[o] = arguments[o];
    return n = Ty(this, (r = xs(t)).call.apply(r, [this].concat(i))), Lr($r(n), "state", {
      bootstrapped: !1
    }), Lr($r(n), "_unsubscribe", void 0), Lr($r(n), "handlePersistorState", function() {
      var a = n.props.persistor, c = a.getState(), l = c.bootstrapped;
      l && (n.props.onBeforeLift ? Promise.resolve(n.props.onBeforeLift()).finally(function() {
        return n.setState({
          bootstrapped: !0
        });
      }) : n.setState({
        bootstrapped: !0
      }), n._unsubscribe && n._unsubscribe());
    }), n;
  }
  return Ry(t, [{
    key: "componentDidMount",
    value: function() {
      this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState), this.handlePersistorState();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this._unsubscribe && this._unsubscribe();
    }
  }, {
    key: "render",
    value: function() {
      return typeof this.props.children == "function" ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading;
    }
  }]), t;
}(C.PureComponent);
Lr(ac, "defaultProps", {
  children: null,
  loading: null
});
var ri = {}, ni = {};
ni.__esModule = !0;
ni.default = $y;
function Br(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Br = function(r) {
    return typeof r;
  } : Br = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Br(e);
}
function Hn() {
}
var Dy = {
  getItem: Hn,
  setItem: Hn,
  removeItem: Hn
};
function Vy(e) {
  if ((typeof self > "u" ? "undefined" : Br(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e], r = "redux-persist ".concat(e, " test");
    t.setItem(r, "test"), t.getItem(r), t.removeItem(r);
  } catch {
    return !1;
  }
  return !0;
}
function $y(e) {
  var t = "".concat(e, "Storage");
  return Vy(t) ? self[t] : Dy;
}
ri.__esModule = !0;
ri.default = Uy;
var Ly = By(ni);
function By(e) {
  return e && e.__esModule ? e : { default: e };
}
function Uy(e) {
  var t = (0, Ly.default)(e);
  return {
    getItem: function(n) {
      return new Promise(function(s, i) {
        s(t.getItem(n));
      });
    },
    setItem: function(n, s) {
      return new Promise(function(i, o) {
        i(t.setItem(n, s));
      });
    },
    removeItem: function(n) {
      return new Promise(function(s, i) {
        s(t.removeItem(n));
      });
    }
  };
}
var cc = void 0, qy = zy(ri);
function zy(e) {
  return e && e.__esModule ? e : { default: e };
}
var Hy = (0, qy.default)("local");
cc = Hy;
var si = Symbol.for("immer-nothing"), Ut = Symbol.for("immer-draftable"), me = Symbol.for("immer-state");
function ie(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ot = Object.getPrototypeOf;
function Re(e) {
  return !!e && !!e[me];
}
function Fe(e) {
  return e ? uc(e) || Array.isArray(e) || !!e[Ut] || !!e.constructor?.[Ut] || lr(e) || dr(e) : !1;
}
var Qy = Object.prototype.constructor.toString();
function uc(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = ot(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Qy;
}
function Wy(e) {
  return Re(e) || ie(15, e), e[me].base_;
}
function Qt(e, t) {
  at(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function at(e) {
  const t = e[me];
  return t ? t.type_ : Array.isArray(e) ? 1 : lr(e) ? 2 : dr(e) ? 3 : 0;
}
function Wt(e, t) {
  return at(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Qn(e, t) {
  return at(e) === 2 ? e.get(t) : e[t];
}
function lc(e, t, r) {
  const n = at(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Yy(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function lr(e) {
  return e instanceof Map;
}
function dr(e) {
  return e instanceof Set;
}
function tt(e) {
  return e.copy_ || e.base_;
}
function Es(e, t) {
  if (lr(e))
    return new Map(e);
  if (dr(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = uc(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[me];
    let s = Reflect.ownKeys(n);
    for (let i = 0; i < s.length; i++) {
      const o = s[i], a = n[o];
      a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (n[o] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: a.enumerable,
        value: e[o]
      });
    }
    return Object.create(ot(e), n);
  } else {
    const n = ot(e);
    if (n !== null && r)
      return { ...e };
    const s = Object.create(n);
    return Object.assign(s, e);
  }
}
function ii(e, t = !1) {
  return gn(e) || Re(e) || !Fe(e) || (at(e) > 1 && (e.set = e.add = e.clear = e.delete = Gy), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => ii(n, !0))), e;
}
function Gy() {
  ie(2);
}
function gn(e) {
  return Object.isFrozen(e);
}
var ks = {};
function ct(e) {
  const t = ks[e];
  return t || ie(0, e), t;
}
function Ky(e, t) {
  ks[e] || (ks[e] = t);
}
var Yt;
function dc() {
  return Yt;
}
function Jy(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function ao(e, t) {
  t && (ct("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ms(e) {
  _s(e), e.drafts_.forEach(Xy), e.drafts_ = null;
}
function _s(e) {
  e === Yt && (Yt = e.parent_);
}
function co(e) {
  return Yt = Jy(Yt, e);
}
function Xy(e) {
  const t = e[me];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function uo(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[me].modified_ && (Ms(t), ie(4)), Fe(e) && (e = Xr(t, e), t.parent_ || Zr(t, e)), t.patches_ && ct("Patches").generateReplacementPatches_(
    r[me].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Xr(t, r, []), Ms(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== si ? e : void 0;
}
function Xr(e, t, r) {
  if (gn(t))
    return t;
  const n = t[me];
  if (!n)
    return Qt(
      t,
      (s, i) => lo(e, n, t, s, i, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return Zr(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const s = n.copy_;
    let i = s, o = !1;
    n.type_ === 3 && (i = new Set(s), s.clear(), o = !0), Qt(
      i,
      (a, c) => lo(e, n, s, a, c, r, o)
    ), Zr(e, s, !1), r && e.patches_ && ct("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function lo(e, t, r, n, s, i, o) {
  if (Re(s)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Wt(t.assigned_, n) ? i.concat(n) : void 0, c = Xr(e, s, a);
    if (lc(r, n, c), Re(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else o && r.add(s);
  if (Fe(s) && !gn(s)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Xr(e, s), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && Zr(e, s);
  }
}
function Zr(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ii(t, r);
}
function Zy(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : dc(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let s = n, i = oi;
  r && (s = [n], i = Gt);
  const { revoke: o, proxy: a } = Proxy.revocable(s, i);
  return n.draft_ = a, n.revoke_ = o, a;
}
var oi = {
  get(e, t) {
    if (t === me)
      return e;
    const r = tt(e);
    if (!Wt(r, t))
      return ev(e, r, t);
    const n = r[t];
    return e.finalized_ || !Fe(n) ? n : n === Wn(e.base_, t) ? (Yn(e), e.copy_[t] = Os(n, e)) : n;
  },
  has(e, t) {
    return t in tt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(tt(e));
  },
  set(e, t, r) {
    const n = fc(tt(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const s = Wn(tt(e), t), i = s?.[me];
      if (i && i.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (Yy(r, s) && (r !== void 0 || Wt(e.base_, t)))
        return !0;
      Yn(e), Fs(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Wn(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Yn(e), Fs(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = tt(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    ie(11);
  },
  getPrototypeOf(e) {
    return ot(e.base_);
  },
  setPrototypeOf() {
    ie(12);
  }
}, Gt = {};
Qt(oi, (e, t) => {
  Gt[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Gt.deleteProperty = function(e, t) {
  return Gt.set.call(this, e, t, void 0);
};
Gt.set = function(e, t, r) {
  return oi.set.call(this, e[0], t, r, e[0]);
};
function Wn(e, t) {
  const r = e[me];
  return (r ? tt(r) : e)[t];
}
function ev(e, t, r) {
  const n = fc(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function fc(e, t) {
  if (!(t in e))
    return;
  let r = ot(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = ot(r);
  }
}
function Fs(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Fs(e.parent_));
}
function Yn(e) {
  e.copy_ || (e.copy_ = Es(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var tv = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const i = r;
        r = t;
        const o = this;
        return function(c = i, ...l) {
          return o.produce(c, (u) => r.call(this, u, ...l));
        };
      }
      typeof r != "function" && ie(6), n !== void 0 && typeof n != "function" && ie(7);
      let s;
      if (Fe(t)) {
        const i = co(this), o = Os(t, void 0);
        let a = !0;
        try {
          s = r(o), a = !1;
        } finally {
          a ? Ms(i) : _s(i);
        }
        return ao(i, n), uo(s, i);
      } else if (!t || typeof t != "object") {
        if (s = r(t), s === void 0 && (s = t), s === si && (s = void 0), this.autoFreeze_ && ii(s, !0), n) {
          const i = [], o = [];
          ct("Patches").generateReplacementPatches_(t, s, i, o), n(i, o);
        }
        return s;
      } else
        ie(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (o, ...a) => this.produceWithPatches(o, (c) => t(c, ...a));
      let n, s;
      return [this.produce(t, r, (o, a) => {
        n = o, s = a;
      }), n, s];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Fe(e) || ie(8), Re(e) && (e = rv(e));
    const t = co(this), r = Os(e, void 0);
    return r[me].isManual_ = !0, _s(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[me];
    (!r || !r.isManual_) && ie(9);
    const { scope_: n } = r;
    return ao(n, t), uo(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const s = t[r];
      if (s.path.length === 0 && s.op === "replace") {
        e = s.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = ct("Patches").applyPatches_;
    return Re(e) ? n(e, t) : this.produce(
      e,
      (s) => n(s, t)
    );
  }
};
function Os(e, t) {
  const r = lr(e) ? ct("MapSet").proxyMap_(e, t) : dr(e) ? ct("MapSet").proxySet_(e, t) : Zy(e, t);
  return (t ? t.scope_ : dc()).drafts_.push(r), r;
}
function rv(e) {
  return Re(e) || ie(10, e), hc(e);
}
function hc(e) {
  if (!Fe(e) || gn(e))
    return e;
  const t = e[me];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Es(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Es(e, !0);
  return Qt(r, (n, s) => {
    lc(r, n, hc(s));
  }), t && (t.finalized_ = !1), r;
}
function nv() {
  const t = "replace", r = "add", n = "remove";
  function s(h, p, v, m) {
    switch (h.type_) {
      case 0:
      case 2:
        return o(
          h,
          p,
          v,
          m
        );
      case 1:
        return i(h, p, v, m);
      case 3:
        return a(
          h,
          p,
          v,
          m
        );
    }
  }
  function i(h, p, v, m) {
    let { base_: y, assigned_: g } = h, O = h.copy_;
    O.length < y.length && ([y, O] = [O, y], [v, m] = [m, v]);
    for (let b = 0; b < y.length; b++)
      if (g[b] && O[b] !== y[b]) {
        const E = p.concat([b]);
        v.push({
          op: t,
          path: E,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: d(O[b])
        }), m.push({
          op: t,
          path: E,
          value: d(y[b])
        });
      }
    for (let b = y.length; b < O.length; b++) {
      const E = p.concat([b]);
      v.push({
        op: r,
        path: E,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: d(O[b])
      });
    }
    for (let b = O.length - 1; y.length <= b; --b) {
      const E = p.concat([b]);
      m.push({
        op: n,
        path: E
      });
    }
  }
  function o(h, p, v, m) {
    const { base_: y, copy_: g } = h;
    Qt(h.assigned_, (O, b) => {
      const E = Qn(y, O), N = Qn(g, O), S = b ? Wt(y, O) ? t : r : n;
      if (E === N && S === t)
        return;
      const x = p.concat(O);
      v.push(S === n ? { op: S, path: x } : { op: S, path: x, value: N }), m.push(
        S === r ? { op: n, path: x } : S === n ? { op: r, path: x, value: d(E) } : { op: t, path: x, value: d(E) }
      );
    });
  }
  function a(h, p, v, m) {
    let { base_: y, copy_: g } = h, O = 0;
    y.forEach((b) => {
      if (!g.has(b)) {
        const E = p.concat([O]);
        v.push({
          op: n,
          path: E,
          value: b
        }), m.unshift({
          op: r,
          path: E,
          value: b
        });
      }
      O++;
    }), O = 0, g.forEach((b) => {
      if (!y.has(b)) {
        const E = p.concat([O]);
        v.push({
          op: r,
          path: E,
          value: b
        }), m.unshift({
          op: n,
          path: E,
          value: b
        });
      }
      O++;
    });
  }
  function c(h, p, v, m) {
    v.push({
      op: t,
      path: [],
      value: p === si ? void 0 : p
    }), m.push({
      op: t,
      path: [],
      value: h
    });
  }
  function l(h, p) {
    return p.forEach((v) => {
      const { path: m, op: y } = v;
      let g = h;
      for (let N = 0; N < m.length - 1; N++) {
        const S = at(g);
        let x = m[N];
        typeof x != "string" && typeof x != "number" && (x = "" + x), (S === 0 || S === 1) && (x === "__proto__" || x === "constructor") && ie(19), typeof g == "function" && x === "prototype" && ie(19), g = Qn(g, x), typeof g != "object" && ie(18, m.join("/"));
      }
      const O = at(g), b = u(v.value), E = m[m.length - 1];
      switch (y) {
        case t:
          switch (O) {
            case 2:
              return g.set(E, b);
            case 3:
              ie(16);
            default:
              return g[E] = b;
          }
        case r:
          switch (O) {
            case 1:
              return E === "-" ? g.push(b) : g.splice(E, 0, b);
            case 2:
              return g.set(E, b);
            case 3:
              return g.add(b);
            default:
              return g[E] = b;
          }
        case n:
          switch (O) {
            case 1:
              return g.splice(E, 1);
            case 2:
              return g.delete(E);
            case 3:
              return g.delete(v.value);
            default:
              return delete g[E];
          }
        default:
          ie(17, y);
      }
    }), h;
  }
  function u(h) {
    if (!Fe(h))
      return h;
    if (Array.isArray(h))
      return h.map(u);
    if (lr(h))
      return new Map(
        Array.from(h.entries()).map(([v, m]) => [v, u(m)])
      );
    if (dr(h))
      return new Set(Array.from(h).map(u));
    const p = Object.create(ot(h));
    for (const v in h)
      p[v] = u(h[v]);
    return Wt(h, Ut) && (p[Ut] = h[Ut]), p;
  }
  function d(h) {
    return Re(h) ? u(h) : h;
  }
  Ky("Patches", {
    applyPatches_: l,
    generatePatches_: s,
    generateReplacementPatches_: c
  });
}
var ve = new tv(), fr = ve.produce, mc = ve.produceWithPatches.bind(
  ve
);
ve.setAutoFreeze.bind(ve);
ve.setUseStrictShallowCopy.bind(ve);
var fo = ve.applyPatches.bind(ve);
ve.createDraft.bind(ve);
ve.finishDraft.bind(ve);
function sv(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function iv(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function ov(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var ho = (e) => Array.isArray(e) ? e : [e];
function av(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return ov(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function cv(e, t) {
  const r = [], { length: n } = e;
  for (let s = 0; s < n; s++)
    r.push(e[s].apply(null, t));
  return r;
}
var uv = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, lv = typeof WeakRef < "u" ? WeakRef : uv, dv = 0, mo = 1;
function Mr() {
  return {
    s: dv,
    v: void 0,
    o: null,
    p: null
  };
}
function en(e, t = {}) {
  let r = Mr();
  const { resultEqualityCheck: n } = t;
  let s, i = 0;
  function o() {
    let a = r;
    const { length: c } = arguments;
    for (let d = 0, h = c; d < h; d++) {
      const p = arguments[d];
      if (typeof p == "function" || typeof p == "object" && p !== null) {
        let v = a.o;
        v === null && (a.o = v = /* @__PURE__ */ new WeakMap());
        const m = v.get(p);
        m === void 0 ? (a = Mr(), v.set(p, a)) : a = m;
      } else {
        let v = a.p;
        v === null && (a.p = v = /* @__PURE__ */ new Map());
        const m = v.get(p);
        m === void 0 ? (a = Mr(), v.set(p, a)) : a = m;
      }
    }
    const l = a;
    let u;
    if (a.s === mo)
      u = a.v;
    else if (u = e.apply(null, arguments), i++, n) {
      const d = s?.deref?.() ?? s;
      d != null && n(d, u) && (u = d, i !== 0 && i--), s = typeof u == "object" && u !== null || typeof u == "function" ? new lv(u) : u;
    }
    return l.s = mo, l.v = u, u;
  }
  return o.clearCache = () => {
    r = Mr(), o.resetResultsCount();
  }, o.resultsCount = () => i, o.resetResultsCount = () => {
    i = 0;
  }, o;
}
function fv(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...s) => {
    let i = 0, o = 0, a, c = {}, l = s.pop();
    typeof l == "object" && (c = l, l = s.pop()), sv(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const u = {
      ...r,
      ...c
    }, {
      memoize: d,
      memoizeOptions: h = [],
      argsMemoize: p = en,
      argsMemoizeOptions: v = []
    } = u, m = ho(h), y = ho(v), g = av(s), O = d(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...m), b = p(function() {
      o++;
      const N = cv(
        g,
        arguments
      );
      return a = O.apply(null, N), a;
    }, ...y);
    return Object.assign(b, {
      resultFunc: l,
      memoizedResultFunc: O,
      dependencies: g,
      dependencyRecomputations: () => o,
      resetDependencyRecomputations: () => {
        o = 0;
      },
      lastResult: () => a,
      recomputations: () => i,
      resetRecomputations: () => {
        i = 0;
      },
      memoize: d,
      argsMemoize: p
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ai = /* @__PURE__ */ fv(en), hv = Object.assign(
  (e, t = ai) => {
    iv(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (i) => e[i]
    );
    return t(
      n,
      (...i) => i.reduce((o, a, c) => (o[r[c]] = a, o), {})
    );
  },
  { withTypes: () => hv }
);
function pc(e) {
  return ({ dispatch: r, getState: n }) => (s) => (i) => typeof i == "function" ? i(r, n, e) : s(i);
}
var mv = pc(), pv = pc, yv = { NODE_ENV: "production" }, vv = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Jr : Jr.apply(null, arguments);
}, gv = (e) => e && typeof e.match == "function";
function ke(e, t) {
  function r(...n) {
    if (t) {
      let s = t(...n);
      if (!s)
        throw new Error(ye(0));
      return {
        type: e,
        payload: s.payload,
        ..."meta" in s && {
          meta: s.meta
        },
        ..."error" in s && {
          error: s.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => ic(n) && n.type === e, r;
}
var yc = class It extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, It.prototype);
  }
  static get [Symbol.species]() {
    return It;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new It(...t[0].concat(this)) : new It(...t.concat(this));
  }
};
function po(e) {
  return Fe(e) ? fr(e, () => {
  }) : e;
}
function Dt(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function bv(e) {
  return typeof e == "boolean";
}
var Sv = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: s = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let o = new yc();
  return r && (bv(r) ? o.push(mv) : o.push(pv(r.extraArgument))), o;
}, bn = "RTK_autoBatch", jt = () => (e) => ({
  payload: e,
  meta: {
    [bn]: !0
  }
}), yo = (e) => (t) => {
  setTimeout(t, e);
}, xv = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let s = !0, i = !1, o = !1;
  const a = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : yo(10)
  ) : e.type === "callback" ? e.queueNotification : yo(e.timeout), l = () => {
    o = !1, i && (i = !1, a.forEach((u) => u()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const d = () => s && u(), h = n.subscribe(d);
      return a.add(u), () => {
        h(), a.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      try {
        return s = !u?.meta?.[bn], i = !s, i && (o || (o = !0, c(l))), n.dispatch(u);
      } finally {
        s = !0;
      }
    }
  });
}, wv = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let s = new yc(e);
  return n && s.push(xv(typeof n == "object" ? n : void 0)), s;
};
function Ev(e) {
  const t = Sv(), {
    reducer: r = void 0,
    middleware: n,
    devTools: s = !0,
    preloadedState: i = void 0,
    enhancers: o = void 0
  } = e || {};
  let a;
  if (typeof r == "function")
    a = r;
  else if (Et(r))
    a = ti(r);
  else
    throw new Error(ye(1));
  let c;
  typeof n == "function" ? c = n(t) : c = t();
  let l = Jr;
  s && (l = vv({
    // Enable capture of stack traces for dispatched Redux actions
    trace: yv.NODE_ENV !== "production",
    ...typeof s == "object" && s
  }));
  const u = My(...c), d = wv(u);
  let h = typeof o == "function" ? o(d) : d();
  const p = l(...h);
  return ei(a, i, p);
}
function vc(e) {
  const t = {}, r = [];
  let n;
  const s = {
    addCase(i, o) {
      const a = typeof i == "string" ? i : i.type;
      if (!a)
        throw new Error(ye(28));
      if (a in t)
        throw new Error(ye(29));
      return t[a] = o, s;
    },
    addMatcher(i, o) {
      return r.push({
        matcher: i,
        reducer: o
      }), s;
    },
    addDefaultCase(i) {
      return n = i, s;
    }
  };
  return e(s), [t, r, n];
}
function kv(e) {
  return typeof e == "function";
}
function Mv(e, t) {
  let [r, n, s] = vc(t), i;
  if (kv(e))
    i = () => po(e());
  else {
    const a = po(e);
    i = () => a;
  }
  function o(a = i(), c) {
    let l = [r[c.type], ...n.filter(({
      matcher: u
    }) => u(c)).map(({
      reducer: u
    }) => u)];
    return l.filter((u) => !!u).length === 0 && (l = [s]), l.reduce((u, d) => {
      if (d)
        if (Re(u)) {
          const p = d(u, c);
          return p === void 0 ? u : p;
        } else {
          if (Fe(u))
            return fr(u, (h) => d(h, c));
          {
            const h = d(u, c);
            if (h === void 0) {
              if (u === null)
                return u;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return h;
          }
        }
      return u;
    }, a);
  }
  return o.getInitialState = i, o;
}
var gc = (e, t) => gv(e) ? e.match(t) : e(t);
function Ue(...e) {
  return (t) => e.some((r) => gc(r, t));
}
function qt(...e) {
  return (t) => e.every((r) => gc(r, t));
}
function Sn(e, t) {
  if (!e || !e.meta) return !1;
  const r = typeof e.meta.requestId == "string", n = t.indexOf(e.meta.requestStatus) > -1;
  return r && n;
}
function hr(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function ci(...e) {
  return e.length === 0 ? (t) => Sn(t, ["pending"]) : hr(e) ? Ue(...e.map((t) => t.pending)) : ci()(e[0]);
}
function kt(...e) {
  return e.length === 0 ? (t) => Sn(t, ["rejected"]) : hr(e) ? Ue(...e.map((t) => t.rejected)) : kt()(e[0]);
}
function xn(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0 ? qt(kt(...e), t) : hr(e) ? qt(kt(...e), t) : xn()(e[0]);
}
function Xe(...e) {
  return e.length === 0 ? (t) => Sn(t, ["fulfilled"]) : hr(e) ? Ue(...e.map((t) => t.fulfilled)) : Xe()(e[0]);
}
function Cs(...e) {
  return e.length === 0 ? (t) => Sn(t, ["pending", "fulfilled", "rejected"]) : hr(e) ? Ue(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled])) : Cs()(e[0]);
}
var _v = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", wn = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += _v[Math.random() * 64 | 0];
  return t;
}, Fv = ["name", "message", "stack", "code"], Gn = class {
  constructor(e, t) {
    this.payload = e, this.meta = t;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, vo = class {
  constructor(e, t) {
    this.payload = e, this.meta = t;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, Ov = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r of Fv)
      typeof e[r] == "string" && (t[r] = e[r]);
    return t;
  }
  return {
    message: String(e)
  };
}, go = "External signal was aborted", bo = /* @__PURE__ */ (() => {
  function e(t, r, n) {
    const s = ke(t + "/fulfilled", (c, l, u, d) => ({
      payload: c,
      meta: {
        ...d || {},
        arg: u,
        requestId: l,
        requestStatus: "fulfilled"
      }
    })), i = ke(t + "/pending", (c, l, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: l,
        requestId: c,
        requestStatus: "pending"
      }
    })), o = ke(t + "/rejected", (c, l, u, d, h) => ({
      payload: d,
      error: (n && n.serializeError || Ov)(c || "Rejected"),
      meta: {
        ...h || {},
        arg: u,
        requestId: l,
        rejectedWithValue: !!d,
        requestStatus: "rejected",
        aborted: c?.name === "AbortError",
        condition: c?.name === "ConditionError"
      }
    }));
    function a(c, {
      signal: l
    } = {}) {
      return (u, d, h) => {
        const p = n?.idGenerator ? n.idGenerator(c) : wn(), v = new AbortController();
        let m, y;
        function g(b) {
          y = b, v.abort();
        }
        l && (l.aborted ? g(go) : l.addEventListener("abort", () => g(go), {
          once: !0
        }));
        const O = async function() {
          let b;
          try {
            let N = n?.condition?.(c, {
              getState: d,
              extra: h
            });
            if (Nv(N) && (N = await N), N === !1 || v.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const S = new Promise((x, M) => {
              m = () => {
                M({
                  name: "AbortError",
                  message: y || "Aborted"
                });
              }, v.signal.addEventListener("abort", m);
            });
            u(i(p, c, n?.getPendingMeta?.({
              requestId: p,
              arg: c
            }, {
              getState: d,
              extra: h
            }))), b = await Promise.race([S, Promise.resolve(r(c, {
              dispatch: u,
              getState: d,
              extra: h,
              requestId: p,
              signal: v.signal,
              abort: g,
              rejectWithValue: (x, M) => new Gn(x, M),
              fulfillWithValue: (x, M) => new vo(x, M)
            })).then((x) => {
              if (x instanceof Gn)
                throw x;
              return x instanceof vo ? s(x.payload, p, c, x.meta) : s(x, p, c);
            })]);
          } catch (N) {
            b = N instanceof Gn ? o(null, p, c, N.payload, N.meta) : o(N, p, c);
          } finally {
            m && v.signal.removeEventListener("abort", m);
          }
          return n && !n.dispatchConditionRejection && o.match(b) && b.meta.condition || u(b), b;
        }();
        return Object.assign(O, {
          abort: g,
          requestId: p,
          arg: c,
          unwrap() {
            return O.then(Cv);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: i,
      rejected: o,
      fulfilled: s,
      settled: Ue(o, s),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function Cv(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Nv(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Av = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function jv(e, t) {
  return `${e}/${t}`;
}
function Pv({
  creators: e
} = {}) {
  const t = e?.asyncThunk?.[Av];
  return function(n) {
    const {
      name: s,
      reducerPath: i = s
    } = n;
    if (!s)
      throw new Error(ye(11));
    const o = (typeof n.reducers == "function" ? n.reducers(Tv()) : n.reducers) || {}, a = Object.keys(o), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, l = {
      addCase(b, E) {
        const N = typeof b == "string" ? b : b.type;
        if (!N)
          throw new Error(ye(12));
        if (N in c.sliceCaseReducersByType)
          throw new Error(ye(13));
        return c.sliceCaseReducersByType[N] = E, l;
      },
      addMatcher(b, E) {
        return c.sliceMatchers.push({
          matcher: b,
          reducer: E
        }), l;
      },
      exposeAction(b, E) {
        return c.actionCreators[b] = E, l;
      },
      exposeCaseReducer(b, E) {
        return c.sliceCaseReducersByName[b] = E, l;
      }
    };
    a.forEach((b) => {
      const E = o[b], N = {
        reducerName: b,
        type: jv(s, b),
        createNotation: typeof n.reducers == "function"
      };
      Dv(E) ? $v(N, E, l, t) : Iv(N, E, l);
    });
    function u() {
      const [b = {}, E = [], N = void 0] = typeof n.extraReducers == "function" ? vc(n.extraReducers) : [n.extraReducers], S = {
        ...b,
        ...c.sliceCaseReducersByType
      };
      return Mv(n.initialState, (x) => {
        for (let M in S)
          x.addCase(M, S[M]);
        for (let M of c.sliceMatchers)
          x.addMatcher(M.matcher, M.reducer);
        for (let M of E)
          x.addMatcher(M.matcher, M.reducer);
        N && x.addDefaultCase(N);
      });
    }
    const d = (b) => b, h = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new WeakMap();
    let v;
    function m(b, E) {
      return v || (v = u()), v(b, E);
    }
    function y() {
      return v || (v = u()), v.getInitialState();
    }
    function g(b, E = !1) {
      function N(x) {
        let M = x[b];
        return typeof M > "u" && E && (M = Dt(p, N, y)), M;
      }
      function S(x = d) {
        const M = Dt(h, E, () => /* @__PURE__ */ new WeakMap());
        return Dt(M, x, () => {
          const F = {};
          for (const [_, w] of Object.entries(n.selectors ?? {}))
            F[_] = Rv(w, x, () => Dt(p, x, y), E);
          return F;
        });
      }
      return {
        reducerPath: b,
        getSelectors: S,
        get selectors() {
          return S(N);
        },
        selectSlice: N
      };
    }
    const O = {
      name: s,
      reducer: m,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: y,
      ...g(i),
      injectInto(b, {
        reducerPath: E,
        ...N
      } = {}) {
        const S = E ?? i;
        return b.inject({
          reducerPath: S,
          reducer: m
        }, N), {
          ...O,
          ...g(S, !0)
        };
      }
    };
    return O;
  };
}
function Rv(e, t, r, n) {
  function s(i, ...o) {
    let a = t(i);
    return typeof a > "u" && n && (a = r()), e(a, ...o);
  }
  return s.unwrapped = e, s;
}
var rt = /* @__PURE__ */ Pv();
function Tv() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function Iv({
  type: e,
  reducerName: t,
  createNotation: r
}, n, s) {
  let i, o;
  if ("reducer" in n) {
    if (r && !Vv(n))
      throw new Error(ye(17));
    i = n.reducer, o = n.prepare;
  } else
    i = n;
  s.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, o ? ke(e, o) : ke(e));
}
function Dv(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Vv(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function $v({
  type: e,
  reducerName: t
}, r, n, s) {
  if (!s)
    throw new Error(ye(18));
  const {
    payloadCreator: i,
    fulfilled: o,
    pending: a,
    rejected: c,
    settled: l,
    options: u
  } = r, d = s(e, i, u);
  n.exposeAction(t, d), o && n.addCase(d.fulfilled, o), a && n.addCase(d.pending, a), c && n.addCase(d.rejected, c), l && n.addMatcher(d.settled, l), n.exposeCaseReducer(t, {
    fulfilled: o || _r,
    pending: a || _r,
    rejected: c || _r,
    settled: l || _r
  });
}
function _r() {
}
var Lv = (e) => "reducerPath" in e && typeof e.reducerPath == "string", Bv = (e) => e.flatMap((t) => Lv(t) ? [[t.reducerPath, t.reducer]] : Object.entries(t)), ui = Symbol.for("rtk-state-proxy-original"), Uv = (e) => !!e && !!e[ui], qv = /* @__PURE__ */ new WeakMap(), zv = (e, t, r) => Dt(qv, e, () => new Proxy(e, {
  get: (n, s, i) => {
    if (s === ui) return n;
    const o = Reflect.get(n, s, i);
    if (typeof o > "u") {
      const a = r[s];
      if (typeof a < "u") return a;
      const c = t[s];
      if (c) {
        const l = c(void 0, {
          type: wn()
        });
        if (typeof l > "u")
          throw new Error(ye(24));
        return r[s] = l, l;
      }
    }
    return o;
  }
})), Hv = (e) => {
  if (!Uv(e))
    throw new Error(ye(25));
  return e[ui];
}, Qv = {}, Wv = (e = Qv) => e;
function Yv(...e) {
  const t = Object.fromEntries(Bv(e)), r = () => Object.keys(t).length ? ti(t) : Wv;
  let n = r();
  function s(c, l) {
    return n(c, l);
  }
  s.withLazyLoadedSlices = () => s;
  const i = {}, o = (c, l = {}) => {
    const {
      reducerPath: u,
      reducer: d
    } = c, h = t[u];
    return !l.overrideExisting && h && h !== d || (l.overrideExisting && h !== d && delete i[u], t[u] = d, n = r()), s;
  }, a = Object.assign(function(l, u) {
    return function(h, ...p) {
      return l(zv(u ? u(h, ...p) : h, t, i), ...p);
    };
  }, {
    original: Hv
  });
  return Object.assign(s, {
    inject: o,
    selector: a
  });
}
function ye(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Gv = class extends Error {
  /**
   * The schema issues.
   */
  issues;
  /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */
  constructor(e) {
    super(e[0].message), this.name = "SchemaError", this.issues = e;
  }
}, Kv = { XDG_ACTIVATION_TOKEN: "gnome-shell/WebStorm/4708-5-serko-raider-ubuntu_TIME14253469", GJS_DEBUG_TOPICS: "JS ERROR;JS LOG", APPCODE_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/appcode.vmoptions", GATEWAY_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/gateway.vmoptions", MISNG_CHECK_TS_PARALLEL: "1", USER: "serko", npm_config_user_agent: "yarn/4.9.2 npm/? node/v18.17.1 linux x64", WEBSTORM_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/webstorm.vmoptions", WEBIDE_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/webide.vmoptions", XDG_SESSION_TYPE: "x11", npm_node_execpath: "/tmp/xfs-ddc26295/node", SHLVL: "0", HOME: "/home/serko", DESKTOP_SESSION: "ubuntu", npm_package_json: "/mnt/Programming/Projects/HH/ubuntu/hr-tech/edp-frontend/packages/applications/hcm-app/package.json", GIO_LAUNCHED_DESKTOP_FILE: "/usr/share/applications/jetbrains-webstorm.desktop", GTK_MODULES: "gail:atk-bridge", GNOME_SHELL_SESSION_MODE: "ubuntu", MANAGERPID: "4379", DBUS_SESSION_BUS_ADDRESS: "unix:path=/run/user/1000/bus", DATASPELL_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/dataspell.vmoptions", SYSTEMD_EXEC_PID: "4708", DATAGRIP_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/datagrip.vmoptions", IDEA_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/idea.vmoptions", GIO_LAUNCHED_DESKTOP_FILE_PID: "813378", DEBUGINFOD_URLS: "https://debuginfod.ubuntu.com ", IM_CONFIG_PHASE: "1", CLION_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/clion.vmoptions", LOGNAME: "serko", JOURNAL_STREAM: "8:59316", JETBRAINSCLIENT_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/jetbrainsclient.vmoptions", _: "/usr/bin/dbus-update-activation-environment", XDG_SESSION_CLASS: "user", USERNAME: "serko", STUDIO_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/studio.vmoptions", TERM: "xterm-256color", PHPSTORM_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/phpstorm.vmoptions", GNOME_DESKTOP_SESSION_ID: "this-is-deprecated", WINDOWPATH: "2", PATH: "/tmp/xfs-ddc26295:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin", INVOCATION_ID: "1b600a86f5df4be4aaa0bec5f7acd5e4", RIDER_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/rider.vmoptions", SESSION_MANAGER: "local/serko-raider-ubuntu:@/tmp/.ICE-unix/4687,unix/serko-raider-ubuntu:/tmp/.ICE-unix/4687", DEVECOSTUDIO_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/devecostudio.vmoptions", GTK3_MODULES: "xapp-gtk3-module", npm_package_name: "@hr-tech/hcm-micro-frontends", XDG_MENU_PREFIX: "gnome-", XDG_RUNTIME_DIR: "/run/user/1000", DISPLAY: ":1", XDG_CURRENT_DESKTOP: "ubuntu:GNOME", MIS_NPM_AUTH_TOKEN: "NpmToken.b9567dd4-9055-3aaf-bf88-9ef0651e16ac", LANG: "en_US.UTF-8", XAUTHORITY: "/run/user/1000/gdm/Xauthority", XMODIFIERS: "@im=ibus", XDG_SESSION_DESKTOP: "ubuntu", GOLAND_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/goland.vmoptions", SSH_AGENT_LAUNCHER: "openssh", SSH_AUTH_SOCK: "/run/user/1000/keyring/ssh", PROJECT_CWD: "/mnt/Programming/Projects/HH/ubuntu/hr-tech/edp-frontend", SHELL: "/bin/bash", npm_package_version: "1.0.0", npm_lifecycle_event: "build:remotes", GDMSESSION: "ubuntu", QT_ACCESSIBILITY: "1", PYCHARM_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/pycharm.vmoptions", GPG_AGENT_INFO: "/run/user/1000/gnupg/S.gpg-agent:0:1", GJS_DEBUG_OUTPUT: "stderr", NLSPATH: "/opt/cprocsp/share/locale/%L/LC_MESSAGES/%N", QT_IM_MODULE: "ibus", RUBYMINE_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/rubymine.vmoptions", PWD: "/mnt/Programming/Projects/HH/ubuntu/hr-tech/edp-frontend/packages/applications/hcm-app", JETBRAINS_CLIENT_VM_OPTIONS: "/home/serko/Programs/jetbra2024/vmoptions/jetbrains_client.vmoptions", BERRY_BIN_FOLDER: "/tmp/xfs-ddc26295", npm_execpath: "/tmp/xfs-ddc26295/yarn", XDG_DATA_DIRS: "/usr/share/ubuntu:/usr/share/gnome:/home/serko/.local/share/flatpak/exports/share:/var/lib/flatpak/exports/share:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop", XDG_CONFIG_DIRS: "/etc/xdg/xdg-ubuntu:/etc/xdg", INIT_CWD: "/mnt/Programming/Projects/HH/ubuntu/hr-tech/edp-frontend/packages/applications/hcm-app", NODE_ENV: "production" }, bc = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(bc || {});
function So(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var xo = Et;
function Sc(e, t) {
  if (e === t || !(xo(e) && xo(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const r = Object.keys(t), n = Object.keys(e);
  let s = r.length === n.length;
  const i = Array.isArray(t) ? [] : {};
  for (const o of r)
    i[o] = Sc(e[o], t[o]), s && (s = e[o] === i[o]);
  return s ? e : i;
}
function St(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
var wo = (e) => [].concat(...e);
function Jv() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function tn(e) {
  return e != null;
}
function Xv() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function Zv(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r).get(t);
}
var Eo = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, li = /* @__PURE__ */ ke("__rtkq/focused"), xc = /* @__PURE__ */ ke("__rtkq/unfocused"), di = /* @__PURE__ */ ke("__rtkq/online"), wc = /* @__PURE__ */ ke("__rtkq/offline");
function En(e) {
  return e.type === "query";
}
function eg(e) {
  return e.type === "mutation";
}
function kn(e) {
  return e.type === "infinitequery";
}
function rn(e) {
  return En(e) || kn(e);
}
function fi(e, t, r, n, s, i) {
  return tg(e) ? e(t, r, n, s).filter(tn).map(Ns).map(i) : Array.isArray(e) ? e.map(Ns).map(i) : [];
}
function tg(e) {
  return typeof e == "function";
}
function Ns(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function rg(e, t) {
  return e.catch(t);
}
var Kt = Symbol("forceQueryFn"), As = (e) => typeof e[Kt] == "function";
function ng({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: r,
  mutationThunk: n,
  api: s,
  context: i
}) {
  const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: c,
    removeMutationResult: l,
    updateSubscriptionOptions: u
  } = s.internalActions;
  return {
    buildInitiateQuery: y,
    buildInitiateInfiniteQuery: g,
    buildInitiateMutation: O,
    getRunningQueryThunk: d,
    getRunningMutationThunk: h,
    getRunningQueriesThunk: p,
    getRunningMutationsThunk: v
  };
  function d(b, E) {
    return (N) => {
      const S = i.endpointDefinitions[b], x = e({
        queryArgs: E,
        endpointDefinition: S,
        endpointName: b
      });
      return o.get(N)?.[x];
    };
  }
  function h(b, E) {
    return (N) => a.get(N)?.[E];
  }
  function p() {
    return (b) => Object.values(o.get(b) || {}).filter(tn);
  }
  function v() {
    return (b) => Object.values(a.get(b) || {}).filter(tn);
  }
  function m(b, E) {
    const N = (S, {
      subscribe: x = !0,
      forceRefetch: M,
      subscriptionOptions: F,
      [Kt]: _,
      ...w
    } = {}) => (A, k) => {
      const j = e({
        queryArgs: S,
        endpointDefinition: E,
        endpointName: b
      });
      let R;
      const V = {
        ...w,
        type: "query",
        subscribe: x,
        forceRefetch: M,
        subscriptionOptions: F,
        endpointName: b,
        originalArgs: S,
        queryCacheKey: j,
        [Kt]: _
      };
      if (En(E))
        R = t(V);
      else {
        const {
          direction: W,
          initialPageParam: le
        } = w;
        R = r({
          ...V,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: W,
          initialPageParam: le
        });
      }
      const I = s.endpoints[b].select(S), D = A(R), T = I(k()), {
        requestId: $,
        abort: L
      } = D, z = T.requestId !== $, U = o.get(A)?.[j], K = () => I(k()), B = Object.assign(_ ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        D.then(K)
      ) : z && !U ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(T)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([U, D]).then(K)
      ), {
        arg: S,
        requestId: $,
        subscriptionOptions: F,
        queryCacheKey: j,
        abort: L,
        async unwrap() {
          const W = await B;
          if (W.isError)
            throw W.error;
          return W.data;
        },
        refetch: () => A(N(S, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          x && A(c({
            queryCacheKey: j,
            requestId: $
          }));
        },
        updateSubscriptionOptions(W) {
          B.subscriptionOptions = W, A(u({
            endpointName: b,
            requestId: $,
            queryCacheKey: j,
            options: W
          }));
        }
      });
      if (!U && !z && !_) {
        const W = Zv(o, A, {});
        W[j] = B, B.then(() => {
          delete W[j], St(W) || o.delete(A);
        });
      }
      return B;
    };
    return N;
  }
  function y(b, E) {
    return m(b, E);
  }
  function g(b, E) {
    return m(b, E);
  }
  function O(b) {
    return (E, {
      track: N = !0,
      fixedCacheKey: S
    } = {}) => (x, M) => {
      const F = n({
        type: "mutation",
        endpointName: b,
        originalArgs: E,
        track: N,
        fixedCacheKey: S
      }), _ = x(F), {
        requestId: w,
        abort: A,
        unwrap: k
      } = _, j = rg(_.unwrap().then((D) => ({
        data: D
      })), (D) => ({
        error: D
      })), R = () => {
        x(l({
          requestId: w,
          fixedCacheKey: S
        }));
      }, V = Object.assign(j, {
        arg: _.arg,
        requestId: w,
        abort: A,
        unwrap: k,
        reset: R
      }), I = a.get(x) || {};
      return a.set(x, I), I[w] = V, V.then(() => {
        delete I[w], St(I) || a.delete(x);
      }), S && (I[S] = V, V.then(() => {
        I[S] === V && (delete I[S], St(I) || a.delete(x));
      })), V;
    };
  }
}
var Ec = class extends Gv {
  constructor(e, t, r, n) {
    super(e), this.value = t, this.schemaName = r, this._bqMeta = n;
  }
};
async function et(e, t, r, n) {
  const s = await e["~standard"].validate(t);
  if (s.issues)
    throw new Ec(s.issues, t, r, n);
  return s.value;
}
function sg(e) {
  return e;
}
var Pt = (e = {}) => ({
  ...e,
  [bn]: !0
});
function ig({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: r
  },
  serializeQueryArgs: n,
  api: s,
  assertTagType: i,
  selectors: o,
  onSchemaFailure: a,
  catchSchemaFailure: c,
  skipSchemaValidation: l
}) {
  const u = (w, A, k, j) => (R, V) => {
    const I = r[w], D = n({
      queryArgs: A,
      endpointDefinition: I,
      endpointName: w
    });
    if (R(s.internalActions.queryResultPatched({
      queryCacheKey: D,
      patches: k
    })), !j)
      return;
    const T = s.endpoints[w].select(A)(
      // Work around TS 4.1 mismatch
      V()
    ), $ = fi(I.providesTags, T.data, void 0, A, {}, i);
    R(s.internalActions.updateProvidedBy([{
      queryCacheKey: D,
      providedTags: $
    }]));
  };
  function d(w, A, k = 0) {
    const j = [A, ...w];
    return k && j.length > k ? j.slice(0, -1) : j;
  }
  function h(w, A, k = 0) {
    const j = [...w, A];
    return k && j.length > k ? j.slice(1) : j;
  }
  const p = (w, A, k, j = !0) => (R, V) => {
    const D = s.endpoints[w].select(A)(
      // Work around TS 4.1 mismatch
      V()
    ), T = {
      patches: [],
      inversePatches: [],
      undo: () => R(s.util.patchQueryData(w, A, T.inversePatches, j))
    };
    if (D.status === "uninitialized")
      return T;
    let $;
    if ("data" in D)
      if (Fe(D.data)) {
        const [L, z, U] = mc(D.data, k);
        T.patches.push(...z), T.inversePatches.push(...U), $ = L;
      } else
        $ = k(D.data), T.patches.push({
          op: "replace",
          path: [],
          value: $
        }), T.inversePatches.push({
          op: "replace",
          path: [],
          value: D.data
        });
    return T.patches.length === 0 || R(s.util.patchQueryData(w, A, T.patches, j)), T;
  }, v = (w, A, k) => (j) => j(s.endpoints[w].initiate(A, {
    subscribe: !1,
    forceRefetch: !0,
    [Kt]: () => ({
      data: k
    })
  })), m = (w, A) => w.query && w[A] ? w[A] : sg, y = async (w, {
    signal: A,
    abort: k,
    rejectWithValue: j,
    fulfillWithValue: R,
    dispatch: V,
    getState: I,
    extra: D
  }) => {
    const T = r[w.endpointName], {
      metaSchema: $,
      skipSchemaValidation: L = l
    } = T;
    try {
      let z = m(T, "transformResponse");
      const U = {
        signal: A,
        abort: k,
        dispatch: V,
        getState: I,
        extra: D,
        endpoint: w.endpointName,
        type: w.type,
        forced: w.type === "query" ? g(w, I()) : void 0,
        queryCacheKey: w.type === "query" ? w.queryCacheKey : void 0
      }, K = w.type === "query" ? w[Kt] : void 0;
      let B;
      const W = async (Y, G, ee, Ce) => {
        if (G == null && Y.pages.length)
          return Promise.resolve({
            data: Y
          });
        const ge = {
          queryArg: w.originalArgs,
          pageParam: G
        }, Ne = await le(ge), ue = Ce ? d : h;
        return {
          data: {
            pages: ue(Y.pages, Ne.data, ee),
            pageParams: ue(Y.pageParams, G, ee)
          },
          meta: Ne.meta
        };
      };
      async function le(Y) {
        let G;
        const {
          extraOptions: ee,
          argSchema: Ce,
          rawResponseSchema: ge,
          responseSchema: Ne
        } = T;
        if (Ce && !L && (Y = await et(
          Ce,
          Y,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), K ? G = K() : T.query ? G = await t(T.query(Y), U, ee) : G = await T.queryFn(Y, U, ee, (Ie) => t(Ie, U, ee)), typeof process < "u" && Kv.NODE_ENV, G.error) throw new Eo(G.error, G.meta);
        let {
          data: ue
        } = G;
        ge && !L && (ue = await et(ge, G.data, "rawResponseSchema", G.meta));
        let pe = await z(ue, G.meta, Y);
        return Ne && !L && (pe = await et(Ne, pe, "responseSchema", G.meta)), {
          ...G,
          data: pe
        };
      }
      if (w.type === "query" && "infiniteQueryOptions" in T) {
        const {
          infiniteQueryOptions: Y
        } = T, {
          maxPages: G = 1 / 0
        } = Y;
        let ee;
        const Ce = {
          pages: [],
          pageParams: []
        }, ge = o.selectQueryEntry(I(), w.queryCacheKey)?.data, ue = /* arg.forceRefetch */ g(w, I()) && !w.direction || !ge ? Ce : ge;
        if ("direction" in w && w.direction && ue.pages.length) {
          const pe = w.direction === "backward", Ze = (pe ? kc : js)(Y, ue, w.originalArgs);
          ee = await W(ue, Ze, G, pe);
        } else {
          const {
            initialPageParam: pe = Y.initialPageParam
          } = w, Ie = ge?.pageParams ?? [], Ze = Ie[0] ?? pe, Ot = Ie.length;
          ee = await W(ue, Ze, G), K && (ee = {
            data: ee.data.pages[0]
          });
          for (let lt = 1; lt < Ot; lt++) {
            const hi = js(Y, ee.data, w.originalArgs);
            ee = await W(ee.data, hi, G);
          }
        }
        B = ee;
      } else
        B = await le(w.originalArgs);
      return $ && !L && B.meta && (B.meta = await et($, B.meta, "metaSchema", B.meta)), R(B.data, Pt({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: B.meta
      }));
    } catch (z) {
      let U = z;
      if (U instanceof Eo) {
        let K = m(T, "transformErrorResponse");
        const {
          rawErrorResponseSchema: B,
          errorResponseSchema: W
        } = T;
        let {
          value: le,
          meta: Y
        } = U;
        try {
          B && !L && (le = await et(B, le, "rawErrorResponseSchema", Y)), $ && !L && (Y = await et($, Y, "metaSchema", Y));
          let G = await K(le, Y, w.originalArgs);
          return W && !L && (G = await et(W, G, "errorResponseSchema", Y)), j(G, Pt({
            baseQueryMeta: Y
          }));
        } catch (G) {
          U = G;
        }
      }
      try {
        if (U instanceof Ec) {
          const K = {
            endpoint: w.endpointName,
            arg: w.originalArgs,
            type: w.type,
            queryCacheKey: w.type === "query" ? w.queryCacheKey : void 0
          };
          T.onSchemaFailure?.(U, K), a?.(U, K);
          const {
            catchSchemaFailure: B = c
          } = T;
          if (B)
            return j(B(U, K), Pt({
              baseQueryMeta: U._bqMeta
            }));
        }
      } catch (K) {
        U = K;
      }
      throw console.error(U), U;
    }
  };
  function g(w, A) {
    const k = o.selectQueryEntry(A, w.queryCacheKey), j = o.selectConfig(A).refetchOnMountOrArgChange, R = k?.fulfilledTimeStamp, V = w.forceRefetch ?? (w.subscribe && j);
    return V ? V === !0 || (Number(/* @__PURE__ */ new Date()) - Number(R)) / 1e3 >= V : !1;
  }
  const O = () => bo(`${e}/executeQuery`, y, {
    getPendingMeta({
      arg: A
    }) {
      const k = r[A.endpointName];
      return Pt({
        startedTimeStamp: Date.now(),
        ...kn(k) ? {
          direction: A.direction
        } : {}
      });
    },
    condition(A, {
      getState: k
    }) {
      const j = k(), R = o.selectQueryEntry(j, A.queryCacheKey), V = R?.fulfilledTimeStamp, I = A.originalArgs, D = R?.originalArgs, T = r[A.endpointName], $ = A.direction;
      return As(A) ? !0 : R?.status === "pending" ? !1 : g(A, j) || En(T) && T?.forceRefetch?.({
        currentArg: I,
        previousArg: D,
        endpointState: R,
        state: j
      }) ? !0 : !(V && !$);
    },
    dispatchConditionRejection: !0
  }), b = O(), E = O(), N = bo(`${e}/executeMutation`, y, {
    getPendingMeta() {
      return Pt({
        startedTimeStamp: Date.now()
      });
    }
  }), S = (w) => "force" in w, x = (w) => "ifOlderThan" in w, M = (w, A, k) => (j, R) => {
    const V = S(k) && k.force, I = x(k) && k.ifOlderThan, D = ($ = !0) => {
      const L = {
        forceRefetch: $,
        isPrefetch: !0
      };
      return s.endpoints[w].initiate(A, L);
    }, T = s.endpoints[w].select(A)(R());
    if (V)
      j(D());
    else if (I) {
      const $ = T?.fulfilledTimeStamp;
      if (!$) {
        j(D());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date($))) / 1e3 >= I && j(D());
    } else
      j(D(!1));
  };
  function F(w) {
    return (A) => A?.meta?.arg?.endpointName === w;
  }
  function _(w, A) {
    return {
      matchPending: qt(ci(w), F(A)),
      matchFulfilled: qt(Xe(w), F(A)),
      matchRejected: qt(kt(w), F(A))
    };
  }
  return {
    queryThunk: b,
    mutationThunk: N,
    infiniteQueryThunk: E,
    prefetch: M,
    updateQueryData: p,
    upsertQueryData: v,
    patchQueryData: u,
    buildMatchThunkActions: _
  };
}
function js(e, {
  pages: t,
  pageParams: r
}, n) {
  const s = t.length - 1;
  return e.getNextPageParam(t[s], t, r[s], r, n);
}
function kc(e, {
  pages: t,
  pageParams: r
}, n) {
  return e.getPreviousPageParam?.(t[0], t, r[0], r, n);
}
function Mc(e, t, r, n) {
  return fi(r[e.meta.arg.endpointName][t], Xe(e) ? e.payload : void 0, xn(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, n);
}
function Fr(e, t, r) {
  const n = e[t];
  n && r(n);
}
function Jt(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function ko(e, t, r) {
  const n = e[Jt(t)];
  n && r(n);
}
var Or = {};
function og({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  serializeQueryArgs: n,
  context: {
    endpointDefinitions: s,
    apiUid: i,
    extractRehydrationInfo: o,
    hasRehydrationInfo: a
  },
  assertTagType: c,
  config: l
}) {
  const u = ke(`${e}/resetApiState`);
  function d(F, _, w, A) {
    F[_.queryCacheKey] ??= {
      status: "uninitialized",
      endpointName: _.endpointName
    }, Fr(F, _.queryCacheKey, (k) => {
      k.status = "pending", k.requestId = w && k.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        k.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        A.requestId
      ), _.originalArgs !== void 0 && (k.originalArgs = _.originalArgs), k.startedTimeStamp = A.startedTimeStamp;
      const j = s[A.arg.endpointName];
      kn(j) && "direction" in _ && (k.direction = _.direction);
    });
  }
  function h(F, _, w, A) {
    Fr(F, _.arg.queryCacheKey, (k) => {
      if (k.requestId !== _.requestId && !A) return;
      const {
        merge: j
      } = s[_.arg.endpointName];
      if (k.status = "fulfilled", j)
        if (k.data !== void 0) {
          const {
            fulfilledTimeStamp: R,
            arg: V,
            baseQueryMeta: I,
            requestId: D
          } = _;
          let T = fr(k.data, ($) => j($, w, {
            arg: V.originalArgs,
            baseQueryMeta: I,
            fulfilledTimeStamp: R,
            requestId: D
          }));
          k.data = T;
        } else
          k.data = w;
      else
        k.data = s[_.arg.endpointName].structuralSharing ?? !0 ? Sc(Re(k.data) ? Wy(k.data) : k.data, w) : w;
      delete k.error, k.fulfilledTimeStamp = _.fulfilledTimeStamp;
    });
  }
  const p = rt({
    name: `${e}/queries`,
    initialState: Or,
    reducers: {
      removeQueryResult: {
        reducer(F, {
          payload: {
            queryCacheKey: _
          }
        }) {
          delete F[_];
        },
        prepare: jt()
      },
      cacheEntriesUpserted: {
        reducer(F, _) {
          for (const w of _.payload) {
            const {
              queryDescription: A,
              value: k
            } = w;
            d(F, A, !0, {
              arg: A,
              requestId: _.meta.requestId,
              startedTimeStamp: _.meta.timestamp
            }), h(
              F,
              {
                arg: A,
                requestId: _.meta.requestId,
                fulfilledTimeStamp: _.meta.timestamp,
                baseQueryMeta: {}
              },
              k,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (F) => ({
          payload: F.map((A) => {
            const {
              endpointName: k,
              arg: j,
              value: R
            } = A, V = s[k];
            return {
              queryDescription: {
                type: "query",
                endpointName: k,
                originalArgs: A.arg,
                queryCacheKey: n({
                  queryArgs: j,
                  endpointDefinition: V,
                  endpointName: k
                })
              },
              value: R
            };
          }),
          meta: {
            [bn]: !0,
            requestId: wn(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(F, {
          payload: {
            queryCacheKey: _,
            patches: w
          }
        }) {
          Fr(F, _, (A) => {
            A.data = fo(A.data, w.concat());
          });
        },
        prepare: jt()
      }
    },
    extraReducers(F) {
      F.addCase(t.pending, (_, {
        meta: w,
        meta: {
          arg: A
        }
      }) => {
        const k = As(A);
        d(_, A, k, w);
      }).addCase(t.fulfilled, (_, {
        meta: w,
        payload: A
      }) => {
        const k = As(w.arg);
        h(_, w, A, k);
      }).addCase(t.rejected, (_, {
        meta: {
          condition: w,
          arg: A,
          requestId: k
        },
        error: j,
        payload: R
      }) => {
        Fr(_, A.queryCacheKey, (V) => {
          if (!w) {
            if (V.requestId !== k) return;
            V.status = "rejected", V.error = R ?? j;
          }
        });
      }).addMatcher(a, (_, w) => {
        const {
          queries: A
        } = o(w);
        for (const [k, j] of Object.entries(A))
          // do not rehydrate entries that were currently in flight.
          (j?.status === "fulfilled" || j?.status === "rejected") && (_[k] = j);
      });
    }
  }), v = rt({
    name: `${e}/mutations`,
    initialState: Or,
    reducers: {
      removeMutationResult: {
        reducer(F, {
          payload: _
        }) {
          const w = Jt(_);
          w in F && delete F[w];
        },
        prepare: jt()
      }
    },
    extraReducers(F) {
      F.addCase(r.pending, (_, {
        meta: w,
        meta: {
          requestId: A,
          arg: k,
          startedTimeStamp: j
        }
      }) => {
        k.track && (_[Jt(w)] = {
          requestId: A,
          status: "pending",
          endpointName: k.endpointName,
          startedTimeStamp: j
        });
      }).addCase(r.fulfilled, (_, {
        payload: w,
        meta: A
      }) => {
        A.arg.track && ko(_, A, (k) => {
          k.requestId === A.requestId && (k.status = "fulfilled", k.data = w, k.fulfilledTimeStamp = A.fulfilledTimeStamp);
        });
      }).addCase(r.rejected, (_, {
        payload: w,
        error: A,
        meta: k
      }) => {
        k.arg.track && ko(_, k, (j) => {
          j.requestId === k.requestId && (j.status = "rejected", j.error = w ?? A);
        });
      }).addMatcher(a, (_, w) => {
        const {
          mutations: A
        } = o(w);
        for (const [k, j] of Object.entries(A))
          // do not rehydrate entries that were currently in flight.
          (j?.status === "fulfilled" || j?.status === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          k !== j?.requestId && (_[k] = j);
      });
    }
  }), m = {
    tags: {},
    keys: {}
  }, y = rt({
    name: `${e}/invalidation`,
    initialState: m,
    reducers: {
      updateProvidedBy: {
        reducer(F, _) {
          for (const {
            queryCacheKey: w,
            providedTags: A
          } of _.payload) {
            g(F, w);
            for (const {
              type: k,
              id: j
            } of A) {
              const R = (F.tags[k] ??= {})[j || "__internal_without_id"] ??= [];
              R.includes(w) || R.push(w);
            }
            F.keys[w] = A;
          }
        },
        prepare: jt()
      }
    },
    extraReducers(F) {
      F.addCase(p.actions.removeQueryResult, (_, {
        payload: {
          queryCacheKey: w
        }
      }) => {
        g(_, w);
      }).addMatcher(a, (_, w) => {
        const {
          provided: A
        } = o(w);
        for (const [k, j] of Object.entries(A))
          for (const [R, V] of Object.entries(j)) {
            const I = (_.tags[k] ??= {})[R || "__internal_without_id"] ??= [];
            for (const D of V)
              I.includes(D) || I.push(D);
          }
      }).addMatcher(Ue(Xe(t), xn(t)), (_, w) => {
        O(_, [w]);
      }).addMatcher(p.actions.cacheEntriesUpserted.match, (_, w) => {
        const A = w.payload.map(({
          queryDescription: k,
          value: j
        }) => ({
          type: "UNKNOWN",
          payload: j,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: k
          }
        }));
        O(_, A);
      });
    }
  });
  function g(F, _) {
    const w = F.keys[_] ?? [];
    for (const A of w) {
      const k = A.type, j = A.id ?? "__internal_without_id", R = F.tags[k]?.[j];
      R && (F.tags[k][j] = R.filter((V) => V !== _));
    }
    delete F.keys[_];
  }
  function O(F, _) {
    const w = _.map((A) => {
      const k = Mc(A, "providesTags", s, c), {
        queryCacheKey: j
      } = A.meta.arg;
      return {
        queryCacheKey: j,
        providedTags: k
      };
    });
    y.caseReducers.updateProvidedBy(F, y.actions.updateProvidedBy(w));
  }
  const b = rt({
    name: `${e}/subscriptions`,
    initialState: Or,
    reducers: {
      updateSubscriptionOptions(F, _) {
      },
      unsubscribeQueryResult(F, _) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), E = rt({
    name: `${e}/internalSubscriptions`,
    initialState: Or,
    reducers: {
      subscriptionsUpdated: {
        reducer(F, _) {
          return fo(F, _.payload);
        },
        prepare: jt()
      }
    }
  }), N = rt({
    name: `${e}/config`,
    initialState: {
      online: Xv(),
      focused: Jv(),
      middlewareRegistered: !1,
      ...l
    },
    reducers: {
      middlewareRegistered(F, {
        payload: _
      }) {
        F.middlewareRegistered = F.middlewareRegistered === "conflict" || i !== _ ? "conflict" : !0;
      }
    },
    extraReducers: (F) => {
      F.addCase(di, (_) => {
        _.online = !0;
      }).addCase(wc, (_) => {
        _.online = !1;
      }).addCase(li, (_) => {
        _.focused = !0;
      }).addCase(xc, (_) => {
        _.focused = !1;
      }).addMatcher(a, (_) => ({
        ..._
      }));
    }
  }), S = ti({
    queries: p.reducer,
    mutations: v.reducer,
    provided: y.reducer,
    subscriptions: E.reducer,
    config: N.reducer
  }), x = (F, _) => S(u.match(_) ? void 0 : F, _), M = {
    ...N.actions,
    ...p.actions,
    ...b.actions,
    ...E.actions,
    ...v.actions,
    ...y.actions,
    resetApiState: u
  };
  return {
    reducer: x,
    actions: M
  };
}
var Ee = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), _c = {
  status: "uninitialized"
  /* uninitialized */
}, Mo = /* @__PURE__ */ fr(_c, () => {
}), _o = /* @__PURE__ */ fr(_c, () => {
});
function ag({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: r
}) {
  const n = (b) => Mo, s = (b) => _o;
  return {
    buildQuerySelector: h,
    buildInfiniteQuerySelector: p,
    buildMutationSelector: v,
    selectInvalidatedBy: m,
    selectCachedArgsForQuery: y,
    selectApiState: o,
    selectQueries: a,
    selectMutations: l,
    selectQueryEntry: c,
    selectConfig: u
  };
  function i(b) {
    return {
      ...b,
      ...So(b.status)
    };
  }
  function o(b) {
    return b[t];
  }
  function a(b) {
    return o(b)?.queries;
  }
  function c(b, E) {
    return a(b)?.[E];
  }
  function l(b) {
    return o(b)?.mutations;
  }
  function u(b) {
    return o(b)?.config;
  }
  function d(b, E, N) {
    return (S) => {
      if (S === Ee)
        return r(n, N);
      const x = e({
        queryArgs: S,
        endpointDefinition: E,
        endpointName: b
      });
      return r((F) => c(F, x) ?? Mo, N);
    };
  }
  function h(b, E) {
    return d(b, E, i);
  }
  function p(b, E) {
    const {
      infiniteQueryOptions: N
    } = E;
    function S(x) {
      const M = {
        ...x,
        ...So(x.status)
      }, {
        isLoading: F,
        isError: _,
        direction: w
      } = M, A = w === "forward", k = w === "backward";
      return {
        ...M,
        hasNextPage: g(N, M.data, M.originalArgs),
        hasPreviousPage: O(N, M.data, M.originalArgs),
        isFetchingNextPage: F && A,
        isFetchingPreviousPage: F && k,
        isFetchNextPageError: _ && A,
        isFetchPreviousPageError: _ && k
      };
    }
    return d(b, E, S);
  }
  function v() {
    return (b) => {
      let E;
      return typeof b == "object" ? E = Jt(b) ?? Ee : E = b, r(E === Ee ? s : (x) => o(x)?.mutations?.[E] ?? _o, i);
    };
  }
  function m(b, E) {
    const N = b[t], S = /* @__PURE__ */ new Set();
    for (const x of E.filter(tn).map(Ns)) {
      const M = N.provided.tags[x.type];
      if (!M)
        continue;
      let F = (x.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        M[x.id]
      ) : (
        // no id: invalidate all queries that provide this type
        wo(Object.values(M))
      )) ?? [];
      for (const _ of F)
        S.add(_);
    }
    return wo(Array.from(S.values()).map((x) => {
      const M = N.queries[x];
      return M ? [{
        queryCacheKey: x,
        endpointName: M.endpointName,
        originalArgs: M.originalArgs
      }] : [];
    }));
  }
  function y(b, E) {
    return Object.values(a(b)).filter(
      (N) => N?.endpointName === E && N.status !== "uninitialized"
      /* uninitialized */
    ).map((N) => N.originalArgs);
  }
  function g(b, E, N) {
    return E ? js(b, E, N) != null : !1;
  }
  function O(b, E, N) {
    return !E || !b.getPreviousPageParam ? !1 : kc(b, E, N) != null;
  }
}
var Fo = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, nn = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const n = Fo?.get(t);
  if (typeof n == "string")
    r = n;
  else {
    const s = JSON.stringify(t, (i, o) => (o = typeof o == "bigint" ? {
      $bigint: o.toString()
    } : o, o = Et(o) ? Object.keys(o).sort().reduce((a, c) => (a[c] = o[c], a), {}) : o, o));
    Et(t) && Fo?.set(t, s), r = s;
  }
  return `${e}(${r})`;
};
function Fc(...e) {
  return function(r) {
    const n = en((l) => r.extractRehydrationInfo?.(l, {
      reducerPath: r.reducerPath ?? "api"
    })), s = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...r,
      extractRehydrationInfo: n,
      serializeQueryArgs(l) {
        let u = nn;
        if ("serializeQueryArgs" in l.endpointDefinition) {
          const d = l.endpointDefinition.serializeQueryArgs;
          u = (h) => {
            const p = d(h);
            return typeof p == "string" ? p : nn({
              ...h,
              queryArgs: p
            });
          };
        } else r.serializeQueryArgs && (u = r.serializeQueryArgs);
        return u(l);
      },
      tagTypes: [...r.tagTypes || []]
    }, i = {
      endpointDefinitions: {},
      batch(l) {
        l();
      },
      apiUid: wn(),
      extractRehydrationInfo: n,
      hasRehydrationInfo: en((l) => n(l) != null)
    }, o = {
      injectEndpoints: c,
      enhanceEndpoints({
        addTagTypes: l,
        endpoints: u
      }) {
        if (l)
          for (const d of l)
            s.tagTypes.includes(d) || s.tagTypes.push(d);
        if (u)
          for (const [d, h] of Object.entries(u))
            typeof h == "function" ? h(i.endpointDefinitions[d]) : Object.assign(i.endpointDefinitions[d] || {}, h);
        return o;
      }
    }, a = e.map((l) => l.init(o, s, i));
    function c(l) {
      const u = l.endpoints({
        query: (d) => ({
          ...d,
          type: "query"
          /* query */
        }),
        mutation: (d) => ({
          ...d,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (d) => ({
          ...d,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [d, h] of Object.entries(u)) {
        if (l.overrideExisting !== !0 && d in i.endpointDefinitions) {
          if (l.overrideExisting === "throw")
            throw new Error(ye(39));
          continue;
        }
        i.endpointDefinitions[d] = h;
        for (const p of a)
          p.injectEndpoint(d, h);
      }
      return o;
    }
    return o.injectEndpoints({
      endpoints: r.endpoints
    });
  };
}
function $e(e, ...t) {
  return Object.assign(e, ...t);
}
var cg = ({
  api: e,
  queryThunk: t,
  internalState: r
}) => {
  const n = `${e.reducerPath}/subscriptions`;
  let s = null, i = null;
  const {
    updateSubscriptionOptions: o,
    unsubscribeQueryResult: a
  } = e.internalActions, c = (p, v) => {
    if (o.match(v)) {
      const {
        queryCacheKey: y,
        requestId: g,
        options: O
      } = v.payload;
      return p?.[y]?.[g] && (p[y][g] = O), !0;
    }
    if (a.match(v)) {
      const {
        queryCacheKey: y,
        requestId: g
      } = v.payload;
      return p[y] && delete p[y][g], !0;
    }
    if (e.internalActions.removeQueryResult.match(v))
      return delete p[v.payload.queryCacheKey], !0;
    if (t.pending.match(v)) {
      const {
        meta: {
          arg: y,
          requestId: g
        }
      } = v, O = p[y.queryCacheKey] ??= {};
      return O[`${g}_running`] = {}, y.subscribe && (O[g] = y.subscriptionOptions ?? O[g] ?? {}), !0;
    }
    let m = !1;
    if (t.fulfilled.match(v) || t.rejected.match(v)) {
      const y = p[v.meta.arg.queryCacheKey] || {}, g = `${v.meta.requestId}_running`;
      m ||= !!y[g], delete y[g];
    }
    if (t.rejected.match(v)) {
      const {
        meta: {
          condition: y,
          arg: g,
          requestId: O
        }
      } = v;
      if (y && g.subscribe) {
        const b = p[g.queryCacheKey] ??= {};
        b[O] = g.subscriptionOptions ?? b[O] ?? {}, m = !0;
      }
    }
    return m;
  }, l = () => r.currentSubscriptions, h = {
    getSubscriptions: l,
    getSubscriptionCount: (p) => {
      const m = l()[p] ?? {};
      return St(m);
    },
    isRequestSubscribed: (p, v) => !!l()?.[p]?.[v]
  };
  return (p, v) => {
    if (s || (s = JSON.parse(JSON.stringify(r.currentSubscriptions))), e.util.resetApiState.match(p))
      return s = r.currentSubscriptions = {}, i = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(p))
      return [!1, h];
    const m = c(r.currentSubscriptions, p);
    let y = !0;
    if (m) {
      i || (i = setTimeout(() => {
        const b = JSON.parse(JSON.stringify(r.currentSubscriptions)), [, E] = mc(s, () => b);
        v.next(e.internalActions.subscriptionsUpdated(E)), s = b, i = null;
      }, 500));
      const g = typeof p.type == "string" && !!p.type.startsWith(n), O = t.rejected.match(p) && p.meta.condition && !!p.meta.arg.subscribe;
      y = !g && !O;
    }
    return [y, !1];
  };
};
function ug(e) {
  for (const t in e)
    return !1;
  return !0;
}
var lg = 2147483647 / 1e3 - 1, dg = ({
  reducerPath: e,
  api: t,
  queryThunk: r,
  context: n,
  internalState: s,
  selectors: {
    selectQueryEntry: i,
    selectConfig: o
  }
}) => {
  const {
    removeQueryResult: a,
    unsubscribeQueryResult: c,
    cacheEntriesUpserted: l
  } = t.internalActions, u = Ue(c.match, r.fulfilled, r.rejected, l.match);
  function d(y) {
    const g = s.currentSubscriptions[y];
    return !!g && !ug(g);
  }
  const h = {}, p = (y, g, O) => {
    const b = g.getState(), E = o(b);
    if (u(y)) {
      let N;
      if (l.match(y))
        N = y.payload.map((S) => S.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: S
        } = c.match(y) ? y.payload : y.meta.arg;
        N = [S];
      }
      v(N, g, E);
    }
    if (t.util.resetApiState.match(y))
      for (const [N, S] of Object.entries(h))
        S && clearTimeout(S), delete h[N];
    if (n.hasRehydrationInfo(y)) {
      const {
        queries: N
      } = n.extractRehydrationInfo(y);
      v(Object.keys(N), g, E);
    }
  };
  function v(y, g, O) {
    const b = g.getState();
    for (const E of y) {
      const N = i(b, E);
      m(E, N?.endpointName, g, O);
    }
  }
  function m(y, g, O, b) {
    const N = n.endpointDefinitions[g]?.keepUnusedDataFor ?? b.keepUnusedDataFor;
    if (N === 1 / 0)
      return;
    const S = Math.max(0, Math.min(N, lg));
    if (!d(y)) {
      const x = h[y];
      x && clearTimeout(x), h[y] = setTimeout(() => {
        d(y) || O.dispatch(a({
          queryCacheKey: y
        })), delete h[y];
      }, S * 1e3);
    }
  }
  return p;
}, Oo = new Error("Promise never resolved before cacheEntryRemoved."), fg = ({
  api: e,
  reducerPath: t,
  context: r,
  queryThunk: n,
  mutationThunk: s,
  internalState: i,
  selectors: {
    selectQueryEntry: o,
    selectApiState: a
  }
}) => {
  const c = Cs(n), l = Cs(s), u = Xe(n, s), d = {};
  function h(g, O, b) {
    const E = d[g];
    E?.valueResolved && (E.valueResolved({
      data: O,
      meta: b
    }), delete E.valueResolved);
  }
  function p(g) {
    const O = d[g];
    O && (delete d[g], O.cacheEntryRemoved());
  }
  const v = (g, O, b) => {
    const E = m(g);
    function N(S, x, M, F) {
      const _ = o(b, x), w = o(O.getState(), x);
      !_ && w && y(S, F, x, O, M);
    }
    if (n.pending.match(g))
      N(g.meta.arg.endpointName, E, g.meta.requestId, g.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(g))
      for (const {
        queryDescription: S,
        value: x
      } of g.payload) {
        const {
          endpointName: M,
          originalArgs: F,
          queryCacheKey: _
        } = S;
        N(M, _, g.meta.requestId, F), h(_, x, {});
      }
    else if (s.pending.match(g))
      O.getState()[t].mutations[E] && y(g.meta.arg.endpointName, g.meta.arg.originalArgs, E, O, g.meta.requestId);
    else if (u(g))
      h(E, g.payload, g.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(g) || e.internalActions.removeMutationResult.match(g))
      p(E);
    else if (e.util.resetApiState.match(g))
      for (const S of Object.keys(d))
        p(S);
  };
  function m(g) {
    return c(g) ? g.meta.arg.queryCacheKey : l(g) ? g.meta.arg.fixedCacheKey ?? g.meta.requestId : e.internalActions.removeQueryResult.match(g) ? g.payload.queryCacheKey : e.internalActions.removeMutationResult.match(g) ? Jt(g.payload) : "";
  }
  function y(g, O, b, E, N) {
    const S = r.endpointDefinitions[g], x = S?.onCacheEntryAdded;
    if (!x) return;
    const M = {}, F = new Promise((R) => {
      M.cacheEntryRemoved = R;
    }), _ = Promise.race([new Promise((R) => {
      M.valueResolved = R;
    }), F.then(() => {
      throw Oo;
    })]);
    _.catch(() => {
    }), d[b] = M;
    const w = e.endpoints[g].select(rn(S) ? O : b), A = E.dispatch((R, V, I) => I), k = {
      ...E,
      getCacheEntry: () => w(E.getState()),
      requestId: N,
      extra: A,
      updateCachedData: rn(S) ? (R) => E.dispatch(e.util.updateQueryData(g, O, R)) : void 0,
      cacheDataLoaded: _,
      cacheEntryRemoved: F
    }, j = x(O, k);
    Promise.resolve(j).catch((R) => {
      if (R !== Oo)
        throw R;
    });
  }
  return v;
}, hg = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: r
}) => (n, s) => {
  e.util.resetApiState.match(n) && s.dispatch(e.internalActions.middlewareRegistered(t));
}, mg = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: r
  },
  mutationThunk: n,
  queryThunk: s,
  api: i,
  assertTagType: o,
  refetchQuery: a,
  internalState: c
}) => {
  const {
    removeQueryResult: l
  } = i.internalActions, u = Ue(Xe(n), xn(n)), d = Ue(Xe(n, s), kt(n, s));
  let h = [];
  const p = (y, g) => {
    u(y) ? m(Mc(y, "invalidatesTags", r, o), g) : d(y) ? m([], g) : i.util.invalidateTags.match(y) && m(fi(y.payload, void 0, void 0, void 0, void 0, o), g);
  };
  function v(y) {
    const {
      queries: g,
      mutations: O
    } = y;
    for (const b of [g, O])
      for (const E in b)
        if (b[E]?.status === "pending") return !0;
    return !1;
  }
  function m(y, g) {
    const O = g.getState(), b = O[e];
    if (h.push(...y), b.config.invalidationBehavior === "delayed" && v(b))
      return;
    const E = h;
    if (h = [], E.length === 0) return;
    const N = i.util.selectInvalidatedBy(O, E);
    t.batch(() => {
      const S = Array.from(N.values());
      for (const {
        queryCacheKey: x
      } of S) {
        const M = b.queries[x], F = c.currentSubscriptions[x] ?? {};
        M && (St(F) === 0 ? g.dispatch(l({
          queryCacheKey: x
        })) : M.status !== "uninitialized" && g.dispatch(a(M)));
      }
    });
  }
  return p;
}, pg = ({
  reducerPath: e,
  queryThunk: t,
  api: r,
  refetchQuery: n,
  internalState: s
}) => {
  const i = {}, o = (h, p) => {
    (r.internalActions.updateSubscriptionOptions.match(h) || r.internalActions.unsubscribeQueryResult.match(h)) && c(h.payload, p), (t.pending.match(h) || t.rejected.match(h) && h.meta.condition) && c(h.meta.arg, p), (t.fulfilled.match(h) || t.rejected.match(h) && !h.meta.condition) && a(h.meta.arg, p), r.util.resetApiState.match(h) && u();
  };
  function a({
    queryCacheKey: h
  }, p) {
    const v = p.getState()[e], m = v.queries[h], y = s.currentSubscriptions[h];
    if (!m || m.status === "uninitialized") return;
    const {
      lowestPollingInterval: g,
      skipPollingIfUnfocused: O
    } = d(y);
    if (!Number.isFinite(g)) return;
    const b = i[h];
    b?.timeout && (clearTimeout(b.timeout), b.timeout = void 0);
    const E = Date.now() + g;
    i[h] = {
      nextPollTimestamp: E,
      pollingInterval: g,
      timeout: setTimeout(() => {
        (v.config.focused || !O) && p.dispatch(n(m)), a({
          queryCacheKey: h
        }, p);
      }, g)
    };
  }
  function c({
    queryCacheKey: h
  }, p) {
    const m = p.getState()[e].queries[h], y = s.currentSubscriptions[h];
    if (!m || m.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: g
    } = d(y);
    if (!Number.isFinite(g)) {
      l(h);
      return;
    }
    const O = i[h], b = Date.now() + g;
    (!O || b < O.nextPollTimestamp) && a({
      queryCacheKey: h
    }, p);
  }
  function l(h) {
    const p = i[h];
    p?.timeout && clearTimeout(p.timeout), delete i[h];
  }
  function u() {
    for (const h of Object.keys(i))
      l(h);
  }
  function d(h = {}) {
    let p = !1, v = Number.POSITIVE_INFINITY;
    for (let m in h)
      h[m].pollingInterval && (v = Math.min(h[m].pollingInterval, v), p = h[m].skipPollingIfUnfocused || p);
    return {
      lowestPollingInterval: v,
      skipPollingIfUnfocused: p
    };
  }
  return o;
}, yg = ({
  api: e,
  context: t,
  queryThunk: r,
  mutationThunk: n
}) => {
  const s = ci(r, n), i = kt(r, n), o = Xe(r, n), a = {};
  return (l, u) => {
    if (s(l)) {
      const {
        requestId: d,
        arg: {
          endpointName: h,
          originalArgs: p
        }
      } = l.meta, v = t.endpointDefinitions[h], m = v?.onQueryStarted;
      if (m) {
        const y = {}, g = new Promise((N, S) => {
          y.resolve = N, y.reject = S;
        });
        g.catch(() => {
        }), a[d] = y;
        const O = e.endpoints[h].select(rn(v) ? p : d), b = u.dispatch((N, S, x) => x), E = {
          ...u,
          getCacheEntry: () => O(u.getState()),
          requestId: d,
          extra: b,
          updateCachedData: rn(v) ? (N) => u.dispatch(e.util.updateQueryData(h, p, N)) : void 0,
          queryFulfilled: g
        };
        m(p, E);
      }
    } else if (o(l)) {
      const {
        requestId: d,
        baseQueryMeta: h
      } = l.meta;
      a[d]?.resolve({
        data: l.payload,
        meta: h
      }), delete a[d];
    } else if (i(l)) {
      const {
        requestId: d,
        rejectedWithValue: h,
        baseQueryMeta: p
      } = l.meta;
      a[d]?.reject({
        error: l.payload ?? l.error,
        isUnhandledError: !h,
        meta: p
      }), delete a[d];
    }
  };
}, vg = ({
  reducerPath: e,
  context: t,
  api: r,
  refetchQuery: n,
  internalState: s
}) => {
  const {
    removeQueryResult: i
  } = r.internalActions, o = (c, l) => {
    li.match(c) && a(l, "refetchOnFocus"), di.match(c) && a(l, "refetchOnReconnect");
  };
  function a(c, l) {
    const u = c.getState()[e], d = u.queries, h = s.currentSubscriptions;
    t.batch(() => {
      for (const p of Object.keys(h)) {
        const v = d[p], m = h[p];
        if (!m || !v) continue;
        (Object.values(m).some((g) => g[l] === !0) || Object.values(m).every((g) => g[l] === void 0) && u.config[l]) && (St(m) === 0 ? c.dispatch(i({
          queryCacheKey: p
        })) : v.status !== "uninitialized" && c.dispatch(n(v)));
      }
    });
  }
  return o;
};
function gg(e) {
  const {
    reducerPath: t,
    queryThunk: r,
    api: n,
    context: s
  } = e, {
    apiUid: i
  } = s, o = {
    invalidateTags: ke(`${t}/invalidateTags`)
  }, a = (d) => d.type.startsWith(`${t}/`), c = [hg, dg, mg, pg, fg, yg];
  return {
    middleware: (d) => {
      let h = !1;
      const v = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: u,
        isThisApiSliceAction: a
      }, m = c.map((O) => O(v)), y = cg(v), g = vg(v);
      return (O) => (b) => {
        if (!ic(b))
          return O(b);
        h || (h = !0, d.dispatch(n.internalActions.middlewareRegistered(i)));
        const E = {
          ...d,
          next: O
        }, N = d.getState(), [S, x] = y(b, E, N);
        let M;
        if (S ? M = O(b) : M = x, d.getState()[t] && (g(b, E, N), a(b) || s.hasRehydrationInfo(b)))
          for (const F of m)
            F(b, E, N);
        return M;
      };
    },
    actions: o
  };
  function u(d) {
    return e.api.endpoints[d.endpointName].initiate(d.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var Co = /* @__PURE__ */ Symbol(), Oc = ({
  createSelector: e = ai
} = {}) => ({
  name: Co,
  init(t, {
    baseQuery: r,
    tagTypes: n,
    reducerPath: s,
    serializeQueryArgs: i,
    keepUnusedDataFor: o,
    refetchOnMountOrArgChange: a,
    refetchOnFocus: c,
    refetchOnReconnect: l,
    invalidationBehavior: u,
    onSchemaFailure: d,
    catchSchemaFailure: h,
    skipSchemaValidation: p
  }, v) {
    nv();
    const m = (B) => B;
    Object.assign(t, {
      reducerPath: s,
      endpoints: {},
      internalActions: {
        onOnline: di,
        onOffline: wc,
        onFocus: li,
        onFocusLost: xc
      },
      util: {}
    });
    const y = ag({
      serializeQueryArgs: i,
      reducerPath: s,
      createSelector: e
    }), {
      selectInvalidatedBy: g,
      selectCachedArgsForQuery: O,
      buildQuerySelector: b,
      buildInfiniteQuerySelector: E,
      buildMutationSelector: N
    } = y;
    $e(t.util, {
      selectInvalidatedBy: g,
      selectCachedArgsForQuery: O
    });
    const {
      queryThunk: S,
      infiniteQueryThunk: x,
      mutationThunk: M,
      patchQueryData: F,
      updateQueryData: _,
      upsertQueryData: w,
      prefetch: A,
      buildMatchThunkActions: k
    } = ig({
      baseQuery: r,
      reducerPath: s,
      context: v,
      api: t,
      serializeQueryArgs: i,
      assertTagType: m,
      selectors: y,
      onSchemaFailure: d,
      catchSchemaFailure: h,
      skipSchemaValidation: p
    }), {
      reducer: j,
      actions: R
    } = og({
      context: v,
      queryThunk: S,
      mutationThunk: M,
      serializeQueryArgs: i,
      reducerPath: s,
      assertTagType: m,
      config: {
        refetchOnFocus: c,
        refetchOnReconnect: l,
        refetchOnMountOrArgChange: a,
        keepUnusedDataFor: o,
        reducerPath: s,
        invalidationBehavior: u
      }
    });
    $e(t.util, {
      patchQueryData: F,
      updateQueryData: _,
      upsertQueryData: w,
      prefetch: A,
      resetApiState: R.resetApiState,
      upsertQueryEntries: R.cacheEntriesUpserted
    }), $e(t.internalActions, R);
    const {
      middleware: V,
      actions: I
    } = gg({
      reducerPath: s,
      context: v,
      queryThunk: S,
      mutationThunk: M,
      infiniteQueryThunk: x,
      api: t,
      assertTagType: m,
      selectors: y
    });
    $e(t.util, I), $e(t, {
      reducer: j,
      middleware: V
    });
    const {
      buildInitiateQuery: D,
      buildInitiateInfiniteQuery: T,
      buildInitiateMutation: $,
      getRunningMutationThunk: L,
      getRunningMutationsThunk: z,
      getRunningQueriesThunk: U,
      getRunningQueryThunk: K
    } = ng({
      queryThunk: S,
      mutationThunk: M,
      infiniteQueryThunk: x,
      api: t,
      serializeQueryArgs: i,
      context: v
    });
    return $e(t.util, {
      getRunningMutationThunk: L,
      getRunningMutationsThunk: z,
      getRunningQueryThunk: K,
      getRunningQueriesThunk: U
    }), {
      name: Co,
      injectEndpoint(B, W) {
        const le = t, Y = le.endpoints[B] ??= {};
        En(W) && $e(Y, {
          name: B,
          select: b(B, W),
          initiate: D(B, W)
        }, k(S, B)), eg(W) && $e(Y, {
          name: B,
          select: N(),
          initiate: $(B)
        }, k(M, B)), kn(W) && $e(Y, {
          name: B,
          select: E(B, W),
          initiate: T(B, W)
        }, k(S, B));
      }
    };
  }
});
Oc();
function Cr(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function bg(e) {
  return e.type === "query";
}
function Sg(e) {
  return e.type === "mutation";
}
function Cc(e) {
  return e.type === "infinitequery";
}
function Rt(e, ...t) {
  return Object.assign(e, ...t);
}
var Kn = Symbol();
function Jn(e, t, r, n) {
  const s = C.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: r,
      endpointName: n
    }) : e
  }), [e, t, r, n]), i = C.useRef(s);
  return C.useEffect(() => {
    i.current.serialized !== s.serialized && (i.current = s);
  }, [s]), i.current.serialized === s.serialized ? i.current.queryArgs : e;
}
function Nr(e) {
  const t = C.useRef(e);
  return C.useEffect(() => {
    Bt(t.current, e) || (t.current = e);
  }, [e]), Bt(t.current, e) ? t.current : e;
}
var xg = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wg = /* @__PURE__ */ xg(), Eg = () => typeof navigator < "u" && navigator.product === "ReactNative", kg = /* @__PURE__ */ Eg(), Mg = () => wg || kg ? C.useLayoutEffect : C.useEffect, _g = /* @__PURE__ */ Mg(), No = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: bc.pending
} : e;
function Xn(e, ...t) {
  const r = {};
  return t.forEach((n) => {
    r[n] = e[n];
  }), r;
}
var Zn = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function Fg({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: {
      useDispatch: r,
      useSelector: n,
      useStore: s
    },
    unstable__sideEffectsInRender: i,
    createSelector: o
  },
  serializeQueryArgs: a,
  context: c
}) {
  const l = i ? (E) => E() : C.useEffect;
  return {
    buildQueryHooks: g,
    buildInfiniteQueryHooks: O,
    buildMutationHook: b,
    usePrefetch: h
  };
  function u(E, N, S) {
    if (N?.endpointName && E.isUninitialized) {
      const {
        endpointName: A
      } = N, k = c.endpointDefinitions[A];
      S !== Ee && a({
        queryArgs: N.originalArgs,
        endpointDefinition: k,
        endpointName: A
      }) === a({
        queryArgs: S,
        endpointDefinition: k,
        endpointName: A
      }) && (N = void 0);
    }
    let x = E.isSuccess ? E.data : N?.data;
    x === void 0 && (x = E.data);
    const M = x !== void 0, F = E.isLoading, _ = (!N || N.isLoading || N.isUninitialized) && !M && F, w = E.isSuccess || M && (F && !N?.isError || E.isUninitialized);
    return {
      ...E,
      data: x,
      currentData: E.data,
      isFetching: F,
      isLoading: _,
      isSuccess: w
    };
  }
  function d(E, N, S) {
    if (N?.endpointName && E.isUninitialized) {
      const {
        endpointName: A
      } = N, k = c.endpointDefinitions[A];
      S !== Ee && a({
        queryArgs: N.originalArgs,
        endpointDefinition: k,
        endpointName: A
      }) === a({
        queryArgs: S,
        endpointDefinition: k,
        endpointName: A
      }) && (N = void 0);
    }
    let x = E.isSuccess ? E.data : N?.data;
    x === void 0 && (x = E.data);
    const M = x !== void 0, F = E.isLoading, _ = (!N || N.isLoading || N.isUninitialized) && !M && F, w = E.isSuccess || F && M;
    return {
      ...E,
      data: x,
      currentData: E.data,
      isFetching: F,
      isLoading: _,
      isSuccess: w
    };
  }
  function h(E, N) {
    const S = r(), x = Nr(N);
    return C.useCallback((M, F) => S(e.util.prefetch(E, M, {
      ...x,
      ...F
    })), [E, S, x]);
  }
  function p(E, N, {
    refetchOnReconnect: S,
    refetchOnFocus: x,
    refetchOnMountOrArgChange: M,
    skip: F = !1,
    pollingInterval: _ = 0,
    skipPollingIfUnfocused: w = !1,
    ...A
  } = {}) {
    const {
      initiate: k
    } = e.endpoints[E], j = r(), R = C.useRef(void 0);
    if (!R.current) {
      const B = j(e.internalActions.internal_getRTKQSubscriptions());
      R.current = B;
    }
    const V = Jn(
      F ? Ee : N,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      nn,
      c.endpointDefinitions[E],
      E
    ), I = Nr({
      refetchOnReconnect: S,
      refetchOnFocus: x,
      pollingInterval: _,
      skipPollingIfUnfocused: w
    }), D = A.initialPageParam, T = Nr(D), $ = C.useRef(void 0);
    let {
      queryCacheKey: L,
      requestId: z
    } = $.current || {}, U = !1;
    L && z && (U = R.current.isRequestSubscribed(L, z));
    const K = !U && $.current !== void 0;
    return l(() => {
      K && ($.current = void 0);
    }, [K]), l(() => {
      const B = $.current;
      if (V === Ee) {
        B?.unsubscribe(), $.current = void 0;
        return;
      }
      const W = $.current?.subscriptionOptions;
      if (!B || B.arg !== V) {
        B?.unsubscribe();
        const le = j(k(V, {
          subscriptionOptions: I,
          forceRefetch: M,
          ...Cc(c.endpointDefinitions[E]) ? {
            initialPageParam: T
          } : {}
        }));
        $.current = le;
      } else I !== W && B.updateSubscriptionOptions(I);
    }, [j, k, M, V, I, K, T, E]), [$, j, k, I];
  }
  function v(E, N) {
    return (x, {
      skip: M = !1,
      selectFromResult: F
    } = {}) => {
      const {
        select: _
      } = e.endpoints[E], w = Jn(M ? Ee : x, a, c.endpointDefinitions[E], E), A = C.useRef(void 0), k = C.useMemo(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        o([
          // @ts-ignore
          _(w),
          (D, T) => T,
          (D) => w
        ], N, {
          memoizeOptions: {
            resultEqualityCheck: Bt
          }
        })
      ), [_, w]), j = C.useMemo(() => F ? o([k], F, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : k, [k, F]), R = n((D) => j(D, A.current), Bt), V = s(), I = k(V.getState(), A.current);
      return _g(() => {
        A.current = I;
      }, [I]), R;
    };
  }
  function m(E) {
    C.useEffect(() => () => {
      E.current?.unsubscribe?.(), E.current = void 0;
    }, [E]);
  }
  function y(E) {
    if (!E.current) throw new Error(ye(38));
    return E.current.refetch();
  }
  function g(E) {
    const N = (M, F = {}) => {
      const [_] = p(E, M, F);
      return m(_), C.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => y(_)
      }), [_]);
    }, S = ({
      refetchOnReconnect: M,
      refetchOnFocus: F,
      pollingInterval: _ = 0,
      skipPollingIfUnfocused: w = !1
    } = {}) => {
      const {
        initiate: A
      } = e.endpoints[E], k = r(), [j, R] = C.useState(Kn), V = C.useRef(void 0), I = Nr({
        refetchOnReconnect: M,
        refetchOnFocus: F,
        pollingInterval: _,
        skipPollingIfUnfocused: w
      });
      l(() => {
        const L = V.current?.subscriptionOptions;
        I !== L && V.current?.updateSubscriptionOptions(I);
      }, [I]);
      const D = C.useRef(I);
      l(() => {
        D.current = I;
      }, [I]);
      const T = C.useCallback(function(L, z = !1) {
        let U;
        return t(() => {
          V.current?.unsubscribe(), V.current = U = k(A(L, {
            subscriptionOptions: D.current,
            forceRefetch: !z
          })), R(L);
        }), U;
      }, [k, A]), $ = C.useCallback(() => {
        V.current?.queryCacheKey && k(e.internalActions.removeQueryResult({
          queryCacheKey: V.current?.queryCacheKey
        }));
      }, [k]);
      return C.useEffect(() => () => {
        V?.current?.unsubscribe();
      }, []), C.useEffect(() => {
        j !== Kn && !V.current && T(j, !0);
      }, [j, T]), C.useMemo(() => [T, j, {
        reset: $
      }], [T, j, $]);
    }, x = v(E, u);
    return {
      useQueryState: x,
      useQuerySubscription: N,
      useLazyQuerySubscription: S,
      useLazyQuery(M) {
        const [F, _, {
          reset: w
        }] = S(M), A = x(_, {
          ...M,
          skip: _ === Kn
        }), k = C.useMemo(() => ({
          lastArg: _
        }), [_]);
        return C.useMemo(() => [F, {
          ...A,
          reset: w
        }, k], [F, A, w, k]);
      },
      useQuery(M, F) {
        const _ = N(M, F), w = x(M, {
          selectFromResult: M === Ee || F?.skip ? void 0 : No,
          ...F
        }), A = Xn(w, ...Zn);
        return C.useDebugValue(A), C.useMemo(() => ({
          ...w,
          ..._
        }), [w, _]);
      }
    };
  }
  function O(E) {
    const N = (x, M = {}) => {
      const [F, _, w, A] = p(E, x, M), k = C.useRef(A);
      l(() => {
        k.current = A;
      }, [A]);
      const j = C.useCallback(function(I, D) {
        let T;
        return t(() => {
          F.current?.unsubscribe(), F.current = T = _(w(I, {
            subscriptionOptions: k.current,
            direction: D
          }));
        }), T;
      }, [F, _, w]);
      m(F);
      const R = Jn(
        M.skip ? Ee : x,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        nn,
        c.endpointDefinitions[E],
        E
      ), V = C.useCallback(() => y(F), [F]);
      return C.useMemo(() => ({
        trigger: j,
        /**
         * A method to manually refetch data for the query
         */
        refetch: V,
        fetchNextPage: () => j(R, "forward"),
        fetchPreviousPage: () => j(R, "backward")
      }), [V, j, R]);
    }, S = v(E, d);
    return {
      useInfiniteQueryState: S,
      useInfiniteQuerySubscription: N,
      useInfiniteQuery(x, M) {
        const {
          refetch: F,
          fetchNextPage: _,
          fetchPreviousPage: w
        } = N(x, M), A = S(x, {
          selectFromResult: x === Ee || M?.skip ? void 0 : No,
          ...M
        }), k = Xn(A, ...Zn, "hasNextPage", "hasPreviousPage");
        return C.useDebugValue(k), C.useMemo(() => ({
          ...A,
          fetchNextPage: _,
          fetchPreviousPage: w,
          refetch: F
        }), [A, _, w, F]);
      }
    };
  }
  function b(E) {
    return ({
      selectFromResult: N,
      fixedCacheKey: S
    } = {}) => {
      const {
        select: x,
        initiate: M
      } = e.endpoints[E], F = r(), [_, w] = C.useState();
      C.useEffect(() => () => {
        _?.arg.fixedCacheKey || _?.reset();
      }, [_]);
      const A = C.useCallback(function(L) {
        const z = F(M(L, {
          fixedCacheKey: S
        }));
        return w(z), z;
      }, [F, M, S]), {
        requestId: k
      } = _ || {}, j = C.useMemo(() => x({
        fixedCacheKey: S,
        requestId: _?.requestId
      }), [S, _, x]), R = C.useMemo(() => N ? o([j], N) : j, [N, j]), V = n(R, Bt), I = S == null ? _?.arg.originalArgs : void 0, D = C.useCallback(() => {
        t(() => {
          _ && w(void 0), S && F(e.internalActions.removeMutationResult({
            requestId: k,
            fixedCacheKey: S
          }));
        });
      }, [F, S, _, k]), T = Xn(V, ...Zn, "endpointName");
      C.useDebugValue(T);
      const $ = C.useMemo(() => ({
        ...V,
        originalArgs: I,
        reset: D
      }), [V, I, D]);
      return C.useMemo(() => [A, $], [A, $]);
    };
  }
}
var Og = /* @__PURE__ */ Symbol(), Cg = ({
  batch: e = oy,
  hooks: t = {
    useDispatch: ry,
    useSelector: iy,
    useStore: Za
  },
  createSelector: r = ai,
  unstable__sideEffectsInRender: n = !1,
  ...s
} = {}) => ({
  name: Og,
  init(i, {
    serializeQueryArgs: o
  }, a) {
    const c = i, {
      buildQueryHooks: l,
      buildInfiniteQueryHooks: u,
      buildMutationHook: d,
      usePrefetch: h
    } = Fg({
      api: i,
      moduleOptions: {
        batch: e,
        hooks: t,
        unstable__sideEffectsInRender: n,
        createSelector: r
      },
      serializeQueryArgs: o,
      context: a
    });
    return Rt(c, {
      usePrefetch: h
    }), Rt(a, {
      batch: e
    }), {
      injectEndpoint(p, v) {
        if (bg(v)) {
          const {
            useQuery: m,
            useLazyQuery: y,
            useLazyQuerySubscription: g,
            useQueryState: O,
            useQuerySubscription: b
          } = l(p);
          Rt(c.endpoints[p], {
            useQuery: m,
            useLazyQuery: y,
            useLazyQuerySubscription: g,
            useQueryState: O,
            useQuerySubscription: b
          }), i[`use${Cr(p)}Query`] = m, i[`useLazy${Cr(p)}Query`] = y;
        }
        if (Sg(v)) {
          const m = d(p);
          Rt(c.endpoints[p], {
            useMutation: m
          }), i[`use${Cr(p)}Mutation`] = m;
        } else if (Cc(v)) {
          const {
            useInfiniteQuery: m,
            useInfiniteQuerySubscription: y,
            useInfiniteQueryState: g
          } = u(p);
          Rt(c.endpoints[p], {
            useInfiniteQuery: m,
            useInfiniteQuerySubscription: y,
            useInfiniteQueryState: g
          }), i[`use${Cr(p)}InfiniteQuery`] = m;
        }
      }
    };
  }
}), Ng = /* @__PURE__ */ Fc(Oc(), Cg());
const Ao = "appConfig", jo = rt({
  name: Ao,
  reducerPath: Ao,
  initialState: {},
  reducers: {
    appConfig: (e, t) => {
      const r = t.payload;
      er(r).forEach((n) => {
        e[n] = r[n];
      });
    }
  }
}), Ag = (e, t) => Ng({
  baseQuery: Bd(t),
  endpoints(r) {
    return {
      getEmployeeByEmail: r.query({
        query(n) {
          return e("employees").getEmployeeByEmail(n);
        }
      }),
      getValuesDictionary: r.query({
        query() {
          return e("values").getValues();
        }
      })
    };
  }
}), jg = (e) => {
  const t = Ev({
    reducer: xy(
      {
        key: "hcm-app",
        storage: cc,
        whitelist: [jo.name]
      },
      Yv(e, jo)
    ),
    middleware: (n) => n({
      serializableCheck: !1,
      immutableCheck: !1
    }).concat(e.middleware)
  }), r = Ay(t);
  return {
    store: t,
    persistor: r
  };
}, Pg = ({ children: e }) => {
  const t = hn(), r = Ld(t), [n] = C.useState(() => Ag((o) => r[o], t)), { persistor: s, store: i } = C.useMemo(() => jg(n), [n]);
  return /* @__PURE__ */ f.jsx(ey, { store: i, children: /* @__PURE__ */ f.jsx(va.Provider, { value: n, children: /* @__PURE__ */ f.jsx(ac, { persistor: s, children: e }) }) });
};
class Rg extends Xu {
  constructor(t) {
    super(), this.baseUrl = t;
  }
  async doFetchData() {
    return {
      HCM_API_BASE: this.baseUrl
    };
  }
}
function Tg() {
  return {
    thanks: up,
    employees: Qm,
    values: mp,
    profile: Wm
  };
}
const Ig = ({ children: e, baseApiUrl: t, alertController: r }) => {
  const n = C.useRef(!1), [s] = C.useState(() => new Lo()), [i] = C.useState(() => new Zd(s)), o = C.useMemo(() => Tg(), []), a = C.useMemo(() => new Yd(), []);
  function c() {
    er(o).forEach((l) => {
      i.registerAPIService(l, o[l]);
    }), s.registerService(Ls, new Rg(t)), s.registerService(wa, {
      show: (l) => {
        r && r.show(l);
      },
      hide: (l) => {
        r && r.hide(l);
      }
    }), a.initialize().then(() => {
      s.registerService(xa, a);
    });
  }
  return n.current || (c(), n.current = !0), /* @__PURE__ */ f.jsx(Ku, { servicesContainer: s, children: /* @__PURE__ */ f.jsx(ya, { createScope: () => i, children: /* @__PURE__ */ f.jsx(Pg, { children: e }) }) });
}, ab = ({ children: e, baseApiUrl: t, alertController: r }) => /* @__PURE__ */ f.jsx(H.ConfigProvider, { children: /* @__PURE__ */ f.jsx(Ig, { baseApiUrl: t, alertController: r, children: e }) });
export {
  ob as A,
  ib as H,
  ab as M,
  xt as u
};
