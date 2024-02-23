import { j as es, k as fc, r as dc, l as Mr } from "./main-55ef2e00.js";
import { e as Dr, b as ri, r as Pt, s as ts, a as rs, d as is, g as pc, h as ii, i as Ot, j as ss, k as Us, c as gc, l as mc, f as ns, m as yc, n as as, o as os, q as $t, J as sr, H as nr } from "./http-dd7173cd.js";
var cs = { exports: {} }, ir = typeof Reflect == "object" ? Reflect : null, Fs = ir && typeof ir.apply == "function" ? ir.apply : function(e, t, i) {
  return Function.prototype.apply.call(e, t, i);
}, Br;
ir && typeof ir.ownKeys == "function" ? Br = ir.ownKeys : Object.getOwnPropertySymbols ? Br = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Br = function(e) {
  return Object.getOwnPropertyNames(e);
};
function bc(r) {
  console && console.warn && console.warn(r);
}
var aa = Number.isNaN || function(e) {
  return e !== e;
};
function Ie() {
  Ie.init.call(this);
}
cs.exports = Ie;
cs.exports.once = _c;
Ie.EventEmitter = Ie;
Ie.prototype._events = void 0;
Ie.prototype._eventsCount = 0;
Ie.prototype._maxListeners = void 0;
var $s = 10;
function si(r) {
  if (typeof r != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
}
Object.defineProperty(Ie, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return $s;
  },
  set: function(r) {
    if (typeof r != "number" || r < 0 || aa(r))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + r + ".");
    $s = r;
  }
});
Ie.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ie.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || aa(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function oa(r) {
  return r._maxListeners === void 0 ? Ie.defaultMaxListeners : r._maxListeners;
}
Ie.prototype.getMaxListeners = function() {
  return oa(this);
};
Ie.prototype.emit = function(e) {
  for (var t = [], i = 1; i < arguments.length; i++)
    t.push(arguments[i]);
  var s = e === "error", o = this._events;
  if (o !== void 0)
    s = s && o.error === void 0;
  else if (!s)
    return !1;
  if (s) {
    var p;
    if (t.length > 0 && (p = t[0]), p instanceof Error)
      throw p;
    var h = new Error("Unhandled error." + (p ? " (" + p.message + ")" : ""));
    throw h.context = p, h;
  }
  var g = o[e];
  if (g === void 0)
    return !1;
  if (typeof g == "function")
    Fs(g, this, t);
  else
    for (var m = g.length, b = fa(g, m), i = 0; i < m; ++i)
      Fs(b[i], this, t);
  return !0;
};
function ca(r, e, t, i) {
  var s, o, p;
  if (si(t), o = r._events, o === void 0 ? (o = r._events = /* @__PURE__ */ Object.create(null), r._eventsCount = 0) : (o.newListener !== void 0 && (r.emit(
    "newListener",
    e,
    t.listener ? t.listener : t
  ), o = r._events), p = o[e]), p === void 0)
    p = o[e] = t, ++r._eventsCount;
  else if (typeof p == "function" ? p = o[e] = i ? [t, p] : [p, t] : i ? p.unshift(t) : p.push(t), s = oa(r), s > 0 && p.length > s && !p.warned) {
    p.warned = !0;
    var h = new Error("Possible EventEmitter memory leak detected. " + p.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    h.name = "MaxListenersExceededWarning", h.emitter = r, h.type = e, h.count = p.length, bc(h);
  }
  return r;
}
Ie.prototype.addListener = function(e, t) {
  return ca(this, e, t, !1);
};
Ie.prototype.on = Ie.prototype.addListener;
Ie.prototype.prependListener = function(e, t) {
  return ca(this, e, t, !0);
};
function wc() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function ha(r, e, t) {
  var i = { fired: !1, wrapFn: void 0, target: r, type: e, listener: t }, s = wc.bind(i);
  return s.listener = t, i.wrapFn = s, s;
}
Ie.prototype.once = function(e, t) {
  return si(t), this.on(e, ha(this, e, t)), this;
};
Ie.prototype.prependOnceListener = function(e, t) {
  return si(t), this.prependListener(e, ha(this, e, t)), this;
};
Ie.prototype.removeListener = function(e, t) {
  var i, s, o, p, h;
  if (si(t), s = this._events, s === void 0)
    return this;
  if (i = s[e], i === void 0)
    return this;
  if (i === t || i.listener === t)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, i.listener || t));
  else if (typeof i != "function") {
    for (o = -1, p = i.length - 1; p >= 0; p--)
      if (i[p] === t || i[p].listener === t) {
        h = i[p].listener, o = p;
        break;
      }
    if (o < 0)
      return this;
    o === 0 ? i.shift() : Ec(i, o), i.length === 1 && (s[e] = i[0]), s.removeListener !== void 0 && this.emit("removeListener", e, h || t);
  }
  return this;
};
Ie.prototype.off = Ie.prototype.removeListener;
Ie.prototype.removeAllListeners = function(e) {
  var t, i, s;
  if (i = this._events, i === void 0)
    return this;
  if (i.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete i[e]), this;
  if (arguments.length === 0) {
    var o = Object.keys(i), p;
    for (s = 0; s < o.length; ++s)
      p = o[s], p !== "removeListener" && this.removeAllListeners(p);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (t = i[e], typeof t == "function")
    this.removeListener(e, t);
  else if (t !== void 0)
    for (s = t.length - 1; s >= 0; s--)
      this.removeListener(e, t[s]);
  return this;
};
function ua(r, e, t) {
  var i = r._events;
  if (i === void 0)
    return [];
  var s = i[e];
  return s === void 0 ? [] : typeof s == "function" ? t ? [s.listener || s] : [s] : t ? vc(s) : fa(s, s.length);
}
Ie.prototype.listeners = function(e) {
  return ua(this, e, !0);
};
Ie.prototype.rawListeners = function(e) {
  return ua(this, e, !1);
};
Ie.listenerCount = function(r, e) {
  return typeof r.listenerCount == "function" ? r.listenerCount(e) : la.call(r, e);
};
Ie.prototype.listenerCount = la;
function la(r) {
  var e = this._events;
  if (e !== void 0) {
    var t = e[r];
    if (typeof t == "function")
      return 1;
    if (t !== void 0)
      return t.length;
  }
  return 0;
}
Ie.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Br(this._events) : [];
};
function fa(r, e) {
  for (var t = new Array(e), i = 0; i < e; ++i)
    t[i] = r[i];
  return t;
}
function Ec(r, e) {
  for (; e + 1 < r.length; e++)
    r[e] = r[e + 1];
  r.pop();
}
function vc(r) {
  for (var e = new Array(r.length), t = 0; t < e.length; ++t)
    e[t] = r[t].listener || r[t];
  return e;
}
function _c(r, e) {
  return new Promise(function(t, i) {
    function s(p) {
      r.removeListener(e, o), i(p);
    }
    function o() {
      typeof r.removeListener == "function" && r.removeListener("error", s), t([].slice.call(arguments));
    }
    da(r, e, o, { once: !0 }), e !== "error" && Dc(r, s, { once: !0 });
  });
}
function Dc(r, e, t) {
  typeof r.on == "function" && da(r, "error", e, t);
}
function da(r, e, t, i) {
  if (typeof r.on == "function")
    i.once ? r.once(e, t) : r.on(e, t);
  else if (typeof r.addEventListener == "function")
    r.addEventListener(e, function s(o) {
      i.once && r.removeEventListener(e, s), t(o);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof r);
}
var wt = cs.exports;
const hs = /* @__PURE__ */ es(wt), Sc = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, Ic = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Oc = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function xc(r, e) {
  if (r === "__proto__" || r === "constructor" && e && typeof e == "object" && "prototype" in e) {
    Cc(r);
    return;
  }
  return e;
}
function Cc(r) {
  console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`);
}
function jr(r, e = {}) {
  if (typeof r != "string")
    return r;
  const t = r.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    r[0] === '"' && r.at(-1) === '"' && !r.includes("\\")
  )
    return t.slice(1, -1);
  if (t.length <= 9) {
    const i = t.toLowerCase();
    if (i === "true")
      return !0;
    if (i === "false")
      return !1;
    if (i === "undefined")
      return;
    if (i === "null")
      return null;
    if (i === "nan")
      return Number.NaN;
    if (i === "infinity")
      return Number.POSITIVE_INFINITY;
    if (i === "-infinity")
      return Number.NEGATIVE_INFINITY;
  }
  if (!Oc.test(r)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return r;
  }
  try {
    if (Sc.test(r) || Ic.test(r)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(r, xc);
    }
    return JSON.parse(r);
  } catch (i) {
    if (e.strict)
      throw i;
    return r;
  }
}
function Nc(r) {
  return !r || typeof r.then != "function" ? Promise.resolve(r) : r;
}
function Je(r, ...e) {
  try {
    return Nc(r(...e));
  } catch (t) {
    return Promise.reject(t);
  }
}
function Ac(r) {
  const e = typeof r;
  return r === null || e !== "object" && e !== "function";
}
function Pc(r) {
  const e = Object.getPrototypeOf(r);
  return !e || e.isPrototypeOf(Object);
}
function Vr(r) {
  if (Ac(r))
    return String(r);
  if (Pc(r) || Array.isArray(r))
    return JSON.stringify(r);
  if (typeof r.toJSON == "function")
    return Vr(r.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function pa() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Fi = "base64:";
function Tc(r) {
  if (typeof r == "string")
    return r;
  pa();
  const e = Buffer.from(r).toString("base64");
  return Fi + e;
}
function Rc(r) {
  return typeof r != "string" || !r.startsWith(Fi) ? r : (pa(), Buffer.from(r.slice(Fi.length), "base64"));
}
function ht(r) {
  return r ? r.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function Uc(...r) {
  return ht(r.join(":"));
}
function Hr(r) {
  return r = ht(r), r ? r + ":" : "";
}
const Fc = "memory", $c = () => {
  const r = /* @__PURE__ */ new Map();
  return {
    name: Fc,
    options: {},
    hasItem(e) {
      return r.has(e);
    },
    getItem(e) {
      return r.get(e) ?? null;
    },
    getItemRaw(e) {
      return r.get(e) ?? null;
    },
    setItem(e, t) {
      r.set(e, t);
    },
    setItemRaw(e, t) {
      r.set(e, t);
    },
    removeItem(e) {
      r.delete(e);
    },
    getKeys() {
      return Array.from(r.keys());
    },
    clear() {
      r.clear();
    },
    dispose() {
      r.clear();
    }
  };
};
function Lc(r = {}) {
  const e = {
    mounts: { "": r.driver || $c() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, t = (m) => {
    for (const b of e.mountpoints)
      if (m.startsWith(b))
        return {
          base: b,
          relativeKey: m.slice(b.length),
          driver: e.mounts[b]
        };
    return {
      base: "",
      relativeKey: m,
      driver: e.mounts[""]
    };
  }, i = (m, b) => e.mountpoints.filter(
    (E) => E.startsWith(m) || b && m.startsWith(E)
  ).map((E) => ({
    relativeBase: m.length > E.length ? m.slice(E.length) : void 0,
    mountpoint: E,
    driver: e.mounts[E]
  })), s = (m, b) => {
    if (e.watching) {
      b = ht(b);
      for (const E of e.watchListeners)
        E(m, b);
    }
  }, o = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const m in e.mounts)
        e.unwatch[m] = await Ls(
          e.mounts[m],
          s,
          m
        );
    }
  }, p = async () => {
    if (e.watching) {
      for (const m in e.unwatch)
        await e.unwatch[m]();
      e.unwatch = {}, e.watching = !1;
    }
  }, h = (m, b, E) => {
    const S = /* @__PURE__ */ new Map(), D = (_) => {
      let A = S.get(_.base);
      return A || (A = {
        driver: _.driver,
        base: _.base,
        items: []
      }, S.set(_.base, A)), A;
    };
    for (const _ of m) {
      const A = typeof _ == "string", R = ht(A ? _ : _.key), M = A ? void 0 : _.value, c = A || !_.options ? b : { ...b, ..._.options }, y = t(R);
      D(y).items.push({
        key: R,
        value: M,
        relativeKey: y.relativeKey,
        options: c
      });
    }
    return Promise.all([...S.values()].map((_) => E(_))).then(
      (_) => _.flat()
    );
  }, g = {
    // Item
    hasItem(m, b = {}) {
      m = ht(m);
      const { relativeKey: E, driver: S } = t(m);
      return Je(S.hasItem, E, b);
    },
    getItem(m, b = {}) {
      m = ht(m);
      const { relativeKey: E, driver: S } = t(m);
      return Je(S.getItem, E, b).then(
        (D) => jr(D)
      );
    },
    getItems(m, b) {
      return h(m, b, (E) => E.driver.getItems ? Je(
        E.driver.getItems,
        E.items.map((S) => ({
          key: S.relativeKey,
          options: S.options
        })),
        b
      ).then(
        (S) => S.map((D) => ({
          key: Uc(E.base, D.key),
          value: jr(D.value)
        }))
      ) : Promise.all(
        E.items.map((S) => Je(
          E.driver.getItem,
          S.relativeKey,
          S.options
        ).then((D) => ({
          key: S.key,
          value: jr(D)
        })))
      ));
    },
    getItemRaw(m, b = {}) {
      m = ht(m);
      const { relativeKey: E, driver: S } = t(m);
      return S.getItemRaw ? Je(S.getItemRaw, E, b) : Je(S.getItem, E, b).then(
        (D) => Rc(D)
      );
    },
    async setItem(m, b, E = {}) {
      if (b === void 0)
        return g.removeItem(m);
      m = ht(m);
      const { relativeKey: S, driver: D } = t(m);
      D.setItem && (await Je(D.setItem, S, Vr(b), E), D.watch || s("update", m));
    },
    async setItems(m, b) {
      await h(m, b, async (E) => {
        E.driver.setItems && await Je(
          E.driver.setItems,
          E.items.map((S) => ({
            key: S.relativeKey,
            value: Vr(S.value),
            options: S.options
          })),
          b
        ), E.driver.setItem && await Promise.all(
          E.items.map((S) => Je(
            E.driver.setItem,
            S.relativeKey,
            Vr(S.value),
            S.options
          ))
        );
      });
    },
    async setItemRaw(m, b, E = {}) {
      if (b === void 0)
        return g.removeItem(m, E);
      m = ht(m);
      const { relativeKey: S, driver: D } = t(m);
      if (D.setItemRaw)
        await Je(D.setItemRaw, S, b, E);
      else if (D.setItem)
        await Je(D.setItem, S, Tc(b), E);
      else
        return;
      D.watch || s("update", m);
    },
    async removeItem(m, b = {}) {
      typeof b == "boolean" && (b = { removeMeta: b }), m = ht(m);
      const { relativeKey: E, driver: S } = t(m);
      S.removeItem && (await Je(S.removeItem, E, b), (b.removeMeta || b.removeMata) && await Je(S.removeItem, E + "$", b), S.watch || s("remove", m));
    },
    // Meta
    async getMeta(m, b = {}) {
      typeof b == "boolean" && (b = { nativeOnly: b }), m = ht(m);
      const { relativeKey: E, driver: S } = t(m), D = /* @__PURE__ */ Object.create(null);
      if (S.getMeta && Object.assign(D, await Je(S.getMeta, E, b)), !b.nativeOnly) {
        const _ = await Je(
          S.getItem,
          E + "$",
          b
        ).then((A) => jr(A));
        _ && typeof _ == "object" && (typeof _.atime == "string" && (_.atime = new Date(_.atime)), typeof _.mtime == "string" && (_.mtime = new Date(_.mtime)), Object.assign(D, _));
      }
      return D;
    },
    setMeta(m, b, E = {}) {
      return this.setItem(m + "$", b, E);
    },
    removeMeta(m, b = {}) {
      return this.removeItem(m + "$", b);
    },
    // Keys
    async getKeys(m, b = {}) {
      m = Hr(m);
      const E = i(m, !0);
      let S = [];
      const D = [];
      for (const _ of E) {
        const R = (await Je(
          _.driver.getKeys,
          _.relativeBase,
          b
        )).map((M) => _.mountpoint + ht(M)).filter((M) => !S.some((c) => M.startsWith(c)));
        D.push(...R), S = [
          _.mountpoint,
          ...S.filter((M) => !M.startsWith(_.mountpoint))
        ];
      }
      return m ? D.filter((_) => _.startsWith(m) && !_.endsWith("$")) : D.filter((_) => !_.endsWith("$"));
    },
    // Utils
    async clear(m, b = {}) {
      m = Hr(m), await Promise.all(
        i(m, !1).map(async (E) => {
          if (E.driver.clear)
            return Je(E.driver.clear, E.relativeBase, b);
          if (E.driver.removeItem) {
            const S = await E.driver.getKeys(E.relativeBase || "", b);
            return Promise.all(
              S.map((D) => E.driver.removeItem(D, b))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((m) => Ms(m))
      );
    },
    async watch(m) {
      return await o(), e.watchListeners.push(m), async () => {
        e.watchListeners = e.watchListeners.filter(
          (b) => b !== m
        ), e.watchListeners.length === 0 && await p();
      };
    },
    async unwatch() {
      e.watchListeners = [], await p();
    },
    // Mount
    mount(m, b) {
      if (m = Hr(m), m && e.mounts[m])
        throw new Error(`already mounted at ${m}`);
      return m && (e.mountpoints.push(m), e.mountpoints.sort((E, S) => S.length - E.length)), e.mounts[m] = b, e.watching && Promise.resolve(Ls(b, s, m)).then((E) => {
        e.unwatch[m] = E;
      }).catch(console.error), g;
    },
    async unmount(m, b = !0) {
      m = Hr(m), !(!m || !e.mounts[m]) && (e.watching && m in e.unwatch && (e.unwatch[m](), delete e.unwatch[m]), b && await Ms(e.mounts[m]), e.mountpoints = e.mountpoints.filter((E) => E !== m), delete e.mounts[m]);
    },
    getMount(m = "") {
      m = ht(m) + ":";
      const b = t(m);
      return {
        driver: b.driver,
        base: b.base
      };
    },
    getMounts(m = "", b = {}) {
      return m = ht(m), i(m, b.parents).map((S) => ({
        driver: S.driver,
        base: S.mountpoint
      }));
    }
  };
  return g;
}
function Ls(r, e, t) {
  return r.watch ? r.watch((i, s) => e(i, t + s)) : () => {
  };
}
async function Ms(r) {
  typeof r.dispose == "function" && await Je(r.dispose);
}
function Jt(r) {
  return new Promise((e, t) => {
    r.oncomplete = r.onsuccess = () => e(r.result), r.onabort = r.onerror = () => t(r.error);
  });
}
function ga(r, e) {
  const t = indexedDB.open(r);
  t.onupgradeneeded = () => t.result.createObjectStore(e);
  const i = Jt(t);
  return (s, o) => i.then((p) => o(p.transaction(e, s).objectStore(e)));
}
let gi;
function Sr() {
  return gi || (gi = ga("keyval-store", "keyval")), gi;
}
function js(r, e = Sr()) {
  return e("readonly", (t) => Jt(t.get(r)));
}
function Mc(r, e, t = Sr()) {
  return t("readwrite", (i) => (i.put(e, r), Jt(i.transaction)));
}
function jc(r, e = Sr()) {
  return e("readwrite", (t) => (t.delete(r), Jt(t.transaction)));
}
function Hc(r = Sr()) {
  return r("readwrite", (e) => (e.clear(), Jt(e.transaction)));
}
function qc(r, e) {
  return r.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, Jt(r.transaction);
}
function zc(r = Sr()) {
  return r("readonly", (e) => {
    if (e.getAllKeys)
      return Jt(e.getAllKeys());
    const t = [];
    return qc(e, (i) => t.push(i.key)).then(() => t);
  });
}
const Kc = "idb-keyval";
var Bc = (r = {}) => {
  const e = r.base && r.base.length > 0 ? `${r.base}:` : "", t = (s) => e + s;
  let i;
  return r.dbName && r.storeName && (i = ga(r.dbName, r.storeName)), { name: Kc, options: r, async hasItem(s) {
    return !(typeof await js(t(s), i) > "u");
  }, async getItem(s) {
    return await js(t(s), i) ?? null;
  }, setItem(s, o) {
    return Mc(t(s), o, i);
  }, removeItem(s) {
    return jc(t(s), i);
  }, getKeys() {
    return zc(i);
  }, clear() {
    return Hc(i);
  } };
};
const Vc = "WALLET_CONNECT_V2_INDEXED_DB", Gc = "keyvaluestorage";
let kc = class {
  constructor() {
    this.indexedDb = Lc({ driver: Bc({ dbName: Vc, storeName: Gc }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e) => [e.key, e.value]);
  }
  async getItem(e) {
    const t = await this.indexedDb.getItem(e);
    if (t !== null)
      return t;
  }
  async setItem(e, t) {
    await this.indexedDb.setItem(e, Dr(t));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var mi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gr = { exports: {} };
(function() {
  let r;
  function e() {
  }
  r = e, r.prototype.getItem = function(t) {
    return this.hasOwnProperty(t) ? String(this[t]) : null;
  }, r.prototype.setItem = function(t, i) {
    this[t] = String(i);
  }, r.prototype.removeItem = function(t) {
    delete this[t];
  }, r.prototype.clear = function() {
    const t = this;
    Object.keys(t).forEach(function(i) {
      t[i] = void 0, delete t[i];
    });
  }, r.prototype.key = function(t) {
    return t = t || 0, Object.keys(this)[t];
  }, r.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof mi < "u" && mi.localStorage ? Gr.exports = mi.localStorage : typeof window < "u" && window.localStorage ? Gr.exports = window.localStorage : Gr.exports = new e();
})();
function Wc(r) {
  var e;
  return [r[0], ri((e = r[1]) != null ? e : "")];
}
let Yc = class {
  constructor() {
    this.localStorage = Gr.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Wc);
  }
  async getItem(e) {
    const t = this.localStorage.getItem(e);
    if (t !== null)
      return ri(t);
  }
  async setItem(e, t) {
    this.localStorage.setItem(e, Dr(t));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
};
const Jc = "wc_storage_version", Hs = 1, Xc = async (r, e, t) => {
  const i = Jc, s = await e.getItem(i);
  if (s && s >= Hs) {
    t(e);
    return;
  }
  const o = await r.getKeys();
  if (!o.length) {
    t(e);
    return;
  }
  const p = [];
  for (; o.length; ) {
    const h = o.shift();
    if (!h)
      continue;
    const g = h.toLowerCase();
    if (g.includes("wc@") || g.includes("walletconnect") || g.includes("wc_") || g.includes("wallet_connect")) {
      const m = await r.getItem(h);
      await e.setItem(h, m), p.push(h);
    }
  }
  await e.setItem(i, Hs), t(e), Qc(r, p);
}, Qc = async (r, e) => {
  e.length && e.forEach(async (t) => {
    await r.removeItem(t);
  });
};
let Zc = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (t) => {
      this.storage = t, this.initialized = !0;
    };
    const e = new Yc();
    this.storage = e;
    try {
      const t = new kc();
      Xc(e, t, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(e) {
    return await this.initialize(), this.storage.getItem(e);
  }
  async setItem(e, t) {
    return await this.initialize(), this.storage.setItem(e, t);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized || await new Promise((e) => {
      const t = setInterval(() => {
        this.initialized && (clearInterval(t), e());
      }, 20);
    });
  }
};
var Z = {}, yi = {}, dr = {}, qs;
function eh() {
  if (qs)
    return dr;
  qs = 1, Object.defineProperty(dr, "__esModule", { value: !0 }), dr.delay = void 0;
  function r(e) {
    return new Promise((t) => {
      setTimeout(() => {
        t(!0);
      }, e);
    });
  }
  return dr.delay = r, dr;
}
var Bt = {}, bi = {}, Vt = {}, zs;
function th() {
  return zs || (zs = 1, Object.defineProperty(Vt, "__esModule", { value: !0 }), Vt.ONE_THOUSAND = Vt.ONE_HUNDRED = void 0, Vt.ONE_HUNDRED = 100, Vt.ONE_THOUSAND = 1e3), Vt;
}
var wi = {}, Ks;
function rh() {
  return Ks || (Ks = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), r.ONE_YEAR = r.FOUR_WEEKS = r.THREE_WEEKS = r.TWO_WEEKS = r.ONE_WEEK = r.THIRTY_DAYS = r.SEVEN_DAYS = r.FIVE_DAYS = r.THREE_DAYS = r.ONE_DAY = r.TWENTY_FOUR_HOURS = r.TWELVE_HOURS = r.SIX_HOURS = r.THREE_HOURS = r.ONE_HOUR = r.SIXTY_MINUTES = r.THIRTY_MINUTES = r.TEN_MINUTES = r.FIVE_MINUTES = r.ONE_MINUTE = r.SIXTY_SECONDS = r.THIRTY_SECONDS = r.TEN_SECONDS = r.FIVE_SECONDS = r.ONE_SECOND = void 0, r.ONE_SECOND = 1, r.FIVE_SECONDS = 5, r.TEN_SECONDS = 10, r.THIRTY_SECONDS = 30, r.SIXTY_SECONDS = 60, r.ONE_MINUTE = r.SIXTY_SECONDS, r.FIVE_MINUTES = r.ONE_MINUTE * 5, r.TEN_MINUTES = r.ONE_MINUTE * 10, r.THIRTY_MINUTES = r.ONE_MINUTE * 30, r.SIXTY_MINUTES = r.ONE_MINUTE * 60, r.ONE_HOUR = r.SIXTY_MINUTES, r.THREE_HOURS = r.ONE_HOUR * 3, r.SIX_HOURS = r.ONE_HOUR * 6, r.TWELVE_HOURS = r.ONE_HOUR * 12, r.TWENTY_FOUR_HOURS = r.ONE_HOUR * 24, r.ONE_DAY = r.TWENTY_FOUR_HOURS, r.THREE_DAYS = r.ONE_DAY * 3, r.FIVE_DAYS = r.ONE_DAY * 5, r.SEVEN_DAYS = r.ONE_DAY * 7, r.THIRTY_DAYS = r.ONE_DAY * 30, r.ONE_WEEK = r.SEVEN_DAYS, r.TWO_WEEKS = r.ONE_WEEK * 2, r.THREE_WEEKS = r.ONE_WEEK * 3, r.FOUR_WEEKS = r.ONE_WEEK * 4, r.ONE_YEAR = r.ONE_DAY * 365;
  }(wi)), wi;
}
var Bs;
function ma() {
  return Bs || (Bs = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 });
    const e = Pt;
    e.__exportStar(th(), r), e.__exportStar(rh(), r);
  }(bi)), bi;
}
var Vs;
function ih() {
  if (Vs)
    return Bt;
  Vs = 1, Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.fromMiliseconds = Bt.toMiliseconds = void 0;
  const r = ma();
  function e(i) {
    return i * r.ONE_THOUSAND;
  }
  Bt.toMiliseconds = e;
  function t(i) {
    return Math.floor(i / r.ONE_THOUSAND);
  }
  return Bt.fromMiliseconds = t, Bt;
}
var Gs;
function sh() {
  return Gs || (Gs = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 });
    const e = Pt;
    e.__exportStar(eh(), r), e.__exportStar(ih(), r);
  }(yi)), yi;
}
var rr = {}, ks;
function nh() {
  if (ks)
    return rr;
  ks = 1, Object.defineProperty(rr, "__esModule", { value: !0 }), rr.Watch = void 0;
  class r {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(t) {
      if (this.timestamps.has(t))
        throw new Error(`Watch already started for label: ${t}`);
      this.timestamps.set(t, { started: Date.now() });
    }
    stop(t) {
      const i = this.get(t);
      if (typeof i.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${t}`);
      const s = Date.now() - i.started;
      this.timestamps.set(t, { started: i.started, elapsed: s });
    }
    get(t) {
      const i = this.timestamps.get(t);
      if (typeof i > "u")
        throw new Error(`No timestamp found for label: ${t}`);
      return i;
    }
    elapsed(t) {
      const i = this.get(t);
      return i.elapsed || Date.now() - i.started;
    }
  }
  return rr.Watch = r, rr.default = r, rr;
}
var Ei = {}, pr = {}, Ws;
function ah() {
  if (Ws)
    return pr;
  Ws = 1, Object.defineProperty(pr, "__esModule", { value: !0 }), pr.IWatch = void 0;
  class r {
  }
  return pr.IWatch = r, pr;
}
var Ys;
function oh() {
  return Ys || (Ys = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), Pt.__exportStar(ah(), r);
  }(Ei)), Ei;
}
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  const e = Pt;
  e.__exportStar(sh(), r), e.__exportStar(nh(), r), e.__exportStar(oh(), r), e.__exportStar(ma(), r);
})(Z);
class Xt {
}
const ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Xt
}, Symbol.toStringTag, { value: "Module" })), hh = /* @__PURE__ */ fc(ch);
var Se = {}, vi, Js;
function uh() {
  if (Js)
    return vi;
  Js = 1;
  function r(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return '"[Circular]"';
    }
  }
  vi = e;
  function e(t, i, s) {
    var o = s && s.stringify || r, p = 1;
    if (typeof t == "object" && t !== null) {
      var h = i.length + p;
      if (h === 1)
        return t;
      var g = new Array(h);
      g[0] = o(t);
      for (var m = 1; m < h; m++)
        g[m] = o(i[m]);
      return g.join(" ");
    }
    if (typeof t != "string")
      return t;
    var b = i.length;
    if (b === 0)
      return t;
    for (var E = "", S = 1 - p, D = -1, _ = t && t.length || 0, A = 0; A < _; ) {
      if (t.charCodeAt(A) === 37 && A + 1 < _) {
        switch (D = D > -1 ? D : 0, t.charCodeAt(A + 1)) {
          case 100:
          case 102:
            if (S >= b || i[S] == null)
              break;
            D < A && (E += t.slice(D, A)), E += Number(i[S]), D = A + 2, A++;
            break;
          case 105:
            if (S >= b || i[S] == null)
              break;
            D < A && (E += t.slice(D, A)), E += Math.floor(Number(i[S])), D = A + 2, A++;
            break;
          case 79:
          case 111:
          case 106:
            if (S >= b || i[S] === void 0)
              break;
            D < A && (E += t.slice(D, A));
            var R = typeof i[S];
            if (R === "string") {
              E += "'" + i[S] + "'", D = A + 2, A++;
              break;
            }
            if (R === "function") {
              E += i[S].name || "<anonymous>", D = A + 2, A++;
              break;
            }
            E += o(i[S]), D = A + 2, A++;
            break;
          case 115:
            if (S >= b)
              break;
            D < A && (E += t.slice(D, A)), E += String(i[S]), D = A + 2, A++;
            break;
          case 37:
            D < A && (E += t.slice(D, A)), E += "%", D = A + 2, A++, S--;
            break;
        }
        ++S;
      }
      ++A;
    }
    return D === -1 ? t : (D < _ && (E += t.slice(D)), E);
  }
  return vi;
}
var _i, Xs;
function ya() {
  if (Xs)
    return _i;
  Xs = 1;
  const r = uh();
  _i = s;
  const e = d().console || {}, t = {
    mapHttpRequest: _,
    mapHttpResponse: _,
    wrapRequestSerializer: A,
    wrapResponseSerializer: A,
    wrapErrorSerializer: A,
    req: _,
    res: _,
    err: S
  };
  function i(u, n) {
    return Array.isArray(u) ? u.filter(function(T) {
      return T !== "!stdSerializers.err";
    }) : u === !0 ? Object.keys(n) : !1;
  }
  function s(u) {
    u = u || {}, u.browser = u.browser || {};
    const n = u.browser.transmit;
    if (n && typeof n.send != "function")
      throw Error("pino: transmit option must have a send function");
    const f = u.browser.write || e;
    u.browser.write && (u.browser.asObject = !0);
    const T = u.serializers || {}, U = i(u.browser.serialize, T);
    let K = u.browser.serialize;
    Array.isArray(u.browser.serialize) && u.browser.serialize.indexOf("!stdSerializers.err") > -1 && (K = !1);
    const G = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof f == "function" && (f.error = f.fatal = f.warn = f.info = f.debug = f.trace = f), u.enabled === !1 && (u.level = "silent");
    const X = u.level || "info", x = Object.create(f);
    x.log || (x.log = R), Object.defineProperty(x, "levelVal", {
      get: k
    }), Object.defineProperty(x, "level", {
      get: H,
      set: $
    });
    const P = {
      transmit: n,
      serialize: U,
      asObject: u.browser.asObject,
      levels: G,
      timestamp: D(u)
    };
    x.levels = s.levels, x.level = X, x.setMaxListeners = x.getMaxListeners = x.emit = x.addListener = x.on = x.prependListener = x.once = x.prependOnceListener = x.removeListener = x.removeAllListeners = x.listeners = x.listenerCount = x.eventNames = x.write = x.flush = R, x.serializers = T, x._serialize = U, x._stdErrSerialize = K, x.child = j, n && (x._logEvent = E());
    function k() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function H() {
      return this._level;
    }
    function $(F) {
      if (F !== "silent" && !this.levels.values[F])
        throw Error("unknown level " + F);
      this._level = F, o(P, x, "error", "log"), o(P, x, "fatal", "error"), o(P, x, "warn", "error"), o(P, x, "info", "log"), o(P, x, "debug", "log"), o(P, x, "trace", "log");
    }
    function j(F, q) {
      if (!F)
        throw new Error("missing bindings for child Pino");
      q = q || {}, U && F.serializers && (q.serializers = F.serializers);
      const te = q.serializers;
      if (U && te) {
        var z = Object.assign({}, T, te), Q = u.browser.serialize === !0 ? Object.keys(z) : U;
        delete F.serializers, g([F], Q, z, this._stdErrSerialize);
      }
      function Y(ee) {
        this._childLevel = (ee._childLevel | 0) + 1, this.error = m(ee, F, "error"), this.fatal = m(ee, F, "fatal"), this.warn = m(ee, F, "warn"), this.info = m(ee, F, "info"), this.debug = m(ee, F, "debug"), this.trace = m(ee, F, "trace"), z && (this.serializers = z, this._serialize = Q), n && (this._logEvent = E(
          [].concat(ee._logEvent.bindings, F)
        ));
      }
      return Y.prototype = this, new Y(this);
    }
    return x;
  }
  s.levels = {
    values: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10
    },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  }, s.stdSerializers = t, s.stdTimeFunctions = Object.assign({}, { nullTime: M, epochTime: c, unixTime: y, isoTime: l });
  function o(u, n, f, T) {
    const U = Object.getPrototypeOf(n);
    n[f] = n.levelVal > n.levels.values[f] ? R : U[f] ? U[f] : e[f] || e[T] || R, p(u, n, f);
  }
  function p(u, n, f) {
    !u.transmit && n[f] === R || (n[f] = function(T) {
      return function() {
        const K = u.timestamp(), G = new Array(arguments.length), X = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var x = 0; x < G.length; x++)
          G[x] = arguments[x];
        if (u.serialize && !u.asObject && g(G, this._serialize, this.serializers, this._stdErrSerialize), u.asObject ? T.call(X, h(this, f, G, K)) : T.apply(X, G), u.transmit) {
          const P = u.transmit.level || n.level, k = s.levels.values[P], H = s.levels.values[f];
          if (H < k)
            return;
          b(this, {
            ts: K,
            methodLevel: f,
            methodValue: H,
            transmitLevel: P,
            transmitValue: s.levels.values[u.transmit.level || n.level],
            send: u.transmit.send,
            val: n.levelVal
          }, G);
        }
      };
    }(n[f]));
  }
  function h(u, n, f, T) {
    u._serialize && g(f, u._serialize, u.serializers, u._stdErrSerialize);
    const U = f.slice();
    let K = U[0];
    const G = {};
    T && (G.time = T), G.level = s.levels.values[n];
    let X = (u._childLevel | 0) + 1;
    if (X < 1 && (X = 1), K !== null && typeof K == "object") {
      for (; X-- && typeof U[0] == "object"; )
        Object.assign(G, U.shift());
      K = U.length ? r(U.shift(), U) : void 0;
    } else
      typeof K == "string" && (K = r(U.shift(), U));
    return K !== void 0 && (G.msg = K), G;
  }
  function g(u, n, f, T) {
    for (const U in u)
      if (T && u[U] instanceof Error)
        u[U] = s.stdSerializers.err(u[U]);
      else if (typeof u[U] == "object" && !Array.isArray(u[U]))
        for (const K in u[U])
          n && n.indexOf(K) > -1 && K in f && (u[U][K] = f[K](u[U][K]));
  }
  function m(u, n, f) {
    return function() {
      const T = new Array(1 + arguments.length);
      T[0] = n;
      for (var U = 1; U < T.length; U++)
        T[U] = arguments[U - 1];
      return u[f].apply(this, T);
    };
  }
  function b(u, n, f) {
    const T = n.send, U = n.ts, K = n.methodLevel, G = n.methodValue, X = n.val, x = u._logEvent.bindings;
    g(
      f,
      u._serialize || Object.keys(u.serializers),
      u.serializers,
      u._stdErrSerialize === void 0 ? !0 : u._stdErrSerialize
    ), u._logEvent.ts = U, u._logEvent.messages = f.filter(function(P) {
      return x.indexOf(P) === -1;
    }), u._logEvent.level.label = K, u._logEvent.level.value = G, T(K, u._logEvent, X), u._logEvent = E(x);
  }
  function E(u) {
    return {
      ts: 0,
      messages: [],
      bindings: u || [],
      level: { label: "", value: 0 }
    };
  }
  function S(u) {
    const n = {
      type: u.constructor.name,
      msg: u.message,
      stack: u.stack
    };
    for (const f in u)
      n[f] === void 0 && (n[f] = u[f]);
    return n;
  }
  function D(u) {
    return typeof u.timestamp == "function" ? u.timestamp : u.timestamp === !1 ? M : c;
  }
  function _() {
    return {};
  }
  function A(u) {
    return u;
  }
  function R() {
  }
  function M() {
    return !1;
  }
  function c() {
    return Date.now();
  }
  function y() {
    return Math.round(Date.now() / 1e3);
  }
  function l() {
    return new Date(Date.now()).toISOString();
  }
  function d() {
    function u(n) {
      return typeof n < "u" && n;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return u(self) || u(window) || u(this) || {};
    }
  }
  return _i;
}
var Gt = {}, Qs;
function ba() {
  return Qs || (Qs = 1, Object.defineProperty(Gt, "__esModule", { value: !0 }), Gt.PINO_CUSTOM_CONTEXT_KEY = Gt.PINO_LOGGER_DEFAULTS = void 0, Gt.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Gt.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Gt;
}
var nt = {}, Zs;
function lh() {
  if (Zs)
    return nt;
  Zs = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.generateChildLogger = nt.formatChildLoggerContext = nt.getLoggerContext = nt.setBrowserLoggerContext = nt.getBrowserLoggerContext = nt.getDefaultLoggerOptions = void 0;
  const r = ba();
  function e(h) {
    return Object.assign(Object.assign({}, h), { level: (h == null ? void 0 : h.level) || r.PINO_LOGGER_DEFAULTS.level });
  }
  nt.getDefaultLoggerOptions = e;
  function t(h, g = r.PINO_CUSTOM_CONTEXT_KEY) {
    return h[g] || "";
  }
  nt.getBrowserLoggerContext = t;
  function i(h, g, m = r.PINO_CUSTOM_CONTEXT_KEY) {
    return h[m] = g, h;
  }
  nt.setBrowserLoggerContext = i;
  function s(h, g = r.PINO_CUSTOM_CONTEXT_KEY) {
    let m = "";
    return typeof h.bindings > "u" ? m = t(h, g) : m = h.bindings().context || "", m;
  }
  nt.getLoggerContext = s;
  function o(h, g, m = r.PINO_CUSTOM_CONTEXT_KEY) {
    const b = s(h, m);
    return b.trim() ? `${b}/${g}` : g;
  }
  nt.formatChildLoggerContext = o;
  function p(h, g, m = r.PINO_CUSTOM_CONTEXT_KEY) {
    const b = o(h, g, m), E = h.child({ context: b });
    return i(E, b, m);
  }
  return nt.generateChildLogger = p, nt;
}
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.pino = void 0;
  const e = Pt, t = e.__importDefault(ya());
  Object.defineProperty(r, "pino", { enumerable: !0, get: function() {
    return t.default;
  } }), e.__exportStar(ba(), r), e.__exportStar(lh(), r);
})(Se);
var us = {}, ar = {}, ni = {}, ai = {};
Object.defineProperty(ai, "__esModule", { value: !0 });
ai.BrowserRandomSource = void 0;
const en = 65536;
class fh {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const t = new Uint8Array(e);
    for (let i = 0; i < t.length; i += en)
      this._crypto.getRandomValues(t.subarray(i, i + Math.min(t.length - i, en)));
    return t;
  }
}
ai.BrowserRandomSource = fh;
function dh(r) {
  throw new Error('Could not dynamically require "' + r + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var oi = {}, pt = {};
Object.defineProperty(pt, "__esModule", { value: !0 });
function ph(r) {
  for (var e = 0; e < r.length; e++)
    r[e] = 0;
  return r;
}
pt.wipe = ph;
Object.defineProperty(oi, "__esModule", { value: !0 });
oi.NodeRandomSource = void 0;
const gh = pt;
class mh {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof dh < "u") {
      const e = dc;
      e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let t = this._crypto.randomBytes(e);
    if (t.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const i = new Uint8Array(e);
    for (let s = 0; s < i.length; s++)
      i[s] = t[s];
    return (0, gh.wipe)(t), i;
  }
}
oi.NodeRandomSource = mh;
Object.defineProperty(ni, "__esModule", { value: !0 });
ni.SystemRandomSource = void 0;
const yh = ai, bh = oi;
class wh {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new yh.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new bh.NodeRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Node";
      return;
    }
  }
  randomBytes(e) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(e);
  }
}
ni.SystemRandomSource = wh;
var se = {}, wa = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  function e(h, g) {
    var m = h >>> 16 & 65535, b = h & 65535, E = g >>> 16 & 65535, S = g & 65535;
    return b * S + (m * S + b * E << 16 >>> 0) | 0;
  }
  r.mul = Math.imul || e;
  function t(h, g) {
    return h + g | 0;
  }
  r.add = t;
  function i(h, g) {
    return h - g | 0;
  }
  r.sub = i;
  function s(h, g) {
    return h << g | h >>> 32 - g;
  }
  r.rotl = s;
  function o(h, g) {
    return h << 32 - g | h >>> g;
  }
  r.rotr = o;
  function p(h) {
    return typeof h == "number" && isFinite(h) && Math.floor(h) === h;
  }
  r.isInteger = Number.isInteger || p, r.MAX_SAFE_INTEGER = 9007199254740991, r.isSafeInteger = function(h) {
    return r.isInteger(h) && h >= -r.MAX_SAFE_INTEGER && h <= r.MAX_SAFE_INTEGER;
  };
})(wa);
Object.defineProperty(se, "__esModule", { value: !0 });
var Ea = wa;
function Eh(r, e) {
  return e === void 0 && (e = 0), (r[e + 0] << 8 | r[e + 1]) << 16 >> 16;
}
se.readInt16BE = Eh;
function vh(r, e) {
  return e === void 0 && (e = 0), (r[e + 0] << 8 | r[e + 1]) >>> 0;
}
se.readUint16BE = vh;
function _h(r, e) {
  return e === void 0 && (e = 0), (r[e + 1] << 8 | r[e]) << 16 >> 16;
}
se.readInt16LE = _h;
function Dh(r, e) {
  return e === void 0 && (e = 0), (r[e + 1] << 8 | r[e]) >>> 0;
}
se.readUint16LE = Dh;
function va(r, e, t) {
  return e === void 0 && (e = new Uint8Array(2)), t === void 0 && (t = 0), e[t + 0] = r >>> 8, e[t + 1] = r >>> 0, e;
}
se.writeUint16BE = va;
se.writeInt16BE = va;
function _a(r, e, t) {
  return e === void 0 && (e = new Uint8Array(2)), t === void 0 && (t = 0), e[t + 0] = r >>> 0, e[t + 1] = r >>> 8, e;
}
se.writeUint16LE = _a;
se.writeInt16LE = _a;
function $i(r, e) {
  return e === void 0 && (e = 0), r[e] << 24 | r[e + 1] << 16 | r[e + 2] << 8 | r[e + 3];
}
se.readInt32BE = $i;
function Li(r, e) {
  return e === void 0 && (e = 0), (r[e] << 24 | r[e + 1] << 16 | r[e + 2] << 8 | r[e + 3]) >>> 0;
}
se.readUint32BE = Li;
function Mi(r, e) {
  return e === void 0 && (e = 0), r[e + 3] << 24 | r[e + 2] << 16 | r[e + 1] << 8 | r[e];
}
se.readInt32LE = Mi;
function ji(r, e) {
  return e === void 0 && (e = 0), (r[e + 3] << 24 | r[e + 2] << 16 | r[e + 1] << 8 | r[e]) >>> 0;
}
se.readUint32LE = ji;
function Yr(r, e, t) {
  return e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0), e[t + 0] = r >>> 24, e[t + 1] = r >>> 16, e[t + 2] = r >>> 8, e[t + 3] = r >>> 0, e;
}
se.writeUint32BE = Yr;
se.writeInt32BE = Yr;
function Jr(r, e, t) {
  return e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0), e[t + 0] = r >>> 0, e[t + 1] = r >>> 8, e[t + 2] = r >>> 16, e[t + 3] = r >>> 24, e;
}
se.writeUint32LE = Jr;
se.writeInt32LE = Jr;
function Sh(r, e) {
  e === void 0 && (e = 0);
  var t = $i(r, e), i = $i(r, e + 4);
  return t * 4294967296 + i - (i >> 31) * 4294967296;
}
se.readInt64BE = Sh;
function Ih(r, e) {
  e === void 0 && (e = 0);
  var t = Li(r, e), i = Li(r, e + 4);
  return t * 4294967296 + i;
}
se.readUint64BE = Ih;
function Oh(r, e) {
  e === void 0 && (e = 0);
  var t = Mi(r, e), i = Mi(r, e + 4);
  return i * 4294967296 + t - (t >> 31) * 4294967296;
}
se.readInt64LE = Oh;
function xh(r, e) {
  e === void 0 && (e = 0);
  var t = ji(r, e), i = ji(r, e + 4);
  return i * 4294967296 + t;
}
se.readUint64LE = xh;
function Da(r, e, t) {
  return e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0), Yr(r / 4294967296 >>> 0, e, t), Yr(r >>> 0, e, t + 4), e;
}
se.writeUint64BE = Da;
se.writeInt64BE = Da;
function Sa(r, e, t) {
  return e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0), Jr(r >>> 0, e, t), Jr(r / 4294967296 >>> 0, e, t + 4), e;
}
se.writeUint64LE = Sa;
se.writeInt64LE = Sa;
function Ch(r, e, t) {
  if (t === void 0 && (t = 0), r % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (r / 8 > e.length - t)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, s = 1, o = r / 8 + t - 1; o >= t; o--)
    i += e[o] * s, s *= 256;
  return i;
}
se.readUintBE = Ch;
function Nh(r, e, t) {
  if (t === void 0 && (t = 0), r % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (r / 8 > e.length - t)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, s = 1, o = t; o < t + r / 8; o++)
    i += e[o] * s, s *= 256;
  return i;
}
se.readUintLE = Nh;
function Ah(r, e, t, i) {
  if (t === void 0 && (t = new Uint8Array(r / 8)), i === void 0 && (i = 0), r % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Ea.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, o = r / 8 + i - 1; o >= i; o--)
    t[o] = e / s & 255, s *= 256;
  return t;
}
se.writeUintBE = Ah;
function Ph(r, e, t, i) {
  if (t === void 0 && (t = new Uint8Array(r / 8)), i === void 0 && (i = 0), r % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Ea.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, o = i; o < i + r / 8; o++)
    t[o] = e / s & 255, s *= 256;
  return t;
}
se.writeUintLE = Ph;
function Th(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat32(e);
}
se.readFloat32BE = Th;
function Rh(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat32(e, !0);
}
se.readFloat32LE = Rh;
function Uh(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat64(e);
}
se.readFloat64BE = Uh;
function Fh(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat64(e, !0);
}
se.readFloat64LE = Fh;
function $h(r, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(t, r), e;
}
se.writeFloat32BE = $h;
function Lh(r, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(t, r, !0), e;
}
se.writeFloat32LE = Lh;
function Mh(r, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(t, r), e;
}
se.writeFloat64BE = Mh;
function jh(r, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(t, r, !0), e;
}
se.writeFloat64LE = jh;
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.randomStringForEntropy = r.randomString = r.randomUint32 = r.randomBytes = r.defaultRandomSource = void 0;
  const e = ni, t = se, i = pt;
  r.defaultRandomSource = new e.SystemRandomSource();
  function s(m, b = r.defaultRandomSource) {
    return b.randomBytes(m);
  }
  r.randomBytes = s;
  function o(m = r.defaultRandomSource) {
    const b = s(4, m), E = (0, t.readUint32LE)(b);
    return (0, i.wipe)(b), E;
  }
  r.randomUint32 = o;
  const p = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function h(m, b = p, E = r.defaultRandomSource) {
    if (b.length < 2)
      throw new Error("randomString charset is too short");
    if (b.length > 256)
      throw new Error("randomString charset is too long");
    let S = "";
    const D = b.length, _ = 256 - 256 % D;
    for (; m > 0; ) {
      const A = s(Math.ceil(m * 256 / _), E);
      for (let R = 0; R < A.length && m > 0; R++) {
        const M = A[R];
        M < _ && (S += b.charAt(M % D), m--);
      }
      (0, i.wipe)(A);
    }
    return S;
  }
  r.randomString = h;
  function g(m, b = p, E = r.defaultRandomSource) {
    const S = Math.ceil(m / (Math.log(b.length) / Math.LN2));
    return h(S, b, E);
  }
  r.randomStringForEntropy = g;
})(ar);
var Ia = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = se, t = pt;
  r.DIGEST_LENGTH = 64, r.BLOCK_SIZE = 128;
  var i = (
    /** @class */
    function() {
      function h() {
        this.digestLength = r.DIGEST_LENGTH, this.blockSize = r.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return h.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, h.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, h.prototype.clean = function() {
        t.wipe(this._buffer), t.wipe(this._tempHi), t.wipe(this._tempLo), this.reset();
      }, h.prototype.update = function(g, m) {
        if (m === void 0 && (m = g.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var b = 0;
        if (this._bytesHashed += m, this._bufferLength > 0) {
          for (; this._bufferLength < r.BLOCK_SIZE && m > 0; )
            this._buffer[this._bufferLength++] = g[b++], m--;
          this._bufferLength === this.blockSize && (o(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (m >= this.blockSize && (b = o(this._tempHi, this._tempLo, this._stateHi, this._stateLo, g, b, m), m %= this.blockSize); m > 0; )
          this._buffer[this._bufferLength++] = g[b++], m--;
        return this;
      }, h.prototype.finish = function(g) {
        if (!this._finished) {
          var m = this._bytesHashed, b = this._bufferLength, E = m / 536870912 | 0, S = m << 3, D = m % 128 < 112 ? 128 : 256;
          this._buffer[b] = 128;
          for (var _ = b + 1; _ < D - 8; _++)
            this._buffer[_] = 0;
          e.writeUint32BE(E, this._buffer, D - 8), e.writeUint32BE(S, this._buffer, D - 4), o(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, D), this._finished = !0;
        }
        for (var _ = 0; _ < this.digestLength / 8; _++)
          e.writeUint32BE(this._stateHi[_], g, _ * 8), e.writeUint32BE(this._stateLo[_], g, _ * 8 + 4);
        return this;
      }, h.prototype.digest = function() {
        var g = new Uint8Array(this.digestLength);
        return this.finish(g), g;
      }, h.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, h.prototype.restoreState = function(g) {
        return this._stateHi.set(g.stateHi), this._stateLo.set(g.stateLo), this._bufferLength = g.bufferLength, g.buffer && this._buffer.set(g.buffer), this._bytesHashed = g.bytesHashed, this._finished = !1, this;
      }, h.prototype.cleanSavedState = function(g) {
        t.wipe(g.stateHi), t.wipe(g.stateLo), g.buffer && t.wipe(g.buffer), g.bufferLength = 0, g.bytesHashed = 0;
      }, h;
    }()
  );
  r.SHA512 = i;
  var s = new Int32Array([
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ]);
  function o(h, g, m, b, E, S, D) {
    for (var _ = m[0], A = m[1], R = m[2], M = m[3], c = m[4], y = m[5], l = m[6], d = m[7], u = b[0], n = b[1], f = b[2], T = b[3], U = b[4], K = b[5], G = b[6], X = b[7], x, P, k, H, $, j, F, q; D >= 128; ) {
      for (var te = 0; te < 16; te++) {
        var z = 8 * te + S;
        h[te] = e.readUint32BE(E, z), g[te] = e.readUint32BE(E, z + 4);
      }
      for (var te = 0; te < 80; te++) {
        var Q = _, Y = A, ee = R, N = M, C = c, I = y, a = l, v = d, B = u, W = n, le = f, ye = T, de = U, Ee = K, Ue = G, Ae = X;
        if (x = d, P = X, $ = P & 65535, j = P >>> 16, F = x & 65535, q = x >>> 16, x = (c >>> 14 | U << 32 - 14) ^ (c >>> 18 | U << 32 - 18) ^ (U >>> 41 - 32 | c << 32 - (41 - 32)), P = (U >>> 14 | c << 32 - 14) ^ (U >>> 18 | c << 32 - 18) ^ (c >>> 41 - 32 | U << 32 - (41 - 32)), $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, x = c & y ^ ~c & l, P = U & K ^ ~U & G, $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, x = s[te * 2], P = s[te * 2 + 1], $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, x = h[te % 16], P = g[te % 16], $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, j += $ >>> 16, F += j >>> 16, q += F >>> 16, k = F & 65535 | q << 16, H = $ & 65535 | j << 16, x = k, P = H, $ = P & 65535, j = P >>> 16, F = x & 65535, q = x >>> 16, x = (_ >>> 28 | u << 32 - 28) ^ (u >>> 34 - 32 | _ << 32 - (34 - 32)) ^ (u >>> 39 - 32 | _ << 32 - (39 - 32)), P = (u >>> 28 | _ << 32 - 28) ^ (_ >>> 34 - 32 | u << 32 - (34 - 32)) ^ (_ >>> 39 - 32 | u << 32 - (39 - 32)), $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, x = _ & A ^ _ & R ^ A & R, P = u & n ^ u & f ^ n & f, $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, j += $ >>> 16, F += j >>> 16, q += F >>> 16, v = F & 65535 | q << 16, Ae = $ & 65535 | j << 16, x = N, P = ye, $ = P & 65535, j = P >>> 16, F = x & 65535, q = x >>> 16, x = k, P = H, $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, j += $ >>> 16, F += j >>> 16, q += F >>> 16, N = F & 65535 | q << 16, ye = $ & 65535 | j << 16, A = Q, R = Y, M = ee, c = N, y = C, l = I, d = a, _ = v, n = B, f = W, T = le, U = ye, K = de, G = Ee, X = Ue, u = Ae, te % 16 === 15)
          for (var z = 0; z < 16; z++)
            x = h[z], P = g[z], $ = P & 65535, j = P >>> 16, F = x & 65535, q = x >>> 16, x = h[(z + 9) % 16], P = g[(z + 9) % 16], $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, k = h[(z + 1) % 16], H = g[(z + 1) % 16], x = (k >>> 1 | H << 32 - 1) ^ (k >>> 8 | H << 32 - 8) ^ k >>> 7, P = (H >>> 1 | k << 32 - 1) ^ (H >>> 8 | k << 32 - 8) ^ (H >>> 7 | k << 32 - 7), $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, k = h[(z + 14) % 16], H = g[(z + 14) % 16], x = (k >>> 19 | H << 32 - 19) ^ (H >>> 61 - 32 | k << 32 - (61 - 32)) ^ k >>> 6, P = (H >>> 19 | k << 32 - 19) ^ (k >>> 61 - 32 | H << 32 - (61 - 32)) ^ (H >>> 6 | k << 32 - 6), $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, j += $ >>> 16, F += j >>> 16, q += F >>> 16, h[z] = F & 65535 | q << 16, g[z] = $ & 65535 | j << 16;
      }
      x = _, P = u, $ = P & 65535, j = P >>> 16, F = x & 65535, q = x >>> 16, x = m[0], P = b[0], $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, j += $ >>> 16, F += j >>> 16, q += F >>> 16, m[0] = _ = F & 65535 | q << 16, b[0] = u = $ & 65535 | j << 16, x = A, P = n, $ = P & 65535, j = P >>> 16, F = x & 65535, q = x >>> 16, x = m[1], P = b[1], $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, j += $ >>> 16, F += j >>> 16, q += F >>> 16, m[1] = A = F & 65535 | q << 16, b[1] = n = $ & 65535 | j << 16, x = R, P = f, $ = P & 65535, j = P >>> 16, F = x & 65535, q = x >>> 16, x = m[2], P = b[2], $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, j += $ >>> 16, F += j >>> 16, q += F >>> 16, m[2] = R = F & 65535 | q << 16, b[2] = f = $ & 65535 | j << 16, x = M, P = T, $ = P & 65535, j = P >>> 16, F = x & 65535, q = x >>> 16, x = m[3], P = b[3], $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, j += $ >>> 16, F += j >>> 16, q += F >>> 16, m[3] = M = F & 65535 | q << 16, b[3] = T = $ & 65535 | j << 16, x = c, P = U, $ = P & 65535, j = P >>> 16, F = x & 65535, q = x >>> 16, x = m[4], P = b[4], $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, j += $ >>> 16, F += j >>> 16, q += F >>> 16, m[4] = c = F & 65535 | q << 16, b[4] = U = $ & 65535 | j << 16, x = y, P = K, $ = P & 65535, j = P >>> 16, F = x & 65535, q = x >>> 16, x = m[5], P = b[5], $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, j += $ >>> 16, F += j >>> 16, q += F >>> 16, m[5] = y = F & 65535 | q << 16, b[5] = K = $ & 65535 | j << 16, x = l, P = G, $ = P & 65535, j = P >>> 16, F = x & 65535, q = x >>> 16, x = m[6], P = b[6], $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, j += $ >>> 16, F += j >>> 16, q += F >>> 16, m[6] = l = F & 65535 | q << 16, b[6] = G = $ & 65535 | j << 16, x = d, P = X, $ = P & 65535, j = P >>> 16, F = x & 65535, q = x >>> 16, x = m[7], P = b[7], $ += P & 65535, j += P >>> 16, F += x & 65535, q += x >>> 16, j += $ >>> 16, F += j >>> 16, q += F >>> 16, m[7] = d = F & 65535 | q << 16, b[7] = X = $ & 65535 | j << 16, S += 128, D -= 128;
    }
    return S;
  }
  function p(h) {
    var g = new i();
    g.update(h);
    var m = g.digest();
    return g.clean(), m;
  }
  r.hash = p;
})(Ia);
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.convertSecretKeyToX25519 = r.convertPublicKeyToX25519 = r.verify = r.sign = r.extractPublicKeyFromSecretKey = r.generateKeyPair = r.generateKeyPairFromSeed = r.SEED_LENGTH = r.SECRET_KEY_LENGTH = r.PUBLIC_KEY_LENGTH = r.SIGNATURE_LENGTH = void 0;
  const e = ar, t = Ia, i = pt;
  r.SIGNATURE_LENGTH = 64, r.PUBLIC_KEY_LENGTH = 32, r.SECRET_KEY_LENGTH = 64, r.SEED_LENGTH = 32;
  function s(N) {
    const C = new Float64Array(16);
    if (N)
      for (let I = 0; I < N.length; I++)
        C[I] = N[I];
    return C;
  }
  const o = new Uint8Array(32);
  o[0] = 9;
  const p = s(), h = s([1]), g = s([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
  ]), m = s([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
  ]), b = s([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
  ]), E = s([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
  ]), S = s([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
  ]);
  function D(N, C) {
    for (let I = 0; I < 16; I++)
      N[I] = C[I] | 0;
  }
  function _(N) {
    let C = 1;
    for (let I = 0; I < 16; I++) {
      let a = N[I] + C + 65535;
      C = Math.floor(a / 65536), N[I] = a - C * 65536;
    }
    N[0] += C - 1 + 37 * (C - 1);
  }
  function A(N, C, I) {
    const a = ~(I - 1);
    for (let v = 0; v < 16; v++) {
      const B = a & (N[v] ^ C[v]);
      N[v] ^= B, C[v] ^= B;
    }
  }
  function R(N, C) {
    const I = s(), a = s();
    for (let v = 0; v < 16; v++)
      a[v] = C[v];
    _(a), _(a), _(a);
    for (let v = 0; v < 2; v++) {
      I[0] = a[0] - 65517;
      for (let W = 1; W < 15; W++)
        I[W] = a[W] - 65535 - (I[W - 1] >> 16 & 1), I[W - 1] &= 65535;
      I[15] = a[15] - 32767 - (I[14] >> 16 & 1);
      const B = I[15] >> 16 & 1;
      I[14] &= 65535, A(a, I, 1 - B);
    }
    for (let v = 0; v < 16; v++)
      N[2 * v] = a[v] & 255, N[2 * v + 1] = a[v] >> 8;
  }
  function M(N, C) {
    let I = 0;
    for (let a = 0; a < 32; a++)
      I |= N[a] ^ C[a];
    return (1 & I - 1 >>> 8) - 1;
  }
  function c(N, C) {
    const I = new Uint8Array(32), a = new Uint8Array(32);
    return R(I, N), R(a, C), M(I, a);
  }
  function y(N) {
    const C = new Uint8Array(32);
    return R(C, N), C[0] & 1;
  }
  function l(N, C) {
    for (let I = 0; I < 16; I++)
      N[I] = C[2 * I] + (C[2 * I + 1] << 8);
    N[15] &= 32767;
  }
  function d(N, C, I) {
    for (let a = 0; a < 16; a++)
      N[a] = C[a] + I[a];
  }
  function u(N, C, I) {
    for (let a = 0; a < 16; a++)
      N[a] = C[a] - I[a];
  }
  function n(N, C, I) {
    let a, v, B = 0, W = 0, le = 0, ye = 0, de = 0, Ee = 0, Ue = 0, Ae = 0, me = 0, pe = 0, fe = 0, he = 0, ce = 0, oe = 0, ae = 0, re = 0, ue = 0, ge = 0, ie = 0, be = 0, we = 0, _e = 0, De = 0, ve = 0, Et = 0, _t = 0, Tt = 0, ft = 0, Ht = 0, ur = 0, Pr = 0, $e = I[0], Pe = I[1], Le = I[2], Me = I[3], je = I[4], Te = I[5], ze = I[6], Ke = I[7], Be = I[8], Ve = I[9], Ge = I[10], qe = I[11], He = I[12], Ce = I[13], ke = I[14], We = I[15];
    a = C[0], B += a * $e, W += a * Pe, le += a * Le, ye += a * Me, de += a * je, Ee += a * Te, Ue += a * ze, Ae += a * Ke, me += a * Be, pe += a * Ve, fe += a * Ge, he += a * qe, ce += a * He, oe += a * Ce, ae += a * ke, re += a * We, a = C[1], W += a * $e, le += a * Pe, ye += a * Le, de += a * Me, Ee += a * je, Ue += a * Te, Ae += a * ze, me += a * Ke, pe += a * Be, fe += a * Ve, he += a * Ge, ce += a * qe, oe += a * He, ae += a * Ce, re += a * ke, ue += a * We, a = C[2], le += a * $e, ye += a * Pe, de += a * Le, Ee += a * Me, Ue += a * je, Ae += a * Te, me += a * ze, pe += a * Ke, fe += a * Be, he += a * Ve, ce += a * Ge, oe += a * qe, ae += a * He, re += a * Ce, ue += a * ke, ge += a * We, a = C[3], ye += a * $e, de += a * Pe, Ee += a * Le, Ue += a * Me, Ae += a * je, me += a * Te, pe += a * ze, fe += a * Ke, he += a * Be, ce += a * Ve, oe += a * Ge, ae += a * qe, re += a * He, ue += a * Ce, ge += a * ke, ie += a * We, a = C[4], de += a * $e, Ee += a * Pe, Ue += a * Le, Ae += a * Me, me += a * je, pe += a * Te, fe += a * ze, he += a * Ke, ce += a * Be, oe += a * Ve, ae += a * Ge, re += a * qe, ue += a * He, ge += a * Ce, ie += a * ke, be += a * We, a = C[5], Ee += a * $e, Ue += a * Pe, Ae += a * Le, me += a * Me, pe += a * je, fe += a * Te, he += a * ze, ce += a * Ke, oe += a * Be, ae += a * Ve, re += a * Ge, ue += a * qe, ge += a * He, ie += a * Ce, be += a * ke, we += a * We, a = C[6], Ue += a * $e, Ae += a * Pe, me += a * Le, pe += a * Me, fe += a * je, he += a * Te, ce += a * ze, oe += a * Ke, ae += a * Be, re += a * Ve, ue += a * Ge, ge += a * qe, ie += a * He, be += a * Ce, we += a * ke, _e += a * We, a = C[7], Ae += a * $e, me += a * Pe, pe += a * Le, fe += a * Me, he += a * je, ce += a * Te, oe += a * ze, ae += a * Ke, re += a * Be, ue += a * Ve, ge += a * Ge, ie += a * qe, be += a * He, we += a * Ce, _e += a * ke, De += a * We, a = C[8], me += a * $e, pe += a * Pe, fe += a * Le, he += a * Me, ce += a * je, oe += a * Te, ae += a * ze, re += a * Ke, ue += a * Be, ge += a * Ve, ie += a * Ge, be += a * qe, we += a * He, _e += a * Ce, De += a * ke, ve += a * We, a = C[9], pe += a * $e, fe += a * Pe, he += a * Le, ce += a * Me, oe += a * je, ae += a * Te, re += a * ze, ue += a * Ke, ge += a * Be, ie += a * Ve, be += a * Ge, we += a * qe, _e += a * He, De += a * Ce, ve += a * ke, Et += a * We, a = C[10], fe += a * $e, he += a * Pe, ce += a * Le, oe += a * Me, ae += a * je, re += a * Te, ue += a * ze, ge += a * Ke, ie += a * Be, be += a * Ve, we += a * Ge, _e += a * qe, De += a * He, ve += a * Ce, Et += a * ke, _t += a * We, a = C[11], he += a * $e, ce += a * Pe, oe += a * Le, ae += a * Me, re += a * je, ue += a * Te, ge += a * ze, ie += a * Ke, be += a * Be, we += a * Ve, _e += a * Ge, De += a * qe, ve += a * He, Et += a * Ce, _t += a * ke, Tt += a * We, a = C[12], ce += a * $e, oe += a * Pe, ae += a * Le, re += a * Me, ue += a * je, ge += a * Te, ie += a * ze, be += a * Ke, we += a * Be, _e += a * Ve, De += a * Ge, ve += a * qe, Et += a * He, _t += a * Ce, Tt += a * ke, ft += a * We, a = C[13], oe += a * $e, ae += a * Pe, re += a * Le, ue += a * Me, ge += a * je, ie += a * Te, be += a * ze, we += a * Ke, _e += a * Be, De += a * Ve, ve += a * Ge, Et += a * qe, _t += a * He, Tt += a * Ce, ft += a * ke, Ht += a * We, a = C[14], ae += a * $e, re += a * Pe, ue += a * Le, ge += a * Me, ie += a * je, be += a * Te, we += a * ze, _e += a * Ke, De += a * Be, ve += a * Ve, Et += a * Ge, _t += a * qe, Tt += a * He, ft += a * Ce, Ht += a * ke, ur += a * We, a = C[15], re += a * $e, ue += a * Pe, ge += a * Le, ie += a * Me, be += a * je, we += a * Te, _e += a * ze, De += a * Ke, ve += a * Be, Et += a * Ve, _t += a * Ge, Tt += a * qe, ft += a * He, Ht += a * Ce, ur += a * ke, Pr += a * We, B += 38 * ue, W += 38 * ge, le += 38 * ie, ye += 38 * be, de += 38 * we, Ee += 38 * _e, Ue += 38 * De, Ae += 38 * ve, me += 38 * Et, pe += 38 * _t, fe += 38 * Tt, he += 38 * ft, ce += 38 * Ht, oe += 38 * ur, ae += 38 * Pr, v = 1, a = B + v + 65535, v = Math.floor(a / 65536), B = a - v * 65536, a = W + v + 65535, v = Math.floor(a / 65536), W = a - v * 65536, a = le + v + 65535, v = Math.floor(a / 65536), le = a - v * 65536, a = ye + v + 65535, v = Math.floor(a / 65536), ye = a - v * 65536, a = de + v + 65535, v = Math.floor(a / 65536), de = a - v * 65536, a = Ee + v + 65535, v = Math.floor(a / 65536), Ee = a - v * 65536, a = Ue + v + 65535, v = Math.floor(a / 65536), Ue = a - v * 65536, a = Ae + v + 65535, v = Math.floor(a / 65536), Ae = a - v * 65536, a = me + v + 65535, v = Math.floor(a / 65536), me = a - v * 65536, a = pe + v + 65535, v = Math.floor(a / 65536), pe = a - v * 65536, a = fe + v + 65535, v = Math.floor(a / 65536), fe = a - v * 65536, a = he + v + 65535, v = Math.floor(a / 65536), he = a - v * 65536, a = ce + v + 65535, v = Math.floor(a / 65536), ce = a - v * 65536, a = oe + v + 65535, v = Math.floor(a / 65536), oe = a - v * 65536, a = ae + v + 65535, v = Math.floor(a / 65536), ae = a - v * 65536, a = re + v + 65535, v = Math.floor(a / 65536), re = a - v * 65536, B += v - 1 + 37 * (v - 1), v = 1, a = B + v + 65535, v = Math.floor(a / 65536), B = a - v * 65536, a = W + v + 65535, v = Math.floor(a / 65536), W = a - v * 65536, a = le + v + 65535, v = Math.floor(a / 65536), le = a - v * 65536, a = ye + v + 65535, v = Math.floor(a / 65536), ye = a - v * 65536, a = de + v + 65535, v = Math.floor(a / 65536), de = a - v * 65536, a = Ee + v + 65535, v = Math.floor(a / 65536), Ee = a - v * 65536, a = Ue + v + 65535, v = Math.floor(a / 65536), Ue = a - v * 65536, a = Ae + v + 65535, v = Math.floor(a / 65536), Ae = a - v * 65536, a = me + v + 65535, v = Math.floor(a / 65536), me = a - v * 65536, a = pe + v + 65535, v = Math.floor(a / 65536), pe = a - v * 65536, a = fe + v + 65535, v = Math.floor(a / 65536), fe = a - v * 65536, a = he + v + 65535, v = Math.floor(a / 65536), he = a - v * 65536, a = ce + v + 65535, v = Math.floor(a / 65536), ce = a - v * 65536, a = oe + v + 65535, v = Math.floor(a / 65536), oe = a - v * 65536, a = ae + v + 65535, v = Math.floor(a / 65536), ae = a - v * 65536, a = re + v + 65535, v = Math.floor(a / 65536), re = a - v * 65536, B += v - 1 + 37 * (v - 1), N[0] = B, N[1] = W, N[2] = le, N[3] = ye, N[4] = de, N[5] = Ee, N[6] = Ue, N[7] = Ae, N[8] = me, N[9] = pe, N[10] = fe, N[11] = he, N[12] = ce, N[13] = oe, N[14] = ae, N[15] = re;
  }
  function f(N, C) {
    n(N, C, C);
  }
  function T(N, C) {
    const I = s();
    let a;
    for (a = 0; a < 16; a++)
      I[a] = C[a];
    for (a = 253; a >= 0; a--)
      f(I, I), a !== 2 && a !== 4 && n(I, I, C);
    for (a = 0; a < 16; a++)
      N[a] = I[a];
  }
  function U(N, C) {
    const I = s();
    let a;
    for (a = 0; a < 16; a++)
      I[a] = C[a];
    for (a = 250; a >= 0; a--)
      f(I, I), a !== 1 && n(I, I, C);
    for (a = 0; a < 16; a++)
      N[a] = I[a];
  }
  function K(N, C) {
    const I = s(), a = s(), v = s(), B = s(), W = s(), le = s(), ye = s(), de = s(), Ee = s();
    u(I, N[1], N[0]), u(Ee, C[1], C[0]), n(I, I, Ee), d(a, N[0], N[1]), d(Ee, C[0], C[1]), n(a, a, Ee), n(v, N[3], C[3]), n(v, v, m), n(B, N[2], C[2]), d(B, B, B), u(W, a, I), u(le, B, v), d(ye, B, v), d(de, a, I), n(N[0], W, le), n(N[1], de, ye), n(N[2], ye, le), n(N[3], W, de);
  }
  function G(N, C, I) {
    for (let a = 0; a < 4; a++)
      A(N[a], C[a], I);
  }
  function X(N, C) {
    const I = s(), a = s(), v = s();
    T(v, C[2]), n(I, C[0], v), n(a, C[1], v), R(N, a), N[31] ^= y(I) << 7;
  }
  function x(N, C, I) {
    D(N[0], p), D(N[1], h), D(N[2], h), D(N[3], p);
    for (let a = 255; a >= 0; --a) {
      const v = I[a / 8 | 0] >> (a & 7) & 1;
      G(N, C, v), K(C, N), K(N, N), G(N, C, v);
    }
  }
  function P(N, C) {
    const I = [s(), s(), s(), s()];
    D(I[0], b), D(I[1], E), D(I[2], h), n(I[3], b, E), x(N, I, C);
  }
  function k(N) {
    if (N.length !== r.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${r.SEED_LENGTH} bytes`);
    const C = (0, t.hash)(N);
    C[0] &= 248, C[31] &= 127, C[31] |= 64;
    const I = new Uint8Array(32), a = [s(), s(), s(), s()];
    P(a, C), X(I, a);
    const v = new Uint8Array(64);
    return v.set(N), v.set(I, 32), {
      publicKey: I,
      secretKey: v
    };
  }
  r.generateKeyPairFromSeed = k;
  function H(N) {
    const C = (0, e.randomBytes)(32, N), I = k(C);
    return (0, i.wipe)(C), I;
  }
  r.generateKeyPair = H;
  function $(N) {
    if (N.length !== r.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${r.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(N.subarray(32));
  }
  r.extractPublicKeyFromSecretKey = $;
  const j = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
  ]);
  function F(N, C) {
    let I, a, v, B;
    for (a = 63; a >= 32; --a) {
      for (I = 0, v = a - 32, B = a - 12; v < B; ++v)
        C[v] += I - 16 * C[a] * j[v - (a - 32)], I = Math.floor((C[v] + 128) / 256), C[v] -= I * 256;
      C[v] += I, C[a] = 0;
    }
    for (I = 0, v = 0; v < 32; v++)
      C[v] += I - (C[31] >> 4) * j[v], I = C[v] >> 8, C[v] &= 255;
    for (v = 0; v < 32; v++)
      C[v] -= I * j[v];
    for (a = 0; a < 32; a++)
      C[a + 1] += C[a] >> 8, N[a] = C[a] & 255;
  }
  function q(N) {
    const C = new Float64Array(64);
    for (let I = 0; I < 64; I++)
      C[I] = N[I];
    for (let I = 0; I < 64; I++)
      N[I] = 0;
    F(N, C);
  }
  function te(N, C) {
    const I = new Float64Array(64), a = [s(), s(), s(), s()], v = (0, t.hash)(N.subarray(0, 32));
    v[0] &= 248, v[31] &= 127, v[31] |= 64;
    const B = new Uint8Array(64);
    B.set(v.subarray(32), 32);
    const W = new t.SHA512();
    W.update(B.subarray(32)), W.update(C);
    const le = W.digest();
    W.clean(), q(le), P(a, le), X(B, a), W.reset(), W.update(B.subarray(0, 32)), W.update(N.subarray(32)), W.update(C);
    const ye = W.digest();
    q(ye);
    for (let de = 0; de < 32; de++)
      I[de] = le[de];
    for (let de = 0; de < 32; de++)
      for (let Ee = 0; Ee < 32; Ee++)
        I[de + Ee] += ye[de] * v[Ee];
    return F(B.subarray(32), I), B;
  }
  r.sign = te;
  function z(N, C) {
    const I = s(), a = s(), v = s(), B = s(), W = s(), le = s(), ye = s();
    return D(N[2], h), l(N[1], C), f(v, N[1]), n(B, v, g), u(v, v, N[2]), d(B, N[2], B), f(W, B), f(le, W), n(ye, le, W), n(I, ye, v), n(I, I, B), U(I, I), n(I, I, v), n(I, I, B), n(I, I, B), n(N[0], I, B), f(a, N[0]), n(a, a, B), c(a, v) && n(N[0], N[0], S), f(a, N[0]), n(a, a, B), c(a, v) ? -1 : (y(N[0]) === C[31] >> 7 && u(N[0], p, N[0]), n(N[3], N[0], N[1]), 0);
  }
  function Q(N, C, I) {
    const a = new Uint8Array(32), v = [s(), s(), s(), s()], B = [s(), s(), s(), s()];
    if (I.length !== r.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${r.SIGNATURE_LENGTH} bytes`);
    if (z(B, N))
      return !1;
    const W = new t.SHA512();
    W.update(I.subarray(0, 32)), W.update(N), W.update(C);
    const le = W.digest();
    return q(le), x(v, B, le), P(B, I.subarray(32)), K(v, B), X(a, v), !M(I, a);
  }
  r.verify = Q;
  function Y(N) {
    let C = [s(), s(), s(), s()];
    if (z(C, N))
      throw new Error("Ed25519: invalid public key");
    let I = s(), a = s(), v = C[1];
    d(I, h, v), u(a, h, v), T(a, a), n(I, I, a);
    let B = new Uint8Array(32);
    return R(B, I), B;
  }
  r.convertPublicKeyToX25519 = Y;
  function ee(N) {
    const C = (0, t.hash)(N.subarray(0, 32));
    C[0] &= 248, C[31] &= 127, C[31] |= 64;
    const I = new Uint8Array(C.subarray(0, 32));
    return (0, i.wipe)(C), I;
  }
  r.convertSecretKeyToX25519 = ee;
})(us);
const Hh = "EdDSA", qh = "JWT", Oa = ".", xa = "base64url", zh = "utf8", Kh = "utf8", Bh = ":", Vh = "did", Gh = "key", tn = "base58btc", kh = "z", Wh = "K36", Yh = 32;
function ls(r) {
  return globalThis.Buffer != null ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : r;
}
function Ca(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? ls(globalThis.Buffer.allocUnsafe(r)) : new Uint8Array(r);
}
function Hi(r, e) {
  e || (e = r.reduce((s, o) => s + o.length, 0));
  const t = Ca(e);
  let i = 0;
  for (const s of r)
    t.set(s, i), i += s.length;
  return ls(t);
}
function Jh(r, e) {
  if (r.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++)
    t[i] = 255;
  for (var s = 0; s < r.length; s++) {
    var o = r.charAt(s), p = o.charCodeAt(0);
    if (t[p] !== 255)
      throw new TypeError(o + " is ambiguous");
    t[p] = s;
  }
  var h = r.length, g = r.charAt(0), m = Math.log(h) / Math.log(256), b = Math.log(256) / Math.log(h);
  function E(_) {
    if (_ instanceof Uint8Array || (ArrayBuffer.isView(_) ? _ = new Uint8Array(_.buffer, _.byteOffset, _.byteLength) : Array.isArray(_) && (_ = Uint8Array.from(_))), !(_ instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (_.length === 0)
      return "";
    for (var A = 0, R = 0, M = 0, c = _.length; M !== c && _[M] === 0; )
      M++, A++;
    for (var y = (c - M) * b + 1 >>> 0, l = new Uint8Array(y); M !== c; ) {
      for (var d = _[M], u = 0, n = y - 1; (d !== 0 || u < R) && n !== -1; n--, u++)
        d += 256 * l[n] >>> 0, l[n] = d % h >>> 0, d = d / h >>> 0;
      if (d !== 0)
        throw new Error("Non-zero carry");
      R = u, M++;
    }
    for (var f = y - R; f !== y && l[f] === 0; )
      f++;
    for (var T = g.repeat(A); f < y; ++f)
      T += r.charAt(l[f]);
    return T;
  }
  function S(_) {
    if (typeof _ != "string")
      throw new TypeError("Expected String");
    if (_.length === 0)
      return new Uint8Array();
    var A = 0;
    if (_[A] !== " ") {
      for (var R = 0, M = 0; _[A] === g; )
        R++, A++;
      for (var c = (_.length - A) * m + 1 >>> 0, y = new Uint8Array(c); _[A]; ) {
        var l = t[_.charCodeAt(A)];
        if (l === 255)
          return;
        for (var d = 0, u = c - 1; (l !== 0 || d < M) && u !== -1; u--, d++)
          l += h * y[u] >>> 0, y[u] = l % 256 >>> 0, l = l / 256 >>> 0;
        if (l !== 0)
          throw new Error("Non-zero carry");
        M = d, A++;
      }
      if (_[A] !== " ") {
        for (var n = c - M; n !== c && y[n] === 0; )
          n++;
        for (var f = new Uint8Array(R + (c - n)), T = R; n !== c; )
          f[T++] = y[n++];
        return f;
      }
    }
  }
  function D(_) {
    var A = S(_);
    if (A)
      return A;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: E,
    decodeUnsafe: S,
    decode: D
  };
}
var Xh = Jh, Qh = Xh;
const Zh = (r) => {
  if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
    return r;
  if (r instanceof ArrayBuffer)
    return new Uint8Array(r);
  if (ArrayBuffer.isView(r))
    return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  throw new Error("Unknown type, must be binary type");
}, eu = (r) => new TextEncoder().encode(r), tu = (r) => new TextDecoder().decode(r);
class ru {
  constructor(e, t, i) {
    this.name = e, this.prefix = t, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class iu {
  constructor(e, t, i) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Na(this, e);
  }
}
class su {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Na(this, e);
  }
  decode(e) {
    const t = e[0], i = this.decoders[t];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Na = (r, e) => new su({
  ...r.decoders || { [r.prefix]: r },
  ...e.decoders || { [e.prefix]: e }
});
class nu {
  constructor(e, t, i, s) {
    this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new ru(e, t, i), this.decoder = new iu(e, t, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const ci = ({ name: r, prefix: e, encode: t, decode: i }) => new nu(r, e, t, i), Ir = ({ prefix: r, name: e, alphabet: t }) => {
  const { encode: i, decode: s } = Qh(t, e);
  return ci({
    prefix: r,
    name: e,
    encode: i,
    decode: (o) => Zh(s(o))
  });
}, au = (r, e, t, i) => {
  const s = {};
  for (let b = 0; b < e.length; ++b)
    s[e[b]] = b;
  let o = r.length;
  for (; r[o - 1] === "="; )
    --o;
  const p = new Uint8Array(o * t / 8 | 0);
  let h = 0, g = 0, m = 0;
  for (let b = 0; b < o; ++b) {
    const E = s[r[b]];
    if (E === void 0)
      throw new SyntaxError(`Non-${i} character`);
    g = g << t | E, h += t, h >= 8 && (h -= 8, p[m++] = 255 & g >> h);
  }
  if (h >= t || 255 & g << 8 - h)
    throw new SyntaxError("Unexpected end of data");
  return p;
}, ou = (r, e, t) => {
  const i = e[e.length - 1] === "=", s = (1 << t) - 1;
  let o = "", p = 0, h = 0;
  for (let g = 0; g < r.length; ++g)
    for (h = h << 8 | r[g], p += 8; p > t; )
      p -= t, o += e[s & h >> p];
  if (p && (o += e[s & h << t - p]), i)
    for (; o.length * t & 7; )
      o += "=";
  return o;
}, tt = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) => ci({
  prefix: e,
  name: r,
  encode(s) {
    return ou(s, i, t);
  },
  decode(s) {
    return au(s, i, t, r);
  }
}), cu = ci({
  prefix: "\0",
  name: "identity",
  encode: (r) => tu(r),
  decode: (r) => eu(r)
}), hu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: cu
}, Symbol.toStringTag, { value: "Module" })), uu = tt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: uu
}, Symbol.toStringTag, { value: "Module" })), fu = tt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), du = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: fu
}, Symbol.toStringTag, { value: "Module" })), pu = Ir({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: pu
}, Symbol.toStringTag, { value: "Module" })), mu = tt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), yu = tt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: mu,
  base16upper: yu
}, Symbol.toStringTag, { value: "Module" })), wu = tt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Eu = tt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), vu = tt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), _u = tt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Du = tt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Su = tt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Iu = tt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Ou = tt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), xu = tt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: wu,
  base32hex: Du,
  base32hexpad: Iu,
  base32hexpadupper: Ou,
  base32hexupper: Su,
  base32pad: vu,
  base32padupper: _u,
  base32upper: Eu,
  base32z: xu
}, Symbol.toStringTag, { value: "Module" })), Nu = Ir({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Au = Ir({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), Pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: Nu,
  base36upper: Au
}, Symbol.toStringTag, { value: "Module" })), Tu = Ir({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Ru = Ir({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), Uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: Tu,
  base58flickr: Ru
}, Symbol.toStringTag, { value: "Module" })), Fu = tt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), $u = tt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), Lu = tt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), Mu = tt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Fu,
  base64pad: $u,
  base64url: Lu,
  base64urlpad: Mu
}, Symbol.toStringTag, { value: "Module" })), Aa = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Hu = Aa.reduce((r, e, t) => (r[t] = e, r), []), qu = Aa.reduce((r, e, t) => (r[e.codePointAt(0)] = t, r), []);
function zu(r) {
  return r.reduce((e, t) => (e += Hu[t], e), "");
}
function Ku(r) {
  const e = [];
  for (const t of r) {
    const i = qu[t.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const Bu = ci({
  prefix: "🚀",
  name: "base256emoji",
  encode: zu,
  decode: Ku
}), Vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Bu
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const rn = {
  ...hu,
  ...lu,
  ...du,
  ...gu,
  ...bu,
  ...Cu,
  ...Pu,
  ...Uu,
  ...ju,
  ...Vu
};
function Pa(r, e, t, i) {
  return {
    name: r,
    prefix: e,
    encoder: {
      name: r,
      prefix: e,
      encode: t
    },
    decoder: { decode: i }
  };
}
const sn = Pa("utf8", "u", (r) => "u" + new TextDecoder("utf8").decode(r), (r) => new TextEncoder().encode(r.substring(1))), Di = Pa("ascii", "a", (r) => {
  let e = "a";
  for (let t = 0; t < r.length; t++)
    e += String.fromCharCode(r[t]);
  return e;
}, (r) => {
  r = r.substring(1);
  const e = Ca(r.length);
  for (let t = 0; t < r.length; t++)
    e[t] = r.charCodeAt(t);
  return e;
}), Ta = {
  utf8: sn,
  "utf-8": sn,
  hex: rn.base16,
  latin1: Di,
  ascii: Di,
  binary: Di,
  ...rn
};
function ct(r, e = "utf8") {
  const t = Ta[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString("utf8") : t.encoder.encode(r).substring(1);
}
function lt(r, e = "utf8") {
  const t = Ta[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? ls(globalThis.Buffer.from(r, "utf-8")) : t.decoder.decode(`${t.prefix}${r}`);
}
function Xr(r) {
  return ct(lt(Dr(r), zh), xa);
}
function Ra(r) {
  const e = lt(Wh, tn), t = kh + ct(Hi([e, r]), tn);
  return [Vh, Gh, t].join(Bh);
}
function Gu(r) {
  return ct(r, xa);
}
function ku(r) {
  return lt([Xr(r.header), Xr(r.payload)].join(Oa), Kh);
}
function Wu(r) {
  return [
    Xr(r.header),
    Xr(r.payload),
    Gu(r.signature)
  ].join(Oa);
}
function nn(r = ar.randomBytes(Yh)) {
  return us.generateKeyPairFromSeed(r);
}
async function Yu(r, e, t, i, s = Z.fromMiliseconds(Date.now())) {
  const o = { alg: Hh, typ: qh }, p = Ra(i.publicKey), h = s + t, g = { iss: p, sub: r, aud: e, iat: s, exp: h }, m = ku({ header: o, payload: g }), b = us.sign(i.secretKey, m);
  return Wu({ header: o, payload: g, signature: b });
}
var fs = {}, hi = {};
Object.defineProperty(hi, "__esModule", { value: !0 });
var st = se, qi = pt, Ju = 20;
function Xu(r, e, t) {
  for (var i = 1634760805, s = 857760878, o = 2036477234, p = 1797285236, h = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], g = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], m = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], b = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], E = t[19] << 24 | t[18] << 16 | t[17] << 8 | t[16], S = t[23] << 24 | t[22] << 16 | t[21] << 8 | t[20], D = t[27] << 24 | t[26] << 16 | t[25] << 8 | t[24], _ = t[31] << 24 | t[30] << 16 | t[29] << 8 | t[28], A = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], R = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], M = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], c = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], y = i, l = s, d = o, u = p, n = h, f = g, T = m, U = b, K = E, G = S, X = D, x = _, P = A, k = R, H = M, $ = c, j = 0; j < Ju; j += 2)
    y = y + n | 0, P ^= y, P = P >>> 32 - 16 | P << 16, K = K + P | 0, n ^= K, n = n >>> 32 - 12 | n << 12, l = l + f | 0, k ^= l, k = k >>> 32 - 16 | k << 16, G = G + k | 0, f ^= G, f = f >>> 32 - 12 | f << 12, d = d + T | 0, H ^= d, H = H >>> 32 - 16 | H << 16, X = X + H | 0, T ^= X, T = T >>> 32 - 12 | T << 12, u = u + U | 0, $ ^= u, $ = $ >>> 32 - 16 | $ << 16, x = x + $ | 0, U ^= x, U = U >>> 32 - 12 | U << 12, d = d + T | 0, H ^= d, H = H >>> 32 - 8 | H << 8, X = X + H | 0, T ^= X, T = T >>> 32 - 7 | T << 7, u = u + U | 0, $ ^= u, $ = $ >>> 32 - 8 | $ << 8, x = x + $ | 0, U ^= x, U = U >>> 32 - 7 | U << 7, l = l + f | 0, k ^= l, k = k >>> 32 - 8 | k << 8, G = G + k | 0, f ^= G, f = f >>> 32 - 7 | f << 7, y = y + n | 0, P ^= y, P = P >>> 32 - 8 | P << 8, K = K + P | 0, n ^= K, n = n >>> 32 - 7 | n << 7, y = y + f | 0, $ ^= y, $ = $ >>> 32 - 16 | $ << 16, X = X + $ | 0, f ^= X, f = f >>> 32 - 12 | f << 12, l = l + T | 0, P ^= l, P = P >>> 32 - 16 | P << 16, x = x + P | 0, T ^= x, T = T >>> 32 - 12 | T << 12, d = d + U | 0, k ^= d, k = k >>> 32 - 16 | k << 16, K = K + k | 0, U ^= K, U = U >>> 32 - 12 | U << 12, u = u + n | 0, H ^= u, H = H >>> 32 - 16 | H << 16, G = G + H | 0, n ^= G, n = n >>> 32 - 12 | n << 12, d = d + U | 0, k ^= d, k = k >>> 32 - 8 | k << 8, K = K + k | 0, U ^= K, U = U >>> 32 - 7 | U << 7, u = u + n | 0, H ^= u, H = H >>> 32 - 8 | H << 8, G = G + H | 0, n ^= G, n = n >>> 32 - 7 | n << 7, l = l + T | 0, P ^= l, P = P >>> 32 - 8 | P << 8, x = x + P | 0, T ^= x, T = T >>> 32 - 7 | T << 7, y = y + f | 0, $ ^= y, $ = $ >>> 32 - 8 | $ << 8, X = X + $ | 0, f ^= X, f = f >>> 32 - 7 | f << 7;
  st.writeUint32LE(y + i | 0, r, 0), st.writeUint32LE(l + s | 0, r, 4), st.writeUint32LE(d + o | 0, r, 8), st.writeUint32LE(u + p | 0, r, 12), st.writeUint32LE(n + h | 0, r, 16), st.writeUint32LE(f + g | 0, r, 20), st.writeUint32LE(T + m | 0, r, 24), st.writeUint32LE(U + b | 0, r, 28), st.writeUint32LE(K + E | 0, r, 32), st.writeUint32LE(G + S | 0, r, 36), st.writeUint32LE(X + D | 0, r, 40), st.writeUint32LE(x + _ | 0, r, 44), st.writeUint32LE(P + A | 0, r, 48), st.writeUint32LE(k + R | 0, r, 52), st.writeUint32LE(H + M | 0, r, 56), st.writeUint32LE($ + c | 0, r, 60);
}
function Ua(r, e, t, i, s) {
  if (s === void 0 && (s = 0), r.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (i.length < t.length)
    throw new Error("ChaCha: destination is shorter than source");
  var o, p;
  if (s === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    o = new Uint8Array(16), p = o.length - e.length, o.set(e, p);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    o = e, p = s;
  }
  for (var h = new Uint8Array(64), g = 0; g < t.length; g += 64) {
    Xu(h, o, r);
    for (var m = g; m < g + 64 && m < t.length; m++)
      i[m] = t[m] ^ h[m - g];
    Zu(o, 0, p);
  }
  return qi.wipe(h), s === 0 && qi.wipe(o), i;
}
hi.streamXOR = Ua;
function Qu(r, e, t, i) {
  return i === void 0 && (i = 0), qi.wipe(t), Ua(r, e, t, t, i);
}
hi.stream = Qu;
function Zu(r, e, t) {
  for (var i = 1; t--; )
    i = i + (r[e] & 255) | 0, r[e] = i & 255, i >>>= 8, e++;
  if (i > 0)
    throw new Error("ChaCha: counter overflow");
}
var Fa = {}, jt = {};
Object.defineProperty(jt, "__esModule", { value: !0 });
function el(r, e, t) {
  return ~(r - 1) & e | r - 1 & t;
}
jt.select = el;
function tl(r, e) {
  return (r | 0) - (e | 0) - 1 >>> 31 & 1;
}
jt.lessOrEqual = tl;
function $a(r, e) {
  if (r.length !== e.length)
    return 0;
  for (var t = 0, i = 0; i < r.length; i++)
    t |= r[i] ^ e[i];
  return 1 & t - 1 >>> 8;
}
jt.compare = $a;
function rl(r, e) {
  return r.length === 0 || e.length === 0 ? !1 : $a(r, e) !== 0;
}
jt.equal = rl;
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = jt, t = pt;
  r.DIGEST_LENGTH = 16;
  var i = (
    /** @class */
    function() {
      function p(h) {
        this.digestLength = r.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var g = h[0] | h[1] << 8;
        this._r[0] = g & 8191;
        var m = h[2] | h[3] << 8;
        this._r[1] = (g >>> 13 | m << 3) & 8191;
        var b = h[4] | h[5] << 8;
        this._r[2] = (m >>> 10 | b << 6) & 7939;
        var E = h[6] | h[7] << 8;
        this._r[3] = (b >>> 7 | E << 9) & 8191;
        var S = h[8] | h[9] << 8;
        this._r[4] = (E >>> 4 | S << 12) & 255, this._r[5] = S >>> 1 & 8190;
        var D = h[10] | h[11] << 8;
        this._r[6] = (S >>> 14 | D << 2) & 8191;
        var _ = h[12] | h[13] << 8;
        this._r[7] = (D >>> 11 | _ << 5) & 8065;
        var A = h[14] | h[15] << 8;
        this._r[8] = (_ >>> 8 | A << 8) & 8191, this._r[9] = A >>> 5 & 127, this._pad[0] = h[16] | h[17] << 8, this._pad[1] = h[18] | h[19] << 8, this._pad[2] = h[20] | h[21] << 8, this._pad[3] = h[22] | h[23] << 8, this._pad[4] = h[24] | h[25] << 8, this._pad[5] = h[26] | h[27] << 8, this._pad[6] = h[28] | h[29] << 8, this._pad[7] = h[30] | h[31] << 8;
      }
      return p.prototype._blocks = function(h, g, m) {
        for (var b = this._fin ? 0 : 2048, E = this._h[0], S = this._h[1], D = this._h[2], _ = this._h[3], A = this._h[4], R = this._h[5], M = this._h[6], c = this._h[7], y = this._h[8], l = this._h[9], d = this._r[0], u = this._r[1], n = this._r[2], f = this._r[3], T = this._r[4], U = this._r[5], K = this._r[6], G = this._r[7], X = this._r[8], x = this._r[9]; m >= 16; ) {
          var P = h[g + 0] | h[g + 1] << 8;
          E += P & 8191;
          var k = h[g + 2] | h[g + 3] << 8;
          S += (P >>> 13 | k << 3) & 8191;
          var H = h[g + 4] | h[g + 5] << 8;
          D += (k >>> 10 | H << 6) & 8191;
          var $ = h[g + 6] | h[g + 7] << 8;
          _ += (H >>> 7 | $ << 9) & 8191;
          var j = h[g + 8] | h[g + 9] << 8;
          A += ($ >>> 4 | j << 12) & 8191, R += j >>> 1 & 8191;
          var F = h[g + 10] | h[g + 11] << 8;
          M += (j >>> 14 | F << 2) & 8191;
          var q = h[g + 12] | h[g + 13] << 8;
          c += (F >>> 11 | q << 5) & 8191;
          var te = h[g + 14] | h[g + 15] << 8;
          y += (q >>> 8 | te << 8) & 8191, l += te >>> 5 | b;
          var z = 0, Q = z;
          Q += E * d, Q += S * (5 * x), Q += D * (5 * X), Q += _ * (5 * G), Q += A * (5 * K), z = Q >>> 13, Q &= 8191, Q += R * (5 * U), Q += M * (5 * T), Q += c * (5 * f), Q += y * (5 * n), Q += l * (5 * u), z += Q >>> 13, Q &= 8191;
          var Y = z;
          Y += E * u, Y += S * d, Y += D * (5 * x), Y += _ * (5 * X), Y += A * (5 * G), z = Y >>> 13, Y &= 8191, Y += R * (5 * K), Y += M * (5 * U), Y += c * (5 * T), Y += y * (5 * f), Y += l * (5 * n), z += Y >>> 13, Y &= 8191;
          var ee = z;
          ee += E * n, ee += S * u, ee += D * d, ee += _ * (5 * x), ee += A * (5 * X), z = ee >>> 13, ee &= 8191, ee += R * (5 * G), ee += M * (5 * K), ee += c * (5 * U), ee += y * (5 * T), ee += l * (5 * f), z += ee >>> 13, ee &= 8191;
          var N = z;
          N += E * f, N += S * n, N += D * u, N += _ * d, N += A * (5 * x), z = N >>> 13, N &= 8191, N += R * (5 * X), N += M * (5 * G), N += c * (5 * K), N += y * (5 * U), N += l * (5 * T), z += N >>> 13, N &= 8191;
          var C = z;
          C += E * T, C += S * f, C += D * n, C += _ * u, C += A * d, z = C >>> 13, C &= 8191, C += R * (5 * x), C += M * (5 * X), C += c * (5 * G), C += y * (5 * K), C += l * (5 * U), z += C >>> 13, C &= 8191;
          var I = z;
          I += E * U, I += S * T, I += D * f, I += _ * n, I += A * u, z = I >>> 13, I &= 8191, I += R * d, I += M * (5 * x), I += c * (5 * X), I += y * (5 * G), I += l * (5 * K), z += I >>> 13, I &= 8191;
          var a = z;
          a += E * K, a += S * U, a += D * T, a += _ * f, a += A * n, z = a >>> 13, a &= 8191, a += R * u, a += M * d, a += c * (5 * x), a += y * (5 * X), a += l * (5 * G), z += a >>> 13, a &= 8191;
          var v = z;
          v += E * G, v += S * K, v += D * U, v += _ * T, v += A * f, z = v >>> 13, v &= 8191, v += R * n, v += M * u, v += c * d, v += y * (5 * x), v += l * (5 * X), z += v >>> 13, v &= 8191;
          var B = z;
          B += E * X, B += S * G, B += D * K, B += _ * U, B += A * T, z = B >>> 13, B &= 8191, B += R * f, B += M * n, B += c * u, B += y * d, B += l * (5 * x), z += B >>> 13, B &= 8191;
          var W = z;
          W += E * x, W += S * X, W += D * G, W += _ * K, W += A * U, z = W >>> 13, W &= 8191, W += R * T, W += M * f, W += c * n, W += y * u, W += l * d, z += W >>> 13, W &= 8191, z = (z << 2) + z | 0, z = z + Q | 0, Q = z & 8191, z = z >>> 13, Y += z, E = Q, S = Y, D = ee, _ = N, A = C, R = I, M = a, c = v, y = B, l = W, g += 16, m -= 16;
        }
        this._h[0] = E, this._h[1] = S, this._h[2] = D, this._h[3] = _, this._h[4] = A, this._h[5] = R, this._h[6] = M, this._h[7] = c, this._h[8] = y, this._h[9] = l;
      }, p.prototype.finish = function(h, g) {
        g === void 0 && (g = 0);
        var m = new Uint16Array(10), b, E, S, D;
        if (this._leftover) {
          for (D = this._leftover, this._buffer[D++] = 1; D < 16; D++)
            this._buffer[D] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (b = this._h[1] >>> 13, this._h[1] &= 8191, D = 2; D < 10; D++)
          this._h[D] += b, b = this._h[D] >>> 13, this._h[D] &= 8191;
        for (this._h[0] += b * 5, b = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += b, b = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += b, m[0] = this._h[0] + 5, b = m[0] >>> 13, m[0] &= 8191, D = 1; D < 10; D++)
          m[D] = this._h[D] + b, b = m[D] >>> 13, m[D] &= 8191;
        for (m[9] -= 8192, E = (b ^ 1) - 1, D = 0; D < 10; D++)
          m[D] &= E;
        for (E = ~E, D = 0; D < 10; D++)
          this._h[D] = this._h[D] & E | m[D];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, S = this._h[0] + this._pad[0], this._h[0] = S & 65535, D = 1; D < 8; D++)
          S = (this._h[D] + this._pad[D] | 0) + (S >>> 16) | 0, this._h[D] = S & 65535;
        return h[g + 0] = this._h[0] >>> 0, h[g + 1] = this._h[0] >>> 8, h[g + 2] = this._h[1] >>> 0, h[g + 3] = this._h[1] >>> 8, h[g + 4] = this._h[2] >>> 0, h[g + 5] = this._h[2] >>> 8, h[g + 6] = this._h[3] >>> 0, h[g + 7] = this._h[3] >>> 8, h[g + 8] = this._h[4] >>> 0, h[g + 9] = this._h[4] >>> 8, h[g + 10] = this._h[5] >>> 0, h[g + 11] = this._h[5] >>> 8, h[g + 12] = this._h[6] >>> 0, h[g + 13] = this._h[6] >>> 8, h[g + 14] = this._h[7] >>> 0, h[g + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, p.prototype.update = function(h) {
        var g = 0, m = h.length, b;
        if (this._leftover) {
          b = 16 - this._leftover, b > m && (b = m);
          for (var E = 0; E < b; E++)
            this._buffer[this._leftover + E] = h[g + E];
          if (m -= b, g += b, this._leftover += b, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (m >= 16 && (b = m - m % 16, this._blocks(h, g, b), g += b, m -= b), m) {
          for (var E = 0; E < m; E++)
            this._buffer[this._leftover + E] = h[g + E];
          this._leftover += m;
        }
        return this;
      }, p.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var h = new Uint8Array(16);
        return this.finish(h), h;
      }, p.prototype.clean = function() {
        return t.wipe(this._buffer), t.wipe(this._r), t.wipe(this._h), t.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, p;
    }()
  );
  r.Poly1305 = i;
  function s(p, h) {
    var g = new i(p);
    g.update(h);
    var m = g.digest();
    return g.clean(), m;
  }
  r.oneTimeAuth = s;
  function o(p, h) {
    return p.length !== r.DIGEST_LENGTH || h.length !== r.DIGEST_LENGTH ? !1 : e.equal(p, h);
  }
  r.equal = o;
})(Fa);
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = hi, t = Fa, i = pt, s = se, o = jt;
  r.KEY_LENGTH = 32, r.NONCE_LENGTH = 12, r.TAG_LENGTH = 16;
  var p = new Uint8Array(16), h = (
    /** @class */
    function() {
      function g(m) {
        if (this.nonceLength = r.NONCE_LENGTH, this.tagLength = r.TAG_LENGTH, m.length !== r.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(m);
      }
      return g.prototype.seal = function(m, b, E, S) {
        if (m.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var D = new Uint8Array(16);
        D.set(m, D.length - m.length);
        var _ = new Uint8Array(32);
        e.stream(this._key, D, _, 4);
        var A = b.length + this.tagLength, R;
        if (S) {
          if (S.length !== A)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          R = S;
        } else
          R = new Uint8Array(A);
        return e.streamXOR(this._key, D, b, R, 4), this._authenticate(R.subarray(R.length - this.tagLength, R.length), _, R.subarray(0, R.length - this.tagLength), E), i.wipe(D), R;
      }, g.prototype.open = function(m, b, E, S) {
        if (m.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (b.length < this.tagLength)
          return null;
        var D = new Uint8Array(16);
        D.set(m, D.length - m.length);
        var _ = new Uint8Array(32);
        e.stream(this._key, D, _, 4);
        var A = new Uint8Array(this.tagLength);
        if (this._authenticate(A, _, b.subarray(0, b.length - this.tagLength), E), !o.equal(A, b.subarray(b.length - this.tagLength, b.length)))
          return null;
        var R = b.length - this.tagLength, M;
        if (S) {
          if (S.length !== R)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          M = S;
        } else
          M = new Uint8Array(R);
        return e.streamXOR(this._key, D, b.subarray(0, b.length - this.tagLength), M, 4), i.wipe(D), M;
      }, g.prototype.clean = function() {
        return i.wipe(this._key), this;
      }, g.prototype._authenticate = function(m, b, E, S) {
        var D = new t.Poly1305(b);
        S && (D.update(S), S.length % 16 > 0 && D.update(p.subarray(S.length % 16))), D.update(E), E.length % 16 > 0 && D.update(p.subarray(E.length % 16));
        var _ = new Uint8Array(8);
        S && s.writeUint64LE(S.length, _), D.update(_), s.writeUint64LE(E.length, _), D.update(_);
        for (var A = D.digest(), R = 0; R < A.length; R++)
          m[R] = A[R];
        D.clean(), i.wipe(A), i.wipe(_);
      }, g;
    }()
  );
  r.ChaCha20Poly1305 = h;
})(fs);
var La = {}, Or = {}, ds = {};
Object.defineProperty(ds, "__esModule", { value: !0 });
function il(r) {
  return typeof r.saveState < "u" && typeof r.restoreState < "u" && typeof r.cleanSavedState < "u";
}
ds.isSerializableHash = il;
Object.defineProperty(Or, "__esModule", { value: !0 });
var Dt = ds, sl = jt, nl = pt, Ma = (
  /** @class */
  function() {
    function r(e, t) {
      this._finished = !1, this._inner = new e(), this._outer = new e(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var i = new Uint8Array(this.blockSize);
      t.length > this.blockSize ? this._inner.update(t).finish(i).clean() : i.set(t);
      for (var s = 0; s < i.length; s++)
        i[s] ^= 54;
      this._inner.update(i);
      for (var s = 0; s < i.length; s++)
        i[s] ^= 106;
      this._outer.update(i), Dt.isSerializableHash(this._inner) && Dt.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), nl.wipe(i);
    }
    return r.prototype.reset = function() {
      if (!Dt.isSerializableHash(this._inner) || !Dt.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, r.prototype.clean = function() {
      Dt.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), Dt.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, r.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, r.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, r.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, r.prototype.saveState = function() {
      if (!Dt.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, r.prototype.restoreState = function(e) {
      if (!Dt.isSerializableHash(this._inner) || !Dt.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, r.prototype.cleanSavedState = function(e) {
      if (!Dt.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, r;
  }()
);
Or.HMAC = Ma;
function al(r, e, t) {
  var i = new Ma(r, e);
  i.update(t);
  var s = i.digest();
  return i.clean(), s;
}
Or.hmac = al;
Or.equal = sl.equal;
Object.defineProperty(La, "__esModule", { value: !0 });
var an = Or, on = pt, ol = (
  /** @class */
  function() {
    function r(e, t, i, s) {
      i === void 0 && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = s;
      var o = an.hmac(this._hash, i, t);
      this._hmac = new an.HMAC(e, o), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
    }
    return r.prototype._fillBuffer = function() {
      this._counter[0]++;
      var e = this._counter[0];
      if (e === 0)
        throw new Error("hkdf: cannot expand more");
      this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
    }, r.prototype.expand = function(e) {
      for (var t = new Uint8Array(e), i = 0; i < t.length; i++)
        this._bufpos === this._buffer.length && this._fillBuffer(), t[i] = this._buffer[this._bufpos++];
      return t;
    }, r.prototype.clean = function() {
      this._hmac.clean(), on.wipe(this._buffer), on.wipe(this._counter), this._bufpos = 0;
    }, r;
  }()
), cl = La.HKDF = ol, ui = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = se, t = pt;
  r.DIGEST_LENGTH = 32, r.BLOCK_SIZE = 64;
  var i = (
    /** @class */
    function() {
      function h() {
        this.digestLength = r.DIGEST_LENGTH, this.blockSize = r.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return h.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, h.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, h.prototype.clean = function() {
        t.wipe(this._buffer), t.wipe(this._temp), this.reset();
      }, h.prototype.update = function(g, m) {
        if (m === void 0 && (m = g.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var b = 0;
        if (this._bytesHashed += m, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && m > 0; )
            this._buffer[this._bufferLength++] = g[b++], m--;
          this._bufferLength === this.blockSize && (o(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (m >= this.blockSize && (b = o(this._temp, this._state, g, b, m), m %= this.blockSize); m > 0; )
          this._buffer[this._bufferLength++] = g[b++], m--;
        return this;
      }, h.prototype.finish = function(g) {
        if (!this._finished) {
          var m = this._bytesHashed, b = this._bufferLength, E = m / 536870912 | 0, S = m << 3, D = m % 64 < 56 ? 64 : 128;
          this._buffer[b] = 128;
          for (var _ = b + 1; _ < D - 8; _++)
            this._buffer[_] = 0;
          e.writeUint32BE(E, this._buffer, D - 8), e.writeUint32BE(S, this._buffer, D - 4), o(this._temp, this._state, this._buffer, 0, D), this._finished = !0;
        }
        for (var _ = 0; _ < this.digestLength / 4; _++)
          e.writeUint32BE(this._state[_], g, _ * 4);
        return this;
      }, h.prototype.digest = function() {
        var g = new Uint8Array(this.digestLength);
        return this.finish(g), g;
      }, h.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, h.prototype.restoreState = function(g) {
        return this._state.set(g.state), this._bufferLength = g.bufferLength, g.buffer && this._buffer.set(g.buffer), this._bytesHashed = g.bytesHashed, this._finished = !1, this;
      }, h.prototype.cleanSavedState = function(g) {
        t.wipe(g.state), g.buffer && t.wipe(g.buffer), g.bufferLength = 0, g.bytesHashed = 0;
      }, h;
    }()
  );
  r.SHA256 = i;
  var s = new Int32Array([
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
  ]);
  function o(h, g, m, b, E) {
    for (; E >= 64; ) {
      for (var S = g[0], D = g[1], _ = g[2], A = g[3], R = g[4], M = g[5], c = g[6], y = g[7], l = 0; l < 16; l++) {
        var d = b + l * 4;
        h[l] = e.readUint32BE(m, d);
      }
      for (var l = 16; l < 64; l++) {
        var u = h[l - 2], n = (u >>> 17 | u << 32 - 17) ^ (u >>> 19 | u << 32 - 19) ^ u >>> 10;
        u = h[l - 15];
        var f = (u >>> 7 | u << 32 - 7) ^ (u >>> 18 | u << 32 - 18) ^ u >>> 3;
        h[l] = (n + h[l - 7] | 0) + (f + h[l - 16] | 0);
      }
      for (var l = 0; l < 64; l++) {
        var n = (((R >>> 6 | R << 26) ^ (R >>> 11 | R << 21) ^ (R >>> 25 | R << 7)) + (R & M ^ ~R & c) | 0) + (y + (s[l] + h[l] | 0) | 0) | 0, f = ((S >>> 2 | S << 32 - 2) ^ (S >>> 13 | S << 32 - 13) ^ (S >>> 22 | S << 32 - 22)) + (S & D ^ S & _ ^ D & _) | 0;
        y = c, c = M, M = R, R = A + n | 0, A = _, _ = D, D = S, S = n + f | 0;
      }
      g[0] += S, g[1] += D, g[2] += _, g[3] += A, g[4] += R, g[5] += M, g[6] += c, g[7] += y, b += 64, E -= 64;
    }
    return b;
  }
  function p(h) {
    var g = new i();
    g.update(h);
    var m = g.digest();
    return g.clean(), m;
  }
  r.hash = p;
})(ui);
var ps = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.sharedKey = r.generateKeyPair = r.generateKeyPairFromSeed = r.scalarMultBase = r.scalarMult = r.SHARED_KEY_LENGTH = r.SECRET_KEY_LENGTH = r.PUBLIC_KEY_LENGTH = void 0;
  const e = ar, t = pt;
  r.PUBLIC_KEY_LENGTH = 32, r.SECRET_KEY_LENGTH = 32, r.SHARED_KEY_LENGTH = 32;
  function i(l) {
    const d = new Float64Array(16);
    if (l)
      for (let u = 0; u < l.length; u++)
        d[u] = l[u];
    return d;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const o = i([56129, 1]);
  function p(l) {
    let d = 1;
    for (let u = 0; u < 16; u++) {
      let n = l[u] + d + 65535;
      d = Math.floor(n / 65536), l[u] = n - d * 65536;
    }
    l[0] += d - 1 + 37 * (d - 1);
  }
  function h(l, d, u) {
    const n = ~(u - 1);
    for (let f = 0; f < 16; f++) {
      const T = n & (l[f] ^ d[f]);
      l[f] ^= T, d[f] ^= T;
    }
  }
  function g(l, d) {
    const u = i(), n = i();
    for (let f = 0; f < 16; f++)
      n[f] = d[f];
    p(n), p(n), p(n);
    for (let f = 0; f < 2; f++) {
      u[0] = n[0] - 65517;
      for (let U = 1; U < 15; U++)
        u[U] = n[U] - 65535 - (u[U - 1] >> 16 & 1), u[U - 1] &= 65535;
      u[15] = n[15] - 32767 - (u[14] >> 16 & 1);
      const T = u[15] >> 16 & 1;
      u[14] &= 65535, h(n, u, 1 - T);
    }
    for (let f = 0; f < 16; f++)
      l[2 * f] = n[f] & 255, l[2 * f + 1] = n[f] >> 8;
  }
  function m(l, d) {
    for (let u = 0; u < 16; u++)
      l[u] = d[2 * u] + (d[2 * u + 1] << 8);
    l[15] &= 32767;
  }
  function b(l, d, u) {
    for (let n = 0; n < 16; n++)
      l[n] = d[n] + u[n];
  }
  function E(l, d, u) {
    for (let n = 0; n < 16; n++)
      l[n] = d[n] - u[n];
  }
  function S(l, d, u) {
    let n, f, T = 0, U = 0, K = 0, G = 0, X = 0, x = 0, P = 0, k = 0, H = 0, $ = 0, j = 0, F = 0, q = 0, te = 0, z = 0, Q = 0, Y = 0, ee = 0, N = 0, C = 0, I = 0, a = 0, v = 0, B = 0, W = 0, le = 0, ye = 0, de = 0, Ee = 0, Ue = 0, Ae = 0, me = u[0], pe = u[1], fe = u[2], he = u[3], ce = u[4], oe = u[5], ae = u[6], re = u[7], ue = u[8], ge = u[9], ie = u[10], be = u[11], we = u[12], _e = u[13], De = u[14], ve = u[15];
    n = d[0], T += n * me, U += n * pe, K += n * fe, G += n * he, X += n * ce, x += n * oe, P += n * ae, k += n * re, H += n * ue, $ += n * ge, j += n * ie, F += n * be, q += n * we, te += n * _e, z += n * De, Q += n * ve, n = d[1], U += n * me, K += n * pe, G += n * fe, X += n * he, x += n * ce, P += n * oe, k += n * ae, H += n * re, $ += n * ue, j += n * ge, F += n * ie, q += n * be, te += n * we, z += n * _e, Q += n * De, Y += n * ve, n = d[2], K += n * me, G += n * pe, X += n * fe, x += n * he, P += n * ce, k += n * oe, H += n * ae, $ += n * re, j += n * ue, F += n * ge, q += n * ie, te += n * be, z += n * we, Q += n * _e, Y += n * De, ee += n * ve, n = d[3], G += n * me, X += n * pe, x += n * fe, P += n * he, k += n * ce, H += n * oe, $ += n * ae, j += n * re, F += n * ue, q += n * ge, te += n * ie, z += n * be, Q += n * we, Y += n * _e, ee += n * De, N += n * ve, n = d[4], X += n * me, x += n * pe, P += n * fe, k += n * he, H += n * ce, $ += n * oe, j += n * ae, F += n * re, q += n * ue, te += n * ge, z += n * ie, Q += n * be, Y += n * we, ee += n * _e, N += n * De, C += n * ve, n = d[5], x += n * me, P += n * pe, k += n * fe, H += n * he, $ += n * ce, j += n * oe, F += n * ae, q += n * re, te += n * ue, z += n * ge, Q += n * ie, Y += n * be, ee += n * we, N += n * _e, C += n * De, I += n * ve, n = d[6], P += n * me, k += n * pe, H += n * fe, $ += n * he, j += n * ce, F += n * oe, q += n * ae, te += n * re, z += n * ue, Q += n * ge, Y += n * ie, ee += n * be, N += n * we, C += n * _e, I += n * De, a += n * ve, n = d[7], k += n * me, H += n * pe, $ += n * fe, j += n * he, F += n * ce, q += n * oe, te += n * ae, z += n * re, Q += n * ue, Y += n * ge, ee += n * ie, N += n * be, C += n * we, I += n * _e, a += n * De, v += n * ve, n = d[8], H += n * me, $ += n * pe, j += n * fe, F += n * he, q += n * ce, te += n * oe, z += n * ae, Q += n * re, Y += n * ue, ee += n * ge, N += n * ie, C += n * be, I += n * we, a += n * _e, v += n * De, B += n * ve, n = d[9], $ += n * me, j += n * pe, F += n * fe, q += n * he, te += n * ce, z += n * oe, Q += n * ae, Y += n * re, ee += n * ue, N += n * ge, C += n * ie, I += n * be, a += n * we, v += n * _e, B += n * De, W += n * ve, n = d[10], j += n * me, F += n * pe, q += n * fe, te += n * he, z += n * ce, Q += n * oe, Y += n * ae, ee += n * re, N += n * ue, C += n * ge, I += n * ie, a += n * be, v += n * we, B += n * _e, W += n * De, le += n * ve, n = d[11], F += n * me, q += n * pe, te += n * fe, z += n * he, Q += n * ce, Y += n * oe, ee += n * ae, N += n * re, C += n * ue, I += n * ge, a += n * ie, v += n * be, B += n * we, W += n * _e, le += n * De, ye += n * ve, n = d[12], q += n * me, te += n * pe, z += n * fe, Q += n * he, Y += n * ce, ee += n * oe, N += n * ae, C += n * re, I += n * ue, a += n * ge, v += n * ie, B += n * be, W += n * we, le += n * _e, ye += n * De, de += n * ve, n = d[13], te += n * me, z += n * pe, Q += n * fe, Y += n * he, ee += n * ce, N += n * oe, C += n * ae, I += n * re, a += n * ue, v += n * ge, B += n * ie, W += n * be, le += n * we, ye += n * _e, de += n * De, Ee += n * ve, n = d[14], z += n * me, Q += n * pe, Y += n * fe, ee += n * he, N += n * ce, C += n * oe, I += n * ae, a += n * re, v += n * ue, B += n * ge, W += n * ie, le += n * be, ye += n * we, de += n * _e, Ee += n * De, Ue += n * ve, n = d[15], Q += n * me, Y += n * pe, ee += n * fe, N += n * he, C += n * ce, I += n * oe, a += n * ae, v += n * re, B += n * ue, W += n * ge, le += n * ie, ye += n * be, de += n * we, Ee += n * _e, Ue += n * De, Ae += n * ve, T += 38 * Y, U += 38 * ee, K += 38 * N, G += 38 * C, X += 38 * I, x += 38 * a, P += 38 * v, k += 38 * B, H += 38 * W, $ += 38 * le, j += 38 * ye, F += 38 * de, q += 38 * Ee, te += 38 * Ue, z += 38 * Ae, f = 1, n = T + f + 65535, f = Math.floor(n / 65536), T = n - f * 65536, n = U + f + 65535, f = Math.floor(n / 65536), U = n - f * 65536, n = K + f + 65535, f = Math.floor(n / 65536), K = n - f * 65536, n = G + f + 65535, f = Math.floor(n / 65536), G = n - f * 65536, n = X + f + 65535, f = Math.floor(n / 65536), X = n - f * 65536, n = x + f + 65535, f = Math.floor(n / 65536), x = n - f * 65536, n = P + f + 65535, f = Math.floor(n / 65536), P = n - f * 65536, n = k + f + 65535, f = Math.floor(n / 65536), k = n - f * 65536, n = H + f + 65535, f = Math.floor(n / 65536), H = n - f * 65536, n = $ + f + 65535, f = Math.floor(n / 65536), $ = n - f * 65536, n = j + f + 65535, f = Math.floor(n / 65536), j = n - f * 65536, n = F + f + 65535, f = Math.floor(n / 65536), F = n - f * 65536, n = q + f + 65535, f = Math.floor(n / 65536), q = n - f * 65536, n = te + f + 65535, f = Math.floor(n / 65536), te = n - f * 65536, n = z + f + 65535, f = Math.floor(n / 65536), z = n - f * 65536, n = Q + f + 65535, f = Math.floor(n / 65536), Q = n - f * 65536, T += f - 1 + 37 * (f - 1), f = 1, n = T + f + 65535, f = Math.floor(n / 65536), T = n - f * 65536, n = U + f + 65535, f = Math.floor(n / 65536), U = n - f * 65536, n = K + f + 65535, f = Math.floor(n / 65536), K = n - f * 65536, n = G + f + 65535, f = Math.floor(n / 65536), G = n - f * 65536, n = X + f + 65535, f = Math.floor(n / 65536), X = n - f * 65536, n = x + f + 65535, f = Math.floor(n / 65536), x = n - f * 65536, n = P + f + 65535, f = Math.floor(n / 65536), P = n - f * 65536, n = k + f + 65535, f = Math.floor(n / 65536), k = n - f * 65536, n = H + f + 65535, f = Math.floor(n / 65536), H = n - f * 65536, n = $ + f + 65535, f = Math.floor(n / 65536), $ = n - f * 65536, n = j + f + 65535, f = Math.floor(n / 65536), j = n - f * 65536, n = F + f + 65535, f = Math.floor(n / 65536), F = n - f * 65536, n = q + f + 65535, f = Math.floor(n / 65536), q = n - f * 65536, n = te + f + 65535, f = Math.floor(n / 65536), te = n - f * 65536, n = z + f + 65535, f = Math.floor(n / 65536), z = n - f * 65536, n = Q + f + 65535, f = Math.floor(n / 65536), Q = n - f * 65536, T += f - 1 + 37 * (f - 1), l[0] = T, l[1] = U, l[2] = K, l[3] = G, l[4] = X, l[5] = x, l[6] = P, l[7] = k, l[8] = H, l[9] = $, l[10] = j, l[11] = F, l[12] = q, l[13] = te, l[14] = z, l[15] = Q;
  }
  function D(l, d) {
    S(l, d, d);
  }
  function _(l, d) {
    const u = i();
    for (let n = 0; n < 16; n++)
      u[n] = d[n];
    for (let n = 253; n >= 0; n--)
      D(u, u), n !== 2 && n !== 4 && S(u, u, d);
    for (let n = 0; n < 16; n++)
      l[n] = u[n];
  }
  function A(l, d) {
    const u = new Uint8Array(32), n = new Float64Array(80), f = i(), T = i(), U = i(), K = i(), G = i(), X = i();
    for (let H = 0; H < 31; H++)
      u[H] = l[H];
    u[31] = l[31] & 127 | 64, u[0] &= 248, m(n, d);
    for (let H = 0; H < 16; H++)
      T[H] = n[H];
    f[0] = K[0] = 1;
    for (let H = 254; H >= 0; --H) {
      const $ = u[H >>> 3] >>> (H & 7) & 1;
      h(f, T, $), h(U, K, $), b(G, f, U), E(f, f, U), b(U, T, K), E(T, T, K), D(K, G), D(X, f), S(f, U, f), S(U, T, G), b(G, f, U), E(f, f, U), D(T, f), E(U, K, X), S(f, U, o), b(f, f, K), S(U, U, f), S(f, K, X), S(K, T, n), D(T, G), h(f, T, $), h(U, K, $);
    }
    for (let H = 0; H < 16; H++)
      n[H + 16] = f[H], n[H + 32] = U[H], n[H + 48] = T[H], n[H + 64] = K[H];
    const x = n.subarray(32), P = n.subarray(16);
    _(x, x), S(P, P, x);
    const k = new Uint8Array(32);
    return g(k, P), k;
  }
  r.scalarMult = A;
  function R(l) {
    return A(l, s);
  }
  r.scalarMultBase = R;
  function M(l) {
    if (l.length !== r.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${r.SECRET_KEY_LENGTH} bytes`);
    const d = new Uint8Array(l);
    return {
      publicKey: R(d),
      secretKey: d
    };
  }
  r.generateKeyPairFromSeed = M;
  function c(l) {
    const d = (0, e.randomBytes)(32, l), u = M(d);
    return (0, t.wipe)(d), u;
  }
  r.generateKeyPair = c;
  function y(l, d, u = !1) {
    if (l.length !== r.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (d.length !== r.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const n = A(l, d);
    if (u) {
      let f = 0;
      for (let T = 0; T < n.length; T++)
        f |= n[T];
      if (f === 0)
        throw new Error("X25519: invalid shared key");
    }
    return n;
  }
  r.sharedKey = y;
})(ps);
var cn = globalThis && globalThis.__spreadArray || function(r, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, s = e.length, o; i < s; i++)
      (o || !(i in e)) && (o || (o = Array.prototype.slice.call(e, 0, i)), o[i] = e[i]);
  return r.concat(o || Array.prototype.slice.call(e));
}, hl = (
  /** @class */
  function() {
    function r(e, t, i) {
      this.name = e, this.version = t, this.os = i, this.type = "browser";
    }
    return r;
  }()
), ul = (
  /** @class */
  function() {
    function r(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return r;
  }()
), ll = (
  /** @class */
  function() {
    function r(e, t, i, s) {
      this.name = e, this.version = t, this.os = i, this.bot = s, this.type = "bot-device";
    }
    return r;
  }()
), fl = (
  /** @class */
  function() {
    function r() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return r;
  }()
), dl = (
  /** @class */
  function() {
    function r() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return r;
  }()
), pl = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, gl = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, hn = 3, ml = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", pl]
], un = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function yl(r) {
  return r ? ln(r) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new dl() : typeof navigator < "u" ? ln(navigator.userAgent) : El();
}
function bl(r) {
  return r !== "" && ml.reduce(function(e, t) {
    var i = t[0], s = t[1];
    if (e)
      return e;
    var o = s.exec(r);
    return !!o && [i, o];
  }, !1);
}
function ln(r) {
  var e = bl(r);
  if (!e)
    return null;
  var t = e[0], i = e[1];
  if (t === "searchbot")
    return new fl();
  var s = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < hn && (s = cn(cn([], s, !0), vl(hn - s.length), !0)) : s = [];
  var o = s.join("."), p = wl(r), h = gl.exec(r);
  return h && h[1] ? new ll(t, o, p, h[1]) : new hl(t, o, p);
}
function wl(r) {
  for (var e = 0, t = un.length; e < t; e++) {
    var i = un[e], s = i[0], o = i[1], p = o.exec(r);
    if (p)
      return s;
  }
  return null;
}
function El() {
  var r = typeof process < "u" && process.version;
  return r ? new ul(process.version.slice(1)) : null;
}
function vl(r) {
  for (var e = [], t = 0; t < r; t++)
    e.push("0");
  return e;
}
var Oe = {};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.getLocalStorage = Oe.getLocalStorageOrThrow = Oe.getCrypto = Oe.getCryptoOrThrow = Ha = Oe.getLocation = Oe.getLocationOrThrow = gs = Oe.getNavigator = Oe.getNavigatorOrThrow = ja = Oe.getDocument = Oe.getDocumentOrThrow = Oe.getFromWindowOrThrow = Oe.getFromWindow = void 0;
function Qt(r) {
  let e;
  return typeof window < "u" && typeof window[r] < "u" && (e = window[r]), e;
}
Oe.getFromWindow = Qt;
function or(r) {
  const e = Qt(r);
  if (!e)
    throw new Error(`${r} is not defined in Window`);
  return e;
}
Oe.getFromWindowOrThrow = or;
function _l() {
  return or("document");
}
Oe.getDocumentOrThrow = _l;
function Dl() {
  return Qt("document");
}
var ja = Oe.getDocument = Dl;
function Sl() {
  return or("navigator");
}
Oe.getNavigatorOrThrow = Sl;
function Il() {
  return Qt("navigator");
}
var gs = Oe.getNavigator = Il;
function Ol() {
  return or("location");
}
Oe.getLocationOrThrow = Ol;
function xl() {
  return Qt("location");
}
var Ha = Oe.getLocation = xl;
function Cl() {
  return or("crypto");
}
Oe.getCryptoOrThrow = Cl;
function Nl() {
  return Qt("crypto");
}
Oe.getCrypto = Nl;
function Al() {
  return or("localStorage");
}
Oe.getLocalStorageOrThrow = Al;
function Pl() {
  return Qt("localStorage");
}
Oe.getLocalStorage = Pl;
var ms = {};
Object.defineProperty(ms, "__esModule", { value: !0 });
var qa = ms.getWindowMetadata = void 0;
const fn = Oe;
function Tl() {
  let r, e;
  try {
    r = fn.getDocumentOrThrow(), e = fn.getLocationOrThrow();
  } catch {
    return null;
  }
  function t() {
    const E = r.getElementsByTagName("link"), S = [];
    for (let D = 0; D < E.length; D++) {
      const _ = E[D], A = _.getAttribute("rel");
      if (A && A.toLowerCase().indexOf("icon") > -1) {
        const R = _.getAttribute("href");
        if (R)
          if (R.toLowerCase().indexOf("https:") === -1 && R.toLowerCase().indexOf("http:") === -1 && R.indexOf("//") !== 0) {
            let M = e.protocol + "//" + e.host;
            if (R.indexOf("/") === 0)
              M += R;
            else {
              const c = e.pathname.split("/");
              c.pop();
              const y = c.join("/");
              M += y + "/" + R;
            }
            S.push(M);
          } else if (R.indexOf("//") === 0) {
            const M = e.protocol + R;
            S.push(M);
          } else
            S.push(R);
      }
    }
    return S;
  }
  function i(...E) {
    const S = r.getElementsByTagName("meta");
    for (let D = 0; D < S.length; D++) {
      const _ = S[D], A = ["itemprop", "property", "name"].map((R) => _.getAttribute(R)).filter((R) => R ? E.includes(R) : !1);
      if (A.length && A) {
        const R = _.getAttribute("content");
        if (R)
          return R;
      }
    }
    return "";
  }
  function s() {
    let E = i("name", "og:site_name", "og:title", "twitter:title");
    return E || (E = r.title), E;
  }
  function o() {
    return i("description", "og:description", "twitter:description", "keywords");
  }
  const p = s(), h = o(), g = e.origin, m = t();
  return {
    description: h,
    url: g,
    icons: m,
    name: p
  };
}
qa = ms.getWindowMetadata = Tl;
var ys = function(r, e) {
  for (var t = {}, i = Object.keys(r), s = Array.isArray(e), o = 0; o < i.length; o++) {
    var p = i[o], h = r[p];
    (s ? e.indexOf(p) !== -1 : e(p, h, r)) && (t[p] = h);
  }
  return t;
};
const Rl = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe"
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe"
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe"
  }
};
var Qr = { exports: {} };
Qr.exports;
(function(r, e) {
  var t = 200, i = "__lodash_hash_undefined__", s = 1, o = 2, p = 9007199254740991, h = "[object Arguments]", g = "[object Array]", m = "[object AsyncFunction]", b = "[object Boolean]", E = "[object Date]", S = "[object Error]", D = "[object Function]", _ = "[object GeneratorFunction]", A = "[object Map]", R = "[object Number]", M = "[object Null]", c = "[object Object]", y = "[object Promise]", l = "[object Proxy]", d = "[object RegExp]", u = "[object Set]", n = "[object String]", f = "[object Symbol]", T = "[object Undefined]", U = "[object WeakMap]", K = "[object ArrayBuffer]", G = "[object DataView]", X = "[object Float32Array]", x = "[object Float64Array]", P = "[object Int8Array]", k = "[object Int16Array]", H = "[object Int32Array]", $ = "[object Uint8Array]", j = "[object Uint8ClampedArray]", F = "[object Uint16Array]", q = "[object Uint32Array]", te = /[\\^$.*+?()[\]{}|]/g, z = /^\[object .+?Constructor\]$/, Q = /^(?:0|[1-9]\d*)$/, Y = {};
  Y[X] = Y[x] = Y[P] = Y[k] = Y[H] = Y[$] = Y[j] = Y[F] = Y[q] = !0, Y[h] = Y[g] = Y[K] = Y[b] = Y[G] = Y[E] = Y[S] = Y[D] = Y[A] = Y[R] = Y[c] = Y[d] = Y[u] = Y[n] = Y[U] = !1;
  var ee = typeof Mr == "object" && Mr && Mr.Object === Object && Mr, N = typeof self == "object" && self && self.Object === Object && self, C = ee || N || Function("return this")(), I = e && !e.nodeType && e, a = I && !0 && r && !r.nodeType && r, v = a && a.exports === I, B = v && ee.process, W = function() {
    try {
      return B && B.binding && B.binding("util");
    } catch {
    }
  }(), le = W && W.isTypedArray;
  function ye(w, O) {
    for (var L = -1, J = w == null ? 0 : w.length, xe = 0, ne = []; ++L < J; ) {
      var Re = w[L];
      O(Re, L, w) && (ne[xe++] = Re);
    }
    return ne;
  }
  function de(w, O) {
    for (var L = -1, J = O.length, xe = w.length; ++L < J; )
      w[xe + L] = O[L];
    return w;
  }
  function Ee(w, O) {
    for (var L = -1, J = w == null ? 0 : w.length; ++L < J; )
      if (O(w[L], L, w))
        return !0;
    return !1;
  }
  function Ue(w, O) {
    for (var L = -1, J = Array(w); ++L < w; )
      J[L] = O(L);
    return J;
  }
  function Ae(w) {
    return function(O) {
      return w(O);
    };
  }
  function me(w, O) {
    return w.has(O);
  }
  function pe(w, O) {
    return w == null ? void 0 : w[O];
  }
  function fe(w) {
    var O = -1, L = Array(w.size);
    return w.forEach(function(J, xe) {
      L[++O] = [xe, J];
    }), L;
  }
  function he(w, O) {
    return function(L) {
      return w(O(L));
    };
  }
  function ce(w) {
    var O = -1, L = Array(w.size);
    return w.forEach(function(J) {
      L[++O] = J;
    }), L;
  }
  var oe = Array.prototype, ae = Function.prototype, re = Object.prototype, ue = C["__core-js_shared__"], ge = ae.toString, ie = re.hasOwnProperty, be = function() {
    var w = /[^.]+$/.exec(ue && ue.keys && ue.keys.IE_PROTO || "");
    return w ? "Symbol(src)_1." + w : "";
  }(), we = re.toString, _e = RegExp(
    "^" + ge.call(ie).replace(te, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), De = v ? C.Buffer : void 0, ve = C.Symbol, Et = C.Uint8Array, _t = re.propertyIsEnumerable, Tt = oe.splice, ft = ve ? ve.toStringTag : void 0, Ht = Object.getOwnPropertySymbols, ur = De ? De.isBuffer : void 0, Pr = he(Object.keys, Object), $e = tr(C, "DataView"), Pe = tr(C, "Map"), Le = tr(C, "Promise"), Me = tr(C, "Set"), je = tr(C, "WeakMap"), Te = tr(Object, "create"), ze = zt($e), Ke = zt(Pe), Be = zt(Le), Ve = zt(Me), Ge = zt(je), qe = ve ? ve.prototype : void 0, He = qe ? qe.valueOf : void 0;
  function Ce(w) {
    var O = -1, L = w == null ? 0 : w.length;
    for (this.clear(); ++O < L; ) {
      var J = w[O];
      this.set(J[0], J[1]);
    }
  }
  function ke() {
    this.__data__ = Te ? Te(null) : {}, this.size = 0;
  }
  function We(w) {
    var O = this.has(w) && delete this.__data__[w];
    return this.size -= O ? 1 : 0, O;
  }
  function Io(w) {
    var O = this.__data__;
    if (Te) {
      var L = O[w];
      return L === i ? void 0 : L;
    }
    return ie.call(O, w) ? O[w] : void 0;
  }
  function Oo(w) {
    var O = this.__data__;
    return Te ? O[w] !== void 0 : ie.call(O, w);
  }
  function xo(w, O) {
    var L = this.__data__;
    return this.size += this.has(w) ? 0 : 1, L[w] = Te && O === void 0 ? i : O, this;
  }
  Ce.prototype.clear = ke, Ce.prototype.delete = We, Ce.prototype.get = Io, Ce.prototype.has = Oo, Ce.prototype.set = xo;
  function Nt(w) {
    var O = -1, L = w == null ? 0 : w.length;
    for (this.clear(); ++O < L; ) {
      var J = w[O];
      this.set(J[0], J[1]);
    }
  }
  function Co() {
    this.__data__ = [], this.size = 0;
  }
  function No(w) {
    var O = this.__data__, L = Rr(O, w);
    if (L < 0)
      return !1;
    var J = O.length - 1;
    return L == J ? O.pop() : Tt.call(O, L, 1), --this.size, !0;
  }
  function Ao(w) {
    var O = this.__data__, L = Rr(O, w);
    return L < 0 ? void 0 : O[L][1];
  }
  function Po(w) {
    return Rr(this.__data__, w) > -1;
  }
  function To(w, O) {
    var L = this.__data__, J = Rr(L, w);
    return J < 0 ? (++this.size, L.push([w, O])) : L[J][1] = O, this;
  }
  Nt.prototype.clear = Co, Nt.prototype.delete = No, Nt.prototype.get = Ao, Nt.prototype.has = Po, Nt.prototype.set = To;
  function qt(w) {
    var O = -1, L = w == null ? 0 : w.length;
    for (this.clear(); ++O < L; ) {
      var J = w[O];
      this.set(J[0], J[1]);
    }
  }
  function Ro() {
    this.size = 0, this.__data__ = {
      hash: new Ce(),
      map: new (Pe || Nt)(),
      string: new Ce()
    };
  }
  function Uo(w) {
    var O = Ur(this, w).delete(w);
    return this.size -= O ? 1 : 0, O;
  }
  function Fo(w) {
    return Ur(this, w).get(w);
  }
  function $o(w) {
    return Ur(this, w).has(w);
  }
  function Lo(w, O) {
    var L = Ur(this, w), J = L.size;
    return L.set(w, O), this.size += L.size == J ? 0 : 1, this;
  }
  qt.prototype.clear = Ro, qt.prototype.delete = Uo, qt.prototype.get = Fo, qt.prototype.has = $o, qt.prototype.set = Lo;
  function Tr(w) {
    var O = -1, L = w == null ? 0 : w.length;
    for (this.__data__ = new qt(); ++O < L; )
      this.add(w[O]);
  }
  function Mo(w) {
    return this.__data__.set(w, i), this;
  }
  function jo(w) {
    return this.__data__.has(w);
  }
  Tr.prototype.add = Tr.prototype.push = Mo, Tr.prototype.has = jo;
  function Rt(w) {
    var O = this.__data__ = new Nt(w);
    this.size = O.size;
  }
  function Ho() {
    this.__data__ = new Nt(), this.size = 0;
  }
  function qo(w) {
    var O = this.__data__, L = O.delete(w);
    return this.size = O.size, L;
  }
  function zo(w) {
    return this.__data__.get(w);
  }
  function Ko(w) {
    return this.__data__.has(w);
  }
  function Bo(w, O) {
    var L = this.__data__;
    if (L instanceof Nt) {
      var J = L.__data__;
      if (!Pe || J.length < t - 1)
        return J.push([w, O]), this.size = ++L.size, this;
      L = this.__data__ = new qt(J);
    }
    return L.set(w, O), this.size = L.size, this;
  }
  Rt.prototype.clear = Ho, Rt.prototype.delete = qo, Rt.prototype.get = zo, Rt.prototype.has = Ko, Rt.prototype.set = Bo;
  function Vo(w, O) {
    var L = Fr(w), J = !L && ac(w), xe = !L && !J && pi(w), ne = !L && !J && !xe && Ts(w), Re = L || J || xe || ne, Ye = Re ? Ue(w.length, String) : [], et = Ye.length;
    for (var Ne in w)
      (O || ie.call(w, Ne)) && !(Re && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ne == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      xe && (Ne == "offset" || Ne == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ne && (Ne == "buffer" || Ne == "byteLength" || Ne == "byteOffset") || // Skip index properties.
      tc(Ne, et))) && Ye.push(Ne);
    return Ye;
  }
  function Rr(w, O) {
    for (var L = w.length; L--; )
      if (Cs(w[L][0], O))
        return L;
    return -1;
  }
  function Go(w, O, L) {
    var J = O(w);
    return Fr(w) ? J : de(J, L(w));
  }
  function lr(w) {
    return w == null ? w === void 0 ? T : M : ft && ft in Object(w) ? Zo(w) : nc(w);
  }
  function Ss(w) {
    return fr(w) && lr(w) == h;
  }
  function Is(w, O, L, J, xe) {
    return w === O ? !0 : w == null || O == null || !fr(w) && !fr(O) ? w !== w && O !== O : ko(w, O, L, J, Is, xe);
  }
  function ko(w, O, L, J, xe, ne) {
    var Re = Fr(w), Ye = Fr(O), et = Re ? g : Ut(w), Ne = Ye ? g : Ut(O);
    et = et == h ? c : et, Ne = Ne == h ? c : Ne;
    var dt = et == c, vt = Ne == c, it = et == Ne;
    if (it && pi(w)) {
      if (!pi(O))
        return !1;
      Re = !0, dt = !1;
    }
    if (it && !dt)
      return ne || (ne = new Rt()), Re || Ts(w) ? Os(w, O, L, J, xe, ne) : Xo(w, O, et, L, J, xe, ne);
    if (!(L & s)) {
      var gt = dt && ie.call(w, "__wrapped__"), mt = vt && ie.call(O, "__wrapped__");
      if (gt || mt) {
        var Ft = gt ? w.value() : w, At = mt ? O.value() : O;
        return ne || (ne = new Rt()), xe(Ft, At, L, J, ne);
      }
    }
    return it ? (ne || (ne = new Rt()), Qo(w, O, L, J, xe, ne)) : !1;
  }
  function Wo(w) {
    if (!Ps(w) || ic(w))
      return !1;
    var O = Ns(w) ? _e : z;
    return O.test(zt(w));
  }
  function Yo(w) {
    return fr(w) && As(w.length) && !!Y[lr(w)];
  }
  function Jo(w) {
    if (!sc(w))
      return Pr(w);
    var O = [];
    for (var L in Object(w))
      ie.call(w, L) && L != "constructor" && O.push(L);
    return O;
  }
  function Os(w, O, L, J, xe, ne) {
    var Re = L & s, Ye = w.length, et = O.length;
    if (Ye != et && !(Re && et > Ye))
      return !1;
    var Ne = ne.get(w);
    if (Ne && ne.get(O))
      return Ne == O;
    var dt = -1, vt = !0, it = L & o ? new Tr() : void 0;
    for (ne.set(w, O), ne.set(O, w); ++dt < Ye; ) {
      var gt = w[dt], mt = O[dt];
      if (J)
        var Ft = Re ? J(mt, gt, dt, O, w, ne) : J(gt, mt, dt, w, O, ne);
      if (Ft !== void 0) {
        if (Ft)
          continue;
        vt = !1;
        break;
      }
      if (it) {
        if (!Ee(O, function(At, Kt) {
          if (!me(it, Kt) && (gt === At || xe(gt, At, L, J, ne)))
            return it.push(Kt);
        })) {
          vt = !1;
          break;
        }
      } else if (!(gt === mt || xe(gt, mt, L, J, ne))) {
        vt = !1;
        break;
      }
    }
    return ne.delete(w), ne.delete(O), vt;
  }
  function Xo(w, O, L, J, xe, ne, Re) {
    switch (L) {
      case G:
        if (w.byteLength != O.byteLength || w.byteOffset != O.byteOffset)
          return !1;
        w = w.buffer, O = O.buffer;
      case K:
        return !(w.byteLength != O.byteLength || !ne(new Et(w), new Et(O)));
      case b:
      case E:
      case R:
        return Cs(+w, +O);
      case S:
        return w.name == O.name && w.message == O.message;
      case d:
      case n:
        return w == O + "";
      case A:
        var Ye = fe;
      case u:
        var et = J & s;
        if (Ye || (Ye = ce), w.size != O.size && !et)
          return !1;
        var Ne = Re.get(w);
        if (Ne)
          return Ne == O;
        J |= o, Re.set(w, O);
        var dt = Os(Ye(w), Ye(O), J, xe, ne, Re);
        return Re.delete(w), dt;
      case f:
        if (He)
          return He.call(w) == He.call(O);
    }
    return !1;
  }
  function Qo(w, O, L, J, xe, ne) {
    var Re = L & s, Ye = xs(w), et = Ye.length, Ne = xs(O), dt = Ne.length;
    if (et != dt && !Re)
      return !1;
    for (var vt = et; vt--; ) {
      var it = Ye[vt];
      if (!(Re ? it in O : ie.call(O, it)))
        return !1;
    }
    var gt = ne.get(w);
    if (gt && ne.get(O))
      return gt == O;
    var mt = !0;
    ne.set(w, O), ne.set(O, w);
    for (var Ft = Re; ++vt < et; ) {
      it = Ye[vt];
      var At = w[it], Kt = O[it];
      if (J)
        var Rs = Re ? J(Kt, At, it, O, w, ne) : J(At, Kt, it, w, O, ne);
      if (!(Rs === void 0 ? At === Kt || xe(At, Kt, L, J, ne) : Rs)) {
        mt = !1;
        break;
      }
      Ft || (Ft = it == "constructor");
    }
    if (mt && !Ft) {
      var $r = w.constructor, Lr = O.constructor;
      $r != Lr && "constructor" in w && "constructor" in O && !(typeof $r == "function" && $r instanceof $r && typeof Lr == "function" && Lr instanceof Lr) && (mt = !1);
    }
    return ne.delete(w), ne.delete(O), mt;
  }
  function xs(w) {
    return Go(w, hc, ec);
  }
  function Ur(w, O) {
    var L = w.__data__;
    return rc(O) ? L[typeof O == "string" ? "string" : "hash"] : L.map;
  }
  function tr(w, O) {
    var L = pe(w, O);
    return Wo(L) ? L : void 0;
  }
  function Zo(w) {
    var O = ie.call(w, ft), L = w[ft];
    try {
      w[ft] = void 0;
      var J = !0;
    } catch {
    }
    var xe = we.call(w);
    return J && (O ? w[ft] = L : delete w[ft]), xe;
  }
  var ec = Ht ? function(w) {
    return w == null ? [] : (w = Object(w), ye(Ht(w), function(O) {
      return _t.call(w, O);
    }));
  } : uc, Ut = lr;
  ($e && Ut(new $e(new ArrayBuffer(1))) != G || Pe && Ut(new Pe()) != A || Le && Ut(Le.resolve()) != y || Me && Ut(new Me()) != u || je && Ut(new je()) != U) && (Ut = function(w) {
    var O = lr(w), L = O == c ? w.constructor : void 0, J = L ? zt(L) : "";
    if (J)
      switch (J) {
        case ze:
          return G;
        case Ke:
          return A;
        case Be:
          return y;
        case Ve:
          return u;
        case Ge:
          return U;
      }
    return O;
  });
  function tc(w, O) {
    return O = O ?? p, !!O && (typeof w == "number" || Q.test(w)) && w > -1 && w % 1 == 0 && w < O;
  }
  function rc(w) {
    var O = typeof w;
    return O == "string" || O == "number" || O == "symbol" || O == "boolean" ? w !== "__proto__" : w === null;
  }
  function ic(w) {
    return !!be && be in w;
  }
  function sc(w) {
    var O = w && w.constructor, L = typeof O == "function" && O.prototype || re;
    return w === L;
  }
  function nc(w) {
    return we.call(w);
  }
  function zt(w) {
    if (w != null) {
      try {
        return ge.call(w);
      } catch {
      }
      try {
        return w + "";
      } catch {
      }
    }
    return "";
  }
  function Cs(w, O) {
    return w === O || w !== w && O !== O;
  }
  var ac = Ss(function() {
    return arguments;
  }()) ? Ss : function(w) {
    return fr(w) && ie.call(w, "callee") && !_t.call(w, "callee");
  }, Fr = Array.isArray;
  function oc(w) {
    return w != null && As(w.length) && !Ns(w);
  }
  var pi = ur || lc;
  function cc(w, O) {
    return Is(w, O);
  }
  function Ns(w) {
    if (!Ps(w))
      return !1;
    var O = lr(w);
    return O == D || O == _ || O == m || O == l;
  }
  function As(w) {
    return typeof w == "number" && w > -1 && w % 1 == 0 && w <= p;
  }
  function Ps(w) {
    var O = typeof w;
    return w != null && (O == "object" || O == "function");
  }
  function fr(w) {
    return w != null && typeof w == "object";
  }
  var Ts = le ? Ae(le) : Yo;
  function hc(w) {
    return oc(w) ? Vo(w) : Jo(w);
  }
  function uc() {
    return [];
  }
  function lc() {
    return !1;
  }
  r.exports = cc;
})(Qr, Qr.exports);
var Ul = Qr.exports;
const Fl = /* @__PURE__ */ es(Ul);
var $l = {};
(function(r) {
  const e = rs, t = is, i = ts, s = ys, o = (c) => c == null, p = Symbol("encodeFragmentIdentifier");
  function h(c) {
    switch (c.arrayFormat) {
      case "index":
        return (y) => (l, d) => {
          const u = l.length;
          return d === void 0 || c.skipNull && d === null || c.skipEmptyString && d === "" ? l : d === null ? [...l, [b(y, c), "[", u, "]"].join("")] : [
            ...l,
            [b(y, c), "[", b(u, c), "]=", b(d, c)].join("")
          ];
        };
      case "bracket":
        return (y) => (l, d) => d === void 0 || c.skipNull && d === null || c.skipEmptyString && d === "" ? l : d === null ? [...l, [b(y, c), "[]"].join("")] : [...l, [b(y, c), "[]=", b(d, c)].join("")];
      case "colon-list-separator":
        return (y) => (l, d) => d === void 0 || c.skipNull && d === null || c.skipEmptyString && d === "" ? l : d === null ? [...l, [b(y, c), ":list="].join("")] : [...l, [b(y, c), ":list=", b(d, c)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const y = c.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (l) => (d, u) => u === void 0 || c.skipNull && u === null || c.skipEmptyString && u === "" ? d : (u = u === null ? "" : u, d.length === 0 ? [[b(l, c), y, b(u, c)].join("")] : [[d, b(u, c)].join(c.arrayFormatSeparator)]);
      }
      default:
        return (y) => (l, d) => d === void 0 || c.skipNull && d === null || c.skipEmptyString && d === "" ? l : d === null ? [...l, b(y, c)] : [...l, [b(y, c), "=", b(d, c)].join("")];
    }
  }
  function g(c) {
    let y;
    switch (c.arrayFormat) {
      case "index":
        return (l, d, u) => {
          if (y = /\[(\d*)\]$/.exec(l), l = l.replace(/\[\d*\]$/, ""), !y) {
            u[l] = d;
            return;
          }
          u[l] === void 0 && (u[l] = {}), u[l][y[1]] = d;
        };
      case "bracket":
        return (l, d, u) => {
          if (y = /(\[\])$/.exec(l), l = l.replace(/\[\]$/, ""), !y) {
            u[l] = d;
            return;
          }
          if (u[l] === void 0) {
            u[l] = [d];
            return;
          }
          u[l] = [].concat(u[l], d);
        };
      case "colon-list-separator":
        return (l, d, u) => {
          if (y = /(:list)$/.exec(l), l = l.replace(/:list$/, ""), !y) {
            u[l] = d;
            return;
          }
          if (u[l] === void 0) {
            u[l] = [d];
            return;
          }
          u[l] = [].concat(u[l], d);
        };
      case "comma":
      case "separator":
        return (l, d, u) => {
          const n = typeof d == "string" && d.includes(c.arrayFormatSeparator), f = typeof d == "string" && !n && E(d, c).includes(c.arrayFormatSeparator);
          d = f ? E(d, c) : d;
          const T = n || f ? d.split(c.arrayFormatSeparator).map((U) => E(U, c)) : d === null ? d : E(d, c);
          u[l] = T;
        };
      case "bracket-separator":
        return (l, d, u) => {
          const n = /(\[\])$/.test(l);
          if (l = l.replace(/\[\]$/, ""), !n) {
            u[l] = d && E(d, c);
            return;
          }
          const f = d === null ? [] : d.split(c.arrayFormatSeparator).map((T) => E(T, c));
          if (u[l] === void 0) {
            u[l] = f;
            return;
          }
          u[l] = [].concat(u[l], f);
        };
      default:
        return (l, d, u) => {
          if (u[l] === void 0) {
            u[l] = d;
            return;
          }
          u[l] = [].concat(u[l], d);
        };
    }
  }
  function m(c) {
    if (typeof c != "string" || c.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function b(c, y) {
    return y.encode ? y.strict ? e(c) : encodeURIComponent(c) : c;
  }
  function E(c, y) {
    return y.decode ? t(c) : c;
  }
  function S(c) {
    return Array.isArray(c) ? c.sort() : typeof c == "object" ? S(Object.keys(c)).sort((y, l) => Number(y) - Number(l)).map((y) => c[y]) : c;
  }
  function D(c) {
    const y = c.indexOf("#");
    return y !== -1 && (c = c.slice(0, y)), c;
  }
  function _(c) {
    let y = "";
    const l = c.indexOf("#");
    return l !== -1 && (y = c.slice(l)), y;
  }
  function A(c) {
    c = D(c);
    const y = c.indexOf("?");
    return y === -1 ? "" : c.slice(y + 1);
  }
  function R(c, y) {
    return y.parseNumbers && !Number.isNaN(Number(c)) && typeof c == "string" && c.trim() !== "" ? c = Number(c) : y.parseBooleans && c !== null && (c.toLowerCase() === "true" || c.toLowerCase() === "false") && (c = c.toLowerCase() === "true"), c;
  }
  function M(c, y) {
    y = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, y), m(y.arrayFormatSeparator);
    const l = g(y), d = /* @__PURE__ */ Object.create(null);
    if (typeof c != "string" || (c = c.trim().replace(/^[?#&]/, ""), !c))
      return d;
    for (const u of c.split("&")) {
      if (u === "")
        continue;
      let [n, f] = i(y.decode ? u.replace(/\+/g, " ") : u, "=");
      f = f === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(y.arrayFormat) ? f : E(f, y), l(E(n, y), f, d);
    }
    for (const u of Object.keys(d)) {
      const n = d[u];
      if (typeof n == "object" && n !== null)
        for (const f of Object.keys(n))
          n[f] = R(n[f], y);
      else
        d[u] = R(n, y);
    }
    return y.sort === !1 ? d : (y.sort === !0 ? Object.keys(d).sort() : Object.keys(d).sort(y.sort)).reduce((u, n) => {
      const f = d[n];
      return f && typeof f == "object" && !Array.isArray(f) ? u[n] = S(f) : u[n] = f, u;
    }, /* @__PURE__ */ Object.create(null));
  }
  r.extract = A, r.parse = M, r.stringify = (c, y) => {
    if (!c)
      return "";
    y = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, y), m(y.arrayFormatSeparator);
    const l = (f) => y.skipNull && o(c[f]) || y.skipEmptyString && c[f] === "", d = h(y), u = {};
    for (const f of Object.keys(c))
      l(f) || (u[f] = c[f]);
    const n = Object.keys(u);
    return y.sort !== !1 && n.sort(y.sort), n.map((f) => {
      const T = c[f];
      return T === void 0 ? "" : T === null ? b(f, y) : Array.isArray(T) ? T.length === 0 && y.arrayFormat === "bracket-separator" ? b(f, y) + "[]" : T.reduce(d(f), []).join("&") : b(f, y) + "=" + b(T, y);
    }).filter((f) => f.length > 0).join("&");
  }, r.parseUrl = (c, y) => {
    y = Object.assign({
      decode: !0
    }, y);
    const [l, d] = i(c, "#");
    return Object.assign(
      {
        url: l.split("?")[0] || "",
        query: M(A(c), y)
      },
      y && y.parseFragmentIdentifier && d ? { fragmentIdentifier: E(d, y) } : {}
    );
  }, r.stringifyUrl = (c, y) => {
    y = Object.assign({
      encode: !0,
      strict: !0,
      [p]: !0
    }, y);
    const l = D(c.url).split("?")[0] || "", d = r.extract(c.url), u = r.parse(d, { sort: !1 }), n = Object.assign(u, c.query);
    let f = r.stringify(n, y);
    f && (f = `?${f}`);
    let T = _(c.url);
    return c.fragmentIdentifier && (T = `#${y[p] ? b(c.fragmentIdentifier, y) : c.fragmentIdentifier}`), `${l}${f}${T}`;
  }, r.pick = (c, y, l) => {
    l = Object.assign({
      parseFragmentIdentifier: !0,
      [p]: !1
    }, l);
    const { url: d, query: u, fragmentIdentifier: n } = r.parseUrl(c, l);
    return r.stringifyUrl({
      url: d,
      query: s(u, y),
      fragmentIdentifier: n
    }, l);
  }, r.exclude = (c, y, l) => {
    const d = Array.isArray(y) ? (u) => !y.includes(u) : (u, n) => !y(u, n);
    return r.pick(c, d, l);
  };
})($l);
function Ll(r, e = []) {
  const t = [];
  return Object.keys(r).forEach((i) => {
    if (e.length && !e.includes(i))
      return;
    const s = r[i];
    t.push(...s.accounts);
  }), t;
}
const Ml = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function jl(r, e) {
  const { message: t, code: i } = Ml[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function zi(r, e) {
  return Array.isArray(r) ? typeof e < "u" && r.length ? r.every(e) : !0 : !1;
}
var Hl = ya();
const li = /* @__PURE__ */ es(Hl);
var xr = {}, gr = {}, Si = {}, mr = {}, dn;
function ql() {
  if (dn)
    return mr;
  dn = 1, Object.defineProperty(mr, "__esModule", { value: !0 }), mr.IHeartBeat = void 0;
  const r = hh;
  class e extends r.IEvents {
    constructor(i) {
      super();
    }
  }
  return mr.IHeartBeat = e, mr;
}
var pn;
function za() {
  return pn || (pn = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), Pt.__exportStar(ql(), r);
  }(Si)), Si;
}
var Ii = {}, kt = {}, gn;
function zl() {
  if (gn)
    return kt;
  gn = 1, Object.defineProperty(kt, "__esModule", { value: !0 }), kt.HEARTBEAT_EVENTS = kt.HEARTBEAT_INTERVAL = void 0;
  const r = Z;
  return kt.HEARTBEAT_INTERVAL = r.FIVE_SECONDS, kt.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, kt;
}
var mn;
function Ka() {
  return mn || (mn = 1, function(r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), Pt.__exportStar(zl(), r);
  }(Ii)), Ii;
}
var yn;
function Kl() {
  if (yn)
    return gr;
  yn = 1, Object.defineProperty(gr, "__esModule", { value: !0 }), gr.HeartBeat = void 0;
  const r = Pt, e = wt, t = Z, i = za(), s = Ka();
  class o extends i.IHeartBeat {
    constructor(h) {
      super(h), this.events = new e.EventEmitter(), this.interval = s.HEARTBEAT_INTERVAL, this.interval = (h == null ? void 0 : h.interval) || s.HEARTBEAT_INTERVAL;
    }
    static init(h) {
      return r.__awaiter(this, void 0, void 0, function* () {
        const g = new o(h);
        return yield g.init(), g;
      });
    }
    init() {
      return r.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(h, g) {
      this.events.on(h, g);
    }
    once(h, g) {
      this.events.once(h, g);
    }
    off(h, g) {
      this.events.off(h, g);
    }
    removeListener(h, g) {
      this.events.removeListener(h, g);
    }
    initialize() {
      return r.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), t.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(s.HEARTBEAT_EVENTS.pulse);
    }
  }
  return gr.HeartBeat = o, gr;
}
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  const e = Pt;
  e.__exportStar(Kl(), r), e.__exportStar(za(), r), e.__exportStar(Ka(), r);
})(xr);
class Bl extends Xt {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
let Vl = class extends Xt {
  constructor(e, t) {
    super(), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
}, Gl = class {
  constructor(e, t) {
    this.logger = e, this.core = t;
  }
}, kl = class extends Xt {
  constructor(e, t) {
    super(), this.relayer = e, this.logger = t;
  }
}, Wl = class extends Xt {
  constructor(e) {
    super();
  }
}, Yl = class {
  constructor(e, t, i, s) {
    this.core = e, this.logger = t, this.name = i;
  }
}, Jl = class extends Xt {
  constructor(e, t) {
    super(), this.relayer = e, this.logger = t;
  }
}, Xl = class extends Xt {
  constructor(e, t) {
    super(), this.core = e, this.logger = t;
  }
}, Ql = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Zl = class {
  constructor(e) {
    this.client = e;
  }
};
var _r = {};
(function(r) {
  const e = rs, t = is, i = ts, s = ys, o = (c) => c == null, p = Symbol("encodeFragmentIdentifier");
  function h(c) {
    switch (c.arrayFormat) {
      case "index":
        return (y) => (l, d) => {
          const u = l.length;
          return d === void 0 || c.skipNull && d === null || c.skipEmptyString && d === "" ? l : d === null ? [...l, [b(y, c), "[", u, "]"].join("")] : [
            ...l,
            [b(y, c), "[", b(u, c), "]=", b(d, c)].join("")
          ];
        };
      case "bracket":
        return (y) => (l, d) => d === void 0 || c.skipNull && d === null || c.skipEmptyString && d === "" ? l : d === null ? [...l, [b(y, c), "[]"].join("")] : [...l, [b(y, c), "[]=", b(d, c)].join("")];
      case "colon-list-separator":
        return (y) => (l, d) => d === void 0 || c.skipNull && d === null || c.skipEmptyString && d === "" ? l : d === null ? [...l, [b(y, c), ":list="].join("")] : [...l, [b(y, c), ":list=", b(d, c)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const y = c.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (l) => (d, u) => u === void 0 || c.skipNull && u === null || c.skipEmptyString && u === "" ? d : (u = u === null ? "" : u, d.length === 0 ? [[b(l, c), y, b(u, c)].join("")] : [[d, b(u, c)].join(c.arrayFormatSeparator)]);
      }
      default:
        return (y) => (l, d) => d === void 0 || c.skipNull && d === null || c.skipEmptyString && d === "" ? l : d === null ? [...l, b(y, c)] : [...l, [b(y, c), "=", b(d, c)].join("")];
    }
  }
  function g(c) {
    let y;
    switch (c.arrayFormat) {
      case "index":
        return (l, d, u) => {
          if (y = /\[(\d*)\]$/.exec(l), l = l.replace(/\[\d*\]$/, ""), !y) {
            u[l] = d;
            return;
          }
          u[l] === void 0 && (u[l] = {}), u[l][y[1]] = d;
        };
      case "bracket":
        return (l, d, u) => {
          if (y = /(\[\])$/.exec(l), l = l.replace(/\[\]$/, ""), !y) {
            u[l] = d;
            return;
          }
          if (u[l] === void 0) {
            u[l] = [d];
            return;
          }
          u[l] = [].concat(u[l], d);
        };
      case "colon-list-separator":
        return (l, d, u) => {
          if (y = /(:list)$/.exec(l), l = l.replace(/:list$/, ""), !y) {
            u[l] = d;
            return;
          }
          if (u[l] === void 0) {
            u[l] = [d];
            return;
          }
          u[l] = [].concat(u[l], d);
        };
      case "comma":
      case "separator":
        return (l, d, u) => {
          const n = typeof d == "string" && d.includes(c.arrayFormatSeparator), f = typeof d == "string" && !n && E(d, c).includes(c.arrayFormatSeparator);
          d = f ? E(d, c) : d;
          const T = n || f ? d.split(c.arrayFormatSeparator).map((U) => E(U, c)) : d === null ? d : E(d, c);
          u[l] = T;
        };
      case "bracket-separator":
        return (l, d, u) => {
          const n = /(\[\])$/.test(l);
          if (l = l.replace(/\[\]$/, ""), !n) {
            u[l] = d && E(d, c);
            return;
          }
          const f = d === null ? [] : d.split(c.arrayFormatSeparator).map((T) => E(T, c));
          if (u[l] === void 0) {
            u[l] = f;
            return;
          }
          u[l] = [].concat(u[l], f);
        };
      default:
        return (l, d, u) => {
          if (u[l] === void 0) {
            u[l] = d;
            return;
          }
          u[l] = [].concat(u[l], d);
        };
    }
  }
  function m(c) {
    if (typeof c != "string" || c.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function b(c, y) {
    return y.encode ? y.strict ? e(c) : encodeURIComponent(c) : c;
  }
  function E(c, y) {
    return y.decode ? t(c) : c;
  }
  function S(c) {
    return Array.isArray(c) ? c.sort() : typeof c == "object" ? S(Object.keys(c)).sort((y, l) => Number(y) - Number(l)).map((y) => c[y]) : c;
  }
  function D(c) {
    const y = c.indexOf("#");
    return y !== -1 && (c = c.slice(0, y)), c;
  }
  function _(c) {
    let y = "";
    const l = c.indexOf("#");
    return l !== -1 && (y = c.slice(l)), y;
  }
  function A(c) {
    c = D(c);
    const y = c.indexOf("?");
    return y === -1 ? "" : c.slice(y + 1);
  }
  function R(c, y) {
    return y.parseNumbers && !Number.isNaN(Number(c)) && typeof c == "string" && c.trim() !== "" ? c = Number(c) : y.parseBooleans && c !== null && (c.toLowerCase() === "true" || c.toLowerCase() === "false") && (c = c.toLowerCase() === "true"), c;
  }
  function M(c, y) {
    y = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, y), m(y.arrayFormatSeparator);
    const l = g(y), d = /* @__PURE__ */ Object.create(null);
    if (typeof c != "string" || (c = c.trim().replace(/^[?#&]/, ""), !c))
      return d;
    for (const u of c.split("&")) {
      if (u === "")
        continue;
      let [n, f] = i(y.decode ? u.replace(/\+/g, " ") : u, "=");
      f = f === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(y.arrayFormat) ? f : E(f, y), l(E(n, y), f, d);
    }
    for (const u of Object.keys(d)) {
      const n = d[u];
      if (typeof n == "object" && n !== null)
        for (const f of Object.keys(n))
          n[f] = R(n[f], y);
      else
        d[u] = R(n, y);
    }
    return y.sort === !1 ? d : (y.sort === !0 ? Object.keys(d).sort() : Object.keys(d).sort(y.sort)).reduce((u, n) => {
      const f = d[n];
      return f && typeof f == "object" && !Array.isArray(f) ? u[n] = S(f) : u[n] = f, u;
    }, /* @__PURE__ */ Object.create(null));
  }
  r.extract = A, r.parse = M, r.stringify = (c, y) => {
    if (!c)
      return "";
    y = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, y), m(y.arrayFormatSeparator);
    const l = (f) => y.skipNull && o(c[f]) || y.skipEmptyString && c[f] === "", d = h(y), u = {};
    for (const f of Object.keys(c))
      l(f) || (u[f] = c[f]);
    const n = Object.keys(u);
    return y.sort !== !1 && n.sort(y.sort), n.map((f) => {
      const T = c[f];
      return T === void 0 ? "" : T === null ? b(f, y) : Array.isArray(T) ? T.length === 0 && y.arrayFormat === "bracket-separator" ? b(f, y) + "[]" : T.reduce(d(f), []).join("&") : b(f, y) + "=" + b(T, y);
    }).filter((f) => f.length > 0).join("&");
  }, r.parseUrl = (c, y) => {
    y = Object.assign({
      decode: !0
    }, y);
    const [l, d] = i(c, "#");
    return Object.assign(
      {
        url: l.split("?")[0] || "",
        query: M(A(c), y)
      },
      y && y.parseFragmentIdentifier && d ? { fragmentIdentifier: E(d, y) } : {}
    );
  }, r.stringifyUrl = (c, y) => {
    y = Object.assign({
      encode: !0,
      strict: !0,
      [p]: !0
    }, y);
    const l = D(c.url).split("?")[0] || "", d = r.extract(c.url), u = r.parse(d, { sort: !1 }), n = Object.assign(u, c.query);
    let f = r.stringify(n, y);
    f && (f = `?${f}`);
    let T = _(c.url);
    return c.fragmentIdentifier && (T = `#${y[p] ? b(c.fragmentIdentifier, y) : c.fragmentIdentifier}`), `${l}${f}${T}`;
  }, r.pick = (c, y, l) => {
    l = Object.assign({
      parseFragmentIdentifier: !0,
      [p]: !1
    }, l);
    const { url: d, query: u, fragmentIdentifier: n } = r.parseUrl(c, l);
    return r.stringifyUrl({
      url: d,
      query: s(u, y),
      fragmentIdentifier: n
    }, l);
  }, r.exclude = (c, y, l) => {
    const d = Array.isArray(y) ? (u) => !y.includes(u) : (u, n) => !y(u, n);
    return r.pick(c, d, l);
  };
})(_r);
function Ba(r, e) {
  return r.includes(":") ? [r] : e.chains || [];
}
const Va = "base10", ot = "base16", Ki = "base64pad", bs = "utf8", Ga = 0, Zt = 1, ef = 0, bn = 1, Bi = 12, ws = 32;
function tf() {
  const r = ps.generateKeyPair();
  return { privateKey: ct(r.secretKey, ot), publicKey: ct(r.publicKey, ot) };
}
function Vi() {
  const r = ar.randomBytes(ws);
  return ct(r, ot);
}
function rf(r, e) {
  const t = ps.sharedKey(lt(r, ot), lt(e, ot)), i = new cl(ui.SHA256, t).expand(ws);
  return ct(i, ot);
}
function sf(r) {
  const e = ui.hash(lt(r, ot));
  return ct(e, ot);
}
function Zr(r) {
  const e = ui.hash(lt(r, bs));
  return ct(e, ot);
}
function nf(r) {
  return lt(`${r}`, Va);
}
function Cr(r) {
  return Number(ct(r, Va));
}
function af(r) {
  const e = nf(typeof r.type < "u" ? r.type : Ga);
  if (Cr(e) === Zt && typeof r.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof r.senderPublicKey < "u" ? lt(r.senderPublicKey, ot) : void 0, i = typeof r.iv < "u" ? lt(r.iv, ot) : ar.randomBytes(Bi), s = new fs.ChaCha20Poly1305(lt(r.symKey, ot)).seal(i, lt(r.message, bs));
  return cf({ type: e, sealed: s, iv: i, senderPublicKey: t });
}
function of(r) {
  const e = new fs.ChaCha20Poly1305(lt(r.symKey, ot)), { sealed: t, iv: i } = ei(r.encoded), s = e.open(i, t);
  if (s === null)
    throw new Error("Failed to decrypt");
  return ct(s, bs);
}
function cf(r) {
  if (Cr(r.type) === Zt) {
    if (typeof r.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return ct(Hi([r.type, r.senderPublicKey, r.iv, r.sealed]), Ki);
  }
  return ct(Hi([r.type, r.iv, r.sealed]), Ki);
}
function ei(r) {
  const e = lt(r, Ki), t = e.slice(ef, bn), i = bn;
  if (Cr(t) === Zt) {
    const h = i + ws, g = h + Bi, m = e.slice(i, h), b = e.slice(h, g), E = e.slice(g);
    return { type: t, sealed: E, iv: b, senderPublicKey: m };
  }
  const s = i + Bi, o = e.slice(i, s), p = e.slice(s);
  return { type: t, sealed: p, iv: o };
}
function hf(r, e) {
  const t = ei(r);
  return ka({ type: Cr(t.type), senderPublicKey: typeof t.senderPublicKey < "u" ? ct(t.senderPublicKey, ot) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function ka(r) {
  const e = (r == null ? void 0 : r.type) || Ga;
  if (e === Zt) {
    if (typeof (r == null ? void 0 : r.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (r == null ? void 0 : r.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: r == null ? void 0 : r.senderPublicKey, receiverPublicKey: r == null ? void 0 : r.receiverPublicKey };
}
function wn(r) {
  return r.type === Zt && typeof r.senderPublicKey == "string" && typeof r.receiverPublicKey == "string";
}
var uf = Object.defineProperty, En = Object.getOwnPropertySymbols, lf = Object.prototype.hasOwnProperty, ff = Object.prototype.propertyIsEnumerable, vn = (r, e, t) => e in r ? uf(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, _n = (r, e) => {
  for (var t in e || (e = {}))
    lf.call(e, t) && vn(r, t, e[t]);
  if (En)
    for (var t of En(e))
      ff.call(e, t) && vn(r, t, e[t]);
  return r;
};
const df = "ReactNative", Er = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, pf = "js";
function Wa() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function gf() {
  return !ja() && !!gs() && navigator.product === df;
}
function mf() {
  return !Wa() && !!gs();
}
function yf() {
  return gf() ? Er.reactNative : Wa() ? Er.node : mf() ? Er.browser : Er.unknown;
}
function bf(r, e) {
  let t = _r.parse(r);
  return t = _n(_n({}, t), e), r = _r.stringify(t), r;
}
function wf() {
  return qa() || { name: "", description: "", url: "", icons: [""] };
}
function Ef() {
  const r = yl();
  if (r === null)
    return "unknown";
  const e = r.os ? r.os.replace(" ", "").toLowerCase() : "unknown";
  return r.type === "browser" ? [e, r.name, r.version].join("-") : [e, r.version].join("-");
}
function vf() {
  var r;
  const e = yf();
  return e === Er.browser ? [e, ((r = Ha()) == null ? void 0 : r.host) || "unknown"].join(":") : e;
}
function _f(r, e, t) {
  const i = Ef(), s = vf();
  return [[r, e].join("-"), [pf, t].join("-"), i, s].join("/");
}
function Df({ protocol: r, version: e, relayUrl: t, sdkVersion: i, auth: s, projectId: o, useOnCloseEvent: p }) {
  const h = t.split("?"), g = _f(r, e, i), m = { auth: s, ua: g, projectId: o, useOnCloseEvent: p || void 0 }, b = bf(h[1] || "", m);
  return h[0] + "?" + b;
}
function Yt(r, e) {
  return r.filter((t) => e.includes(t)).length === r.length;
}
function Ya(r) {
  return Object.fromEntries(r.entries());
}
function Ja(r) {
  return new Map(Object.entries(r));
}
function Wt(r = Z.FIVE_MINUTES, e) {
  const t = Z.toMiliseconds(r || Z.FIVE_MINUTES);
  let i, s, o;
  return { resolve: (p) => {
    o && i && (clearTimeout(o), i(p));
  }, reject: (p) => {
    o && s && (clearTimeout(o), s(p));
  }, done: () => new Promise((p, h) => {
    o = setTimeout(() => {
      h(new Error(e));
    }, t), i = p, s = h;
  }) };
}
function ti(r, e, t) {
  return new Promise(async (i, s) => {
    const o = setTimeout(() => s(new Error(t)), e);
    try {
      const p = await r;
      i(p);
    } catch (p) {
      s(p);
    }
    clearTimeout(o);
  });
}
function Xa(r, e) {
  if (typeof e == "string" && e.startsWith(`${r}:`))
    return e;
  if (r.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (r.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${r}`);
}
function Sf(r) {
  return Xa("topic", r);
}
function If(r) {
  return Xa("id", r);
}
function Qa(r) {
  const [e, t] = r.split(":"), i = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof t == "string")
    i.topic = t;
  else if (e === "id" && Number.isInteger(Number(t)))
    i.id = Number(t);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${t}`);
  return i;
}
function xt(r, e) {
  return Z.fromMiliseconds((e || Date.now()) + Z.toMiliseconds(r));
}
function Lt(r) {
  return Date.now() >= Z.toMiliseconds(r);
}
function Fe(r, e) {
  return `${r}${e ? `:${e}` : ""}`;
}
const Of = "irn";
function Gi(r) {
  return (r == null ? void 0 : r.relay) || { protocol: Of };
}
function kr(r) {
  const e = Rl[r];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${r}`);
  return e;
}
var xf = Object.defineProperty, Dn = Object.getOwnPropertySymbols, Cf = Object.prototype.hasOwnProperty, Nf = Object.prototype.propertyIsEnumerable, Sn = (r, e, t) => e in r ? xf(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Af = (r, e) => {
  for (var t in e || (e = {}))
    Cf.call(e, t) && Sn(r, t, e[t]);
  if (Dn)
    for (var t of Dn(e))
      Nf.call(e, t) && Sn(r, t, e[t]);
  return r;
};
function Pf(r, e = "-") {
  const t = {}, i = "relay" + e;
  return Object.keys(r).forEach((s) => {
    if (s.startsWith(i)) {
      const o = s.replace(i, ""), p = r[s];
      t[o] = p;
    }
  }), t;
}
function Tf(r) {
  const e = r.indexOf(":"), t = r.indexOf("?") !== -1 ? r.indexOf("?") : void 0, i = r.substring(0, e), s = r.substring(e + 1, t).split("@"), o = typeof t < "u" ? r.substring(t) : "", p = _r.parse(o);
  return { protocol: i, topic: s[0], version: parseInt(s[1], 10), symKey: p.symKey, relay: Pf(p) };
}
function Rf(r, e = "-") {
  const t = "relay", i = {};
  return Object.keys(r).forEach((s) => {
    const o = t + e + s;
    r[s] && (i[o] = r[s]);
  }), i;
}
function Uf(r) {
  return `${r.protocol}:${r.topic}@${r.version}?` + _r.stringify(Af({ symKey: r.symKey }, Rf(r.relay)));
}
function cr(r) {
  const e = [];
  return r.forEach((t) => {
    const [i, s] = t.split(":");
    e.push(`${i}:${s}`);
  }), e;
}
function Ff(r) {
  const e = [];
  return Object.values(r).forEach((t) => {
    e.push(...cr(t.accounts));
  }), e;
}
function $f(r, e) {
  const t = [];
  return Object.values(r).forEach((i) => {
    cr(i.accounts).includes(e) && t.push(...i.methods);
  }), t;
}
function Lf(r, e) {
  const t = [];
  return Object.values(r).forEach((i) => {
    cr(i.accounts).includes(e) && t.push(...i.events);
  }), t;
}
function Mf(r, e) {
  const t = Wr(r, e);
  if (t)
    throw new Error(t.message);
  const i = {};
  for (const [s, o] of Object.entries(r))
    i[s] = { methods: o.methods, events: o.events, chains: o.accounts.map((p) => `${p.split(":")[0]}:${p.split(":")[1]}`) };
  return i;
}
const jf = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Hf = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function V(r, e) {
  const { message: t, code: i } = Hf[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function Qe(r, e) {
  const { message: t, code: i } = jf[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function Nr(r, e) {
  return Array.isArray(r) ? typeof e < "u" && r.length ? r.every(e) : !0 : !1;
}
function vr(r) {
  return Object.getPrototypeOf(r) === Object.prototype && Object.keys(r).length;
}
function at(r) {
  return typeof r > "u";
}
function Ze(r, e) {
  return e && at(r) ? !0 : typeof r == "string" && !!r.trim().length;
}
function Es(r, e) {
  return e && at(r) ? !0 : typeof r == "number" && !isNaN(r);
}
function qf(r, e) {
  const { requiredNamespaces: t } = e, i = Object.keys(r.namespaces), s = Object.keys(t);
  let o = !0;
  return Yt(s, i) ? (i.forEach((p) => {
    const { accounts: h, methods: g, events: m } = r.namespaces[p], b = cr(h), E = t[p];
    (!Yt(Ba(p, E), b) || !Yt(E.methods, g) || !Yt(E.events, m)) && (o = !1);
  }), o) : !1;
}
function vs(r) {
  return Ze(r, !1) && r.includes(":") ? r.split(":").length === 2 : !1;
}
function zf(r) {
  if (Ze(r, !1) && r.includes(":")) {
    const e = r.split(":");
    if (e.length === 3) {
      const t = e[0] + ":" + e[1];
      return !!e[2] && vs(t);
    }
  }
  return !1;
}
function Kf(r) {
  if (Ze(r, !1))
    try {
      return typeof new URL(r) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Bf(r) {
  var e;
  return (e = r == null ? void 0 : r.proposer) == null ? void 0 : e.publicKey;
}
function Vf(r) {
  return r == null ? void 0 : r.topic;
}
function Gf(r, e) {
  let t = null;
  return Ze(r == null ? void 0 : r.publicKey, !1) || (t = V("MISSING_OR_INVALID", `${e} controller public key should be a string`)), t;
}
function In(r) {
  let e = !0;
  return Nr(r) ? r.length && (e = r.every((t) => Ze(t, !1))) : e = !1, e;
}
function kf(r, e, t) {
  let i = null;
  return Nr(e) ? e.forEach((s) => {
    i || (!vs(s) || !s.includes(r)) && (i = Qe("UNSUPPORTED_CHAINS", `${t}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : i = Qe("UNSUPPORTED_CHAINS", `${t}, chains ${e} should be an array of strings conforming to "namespace:chainId" format`), i;
}
function Wf(r, e) {
  let t = null;
  return Object.entries(r).forEach(([i, s]) => {
    if (t)
      return;
    const o = kf(i, Ba(i, s), `${e} requiredNamespace`);
    o && (t = o);
  }), t;
}
function Yf(r, e) {
  let t = null;
  return Nr(r) ? r.forEach((i) => {
    t || zf(i) || (t = Qe("UNSUPPORTED_ACCOUNTS", `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : t = Qe("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t;
}
function Jf(r, e) {
  let t = null;
  return Object.values(r).forEach((i) => {
    if (t)
      return;
    const s = Yf(i == null ? void 0 : i.accounts, `${e} namespace`);
    s && (t = s);
  }), t;
}
function Xf(r, e) {
  let t = null;
  return In(r == null ? void 0 : r.methods) ? In(r == null ? void 0 : r.events) || (t = Qe("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : t = Qe("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), t;
}
function Za(r, e) {
  let t = null;
  return Object.values(r).forEach((i) => {
    if (t)
      return;
    const s = Xf(i, `${e}, namespace`);
    s && (t = s);
  }), t;
}
function Qf(r, e, t) {
  let i = null;
  if (r && vr(r)) {
    const s = Za(r, e);
    s && (i = s);
    const o = Wf(r, e);
    o && (i = o);
  } else
    i = V("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
  return i;
}
function Wr(r, e) {
  let t = null;
  if (r && vr(r)) {
    const i = Za(r, e);
    i && (t = i);
    const s = Jf(r, e);
    s && (t = s);
  } else
    t = V("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return t;
}
function eo(r) {
  return Ze(r.protocol, !0);
}
function Zf(r, e) {
  let t = !1;
  return e && !r ? t = !0 : r && Nr(r) && r.length && r.forEach((i) => {
    t = eo(i);
  }), t;
}
function ed(r) {
  return typeof r == "number";
}
function ut(r) {
  return typeof r < "u" && typeof r !== null;
}
function td(r) {
  return !(!r || typeof r != "object" || !r.code || !Es(r.code, !1) || !r.message || !Ze(r.message, !1));
}
function rd(r) {
  return !(at(r) || !Ze(r.method, !1));
}
function id(r) {
  return !(at(r) || at(r.result) && at(r.error) || !Es(r.id, !1) || !Ze(r.jsonrpc, !1));
}
function sd(r) {
  return !(at(r) || !Ze(r.name, !1));
}
function On(r, e) {
  return !(!vs(e) || !Ff(r).includes(e));
}
function nd(r, e, t) {
  return Ze(t, !1) ? $f(r, e).includes(t) : !1;
}
function ad(r, e, t) {
  return Ze(t, !1) ? Lf(r, e).includes(t) : !1;
}
function xn(r, e, t) {
  let i = null;
  const s = od(r), o = cd(e), p = Object.keys(s), h = Object.keys(o), g = Cn(Object.keys(r)), m = Cn(Object.keys(e)), b = g.filter((E) => !m.includes(E));
  return b.length && (i = V("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${b.toString()}
      Received: ${Object.keys(e).toString()}`)), Yt(p, h) || (i = V("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.
      Required: ${p.toString()}
      Approved: ${h.toString()}`)), Object.keys(e).forEach((E) => {
    if (!E.includes(":") || i)
      return;
    const S = cr(e[E].accounts);
    S.includes(E) || (i = V("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${E}
        Required: ${E}
        Approved: ${S.toString()}`));
  }), p.forEach((E) => {
    i || (Yt(s[E].methods, o[E].methods) ? Yt(s[E].events, o[E].events) || (i = V("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${E}`)) : i = V("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${E}`));
  }), i;
}
function od(r) {
  const e = {};
  return Object.keys(r).forEach((t) => {
    var i;
    t.includes(":") ? e[t] = r[t] : (i = r[t].chains) == null || i.forEach((s) => {
      e[s] = { methods: r[t].methods, events: r[t].events };
    });
  }), e;
}
function Cn(r) {
  return [...new Set(r.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function cd(r) {
  const e = {};
  return Object.keys(r).forEach((t) => {
    if (t.includes(":"))
      e[t] = r[t];
    else {
      const i = cr(r[t].accounts);
      i == null || i.forEach((s) => {
        e[s] = { accounts: r[t].accounts.filter((o) => o.includes(`${s}:`)), methods: r[t].methods, events: r[t].events };
      });
    }
  }), e;
}
function hd(r, e) {
  return Es(r, !1) && r <= e.max && r >= e.min;
}
class ud extends pc {
  constructor(e) {
    super(e), this.events = new wt.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async request(e, t) {
    return this.requestStrict(ii(e.method, e.params || []), t);
  }
  async requestStrict(e, t) {
    return new Promise(async (i, s) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (o) {
          s(o);
        }
      this.events.on(`${e.id}`, (o) => {
        Ot(o) ? s(o.error) : i(o.result);
      });
      try {
        await this.connection.send(e, t);
      } catch (o) {
        s(o);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), ss(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
      type: e.method,
      data: e.params
    });
  }
  onClose(e) {
    e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), typeof e == "string" && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (e) => this.onPayload(e)), this.connection.on("close", (e) => this.onClose(e)), this.connection.on("error", (e) => this.events.emit("error", e)), this.connection.on("register_error", (e) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
}
const Nn = 10, ld = () => typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : require("ws"), fd = () => typeof window < "u", dd = ld();
class pd {
  constructor(e) {
    if (this.url = e, this.events = new wt.EventEmitter(), this.registering = !1, !Us(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (i) => {
        this.onClose(i), e();
      }, this.socket.close();
    });
  }
  async send(e, t) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Dr(e));
    } catch (i) {
      this.onError(e.id, i);
    }
  }
  register(e = this.url) {
    if (!Us(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((i, s) => {
        this.events.once("register_error", (o) => {
          this.resetMaxListeners(), s(o);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return s(new Error("WebSocket connection is missing or invalid"));
          i(this.socket);
        });
      });
    }
    return this.url = e, this.registering = !0, new Promise((t, i) => {
      const s = gc.isReactNative() ? void 0 : { rejectUnauthorized: !mc(e) }, o = new dd(e, [], s);
      fd() ? o.onerror = (p) => {
        const h = p;
        i(this.emitError(h.error));
      } : o.on("error", (p) => {
        i(this.emitError(p));
      }), o.onopen = () => {
        this.onOpen(o), t(o);
      };
    });
  }
  onOpen(e) {
    e.onmessage = (t) => this.onPayload(t), e.onclose = (t) => this.onClose(t), this.socket = e, this.registering = !1, this.events.emit("open");
  }
  onClose(e) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u")
      return;
    const t = typeof e.data == "string" ? ri(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const i = this.parseError(t), s = i.message || i.toString(), o = ns(e, s);
    this.events.emit("payload", o);
  }
  parseError(e, t = this.url) {
    return yc(e, t, "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Nn && this.events.setMaxListeners(Nn);
  }
  emitError(e) {
    const t = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for URL: ${this.url}`));
    return this.events.emit("register_error", t), t;
  }
}
function gd(r, e) {
  if (r.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++)
    t[i] = 255;
  for (var s = 0; s < r.length; s++) {
    var o = r.charAt(s), p = o.charCodeAt(0);
    if (t[p] !== 255)
      throw new TypeError(o + " is ambiguous");
    t[p] = s;
  }
  var h = r.length, g = r.charAt(0), m = Math.log(h) / Math.log(256), b = Math.log(256) / Math.log(h);
  function E(_) {
    if (_ instanceof Uint8Array || (ArrayBuffer.isView(_) ? _ = new Uint8Array(_.buffer, _.byteOffset, _.byteLength) : Array.isArray(_) && (_ = Uint8Array.from(_))), !(_ instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (_.length === 0)
      return "";
    for (var A = 0, R = 0, M = 0, c = _.length; M !== c && _[M] === 0; )
      M++, A++;
    for (var y = (c - M) * b + 1 >>> 0, l = new Uint8Array(y); M !== c; ) {
      for (var d = _[M], u = 0, n = y - 1; (d !== 0 || u < R) && n !== -1; n--, u++)
        d += 256 * l[n] >>> 0, l[n] = d % h >>> 0, d = d / h >>> 0;
      if (d !== 0)
        throw new Error("Non-zero carry");
      R = u, M++;
    }
    for (var f = y - R; f !== y && l[f] === 0; )
      f++;
    for (var T = g.repeat(A); f < y; ++f)
      T += r.charAt(l[f]);
    return T;
  }
  function S(_) {
    if (typeof _ != "string")
      throw new TypeError("Expected String");
    if (_.length === 0)
      return new Uint8Array();
    var A = 0;
    if (_[A] !== " ") {
      for (var R = 0, M = 0; _[A] === g; )
        R++, A++;
      for (var c = (_.length - A) * m + 1 >>> 0, y = new Uint8Array(c); _[A]; ) {
        var l = t[_.charCodeAt(A)];
        if (l === 255)
          return;
        for (var d = 0, u = c - 1; (l !== 0 || d < M) && u !== -1; u--, d++)
          l += h * y[u] >>> 0, y[u] = l % 256 >>> 0, l = l / 256 >>> 0;
        if (l !== 0)
          throw new Error("Non-zero carry");
        M = d, A++;
      }
      if (_[A] !== " ") {
        for (var n = c - M; n !== c && y[n] === 0; )
          n++;
        for (var f = new Uint8Array(R + (c - n)), T = R; n !== c; )
          f[T++] = y[n++];
        return f;
      }
    }
  }
  function D(_) {
    var A = S(_);
    if (A)
      return A;
    throw new Error(`Non-${e} character`);
  }
  return { encode: E, decodeUnsafe: S, decode: D };
}
var md = gd, yd = md;
const to = (r) => {
  if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
    return r;
  if (r instanceof ArrayBuffer)
    return new Uint8Array(r);
  if (ArrayBuffer.isView(r))
    return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  throw new Error("Unknown type, must be binary type");
}, bd = (r) => new TextEncoder().encode(r), wd = (r) => new TextDecoder().decode(r);
class Ed {
  constructor(e, t, i) {
    this.name = e, this.prefix = t, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class vd {
  constructor(e, t, i) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return ro(this, e);
  }
}
class _d {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return ro(this, e);
  }
  decode(e) {
    const t = e[0], i = this.decoders[t];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const ro = (r, e) => new _d({ ...r.decoders || { [r.prefix]: r }, ...e.decoders || { [e.prefix]: e } });
class Dd {
  constructor(e, t, i, s) {
    this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new Ed(e, t, i), this.decoder = new vd(e, t, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const fi = ({ name: r, prefix: e, encode: t, decode: i }) => new Dd(r, e, t, i), Ar = ({ prefix: r, name: e, alphabet: t }) => {
  const { encode: i, decode: s } = yd(t, e);
  return fi({ prefix: r, name: e, encode: i, decode: (o) => to(s(o)) });
}, Sd = (r, e, t, i) => {
  const s = {};
  for (let b = 0; b < e.length; ++b)
    s[e[b]] = b;
  let o = r.length;
  for (; r[o - 1] === "="; )
    --o;
  const p = new Uint8Array(o * t / 8 | 0);
  let h = 0, g = 0, m = 0;
  for (let b = 0; b < o; ++b) {
    const E = s[r[b]];
    if (E === void 0)
      throw new SyntaxError(`Non-${i} character`);
    g = g << t | E, h += t, h >= 8 && (h -= 8, p[m++] = 255 & g >> h);
  }
  if (h >= t || 255 & g << 8 - h)
    throw new SyntaxError("Unexpected end of data");
  return p;
}, Id = (r, e, t) => {
  const i = e[e.length - 1] === "=", s = (1 << t) - 1;
  let o = "", p = 0, h = 0;
  for (let g = 0; g < r.length; ++g)
    for (h = h << 8 | r[g], p += 8; p > t; )
      p -= t, o += e[s & h >> p];
  if (p && (o += e[s & h << t - p]), i)
    for (; o.length * t & 7; )
      o += "=";
  return o;
}, rt = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) => fi({ prefix: e, name: r, encode(s) {
  return Id(s, i, t);
}, decode(s) {
  return Sd(s, i, t, r);
} }), Od = fi({ prefix: "\0", name: "identity", encode: (r) => wd(r), decode: (r) => bd(r) });
var xd = Object.freeze({ __proto__: null, identity: Od });
const Cd = rt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Nd = Object.freeze({ __proto__: null, base2: Cd });
const Ad = rt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Pd = Object.freeze({ __proto__: null, base8: Ad });
const Td = Ar({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Rd = Object.freeze({ __proto__: null, base10: Td });
const Ud = rt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Fd = rt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var $d = Object.freeze({ __proto__: null, base16: Ud, base16upper: Fd });
const Ld = rt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Md = rt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), jd = rt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Hd = rt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), qd = rt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), zd = rt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Kd = rt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Bd = rt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Vd = rt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Gd = Object.freeze({ __proto__: null, base32: Ld, base32upper: Md, base32pad: jd, base32padupper: Hd, base32hex: qd, base32hexupper: zd, base32hexpad: Kd, base32hexpadupper: Bd, base32z: Vd });
const kd = Ar({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Wd = Ar({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Yd = Object.freeze({ __proto__: null, base36: kd, base36upper: Wd });
const Jd = Ar({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Xd = Ar({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Qd = Object.freeze({ __proto__: null, base58btc: Jd, base58flickr: Xd });
const Zd = rt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), ep = rt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), tp = rt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), rp = rt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var ip = Object.freeze({ __proto__: null, base64: Zd, base64pad: ep, base64url: tp, base64urlpad: rp });
const io = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), sp = io.reduce((r, e, t) => (r[t] = e, r), []), np = io.reduce((r, e, t) => (r[e.codePointAt(0)] = t, r), []);
function ap(r) {
  return r.reduce((e, t) => (e += sp[t], e), "");
}
function op(r) {
  const e = [];
  for (const t of r) {
    const i = np[t.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const cp = fi({ prefix: "🚀", name: "base256emoji", encode: ap, decode: op });
var hp = Object.freeze({ __proto__: null, base256emoji: cp }), up = so, An = 128, lp = 127, fp = ~lp, dp = Math.pow(2, 31);
function so(r, e, t) {
  e = e || [], t = t || 0;
  for (var i = t; r >= dp; )
    e[t++] = r & 255 | An, r /= 128;
  for (; r & fp; )
    e[t++] = r & 255 | An, r >>>= 7;
  return e[t] = r | 0, so.bytes = t - i + 1, e;
}
var pp = ki, gp = 128, Pn = 127;
function ki(r, i) {
  var t = 0, i = i || 0, s = 0, o = i, p, h = r.length;
  do {
    if (o >= h)
      throw ki.bytes = 0, new RangeError("Could not decode varint");
    p = r[o++], t += s < 28 ? (p & Pn) << s : (p & Pn) * Math.pow(2, s), s += 7;
  } while (p >= gp);
  return ki.bytes = o - i, t;
}
var mp = Math.pow(2, 7), yp = Math.pow(2, 14), bp = Math.pow(2, 21), wp = Math.pow(2, 28), Ep = Math.pow(2, 35), vp = Math.pow(2, 42), _p = Math.pow(2, 49), Dp = Math.pow(2, 56), Sp = Math.pow(2, 63), Ip = function(r) {
  return r < mp ? 1 : r < yp ? 2 : r < bp ? 3 : r < wp ? 4 : r < Ep ? 5 : r < vp ? 6 : r < _p ? 7 : r < Dp ? 8 : r < Sp ? 9 : 10;
}, Op = { encode: up, decode: pp, encodingLength: Ip }, no = Op;
const Tn = (r, e, t = 0) => (no.encode(r, e, t), e), Rn = (r) => no.encodingLength(r), Wi = (r, e) => {
  const t = e.byteLength, i = Rn(r), s = i + Rn(t), o = new Uint8Array(s + t);
  return Tn(r, o, 0), Tn(t, o, i), o.set(e, s), new xp(r, t, e, o);
};
class xp {
  constructor(e, t, i, s) {
    this.code = e, this.size = t, this.digest = i, this.bytes = s;
  }
}
const ao = ({ name: r, code: e, encode: t }) => new Cp(r, e, t);
class Cp {
  constructor(e, t, i) {
    this.name = e, this.code = t, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? Wi(this.code, t) : t.then((i) => Wi(this.code, i));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const oo = (r) => async (e) => new Uint8Array(await crypto.subtle.digest(r, e)), Np = ao({ name: "sha2-256", code: 18, encode: oo("SHA-256") }), Ap = ao({ name: "sha2-512", code: 19, encode: oo("SHA-512") });
var Pp = Object.freeze({ __proto__: null, sha256: Np, sha512: Ap });
const co = 0, Tp = "identity", ho = to, Rp = (r) => Wi(co, ho(r)), Up = { code: co, name: Tp, encode: ho, digest: Rp };
var Fp = Object.freeze({ __proto__: null, identity: Up });
new TextEncoder(), new TextDecoder();
const Un = { ...xd, ...Nd, ...Pd, ...Rd, ...$d, ...Gd, ...Yd, ...Qd, ...ip, ...hp };
({ ...Pp, ...Fp });
function $p(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(r) : new Uint8Array(r);
}
function uo(r, e, t, i) {
  return { name: r, prefix: e, encoder: { name: r, prefix: e, encode: t }, decoder: { decode: i } };
}
const Fn = uo("utf8", "u", (r) => "u" + new TextDecoder("utf8").decode(r), (r) => new TextEncoder().encode(r.substring(1))), Oi = uo("ascii", "a", (r) => {
  let e = "a";
  for (let t = 0; t < r.length; t++)
    e += String.fromCharCode(r[t]);
  return e;
}, (r) => {
  r = r.substring(1);
  const e = $p(r.length);
  for (let t = 0; t < r.length; t++)
    e[t] = r.charCodeAt(t);
  return e;
}), Lp = { utf8: Fn, "utf-8": Fn, hex: Un.base16, latin1: Oi, ascii: Oi, binary: Oi, ...Un };
function Mp(r, e = "utf8") {
  const t = Lp[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r, "utf8") : t.decoder.decode(`${t.prefix}${r}`);
}
const lo = "wc", jp = 2, _s = "core", Mt = `${lo}@2:${_s}:`, Hp = { name: _s, logger: "error" }, qp = { database: ":memory:" }, zp = "crypto", $n = "client_ed25519_seed", Kp = Z.ONE_DAY, Bp = "keychain", Vp = "0.3", Gp = "messages", kp = "0.3", Wp = Z.SIX_HOURS, Yp = "publisher", fo = "irn", Jp = "error", po = "wss://relay.walletconnect.com", Xp = "relayer", Xe = { message: "relayer_message", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, Qp = "_subscription", qr = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Zp = Z.ONE_SECOND, eg = "2.6.0", tg = "0.3", It = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, rg = "subscription", ig = "0.3", sg = Z.FIVE_SECONDS * 1e3, ng = "pairing", ag = "0.3", yr = { wc_pairingDelete: { req: { ttl: Z.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: Z.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: Z.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: Z.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: Z.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: Z.ONE_DAY, prompt: !1, tag: 0 } } }, St = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, og = "history", cg = "0.3", hg = "expirer", bt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, ug = "0.3";
class lg {
  constructor(e, t) {
    this.core = e, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = Bp, this.version = Vp, this.initialized = !1, this.storagePrefix = Mt, this.init = async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = !0;
      }
    }, this.has = (i) => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, s) => {
      this.isInitialized(), this.keychain.set(i, s), await this.persist();
    }, this.get = (i) => {
      this.isInitialized();
      const s = this.keychain.get(i);
      if (typeof s > "u") {
        const { message: o } = V("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(o);
      }
      return s;
    }, this.del = async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }, this.core = e, this.logger = Se.generateChildLogger(t, this.name);
  }
  get context() {
    return Se.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Ya(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Ja(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = V("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class fg {
  constructor(e, t, i) {
    this.core = e, this.logger = t, this.name = zp, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), o = nn(s);
      return Ra(o.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = tf();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const o = await this.getClientSeed(), p = nn(o), h = Vi();
      return await Yu(h, s, Kp, p);
    }, this.generateSharedKey = (s, o, p) => {
      this.isInitialized();
      const h = this.getPrivateKey(s), g = rf(h, o);
      return this.setSymKey(g, p);
    }, this.setSymKey = async (s, o) => {
      this.isInitialized();
      const p = o || sf(s);
      return await this.keychain.set(p, s), p;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, o, p) => {
      this.isInitialized();
      const h = ka(p), g = Dr(o);
      if (wn(h)) {
        const S = h.senderPublicKey, D = h.receiverPublicKey;
        s = await this.generateSharedKey(S, D);
      }
      const m = this.getSymKey(s), { type: b, senderPublicKey: E } = h;
      return af({ type: b, symKey: m, message: g, senderPublicKey: E });
    }, this.decode = async (s, o, p) => {
      this.isInitialized();
      const h = hf(o, p);
      if (wn(h)) {
        const b = h.receiverPublicKey, E = h.senderPublicKey;
        s = await this.generateSharedKey(b, E);
      }
      const g = this.getSymKey(s), m = of({ symKey: g, encoded: o });
      return ri(m);
    }, this.getPayloadType = (s) => {
      const o = ei(s);
      return Cr(o.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const o = ei(s);
      return o.senderPublicKey ? ct(o.senderPublicKey, ot) : void 0;
    }, this.core = e, this.logger = Se.generateChildLogger(t, this.name), this.keychain = i || new lg(this.core, this.logger);
  }
  get context() {
    return Se.getLoggerContext(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get($n);
    } catch {
      e = Vi(), await this.keychain.set($n, e);
    }
    return Mp(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = V("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class dg extends Gl {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = Gp, this.version = kp, this.initialized = !1, this.storagePrefix = Mt, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i = await this.getRelayerMessages();
          typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (i, s) => {
      this.isInitialized();
      const o = Zr(s);
      let p = this.messages.get(i);
      return typeof p > "u" && (p = {}), typeof p[o] < "u" || (p[o] = s, this.messages.set(i, p), await this.persist()), o;
    }, this.get = (i) => {
      this.isInitialized();
      let s = this.messages.get(i);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (i, s) => {
      this.isInitialized();
      const o = this.get(i), p = Zr(s);
      return typeof o[p] < "u";
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = Se.generateChildLogger(e, this.name), this.core = t;
  }
  get context() {
    return Se.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Ya(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Ja(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = V("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class pg extends kl {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.events = new wt.EventEmitter(), this.name = Yp, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = 1e4, this.publish = async (i, s, o) => {
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: s, opts: o } });
      try {
        const p = (o == null ? void 0 : o.ttl) || Wp, h = Gi(o), g = (o == null ? void 0 : o.prompt) || !1, m = (o == null ? void 0 : o.tag) || 0, b = { topic: i, message: s, opts: { ttl: p, relay: h, prompt: g, tag: m } }, E = Zr(s);
        this.queue.set(E, b);
        try {
          await await ti(this.rpcPublish(i, s, p, h, g, m), this.publishTimeout), this.relayer.events.emit(Xe.publish, b);
        } catch {
          this.logger.debug("Publishing Payload stalled"), this.relayer.events.emit(Xe.connection_stalled);
          return;
        }
        this.onPublish(E, b), this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: s, opts: o } });
      } catch (p) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(p), p;
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.relayer = e, this.logger = Se.generateChildLogger(t, this.name), this.registerEventListeners();
  }
  get context() {
    return Se.getLoggerContext(this.logger);
  }
  rpcPublish(e, t, i, s, o, p) {
    var h, g, m, b;
    const E = { method: kr(s.protocol).publish, params: { topic: e, message: t, ttl: i, prompt: o, tag: p } };
    return at((h = E.params) == null ? void 0 : h.prompt) && ((g = E.params) == null || delete g.prompt), at((m = E.params) == null ? void 0 : m.tag) && ((b = E.params) == null || delete b.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: E }), this.relayer.request(E);
  }
  onPublish(e, t) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: i, opts: s } = e;
      await this.publish(t, i, s);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(xr.HEARTBEAT_EVENTS.pulse, () => {
      this.checkQueue();
    });
  }
}
class gg {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, t) => {
      const i = this.get(e);
      this.exists(e, t) || this.map.set(e, [...i, t]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const i = this.get(e);
      if (!this.exists(e, t))
        return;
      const s = i.filter((o) => o !== t);
      if (!s.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var mg = Object.defineProperty, yg = Object.defineProperties, bg = Object.getOwnPropertyDescriptors, Ln = Object.getOwnPropertySymbols, wg = Object.prototype.hasOwnProperty, Eg = Object.prototype.propertyIsEnumerable, Mn = (r, e, t) => e in r ? mg(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, br = (r, e) => {
  for (var t in e || (e = {}))
    wg.call(e, t) && Mn(r, t, e[t]);
  if (Ln)
    for (var t of Ln(e))
      Eg.call(e, t) && Mn(r, t, e[t]);
  return r;
}, xi = (r, e) => yg(r, bg(e));
class vg extends Jl {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new gg(), this.events = new wt.EventEmitter(), this.name = rg, this.version = ig, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Mt, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } });
      try {
        const o = Gi(s), p = { topic: i, relay: o };
        this.pending.set(i, p);
        const h = await this.rpcSubscribe(i, o);
        return this.onSubscribe(h, p), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } }), h;
      } catch (o) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(o), o;
      }
    }, this.unsubscribe = async (i, s) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
    }, this.isSubscribed = async (i) => this.topics.includes(i) ? !0 : await new Promise((s, o) => {
      const p = new Z.Watch();
      p.start(this.pendingSubscriptionWatchLabel);
      const h = setInterval(() => {
        !this.pending.has(i) && this.topics.includes(i) && (clearInterval(h), p.stop(this.pendingSubscriptionWatchLabel), s(!0)), p.elapsed(this.pendingSubscriptionWatchLabel) >= sg && (clearInterval(h), p.stop(this.pendingSubscriptionWatchLabel), o(!1));
      }, this.pollingInterval);
    }), this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = Se.generateChildLogger(t, this.name), this.clientId = "";
  }
  get context() {
    return Se.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let i = !1;
    try {
      i = this.getSubscription(e).topic === t;
    } catch {
    }
    return i;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const i = this.topicMap.get(e);
    await Promise.all(i.map(async (s) => await this.unsubscribeById(e, s, t)));
  }
  async unsubscribeById(e, t, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i } });
    try {
      const s = Gi(i);
      await this.rpcUnsubscribe(e, t, s);
      const o = Qe("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, o), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, t) {
    const i = { method: kr(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      await await ti(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Xe.connection_stalled);
    }
    return Zr(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const t = e[0].relay, i = { method: kr(t.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await ti(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Xe.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t, i) {
    const s = { method: kr(i.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, xi(br({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t) => {
      this.setSubscription(t.id, br({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e, t, i) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, br({}, t)), this.topicMap.set(t.topic, e), this.events.emit(It.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: i } = V("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(It.deleted, xi(br({}, i), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(It.sync);
  }
  async reset() {
    if (!this.cached.length)
      return;
    const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
    for (let t = 0; t < e; t++) {
      const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
      await this.batchSubscribe(i);
    }
    this.events.emit(It.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: t } = V("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length)
      return;
    const t = await this.rpcBatchSubscribe(e);
    Nr(t) && this.onBatchSubscribe(t.map((i, s) => xi(br({}, e[s]), { id: i })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (this.relayer.transportExplicitlyClosed)
      return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }), await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(xr.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Xe.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Xe.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(It.created, async (e) => {
      const t = It.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    }), this.events.on(It.deleted, async (e) => {
      const t = It.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = V("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.restartInProgress || (clearInterval(t), e());
      }, this.pollingInterval);
    });
  }
}
var _g = Object.defineProperty, jn = Object.getOwnPropertySymbols, Dg = Object.prototype.hasOwnProperty, Sg = Object.prototype.propertyIsEnumerable, Hn = (r, e, t) => e in r ? _g(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Ig = (r, e) => {
  for (var t in e || (e = {}))
    Dg.call(e, t) && Hn(r, t, e[t]);
  if (jn)
    for (var t of jn(e))
      Sg.call(e, t) && Hn(r, t, e[t]);
  return r;
};
class Og extends Wl {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new wt.EventEmitter(), this.name = Xp, this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async (t) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(t);
      } catch (i) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i;
      }
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Se.generateChildLogger(e.logger, this.name) : li(Se.getDefaultLoggerOptions({ level: e.logger || Jp })), this.messages = new dg(this.logger, e.core), this.subscriber = new vg(this, this.logger), this.publisher = new pg(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || po, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.transportOpen(), this.subscriber.init()]), this.registerEventListeners(), this.initialized = !0;
  }
  get context() {
    return Se.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, i) {
    this.isInitialized(), await this.publisher.publish(e, t, i), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now() });
  }
  async subscribe(e, t) {
    this.isInitialized();
    let i = "";
    return await Promise.all([new Promise((s) => {
      this.subscriber.once(It.created, (o) => {
        o.topic === e && s();
      });
    }), new Promise(async (s) => {
      i = await this.subscriber.subscribe(e, t), s();
    })]), i;
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(Xe.transport_closed));
  }
  async transportOpen(e) {
    if (!this.reconnecting) {
      this.relayUrl = e || this.relayUrl, this.transportExplicitlyClosed = !1, this.reconnecting = !0;
      try {
        await Promise.all([new Promise((t) => {
          this.initialized || t(), this.subscriber.once(It.resubscribed, () => {
            t();
          });
        }), await Promise.race([new Promise(async (t, i) => {
          await ti(this.provider.connect(), 5e3, "socket stalled").catch((s) => i(s)).then(() => t()).finally(() => this.removeListener(Xe.transport_closed, this.rejectTransportOpen));
        }), new Promise((t) => this.once(Xe.transport_closed, this.rejectTransportOpen))])]);
      } catch (t) {
        this.logger.error(t);
        const i = t;
        if (!this.isConnectionStalled(i.message))
          throw t;
        this.events.emit(Xe.transport_closed);
      } finally {
        this.reconnecting = !1;
      }
    }
  }
  async restartTransport(e) {
    this.transportExplicitlyClosed || (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  rejectTransportOpen() {
    throw new Error("closeTransport called before connection was established");
  }
  async createProvider() {
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new ud(new pd(Df({ sdkVersion: eg, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: i } = e;
    await this.messages.set(t, i);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: i } = e;
    return await this.subscriber.isSubscribed(t) ? this.messages.has(t, i) : !0;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), as(e)) {
      if (!e.method.endsWith(Qp))
        return;
      const t = e.params, { topic: i, message: s, publishedAt: o } = t.data, p = { topic: i, message: s, publishedAt: o };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ig({ type: "event", event: t.id }, p)), this.events.emit(t.id, p), await this.acknowledgePayload(e), await this.onMessageEvent(p);
    }
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Xe.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = os(e.id, !0);
    await this.provider.connection.send(t);
  }
  registerProviderListeners() {
    this.provider.on(qr.payload, (e) => this.onProviderPayload(e)), this.provider.on(qr.connect, () => {
      this.events.emit(Xe.connect);
    }), this.provider.on(qr.disconnect, () => {
      this.onProviderDisconnect();
    }), this.provider.on(qr.error, (e) => {
      this.logger.error(e), this.events.emit(Xe.error, e);
    });
  }
  registerEventListeners() {
    this.events.on(Xe.connection_stalled, async () => {
      await this.restartTransport();
    });
  }
  onProviderDisconnect() {
    this.events.emit(Xe.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || setTimeout(async () => {
      await this.restartTransport();
    }, Z.toMiliseconds(Zp));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = V("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (!this.connected) {
      if (this.connecting)
        return await new Promise((e) => {
          const t = setInterval(() => {
            this.connected && (clearInterval(t), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var xg = Object.defineProperty, qn = Object.getOwnPropertySymbols, Cg = Object.prototype.hasOwnProperty, Ng = Object.prototype.propertyIsEnumerable, zn = (r, e, t) => e in r ? xg(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Kn = (r, e) => {
  for (var t in e || (e = {}))
    Cg.call(e, t) && zn(r, t, e[t]);
  if (qn)
    for (var t of qn(e))
      Ng.call(e, t) && zn(r, t, e[t]);
  return r;
};
class di extends Yl {
  constructor(e, t, i, s = Mt, o = void 0) {
    super(e, t, i, s), this.core = e, this.logger = t, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = tg, this.cached = [], this.initialized = !1, this.storagePrefix = Mt, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((p) => {
        this.getKey && p !== null && !at(p) ? this.map.set(this.getKey(p), p) : Bf(p) ? this.map.set(p.id, p) : Vf(p) && this.map.set(p.topic, p);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (p, h) => {
      this.isInitialized(), this.map.has(p) ? await this.update(p, h) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: p, value: h }), this.map.set(p, h), await this.persist());
    }, this.get = (p) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: p }), this.getData(p)), this.getAll = (p) => (this.isInitialized(), p ? this.values.filter((h) => Object.keys(p).every((g) => Fl(h[g], p[g]))) : this.values), this.update = async (p, h) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: p, update: h });
      const g = Kn(Kn({}, this.getData(p)), h);
      this.map.set(p, g), await this.persist();
    }, this.delete = async (p, h) => {
      this.isInitialized(), this.map.has(p) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: p, reason: h }), this.map.delete(p), await this.persist());
    }, this.logger = Se.generateChildLogger(t, this.name), this.storagePrefix = s, this.getKey = o;
  }
  get context() {
    return Se.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const { message: i } = V("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length)
        return;
      if (this.map.size) {
        const { message: t } = V("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = V("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Ag {
  constructor(e, t) {
    this.core = e, this.logger = t, this.name = ng, this.version = ag, this.events = new hs(), this.initialized = !1, this.storagePrefix = Mt, this.ignoredPayloadTypes = [Zt], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = Vi(), s = await this.core.crypto.setSymKey(i), o = xt(Z.FIVE_MINUTES), p = { protocol: fo }, h = { topic: s, expiry: o, relay: p, active: !1 }, g = Uf({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: i, relay: p });
      return await this.pairings.set(s, h), await this.core.relayer.subscribe(s), this.core.expirer.set(s, o), { topic: s, uri: g };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: s, symKey: o, relay: p } = Tf(i.uri);
      if (this.pairings.keys.includes(s))
        throw new Error(`Pairing already exists: ${s}`);
      if (this.core.crypto.hasKeys(s))
        throw new Error(`Keychain already exists: ${s}`);
      const h = xt(Z.FIVE_MINUTES), g = { topic: s, relay: p, expiry: h, active: !1 };
      return await this.pairings.set(s, g), await this.core.crypto.setSymKey(o, s), await this.core.relayer.subscribe(s, { relay: p }), this.core.expirer.set(s, h), i.activatePairing && await this.activate({ topic: s }), g;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const s = xt(Z.THIRTY_DAYS);
      await this.pairings.update(i, { active: !0, expiry: s }), this.core.expirer.set(i, s);
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i);
      const { topic: s } = i;
      if (this.pairings.keys.includes(s)) {
        const o = await this.sendRequest(s, "wc_pairingPing", {}), { done: p, resolve: h, reject: g } = Wt();
        this.events.once(Fe("pairing_ping", o), ({ error: m }) => {
          m ? g(m) : h();
        }), await p();
      }
    }, this.updateExpiry = async ({ topic: i, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: s });
    }, this.updateMetadata = async ({ topic: i, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: s });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: s } = i;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", Qe("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (i, s, o) => {
      const p = ii(s, o), h = await this.core.crypto.encode(i, p), g = yr[s].req;
      return this.core.history.set(i, p), await this.core.relayer.publish(i, h, g), p.id;
    }, this.sendResult = async (i, s, o) => {
      const p = os(i, o), h = await this.core.crypto.encode(s, p), g = await this.core.history.get(s, i), m = yr[g.request.method].res;
      await this.core.relayer.publish(s, h, m), await this.core.history.resolve(p);
    }, this.sendError = async (i, s, o) => {
      const p = ns(i, o), h = await this.core.crypto.encode(s, p), g = await this.core.history.get(s, i), m = yr[g.request.method] ? yr[g.request.method].res : yr.unregistered_method.res;
      await this.core.relayer.publish(s, h, m), await this.core.history.resolve(p);
    }, this.deletePairing = async (i, s) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, Qe("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), s ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((s) => Lt(s.expiry));
      await Promise.all(i.map((s) => this.deletePairing(s.topic)));
    }, this.onRelayEventRequest = (i) => {
      const { topic: s, payload: o } = i, p = o.method;
      if (this.pairings.keys.includes(s))
        switch (p) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(s, o);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(s, o);
          default:
            return this.onUnknownRpcMethodRequest(s, o);
        }
    }, this.onRelayEventResponse = async (i) => {
      const { topic: s, payload: o } = i, p = (await this.core.history.get(s, o.id)).request.method;
      if (this.pairings.keys.includes(s))
        switch (p) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(s, o);
          default:
            return this.onUnknownRpcMethodResponse(p);
        }
    }, this.onPairingPingRequest = async (i, s) => {
      const { id: o } = s;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(o, i, !0), this.events.emit("pairing_ping", { id: o, topic: i });
      } catch (p) {
        await this.sendError(o, i, p), this.logger.error(p);
      }
    }, this.onPairingPingResponse = (i, s) => {
      const { id: o } = s;
      setTimeout(() => {
        $t(s) ? this.events.emit(Fe("pairing_ping", o), {}) : Ot(s) && this.events.emit(Fe("pairing_ping", o), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i, s) => {
      const { id: o } = s;
      try {
        this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit("pairing_delete", { id: o, topic: i });
      } catch (p) {
        await this.sendError(o, i, p), this.logger.error(p);
      }
    }, this.onUnknownRpcMethodRequest = async (i, s) => {
      const { id: o, method: p } = s;
      try {
        if (this.registeredMethods.includes(p))
          return;
        const h = Qe("WC_METHOD_UNSUPPORTED", p);
        await this.sendError(o, i, h), this.logger.error(h);
      } catch (h) {
        await this.sendError(o, i, h), this.logger.error(h);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(Qe("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      if (!ut(i)) {
        const { message: s } = V("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(s);
      }
      if (!Kf(i.uri)) {
        const { message: s } = V("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (i) => {
      if (!ut(i)) {
        const { message: o } = V("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(o);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (i) => {
      if (!ut(i)) {
        const { message: o } = V("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(o);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (i) => {
      if (!Ze(i, !1)) {
        const { message: s } = V("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: s } = V("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(s);
      }
      if (Lt(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: s } = V("EXPIRED", `pairing topic: ${i}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = Se.generateChildLogger(t, this.name), this.pairings = new di(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Se.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = V("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Xe.message, async (e) => {
      const { topic: t, message: i } = e;
      if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
        return;
      const s = await this.core.crypto.decode(t, i);
      as(s) ? (this.core.history.set(t, s), this.onRelayEventRequest({ topic: t, payload: s })) : ss(s) && (await this.core.history.resolve(s), this.onRelayEventResponse({ topic: t, payload: s }));
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(bt.expired, async (e) => {
      const { topic: t } = Qa(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit("pairing_expire", { topic: t }));
    });
  }
}
let Pg = class extends Vl {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new wt.EventEmitter(), this.name = og, this.version = cg, this.cached = [], this.initialized = !1, this.storagePrefix = Mt, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (i, s, o) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: s, chainId: o }), this.records.has(s.id))
        return;
      const p = { id: s.id, topic: i, request: { method: s.method, params: s.params || null }, chainId: o };
      this.records.set(p.id, p), this.events.emit(St.created, p);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id))
        return;
      const s = await this.getRecord(i.id);
      typeof s.response > "u" && (s.response = Ot(i) ? { error: i.error } : { result: i.result }, this.records.set(s.id, s), this.events.emit(St.updated, s));
    }, this.get = async (i, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: s }), await this.getRecord(s)), this.delete = (i, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((o) => {
        if (o.topic === i) {
          if (typeof s < "u" && o.id !== s)
            return;
          this.records.delete(o.id), this.events.emit(St.deleted, o);
        }
      });
    }, this.exists = async (i, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : !1), this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.logger = Se.generateChildLogger(t, this.name);
  }
  get context() {
    return Se.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u")
        return;
      const i = { topic: t.topic, request: ii(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(i);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: i } = V("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(St.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: t } = V("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(St.created, (e) => {
      const t = St.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(St.updated, (e) => {
      const t = St.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(St.deleted, (e) => {
      const t = St.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = V("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
class Tg extends Xl {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new wt.EventEmitter(), this.name = hg, this.version = ug, this.cached = [], this.initialized = !1, this.storagePrefix = Mt, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (i) => {
      try {
        const s = this.formatTarget(i);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return !1;
      }
    }, this.set = (i, s) => {
      this.isInitialized();
      const o = this.formatTarget(i), p = { target: o, expiry: s };
      this.expirations.set(o, p), this.checkExpiry(o, p), this.events.emit(bt.created, { target: o, expiration: p });
    }, this.get = (i) => {
      this.isInitialized();
      const s = this.formatTarget(i);
      return this.getExpiration(s);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const s = this.formatTarget(i), o = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(bt.deleted, { target: s, expiration: o });
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.logger = Se.generateChildLogger(t, this.name);
  }
  get context() {
    return Se.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string")
      return Sf(e);
    if (typeof e == "number")
      return If(e);
    const { message: t } = V("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(bt.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: t } = V("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: i } = V("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: i } = t;
    Z.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(bt.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(xr.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(bt.created, (e) => {
      const t = bt.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(bt.expired, (e) => {
      const t = bt.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(bt.deleted, (e) => {
      const t = bt.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = V("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
var Rg = Object.defineProperty, Bn = Object.getOwnPropertySymbols, Ug = Object.prototype.hasOwnProperty, Fg = Object.prototype.propertyIsEnumerable, Vn = (r, e, t) => e in r ? Rg(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Gn = (r, e) => {
  for (var t in e || (e = {}))
    Ug.call(e, t) && Vn(r, t, e[t]);
  if (Bn)
    for (var t of Bn(e))
      Fg.call(e, t) && Vn(r, t, e[t]);
  return r;
};
let $g = class go extends Bl {
  constructor(e) {
    super(e), this.protocol = lo, this.version = jp, this.name = _s, this.events = new wt.EventEmitter(), this.initialized = !1, this.on = (i, s) => this.events.on(i, s), this.once = (i, s) => this.events.once(i, s), this.off = (i, s) => this.events.off(i, s), this.removeListener = (i, s) => this.events.removeListener(i, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || po;
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : li(Se.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Hp.logger }));
    this.logger = Se.generateChildLogger(t, this.name), this.heartbeat = new xr.HeartBeat(), this.crypto = new fg(this, this.logger, e == null ? void 0 : e.keychain), this.history = new Pg(this, this.logger), this.expirer = new Tg(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Zc(Gn(Gn({}, qp), e == null ? void 0 : e.storageOptions)), this.relayer = new Og({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Ag(this, this.logger);
  }
  static async init(e) {
    const t = new go(e);
    return await t.initialize(), t;
  }
  get context() {
    return Se.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
};
const Lg = $g, mo = "wc", yo = 2, bo = "client", Ds = `${mo}@${yo}:${bo}:`, Ci = { name: bo, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Mg = "proposal", wo = "Proposal expired", jg = "session", zr = Z.SEVEN_DAYS, Hg = "engine", wr = { wc_sessionPropose: { req: { ttl: Z.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: Z.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: Z.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: Z.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: Z.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: Z.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: Z.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: Z.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: Z.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: Z.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: Z.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: Z.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: Z.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: Z.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: Z.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: Z.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Ni = { min: Z.FIVE_MINUTES, max: Z.SEVEN_DAYS }, qg = "request";
var zg = Object.defineProperty, Kg = Object.defineProperties, Bg = Object.getOwnPropertyDescriptors, kn = Object.getOwnPropertySymbols, Vg = Object.prototype.hasOwnProperty, Gg = Object.prototype.propertyIsEnumerable, Wn = (r, e, t) => e in r ? zg(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, yt = (r, e) => {
  for (var t in e || (e = {}))
    Vg.call(e, t) && Wn(r, t, e[t]);
  if (kn)
    for (var t of kn(e))
      Gg.call(e, t) && Wn(r, t, e[t]);
  return r;
}, Ai = (r, e) => Kg(r, Bg(e));
class kg extends Zl {
  constructor(e) {
    super(e), this.name = Hg, this.events = new hs(), this.initialized = !1, this.ignoredPayloadTypes = [Zt], this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(wr) }), this.initialized = !0);
    }, this.connect = async (t) => {
      this.isInitialized();
      const i = Ai(yt({}, t), { requiredNamespaces: t.requiredNamespaces || {}, optionalNamespaces: t.optionalNamespaces || {} });
      await this.isValidConnect(i);
      const { pairingTopic: s, requiredNamespaces: o, optionalNamespaces: p, sessionProperties: h, relays: g } = i;
      let m = s, b, E = !1;
      if (m && (E = this.client.core.pairing.pairings.get(m).active), !m || !E) {
        const { topic: y, uri: l } = await this.client.core.pairing.create();
        m = y, b = l;
      }
      const S = await this.client.core.crypto.generateKeyPair(), D = yt({ requiredNamespaces: o, optionalNamespaces: p, relays: g ?? [{ protocol: fo }], proposer: { publicKey: S, metadata: this.client.metadata } }, h && { sessionProperties: h }), { reject: _, resolve: A, done: R } = Wt(Z.FIVE_MINUTES, wo);
      if (this.events.once(Fe("session_connect"), async ({ error: y, session: l }) => {
        if (y)
          _(y);
        else if (l) {
          l.self.publicKey = S;
          const d = Ai(yt({}, l), { requiredNamespaces: l.requiredNamespaces, optionalNamespaces: l.optionalNamespaces });
          await this.client.session.set(l.topic, d), await this.setExpiry(l.topic, l.expiry), m && await this.client.core.pairing.updateMetadata({ topic: m, metadata: l.peer.metadata }), A(d);
        }
      }), !m) {
        const { message: y } = V("NO_MATCHING_KEY", `connect() pairing topic: ${m}`);
        throw new Error(y);
      }
      const M = await this.sendRequest(m, "wc_sessionPropose", D), c = xt(Z.FIVE_MINUTES);
      return await this.setProposal(M, yt({ id: M, expiry: c }, D)), { uri: b, approval: R };
    }, this.pair = async (t) => (this.isInitialized(), await this.client.core.pairing.pair(t)), this.approve = async (t) => {
      this.isInitialized(), await this.isValidApprove(t);
      const { id: i, relayProtocol: s, namespaces: o, sessionProperties: p } = t, h = this.client.proposal.get(i);
      let { pairingTopic: g, proposer: m, requiredNamespaces: b, optionalNamespaces: E } = h;
      g = g || "", vr(b) || (b = Mf(o, "approve()"));
      const S = await this.client.core.crypto.generateKeyPair(), D = m.publicKey, _ = await this.client.core.crypto.generateSharedKey(S, D);
      g && i && (await this.client.core.pairing.updateMetadata({ topic: g, metadata: m.metadata }), await this.sendResult(i, g, { relay: { protocol: s ?? "irn" }, responderPublicKey: S }), await this.client.proposal.delete(i, Qe("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: g }));
      const A = yt({ relay: { protocol: s ?? "irn" }, namespaces: o, requiredNamespaces: b, optionalNamespaces: E, pairingTopic: g, controller: { publicKey: S, metadata: this.client.metadata }, expiry: xt(zr) }, p && { sessionProperties: p });
      await this.client.core.relayer.subscribe(_);
      const R = await this.sendRequest(_, "wc_sessionSettle", A), { done: M, resolve: c, reject: y } = Wt();
      this.events.once(Fe("session_approve", R), ({ error: d }) => {
        d ? y(d) : c(this.client.session.get(_));
      });
      const l = Ai(yt({}, A), { topic: _, pairingTopic: g, acknowledged: !1, self: A.controller, peer: { publicKey: m.publicKey, metadata: m.metadata }, controller: S });
      return await this.client.session.set(_, l), await this.setExpiry(_, xt(zr)), { topic: _, acknowledged: M };
    }, this.reject = async (t) => {
      this.isInitialized(), await this.isValidReject(t);
      const { id: i, reason: s } = t, { pairingTopic: o } = this.client.proposal.get(i);
      o && (await this.sendError(i, o, s), await this.client.proposal.delete(i, Qe("USER_DISCONNECTED")));
    }, this.update = async (t) => {
      this.isInitialized(), await this.isValidUpdate(t);
      const { topic: i, namespaces: s } = t, o = await this.sendRequest(i, "wc_sessionUpdate", { namespaces: s }), { done: p, resolve: h, reject: g } = Wt();
      return this.events.once(Fe("session_update", o), ({ error: m }) => {
        m ? g(m) : h();
      }), await this.client.session.update(i, { namespaces: s }), { acknowledged: p };
    }, this.extend = async (t) => {
      this.isInitialized(), await this.isValidExtend(t);
      const { topic: i } = t, s = await this.sendRequest(i, "wc_sessionExtend", {}), { done: o, resolve: p, reject: h } = Wt();
      return this.events.once(Fe("session_extend", s), ({ error: g }) => {
        g ? h(g) : p();
      }), await this.setExpiry(i, xt(zr)), { acknowledged: o };
    }, this.request = async (t) => {
      this.isInitialized(), await this.isValidRequest(t);
      const { chainId: i, request: s, topic: o, expiry: p } = t, h = await this.sendRequest(o, "wc_sessionRequest", { request: s, chainId: i }, p), { done: g, resolve: m, reject: b } = Wt(p);
      return this.events.once(Fe("session_request", h), ({ error: E, result: S }) => {
        E ? b(E) : m(S);
      }), this.client.events.emit("session_request_sent", { topic: o, request: s, chainId: i, id: h }), await g();
    }, this.respond = async (t) => {
      this.isInitialized(), await this.isValidRespond(t);
      const { topic: i, response: s } = t, { id: o } = s;
      $t(s) ? await this.sendResult(o, i, s.result) : Ot(s) && await this.sendError(o, i, s.error), this.deletePendingSessionRequest(t.response.id, { message: "fulfilled", code: 0 });
    }, this.ping = async (t) => {
      this.isInitialized(), await this.isValidPing(t);
      const { topic: i } = t;
      if (this.client.session.keys.includes(i)) {
        const s = await this.sendRequest(i, "wc_sessionPing", {}), { done: o, resolve: p, reject: h } = Wt();
        this.events.once(Fe("session_ping", s), ({ error: g }) => {
          g ? h(g) : p();
        }), await o();
      } else
        this.client.core.pairing.pairings.keys.includes(i) && await this.client.core.pairing.ping({ topic: i });
    }, this.emit = async (t) => {
      this.isInitialized(), await this.isValidEmit(t);
      const { topic: i, event: s, chainId: o } = t;
      await this.sendRequest(i, "wc_sessionEvent", { event: s, chainId: o });
    }, this.disconnect = async (t) => {
      this.isInitialized(), await this.isValidDisconnect(t);
      const { topic: i } = t;
      this.client.session.keys.includes(i) ? (await this.sendRequest(i, "wc_sessionDelete", Qe("USER_DISCONNECTED")), await this.deleteSession(i)) : await this.client.core.pairing.disconnect({ topic: i });
    }, this.find = (t) => (this.isInitialized(), this.client.session.getAll().filter((i) => qf(i, t))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.deleteSession = async (t, i) => {
      const { self: s } = this.client.session.get(t);
      await this.client.core.relayer.unsubscribe(t), await Promise.all([this.client.session.delete(t, Qe("USER_DISCONNECTED")), this.client.core.crypto.deleteKeyPair(s.publicKey), this.client.core.crypto.deleteSymKey(t), i ? Promise.resolve() : this.client.core.expirer.del(t)]);
    }, this.deleteProposal = async (t, i) => {
      await Promise.all([this.client.proposal.delete(t, Qe("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(t)]);
    }, this.deletePendingSessionRequest = async (t, i, s = !1) => {
      await Promise.all([this.client.pendingRequest.delete(t, i), s ? Promise.resolve() : this.client.core.expirer.del(t)]);
    }, this.setExpiry = async (t, i) => {
      this.client.session.keys.includes(t) && await this.client.session.update(t, { expiry: i }), this.client.core.expirer.set(t, i);
    }, this.setProposal = async (t, i) => {
      await this.client.proposal.set(t, i), this.client.core.expirer.set(t, i.expiry);
    }, this.setPendingSessionRequest = async (t) => {
      const i = wr.wc_sessionRequest.req.ttl, { id: s, topic: o, params: p } = t;
      await this.client.pendingRequest.set(s, { id: s, topic: o, params: p }), i && this.client.core.expirer.set(s, xt(i));
    }, this.sendRequest = async (t, i, s, o) => {
      const p = ii(i, s), h = await this.client.core.crypto.encode(t, p), g = wr[i].req;
      return o && (g.ttl = o), this.client.core.history.set(t, p), this.client.core.relayer.publish(t, h, g), p.id;
    }, this.sendResult = async (t, i, s) => {
      const o = os(t, s), p = await this.client.core.crypto.encode(i, o), h = await this.client.core.history.get(i, t), g = wr[h.request.method].res;
      this.client.core.relayer.publish(i, p, g), await this.client.core.history.resolve(o);
    }, this.sendError = async (t, i, s) => {
      const o = ns(t, s), p = await this.client.core.crypto.encode(i, o), h = await this.client.core.history.get(i, t), g = wr[h.request.method].res;
      this.client.core.relayer.publish(i, p, g), await this.client.core.history.resolve(o);
    }, this.cleanup = async () => {
      const t = [], i = [];
      this.client.session.getAll().forEach((s) => {
        Lt(s.expiry) && t.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        Lt(s.expiry) && i.push(s.id);
      }), await Promise.all([...t.map((s) => this.deleteSession(s)), ...i.map((s) => this.deleteProposal(s))]);
    }, this.onRelayEventRequest = (t) => {
      const { topic: i, payload: s } = t, o = s.method;
      switch (o) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(i, s);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(i, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(i, s);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(i, s);
        case "wc_sessionPing":
          return this.onSessionPingRequest(i, s);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(i, s);
        case "wc_sessionRequest":
          return this.onSessionRequest(i, s);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(i, s);
        default:
          return this.client.logger.info(`Unsupported request method ${o}`);
      }
    }, this.onRelayEventResponse = async (t) => {
      const { topic: i, payload: s } = t, o = (await this.client.core.history.get(i, s.id)).request.method;
      switch (o) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(i, s);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(i, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(i, s);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(i, s);
        case "wc_sessionPing":
          return this.onSessionPingResponse(i, s);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(i, s);
        default:
          return this.client.logger.info(`Unsupported response method ${o}`);
      }
    }, this.onSessionProposeRequest = async (t, i) => {
      const { params: s, id: o } = i;
      try {
        this.isValidConnect(yt({}, i.params));
        const p = xt(Z.FIVE_MINUTES), h = yt({ id: o, pairingTopic: t, expiry: p }, s);
        await this.setProposal(o, h), this.client.events.emit("session_proposal", { id: o, params: h });
      } catch (p) {
        await this.sendError(o, t, p), this.client.logger.error(p);
      }
    }, this.onSessionProposeResponse = async (t, i) => {
      const { id: s } = i;
      if ($t(i)) {
        const { result: o } = i;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: o });
        const p = this.client.proposal.get(s);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: p });
        const h = p.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: h });
        const g = o.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: g });
        const m = await this.client.core.crypto.generateSharedKey(h, g);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: m });
        const b = await this.client.core.relayer.subscribe(m);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: b }), await this.client.core.pairing.activate({ topic: t });
      } else
        Ot(i) && (await this.client.proposal.delete(s, Qe("USER_DISCONNECTED")), this.events.emit(Fe("session_connect"), { error: i.error }));
    }, this.onSessionSettleRequest = async (t, i) => {
      const { id: s, params: o } = i;
      try {
        this.isValidSessionSettleRequest(o);
        const { relay: p, controller: h, expiry: g, namespaces: m, requiredNamespaces: b, optionalNamespaces: E, sessionProperties: S, pairingTopic: D } = i.params, _ = yt({ topic: t, relay: p, expiry: g, namespaces: m, acknowledged: !0, pairingTopic: D, requiredNamespaces: b, optionalNamespaces: E, controller: h.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: h.publicKey, metadata: h.metadata } }, S && { sessionProperties: S });
        await this.sendResult(i.id, t, !0), this.events.emit(Fe("session_connect"), { session: _ });
      } catch (p) {
        await this.sendError(s, t, p), this.client.logger.error(p);
      }
    }, this.onSessionSettleResponse = async (t, i) => {
      const { id: s } = i;
      $t(i) ? (await this.client.session.update(t, { acknowledged: !0 }), this.events.emit(Fe("session_approve", s), {})) : Ot(i) && (await this.client.session.delete(t, Qe("USER_DISCONNECTED")), this.events.emit(Fe("session_approve", s), { error: i.error }));
    }, this.onSessionUpdateRequest = async (t, i) => {
      const { params: s, id: o } = i;
      try {
        this.isValidUpdate(yt({ topic: t }, s)), await this.client.session.update(t, { namespaces: s.namespaces }), await this.sendResult(o, t, !0), this.client.events.emit("session_update", { id: o, topic: t, params: s });
      } catch (p) {
        await this.sendError(o, t, p), this.client.logger.error(p);
      }
    }, this.onSessionUpdateResponse = (t, i) => {
      const { id: s } = i;
      $t(i) ? this.events.emit(Fe("session_update", s), {}) : Ot(i) && this.events.emit(Fe("session_update", s), { error: i.error });
    }, this.onSessionExtendRequest = async (t, i) => {
      const { id: s } = i;
      try {
        this.isValidExtend({ topic: t }), await this.setExpiry(t, xt(zr)), await this.sendResult(s, t, !0), this.client.events.emit("session_extend", { id: s, topic: t });
      } catch (o) {
        await this.sendError(s, t, o), this.client.logger.error(o);
      }
    }, this.onSessionExtendResponse = (t, i) => {
      const { id: s } = i;
      $t(i) ? this.events.emit(Fe("session_extend", s), {}) : Ot(i) && this.events.emit(Fe("session_extend", s), { error: i.error });
    }, this.onSessionPingRequest = async (t, i) => {
      const { id: s } = i;
      try {
        this.isValidPing({ topic: t }), await this.sendResult(s, t, !0), this.client.events.emit("session_ping", { id: s, topic: t });
      } catch (o) {
        await this.sendError(s, t, o), this.client.logger.error(o);
      }
    }, this.onSessionPingResponse = (t, i) => {
      const { id: s } = i;
      setTimeout(() => {
        $t(i) ? this.events.emit(Fe("session_ping", s), {}) : Ot(i) && this.events.emit(Fe("session_ping", s), { error: i.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (t, i) => {
      const { id: s } = i;
      try {
        this.isValidDisconnect({ topic: t, reason: i.params }), this.client.core.relayer.once(Xe.publish, async () => {
          await this.deleteSession(t);
        }), await this.sendResult(s, t, !0), this.client.events.emit("session_delete", { id: s, topic: t });
      } catch (o) {
        await this.sendError(s, t, o), this.client.logger.error(o);
      }
    }, this.onSessionRequest = async (t, i) => {
      const { id: s, params: o } = i;
      try {
        this.isValidRequest(yt({ topic: t }, o)), await this.setPendingSessionRequest({ id: s, topic: t, params: o }), this.client.events.emit("session_request", { id: s, topic: t, params: o });
      } catch (p) {
        await this.sendError(s, t, p), this.client.logger.error(p);
      }
    }, this.onSessionRequestResponse = (t, i) => {
      const { id: s } = i;
      $t(i) ? this.events.emit(Fe("session_request", s), { result: i.result }) : Ot(i) && this.events.emit(Fe("session_request", s), { error: i.error });
    }, this.onSessionEventRequest = async (t, i) => {
      const { id: s, params: o } = i;
      try {
        this.isValidEmit(yt({ topic: t }, o)), this.client.events.emit("session_event", { id: s, topic: t, params: o });
      } catch (p) {
        await this.sendError(s, t, p), this.client.logger.error(p);
      }
    }, this.isValidConnect = async (t) => {
      if (!ut(t)) {
        const { message: g } = V("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
        throw new Error(g);
      }
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: o, sessionProperties: p, relays: h } = t;
      if (at(i) || await this.isValidPairingTopic(i), !Zf(h, !0)) {
        const { message: g } = V("MISSING_OR_INVALID", `connect() relays: ${h}`);
        throw new Error(g);
      }
      !at(s) && vr(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !at(o) && vr(o) !== 0 && this.validateNamespaces(o, "optionalNamespaces"), at(p) || this.validateSessionProps(p, "sessionProperties");
    }, this.validateNamespaces = (t, i) => {
      const s = Qf(t, "connect()", i);
      if (s)
        throw new Error(s.message);
    }, this.isValidApprove = async (t) => {
      if (!ut(t))
        throw new Error(V("MISSING_OR_INVALID", `approve() params: ${t}`).message);
      const { id: i, namespaces: s, relayProtocol: o, sessionProperties: p } = t;
      await this.isValidProposalId(i);
      const h = this.client.proposal.get(i), g = Wr(s, "approve()");
      if (g)
        throw new Error(g.message);
      const m = xn(h.requiredNamespaces, s, "approve()");
      if (m)
        throw new Error(m.message);
      if (!Ze(o, !0)) {
        const { message: b } = V("MISSING_OR_INVALID", `approve() relayProtocol: ${o}`);
        throw new Error(b);
      }
      at(p) || this.validateSessionProps(p, "sessionProperties");
    }, this.isValidReject = async (t) => {
      if (!ut(t)) {
        const { message: o } = V("MISSING_OR_INVALID", `reject() params: ${t}`);
        throw new Error(o);
      }
      const { id: i, reason: s } = t;
      if (await this.isValidProposalId(i), !td(s)) {
        const { message: o } = V("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
    }, this.isValidSessionSettleRequest = (t) => {
      if (!ut(t)) {
        const { message: m } = V("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
        throw new Error(m);
      }
      const { relay: i, controller: s, namespaces: o, expiry: p } = t;
      if (!eo(i)) {
        const { message: m } = V("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(m);
      }
      const h = Gf(s, "onSessionSettleRequest()");
      if (h)
        throw new Error(h.message);
      const g = Wr(o, "onSessionSettleRequest()");
      if (g)
        throw new Error(g.message);
      if (Lt(p)) {
        const { message: m } = V("EXPIRED", "onSessionSettleRequest()");
        throw new Error(m);
      }
    }, this.isValidUpdate = async (t) => {
      if (!ut(t)) {
        const { message: g } = V("MISSING_OR_INVALID", `update() params: ${t}`);
        throw new Error(g);
      }
      const { topic: i, namespaces: s } = t;
      await this.isValidSessionTopic(i);
      const o = this.client.session.get(i), p = Wr(s, "update()");
      if (p)
        throw new Error(p.message);
      const h = xn(o.requiredNamespaces, s, "update()");
      if (h)
        throw new Error(h.message);
    }, this.isValidExtend = async (t) => {
      if (!ut(t)) {
        const { message: s } = V("MISSING_OR_INVALID", `extend() params: ${t}`);
        throw new Error(s);
      }
      const { topic: i } = t;
      await this.isValidSessionTopic(i);
    }, this.isValidRequest = async (t) => {
      if (!ut(t)) {
        const { message: g } = V("MISSING_OR_INVALID", `request() params: ${t}`);
        throw new Error(g);
      }
      const { topic: i, request: s, chainId: o, expiry: p } = t;
      await this.isValidSessionTopic(i);
      const { namespaces: h } = this.client.session.get(i);
      if (!On(h, o)) {
        const { message: g } = V("MISSING_OR_INVALID", `request() chainId: ${o}`);
        throw new Error(g);
      }
      if (!rd(s)) {
        const { message: g } = V("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(g);
      }
      if (!nd(h, o, s.method)) {
        const { message: g } = V("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(g);
      }
      if (p && !hd(p, Ni)) {
        const { message: g } = V("MISSING_OR_INVALID", `request() expiry: ${p}. Expiry must be a number (in seconds) between ${Ni.min} and ${Ni.max}`);
        throw new Error(g);
      }
    }, this.isValidRespond = async (t) => {
      if (!ut(t)) {
        const { message: o } = V("MISSING_OR_INVALID", `respond() params: ${t}`);
        throw new Error(o);
      }
      const { topic: i, response: s } = t;
      if (await this.isValidSessionTopic(i), !id(s)) {
        const { message: o } = V("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
    }, this.isValidPing = async (t) => {
      if (!ut(t)) {
        const { message: s } = V("MISSING_OR_INVALID", `ping() params: ${t}`);
        throw new Error(s);
      }
      const { topic: i } = t;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidEmit = async (t) => {
      if (!ut(t)) {
        const { message: h } = V("MISSING_OR_INVALID", `emit() params: ${t}`);
        throw new Error(h);
      }
      const { topic: i, event: s, chainId: o } = t;
      await this.isValidSessionTopic(i);
      const { namespaces: p } = this.client.session.get(i);
      if (!On(p, o)) {
        const { message: h } = V("MISSING_OR_INVALID", `emit() chainId: ${o}`);
        throw new Error(h);
      }
      if (!sd(s)) {
        const { message: h } = V("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(h);
      }
      if (!ad(p, o, s.name)) {
        const { message: h } = V("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(h);
      }
    }, this.isValidDisconnect = async (t) => {
      if (!ut(t)) {
        const { message: s } = V("MISSING_OR_INVALID", `disconnect() params: ${t}`);
        throw new Error(s);
      }
      const { topic: i } = t;
      await this.isValidSessionOrPairingTopic(i);
    }, this.validateSessionProps = (t, i) => {
      Object.values(t).forEach((s) => {
        if (!Ze(s, !1)) {
          const { message: o } = V("MISSING_OR_INVALID", `${i} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
          throw new Error(o);
        }
      });
    };
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = V("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Xe.message, async (e) => {
      const { topic: t, message: i } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(i)))
        return;
      const s = await this.client.core.crypto.decode(t, i);
      as(s) ? (this.client.core.history.set(t, s), this.onRelayEventRequest({ topic: t, payload: s })) : ss(s) && (await this.client.core.history.resolve(s), this.onRelayEventResponse({ topic: t, payload: s }));
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(bt.expired, async (e) => {
      const { topic: t, id: i } = Qa(e.target);
      if (i && this.client.pendingRequest.keys.includes(i))
        return await this.deletePendingSessionRequest(i, V("EXPIRED"), !0);
      t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", { topic: t })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  isValidPairingTopic(e) {
    if (!Ze(e, !1)) {
      const { message: t } = V("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: t } = V("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (Lt(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: t } = V("EXPIRED", `pairing topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(e) {
    if (!Ze(e, !1)) {
      const { message: t } = V("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(t);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: t } = V("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (Lt(this.client.session.get(e).expiry)) {
      await this.deleteSession(e);
      const { message: t } = V("EXPIRED", `session topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Ze(e, !1)) {
      const { message: t } = V("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(t);
    } else {
      const { message: t } = V("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(t);
    }
  }
  async isValidProposalId(e) {
    if (!ed(e)) {
      const { message: t } = V("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: t } = V("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(t);
    }
    if (Lt(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: t } = V("EXPIRED", `proposal id: ${e}`);
      throw new Error(t);
    }
  }
}
class Wg extends di {
  constructor(e, t) {
    super(e, t, Mg, Ds), this.core = e, this.logger = t;
  }
}
class Yg extends di {
  constructor(e, t) {
    super(e, t, jg, Ds), this.core = e, this.logger = t;
  }
}
class Jg extends di {
  constructor(e, t) {
    super(e, t, qg, Ds, (i) => i.id), this.core = e, this.logger = t;
  }
}
let Xg = class Eo extends Ql {
  constructor(e) {
    super(e), this.protocol = mo, this.version = yo, this.name = Ci.name, this.events = new wt.EventEmitter(), this.on = (i, s) => this.events.on(i, s), this.once = (i, s) => this.events.once(i, s), this.off = (i, s) => this.events.off(i, s), this.removeListener = (i, s) => this.events.removeListener(i, s), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
      try {
        return await this.engine.connect(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.pair = async (i) => {
      try {
        return await this.engine.pair(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.approve = async (i) => {
      try {
        return await this.engine.approve(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.reject = async (i) => {
      try {
        return await this.engine.reject(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.update = async (i) => {
      try {
        return await this.engine.update(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.extend = async (i) => {
      try {
        return await this.engine.extend(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.request = async (i) => {
      try {
        return await this.engine.request(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.respond = async (i) => {
      try {
        return await this.engine.respond(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.ping = async (i) => {
      try {
        return await this.engine.ping(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.emit = async (i) => {
      try {
        return await this.engine.emit(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.disconnect = async (i) => {
      try {
        return await this.engine.disconnect(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.find = (i) => {
      try {
        return this.engine.find(i);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.name = (e == null ? void 0 : e.name) || Ci.name, this.metadata = (e == null ? void 0 : e.metadata) || wf();
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : li(Se.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Ci.logger }));
    this.core = (e == null ? void 0 : e.core) || new Lg(e), this.logger = Se.generateChildLogger(t, this.name), this.session = new Yg(this.core, this.logger), this.proposal = new Wg(this.core, this.logger), this.pendingRequest = new Jg(this.core, this.logger), this.engine = new kg(this);
  }
  static async init(e) {
    const t = new Eo(e);
    return await t.initialize(), t;
  }
  get context() {
    return Se.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success");
    } catch (e) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
    }
  }
};
var Qg = {};
(function(r) {
  const e = rs, t = is, i = ts, s = ys, o = (c) => c == null, p = Symbol("encodeFragmentIdentifier");
  function h(c) {
    switch (c.arrayFormat) {
      case "index":
        return (y) => (l, d) => {
          const u = l.length;
          return d === void 0 || c.skipNull && d === null || c.skipEmptyString && d === "" ? l : d === null ? [...l, [b(y, c), "[", u, "]"].join("")] : [
            ...l,
            [b(y, c), "[", b(u, c), "]=", b(d, c)].join("")
          ];
        };
      case "bracket":
        return (y) => (l, d) => d === void 0 || c.skipNull && d === null || c.skipEmptyString && d === "" ? l : d === null ? [...l, [b(y, c), "[]"].join("")] : [...l, [b(y, c), "[]=", b(d, c)].join("")];
      case "colon-list-separator":
        return (y) => (l, d) => d === void 0 || c.skipNull && d === null || c.skipEmptyString && d === "" ? l : d === null ? [...l, [b(y, c), ":list="].join("")] : [...l, [b(y, c), ":list=", b(d, c)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const y = c.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (l) => (d, u) => u === void 0 || c.skipNull && u === null || c.skipEmptyString && u === "" ? d : (u = u === null ? "" : u, d.length === 0 ? [[b(l, c), y, b(u, c)].join("")] : [[d, b(u, c)].join(c.arrayFormatSeparator)]);
      }
      default:
        return (y) => (l, d) => d === void 0 || c.skipNull && d === null || c.skipEmptyString && d === "" ? l : d === null ? [...l, b(y, c)] : [...l, [b(y, c), "=", b(d, c)].join("")];
    }
  }
  function g(c) {
    let y;
    switch (c.arrayFormat) {
      case "index":
        return (l, d, u) => {
          if (y = /\[(\d*)\]$/.exec(l), l = l.replace(/\[\d*\]$/, ""), !y) {
            u[l] = d;
            return;
          }
          u[l] === void 0 && (u[l] = {}), u[l][y[1]] = d;
        };
      case "bracket":
        return (l, d, u) => {
          if (y = /(\[\])$/.exec(l), l = l.replace(/\[\]$/, ""), !y) {
            u[l] = d;
            return;
          }
          if (u[l] === void 0) {
            u[l] = [d];
            return;
          }
          u[l] = [].concat(u[l], d);
        };
      case "colon-list-separator":
        return (l, d, u) => {
          if (y = /(:list)$/.exec(l), l = l.replace(/:list$/, ""), !y) {
            u[l] = d;
            return;
          }
          if (u[l] === void 0) {
            u[l] = [d];
            return;
          }
          u[l] = [].concat(u[l], d);
        };
      case "comma":
      case "separator":
        return (l, d, u) => {
          const n = typeof d == "string" && d.includes(c.arrayFormatSeparator), f = typeof d == "string" && !n && E(d, c).includes(c.arrayFormatSeparator);
          d = f ? E(d, c) : d;
          const T = n || f ? d.split(c.arrayFormatSeparator).map((U) => E(U, c)) : d === null ? d : E(d, c);
          u[l] = T;
        };
      case "bracket-separator":
        return (l, d, u) => {
          const n = /(\[\])$/.test(l);
          if (l = l.replace(/\[\]$/, ""), !n) {
            u[l] = d && E(d, c);
            return;
          }
          const f = d === null ? [] : d.split(c.arrayFormatSeparator).map((T) => E(T, c));
          if (u[l] === void 0) {
            u[l] = f;
            return;
          }
          u[l] = [].concat(u[l], f);
        };
      default:
        return (l, d, u) => {
          if (u[l] === void 0) {
            u[l] = d;
            return;
          }
          u[l] = [].concat(u[l], d);
        };
    }
  }
  function m(c) {
    if (typeof c != "string" || c.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function b(c, y) {
    return y.encode ? y.strict ? e(c) : encodeURIComponent(c) : c;
  }
  function E(c, y) {
    return y.decode ? t(c) : c;
  }
  function S(c) {
    return Array.isArray(c) ? c.sort() : typeof c == "object" ? S(Object.keys(c)).sort((y, l) => Number(y) - Number(l)).map((y) => c[y]) : c;
  }
  function D(c) {
    const y = c.indexOf("#");
    return y !== -1 && (c = c.slice(0, y)), c;
  }
  function _(c) {
    let y = "";
    const l = c.indexOf("#");
    return l !== -1 && (y = c.slice(l)), y;
  }
  function A(c) {
    c = D(c);
    const y = c.indexOf("?");
    return y === -1 ? "" : c.slice(y + 1);
  }
  function R(c, y) {
    return y.parseNumbers && !Number.isNaN(Number(c)) && typeof c == "string" && c.trim() !== "" ? c = Number(c) : y.parseBooleans && c !== null && (c.toLowerCase() === "true" || c.toLowerCase() === "false") && (c = c.toLowerCase() === "true"), c;
  }
  function M(c, y) {
    y = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, y), m(y.arrayFormatSeparator);
    const l = g(y), d = /* @__PURE__ */ Object.create(null);
    if (typeof c != "string" || (c = c.trim().replace(/^[?#&]/, ""), !c))
      return d;
    for (const u of c.split("&")) {
      if (u === "")
        continue;
      let [n, f] = i(y.decode ? u.replace(/\+/g, " ") : u, "=");
      f = f === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(y.arrayFormat) ? f : E(f, y), l(E(n, y), f, d);
    }
    for (const u of Object.keys(d)) {
      const n = d[u];
      if (typeof n == "object" && n !== null)
        for (const f of Object.keys(n))
          n[f] = R(n[f], y);
      else
        d[u] = R(n, y);
    }
    return y.sort === !1 ? d : (y.sort === !0 ? Object.keys(d).sort() : Object.keys(d).sort(y.sort)).reduce((u, n) => {
      const f = d[n];
      return f && typeof f == "object" && !Array.isArray(f) ? u[n] = S(f) : u[n] = f, u;
    }, /* @__PURE__ */ Object.create(null));
  }
  r.extract = A, r.parse = M, r.stringify = (c, y) => {
    if (!c)
      return "";
    y = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, y), m(y.arrayFormatSeparator);
    const l = (f) => y.skipNull && o(c[f]) || y.skipEmptyString && c[f] === "", d = h(y), u = {};
    for (const f of Object.keys(c))
      l(f) || (u[f] = c[f]);
    const n = Object.keys(u);
    return y.sort !== !1 && n.sort(y.sort), n.map((f) => {
      const T = c[f];
      return T === void 0 ? "" : T === null ? b(f, y) : Array.isArray(T) ? T.length === 0 && y.arrayFormat === "bracket-separator" ? b(f, y) + "[]" : T.reduce(d(f), []).join("&") : b(f, y) + "=" + b(T, y);
    }).filter((f) => f.length > 0).join("&");
  }, r.parseUrl = (c, y) => {
    y = Object.assign({
      decode: !0
    }, y);
    const [l, d] = i(c, "#");
    return Object.assign(
      {
        url: l.split("?")[0] || "",
        query: M(A(c), y)
      },
      y && y.parseFragmentIdentifier && d ? { fragmentIdentifier: E(d, y) } : {}
    );
  }, r.stringifyUrl = (c, y) => {
    y = Object.assign({
      encode: !0,
      strict: !0,
      [p]: !0
    }, y);
    const l = D(c.url).split("?")[0] || "", d = r.extract(c.url), u = r.parse(d, { sort: !1 }), n = Object.assign(u, c.query);
    let f = r.stringify(n, y);
    f && (f = `?${f}`);
    let T = _(c.url);
    return c.fragmentIdentifier && (T = `#${y[p] ? b(c.fragmentIdentifier, y) : c.fragmentIdentifier}`), `${l}${f}${T}`;
  }, r.pick = (c, y, l) => {
    l = Object.assign({
      parseFragmentIdentifier: !0,
      [p]: !1
    }, l);
    const { url: d, query: u, fragmentIdentifier: n } = r.parseUrl(c, l);
    return r.stringifyUrl({
      url: d,
      query: s(u, y),
      fragmentIdentifier: n
    }, l);
  }, r.exclude = (c, y, l) => {
    const d = Array.isArray(y) ? (u) => !y.includes(u) : (u, n) => !y(u, n);
    return r.pick(c, d, l);
  };
})(Qg);
const Zg = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function Yn(r, e) {
  const { message: t, code: i } = Zg[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function e0(r, e) {
  return Array.isArray(r) ? typeof e < "u" && r.length ? r.every(e) : !0 : !1;
}
function t0(r) {
  return Object.getPrototypeOf(r) === Object.prototype && Object.keys(r).length;
}
const Jn = "error", r0 = "wss://relay.walletconnect.com", i0 = "wc", s0 = "universal_provider", Xn = `${i0}@2:${s0}:`, n0 = "https://rpc.walletconnect.com/v1", er = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var a0 = Object.defineProperty, Qn = Object.getOwnPropertySymbols, o0 = Object.prototype.hasOwnProperty, c0 = Object.prototype.propertyIsEnumerable, Zn = (r, e, t) => e in r ? a0(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Yi = (r, e) => {
  for (var t in e || (e = {}))
    o0.call(e, t) && Zn(r, t, e[t]);
  if (Qn)
    for (var t of Qn(e))
      c0.call(e, t) && Zn(r, t, e[t]);
  return r;
};
function Ct(r, e, t) {
  let i;
  const s = Ji(r);
  return e.rpcMap && (i = e.rpcMap[s]), i || (i = `${n0}?chainId=eip155:${s}&projectId=${t}`), i;
}
function Ji(r) {
  return r.includes("eip155") ? Number(r.split(":")[1]) : Number(r);
}
function h0(r, e) {
  if (!e.includes(r))
    throw new Error(`Chain '${r}' not approved. Please use one of the following: ${e.toString()}`);
}
function u0(r) {
  return r.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function l0(r, e) {
  const t = Object.keys(e.namespaces).filter((s) => s.includes(r));
  if (!t.length)
    return [];
  const i = [];
  return t.forEach((s) => {
    const o = e.namespaces[s].accounts;
    i.push(...o);
  }), i;
}
function f0(r, e = {}) {
  const t = ea(r), i = ea(e);
  return Yi({}, Object.assign(t, i));
}
function ea(r) {
  var e, t, i, s;
  const o = {};
  if (!t0(r))
    return o;
  for (const [p, h] of Object.entries(r)) {
    const g = vo(p) ? [p] : h.chains, m = h.methods || [], b = h.events || [], E = _o(p);
    o[E] = { chains: Pi(g, (e = o[E]) == null ? void 0 : e.chains), methods: Pi(m, (t = o[E]) == null ? void 0 : t.methods), events: Pi(b, (i = o[E]) == null ? void 0 : i.events), rpcMap: Yi(Yi({}, (s = o[E]) == null ? void 0 : s.rpcMap), h.rpcMap) };
  }
  return o;
}
function vo(r) {
  return r.includes(":");
}
function _o(r) {
  return vo(r) ? r.split(":")[0] : r;
}
function Pi(r = [], e = []) {
  return [.../* @__PURE__ */ new Set([...r, ...e])];
}
const hr = (r, e) => {
  const t = (i) => {
    i.request !== e.request || i.topic !== e.topic || (r.events.removeListener("session_request_sent", t), d0(e));
  };
  r.on("session_request_sent", t);
};
function d0(r) {
  if (typeof window < "u")
    try {
      const e = window.localStorage.getItem("WALLETCONNECT_DEEPLINK_CHOICE");
      if (e) {
        const t = JSON.parse(e), i = t == null ? void 0 : t.href;
        if (typeof i == "string") {
          i.endsWith("/") && i.slice(0, -1);
          const s = `${i}/wc?requestId=${r.id}&sessionTopic=${r.topic}`;
          window.open(s, "_self", "noreferrer noopener");
        }
      }
    } catch (e) {
      console.error(e);
    }
}
class p0 {
  constructor(e) {
    this.name = "eip155", this.namespace = e.namespace, this.client = e.client, this.events = e.events, this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(e) {
    var t;
    switch (e.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return this.handleSwitchChain(e.request.params ? (t = e.request.params[0]) == null ? void 0 : t.chainId : "0x0"), null;
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(e.request.method) ? (hr(this.client, e), await this.client.request(e)) : this.getHttpProvider().request(e.request);
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  setDefaultChain(e, t) {
    const i = Ji(e);
    if (!this.httpProviders[i]) {
      const s = t || Ct(`${this.name}:${i}`, this.namespace, this.client.core.projectId);
      if (!s)
        throw new Error(`No RPC url provided for chainId: ${i}`);
      this.setHttpProvider(i, s);
    }
    this.chainId = i, this.events.emit(er.DEFAULT_CHAIN_CHANGED, `${this.name}:${i}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId.toString();
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  createHttpProvider(e, t) {
    const i = t || Ct(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    return typeof i > "u" ? void 0 : new sr(new nr(i));
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      const s = Ji(t);
      e[s] = this.createHttpProvider(s, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const e = this.chainId, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  handleSwitchChain(e) {
    const t = parseInt(e, 16), i = `${this.name}:${t}`;
    h0(i, this.namespace.chains), this.setDefaultChain(`${t}`);
  }
}
class g0 {
  constructor(e) {
    this.name = "solana", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? (hr(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (!this.httpProviders[e]) {
      const i = t || Ct(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!i)
        throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    this.chainId = e, this.events.emit(er.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      e[t] = this.createHttpProvider(t, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || Ct(e, this.namespace, this.client.core.projectId);
    return typeof i > "u" ? void 0 : new sr(new nr(i));
  }
}
class m0 {
  constructor(e) {
    this.name = "cosmos", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? (hr(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (this.chainId = e, !this.httpProviders[e]) {
      const i = t || Ct(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!i)
        throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    this.events.emit(er.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      e[t] = this.createHttpProvider(t, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || Ct(e, this.namespace, this.client.core.projectId);
    return typeof i > "u" ? void 0 : new sr(new nr(i));
  }
}
class y0 {
  constructor(e) {
    this.name = "cip34", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? (hr(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (this.chainId = e, !this.httpProviders[e]) {
      const i = t || this.getCardanoRPCUrl(e);
      if (!i)
        throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    this.events.emit(er.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      const i = this.getCardanoRPCUrl(t);
      e[t] = this.createHttpProvider(t, i);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  getCardanoRPCUrl(e) {
    const t = this.namespace.rpcMap;
    if (t)
      return t[e];
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || this.getCardanoRPCUrl(e);
    return typeof i > "u" ? void 0 : new sr(new nr(i));
  }
}
class b0 {
  constructor(e) {
    this.name = "elrond", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? (hr(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (!this.httpProviders[e]) {
      const i = t || Ct(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!i)
        throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    this.chainId = e, this.events.emit(er.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      e[t] = this.createHttpProvider(t, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || Ct(e, this.namespace, this.client.core.projectId);
    return typeof i > "u" ? void 0 : new sr(new nr(i));
  }
}
class w0 {
  constructor(e) {
    this.name = "multiversx", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method) ? (hr(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (!this.httpProviders[e]) {
      const i = t || Ct(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!i)
        throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    this.chainId = e, this.events.emit(er.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e)
      throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const e = {};
    return this.namespace.chains.forEach((t) => {
      var i;
      e[t] = this.createHttpProvider(t, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
    }), e;
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
    if (typeof t > "u")
      throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || Ct(e, this.namespace, this.client.core.projectId);
    return typeof i > "u" ? void 0 : new sr(new nr(i));
  }
}
var E0 = Object.defineProperty, v0 = Object.defineProperties, _0 = Object.getOwnPropertyDescriptors, ta = Object.getOwnPropertySymbols, D0 = Object.prototype.hasOwnProperty, S0 = Object.prototype.propertyIsEnumerable, ra = (r, e, t) => e in r ? E0(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Kr = (r, e) => {
  for (var t in e || (e = {}))
    D0.call(e, t) && ra(r, t, e[t]);
  if (ta)
    for (var t of ta(e))
      S0.call(e, t) && ra(r, t, e[t]);
  return r;
}, Ti = (r, e) => v0(r, _0(e));
let I0 = class Do {
  constructor(e) {
    this.events = new hs(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.providerOpts = e, this.logger = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : li(Se.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Jn }));
  }
  static async init(e) {
    const t = new Do(e);
    return await t.initialize(), t;
  }
  async request(e, t) {
    const [i, s] = this.validateChain(t);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(i).request({ request: Kr({}, e), chainId: `${i}:${s}`, topic: this.session.topic });
  }
  sendAsync(e, t, i) {
    this.request(e, i).then((s) => t(null, s)).catch((s) => t(s, void 0));
  }
  async enable() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var e;
    if (!this.session)
      throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (e = this.session) == null ? void 0 : e.topic, reason: Yn("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(e) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing)
      return await this.pair(e.pairingTopic);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(e) {
    this.shouldAbortPairingAttempt = !1;
    let t = 0;
    do {
      if (this.shouldAbortPairingAttempt)
        throw new Error("Pairing aborted");
      if (t >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: i, approval: s } = await this.client.connect({ pairingTopic: e, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      i && (this.uri = i, this.events.emit("display_uri", i)), await s().then((o) => {
        this.session = o;
      }).catch((o) => {
        if (o.message !== wo)
          throw o;
        t++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(e, t) {
    try {
      const [i, s] = this.validateChain(e);
      this.getProvider(i).setDefaultChain(s, t);
    } catch (i) {
      if (!/Please call connect/.test(i.message))
        throw i;
    }
  }
  async cleanupPendingPairings(e = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const t = this.client.pairing.getAll();
    if (e0(t)) {
      for (const i of t)
        e.deletePairings ? this.client.core.expirer.set(i.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
      this.logger.info(`Inactive pairings cleared: ${t.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const e = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await Xg.init({ logger: this.providerOpts.logger || Jn, relayUrl: this.providerOpts.relayUrl || r0, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error("Session not initialized. Please call connect() before enable()");
    [...new Set(Object.keys(this.session.namespaces).map((e) => _o(e)))].forEach((e) => {
      if (!this.session)
        return;
      const t = l0(e, this.session), i = u0(t), s = f0(this.namespaces, this.optionalNamespaces), o = Ti(Kr({}, s[e]), { accounts: t, chains: i });
      switch (e) {
        case "eip155":
          this.rpcProviders[e] = new p0({ client: this.client, namespace: o, events: this.events });
          break;
        case "solana":
          this.rpcProviders[e] = new g0({ client: this.client, namespace: o, events: this.events });
          break;
        case "cosmos":
          this.rpcProviders[e] = new m0({ client: this.client, namespace: o, events: this.events });
          break;
        case "polkadot":
          break;
        case "cip34":
          this.rpcProviders[e] = new y0({ client: this.client, namespace: o, events: this.events });
          break;
        case "elrond":
          this.rpcProviders[e] = new b0({ client: this.client, namespace: o, events: this.events });
          break;
        case "multiversx":
          this.rpcProviders[e] = new w0({ client: this.client, namespace: o, events: this.events });
          break;
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      this.events.emit("session_ping", e);
    }), this.client.on("session_event", (e) => {
      const { params: t } = e, { event: i } = t;
      i.name === "accountsChanged" ? this.events.emit("accountsChanged", i.data) : i.name === "chainChanged" ? this.onChainChanged(t.chainId) : this.events.emit(i.name, i.data), this.events.emit("session_event", e);
    }), this.client.on("session_update", ({ topic: e, params: t }) => {
      var i;
      const { namespaces: s } = t, o = (i = this.client) == null ? void 0 : i.session.get(e);
      this.session = Ti(Kr({}, o), { namespaces: s }), this.onSessionUpdate(), this.events.emit("session_update", { topic: e, params: t });
    }), this.client.on("session_delete", async (e) => {
      await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", Ti(Kr({}, Yn("USER_DISCONNECTED")), { data: e.topic }));
    }), this.on(er.DEFAULT_CHAIN_CHANGED, (e) => {
      this.onChainChanged(e, !0);
    });
  }
  getProvider(e) {
    if (!this.rpcProviders[e])
      throw new Error(`Provider not found: ${e}`);
    return this.rpcProviders[e];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var t;
      this.getProvider(e).updateNamespace((t = this.session) == null ? void 0 : t.namespaces[e]);
    });
  }
  setNamespaces(e) {
    const { namespaces: t, optionalNamespaces: i, sessionProperties: s } = e;
    if (!t || !Object.keys(t).length)
      throw new Error("Namespaces must be not empty");
    this.namespaces = t, this.optionalNamespaces = i, this.sessionProperties = s, this.persist("namespaces", t), this.persist("optionalNamespaces", i);
  }
  validateChain(e) {
    const [t, i] = (e == null ? void 0 : e.split(":")) || ["", ""];
    if (t && !Object.keys(this.namespaces).includes(t))
      throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
    if (t && i)
      return [t, i];
    const s = Object.keys(this.namespaces)[0], o = this.rpcProviders[s].getDefaultChain();
    return [s, o];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  onChainChanged(e, t = !1) {
    const [i, s] = this.validateChain(e);
    t || this.getProvider(i).setDefaultChain(s), this.namespaces[i].defaultChain = s, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", s);
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(e, t) {
    this.client.core.storage.setItem(`${Xn}/${e}`, t);
  }
  async getFromStore(e) {
    return await this.client.core.storage.getItem(`${Xn}/${e}`);
  }
};
const O0 = I0, x0 = "wc", C0 = "ethereum_provider", N0 = `${x0}@2:${C0}:`, A0 = "https://rpc.walletconnect.com/v1/", Xi = ["eth_sendTransaction", "personal_sign"], Q0 = ["eth_accounts", "eth_requestAccounts", "eth_call", "eth_getBalance", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"], Qi = ["chainChanged", "accountsChanged"], Z0 = ["message", "disconnect", "connect"];
var P0 = Object.defineProperty, T0 = Object.defineProperties, R0 = Object.getOwnPropertyDescriptors, ia = Object.getOwnPropertySymbols, U0 = Object.prototype.hasOwnProperty, F0 = Object.prototype.propertyIsEnumerable, sa = (r, e, t) => e in r ? P0(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Ri = (r, e) => {
  for (var t in e || (e = {}))
    U0.call(e, t) && sa(r, t, e[t]);
  if (ia)
    for (var t of ia(e))
      F0.call(e, t) && sa(r, t, e[t]);
  return r;
}, na = (r, e) => T0(r, R0(e));
function Zi(r) {
  return Number(r[0].split(":")[1]);
}
function Ui(r) {
  return `0x${r.toString(16)}`;
}
function $0(r) {
  const { chains: e, optionalChains: t, methods: i, optionalMethods: s, events: o, optionalEvents: p, rpcMap: h } = r;
  if (!zi(e))
    throw new Error("Invalid chains");
  const g = e, m = i || Xi, b = o || Qi, E = { [Zi(g)]: h[Zi(g)] }, S = { chains: g, methods: m, events: b, rpcMap: E }, D = o == null ? void 0 : o.filter((M) => !Qi.includes(M)), _ = i == null ? void 0 : i.filter((M) => !Xi.includes(M));
  if (!t && !p && !s && !(D != null && D.length) && !(_ != null && _.length))
    return { required: S };
  const A = (D == null ? void 0 : D.length) && (_ == null ? void 0 : _.length) || !t, R = { chains: [...new Set(A ? g.concat(t || []) : t)], methods: [...new Set(m.concat(s || []))], events: [...new Set(b.concat(p || []))], rpcMap: h };
  return { required: S, optional: R };
}
class So {
  constructor() {
    this.events = new wt.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = N0, this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = (e) => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {};
  }
  static async init(e) {
    const t = new So();
    return await t.initialize(e), t;
  }
  async request(e) {
    return await this.signer.request(e, this.formatChainId(this.chainId));
  }
  sendAsync(e, t) {
    this.signer.sendAsync(e, t, this.formatChainId(this.chainId));
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(e) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(e);
    const { required: t, optional: i } = $0(this.rpc);
    try {
      const s = await new Promise(async (p, h) => {
        var g;
        this.rpc.showQrModal && ((g = this.modal) == null || g.subscribeModal((m) => {
          !m.open && !this.signer.session && (this.signer.abortPairingAttempt(), h(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(na(Ri({ namespaces: { [this.namespace]: t } }, i && { optionalNamespaces: { [this.namespace]: i } }), { pairingTopic: e == null ? void 0 : e.pairingTopic })).then((m) => {
          p(m);
        }).catch((m) => {
          h(new Error(m.message));
        });
      });
      if (!s)
        return;
      this.setChainIds(this.rpc.chains);
      const o = Ll(s.namespaces, [this.namespace]);
      this.setAccounts(o), this.events.emit("connect", { chainId: Ui(this.chainId) });
    } catch (s) {
      throw this.signer.logger.error(s), s;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (e) => {
      const { params: t } = e, { event: i } = t;
      i.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i.data), this.events.emit("accountsChanged", this.accounts)) : i.name === "chainChanged" ? this.setChainId(this.formatChainId(i.data)) : this.events.emit(i.name, i.data), this.events.emit("session_event", e);
    }), this.signer.on("chainChanged", (e) => {
      const t = parseInt(e);
      this.chainId = t, this.events.emit("chainChanged", Ui(this.chainId)), this.persist();
    }), this.signer.on("session_update", (e) => {
      this.events.emit("session_update", e);
    }), this.signer.on("session_delete", (e) => {
      this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", na(Ri({}, jl("USER_DISCONNECTED")), { data: e.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (e) => {
      var t, i;
      this.rpc.showQrModal && ((t = this.modal) == null || t.closeModal(), (i = this.modal) == null || i.openModal({ uri: e })), this.events.emit("display_uri", e);
    });
  }
  setHttpProvider(e) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: e.toString(16) }] });
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(e) {
    return `${this.namespace}:${e}`;
  }
  parseChainId(e) {
    return Number(e.split(":")[1]);
  }
  setChainIds(e) {
    const t = e.filter((i) => this.isCompatibleChainId(i)).map((i) => this.parseChainId(i));
    t.length && (this.chainId = t[0], this.events.emit("chainChanged", Ui(this.chainId)), this.persist());
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const t = this.parseChainId(e);
      this.chainId = t, this.setHttpProvider(t);
    }
  }
  parseAccountId(e) {
    const [t, i, s] = e.split(":");
    return { chainId: `${t}:${i}`, address: s };
  }
  setAccounts(e) {
    this.accounts = e.filter((t) => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map((t) => this.parseAccountId(t).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(e) {
    var t, i;
    return { chains: ((t = e.chains) == null ? void 0 : t.map((s) => this.formatChainId(s))) || [`${this.namespace}:1`], optionalChains: e.optionalChains ? e.optionalChains.map((s) => this.formatChainId(s)) : void 0, methods: (e == null ? void 0 : e.methods) || Xi, events: (e == null ? void 0 : e.events) || Qi, optionalMethods: (e == null ? void 0 : e.optionalMethods) || [], optionalEvents: (e == null ? void 0 : e.optionalEvents) || [], rpcMap: (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(e.chains.concat(e.optionalChains || []), e.projectId), showQrModal: !!(e != null && e.showQrModal), qrModalOptions: (i = e == null ? void 0 : e.qrModalOptions) != null ? i : void 0, projectId: e.projectId, metadata: e.metadata };
  }
  buildRpcMap(e, t) {
    const i = {};
    return e.forEach((s) => {
      i[s] = this.getRpcUrl(s, t);
    }), i;
  }
  async initialize(e) {
    if (this.rpc = this.getRpcConfig(e), this.chainId = Zi(this.rpc.chains), this.signer = await O0.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal)
      try {
        const { Web3Modal: t } = await import("./index.es-ac99893f.js").then((i) => i.i);
        this.modal = new t(Ri({ walletConnectVersion: 2, projectId: this.rpc.projectId, standaloneChains: this.rpc.chains }, this.rpc.qrModalOptions));
      } catch {
        throw new Error("To use QR modal, please install @web3modal/standalone package");
      }
  }
  loadConnectOpts(e) {
    if (!e)
      return;
    const { chains: t, optionalChains: i, rpcMap: s } = e;
    t && zi(t) && (this.rpc.chains = t.map((o) => this.formatChainId(o)), t.forEach((o) => {
      this.rpc.rpcMap[o] = (s == null ? void 0 : s[o]) || this.getRpcUrl(o);
    })), i && zi(i) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i == null ? void 0 : i.map((o) => this.formatChainId(o)), i.forEach((o) => {
      this.rpc.rpcMap[o] = (s == null ? void 0 : s[o]) || this.getRpcUrl(o);
    }));
  }
  getRpcUrl(e, t) {
    var i;
    return ((i = this.rpc.rpcMap) == null ? void 0 : i[e]) || `${A0}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (!this.session)
      return;
    const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`);
    this.setChainIds(e ? [this.formatChainId(e)] : this.session.namespaces[this.namespace].accounts), this.setAccounts(this.session.namespaces[this.namespace].accounts);
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(e) {
    return typeof e == "string" || e instanceof String ? [this.parseAccount(e)] : e.map((t) => this.parseAccount(t));
  }
}
export {
  Z0 as OPTIONAL_EVENTS,
  Q0 as OPTIONAL_METHODS,
  Qi as REQUIRED_EVENTS,
  Xi as REQUIRED_METHODS,
  So as default
};
