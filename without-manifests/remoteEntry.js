import { a as c, H as f } from "./HCMThanks__mf_v__runtimeInit__mf_v__-2EJ0RmwI.mjs";
import s from "./virtualExposes-CUcHlugn.mjs";
const o = {
  dayjs: async () => await import("./dayjs.min-DcGpCtNC.mjs").then((r) => r.d),
  lodash: async () => await import("./lodash-C15J_ex4.mjs").then((r) => r.l),
  "lottie-react": async () => await import("./index.es-CSYkpNmP.mjs"),
  react: async () => await import("./index-Af1Y_KAb.mjs").then((r) => r.i),
  "react-dom": async () => await import("./index-DTzblMxe.mjs").then((r) => r.i),
  skillgrid: async () => await import("./index.es-CgdkmYPl.mjs"),
  zod: async () => await import("./index-BFtNblOm.mjs")
}, n = {
  dayjs: {
    name: "dayjs",
    version: "1.11.13",
    scope: ["default"],
    loaded: !1,
    from: "HCMThanks",
    async get() {
      n.dayjs.loaded = !0;
      const { dayjs: e } = o, t = { ...await e() };
      return Object.defineProperty(t, "__esModule", {
        value: !0,
        enumerable: !1
      }), function() {
        return t;
      };
    },
    shareConfig: {
      singleton: !0,
      requiredVersion: "^1.11.13"
    }
  },
  lodash: {
    name: "lodash",
    version: "4.17.21",
    scope: ["default"],
    loaded: !1,
    from: "HCMThanks",
    async get() {
      n.lodash.loaded = !0;
      const { lodash: e } = o, t = { ...await e() };
      return Object.defineProperty(t, "__esModule", {
        value: !0,
        enumerable: !1
      }), function() {
        return t;
      };
    },
    shareConfig: {
      singleton: !0,
      requiredVersion: "^4.17.21"
    }
  },
  "lottie-react": {
    name: "lottie-react",
    version: "2.4.1",
    scope: ["default"],
    loaded: !1,
    from: "HCMThanks",
    async get() {
      n["lottie-react"].loaded = !0;
      const { "lottie-react": e } = o, t = { ...await e() };
      return Object.defineProperty(t, "__esModule", {
        value: !0,
        enumerable: !1
      }), function() {
        return t;
      };
    },
    shareConfig: {
      singleton: !0,
      requiredVersion: "^2.4.1"
    }
  },
  react: {
    name: "react",
    version: "18.3.1",
    scope: ["default"],
    loaded: !1,
    from: "HCMThanks",
    async get() {
      n.react.loaded = !0;
      const { react: e } = o, t = { ...await e() };
      return Object.defineProperty(t, "__esModule", {
        value: !0,
        enumerable: !1
      }), function() {
        return t;
      };
    },
    shareConfig: {
      singleton: !0,
      requiredVersion: "^18.3.1"
    }
  },
  "react-dom": {
    name: "react-dom",
    version: "18.3.1",
    scope: ["default"],
    loaded: !1,
    from: "HCMThanks",
    async get() {
      n["react-dom"].loaded = !0;
      const { "react-dom": e } = o, t = { ...await e() };
      return Object.defineProperty(t, "__esModule", {
        value: !0,
        enumerable: !1
      }), function() {
        return t;
      };
    },
    shareConfig: {
      singleton: !0,
      requiredVersion: "^18.3.1"
    }
  },
  skillgrid: {
    name: "skillgrid",
    version: "0.0.36",
    scope: ["default"],
    loaded: !1,
    from: "HCMThanks",
    async get() {
      n.skillgrid.loaded = !0;
      const { skillgrid: e } = o, t = { ...await e() };
      return Object.defineProperty(t, "__esModule", {
        value: !0,
        enumerable: !1
      }), function() {
        return t;
      };
    },
    shareConfig: {
      singleton: !0,
      requiredVersion: "^0.0.36"
    }
  },
  zod: {
    name: "zod",
    version: "3.21.4",
    scope: ["default"],
    loaded: !1,
    from: "HCMThanks",
    async get() {
      n.zod.loaded = !0;
      const { zod: e } = o, t = { ...await e() };
      return Object.defineProperty(t, "__esModule", {
        value: !0,
        enumerable: !1
      }), function() {
        return t;
      };
    },
    shareConfig: {
      singleton: !0,
      requiredVersion: "^3.21.4"
    }
  }
}, p = [], i = {}, l = "default", u = "HCMThanks";
async function k(e = {}, r = []) {
  const t = c({
    name: u,
    remotes: p,
    shared: n,
    plugins: [],
    shareStrategy: "version-first"
  });
  var a = i[l];
  if (a || (a = i[l] = { from: u }), !(r.indexOf(a) >= 0)) {
    r.push(a), t.initShareScopeMap("default", e);
    try {
      await Promise.all(await t.initializeSharing("default", {
        strategy: "version-first",
        from: "build",
        initScope: r
      }));
    } catch (d) {
      console.error(d);
    }
    return f.initResolve(t), t;
  }
}
function y(e) {
  if (!(e in s)) throw new Error(`Module ${e} does not exist in container.`);
  return s[e]().then((r) => () => r);
}
export {
  y as get,
  k as init
};
