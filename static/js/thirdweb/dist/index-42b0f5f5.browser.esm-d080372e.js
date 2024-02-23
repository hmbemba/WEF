import { j as pt, k as Mn, _ as A, E as On } from "./main-55ef2e00.js";
import { s as ti, a as ni, d as ri, c as we, b as oi, e as ii, p as si, J as Gt, H as ai, I as ci, f as Yt } from "./http-dd7173cd.js";
import { e as li, d as ui } from "./dijkstra-66595127.js";
var An = mt;
mt.strict = Ln;
mt.loose = Bn;
var di = Object.prototype.toString, fi = {
  "[object Int8Array]": !0,
  "[object Int16Array]": !0,
  "[object Int32Array]": !0,
  "[object Uint8Array]": !0,
  "[object Uint8ClampedArray]": !0,
  "[object Uint16Array]": !0,
  "[object Uint32Array]": !0,
  "[object Float32Array]": !0,
  "[object Float64Array]": !0
};
function mt(t) {
  return Ln(t) || Bn(t);
}
function Ln(t) {
  return t instanceof Int8Array || t instanceof Int16Array || t instanceof Int32Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Uint16Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array;
}
function Bn(t) {
  return fi[di.call(t)];
}
const hi = /* @__PURE__ */ pt(An);
var _i = An.strict, gi = function(e) {
  if (_i(e)) {
    var n = Buffer.from(e.buffer);
    return e.byteLength !== e.buffer.byteLength && (n = n.slice(e.byteOffset, e.byteOffset + e.byteLength)), n;
  } else
    return Buffer.from(e);
};
const pi = /* @__PURE__ */ pt(gi), wt = "hex", yt = "utf8", mi = "binary", wi = "buffer", yi = "array", vi = "typed-array", bi = "array-buffer", Ue = "0";
function te(t) {
  return new Uint8Array(t);
}
function vt(t, e = !1) {
  const n = t.toString(wt);
  return e ? ye(n) : n;
}
function bt(t) {
  return t.toString(yt);
}
function Pn(t) {
  return t.readUIntBE(0, t.length);
}
function ce(t) {
  return pi(t);
}
function H(t, e = !1) {
  return vt(ce(t), e);
}
function Un(t) {
  return bt(ce(t));
}
function $n(t) {
  return Pn(ce(t));
}
function Et(t) {
  return Buffer.from(ne(t), wt);
}
function j(t) {
  return te(Et(t));
}
function Ei(t) {
  return bt(Et(t));
}
function Ci(t) {
  return $n(j(t));
}
function Ct(t) {
  return Buffer.from(t, yt);
}
function Dn(t) {
  return te(Ct(t));
}
function Si(t, e = !1) {
  return vt(Ct(t), e);
}
function Ii(t) {
  const e = parseInt(t, 10);
  return Hi(Fi(e), "Number can only safely store up to 53 bits"), e;
}
function ki(t) {
  return xi(St(t));
}
function Ti(t) {
  return It(St(t));
}
function Ri(t, e) {
  return Mi(St(t), e);
}
function Ni(t) {
  return `${t}`;
}
function St(t) {
  const e = (t >>> 0).toString(2);
  return Tt(e);
}
function xi(t) {
  return ce(It(t));
}
function It(t) {
  return new Uint8Array(Ui(t).map((e) => parseInt(e, 2)));
}
function Mi(t, e) {
  return H(It(t), e);
}
function Oi(t) {
  return !(typeof t != "string" || !new RegExp(/^[01]+$/).test(t) || t.length % 8 !== 0);
}
function qn(t, e) {
  return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e);
}
function $e(t) {
  return Buffer.isBuffer(t);
}
function kt(t) {
  return hi.strict(t) && !$e(t);
}
function Wn(t) {
  return !kt(t) && !$e(t) && typeof t.byteLength < "u";
}
function Ai(t) {
  return $e(t) ? wi : kt(t) ? vi : Wn(t) ? bi : Array.isArray(t) ? yi : typeof t;
}
function Li(t) {
  return Oi(t) ? mi : qn(t) ? wt : yt;
}
function Bi(...t) {
  return Buffer.concat(t);
}
function Fn(...t) {
  let e = [];
  return t.forEach((n) => e = e.concat(Array.from(n))), new Uint8Array([...e]);
}
function Pi(t, e = 8) {
  const n = t % e;
  return n ? (t - n) / e * e + e : t;
}
function Ui(t, e = 8) {
  const n = Tt(t).match(new RegExp(`.{${e}}`, "gi"));
  return Array.from(n || []);
}
function Tt(t, e = 8, n = Ue) {
  return $i(t, Pi(t.length, e), n);
}
function $i(t, e, n = Ue) {
  return ji(t, e, !0, n);
}
function ne(t) {
  return t.replace(/^0x/, "");
}
function ye(t) {
  return t.startsWith("0x") ? t : `0x${t}`;
}
function Di(t) {
  return t = ne(t), t = Tt(t, 2), t && (t = ye(t)), t;
}
function qi(t) {
  const e = t.startsWith("0x");
  return t = ne(t), t = t.startsWith(Ue) ? t.substring(1) : t, e ? ye(t) : t;
}
function Wi(t) {
  return typeof t > "u";
}
function Fi(t) {
  return !Wi(t);
}
function Hi(t, e) {
  if (!t)
    throw new Error(e);
}
function ji(t, e, n, r = Ue) {
  const o = e - t.length;
  let i = t;
  if (o > 0) {
    const s = r.repeat(o);
    i = n ? s + t : t + s;
  }
  return i;
}
var Rt = {};
(function(t) {
  const e = ni, n = ri, r = ti, o = (d) => d == null;
  function i(d) {
    switch (d.arrayFormat) {
      case "index":
        return (u) => (h, f) => {
          const _ = h.length;
          return f === void 0 || d.skipNull && f === null || d.skipEmptyString && f === "" ? h : f === null ? [...h, [c(u, d), "[", _, "]"].join("")] : [
            ...h,
            [c(u, d), "[", c(_, d), "]=", c(f, d)].join("")
          ];
        };
      case "bracket":
        return (u) => (h, f) => f === void 0 || d.skipNull && f === null || d.skipEmptyString && f === "" ? h : f === null ? [...h, [c(u, d), "[]"].join("")] : [...h, [c(u, d), "[]=", c(f, d)].join("")];
      case "comma":
      case "separator":
        return (u) => (h, f) => f == null || f.length === 0 ? h : h.length === 0 ? [[c(u, d), "=", c(f, d)].join("")] : [[h, c(f, d)].join(d.arrayFormatSeparator)];
      default:
        return (u) => (h, f) => f === void 0 || d.skipNull && f === null || d.skipEmptyString && f === "" ? h : f === null ? [...h, c(u, d)] : [...h, [c(u, d), "=", c(f, d)].join("")];
    }
  }
  function s(d) {
    let u;
    switch (d.arrayFormat) {
      case "index":
        return (h, f, _) => {
          if (u = /\[(\d*)\]$/.exec(h), h = h.replace(/\[\d*\]$/, ""), !u) {
            _[h] = f;
            return;
          }
          _[h] === void 0 && (_[h] = {}), _[h][u[1]] = f;
        };
      case "bracket":
        return (h, f, _) => {
          if (u = /(\[\])$/.exec(h), h = h.replace(/\[\]$/, ""), !u) {
            _[h] = f;
            return;
          }
          if (_[h] === void 0) {
            _[h] = [f];
            return;
          }
          _[h] = [].concat(_[h], f);
        };
      case "comma":
      case "separator":
        return (h, f, _) => {
          const b = typeof f == "string" && f.split("").indexOf(d.arrayFormatSeparator) > -1 ? f.split(d.arrayFormatSeparator).map((I) => m(I, d)) : f === null ? f : m(f, d);
          _[h] = b;
        };
      default:
        return (h, f, _) => {
          if (_[h] === void 0) {
            _[h] = f;
            return;
          }
          _[h] = [].concat(_[h], f);
        };
    }
  }
  function a(d) {
    if (typeof d != "string" || d.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function c(d, u) {
    return u.encode ? u.strict ? e(d) : encodeURIComponent(d) : d;
  }
  function m(d, u) {
    return u.decode ? n(d) : d;
  }
  function g(d) {
    return Array.isArray(d) ? d.sort() : typeof d == "object" ? g(Object.keys(d)).sort((u, h) => Number(u) - Number(h)).map((u) => d[u]) : d;
  }
  function l(d) {
    const u = d.indexOf("#");
    return u !== -1 && (d = d.slice(0, u)), d;
  }
  function y(d) {
    let u = "";
    const h = d.indexOf("#");
    return h !== -1 && (u = d.slice(h)), u;
  }
  function w(d) {
    d = l(d);
    const u = d.indexOf("?");
    return u === -1 ? "" : d.slice(u + 1);
  }
  function p(d, u) {
    return u.parseNumbers && !Number.isNaN(Number(d)) && typeof d == "string" && d.trim() !== "" ? d = Number(d) : u.parseBooleans && d !== null && (d.toLowerCase() === "true" || d.toLowerCase() === "false") && (d = d.toLowerCase() === "true"), d;
  }
  function v(d, u) {
    u = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, u), a(u.arrayFormatSeparator);
    const h = s(u), f = /* @__PURE__ */ Object.create(null);
    if (typeof d != "string" || (d = d.trim().replace(/^[?#&]/, ""), !d))
      return f;
    for (const _ of d.split("&")) {
      let [E, b] = r(u.decode ? _.replace(/\+/g, " ") : _, "=");
      b = b === void 0 ? null : ["comma", "separator"].includes(u.arrayFormat) ? b : m(b, u), h(m(E, u), b, f);
    }
    for (const _ of Object.keys(f)) {
      const E = f[_];
      if (typeof E == "object" && E !== null)
        for (const b of Object.keys(E))
          E[b] = p(E[b], u);
      else
        f[_] = p(E, u);
    }
    return u.sort === !1 ? f : (u.sort === !0 ? Object.keys(f).sort() : Object.keys(f).sort(u.sort)).reduce((_, E) => {
      const b = f[E];
      return b && typeof b == "object" && !Array.isArray(b) ? _[E] = g(b) : _[E] = b, _;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = w, t.parse = v, t.stringify = (d, u) => {
    if (!d)
      return "";
    u = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, u), a(u.arrayFormatSeparator);
    const h = (b) => u.skipNull && o(d[b]) || u.skipEmptyString && d[b] === "", f = i(u), _ = {};
    for (const b of Object.keys(d))
      h(b) || (_[b] = d[b]);
    const E = Object.keys(_);
    return u.sort !== !1 && E.sort(u.sort), E.map((b) => {
      const I = d[b];
      return I === void 0 ? "" : I === null ? c(b, u) : Array.isArray(I) ? I.reduce(f(b), []).join("&") : c(b, u) + "=" + c(I, u);
    }).filter((b) => b.length > 0).join("&");
  }, t.parseUrl = (d, u) => {
    u = Object.assign({
      decode: !0
    }, u);
    const [h, f] = r(d, "#");
    return Object.assign(
      {
        url: h.split("?")[0] || "",
        query: v(w(d), u)
      },
      u && u.parseFragmentIdentifier && f ? { fragmentIdentifier: m(f, u) } : {}
    );
  }, t.stringifyUrl = (d, u) => {
    u = Object.assign({
      encode: !0,
      strict: !0
    }, u);
    const h = l(d.url).split("?")[0] || "", f = t.extract(d.url), _ = t.parse(f, { sort: !1 }), E = Object.assign(_, d.query);
    let b = t.stringify(E, u);
    b && (b = `?${b}`);
    let I = y(d.url);
    return d.fragmentIdentifier && (I = `#${c(d.fragmentIdentifier, u)}`), `${h}${b}${I}`;
  };
})(Rt);
function zi(t) {
  return we.getBrowerCrypto().getRandomValues(new Uint8Array(t));
}
const Hn = 256, jn = Hn, Vi = Hn, z = "AES-CBC", Ji = `SHA-${jn}`, ot = "HMAC", Ki = "encrypt", Qi = "decrypt", Gi = "sign", Yi = "verify";
function Xi(t) {
  return t === z ? { length: jn, name: z } : {
    hash: { name: Ji },
    name: ot
  };
}
function Zi(t) {
  return t === z ? [Ki, Qi] : [Gi, Yi];
}
async function Nt(t, e = z) {
  return we.getSubtleCrypto().importKey("raw", t, Xi(e), !0, Zi(e));
}
async function es(t, e, n) {
  const r = we.getSubtleCrypto(), o = await Nt(e, z), i = await r.encrypt({
    iv: t,
    name: z
  }, o, n);
  return new Uint8Array(i);
}
async function ts(t, e, n) {
  const r = we.getSubtleCrypto(), o = await Nt(e, z), i = await r.decrypt({
    iv: t,
    name: z
  }, o, n);
  return new Uint8Array(i);
}
async function ns(t, e) {
  const n = we.getSubtleCrypto(), r = await Nt(t, ot), o = await n.sign({
    length: Vi,
    name: ot
  }, r, e);
  return new Uint8Array(o);
}
function rs(t, e, n) {
  return es(t, e, n);
}
function os(t, e, n) {
  return ts(t, e, n);
}
async function zn(t, e) {
  return await ns(t, e);
}
var ve, S, Vn, Q, Xt, Jn, it, Kn, ee = {}, Qn = [], is = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, De = Array.isArray;
function $(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Gn(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function P(t, e, n) {
  var r, o, i, s = {};
  for (i in e)
    i == "key" ? r = e[i] : i == "ref" ? o = e[i] : s[i] = e[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? ve.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (i in t.defaultProps)
      s[i] === void 0 && (s[i] = t.defaultProps[i]);
  return fe(t, s, r, o, null);
}
function fe(t, e, n, r, o) {
  var i = { type: t, props: e, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++Vn };
  return o == null && S.vnode != null && S.vnode(i), i;
}
function Yn() {
  return { current: null };
}
function q(t) {
  return t.children;
}
function B(t, e) {
  this.props = t, this.context = e;
}
function xe(t, e) {
  if (e == null)
    return t.__ ? xe(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? xe(t) : null;
}
function Xn(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Xn(t);
  }
}
function st(t) {
  (!t.__d && (t.__d = !0) && Q.push(t) && !Me.__r++ || Xt !== S.debounceRendering) && ((Xt = S.debounceRendering) || Jn)(Me);
}
function Me() {
  var t, e, n, r, o, i, s, a, c;
  for (Q.sort(it); t = Q.shift(); )
    t.__d && (e = Q.length, r = void 0, o = void 0, i = void 0, a = (s = (n = t).__v).__e, (c = n.__P) && (r = [], o = [], (i = $({}, s)).__v = s.__v + 1, xt(c, s, i, n.__n, c.ownerSVGElement !== void 0, s.__h != null ? [a] : null, r, a ?? xe(s), s.__h, o), nr(r, s, o), s.__e != a && Xn(s)), Q.length > e && Q.sort(it));
  Me.__r = 0;
}
function Zn(t, e, n, r, o, i, s, a, c, m, g) {
  var l, y, w, p, v, d, u, h, f, _, E = 0, b = r && r.__k || Qn, I = b.length, N = I, k = e.length;
  for (n.__k = [], l = 0; l < k; l++)
    (p = n.__k[l] = (p = e[l]) == null || typeof p == "boolean" || typeof p == "function" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? fe(null, p, null, null, p) : De(p) ? fe(q, { children: p }, null, null, null) : p.__b > 0 ? fe(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null && (p.__ = n, p.__b = n.__b + 1, (h = ss(p, b, u = l + E, N)) === -1 ? w = ee : (w = b[h] || ee, b[h] = void 0, N--), xt(t, p, w, o, i, s, a, c, m, g), v = p.__e, (y = p.ref) && w.ref != y && (w.ref && Mt(w.ref, null, p), g.push(y, p.__c || v, p)), v != null && (d == null && (d = v), _ = !(f = w === ee || w.__v === null) && h === u, f ? h == -1 && E-- : h !== u && (h === u + 1 ? (E++, _ = !0) : h > u ? N > k - u ? (E += h - u, _ = !0) : E-- : E = h < u && h == u - 1 ? h - u : 0), u = l + E, _ = _ || h == l && !f, typeof p.type != "function" || h === u && w.__k !== p.__k ? typeof p.type == "function" || _ ? p.__d !== void 0 ? (c = p.__d, p.__d = void 0) : c = v.nextSibling : c = tr(t, v, c) : c = er(p, c, t), typeof n.type == "function" && (n.__d = c)));
  for (n.__e = d, l = I; l--; )
    b[l] != null && (typeof n.type == "function" && b[l].__e != null && b[l].__e == n.__d && (n.__d = b[l].__e.nextSibling), rr(b[l], b[l]));
}
function er(t, e, n) {
  for (var r, o = t.__k, i = 0; o && i < o.length; i++)
    (r = o[i]) && (r.__ = t, e = typeof r.type == "function" ? er(r, e, n) : tr(n, r.__e, e));
  return e;
}
function D(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (De(t) ? t.some(function(n) {
    D(n, e);
  }) : e.push(t)), e;
}
function tr(t, e, n) {
  return n == null || n.parentNode !== t ? t.insertBefore(e, null) : e == n && e.parentNode != null || t.insertBefore(e, n), e.nextSibling;
}
function ss(t, e, n, r) {
  var o = t.key, i = t.type, s = n - 1, a = n + 1, c = e[n];
  if (c === null || c && o == c.key && i === c.type)
    return n;
  if (r > (c != null ? 1 : 0))
    for (; s >= 0 || a < e.length; ) {
      if (s >= 0) {
        if ((c = e[s]) && o == c.key && i === c.type)
          return s;
        s--;
      }
      if (a < e.length) {
        if ((c = e[a]) && o == c.key && i === c.type)
          return a;
        a++;
      }
    }
  return -1;
}
function as(t, e, n, r, o) {
  var i;
  for (i in n)
    i === "children" || i === "key" || i in e || Oe(t, i, null, n[i], r);
  for (i in e)
    o && typeof e[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || n[i] === e[i] || Oe(t, i, e[i], n[i], r);
}
function Zt(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || is.test(e) ? n : n + "px";
}
function Oe(t, e, n, r, o) {
  var i;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof r == "string" && (t.style.cssText = r = ""), r)
          for (e in r)
            n && e in n || Zt(t.style, e, "");
        if (n)
          for (e in n)
            r && n[e] === r[e] || Zt(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      i = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r || t.addEventListener(e, i ? tn : en, i) : t.removeEventListener(e, i ? tn : en, i);
    else if (e !== "dangerouslySetInnerHTML") {
      if (o)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e in t)
        try {
          t[e] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e[4] !== "-" ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function en(t) {
  return this.l[t.type + !1](S.event ? S.event(t) : t);
}
function tn(t) {
  return this.l[t.type + !0](S.event ? S.event(t) : t);
}
function xt(t, e, n, r, o, i, s, a, c, m) {
  var g, l, y, w, p, v, d, u, h, f, _, E, b, I, N, k = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, a = e.__e = n.__e, e.__h = null, i = [a]), (g = S.__b) && g(e);
  try {
    e:
      if (typeof k == "function") {
        if (u = e.props, h = (g = k.contextType) && r[g.__c], f = g ? h ? h.props.value : g.__ : r, n.__c ? d = (l = e.__c = n.__c).__ = l.__E : ("prototype" in k && k.prototype.render ? e.__c = l = new k(u, f) : (e.__c = l = new B(u, f), l.constructor = k, l.render = ls), h && h.sub(l), l.props = u, l.state || (l.state = {}), l.context = f, l.__n = r, y = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), k.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = $({}, l.__s)), $(l.__s, k.getDerivedStateFromProps(u, l.__s))), w = l.props, p = l.state, l.__v = e, y)
          k.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (k.getDerivedStateFromProps == null && u !== w && l.componentWillReceiveProps != null && l.componentWillReceiveProps(u, f), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(u, l.__s, f) === !1 || e.__v === n.__v)) {
            for (e.__v !== n.__v && (l.props = u, l.state = l.__s, l.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), _ = 0; _ < l._sb.length; _++)
              l.__h.push(l._sb[_]);
            l._sb = [], l.__h.length && s.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(u, l.__s, f), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(w, p, v);
          });
        }
        if (l.context = f, l.props = u, l.__P = t, l.__e = !1, E = S.__r, b = 0, "prototype" in k && k.prototype.render) {
          for (l.state = l.__s, l.__d = !1, E && E(e), g = l.render(l.props, l.state, l.context), I = 0; I < l._sb.length; I++)
            l.__h.push(l._sb[I]);
          l._sb = [];
        } else
          do
            l.__d = !1, E && E(e), g = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++b < 25);
        l.state = l.__s, l.getChildContext != null && (r = $($({}, r), l.getChildContext())), y || l.getSnapshotBeforeUpdate == null || (v = l.getSnapshotBeforeUpdate(w, p)), Zn(t, De(N = g != null && g.type === q && g.key == null ? g.props.children : g) ? N : [N], e, n, r, o, i, s, a, c, m), l.base = e.__e, e.__h = null, l.__h.length && s.push(l), d && (l.__E = l.__ = null);
      } else
        i == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = cs(n.__e, e, n, r, o, i, s, c, m);
    (g = S.diffed) && g(e);
  } catch (x) {
    e.__v = null, (c || i != null) && (e.__e = a, e.__h = !!c, i[i.indexOf(a)] = null), S.__e(x, e, n);
  }
}
function nr(t, e, n) {
  for (var r = 0; r < n.length; r++)
    Mt(n[r], n[++r], n[++r]);
  S.__c && S.__c(e, t), t.some(function(o) {
    try {
      t = o.__h, o.__h = [], t.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      S.__e(i, o.__v);
    }
  });
}
function cs(t, e, n, r, o, i, s, a, c) {
  var m, g, l, y = n.props, w = e.props, p = e.type, v = 0;
  if (p === "svg" && (o = !0), i != null) {
    for (; v < i.length; v++)
      if ((m = i[v]) && "setAttribute" in m == !!p && (p ? m.localName === p : m.nodeType === 3)) {
        t = m, i[v] = null;
        break;
      }
  }
  if (t == null) {
    if (p === null)
      return document.createTextNode(w);
    t = o ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, w.is && w), i = null, a = !1;
  }
  if (p === null)
    y === w || a && t.data === w || (t.data = w);
  else {
    if (i = i && ve.call(t.childNodes), g = (y = n.props || ee).dangerouslySetInnerHTML, l = w.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (y = {}, v = 0; v < t.attributes.length; v++)
          y[t.attributes[v].name] = t.attributes[v].value;
      (l || g) && (l && (g && l.__html == g.__html || l.__html === t.innerHTML) || (t.innerHTML = l && l.__html || ""));
    }
    if (as(t, w, y, o, a), l)
      e.__k = [];
    else if (Zn(t, De(v = e.props.children) ? v : [v], e, n, r, o && p !== "foreignObject", i, s, i ? i[0] : n.__k && xe(n, 0), a, c), i != null)
      for (v = i.length; v--; )
        i[v] != null && Gn(i[v]);
    a || ("value" in w && (v = w.value) !== void 0 && (v !== t.value || p === "progress" && !v || p === "option" && v !== y.value) && Oe(t, "value", v, y.value, !1), "checked" in w && (v = w.checked) !== void 0 && v !== t.checked && Oe(t, "checked", v, y.checked, !1));
  }
  return t;
}
function Mt(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (r) {
    S.__e(r, n);
  }
}
function rr(t, e, n) {
  var r, o;
  if (S.unmount && S.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Mt(r, null, e)), (r = t.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        S.__e(i, e);
      }
    r.base = r.__P = null, t.__c = void 0;
  }
  if (r = t.__k)
    for (o = 0; o < r.length; o++)
      r[o] && rr(r[o], e, n || typeof t.type != "function");
  n || t.__e == null || Gn(t.__e), t.__ = t.__e = t.__d = void 0;
}
function ls(t, e, n) {
  return this.constructor(t, n);
}
function ge(t, e, n) {
  var r, o, i, s;
  S.__ && S.__(t, e), o = (r = typeof n == "function") ? null : n && n.__k || e.__k, i = [], s = [], xt(e, t = (!r && n || e).__k = P(q, null, [t]), o || ee, ee, e.ownerSVGElement !== void 0, !r && n ? [n] : o ? null : e.firstChild ? ve.call(e.childNodes) : null, i, !r && n ? n : o ? o.__e : e.firstChild, r, s), nr(i, t, s);
}
function or(t, e) {
  ge(t, e, or);
}
function us(t, e, n) {
  var r, o, i, s, a = $({}, t.props);
  for (i in t.type && t.type.defaultProps && (s = t.type.defaultProps), e)
    i == "key" ? r = e[i] : i == "ref" ? o = e[i] : a[i] = e[i] === void 0 && s !== void 0 ? s[i] : e[i];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? ve.call(arguments, 2) : n), fe(t.type, a, r || t.key, o || t.ref, null);
}
function ir(t, e) {
  var n = { __c: e = "__cC" + Kn++, __: t, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = [], (i = {})[e] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && o.some(function(a) {
        a.__e = !0, st(a);
      });
    }, this.sub = function(s) {
      o.push(s);
      var a = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        o.splice(o.indexOf(s), 1), a && a.call(s);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
ve = Qn.slice, S = { __e: function(t, e, n, r) {
  for (var o, i, s; e = e.__; )
    if ((o = e.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(t)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(t, r || {}), s = o.__d), s)
          return o.__E = o;
      } catch (a) {
        t = a;
      }
  throw t;
} }, Vn = 0, B.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = $({}, this.state), typeof t == "function" && (t = t($({}, n), this.props)), t && $(n, t), t != null && this.__v && (e && this._sb.push(e), st(this));
}, B.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), st(this));
}, B.prototype.render = q, Q = [], Jn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, it = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Me.__r = 0, Kn = 0;
var W, T, Qe, nn, re = 0, sr = [], Te = [], rn = S.__b, on = S.__r, sn = S.diffed, an = S.__c, cn = S.unmount;
function G(t, e) {
  S.__h && S.__h(T, t, re || e), re = 0;
  var n = T.__H || (T.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({ __V: Te }), n.__[t];
}
function qe(t) {
  return re = 1, Ot(hr, t);
}
function Ot(t, e, n) {
  var r = G(W++, 2);
  if (r.t = t, !r.__c && (r.__ = [n ? n(e) : hr(void 0, e), function(a) {
    var c = r.__N ? r.__N[0] : r.__[0], m = r.t(c, a);
    c !== m && (r.__N = [m, r.__[1]], r.__c.setState({}));
  }], r.__c = T, !T.u)) {
    var o = function(a, c, m) {
      if (!r.__c.__H)
        return !0;
      var g = r.__c.__H.__.filter(function(y) {
        return y.__c;
      });
      if (g.every(function(y) {
        return !y.__N;
      }))
        return !i || i.call(this, a, c, m);
      var l = !1;
      return g.forEach(function(y) {
        if (y.__N) {
          var w = y.__[0];
          y.__ = y.__N, y.__N = void 0, w !== y.__[0] && (l = !0);
        }
      }), !(!l && r.__c.props === a) && (!i || i.call(this, a, c, m));
    };
    T.u = !0;
    var i = T.shouldComponentUpdate, s = T.componentWillUpdate;
    T.componentWillUpdate = function(a, c, m) {
      if (this.__e) {
        var g = i;
        i = void 0, o(a, c, m), i = g;
      }
      s && s.call(this, a, c, m);
    }, T.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function At(t, e) {
  var n = G(W++, 3);
  !S.__s && Lt(n.__H, e) && (n.__ = t, n.i = e, T.__H.__h.push(n));
}
function be(t, e) {
  var n = G(W++, 4);
  !S.__s && Lt(n.__H, e) && (n.__ = t, n.i = e, T.__h.push(n));
}
function ar(t) {
  return re = 5, We(function() {
    return { current: t };
  }, []);
}
function cr(t, e, n) {
  re = 6, be(function() {
    return typeof t == "function" ? (t(e()), function() {
      return t(null);
    }) : t ? (t.current = e(), function() {
      return t.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(t));
}
function We(t, e) {
  var n = G(W++, 7);
  return Lt(n.__H, e) ? (n.__V = t(), n.i = e, n.__h = t, n.__V) : n.__;
}
function lr(t, e) {
  return re = 8, We(function() {
    return t;
  }, e);
}
function ur(t) {
  var e = T.context[t.__c], n = G(W++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(T)), e.props.value) : t.__;
}
function dr(t, e) {
  S.useDebugValue && S.useDebugValue(e ? e(t) : t);
}
function ds(t) {
  var e = G(W++, 10), n = qe();
  return e.__ = t, T.componentDidCatch || (T.componentDidCatch = function(r, o) {
    e.__ && e.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function fr() {
  var t = G(W++, 11);
  if (!t.__) {
    for (var e = T.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var n = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + n[0] + "-" + n[1]++;
  }
  return t.__;
}
function fs() {
  for (var t; t = sr.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Re), t.__H.__h.forEach(at), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], S.__e(e, t.__v);
      }
}
S.__b = function(t) {
  T = null, rn && rn(t);
}, S.__r = function(t) {
  on && on(t), W = 0;
  var e = (T = t.__c).__H;
  e && (Qe === T ? (e.__h = [], T.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Te, n.__N = n.i = void 0;
  })) : (e.__h.forEach(Re), e.__h.forEach(at), e.__h = [], W = 0)), Qe = T;
}, S.diffed = function(t) {
  sn && sn(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (sr.push(e) !== 1 && nn === S.requestAnimationFrame || ((nn = S.requestAnimationFrame) || hs)(fs)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Te && (n.__ = n.__V), n.i = void 0, n.__V = Te;
  })), Qe = T = null;
}, S.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(Re), n.__h = n.__h.filter(function(r) {
        return !r.__ || at(r);
      });
    } catch (r) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], S.__e(r, n.__v);
    }
  }), an && an(t, e);
}, S.unmount = function(t) {
  cn && cn(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Re(r);
    } catch (o) {
      e = o;
    }
  }), n.__H = void 0, e && S.__e(e, n.__v));
};
var ln = typeof requestAnimationFrame == "function";
function hs(t) {
  var e, n = function() {
    clearTimeout(r), ln && cancelAnimationFrame(e), setTimeout(t);
  }, r = setTimeout(n, 100);
  ln && (e = requestAnimationFrame(n));
}
function Re(t) {
  var e = T, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), T = e;
}
function at(t) {
  var e = T;
  t.__c = t.__(), T = e;
}
function Lt(t, e) {
  return !t || t.length !== e.length || e.some(function(n, r) {
    return n !== t[r];
  });
}
function hr(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const Ge = "Session currently connected", K = "Session currently disconnected", _s = "Session Rejected", gs = "Missing JSON RPC response", ps = 'JSON-RPC success response must include "result" field', ms = 'JSON-RPC error response must include "error" field', ws = 'JSON RPC request must have valid "method" value', ys = 'JSON RPC request must have valid "id" value', vs = "Missing one of the required parameters: bridge / uri / session", un = "JSON RPC response format is invalid", bs = "URI format is invalid", Es = "QRCode Modal not provided", dn = "User close QRCode Modal", Cs = [
  "session_request",
  "session_update",
  "exchange_key",
  "connect",
  "disconnect",
  "display_uri",
  "modal_closed",
  "transport_open",
  "transport_close",
  "transport_error"
], Ss = [
  "wallet_addEthereumChain",
  "wallet_switchEthereumChain",
  "wallet_getPermissions",
  "wallet_requestPermissions",
  "wallet_registerOnboarding",
  "wallet_watchAsset",
  "wallet_scanQRCode"
], Bt = [
  "eth_sendTransaction",
  "eth_signTransaction",
  "eth_sign",
  "eth_signTypedData",
  "eth_signTypedData_v1",
  "eth_signTypedData_v2",
  "eth_signTypedData_v3",
  "eth_signTypedData_v4",
  "personal_sign",
  ...Ss
], ct = "WALLETCONNECT_DEEPLINK_CHOICE", Is = {
  1: "mainnet",
  3: "ropsten",
  4: "rinkeby",
  5: "goerli",
  42: "kovan"
};
function Ae(t) {
  return ce(new Uint8Array(t));
}
function ks(t) {
  return Un(new Uint8Array(t));
}
function _r(t, e) {
  return H(new Uint8Array(t), !e);
}
function Ts(t) {
  return $n(new Uint8Array(t));
}
function Rs(...t) {
  return j(t.map((e) => H(new Uint8Array(e))).join("")).buffer;
}
function gr(t) {
  return te(t).buffer;
}
function Ns(t) {
  return bt(t);
}
function xs(t, e) {
  return vt(t, !e);
}
function Ms(t) {
  return Pn(t);
}
function Os(...t) {
  return Bi(...t);
}
function As(t) {
  return Dn(t).buffer;
}
function Ls(t) {
  return Ct(t);
}
function Bs(t, e) {
  return Si(t, !e);
}
function Ps(t) {
  return Ii(t);
}
function Us(t) {
  return Et(t);
}
function pr(t) {
  return j(t).buffer;
}
function $s(t) {
  return Ei(t);
}
function Ds(t) {
  return Ci(t);
}
function qs(t) {
  return ki(t);
}
function Ws(t) {
  return Ti(t).buffer;
}
function Fs(t) {
  return Ni(t);
}
function mr(t, e) {
  return Ri(Number(t), !e);
}
var fn = globalThis && globalThis.__spreadArray || function(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = e.length, i; r < o; r++)
      (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
  return t.concat(i || Array.prototype.slice.call(e));
}, Hs = (
  /** @class */
  function() {
    function t(e, n, r) {
      this.name = e, this.version = n, this.os = r, this.type = "browser";
    }
    return t;
  }()
), js = (
  /** @class */
  function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), zs = (
  /** @class */
  function() {
    function t(e, n, r, o) {
      this.name = e, this.version = n, this.os = r, this.bot = o, this.type = "bot-device";
    }
    return t;
  }()
), Vs = (
  /** @class */
  function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Js = (
  /** @class */
  function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Ks = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Qs = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, hn = 3, Gs = [
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
  ["searchbot", Ks]
], _n = [
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
function Ys(t) {
  return t ? gn(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Js() : typeof navigator < "u" ? gn(navigator.userAgent) : ea();
}
function Xs(t) {
  return t !== "" && Gs.reduce(function(e, n) {
    var r = n[0], o = n[1];
    if (e)
      return e;
    var i = o.exec(t);
    return !!i && [r, i];
  }, !1);
}
function gn(t) {
  var e = Xs(t);
  if (!e)
    return null;
  var n = e[0], r = e[1];
  if (n === "searchbot")
    return new Vs();
  var o = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
  o ? o.length < hn && (o = fn(fn([], o, !0), ta(hn - o.length), !0)) : o = [];
  var i = o.join("."), s = Zs(t), a = Qs.exec(t);
  return a && a[1] ? new zs(n, i, s, a[1]) : new Hs(n, i, s);
}
function Zs(t) {
  for (var e = 0, n = _n.length; e < n; e++) {
    var r = _n[e], o = r[0], i = r[1], s = i.exec(t);
    if (s)
      return o;
  }
  return null;
}
function ea() {
  var t = typeof process < "u" && process.version;
  return t ? new js(process.version.slice(1)) : null;
}
function ta(t) {
  for (var e = [], n = 0; n < t; n++)
    e.push("0");
  return e;
}
var R = {};
Object.defineProperty(R, "__esModule", { value: !0 });
var wr = R.getLocalStorage = Nr = R.getLocalStorageOrThrow = Rr = R.getCrypto = Tr = R.getCryptoOrThrow = kr = R.getLocation = Ir = R.getLocationOrThrow = Sr = R.getNavigator = Cr = R.getNavigatorOrThrow = Er = R.getDocument = br = R.getDocumentOrThrow = vr = R.getFromWindowOrThrow = yr = R.getFromWindow = void 0;
function Y(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
var yr = R.getFromWindow = Y;
function le(t) {
  const e = Y(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
var vr = R.getFromWindowOrThrow = le;
function na() {
  return le("document");
}
var br = R.getDocumentOrThrow = na;
function ra() {
  return Y("document");
}
var Er = R.getDocument = ra;
function oa() {
  return le("navigator");
}
var Cr = R.getNavigatorOrThrow = oa;
function ia() {
  return Y("navigator");
}
var Sr = R.getNavigator = ia;
function sa() {
  return le("location");
}
var Ir = R.getLocationOrThrow = sa;
function aa() {
  return Y("location");
}
var kr = R.getLocation = aa;
function ca() {
  return le("crypto");
}
var Tr = R.getCryptoOrThrow = ca;
function la() {
  return Y("crypto");
}
var Rr = R.getCrypto = la;
function ua() {
  return le("localStorage");
}
var Nr = R.getLocalStorageOrThrow = ua;
function da() {
  return Y("localStorage");
}
wr = R.getLocalStorage = da;
const fa = yr, ha = vr, _a = br, ga = Er, pa = Cr, xr = Sr, ma = Ir, Mr = kr, wa = Tr, ya = Rr, va = Nr, Fe = wr;
function He(t) {
  return Ys(t);
}
function je() {
  const t = He();
  return t && t.os ? t.os : void 0;
}
function Or() {
  const t = je();
  return t ? t.toLowerCase().includes("android") : !1;
}
function Ar() {
  const t = je();
  return t ? t.toLowerCase().includes("ios") || t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : !1;
}
function Lr() {
  return je() ? Or() || Ar() : !1;
}
function Br() {
  const t = He();
  return t && t.name ? t.name.toLowerCase() === "node" : !1;
}
function Pr() {
  return !Br() && !!xr();
}
const Ur = oi, $r = ii;
function Pt(t, e) {
  const n = $r(e), r = Fe();
  r && r.setItem(t, n);
}
function Ut(t) {
  let e = null, n = null;
  const r = Fe();
  return r && (n = r.getItem(t)), e = n && Ur(n), e;
}
function $t(t) {
  const e = Fe();
  e && e.removeItem(t);
}
var Dt = {};
Object.defineProperty(Dt, "__esModule", { value: !0 });
var Dr = Dt.getWindowMetadata = void 0;
const pn = R;
function ba() {
  let t, e;
  try {
    t = pn.getDocumentOrThrow(), e = pn.getLocationOrThrow();
  } catch {
    return null;
  }
  function n() {
    const l = t.getElementsByTagName("link"), y = [];
    for (let w = 0; w < l.length; w++) {
      const p = l[w], v = p.getAttribute("rel");
      if (v && v.toLowerCase().indexOf("icon") > -1) {
        const d = p.getAttribute("href");
        if (d)
          if (d.toLowerCase().indexOf("https:") === -1 && d.toLowerCase().indexOf("http:") === -1 && d.indexOf("//") !== 0) {
            let u = e.protocol + "//" + e.host;
            if (d.indexOf("/") === 0)
              u += d;
            else {
              const h = e.pathname.split("/");
              h.pop();
              const f = h.join("/");
              u += f + "/" + d;
            }
            y.push(u);
          } else if (d.indexOf("//") === 0) {
            const u = e.protocol + d;
            y.push(u);
          } else
            y.push(d);
      }
    }
    return y;
  }
  function r(...l) {
    const y = t.getElementsByTagName("meta");
    for (let w = 0; w < y.length; w++) {
      const p = y[w], v = ["itemprop", "property", "name"].map((d) => p.getAttribute(d)).filter((d) => d ? l.includes(d) : !1);
      if (v.length && v) {
        const d = p.getAttribute("content");
        if (d)
          return d;
      }
    }
    return "";
  }
  function o() {
    let l = r("name", "og:site_name", "og:title", "twitter:title");
    return l || (l = t.title), l;
  }
  function i() {
    return r("description", "og:description", "twitter:description", "keywords");
  }
  const s = o(), a = i(), c = e.origin, m = n();
  return {
    description: a,
    url: c,
    icons: m,
    name: s
  };
}
Dr = Dt.getWindowMetadata = ba;
function lt() {
  return Dr();
}
function Ea(t) {
  return Di(t);
}
function Ca(t) {
  return ye(t);
}
function Sa(t) {
  return ne(t);
}
function Ia(t) {
  return qi(ye(t));
}
const qr = si;
function Ne() {
  return ((e, n) => {
    for (n = e = ""; e++ < 36; n += e * 51 & 52 ? (e ^ 15 ? 8 ^ Math.random() * (e ^ 20 ? 16 : 4) : 4).toString(16) : "-")
      ;
    return n;
  })();
}
function ka() {
  console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!");
}
function Wr(t, e) {
  let n;
  const r = Is[t];
  return r && (n = `https://${r}.infura.io/v3/${e}`), n;
}
function Fr(t, e) {
  let n;
  const r = Wr(t, e.infuraId);
  return e.custom && e.custom[t] ? n = e.custom[t] : r && (n = r), n;
}
function Ta(t, e) {
  const n = encodeURIComponent(t);
  return e.universalLink ? `${e.universalLink}/wc?uri=${n}` : e.deepLink ? `${e.deepLink}${e.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${n}` : "";
}
function Ra(t) {
  const e = t.href.split("?")[0];
  Pt(ct, Object.assign(Object.assign({}, t), { href: e }));
}
function Hr(t, e) {
  return t.filter((n) => n.name.toLowerCase().includes(e.toLowerCase()))[0];
}
function Na(t, e) {
  let n = t;
  return e && (n = e.map((r) => Hr(t, r)).filter(Boolean)), n;
}
function xa(t, e) {
  return async (...r) => new Promise((o, i) => {
    const s = (a, c) => {
      (a === null || typeof a > "u") && i(a), o(c);
    };
    t.apply(e, [...r, s]);
  });
}
function jr(t) {
  const e = t.message || "Failed or Rejected Request";
  let n = -32e3;
  if (t && !t.code)
    switch (e) {
      case "Parse error":
        n = -32700;
        break;
      case "Invalid request":
        n = -32600;
        break;
      case "Method not found":
        n = -32601;
        break;
      case "Invalid params":
        n = -32602;
        break;
      case "Internal error":
        n = -32603;
        break;
      default:
        n = -32e3;
        break;
    }
  const r = {
    code: n,
    message: e
  };
  return t.data && (r.data = t.data), r;
}
const zr = "https://registry.walletconnect.com";
function Ma() {
  return zr + "/api/v2/wallets";
}
function Oa() {
  return zr + "/api/v2/dapps";
}
function Vr(t, e = "mobile") {
  var n;
  return {
    name: t.name || "",
    shortName: t.metadata.shortName || "",
    color: t.metadata.colors.primary || "",
    logo: (n = t.image_url.sm) !== null && n !== void 0 ? n : "",
    universalLink: t[e].universal || "",
    deepLink: t[e].native || ""
  };
}
function Aa(t, e = "mobile") {
  return Object.values(t).filter((n) => !!n[e].universal || !!n[e].native).map((n) => Vr(n, e));
}
function Jr(t) {
  const e = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0;
  return typeof e < "u" ? t.substr(e) : "";
}
function Kr(t, e) {
  let n = qt(t);
  return n = Object.assign(Object.assign({}, n), e), t = Qr(n), t;
}
function qt(t) {
  return Rt.parse(t);
}
function Qr(t) {
  return Rt.stringify(t);
}
function Gr(t) {
  return typeof t.bridge < "u";
}
function Yr(t) {
  const e = t.indexOf(":"), n = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, r = t.substring(0, e), o = t.substring(e + 1, n);
  function i(l) {
    const y = "@", w = l.split(y);
    return {
      handshakeTopic: w[0],
      version: parseInt(w[1], 10)
    };
  }
  const s = i(o), a = typeof n < "u" ? t.substr(n) : "";
  function c(l) {
    const y = qt(l);
    return {
      key: y.key || "",
      bridge: y.bridge || ""
    };
  }
  const m = c(a);
  return Object.assign(Object.assign({ protocol: r }, s), m);
}
function La(t) {
  return t === "" || typeof t == "string" && t.trim() === "";
}
function Ba(t) {
  return !(t && t.length);
}
function Pa(t) {
  return $e(t);
}
function Ua(t) {
  return kt(t);
}
function $a(t) {
  return Wn(t);
}
function Da(t) {
  return Ai(t);
}
function qa(t) {
  return Li(t);
}
function Wa(t, e) {
  return qn(t, e);
}
function Fa(t) {
  return typeof t.params == "object";
}
function Xr(t) {
  return typeof t.method < "u";
}
function X(t) {
  return typeof t.result < "u";
}
function pe(t) {
  return typeof t.error < "u";
}
function ut(t) {
  return typeof t.event < "u";
}
function Zr(t) {
  return Cs.includes(t) || t.startsWith("wc_");
}
function eo(t) {
  return t.method.startsWith("wc_") ? !0 : !Bt.includes(t.method);
}
const Ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addHexPrefix: Ca,
  appendToQueryString: Kr,
  concatArrayBuffers: Rs,
  concatBuffers: Os,
  convertArrayBufferToBuffer: Ae,
  convertArrayBufferToHex: _r,
  convertArrayBufferToNumber: Ts,
  convertArrayBufferToUtf8: ks,
  convertBufferToArrayBuffer: gr,
  convertBufferToHex: xs,
  convertBufferToNumber: Ms,
  convertBufferToUtf8: Ns,
  convertHexToArrayBuffer: pr,
  convertHexToBuffer: Us,
  convertHexToNumber: Ds,
  convertHexToUtf8: $s,
  convertNumberToArrayBuffer: Ws,
  convertNumberToBuffer: qs,
  convertNumberToHex: mr,
  convertNumberToUtf8: Fs,
  convertUtf8ToArrayBuffer: As,
  convertUtf8ToBuffer: Ls,
  convertUtf8ToHex: Bs,
  convertUtf8ToNumber: Ps,
  detectEnv: He,
  detectOS: je,
  formatIOSMobile: Ta,
  formatMobileRegistry: Aa,
  formatMobileRegistryEntry: Vr,
  formatQueryString: Qr,
  formatRpcError: jr,
  getClientMeta: lt,
  getCrypto: ya,
  getCryptoOrThrow: wa,
  getDappRegistryUrl: Oa,
  getDocument: ga,
  getDocumentOrThrow: _a,
  getEncoding: qa,
  getFromWindow: fa,
  getFromWindowOrThrow: ha,
  getInfuraRpcUrl: Wr,
  getLocal: Ut,
  getLocalStorage: Fe,
  getLocalStorageOrThrow: va,
  getLocation: Mr,
  getLocationOrThrow: ma,
  getMobileLinkRegistry: Na,
  getMobileRegistryEntry: Hr,
  getNavigator: xr,
  getNavigatorOrThrow: pa,
  getQueryString: Jr,
  getRpcUrl: Fr,
  getType: Da,
  getWalletRegistryUrl: Ma,
  isAndroid: Or,
  isArrayBuffer: $a,
  isBrowser: Pr,
  isBuffer: Pa,
  isEmptyArray: Ba,
  isEmptyString: La,
  isHexString: Wa,
  isIOS: Ar,
  isInternalEvent: ut,
  isJsonRpcRequest: Xr,
  isJsonRpcResponseError: pe,
  isJsonRpcResponseSuccess: X,
  isJsonRpcSubscription: Fa,
  isMobile: Lr,
  isNode: Br,
  isReservedEvent: Zr,
  isSilentPayload: eo,
  isTypedArray: Ua,
  isWalletConnectSession: Gr,
  logDeprecationWarning: ka,
  parseQueryString: qt,
  parseWalletConnectUri: Yr,
  payloadId: qr,
  promisify: xa,
  removeHexLeadingZeros: Ia,
  removeHexPrefix: Sa,
  removeLocal: $t,
  safeJsonParse: Ur,
  safeJsonStringify: $r,
  sanitizeHex: Ea,
  saveMobileLinkInfo: Ra,
  setLocal: Pt,
  uuid: Ne
}, Symbol.toStringTag, { value: "Module" }));
class ja {
  constructor() {
    this._eventEmitters = [], typeof window < "u" && typeof window.addEventListener < "u" && (window.addEventListener("online", () => this.trigger("online")), window.addEventListener("offline", () => this.trigger("offline")));
  }
  on(e, n) {
    this._eventEmitters.push({
      event: e,
      callback: n
    });
  }
  trigger(e) {
    let n = [];
    e && (n = this._eventEmitters.filter((r) => r.event === e)), n.forEach((r) => {
      r.callback();
    });
  }
}
const za = typeof global.WebSocket < "u" ? global.WebSocket : require("ws");
class Va {
  constructor(e) {
    if (this.opts = e, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = e.protocol, this._version = e.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = e.subscriptions || [], this._netMonitor = e.netMonitor || new ja(), !e.url || typeof e.url != "string")
      throw new Error("Missing or invalid WebSocket url");
    this._url = e.url, this._netMonitor.on("online", () => this._socketCreate());
  }
  set readyState(e) {
  }
  get readyState() {
    return this._socket ? this._socket.readyState : -1;
  }
  set connecting(e) {
  }
  get connecting() {
    return this.readyState === 0;
  }
  set connected(e) {
  }
  get connected() {
    return this.readyState === 1;
  }
  set closing(e) {
  }
  get closing() {
    return this.readyState === 2;
  }
  set closed(e) {
  }
  get closed() {
    return this.readyState === 3;
  }
  open() {
    this._socketCreate();
  }
  close() {
    this._socketClose();
  }
  send(e, n, r) {
    if (!n || typeof n != "string")
      throw new Error("Missing or invalid topic field");
    this._socketSend({
      topic: n,
      type: "pub",
      payload: e,
      silent: !!r
    });
  }
  subscribe(e) {
    this._socketSend({
      topic: e,
      type: "sub",
      payload: "",
      silent: !0
    });
  }
  on(e, n) {
    this._events.push({ event: e, callback: n });
  }
  _socketCreate() {
    if (this._nextSocket)
      return;
    const e = Ja(this._url, this._protocol, this._version);
    if (this._nextSocket = new za(e), !this._nextSocket)
      throw new Error("Failed to create socket");
    this._nextSocket.onmessage = (n) => this._socketReceive(n), this._nextSocket.onopen = () => this._socketOpen(), this._nextSocket.onerror = (n) => this._socketError(n), this._nextSocket.onclose = () => {
      setTimeout(() => {
        this._nextSocket = null, this._socketCreate();
      }, 1e3);
    };
  }
  _socketOpen() {
    this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue();
  }
  _socketClose() {
    this._socket && (this._socket.onclose = () => {
    }, this._socket.close());
  }
  _socketSend(e) {
    const n = JSON.stringify(e);
    this._socket && this._socket.readyState === 1 ? this._socket.send(n) : (this._setToQueue(e), this._socketCreate());
  }
  async _socketReceive(e) {
    let n;
    try {
      n = JSON.parse(e.data);
    } catch {
      return;
    }
    if (this._socketSend({
      topic: n.topic,
      type: "ack",
      payload: "",
      silent: !0
    }), this._socket && this._socket.readyState === 1) {
      const r = this._events.filter((o) => o.event === "message");
      r && r.length && r.forEach((o) => o.callback(n));
    }
  }
  _socketError(e) {
    const n = this._events.filter((r) => r.event === "error");
    n && n.length && n.forEach((r) => r.callback(e));
  }
  _queueSubscriptions() {
    this._subscriptions.forEach((n) => this._queue.push({
      topic: n,
      type: "sub",
      payload: "",
      silent: !0
    })), this._subscriptions = this.opts.subscriptions || [];
  }
  _setToQueue(e) {
    this._queue.push(e);
  }
  _pushQueue() {
    this._queue.forEach((n) => this._socketSend(n)), this._queue = [];
  }
}
function Ja(t, e, n) {
  var r, o;
  const s = (t.startsWith("https") ? t.replace("https", "wss") : t.startsWith("http") ? t.replace("http", "ws") : t).split("?"), a = Pr() ? {
    protocol: e,
    version: n,
    env: "browser",
    host: ((r = Mr()) === null || r === void 0 ? void 0 : r.host) || ""
  } : {
    protocol: e,
    version: n,
    env: ((o = He()) === null || o === void 0 ? void 0 : o.name) || ""
  }, c = Kr(Jr(s[1] || ""), a);
  return s[0] + "?" + c;
}
class Ka {
  constructor() {
    this._eventEmitters = [];
  }
  subscribe(e) {
    this._eventEmitters.push(e);
  }
  unsubscribe(e) {
    this._eventEmitters = this._eventEmitters.filter((n) => n.event !== e);
  }
  trigger(e) {
    let n = [], r;
    Xr(e) ? r = e.method : X(e) || pe(e) ? r = `response:${e.id}` : ut(e) ? r = e.event : r = "", r && (n = this._eventEmitters.filter((o) => o.event === r)), (!n || !n.length) && !Zr(r) && !ut(r) && (n = this._eventEmitters.filter((o) => o.event === "call_request")), n.forEach((o) => {
      if (pe(e)) {
        const i = new Error(e.error.message);
        o.callback(i, null);
      } else
        o.callback(null, e);
    });
  }
}
class Qa {
  constructor(e = "walletconnect") {
    this.storageId = e;
  }
  getSession() {
    let e = null;
    const n = Ut(this.storageId);
    return n && Gr(n) && (e = n), e;
  }
  setSession(e) {
    return Pt(this.storageId, e), e;
  }
  removeSession() {
    $t(this.storageId);
  }
}
const Ga = "walletconnect.org", Ya = "abcdefghijklmnopqrstuvwxyz0123456789", to = Ya.split("").map((t) => `https://${t}.bridge.walletconnect.org`);
function Xa(t) {
  let e = t.indexOf("//") > -1 ? t.split("/")[2] : t.split("/")[0];
  return e = e.split(":")[0], e = e.split("?")[0], e;
}
function Za(t) {
  return Xa(t).split(".").slice(-2).join(".");
}
function ec() {
  return Math.floor(Math.random() * to.length);
}
function tc() {
  return to[ec()];
}
function nc(t) {
  return Za(t) === Ga;
}
function rc(t) {
  return nc(t) ? tc() : t;
}
class oc {
  constructor(e) {
    if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new Ka(), this._clientMeta = lt() || e.connectorOpts.clientMeta || null, this._cryptoLib = e.cryptoLib, this._sessionStorage = e.sessionStorage || new Qa(e.connectorOpts.storageId), this._qrcodeModal = e.connectorOpts.qrcodeModal, this._qrcodeModalOptions = e.connectorOpts.qrcodeModalOptions, this._signingMethods = [...Bt, ...e.connectorOpts.signingMethods || []], !e.connectorOpts.bridge && !e.connectorOpts.uri && !e.connectorOpts.session)
      throw new Error(vs);
    e.connectorOpts.bridge && (this.bridge = rc(e.connectorOpts.bridge)), e.connectorOpts.uri && (this.uri = e.connectorOpts.uri);
    const n = e.connectorOpts.session || this._getStorageSession();
    n && (this.session = n), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = e.transport || new Va({
      protocol: this.protocol,
      version: this.version,
      url: this.bridge,
      subscriptions: [this.clientId]
    }), this._subscribeToInternalEvents(), this._initTransport(), e.connectorOpts.uri && this._subscribeToSessionRequest(), e.pushServerOpts && this._registerPushServer(e.pushServerOpts);
  }
  set bridge(e) {
    e && (this._bridge = e);
  }
  get bridge() {
    return this._bridge;
  }
  set key(e) {
    if (!e)
      return;
    const n = pr(e);
    this._key = n;
  }
  get key() {
    return this._key ? _r(this._key, !0) : "";
  }
  set clientId(e) {
    e && (this._clientId = e);
  }
  get clientId() {
    let e = this._clientId;
    return e || (e = this._clientId = Ne()), this._clientId;
  }
  set peerId(e) {
    e && (this._peerId = e);
  }
  get peerId() {
    return this._peerId;
  }
  set clientMeta(e) {
  }
  get clientMeta() {
    let e = this._clientMeta;
    return e || (e = this._clientMeta = lt()), e;
  }
  set peerMeta(e) {
    this._peerMeta = e;
  }
  get peerMeta() {
    return this._peerMeta;
  }
  set handshakeTopic(e) {
    e && (this._handshakeTopic = e);
  }
  get handshakeTopic() {
    return this._handshakeTopic;
  }
  set handshakeId(e) {
    e && (this._handshakeId = e);
  }
  get handshakeId() {
    return this._handshakeId;
  }
  get uri() {
    return this._formatUri();
  }
  set uri(e) {
    if (!e)
      return;
    const { handshakeTopic: n, bridge: r, key: o } = this._parseUri(e);
    this.handshakeTopic = n, this.bridge = r, this.key = o;
  }
  set chainId(e) {
    this._chainId = e;
  }
  get chainId() {
    return this._chainId;
  }
  set networkId(e) {
    this._networkId = e;
  }
  get networkId() {
    return this._networkId;
  }
  set accounts(e) {
    this._accounts = e;
  }
  get accounts() {
    return this._accounts;
  }
  set rpcUrl(e) {
    this._rpcUrl = e;
  }
  get rpcUrl() {
    return this._rpcUrl;
  }
  set connected(e) {
  }
  get connected() {
    return this._connected;
  }
  set pending(e) {
  }
  get pending() {
    return !!this._handshakeTopic;
  }
  get session() {
    return {
      connected: this.connected,
      accounts: this.accounts,
      chainId: this.chainId,
      bridge: this.bridge,
      key: this.key,
      clientId: this.clientId,
      clientMeta: this.clientMeta,
      peerId: this.peerId,
      peerMeta: this.peerMeta,
      handshakeId: this.handshakeId,
      handshakeTopic: this.handshakeTopic
    };
  }
  set session(e) {
    e && (this._connected = e.connected, this.accounts = e.accounts, this.chainId = e.chainId, this.bridge = e.bridge, this.key = e.key, this.clientId = e.clientId, this.clientMeta = e.clientMeta, this.peerId = e.peerId, this.peerMeta = e.peerMeta, this.handshakeId = e.handshakeId, this.handshakeTopic = e.handshakeTopic);
  }
  on(e, n) {
    const r = {
      event: e,
      callback: n
    };
    this._eventManager.subscribe(r);
  }
  off(e) {
    this._eventManager.unsubscribe(e);
  }
  async createInstantRequest(e) {
    this._key = await this._generateKey();
    const n = this._formatRequest({
      method: "wc_instantRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          request: this._formatRequest(e)
        }
      ]
    });
    this.handshakeId = n.id, this.handshakeTopic = Ne(), this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    }), this.on("modal_closed", () => {
      throw new Error(dn);
    });
    const r = () => {
      this.killSession();
    };
    try {
      const o = await this._sendCallRequest(n);
      return o && r(), o;
    } catch (o) {
      throw r(), o;
    }
  }
  async connect(e) {
    if (!this._qrcodeModal)
      throw new Error(Es);
    return this.connected ? {
      chainId: this.chainId,
      accounts: this.accounts
    } : (await this.createSession(e), new Promise(async (n, r) => {
      this.on("modal_closed", () => r(new Error(dn))), this.on("connect", (o, i) => {
        if (o)
          return r(o);
        n(i.params[0]);
      });
    }));
  }
  async createSession(e) {
    if (this._connected)
      throw new Error(Ge);
    if (this.pending)
      return;
    this._key = await this._generateKey();
    const n = this._formatRequest({
      method: "wc_sessionRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          chainId: e && e.chainId ? e.chainId : null
        }
      ]
    });
    this.handshakeId = n.id, this.handshakeTopic = Ne(), this._sendSessionRequest(n, "Session update rejected", {
      topic: this.handshakeTopic
    }), this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    });
  }
  approveSession(e) {
    if (this._connected)
      throw new Error(Ge);
    this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
    const n = {
      approved: !0,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl,
      peerId: this.clientId,
      peerMeta: this.clientMeta
    }, r = {
      id: this.handshakeId,
      jsonrpc: "2.0",
      result: n
    };
    this._sendResponse(r), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
      event: "connect",
      params: [
        {
          peerId: this.peerId,
          peerMeta: this.peerMeta,
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    });
  }
  rejectSession(e) {
    if (this._connected)
      throw new Error(Ge);
    const n = e && e.message ? e.message : _s, r = this._formatResponse({
      id: this.handshakeId,
      error: { message: n }
    });
    this._sendResponse(r), this._connected = !1, this._eventManager.trigger({
      event: "disconnect",
      params: [{ message: n }]
    }), this._removeStorageSession();
  }
  updateSession(e) {
    if (!this._connected)
      throw new Error(K);
    this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
    const n = {
      approved: !0,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl
    }, r = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [n]
    });
    this._sendSessionRequest(r, "Session update rejected"), this._eventManager.trigger({
      event: "session_update",
      params: [
        {
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    }), this._manageStorageSession();
  }
  async killSession(e) {
    const n = e ? e.message : "Session Disconnected", r = {
      approved: !1,
      chainId: null,
      networkId: null,
      accounts: null
    }, o = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [r]
    });
    await this._sendRequest(o), this._handleSessionDisconnect(n);
  }
  async sendTransaction(e) {
    if (!this._connected)
      throw new Error(K);
    const n = e, r = this._formatRequest({
      method: "eth_sendTransaction",
      params: [n]
    });
    return await this._sendCallRequest(r);
  }
  async signTransaction(e) {
    if (!this._connected)
      throw new Error(K);
    const n = e, r = this._formatRequest({
      method: "eth_signTransaction",
      params: [n]
    });
    return await this._sendCallRequest(r);
  }
  async signMessage(e) {
    if (!this._connected)
      throw new Error(K);
    const n = this._formatRequest({
      method: "eth_sign",
      params: e
    });
    return await this._sendCallRequest(n);
  }
  async signPersonalMessage(e) {
    if (!this._connected)
      throw new Error(K);
    const n = this._formatRequest({
      method: "personal_sign",
      params: e
    });
    return await this._sendCallRequest(n);
  }
  async signTypedData(e) {
    if (!this._connected)
      throw new Error(K);
    const n = this._formatRequest({
      method: "eth_signTypedData",
      params: e
    });
    return await this._sendCallRequest(n);
  }
  async updateChain(e) {
    if (!this._connected)
      throw new Error("Session currently disconnected");
    const n = this._formatRequest({
      method: "wallet_updateChain",
      params: [e]
    });
    return await this._sendCallRequest(n);
  }
  unsafeSend(e, n) {
    return this._sendRequest(e, n), this._eventManager.trigger({
      event: "call_request_sent",
      params: [{ request: e, options: n }]
    }), new Promise((r, o) => {
      this._subscribeToResponse(e.id, (i, s) => {
        if (i) {
          o(i);
          return;
        }
        if (!s)
          throw new Error(gs);
        r(s);
      });
    });
  }
  async sendCustomRequest(e, n) {
    if (!this._connected)
      throw new Error(K);
    switch (e.method) {
      case "eth_accounts":
        return this.accounts;
      case "eth_chainId":
        return mr(this.chainId);
      case "eth_sendTransaction":
      case "eth_signTransaction":
        e.params;
        break;
      case "personal_sign":
        e.params;
        break;
    }
    const r = this._formatRequest(e);
    return await this._sendCallRequest(r, n);
  }
  approveRequest(e) {
    if (X(e)) {
      const n = this._formatResponse(e);
      this._sendResponse(n);
    } else
      throw new Error(ps);
  }
  rejectRequest(e) {
    if (pe(e)) {
      const n = this._formatResponse(e);
      this._sendResponse(n);
    } else
      throw new Error(ms);
  }
  transportClose() {
    this._transport.close();
  }
  async _sendRequest(e, n) {
    const r = this._formatRequest(e), o = await this._encrypt(r), i = typeof (n == null ? void 0 : n.topic) < "u" ? n.topic : this.peerId, s = JSON.stringify(o), a = typeof (n == null ? void 0 : n.forcePushNotification) < "u" ? !n.forcePushNotification : eo(r);
    this._transport.send(s, i, a);
  }
  async _sendResponse(e) {
    const n = await this._encrypt(e), r = this.peerId, o = JSON.stringify(n), i = !0;
    this._transport.send(o, r, i);
  }
  async _sendSessionRequest(e, n, r) {
    this._sendRequest(e, r), this._subscribeToSessionResponse(e.id, n);
  }
  _sendCallRequest(e, n) {
    return this._sendRequest(e, n), this._eventManager.trigger({
      event: "call_request_sent",
      params: [{ request: e, options: n }]
    }), this._subscribeToCallResponse(e.id);
  }
  _formatRequest(e) {
    if (typeof e.method > "u")
      throw new Error(ws);
    return {
      id: typeof e.id > "u" ? qr() : e.id,
      jsonrpc: "2.0",
      method: e.method,
      params: typeof e.params > "u" ? [] : e.params
    };
  }
  _formatResponse(e) {
    if (typeof e.id > "u")
      throw new Error(ys);
    const n = { id: e.id, jsonrpc: "2.0" };
    if (pe(e)) {
      const r = jr(e.error);
      return Object.assign(Object.assign(Object.assign({}, n), e), { error: r });
    } else if (X(e))
      return Object.assign(Object.assign({}, n), e);
    throw new Error(un);
  }
  _handleSessionDisconnect(e) {
    const n = e || "Session Disconnected";
    this._connected || (this._qrcodeModal && this._qrcodeModal.close(), $t(ct)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), this._eventManager.trigger({
      event: "disconnect",
      params: [{ message: n }]
    }), this._removeStorageSession(), this.transportClose();
  }
  _handleSessionResponse(e, n) {
    n ? n.approved ? (this._connected ? (n.chainId && (this.chainId = n.chainId), n.accounts && (this.accounts = n.accounts), this._eventManager.trigger({
      event: "session_update",
      params: [
        {
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    })) : (this._connected = !0, n.chainId && (this.chainId = n.chainId), n.accounts && (this.accounts = n.accounts), n.peerId && !this.peerId && (this.peerId = n.peerId), n.peerMeta && !this.peerMeta && (this.peerMeta = n.peerMeta), this._eventManager.trigger({
      event: "connect",
      params: [
        {
          peerId: this.peerId,
          peerMeta: this.peerMeta,
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    })), this._manageStorageSession()) : this._handleSessionDisconnect(e) : this._handleSessionDisconnect(e);
  }
  async _handleIncomingMessages(e) {
    if (![this.clientId, this.handshakeTopic].includes(e.topic))
      return;
    let r;
    try {
      r = JSON.parse(e.payload);
    } catch {
      return;
    }
    const o = await this._decrypt(r);
    o && this._eventManager.trigger(o);
  }
  _subscribeToSessionRequest() {
    this._transport.subscribe(this.handshakeTopic);
  }
  _subscribeToResponse(e, n) {
    this.on(`response:${e}`, n);
  }
  _subscribeToSessionResponse(e, n) {
    this._subscribeToResponse(e, (r, o) => {
      if (r) {
        this._handleSessionResponse(r.message);
        return;
      }
      X(o) ? this._handleSessionResponse(n, o.result) : o.error && o.error.message ? this._handleSessionResponse(o.error.message) : this._handleSessionResponse(n);
    });
  }
  _subscribeToCallResponse(e) {
    return new Promise((n, r) => {
      this._subscribeToResponse(e, (o, i) => {
        if (o) {
          r(o);
          return;
        }
        X(i) ? n(i.result) : i.error && i.error.message ? r(i.error) : r(new Error(un));
      });
    });
  }
  _subscribeToInternalEvents() {
    this.on("display_uri", () => {
      this._qrcodeModal && this._qrcodeModal.open(this.uri, () => {
        this._eventManager.trigger({
          event: "modal_closed",
          params: []
        });
      }, this._qrcodeModalOptions);
    }), this.on("connect", () => {
      this._qrcodeModal && this._qrcodeModal.close();
    }), this.on("call_request_sent", (e, n) => {
      const { request: r } = n.params[0];
      if (Lr() && this._signingMethods.includes(r.method)) {
        const o = Ut(ct);
        o && (window.location.href = o.href);
      }
    }), this.on("wc_sessionRequest", (e, n) => {
      e && this._eventManager.trigger({
        event: "error",
        params: [
          {
            code: "SESSION_REQUEST_ERROR",
            message: e.toString()
          }
        ]
      }), this.handshakeId = n.id, this.peerId = n.params[0].peerId, this.peerMeta = n.params[0].peerMeta;
      const r = Object.assign(Object.assign({}, n), { method: "session_request" });
      this._eventManager.trigger(r);
    }), this.on("wc_sessionUpdate", (e, n) => {
      e && this._handleSessionResponse(e.message), this._handleSessionResponse("Session disconnected", n.params[0]);
    });
  }
  _initTransport() {
    this._transport.on("message", (e) => this._handleIncomingMessages(e)), this._transport.on("open", () => this._eventManager.trigger({ event: "transport_open", params: [] })), this._transport.on("close", () => this._eventManager.trigger({ event: "transport_close", params: [] })), this._transport.on("error", () => this._eventManager.trigger({
      event: "transport_error",
      params: ["Websocket connection failed"]
    })), this._transport.open();
  }
  _formatUri() {
    const e = this.protocol, n = this.handshakeTopic, r = this.version, o = encodeURIComponent(this.bridge), i = this.key;
    return `${e}:${n}@${r}?bridge=${o}&key=${i}`;
  }
  _parseUri(e) {
    const n = Yr(e);
    if (n.protocol === this.protocol) {
      if (!n.handshakeTopic)
        throw Error("Invalid or missing handshakeTopic parameter value");
      const r = n.handshakeTopic;
      if (!n.bridge)
        throw Error("Invalid or missing bridge url parameter value");
      const o = decodeURIComponent(n.bridge);
      if (!n.key)
        throw Error("Invalid or missing key parameter value");
      const i = n.key;
      return { handshakeTopic: r, bridge: o, key: i };
    } else
      throw new Error(bs);
  }
  async _generateKey() {
    return this._cryptoLib ? await this._cryptoLib.generateKey() : null;
  }
  async _encrypt(e) {
    const n = this._key;
    return this._cryptoLib && n ? await this._cryptoLib.encrypt(e, n) : null;
  }
  async _decrypt(e) {
    const n = this._key;
    return this._cryptoLib && n ? await this._cryptoLib.decrypt(e, n) : null;
  }
  _getStorageSession() {
    let e = null;
    return this._sessionStorage && (e = this._sessionStorage.getSession()), e;
  }
  _setStorageSession() {
    this._sessionStorage && this._sessionStorage.setSession(this.session);
  }
  _removeStorageSession() {
    this._sessionStorage && this._sessionStorage.removeSession();
  }
  _manageStorageSession() {
    this._connected ? this._setStorageSession() : this._removeStorageSession();
  }
  _registerPushServer(e) {
    if (!e.url || typeof e.url != "string")
      throw Error("Invalid or missing pushServerOpts.url parameter value");
    if (!e.type || typeof e.type != "string")
      throw Error("Invalid or missing pushServerOpts.type parameter value");
    if (!e.token || typeof e.token != "string")
      throw Error("Invalid or missing pushServerOpts.token parameter value");
    const n = {
      bridge: this.bridge,
      topic: this.clientId,
      type: e.type,
      token: e.token,
      peerName: "",
      language: e.language || ""
    };
    this.on("connect", async (r, o) => {
      if (r)
        throw r;
      if (e.peerMeta) {
        const i = o.params[0].peerMeta.name;
        n.peerName = i;
      }
      try {
        if (!(await (await fetch(`${e.url}/new`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(n)
        })).json()).success)
          throw Error("Failed to register in Push Server");
      } catch {
        throw Error("Failed to register in Push Server");
      }
    });
  }
}
async function no(t) {
  const e = (t || 256) / 8, n = zi(e);
  return gr(ce(n));
}
async function ro(t, e) {
  const n = j(t.data), r = j(t.iv), o = j(t.hmac), i = H(o, !1), s = Fn(n, r), a = await zn(e, s), c = H(a, !1);
  return ne(i) === ne(c);
}
async function ic(t, e, n) {
  const r = te(Ae(e)), o = n || await no(128), i = te(Ae(o)), s = H(i, !1), a = JSON.stringify(t), c = Dn(a), m = await rs(i, r, c), g = H(m, !1), l = Fn(m, i), y = await zn(r, l), w = H(y, !1);
  return {
    data: g,
    hmac: w,
    iv: s
  };
}
async function sc(t, e) {
  const n = te(Ae(e));
  if (!n)
    throw new Error("Missing key: required for decryption");
  if (!await ro(t, n))
    return null;
  const o = j(t.data), i = j(t.iv), s = await os(i, n, o), a = Un(s);
  let c;
  try {
    c = JSON.parse(a);
  } catch {
    return null;
  }
  return c;
}
const ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decrypt: sc,
  encrypt: ic,
  generateKey: no,
  verifyHmac: ro
}, Symbol.toStringTag, { value: "Module" }));
class cc extends oc {
  constructor(e, n) {
    super({
      cryptoLib: ac,
      connectorOpts: e,
      pushServerOpts: n
    });
  }
}
const lc = /* @__PURE__ */ Mn(Ha);
var Ee = {}, uc = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, oo = {}, L = {};
let Wt;
const dc = [
  0,
  // Not used
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
L.getSymbolSize = function(e) {
  if (!e)
    throw new Error('"version" cannot be null or undefined');
  if (e < 1 || e > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return e * 4 + 17;
};
L.getSymbolTotalCodewords = function(e) {
  return dc[e];
};
L.getBCHDigit = function(t) {
  let e = 0;
  for (; t !== 0; )
    e++, t >>>= 1;
  return e;
};
L.setToSJISFunction = function(e) {
  if (typeof e != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Wt = e;
};
L.isKanjiModeEnabled = function() {
  return typeof Wt < "u";
};
L.toSJIS = function(e) {
  return Wt(e);
};
var ze = {};
(function(t) {
  t.L = { bit: 1 }, t.M = { bit: 0 }, t.Q = { bit: 3 }, t.H = { bit: 2 };
  function e(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "l":
      case "low":
        return t.L;
      case "m":
      case "medium":
        return t.M;
      case "q":
      case "quartile":
        return t.Q;
      case "h":
      case "high":
        return t.H;
      default:
        throw new Error("Unknown EC Level: " + n);
    }
  }
  t.isValid = function(r) {
    return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4;
  }, t.from = function(r, o) {
    if (t.isValid(r))
      return r;
    try {
      return e(r);
    } catch {
      return o;
    }
  };
})(ze);
function io() {
  this.buffer = [], this.length = 0;
}
io.prototype = {
  get: function(t) {
    const e = Math.floor(t / 8);
    return (this.buffer[e] >>> 7 - t % 8 & 1) === 1;
  },
  put: function(t, e) {
    for (let n = 0; n < e; n++)
      this.putBit((t >>> e - n - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(t) {
    const e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
  }
};
var fc = io;
function Ce(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
}
Ce.prototype.set = function(t, e, n, r) {
  const o = t * this.size + e;
  this.data[o] = n, r && (this.reservedBit[o] = !0);
};
Ce.prototype.get = function(t, e) {
  return this.data[t * this.size + e];
};
Ce.prototype.xor = function(t, e, n) {
  this.data[t * this.size + e] ^= n;
};
Ce.prototype.isReserved = function(t, e) {
  return this.reservedBit[t * this.size + e];
};
var hc = Ce, so = {};
(function(t) {
  const e = L.getSymbolSize;
  t.getRowColCoords = function(r) {
    if (r === 1)
      return [];
    const o = Math.floor(r / 7) + 2, i = e(r), s = i === 145 ? 26 : Math.ceil((i - 13) / (2 * o - 2)) * 2, a = [i - 7];
    for (let c = 1; c < o - 1; c++)
      a[c] = a[c - 1] - s;
    return a.push(6), a.reverse();
  }, t.getPositions = function(r) {
    const o = [], i = t.getRowColCoords(r), s = i.length;
    for (let a = 0; a < s; a++)
      for (let c = 0; c < s; c++)
        a === 0 && c === 0 || // top-left
        a === 0 && c === s - 1 || // bottom-left
        a === s - 1 && c === 0 || o.push([i[a], i[c]]);
    return o;
  };
})(so);
var ao = {};
const _c = L.getSymbolSize, mn = 7;
ao.getPositions = function(e) {
  const n = _c(e);
  return [
    // top-left
    [0, 0],
    // top-right
    [n - mn, 0],
    // bottom-left
    [0, n - mn]
  ];
};
var co = {};
(function(t) {
  t.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const e = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  t.isValid = function(o) {
    return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
  }, t.from = function(o) {
    return t.isValid(o) ? parseInt(o, 10) : void 0;
  }, t.getPenaltyN1 = function(o) {
    const i = o.size;
    let s = 0, a = 0, c = 0, m = null, g = null;
    for (let l = 0; l < i; l++) {
      a = c = 0, m = g = null;
      for (let y = 0; y < i; y++) {
        let w = o.get(l, y);
        w === m ? a++ : (a >= 5 && (s += e.N1 + (a - 5)), m = w, a = 1), w = o.get(y, l), w === g ? c++ : (c >= 5 && (s += e.N1 + (c - 5)), g = w, c = 1);
      }
      a >= 5 && (s += e.N1 + (a - 5)), c >= 5 && (s += e.N1 + (c - 5));
    }
    return s;
  }, t.getPenaltyN2 = function(o) {
    const i = o.size;
    let s = 0;
    for (let a = 0; a < i - 1; a++)
      for (let c = 0; c < i - 1; c++) {
        const m = o.get(a, c) + o.get(a, c + 1) + o.get(a + 1, c) + o.get(a + 1, c + 1);
        (m === 4 || m === 0) && s++;
      }
    return s * e.N2;
  }, t.getPenaltyN3 = function(o) {
    const i = o.size;
    let s = 0, a = 0, c = 0;
    for (let m = 0; m < i; m++) {
      a = c = 0;
      for (let g = 0; g < i; g++)
        a = a << 1 & 2047 | o.get(m, g), g >= 10 && (a === 1488 || a === 93) && s++, c = c << 1 & 2047 | o.get(g, m), g >= 10 && (c === 1488 || c === 93) && s++;
    }
    return s * e.N3;
  }, t.getPenaltyN4 = function(o) {
    let i = 0;
    const s = o.data.length;
    for (let c = 0; c < s; c++)
      i += o.data[c];
    return Math.abs(Math.ceil(i * 100 / s / 5) - 10) * e.N4;
  };
  function n(r, o, i) {
    switch (r) {
      case t.Patterns.PATTERN000:
        return (o + i) % 2 === 0;
      case t.Patterns.PATTERN001:
        return o % 2 === 0;
      case t.Patterns.PATTERN010:
        return i % 3 === 0;
      case t.Patterns.PATTERN011:
        return (o + i) % 3 === 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(o / 2) + Math.floor(i / 3)) % 2 === 0;
      case t.Patterns.PATTERN101:
        return o * i % 2 + o * i % 3 === 0;
      case t.Patterns.PATTERN110:
        return (o * i % 2 + o * i % 3) % 2 === 0;
      case t.Patterns.PATTERN111:
        return (o * i % 3 + (o + i) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + r);
    }
  }
  t.applyMask = function(o, i) {
    const s = i.size;
    for (let a = 0; a < s; a++)
      for (let c = 0; c < s; c++)
        i.isReserved(c, a) || i.xor(c, a, n(o, c, a));
  }, t.getBestMask = function(o, i) {
    const s = Object.keys(t.Patterns).length;
    let a = 0, c = 1 / 0;
    for (let m = 0; m < s; m++) {
      i(m), t.applyMask(m, o);
      const g = t.getPenaltyN1(o) + t.getPenaltyN2(o) + t.getPenaltyN3(o) + t.getPenaltyN4(o);
      t.applyMask(m, o), g < c && (c = g, a = m);
    }
    return a;
  };
})(co);
var Ve = {};
const F = ze, Ie = [
  // L  M  Q  H
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], ke = [
  // L  M  Q  H
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
Ve.getBlocksCount = function(e, n) {
  switch (n) {
    case F.L:
      return Ie[(e - 1) * 4 + 0];
    case F.M:
      return Ie[(e - 1) * 4 + 1];
    case F.Q:
      return Ie[(e - 1) * 4 + 2];
    case F.H:
      return Ie[(e - 1) * 4 + 3];
    default:
      return;
  }
};
Ve.getTotalCodewordsCount = function(e, n) {
  switch (n) {
    case F.L:
      return ke[(e - 1) * 4 + 0];
    case F.M:
      return ke[(e - 1) * 4 + 1];
    case F.Q:
      return ke[(e - 1) * 4 + 2];
    case F.H:
      return ke[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var lo = {}, Je = {};
const he = new Uint8Array(512), Le = new Uint8Array(256);
(function() {
  let e = 1;
  for (let n = 0; n < 255; n++)
    he[n] = e, Le[e] = n, e <<= 1, e & 256 && (e ^= 285);
  for (let n = 255; n < 512; n++)
    he[n] = he[n - 255];
})();
Je.log = function(e) {
  if (e < 1)
    throw new Error("log(" + e + ")");
  return Le[e];
};
Je.exp = function(e) {
  return he[e];
};
Je.mul = function(e, n) {
  return e === 0 || n === 0 ? 0 : he[Le[e] + Le[n]];
};
(function(t) {
  const e = Je;
  t.mul = function(r, o) {
    const i = new Uint8Array(r.length + o.length - 1);
    for (let s = 0; s < r.length; s++)
      for (let a = 0; a < o.length; a++)
        i[s + a] ^= e.mul(r[s], o[a]);
    return i;
  }, t.mod = function(r, o) {
    let i = new Uint8Array(r);
    for (; i.length - o.length >= 0; ) {
      const s = i[0];
      for (let c = 0; c < o.length; c++)
        i[c] ^= e.mul(o[c], s);
      let a = 0;
      for (; a < i.length && i[a] === 0; )
        a++;
      i = i.slice(a);
    }
    return i;
  }, t.generateECPolynomial = function(r) {
    let o = new Uint8Array([1]);
    for (let i = 0; i < r; i++)
      o = t.mul(o, new Uint8Array([1, e.exp(i)]));
    return o;
  };
})(lo);
const uo = lo;
function Ft(t) {
  this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
}
Ft.prototype.initialize = function(e) {
  this.degree = e, this.genPoly = uo.generateECPolynomial(this.degree);
};
Ft.prototype.encode = function(e) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const n = new Uint8Array(e.length + this.degree);
  n.set(e);
  const r = uo.mod(n, this.genPoly), o = this.degree - r.length;
  if (o > 0) {
    const i = new Uint8Array(this.degree);
    return i.set(r, o), i;
  }
  return r;
};
var gc = Ft, fo = {}, V = {}, Ht = {};
Ht.isValid = function(e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var U = {};
const ho = "[0-9]+", pc = "[A-Z $%*+\\-./:]+";
let me = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
me = me.replace(/u/g, "\\u");
const mc = "(?:(?![A-Z0-9 $%*+\\-./:]|" + me + `)(?:.|[\r
]))+`;
U.KANJI = new RegExp(me, "g");
U.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
U.BYTE = new RegExp(mc, "g");
U.NUMERIC = new RegExp(ho, "g");
U.ALPHANUMERIC = new RegExp(pc, "g");
const wc = new RegExp("^" + me + "$"), yc = new RegExp("^" + ho + "$"), vc = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
U.testKanji = function(e) {
  return wc.test(e);
};
U.testNumeric = function(e) {
  return yc.test(e);
};
U.testAlphanumeric = function(e) {
  return vc.test(e);
};
(function(t) {
  const e = Ht, n = U;
  t.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, t.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, t.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, t.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, t.MIXED = {
    bit: -1
  }, t.getCharCountIndicator = function(i, s) {
    if (!i.ccBits)
      throw new Error("Invalid mode: " + i);
    if (!e.isValid(s))
      throw new Error("Invalid version: " + s);
    return s >= 1 && s < 10 ? i.ccBits[0] : s < 27 ? i.ccBits[1] : i.ccBits[2];
  }, t.getBestModeForData = function(i) {
    return n.testNumeric(i) ? t.NUMERIC : n.testAlphanumeric(i) ? t.ALPHANUMERIC : n.testKanji(i) ? t.KANJI : t.BYTE;
  }, t.toString = function(i) {
    if (i && i.id)
      return i.id;
    throw new Error("Invalid mode");
  }, t.isValid = function(i) {
    return i && i.bit && i.ccBits;
  };
  function r(o) {
    if (typeof o != "string")
      throw new Error("Param is not a string");
    switch (o.toLowerCase()) {
      case "numeric":
        return t.NUMERIC;
      case "alphanumeric":
        return t.ALPHANUMERIC;
      case "kanji":
        return t.KANJI;
      case "byte":
        return t.BYTE;
      default:
        throw new Error("Unknown mode: " + o);
    }
  }
  t.from = function(i, s) {
    if (t.isValid(i))
      return i;
    try {
      return r(i);
    } catch {
      return s;
    }
  };
})(V);
(function(t) {
  const e = L, n = Ve, r = ze, o = V, i = Ht, s = 7973, a = e.getBCHDigit(s);
  function c(y, w, p) {
    for (let v = 1; v <= 40; v++)
      if (w <= t.getCapacity(v, p, y))
        return v;
  }
  function m(y, w) {
    return o.getCharCountIndicator(y, w) + 4;
  }
  function g(y, w) {
    let p = 0;
    return y.forEach(function(v) {
      const d = m(v.mode, w);
      p += d + v.getBitsLength();
    }), p;
  }
  function l(y, w) {
    for (let p = 1; p <= 40; p++)
      if (g(y, p) <= t.getCapacity(p, w, o.MIXED))
        return p;
  }
  t.from = function(w, p) {
    return i.isValid(w) ? parseInt(w, 10) : p;
  }, t.getCapacity = function(w, p, v) {
    if (!i.isValid(w))
      throw new Error("Invalid QR Code version");
    typeof v > "u" && (v = o.BYTE);
    const d = e.getSymbolTotalCodewords(w), u = n.getTotalCodewordsCount(w, p), h = (d - u) * 8;
    if (v === o.MIXED)
      return h;
    const f = h - m(v, w);
    switch (v) {
      case o.NUMERIC:
        return Math.floor(f / 10 * 3);
      case o.ALPHANUMERIC:
        return Math.floor(f / 11 * 2);
      case o.KANJI:
        return Math.floor(f / 13);
      case o.BYTE:
      default:
        return Math.floor(f / 8);
    }
  }, t.getBestVersionForData = function(w, p) {
    let v;
    const d = r.from(p, r.M);
    if (Array.isArray(w)) {
      if (w.length > 1)
        return l(w, d);
      if (w.length === 0)
        return 1;
      v = w[0];
    } else
      v = w;
    return c(v.mode, v.getLength(), d);
  }, t.getEncodedBits = function(w) {
    if (!i.isValid(w) || w < 7)
      throw new Error("Invalid QR Code version");
    let p = w << 12;
    for (; e.getBCHDigit(p) - a >= 0; )
      p ^= s << e.getBCHDigit(p) - a;
    return w << 12 | p;
  };
})(fo);
var _o = {};
const dt = L, go = 1335, bc = 21522, wn = dt.getBCHDigit(go);
_o.getEncodedBits = function(e, n) {
  const r = e.bit << 3 | n;
  let o = r << 10;
  for (; dt.getBCHDigit(o) - wn >= 0; )
    o ^= go << dt.getBCHDigit(o) - wn;
  return (r << 10 | o) ^ bc;
};
var po = {};
const Ec = V;
function oe(t) {
  this.mode = Ec.NUMERIC, this.data = t.toString();
}
oe.getBitsLength = function(e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
};
oe.prototype.getLength = function() {
  return this.data.length;
};
oe.prototype.getBitsLength = function() {
  return oe.getBitsLength(this.data.length);
};
oe.prototype.write = function(e) {
  let n, r, o;
  for (n = 0; n + 3 <= this.data.length; n += 3)
    r = this.data.substr(n, 3), o = parseInt(r, 10), e.put(o, 10);
  const i = this.data.length - n;
  i > 0 && (r = this.data.substr(n), o = parseInt(r, 10), e.put(o, i * 3 + 1));
};
var Cc = oe;
const Sc = V, Ye = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function ie(t) {
  this.mode = Sc.ALPHANUMERIC, this.data = t;
}
ie.getBitsLength = function(e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
ie.prototype.getLength = function() {
  return this.data.length;
};
ie.prototype.getBitsLength = function() {
  return ie.getBitsLength(this.data.length);
};
ie.prototype.write = function(e) {
  let n;
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let r = Ye.indexOf(this.data[n]) * 45;
    r += Ye.indexOf(this.data[n + 1]), e.put(r, 11);
  }
  this.data.length % 2 && e.put(Ye.indexOf(this.data[n]), 6);
};
var Ic = ie;
const kc = li, Tc = V;
function se(t) {
  this.mode = Tc.BYTE, typeof t == "string" && (t = kc(t)), this.data = new Uint8Array(t);
}
se.getBitsLength = function(e) {
  return e * 8;
};
se.prototype.getLength = function() {
  return this.data.length;
};
se.prototype.getBitsLength = function() {
  return se.getBitsLength(this.data.length);
};
se.prototype.write = function(t) {
  for (let e = 0, n = this.data.length; e < n; e++)
    t.put(this.data[e], 8);
};
var Rc = se;
const Nc = V, xc = L;
function ae(t) {
  this.mode = Nc.KANJI, this.data = t;
}
ae.getBitsLength = function(e) {
  return e * 13;
};
ae.prototype.getLength = function() {
  return this.data.length;
};
ae.prototype.getBitsLength = function() {
  return ae.getBitsLength(this.data.length);
};
ae.prototype.write = function(t) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let n = xc.toSJIS(this.data[e]);
    if (n >= 33088 && n <= 40956)
      n -= 33088;
    else if (n >= 57408 && n <= 60351)
      n -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`
      );
    n = (n >>> 8 & 255) * 192 + (n & 255), t.put(n, 13);
  }
};
var Mc = ae;
(function(t) {
  const e = V, n = Cc, r = Ic, o = Rc, i = Mc, s = U, a = L, c = ui;
  function m(u) {
    return unescape(encodeURIComponent(u)).length;
  }
  function g(u, h, f) {
    const _ = [];
    let E;
    for (; (E = u.exec(f)) !== null; )
      _.push({
        data: E[0],
        index: E.index,
        mode: h,
        length: E[0].length
      });
    return _;
  }
  function l(u) {
    const h = g(s.NUMERIC, e.NUMERIC, u), f = g(s.ALPHANUMERIC, e.ALPHANUMERIC, u);
    let _, E;
    return a.isKanjiModeEnabled() ? (_ = g(s.BYTE, e.BYTE, u), E = g(s.KANJI, e.KANJI, u)) : (_ = g(s.BYTE_KANJI, e.BYTE, u), E = []), h.concat(f, _, E).sort(function(I, N) {
      return I.index - N.index;
    }).map(function(I) {
      return {
        data: I.data,
        mode: I.mode,
        length: I.length
      };
    });
  }
  function y(u, h) {
    switch (h) {
      case e.NUMERIC:
        return n.getBitsLength(u);
      case e.ALPHANUMERIC:
        return r.getBitsLength(u);
      case e.KANJI:
        return i.getBitsLength(u);
      case e.BYTE:
        return o.getBitsLength(u);
    }
  }
  function w(u) {
    return u.reduce(function(h, f) {
      const _ = h.length - 1 >= 0 ? h[h.length - 1] : null;
      return _ && _.mode === f.mode ? (h[h.length - 1].data += f.data, h) : (h.push(f), h);
    }, []);
  }
  function p(u) {
    const h = [];
    for (let f = 0; f < u.length; f++) {
      const _ = u[f];
      switch (_.mode) {
        case e.NUMERIC:
          h.push([
            _,
            { data: _.data, mode: e.ALPHANUMERIC, length: _.length },
            { data: _.data, mode: e.BYTE, length: _.length }
          ]);
          break;
        case e.ALPHANUMERIC:
          h.push([
            _,
            { data: _.data, mode: e.BYTE, length: _.length }
          ]);
          break;
        case e.KANJI:
          h.push([
            _,
            { data: _.data, mode: e.BYTE, length: m(_.data) }
          ]);
          break;
        case e.BYTE:
          h.push([
            { data: _.data, mode: e.BYTE, length: m(_.data) }
          ]);
      }
    }
    return h;
  }
  function v(u, h) {
    const f = {}, _ = { start: {} };
    let E = ["start"];
    for (let b = 0; b < u.length; b++) {
      const I = u[b], N = [];
      for (let k = 0; k < I.length; k++) {
        const x = I[k], J = "" + b + k;
        N.push(J), f[J] = { node: x, lastCount: 0 }, _[J] = {};
        for (let ue = 0; ue < E.length; ue++) {
          const O = E[ue];
          f[O] && f[O].node.mode === x.mode ? (_[O][J] = y(f[O].lastCount + x.length, x.mode) - y(f[O].lastCount, x.mode), f[O].lastCount += x.length) : (f[O] && (f[O].lastCount = x.length), _[O][J] = y(x.length, x.mode) + 4 + e.getCharCountIndicator(x.mode, h));
        }
      }
      E = N;
    }
    for (let b = 0; b < E.length; b++)
      _[E[b]].end = 0;
    return { map: _, table: f };
  }
  function d(u, h) {
    let f;
    const _ = e.getBestModeForData(u);
    if (f = e.from(h, _), f !== e.BYTE && f.bit < _.bit)
      throw new Error('"' + u + '" cannot be encoded with mode ' + e.toString(f) + `.
 Suggested mode is: ` + e.toString(_));
    switch (f === e.KANJI && !a.isKanjiModeEnabled() && (f = e.BYTE), f) {
      case e.NUMERIC:
        return new n(u);
      case e.ALPHANUMERIC:
        return new r(u);
      case e.KANJI:
        return new i(u);
      case e.BYTE:
        return new o(u);
    }
  }
  t.fromArray = function(h) {
    return h.reduce(function(f, _) {
      return typeof _ == "string" ? f.push(d(_, null)) : _.data && f.push(d(_.data, _.mode)), f;
    }, []);
  }, t.fromString = function(h, f) {
    const _ = l(h, a.isKanjiModeEnabled()), E = p(_), b = v(E, f), I = c.find_path(b.map, "start", "end"), N = [];
    for (let k = 1; k < I.length - 1; k++)
      N.push(b.table[I[k]].node);
    return t.fromArray(w(N));
  }, t.rawSplit = function(h) {
    return t.fromArray(
      l(h, a.isKanjiModeEnabled())
    );
  };
})(po);
const Ke = L, Xe = ze, Oc = fc, Ac = hc, Lc = so, Bc = ao, ft = co, ht = Ve, Pc = gc, Be = fo, Uc = _o, $c = V, Ze = po;
function Dc(t, e) {
  const n = t.size, r = Bc.getPositions(e);
  for (let o = 0; o < r.length; o++) {
    const i = r[o][0], s = r[o][1];
    for (let a = -1; a <= 7; a++)
      if (!(i + a <= -1 || n <= i + a))
        for (let c = -1; c <= 7; c++)
          s + c <= -1 || n <= s + c || (a >= 0 && a <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (a === 0 || a === 6) || a >= 2 && a <= 4 && c >= 2 && c <= 4 ? t.set(i + a, s + c, !0, !0) : t.set(i + a, s + c, !1, !0));
  }
}
function qc(t) {
  const e = t.size;
  for (let n = 8; n < e - 8; n++) {
    const r = n % 2 === 0;
    t.set(n, 6, r, !0), t.set(6, n, r, !0);
  }
}
function Wc(t, e) {
  const n = Lc.getPositions(e);
  for (let r = 0; r < n.length; r++) {
    const o = n[r][0], i = n[r][1];
    for (let s = -2; s <= 2; s++)
      for (let a = -2; a <= 2; a++)
        s === -2 || s === 2 || a === -2 || a === 2 || s === 0 && a === 0 ? t.set(o + s, i + a, !0, !0) : t.set(o + s, i + a, !1, !0);
  }
}
function Fc(t, e) {
  const n = t.size, r = Be.getEncodedBits(e);
  let o, i, s;
  for (let a = 0; a < 18; a++)
    o = Math.floor(a / 3), i = a % 3 + n - 8 - 3, s = (r >> a & 1) === 1, t.set(o, i, s, !0), t.set(i, o, s, !0);
}
function et(t, e, n) {
  const r = t.size, o = Uc.getEncodedBits(e, n);
  let i, s;
  for (i = 0; i < 15; i++)
    s = (o >> i & 1) === 1, i < 6 ? t.set(i, 8, s, !0) : i < 8 ? t.set(i + 1, 8, s, !0) : t.set(r - 15 + i, 8, s, !0), i < 8 ? t.set(8, r - i - 1, s, !0) : i < 9 ? t.set(8, 15 - i - 1 + 1, s, !0) : t.set(8, 15 - i - 1, s, !0);
  t.set(r - 8, 8, 1, !0);
}
function Hc(t, e) {
  const n = t.size;
  let r = -1, o = n - 1, i = 7, s = 0;
  for (let a = n - 1; a > 0; a -= 2)
    for (a === 6 && a--; ; ) {
      for (let c = 0; c < 2; c++)
        if (!t.isReserved(o, a - c)) {
          let m = !1;
          s < e.length && (m = (e[s] >>> i & 1) === 1), t.set(o, a - c, m), i--, i === -1 && (s++, i = 7);
        }
      if (o += r, o < 0 || n <= o) {
        o -= r, r = -r;
        break;
      }
    }
}
function jc(t, e, n) {
  const r = new Oc();
  n.forEach(function(c) {
    r.put(c.mode.bit, 4), r.put(c.getLength(), $c.getCharCountIndicator(c.mode, t)), c.write(r);
  });
  const o = Ke.getSymbolTotalCodewords(t), i = ht.getTotalCodewordsCount(t, e), s = (o - i) * 8;
  for (r.getLengthInBits() + 4 <= s && r.put(0, 4); r.getLengthInBits() % 8 !== 0; )
    r.putBit(0);
  const a = (s - r.getLengthInBits()) / 8;
  for (let c = 0; c < a; c++)
    r.put(c % 2 ? 17 : 236, 8);
  return zc(r, t, e);
}
function zc(t, e, n) {
  const r = Ke.getSymbolTotalCodewords(e), o = ht.getTotalCodewordsCount(e, n), i = r - o, s = ht.getBlocksCount(e, n), a = r % s, c = s - a, m = Math.floor(r / s), g = Math.floor(i / s), l = g + 1, y = m - g, w = new Pc(y);
  let p = 0;
  const v = new Array(s), d = new Array(s);
  let u = 0;
  const h = new Uint8Array(t.buffer);
  for (let I = 0; I < s; I++) {
    const N = I < c ? g : l;
    v[I] = h.slice(p, p + N), d[I] = w.encode(v[I]), p += N, u = Math.max(u, N);
  }
  const f = new Uint8Array(r);
  let _ = 0, E, b;
  for (E = 0; E < u; E++)
    for (b = 0; b < s; b++)
      E < v[b].length && (f[_++] = v[b][E]);
  for (E = 0; E < y; E++)
    for (b = 0; b < s; b++)
      f[_++] = d[b][E];
  return f;
}
function Vc(t, e, n, r) {
  let o;
  if (Array.isArray(t))
    o = Ze.fromArray(t);
  else if (typeof t == "string") {
    let m = e;
    if (!m) {
      const g = Ze.rawSplit(t);
      m = Be.getBestVersionForData(g, n);
    }
    o = Ze.fromString(t, m || 40);
  } else
    throw new Error("Invalid data");
  const i = Be.getBestVersionForData(o, n);
  if (!i)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e)
    e = i;
  else if (e < i)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + i + `.
`
    );
  const s = jc(e, n, o), a = Ke.getSymbolSize(e), c = new Ac(a);
  return Dc(c, e), qc(c), Wc(c, e), et(c, n, 0), e >= 7 && Fc(c, e), Hc(c, s), isNaN(r) && (r = ft.getBestMask(
    c,
    et.bind(null, c, n)
  )), ft.applyMask(r, c), et(c, n, r), {
    modules: c,
    version: e,
    errorCorrectionLevel: n,
    maskPattern: r,
    segments: o
  };
}
oo.create = function(e, n) {
  if (typeof e > "u" || e === "")
    throw new Error("No input text");
  let r = Xe.M, o, i;
  return typeof n < "u" && (r = Xe.from(n.errorCorrectionLevel, Xe.M), o = Be.from(n.version), i = ft.from(n.maskPattern), n.toSJISFunc && Ke.setToSJISFunction(n.toSJISFunc)), Vc(e, o, r, i);
};
var mo = {}, jt = {};
(function(t) {
  function e(n) {
    if (typeof n == "number" && (n = n.toString()), typeof n != "string")
      throw new Error("Color should be defined as hex string");
    let r = n.slice().replace("#", "").split("");
    if (r.length < 3 || r.length === 5 || r.length > 8)
      throw new Error("Invalid hex color: " + n);
    (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function(i) {
      return [i, i];
    }))), r.length === 6 && r.push("F", "F");
    const o = parseInt(r.join(""), 16);
    return {
      r: o >> 24 & 255,
      g: o >> 16 & 255,
      b: o >> 8 & 255,
      a: o & 255,
      hex: "#" + r.slice(0, 6).join("")
    };
  }
  t.getOptions = function(r) {
    r || (r = {}), r.color || (r.color = {});
    const o = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin, i = r.width && r.width >= 21 ? r.width : void 0, s = r.scale || 4;
    return {
      width: i,
      scale: i ? 4 : s,
      margin: o,
      color: {
        dark: e(r.color.dark || "#000000ff"),
        light: e(r.color.light || "#ffffffff")
      },
      type: r.type,
      rendererOpts: r.rendererOpts || {}
    };
  }, t.getScale = function(r, o) {
    return o.width && o.width >= r + o.margin * 2 ? o.width / (r + o.margin * 2) : o.scale;
  }, t.getImageWidth = function(r, o) {
    const i = t.getScale(r, o);
    return Math.floor((r + o.margin * 2) * i);
  }, t.qrToImageData = function(r, o, i) {
    const s = o.modules.size, a = o.modules.data, c = t.getScale(s, i), m = Math.floor((s + i.margin * 2) * c), g = i.margin * c, l = [i.color.light, i.color.dark];
    for (let y = 0; y < m; y++)
      for (let w = 0; w < m; w++) {
        let p = (y * m + w) * 4, v = i.color.light;
        if (y >= g && w >= g && y < m - g && w < m - g) {
          const d = Math.floor((y - g) / c), u = Math.floor((w - g) / c);
          v = l[a[d * s + u] ? 1 : 0];
        }
        r[p++] = v.r, r[p++] = v.g, r[p++] = v.b, r[p] = v.a;
      }
  };
})(jt);
(function(t) {
  const e = jt;
  function n(o, i, s) {
    o.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = s, i.width = s, i.style.height = s + "px", i.style.width = s + "px";
  }
  function r() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  t.render = function(i, s, a) {
    let c = a, m = s;
    typeof c > "u" && (!s || !s.getContext) && (c = s, s = void 0), s || (m = r()), c = e.getOptions(c);
    const g = e.getImageWidth(i.modules.size, c), l = m.getContext("2d"), y = l.createImageData(g, g);
    return e.qrToImageData(y.data, i, c), n(l, m, g), l.putImageData(y, 0, 0), m;
  }, t.renderToDataURL = function(i, s, a) {
    let c = a;
    typeof c > "u" && (!s || !s.getContext) && (c = s, s = void 0), c || (c = {});
    const m = t.render(i, s, c), g = c.type || "image/png", l = c.rendererOpts || {};
    return m.toDataURL(g, l.quality);
  };
})(mo);
var wo = {};
const Jc = jt;
function yn(t, e) {
  const n = t.a / 255, r = e + '="' + t.hex + '"';
  return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
}
function tt(t, e, n) {
  let r = t + e;
  return typeof n < "u" && (r += " " + n), r;
}
function Kc(t, e, n) {
  let r = "", o = 0, i = !1, s = 0;
  for (let a = 0; a < t.length; a++) {
    const c = Math.floor(a % e), m = Math.floor(a / e);
    !c && !i && (i = !0), t[a] ? (s++, a > 0 && c > 0 && t[a - 1] || (r += i ? tt("M", c + n, 0.5 + m + n) : tt("m", o, 0), o = 0, i = !1), c + 1 < e && t[a + 1] || (r += tt("h", s), s = 0)) : o++;
  }
  return r;
}
wo.render = function(e, n, r) {
  const o = Jc.getOptions(n), i = e.modules.size, s = e.modules.data, a = i + o.margin * 2, c = o.color.light.a ? "<path " + yn(o.color.light, "fill") + ' d="M0 0h' + a + "v" + a + 'H0z"/>' : "", m = "<path " + yn(o.color.dark, "stroke") + ' d="' + Kc(s, i, o.margin) + '"/>', g = 'viewBox="0 0 ' + a + " " + a + '"', y = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + g + ' shape-rendering="crispEdges">' + c + m + `</svg>
`;
  return typeof r == "function" && r(null, y), y;
};
const Qc = uc, _t = oo, yo = mo, Gc = wo;
function zt(t, e, n, r, o) {
  const i = [].slice.call(arguments, 1), s = i.length, a = typeof i[s - 1] == "function";
  if (!a && !Qc())
    throw new Error("Callback required as last argument");
  if (a) {
    if (s < 2)
      throw new Error("Too few arguments provided");
    s === 2 ? (o = n, n = e, e = r = void 0) : s === 3 && (e.getContext && typeof o > "u" ? (o = r, r = void 0) : (o = r, r = n, n = e, e = void 0));
  } else {
    if (s < 1)
      throw new Error("Too few arguments provided");
    return s === 1 ? (n = e, e = r = void 0) : s === 2 && !e.getContext && (r = n, n = e, e = void 0), new Promise(function(c, m) {
      try {
        const g = _t.create(n, r);
        c(t(g, e, r));
      } catch (g) {
        m(g);
      }
    });
  }
  try {
    const c = _t.create(n, r);
    o(null, t(c, e, r));
  } catch (c) {
    o(c);
  }
}
Ee.create = _t.create;
Ee.toCanvas = zt.bind(null, yo.render);
Ee.toDataURL = zt.bind(null, yo.renderToDataURL);
Ee.toString = zt.bind(null, function(t, e, n) {
  return Gc.render(t, n);
});
var Yc = function() {
  var t = document.getSelection();
  if (!t.rangeCount)
    return function() {
    };
  for (var e = document.activeElement, n = [], r = 0; r < t.rangeCount; r++)
    n.push(t.getRangeAt(r));
  switch (e.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      e.blur();
      break;
    default:
      e = null;
      break;
  }
  return t.removeAllRanges(), function() {
    t.type === "Caret" && t.removeAllRanges(), t.rangeCount || n.forEach(function(o) {
      t.addRange(o);
    }), e && e.focus();
  };
}, Xc = Yc, vn = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, Zc = "Copy to clipboard: #{key}, Enter";
function el(t) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return t.replace(/#{\s*key\s*}/g, e);
}
function tl(t, e) {
  var n, r, o, i, s, a, c = !1;
  e || (e = {}), n = e.debug || !1;
  try {
    o = Xc(), i = document.createRange(), s = document.getSelection(), a = document.createElement("span"), a.textContent = t, a.ariaHidden = "true", a.style.all = "unset", a.style.position = "fixed", a.style.top = 0, a.style.clip = "rect(0, 0, 0, 0)", a.style.whiteSpace = "pre", a.style.webkitUserSelect = "text", a.style.MozUserSelect = "text", a.style.msUserSelect = "text", a.style.userSelect = "text", a.addEventListener("copy", function(g) {
      if (g.stopPropagation(), e.format)
        if (g.preventDefault(), typeof g.clipboardData > "u") {
          n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var l = vn[e.format] || vn.default;
          window.clipboardData.setData(l, t);
        } else
          g.clipboardData.clearData(), g.clipboardData.setData(e.format, t);
      e.onCopy && (g.preventDefault(), e.onCopy(g.clipboardData));
    }), document.body.appendChild(a), i.selectNodeContents(a), s.addRange(i);
    var m = document.execCommand("copy");
    if (!m)
      throw new Error("copy command was unsuccessful");
    c = !0;
  } catch (g) {
    n && console.error("unable to copy using execCommand: ", g), n && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), c = !0;
    } catch (l) {
      n && console.error("unable to copy using clipboardData: ", l), n && console.error("falling back to prompt"), r = el("message" in e ? e.message : Zc), window.prompt(r, t);
    }
  } finally {
    s && (typeof s.removeRange == "function" ? s.removeRange(i) : s.removeAllRanges()), a && document.body.removeChild(a), o();
  }
  return c;
}
var nl = tl;
function vo(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function gt(t, e) {
  for (var n in t)
    if (n !== "__source" && !(n in e))
      return !0;
  for (var r in e)
    if (r !== "__source" && t[r] !== e[r])
      return !0;
  return !1;
}
function nt(t, e) {
  return t === e && (t !== 0 || 1 / t == 1 / e) || t != t && e != e;
}
function Pe(t) {
  this.props = t;
}
function bo(t, e) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), e ? !e(this.props, o) || !s : gt(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, P(t, o);
  }
  return r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Pe.prototype = new B()).isPureReactComponent = !0, Pe.prototype.shouldComponentUpdate = function(t, e) {
  return gt(this.props, t) || gt(this.state, e);
};
var bn = S.__b;
S.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), bn && bn(t);
};
var rl = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Eo(t) {
  function e(n) {
    var r = vo({}, n);
    return delete r.ref, t(r, n.ref || null);
  }
  return e.$$typeof = rl, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var En = function(t, e) {
  return t == null ? null : D(D(t).map(e));
}, Co = { map: En, forEach: En, count: function(t) {
  return t ? D(t).length : 0;
}, only: function(t) {
  var e = D(t);
  if (e.length !== 1)
    throw "Children.only";
  return e[0];
}, toArray: D }, ol = S.__e;
S.__e = function(t, e, n, r) {
  if (t.then) {
    for (var o, i = e; i = i.__; )
      if ((o = i.__c) && o.__c)
        return e.__e == null && (e.__e = n.__e, e.__k = n.__k), o.__c(t, e);
  }
  ol(t, e, n, r);
};
var Cn = S.unmount;
function So(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), t.__c.__H = null), (t = vo({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
    return So(r, e, n);
  })), t;
}
function Io(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
    return Io(r, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function _e() {
  this.__u = 0, this.t = null, this.__b = null;
}
function ko(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function To(t) {
  var e, n, r;
  function o(i) {
    if (e || (e = t()).then(function(s) {
      n = s.default || s;
    }, function(s) {
      r = s;
    }), r)
      throw r;
    if (!n)
      throw e;
    return P(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Z() {
  this.u = null, this.o = null;
}
S.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Cn && Cn(t);
}, (_e.prototype = new B()).__c = function(t, e) {
  var n = e.__c, r = this;
  r.t == null && (r.t = []), r.t.push(n);
  var o = ko(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(a) : a());
  };
  n.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var m = r.state.__a;
        r.__v.__k[0] = Io(m, m.__c.__P, m.__c.__O);
      }
      var g;
      for (r.setState({ __a: r.__b = null }); g = r.t.pop(); )
        g.forceUpdate();
    }
  }, c = e.__h === !0;
  r.__u++ || c || r.setState({ __a: r.__b = r.__v.__k[0] }), t.then(s, s);
}, _e.prototype.componentWillUnmount = function() {
  this.t = [];
}, _e.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = So(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = e.__a && P(q, null, t.fallback);
  return o && (o.__h = null), [P(q, null, e.__a ? null : t.children), o];
};
var Sn = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (n = t.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      t.u = n = n[2];
    }
};
function il(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function sl(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    ge(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(r) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), e.i.appendChild(r);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
  } }), ge(P(il, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function Ro(t, e) {
  var n = P(sl, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(Z.prototype = new B()).__a = function(t) {
  var e = this, n = ko(e.__v), r = e.o.get(t);
  return r[0]++, function(o) {
    var i = function() {
      e.props.revealOrder ? (r.push(o), Sn(e, t, r)) : o();
    };
    n ? n(i) : i();
  };
}, Z.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = D(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; )
    this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, Z.prototype.componentDidUpdate = Z.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    Sn(t, n, e);
  });
};
var No = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, al = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, cl = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ll = /[A-Z0-9]/g, ul = typeof document < "u", dl = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function xo(t, e, n) {
  return e.__k == null && (e.textContent = ""), ge(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
function Mo(t, e, n) {
  return or(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
B.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(B.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var In = S.event;
function fl() {
}
function hl() {
  return this.cancelBubble;
}
function _l() {
  return this.defaultPrevented;
}
S.event = function(t) {
  return In && (t = In(t)), t.persist = fl, t.isPropagationStopped = hl, t.isDefaultPrevented = _l, t.nativeEvent = t;
};
var Vt, gl = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, kn = S.vnode;
S.vnode = function(t) {
  typeof t.type == "string" && function(e) {
    var n = e.props, r = e.type, o = {};
    for (var i in n) {
      var s = n[i];
      if (!(i === "value" && "defaultValue" in n && s == null || ul && i === "children" && r === "noscript" || i === "class" || i === "className")) {
        var a = i.toLowerCase();
        i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : a === "ondoubleclick" ? i = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || dl(n.type) ? a === "onfocus" ? i = "onfocusin" : a === "onblur" ? i = "onfocusout" : cl.test(i) ? i = a : r.indexOf("-") === -1 && al.test(i) ? i = i.replace(ll, "-$&").toLowerCase() : s === null && (s = void 0) : a = i = "oninput", a === "oninput" && o[i = a] && (i = "oninputCapture"), o[i] = s;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = D(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = D(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", gl)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), e.props = o;
  }(t), t.$$typeof = No, kn && kn(t);
};
var Tn = S.__r;
S.__r = function(t) {
  Tn && Tn(t), Vt = t.__c;
};
var Rn = S.diffed;
S.diffed = function(t) {
  Rn && Rn(t);
  var e = t.props, n = t.__e;
  n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value), Vt = null;
};
var Oo = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return Vt.__n[t.__c].props.value;
} } } }, pl = "17.0.2";
function Ao(t) {
  return P.bind(null, t);
}
function Jt(t) {
  return !!t && t.$$typeof === No;
}
function Lo(t) {
  return Jt(t) ? us.apply(null, arguments) : t;
}
function Bo(t) {
  return !!t.__k && (ge(null, t), !0);
}
function Po(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var Uo = function(t, e) {
  return t(e);
}, $o = function(t, e) {
  return t(e);
}, Do = q;
function Kt(t) {
  t();
}
function qo(t) {
  return t;
}
function Wo() {
  return [!1, Kt];
}
var Fo = be;
function Ho(t, e) {
  var n = e(), r = qe({ h: { __: n, v: e } }), o = r[0].h, i = r[1];
  return be(function() {
    o.__ = n, o.v = e, nt(o.__, e()) || i({ h: o });
  }, [t, n, e]), At(function() {
    return nt(o.__, o.v()) || i({ h: o }), t(function() {
      nt(o.__, o.v()) || i({ h: o });
    });
  }, [t]), n;
}
var ml = { useState: qe, useId: fr, useReducer: Ot, useEffect: At, useLayoutEffect: be, useInsertionEffect: Fo, useTransition: Wo, useDeferredValue: qo, useSyncExternalStore: Ho, startTransition: Kt, useRef: ar, useImperativeHandle: cr, useMemo: We, useCallback: lr, useContext: ur, useDebugValue: dr, version: "17.0.2", Children: Co, render: xo, hydrate: Mo, unmountComponentAtNode: Bo, createPortal: Ro, createElement: P, createContext: ir, createFactory: Ao, cloneElement: Lo, createRef: Yn, Fragment: q, isValidElement: Jt, findDOMNode: Po, Component: B, PureComponent: Pe, memo: bo, forwardRef: Eo, flushSync: $o, unstable_batchedUpdates: Uo, StrictMode: Do, Suspense: _e, SuspenseList: Z, lazy: To, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Oo };
const wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Co,
  Component: B,
  Fragment: q,
  PureComponent: Pe,
  StrictMode: Do,
  Suspense: _e,
  SuspenseList: Z,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Oo,
  cloneElement: Lo,
  createContext: ir,
  createElement: P,
  createFactory: Ao,
  createPortal: Ro,
  createRef: Yn,
  default: ml,
  findDOMNode: Po,
  flushSync: $o,
  forwardRef: Eo,
  hydrate: Mo,
  isValidElement: Jt,
  lazy: To,
  memo: bo,
  render: xo,
  startTransition: Kt,
  unmountComponentAtNode: Bo,
  unstable_batchedUpdates: Uo,
  useCallback: lr,
  useContext: ur,
  useDebugValue: dr,
  useDeferredValue: qo,
  useEffect: At,
  useErrorBoundary: ds,
  useId: fr,
  useImperativeHandle: cr,
  useInsertionEffect: Fo,
  useLayoutEffect: be,
  useMemo: We,
  useReducer: Ot,
  useRef: ar,
  useState: qe,
  useSyncExternalStore: Ho,
  useTransition: Wo,
  version: pl
}, Symbol.toStringTag, { value: "Module" })), yl = /* @__PURE__ */ Mn(wl);
function jo(t) {
  return t && typeof t == "object" && "default" in t ? t.default : t;
}
var M = lc, zo = jo(Ee), vl = jo(nl), C = yl;
function bl(t) {
  zo.toString(t, {
    type: "terminal"
  }).then(console.log);
}
var El = `:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;
typeof Symbol < "u" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
typeof Symbol < "u" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
function Cl(t, e) {
  try {
    var n = t();
  } catch (r) {
    return e(r);
  }
  return n && n.then ? n.then(void 0, e) : n;
}
var Sl = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E", Il = "WalletConnect", kl = 300, Tl = "rgb(64, 153, 255)", Vo = "walletconnect-wrapper", Nn = "walletconnect-style-sheet", Jo = "walletconnect-qrcode-modal", Rl = "walletconnect-qrcode-close", Ko = "walletconnect-qrcode-text", Nl = "walletconnect-connect-button";
function xl(t) {
  return C.createElement("div", {
    className: "walletconnect-modal__header"
  }, C.createElement("img", {
    src: Sl,
    className: "walletconnect-modal__headerLogo"
  }), C.createElement("p", null, Il), C.createElement("div", {
    className: "walletconnect-modal__close__wrapper",
    onClick: t.onClose
  }, C.createElement("div", {
    id: Rl,
    className: "walletconnect-modal__close__icon"
  }, C.createElement("div", {
    className: "walletconnect-modal__close__line1"
  }), C.createElement("div", {
    className: "walletconnect-modal__close__line2"
  }))));
}
function Ml(t) {
  return C.createElement("a", {
    className: "walletconnect-connect__button",
    href: t.href,
    id: Nl + "-" + t.name,
    onClick: t.onClick,
    rel: "noopener noreferrer",
    style: {
      backgroundColor: t.color
    },
    target: "_blank"
  }, t.name);
}
var Ol = "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";
function Al(t) {
  var e = t.color, n = t.href, r = t.name, o = t.logo, i = t.onClick;
  return C.createElement("a", {
    className: "walletconnect-modal__base__row",
    href: n,
    onClick: i,
    rel: "noopener noreferrer",
    target: "_blank"
  }, C.createElement("h3", {
    className: "walletconnect-modal__base__row__h3"
  }, r), C.createElement("div", {
    className: "walletconnect-modal__base__row__right"
  }, C.createElement("div", {
    className: "walletconnect-modal__base__row__right__app-icon",
    style: {
      background: "url('" + o + "') " + e,
      backgroundSize: "100%"
    }
  }), C.createElement("img", {
    src: Ol,
    className: "walletconnect-modal__base__row__right__caret"
  })));
}
function Ll(t) {
  var e = t.color, n = t.href, r = t.name, o = t.logo, i = t.onClick, s = window.innerWidth < 768 ? (r.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
  return C.createElement("a", {
    className: "walletconnect-connect__button__icon_anchor",
    href: n,
    onClick: i,
    rel: "noopener noreferrer",
    target: "_blank"
  }, C.createElement("div", {
    className: "walletconnect-connect__button__icon",
    style: {
      background: "url('" + o + "') " + e,
      backgroundSize: "100%"
    }
  }), C.createElement("div", {
    style: {
      fontSize: s
    },
    className: "walletconnect-connect__button__text"
  }, r));
}
var Bl = 5, rt = 12;
function Pl(t) {
  var e = M.isAndroid(), n = C.useState(""), r = n[0], o = n[1], i = C.useState(""), s = i[0], a = i[1], c = C.useState(1), m = c[0], g = c[1], l = s ? t.links.filter(function(_) {
    return _.name.toLowerCase().includes(s.toLowerCase());
  }) : t.links, y = t.errorMessage, w = s || l.length > Bl, p = Math.ceil(l.length / rt), v = [(m - 1) * rt + 1, m * rt], d = l.length ? l.filter(function(_, E) {
    return E + 1 >= v[0] && E + 1 <= v[1];
  }) : [], u = !e && p > 1, h = void 0;
  function f(_) {
    o(_.target.value), clearTimeout(h), _.target.value ? h = setTimeout(function() {
      a(_.target.value), g(1);
    }, 1e3) : (o(""), a(""), g(1));
  }
  return C.createElement("div", null, C.createElement("p", {
    id: Ko,
    className: "walletconnect-qrcode__text"
  }, e ? t.text.connect_mobile_wallet : t.text.choose_preferred_wallet), !e && C.createElement("input", {
    className: "walletconnect-search__input",
    placeholder: "Search",
    value: r,
    onChange: f
  }), C.createElement("div", {
    className: "walletconnect-connect__buttons__wrapper" + (e ? "__android" : w && l.length ? "__wrap" : "")
  }, e ? C.createElement(Ml, {
    name: t.text.connect,
    color: Tl,
    href: t.uri,
    onClick: C.useCallback(function() {
      M.saveMobileLinkInfo({
        name: "Unknown",
        href: t.uri
      });
    }, [])
  }) : d.length ? d.map(function(_) {
    var E = _.color, b = _.name, I = _.shortName, N = _.logo, k = M.formatIOSMobile(t.uri, _), x = C.useCallback(function() {
      M.saveMobileLinkInfo({
        name: b,
        href: k
      });
    }, [d]);
    return w ? C.createElement(Ll, {
      color: E,
      href: k,
      name: I || b,
      logo: N,
      onClick: x
    }) : C.createElement(Al, {
      color: E,
      href: k,
      name: b,
      logo: N,
      onClick: x
    });
  }) : C.createElement(C.Fragment, null, C.createElement("p", null, y.length ? t.errorMessage : t.links.length && !l.length ? t.text.no_wallets_found : t.text.loading))), u && C.createElement("div", {
    className: "walletconnect-modal__footer"
  }, Array(p).fill(0).map(function(_, E) {
    var b = E + 1, I = m === b;
    return C.createElement("a", {
      style: {
        margin: "auto 10px",
        fontWeight: I ? "bold" : "normal"
      },
      onClick: function() {
        return g(b);
      }
    }, b);
  })));
}
function Ul(t) {
  var e = !!t.message.trim();
  return C.createElement("div", {
    className: "walletconnect-qrcode__notification" + (e ? " notification__show" : "")
  }, t.message);
}
var $l = function(t) {
  try {
    var e = "";
    return Promise.resolve(zo.toString(t, {
      margin: 0,
      type: "svg"
    })).then(function(n) {
      return typeof n == "string" && (e = n.replace("<svg", '<svg class="walletconnect-qrcode__image"')), e;
    });
  } catch (n) {
    return Promise.reject(n);
  }
};
function Dl(t) {
  var e = C.useState(""), n = e[0], r = e[1], o = C.useState(""), i = o[0], s = o[1];
  C.useEffect(function() {
    try {
      return Promise.resolve($l(t.uri)).then(function(c) {
        s(c);
      });
    } catch (c) {
      Promise.reject(c);
    }
  }, []);
  var a = function() {
    var c = vl(t.uri);
    c ? (r(t.text.copied_to_clipboard), setInterval(function() {
      return r("");
    }, 1200)) : (r("Error"), setInterval(function() {
      return r("");
    }, 1200));
  };
  return C.createElement("div", null, C.createElement("p", {
    id: Ko,
    className: "walletconnect-qrcode__text"
  }, t.text.scan_qrcode_with_wallet), C.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: i
    }
  }), C.createElement("div", {
    className: "walletconnect-modal__footer"
  }, C.createElement("a", {
    onClick: a
  }, t.text.copy_to_clipboard)), C.createElement(Ul, {
    message: n
  }));
}
function ql(t) {
  var e = M.isAndroid(), n = M.isMobile(), r = n ? t.qrcodeModalOptions && t.qrcodeModalOptions.mobileLinks ? t.qrcodeModalOptions.mobileLinks : void 0 : t.qrcodeModalOptions && t.qrcodeModalOptions.desktopLinks ? t.qrcodeModalOptions.desktopLinks : void 0, o = C.useState(!1), i = o[0], s = o[1], a = C.useState(!1), c = a[0], m = a[1], g = C.useState(!n), l = g[0], y = g[1], w = {
    mobile: n,
    text: t.text,
    uri: t.uri,
    qrcodeModalOptions: t.qrcodeModalOptions
  }, p = C.useState(""), v = p[0], d = p[1], u = C.useState(!1), h = u[0], f = u[1], _ = C.useState([]), E = _[0], b = _[1], I = C.useState(""), N = I[0], k = I[1], x = function() {
    c || i || r && !r.length || E.length > 0 || C.useEffect(function() {
      var ue = function() {
        try {
          if (e)
            return Promise.resolve();
          s(!0);
          var O = Cl(function() {
            var de = t.qrcodeModalOptions && t.qrcodeModalOptions.registryUrl ? t.qrcodeModalOptions.registryUrl : M.getWalletRegistryUrl();
            return Promise.resolve(fetch(de)).then(function(Yo) {
              return Promise.resolve(Yo.json()).then(function(Xo) {
                var Zo = Xo.listings, ei = n ? "mobile" : "desktop", Se = M.getMobileLinkRegistry(M.formatMobileRegistry(Zo, ei), r);
                s(!1), m(!0), k(Se.length ? "" : t.text.no_supported_wallets), b(Se);
                var Qt = Se.length === 1;
                Qt && (d(M.formatIOSMobile(t.uri, Se[0])), y(!0)), f(Qt);
              });
            });
          }, function(de) {
            s(!1), m(!0), k(t.text.something_went_wrong), console.error(de);
          });
          return Promise.resolve(O && O.then ? O.then(function() {
          }) : void 0);
        } catch (de) {
          return Promise.reject(de);
        }
      };
      ue();
    });
  };
  x();
  var J = n ? l : !l;
  return C.createElement("div", {
    id: Jo,
    className: "walletconnect-qrcode__base animated fadeIn"
  }, C.createElement("div", {
    className: "walletconnect-modal__base"
  }, C.createElement(xl, {
    onClose: t.onClose
  }), h && l ? C.createElement("div", {
    className: "walletconnect-modal__single_wallet"
  }, C.createElement("a", {
    onClick: function() {
      return M.saveMobileLinkInfo({
        name: E[0].name,
        href: v
      });
    },
    href: v,
    rel: "noopener noreferrer",
    target: "_blank"
  }, t.text.connect_with + " " + (h ? E[0].name : "") + " ›")) : e || i || !i && E.length ? C.createElement("div", {
    className: "walletconnect-modal__mobile__toggle" + (J ? " right__selected" : "")
  }, C.createElement("div", {
    className: "walletconnect-modal__mobile__toggle_selector"
  }), n ? C.createElement(C.Fragment, null, C.createElement("a", {
    onClick: function() {
      return y(!1), x();
    }
  }, t.text.mobile), C.createElement("a", {
    onClick: function() {
      return y(!0);
    }
  }, t.text.qrcode)) : C.createElement(C.Fragment, null, C.createElement("a", {
    onClick: function() {
      return y(!0);
    }
  }, t.text.qrcode), C.createElement("a", {
    onClick: function() {
      return y(!1), x();
    }
  }, t.text.desktop))) : null, C.createElement("div", null, l || !e && !i && !E.length ? C.createElement(Dl, Object.assign({}, w)) : C.createElement(Pl, Object.assign({}, w, {
    links: E,
    errorMessage: N
  })))));
}
var Wl = {
  choose_preferred_wallet: "Wähle bevorzugte Wallet",
  connect_mobile_wallet: "Verbinde mit Mobile Wallet",
  scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
  connect: "Verbinden",
  qrcode: "QR-Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "In die Zwischenablage kopieren",
  copied_to_clipboard: "In die Zwischenablage kopiert!",
  connect_with: "Verbinden mit Hilfe von",
  loading: "Laden...",
  something_went_wrong: "Etwas ist schief gelaufen",
  no_supported_wallets: "Es gibt noch keine unterstützten Wallet",
  no_wallets_found: "keine Wallet gefunden"
}, Fl = {
  choose_preferred_wallet: "Choose your preferred wallet",
  connect_mobile_wallet: "Connect to Mobile Wallet",
  scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
  connect: "Connect",
  qrcode: "QR Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "Copy to clipboard",
  copied_to_clipboard: "Copied to clipboard!",
  connect_with: "Connect with",
  loading: "Loading...",
  something_went_wrong: "Something went wrong",
  no_supported_wallets: "There are no supported wallets yet",
  no_wallets_found: "No wallets found"
}, Hl = {
  choose_preferred_wallet: "Elige tu billetera preferida",
  connect_mobile_wallet: "Conectar a billetera móvil",
  scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
  connect: "Conectar",
  qrcode: "Código QR",
  mobile: "Móvil",
  desktop: "Desktop",
  copy_to_clipboard: "Copiar",
  copied_to_clipboard: "Copiado!",
  connect_with: "Conectar mediante",
  loading: "Cargando...",
  something_went_wrong: "Algo salió mal",
  no_supported_wallets: "Todavía no hay billeteras compatibles",
  no_wallets_found: "No se encontraron billeteras"
}, jl = {
  choose_preferred_wallet: "Choisissez votre portefeuille préféré",
  connect_mobile_wallet: "Se connecter au portefeuille mobile",
  scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
  connect: "Se connecter",
  qrcode: "QR Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "Copier",
  copied_to_clipboard: "Copié!",
  connect_with: "Connectez-vous à l'aide de",
  loading: "Chargement...",
  something_went_wrong: "Quelque chose a mal tourné",
  no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
  no_wallets_found: "Aucun portefeuille trouvé"
}, zl = {
  choose_preferred_wallet: "원하는 지갑을 선택하세요",
  connect_mobile_wallet: "모바일 지갑과 연결",
  scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
  connect: "연결",
  qrcode: "QR 코드",
  mobile: "모바일",
  desktop: "데스크탑",
  copy_to_clipboard: "클립보드에 복사",
  copied_to_clipboard: "클립보드에 복사되었습니다!",
  connect_with: "와 연결하다",
  loading: "로드 중...",
  something_went_wrong: "문제가 발생했습니다.",
  no_supported_wallets: "아직 지원되는 지갑이 없습니다",
  no_wallets_found: "지갑을 찾을 수 없습니다"
}, Vl = {
  choose_preferred_wallet: "Escolha sua carteira preferida",
  connect_mobile_wallet: "Conectar-se à carteira móvel",
  scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
  connect: "Conectar",
  qrcode: "Código QR",
  mobile: "Móvel",
  desktop: "Desktop",
  copy_to_clipboard: "Copiar",
  copied_to_clipboard: "Copiado!",
  connect_with: "Ligar por meio de",
  loading: "Carregamento...",
  something_went_wrong: "Algo correu mal",
  no_supported_wallets: "Ainda não há carteiras suportadas",
  no_wallets_found: "Nenhuma carteira encontrada"
}, Jl = {
  choose_preferred_wallet: "选择你的钱包",
  connect_mobile_wallet: "连接至移动端钱包",
  scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
  connect: "连接",
  qrcode: "二维码",
  mobile: "移动",
  desktop: "桌面",
  copy_to_clipboard: "复制到剪贴板",
  copied_to_clipboard: "复制到剪贴板成功！",
  connect_with: "通过以下方式连接",
  loading: "正在加载...",
  something_went_wrong: "出了问题",
  no_supported_wallets: "目前还没有支持的钱包",
  no_wallets_found: "没有找到钱包"
}, Kl = {
  choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
  connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
  scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
  connect: "اتصال",
  qrcode: "کد QR",
  mobile: "سیار",
  desktop: "دسکتاپ",
  copy_to_clipboard: "کپی به کلیپ بورد",
  copied_to_clipboard: "در کلیپ بورد کپی شد!",
  connect_with: "ارتباط با",
  loading: "...بارگذاری",
  something_went_wrong: "مشکلی پیش آمد",
  no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
  no_wallets_found: "هیچ کیف پولی پیدا نشد"
}, xn = {
  de: Wl,
  en: Fl,
  es: Hl,
  fr: jl,
  ko: zl,
  pt: Vl,
  zh: Jl,
  fa: Kl
};
function Ql() {
  var t = M.getDocumentOrThrow(), e = t.getElementById(Nn);
  e && t.head.removeChild(e);
  var n = t.createElement("style");
  n.setAttribute("id", Nn), n.innerText = El, t.head.appendChild(n);
}
function Gl() {
  var t = M.getDocumentOrThrow(), e = t.createElement("div");
  return e.setAttribute("id", Vo), t.body.appendChild(e), e;
}
function Qo() {
  var t = M.getDocumentOrThrow(), e = t.getElementById(Jo);
  e && (e.className = e.className.replace("fadeIn", "fadeOut"), setTimeout(function() {
    var n = t.getElementById(Vo);
    n && t.body.removeChild(n);
  }, kl));
}
function Yl(t) {
  return function() {
    Qo(), t && t();
  };
}
function Xl() {
  var t = M.getNavigatorOrThrow().language.split("-")[0] || "en";
  return xn[t] || xn.en;
}
function Zl(t, e, n) {
  Ql();
  var r = Gl();
  C.render(C.createElement(ql, {
    text: Xl(),
    uri: t,
    onClose: Yl(e),
    qrcodeModalOptions: n
  }), r);
}
function eu() {
  Qo();
}
var Go = function() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
};
function tu(t, e, n) {
  console.log(t), Go() ? bl(t) : Zl(t, e, n);
}
function nu() {
  Go() || eu();
}
var ru = {
  open: tu,
  close: nu
}, ou = ru;
const iu = /* @__PURE__ */ pt(ou);
class su extends ci {
  constructor(e) {
    super(), A(this, "events", new On()), A(this, "accounts", []), A(this, "chainId", 1), A(this, "pending", !1), A(this, "wc", void 0), A(this, "bridge", "https://bridge.walletconnect.org"), A(this, "qrcode", !0), A(this, "qrcodeModalOptions", void 0), A(this, "opts", void 0), this.opts = e, this.chainId = (e == null ? void 0 : e.chainId) || this.chainId, this.wc = this.register(e);
  }
  get connected() {
    return typeof this.wc < "u" && this.wc.connected;
  }
  get connecting() {
    return this.pending;
  }
  get connector() {
    return this.wc = this.register(this.opts), this.wc;
  }
  on(e, n) {
    this.events.on(e, n);
  }
  once(e, n) {
    this.events.once(e, n);
  }
  off(e, n) {
    this.events.off(e, n);
  }
  removeListener(e, n) {
    this.events.removeListener(e, n);
  }
  async open(e) {
    if (this.connected) {
      this.onOpen();
      return;
    }
    return new Promise((n, r) => {
      this.on("error", (o) => {
        r(o);
      }), this.on("open", () => {
        n();
      }), this.create(e);
    });
  }
  async close() {
    typeof this.wc > "u" || (this.wc.connected && this.wc.killSession(), this.onClose());
  }
  async send(e) {
    this.wc = this.register(this.opts), this.connected || await this.open(), this.sendPayload(e).then((n) => this.events.emit("payload", n)).catch((n) => this.events.emit("payload", Yt(e.id, n.message)));
  }
  async sendAsync(e) {
    console.log("sendAsync", e);
  }
  // ---------- Private ----------------------------------------------- //
  register(e) {
    if (this.wc)
      return this.wc;
    this.opts = e || this.opts, this.bridge = e != null && e.connector ? e.connector.bridge : (e == null ? void 0 : e.bridge) || "https://bridge.walletconnect.org", this.qrcode = typeof (e == null ? void 0 : e.qrcode) > "u" || e.qrcode !== !1, this.chainId = typeof (e == null ? void 0 : e.chainId) < "u" ? e.chainId : this.chainId, this.qrcodeModalOptions = e == null ? void 0 : e.qrcodeModalOptions;
    const n = {
      bridge: this.bridge,
      qrcodeModal: this.qrcode ? iu : void 0,
      qrcodeModalOptions: this.qrcodeModalOptions,
      storageId: e == null ? void 0 : e.storageId,
      signingMethods: e == null ? void 0 : e.signingMethods,
      clientMeta: e == null ? void 0 : e.clientMeta,
      session: e == null ? void 0 : e.session
    };
    if (this.wc = typeof (e == null ? void 0 : e.connector) < "u" ? e.connector : new cc(n), typeof this.wc > "u")
      throw new Error("Failed to register WalletConnect connector");
    return this.wc.accounts.length && (this.accounts = this.wc.accounts), this.wc.chainId && (this.chainId = this.wc.chainId), this.registerConnectorEvents(), this.wc;
  }
  onOpen(e) {
    this.pending = !1, e && (this.wc = e), this.events.emit("open");
  }
  onClose() {
    this.pending = !1, this.wc && (this.wc = void 0), this.events.emit("close");
  }
  onError(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Failed or Rejected Request", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -32e3;
    const o = {
      id: e.id,
      jsonrpc: e.jsonrpc,
      error: {
        code: r,
        message: n
      }
    };
    return this.events.emit("payload", o), o;
  }
  create(e) {
    this.wc = this.register(this.opts), this.chainId = e || this.chainId, !(this.connected || this.pending) && (this.pending = !0, this.registerConnectorEvents(), this.wc.createSession({
      chainId: this.chainId
    }).then(() => this.events.emit("created")).catch((n) => this.events.emit("error", n)));
  }
  registerConnectorEvents() {
    this.wc = this.register(this.opts), this.wc.on("connect", (e) => {
      var n, r;
      if (e) {
        this.events.emit("error", e);
        return;
      }
      this.accounts = ((n = this.wc) == null ? void 0 : n.accounts) || [], this.chainId = ((r = this.wc) == null ? void 0 : r.chainId) || this.chainId, this.onOpen();
    }), this.wc.on("disconnect", (e) => {
      if (e) {
        this.events.emit("error", e);
        return;
      }
      this.onClose();
    }), this.wc.on("modal_closed", () => {
      this.events.emit("error", new Error("User closed modal"));
    }), this.wc.on("session_update", (e, n) => {
      const {
        accounts: r,
        chainId: o
      } = n.params[0];
      (!this.accounts || r && this.accounts !== r) && (this.accounts = r, this.events.emit("accountsChanged", r)), (!this.chainId || o && this.chainId !== o) && (this.chainId = o, this.events.emit("chainChanged", o));
    });
  }
  async sendPayload(e) {
    this.wc = this.register(this.opts);
    try {
      const n = await this.wc.unsafeSend(e);
      return this.sanitizeResponse(n);
    } catch (n) {
      return this.onError(e, n.message);
    }
  }
  sanitizeResponse(e) {
    return typeof e.error < "u" && typeof e.error.code > "u" ? Yt(e.id, e.error.message) : e;
  }
}
var au = su;
class du {
  constructor(e) {
    A(this, "events", new On()), A(this, "rpc", void 0), A(this, "signer", void 0), A(this, "http", void 0), this.rpc = {
      infuraId: e == null ? void 0 : e.infuraId,
      custom: e == null ? void 0 : e.rpc
    }, this.signer = new Gt(new au(e));
    const n = this.signer.connection.chainId || (e == null ? void 0 : e.chainId) || 1;
    this.http = this.setHttpProvider(n), this.registerEventListeners();
  }
  get connected() {
    return this.signer.connection.connected;
  }
  get connector() {
    return this.signer.connection.connector;
  }
  get accounts() {
    return this.signer.connection.accounts;
  }
  get chainId() {
    return this.signer.connection.chainId;
  }
  get rpcUrl() {
    var e;
    return ((e = this.http) == null ? void 0 : e.connection).url || "";
  }
  async request(e) {
    switch (e.method) {
      case "eth_requestAccounts":
        return await this.connect(), this.signer.connection.accounts;
      case "eth_accounts":
        return this.signer.connection.accounts;
      case "eth_chainId":
        return this.signer.connection.chainId;
    }
    if (Bt.includes(e.method))
      return this.signer.request(e);
    if (typeof this.http > "u")
      throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);
    return this.http.request(e);
  }
  async enable() {
    return await this.request({
      method: "eth_requestAccounts"
    });
  }
  async connect() {
    this.signer.connection.connected || await this.signer.connect();
  }
  async disconnect() {
    this.signer.connection.connected && await this.signer.disconnect();
  }
  on(e, n) {
    this.events.on(e, n);
  }
  once(e, n) {
    this.events.once(e, n);
  }
  removeListener(e, n) {
    this.events.removeListener(e, n);
  }
  off(e, n) {
    this.events.off(e, n);
  }
  get isWalletConnect() {
    return !0;
  }
  // ---------- Private ----------------------------------------------- //
  registerEventListeners() {
    this.signer.connection.on("accountsChanged", (e) => {
      this.events.emit("accountsChanged", e);
    }), this.signer.connection.on("chainChanged", (e) => {
      this.http = this.setHttpProvider(e), this.events.emit("chainChanged", e);
    }), this.connector.on("display_uri", (e, n) => {
      this.events.emit("display_uri", e, n);
    }), this.connector.on("call_request_sent", (e, n) => {
      this.events.emit("call_request_sent", e, n);
    }), this.signer.on("disconnect", () => {
      this.events.emit("disconnect");
    });
  }
  setHttpProvider(e) {
    const n = Fr(e, this.rpc);
    return typeof n > "u" ? void 0 : new Gt(new ai(n));
  }
}
export {
  du as default
};
