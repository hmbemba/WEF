import { k as _e, l as A, j as ge } from "./main-55ef2e00.js";
const be = (e) => JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r), we = (e) => {
  const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = e.replace(t, '$1"$2n"$3');
  return JSON.parse(r, (s, a) => typeof a == "string" && a.match(/^\d+n$/) ? BigInt(a.substring(0, a.length - 1)) : a);
};
function Ee(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return we(e);
  } catch {
    return e;
  }
}
function $(e) {
  return typeof e == "string" ? e : be(e) || "";
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var B = function(e, t) {
  return B = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, s) {
    r.__proto__ = s;
  } || function(r, s) {
    for (var a in s)
      s.hasOwnProperty(a) && (r[a] = s[a]);
  }, B(e, t);
};
function Re(e, t) {
  B(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var F = function() {
  return F = Object.assign || function(t) {
    for (var r, s = 1, a = arguments.length; s < a; s++) {
      r = arguments[s];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, F.apply(this, arguments);
};
function Oe(e, t) {
  var r = {};
  for (var s in e)
    Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, s = Object.getOwnPropertySymbols(e); a < s.length; a++)
      t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (r[s[a]] = e[s[a]]);
  return r;
}
function Ae(e, t, r, s) {
  var a = arguments.length, n = a < 3 ? t : s === null ? s = Object.getOwnPropertyDescriptor(t, r) : s, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(e, t, r, s);
  else
    for (var c = e.length - 1; c >= 0; c--)
      (o = e[c]) && (n = (a < 3 ? o(n) : a > 3 ? o(t, r, n) : o(t, r)) || n);
  return a > 3 && n && Object.defineProperty(t, r, n), n;
}
function Te(e, t) {
  return function(r, s) {
    t(r, s, e);
  };
}
function Pe(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function xe(e, t, r, s) {
  function a(n) {
    return n instanceof r ? n : new r(function(o) {
      o(n);
    });
  }
  return new (r || (r = Promise))(function(n, o) {
    function c(l) {
      try {
        u(s.next(l));
      } catch (_) {
        o(_);
      }
    }
    function p(l) {
      try {
        u(s.throw(l));
      } catch (_) {
        o(_);
      }
    }
    function u(l) {
      l.done ? n(l.value) : a(l.value).then(c, p);
    }
    u((s = s.apply(e, t || [])).next());
  });
}
function Se(e, t) {
  var r = { label: 0, sent: function() {
    if (n[0] & 1)
      throw n[1];
    return n[1];
  }, trys: [], ops: [] }, s, a, n, o;
  return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(l) {
      return p([u, l]);
    };
  }
  function p(u) {
    if (s)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (s = 1, a && (n = u[0] & 2 ? a.return : u[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, u[1])).done)
          return n;
        switch (a = 0, n && (u = [u[0] & 2, n.value]), u[0]) {
          case 0:
          case 1:
            n = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, a = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (n = r.trys, !(n = n.length > 0 && n[n.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!n || u[1] > n[0] && u[1] < n[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < n[1]) {
              r.label = n[1], n = u;
              break;
            }
            if (n && r.label < n[2]) {
              r.label = n[2], r.ops.push(u);
              break;
            }
            n[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = t.call(e, r);
      } catch (l) {
        u = [6, l], a = 0;
      } finally {
        s = n = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Le(e, t, r, s) {
  s === void 0 && (s = r), e[s] = t[r];
}
function je(e, t) {
  for (var r in e)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function I(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], s = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ee(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var s = r.call(e), a, n = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = s.next()).done; )
      n.push(a.value);
  } catch (c) {
    o = { error: c };
  } finally {
    try {
      a && !a.done && (r = s.return) && r.call(s);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return n;
}
function Ce() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(ee(arguments[t]));
  return e;
}
function De() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var s = Array(e), a = 0, t = 0; t < r; t++)
    for (var n = arguments[t], o = 0, c = n.length; o < c; o++, a++)
      s[a] = n[o];
  return s;
}
function S(e) {
  return this instanceof S ? (this.v = e, this) : new S(e);
}
function Be(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = r.apply(e, t || []), a, n = [];
  return a = {}, o("next"), o("throw"), o("return"), a[Symbol.asyncIterator] = function() {
    return this;
  }, a;
  function o(v) {
    s[v] && (a[v] = function(b) {
      return new Promise(function(y, T) {
        n.push([v, b, y, T]) > 1 || c(v, b);
      });
    });
  }
  function c(v, b) {
    try {
      p(s[v](b));
    } catch (y) {
      _(n[0][3], y);
    }
  }
  function p(v) {
    v.value instanceof S ? Promise.resolve(v.value.v).then(u, l) : _(n[0][2], v);
  }
  function u(v) {
    c("next", v);
  }
  function l(v) {
    c("throw", v);
  }
  function _(v, b) {
    v(b), n.shift(), n.length && c(n[0][0], n[0][1]);
  }
}
function Fe(e) {
  var t, r;
  return t = {}, s("next"), s("throw", function(a) {
    throw a;
  }), s("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function s(a, n) {
    t[a] = e[a] ? function(o) {
      return (r = !r) ? { value: S(e[a](o)), done: a === "return" } : n ? n(o) : o;
    } : n;
  }
}
function Ie(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof I == "function" ? I(e) : e[Symbol.iterator](), r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function s(n) {
    r[n] = e[n] && function(o) {
      return new Promise(function(c, p) {
        o = e[n](o), a(c, p, o.done, o.value);
      });
    };
  }
  function a(n, o, c, p) {
    Promise.resolve(p).then(function(u) {
      n({ value: u, done: c });
    }, o);
  }
}
function Ue(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function Me(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function Ne(e) {
  return e && e.__esModule ? e : { default: e };
}
function He(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function qe(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const Je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return F;
  },
  __asyncDelegator: Fe,
  __asyncGenerator: Be,
  __asyncValues: Ie,
  __await: S,
  __awaiter: xe,
  __classPrivateFieldGet: He,
  __classPrivateFieldSet: qe,
  __createBinding: Le,
  __decorate: Ae,
  __exportStar: je,
  __extends: Re,
  __generator: Se,
  __importDefault: Ne,
  __importStar: Me,
  __makeTemplateObject: Ue,
  __metadata: Pe,
  __param: Te,
  __read: ee,
  __rest: Oe,
  __spread: Ce,
  __spreadArrays: De,
  __values: I
}, Symbol.toStringTag, { value: "Module" })), $e = /* @__PURE__ */ _e(Je);
var D, V;
function Ve() {
  if (V)
    return D;
  V = 1;
  function e() {
    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
  }
  D = e, e.EventEmitter = e, e.prototype._events = void 0, e.prototype._maxListeners = void 0, e.defaultMaxListeners = 10, e.prototype.setMaxListeners = function(n) {
    if (!r(n) || n < 0 || isNaN(n))
      throw TypeError("n must be a positive number");
    return this._maxListeners = n, this;
  }, e.prototype.emit = function(n) {
    var o, c, p, u, l, _;
    if (this._events || (this._events = {}), n === "error" && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
      if (o = arguments[1], o instanceof Error)
        throw o;
      var v = new Error('Uncaught, unspecified "error" event. (' + o + ")");
      throw v.context = o, v;
    }
    if (c = this._events[n], a(c))
      return !1;
    if (t(c))
      switch (arguments.length) {
        case 1:
          c.call(this);
          break;
        case 2:
          c.call(this, arguments[1]);
          break;
        case 3:
          c.call(this, arguments[1], arguments[2]);
          break;
        default:
          u = Array.prototype.slice.call(arguments, 1), c.apply(this, u);
      }
    else if (s(c))
      for (u = Array.prototype.slice.call(arguments, 1), _ = c.slice(), p = _.length, l = 0; l < p; l++)
        _[l].apply(this, u);
    return !0;
  }, e.prototype.addListener = function(n, o) {
    var c;
    if (!t(o))
      throw TypeError("listener must be a function");
    return this._events || (this._events = {}), this._events.newListener && this.emit(
      "newListener",
      n,
      t(o.listener) ? o.listener : o
    ), this._events[n] ? s(this._events[n]) ? this._events[n].push(o) : this._events[n] = [this._events[n], o] : this._events[n] = o, s(this._events[n]) && !this._events[n].warned && (a(this._maxListeners) ? c = e.defaultMaxListeners : c = this._maxListeners, c && c > 0 && this._events[n].length > c && (this._events[n].warned = !0, console.error(
      "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
      this._events[n].length
    ), typeof console.trace == "function" && console.trace())), this;
  }, e.prototype.on = e.prototype.addListener, e.prototype.once = function(n, o) {
    if (!t(o))
      throw TypeError("listener must be a function");
    var c = !1;
    function p() {
      this.removeListener(n, p), c || (c = !0, o.apply(this, arguments));
    }
    return p.listener = o, this.on(n, p), this;
  }, e.prototype.removeListener = function(n, o) {
    var c, p, u, l;
    if (!t(o))
      throw TypeError("listener must be a function");
    if (!this._events || !this._events[n])
      return this;
    if (c = this._events[n], u = c.length, p = -1, c === o || t(c.listener) && c.listener === o)
      delete this._events[n], this._events.removeListener && this.emit("removeListener", n, o);
    else if (s(c)) {
      for (l = u; l-- > 0; )
        if (c[l] === o || c[l].listener && c[l].listener === o) {
          p = l;
          break;
        }
      if (p < 0)
        return this;
      c.length === 1 ? (c.length = 0, delete this._events[n]) : c.splice(p, 1), this._events.removeListener && this.emit("removeListener", n, o);
    }
    return this;
  }, e.prototype.removeAllListeners = function(n) {
    var o, c;
    if (!this._events)
      return this;
    if (!this._events.removeListener)
      return arguments.length === 0 ? this._events = {} : this._events[n] && delete this._events[n], this;
    if (arguments.length === 0) {
      for (o in this._events)
        o !== "removeListener" && this.removeAllListeners(o);
      return this.removeAllListeners("removeListener"), this._events = {}, this;
    }
    if (c = this._events[n], t(c))
      this.removeListener(n, c);
    else if (c)
      for (; c.length; )
        this.removeListener(n, c[c.length - 1]);
    return delete this._events[n], this;
  }, e.prototype.listeners = function(n) {
    var o;
    return !this._events || !this._events[n] ? o = [] : t(this._events[n]) ? o = [this._events[n]] : o = this._events[n].slice(), o;
  }, e.prototype.listenerCount = function(n) {
    if (this._events) {
      var o = this._events[n];
      if (t(o))
        return 1;
      if (o)
        return o.length;
    }
    return 0;
  }, e.listenerCount = function(n, o) {
    return n.listenerCount(o);
  };
  function t(n) {
    return typeof n == "function";
  }
  function r(n) {
    return typeof n == "number";
  }
  function s(n) {
    return typeof n == "object" && n !== null;
  }
  function a(n) {
    return n === void 0;
  }
  return D;
}
var gt = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), te = "%[a-f0-9]{2}", k = new RegExp("(" + te + ")|([^%]+?)", "gi"), G = new RegExp("(" + te + ")+", "gi");
function U(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var r = e.slice(0, t), s = e.slice(t);
  return Array.prototype.concat.call([], U(r), U(s));
}
function ke(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(k) || [], r = 1; r < t.length; r++)
      e = U(t, r).join(""), t = e.match(k) || [];
    return e;
  }
}
function Ge(e) {
  for (var t = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = G.exec(e); r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var s = ke(r[0]);
      s !== r[0] && (t[r[0]] = s);
    }
    r = G.exec(e);
  }
  t["%C2"] = "�";
  for (var a = Object.keys(t), n = 0; n < a.length; n++) {
    var o = a[n];
    e = e.replace(new RegExp(o, "g"), t[o]);
  }
  return e;
}
var bt = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return Ge(e);
  }
}, wt = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const r = e.indexOf(t);
  return r === -1 ? [e] : [
    e.slice(0, r),
    e.slice(r + t.length)
  ];
}, re = Ve();
const ze = "PARSE_ERROR", Xe = "INVALID_REQUEST", We = "METHOD_NOT_FOUND", Qe = "INVALID_PARAMS", ne = "INTERNAL_ERROR", N = "SERVER_ERROR", Ke = [-32700, -32600, -32601, -32602, -32603], x = {
  [ze]: { code: -32700, message: "Parse error" },
  [Xe]: { code: -32600, message: "Invalid Request" },
  [We]: { code: -32601, message: "Method not found" },
  [Qe]: { code: -32602, message: "Invalid params" },
  [ne]: { code: -32603, message: "Internal error" },
  [N]: { code: -32e3, message: "Server error" }
}, ie = N;
function Ye(e) {
  return Ke.includes(e);
}
function z(e) {
  return Object.keys(x).includes(e) ? x[e] : x[ie];
}
function Ze(e) {
  const t = Object.values(x).find((r) => r.code === e);
  return t || x[ie];
}
function et(e, t, r) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : e;
}
var tt = {}, E = {}, X;
function rt() {
  if (X)
    return E;
  X = 1, Object.defineProperty(E, "__esModule", { value: !0 }), E.isBrowserCryptoAvailable = E.getSubtleCrypto = E.getBrowerCrypto = void 0;
  function e() {
    return (A === null || A === void 0 ? void 0 : A.crypto) || (A === null || A === void 0 ? void 0 : A.msCrypto) || {};
  }
  E.getBrowerCrypto = e;
  function t() {
    const s = e();
    return s.subtle || s.webkitSubtle;
  }
  E.getSubtleCrypto = t;
  function r() {
    return !!e() && !!t();
  }
  return E.isBrowserCryptoAvailable = r, E;
}
var R = {}, W;
function nt() {
  if (W)
    return R;
  W = 1, Object.defineProperty(R, "__esModule", { value: !0 }), R.isBrowser = R.isNode = R.isReactNative = void 0;
  function e() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  R.isReactNative = e;
  function t() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  R.isNode = t;
  function r() {
    return !e() && !t();
  }
  return R.isBrowser = r, R;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = $e;
  t.__exportStar(rt(), e), t.__exportStar(nt(), e);
})(tt);
function se(e = 3) {
  const t = Date.now() * Math.pow(10, e), r = Math.floor(Math.random() * Math.pow(10, e));
  return t + r;
}
function it(e = 6) {
  return BigInt(se(e));
}
function st(e, t, r) {
  return {
    id: r || se(),
    jsonrpc: "2.0",
    method: e,
    params: t
  };
}
function Et(e, t) {
  return {
    id: e,
    jsonrpc: "2.0",
    result: t
  };
}
function ot(e, t, r) {
  return {
    id: e,
    jsonrpc: "2.0",
    error: at(t, r)
  };
}
function at(e, t) {
  return typeof e > "u" ? z(ne) : (typeof e == "string" && (e = Object.assign(Object.assign({}, z(N)), { message: e })), typeof t < "u" && (e.data = t), Ye(e.code) && (e = Ze(e.code)), e);
}
class oe {
}
class Rt extends oe {
  constructor(t) {
    super();
  }
}
class ct extends oe {
  constructor() {
    super();
  }
}
class ft extends ct {
  constructor(t) {
    super();
  }
}
const ut = "^https?:", ht = "^wss?:";
function lt(e) {
  const t = e.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length))
    return t[0];
}
function ae(e, t) {
  const r = lt(e);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function Q(e) {
  return ae(e, ut);
}
function Ot(e) {
  return ae(e, ht);
}
function At(e) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(e);
}
function ce(e) {
  return typeof e == "object" && "id" in e && "jsonrpc" in e && e.jsonrpc === "2.0";
}
function Tt(e) {
  return ce(e) && "method" in e;
}
function dt(e) {
  return ce(e) && (pt(e) || fe(e));
}
function pt(e) {
  return "result" in e;
}
function fe(e) {
  return "error" in e;
}
class Pt extends ft {
  constructor(t) {
    super(t), this.events = new re.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async request(t, r) {
    return this.requestStrict(st(t.method, t.params || [], t.id || it().toString()), r);
  }
  async requestStrict(t, r) {
    return new Promise(async (s, a) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (n) {
          a(n);
        }
      this.events.on(`${t.id}`, (n) => {
        fe(n) ? a(n.error) : s(n.result);
      });
      try {
        await this.connection.send(t, r);
      } catch (n) {
        a(n);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t), dt(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
      type: t.method,
      data: t.params
    });
  }
  onClose(t) {
    t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", (t) => this.onClose(t)), this.connection.on("error", (t) => this.events.emit("error", t)), this.connection.on("register_error", (t) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
}
var M = { exports: {} };
(function(e, t) {
  var r = typeof self < "u" ? self : A, s = function() {
    function n() {
      this.fetch = !1, this.DOMException = r.DOMException;
    }
    return n.prototype = r, new n();
  }();
  (function(n) {
    (function(o) {
      var c = {
        searchParams: "URLSearchParams" in n,
        iterable: "Symbol" in n && "iterator" in Symbol,
        blob: "FileReader" in n && "Blob" in n && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in n,
        arrayBuffer: "ArrayBuffer" in n
      };
      function p(i) {
        return i && DataView.prototype.isPrototypeOf(i);
      }
      if (c.arrayBuffer)
        var u = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], l = ArrayBuffer.isView || function(i) {
          return i && u.indexOf(Object.prototype.toString.call(i)) > -1;
        };
      function _(i) {
        if (typeof i != "string" && (i = String(i)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(i))
          throw new TypeError("Invalid character in header field name");
        return i.toLowerCase();
      }
      function v(i) {
        return typeof i != "string" && (i = String(i)), i;
      }
      function b(i) {
        var f = {
          next: function() {
            var h = i.shift();
            return { done: h === void 0, value: h };
          }
        };
        return c.iterable && (f[Symbol.iterator] = function() {
          return f;
        }), f;
      }
      function y(i) {
        this.map = {}, i instanceof y ? i.forEach(function(f, h) {
          this.append(h, f);
        }, this) : Array.isArray(i) ? i.forEach(function(f) {
          this.append(f[0], f[1]);
        }, this) : i && Object.getOwnPropertyNames(i).forEach(function(f) {
          this.append(f, i[f]);
        }, this);
      }
      y.prototype.append = function(i, f) {
        i = _(i), f = v(f);
        var h = this.map[i];
        this.map[i] = h ? h + ", " + f : f;
      }, y.prototype.delete = function(i) {
        delete this.map[_(i)];
      }, y.prototype.get = function(i) {
        return i = _(i), this.has(i) ? this.map[i] : null;
      }, y.prototype.has = function(i) {
        return this.map.hasOwnProperty(_(i));
      }, y.prototype.set = function(i, f) {
        this.map[_(i)] = v(f);
      }, y.prototype.forEach = function(i, f) {
        for (var h in this.map)
          this.map.hasOwnProperty(h) && i.call(f, this.map[h], h, this);
      }, y.prototype.keys = function() {
        var i = [];
        return this.forEach(function(f, h) {
          i.push(h);
        }), b(i);
      }, y.prototype.values = function() {
        var i = [];
        return this.forEach(function(f) {
          i.push(f);
        }), b(i);
      }, y.prototype.entries = function() {
        var i = [];
        return this.forEach(function(f, h) {
          i.push([h, f]);
        }), b(i);
      }, c.iterable && (y.prototype[Symbol.iterator] = y.prototype.entries);
      function T(i) {
        if (i.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        i.bodyUsed = !0;
      }
      function H(i) {
        return new Promise(function(f, h) {
          i.onload = function() {
            f(i.result);
          }, i.onerror = function() {
            h(i.error);
          };
        });
      }
      function ue(i) {
        var f = new FileReader(), h = H(f);
        return f.readAsArrayBuffer(i), h;
      }
      function he(i) {
        var f = new FileReader(), h = H(f);
        return f.readAsText(i), h;
      }
      function le(i) {
        for (var f = new Uint8Array(i), h = new Array(f.length), g = 0; g < f.length; g++)
          h[g] = String.fromCharCode(f[g]);
        return h.join("");
      }
      function q(i) {
        if (i.slice)
          return i.slice(0);
        var f = new Uint8Array(i.byteLength);
        return f.set(new Uint8Array(i)), f.buffer;
      }
      function J() {
        return this.bodyUsed = !1, this._initBody = function(i) {
          this._bodyInit = i, i ? typeof i == "string" ? this._bodyText = i : c.blob && Blob.prototype.isPrototypeOf(i) ? this._bodyBlob = i : c.formData && FormData.prototype.isPrototypeOf(i) ? this._bodyFormData = i : c.searchParams && URLSearchParams.prototype.isPrototypeOf(i) ? this._bodyText = i.toString() : c.arrayBuffer && c.blob && p(i) ? (this._bodyArrayBuffer = q(i.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : c.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(i) || l(i)) ? this._bodyArrayBuffer = q(i) : this._bodyText = i = Object.prototype.toString.call(i) : this._bodyText = "", this.headers.get("content-type") || (typeof i == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : c.searchParams && URLSearchParams.prototype.isPrototypeOf(i) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, c.blob && (this.blob = function() {
          var i = T(this);
          if (i)
            return i;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? T(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(ue);
        }), this.text = function() {
          var i = T(this);
          if (i)
            return i;
          if (this._bodyBlob)
            return he(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(le(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, c.formData && (this.formData = function() {
          return this.text().then(ye);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var de = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function pe(i) {
        var f = i.toUpperCase();
        return de.indexOf(f) > -1 ? f : i;
      }
      function O(i, f) {
        f = f || {};
        var h = f.body;
        if (i instanceof O) {
          if (i.bodyUsed)
            throw new TypeError("Already read");
          this.url = i.url, this.credentials = i.credentials, f.headers || (this.headers = new y(i.headers)), this.method = i.method, this.mode = i.mode, this.signal = i.signal, !h && i._bodyInit != null && (h = i._bodyInit, i.bodyUsed = !0);
        } else
          this.url = String(i);
        if (this.credentials = f.credentials || this.credentials || "same-origin", (f.headers || !this.headers) && (this.headers = new y(f.headers)), this.method = pe(f.method || this.method || "GET"), this.mode = f.mode || this.mode || null, this.signal = f.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && h)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(h);
      }
      O.prototype.clone = function() {
        return new O(this, { body: this._bodyInit });
      };
      function ye(i) {
        var f = new FormData();
        return i.trim().split("&").forEach(function(h) {
          if (h) {
            var g = h.split("="), m = g.shift().replace(/\+/g, " "), d = g.join("=").replace(/\+/g, " ");
            f.append(decodeURIComponent(m), decodeURIComponent(d));
          }
        }), f;
      }
      function ve(i) {
        var f = new y(), h = i.replace(/\r?\n[\t ]+/g, " ");
        return h.split(/\r?\n/).forEach(function(g) {
          var m = g.split(":"), d = m.shift().trim();
          if (d) {
            var L = m.join(":").trim();
            f.append(d, L);
          }
        }), f;
      }
      J.call(O.prototype);
      function w(i, f) {
        f || (f = {}), this.type = "default", this.status = f.status === void 0 ? 200 : f.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in f ? f.statusText : "OK", this.headers = new y(f.headers), this.url = f.url || "", this._initBody(i);
      }
      J.call(w.prototype), w.prototype.clone = function() {
        return new w(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new y(this.headers),
          url: this.url
        });
      }, w.error = function() {
        var i = new w(null, { status: 0, statusText: "" });
        return i.type = "error", i;
      };
      var me = [301, 302, 303, 307, 308];
      w.redirect = function(i, f) {
        if (me.indexOf(f) === -1)
          throw new RangeError("Invalid status code");
        return new w(null, { status: f, headers: { location: i } });
      }, o.DOMException = n.DOMException;
      try {
        new o.DOMException();
      } catch {
        o.DOMException = function(f, h) {
          this.message = f, this.name = h;
          var g = Error(f);
          this.stack = g.stack;
        }, o.DOMException.prototype = Object.create(Error.prototype), o.DOMException.prototype.constructor = o.DOMException;
      }
      function j(i, f) {
        return new Promise(function(h, g) {
          var m = new O(i, f);
          if (m.signal && m.signal.aborted)
            return g(new o.DOMException("Aborted", "AbortError"));
          var d = new XMLHttpRequest();
          function L() {
            d.abort();
          }
          d.onload = function() {
            var P = {
              status: d.status,
              statusText: d.statusText,
              headers: ve(d.getAllResponseHeaders() || "")
            };
            P.url = "responseURL" in d ? d.responseURL : P.headers.get("X-Request-URL");
            var C = "response" in d ? d.response : d.responseText;
            h(new w(C, P));
          }, d.onerror = function() {
            g(new TypeError("Network request failed"));
          }, d.ontimeout = function() {
            g(new TypeError("Network request failed"));
          }, d.onabort = function() {
            g(new o.DOMException("Aborted", "AbortError"));
          }, d.open(m.method, m.url, !0), m.credentials === "include" ? d.withCredentials = !0 : m.credentials === "omit" && (d.withCredentials = !1), "responseType" in d && c.blob && (d.responseType = "blob"), m.headers.forEach(function(P, C) {
            d.setRequestHeader(C, P);
          }), m.signal && (m.signal.addEventListener("abort", L), d.onreadystatechange = function() {
            d.readyState === 4 && m.signal.removeEventListener("abort", L);
          }), d.send(typeof m._bodyInit > "u" ? null : m._bodyInit);
        });
      }
      return j.polyfill = !0, n.fetch || (n.fetch = j, n.Headers = y, n.Request = O, n.Response = w), o.Headers = y, o.Request = O, o.Response = w, o.fetch = j, Object.defineProperty(o, "__esModule", { value: !0 }), o;
    })({});
  })(s), s.fetch.ponyfill = !0, delete s.fetch.polyfill;
  var a = s;
  t = a.fetch, t.default = a.fetch, t.fetch = a.fetch, t.Headers = a.Headers, t.Request = a.Request, t.Response = a.Response, e.exports = t;
})(M, M.exports);
var yt = M.exports;
const K = /* @__PURE__ */ ge(yt), vt = {
  Accept: "application/json",
  "Content-Type": "application/json"
}, mt = "POST", Y = {
  headers: vt,
  method: mt
}, Z = 10;
class xt {
  constructor(t, r = !1) {
    if (this.url = t, this.disableProviderPing = r, this.events = new re.EventEmitter(), this.isAvailable = !1, this.registering = !1, !Q(t))
      throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    this.url = t, this.disableProviderPing = r;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    if (!this.isAvailable)
      throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t, r) {
    this.isAvailable || await this.register();
    try {
      const s = $(t), n = await (await K(this.url, Object.assign(Object.assign({}, Y), { body: s }))).json();
      this.onPayload({ data: n });
    } catch (s) {
      this.onError(t.id, s);
    }
  }
  async register(t = this.url) {
    if (!Q(t))
      throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((s, a) => {
        this.events.once("register_error", (n) => {
          this.resetMaxListeners(), a(n);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u")
            return a(new Error("HTTP connection is missing or invalid"));
          s();
        });
      });
    }
    this.url = t, this.registering = !0;
    try {
      if (!this.disableProviderPing) {
        const r = $({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await K(t, Object.assign(Object.assign({}, Y), { body: r }));
      }
      this.onOpen();
    } catch (r) {
      const s = this.parseError(r);
      throw this.events.emit("register_error", s), this.onClose(), s;
    }
  }
  onOpen() {
    this.isAvailable = !0, this.registering = !1, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = !1, this.registering = !1, this.events.emit("close");
  }
  onPayload(t) {
    if (typeof t.data > "u")
      return;
    const r = typeof t.data == "string" ? Ee(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const s = this.parseError(r), a = s.message || s.toString(), n = ot(t, a);
    this.events.emit("payload", n);
  }
  parseError(t, r = this.url) {
    return et(t, r, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Z && this.events.setMaxListeners(Z);
  }
}
export {
  xt as H,
  Rt as I,
  Pt as J,
  gt as a,
  Ee as b,
  tt as c,
  bt as d,
  $ as e,
  ot as f,
  ft as g,
  st as h,
  fe as i,
  dt as j,
  Ot as k,
  At as l,
  et as m,
  Tt as n,
  Et as o,
  se as p,
  pt as q,
  $e as r,
  wt as s
};
