import { e as Cr, $ as ru } from "./events-0FsyVRaq.js";
import { al as I1, am as S1, an as x1, ao as P1, ap as O1, aq as A1, ar as N1, as as T1, at as R1, au as C1, av as Uo, aw as jo, ax as Lo, ay as Mo, az as $1, aA as Sn, aB as oe, aC as D1, aD as Bf, aE as qo, aF as kf, aG as F1, aH as zo, aI as Vf, aJ as Kf, aK as Ho, aL as U1, aM as Hr, a5 as Wf, aN as j1 } from "./main-gOxGUjNF.js";
function iu(n) {
  return globalThis.Buffer != null ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : n;
}
function Gf(n = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? iu(globalThis.Buffer.allocUnsafe(n)) : new Uint8Array(n);
}
function zc(n, t) {
  t || (t = n.reduce((a, h) => a + h.length, 0));
  const r = Gf(t);
  let s = 0;
  for (const a of n)
    r.set(a, s), s += a.length;
  return iu(r);
}
const vl = {
  ...I1,
  ...S1,
  ...x1,
  ...P1,
  ...O1,
  ...A1,
  ...N1,
  ...T1,
  ...R1,
  ...C1
};
function Jf(n, t, r, s) {
  return {
    name: n,
    prefix: t,
    encoder: {
      name: n,
      prefix: t,
      encode: r
    },
    decoder: { decode: s }
  };
}
const wl = Jf("utf8", "u", (n) => "u" + new TextDecoder("utf8").decode(n), (n) => new TextEncoder().encode(n.substring(1))), bc = Jf("ascii", "a", (n) => {
  let t = "a";
  for (let r = 0; r < n.length; r++)
    t += String.fromCharCode(n[r]);
  return t;
}, (n) => {
  n = n.substring(1);
  const t = Gf(n.length);
  for (let r = 0; r < n.length; r++)
    t[r] = n.charCodeAt(r);
  return t;
}), Qf = {
  utf8: wl,
  "utf-8": wl,
  hex: vl.base16,
  latin1: bc,
  ascii: bc,
  binary: bc,
  ...vl
};
function nr(n, t = "utf8") {
  const r = Qf[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? iu(globalThis.Buffer.from(n, "utf-8")) : r.decoder.decode(`${r.prefix}${n}`);
}
function Qt(n, t = "utf8") {
  const r = Qf[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString("utf8") : r.encoder.encode(n).substring(1);
}
var bl = function(n, t, r) {
  if (r || arguments.length === 2)
    for (var s = 0, a = t.length, h; s < a; s++)
      (h || !(s in t)) && (h || (h = Array.prototype.slice.call(t, 0, s)), h[s] = t[s]);
  return n.concat(h || Array.prototype.slice.call(t));
}, L1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t, r, s) {
      this.name = t, this.version = r, this.os = s, this.type = "browser";
    }
    return n;
  }()
), M1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return n;
  }()
), q1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t, r, s, a) {
      this.name = t, this.version = r, this.os = s, this.bot = a, this.type = "bot-device";
    }
    return n;
  }()
), z1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function n() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return n;
  }()
), H1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function n() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return n;
  }()
), B1 = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, k1 = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, _l = 3, V1 = [
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
  ["searchbot", B1]
], El = [
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
function K1(n) {
  return n ? Il(n) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new H1() : typeof navigator < "u" ? Il(navigator.userAgent) : J1();
}
function W1(n) {
  return n !== "" && V1.reduce(function(t, r) {
    var s = r[0], a = r[1];
    if (t)
      return t;
    var h = a.exec(n);
    return !!h && [s, h];
  }, !1);
}
function Il(n) {
  var t = W1(n);
  if (!t)
    return null;
  var r = t[0], s = t[1];
  if (r === "searchbot")
    return new z1();
  var a = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
  a ? a.length < _l && (a = bl(bl([], a, !0), Q1(_l - a.length), !0)) : a = [];
  var h = a.join("."), y = G1(n), b = k1.exec(n);
  return b && b[1] ? new q1(r, h, y, b[1]) : new L1(r, h, y);
}
function G1(n) {
  for (var t = 0, r = El.length; t < r; t++) {
    var s = El[t], a = s[0], h = s[1], y = h.exec(n);
    if (y)
      return a;
  }
  return null;
}
function J1() {
  var n = typeof process < "u" && process.version;
  return n ? new M1(process.version.slice(1)) : null;
}
function Q1(n) {
  for (var t = [], r = 0; r < n; r++)
    t.push("0");
  return t;
}
const Y1 = {
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
var X1 = {};
(function(n) {
  const t = Lo, r = Mo, s = Uo, a = jo, h = (u) => u == null, y = Symbol("encodeFragmentIdentifier");
  function b(u) {
    switch (u.arrayFormat) {
      case "index":
        return (d) => (m, g) => {
          const p = m.length;
          return g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, [E(d, u), "[", p, "]"].join("")] : [
            ...m,
            [E(d, u), "[", E(p, u), "]=", E(g, u)].join("")
          ];
        };
      case "bracket":
        return (d) => (m, g) => g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, [E(d, u), "[]"].join("")] : [...m, [E(d, u), "[]=", E(g, u)].join("")];
      case "colon-list-separator":
        return (d) => (m, g) => g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, [E(d, u), ":list="].join("")] : [...m, [E(d, u), ":list=", E(g, u)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const d = u.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (m) => (g, p) => p === void 0 || u.skipNull && p === null || u.skipEmptyString && p === "" ? g : (p = p === null ? "" : p, g.length === 0 ? [[E(m, u), d, E(p, u)].join("")] : [[g, E(p, u)].join(u.arrayFormatSeparator)]);
      }
      default:
        return (d) => (m, g) => g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, E(d, u)] : [...m, [E(d, u), "=", E(g, u)].join("")];
    }
  }
  function O(u) {
    let d;
    switch (u.arrayFormat) {
      case "index":
        return (m, g, p) => {
          if (d = /\[(\d*)\]$/.exec(m), m = m.replace(/\[\d*\]$/, ""), !d) {
            p[m] = g;
            return;
          }
          p[m] === void 0 && (p[m] = {}), p[m][d[1]] = g;
        };
      case "bracket":
        return (m, g, p) => {
          if (d = /(\[\])$/.exec(m), m = m.replace(/\[\]$/, ""), !d) {
            p[m] = g;
            return;
          }
          if (p[m] === void 0) {
            p[m] = [g];
            return;
          }
          p[m] = [].concat(p[m], g);
        };
      case "colon-list-separator":
        return (m, g, p) => {
          if (d = /(:list)$/.exec(m), m = m.replace(/:list$/, ""), !d) {
            p[m] = g;
            return;
          }
          if (p[m] === void 0) {
            p[m] = [g];
            return;
          }
          p[m] = [].concat(p[m], g);
        };
      case "comma":
      case "separator":
        return (m, g, p) => {
          const N = typeof g == "string" && g.includes(u.arrayFormatSeparator), x = typeof g == "string" && !N && A(g, u).includes(u.arrayFormatSeparator);
          g = x ? A(g, u) : g;
          const Q = N || x ? g.split(u.arrayFormatSeparator).map((se) => A(se, u)) : g === null ? g : A(g, u);
          p[m] = Q;
        };
      case "bracket-separator":
        return (m, g, p) => {
          const N = /(\[\])$/.test(m);
          if (m = m.replace(/\[\]$/, ""), !N) {
            p[m] = g && A(g, u);
            return;
          }
          const x = g === null ? [] : g.split(u.arrayFormatSeparator).map((Q) => A(Q, u));
          if (p[m] === void 0) {
            p[m] = x;
            return;
          }
          p[m] = [].concat(p[m], x);
        };
      default:
        return (m, g, p) => {
          if (p[m] === void 0) {
            p[m] = g;
            return;
          }
          p[m] = [].concat(p[m], g);
        };
    }
  }
  function _(u) {
    if (typeof u != "string" || u.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function E(u, d) {
    return d.encode ? d.strict ? t(u) : encodeURIComponent(u) : u;
  }
  function A(u, d) {
    return d.decode ? r(u) : u;
  }
  function j(u) {
    return Array.isArray(u) ? u.sort() : typeof u == "object" ? j(Object.keys(u)).sort((d, m) => Number(d) - Number(m)).map((d) => u[d]) : u;
  }
  function H(u) {
    const d = u.indexOf("#");
    return d !== -1 && (u = u.slice(0, d)), u;
  }
  function L(u) {
    let d = "";
    const m = u.indexOf("#");
    return m !== -1 && (d = u.slice(m)), d;
  }
  function J(u) {
    u = H(u);
    const d = u.indexOf("?");
    return d === -1 ? "" : u.slice(d + 1);
  }
  function te(u, d) {
    return d.parseNumbers && !Number.isNaN(Number(u)) && typeof u == "string" && u.trim() !== "" ? u = Number(u) : d.parseBooleans && u !== null && (u.toLowerCase() === "true" || u.toLowerCase() === "false") && (u = u.toLowerCase() === "true"), u;
  }
  function ue(u, d) {
    d = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, d), _(d.arrayFormatSeparator);
    const m = O(d), g = /* @__PURE__ */ Object.create(null);
    if (typeof u != "string" || (u = u.trim().replace(/^[?#&]/, ""), !u))
      return g;
    for (const p of u.split("&")) {
      if (p === "")
        continue;
      let [N, x] = s(d.decode ? p.replace(/\+/g, " ") : p, "=");
      x = x === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(d.arrayFormat) ? x : A(x, d), m(A(N, d), x, g);
    }
    for (const p of Object.keys(g)) {
      const N = g[p];
      if (typeof N == "object" && N !== null)
        for (const x of Object.keys(N))
          N[x] = te(N[x], d);
      else
        g[p] = te(N, d);
    }
    return d.sort === !1 ? g : (d.sort === !0 ? Object.keys(g).sort() : Object.keys(g).sort(d.sort)).reduce((p, N) => {
      const x = g[N];
      return x && typeof x == "object" && !Array.isArray(x) ? p[N] = j(x) : p[N] = x, p;
    }, /* @__PURE__ */ Object.create(null));
  }
  n.extract = J, n.parse = ue, n.stringify = (u, d) => {
    if (!u)
      return "";
    d = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, d), _(d.arrayFormatSeparator);
    const m = (x) => d.skipNull && h(u[x]) || d.skipEmptyString && u[x] === "", g = b(d), p = {};
    for (const x of Object.keys(u))
      m(x) || (p[x] = u[x]);
    const N = Object.keys(p);
    return d.sort !== !1 && N.sort(d.sort), N.map((x) => {
      const Q = u[x];
      return Q === void 0 ? "" : Q === null ? E(x, d) : Array.isArray(Q) ? Q.length === 0 && d.arrayFormat === "bracket-separator" ? E(x, d) + "[]" : Q.reduce(g(x), []).join("&") : E(x, d) + "=" + E(Q, d);
    }).filter((x) => x.length > 0).join("&");
  }, n.parseUrl = (u, d) => {
    d = Object.assign({
      decode: !0
    }, d);
    const [m, g] = s(u, "#");
    return Object.assign(
      {
        url: m.split("?")[0] || "",
        query: ue(J(u), d)
      },
      d && d.parseFragmentIdentifier && g ? { fragmentIdentifier: A(g, d) } : {}
    );
  }, n.stringifyUrl = (u, d) => {
    d = Object.assign({
      encode: !0,
      strict: !0,
      [y]: !0
    }, d);
    const m = H(u.url).split("?")[0] || "", g = n.extract(u.url), p = n.parse(g, { sort: !1 }), N = Object.assign(p, u.query);
    let x = n.stringify(N, d);
    x && (x = `?${x}`);
    let Q = L(u.url);
    return u.fragmentIdentifier && (Q = `#${d[y] ? E(u.fragmentIdentifier, d) : u.fragmentIdentifier}`), `${m}${x}${Q}`;
  }, n.pick = (u, d, m) => {
    m = Object.assign({
      parseFragmentIdentifier: !0,
      [y]: !1
    }, m);
    const { url: g, query: p, fragmentIdentifier: N } = n.parseUrl(u, m);
    return n.stringifyUrl({
      url: g,
      query: a(p, d),
      fragmentIdentifier: N
    }, m);
  }, n.exclude = (u, d, m) => {
    const g = Array.isArray(d) ? (p) => !d.includes(p) : (p, N) => !d(p, N);
    return n.pick(u, g, m);
  };
})(X1);
function Z1(n, t = []) {
  const r = [];
  return Object.keys(n).forEach((s) => {
    if (t.length && !t.includes(s))
      return;
    const a = n[s];
    r.push(...a.accounts);
  }), r;
}
const ew = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function tw(n, t) {
  const { message: r, code: s } = ew[n];
  return { message: t ? `${r} ${t}` : r, code: s };
}
function Hc(n, t) {
  return Array.isArray(n) ? typeof t < "u" && n.length ? n.every(t) : !0 : !1;
}
const rw = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, iw = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, nw = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function sw(n, t) {
  if (n === "__proto__" || n === "constructor" && t && typeof t == "object" && "prototype" in t) {
    ow(n);
    return;
  }
  return t;
}
function ow(n) {
  console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`);
}
function wo(n, t = {}) {
  if (typeof n != "string")
    return n;
  const r = n.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    n[0] === '"' && n.at(-1) === '"' && !n.includes("\\")
  )
    return r.slice(1, -1);
  if (r.length <= 9) {
    const s = r.toLowerCase();
    if (s === "true")
      return !0;
    if (s === "false")
      return !1;
    if (s === "undefined")
      return;
    if (s === "null")
      return null;
    if (s === "nan")
      return Number.NaN;
    if (s === "infinity")
      return Number.POSITIVE_INFINITY;
    if (s === "-infinity")
      return Number.NEGATIVE_INFINITY;
  }
  if (!nw.test(n)) {
    if (t.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return n;
  }
  try {
    if (rw.test(n) || iw.test(n)) {
      if (t.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(n, sw);
    }
    return JSON.parse(n);
  } catch (s) {
    if (t.strict)
      throw s;
    return n;
  }
}
function aw(n) {
  return !n || typeof n.then != "function" ? Promise.resolve(n) : n;
}
function qt(n, ...t) {
  try {
    return aw(n(...t));
  } catch (r) {
    return Promise.reject(r);
  }
}
function cw(n) {
  const t = typeof n;
  return n === null || t !== "object" && t !== "function";
}
function uw(n) {
  const t = Object.getPrototypeOf(n);
  return !t || t.isPrototypeOf(Object);
}
function xo(n) {
  if (cw(n))
    return String(n);
  if (uw(n) || Array.isArray(n))
    return JSON.stringify(n);
  if (typeof n.toJSON == "function")
    return xo(n.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Yf() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Bc = "base64:";
function hw(n) {
  if (typeof n == "string")
    return n;
  Yf();
  const t = Buffer.from(n).toString("base64");
  return Bc + t;
}
function lw(n) {
  return typeof n != "string" || !n.startsWith(Bc) ? n : (Yf(), Buffer.from(n.slice(Bc.length), "base64"));
}
function dr(n) {
  return n ? n.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function fw(...n) {
  return dr(n.join(":"));
}
function bo(n) {
  return n = dr(n), n ? n + ":" : "";
}
const dw = "memory", pw = () => {
  const n = /* @__PURE__ */ new Map();
  return {
    name: dw,
    options: {},
    hasItem(t) {
      return n.has(t);
    },
    getItem(t) {
      return n.get(t) ?? null;
    },
    getItemRaw(t) {
      return n.get(t) ?? null;
    },
    setItem(t, r) {
      n.set(t, r);
    },
    setItemRaw(t, r) {
      n.set(t, r);
    },
    removeItem(t) {
      n.delete(t);
    },
    getKeys() {
      return Array.from(n.keys());
    },
    clear() {
      n.clear();
    },
    dispose() {
      n.clear();
    }
  };
};
function gw(n = {}) {
  const t = {
    mounts: { "": n.driver || pw() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, r = (_) => {
    for (const E of t.mountpoints)
      if (_.startsWith(E))
        return {
          base: E,
          relativeKey: _.slice(E.length),
          driver: t.mounts[E]
        };
    return {
      base: "",
      relativeKey: _,
      driver: t.mounts[""]
    };
  }, s = (_, E) => t.mountpoints.filter(
    (A) => A.startsWith(_) || E && _.startsWith(A)
  ).map((A) => ({
    relativeBase: _.length > A.length ? _.slice(A.length) : void 0,
    mountpoint: A,
    driver: t.mounts[A]
  })), a = (_, E) => {
    if (t.watching) {
      E = dr(E);
      for (const A of t.watchListeners)
        A(_, E);
    }
  }, h = async () => {
    if (!t.watching) {
      t.watching = !0;
      for (const _ in t.mounts)
        t.unwatch[_] = await Sl(
          t.mounts[_],
          a,
          _
        );
    }
  }, y = async () => {
    if (t.watching) {
      for (const _ in t.unwatch)
        await t.unwatch[_]();
      t.unwatch = {}, t.watching = !1;
    }
  }, b = (_, E, A) => {
    const j = /* @__PURE__ */ new Map(), H = (L) => {
      let J = j.get(L.base);
      return J || (J = {
        driver: L.driver,
        base: L.base,
        items: []
      }, j.set(L.base, J)), J;
    };
    for (const L of _) {
      const J = typeof L == "string", te = dr(J ? L : L.key), ue = J ? void 0 : L.value, u = J || !L.options ? E : { ...E, ...L.options }, d = r(te);
      H(d).items.push({
        key: te,
        value: ue,
        relativeKey: d.relativeKey,
        options: u
      });
    }
    return Promise.all([...j.values()].map((L) => A(L))).then(
      (L) => L.flat()
    );
  }, O = {
    // Item
    hasItem(_, E = {}) {
      _ = dr(_);
      const { relativeKey: A, driver: j } = r(_);
      return qt(j.hasItem, A, E);
    },
    getItem(_, E = {}) {
      _ = dr(_);
      const { relativeKey: A, driver: j } = r(_);
      return qt(j.getItem, A, E).then(
        (H) => wo(H)
      );
    },
    getItems(_, E) {
      return b(_, E, (A) => A.driver.getItems ? qt(
        A.driver.getItems,
        A.items.map((j) => ({
          key: j.relativeKey,
          options: j.options
        })),
        E
      ).then(
        (j) => j.map((H) => ({
          key: fw(A.base, H.key),
          value: wo(H.value)
        }))
      ) : Promise.all(
        A.items.map((j) => qt(
          A.driver.getItem,
          j.relativeKey,
          j.options
        ).then((H) => ({
          key: j.key,
          value: wo(H)
        })))
      ));
    },
    getItemRaw(_, E = {}) {
      _ = dr(_);
      const { relativeKey: A, driver: j } = r(_);
      return j.getItemRaw ? qt(j.getItemRaw, A, E) : qt(j.getItem, A, E).then(
        (H) => lw(H)
      );
    },
    async setItem(_, E, A = {}) {
      if (E === void 0)
        return O.removeItem(_);
      _ = dr(_);
      const { relativeKey: j, driver: H } = r(_);
      H.setItem && (await qt(H.setItem, j, xo(E), A), H.watch || a("update", _));
    },
    async setItems(_, E) {
      await b(_, E, async (A) => {
        A.driver.setItems && await qt(
          A.driver.setItems,
          A.items.map((j) => ({
            key: j.relativeKey,
            value: xo(j.value),
            options: j.options
          })),
          E
        ), A.driver.setItem && await Promise.all(
          A.items.map((j) => qt(
            A.driver.setItem,
            j.relativeKey,
            xo(j.value),
            j.options
          ))
        );
      });
    },
    async setItemRaw(_, E, A = {}) {
      if (E === void 0)
        return O.removeItem(_, A);
      _ = dr(_);
      const { relativeKey: j, driver: H } = r(_);
      if (H.setItemRaw)
        await qt(H.setItemRaw, j, E, A);
      else if (H.setItem)
        await qt(H.setItem, j, hw(E), A);
      else
        return;
      H.watch || a("update", _);
    },
    async removeItem(_, E = {}) {
      typeof E == "boolean" && (E = { removeMeta: E }), _ = dr(_);
      const { relativeKey: A, driver: j } = r(_);
      j.removeItem && (await qt(j.removeItem, A, E), (E.removeMeta || E.removeMata) && await qt(j.removeItem, A + "$", E), j.watch || a("remove", _));
    },
    // Meta
    async getMeta(_, E = {}) {
      typeof E == "boolean" && (E = { nativeOnly: E }), _ = dr(_);
      const { relativeKey: A, driver: j } = r(_), H = /* @__PURE__ */ Object.create(null);
      if (j.getMeta && Object.assign(H, await qt(j.getMeta, A, E)), !E.nativeOnly) {
        const L = await qt(
          j.getItem,
          A + "$",
          E
        ).then((J) => wo(J));
        L && typeof L == "object" && (typeof L.atime == "string" && (L.atime = new Date(L.atime)), typeof L.mtime == "string" && (L.mtime = new Date(L.mtime)), Object.assign(H, L));
      }
      return H;
    },
    setMeta(_, E, A = {}) {
      return this.setItem(_ + "$", E, A);
    },
    removeMeta(_, E = {}) {
      return this.removeItem(_ + "$", E);
    },
    // Keys
    async getKeys(_, E = {}) {
      _ = bo(_);
      const A = s(_, !0);
      let j = [];
      const H = [];
      for (const L of A) {
        const te = (await qt(
          L.driver.getKeys,
          L.relativeBase,
          E
        )).map((ue) => L.mountpoint + dr(ue)).filter((ue) => !j.some((u) => ue.startsWith(u)));
        H.push(...te), j = [
          L.mountpoint,
          ...j.filter((ue) => !ue.startsWith(L.mountpoint))
        ];
      }
      return _ ? H.filter((L) => L.startsWith(_) && !L.endsWith("$")) : H.filter((L) => !L.endsWith("$"));
    },
    // Utils
    async clear(_, E = {}) {
      _ = bo(_), await Promise.all(
        s(_, !1).map(async (A) => {
          if (A.driver.clear)
            return qt(A.driver.clear, A.relativeBase, E);
          if (A.driver.removeItem) {
            const j = await A.driver.getKeys(A.relativeBase || "", E);
            return Promise.all(
              j.map((H) => A.driver.removeItem(H, E))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(t.mounts).map((_) => xl(_))
      );
    },
    async watch(_) {
      return await h(), t.watchListeners.push(_), async () => {
        t.watchListeners = t.watchListeners.filter(
          (E) => E !== _
        ), t.watchListeners.length === 0 && await y();
      };
    },
    async unwatch() {
      t.watchListeners = [], await y();
    },
    // Mount
    mount(_, E) {
      if (_ = bo(_), _ && t.mounts[_])
        throw new Error(`already mounted at ${_}`);
      return _ && (t.mountpoints.push(_), t.mountpoints.sort((A, j) => j.length - A.length)), t.mounts[_] = E, t.watching && Promise.resolve(Sl(E, a, _)).then((A) => {
        t.unwatch[_] = A;
      }).catch(console.error), O;
    },
    async unmount(_, E = !0) {
      _ = bo(_), !(!_ || !t.mounts[_]) && (t.watching && _ in t.unwatch && (t.unwatch[_](), delete t.unwatch[_]), E && await xl(t.mounts[_]), t.mountpoints = t.mountpoints.filter((A) => A !== _), delete t.mounts[_]);
    },
    getMount(_ = "") {
      _ = dr(_) + ":";
      const E = r(_);
      return {
        driver: E.driver,
        base: E.base
      };
    },
    getMounts(_ = "", E = {}) {
      return _ = dr(_), s(_, E.parents).map((j) => ({
        driver: j.driver,
        base: j.mountpoint
      }));
    }
  };
  return O;
}
function Sl(n, t, r) {
  return n.watch ? n.watch((s, a) => t(s, r + a)) : () => {
  };
}
async function xl(n) {
  typeof n.dispose == "function" && await qt(n.dispose);
}
function Qi(n) {
  return new Promise((t, r) => {
    n.oncomplete = n.onsuccess = () => t(n.result), n.onabort = n.onerror = () => r(n.error);
  });
}
function Xf(n, t) {
  const r = indexedDB.open(n);
  r.onupgradeneeded = () => r.result.createObjectStore(t);
  const s = Qi(r);
  return (a, h) => s.then((y) => h(y.transaction(t, a).objectStore(t)));
}
let _c;
function hs() {
  return _c || (_c = Xf("keyval-store", "keyval")), _c;
}
function Pl(n, t = hs()) {
  return t("readonly", (r) => Qi(r.get(n)));
}
function yw(n, t, r = hs()) {
  return r("readwrite", (s) => (s.put(t, n), Qi(s.transaction)));
}
function mw(n, t = hs()) {
  return t("readwrite", (r) => (r.delete(n), Qi(r.transaction)));
}
function vw(n = hs()) {
  return n("readwrite", (t) => (t.clear(), Qi(t.transaction)));
}
function ww(n, t) {
  return n.openCursor().onsuccess = function() {
    this.result && (t(this.result), this.result.continue());
  }, Qi(n.transaction);
}
function bw(n = hs()) {
  return n("readonly", (t) => {
    if (t.getAllKeys)
      return Qi(t.getAllKeys());
    const r = [];
    return ww(t, (s) => r.push(s.key)).then(() => r);
  });
}
const _w = (n) => JSON.stringify(n, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r), Ew = (n) => {
  const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = n.replace(t, '$1"$2n"$3');
  return JSON.parse(r, (s, a) => typeof a == "string" && a.match(/^\d+n$/) ? BigInt(a.substring(0, a.length - 1)) : a);
};
function ls(n) {
  if (typeof n != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof n}`);
  try {
    return Ew(n);
  } catch {
    return n;
  }
}
function Ji(n) {
  return typeof n == "string" ? n : _w(n) || "";
}
const Iw = "idb-keyval";
var Sw = (n = {}) => {
  const t = n.base && n.base.length > 0 ? `${n.base}:` : "", r = (a) => t + a;
  let s;
  return n.dbName && n.storeName && (s = Xf(n.dbName, n.storeName)), { name: Iw, options: n, async hasItem(a) {
    return !(typeof await Pl(r(a), s) > "u");
  }, async getItem(a) {
    return await Pl(r(a), s) ?? null;
  }, setItem(a, h) {
    return yw(r(a), h, s);
  }, removeItem(a) {
    return mw(r(a), s);
  }, getKeys() {
    return bw(s);
  }, clear() {
    return vw(s);
  } };
};
const xw = "WALLET_CONNECT_V2_INDEXED_DB", Pw = "keyvaluestorage";
let Ow = class {
  constructor() {
    this.indexedDb = gw({ driver: Sw({ dbName: xw, storeName: Pw }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
  }
  async getItem(t) {
    const r = await this.indexedDb.getItem(t);
    if (r !== null)
      return r;
  }
  async setItem(t, r) {
    await this.indexedDb.setItem(t, Ji(r));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var Ec = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Po = { exports: {} };
(function() {
  let n;
  function t() {
  }
  n = t, n.prototype.getItem = function(r) {
    return this.hasOwnProperty(r) ? String(this[r]) : null;
  }, n.prototype.setItem = function(r, s) {
    this[r] = String(s);
  }, n.prototype.removeItem = function(r) {
    delete this[r];
  }, n.prototype.clear = function() {
    const r = this;
    Object.keys(r).forEach(function(s) {
      r[s] = void 0, delete r[s];
    });
  }, n.prototype.key = function(r) {
    return r = r || 0, Object.keys(this)[r];
  }, n.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof Ec < "u" && Ec.localStorage ? Po.exports = Ec.localStorage : typeof window < "u" && window.localStorage ? Po.exports = window.localStorage : Po.exports = new t();
})();
function Aw(n) {
  var t;
  return [n[0], ls((t = n[1]) != null ? t : "")];
}
let Nw = class {
  constructor() {
    this.localStorage = Po.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Aw);
  }
  async getItem(t) {
    const r = this.localStorage.getItem(t);
    if (r !== null)
      return ls(r);
  }
  async setItem(t, r) {
    this.localStorage.setItem(t, Ji(r));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
};
const Tw = "wc_storage_version", Ol = 1, Rw = async (n, t, r) => {
  const s = Tw, a = await t.getItem(s);
  if (a && a >= Ol) {
    r(t);
    return;
  }
  const h = await n.getKeys();
  if (!h.length) {
    r(t);
    return;
  }
  const y = [];
  for (; h.length; ) {
    const b = h.shift();
    if (!b)
      continue;
    const O = b.toLowerCase();
    if (O.includes("wc@") || O.includes("walletconnect") || O.includes("wc_") || O.includes("wallet_connect")) {
      const _ = await n.getItem(b);
      await t.setItem(b, _), y.push(b);
    }
  }
  await t.setItem(s, Ol), r(t), Cw(n, y);
}, Cw = async (n, t) => {
  t.length && t.forEach(async (r) => {
    await n.removeItem(r);
  });
};
let $w = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (r) => {
      this.storage = r, this.initialized = !0;
    };
    const t = new Nw();
    this.storage = t;
    try {
      const r = new Ow();
      Rw(t, r, this.setInitialized);
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
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, r) {
    return await this.initialize(), this.storage.setItem(t, r);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized || await new Promise((t) => {
      const r = setInterval(() => {
        this.initialized && (clearInterval(r), t());
      }, 20);
    });
  }
};
var xn = {}, Gn = {}, Ic = {}, Jn = {};
let Yi = class {
};
const Dw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Yi
}, Symbol.toStringTag, { value: "Module" })), Fw = /* @__PURE__ */ $1(Dw);
var Al;
function Uw() {
  if (Al)
    return Jn;
  Al = 1, Object.defineProperty(Jn, "__esModule", { value: !0 }), Jn.IHeartBeat = void 0;
  const n = Fw;
  class t extends n.IEvents {
    constructor(s) {
      super();
    }
  }
  return Jn.IHeartBeat = t, Jn;
}
var Nl;
function Zf() {
  return Nl || (Nl = 1, function(n) {
    Object.defineProperty(n, "__esModule", { value: !0 }), Sn.__exportStar(Uw(), n);
  }(Ic)), Ic;
}
var Sc = {}, Vi = {}, Tl;
function jw() {
  if (Tl)
    return Vi;
  Tl = 1, Object.defineProperty(Vi, "__esModule", { value: !0 }), Vi.HEARTBEAT_EVENTS = Vi.HEARTBEAT_INTERVAL = void 0;
  const n = oe;
  return Vi.HEARTBEAT_INTERVAL = n.FIVE_SECONDS, Vi.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Vi;
}
var Rl;
function ed() {
  return Rl || (Rl = 1, function(n) {
    Object.defineProperty(n, "__esModule", { value: !0 }), Sn.__exportStar(jw(), n);
  }(Sc)), Sc;
}
var Cl;
function Lw() {
  if (Cl)
    return Gn;
  Cl = 1, Object.defineProperty(Gn, "__esModule", { value: !0 }), Gn.HeartBeat = void 0;
  const n = Sn, t = Cr, r = oe, s = Zf(), a = ed();
  class h extends s.IHeartBeat {
    constructor(b) {
      super(b), this.events = new t.EventEmitter(), this.interval = a.HEARTBEAT_INTERVAL, this.interval = (b == null ? void 0 : b.interval) || a.HEARTBEAT_INTERVAL;
    }
    static init(b) {
      return n.__awaiter(this, void 0, void 0, function* () {
        const O = new h(b);
        return yield O.init(), O;
      });
    }
    init() {
      return n.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(b, O) {
      this.events.on(b, O);
    }
    once(b, O) {
      this.events.once(b, O);
    }
    off(b, O) {
      this.events.off(b, O);
    }
    removeListener(b, O) {
      this.events.removeListener(b, O);
    }
    initialize() {
      return n.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), r.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(a.HEARTBEAT_EVENTS.pulse);
    }
  }
  return Gn.HeartBeat = h, Gn;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  const t = Sn;
  t.__exportStar(Lw(), n), t.__exportStar(Zf(), n), t.__exportStar(ed(), n);
})(xn);
var Te = {}, xc, $l;
function Mw() {
  if ($l)
    return xc;
  $l = 1;
  function n(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  xc = t;
  function t(r, s, a) {
    var h = a && a.stringify || n, y = 1;
    if (typeof r == "object" && r !== null) {
      var b = s.length + y;
      if (b === 1)
        return r;
      var O = new Array(b);
      O[0] = h(r);
      for (var _ = 1; _ < b; _++)
        O[_] = h(s[_]);
      return O.join(" ");
    }
    if (typeof r != "string")
      return r;
    var E = s.length;
    if (E === 0)
      return r;
    for (var A = "", j = 1 - y, H = -1, L = r && r.length || 0, J = 0; J < L; ) {
      if (r.charCodeAt(J) === 37 && J + 1 < L) {
        switch (H = H > -1 ? H : 0, r.charCodeAt(J + 1)) {
          case 100:
          case 102:
            if (j >= E || s[j] == null)
              break;
            H < J && (A += r.slice(H, J)), A += Number(s[j]), H = J + 2, J++;
            break;
          case 105:
            if (j >= E || s[j] == null)
              break;
            H < J && (A += r.slice(H, J)), A += Math.floor(Number(s[j])), H = J + 2, J++;
            break;
          case 79:
          case 111:
          case 106:
            if (j >= E || s[j] === void 0)
              break;
            H < J && (A += r.slice(H, J));
            var te = typeof s[j];
            if (te === "string") {
              A += "'" + s[j] + "'", H = J + 2, J++;
              break;
            }
            if (te === "function") {
              A += s[j].name || "<anonymous>", H = J + 2, J++;
              break;
            }
            A += h(s[j]), H = J + 2, J++;
            break;
          case 115:
            if (j >= E)
              break;
            H < J && (A += r.slice(H, J)), A += String(s[j]), H = J + 2, J++;
            break;
          case 37:
            H < J && (A += r.slice(H, J)), A += "%", H = J + 2, J++, j--;
            break;
        }
        ++j;
      }
      ++J;
    }
    return H === -1 ? r : (H < L && (A += r.slice(H)), A);
  }
  return xc;
}
var Pc, Dl;
function qw() {
  if (Dl)
    return Pc;
  Dl = 1;
  const n = Mw();
  Pc = a;
  const t = g().console || {}, r = {
    mapHttpRequest: L,
    mapHttpResponse: L,
    wrapRequestSerializer: J,
    wrapResponseSerializer: J,
    wrapErrorSerializer: J,
    req: L,
    res: L,
    err: j
  };
  function s(p, N) {
    return Array.isArray(p) ? p.filter(function(Q) {
      return Q !== "!stdSerializers.err";
    }) : p === !0 ? Object.keys(N) : !1;
  }
  function a(p) {
    p = p || {}, p.browser = p.browser || {};
    const N = p.browser.transmit;
    if (N && typeof N.send != "function")
      throw Error("pino: transmit option must have a send function");
    const x = p.browser.write || t;
    p.browser.write && (p.browser.asObject = !0);
    const Q = p.serializers || {}, se = s(p.browser.serialize, Q);
    let pe = p.browser.serialize;
    Array.isArray(p.browser.serialize) && p.browser.serialize.indexOf("!stdSerializers.err") > -1 && (pe = !1);
    const Re = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof x == "function" && (x.error = x.fatal = x.warn = x.info = x.debug = x.trace = x), p.enabled === !1 && (p.level = "silent");
    const qe = p.level || "info", S = Object.create(x);
    S.log || (S.log = te), Object.defineProperty(S, "levelVal", {
      get: ie
    }), Object.defineProperty(S, "level", {
      get: de,
      set: X
    });
    const C = {
      transmit: N,
      serialize: se,
      asObject: p.browser.asObject,
      levels: Re,
      timestamp: H(p)
    };
    S.levels = a.levels, S.level = qe, S.setMaxListeners = S.getMaxListeners = S.emit = S.addListener = S.on = S.prependListener = S.once = S.prependOnceListener = S.removeListener = S.removeAllListeners = S.listeners = S.listenerCount = S.eventNames = S.write = S.flush = te, S.serializers = Q, S._serialize = se, S._stdErrSerialize = pe, S.child = W, N && (S._logEvent = A());
    function ie() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function de() {
      return this._level;
    }
    function X(Y) {
      if (Y !== "silent" && !this.levels.values[Y])
        throw Error("unknown level " + Y);
      this._level = Y, h(C, S, "error", "log"), h(C, S, "fatal", "error"), h(C, S, "warn", "error"), h(C, S, "info", "log"), h(C, S, "debug", "log"), h(C, S, "trace", "log");
    }
    function W(Y, Z) {
      if (!Y)
        throw new Error("missing bindings for child Pino");
      Z = Z || {}, se && Y.serializers && (Z.serializers = Y.serializers);
      const Qe = Z.serializers;
      if (se && Qe) {
        var ke = Object.assign({}, Q, Qe), kr = p.browser.serialize === !0 ? Object.keys(ke) : se;
        delete Y.serializers, O([Y], kr, ke, this._stdErrSerialize);
      }
      function Ie(St) {
        this._childLevel = (St._childLevel | 0) + 1, this.error = _(St, Y, "error"), this.fatal = _(St, Y, "fatal"), this.warn = _(St, Y, "warn"), this.info = _(St, Y, "info"), this.debug = _(St, Y, "debug"), this.trace = _(St, Y, "trace"), ke && (this.serializers = ke, this._serialize = kr), N && (this._logEvent = A(
          [].concat(St._logEvent.bindings, Y)
        ));
      }
      return Ie.prototype = this, new Ie(this);
    }
    return S;
  }
  a.levels = {
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
  }, a.stdSerializers = r, a.stdTimeFunctions = Object.assign({}, { nullTime: ue, epochTime: u, unixTime: d, isoTime: m });
  function h(p, N, x, Q) {
    const se = Object.getPrototypeOf(N);
    N[x] = N.levelVal > N.levels.values[x] ? te : se[x] ? se[x] : t[x] || t[Q] || te, y(p, N, x);
  }
  function y(p, N, x) {
    !p.transmit && N[x] === te || (N[x] = /* @__PURE__ */ function(Q) {
      return function() {
        const pe = p.timestamp(), Re = new Array(arguments.length), qe = Object.getPrototypeOf && Object.getPrototypeOf(this) === t ? t : this;
        for (var S = 0; S < Re.length; S++)
          Re[S] = arguments[S];
        if (p.serialize && !p.asObject && O(Re, this._serialize, this.serializers, this._stdErrSerialize), p.asObject ? Q.call(qe, b(this, x, Re, pe)) : Q.apply(qe, Re), p.transmit) {
          const C = p.transmit.level || N.level, ie = a.levels.values[C], de = a.levels.values[x];
          if (de < ie)
            return;
          E(this, {
            ts: pe,
            methodLevel: x,
            methodValue: de,
            transmitLevel: C,
            transmitValue: a.levels.values[p.transmit.level || N.level],
            send: p.transmit.send,
            val: N.levelVal
          }, Re);
        }
      };
    }(N[x]));
  }
  function b(p, N, x, Q) {
    p._serialize && O(x, p._serialize, p.serializers, p._stdErrSerialize);
    const se = x.slice();
    let pe = se[0];
    const Re = {};
    Q && (Re.time = Q), Re.level = a.levels.values[N];
    let qe = (p._childLevel | 0) + 1;
    if (qe < 1 && (qe = 1), pe !== null && typeof pe == "object") {
      for (; qe-- && typeof se[0] == "object"; )
        Object.assign(Re, se.shift());
      pe = se.length ? n(se.shift(), se) : void 0;
    } else
      typeof pe == "string" && (pe = n(se.shift(), se));
    return pe !== void 0 && (Re.msg = pe), Re;
  }
  function O(p, N, x, Q) {
    for (const se in p)
      if (Q && p[se] instanceof Error)
        p[se] = a.stdSerializers.err(p[se]);
      else if (typeof p[se] == "object" && !Array.isArray(p[se]))
        for (const pe in p[se])
          N && N.indexOf(pe) > -1 && pe in x && (p[se][pe] = x[pe](p[se][pe]));
  }
  function _(p, N, x) {
    return function() {
      const Q = new Array(1 + arguments.length);
      Q[0] = N;
      for (var se = 1; se < Q.length; se++)
        Q[se] = arguments[se - 1];
      return p[x].apply(this, Q);
    };
  }
  function E(p, N, x) {
    const Q = N.send, se = N.ts, pe = N.methodLevel, Re = N.methodValue, qe = N.val, S = p._logEvent.bindings;
    O(
      x,
      p._serialize || Object.keys(p.serializers),
      p.serializers,
      p._stdErrSerialize === void 0 ? !0 : p._stdErrSerialize
    ), p._logEvent.ts = se, p._logEvent.messages = x.filter(function(C) {
      return S.indexOf(C) === -1;
    }), p._logEvent.level.label = pe, p._logEvent.level.value = Re, Q(pe, p._logEvent, qe), p._logEvent = A(S);
  }
  function A(p) {
    return {
      ts: 0,
      messages: [],
      bindings: p || [],
      level: { label: "", value: 0 }
    };
  }
  function j(p) {
    const N = {
      type: p.constructor.name,
      msg: p.message,
      stack: p.stack
    };
    for (const x in p)
      N[x] === void 0 && (N[x] = p[x]);
    return N;
  }
  function H(p) {
    return typeof p.timestamp == "function" ? p.timestamp : p.timestamp === !1 ? ue : u;
  }
  function L() {
    return {};
  }
  function J(p) {
    return p;
  }
  function te() {
  }
  function ue() {
    return !1;
  }
  function u() {
    return Date.now();
  }
  function d() {
    return Math.round(Date.now() / 1e3);
  }
  function m() {
    return new Date(Date.now()).toISOString();
  }
  function g() {
    function p(N) {
      return typeof N < "u" && N;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return p(self) || p(window) || p(this) || {};
    }
  }
  return Pc;
}
var Ki = {}, Fl;
function td() {
  return Fl || (Fl = 1, Object.defineProperty(Ki, "__esModule", { value: !0 }), Ki.PINO_CUSTOM_CONTEXT_KEY = Ki.PINO_LOGGER_DEFAULTS = void 0, Ki.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Ki.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Ki;
}
var ir = {}, Ul;
function zw() {
  if (Ul)
    return ir;
  Ul = 1, Object.defineProperty(ir, "__esModule", { value: !0 }), ir.generateChildLogger = ir.formatChildLoggerContext = ir.getLoggerContext = ir.setBrowserLoggerContext = ir.getBrowserLoggerContext = ir.getDefaultLoggerOptions = void 0;
  const n = td();
  function t(b) {
    return Object.assign(Object.assign({}, b), { level: (b == null ? void 0 : b.level) || n.PINO_LOGGER_DEFAULTS.level });
  }
  ir.getDefaultLoggerOptions = t;
  function r(b, O = n.PINO_CUSTOM_CONTEXT_KEY) {
    return b[O] || "";
  }
  ir.getBrowserLoggerContext = r;
  function s(b, O, _ = n.PINO_CUSTOM_CONTEXT_KEY) {
    return b[_] = O, b;
  }
  ir.setBrowserLoggerContext = s;
  function a(b, O = n.PINO_CUSTOM_CONTEXT_KEY) {
    let _ = "";
    return typeof b.bindings > "u" ? _ = r(b, O) : _ = b.bindings().context || "", _;
  }
  ir.getLoggerContext = a;
  function h(b, O, _ = n.PINO_CUSTOM_CONTEXT_KEY) {
    const E = a(b, _);
    return E.trim() ? `${E}/${O}` : O;
  }
  ir.formatChildLoggerContext = h;
  function y(b, O, _ = n.PINO_CUSTOM_CONTEXT_KEY) {
    const E = h(b, O, _), A = b.child({ context: E });
    return s(A, E, _);
  }
  return ir.generateChildLogger = y, ir;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.pino = void 0;
  const t = Sn, r = t.__importDefault(qw());
  Object.defineProperty(n, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), t.__exportStar(td(), n), t.__exportStar(zw(), n);
})(Te);
class Hw extends Yi {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}
let Bw = class extends Yi {
  constructor(t, r) {
    super(), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, kw = class {
  constructor(t, r) {
    this.logger = t, this.core = r;
  }
}, Vw = class extends Yi {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, Kw = class extends Yi {
  constructor(t) {
    super();
  }
}, Ww = class {
  constructor(t, r, s, a) {
    this.core = t, this.logger = r, this.name = s;
  }
};
class Gw extends Yi {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}
let Jw = class extends Yi {
  constructor(t, r) {
    super(), this.core = t, this.logger = r;
  }
}, Qw = class {
  constructor(t, r) {
    this.projectId = t, this.logger = r;
  }
}, Yw = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, Xw = class {
  constructor(t) {
    this.client = t;
  }
};
var nu = {}, rd = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  var t = D1, r = Bf;
  n.DIGEST_LENGTH = 64, n.BLOCK_SIZE = 128;
  var s = (
    /** @class */
    function() {
      function b() {
        this.digestLength = n.DIGEST_LENGTH, this.blockSize = n.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return b.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, b.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, b.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset();
      }, b.prototype.update = function(O, _) {
        if (_ === void 0 && (_ = O.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var E = 0;
        if (this._bytesHashed += _, this._bufferLength > 0) {
          for (; this._bufferLength < n.BLOCK_SIZE && _ > 0; )
            this._buffer[this._bufferLength++] = O[E++], _--;
          this._bufferLength === this.blockSize && (h(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (_ >= this.blockSize && (E = h(this._tempHi, this._tempLo, this._stateHi, this._stateLo, O, E, _), _ %= this.blockSize); _ > 0; )
          this._buffer[this._bufferLength++] = O[E++], _--;
        return this;
      }, b.prototype.finish = function(O) {
        if (!this._finished) {
          var _ = this._bytesHashed, E = this._bufferLength, A = _ / 536870912 | 0, j = _ << 3, H = _ % 128 < 112 ? 128 : 256;
          this._buffer[E] = 128;
          for (var L = E + 1; L < H - 8; L++)
            this._buffer[L] = 0;
          t.writeUint32BE(A, this._buffer, H - 8), t.writeUint32BE(j, this._buffer, H - 4), h(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, H), this._finished = !0;
        }
        for (var L = 0; L < this.digestLength / 8; L++)
          t.writeUint32BE(this._stateHi[L], O, L * 8), t.writeUint32BE(this._stateLo[L], O, L * 8 + 4);
        return this;
      }, b.prototype.digest = function() {
        var O = new Uint8Array(this.digestLength);
        return this.finish(O), O;
      }, b.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, b.prototype.restoreState = function(O) {
        return this._stateHi.set(O.stateHi), this._stateLo.set(O.stateLo), this._bufferLength = O.bufferLength, O.buffer && this._buffer.set(O.buffer), this._bytesHashed = O.bytesHashed, this._finished = !1, this;
      }, b.prototype.cleanSavedState = function(O) {
        r.wipe(O.stateHi), r.wipe(O.stateLo), O.buffer && r.wipe(O.buffer), O.bufferLength = 0, O.bytesHashed = 0;
      }, b;
    }()
  );
  n.SHA512 = s;
  var a = new Int32Array([
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
  function h(b, O, _, E, A, j, H) {
    for (var L = _[0], J = _[1], te = _[2], ue = _[3], u = _[4], d = _[5], m = _[6], g = _[7], p = E[0], N = E[1], x = E[2], Q = E[3], se = E[4], pe = E[5], Re = E[6], qe = E[7], S, C, ie, de, X, W, Y, Z; H >= 128; ) {
      for (var Qe = 0; Qe < 16; Qe++) {
        var ke = 8 * Qe + j;
        b[Qe] = t.readUint32BE(A, ke), O[Qe] = t.readUint32BE(A, ke + 4);
      }
      for (var Qe = 0; Qe < 80; Qe++) {
        var kr = L, Ie = J, St = te, z = ue, q = u, U = d, l = m, R = g, ae = p, ye = N, _e = x, Ce = Q, De = se, Pe = pe, xt = Re, wt = qe;
        if (S = g, C = qe, X = C & 65535, W = C >>> 16, Y = S & 65535, Z = S >>> 16, S = (u >>> 14 | se << 18) ^ (u >>> 18 | se << 14) ^ (se >>> 9 | u << 23), C = (se >>> 14 | u << 18) ^ (se >>> 18 | u << 14) ^ (u >>> 9 | se << 23), X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, S = u & d ^ ~u & m, C = se & pe ^ ~se & Re, X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, S = a[Qe * 2], C = a[Qe * 2 + 1], X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, S = b[Qe % 16], C = O[Qe % 16], X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, W += X >>> 16, Y += W >>> 16, Z += Y >>> 16, ie = Y & 65535 | Z << 16, de = X & 65535 | W << 16, S = ie, C = de, X = C & 65535, W = C >>> 16, Y = S & 65535, Z = S >>> 16, S = (L >>> 28 | p << 4) ^ (p >>> 2 | L << 30) ^ (p >>> 7 | L << 25), C = (p >>> 28 | L << 4) ^ (L >>> 2 | p << 30) ^ (L >>> 7 | p << 25), X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, S = L & J ^ L & te ^ J & te, C = p & N ^ p & x ^ N & x, X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, W += X >>> 16, Y += W >>> 16, Z += Y >>> 16, R = Y & 65535 | Z << 16, wt = X & 65535 | W << 16, S = z, C = Ce, X = C & 65535, W = C >>> 16, Y = S & 65535, Z = S >>> 16, S = ie, C = de, X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, W += X >>> 16, Y += W >>> 16, Z += Y >>> 16, z = Y & 65535 | Z << 16, Ce = X & 65535 | W << 16, J = kr, te = Ie, ue = St, u = z, d = q, m = U, g = l, L = R, N = ae, x = ye, Q = _e, se = Ce, pe = De, Re = Pe, qe = xt, p = wt, Qe % 16 === 15)
          for (var ke = 0; ke < 16; ke++)
            S = b[ke], C = O[ke], X = C & 65535, W = C >>> 16, Y = S & 65535, Z = S >>> 16, S = b[(ke + 9) % 16], C = O[(ke + 9) % 16], X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, ie = b[(ke + 1) % 16], de = O[(ke + 1) % 16], S = (ie >>> 1 | de << 31) ^ (ie >>> 8 | de << 24) ^ ie >>> 7, C = (de >>> 1 | ie << 31) ^ (de >>> 8 | ie << 24) ^ (de >>> 7 | ie << 25), X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, ie = b[(ke + 14) % 16], de = O[(ke + 14) % 16], S = (ie >>> 19 | de << 13) ^ (de >>> 29 | ie << 3) ^ ie >>> 6, C = (de >>> 19 | ie << 13) ^ (ie >>> 29 | de << 3) ^ (de >>> 6 | ie << 26), X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, W += X >>> 16, Y += W >>> 16, Z += Y >>> 16, b[ke] = Y & 65535 | Z << 16, O[ke] = X & 65535 | W << 16;
      }
      S = L, C = p, X = C & 65535, W = C >>> 16, Y = S & 65535, Z = S >>> 16, S = _[0], C = E[0], X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, W += X >>> 16, Y += W >>> 16, Z += Y >>> 16, _[0] = L = Y & 65535 | Z << 16, E[0] = p = X & 65535 | W << 16, S = J, C = N, X = C & 65535, W = C >>> 16, Y = S & 65535, Z = S >>> 16, S = _[1], C = E[1], X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, W += X >>> 16, Y += W >>> 16, Z += Y >>> 16, _[1] = J = Y & 65535 | Z << 16, E[1] = N = X & 65535 | W << 16, S = te, C = x, X = C & 65535, W = C >>> 16, Y = S & 65535, Z = S >>> 16, S = _[2], C = E[2], X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, W += X >>> 16, Y += W >>> 16, Z += Y >>> 16, _[2] = te = Y & 65535 | Z << 16, E[2] = x = X & 65535 | W << 16, S = ue, C = Q, X = C & 65535, W = C >>> 16, Y = S & 65535, Z = S >>> 16, S = _[3], C = E[3], X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, W += X >>> 16, Y += W >>> 16, Z += Y >>> 16, _[3] = ue = Y & 65535 | Z << 16, E[3] = Q = X & 65535 | W << 16, S = u, C = se, X = C & 65535, W = C >>> 16, Y = S & 65535, Z = S >>> 16, S = _[4], C = E[4], X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, W += X >>> 16, Y += W >>> 16, Z += Y >>> 16, _[4] = u = Y & 65535 | Z << 16, E[4] = se = X & 65535 | W << 16, S = d, C = pe, X = C & 65535, W = C >>> 16, Y = S & 65535, Z = S >>> 16, S = _[5], C = E[5], X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, W += X >>> 16, Y += W >>> 16, Z += Y >>> 16, _[5] = d = Y & 65535 | Z << 16, E[5] = pe = X & 65535 | W << 16, S = m, C = Re, X = C & 65535, W = C >>> 16, Y = S & 65535, Z = S >>> 16, S = _[6], C = E[6], X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, W += X >>> 16, Y += W >>> 16, Z += Y >>> 16, _[6] = m = Y & 65535 | Z << 16, E[6] = Re = X & 65535 | W << 16, S = g, C = qe, X = C & 65535, W = C >>> 16, Y = S & 65535, Z = S >>> 16, S = _[7], C = E[7], X += C & 65535, W += C >>> 16, Y += S & 65535, Z += S >>> 16, W += X >>> 16, Y += W >>> 16, Z += Y >>> 16, _[7] = g = Y & 65535 | Z << 16, E[7] = qe = X & 65535 | W << 16, j += 128, H -= 128;
    }
    return j;
  }
  function y(b) {
    var O = new s();
    O.update(b);
    var _ = O.digest();
    return O.clean(), _;
  }
  n.hash = y;
})(rd);
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.convertSecretKeyToX25519 = n.convertPublicKeyToX25519 = n.verify = n.sign = n.extractPublicKeyFromSecretKey = n.generateKeyPair = n.generateKeyPairFromSeed = n.SEED_LENGTH = n.SECRET_KEY_LENGTH = n.PUBLIC_KEY_LENGTH = n.SIGNATURE_LENGTH = void 0;
  const t = qo, r = rd, s = Bf;
  n.SIGNATURE_LENGTH = 64, n.PUBLIC_KEY_LENGTH = 32, n.SECRET_KEY_LENGTH = 64, n.SEED_LENGTH = 32;
  function a(z) {
    const q = new Float64Array(16);
    if (z)
      for (let U = 0; U < z.length; U++)
        q[U] = z[U];
    return q;
  }
  const h = new Uint8Array(32);
  h[0] = 9;
  const y = a(), b = a([1]), O = a([
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
  ]), _ = a([
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
  ]), E = a([
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
  ]), A = a([
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
  ]), j = a([
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
  function H(z, q) {
    for (let U = 0; U < 16; U++)
      z[U] = q[U] | 0;
  }
  function L(z) {
    let q = 1;
    for (let U = 0; U < 16; U++) {
      let l = z[U] + q + 65535;
      q = Math.floor(l / 65536), z[U] = l - q * 65536;
    }
    z[0] += q - 1 + 37 * (q - 1);
  }
  function J(z, q, U) {
    const l = ~(U - 1);
    for (let R = 0; R < 16; R++) {
      const ae = l & (z[R] ^ q[R]);
      z[R] ^= ae, q[R] ^= ae;
    }
  }
  function te(z, q) {
    const U = a(), l = a();
    for (let R = 0; R < 16; R++)
      l[R] = q[R];
    L(l), L(l), L(l);
    for (let R = 0; R < 2; R++) {
      U[0] = l[0] - 65517;
      for (let ye = 1; ye < 15; ye++)
        U[ye] = l[ye] - 65535 - (U[ye - 1] >> 16 & 1), U[ye - 1] &= 65535;
      U[15] = l[15] - 32767 - (U[14] >> 16 & 1);
      const ae = U[15] >> 16 & 1;
      U[14] &= 65535, J(l, U, 1 - ae);
    }
    for (let R = 0; R < 16; R++)
      z[2 * R] = l[R] & 255, z[2 * R + 1] = l[R] >> 8;
  }
  function ue(z, q) {
    let U = 0;
    for (let l = 0; l < 32; l++)
      U |= z[l] ^ q[l];
    return (1 & U - 1 >>> 8) - 1;
  }
  function u(z, q) {
    const U = new Uint8Array(32), l = new Uint8Array(32);
    return te(U, z), te(l, q), ue(U, l);
  }
  function d(z) {
    const q = new Uint8Array(32);
    return te(q, z), q[0] & 1;
  }
  function m(z, q) {
    for (let U = 0; U < 16; U++)
      z[U] = q[2 * U] + (q[2 * U + 1] << 8);
    z[15] &= 32767;
  }
  function g(z, q, U) {
    for (let l = 0; l < 16; l++)
      z[l] = q[l] + U[l];
  }
  function p(z, q, U) {
    for (let l = 0; l < 16; l++)
      z[l] = q[l] - U[l];
  }
  function N(z, q, U) {
    let l, R, ae = 0, ye = 0, _e = 0, Ce = 0, De = 0, Pe = 0, xt = 0, wt = 0, at = 0, Ue = 0, Xe = 0, Ze = 0, ct = 0, ze = 0, et = 0, $e = 0, Ve = 0, lt = 0, Le = 0, Pt = 0, Dt = 0, zt = 0, Ht = 0, jt = 0, Yt = 0, or = 0, Vr = 0, Xt = 0, Xr = 0, mi = 0, Ri = 0, ft = U[0], it = U[1], dt = U[2], pt = U[3], ut = U[4], nt = U[5], Ot = U[6], At = U[7], gt = U[8], Nt = U[9], yt = U[10], bt = U[11], mt = U[12], Ye = U[13], Tt = U[14], Rt = U[15];
    l = q[0], ae += l * ft, ye += l * it, _e += l * dt, Ce += l * pt, De += l * ut, Pe += l * nt, xt += l * Ot, wt += l * At, at += l * gt, Ue += l * Nt, Xe += l * yt, Ze += l * bt, ct += l * mt, ze += l * Ye, et += l * Tt, $e += l * Rt, l = q[1], ye += l * ft, _e += l * it, Ce += l * dt, De += l * pt, Pe += l * ut, xt += l * nt, wt += l * Ot, at += l * At, Ue += l * gt, Xe += l * Nt, Ze += l * yt, ct += l * bt, ze += l * mt, et += l * Ye, $e += l * Tt, Ve += l * Rt, l = q[2], _e += l * ft, Ce += l * it, De += l * dt, Pe += l * pt, xt += l * ut, wt += l * nt, at += l * Ot, Ue += l * At, Xe += l * gt, Ze += l * Nt, ct += l * yt, ze += l * bt, et += l * mt, $e += l * Ye, Ve += l * Tt, lt += l * Rt, l = q[3], Ce += l * ft, De += l * it, Pe += l * dt, xt += l * pt, wt += l * ut, at += l * nt, Ue += l * Ot, Xe += l * At, Ze += l * gt, ct += l * Nt, ze += l * yt, et += l * bt, $e += l * mt, Ve += l * Ye, lt += l * Tt, Le += l * Rt, l = q[4], De += l * ft, Pe += l * it, xt += l * dt, wt += l * pt, at += l * ut, Ue += l * nt, Xe += l * Ot, Ze += l * At, ct += l * gt, ze += l * Nt, et += l * yt, $e += l * bt, Ve += l * mt, lt += l * Ye, Le += l * Tt, Pt += l * Rt, l = q[5], Pe += l * ft, xt += l * it, wt += l * dt, at += l * pt, Ue += l * ut, Xe += l * nt, Ze += l * Ot, ct += l * At, ze += l * gt, et += l * Nt, $e += l * yt, Ve += l * bt, lt += l * mt, Le += l * Ye, Pt += l * Tt, Dt += l * Rt, l = q[6], xt += l * ft, wt += l * it, at += l * dt, Ue += l * pt, Xe += l * ut, Ze += l * nt, ct += l * Ot, ze += l * At, et += l * gt, $e += l * Nt, Ve += l * yt, lt += l * bt, Le += l * mt, Pt += l * Ye, Dt += l * Tt, zt += l * Rt, l = q[7], wt += l * ft, at += l * it, Ue += l * dt, Xe += l * pt, Ze += l * ut, ct += l * nt, ze += l * Ot, et += l * At, $e += l * gt, Ve += l * Nt, lt += l * yt, Le += l * bt, Pt += l * mt, Dt += l * Ye, zt += l * Tt, Ht += l * Rt, l = q[8], at += l * ft, Ue += l * it, Xe += l * dt, Ze += l * pt, ct += l * ut, ze += l * nt, et += l * Ot, $e += l * At, Ve += l * gt, lt += l * Nt, Le += l * yt, Pt += l * bt, Dt += l * mt, zt += l * Ye, Ht += l * Tt, jt += l * Rt, l = q[9], Ue += l * ft, Xe += l * it, Ze += l * dt, ct += l * pt, ze += l * ut, et += l * nt, $e += l * Ot, Ve += l * At, lt += l * gt, Le += l * Nt, Pt += l * yt, Dt += l * bt, zt += l * mt, Ht += l * Ye, jt += l * Tt, Yt += l * Rt, l = q[10], Xe += l * ft, Ze += l * it, ct += l * dt, ze += l * pt, et += l * ut, $e += l * nt, Ve += l * Ot, lt += l * At, Le += l * gt, Pt += l * Nt, Dt += l * yt, zt += l * bt, Ht += l * mt, jt += l * Ye, Yt += l * Tt, or += l * Rt, l = q[11], Ze += l * ft, ct += l * it, ze += l * dt, et += l * pt, $e += l * ut, Ve += l * nt, lt += l * Ot, Le += l * At, Pt += l * gt, Dt += l * Nt, zt += l * yt, Ht += l * bt, jt += l * mt, Yt += l * Ye, or += l * Tt, Vr += l * Rt, l = q[12], ct += l * ft, ze += l * it, et += l * dt, $e += l * pt, Ve += l * ut, lt += l * nt, Le += l * Ot, Pt += l * At, Dt += l * gt, zt += l * Nt, Ht += l * yt, jt += l * bt, Yt += l * mt, or += l * Ye, Vr += l * Tt, Xt += l * Rt, l = q[13], ze += l * ft, et += l * it, $e += l * dt, Ve += l * pt, lt += l * ut, Le += l * nt, Pt += l * Ot, Dt += l * At, zt += l * gt, Ht += l * Nt, jt += l * yt, Yt += l * bt, or += l * mt, Vr += l * Ye, Xt += l * Tt, Xr += l * Rt, l = q[14], et += l * ft, $e += l * it, Ve += l * dt, lt += l * pt, Le += l * ut, Pt += l * nt, Dt += l * Ot, zt += l * At, Ht += l * gt, jt += l * Nt, Yt += l * yt, or += l * bt, Vr += l * mt, Xt += l * Ye, Xr += l * Tt, mi += l * Rt, l = q[15], $e += l * ft, Ve += l * it, lt += l * dt, Le += l * pt, Pt += l * ut, Dt += l * nt, zt += l * Ot, Ht += l * At, jt += l * gt, Yt += l * Nt, or += l * yt, Vr += l * bt, Xt += l * mt, Xr += l * Ye, mi += l * Tt, Ri += l * Rt, ae += 38 * Ve, ye += 38 * lt, _e += 38 * Le, Ce += 38 * Pt, De += 38 * Dt, Pe += 38 * zt, xt += 38 * Ht, wt += 38 * jt, at += 38 * Yt, Ue += 38 * or, Xe += 38 * Vr, Ze += 38 * Xt, ct += 38 * Xr, ze += 38 * mi, et += 38 * Ri, R = 1, l = ae + R + 65535, R = Math.floor(l / 65536), ae = l - R * 65536, l = ye + R + 65535, R = Math.floor(l / 65536), ye = l - R * 65536, l = _e + R + 65535, R = Math.floor(l / 65536), _e = l - R * 65536, l = Ce + R + 65535, R = Math.floor(l / 65536), Ce = l - R * 65536, l = De + R + 65535, R = Math.floor(l / 65536), De = l - R * 65536, l = Pe + R + 65535, R = Math.floor(l / 65536), Pe = l - R * 65536, l = xt + R + 65535, R = Math.floor(l / 65536), xt = l - R * 65536, l = wt + R + 65535, R = Math.floor(l / 65536), wt = l - R * 65536, l = at + R + 65535, R = Math.floor(l / 65536), at = l - R * 65536, l = Ue + R + 65535, R = Math.floor(l / 65536), Ue = l - R * 65536, l = Xe + R + 65535, R = Math.floor(l / 65536), Xe = l - R * 65536, l = Ze + R + 65535, R = Math.floor(l / 65536), Ze = l - R * 65536, l = ct + R + 65535, R = Math.floor(l / 65536), ct = l - R * 65536, l = ze + R + 65535, R = Math.floor(l / 65536), ze = l - R * 65536, l = et + R + 65535, R = Math.floor(l / 65536), et = l - R * 65536, l = $e + R + 65535, R = Math.floor(l / 65536), $e = l - R * 65536, ae += R - 1 + 37 * (R - 1), R = 1, l = ae + R + 65535, R = Math.floor(l / 65536), ae = l - R * 65536, l = ye + R + 65535, R = Math.floor(l / 65536), ye = l - R * 65536, l = _e + R + 65535, R = Math.floor(l / 65536), _e = l - R * 65536, l = Ce + R + 65535, R = Math.floor(l / 65536), Ce = l - R * 65536, l = De + R + 65535, R = Math.floor(l / 65536), De = l - R * 65536, l = Pe + R + 65535, R = Math.floor(l / 65536), Pe = l - R * 65536, l = xt + R + 65535, R = Math.floor(l / 65536), xt = l - R * 65536, l = wt + R + 65535, R = Math.floor(l / 65536), wt = l - R * 65536, l = at + R + 65535, R = Math.floor(l / 65536), at = l - R * 65536, l = Ue + R + 65535, R = Math.floor(l / 65536), Ue = l - R * 65536, l = Xe + R + 65535, R = Math.floor(l / 65536), Xe = l - R * 65536, l = Ze + R + 65535, R = Math.floor(l / 65536), Ze = l - R * 65536, l = ct + R + 65535, R = Math.floor(l / 65536), ct = l - R * 65536, l = ze + R + 65535, R = Math.floor(l / 65536), ze = l - R * 65536, l = et + R + 65535, R = Math.floor(l / 65536), et = l - R * 65536, l = $e + R + 65535, R = Math.floor(l / 65536), $e = l - R * 65536, ae += R - 1 + 37 * (R - 1), z[0] = ae, z[1] = ye, z[2] = _e, z[3] = Ce, z[4] = De, z[5] = Pe, z[6] = xt, z[7] = wt, z[8] = at, z[9] = Ue, z[10] = Xe, z[11] = Ze, z[12] = ct, z[13] = ze, z[14] = et, z[15] = $e;
  }
  function x(z, q) {
    N(z, q, q);
  }
  function Q(z, q) {
    const U = a();
    let l;
    for (l = 0; l < 16; l++)
      U[l] = q[l];
    for (l = 253; l >= 0; l--)
      x(U, U), l !== 2 && l !== 4 && N(U, U, q);
    for (l = 0; l < 16; l++)
      z[l] = U[l];
  }
  function se(z, q) {
    const U = a();
    let l;
    for (l = 0; l < 16; l++)
      U[l] = q[l];
    for (l = 250; l >= 0; l--)
      x(U, U), l !== 1 && N(U, U, q);
    for (l = 0; l < 16; l++)
      z[l] = U[l];
  }
  function pe(z, q) {
    const U = a(), l = a(), R = a(), ae = a(), ye = a(), _e = a(), Ce = a(), De = a(), Pe = a();
    p(U, z[1], z[0]), p(Pe, q[1], q[0]), N(U, U, Pe), g(l, z[0], z[1]), g(Pe, q[0], q[1]), N(l, l, Pe), N(R, z[3], q[3]), N(R, R, _), N(ae, z[2], q[2]), g(ae, ae, ae), p(ye, l, U), p(_e, ae, R), g(Ce, ae, R), g(De, l, U), N(z[0], ye, _e), N(z[1], De, Ce), N(z[2], Ce, _e), N(z[3], ye, De);
  }
  function Re(z, q, U) {
    for (let l = 0; l < 4; l++)
      J(z[l], q[l], U);
  }
  function qe(z, q) {
    const U = a(), l = a(), R = a();
    Q(R, q[2]), N(U, q[0], R), N(l, q[1], R), te(z, l), z[31] ^= d(U) << 7;
  }
  function S(z, q, U) {
    H(z[0], y), H(z[1], b), H(z[2], b), H(z[3], y);
    for (let l = 255; l >= 0; --l) {
      const R = U[l / 8 | 0] >> (l & 7) & 1;
      Re(z, q, R), pe(q, z), pe(z, z), Re(z, q, R);
    }
  }
  function C(z, q) {
    const U = [a(), a(), a(), a()];
    H(U[0], E), H(U[1], A), H(U[2], b), N(U[3], E, A), S(z, U, q);
  }
  function ie(z) {
    if (z.length !== n.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${n.SEED_LENGTH} bytes`);
    const q = (0, r.hash)(z);
    q[0] &= 248, q[31] &= 127, q[31] |= 64;
    const U = new Uint8Array(32), l = [a(), a(), a(), a()];
    C(l, q), qe(U, l);
    const R = new Uint8Array(64);
    return R.set(z), R.set(U, 32), {
      publicKey: U,
      secretKey: R
    };
  }
  n.generateKeyPairFromSeed = ie;
  function de(z) {
    const q = (0, t.randomBytes)(32, z), U = ie(q);
    return (0, s.wipe)(q), U;
  }
  n.generateKeyPair = de;
  function X(z) {
    if (z.length !== n.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${n.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(z.subarray(32));
  }
  n.extractPublicKeyFromSecretKey = X;
  const W = new Float64Array([
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
  function Y(z, q) {
    let U, l, R, ae;
    for (l = 63; l >= 32; --l) {
      for (U = 0, R = l - 32, ae = l - 12; R < ae; ++R)
        q[R] += U - 16 * q[l] * W[R - (l - 32)], U = Math.floor((q[R] + 128) / 256), q[R] -= U * 256;
      q[R] += U, q[l] = 0;
    }
    for (U = 0, R = 0; R < 32; R++)
      q[R] += U - (q[31] >> 4) * W[R], U = q[R] >> 8, q[R] &= 255;
    for (R = 0; R < 32; R++)
      q[R] -= U * W[R];
    for (l = 0; l < 32; l++)
      q[l + 1] += q[l] >> 8, z[l] = q[l] & 255;
  }
  function Z(z) {
    const q = new Float64Array(64);
    for (let U = 0; U < 64; U++)
      q[U] = z[U];
    for (let U = 0; U < 64; U++)
      z[U] = 0;
    Y(z, q);
  }
  function Qe(z, q) {
    const U = new Float64Array(64), l = [a(), a(), a(), a()], R = (0, r.hash)(z.subarray(0, 32));
    R[0] &= 248, R[31] &= 127, R[31] |= 64;
    const ae = new Uint8Array(64);
    ae.set(R.subarray(32), 32);
    const ye = new r.SHA512();
    ye.update(ae.subarray(32)), ye.update(q);
    const _e = ye.digest();
    ye.clean(), Z(_e), C(l, _e), qe(ae, l), ye.reset(), ye.update(ae.subarray(0, 32)), ye.update(z.subarray(32)), ye.update(q);
    const Ce = ye.digest();
    Z(Ce);
    for (let De = 0; De < 32; De++)
      U[De] = _e[De];
    for (let De = 0; De < 32; De++)
      for (let Pe = 0; Pe < 32; Pe++)
        U[De + Pe] += Ce[De] * R[Pe];
    return Y(ae.subarray(32), U), ae;
  }
  n.sign = Qe;
  function ke(z, q) {
    const U = a(), l = a(), R = a(), ae = a(), ye = a(), _e = a(), Ce = a();
    return H(z[2], b), m(z[1], q), x(R, z[1]), N(ae, R, O), p(R, R, z[2]), g(ae, z[2], ae), x(ye, ae), x(_e, ye), N(Ce, _e, ye), N(U, Ce, R), N(U, U, ae), se(U, U), N(U, U, R), N(U, U, ae), N(U, U, ae), N(z[0], U, ae), x(l, z[0]), N(l, l, ae), u(l, R) && N(z[0], z[0], j), x(l, z[0]), N(l, l, ae), u(l, R) ? -1 : (d(z[0]) === q[31] >> 7 && p(z[0], y, z[0]), N(z[3], z[0], z[1]), 0);
  }
  function kr(z, q, U) {
    const l = new Uint8Array(32), R = [a(), a(), a(), a()], ae = [a(), a(), a(), a()];
    if (U.length !== n.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${n.SIGNATURE_LENGTH} bytes`);
    if (ke(ae, z))
      return !1;
    const ye = new r.SHA512();
    ye.update(U.subarray(0, 32)), ye.update(z), ye.update(q);
    const _e = ye.digest();
    return Z(_e), S(R, ae, _e), C(ae, U.subarray(32)), pe(R, ae), qe(l, R), !ue(U, l);
  }
  n.verify = kr;
  function Ie(z) {
    let q = [a(), a(), a(), a()];
    if (ke(q, z))
      throw new Error("Ed25519: invalid public key");
    let U = a(), l = a(), R = q[1];
    g(U, b, R), p(l, b, R), Q(l, l), N(U, U, l);
    let ae = new Uint8Array(32);
    return te(ae, U), ae;
  }
  n.convertPublicKeyToX25519 = Ie;
  function St(z) {
    const q = (0, r.hash)(z.subarray(0, 32));
    q[0] &= 248, q[31] &= 127, q[31] |= 64;
    const U = new Uint8Array(q.subarray(0, 32));
    return (0, s.wipe)(q), U;
  }
  n.convertSecretKeyToX25519 = St;
})(nu);
const Zw = "EdDSA", eb = "JWT", id = ".", nd = "base64url", tb = "utf8", rb = "utf8", ib = ":", nb = "did", sb = "key", jl = "base58btc", ob = "z", ab = "K36", cb = 32;
function To(n) {
  return Qt(nr(Ji(n), tb), nd);
}
function sd(n) {
  const t = nr(ab, jl), r = ob + Qt(zc([t, n]), jl);
  return [nb, sb, r].join(ib);
}
function ub(n) {
  return Qt(n, nd);
}
function hb(n) {
  return nr([To(n.header), To(n.payload)].join(id), rb);
}
function lb(n) {
  return [
    To(n.header),
    To(n.payload),
    ub(n.signature)
  ].join(id);
}
function Ll(n = qo.randomBytes(cb)) {
  return nu.generateKeyPairFromSeed(n);
}
async function fb(n, t, r, s, a = oe.fromMiliseconds(Date.now())) {
  const h = { alg: Zw, typ: eb }, y = sd(s.publicKey), b = a + r, O = { iss: y, sub: n, aud: t, iat: a, exp: b }, _ = hb({ header: h, payload: O }), E = nu.sign(s.secretKey, _);
  return lb({ header: h, payload: O, signature: E });
}
var cs = {};
(function(n) {
  const t = Lo, r = Mo, s = Uo, a = jo, h = (u) => u == null, y = Symbol("encodeFragmentIdentifier");
  function b(u) {
    switch (u.arrayFormat) {
      case "index":
        return (d) => (m, g) => {
          const p = m.length;
          return g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, [E(d, u), "[", p, "]"].join("")] : [
            ...m,
            [E(d, u), "[", E(p, u), "]=", E(g, u)].join("")
          ];
        };
      case "bracket":
        return (d) => (m, g) => g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, [E(d, u), "[]"].join("")] : [...m, [E(d, u), "[]=", E(g, u)].join("")];
      case "colon-list-separator":
        return (d) => (m, g) => g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, [E(d, u), ":list="].join("")] : [...m, [E(d, u), ":list=", E(g, u)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const d = u.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (m) => (g, p) => p === void 0 || u.skipNull && p === null || u.skipEmptyString && p === "" ? g : (p = p === null ? "" : p, g.length === 0 ? [[E(m, u), d, E(p, u)].join("")] : [[g, E(p, u)].join(u.arrayFormatSeparator)]);
      }
      default:
        return (d) => (m, g) => g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, E(d, u)] : [...m, [E(d, u), "=", E(g, u)].join("")];
    }
  }
  function O(u) {
    let d;
    switch (u.arrayFormat) {
      case "index":
        return (m, g, p) => {
          if (d = /\[(\d*)\]$/.exec(m), m = m.replace(/\[\d*\]$/, ""), !d) {
            p[m] = g;
            return;
          }
          p[m] === void 0 && (p[m] = {}), p[m][d[1]] = g;
        };
      case "bracket":
        return (m, g, p) => {
          if (d = /(\[\])$/.exec(m), m = m.replace(/\[\]$/, ""), !d) {
            p[m] = g;
            return;
          }
          if (p[m] === void 0) {
            p[m] = [g];
            return;
          }
          p[m] = [].concat(p[m], g);
        };
      case "colon-list-separator":
        return (m, g, p) => {
          if (d = /(:list)$/.exec(m), m = m.replace(/:list$/, ""), !d) {
            p[m] = g;
            return;
          }
          if (p[m] === void 0) {
            p[m] = [g];
            return;
          }
          p[m] = [].concat(p[m], g);
        };
      case "comma":
      case "separator":
        return (m, g, p) => {
          const N = typeof g == "string" && g.includes(u.arrayFormatSeparator), x = typeof g == "string" && !N && A(g, u).includes(u.arrayFormatSeparator);
          g = x ? A(g, u) : g;
          const Q = N || x ? g.split(u.arrayFormatSeparator).map((se) => A(se, u)) : g === null ? g : A(g, u);
          p[m] = Q;
        };
      case "bracket-separator":
        return (m, g, p) => {
          const N = /(\[\])$/.test(m);
          if (m = m.replace(/\[\]$/, ""), !N) {
            p[m] = g && A(g, u);
            return;
          }
          const x = g === null ? [] : g.split(u.arrayFormatSeparator).map((Q) => A(Q, u));
          if (p[m] === void 0) {
            p[m] = x;
            return;
          }
          p[m] = [].concat(p[m], x);
        };
      default:
        return (m, g, p) => {
          if (p[m] === void 0) {
            p[m] = g;
            return;
          }
          p[m] = [].concat(p[m], g);
        };
    }
  }
  function _(u) {
    if (typeof u != "string" || u.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function E(u, d) {
    return d.encode ? d.strict ? t(u) : encodeURIComponent(u) : u;
  }
  function A(u, d) {
    return d.decode ? r(u) : u;
  }
  function j(u) {
    return Array.isArray(u) ? u.sort() : typeof u == "object" ? j(Object.keys(u)).sort((d, m) => Number(d) - Number(m)).map((d) => u[d]) : u;
  }
  function H(u) {
    const d = u.indexOf("#");
    return d !== -1 && (u = u.slice(0, d)), u;
  }
  function L(u) {
    let d = "";
    const m = u.indexOf("#");
    return m !== -1 && (d = u.slice(m)), d;
  }
  function J(u) {
    u = H(u);
    const d = u.indexOf("?");
    return d === -1 ? "" : u.slice(d + 1);
  }
  function te(u, d) {
    return d.parseNumbers && !Number.isNaN(Number(u)) && typeof u == "string" && u.trim() !== "" ? u = Number(u) : d.parseBooleans && u !== null && (u.toLowerCase() === "true" || u.toLowerCase() === "false") && (u = u.toLowerCase() === "true"), u;
  }
  function ue(u, d) {
    d = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, d), _(d.arrayFormatSeparator);
    const m = O(d), g = /* @__PURE__ */ Object.create(null);
    if (typeof u != "string" || (u = u.trim().replace(/^[?#&]/, ""), !u))
      return g;
    for (const p of u.split("&")) {
      if (p === "")
        continue;
      let [N, x] = s(d.decode ? p.replace(/\+/g, " ") : p, "=");
      x = x === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(d.arrayFormat) ? x : A(x, d), m(A(N, d), x, g);
    }
    for (const p of Object.keys(g)) {
      const N = g[p];
      if (typeof N == "object" && N !== null)
        for (const x of Object.keys(N))
          N[x] = te(N[x], d);
      else
        g[p] = te(N, d);
    }
    return d.sort === !1 ? g : (d.sort === !0 ? Object.keys(g).sort() : Object.keys(g).sort(d.sort)).reduce((p, N) => {
      const x = g[N];
      return x && typeof x == "object" && !Array.isArray(x) ? p[N] = j(x) : p[N] = x, p;
    }, /* @__PURE__ */ Object.create(null));
  }
  n.extract = J, n.parse = ue, n.stringify = (u, d) => {
    if (!u)
      return "";
    d = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, d), _(d.arrayFormatSeparator);
    const m = (x) => d.skipNull && h(u[x]) || d.skipEmptyString && u[x] === "", g = b(d), p = {};
    for (const x of Object.keys(u))
      m(x) || (p[x] = u[x]);
    const N = Object.keys(p);
    return d.sort !== !1 && N.sort(d.sort), N.map((x) => {
      const Q = u[x];
      return Q === void 0 ? "" : Q === null ? E(x, d) : Array.isArray(Q) ? Q.length === 0 && d.arrayFormat === "bracket-separator" ? E(x, d) + "[]" : Q.reduce(g(x), []).join("&") : E(x, d) + "=" + E(Q, d);
    }).filter((x) => x.length > 0).join("&");
  }, n.parseUrl = (u, d) => {
    d = Object.assign({
      decode: !0
    }, d);
    const [m, g] = s(u, "#");
    return Object.assign(
      {
        url: m.split("?")[0] || "",
        query: ue(J(u), d)
      },
      d && d.parseFragmentIdentifier && g ? { fragmentIdentifier: A(g, d) } : {}
    );
  }, n.stringifyUrl = (u, d) => {
    d = Object.assign({
      encode: !0,
      strict: !0,
      [y]: !0
    }, d);
    const m = H(u.url).split("?")[0] || "", g = n.extract(u.url), p = n.parse(g, { sort: !1 }), N = Object.assign(p, u.query);
    let x = n.stringify(N, d);
    x && (x = `?${x}`);
    let Q = L(u.url);
    return u.fragmentIdentifier && (Q = `#${d[y] ? E(u.fragmentIdentifier, d) : u.fragmentIdentifier}`), `${m}${x}${Q}`;
  }, n.pick = (u, d, m) => {
    m = Object.assign({
      parseFragmentIdentifier: !0,
      [y]: !1
    }, m);
    const { url: g, query: p, fragmentIdentifier: N } = n.parseUrl(u, m);
    return n.stringifyUrl({
      url: g,
      query: a(p, d),
      fragmentIdentifier: N
    }, m);
  }, n.exclude = (u, d, m) => {
    const g = Array.isArray(d) ? (p) => !d.includes(p) : (p, N) => !d(p, N);
    return n.pick(u, g, m);
  };
})(cs);
const od = "base10", sr = "base16", kc = "base64pad", su = "utf8", ad = 0, Pn = 1, db = 0, Ml = 1, Vc = 12, ou = 32;
function pb() {
  const n = kf.generateKeyPair();
  return { privateKey: Qt(n.secretKey, sr), publicKey: Qt(n.publicKey, sr) };
}
function Kc() {
  const n = qo.randomBytes(ou);
  return Qt(n, sr);
}
function gb(n, t) {
  const r = kf.sharedKey(nr(n, sr), nr(t, sr), !0), s = new F1(zo.SHA256, r).expand(ou);
  return Qt(s, sr);
}
function yb(n) {
  const t = zo.hash(nr(n, sr));
  return Qt(t, sr);
}
function Wc(n) {
  const t = zo.hash(nr(n, su));
  return Qt(t, sr);
}
function mb(n) {
  return nr(`${n}`, od);
}
function fs(n) {
  return Number(Qt(n, od));
}
function vb(n) {
  const t = mb(typeof n.type < "u" ? n.type : ad);
  if (fs(t) === Pn && typeof n.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof n.senderPublicKey < "u" ? nr(n.senderPublicKey, sr) : void 0, s = typeof n.iv < "u" ? nr(n.iv, sr) : qo.randomBytes(Vc), a = new Vf.ChaCha20Poly1305(nr(n.symKey, sr)).seal(s, nr(n.message, su));
  return bb({ type: t, sealed: a, iv: s, senderPublicKey: r });
}
function wb(n) {
  const t = new Vf.ChaCha20Poly1305(nr(n.symKey, sr)), { sealed: r, iv: s } = Ro(n.encoded), a = t.open(s, r);
  if (a === null)
    throw new Error("Failed to decrypt");
  return Qt(a, su);
}
function bb(n) {
  if (fs(n.type) === Pn) {
    if (typeof n.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Qt(zc([n.type, n.senderPublicKey, n.iv, n.sealed]), kc);
  }
  return Qt(zc([n.type, n.iv, n.sealed]), kc);
}
function Ro(n) {
  const t = nr(n, kc), r = t.slice(db, Ml), s = Ml;
  if (fs(r) === Pn) {
    const b = s + ou, O = b + Vc, _ = t.slice(s, b), E = t.slice(b, O), A = t.slice(O);
    return { type: r, sealed: A, iv: E, senderPublicKey: _ };
  }
  const a = s + Vc, h = t.slice(s, a), y = t.slice(a);
  return { type: r, sealed: y, iv: h };
}
function _b(n, t) {
  const r = Ro(n);
  return cd({ type: fs(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Qt(r.senderPublicKey, sr) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function cd(n) {
  const t = (n == null ? void 0 : n.type) || ad;
  if (t === Pn) {
    if (typeof (n == null ? void 0 : n.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (n == null ? void 0 : n.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: n == null ? void 0 : n.senderPublicKey, receiverPublicKey: n == null ? void 0 : n.receiverPublicKey };
}
function ql(n) {
  return n.type === Pn && typeof n.senderPublicKey == "string" && typeof n.receiverPublicKey == "string";
}
var Eb = Object.defineProperty, zl = Object.getOwnPropertySymbols, Ib = Object.prototype.hasOwnProperty, Sb = Object.prototype.propertyIsEnumerable, Hl = (n, t, r) => t in n ? Eb(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, Bl = (n, t) => {
  for (var r in t || (t = {}))
    Ib.call(t, r) && Hl(n, r, t[r]);
  if (zl)
    for (var r of zl(t))
      Sb.call(t, r) && Hl(n, r, t[r]);
  return n;
};
const xb = "ReactNative", Br = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Pb = "js";
function au() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function On() {
  return !Kf() && !!Ho() && navigator.product === xb;
}
function Bo() {
  return !au() && !!Ho();
}
function ko() {
  return On() ? Br.reactNative : au() ? Br.node : Bo() ? Br.browser : Br.unknown;
}
function Ob() {
  var n;
  try {
    return On() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (n = global.Application) == null ? void 0 : n.applicationId : void 0;
  } catch {
    return;
  }
}
function Ab(n, t) {
  let r = cs.parse(n);
  return r = Bl(Bl({}, r), t), n = cs.stringify(r), n;
}
function Nb() {
  if (ko() === Br.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: s } = global.Platform;
    return [r, s].join("-");
  }
  const n = K1();
  if (n === null)
    return "unknown";
  const t = n.os ? n.os.replace(" ", "").toLowerCase() : "unknown";
  return n.type === "browser" ? [t, n.name, n.version].join("-") : [t, n.version].join("-");
}
function Tb() {
  var n;
  const t = ko();
  return t === Br.browser ? [t, ((n = U1()) == null ? void 0 : n.host) || "unknown"].join(":") : t;
}
function Rb(n, t, r) {
  const s = Nb(), a = Tb();
  return [[n, t].join("-"), [Pb, r].join("-"), s, a].join("/");
}
function Cb({ protocol: n, version: t, relayUrl: r, sdkVersion: s, auth: a, projectId: h, useOnCloseEvent: y, bundleId: b }) {
  const O = r.split("?"), _ = Rb(n, t, s), E = { auth: a, ua: _, projectId: h, useOnCloseEvent: y || void 0, origin: b || void 0 }, A = Ab(O[1] || "", E);
  return O[0] + "?" + A;
}
function ud(n) {
  return Object.fromEntries(n.entries());
}
function hd(n) {
  return new Map(Object.entries(n));
}
function $b(n = oe.FIVE_MINUTES, t) {
  const r = oe.toMiliseconds(n || oe.FIVE_MINUTES);
  let s, a, h;
  return { resolve: (y) => {
    h && s && (clearTimeout(h), s(y));
  }, reject: (y) => {
    h && a && (clearTimeout(h), a(y));
  }, done: () => new Promise((y, b) => {
    h = setTimeout(() => {
      b(new Error(t));
    }, r), s = y, a = b;
  }) };
}
function us(n, t, r) {
  return new Promise(async (s, a) => {
    const h = setTimeout(() => a(new Error(r)), t);
    try {
      const y = await n;
      s(y);
    } catch (y) {
      a(y);
    }
    clearTimeout(h);
  });
}
function ld(n, t) {
  if (typeof t == "string" && t.startsWith(`${n}:`))
    return t;
  if (n.toLowerCase() === "topic") {
    if (typeof t != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (n.toLowerCase() === "id") {
    if (typeof t != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${n}`);
}
function Db(n) {
  return ld("topic", n);
}
function Fb(n) {
  return ld("id", n);
}
function Ub(n) {
  const [t, r] = n.split(":"), s = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r == "string")
    s.topic = r;
  else if (t === "id" && Number.isInteger(Number(r)))
    s.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
  return s;
}
function Oo(n, t) {
  return oe.fromMiliseconds((t || Date.now()) + oe.toMiliseconds(n));
}
function kl(n) {
  return Date.now() >= oe.toMiliseconds(n);
}
function Oc(n, t) {
  return `${n}${t ? `:${t}` : ""}`;
}
const jb = "irn";
function Gc(n) {
  return (n == null ? void 0 : n.relay) || { protocol: jb };
}
function Ao(n) {
  const t = Y1[n];
  if (typeof t > "u")
    throw new Error(`Relay Protocol not supported: ${n}`);
  return t;
}
var Lb = Object.defineProperty, Vl = Object.getOwnPropertySymbols, Mb = Object.prototype.hasOwnProperty, qb = Object.prototype.propertyIsEnumerable, Kl = (n, t, r) => t in n ? Lb(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, zb = (n, t) => {
  for (var r in t || (t = {}))
    Mb.call(t, r) && Kl(n, r, t[r]);
  if (Vl)
    for (var r of Vl(t))
      qb.call(t, r) && Kl(n, r, t[r]);
  return n;
};
function Hb(n, t = "-") {
  const r = {}, s = "relay" + t;
  return Object.keys(n).forEach((a) => {
    if (a.startsWith(s)) {
      const h = a.replace(s, ""), y = n[a];
      r[h] = y;
    }
  }), r;
}
function Wl(n) {
  n = n.includes("wc://") ? n.replace("wc://", "") : n, n = n.includes("wc:") ? n.replace("wc:", "") : n;
  const t = n.indexOf(":"), r = n.indexOf("?") !== -1 ? n.indexOf("?") : void 0, s = n.substring(0, t), a = n.substring(t + 1, r).split("@"), h = typeof r < "u" ? n.substring(r) : "", y = cs.parse(h);
  return { protocol: s, topic: Bb(a[0]), version: parseInt(a[1], 10), symKey: y.symKey, relay: Hb(y) };
}
function Bb(n) {
  return n.startsWith("//") ? n.substring(2) : n;
}
function kb(n, t = "-") {
  const r = "relay", s = {};
  return Object.keys(n).forEach((a) => {
    const h = r + t + a;
    n[a] && (s[h] = n[a]);
  }), s;
}
function Vb(n) {
  return `${n.protocol}:${n.topic}@${n.version}?` + cs.stringify(zb({ symKey: n.symKey }, kb(n.relay)));
}
const Kb = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Wb = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function Be(n, t) {
  const { message: r, code: s } = Wb[n];
  return { message: t ? `${r} ${t}` : r, code: s };
}
function rs(n, t) {
  const { message: r, code: s } = Kb[n];
  return { message: t ? `${r} ${t}` : r, code: s };
}
function Gb(n, t) {
  return Array.isArray(n) ? typeof t < "u" && n.length ? n.every(t) : !0 : !1;
}
function Co(n) {
  return typeof n > "u";
}
function fd(n, t) {
  return t && Co(n) ? !0 : typeof n == "string" && !!n.trim().length;
}
function Jb(n) {
  if (fd(n, !1))
    try {
      return typeof new URL(n) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Qb(n) {
  var t;
  return (t = n == null ? void 0 : n.proposer) == null ? void 0 : t.publicKey;
}
function Yb(n) {
  return n == null ? void 0 : n.topic;
}
function Ac(n) {
  return typeof n < "u" && typeof n !== null;
}
function Gl() {
  const n = ko();
  return new Promise((t) => {
    switch (n) {
      case Br.browser:
        t(Xb());
        break;
      case Br.reactNative:
        t(Zb());
        break;
      case Br.node:
        t(e_());
        break;
      default:
        t(!0);
    }
  });
}
function Xb() {
  return Bo() && (navigator == null ? void 0 : navigator.onLine);
}
async function Zb() {
  if (On() && typeof global < "u" && global != null && global.NetInfo) {
    const n = await (global == null ? void 0 : global.NetInfo.fetch());
    return n == null ? void 0 : n.isConnected;
  }
  return !0;
}
function e_() {
  return !0;
}
function t_(n) {
  switch (ko()) {
    case Br.browser:
      r_(n);
      break;
    case Br.reactNative:
      i_(n);
      break;
  }
}
function r_(n) {
  !On() && Bo() && (window.addEventListener("online", () => n(!0)), window.addEventListener("offline", () => n(!1)));
}
function i_(n) {
  On() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((t) => n(t == null ? void 0 : t.isConnected)));
}
const n_ = "PARSE_ERROR", s_ = "INVALID_REQUEST", o_ = "METHOD_NOT_FOUND", a_ = "INVALID_PARAMS", dd = "INTERNAL_ERROR", cu = "SERVER_ERROR", c_ = [-32700, -32600, -32601, -32602, -32603], os = {
  [n_]: { code: -32700, message: "Parse error" },
  [s_]: { code: -32600, message: "Invalid Request" },
  [o_]: { code: -32601, message: "Method not found" },
  [a_]: { code: -32602, message: "Invalid params" },
  [dd]: { code: -32603, message: "Internal error" },
  [cu]: { code: -32e3, message: "Server error" }
}, pd = cu;
function u_(n) {
  return c_.includes(n);
}
function Jl(n) {
  return Object.keys(os).includes(n) ? os[n] : os[pd];
}
function h_(n) {
  const t = Object.values(os).find((r) => r.code === n);
  return t || os[pd];
}
function gd(n, t, r) {
  return n.message.includes("getaddrinfo ENOTFOUND") || n.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : n;
}
var yd = {}, hi = {}, Ql;
function l_() {
  if (Ql)
    return hi;
  Ql = 1, Object.defineProperty(hi, "__esModule", { value: !0 }), hi.isBrowserCryptoAvailable = hi.getSubtleCrypto = hi.getBrowerCrypto = void 0;
  function n() {
    return (Hr === null || Hr === void 0 ? void 0 : Hr.crypto) || (Hr === null || Hr === void 0 ? void 0 : Hr.msCrypto) || {};
  }
  hi.getBrowerCrypto = n;
  function t() {
    const s = n();
    return s.subtle || s.webkitSubtle;
  }
  hi.getSubtleCrypto = t;
  function r() {
    return !!n() && !!t();
  }
  return hi.isBrowserCryptoAvailable = r, hi;
}
var li = {}, Yl;
function f_() {
  if (Yl)
    return li;
  Yl = 1, Object.defineProperty(li, "__esModule", { value: !0 }), li.isBrowser = li.isNode = li.isReactNative = void 0;
  function n() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  li.isReactNative = n;
  function t() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  li.isNode = t;
  function r() {
    return !n() && !t();
  }
  return li.isBrowser = r, li;
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  const t = Sn;
  t.__exportStar(l_(), n), t.__exportStar(f_(), n);
})(yd);
function uu(n = 3) {
  const t = Date.now() * Math.pow(10, n), r = Math.floor(Math.random() * Math.pow(10, n));
  return t + r;
}
function md(n = 6) {
  return BigInt(uu(n));
}
function In(n, t, r) {
  return {
    id: r || uu(),
    jsonrpc: "2.0",
    method: n,
    params: t
  };
}
function hu(n, t) {
  return {
    id: n,
    jsonrpc: "2.0",
    result: t
  };
}
function Vo(n, t, r) {
  return {
    id: n,
    jsonrpc: "2.0",
    error: d_(t, r)
  };
}
function d_(n, t) {
  return typeof n > "u" ? Jl(dd) : (typeof n == "string" && (n = Object.assign(Object.assign({}, Jl(cu)), { message: n })), typeof t < "u" && (n.data = t), u_(n.code) && (n = h_(n.code)), n);
}
class p_ {
}
class g_ extends p_ {
  constructor() {
    super();
  }
}
class y_ extends g_ {
  constructor(t) {
    super();
  }
}
const m_ = "^https?:", v_ = "^wss?:";
function w_(n) {
  const t = n.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length))
    return t[0];
}
function vd(n, t) {
  const r = w_(n);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function Xl(n) {
  return vd(n, m_);
}
function Zl(n) {
  return vd(n, v_);
}
function b_(n) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(n);
}
function wd(n) {
  return typeof n == "object" && "id" in n && "jsonrpc" in n && n.jsonrpc === "2.0";
}
function lu(n) {
  return wd(n) && "method" in n;
}
function Ko(n) {
  return wd(n) && (pi(n) || zr(n));
}
function pi(n) {
  return "result" in n;
}
function zr(n) {
  return "error" in n;
}
class gi extends y_ {
  constructor(t) {
    super(t), this.events = new Cr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(In(t.method, t.params || [], t.id || md().toString()), r);
  }
  async requestStrict(t, r) {
    return new Promise(async (s, a) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (h) {
          a(h);
        }
      this.events.on(`${t.id}`, (h) => {
        zr(h) ? a(h.error) : s(h.result);
      });
      try {
        await this.connection.send(t, r);
      } catch (h) {
        a(h);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t), Ko(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
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
const __ = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), E_ = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", ef = (n) => n.split("?")[0], tf = 10, I_ = __();
let S_ = class {
  constructor(t) {
    if (this.url = t, this.events = new Cr.EventEmitter(), this.registering = !1, !Zl(t))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
    this.url = t;
  }
  get connected() {
    return typeof this.socket < "u";
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
    return new Promise((t, r) => {
      if (typeof this.socket > "u") {
        r(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (s) => {
        this.onClose(s), t();
      }, this.socket.close();
    });
  }
  async send(t) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Ji(t));
    } catch (r) {
      this.onError(t.id, r);
    }
  }
  register(t = this.url) {
    if (!Zl(t))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((s, a) => {
        this.events.once("register_error", (h) => {
          this.resetMaxListeners(), a(h);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return a(new Error("WebSocket connection is missing or invalid"));
          s(this.socket);
        });
      });
    }
    return this.url = t, this.registering = !0, new Promise((r, s) => {
      const a = new URLSearchParams(t).get("origin"), h = yd.isReactNative() ? { headers: { origin: a } } : { rejectUnauthorized: !b_(t) }, y = new I_(t, [], h);
      E_() ? y.onerror = (b) => {
        const O = b;
        s(this.emitError(O.error));
      } : y.on("error", (b) => {
        s(this.emitError(b));
      }), y.onopen = () => {
        this.onOpen(y), r(y);
      };
    });
  }
  onOpen(t) {
    t.onmessage = (r) => this.onPayload(r), t.onclose = (r) => this.onClose(r), this.socket = t, this.registering = !1, this.events.emit("open");
  }
  onClose(t) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", t);
  }
  onPayload(t) {
    if (typeof t.data > "u")
      return;
    const r = typeof t.data == "string" ? ls(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const s = this.parseError(r), a = s.message || s.toString(), h = Vo(t, a);
    this.events.emit("payload", h);
  }
  parseError(t, r = this.url) {
    return gd(t, ef(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > tf && this.events.setMaxListeners(tf);
  }
  emitError(t) {
    const r = this.parseError(new Error((t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${ef(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
};
var $o = { exports: {} };
$o.exports;
(function(n, t) {
  var r = 200, s = "__lodash_hash_undefined__", a = 1, h = 2, y = 9007199254740991, b = "[object Arguments]", O = "[object Array]", _ = "[object AsyncFunction]", E = "[object Boolean]", A = "[object Date]", j = "[object Error]", H = "[object Function]", L = "[object GeneratorFunction]", J = "[object Map]", te = "[object Number]", ue = "[object Null]", u = "[object Object]", d = "[object Promise]", m = "[object Proxy]", g = "[object RegExp]", p = "[object Set]", N = "[object String]", x = "[object Symbol]", Q = "[object Undefined]", se = "[object WeakMap]", pe = "[object ArrayBuffer]", Re = "[object DataView]", qe = "[object Float32Array]", S = "[object Float64Array]", C = "[object Int8Array]", ie = "[object Int16Array]", de = "[object Int32Array]", X = "[object Uint8Array]", W = "[object Uint8ClampedArray]", Y = "[object Uint16Array]", Z = "[object Uint32Array]", Qe = /[\\^$.*+?()[\]{}|]/g, ke = /^\[object .+?Constructor\]$/, kr = /^(?:0|[1-9]\d*)$/, Ie = {};
  Ie[qe] = Ie[S] = Ie[C] = Ie[ie] = Ie[de] = Ie[X] = Ie[W] = Ie[Y] = Ie[Z] = !0, Ie[b] = Ie[O] = Ie[pe] = Ie[E] = Ie[Re] = Ie[A] = Ie[j] = Ie[H] = Ie[J] = Ie[te] = Ie[u] = Ie[g] = Ie[p] = Ie[N] = Ie[se] = !1;
  var St = typeof Hr == "object" && Hr && Hr.Object === Object && Hr, z = typeof self == "object" && self && self.Object === Object && self, q = St || z || Function("return this")(), U = t && !t.nodeType && t, l = U && !0 && n && !n.nodeType && n, R = l && l.exports === U, ae = R && St.process, ye = function() {
    try {
      return ae && ae.binding && ae.binding("util");
    } catch {
    }
  }(), _e = ye && ye.isTypedArray;
  function Ce(I, $) {
    for (var K = -1, re = I == null ? 0 : I.length, We = 0, ve = []; ++K < re; ) {
      var tt = I[K];
      $(tt, K, I) && (ve[We++] = tt);
    }
    return ve;
  }
  function De(I, $) {
    for (var K = -1, re = $.length, We = I.length; ++K < re; )
      I[We + K] = $[K];
    return I;
  }
  function Pe(I, $) {
    for (var K = -1, re = I == null ? 0 : I.length; ++K < re; )
      if ($(I[K], K, I))
        return !0;
    return !1;
  }
  function xt(I, $) {
    for (var K = -1, re = Array(I); ++K < I; )
      re[K] = $(K);
    return re;
  }
  function wt(I) {
    return function($) {
      return I($);
    };
  }
  function at(I, $) {
    return I.has($);
  }
  function Ue(I, $) {
    return I == null ? void 0 : I[$];
  }
  function Xe(I) {
    var $ = -1, K = Array(I.size);
    return I.forEach(function(re, We) {
      K[++$] = [We, re];
    }), K;
  }
  function Ze(I, $) {
    return function(K) {
      return I($(K));
    };
  }
  function ct(I) {
    var $ = -1, K = Array(I.size);
    return I.forEach(function(re) {
      K[++$] = re;
    }), K;
  }
  var ze = Array.prototype, et = Function.prototype, $e = Object.prototype, Ve = q["__core-js_shared__"], lt = et.toString, Le = $e.hasOwnProperty, Pt = function() {
    var I = /[^.]+$/.exec(Ve && Ve.keys && Ve.keys.IE_PROTO || "");
    return I ? "Symbol(src)_1." + I : "";
  }(), Dt = $e.toString, zt = RegExp(
    "^" + lt.call(Le).replace(Qe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ht = R ? q.Buffer : void 0, jt = q.Symbol, Yt = q.Uint8Array, or = $e.propertyIsEnumerable, Vr = ze.splice, Xt = jt ? jt.toStringTag : void 0, Xr = Object.getOwnPropertySymbols, mi = Ht ? Ht.isBuffer : void 0, Ri = Ze(Object.keys, Object), ft = pr(q, "DataView"), it = pr(q, "Map"), dt = pr(q, "Promise"), pt = pr(q, "Set"), ut = pr(q, "WeakMap"), nt = pr(Object, "create"), Ot = ei(ft), At = ei(it), gt = ei(dt), Nt = ei(pt), yt = ei(ut), bt = jt ? jt.prototype : void 0, mt = bt ? bt.valueOf : void 0;
  function Ye(I) {
    var $ = -1, K = I == null ? 0 : I.length;
    for (this.clear(); ++$ < K; ) {
      var re = I[$];
      this.set(re[0], re[1]);
    }
  }
  function Tt() {
    this.__data__ = nt ? nt(null) : {}, this.size = 0;
  }
  function Rt(I) {
    var $ = this.has(I) && delete this.__data__[I];
    return this.size -= $ ? 1 : 0, $;
  }
  function Qo(I) {
    var $ = this.__data__;
    if (nt) {
      var K = $[I];
      return K === s ? void 0 : K;
    }
    return Le.call($, I) ? $[I] : void 0;
  }
  function Yo(I) {
    var $ = this.__data__;
    return nt ? $[I] !== void 0 : Le.call($, I);
  }
  function Xo(I, $) {
    var K = this.__data__;
    return this.size += this.has(I) ? 0 : 1, K[I] = nt && $ === void 0 ? s : $, this;
  }
  Ye.prototype.clear = Tt, Ye.prototype.delete = Rt, Ye.prototype.get = Qo, Ye.prototype.has = Yo, Ye.prototype.set = Xo;
  function _r(I) {
    var $ = -1, K = I == null ? 0 : I.length;
    for (this.clear(); ++$ < K; ) {
      var re = I[$];
      this.set(re[0], re[1]);
    }
  }
  function Zo() {
    this.__data__ = [], this.size = 0;
  }
  function ea(I) {
    var $ = this.__data__, K = Ci($, I);
    if (K < 0)
      return !1;
    var re = $.length - 1;
    return K == re ? $.pop() : Vr.call($, K, 1), --this.size, !0;
  }
  function ta(I) {
    var $ = this.__data__, K = Ci($, I);
    return K < 0 ? void 0 : $[K][1];
  }
  function ra(I) {
    return Ci(this.__data__, I) > -1;
  }
  function ia(I, $) {
    var K = this.__data__, re = Ci(K, I);
    return re < 0 ? (++this.size, K.push([I, $])) : K[re][1] = $, this;
  }
  _r.prototype.clear = Zo, _r.prototype.delete = ea, _r.prototype.get = ta, _r.prototype.has = ra, _r.prototype.set = ia;
  function Zr(I) {
    var $ = -1, K = I == null ? 0 : I.length;
    for (this.clear(); ++$ < K; ) {
      var re = I[$];
      this.set(re[0], re[1]);
    }
  }
  function Zi() {
    this.size = 0, this.__data__ = {
      hash: new Ye(),
      map: new (it || _r)(),
      string: new Ye()
    };
  }
  function na(I) {
    var $ = vi(this, I).delete(I);
    return this.size -= $ ? 1 : 0, $;
  }
  function en(I) {
    return vi(this, I).get(I);
  }
  function sa(I) {
    return vi(this, I).has(I);
  }
  function oa(I, $) {
    var K = vi(this, I), re = K.size;
    return K.set(I, $), this.size += K.size == re ? 0 : 1, this;
  }
  Zr.prototype.clear = Zi, Zr.prototype.delete = na, Zr.prototype.get = en, Zr.prototype.has = sa, Zr.prototype.set = oa;
  function tn(I) {
    var $ = -1, K = I == null ? 0 : I.length;
    for (this.__data__ = new Zr(); ++$ < K; )
      this.add(I[$]);
  }
  function ps(I) {
    return this.__data__.set(I, s), this;
  }
  function gs(I) {
    return this.__data__.has(I);
  }
  tn.prototype.add = tn.prototype.push = ps, tn.prototype.has = gs;
  function $r(I) {
    var $ = this.__data__ = new _r(I);
    this.size = $.size;
  }
  function aa() {
    this.__data__ = new _r(), this.size = 0;
  }
  function ca(I) {
    var $ = this.__data__, K = $.delete(I);
    return this.size = $.size, K;
  }
  function ua(I) {
    return this.__data__.get(I);
  }
  function ha(I) {
    return this.__data__.has(I);
  }
  function ys(I, $) {
    var K = this.__data__;
    if (K instanceof _r) {
      var re = K.__data__;
      if (!it || re.length < r - 1)
        return re.push([I, $]), this.size = ++K.size, this;
      K = this.__data__ = new Zr(re);
    }
    return K.set(I, $), this.size = K.size, this;
  }
  $r.prototype.clear = aa, $r.prototype.delete = ca, $r.prototype.get = ua, $r.prototype.has = ha, $r.prototype.set = ys;
  function ms(I, $) {
    var K = sn(I), re = !K && Ns(I), We = !K && !re && Rn(I), ve = !K && !re && !We && Cs(I), tt = K || re || We || ve, Ct = tt ? xt(I.length, String) : [], Ae = Ct.length;
    for (var Ge in I)
      ($ || Le.call(I, Ge)) && !(tt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ge == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      We && (Ge == "offset" || Ge == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ve && (Ge == "buffer" || Ge == "byteLength" || Ge == "byteOffset") || // Skip index properties.
      Ss(Ge, Ae))) && Ct.push(Ge);
    return Ct;
  }
  function Ci(I, $) {
    for (var K = I.length; K--; )
      if (As(I[K][0], $))
        return K;
    return -1;
  }
  function Nn(I, $, K) {
    var re = $(I);
    return sn(I) ? re : De(re, K(I));
  }
  function $i(I) {
    return I == null ? I === void 0 ? Q : ue : Xt && Xt in Object(I) ? Es(I) : da(I);
  }
  function Tn(I) {
    return Fi(I) && $i(I) == b;
  }
  function Di(I, $, K, re, We) {
    return I === $ ? !0 : I == null || $ == null || !Fi(I) && !Fi($) ? I !== I && $ !== $ : vs(I, $, K, re, Di, We);
  }
  function vs(I, $, K, re, We, ve) {
    var tt = sn(I), Ct = sn($), Ae = tt ? O : Kr(I), Ge = Ct ? O : Kr($);
    Ae = Ae == b ? u : Ae, Ge = Ge == b ? u : Ge;
    var _t = Ae == u, ar = Ge == u, $t = Ae == Ge;
    if ($t && Rn(I)) {
      if (!Rn($))
        return !1;
      tt = !0, _t = !1;
    }
    if ($t && !_t)
      return ve || (ve = new $r()), tt || Cs(I) ? rn(I, $, K, re, We, ve) : fa(I, $, Ae, K, re, We, ve);
    if (!(K & a)) {
      var rt = _t && Le.call(I, "__wrapped__"), Zt = ar && Le.call($, "__wrapped__");
      if (rt || Zt) {
        var Dr = rt ? I.value() : I, Er = Zt ? $.value() : $;
        return ve || (ve = new $r()), We(Dr, Er, K, re, ve);
      }
    }
    return $t ? (ve || (ve = new $r()), _s(I, $, K, re, We, ve)) : !1;
  }
  function la(I) {
    if (!Rs(I) || Ps(I))
      return !1;
    var $ = on(I) ? zt : ke;
    return $.test(ei(I));
  }
  function ws(I) {
    return Fi(I) && Ts(I.length) && !!Ie[$i(I)];
  }
  function bs(I) {
    if (!Os(I))
      return Ri(I);
    var $ = [];
    for (var K in Object(I))
      Le.call(I, K) && K != "constructor" && $.push(K);
    return $;
  }
  function rn(I, $, K, re, We, ve) {
    var tt = K & a, Ct = I.length, Ae = $.length;
    if (Ct != Ae && !(tt && Ae > Ct))
      return !1;
    var Ge = ve.get(I);
    if (Ge && ve.get($))
      return Ge == $;
    var _t = -1, ar = !0, $t = K & h ? new tn() : void 0;
    for (ve.set(I, $), ve.set($, I); ++_t < Ct; ) {
      var rt = I[_t], Zt = $[_t];
      if (re)
        var Dr = tt ? re(Zt, rt, _t, $, I, ve) : re(rt, Zt, _t, I, $, ve);
      if (Dr !== void 0) {
        if (Dr)
          continue;
        ar = !1;
        break;
      }
      if ($t) {
        if (!Pe($, function(Er, Wr) {
          if (!at($t, Wr) && (rt === Er || We(rt, Er, K, re, ve)))
            return $t.push(Wr);
        })) {
          ar = !1;
          break;
        }
      } else if (!(rt === Zt || We(rt, Zt, K, re, ve))) {
        ar = !1;
        break;
      }
    }
    return ve.delete(I), ve.delete($), ar;
  }
  function fa(I, $, K, re, We, ve, tt) {
    switch (K) {
      case Re:
        if (I.byteLength != $.byteLength || I.byteOffset != $.byteOffset)
          return !1;
        I = I.buffer, $ = $.buffer;
      case pe:
        return !(I.byteLength != $.byteLength || !ve(new Yt(I), new Yt($)));
      case E:
      case A:
      case te:
        return As(+I, +$);
      case j:
        return I.name == $.name && I.message == $.message;
      case g:
      case N:
        return I == $ + "";
      case J:
        var Ct = Xe;
      case p:
        var Ae = re & a;
        if (Ct || (Ct = ct), I.size != $.size && !Ae)
          return !1;
        var Ge = tt.get(I);
        if (Ge)
          return Ge == $;
        re |= h, tt.set(I, $);
        var _t = rn(Ct(I), Ct($), re, We, ve, tt);
        return tt.delete(I), _t;
      case x:
        if (mt)
          return mt.call(I) == mt.call($);
    }
    return !1;
  }
  function _s(I, $, K, re, We, ve) {
    var tt = K & a, Ct = nn(I), Ae = Ct.length, Ge = nn($), _t = Ge.length;
    if (Ae != _t && !tt)
      return !1;
    for (var ar = Ae; ar--; ) {
      var $t = Ct[ar];
      if (!(tt ? $t in $ : Le.call($, $t)))
        return !1;
    }
    var rt = ve.get(I);
    if (rt && ve.get($))
      return rt == $;
    var Zt = !0;
    ve.set(I, $), ve.set($, I);
    for (var Dr = tt; ++ar < Ae; ) {
      $t = Ct[ar];
      var Er = I[$t], Wr = $[$t];
      if (re)
        var Cn = tt ? re(Wr, Er, $t, $, I, ve) : re(Er, Wr, $t, I, $, ve);
      if (!(Cn === void 0 ? Er === Wr || We(Er, Wr, K, re, ve) : Cn)) {
        Zt = !1;
        break;
      }
      Dr || (Dr = $t == "constructor");
    }
    if (Zt && !Dr) {
      var Ui = I.constructor, Lt = $.constructor;
      Ui != Lt && "constructor" in I && "constructor" in $ && !(typeof Ui == "function" && Ui instanceof Ui && typeof Lt == "function" && Lt instanceof Lt) && (Zt = !1);
    }
    return ve.delete(I), ve.delete($), Zt;
  }
  function nn(I) {
    return Nn(I, ya, Is);
  }
  function vi(I, $) {
    var K = I.__data__;
    return xs($) ? K[typeof $ == "string" ? "string" : "hash"] : K.map;
  }
  function pr(I, $) {
    var K = Ue(I, $);
    return la(K) ? K : void 0;
  }
  function Es(I) {
    var $ = Le.call(I, Xt), K = I[Xt];
    try {
      I[Xt] = void 0;
      var re = !0;
    } catch {
    }
    var We = Dt.call(I);
    return re && ($ ? I[Xt] = K : delete I[Xt]), We;
  }
  var Is = Xr ? function(I) {
    return I == null ? [] : (I = Object(I), Ce(Xr(I), function($) {
      return or.call(I, $);
    }));
  } : Ke, Kr = $i;
  (ft && Kr(new ft(new ArrayBuffer(1))) != Re || it && Kr(new it()) != J || dt && Kr(dt.resolve()) != d || pt && Kr(new pt()) != p || ut && Kr(new ut()) != se) && (Kr = function(I) {
    var $ = $i(I), K = $ == u ? I.constructor : void 0, re = K ? ei(K) : "";
    if (re)
      switch (re) {
        case Ot:
          return Re;
        case At:
          return J;
        case gt:
          return d;
        case Nt:
          return p;
        case yt:
          return se;
      }
    return $;
  });
  function Ss(I, $) {
    return $ = $ ?? y, !!$ && (typeof I == "number" || kr.test(I)) && I > -1 && I % 1 == 0 && I < $;
  }
  function xs(I) {
    var $ = typeof I;
    return $ == "string" || $ == "number" || $ == "symbol" || $ == "boolean" ? I !== "__proto__" : I === null;
  }
  function Ps(I) {
    return !!Pt && Pt in I;
  }
  function Os(I) {
    var $ = I && I.constructor, K = typeof $ == "function" && $.prototype || $e;
    return I === K;
  }
  function da(I) {
    return Dt.call(I);
  }
  function ei(I) {
    if (I != null) {
      try {
        return lt.call(I);
      } catch {
      }
      try {
        return I + "";
      } catch {
      }
    }
    return "";
  }
  function As(I, $) {
    return I === $ || I !== I && $ !== $;
  }
  var Ns = Tn(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Tn : function(I) {
    return Fi(I) && Le.call(I, "callee") && !or.call(I, "callee");
  }, sn = Array.isArray;
  function pa(I) {
    return I != null && Ts(I.length) && !on(I);
  }
  var Rn = mi || He;
  function ga(I, $) {
    return Di(I, $);
  }
  function on(I) {
    if (!Rs(I))
      return !1;
    var $ = $i(I);
    return $ == H || $ == L || $ == _ || $ == m;
  }
  function Ts(I) {
    return typeof I == "number" && I > -1 && I % 1 == 0 && I <= y;
  }
  function Rs(I) {
    var $ = typeof I;
    return I != null && ($ == "object" || $ == "function");
  }
  function Fi(I) {
    return I != null && typeof I == "object";
  }
  var Cs = _e ? wt(_e) : ws;
  function ya(I) {
    return pa(I) ? ms(I) : bs(I);
  }
  function Ke() {
    return [];
  }
  function He() {
    return !1;
  }
  n.exports = ga;
})($o, $o.exports);
var x_ = $o.exports;
const P_ = /* @__PURE__ */ Wf(x_);
function O_(n, t) {
  if (n.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), s = 0; s < r.length; s++)
    r[s] = 255;
  for (var a = 0; a < n.length; a++) {
    var h = n.charAt(a), y = h.charCodeAt(0);
    if (r[y] !== 255)
      throw new TypeError(h + " is ambiguous");
    r[y] = a;
  }
  var b = n.length, O = n.charAt(0), _ = Math.log(b) / Math.log(256), E = Math.log(256) / Math.log(b);
  function A(L) {
    if (L instanceof Uint8Array || (ArrayBuffer.isView(L) ? L = new Uint8Array(L.buffer, L.byteOffset, L.byteLength) : Array.isArray(L) && (L = Uint8Array.from(L))), !(L instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (L.length === 0)
      return "";
    for (var J = 0, te = 0, ue = 0, u = L.length; ue !== u && L[ue] === 0; )
      ue++, J++;
    for (var d = (u - ue) * E + 1 >>> 0, m = new Uint8Array(d); ue !== u; ) {
      for (var g = L[ue], p = 0, N = d - 1; (g !== 0 || p < te) && N !== -1; N--, p++)
        g += 256 * m[N] >>> 0, m[N] = g % b >>> 0, g = g / b >>> 0;
      if (g !== 0)
        throw new Error("Non-zero carry");
      te = p, ue++;
    }
    for (var x = d - te; x !== d && m[x] === 0; )
      x++;
    for (var Q = O.repeat(J); x < d; ++x)
      Q += n.charAt(m[x]);
    return Q;
  }
  function j(L) {
    if (typeof L != "string")
      throw new TypeError("Expected String");
    if (L.length === 0)
      return new Uint8Array();
    var J = 0;
    if (L[J] !== " ") {
      for (var te = 0, ue = 0; L[J] === O; )
        te++, J++;
      for (var u = (L.length - J) * _ + 1 >>> 0, d = new Uint8Array(u); L[J]; ) {
        var m = r[L.charCodeAt(J)];
        if (m === 255)
          return;
        for (var g = 0, p = u - 1; (m !== 0 || g < ue) && p !== -1; p--, g++)
          m += b * d[p] >>> 0, d[p] = m % 256 >>> 0, m = m / 256 >>> 0;
        if (m !== 0)
          throw new Error("Non-zero carry");
        ue = g, J++;
      }
      if (L[J] !== " ") {
        for (var N = u - ue; N !== u && d[N] === 0; )
          N++;
        for (var x = new Uint8Array(te + (u - N)), Q = te; N !== u; )
          x[Q++] = d[N++];
        return x;
      }
    }
  }
  function H(L) {
    var J = j(L);
    if (J)
      return J;
    throw new Error(`Non-${t} character`);
  }
  return { encode: A, decodeUnsafe: j, decode: H };
}
var A_ = O_, N_ = A_;
const bd = (n) => {
  if (n instanceof Uint8Array && n.constructor.name === "Uint8Array")
    return n;
  if (n instanceof ArrayBuffer)
    return new Uint8Array(n);
  if (ArrayBuffer.isView(n))
    return new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
  throw new Error("Unknown type, must be binary type");
}, T_ = (n) => new TextEncoder().encode(n), R_ = (n) => new TextDecoder().decode(n);
class C_ {
  constructor(t, r, s) {
    this.name = t, this.prefix = r, this.baseEncode = s;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class $_ {
  constructor(t, r, s) {
    if (this.name = t, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = s;
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(t.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(t) {
    return _d(this, t);
  }
}
let D_ = class {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return _d(this, t);
  }
  decode(t) {
    const r = t[0], s = this.decoders[r];
    if (s)
      return s.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
const _d = (n, t) => new D_({ ...n.decoders || { [n.prefix]: n }, ...t.decoders || { [t.prefix]: t } });
class F_ {
  constructor(t, r, s, a) {
    this.name = t, this.prefix = r, this.baseEncode = s, this.baseDecode = a, this.encoder = new C_(t, r, s), this.decoder = new $_(t, r, a);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Wo = ({ name: n, prefix: t, encode: r, decode: s }) => new F_(n, t, r, s), ds = ({ prefix: n, name: t, alphabet: r }) => {
  const { encode: s, decode: a } = N_(r, t);
  return Wo({ prefix: n, name: t, encode: s, decode: (h) => bd(a(h)) });
}, U_ = (n, t, r, s) => {
  const a = {};
  for (let E = 0; E < t.length; ++E)
    a[t[E]] = E;
  let h = n.length;
  for (; n[h - 1] === "="; )
    --h;
  const y = new Uint8Array(h * r / 8 | 0);
  let b = 0, O = 0, _ = 0;
  for (let E = 0; E < h; ++E) {
    const A = a[n[E]];
    if (A === void 0)
      throw new SyntaxError(`Non-${s} character`);
    O = O << r | A, b += r, b >= 8 && (b -= 8, y[_++] = 255 & O >> b);
  }
  if (b >= r || 255 & O << 8 - b)
    throw new SyntaxError("Unexpected end of data");
  return y;
}, j_ = (n, t, r) => {
  const s = t[t.length - 1] === "=", a = (1 << r) - 1;
  let h = "", y = 0, b = 0;
  for (let O = 0; O < n.length; ++O)
    for (b = b << 8 | n[O], y += 8; y > r; )
      y -= r, h += t[a & b >> y];
  if (y && (h += t[a & b << r - y]), s)
    for (; h.length * r & 7; )
      h += "=";
  return h;
}, Vt = ({ name: n, prefix: t, bitsPerChar: r, alphabet: s }) => Wo({ prefix: t, name: n, encode(a) {
  return j_(a, s, r);
}, decode(a) {
  return U_(a, s, r, n);
} }), L_ = Wo({ prefix: "\0", name: "identity", encode: (n) => R_(n), decode: (n) => T_(n) });
var M_ = Object.freeze({ __proto__: null, identity: L_ });
const q_ = Vt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var z_ = Object.freeze({ __proto__: null, base2: q_ });
const H_ = Vt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var B_ = Object.freeze({ __proto__: null, base8: H_ });
const k_ = ds({ prefix: "9", name: "base10", alphabet: "0123456789" });
var V_ = Object.freeze({ __proto__: null, base10: k_ });
const K_ = Vt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), W_ = Vt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var G_ = Object.freeze({ __proto__: null, base16: K_, base16upper: W_ });
const J_ = Vt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Q_ = Vt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Y_ = Vt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), X_ = Vt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Z_ = Vt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), eE = Vt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), tE = Vt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), rE = Vt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), iE = Vt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var nE = Object.freeze({ __proto__: null, base32: J_, base32upper: Q_, base32pad: Y_, base32padupper: X_, base32hex: Z_, base32hexupper: eE, base32hexpad: tE, base32hexpadupper: rE, base32z: iE });
const sE = ds({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), oE = ds({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var aE = Object.freeze({ __proto__: null, base36: sE, base36upper: oE });
const cE = ds({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), uE = ds({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var hE = Object.freeze({ __proto__: null, base58btc: cE, base58flickr: uE });
const lE = Vt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), fE = Vt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), dE = Vt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), pE = Vt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var gE = Object.freeze({ __proto__: null, base64: lE, base64pad: fE, base64url: dE, base64urlpad: pE });
const Ed = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), yE = Ed.reduce((n, t, r) => (n[r] = t, n), []), mE = Ed.reduce((n, t, r) => (n[t.codePointAt(0)] = r, n), []);
function vE(n) {
  return n.reduce((t, r) => (t += yE[r], t), "");
}
function wE(n) {
  const t = [];
  for (const r of n) {
    const s = mE[r.codePointAt(0)];
    if (s === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(s);
  }
  return new Uint8Array(t);
}
const bE = Wo({ prefix: "🚀", name: "base256emoji", encode: vE, decode: wE });
var _E = Object.freeze({ __proto__: null, base256emoji: bE }), EE = Id, rf = 128, IE = 127, SE = ~IE, xE = Math.pow(2, 31);
function Id(n, t, r) {
  t = t || [], r = r || 0;
  for (var s = r; n >= xE; )
    t[r++] = n & 255 | rf, n /= 128;
  for (; n & SE; )
    t[r++] = n & 255 | rf, n >>>= 7;
  return t[r] = n | 0, Id.bytes = r - s + 1, t;
}
var PE = Jc, OE = 128, nf = 127;
function Jc(n, s) {
  var r = 0, s = s || 0, a = 0, h = s, y, b = n.length;
  do {
    if (h >= b)
      throw Jc.bytes = 0, new RangeError("Could not decode varint");
    y = n[h++], r += a < 28 ? (y & nf) << a : (y & nf) * Math.pow(2, a), a += 7;
  } while (y >= OE);
  return Jc.bytes = h - s, r;
}
var AE = Math.pow(2, 7), NE = Math.pow(2, 14), TE = Math.pow(2, 21), RE = Math.pow(2, 28), CE = Math.pow(2, 35), $E = Math.pow(2, 42), DE = Math.pow(2, 49), FE = Math.pow(2, 56), UE = Math.pow(2, 63), jE = function(n) {
  return n < AE ? 1 : n < NE ? 2 : n < TE ? 3 : n < RE ? 4 : n < CE ? 5 : n < $E ? 6 : n < DE ? 7 : n < FE ? 8 : n < UE ? 9 : 10;
}, LE = { encode: EE, decode: PE, encodingLength: jE }, Sd = LE;
const sf = (n, t, r = 0) => (Sd.encode(n, t, r), t), of = (n) => Sd.encodingLength(n), Qc = (n, t) => {
  const r = t.byteLength, s = of(n), a = s + of(r), h = new Uint8Array(a + r);
  return sf(n, h, 0), sf(r, h, s), h.set(t, a), new ME(n, r, t, h);
};
let ME = class {
  constructor(t, r, s, a) {
    this.code = t, this.size = r, this.digest = s, this.bytes = a;
  }
};
const xd = ({ name: n, code: t, encode: r }) => new qE(n, t, r);
class qE {
  constructor(t, r, s) {
    this.name = t, this.code = r, this.encode = s;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array ? Qc(this.code, r) : r.then((s) => Qc(this.code, s));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Pd = (n) => async (t) => new Uint8Array(await crypto.subtle.digest(n, t)), zE = xd({ name: "sha2-256", code: 18, encode: Pd("SHA-256") }), HE = xd({ name: "sha2-512", code: 19, encode: Pd("SHA-512") });
var BE = Object.freeze({ __proto__: null, sha256: zE, sha512: HE });
const Od = 0, kE = "identity", Ad = bd, VE = (n) => Qc(Od, Ad(n)), KE = { code: Od, name: kE, encode: Ad, digest: VE };
var WE = Object.freeze({ __proto__: null, identity: KE });
new TextEncoder(), new TextDecoder();
const af = { ...M_, ...z_, ...B_, ...V_, ...G_, ...nE, ...aE, ...hE, ...gE, ..._E };
({ ...BE, ...WE });
function Nd(n) {
  return globalThis.Buffer != null ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : n;
}
function GE(n = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Nd(globalThis.Buffer.allocUnsafe(n)) : new Uint8Array(n);
}
function Td(n, t, r, s) {
  return { name: n, prefix: t, encoder: { name: n, prefix: t, encode: r }, decoder: { decode: s } };
}
const cf = Td("utf8", "u", (n) => "u" + new TextDecoder("utf8").decode(n), (n) => new TextEncoder().encode(n.substring(1))), Nc = Td("ascii", "a", (n) => {
  let t = "a";
  for (let r = 0; r < n.length; r++)
    t += String.fromCharCode(n[r]);
  return t;
}, (n) => {
  n = n.substring(1);
  const t = GE(n.length);
  for (let r = 0; r < n.length; r++)
    t[r] = n.charCodeAt(r);
  return t;
}), JE = { utf8: cf, "utf-8": cf, hex: af.base16, latin1: Nc, ascii: Nc, binary: Nc, ...af };
function QE(n, t = "utf8") {
  const r = JE[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Nd(globalThis.Buffer.from(n, "utf-8")) : r.decoder.decode(`${r.prefix}${n}`);
}
const Rd = "wc", YE = 2, fu = "core", Ai = `${Rd}@2:${fu}:`, XE = { name: fu, logger: "error" }, ZE = { database: ":memory:" }, eI = "crypto", uf = "client_ed25519_seed", tI = oe.ONE_DAY, rI = "keychain", iI = "0.3", nI = "messages", sI = "0.3", oI = oe.SIX_HOURS, aI = "publisher", Cd = "irn", cI = "error", $d = "wss://relay.walletconnect.com", hf = "wss://relay.walletconnect.org", uI = "relayer", Gt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, hI = "_subscription", fi = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, lI = oe.ONE_SECOND, fI = "2.10.6", dI = 1e4, pI = "0.3", gI = "WALLETCONNECT_CLIENT_ID", qr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, yI = "subscription", mI = "0.3", vI = oe.FIVE_SECONDS * 1e3, wI = "pairing", bI = "0.3", Qn = { wc_pairingDelete: { req: { ttl: oe.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: oe.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: oe.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: oe.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: oe.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: oe.ONE_DAY, prompt: !1, tag: 0 } } }, is = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Yr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, _I = "history", EI = "0.3", II = "expirer", Tr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, SI = "0.3", Tc = "verify-api", _n = "https://verify.walletconnect.com", Yc = "https://verify.walletconnect.org", xI = [_n, Yc];
class PI {
  constructor(t, r) {
    this.core = t, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = rI, this.version = iI, this.initialized = !1, this.storagePrefix = Ai, this.init = async () => {
      if (!this.initialized) {
        const s = await this.getKeyChain();
        typeof s < "u" && (this.keychain = s), this.initialized = !0;
      }
    }, this.has = (s) => (this.isInitialized(), this.keychain.has(s)), this.set = async (s, a) => {
      this.isInitialized(), this.keychain.set(s, a), await this.persist();
    }, this.get = (s) => {
      this.isInitialized();
      const a = this.keychain.get(s);
      if (typeof a > "u") {
        const { message: h } = Be("NO_MATCHING_KEY", `${this.name}: ${s}`);
        throw new Error(h);
      }
      return a;
    }, this.del = async (s) => {
      this.isInitialized(), this.keychain.delete(s), await this.persist();
    }, this.core = t, this.logger = Te.generateChildLogger(r, this.name);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(t) {
    await this.core.storage.setItem(this.storageKey, ud(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? hd(t) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Be("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class OI {
  constructor(t, r, s) {
    this.core = t, this.logger = r, this.name = eI, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (a) => (this.isInitialized(), this.keychain.has(a)), this.getClientId = async () => {
      this.isInitialized();
      const a = await this.getClientSeed(), h = Ll(a);
      return sd(h.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const a = pb();
      return this.setPrivateKey(a.publicKey, a.privateKey);
    }, this.signJWT = async (a) => {
      this.isInitialized();
      const h = await this.getClientSeed(), y = Ll(h), b = Kc();
      return await fb(b, a, tI, y);
    }, this.generateSharedKey = (a, h, y) => {
      this.isInitialized();
      const b = this.getPrivateKey(a), O = gb(b, h);
      return this.setSymKey(O, y);
    }, this.setSymKey = async (a, h) => {
      this.isInitialized();
      const y = h || yb(a);
      return await this.keychain.set(y, a), y;
    }, this.deleteKeyPair = async (a) => {
      this.isInitialized(), await this.keychain.del(a);
    }, this.deleteSymKey = async (a) => {
      this.isInitialized(), await this.keychain.del(a);
    }, this.encode = async (a, h, y) => {
      this.isInitialized();
      const b = cd(y), O = Ji(h);
      if (ql(b)) {
        const j = b.senderPublicKey, H = b.receiverPublicKey;
        a = await this.generateSharedKey(j, H);
      }
      const _ = this.getSymKey(a), { type: E, senderPublicKey: A } = b;
      return vb({ type: E, symKey: _, message: O, senderPublicKey: A });
    }, this.decode = async (a, h, y) => {
      this.isInitialized();
      const b = _b(h, y);
      if (ql(b)) {
        const O = b.receiverPublicKey, _ = b.senderPublicKey;
        a = await this.generateSharedKey(O, _);
      }
      try {
        const O = this.getSymKey(a), _ = wb({ symKey: O, encoded: h });
        return ls(_);
      } catch (O) {
        this.logger.error(`Failed to decode message from topic: '${a}', clientId: '${await this.getClientId()}'`), this.logger.error(O);
      }
    }, this.getPayloadType = (a) => {
      const h = Ro(a);
      return fs(h.type);
    }, this.getPayloadSenderPublicKey = (a) => {
      const h = Ro(a);
      return h.senderPublicKey ? Qt(h.senderPublicKey, sr) : void 0;
    }, this.core = t, this.logger = Te.generateChildLogger(r, this.name), this.keychain = s || new PI(this.core, this.logger);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  async setPrivateKey(t, r) {
    return await this.keychain.set(t, r), t;
  }
  getPrivateKey(t) {
    return this.keychain.get(t);
  }
  async getClientSeed() {
    let t = "";
    try {
      t = this.keychain.get(uf);
    } catch {
      t = Kc(), await this.keychain.set(uf, t);
    }
    return QE(t, "base16");
  }
  getSymKey(t) {
    return this.keychain.get(t);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Be("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class AI extends kw {
  constructor(t, r) {
    super(t, r), this.logger = t, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = nI, this.version = sI, this.initialized = !1, this.storagePrefix = Ai, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const s = await this.getRelayerMessages();
          typeof s < "u" && (this.messages = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (s) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (s, a) => {
      this.isInitialized();
      const h = Wc(a);
      let y = this.messages.get(s);
      return typeof y > "u" && (y = {}), typeof y[h] < "u" || (y[h] = a, this.messages.set(s, y), await this.persist()), h;
    }, this.get = (s) => {
      this.isInitialized();
      let a = this.messages.get(s);
      return typeof a > "u" && (a = {}), a;
    }, this.has = (s, a) => {
      this.isInitialized();
      const h = this.get(s), y = Wc(a);
      return typeof h[y] < "u";
    }, this.del = async (s) => {
      this.isInitialized(), this.messages.delete(s), await this.persist();
    }, this.logger = Te.generateChildLogger(t, this.name), this.core = r;
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(t) {
    await this.core.storage.setItem(this.storageKey, ud(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? hd(t) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Be("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class NI extends Vw {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.events = new Cr.EventEmitter(), this.name = aI, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = oe.toMiliseconds(oe.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (s, a, h) => {
      var y;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: a, opts: h } });
      try {
        const b = (h == null ? void 0 : h.ttl) || oI, O = Gc(h), _ = (h == null ? void 0 : h.prompt) || !1, E = (h == null ? void 0 : h.tag) || 0, A = (h == null ? void 0 : h.id) || md().toString(), j = { topic: s, message: a, opts: { ttl: b, relay: O, prompt: _, tag: E, id: A } }, H = setTimeout(() => this.queue.set(A, j), this.publishTimeout);
        try {
          await await us(this.rpcPublish(s, a, b, O, _, E, A), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(A), this.relayer.events.emit(Gt.publish, j);
        } catch (L) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (y = h == null ? void 0 : h.internal) != null && y.throwOnFailedPublish)
            throw this.removeRequestFromQueue(A), L;
          return;
        } finally {
          clearTimeout(H);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: s, message: a, opts: h } });
      } catch (b) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(b), b;
      }
    }, this.on = (s, a) => {
      this.events.on(s, a);
    }, this.once = (s, a) => {
      this.events.once(s, a);
    }, this.off = (s, a) => {
      this.events.off(s, a);
    }, this.removeListener = (s, a) => {
      this.events.removeListener(s, a);
    }, this.relayer = t, this.logger = Te.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  rpcPublish(t, r, s, a, h, y, b) {
    var O, _, E, A;
    const j = { method: Ao(a.protocol).publish, params: { topic: t, message: r, ttl: s, prompt: h, tag: y }, id: b };
    return Co((O = j.params) == null ? void 0 : O.prompt) && ((_ = j.params) == null || delete _.prompt), Co((E = j.params) == null ? void 0 : E.tag) && ((A = j.params) == null || delete A.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: j }), this.relayer.request(j);
  }
  removeRequestFromQueue(t) {
    this.queue.delete(t);
  }
  checkQueue() {
    this.queue.forEach(async (t) => {
      const { topic: r, message: s, opts: a } = t;
      await this.publish(r, s, a);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(xn.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Gt.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Gt.message_ack, (t) => {
      this.removeRequestFromQueue(t.id.toString());
    });
  }
}
class TI {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (t, r) => {
      const s = this.get(t);
      this.exists(t, r) || this.map.set(t, [...s, r]);
    }, this.get = (t) => this.map.get(t) || [], this.exists = (t, r) => this.get(t).includes(r), this.delete = (t, r) => {
      if (typeof r > "u") {
        this.map.delete(t);
        return;
      }
      if (!this.map.has(t))
        return;
      const s = this.get(t);
      if (!this.exists(t, r))
        return;
      const a = s.filter((h) => h !== r);
      if (!a.length) {
        this.map.delete(t);
        return;
      }
      this.map.set(t, a);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var RI = Object.defineProperty, CI = Object.defineProperties, $I = Object.getOwnPropertyDescriptors, lf = Object.getOwnPropertySymbols, DI = Object.prototype.hasOwnProperty, FI = Object.prototype.propertyIsEnumerable, ff = (n, t, r) => t in n ? RI(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, Yn = (n, t) => {
  for (var r in t || (t = {}))
    DI.call(t, r) && ff(n, r, t[r]);
  if (lf)
    for (var r of lf(t))
      FI.call(t, r) && ff(n, r, t[r]);
  return n;
}, Rc = (n, t) => CI(n, $I(t));
class UI extends Gw {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new TI(), this.events = new Cr.EventEmitter(), this.name = yI, this.version = mI, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Ai, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (s, a) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: a } });
      try {
        const h = Gc(a), y = { topic: s, relay: h };
        this.pending.set(s, y);
        const b = await this.rpcSubscribe(s, h);
        return this.onSubscribe(b, y), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: s, opts: a } }), b;
      } catch (h) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(h), h;
      }
    }, this.unsubscribe = async (s, a) => {
      await this.restartToComplete(), this.isInitialized(), typeof (a == null ? void 0 : a.id) < "u" ? await this.unsubscribeById(s, a.id, a) : await this.unsubscribeByTopic(s, a);
    }, this.isSubscribed = async (s) => this.topics.includes(s) ? !0 : await new Promise((a, h) => {
      const y = new oe.Watch();
      y.start(this.pendingSubscriptionWatchLabel);
      const b = setInterval(() => {
        !this.pending.has(s) && this.topics.includes(s) && (clearInterval(b), y.stop(this.pendingSubscriptionWatchLabel), a(!0)), y.elapsed(this.pendingSubscriptionWatchLabel) >= vI && (clearInterval(b), y.stop(this.pendingSubscriptionWatchLabel), h(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (s, a) => {
      this.events.on(s, a);
    }, this.once = (s, a) => {
      this.events.once(s, a);
    }, this.off = (s, a) => {
      this.events.off(s, a);
    }, this.removeListener = (s, a) => {
      this.events.removeListener(s, a);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = t, this.logger = Te.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
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
  hasSubscription(t, r) {
    let s = !1;
    try {
      s = this.getSubscription(t).topic === r;
    } catch {
    }
    return s;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(t, r) {
    const s = this.topicMap.get(t);
    await Promise.all(s.map(async (a) => await this.unsubscribeById(t, a, r)));
  }
  async unsubscribeById(t, r, s) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: s } });
    try {
      const a = Gc(s);
      await this.rpcUnsubscribe(t, r, a);
      const h = rs("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, h), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: s } });
    } catch (a) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(a), a;
    }
  }
  async rpcSubscribe(t, r) {
    const s = { method: Ao(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      await await us(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Gt.connection_stalled);
    }
    return Wc(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length)
      return;
    const r = t[0].relay, s = { method: Ao(r.protocol).batchSubscribe, params: { topics: t.map((a) => a.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await us(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Gt.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, s) {
    const a = { method: Ao(s.protocol).unsubscribe, params: { topic: t, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: a }), this.relayer.request(a);
  }
  onSubscribe(t, r) {
    this.setSubscription(t, Rc(Yn({}, r), { id: t })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(t) {
    t.length && t.forEach((r) => {
      this.setSubscription(r.id, Yn({}, r)), this.pending.delete(r.topic);
    });
  }
  async onUnsubscribe(t, r, s) {
    this.events.removeAllListeners(r), this.hasSubscription(r, t) && this.deleteSubscription(r, s), await this.relayer.messages.del(t);
  }
  async setRelayerSubscriptions(t) {
    await this.relayer.core.storage.setItem(this.storageKey, t);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(t, r) {
    this.subscriptions.has(t) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: t, subscription: r }), this.addSubscription(t, r));
  }
  addSubscription(t, r) {
    this.subscriptions.set(t, Yn({}, r)), this.topicMap.set(r.topic, t), this.events.emit(qr.created, r);
  }
  getSubscription(t) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: t });
    const r = this.subscriptions.get(t);
    if (!r) {
      const { message: s } = Be("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(s);
    }
    return r;
  }
  deleteSubscription(t, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: t, reason: r });
    const s = this.getSubscription(t);
    this.subscriptions.delete(t), this.topicMap.delete(s.topic, t), this.events.emit(qr.deleted, Rc(Yn({}, s), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(qr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < t; r++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(qr.resubscribed);
  }
  async restore() {
    try {
      const t = await this.getRelayerSubscriptions();
      if (typeof t > "u" || !t.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = Be("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t);
    }
  }
  async batchSubscribe(t) {
    if (!t.length)
      return;
    const r = await this.rpcBatchSubscribe(t);
    Gb(r) && this.onBatchSubscribe(r.map((s, a) => Rc(Yn({}, t[a]), { id: s })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed)
      return;
    const t = [];
    this.pending.forEach((r) => {
      t.push(r);
    }), await this.batchSubscribe(t);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(xn.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Gt.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Gt.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(qr.created, async (t) => {
      const r = qr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), await this.persist();
    }), this.events.on(qr.deleted, async (t) => {
      const r = qr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Be("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((t) => {
      const r = setInterval(() => {
        this.restartInProgress || (clearInterval(r), t());
      }, this.pollingInterval);
    });
  }
}
var jI = Object.defineProperty, df = Object.getOwnPropertySymbols, LI = Object.prototype.hasOwnProperty, MI = Object.prototype.propertyIsEnumerable, pf = (n, t, r) => t in n ? jI(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, qI = (n, t) => {
  for (var r in t || (t = {}))
    LI.call(t, r) && pf(n, r, t[r]);
  if (df)
    for (var r of df(t))
      MI.call(t, r) && pf(n, r, t[r]);
  return n;
};
class zI extends Kw {
  constructor(t) {
    super(t), this.protocol = "wc", this.version = 2, this.events = new Cr.EventEmitter(), this.name = uI, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (s) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(s), s;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(Gt.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(Gt.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(fi.payload, this.onPayloadHandler), this.provider.on(fi.connect, this.onConnectHandler), this.provider.on(fi.disconnect, this.onDisconnectHandler), this.provider.on(fi.error, this.onProviderErrorHandler);
    }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? Te.generateChildLogger(t.logger, this.name) : Te.pino(Te.getDefaultLoggerOptions({ level: t.logger || cI })), this.messages = new AI(this.logger, t.core), this.subscriber = new UI(this, this.logger), this.publisher = new NI(this, this.logger), this.relayUrl = (t == null ? void 0 : t.relayUrl) || $d, this.projectId = t.projectId, this.bundleId = Ob(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${hf}...`), await this.restartTransport(hf);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, dI);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(t, r, s) {
    this.isInitialized(), await this.publisher.publish(t, r, s), await this.recordMessageEvent({ topic: t, message: r, publishedAt: Date.now() });
  }
  async subscribe(t, r) {
    var s;
    this.isInitialized();
    let a = ((s = this.subscriber.topicMap.get(t)) == null ? void 0 : s[0]) || "";
    if (a)
      return a;
    let h;
    const y = (b) => {
      b.topic === t && (this.subscriber.off(qr.created, y), h());
    };
    return await Promise.all([new Promise((b) => {
      h = b, this.subscriber.on(qr.created, y);
    }), new Promise(async (b) => {
      a = await this.subscriber.subscribe(t, r), b();
    })]), a;
  }
  async unsubscribe(t, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(t, r);
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
  async transportClose() {
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await us(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(t) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      t && t !== this.relayUrl && (this.relayUrl = t, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(qr.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, s) => {
          try {
            await us(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (a) {
            s(a);
            return;
          }
          r();
        })]);
      } catch (r) {
        this.logger.error(r);
        const s = r;
        if (!this.isConnectionStalled(s.message))
          throw r;
        this.provider.events.emit(fi.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(t) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = t || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Gl())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(t) {
    return this.staleConnectionErrors.some((r) => t.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const t = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new gi(new S_(Cb({ sdkVersion: fI, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: t, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(t) {
    const { topic: r, message: s } = t;
    await this.messages.set(r, s);
  }
  async shouldIgnoreMessageEvent(t) {
    const { topic: r, message: s } = t;
    if (!s || s.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
    if (!await this.subscriber.isSubscribed(r))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
    const a = this.messages.has(r, s);
    return a && this.logger.debug(`Ignoring duplicate message: ${s}`), a;
  }
  async onProviderPayload(t) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: t }), lu(t)) {
      if (!t.method.endsWith(hI))
        return;
      const r = t.params, { topic: s, message: a, publishedAt: h } = r.data, y = { topic: s, message: a, publishedAt: h };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(qI({ type: "event", event: r.id }, y)), this.events.emit(r.id, y), await this.acknowledgePayload(t), await this.onMessageEvent(y);
    } else
      Ko(t) && this.events.emit(Gt.message_ack, t);
  }
  async onMessageEvent(t) {
    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Gt.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = hu(t.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(fi.payload, this.onPayloadHandler), this.provider.off(fi.connect, this.onConnectHandler), this.provider.off(fi.disconnect, this.onDisconnectHandler), this.provider.off(fi.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Gt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let t = await Gl();
    t_(async (r) => {
      this.initialized && t !== r && (t = r, r ? await this.restartTransport().catch((s) => this.logger.error(s)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((s) => this.logger.error(s))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Gt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((t) => this.logger.error(t));
    }, oe.toMiliseconds(lI)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Be("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress)
        return await new Promise((t) => {
          const r = setInterval(() => {
            this.connected && (clearInterval(r), t());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var HI = Object.defineProperty, gf = Object.getOwnPropertySymbols, BI = Object.prototype.hasOwnProperty, kI = Object.prototype.propertyIsEnumerable, yf = (n, t, r) => t in n ? HI(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, mf = (n, t) => {
  for (var r in t || (t = {}))
    BI.call(t, r) && yf(n, r, t[r]);
  if (gf)
    for (var r of gf(t))
      kI.call(t, r) && yf(n, r, t[r]);
  return n;
};
class Go extends Ww {
  constructor(t, r, s, a = Ai, h = void 0) {
    super(t, r, s, a), this.core = t, this.logger = r, this.name = s, this.map = /* @__PURE__ */ new Map(), this.version = pI, this.cached = [], this.initialized = !1, this.storagePrefix = Ai, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((y) => {
        this.getKey && y !== null && !Co(y) ? this.map.set(this.getKey(y), y) : Qb(y) ? this.map.set(y.id, y) : Yb(y) && this.map.set(y.topic, y);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (y, b) => {
      this.isInitialized(), this.map.has(y) ? await this.update(y, b) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: y, value: b }), this.map.set(y, b), await this.persist());
    }, this.get = (y) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: y }), this.getData(y)), this.getAll = (y) => (this.isInitialized(), y ? this.values.filter((b) => Object.keys(y).every((O) => P_(b[O], y[O]))) : this.values), this.update = async (y, b) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: y, update: b });
      const O = mf(mf({}, this.getData(y)), b);
      this.map.set(y, O), await this.persist();
    }, this.delete = async (y, b) => {
      this.isInitialized(), this.map.has(y) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: y, reason: b }), this.map.delete(y), await this.persist());
    }, this.logger = Te.generateChildLogger(r, this.name), this.storagePrefix = a, this.getKey = h;
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
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
  async setDataStore(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(t) {
    const r = this.map.get(t);
    if (!r) {
      const { message: s } = Be("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.error(s), new Error(s);
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const t = await this.getDataStore();
      if (typeof t > "u" || !t.length)
        return;
      if (this.map.size) {
        const { message: r } = Be("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Be("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class VI {
  constructor(t, r) {
    this.core = t, this.logger = r, this.name = wI, this.version = bI, this.events = new ru(), this.initialized = !1, this.storagePrefix = Ai, this.ignoredPayloadTypes = [Pn], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: s }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...s])];
    }, this.create = async () => {
      this.isInitialized();
      const s = Kc(), a = await this.core.crypto.setSymKey(s), h = Oo(oe.FIVE_MINUTES), y = { protocol: Cd }, b = { topic: a, expiry: h, relay: y, active: !1 }, O = Vb({ protocol: this.core.protocol, version: this.core.version, topic: a, symKey: s, relay: y });
      return await this.pairings.set(a, b), await this.core.relayer.subscribe(a), this.core.expirer.set(a, h), { topic: a, uri: O };
    }, this.pair = async (s) => {
      this.isInitialized(), this.isValidPair(s);
      const { topic: a, symKey: h, relay: y } = Wl(s.uri);
      let b;
      if (this.pairings.keys.includes(a) && (b = this.pairings.get(a), b.active))
        throw new Error(`Pairing already exists: ${a}. Please try again with a new connection URI.`);
      const O = Oo(oe.FIVE_MINUTES), _ = { topic: a, relay: y, expiry: O, active: !1 };
      return await this.pairings.set(a, _), this.core.expirer.set(a, O), s.activatePairing && await this.activate({ topic: a }), this.events.emit(is.create, _), this.core.crypto.keychain.has(a) || (await this.core.crypto.setSymKey(h, a), await this.core.relayer.subscribe(a, { relay: y })), _;
    }, this.activate = async ({ topic: s }) => {
      this.isInitialized();
      const a = Oo(oe.THIRTY_DAYS);
      await this.pairings.update(s, { active: !0, expiry: a }), this.core.expirer.set(s, a);
    }, this.ping = async (s) => {
      this.isInitialized(), await this.isValidPing(s);
      const { topic: a } = s;
      if (this.pairings.keys.includes(a)) {
        const h = await this.sendRequest(a, "wc_pairingPing", {}), { done: y, resolve: b, reject: O } = $b();
        this.events.once(Oc("pairing_ping", h), ({ error: _ }) => {
          _ ? O(_) : b();
        }), await y();
      }
    }, this.updateExpiry = async ({ topic: s, expiry: a }) => {
      this.isInitialized(), await this.pairings.update(s, { expiry: a });
    }, this.updateMetadata = async ({ topic: s, metadata: a }) => {
      this.isInitialized(), await this.pairings.update(s, { peerMetadata: a });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (s) => {
      this.isInitialized(), await this.isValidDisconnect(s);
      const { topic: a } = s;
      this.pairings.keys.includes(a) && (await this.sendRequest(a, "wc_pairingDelete", rs("USER_DISCONNECTED")), await this.deletePairing(a));
    }, this.sendRequest = async (s, a, h) => {
      const y = In(a, h), b = await this.core.crypto.encode(s, y), O = Qn[a].req;
      return this.core.history.set(s, y), this.core.relayer.publish(s, b, O), y.id;
    }, this.sendResult = async (s, a, h) => {
      const y = hu(s, h), b = await this.core.crypto.encode(a, y), O = await this.core.history.get(a, s), _ = Qn[O.request.method].res;
      await this.core.relayer.publish(a, b, _), await this.core.history.resolve(y);
    }, this.sendError = async (s, a, h) => {
      const y = Vo(s, h), b = await this.core.crypto.encode(a, y), O = await this.core.history.get(a, s), _ = Qn[O.request.method] ? Qn[O.request.method].res : Qn.unregistered_method.res;
      await this.core.relayer.publish(a, b, _), await this.core.history.resolve(y);
    }, this.deletePairing = async (s, a) => {
      await this.core.relayer.unsubscribe(s), await Promise.all([this.pairings.delete(s, rs("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), a ? Promise.resolve() : this.core.expirer.del(s)]);
    }, this.cleanup = async () => {
      const s = this.pairings.getAll().filter((a) => kl(a.expiry));
      await Promise.all(s.map((a) => this.deletePairing(a.topic)));
    }, this.onRelayEventRequest = (s) => {
      const { topic: a, payload: h } = s;
      switch (h.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(a, h);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(a, h);
        default:
          return this.onUnknownRpcMethodRequest(a, h);
      }
    }, this.onRelayEventResponse = async (s) => {
      const { topic: a, payload: h } = s, y = (await this.core.history.get(a, h.id)).request.method;
      switch (y) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(a, h);
        default:
          return this.onUnknownRpcMethodResponse(y);
      }
    }, this.onPairingPingRequest = async (s, a) => {
      const { id: h } = a;
      try {
        this.isValidPing({ topic: s }), await this.sendResult(h, s, !0), this.events.emit(is.ping, { id: h, topic: s });
      } catch (y) {
        await this.sendError(h, s, y), this.logger.error(y);
      }
    }, this.onPairingPingResponse = (s, a) => {
      const { id: h } = a;
      setTimeout(() => {
        pi(a) ? this.events.emit(Oc("pairing_ping", h), {}) : zr(a) && this.events.emit(Oc("pairing_ping", h), { error: a.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (s, a) => {
      const { id: h } = a;
      try {
        this.isValidDisconnect({ topic: s }), await this.deletePairing(s), this.events.emit(is.delete, { id: h, topic: s });
      } catch (y) {
        await this.sendError(h, s, y), this.logger.error(y);
      }
    }, this.onUnknownRpcMethodRequest = async (s, a) => {
      const { id: h, method: y } = a;
      try {
        if (this.registeredMethods.includes(y))
          return;
        const b = rs("WC_METHOD_UNSUPPORTED", y);
        await this.sendError(h, s, b), this.logger.error(b);
      } catch (b) {
        await this.sendError(h, s, b), this.logger.error(b);
      }
    }, this.onUnknownRpcMethodResponse = (s) => {
      this.registeredMethods.includes(s) || this.logger.error(rs("WC_METHOD_UNSUPPORTED", s));
    }, this.isValidPair = (s) => {
      var a;
      if (!Ac(s)) {
        const { message: y } = Be("MISSING_OR_INVALID", `pair() params: ${s}`);
        throw new Error(y);
      }
      if (!Jb(s.uri)) {
        const { message: y } = Be("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
        throw new Error(y);
      }
      const h = Wl(s.uri);
      if (!((a = h == null ? void 0 : h.relay) != null && a.protocol)) {
        const { message: y } = Be("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(y);
      }
      if (!(h != null && h.symKey)) {
        const { message: y } = Be("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(y);
      }
    }, this.isValidPing = async (s) => {
      if (!Ac(s)) {
        const { message: h } = Be("MISSING_OR_INVALID", `ping() params: ${s}`);
        throw new Error(h);
      }
      const { topic: a } = s;
      await this.isValidPairingTopic(a);
    }, this.isValidDisconnect = async (s) => {
      if (!Ac(s)) {
        const { message: h } = Be("MISSING_OR_INVALID", `disconnect() params: ${s}`);
        throw new Error(h);
      }
      const { topic: a } = s;
      await this.isValidPairingTopic(a);
    }, this.isValidPairingTopic = async (s) => {
      if (!fd(s, !1)) {
        const { message: a } = Be("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
        throw new Error(a);
      }
      if (!this.pairings.keys.includes(s)) {
        const { message: a } = Be("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
        throw new Error(a);
      }
      if (kl(this.pairings.get(s).expiry)) {
        await this.deletePairing(s);
        const { message: a } = Be("EXPIRED", `pairing topic: ${s}`);
        throw new Error(a);
      }
    }, this.core = t, this.logger = Te.generateChildLogger(r, this.name), this.pairings = new Go(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Be("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Gt.message, async (t) => {
      const { topic: r, message: s } = t;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))
        return;
      const a = await this.core.crypto.decode(r, s);
      try {
        lu(a) ? (this.core.history.set(r, a), this.onRelayEventRequest({ topic: r, payload: a })) : Ko(a) && (await this.core.history.resolve(a), await this.onRelayEventResponse({ topic: r, payload: a }), this.core.history.delete(r, a.id));
      } catch (h) {
        this.logger.error(h);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Tr.expired, async (t) => {
      const { topic: r } = Ub(t.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(is.expire, { topic: r }));
    });
  }
}
let KI = class extends Bw {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Cr.EventEmitter(), this.name = _I, this.version = EI, this.cached = [], this.initialized = !1, this.storagePrefix = Ai, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (s, a, h) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: s, request: a, chainId: h }), this.records.has(a.id))
        return;
      const y = { id: a.id, topic: s, request: { method: a.method, params: a.params || null }, chainId: h, expiry: Oo(oe.THIRTY_DAYS) };
      this.records.set(y.id, y), this.events.emit(Yr.created, y);
    }, this.resolve = async (s) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: s }), !this.records.has(s.id))
        return;
      const a = await this.getRecord(s.id);
      typeof a.response > "u" && (a.response = zr(s) ? { error: s.error } : { result: s.result }, this.records.set(a.id, a), this.events.emit(Yr.updated, a));
    }, this.get = async (s, a) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: s, id: a }), await this.getRecord(a)), this.delete = (s, a) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: a }), this.values.forEach((h) => {
        if (h.topic === s) {
          if (typeof a < "u" && h.id !== a)
            return;
          this.records.delete(h.id), this.events.emit(Yr.deleted, h);
        }
      });
    }, this.exists = async (s, a) => (this.isInitialized(), this.records.has(a) ? (await this.getRecord(a)).topic === s : !1), this.on = (s, a) => {
      this.events.on(s, a);
    }, this.once = (s, a) => {
      this.events.once(s, a);
    }, this.off = (s, a) => {
      this.events.off(s, a);
    }, this.removeListener = (s, a) => {
      this.events.removeListener(s, a);
    }, this.logger = Te.generateChildLogger(r, this.name);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
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
    const t = [];
    return this.values.forEach((r) => {
      if (typeof r.response < "u")
        return;
      const s = { topic: r.topic, request: In(r.request.method, r.request.params, r.id), chainId: r.chainId };
      return t.push(s);
    }), t;
  }
  async setJsonRpcRecords(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(t) {
    this.isInitialized();
    const r = this.records.get(t);
    if (!r) {
      const { message: s } = Be("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(s);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Yr.sync);
  }
  async restore() {
    try {
      const t = await this.getJsonRpcRecords();
      if (typeof t > "u" || !t.length)
        return;
      if (this.records.size) {
        const { message: r } = Be("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t);
    }
  }
  registerEventListeners() {
    this.events.on(Yr.created, (t) => {
      const r = Yr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.events.on(Yr.updated, (t) => {
      const r = Yr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.events.on(Yr.deleted, (t) => {
      const r = Yr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.core.heartbeat.on(xn.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((t) => {
        oe.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.delete(t.topic, t.id));
      });
    } catch (t) {
      this.logger.warn(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Be("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}, WI = class extends Jw {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Cr.EventEmitter(), this.name = II, this.version = SI, this.cached = [], this.initialized = !1, this.storagePrefix = Ai, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((s) => this.expirations.set(s.target, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (s) => {
      try {
        const a = this.formatTarget(s);
        return typeof this.getExpiration(a) < "u";
      } catch {
        return !1;
      }
    }, this.set = (s, a) => {
      this.isInitialized();
      const h = this.formatTarget(s), y = { target: h, expiry: a };
      this.expirations.set(h, y), this.checkExpiry(h, y), this.events.emit(Tr.created, { target: h, expiration: y });
    }, this.get = (s) => {
      this.isInitialized();
      const a = this.formatTarget(s);
      return this.getExpiration(a);
    }, this.del = (s) => {
      if (this.isInitialized(), this.has(s)) {
        const a = this.formatTarget(s), h = this.getExpiration(a);
        this.expirations.delete(a), this.events.emit(Tr.deleted, { target: a, expiration: h });
      }
    }, this.on = (s, a) => {
      this.events.on(s, a);
    }, this.once = (s, a) => {
      this.events.once(s, a);
    }, this.off = (s, a) => {
      this.events.off(s, a);
    }, this.removeListener = (s, a) => {
      this.events.removeListener(s, a);
    }, this.logger = Te.generateChildLogger(r, this.name);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
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
  formatTarget(t) {
    if (typeof t == "string")
      return Db(t);
    if (typeof t == "number")
      return Fb(t);
    const { message: r } = Be("UNKNOWN_TYPE", `Target type: ${typeof t}`);
    throw new Error(r);
  }
  async setExpirations(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Tr.sync);
  }
  async restore() {
    try {
      const t = await this.getExpirations();
      if (typeof t > "u" || !t.length)
        return;
      if (this.expirations.size) {
        const { message: r } = Be("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t);
    }
  }
  getExpiration(t) {
    const r = this.expirations.get(t);
    if (!r) {
      const { message: s } = Be("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.error(s), new Error(s);
    }
    return r;
  }
  checkExpiry(t, r) {
    const { expiry: s } = r;
    oe.toMiliseconds(s) - Date.now() <= 0 && this.expire(t, r);
  }
  expire(t, r) {
    this.expirations.delete(t), this.events.emit(Tr.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(xn.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Tr.created, (t) => {
      const r = Tr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(Tr.expired, (t) => {
      const r = Tr.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(Tr.deleted, (t) => {
      const r = Tr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Be("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
};
class GI extends Qw {
  constructor(t, r) {
    super(t, r), this.projectId = t, this.logger = r, this.name = Tc, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (s) => {
      if (this.verifyDisabled || On() || !Bo())
        return;
      const a = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
      this.verifyUrl !== a && this.removeIframe(), this.verifyUrl = a;
      try {
        await this.createIframe();
      } catch (h) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(h);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Yc;
        try {
          await this.createIframe();
        } catch (h) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(h), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (s) => {
      this.initialized ? this.sendPost(s.attestationId) : (this.addToQueue(s.attestationId), await this.init());
    }, this.resolve = async (s) => {
      if (this.isDevEnv)
        return "";
      const a = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
      let h;
      try {
        h = await this.fetchAttestation(s.attestationId, a);
      } catch (y) {
        this.logger.info(`failed to resolve attestation: ${s.attestationId} from url: ${a}`), this.logger.info(y), h = await this.fetchAttestation(s.attestationId, Yc);
      }
      return h;
    }, this.fetchAttestation = async (s, a) => {
      this.logger.info(`resolving attestation: ${s} from url: ${a}`);
      const h = this.startAbortTimer(oe.ONE_SECOND * 2), y = await fetch(`${a}/attestation/${s}`, { signal: this.abortController.signal });
      return clearTimeout(h), y.status === 200 ? await y.json() : void 0;
    }, this.addToQueue = (s) => {
      this.queue.push(s);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((s) => this.sendPost(s)), this.queue = []);
    }, this.sendPost = (s) => {
      var a;
      try {
        if (!this.iframe)
          return;
        (a = this.iframe.contentWindow) == null || a.postMessage(s, "*"), this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let s;
      const a = (h) => {
        h.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", a), s());
      };
      await Promise.race([new Promise((h) => {
        if (document.getElementById(Tc))
          return h();
        window.addEventListener("message", a);
        const y = document.createElement("iframe");
        y.id = Tc, y.src = `${this.verifyUrl}/${this.projectId}`, y.style.display = "none", document.body.append(y), this.iframe = y, s = h;
      }), new Promise((h, y) => setTimeout(() => {
        window.removeEventListener("message", a), y("verify iframe load timeout");
      }, oe.toMiliseconds(oe.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (s) => {
      let a = s || _n;
      return xI.includes(a) || (this.logger.info(`verify url: ${a}, not included in trusted list, assigning default: ${_n}`), a = _n), a;
    }, this.logger = Te.generateChildLogger(r, this.name), this.verifyUrl = _n, this.abortController = new AbortController(), this.isDevEnv = au() && process.env.IS_VITEST;
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  startAbortTimer(t) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), oe.toMiliseconds(t));
  }
}
var JI = Object.defineProperty, vf = Object.getOwnPropertySymbols, QI = Object.prototype.hasOwnProperty, YI = Object.prototype.propertyIsEnumerable, wf = (n, t, r) => t in n ? JI(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, bf = (n, t) => {
  for (var r in t || (t = {}))
    QI.call(t, r) && wf(n, r, t[r]);
  if (vf)
    for (var r of vf(t))
      YI.call(t, r) && wf(n, r, t[r]);
  return n;
};
let XI = class Dd extends Hw {
  constructor(t) {
    super(t), this.protocol = Rd, this.version = YE, this.name = fu, this.events = new Cr.EventEmitter(), this.initialized = !1, this.on = (s, a) => this.events.on(s, a), this.once = (s, a) => this.events.once(s, a), this.off = (s, a) => this.events.off(s, a), this.removeListener = (s, a) => this.events.removeListener(s, a), this.projectId = t == null ? void 0 : t.projectId, this.relayUrl = (t == null ? void 0 : t.relayUrl) || $d, this.customStoragePrefix = t != null && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "";
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Te.pino(Te.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || XE.logger }));
    this.logger = Te.generateChildLogger(r, this.name), this.heartbeat = new xn.HeartBeat(), this.crypto = new OI(this, this.logger, t == null ? void 0 : t.keychain), this.history = new KI(this, this.logger), this.expirer = new WI(this, this.logger), this.storage = t != null && t.storage ? t.storage : new $w(bf(bf({}, ZE), t == null ? void 0 : t.storageOptions)), this.relayer = new zI({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new VI(this, this.logger), this.verify = new GI(this.projectId || "", this.logger);
  }
  static async init(t) {
    const r = new Dd(t);
    await r.initialize();
    const s = await r.crypto.getClientId();
    return await r.storage.setItem(gI, s), r;
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (t) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t;
    }
  }
};
const ZI = XI;
var eS = {};
(function(n) {
  const t = Lo, r = Mo, s = Uo, a = jo, h = (u) => u == null, y = Symbol("encodeFragmentIdentifier");
  function b(u) {
    switch (u.arrayFormat) {
      case "index":
        return (d) => (m, g) => {
          const p = m.length;
          return g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, [E(d, u), "[", p, "]"].join("")] : [
            ...m,
            [E(d, u), "[", E(p, u), "]=", E(g, u)].join("")
          ];
        };
      case "bracket":
        return (d) => (m, g) => g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, [E(d, u), "[]"].join("")] : [...m, [E(d, u), "[]=", E(g, u)].join("")];
      case "colon-list-separator":
        return (d) => (m, g) => g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, [E(d, u), ":list="].join("")] : [...m, [E(d, u), ":list=", E(g, u)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const d = u.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (m) => (g, p) => p === void 0 || u.skipNull && p === null || u.skipEmptyString && p === "" ? g : (p = p === null ? "" : p, g.length === 0 ? [[E(m, u), d, E(p, u)].join("")] : [[g, E(p, u)].join(u.arrayFormatSeparator)]);
      }
      default:
        return (d) => (m, g) => g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, E(d, u)] : [...m, [E(d, u), "=", E(g, u)].join("")];
    }
  }
  function O(u) {
    let d;
    switch (u.arrayFormat) {
      case "index":
        return (m, g, p) => {
          if (d = /\[(\d*)\]$/.exec(m), m = m.replace(/\[\d*\]$/, ""), !d) {
            p[m] = g;
            return;
          }
          p[m] === void 0 && (p[m] = {}), p[m][d[1]] = g;
        };
      case "bracket":
        return (m, g, p) => {
          if (d = /(\[\])$/.exec(m), m = m.replace(/\[\]$/, ""), !d) {
            p[m] = g;
            return;
          }
          if (p[m] === void 0) {
            p[m] = [g];
            return;
          }
          p[m] = [].concat(p[m], g);
        };
      case "colon-list-separator":
        return (m, g, p) => {
          if (d = /(:list)$/.exec(m), m = m.replace(/:list$/, ""), !d) {
            p[m] = g;
            return;
          }
          if (p[m] === void 0) {
            p[m] = [g];
            return;
          }
          p[m] = [].concat(p[m], g);
        };
      case "comma":
      case "separator":
        return (m, g, p) => {
          const N = typeof g == "string" && g.includes(u.arrayFormatSeparator), x = typeof g == "string" && !N && A(g, u).includes(u.arrayFormatSeparator);
          g = x ? A(g, u) : g;
          const Q = N || x ? g.split(u.arrayFormatSeparator).map((se) => A(se, u)) : g === null ? g : A(g, u);
          p[m] = Q;
        };
      case "bracket-separator":
        return (m, g, p) => {
          const N = /(\[\])$/.test(m);
          if (m = m.replace(/\[\]$/, ""), !N) {
            p[m] = g && A(g, u);
            return;
          }
          const x = g === null ? [] : g.split(u.arrayFormatSeparator).map((Q) => A(Q, u));
          if (p[m] === void 0) {
            p[m] = x;
            return;
          }
          p[m] = [].concat(p[m], x);
        };
      default:
        return (m, g, p) => {
          if (p[m] === void 0) {
            p[m] = g;
            return;
          }
          p[m] = [].concat(p[m], g);
        };
    }
  }
  function _(u) {
    if (typeof u != "string" || u.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function E(u, d) {
    return d.encode ? d.strict ? t(u) : encodeURIComponent(u) : u;
  }
  function A(u, d) {
    return d.decode ? r(u) : u;
  }
  function j(u) {
    return Array.isArray(u) ? u.sort() : typeof u == "object" ? j(Object.keys(u)).sort((d, m) => Number(d) - Number(m)).map((d) => u[d]) : u;
  }
  function H(u) {
    const d = u.indexOf("#");
    return d !== -1 && (u = u.slice(0, d)), u;
  }
  function L(u) {
    let d = "";
    const m = u.indexOf("#");
    return m !== -1 && (d = u.slice(m)), d;
  }
  function J(u) {
    u = H(u);
    const d = u.indexOf("?");
    return d === -1 ? "" : u.slice(d + 1);
  }
  function te(u, d) {
    return d.parseNumbers && !Number.isNaN(Number(u)) && typeof u == "string" && u.trim() !== "" ? u = Number(u) : d.parseBooleans && u !== null && (u.toLowerCase() === "true" || u.toLowerCase() === "false") && (u = u.toLowerCase() === "true"), u;
  }
  function ue(u, d) {
    d = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, d), _(d.arrayFormatSeparator);
    const m = O(d), g = /* @__PURE__ */ Object.create(null);
    if (typeof u != "string" || (u = u.trim().replace(/^[?#&]/, ""), !u))
      return g;
    for (const p of u.split("&")) {
      if (p === "")
        continue;
      let [N, x] = s(d.decode ? p.replace(/\+/g, " ") : p, "=");
      x = x === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(d.arrayFormat) ? x : A(x, d), m(A(N, d), x, g);
    }
    for (const p of Object.keys(g)) {
      const N = g[p];
      if (typeof N == "object" && N !== null)
        for (const x of Object.keys(N))
          N[x] = te(N[x], d);
      else
        g[p] = te(N, d);
    }
    return d.sort === !1 ? g : (d.sort === !0 ? Object.keys(g).sort() : Object.keys(g).sort(d.sort)).reduce((p, N) => {
      const x = g[N];
      return x && typeof x == "object" && !Array.isArray(x) ? p[N] = j(x) : p[N] = x, p;
    }, /* @__PURE__ */ Object.create(null));
  }
  n.extract = J, n.parse = ue, n.stringify = (u, d) => {
    if (!u)
      return "";
    d = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, d), _(d.arrayFormatSeparator);
    const m = (x) => d.skipNull && h(u[x]) || d.skipEmptyString && u[x] === "", g = b(d), p = {};
    for (const x of Object.keys(u))
      m(x) || (p[x] = u[x]);
    const N = Object.keys(p);
    return d.sort !== !1 && N.sort(d.sort), N.map((x) => {
      const Q = u[x];
      return Q === void 0 ? "" : Q === null ? E(x, d) : Array.isArray(Q) ? Q.length === 0 && d.arrayFormat === "bracket-separator" ? E(x, d) + "[]" : Q.reduce(g(x), []).join("&") : E(x, d) + "=" + E(Q, d);
    }).filter((x) => x.length > 0).join("&");
  }, n.parseUrl = (u, d) => {
    d = Object.assign({
      decode: !0
    }, d);
    const [m, g] = s(u, "#");
    return Object.assign(
      {
        url: m.split("?")[0] || "",
        query: ue(J(u), d)
      },
      d && d.parseFragmentIdentifier && g ? { fragmentIdentifier: A(g, d) } : {}
    );
  }, n.stringifyUrl = (u, d) => {
    d = Object.assign({
      encode: !0,
      strict: !0,
      [y]: !0
    }, d);
    const m = H(u.url).split("?")[0] || "", g = n.extract(u.url), p = n.parse(g, { sort: !1 }), N = Object.assign(p, u.query);
    let x = n.stringify(N, d);
    x && (x = `?${x}`);
    let Q = L(u.url);
    return u.fragmentIdentifier && (Q = `#${d[y] ? E(u.fragmentIdentifier, d) : u.fragmentIdentifier}`), `${m}${x}${Q}`;
  }, n.pick = (u, d, m) => {
    m = Object.assign({
      parseFragmentIdentifier: !0,
      [y]: !1
    }, m);
    const { url: g, query: p, fragmentIdentifier: N } = n.parseUrl(u, m);
    return n.stringifyUrl({
      url: g,
      query: a(p, d),
      fragmentIdentifier: N
    }, m);
  }, n.exclude = (u, d, m) => {
    const g = Array.isArray(d) ? (p) => !d.includes(p) : (p, N) => !d(p, N);
    return n.pick(u, g, m);
  };
})(eS);
function Fd(n, t) {
  return n.includes(":") ? [n] : t.chains || [];
}
const tS = "base16", rS = "utf8", iS = 1;
function Cc(n) {
  const t = zo.hash(nr(n, rS));
  return Qt(t, tS);
}
const nS = "ReactNative", En = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" };
function Ud() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function sS() {
  return !Kf() && !!Ho() && navigator.product === nS;
}
function du() {
  return !Ud() && !!Ho();
}
function oS() {
  return sS() ? En.reactNative : Ud() ? En.node : du() ? En.browser : En.unknown;
}
function aS() {
  return j1() || { name: "", description: "", url: "", icons: [""] };
}
function Gi(n, t) {
  return n.filter((r) => t.includes(r)).length === n.length;
}
function Xn(n = oe.FIVE_MINUTES, t) {
  const r = oe.toMiliseconds(n || oe.FIVE_MINUTES);
  let s, a, h;
  return { resolve: (y) => {
    h && s && (clearTimeout(h), s(y));
  }, reject: (y) => {
    h && a && (clearTimeout(h), a(y));
  }, done: () => new Promise((y, b) => {
    h = setTimeout(() => {
      b(new Error(t));
    }, r), s = y, a = b;
  }) };
}
function cS(n) {
  const [t, r] = n.split(":"), s = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r == "string")
    s.topic = r;
  else if (t === "id" && Number.isInteger(Number(r)))
    s.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
  return s;
}
function Wi(n, t) {
  return oe.fromMiliseconds((t || Date.now()) + oe.toMiliseconds(n));
}
function bn(n) {
  return Date.now() >= oe.toMiliseconds(n);
}
function kt(n, t) {
  return `${n}${t ? `:${t}` : ""}`;
}
async function uS({ id: n, topic: t, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const s = typeof r == "string" ? JSON.parse(r) : r;
    let a = s == null ? void 0 : s.href;
    if (typeof a != "string")
      return;
    a.endsWith("/") && (a = a.slice(0, -1));
    const h = `${a}/wc?requestId=${n}&sessionTopic=${t}`, y = oS();
    y === En.browser ? h.startsWith("https://") ? window.open(h, "_blank", "noreferrer noopener") : window.open(h, "_self", "noreferrer noopener") : y === En.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(h);
  } catch (s) {
    console.error(s);
  }
}
async function hS(n, t) {
  try {
    return await n.getItem(t) || (du() ? localStorage.getItem(t) : void 0);
  } catch (r) {
    console.error(r);
  }
}
function An(n) {
  const t = [];
  return n.forEach((r) => {
    const [s, a] = r.split(":");
    t.push(`${s}:${a}`);
  }), t;
}
function lS(n) {
  const t = [];
  return Object.values(n).forEach((r) => {
    t.push(...An(r.accounts));
  }), t;
}
function fS(n, t) {
  const r = [];
  return Object.values(n).forEach((s) => {
    An(s.accounts).includes(t) && r.push(...s.methods);
  }), r;
}
function dS(n, t) {
  const r = [];
  return Object.values(n).forEach((s) => {
    An(s.accounts).includes(t) && r.push(...s.events);
  }), r;
}
function pS(n, t) {
  const r = No(n, t);
  if (r)
    throw new Error(r.message);
  const s = {};
  for (const [a, h] of Object.entries(n))
    s[a] = { methods: h.methods, events: h.events, chains: h.accounts.map((y) => `${y.split(":")[0]}:${y.split(":")[1]}`) };
  return s;
}
const gS = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, yS = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function ge(n, t) {
  const { message: r, code: s } = yS[n];
  return { message: t ? `${r} ${t}` : r, code: s };
}
function br(n, t) {
  const { message: r, code: s } = gS[n];
  return { message: t ? `${r} ${t}` : r, code: s };
}
function Jo(n, t) {
  return Array.isArray(n) ? typeof t < "u" && n.length ? n.every(t) : !0 : !1;
}
function as(n) {
  return Object.getPrototypeOf(n) === Object.prototype && Object.keys(n).length;
}
function Rr(n) {
  return typeof n > "u";
}
function Jt(n, t) {
  return t && Rr(n) ? !0 : typeof n == "string" && !!n.trim().length;
}
function pu(n, t) {
  return t && Rr(n) ? !0 : typeof n == "number" && !isNaN(n);
}
function mS(n, t) {
  const { requiredNamespaces: r } = t, s = Object.keys(n.namespaces), a = Object.keys(r);
  let h = !0;
  return Gi(a, s) ? (s.forEach((y) => {
    const { accounts: b, methods: O, events: _ } = n.namespaces[y], E = An(b), A = r[y];
    (!Gi(Fd(y, A), E) || !Gi(A.methods, O) || !Gi(A.events, _)) && (h = !1);
  }), h) : !1;
}
function Do(n) {
  return Jt(n, !1) && n.includes(":") ? n.split(":").length === 2 : !1;
}
function vS(n) {
  if (Jt(n, !1) && n.includes(":")) {
    const t = n.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && Do(r);
    }
  }
  return !1;
}
function wS(n, t) {
  let r = null;
  return Jt(n == null ? void 0 : n.publicKey, !1) || (r = ge("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
}
function _f(n) {
  let t = !0;
  return Jo(n) ? n.length && (t = n.every((r) => Jt(r, !1))) : t = !1, t;
}
function bS(n, t, r) {
  let s = null;
  return Jo(t) && t.length ? t.forEach((a) => {
    s || Do(a) || (s = br("UNSUPPORTED_CHAINS", `${r}, chain ${a} should be a string and conform to "namespace:chainId" format`));
  }) : Do(n) || (s = br("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), s;
}
function _S(n, t, r) {
  let s = null;
  return Object.entries(n).forEach(([a, h]) => {
    if (s)
      return;
    const y = bS(a, Fd(a, h), `${t} ${r}`);
    y && (s = y);
  }), s;
}
function ES(n, t) {
  let r = null;
  return Jo(n) ? n.forEach((s) => {
    r || vS(s) || (r = br("UNSUPPORTED_ACCOUNTS", `${t}, account ${s} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = br("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function IS(n, t) {
  let r = null;
  return Object.values(n).forEach((s) => {
    if (r)
      return;
    const a = ES(s == null ? void 0 : s.accounts, `${t} namespace`);
    a && (r = a);
  }), r;
}
function SS(n, t) {
  let r = null;
  return _f(n == null ? void 0 : n.methods) ? _f(n == null ? void 0 : n.events) || (r = br("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = br("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r;
}
function jd(n, t) {
  let r = null;
  return Object.values(n).forEach((s) => {
    if (r)
      return;
    const a = SS(s, `${t}, namespace`);
    a && (r = a);
  }), r;
}
function xS(n, t, r) {
  let s = null;
  if (n && as(n)) {
    const a = jd(n, t);
    a && (s = a);
    const h = _S(n, t, r);
    h && (s = h);
  } else
    s = ge("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return s;
}
function No(n, t) {
  let r = null;
  if (n && as(n)) {
    const s = jd(n, t);
    s && (r = s);
    const a = IS(n, t);
    a && (r = a);
  } else
    r = ge("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r;
}
function Ld(n) {
  return Jt(n.protocol, !0);
}
function PS(n, t) {
  let r = !1;
  return t && !n ? r = !0 : n && Jo(n) && n.length && n.forEach((s) => {
    r = Ld(s);
  }), r;
}
function OS(n) {
  return typeof n == "number";
}
function Mr(n) {
  return typeof n < "u" && typeof n !== null;
}
function AS(n) {
  return !(!n || typeof n != "object" || !n.code || !pu(n.code, !1) || !n.message || !Jt(n.message, !1));
}
function NS(n) {
  return !(Rr(n) || !Jt(n.method, !1));
}
function TS(n) {
  return !(Rr(n) || Rr(n.result) && Rr(n.error) || !pu(n.id, !1) || !Jt(n.jsonrpc, !1));
}
function RS(n) {
  return !(Rr(n) || !Jt(n.name, !1));
}
function Ef(n, t) {
  return !(!Do(t) || !lS(n).includes(t));
}
function CS(n, t, r) {
  return Jt(r, !1) ? fS(n, t).includes(r) : !1;
}
function $S(n, t, r) {
  return Jt(r, !1) ? dS(n, t).includes(r) : !1;
}
function If(n, t, r) {
  let s = null;
  const a = DS(n), h = FS(t), y = Object.keys(a), b = Object.keys(h), O = Sf(Object.keys(n)), _ = Sf(Object.keys(t)), E = O.filter((A) => !_.includes(A));
  return E.length && (s = ge("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${E.toString()}
      Received: ${Object.keys(t).toString()}`)), Gi(y, b) || (s = ge("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${y.toString()}
      Approved: ${b.toString()}`)), Object.keys(t).forEach((A) => {
    if (!A.includes(":") || s)
      return;
    const j = An(t[A].accounts);
    j.includes(A) || (s = ge("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${A}
        Required: ${A}
        Approved: ${j.toString()}`));
  }), y.forEach((A) => {
    s || (Gi(a[A].methods, h[A].methods) ? Gi(a[A].events, h[A].events) || (s = ge("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${A}`)) : s = ge("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${A}`));
  }), s;
}
function DS(n) {
  const t = {};
  return Object.keys(n).forEach((r) => {
    var s;
    r.includes(":") ? t[r] = n[r] : (s = n[r].chains) == null || s.forEach((a) => {
      t[a] = { methods: n[r].methods, events: n[r].events };
    });
  }), t;
}
function Sf(n) {
  return [...new Set(n.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function FS(n) {
  const t = {};
  return Object.keys(n).forEach((r) => {
    if (r.includes(":"))
      t[r] = n[r];
    else {
      const s = An(n[r].accounts);
      s == null || s.forEach((a) => {
        t[a] = { accounts: n[r].accounts.filter((h) => h.includes(`${a}:`)), methods: n[r].methods, events: n[r].events };
      });
    }
  }), t;
}
function US(n, t) {
  return pu(n, !1) && n <= t.max && n >= t.min;
}
const $c = {};
class _o {
  static get(t) {
    return $c[t];
  }
  static set(t, r) {
    $c[t] = r;
  }
  static delete(t) {
    delete $c[t];
  }
}
const Md = "wc", qd = 2, zd = "client", gu = `${Md}@${qd}:${zd}:`, Dc = { name: zd, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, xf = "WALLETCONNECT_DEEPLINK_CHOICE", jS = "proposal", Hd = "Proposal expired", LS = "session", Eo = oe.SEVEN_DAYS, MS = "engine", Zn = { wc_sessionPropose: { req: { ttl: oe.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: oe.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: oe.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: oe.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: oe.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: oe.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: oe.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: oe.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: oe.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: oe.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: oe.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: oe.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: oe.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: oe.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: oe.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: oe.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Fc = { min: oe.FIVE_MINUTES, max: oe.SEVEN_DAYS }, di = { idle: "IDLE", active: "ACTIVE" }, qS = "request", zS = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var HS = Object.defineProperty, BS = Object.defineProperties, kS = Object.getOwnPropertyDescriptors, Pf = Object.getOwnPropertySymbols, VS = Object.prototype.hasOwnProperty, KS = Object.prototype.propertyIsEnumerable, Of = (n, t, r) => t in n ? HS(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, fr = (n, t) => {
  for (var r in t || (t = {}))
    VS.call(t, r) && Of(n, r, t[r]);
  if (Pf)
    for (var r of Pf(t))
      KS.call(t, r) && Of(n, r, t[r]);
  return n;
}, es = (n, t) => BS(n, kS(t));
class WS extends Xw {
  constructor(t) {
    super(t), this.name = MS, this.events = new ru(), this.initialized = !1, this.ignoredPayloadTypes = [iS], this.requestQueue = { state: di.idle, queue: [] }, this.sessionRequestQueue = { state: di.idle, queue: [] }, this.requestQueueDelay = oe.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(Zn) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, oe.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const s = es(fr({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(s);
      const { pairingTopic: a, requiredNamespaces: h, optionalNamespaces: y, sessionProperties: b, relays: O } = s;
      let _ = a, E, A = !1;
      if (_ && (A = this.client.core.pairing.pairings.get(_).active), !_ || !A) {
        const { topic: d, uri: m } = await this.client.core.pairing.create();
        _ = d, E = m;
      }
      const j = await this.client.core.crypto.generateKeyPair(), H = fr({ requiredNamespaces: h, optionalNamespaces: y, relays: O ?? [{ protocol: Cd }], proposer: { publicKey: j, metadata: this.client.metadata } }, b && { sessionProperties: b }), { reject: L, resolve: J, done: te } = Xn(oe.FIVE_MINUTES, Hd);
      if (this.events.once(kt("session_connect"), async ({ error: d, session: m }) => {
        if (d)
          L(d);
        else if (m) {
          m.self.publicKey = j;
          const g = es(fr({}, m), { requiredNamespaces: m.requiredNamespaces, optionalNamespaces: m.optionalNamespaces });
          await this.client.session.set(m.topic, g), await this.setExpiry(m.topic, m.expiry), _ && await this.client.core.pairing.updateMetadata({ topic: _, metadata: m.peer.metadata }), J(g);
        }
      }), !_) {
        const { message: d } = ge("NO_MATCHING_KEY", `connect() pairing topic: ${_}`);
        throw new Error(d);
      }
      const ue = await this.sendRequest({ topic: _, method: "wc_sessionPropose", params: H }), u = Wi(oe.FIVE_MINUTES);
      return await this.setProposal(ue, fr({ id: ue, expiry: u }, H)), { uri: E, approval: te };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: s, relayProtocol: a, namespaces: h, sessionProperties: y } = r, b = this.client.proposal.get(s);
      let { pairingTopic: O, proposer: _, requiredNamespaces: E, optionalNamespaces: A } = b;
      O = O || "", as(E) || (E = pS(h, "approve()"));
      const j = await this.client.core.crypto.generateKeyPair(), H = _.publicKey, L = await this.client.core.crypto.generateSharedKey(j, H);
      O && s && (await this.client.core.pairing.updateMetadata({ topic: O, metadata: _.metadata }), await this.sendResult({ id: s, topic: O, result: { relay: { protocol: a ?? "irn" }, responderPublicKey: j } }), await this.client.proposal.delete(s, br("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: O }));
      const J = fr({ relay: { protocol: a ?? "irn" }, namespaces: h, requiredNamespaces: E, optionalNamespaces: A, pairingTopic: O, controller: { publicKey: j, metadata: this.client.metadata }, expiry: Wi(Eo) }, y && { sessionProperties: y });
      await this.client.core.relayer.subscribe(L), await this.sendRequest({ topic: L, method: "wc_sessionSettle", params: J, throwOnFailedPublish: !0 });
      const te = es(fr({}, J), { topic: L, pairingTopic: O, acknowledged: !1, self: J.controller, peer: { publicKey: _.publicKey, metadata: _.metadata }, controller: j });
      return await this.client.session.set(L, te), await this.setExpiry(L, Wi(Eo)), { topic: L, acknowledged: () => new Promise((ue) => setTimeout(() => ue(this.client.session.get(L)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: s, reason: a } = r, { pairingTopic: h } = this.client.proposal.get(s);
      h && (await this.sendError(s, h, a), await this.client.proposal.delete(s, br("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: s, namespaces: a } = r, h = await this.sendRequest({ topic: s, method: "wc_sessionUpdate", params: { namespaces: a } }), { done: y, resolve: b, reject: O } = Xn();
      return this.events.once(kt("session_update", h), ({ error: _ }) => {
        _ ? O(_) : b();
      }), await this.client.session.update(s, { namespaces: a }), { acknowledged: y };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: s } = r, a = await this.sendRequest({ topic: s, method: "wc_sessionExtend", params: {} }), { done: h, resolve: y, reject: b } = Xn();
      return this.events.once(kt("session_extend", a), ({ error: O }) => {
        O ? b(O) : y();
      }), await this.setExpiry(s, Wi(Eo)), { acknowledged: h };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: s, request: a, topic: h, expiry: y } = r, b = uu(), { done: O, resolve: _, reject: E } = Xn(y, "Request expired. Please try again.");
      return this.events.once(kt("session_request", b), ({ error: A, result: j }) => {
        A ? E(A) : _(j);
      }), await Promise.all([new Promise(async (A) => {
        await this.sendRequest({ clientRpcId: b, topic: h, method: "wc_sessionRequest", params: { request: a, chainId: s }, expiry: y, throwOnFailedPublish: !0 }).catch((j) => E(j)), this.client.events.emit("session_request_sent", { topic: h, request: a, chainId: s, id: b }), A();
      }), new Promise(async (A) => {
        const j = await hS(this.client.core.storage, xf);
        uS({ id: b, topic: h, wcDeepLink: j }), A();
      }), O()]).then((A) => A[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: s, response: a } = r, { id: h } = a;
      pi(a) ? await this.sendResult({ id: h, topic: s, result: a.result, throwOnFailedPublish: !0 }) : zr(a) && await this.sendError(h, s, a.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: s } = r;
      if (this.client.session.keys.includes(s)) {
        const a = await this.sendRequest({ topic: s, method: "wc_sessionPing", params: {} }), { done: h, resolve: y, reject: b } = Xn();
        this.events.once(kt("session_ping", a), ({ error: O }) => {
          O ? b(O) : y();
        }), await h();
      } else
        this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({ topic: s });
    }, this.emit = async (r) => {
      await this.isInitialized(), await this.isValidEmit(r);
      const { topic: s, event: a, chainId: h } = r;
      await this.sendRequest({ topic: s, method: "wc_sessionEvent", params: { event: a, chainId: h } });
    }, this.disconnect = async (r) => {
      await this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: s } = r;
      this.client.session.keys.includes(s) ? (await this.sendRequest({ topic: s, method: "wc_sessionDelete", params: br("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(s)) : await this.client.core.pairing.disconnect({ topic: s });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((s) => mS(s, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const s = this.client.core.pairing.pairings.get(r.pairingTopic), a = this.client.core.pairing.pairings.getAll().filter((h) => {
            var y, b;
            return ((y = h.peerMetadata) == null ? void 0 : y.url) && ((b = h.peerMetadata) == null ? void 0 : b.url) === r.peer.metadata.url && h.topic && h.topic !== s.topic;
          });
          if (a.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${a.length} duplicate pairing(s)`), await Promise.all(a.map((h) => this.client.core.pairing.disconnect({ topic: h.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (s) {
          this.client.logger.error(s);
        }
    }, this.deleteSession = async (r, s) => {
      const { self: a } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, br("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(a.publicKey) && await this.client.core.crypto.deleteKeyPair(a.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), s || this.client.core.expirer.del(r), this.client.core.storage.removeItem(xf).catch((h) => this.client.logger.warn(h));
    }, this.deleteProposal = async (r, s) => {
      await Promise.all([this.client.proposal.delete(r, br("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, s, a = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, s), a ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((h) => h.id !== r), a && (this.sessionRequestQueue.state = di.idle);
    }, this.setExpiry = async (r, s) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: s }), this.client.core.expirer.set(r, s);
    }, this.setProposal = async (r, s) => {
      await this.client.proposal.set(r, s), this.client.core.expirer.set(r, s.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const s = Zn.wc_sessionRequest.req.ttl, { id: a, topic: h, params: y, verifyContext: b } = r;
      await this.client.pendingRequest.set(a, { id: a, topic: h, params: y, verifyContext: b }), s && this.client.core.expirer.set(a, Wi(s));
    }, this.sendRequest = async (r) => {
      const { topic: s, method: a, params: h, expiry: y, relayRpcId: b, clientRpcId: O, throwOnFailedPublish: _ } = r, E = In(a, h, O);
      if (du() && zS.includes(a)) {
        const H = Cc(JSON.stringify(E));
        this.client.core.verify.register({ attestationId: H });
      }
      const A = await this.client.core.crypto.encode(s, E), j = Zn[a].req;
      return y && (j.ttl = y), b && (j.id = b), this.client.core.history.set(s, E), _ ? (j.internal = es(fr({}, j.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, A, j)) : this.client.core.relayer.publish(s, A, j).catch((H) => this.client.logger.error(H)), E.id;
    }, this.sendResult = async (r) => {
      const { id: s, topic: a, result: h, throwOnFailedPublish: y } = r, b = hu(s, h), O = await this.client.core.crypto.encode(a, b), _ = await this.client.core.history.get(a, s), E = Zn[_.request.method].res;
      y ? (E.internal = es(fr({}, E.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(a, O, E)) : this.client.core.relayer.publish(a, O, E).catch((A) => this.client.logger.error(A)), await this.client.core.history.resolve(b);
    }, this.sendError = async (r, s, a) => {
      const h = Vo(r, a), y = await this.client.core.crypto.encode(s, h), b = await this.client.core.history.get(s, r), O = Zn[b.request.method].res;
      this.client.core.relayer.publish(s, y, O), await this.client.core.history.resolve(h);
    }, this.cleanup = async () => {
      const r = [], s = [];
      this.client.session.getAll().forEach((a) => {
        bn(a.expiry) && r.push(a.topic);
      }), this.client.proposal.getAll().forEach((a) => {
        bn(a.expiry) && s.push(a.id);
      }), await Promise.all([...r.map((a) => this.deleteSession(a)), ...s.map((a) => this.deleteProposal(a))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === di.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = di.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((s) => setTimeout(s, 300));
          } catch (s) {
            this.client.logger.warn(s);
          }
      }
      this.requestQueue.state = di.idle;
    }, this.processRequest = (r) => {
      const { topic: s, payload: a } = r, h = a.method;
      switch (h) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(s, a);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(s, a);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(s, a);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(s, a);
        case "wc_sessionPing":
          return this.onSessionPingRequest(s, a);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(s, a);
        case "wc_sessionRequest":
          return this.onSessionRequest(s, a);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(s, a);
        default:
          return this.client.logger.info(`Unsupported request method ${h}`);
      }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: s, payload: a } = r, h = (await this.client.core.history.get(s, a.id)).request.method;
      switch (h) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s, a);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s, a);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s, a);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s, a);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s, a);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s, a);
        default:
          return this.client.logger.info(`Unsupported response method ${h}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: s } = r, { message: a } = ge("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(a);
    }, this.onSessionProposeRequest = async (r, s) => {
      const { params: a, id: h } = s;
      try {
        this.isValidConnect(fr({}, s.params));
        const y = Wi(oe.FIVE_MINUTES), b = fr({ id: h, pairingTopic: r, expiry: y }, a);
        await this.setProposal(h, b);
        const O = Cc(JSON.stringify(s)), _ = await this.getVerifyContext(O, b.proposer.metadata);
        this.client.events.emit("session_proposal", { id: h, params: b, verifyContext: _ });
      } catch (y) {
        await this.sendError(h, r, y), this.client.logger.error(y);
      }
    }, this.onSessionProposeResponse = async (r, s) => {
      const { id: a } = s;
      if (pi(s)) {
        const { result: h } = s;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: h });
        const y = this.client.proposal.get(a);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: y });
        const b = y.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: b });
        const O = h.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: O });
        const _ = await this.client.core.crypto.generateSharedKey(b, O);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: _ });
        const E = await this.client.core.relayer.subscribe(_);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: E }), await this.client.core.pairing.activate({ topic: r });
      } else
        zr(s) && (await this.client.proposal.delete(a, br("USER_DISCONNECTED")), this.events.emit(kt("session_connect"), { error: s.error }));
    }, this.onSessionSettleRequest = async (r, s) => {
      const { id: a, params: h } = s;
      try {
        this.isValidSessionSettleRequest(h);
        const { relay: y, controller: b, expiry: O, namespaces: _, requiredNamespaces: E, optionalNamespaces: A, sessionProperties: j, pairingTopic: H } = s.params, L = fr({ topic: r, relay: y, expiry: O, namespaces: _, acknowledged: !0, pairingTopic: H, requiredNamespaces: E, optionalNamespaces: A, controller: b.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: b.publicKey, metadata: b.metadata } }, j && { sessionProperties: j });
        await this.sendResult({ id: s.id, topic: r, result: !0 }), this.events.emit(kt("session_connect"), { session: L }), this.cleanupDuplicatePairings(L);
      } catch (y) {
        await this.sendError(a, r, y), this.client.logger.error(y);
      }
    }, this.onSessionSettleResponse = async (r, s) => {
      const { id: a } = s;
      pi(s) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(kt("session_approve", a), {})) : zr(s) && (await this.client.session.delete(r, br("USER_DISCONNECTED")), this.events.emit(kt("session_approve", a), { error: s.error }));
    }, this.onSessionUpdateRequest = async (r, s) => {
      const { params: a, id: h } = s;
      try {
        const y = `${r}_session_update`, b = _o.get(y);
        if (b && this.isRequestOutOfSync(b, h)) {
          this.client.logger.info(`Discarding out of sync request - ${h}`);
          return;
        }
        this.isValidUpdate(fr({ topic: r }, a)), await this.client.session.update(r, { namespaces: a.namespaces }), await this.sendResult({ id: h, topic: r, result: !0 }), this.client.events.emit("session_update", { id: h, topic: r, params: a }), _o.set(y, h);
      } catch (y) {
        await this.sendError(h, r, y), this.client.logger.error(y);
      }
    }, this.isRequestOutOfSync = (r, s) => parseInt(s.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, s) => {
      const { id: a } = s;
      pi(s) ? this.events.emit(kt("session_update", a), {}) : zr(s) && this.events.emit(kt("session_update", a), { error: s.error });
    }, this.onSessionExtendRequest = async (r, s) => {
      const { id: a } = s;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Wi(Eo)), await this.sendResult({ id: a, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: a, topic: r });
      } catch (h) {
        await this.sendError(a, r, h), this.client.logger.error(h);
      }
    }, this.onSessionExtendResponse = (r, s) => {
      const { id: a } = s;
      pi(s) ? this.events.emit(kt("session_extend", a), {}) : zr(s) && this.events.emit(kt("session_extend", a), { error: s.error });
    }, this.onSessionPingRequest = async (r, s) => {
      const { id: a } = s;
      try {
        this.isValidPing({ topic: r }), await this.sendResult({ id: a, topic: r, result: !0 }), this.client.events.emit("session_ping", { id: a, topic: r });
      } catch (h) {
        await this.sendError(a, r, h), this.client.logger.error(h);
      }
    }, this.onSessionPingResponse = (r, s) => {
      const { id: a } = s;
      setTimeout(() => {
        pi(s) ? this.events.emit(kt("session_ping", a), {}) : zr(s) && this.events.emit(kt("session_ping", a), { error: s.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, s) => {
      const { id: a } = s;
      try {
        this.isValidDisconnect({ topic: r, reason: s.params }), await Promise.all([new Promise((h) => {
          this.client.core.relayer.once(Gt.publish, async () => {
            h(await this.deleteSession(r));
          });
        }), this.sendResult({ id: a, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: a, topic: r });
      } catch (h) {
        this.client.logger.error(h);
      }
    }, this.onSessionRequest = async (r, s) => {
      const { id: a, params: h } = s;
      try {
        this.isValidRequest(fr({ topic: r }, h));
        const y = Cc(JSON.stringify(In("wc_sessionRequest", h, a))), b = this.client.session.get(r), O = await this.getVerifyContext(y, b.peer.metadata), _ = { id: a, topic: r, params: h, verifyContext: O };
        await this.setPendingSessionRequest(_), this.addSessionRequestToSessionRequestQueue(_), this.processSessionRequestQueue();
      } catch (y) {
        await this.sendError(a, r, y), this.client.logger.error(y);
      }
    }, this.onSessionRequestResponse = (r, s) => {
      const { id: a } = s;
      pi(s) ? this.events.emit(kt("session_request", a), { result: s.result }) : zr(s) && this.events.emit(kt("session_request", a), { error: s.error });
    }, this.onSessionEventRequest = async (r, s) => {
      const { id: a, params: h } = s;
      try {
        const y = `${r}_session_event_${h.event.name}`, b = _o.get(y);
        if (b && this.isRequestOutOfSync(b, a)) {
          this.client.logger.info(`Discarding out of sync request - ${a}`);
          return;
        }
        this.isValidEmit(fr({ topic: r }, h)), this.client.events.emit("session_event", { id: a, topic: r, params: h }), _o.set(y, a);
      } catch (y) {
        await this.sendError(a, r, y), this.client.logger.error(y);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = di.idle, this.processSessionRequestQueue();
      }, oe.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === di.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = di.active, this.client.events.emit("session_request", r);
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onPairingCreated = (r) => {
      if (r.active)
        return;
      const s = this.client.proposal.getAll().find((a) => a.pairingTopic === r.topic);
      s && this.onSessionProposeRequest(r.topic, In("wc_sessionPropose", { requiredNamespaces: s.requiredNamespaces, optionalNamespaces: s.optionalNamespaces, relays: s.relays, proposer: s.proposer, sessionProperties: s.sessionProperties }, s.id));
    }, this.isValidConnect = async (r) => {
      if (!Mr(r)) {
        const { message: O } = ge("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(O);
      }
      const { pairingTopic: s, requiredNamespaces: a, optionalNamespaces: h, sessionProperties: y, relays: b } = r;
      if (Rr(s) || await this.isValidPairingTopic(s), !PS(b, !0)) {
        const { message: O } = ge("MISSING_OR_INVALID", `connect() relays: ${b}`);
        throw new Error(O);
      }
      !Rr(a) && as(a) !== 0 && this.validateNamespaces(a, "requiredNamespaces"), !Rr(h) && as(h) !== 0 && this.validateNamespaces(h, "optionalNamespaces"), Rr(y) || this.validateSessionProps(y, "sessionProperties");
    }, this.validateNamespaces = (r, s) => {
      const a = xS(r, "connect()", s);
      if (a)
        throw new Error(a.message);
    }, this.isValidApprove = async (r) => {
      if (!Mr(r))
        throw new Error(ge("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: s, namespaces: a, relayProtocol: h, sessionProperties: y } = r;
      await this.isValidProposalId(s);
      const b = this.client.proposal.get(s), O = No(a, "approve()");
      if (O)
        throw new Error(O.message);
      const _ = If(b.requiredNamespaces, a, "approve()");
      if (_)
        throw new Error(_.message);
      if (!Jt(h, !0)) {
        const { message: E } = ge("MISSING_OR_INVALID", `approve() relayProtocol: ${h}`);
        throw new Error(E);
      }
      Rr(y) || this.validateSessionProps(y, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!Mr(r)) {
        const { message: h } = ge("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(h);
      }
      const { id: s, reason: a } = r;
      if (await this.isValidProposalId(s), !AS(a)) {
        const { message: h } = ge("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(a)}`);
        throw new Error(h);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!Mr(r)) {
        const { message: _ } = ge("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(_);
      }
      const { relay: s, controller: a, namespaces: h, expiry: y } = r;
      if (!Ld(s)) {
        const { message: _ } = ge("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(_);
      }
      const b = wS(a, "onSessionSettleRequest()");
      if (b)
        throw new Error(b.message);
      const O = No(h, "onSessionSettleRequest()");
      if (O)
        throw new Error(O.message);
      if (bn(y)) {
        const { message: _ } = ge("EXPIRED", "onSessionSettleRequest()");
        throw new Error(_);
      }
    }, this.isValidUpdate = async (r) => {
      if (!Mr(r)) {
        const { message: O } = ge("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(O);
      }
      const { topic: s, namespaces: a } = r;
      await this.isValidSessionTopic(s);
      const h = this.client.session.get(s), y = No(a, "update()");
      if (y)
        throw new Error(y.message);
      const b = If(h.requiredNamespaces, a, "update()");
      if (b)
        throw new Error(b.message);
    }, this.isValidExtend = async (r) => {
      if (!Mr(r)) {
        const { message: a } = ge("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s } = r;
      await this.isValidSessionTopic(s);
    }, this.isValidRequest = async (r) => {
      if (!Mr(r)) {
        const { message: O } = ge("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(O);
      }
      const { topic: s, request: a, chainId: h, expiry: y } = r;
      await this.isValidSessionTopic(s);
      const { namespaces: b } = this.client.session.get(s);
      if (!Ef(b, h)) {
        const { message: O } = ge("MISSING_OR_INVALID", `request() chainId: ${h}`);
        throw new Error(O);
      }
      if (!NS(a)) {
        const { message: O } = ge("MISSING_OR_INVALID", `request() ${JSON.stringify(a)}`);
        throw new Error(O);
      }
      if (!CS(b, h, a.method)) {
        const { message: O } = ge("MISSING_OR_INVALID", `request() method: ${a.method}`);
        throw new Error(O);
      }
      if (y && !US(y, Fc)) {
        const { message: O } = ge("MISSING_OR_INVALID", `request() expiry: ${y}. Expiry must be a number (in seconds) between ${Fc.min} and ${Fc.max}`);
        throw new Error(O);
      }
    }, this.isValidRespond = async (r) => {
      if (!Mr(r)) {
        const { message: h } = ge("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(h);
      }
      const { topic: s, response: a } = r;
      if (await this.isValidSessionTopic(s), !TS(a)) {
        const { message: h } = ge("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(a)}`);
        throw new Error(h);
      }
    }, this.isValidPing = async (r) => {
      if (!Mr(r)) {
        const { message: a } = ge("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s } = r;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidEmit = async (r) => {
      if (!Mr(r)) {
        const { message: b } = ge("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(b);
      }
      const { topic: s, event: a, chainId: h } = r;
      await this.isValidSessionTopic(s);
      const { namespaces: y } = this.client.session.get(s);
      if (!Ef(y, h)) {
        const { message: b } = ge("MISSING_OR_INVALID", `emit() chainId: ${h}`);
        throw new Error(b);
      }
      if (!RS(a)) {
        const { message: b } = ge("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
        throw new Error(b);
      }
      if (!$S(y, h, a.name)) {
        const { message: b } = ge("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
        throw new Error(b);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!Mr(r)) {
        const { message: a } = ge("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s } = r;
      await this.isValidSessionOrPairingTopic(s);
    }, this.getVerifyContext = async (r, s) => {
      const a = { verified: { verifyUrl: s.verifyUrl || _n, validation: "UNKNOWN", origin: s.url || "" } };
      try {
        const h = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: s.verifyUrl });
        h && (a.verified.origin = h.origin, a.verified.isScam = h.isScam, a.verified.validation = h.origin === new URL(s.url).origin ? "VALID" : "INVALID");
      } catch (h) {
        this.client.logger.info(h);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(a)}`), a;
    }, this.validateSessionProps = (r, s) => {
      Object.values(r).forEach((a) => {
        if (!Jt(a, !1)) {
          const { message: h } = ge("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(a)}`);
          throw new Error(h);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: t } = ge("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Gt.message, async (t) => {
      const { topic: r, message: s } = t;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s)))
        return;
      const a = await this.client.core.crypto.decode(r, s);
      try {
        lu(a) ? (this.client.core.history.set(r, a), this.onRelayEventRequest({ topic: r, payload: a })) : Ko(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({ topic: r, payload: a }), this.client.core.history.delete(r, a.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: a });
      } catch (h) {
        this.client.logger.error(h);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Tr.expired, async (t) => {
      const { topic: r, id: s } = cS(t.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, ge("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : s && (await this.deleteProposal(s, !0), this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(is.create, (t) => this.onPairingCreated(t));
  }
  isValidPairingTopic(t) {
    if (!Jt(t, !1)) {
      const { message: r } = ge("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: r } = ge("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (bn(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: r } = ge("EXPIRED", `pairing topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(t) {
    if (!Jt(t, !1)) {
      const { message: r } = ge("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(t)) {
      const { message: r } = ge("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (bn(this.client.session.get(t).expiry)) {
      await this.deleteSession(t);
      const { message: r } = ge("EXPIRED", `session topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(t) {
    if (this.client.session.keys.includes(t))
      await this.isValidSessionTopic(t);
    else if (this.client.core.pairing.pairings.keys.includes(t))
      this.isValidPairingTopic(t);
    else if (Jt(t, !1)) {
      const { message: r } = ge("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    } else {
      const { message: r } = ge("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(t) {
    if (!OS(t)) {
      const { message: r } = ge("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = ge("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (bn(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = ge("EXPIRED", `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class GS extends Go {
  constructor(t, r) {
    super(t, r, jS, gu), this.core = t, this.logger = r;
  }
}
class JS extends Go {
  constructor(t, r) {
    super(t, r, LS, gu), this.core = t, this.logger = r;
  }
}
class QS extends Go {
  constructor(t, r) {
    super(t, r, qS, gu, (s) => s.id), this.core = t, this.logger = r;
  }
}
let YS = class Bd extends Yw {
  constructor(t) {
    super(t), this.protocol = Md, this.version = qd, this.name = Dc.name, this.events = new Cr.EventEmitter(), this.on = (s, a) => this.events.on(s, a), this.once = (s, a) => this.events.once(s, a), this.off = (s, a) => this.events.off(s, a), this.removeListener = (s, a) => this.events.removeListener(s, a), this.removeAllListeners = (s) => this.events.removeAllListeners(s), this.connect = async (s) => {
      try {
        return await this.engine.connect(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.pair = async (s) => {
      try {
        return await this.engine.pair(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.approve = async (s) => {
      try {
        return await this.engine.approve(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.reject = async (s) => {
      try {
        return await this.engine.reject(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.update = async (s) => {
      try {
        return await this.engine.update(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.extend = async (s) => {
      try {
        return await this.engine.extend(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.request = async (s) => {
      try {
        return await this.engine.request(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.respond = async (s) => {
      try {
        return await this.engine.respond(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.ping = async (s) => {
      try {
        return await this.engine.ping(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.emit = async (s) => {
      try {
        return await this.engine.emit(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.disconnect = async (s) => {
      try {
        return await this.engine.disconnect(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.find = (s) => {
      try {
        return this.engine.find(s);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.name = (t == null ? void 0 : t.name) || Dc.name, this.metadata = (t == null ? void 0 : t.metadata) || aS();
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Te.pino(Te.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || Dc.logger }));
    this.core = (t == null ? void 0 : t.core) || new ZI(t), this.logger = Te.generateChildLogger(r, this.name), this.session = new JS(this.core, this.logger), this.proposal = new GS(this.core, this.logger), this.pendingRequest = new QS(this.core, this.logger), this.engine = new WS(this);
  }
  static async init(t) {
    const r = new Bd(t);
    return await r.initialize(), r;
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (t) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t;
    }
  }
};
var XS = {};
(function(n) {
  const t = Lo, r = Mo, s = Uo, a = jo, h = (u) => u == null, y = Symbol("encodeFragmentIdentifier");
  function b(u) {
    switch (u.arrayFormat) {
      case "index":
        return (d) => (m, g) => {
          const p = m.length;
          return g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, [E(d, u), "[", p, "]"].join("")] : [
            ...m,
            [E(d, u), "[", E(p, u), "]=", E(g, u)].join("")
          ];
        };
      case "bracket":
        return (d) => (m, g) => g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, [E(d, u), "[]"].join("")] : [...m, [E(d, u), "[]=", E(g, u)].join("")];
      case "colon-list-separator":
        return (d) => (m, g) => g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, [E(d, u), ":list="].join("")] : [...m, [E(d, u), ":list=", E(g, u)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const d = u.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (m) => (g, p) => p === void 0 || u.skipNull && p === null || u.skipEmptyString && p === "" ? g : (p = p === null ? "" : p, g.length === 0 ? [[E(m, u), d, E(p, u)].join("")] : [[g, E(p, u)].join(u.arrayFormatSeparator)]);
      }
      default:
        return (d) => (m, g) => g === void 0 || u.skipNull && g === null || u.skipEmptyString && g === "" ? m : g === null ? [...m, E(d, u)] : [...m, [E(d, u), "=", E(g, u)].join("")];
    }
  }
  function O(u) {
    let d;
    switch (u.arrayFormat) {
      case "index":
        return (m, g, p) => {
          if (d = /\[(\d*)\]$/.exec(m), m = m.replace(/\[\d*\]$/, ""), !d) {
            p[m] = g;
            return;
          }
          p[m] === void 0 && (p[m] = {}), p[m][d[1]] = g;
        };
      case "bracket":
        return (m, g, p) => {
          if (d = /(\[\])$/.exec(m), m = m.replace(/\[\]$/, ""), !d) {
            p[m] = g;
            return;
          }
          if (p[m] === void 0) {
            p[m] = [g];
            return;
          }
          p[m] = [].concat(p[m], g);
        };
      case "colon-list-separator":
        return (m, g, p) => {
          if (d = /(:list)$/.exec(m), m = m.replace(/:list$/, ""), !d) {
            p[m] = g;
            return;
          }
          if (p[m] === void 0) {
            p[m] = [g];
            return;
          }
          p[m] = [].concat(p[m], g);
        };
      case "comma":
      case "separator":
        return (m, g, p) => {
          const N = typeof g == "string" && g.includes(u.arrayFormatSeparator), x = typeof g == "string" && !N && A(g, u).includes(u.arrayFormatSeparator);
          g = x ? A(g, u) : g;
          const Q = N || x ? g.split(u.arrayFormatSeparator).map((se) => A(se, u)) : g === null ? g : A(g, u);
          p[m] = Q;
        };
      case "bracket-separator":
        return (m, g, p) => {
          const N = /(\[\])$/.test(m);
          if (m = m.replace(/\[\]$/, ""), !N) {
            p[m] = g && A(g, u);
            return;
          }
          const x = g === null ? [] : g.split(u.arrayFormatSeparator).map((Q) => A(Q, u));
          if (p[m] === void 0) {
            p[m] = x;
            return;
          }
          p[m] = [].concat(p[m], x);
        };
      default:
        return (m, g, p) => {
          if (p[m] === void 0) {
            p[m] = g;
            return;
          }
          p[m] = [].concat(p[m], g);
        };
    }
  }
  function _(u) {
    if (typeof u != "string" || u.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function E(u, d) {
    return d.encode ? d.strict ? t(u) : encodeURIComponent(u) : u;
  }
  function A(u, d) {
    return d.decode ? r(u) : u;
  }
  function j(u) {
    return Array.isArray(u) ? u.sort() : typeof u == "object" ? j(Object.keys(u)).sort((d, m) => Number(d) - Number(m)).map((d) => u[d]) : u;
  }
  function H(u) {
    const d = u.indexOf("#");
    return d !== -1 && (u = u.slice(0, d)), u;
  }
  function L(u) {
    let d = "";
    const m = u.indexOf("#");
    return m !== -1 && (d = u.slice(m)), d;
  }
  function J(u) {
    u = H(u);
    const d = u.indexOf("?");
    return d === -1 ? "" : u.slice(d + 1);
  }
  function te(u, d) {
    return d.parseNumbers && !Number.isNaN(Number(u)) && typeof u == "string" && u.trim() !== "" ? u = Number(u) : d.parseBooleans && u !== null && (u.toLowerCase() === "true" || u.toLowerCase() === "false") && (u = u.toLowerCase() === "true"), u;
  }
  function ue(u, d) {
    d = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, d), _(d.arrayFormatSeparator);
    const m = O(d), g = /* @__PURE__ */ Object.create(null);
    if (typeof u != "string" || (u = u.trim().replace(/^[?#&]/, ""), !u))
      return g;
    for (const p of u.split("&")) {
      if (p === "")
        continue;
      let [N, x] = s(d.decode ? p.replace(/\+/g, " ") : p, "=");
      x = x === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(d.arrayFormat) ? x : A(x, d), m(A(N, d), x, g);
    }
    for (const p of Object.keys(g)) {
      const N = g[p];
      if (typeof N == "object" && N !== null)
        for (const x of Object.keys(N))
          N[x] = te(N[x], d);
      else
        g[p] = te(N, d);
    }
    return d.sort === !1 ? g : (d.sort === !0 ? Object.keys(g).sort() : Object.keys(g).sort(d.sort)).reduce((p, N) => {
      const x = g[N];
      return x && typeof x == "object" && !Array.isArray(x) ? p[N] = j(x) : p[N] = x, p;
    }, /* @__PURE__ */ Object.create(null));
  }
  n.extract = J, n.parse = ue, n.stringify = (u, d) => {
    if (!u)
      return "";
    d = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, d), _(d.arrayFormatSeparator);
    const m = (x) => d.skipNull && h(u[x]) || d.skipEmptyString && u[x] === "", g = b(d), p = {};
    for (const x of Object.keys(u))
      m(x) || (p[x] = u[x]);
    const N = Object.keys(p);
    return d.sort !== !1 && N.sort(d.sort), N.map((x) => {
      const Q = u[x];
      return Q === void 0 ? "" : Q === null ? E(x, d) : Array.isArray(Q) ? Q.length === 0 && d.arrayFormat === "bracket-separator" ? E(x, d) + "[]" : Q.reduce(g(x), []).join("&") : E(x, d) + "=" + E(Q, d);
    }).filter((x) => x.length > 0).join("&");
  }, n.parseUrl = (u, d) => {
    d = Object.assign({
      decode: !0
    }, d);
    const [m, g] = s(u, "#");
    return Object.assign(
      {
        url: m.split("?")[0] || "",
        query: ue(J(u), d)
      },
      d && d.parseFragmentIdentifier && g ? { fragmentIdentifier: A(g, d) } : {}
    );
  }, n.stringifyUrl = (u, d) => {
    d = Object.assign({
      encode: !0,
      strict: !0,
      [y]: !0
    }, d);
    const m = H(u.url).split("?")[0] || "", g = n.extract(u.url), p = n.parse(g, { sort: !1 }), N = Object.assign(p, u.query);
    let x = n.stringify(N, d);
    x && (x = `?${x}`);
    let Q = L(u.url);
    return u.fragmentIdentifier && (Q = `#${d[y] ? E(u.fragmentIdentifier, d) : u.fragmentIdentifier}`), `${m}${x}${Q}`;
  }, n.pick = (u, d, m) => {
    m = Object.assign({
      parseFragmentIdentifier: !0,
      [y]: !1
    }, m);
    const { url: g, query: p, fragmentIdentifier: N } = n.parseUrl(u, m);
    return n.stringifyUrl({
      url: g,
      query: a(p, d),
      fragmentIdentifier: N
    }, m);
  }, n.exclude = (u, d, m) => {
    const g = Array.isArray(d) ? (p) => !d.includes(p) : (p, N) => !d(p, N);
    return n.pick(u, g, m);
  };
})(XS);
const ZS = ":";
function ex(n) {
  const [t, r] = n.split(ZS);
  return { namespace: t, reference: r };
}
function Uc(n = [], t = []) {
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function yu(n) {
  return n.includes(":");
}
function ns(n) {
  return yu(n) ? n.split(":")[0] : n;
}
const tx = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function Af(n, t) {
  const { message: r, code: s } = tx[n];
  return { message: t ? `${r} ${t}` : r, code: s };
}
function Nf(n, t) {
  return Array.isArray(n) ? typeof t < "u" && n.length ? n.every(t) : !0 : !1;
}
function rx(n) {
  return Object.getPrototypeOf(n) === Object.prototype && Object.keys(n).length;
}
var Xc = { exports: {} };
(function(n, t) {
  var r = typeof self < "u" ? self : Hr, s = function() {
    function h() {
      this.fetch = !1, this.DOMException = r.DOMException;
    }
    return h.prototype = r, new h();
  }();
  (function(h) {
    (function(y) {
      var b = {
        searchParams: "URLSearchParams" in h,
        iterable: "Symbol" in h && "iterator" in Symbol,
        blob: "FileReader" in h && "Blob" in h && function() {
          try {
            return new Blob(), !0;
          } catch {
            return !1;
          }
        }(),
        formData: "FormData" in h,
        arrayBuffer: "ArrayBuffer" in h
      };
      function O(S) {
        return S && DataView.prototype.isPrototypeOf(S);
      }
      if (b.arrayBuffer)
        var _ = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ], E = ArrayBuffer.isView || function(S) {
          return S && _.indexOf(Object.prototype.toString.call(S)) > -1;
        };
      function A(S) {
        if (typeof S != "string" && (S = String(S)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(S))
          throw new TypeError("Invalid character in header field name");
        return S.toLowerCase();
      }
      function j(S) {
        return typeof S != "string" && (S = String(S)), S;
      }
      function H(S) {
        var C = {
          next: function() {
            var ie = S.shift();
            return { done: ie === void 0, value: ie };
          }
        };
        return b.iterable && (C[Symbol.iterator] = function() {
          return C;
        }), C;
      }
      function L(S) {
        this.map = {}, S instanceof L ? S.forEach(function(C, ie) {
          this.append(ie, C);
        }, this) : Array.isArray(S) ? S.forEach(function(C) {
          this.append(C[0], C[1]);
        }, this) : S && Object.getOwnPropertyNames(S).forEach(function(C) {
          this.append(C, S[C]);
        }, this);
      }
      L.prototype.append = function(S, C) {
        S = A(S), C = j(C);
        var ie = this.map[S];
        this.map[S] = ie ? ie + ", " + C : C;
      }, L.prototype.delete = function(S) {
        delete this.map[A(S)];
      }, L.prototype.get = function(S) {
        return S = A(S), this.has(S) ? this.map[S] : null;
      }, L.prototype.has = function(S) {
        return this.map.hasOwnProperty(A(S));
      }, L.prototype.set = function(S, C) {
        this.map[A(S)] = j(C);
      }, L.prototype.forEach = function(S, C) {
        for (var ie in this.map)
          this.map.hasOwnProperty(ie) && S.call(C, this.map[ie], ie, this);
      }, L.prototype.keys = function() {
        var S = [];
        return this.forEach(function(C, ie) {
          S.push(ie);
        }), H(S);
      }, L.prototype.values = function() {
        var S = [];
        return this.forEach(function(C) {
          S.push(C);
        }), H(S);
      }, L.prototype.entries = function() {
        var S = [];
        return this.forEach(function(C, ie) {
          S.push([ie, C]);
        }), H(S);
      }, b.iterable && (L.prototype[Symbol.iterator] = L.prototype.entries);
      function J(S) {
        if (S.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        S.bodyUsed = !0;
      }
      function te(S) {
        return new Promise(function(C, ie) {
          S.onload = function() {
            C(S.result);
          }, S.onerror = function() {
            ie(S.error);
          };
        });
      }
      function ue(S) {
        var C = new FileReader(), ie = te(C);
        return C.readAsArrayBuffer(S), ie;
      }
      function u(S) {
        var C = new FileReader(), ie = te(C);
        return C.readAsText(S), ie;
      }
      function d(S) {
        for (var C = new Uint8Array(S), ie = new Array(C.length), de = 0; de < C.length; de++)
          ie[de] = String.fromCharCode(C[de]);
        return ie.join("");
      }
      function m(S) {
        if (S.slice)
          return S.slice(0);
        var C = new Uint8Array(S.byteLength);
        return C.set(new Uint8Array(S)), C.buffer;
      }
      function g() {
        return this.bodyUsed = !1, this._initBody = function(S) {
          this._bodyInit = S, S ? typeof S == "string" ? this._bodyText = S : b.blob && Blob.prototype.isPrototypeOf(S) ? this._bodyBlob = S : b.formData && FormData.prototype.isPrototypeOf(S) ? this._bodyFormData = S : b.searchParams && URLSearchParams.prototype.isPrototypeOf(S) ? this._bodyText = S.toString() : b.arrayBuffer && b.blob && O(S) ? (this._bodyArrayBuffer = m(S.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : b.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(S) || E(S)) ? this._bodyArrayBuffer = m(S) : this._bodyText = S = Object.prototype.toString.call(S) : this._bodyText = "", this.headers.get("content-type") || (typeof S == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : b.searchParams && URLSearchParams.prototype.isPrototypeOf(S) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, b.blob && (this.blob = function() {
          var S = J(this);
          if (S)
            return S;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? J(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(ue);
        }), this.text = function() {
          var S = J(this);
          if (S)
            return S;
          if (this._bodyBlob)
            return u(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(d(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, b.formData && (this.formData = function() {
          return this.text().then(Q);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function N(S) {
        var C = S.toUpperCase();
        return p.indexOf(C) > -1 ? C : S;
      }
      function x(S, C) {
        C = C || {};
        var ie = C.body;
        if (S instanceof x) {
          if (S.bodyUsed)
            throw new TypeError("Already read");
          this.url = S.url, this.credentials = S.credentials, C.headers || (this.headers = new L(S.headers)), this.method = S.method, this.mode = S.mode, this.signal = S.signal, !ie && S._bodyInit != null && (ie = S._bodyInit, S.bodyUsed = !0);
        } else
          this.url = String(S);
        if (this.credentials = C.credentials || this.credentials || "same-origin", (C.headers || !this.headers) && (this.headers = new L(C.headers)), this.method = N(C.method || this.method || "GET"), this.mode = C.mode || this.mode || null, this.signal = C.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && ie)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(ie);
      }
      x.prototype.clone = function() {
        return new x(this, { body: this._bodyInit });
      };
      function Q(S) {
        var C = new FormData();
        return S.trim().split("&").forEach(function(ie) {
          if (ie) {
            var de = ie.split("="), X = de.shift().replace(/\+/g, " "), W = de.join("=").replace(/\+/g, " ");
            C.append(decodeURIComponent(X), decodeURIComponent(W));
          }
        }), C;
      }
      function se(S) {
        var C = new L(), ie = S.replace(/\r?\n[\t ]+/g, " ");
        return ie.split(/\r?\n/).forEach(function(de) {
          var X = de.split(":"), W = X.shift().trim();
          if (W) {
            var Y = X.join(":").trim();
            C.append(W, Y);
          }
        }), C;
      }
      g.call(x.prototype);
      function pe(S, C) {
        C || (C = {}), this.type = "default", this.status = C.status === void 0 ? 200 : C.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in C ? C.statusText : "OK", this.headers = new L(C.headers), this.url = C.url || "", this._initBody(S);
      }
      g.call(pe.prototype), pe.prototype.clone = function() {
        return new pe(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new L(this.headers),
          url: this.url
        });
      }, pe.error = function() {
        var S = new pe(null, { status: 0, statusText: "" });
        return S.type = "error", S;
      };
      var Re = [301, 302, 303, 307, 308];
      pe.redirect = function(S, C) {
        if (Re.indexOf(C) === -1)
          throw new RangeError("Invalid status code");
        return new pe(null, { status: C, headers: { location: S } });
      }, y.DOMException = h.DOMException;
      try {
        new y.DOMException();
      } catch {
        y.DOMException = function(C, ie) {
          this.message = C, this.name = ie;
          var de = Error(C);
          this.stack = de.stack;
        }, y.DOMException.prototype = Object.create(Error.prototype), y.DOMException.prototype.constructor = y.DOMException;
      }
      function qe(S, C) {
        return new Promise(function(ie, de) {
          var X = new x(S, C);
          if (X.signal && X.signal.aborted)
            return de(new y.DOMException("Aborted", "AbortError"));
          var W = new XMLHttpRequest();
          function Y() {
            W.abort();
          }
          W.onload = function() {
            var Z = {
              status: W.status,
              statusText: W.statusText,
              headers: se(W.getAllResponseHeaders() || "")
            };
            Z.url = "responseURL" in W ? W.responseURL : Z.headers.get("X-Request-URL");
            var Qe = "response" in W ? W.response : W.responseText;
            ie(new pe(Qe, Z));
          }, W.onerror = function() {
            de(new TypeError("Network request failed"));
          }, W.ontimeout = function() {
            de(new TypeError("Network request failed"));
          }, W.onabort = function() {
            de(new y.DOMException("Aborted", "AbortError"));
          }, W.open(X.method, X.url, !0), X.credentials === "include" ? W.withCredentials = !0 : X.credentials === "omit" && (W.withCredentials = !1), "responseType" in W && b.blob && (W.responseType = "blob"), X.headers.forEach(function(Z, Qe) {
            W.setRequestHeader(Qe, Z);
          }), X.signal && (X.signal.addEventListener("abort", Y), W.onreadystatechange = function() {
            W.readyState === 4 && X.signal.removeEventListener("abort", Y);
          }), W.send(typeof X._bodyInit > "u" ? null : X._bodyInit);
        });
      }
      return qe.polyfill = !0, h.fetch || (h.fetch = qe, h.Headers = L, h.Request = x, h.Response = pe), y.Headers = L, y.Request = x, y.Response = pe, y.fetch = qe, Object.defineProperty(y, "__esModule", { value: !0 }), y;
    })({});
  })(s), s.fetch.ponyfill = !0, delete s.fetch.polyfill;
  var a = s;
  t = a.fetch, t.default = a.fetch, t.fetch = a.fetch, t.Headers = a.Headers, t.Request = a.Request, t.Response = a.Response, n.exports = t;
})(Xc, Xc.exports);
var ix = Xc.exports;
const Tf = /* @__PURE__ */ Wf(ix), nx = {
  Accept: "application/json",
  "Content-Type": "application/json"
}, sx = "POST", Rf = {
  headers: nx,
  method: sx
}, Cf = 10;
class Ti {
  constructor(t, r = !1) {
    if (this.url = t, this.disableProviderPing = r, this.events = new Cr.EventEmitter(), this.isAvailable = !1, this.registering = !1, !Xl(t))
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
      const s = Ji(t), h = await (await Tf(this.url, Object.assign(Object.assign({}, Rf), { body: s }))).json();
      this.onPayload({ data: h });
    } catch (s) {
      this.onError(t.id, s);
    }
  }
  async register(t = this.url) {
    if (!Xl(t))
      throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((s, a) => {
        this.events.once("register_error", (h) => {
          this.resetMaxListeners(), a(h);
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
        const r = Ji({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await Tf(t, Object.assign(Object.assign({}, Rf), { body: r }));
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
    const r = typeof t.data == "string" ? ls(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const s = this.parseError(r), a = s.message || s.toString(), h = Vo(t, a);
    this.events.emit("payload", h);
  }
  parseError(t, r = this.url) {
    return gd(t, r, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Cf && this.events.setMaxListeners(Cf);
  }
}
const $f = "error", ox = "wss://relay.walletconnect.com", ax = "wc", cx = "universal_provider", Df = `${ax}@2:${cx}:`, ux = "https://rpc.walletconnect.com/v1/", yi = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var ts = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Zc = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(n, t) {
  (function() {
    var r, s = "4.17.21", a = 200, h = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", y = "Expected a function", b = "Invalid `variable` option passed into `_.template`", O = "__lodash_hash_undefined__", _ = 500, E = "__lodash_placeholder__", A = 1, j = 2, H = 4, L = 1, J = 2, te = 1, ue = 2, u = 4, d = 8, m = 16, g = 32, p = 64, N = 128, x = 256, Q = 512, se = 30, pe = "...", Re = 800, qe = 16, S = 1, C = 2, ie = 3, de = 1 / 0, X = 9007199254740991, W = 17976931348623157e292, Y = NaN, Z = 4294967295, Qe = Z - 1, ke = Z >>> 1, kr = [["ary", N], ["bind", te], ["bindKey", ue], ["curry", d], ["curryRight", m], ["flip", Q], ["partial", g], ["partialRight", p], ["rearg", x]], Ie = "[object Arguments]", St = "[object Array]", z = "[object AsyncFunction]", q = "[object Boolean]", U = "[object Date]", l = "[object DOMException]", R = "[object Error]", ae = "[object Function]", ye = "[object GeneratorFunction]", _e = "[object Map]", Ce = "[object Number]", De = "[object Null]", Pe = "[object Object]", xt = "[object Promise]", wt = "[object Proxy]", at = "[object RegExp]", Ue = "[object Set]", Xe = "[object String]", Ze = "[object Symbol]", ct = "[object Undefined]", ze = "[object WeakMap]", et = "[object WeakSet]", $e = "[object ArrayBuffer]", Ve = "[object DataView]", lt = "[object Float32Array]", Le = "[object Float64Array]", Pt = "[object Int8Array]", Dt = "[object Int16Array]", zt = "[object Int32Array]", Ht = "[object Uint8Array]", jt = "[object Uint8ClampedArray]", Yt = "[object Uint16Array]", or = "[object Uint32Array]", Vr = /\b__p \+= '';/g, Xt = /\b(__p \+=) '' \+/g, Xr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, mi = /&(?:amp|lt|gt|quot|#39);/g, Ri = /[&<>"']/g, ft = RegExp(mi.source), it = RegExp(Ri.source), dt = /<%-([\s\S]+?)%>/g, pt = /<%([\s\S]+?)%>/g, ut = /<%=([\s\S]+?)%>/g, nt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ot = /^\w*$/, At = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gt = /[\\^$.*+?()[\]{}|]/g, Nt = RegExp(gt.source), yt = /^\s+/, bt = /\s/, mt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ye = /\{\n\/\* \[wrapped with (.+)\] \*/, Tt = /,? & /, Rt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Qo = /[()=,{}\[\]\/\s]/, Yo = /\\(\\)?/g, Xo = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, _r = /\w*$/, Zo = /^[-+]0x[0-9a-f]+$/i, ea = /^0b[01]+$/i, ta = /^\[object .+?Constructor\]$/, ra = /^0o[0-7]+$/i, ia = /^(?:0|[1-9]\d*)$/, Zr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Zi = /($^)/, na = /['\n\r\u2028\u2029\\]/g, en = "\\ud800-\\udfff", sa = "\\u0300-\\u036f", oa = "\\ufe20-\\ufe2f", tn = "\\u20d0-\\u20ff", ps = sa + oa + tn, gs = "\\u2700-\\u27bf", $r = "a-z\\xdf-\\xf6\\xf8-\\xff", aa = "\\xac\\xb1\\xd7\\xf7", ca = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ua = "\\u2000-\\u206f", ha = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ys = "A-Z\\xc0-\\xd6\\xd8-\\xde", ms = "\\ufe0e\\ufe0f", Ci = aa + ca + ua + ha, Nn = "['’]", $i = "[" + en + "]", Tn = "[" + Ci + "]", Di = "[" + ps + "]", vs = "\\d+", la = "[" + gs + "]", ws = "[" + $r + "]", bs = "[^" + en + Ci + vs + gs + $r + ys + "]", rn = "\\ud83c[\\udffb-\\udfff]", fa = "(?:" + Di + "|" + rn + ")", _s = "[^" + en + "]", nn = "(?:\\ud83c[\\udde6-\\uddff]){2}", vi = "[\\ud800-\\udbff][\\udc00-\\udfff]", pr = "[" + ys + "]", Es = "\\u200d", Is = "(?:" + ws + "|" + bs + ")", Kr = "(?:" + pr + "|" + bs + ")", Ss = "(?:" + Nn + "(?:d|ll|m|re|s|t|ve))?", xs = "(?:" + Nn + "(?:D|LL|M|RE|S|T|VE))?", Ps = fa + "?", Os = "[" + ms + "]?", da = "(?:" + Es + "(?:" + [_s, nn, vi].join("|") + ")" + Os + Ps + ")*", ei = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", As = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ns = Os + Ps + da, sn = "(?:" + [la, nn, vi].join("|") + ")" + Ns, pa = "(?:" + [_s + Di + "?", Di, nn, vi, $i].join("|") + ")", Rn = RegExp(Nn, "g"), ga = RegExp(Di, "g"), on = RegExp(rn + "(?=" + rn + ")|" + pa + Ns, "g"), Ts = RegExp([pr + "?" + ws + "+" + Ss + "(?=" + [Tn, pr, "$"].join("|") + ")", Kr + "+" + xs + "(?=" + [Tn, pr + Is, "$"].join("|") + ")", pr + "?" + Is + "+" + Ss, pr + "+" + xs, As, ei, vs, sn].join("|"), "g"), Rs = RegExp("[" + Es + en + ps + ms + "]"), Fi = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Cs = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], ya = -1, Ke = {};
    Ke[lt] = Ke[Le] = Ke[Pt] = Ke[Dt] = Ke[zt] = Ke[Ht] = Ke[jt] = Ke[Yt] = Ke[or] = !0, Ke[Ie] = Ke[St] = Ke[$e] = Ke[q] = Ke[Ve] = Ke[U] = Ke[R] = Ke[ae] = Ke[_e] = Ke[Ce] = Ke[Pe] = Ke[at] = Ke[Ue] = Ke[Xe] = Ke[ze] = !1;
    var He = {};
    He[Ie] = He[St] = He[$e] = He[Ve] = He[q] = He[U] = He[lt] = He[Le] = He[Pt] = He[Dt] = He[zt] = He[_e] = He[Ce] = He[Pe] = He[at] = He[Ue] = He[Xe] = He[Ze] = He[Ht] = He[jt] = He[Yt] = He[or] = !0, He[R] = He[ae] = He[ze] = !1;
    var I = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, $ = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, K = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, re = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, We = parseFloat, ve = parseInt, tt = typeof ts == "object" && ts && ts.Object === Object && ts, Ct = typeof self == "object" && self && self.Object === Object && self, Ae = tt || Ct || Function("return this")(), Ge = t && !t.nodeType && t, _t = Ge && !0 && n && !n.nodeType && n, ar = _t && _t.exports === Ge, $t = ar && tt.process, rt = function() {
      try {
        var D = _t && _t.require && _t.require("util").types;
        return D || $t && $t.binding && $t.binding("util");
      } catch {
      }
    }(), Zt = rt && rt.isArrayBuffer, Dr = rt && rt.isDate, Er = rt && rt.isMap, Wr = rt && rt.isRegExp, Cn = rt && rt.isSet, Ui = rt && rt.isTypedArray;
    function Lt(D, B, M) {
      switch (M.length) {
        case 0:
          return D.call(B);
        case 1:
          return D.call(B, M[0]);
        case 2:
          return D.call(B, M[0], M[1]);
        case 3:
          return D.call(B, M[0], M[1], M[2]);
      }
      return D.apply(B, M);
    }
    function Kd(D, B, M, ne) {
      for (var me = -1, Fe = D == null ? 0 : D.length; ++me < Fe; ) {
        var Ft = D[me];
        B(ne, Ft, M(Ft), D);
      }
      return ne;
    }
    function Ir(D, B) {
      for (var M = -1, ne = D == null ? 0 : D.length; ++M < ne && B(D[M], M, D) !== !1; )
        ;
      return D;
    }
    function Wd(D, B) {
      for (var M = D == null ? 0 : D.length; M-- && B(D[M], M, D) !== !1; )
        ;
      return D;
    }
    function wu(D, B) {
      for (var M = -1, ne = D == null ? 0 : D.length; ++M < ne; )
        if (!B(D[M], M, D))
          return !1;
      return !0;
    }
    function wi(D, B) {
      for (var M = -1, ne = D == null ? 0 : D.length, me = 0, Fe = []; ++M < ne; ) {
        var Ft = D[M];
        B(Ft, M, D) && (Fe[me++] = Ft);
      }
      return Fe;
    }
    function $s(D, B) {
      var M = D == null ? 0 : D.length;
      return !!M && an(D, B, 0) > -1;
    }
    function ma(D, B, M) {
      for (var ne = -1, me = D == null ? 0 : D.length; ++ne < me; )
        if (M(B, D[ne]))
          return !0;
      return !1;
    }
    function st(D, B) {
      for (var M = -1, ne = D == null ? 0 : D.length, me = Array(ne); ++M < ne; )
        me[M] = B(D[M], M, D);
      return me;
    }
    function bi(D, B) {
      for (var M = -1, ne = B.length, me = D.length; ++M < ne; )
        D[me + M] = B[M];
      return D;
    }
    function va(D, B, M, ne) {
      var me = -1, Fe = D == null ? 0 : D.length;
      for (ne && Fe && (M = D[++me]); ++me < Fe; )
        M = B(M, D[me], me, D);
      return M;
    }
    function Gd(D, B, M, ne) {
      var me = D == null ? 0 : D.length;
      for (ne && me && (M = D[--me]); me--; )
        M = B(M, D[me], me, D);
      return M;
    }
    function wa(D, B) {
      for (var M = -1, ne = D == null ? 0 : D.length; ++M < ne; )
        if (B(D[M], M, D))
          return !0;
      return !1;
    }
    var Jd = ba("length");
    function Qd(D) {
      return D.split("");
    }
    function Yd(D) {
      return D.match(Rt) || [];
    }
    function bu(D, B, M) {
      var ne;
      return M(D, function(me, Fe, Ft) {
        if (B(me, Fe, Ft))
          return ne = Fe, !1;
      }), ne;
    }
    function Ds(D, B, M, ne) {
      for (var me = D.length, Fe = M + (ne ? 1 : -1); ne ? Fe-- : ++Fe < me; )
        if (B(D[Fe], Fe, D))
          return Fe;
      return -1;
    }
    function an(D, B, M) {
      return B === B ? up(D, B, M) : Ds(D, _u, M);
    }
    function Xd(D, B, M, ne) {
      for (var me = M - 1, Fe = D.length; ++me < Fe; )
        if (ne(D[me], B))
          return me;
      return -1;
    }
    function _u(D) {
      return D !== D;
    }
    function Eu(D, B) {
      var M = D == null ? 0 : D.length;
      return M ? Ea(D, B) / M : Y;
    }
    function ba(D) {
      return function(B) {
        return B == null ? r : B[D];
      };
    }
    function _a(D) {
      return function(B) {
        return D == null ? r : D[B];
      };
    }
    function Iu(D, B, M, ne, me) {
      return me(D, function(Fe, Ft, Je) {
        M = ne ? (ne = !1, Fe) : B(M, Fe, Ft, Je);
      }), M;
    }
    function Zd(D, B) {
      var M = D.length;
      for (D.sort(B); M--; )
        D[M] = D[M].value;
      return D;
    }
    function Ea(D, B) {
      for (var M, ne = -1, me = D.length; ++ne < me; ) {
        var Fe = B(D[ne]);
        Fe !== r && (M = M === r ? Fe : M + Fe);
      }
      return M;
    }
    function Ia(D, B) {
      for (var M = -1, ne = Array(D); ++M < D; )
        ne[M] = B(M);
      return ne;
    }
    function ep(D, B) {
      return st(B, function(M) {
        return [M, D[M]];
      });
    }
    function Su(D) {
      return D && D.slice(0, Au(D) + 1).replace(yt, "");
    }
    function gr(D) {
      return function(B) {
        return D(B);
      };
    }
    function Sa(D, B) {
      return st(B, function(M) {
        return D[M];
      });
    }
    function $n(D, B) {
      return D.has(B);
    }
    function xu(D, B) {
      for (var M = -1, ne = D.length; ++M < ne && an(B, D[M], 0) > -1; )
        ;
      return M;
    }
    function Pu(D, B) {
      for (var M = D.length; M-- && an(B, D[M], 0) > -1; )
        ;
      return M;
    }
    function tp(D, B) {
      for (var M = D.length, ne = 0; M--; )
        D[M] === B && ++ne;
      return ne;
    }
    var rp = _a(I), ip = _a($);
    function np(D) {
      return "\\" + re[D];
    }
    function sp(D, B) {
      return D == null ? r : D[B];
    }
    function cn(D) {
      return Rs.test(D);
    }
    function op(D) {
      return Fi.test(D);
    }
    function ap(D) {
      for (var B, M = []; !(B = D.next()).done; )
        M.push(B.value);
      return M;
    }
    function xa(D) {
      var B = -1, M = Array(D.size);
      return D.forEach(function(ne, me) {
        M[++B] = [me, ne];
      }), M;
    }
    function Ou(D, B) {
      return function(M) {
        return D(B(M));
      };
    }
    function _i(D, B) {
      for (var M = -1, ne = D.length, me = 0, Fe = []; ++M < ne; ) {
        var Ft = D[M];
        (Ft === B || Ft === E) && (D[M] = E, Fe[me++] = M);
      }
      return Fe;
    }
    function Fs(D) {
      var B = -1, M = Array(D.size);
      return D.forEach(function(ne) {
        M[++B] = ne;
      }), M;
    }
    function cp(D) {
      var B = -1, M = Array(D.size);
      return D.forEach(function(ne) {
        M[++B] = [ne, ne];
      }), M;
    }
    function up(D, B, M) {
      for (var ne = M - 1, me = D.length; ++ne < me; )
        if (D[ne] === B)
          return ne;
      return -1;
    }
    function hp(D, B, M) {
      for (var ne = M + 1; ne--; )
        if (D[ne] === B)
          return ne;
      return ne;
    }
    function un(D) {
      return cn(D) ? fp(D) : Jd(D);
    }
    function Fr(D) {
      return cn(D) ? dp(D) : Qd(D);
    }
    function Au(D) {
      for (var B = D.length; B-- && bt.test(D.charAt(B)); )
        ;
      return B;
    }
    var lp = _a(K);
    function fp(D) {
      for (var B = on.lastIndex = 0; on.test(D); )
        ++B;
      return B;
    }
    function dp(D) {
      return D.match(on) || [];
    }
    function pp(D) {
      return D.match(Ts) || [];
    }
    var gp = function D(B) {
      B = B == null ? Ae : hn.defaults(Ae.Object(), B, hn.pick(Ae, Cs));
      var M = B.Array, ne = B.Date, me = B.Error, Fe = B.Function, Ft = B.Math, Je = B.Object, Pa = B.RegExp, yp = B.String, Sr = B.TypeError, Us = M.prototype, mp = Fe.prototype, ln = Je.prototype, js = B["__core-js_shared__"], Ls = mp.toString, Me = ln.hasOwnProperty, vp = 0, Nu = function() {
        var e = /[^.]+$/.exec(js && js.keys && js.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Ms = ln.toString, wp = Ls.call(Je), bp = Ae._, _p = Pa("^" + Ls.call(Me).replace(gt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), qs = ar ? B.Buffer : r, Ei = B.Symbol, zs = B.Uint8Array, Tu = qs ? qs.allocUnsafe : r, Hs = Ou(Je.getPrototypeOf, Je), Ru = Je.create, Cu = ln.propertyIsEnumerable, Bs = Us.splice, $u = Ei ? Ei.isConcatSpreadable : r, Dn = Ei ? Ei.iterator : r, ji = Ei ? Ei.toStringTag : r, ks = function() {
        try {
          var e = Hi(Je, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Ep = B.clearTimeout !== Ae.clearTimeout && B.clearTimeout, Ip = ne && ne.now !== Ae.Date.now && ne.now, Sp = B.setTimeout !== Ae.setTimeout && B.setTimeout, Vs = Ft.ceil, Ks = Ft.floor, Oa = Je.getOwnPropertySymbols, xp = qs ? qs.isBuffer : r, Du = B.isFinite, Pp = Us.join, Op = Ou(Je.keys, Je), Ut = Ft.max, Kt = Ft.min, Ap = ne.now, Np = B.parseInt, Fu = Ft.random, Tp = Us.reverse, Aa = Hi(B, "DataView"), Fn = Hi(B, "Map"), Na = Hi(B, "Promise"), fn = Hi(B, "Set"), Un = Hi(B, "WeakMap"), jn = Hi(Je, "create"), Ws = Un && new Un(), dn = {}, Rp = Bi(Aa), Cp = Bi(Fn), $p = Bi(Na), Dp = Bi(fn), Fp = Bi(Un), Gs = Ei ? Ei.prototype : r, Ln = Gs ? Gs.valueOf : r, Uu = Gs ? Gs.toString : r;
      function v(e) {
        if (vt(e) && !we(e) && !(e instanceof Oe)) {
          if (e instanceof xr)
            return e;
          if (Me.call(e, "__wrapped__"))
            return jh(e);
        }
        return new xr(e);
      }
      var pn = /* @__PURE__ */ function() {
        function e() {
        }
        return function(i) {
          if (!ht(i))
            return {};
          if (Ru)
            return Ru(i);
          e.prototype = i;
          var o = new e();
          return e.prototype = r, o;
        };
      }();
      function Js() {
      }
      function xr(e, i) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      v.templateSettings = { escape: dt, evaluate: pt, interpolate: ut, variable: "", imports: { _: v } }, v.prototype = Js.prototype, v.prototype.constructor = v, xr.prototype = pn(Js.prototype), xr.prototype.constructor = xr;
      function Oe(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Z, this.__views__ = [];
      }
      function Up() {
        var e = new Oe(this.__wrapped__);
        return e.__actions__ = cr(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = cr(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = cr(this.__views__), e;
      }
      function jp() {
        if (this.__filtered__) {
          var e = new Oe(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Lp() {
        var e = this.__wrapped__.value(), i = this.__dir__, o = we(e), c = i < 0, f = o ? e.length : 0, w = Qg(0, f, this.__views__), P = w.start, T = w.end, F = T - P, k = c ? T : P - 1, V = this.__iteratees__, G = V.length, ee = 0, ce = Kt(F, this.__takeCount__);
        if (!o || !c && f == F && ce == F)
          return oh(e, this.__actions__);
        var le = [];
        e:
          for (; F-- && ee < ce; ) {
            k += i;
            for (var Ee = -1, fe = e[k]; ++Ee < G; ) {
              var xe = V[Ee], Ne = xe.iteratee, vr = xe.type, rr = Ne(fe);
              if (vr == C)
                fe = rr;
              else if (!rr) {
                if (vr == S)
                  continue e;
                break e;
              }
            }
            le[ee++] = fe;
          }
        return le;
      }
      Oe.prototype = pn(Js.prototype), Oe.prototype.constructor = Oe;
      function Li(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++i < o; ) {
          var c = e[i];
          this.set(c[0], c[1]);
        }
      }
      function Mp() {
        this.__data__ = jn ? jn(null) : {}, this.size = 0;
      }
      function qp(e) {
        var i = this.has(e) && delete this.__data__[e];
        return this.size -= i ? 1 : 0, i;
      }
      function zp(e) {
        var i = this.__data__;
        if (jn) {
          var o = i[e];
          return o === O ? r : o;
        }
        return Me.call(i, e) ? i[e] : r;
      }
      function Hp(e) {
        var i = this.__data__;
        return jn ? i[e] !== r : Me.call(i, e);
      }
      function Bp(e, i) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = jn && i === r ? O : i, this;
      }
      Li.prototype.clear = Mp, Li.prototype.delete = qp, Li.prototype.get = zp, Li.prototype.has = Hp, Li.prototype.set = Bp;
      function ti(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++i < o; ) {
          var c = e[i];
          this.set(c[0], c[1]);
        }
      }
      function kp() {
        this.__data__ = [], this.size = 0;
      }
      function Vp(e) {
        var i = this.__data__, o = Qs(i, e);
        if (o < 0)
          return !1;
        var c = i.length - 1;
        return o == c ? i.pop() : Bs.call(i, o, 1), --this.size, !0;
      }
      function Kp(e) {
        var i = this.__data__, o = Qs(i, e);
        return o < 0 ? r : i[o][1];
      }
      function Wp(e) {
        return Qs(this.__data__, e) > -1;
      }
      function Gp(e, i) {
        var o = this.__data__, c = Qs(o, e);
        return c < 0 ? (++this.size, o.push([e, i])) : o[c][1] = i, this;
      }
      ti.prototype.clear = kp, ti.prototype.delete = Vp, ti.prototype.get = Kp, ti.prototype.has = Wp, ti.prototype.set = Gp;
      function ri(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++i < o; ) {
          var c = e[i];
          this.set(c[0], c[1]);
        }
      }
      function Jp() {
        this.size = 0, this.__data__ = { hash: new Li(), map: new (Fn || ti)(), string: new Li() };
      }
      function Qp(e) {
        var i = co(this, e).delete(e);
        return this.size -= i ? 1 : 0, i;
      }
      function Yp(e) {
        return co(this, e).get(e);
      }
      function Xp(e) {
        return co(this, e).has(e);
      }
      function Zp(e, i) {
        var o = co(this, e), c = o.size;
        return o.set(e, i), this.size += o.size == c ? 0 : 1, this;
      }
      ri.prototype.clear = Jp, ri.prototype.delete = Qp, ri.prototype.get = Yp, ri.prototype.has = Xp, ri.prototype.set = Zp;
      function Mi(e) {
        var i = -1, o = e == null ? 0 : e.length;
        for (this.__data__ = new ri(); ++i < o; )
          this.add(e[i]);
      }
      function eg(e) {
        return this.__data__.set(e, O), this;
      }
      function tg(e) {
        return this.__data__.has(e);
      }
      Mi.prototype.add = Mi.prototype.push = eg, Mi.prototype.has = tg;
      function Ur(e) {
        var i = this.__data__ = new ti(e);
        this.size = i.size;
      }
      function rg() {
        this.__data__ = new ti(), this.size = 0;
      }
      function ig(e) {
        var i = this.__data__, o = i.delete(e);
        return this.size = i.size, o;
      }
      function ng(e) {
        return this.__data__.get(e);
      }
      function sg(e) {
        return this.__data__.has(e);
      }
      function og(e, i) {
        var o = this.__data__;
        if (o instanceof ti) {
          var c = o.__data__;
          if (!Fn || c.length < a - 1)
            return c.push([e, i]), this.size = ++o.size, this;
          o = this.__data__ = new ri(c);
        }
        return o.set(e, i), this.size = o.size, this;
      }
      Ur.prototype.clear = rg, Ur.prototype.delete = ig, Ur.prototype.get = ng, Ur.prototype.has = sg, Ur.prototype.set = og;
      function ju(e, i) {
        var o = we(e), c = !o && ki(e), f = !o && !c && Oi(e), w = !o && !c && !f && vn(e), P = o || c || f || w, T = P ? Ia(e.length, yp) : [], F = T.length;
        for (var k in e)
          (i || Me.call(e, k)) && !(P && (k == "length" || f && (k == "offset" || k == "parent") || w && (k == "buffer" || k == "byteLength" || k == "byteOffset") || oi(k, F))) && T.push(k);
        return T;
      }
      function Lu(e) {
        var i = e.length;
        return i ? e[qa(0, i - 1)] : r;
      }
      function ag(e, i) {
        return uo(cr(e), qi(i, 0, e.length));
      }
      function cg(e) {
        return uo(cr(e));
      }
      function Ta(e, i, o) {
        (o !== r && !jr(e[i], o) || o === r && !(i in e)) && ii(e, i, o);
      }
      function Mn(e, i, o) {
        var c = e[i];
        (!(Me.call(e, i) && jr(c, o)) || o === r && !(i in e)) && ii(e, i, o);
      }
      function Qs(e, i) {
        for (var o = e.length; o--; )
          if (jr(e[o][0], i))
            return o;
        return -1;
      }
      function ug(e, i, o, c) {
        return Ii(e, function(f, w, P) {
          i(c, f, o(f), P);
        }), c;
      }
      function Mu(e, i) {
        return e && Jr(i, Mt(i), e);
      }
      function hg(e, i) {
        return e && Jr(i, hr(i), e);
      }
      function ii(e, i, o) {
        i == "__proto__" && ks ? ks(e, i, { configurable: !0, enumerable: !0, value: o, writable: !0 }) : e[i] = o;
      }
      function Ra(e, i) {
        for (var o = -1, c = i.length, f = M(c), w = e == null; ++o < c; )
          f[o] = w ? r : lc(e, i[o]);
        return f;
      }
      function qi(e, i, o) {
        return e === e && (o !== r && (e = e <= o ? e : o), i !== r && (e = e >= i ? e : i)), e;
      }
      function Pr(e, i, o, c, f, w) {
        var P, T = i & A, F = i & j, k = i & H;
        if (o && (P = f ? o(e, c, f, w) : o(e)), P !== r)
          return P;
        if (!ht(e))
          return e;
        var V = we(e);
        if (V) {
          if (P = Xg(e), !T)
            return cr(e, P);
        } else {
          var G = Wt(e), ee = G == ae || G == ye;
          if (Oi(e))
            return uh(e, T);
          if (G == Pe || G == Ie || ee && !f) {
            if (P = F || ee ? {} : Ah(e), !T)
              return F ? zg(e, hg(P, e)) : qg(e, Mu(P, e));
          } else {
            if (!He[G])
              return f ? e : {};
            P = Zg(e, G, T);
          }
        }
        w || (w = new Ur());
        var ce = w.get(e);
        if (ce)
          return ce;
        w.set(e, P), il(e) ? e.forEach(function(fe) {
          P.add(Pr(fe, i, o, fe, e, w));
        }) : tl(e) && e.forEach(function(fe, xe) {
          P.set(xe, Pr(fe, i, o, xe, e, w));
        });
        var le = k ? F ? Ya : Qa : F ? hr : Mt, Ee = V ? r : le(e);
        return Ir(Ee || e, function(fe, xe) {
          Ee && (xe = fe, fe = e[xe]), Mn(P, xe, Pr(fe, i, o, xe, e, w));
        }), P;
      }
      function lg(e) {
        var i = Mt(e);
        return function(o) {
          return qu(o, e, i);
        };
      }
      function qu(e, i, o) {
        var c = o.length;
        if (e == null)
          return !c;
        for (e = Je(e); c--; ) {
          var f = o[c], w = i[f], P = e[f];
          if (P === r && !(f in e) || !w(P))
            return !1;
        }
        return !0;
      }
      function zu(e, i, o) {
        if (typeof e != "function")
          throw new Sr(y);
        return Kn(function() {
          e.apply(r, o);
        }, i);
      }
      function qn(e, i, o, c) {
        var f = -1, w = $s, P = !0, T = e.length, F = [], k = i.length;
        if (!T)
          return F;
        o && (i = st(i, gr(o))), c ? (w = ma, P = !1) : i.length >= a && (w = $n, P = !1, i = new Mi(i));
        e:
          for (; ++f < T; ) {
            var V = e[f], G = o == null ? V : o(V);
            if (V = c || V !== 0 ? V : 0, P && G === G) {
              for (var ee = k; ee--; )
                if (i[ee] === G)
                  continue e;
              F.push(V);
            } else
              w(i, G, c) || F.push(V);
          }
        return F;
      }
      var Ii = ph(Gr), Hu = ph($a, !0);
      function fg(e, i) {
        var o = !0;
        return Ii(e, function(c, f, w) {
          return o = !!i(c, f, w), o;
        }), o;
      }
      function Ys(e, i, o) {
        for (var c = -1, f = e.length; ++c < f; ) {
          var w = e[c], P = i(w);
          if (P != null && (T === r ? P === P && !mr(P) : o(P, T)))
            var T = P, F = w;
        }
        return F;
      }
      function dg(e, i, o, c) {
        var f = e.length;
        for (o = be(o), o < 0 && (o = -o > f ? 0 : f + o), c = c === r || c > f ? f : be(c), c < 0 && (c += f), c = o > c ? 0 : sl(c); o < c; )
          e[o++] = i;
        return e;
      }
      function Bu(e, i) {
        var o = [];
        return Ii(e, function(c, f, w) {
          i(c, f, w) && o.push(c);
        }), o;
      }
      function Bt(e, i, o, c, f) {
        var w = -1, P = e.length;
        for (o || (o = ty), f || (f = []); ++w < P; ) {
          var T = e[w];
          i > 0 && o(T) ? i > 1 ? Bt(T, i - 1, o, c, f) : bi(f, T) : c || (f[f.length] = T);
        }
        return f;
      }
      var Ca = gh(), ku = gh(!0);
      function Gr(e, i) {
        return e && Ca(e, i, Mt);
      }
      function $a(e, i) {
        return e && ku(e, i, Mt);
      }
      function Xs(e, i) {
        return wi(i, function(o) {
          return ai(e[o]);
        });
      }
      function zi(e, i) {
        i = xi(i, e);
        for (var o = 0, c = i.length; e != null && o < c; )
          e = e[Qr(i[o++])];
        return o && o == c ? e : r;
      }
      function Vu(e, i, o) {
        var c = i(e);
        return we(e) ? c : bi(c, o(e));
      }
      function er(e) {
        return e == null ? e === r ? ct : De : ji && ji in Je(e) ? Jg(e) : cy(e);
      }
      function Da(e, i) {
        return e > i;
      }
      function pg(e, i) {
        return e != null && Me.call(e, i);
      }
      function gg(e, i) {
        return e != null && i in Je(e);
      }
      function yg(e, i, o) {
        return e >= Kt(i, o) && e < Ut(i, o);
      }
      function Fa(e, i, o) {
        for (var c = o ? ma : $s, f = e[0].length, w = e.length, P = w, T = M(w), F = 1 / 0, k = []; P--; ) {
          var V = e[P];
          P && i && (V = st(V, gr(i))), F = Kt(V.length, F), T[P] = !o && (i || f >= 120 && V.length >= 120) ? new Mi(P && V) : r;
        }
        V = e[0];
        var G = -1, ee = T[0];
        e:
          for (; ++G < f && k.length < F; ) {
            var ce = V[G], le = i ? i(ce) : ce;
            if (ce = o || ce !== 0 ? ce : 0, !(ee ? $n(ee, le) : c(k, le, o))) {
              for (P = w; --P; ) {
                var Ee = T[P];
                if (!(Ee ? $n(Ee, le) : c(e[P], le, o)))
                  continue e;
              }
              ee && ee.push(le), k.push(ce);
            }
          }
        return k;
      }
      function mg(e, i, o, c) {
        return Gr(e, function(f, w, P) {
          i(c, o(f), w, P);
        }), c;
      }
      function zn(e, i, o) {
        i = xi(i, e), e = Ch(e, i);
        var c = e == null ? e : e[Qr(Ar(i))];
        return c == null ? r : Lt(c, e, o);
      }
      function Ku(e) {
        return vt(e) && er(e) == Ie;
      }
      function vg(e) {
        return vt(e) && er(e) == $e;
      }
      function wg(e) {
        return vt(e) && er(e) == U;
      }
      function Hn(e, i, o, c, f) {
        return e === i ? !0 : e == null || i == null || !vt(e) && !vt(i) ? e !== e && i !== i : bg(e, i, o, c, Hn, f);
      }
      function bg(e, i, o, c, f, w) {
        var P = we(e), T = we(i), F = P ? St : Wt(e), k = T ? St : Wt(i);
        F = F == Ie ? Pe : F, k = k == Ie ? Pe : k;
        var V = F == Pe, G = k == Pe, ee = F == k;
        if (ee && Oi(e)) {
          if (!Oi(i))
            return !1;
          P = !0, V = !1;
        }
        if (ee && !V)
          return w || (w = new Ur()), P || vn(e) ? xh(e, i, o, c, f, w) : Wg(e, i, F, o, c, f, w);
        if (!(o & L)) {
          var ce = V && Me.call(e, "__wrapped__"), le = G && Me.call(i, "__wrapped__");
          if (ce || le) {
            var Ee = ce ? e.value() : e, fe = le ? i.value() : i;
            return w || (w = new Ur()), f(Ee, fe, o, c, w);
          }
        }
        return ee ? (w || (w = new Ur()), Gg(e, i, o, c, f, w)) : !1;
      }
      function _g(e) {
        return vt(e) && Wt(e) == _e;
      }
      function Ua(e, i, o, c) {
        var f = o.length, w = f, P = !c;
        if (e == null)
          return !w;
        for (e = Je(e); f--; ) {
          var T = o[f];
          if (P && T[2] ? T[1] !== e[T[0]] : !(T[0] in e))
            return !1;
        }
        for (; ++f < w; ) {
          T = o[f];
          var F = T[0], k = e[F], V = T[1];
          if (P && T[2]) {
            if (k === r && !(F in e))
              return !1;
          } else {
            var G = new Ur();
            if (c)
              var ee = c(k, V, F, e, i, G);
            if (!(ee === r ? Hn(V, k, L | J, c, G) : ee))
              return !1;
          }
        }
        return !0;
      }
      function Wu(e) {
        if (!ht(e) || iy(e))
          return !1;
        var i = ai(e) ? _p : ta;
        return i.test(Bi(e));
      }
      function Eg(e) {
        return vt(e) && er(e) == at;
      }
      function Ig(e) {
        return vt(e) && Wt(e) == Ue;
      }
      function Sg(e) {
        return vt(e) && yo(e.length) && !!Ke[er(e)];
      }
      function Gu(e) {
        return typeof e == "function" ? e : e == null ? lr : typeof e == "object" ? we(e) ? Yu(e[0], e[1]) : Qu(e) : yl(e);
      }
      function ja(e) {
        if (!Vn(e))
          return Op(e);
        var i = [];
        for (var o in Je(e))
          Me.call(e, o) && o != "constructor" && i.push(o);
        return i;
      }
      function xg(e) {
        if (!ht(e))
          return ay(e);
        var i = Vn(e), o = [];
        for (var c in e)
          c == "constructor" && (i || !Me.call(e, c)) || o.push(c);
        return o;
      }
      function La(e, i) {
        return e < i;
      }
      function Ju(e, i) {
        var o = -1, c = ur(e) ? M(e.length) : [];
        return Ii(e, function(f, w, P) {
          c[++o] = i(f, w, P);
        }), c;
      }
      function Qu(e) {
        var i = Za(e);
        return i.length == 1 && i[0][2] ? Th(i[0][0], i[0][1]) : function(o) {
          return o === e || Ua(o, e, i);
        };
      }
      function Yu(e, i) {
        return tc(e) && Nh(i) ? Th(Qr(e), i) : function(o) {
          var c = lc(o, e);
          return c === r && c === i ? fc(o, e) : Hn(i, c, L | J);
        };
      }
      function Zs(e, i, o, c, f) {
        e !== i && Ca(i, function(w, P) {
          if (f || (f = new Ur()), ht(w))
            Pg(e, i, P, o, Zs, c, f);
          else {
            var T = c ? c(ic(e, P), w, P + "", e, i, f) : r;
            T === r && (T = w), Ta(e, P, T);
          }
        }, hr);
      }
      function Pg(e, i, o, c, f, w, P) {
        var T = ic(e, o), F = ic(i, o), k = P.get(F);
        if (k) {
          Ta(e, o, k);
          return;
        }
        var V = w ? w(T, F, o + "", e, i, P) : r, G = V === r;
        if (G) {
          var ee = we(F), ce = !ee && Oi(F), le = !ee && !ce && vn(F);
          V = F, ee || ce || le ? we(T) ? V = T : Et(T) ? V = cr(T) : ce ? (G = !1, V = uh(F, !0)) : le ? (G = !1, V = hh(F, !0)) : V = [] : Wn(F) || ki(F) ? (V = T, ki(T) ? V = ol(T) : (!ht(T) || ai(T)) && (V = Ah(F))) : G = !1;
        }
        G && (P.set(F, V), f(V, F, c, w, P), P.delete(F)), Ta(e, o, V);
      }
      function Xu(e, i) {
        var o = e.length;
        if (o)
          return i += i < 0 ? o : 0, oi(i, o) ? e[i] : r;
      }
      function Zu(e, i, o) {
        i.length ? i = st(i, function(w) {
          return we(w) ? function(P) {
            return zi(P, w.length === 1 ? w[0] : w);
          } : w;
        }) : i = [lr];
        var c = -1;
        i = st(i, gr(he()));
        var f = Ju(e, function(w, P, T) {
          var F = st(i, function(k) {
            return k(w);
          });
          return { criteria: F, index: ++c, value: w };
        });
        return Zd(f, function(w, P) {
          return Mg(w, P, o);
        });
      }
      function Og(e, i) {
        return eh(e, i, function(o, c) {
          return fc(e, c);
        });
      }
      function eh(e, i, o) {
        for (var c = -1, f = i.length, w = {}; ++c < f; ) {
          var P = i[c], T = zi(e, P);
          o(T, P) && Bn(w, xi(P, e), T);
        }
        return w;
      }
      function Ag(e) {
        return function(i) {
          return zi(i, e);
        };
      }
      function Ma(e, i, o, c) {
        var f = c ? Xd : an, w = -1, P = i.length, T = e;
        for (e === i && (i = cr(i)), o && (T = st(e, gr(o))); ++w < P; )
          for (var F = 0, k = i[w], V = o ? o(k) : k; (F = f(T, V, F, c)) > -1; )
            T !== e && Bs.call(T, F, 1), Bs.call(e, F, 1);
        return e;
      }
      function th(e, i) {
        for (var o = e ? i.length : 0, c = o - 1; o--; ) {
          var f = i[o];
          if (o == c || f !== w) {
            var w = f;
            oi(f) ? Bs.call(e, f, 1) : Ba(e, f);
          }
        }
        return e;
      }
      function qa(e, i) {
        return e + Ks(Fu() * (i - e + 1));
      }
      function Ng(e, i, o, c) {
        for (var f = -1, w = Ut(Vs((i - e) / (o || 1)), 0), P = M(w); w--; )
          P[c ? w : ++f] = e, e += o;
        return P;
      }
      function za(e, i) {
        var o = "";
        if (!e || i < 1 || i > X)
          return o;
        do
          i % 2 && (o += e), i = Ks(i / 2), i && (e += e);
        while (i);
        return o;
      }
      function Se(e, i) {
        return nc(Rh(e, i, lr), e + "");
      }
      function Tg(e) {
        return Lu(wn(e));
      }
      function Rg(e, i) {
        var o = wn(e);
        return uo(o, qi(i, 0, o.length));
      }
      function Bn(e, i, o, c) {
        if (!ht(e))
          return e;
        i = xi(i, e);
        for (var f = -1, w = i.length, P = w - 1, T = e; T != null && ++f < w; ) {
          var F = Qr(i[f]), k = o;
          if (F === "__proto__" || F === "constructor" || F === "prototype")
            return e;
          if (f != P) {
            var V = T[F];
            k = c ? c(V, F, T) : r, k === r && (k = ht(V) ? V : oi(i[f + 1]) ? [] : {});
          }
          Mn(T, F, k), T = T[F];
        }
        return e;
      }
      var rh = Ws ? function(e, i) {
        return Ws.set(e, i), e;
      } : lr, Cg = ks ? function(e, i) {
        return ks(e, "toString", { configurable: !0, enumerable: !1, value: pc(i), writable: !0 });
      } : lr;
      function $g(e) {
        return uo(wn(e));
      }
      function Or(e, i, o) {
        var c = -1, f = e.length;
        i < 0 && (i = -i > f ? 0 : f + i), o = o > f ? f : o, o < 0 && (o += f), f = i > o ? 0 : o - i >>> 0, i >>>= 0;
        for (var w = M(f); ++c < f; )
          w[c] = e[c + i];
        return w;
      }
      function Dg(e, i) {
        var o;
        return Ii(e, function(c, f, w) {
          return o = i(c, f, w), !o;
        }), !!o;
      }
      function eo(e, i, o) {
        var c = 0, f = e == null ? c : e.length;
        if (typeof i == "number" && i === i && f <= ke) {
          for (; c < f; ) {
            var w = c + f >>> 1, P = e[w];
            P !== null && !mr(P) && (o ? P <= i : P < i) ? c = w + 1 : f = w;
          }
          return f;
        }
        return Ha(e, i, lr, o);
      }
      function Ha(e, i, o, c) {
        var f = 0, w = e == null ? 0 : e.length;
        if (w === 0)
          return 0;
        i = o(i);
        for (var P = i !== i, T = i === null, F = mr(i), k = i === r; f < w; ) {
          var V = Ks((f + w) / 2), G = o(e[V]), ee = G !== r, ce = G === null, le = G === G, Ee = mr(G);
          if (P)
            var fe = c || le;
          else
            k ? fe = le && (c || ee) : T ? fe = le && ee && (c || !ce) : F ? fe = le && ee && !ce && (c || !Ee) : ce || Ee ? fe = !1 : fe = c ? G <= i : G < i;
          fe ? f = V + 1 : w = V;
        }
        return Kt(w, Qe);
      }
      function ih(e, i) {
        for (var o = -1, c = e.length, f = 0, w = []; ++o < c; ) {
          var P = e[o], T = i ? i(P) : P;
          if (!o || !jr(T, F)) {
            var F = T;
            w[f++] = P === 0 ? 0 : P;
          }
        }
        return w;
      }
      function nh(e) {
        return typeof e == "number" ? e : mr(e) ? Y : +e;
      }
      function yr(e) {
        if (typeof e == "string")
          return e;
        if (we(e))
          return st(e, yr) + "";
        if (mr(e))
          return Uu ? Uu.call(e) : "";
        var i = e + "";
        return i == "0" && 1 / e == -de ? "-0" : i;
      }
      function Si(e, i, o) {
        var c = -1, f = $s, w = e.length, P = !0, T = [], F = T;
        if (o)
          P = !1, f = ma;
        else if (w >= a) {
          var k = i ? null : Vg(e);
          if (k)
            return Fs(k);
          P = !1, f = $n, F = new Mi();
        } else
          F = i ? [] : T;
        e:
          for (; ++c < w; ) {
            var V = e[c], G = i ? i(V) : V;
            if (V = o || V !== 0 ? V : 0, P && G === G) {
              for (var ee = F.length; ee--; )
                if (F[ee] === G)
                  continue e;
              i && F.push(G), T.push(V);
            } else
              f(F, G, o) || (F !== T && F.push(G), T.push(V));
          }
        return T;
      }
      function Ba(e, i) {
        return i = xi(i, e), e = Ch(e, i), e == null || delete e[Qr(Ar(i))];
      }
      function sh(e, i, o, c) {
        return Bn(e, i, o(zi(e, i)), c);
      }
      function to(e, i, o, c) {
        for (var f = e.length, w = c ? f : -1; (c ? w-- : ++w < f) && i(e[w], w, e); )
          ;
        return o ? Or(e, c ? 0 : w, c ? w + 1 : f) : Or(e, c ? w + 1 : 0, c ? f : w);
      }
      function oh(e, i) {
        var o = e;
        return o instanceof Oe && (o = o.value()), va(i, function(c, f) {
          return f.func.apply(f.thisArg, bi([c], f.args));
        }, o);
      }
      function ka(e, i, o) {
        var c = e.length;
        if (c < 2)
          return c ? Si(e[0]) : [];
        for (var f = -1, w = M(c); ++f < c; )
          for (var P = e[f], T = -1; ++T < c; )
            T != f && (w[f] = qn(w[f] || P, e[T], i, o));
        return Si(Bt(w, 1), i, o);
      }
      function ah(e, i, o) {
        for (var c = -1, f = e.length, w = i.length, P = {}; ++c < f; ) {
          var T = c < w ? i[c] : r;
          o(P, e[c], T);
        }
        return P;
      }
      function Va(e) {
        return Et(e) ? e : [];
      }
      function Ka(e) {
        return typeof e == "function" ? e : lr;
      }
      function xi(e, i) {
        return we(e) ? e : tc(e, i) ? [e] : Uh(je(e));
      }
      var Fg = Se;
      function Pi(e, i, o) {
        var c = e.length;
        return o = o === r ? c : o, !i && o >= c ? e : Or(e, i, o);
      }
      var ch = Ep || function(e) {
        return Ae.clearTimeout(e);
      };
      function uh(e, i) {
        if (i)
          return e.slice();
        var o = e.length, c = Tu ? Tu(o) : new e.constructor(o);
        return e.copy(c), c;
      }
      function Wa(e) {
        var i = new e.constructor(e.byteLength);
        return new zs(i).set(new zs(e)), i;
      }
      function Ug(e, i) {
        var o = i ? Wa(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.byteLength);
      }
      function jg(e) {
        var i = new e.constructor(e.source, _r.exec(e));
        return i.lastIndex = e.lastIndex, i;
      }
      function Lg(e) {
        return Ln ? Je(Ln.call(e)) : {};
      }
      function hh(e, i) {
        var o = i ? Wa(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function lh(e, i) {
        if (e !== i) {
          var o = e !== r, c = e === null, f = e === e, w = mr(e), P = i !== r, T = i === null, F = i === i, k = mr(i);
          if (!T && !k && !w && e > i || w && P && F && !T && !k || c && P && F || !o && F || !f)
            return 1;
          if (!c && !w && !k && e < i || k && o && f && !c && !w || T && o && f || !P && f || !F)
            return -1;
        }
        return 0;
      }
      function Mg(e, i, o) {
        for (var c = -1, f = e.criteria, w = i.criteria, P = f.length, T = o.length; ++c < P; ) {
          var F = lh(f[c], w[c]);
          if (F) {
            if (c >= T)
              return F;
            var k = o[c];
            return F * (k == "desc" ? -1 : 1);
          }
        }
        return e.index - i.index;
      }
      function fh(e, i, o, c) {
        for (var f = -1, w = e.length, P = o.length, T = -1, F = i.length, k = Ut(w - P, 0), V = M(F + k), G = !c; ++T < F; )
          V[T] = i[T];
        for (; ++f < P; )
          (G || f < w) && (V[o[f]] = e[f]);
        for (; k--; )
          V[T++] = e[f++];
        return V;
      }
      function dh(e, i, o, c) {
        for (var f = -1, w = e.length, P = -1, T = o.length, F = -1, k = i.length, V = Ut(w - T, 0), G = M(V + k), ee = !c; ++f < V; )
          G[f] = e[f];
        for (var ce = f; ++F < k; )
          G[ce + F] = i[F];
        for (; ++P < T; )
          (ee || f < w) && (G[ce + o[P]] = e[f++]);
        return G;
      }
      function cr(e, i) {
        var o = -1, c = e.length;
        for (i || (i = M(c)); ++o < c; )
          i[o] = e[o];
        return i;
      }
      function Jr(e, i, o, c) {
        var f = !o;
        o || (o = {});
        for (var w = -1, P = i.length; ++w < P; ) {
          var T = i[w], F = c ? c(o[T], e[T], T, o, e) : r;
          F === r && (F = e[T]), f ? ii(o, T, F) : Mn(o, T, F);
        }
        return o;
      }
      function qg(e, i) {
        return Jr(e, ec(e), i);
      }
      function zg(e, i) {
        return Jr(e, Ph(e), i);
      }
      function ro(e, i) {
        return function(o, c) {
          var f = we(o) ? Kd : ug, w = i ? i() : {};
          return f(o, e, he(c, 2), w);
        };
      }
      function gn(e) {
        return Se(function(i, o) {
          var c = -1, f = o.length, w = f > 1 ? o[f - 1] : r, P = f > 2 ? o[2] : r;
          for (w = e.length > 3 && typeof w == "function" ? (f--, w) : r, P && tr(o[0], o[1], P) && (w = f < 3 ? r : w, f = 1), i = Je(i); ++c < f; ) {
            var T = o[c];
            T && e(i, T, c, w);
          }
          return i;
        });
      }
      function ph(e, i) {
        return function(o, c) {
          if (o == null)
            return o;
          if (!ur(o))
            return e(o, c);
          for (var f = o.length, w = i ? f : -1, P = Je(o); (i ? w-- : ++w < f) && c(P[w], w, P) !== !1; )
            ;
          return o;
        };
      }
      function gh(e) {
        return function(i, o, c) {
          for (var f = -1, w = Je(i), P = c(i), T = P.length; T--; ) {
            var F = P[e ? T : ++f];
            if (o(w[F], F, w) === !1)
              break;
          }
          return i;
        };
      }
      function Hg(e, i, o) {
        var c = i & te, f = kn(e);
        function w() {
          var P = this && this !== Ae && this instanceof w ? f : e;
          return P.apply(c ? o : this, arguments);
        }
        return w;
      }
      function yh(e) {
        return function(i) {
          i = je(i);
          var o = cn(i) ? Fr(i) : r, c = o ? o[0] : i.charAt(0), f = o ? Pi(o, 1).join("") : i.slice(1);
          return c[e]() + f;
        };
      }
      function yn(e) {
        return function(i) {
          return va(pl(dl(i).replace(Rn, "")), e, "");
        };
      }
      function kn(e) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new e();
            case 1:
              return new e(i[0]);
            case 2:
              return new e(i[0], i[1]);
            case 3:
              return new e(i[0], i[1], i[2]);
            case 4:
              return new e(i[0], i[1], i[2], i[3]);
            case 5:
              return new e(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new e(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new e(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var o = pn(e.prototype), c = e.apply(o, i);
          return ht(c) ? c : o;
        };
      }
      function Bg(e, i, o) {
        var c = kn(e);
        function f() {
          for (var w = arguments.length, P = M(w), T = w, F = mn(f); T--; )
            P[T] = arguments[T];
          var k = w < 3 && P[0] !== F && P[w - 1] !== F ? [] : _i(P, F);
          if (w -= k.length, w < o)
            return _h(e, i, io, f.placeholder, r, P, k, r, r, o - w);
          var V = this && this !== Ae && this instanceof f ? c : e;
          return Lt(V, this, P);
        }
        return f;
      }
      function mh(e) {
        return function(i, o, c) {
          var f = Je(i);
          if (!ur(i)) {
            var w = he(o, 3);
            i = Mt(i), o = function(T) {
              return w(f[T], T, f);
            };
          }
          var P = e(i, o, c);
          return P > -1 ? f[w ? i[P] : P] : r;
        };
      }
      function vh(e) {
        return si(function(i) {
          var o = i.length, c = o, f = xr.prototype.thru;
          for (e && i.reverse(); c--; ) {
            var w = i[c];
            if (typeof w != "function")
              throw new Sr(y);
            if (f && !P && ao(w) == "wrapper")
              var P = new xr([], !0);
          }
          for (c = P ? c : o; ++c < o; ) {
            w = i[c];
            var T = ao(w), F = T == "wrapper" ? Xa(w) : r;
            F && rc(F[0]) && F[1] == (N | d | g | x) && !F[4].length && F[9] == 1 ? P = P[ao(F[0])].apply(P, F[3]) : P = w.length == 1 && rc(w) ? P[T]() : P.thru(w);
          }
          return function() {
            var k = arguments, V = k[0];
            if (P && k.length == 1 && we(V))
              return P.plant(V).value();
            for (var G = 0, ee = o ? i[G].apply(this, k) : V; ++G < o; )
              ee = i[G].call(this, ee);
            return ee;
          };
        });
      }
      function io(e, i, o, c, f, w, P, T, F, k) {
        var V = i & N, G = i & te, ee = i & ue, ce = i & (d | m), le = i & Q, Ee = ee ? r : kn(e);
        function fe() {
          for (var xe = arguments.length, Ne = M(xe), vr = xe; vr--; )
            Ne[vr] = arguments[vr];
          if (ce)
            var rr = mn(fe), wr = tp(Ne, rr);
          if (c && (Ne = fh(Ne, c, f, ce)), w && (Ne = dh(Ne, w, P, ce)), xe -= wr, ce && xe < k) {
            var It = _i(Ne, rr);
            return _h(e, i, io, fe.placeholder, o, Ne, It, T, F, k - xe);
          }
          var Lr = G ? o : this, ui = ee ? Lr[e] : e;
          return xe = Ne.length, T ? Ne = uy(Ne, T) : le && xe > 1 && Ne.reverse(), V && F < xe && (Ne.length = F), this && this !== Ae && this instanceof fe && (ui = Ee || kn(ui)), ui.apply(Lr, Ne);
        }
        return fe;
      }
      function wh(e, i) {
        return function(o, c) {
          return mg(o, e, i(c), {});
        };
      }
      function no(e, i) {
        return function(o, c) {
          var f;
          if (o === r && c === r)
            return i;
          if (o !== r && (f = o), c !== r) {
            if (f === r)
              return c;
            typeof o == "string" || typeof c == "string" ? (o = yr(o), c = yr(c)) : (o = nh(o), c = nh(c)), f = e(o, c);
          }
          return f;
        };
      }
      function Ga(e) {
        return si(function(i) {
          return i = st(i, gr(he())), Se(function(o) {
            var c = this;
            return e(i, function(f) {
              return Lt(f, c, o);
            });
          });
        });
      }
      function so(e, i) {
        i = i === r ? " " : yr(i);
        var o = i.length;
        if (o < 2)
          return o ? za(i, e) : i;
        var c = za(i, Vs(e / un(i)));
        return cn(i) ? Pi(Fr(c), 0, e).join("") : c.slice(0, e);
      }
      function kg(e, i, o, c) {
        var f = i & te, w = kn(e);
        function P() {
          for (var T = -1, F = arguments.length, k = -1, V = c.length, G = M(V + F), ee = this && this !== Ae && this instanceof P ? w : e; ++k < V; )
            G[k] = c[k];
          for (; F--; )
            G[k++] = arguments[++T];
          return Lt(ee, f ? o : this, G);
        }
        return P;
      }
      function bh(e) {
        return function(i, o, c) {
          return c && typeof c != "number" && tr(i, o, c) && (o = c = r), i = ci(i), o === r ? (o = i, i = 0) : o = ci(o), c = c === r ? i < o ? 1 : -1 : ci(c), Ng(i, o, c, e);
        };
      }
      function oo(e) {
        return function(i, o) {
          return typeof i == "string" && typeof o == "string" || (i = Nr(i), o = Nr(o)), e(i, o);
        };
      }
      function _h(e, i, o, c, f, w, P, T, F, k) {
        var V = i & d, G = V ? P : r, ee = V ? r : P, ce = V ? w : r, le = V ? r : w;
        i |= V ? g : p, i &= ~(V ? p : g), i & u || (i &= ~(te | ue));
        var Ee = [e, i, f, ce, G, le, ee, T, F, k], fe = o.apply(r, Ee);
        return rc(e) && $h(fe, Ee), fe.placeholder = c, Dh(fe, e, i);
      }
      function Ja(e) {
        var i = Ft[e];
        return function(o, c) {
          if (o = Nr(o), c = c == null ? 0 : Kt(be(c), 292), c && Du(o)) {
            var f = (je(o) + "e").split("e"), w = i(f[0] + "e" + (+f[1] + c));
            return f = (je(w) + "e").split("e"), +(f[0] + "e" + (+f[1] - c));
          }
          return i(o);
        };
      }
      var Vg = fn && 1 / Fs(new fn([, -0]))[1] == de ? function(e) {
        return new fn(e);
      } : mc;
      function Eh(e) {
        return function(i) {
          var o = Wt(i);
          return o == _e ? xa(i) : o == Ue ? cp(i) : ep(i, e(i));
        };
      }
      function ni(e, i, o, c, f, w, P, T) {
        var F = i & ue;
        if (!F && typeof e != "function")
          throw new Sr(y);
        var k = c ? c.length : 0;
        if (k || (i &= ~(g | p), c = f = r), P = P === r ? P : Ut(be(P), 0), T = T === r ? T : be(T), k -= f ? f.length : 0, i & p) {
          var V = c, G = f;
          c = f = r;
        }
        var ee = F ? r : Xa(e), ce = [e, i, o, c, f, V, G, w, P, T];
        if (ee && oy(ce, ee), e = ce[0], i = ce[1], o = ce[2], c = ce[3], f = ce[4], T = ce[9] = ce[9] === r ? F ? 0 : e.length : Ut(ce[9] - k, 0), !T && i & (d | m) && (i &= ~(d | m)), !i || i == te)
          var le = Hg(e, i, o);
        else
          i == d || i == m ? le = Bg(e, i, T) : (i == g || i == (te | g)) && !f.length ? le = kg(e, i, o, c) : le = io.apply(r, ce);
        var Ee = ee ? rh : $h;
        return Dh(Ee(le, ce), e, i);
      }
      function Ih(e, i, o, c) {
        return e === r || jr(e, ln[o]) && !Me.call(c, o) ? i : e;
      }
      function Sh(e, i, o, c, f, w) {
        return ht(e) && ht(i) && (w.set(i, e), Zs(e, i, r, Sh, w), w.delete(i)), e;
      }
      function Kg(e) {
        return Wn(e) ? r : e;
      }
      function xh(e, i, o, c, f, w) {
        var P = o & L, T = e.length, F = i.length;
        if (T != F && !(P && F > T))
          return !1;
        var k = w.get(e), V = w.get(i);
        if (k && V)
          return k == i && V == e;
        var G = -1, ee = !0, ce = o & J ? new Mi() : r;
        for (w.set(e, i), w.set(i, e); ++G < T; ) {
          var le = e[G], Ee = i[G];
          if (c)
            var fe = P ? c(Ee, le, G, i, e, w) : c(le, Ee, G, e, i, w);
          if (fe !== r) {
            if (fe)
              continue;
            ee = !1;
            break;
          }
          if (ce) {
            if (!wa(i, function(xe, Ne) {
              if (!$n(ce, Ne) && (le === xe || f(le, xe, o, c, w)))
                return ce.push(Ne);
            })) {
              ee = !1;
              break;
            }
          } else if (!(le === Ee || f(le, Ee, o, c, w))) {
            ee = !1;
            break;
          }
        }
        return w.delete(e), w.delete(i), ee;
      }
      function Wg(e, i, o, c, f, w, P) {
        switch (o) {
          case Ve:
            if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset)
              return !1;
            e = e.buffer, i = i.buffer;
          case $e:
            return !(e.byteLength != i.byteLength || !w(new zs(e), new zs(i)));
          case q:
          case U:
          case Ce:
            return jr(+e, +i);
          case R:
            return e.name == i.name && e.message == i.message;
          case at:
          case Xe:
            return e == i + "";
          case _e:
            var T = xa;
          case Ue:
            var F = c & L;
            if (T || (T = Fs), e.size != i.size && !F)
              return !1;
            var k = P.get(e);
            if (k)
              return k == i;
            c |= J, P.set(e, i);
            var V = xh(T(e), T(i), c, f, w, P);
            return P.delete(e), V;
          case Ze:
            if (Ln)
              return Ln.call(e) == Ln.call(i);
        }
        return !1;
      }
      function Gg(e, i, o, c, f, w) {
        var P = o & L, T = Qa(e), F = T.length, k = Qa(i), V = k.length;
        if (F != V && !P)
          return !1;
        for (var G = F; G--; ) {
          var ee = T[G];
          if (!(P ? ee in i : Me.call(i, ee)))
            return !1;
        }
        var ce = w.get(e), le = w.get(i);
        if (ce && le)
          return ce == i && le == e;
        var Ee = !0;
        w.set(e, i), w.set(i, e);
        for (var fe = P; ++G < F; ) {
          ee = T[G];
          var xe = e[ee], Ne = i[ee];
          if (c)
            var vr = P ? c(Ne, xe, ee, i, e, w) : c(xe, Ne, ee, e, i, w);
          if (!(vr === r ? xe === Ne || f(xe, Ne, o, c, w) : vr)) {
            Ee = !1;
            break;
          }
          fe || (fe = ee == "constructor");
        }
        if (Ee && !fe) {
          var rr = e.constructor, wr = i.constructor;
          rr != wr && "constructor" in e && "constructor" in i && !(typeof rr == "function" && rr instanceof rr && typeof wr == "function" && wr instanceof wr) && (Ee = !1);
        }
        return w.delete(e), w.delete(i), Ee;
      }
      function si(e) {
        return nc(Rh(e, r, qh), e + "");
      }
      function Qa(e) {
        return Vu(e, Mt, ec);
      }
      function Ya(e) {
        return Vu(e, hr, Ph);
      }
      var Xa = Ws ? function(e) {
        return Ws.get(e);
      } : mc;
      function ao(e) {
        for (var i = e.name + "", o = dn[i], c = Me.call(dn, i) ? o.length : 0; c--; ) {
          var f = o[c], w = f.func;
          if (w == null || w == e)
            return f.name;
        }
        return i;
      }
      function mn(e) {
        var i = Me.call(v, "placeholder") ? v : e;
        return i.placeholder;
      }
      function he() {
        var e = v.iteratee || gc;
        return e = e === gc ? Gu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function co(e, i) {
        var o = e.__data__;
        return ry(i) ? o[typeof i == "string" ? "string" : "hash"] : o.map;
      }
      function Za(e) {
        for (var i = Mt(e), o = i.length; o--; ) {
          var c = i[o], f = e[c];
          i[o] = [c, f, Nh(f)];
        }
        return i;
      }
      function Hi(e, i) {
        var o = sp(e, i);
        return Wu(o) ? o : r;
      }
      function Jg(e) {
        var i = Me.call(e, ji), o = e[ji];
        try {
          e[ji] = r;
          var c = !0;
        } catch {
        }
        var f = Ms.call(e);
        return c && (i ? e[ji] = o : delete e[ji]), f;
      }
      var ec = Oa ? function(e) {
        return e == null ? [] : (e = Je(e), wi(Oa(e), function(i) {
          return Cu.call(e, i);
        }));
      } : vc, Ph = Oa ? function(e) {
        for (var i = []; e; )
          bi(i, ec(e)), e = Hs(e);
        return i;
      } : vc, Wt = er;
      (Aa && Wt(new Aa(new ArrayBuffer(1))) != Ve || Fn && Wt(new Fn()) != _e || Na && Wt(Na.resolve()) != xt || fn && Wt(new fn()) != Ue || Un && Wt(new Un()) != ze) && (Wt = function(e) {
        var i = er(e), o = i == Pe ? e.constructor : r, c = o ? Bi(o) : "";
        if (c)
          switch (c) {
            case Rp:
              return Ve;
            case Cp:
              return _e;
            case $p:
              return xt;
            case Dp:
              return Ue;
            case Fp:
              return ze;
          }
        return i;
      });
      function Qg(e, i, o) {
        for (var c = -1, f = o.length; ++c < f; ) {
          var w = o[c], P = w.size;
          switch (w.type) {
            case "drop":
              e += P;
              break;
            case "dropRight":
              i -= P;
              break;
            case "take":
              i = Kt(i, e + P);
              break;
            case "takeRight":
              e = Ut(e, i - P);
              break;
          }
        }
        return { start: e, end: i };
      }
      function Yg(e) {
        var i = e.match(Ye);
        return i ? i[1].split(Tt) : [];
      }
      function Oh(e, i, o) {
        i = xi(i, e);
        for (var c = -1, f = i.length, w = !1; ++c < f; ) {
          var P = Qr(i[c]);
          if (!(w = e != null && o(e, P)))
            break;
          e = e[P];
        }
        return w || ++c != f ? w : (f = e == null ? 0 : e.length, !!f && yo(f) && oi(P, f) && (we(e) || ki(e)));
      }
      function Xg(e) {
        var i = e.length, o = new e.constructor(i);
        return i && typeof e[0] == "string" && Me.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function Ah(e) {
        return typeof e.constructor == "function" && !Vn(e) ? pn(Hs(e)) : {};
      }
      function Zg(e, i, o) {
        var c = e.constructor;
        switch (i) {
          case $e:
            return Wa(e);
          case q:
          case U:
            return new c(+e);
          case Ve:
            return Ug(e, o);
          case lt:
          case Le:
          case Pt:
          case Dt:
          case zt:
          case Ht:
          case jt:
          case Yt:
          case or:
            return hh(e, o);
          case _e:
            return new c();
          case Ce:
          case Xe:
            return new c(e);
          case at:
            return jg(e);
          case Ue:
            return new c();
          case Ze:
            return Lg(e);
        }
      }
      function ey(e, i) {
        var o = i.length;
        if (!o)
          return e;
        var c = o - 1;
        return i[c] = (o > 1 ? "& " : "") + i[c], i = i.join(o > 2 ? ", " : " "), e.replace(mt, `{
/* [wrapped with ` + i + `] */
`);
      }
      function ty(e) {
        return we(e) || ki(e) || !!($u && e && e[$u]);
      }
      function oi(e, i) {
        var o = typeof e;
        return i = i ?? X, !!i && (o == "number" || o != "symbol" && ia.test(e)) && e > -1 && e % 1 == 0 && e < i;
      }
      function tr(e, i, o) {
        if (!ht(o))
          return !1;
        var c = typeof i;
        return (c == "number" ? ur(o) && oi(i, o.length) : c == "string" && i in o) ? jr(o[i], e) : !1;
      }
      function tc(e, i) {
        if (we(e))
          return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || mr(e) ? !0 : Ot.test(e) || !nt.test(e) || i != null && e in Je(i);
      }
      function ry(e) {
        var i = typeof e;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? e !== "__proto__" : e === null;
      }
      function rc(e) {
        var i = ao(e), o = v[i];
        if (typeof o != "function" || !(i in Oe.prototype))
          return !1;
        if (e === o)
          return !0;
        var c = Xa(o);
        return !!c && e === c[0];
      }
      function iy(e) {
        return !!Nu && Nu in e;
      }
      var ny = js ? ai : wc;
      function Vn(e) {
        var i = e && e.constructor, o = typeof i == "function" && i.prototype || ln;
        return e === o;
      }
      function Nh(e) {
        return e === e && !ht(e);
      }
      function Th(e, i) {
        return function(o) {
          return o == null ? !1 : o[e] === i && (i !== r || e in Je(o));
        };
      }
      function sy(e) {
        var i = po(e, function(c) {
          return o.size === _ && o.clear(), c;
        }), o = i.cache;
        return i;
      }
      function oy(e, i) {
        var o = e[1], c = i[1], f = o | c, w = f < (te | ue | N), P = c == N && o == d || c == N && o == x && e[7].length <= i[8] || c == (N | x) && i[7].length <= i[8] && o == d;
        if (!(w || P))
          return e;
        c & te && (e[2] = i[2], f |= o & te ? 0 : u);
        var T = i[3];
        if (T) {
          var F = e[3];
          e[3] = F ? fh(F, T, i[4]) : T, e[4] = F ? _i(e[3], E) : i[4];
        }
        return T = i[5], T && (F = e[5], e[5] = F ? dh(F, T, i[6]) : T, e[6] = F ? _i(e[5], E) : i[6]), T = i[7], T && (e[7] = T), c & N && (e[8] = e[8] == null ? i[8] : Kt(e[8], i[8])), e[9] == null && (e[9] = i[9]), e[0] = i[0], e[1] = f, e;
      }
      function ay(e) {
        var i = [];
        if (e != null)
          for (var o in Je(e))
            i.push(o);
        return i;
      }
      function cy(e) {
        return Ms.call(e);
      }
      function Rh(e, i, o) {
        return i = Ut(i === r ? e.length - 1 : i, 0), function() {
          for (var c = arguments, f = -1, w = Ut(c.length - i, 0), P = M(w); ++f < w; )
            P[f] = c[i + f];
          f = -1;
          for (var T = M(i + 1); ++f < i; )
            T[f] = c[f];
          return T[i] = o(P), Lt(e, this, T);
        };
      }
      function Ch(e, i) {
        return i.length < 2 ? e : zi(e, Or(i, 0, -1));
      }
      function uy(e, i) {
        for (var o = e.length, c = Kt(i.length, o), f = cr(e); c--; ) {
          var w = i[c];
          e[c] = oi(w, o) ? f[w] : r;
        }
        return e;
      }
      function ic(e, i) {
        if (!(i === "constructor" && typeof e[i] == "function") && i != "__proto__")
          return e[i];
      }
      var $h = Fh(rh), Kn = Sp || function(e, i) {
        return Ae.setTimeout(e, i);
      }, nc = Fh(Cg);
      function Dh(e, i, o) {
        var c = i + "";
        return nc(e, ey(c, hy(Yg(c), o)));
      }
      function Fh(e) {
        var i = 0, o = 0;
        return function() {
          var c = Ap(), f = qe - (c - o);
          if (o = c, f > 0) {
            if (++i >= Re)
              return arguments[0];
          } else
            i = 0;
          return e.apply(r, arguments);
        };
      }
      function uo(e, i) {
        var o = -1, c = e.length, f = c - 1;
        for (i = i === r ? c : i; ++o < i; ) {
          var w = qa(o, f), P = e[w];
          e[w] = e[o], e[o] = P;
        }
        return e.length = i, e;
      }
      var Uh = sy(function(e) {
        var i = [];
        return e.charCodeAt(0) === 46 && i.push(""), e.replace(At, function(o, c, f, w) {
          i.push(f ? w.replace(Yo, "$1") : c || o);
        }), i;
      });
      function Qr(e) {
        if (typeof e == "string" || mr(e))
          return e;
        var i = e + "";
        return i == "0" && 1 / e == -de ? "-0" : i;
      }
      function Bi(e) {
        if (e != null) {
          try {
            return Ls.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function hy(e, i) {
        return Ir(kr, function(o) {
          var c = "_." + o[0];
          i & o[1] && !$s(e, c) && e.push(c);
        }), e.sort();
      }
      function jh(e) {
        if (e instanceof Oe)
          return e.clone();
        var i = new xr(e.__wrapped__, e.__chain__);
        return i.__actions__ = cr(e.__actions__), i.__index__ = e.__index__, i.__values__ = e.__values__, i;
      }
      function ly(e, i, o) {
        (o ? tr(e, i, o) : i === r) ? i = 1 : i = Ut(be(i), 0);
        var c = e == null ? 0 : e.length;
        if (!c || i < 1)
          return [];
        for (var f = 0, w = 0, P = M(Vs(c / i)); f < c; )
          P[w++] = Or(e, f, f += i);
        return P;
      }
      function fy(e) {
        for (var i = -1, o = e == null ? 0 : e.length, c = 0, f = []; ++i < o; ) {
          var w = e[i];
          w && (f[c++] = w);
        }
        return f;
      }
      function dy() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var i = M(e - 1), o = arguments[0], c = e; c--; )
          i[c - 1] = arguments[c];
        return bi(we(o) ? cr(o) : [o], Bt(i, 1));
      }
      var py = Se(function(e, i) {
        return Et(e) ? qn(e, Bt(i, 1, Et, !0)) : [];
      }), gy = Se(function(e, i) {
        var o = Ar(i);
        return Et(o) && (o = r), Et(e) ? qn(e, Bt(i, 1, Et, !0), he(o, 2)) : [];
      }), yy = Se(function(e, i) {
        var o = Ar(i);
        return Et(o) && (o = r), Et(e) ? qn(e, Bt(i, 1, Et, !0), r, o) : [];
      });
      function my(e, i, o) {
        var c = e == null ? 0 : e.length;
        return c ? (i = o || i === r ? 1 : be(i), Or(e, i < 0 ? 0 : i, c)) : [];
      }
      function vy(e, i, o) {
        var c = e == null ? 0 : e.length;
        return c ? (i = o || i === r ? 1 : be(i), i = c - i, Or(e, 0, i < 0 ? 0 : i)) : [];
      }
      function wy(e, i) {
        return e && e.length ? to(e, he(i, 3), !0, !0) : [];
      }
      function by(e, i) {
        return e && e.length ? to(e, he(i, 3), !0) : [];
      }
      function _y(e, i, o, c) {
        var f = e == null ? 0 : e.length;
        return f ? (o && typeof o != "number" && tr(e, i, o) && (o = 0, c = f), dg(e, i, o, c)) : [];
      }
      function Lh(e, i, o) {
        var c = e == null ? 0 : e.length;
        if (!c)
          return -1;
        var f = o == null ? 0 : be(o);
        return f < 0 && (f = Ut(c + f, 0)), Ds(e, he(i, 3), f);
      }
      function Mh(e, i, o) {
        var c = e == null ? 0 : e.length;
        if (!c)
          return -1;
        var f = c - 1;
        return o !== r && (f = be(o), f = o < 0 ? Ut(c + f, 0) : Kt(f, c - 1)), Ds(e, he(i, 3), f, !0);
      }
      function qh(e) {
        var i = e == null ? 0 : e.length;
        return i ? Bt(e, 1) : [];
      }
      function Ey(e) {
        var i = e == null ? 0 : e.length;
        return i ? Bt(e, de) : [];
      }
      function Iy(e, i) {
        var o = e == null ? 0 : e.length;
        return o ? (i = i === r ? 1 : be(i), Bt(e, i)) : [];
      }
      function Sy(e) {
        for (var i = -1, o = e == null ? 0 : e.length, c = {}; ++i < o; ) {
          var f = e[i];
          c[f[0]] = f[1];
        }
        return c;
      }
      function zh(e) {
        return e && e.length ? e[0] : r;
      }
      function xy(e, i, o) {
        var c = e == null ? 0 : e.length;
        if (!c)
          return -1;
        var f = o == null ? 0 : be(o);
        return f < 0 && (f = Ut(c + f, 0)), an(e, i, f);
      }
      function Py(e) {
        var i = e == null ? 0 : e.length;
        return i ? Or(e, 0, -1) : [];
      }
      var Oy = Se(function(e) {
        var i = st(e, Va);
        return i.length && i[0] === e[0] ? Fa(i) : [];
      }), Ay = Se(function(e) {
        var i = Ar(e), o = st(e, Va);
        return i === Ar(o) ? i = r : o.pop(), o.length && o[0] === e[0] ? Fa(o, he(i, 2)) : [];
      }), Ny = Se(function(e) {
        var i = Ar(e), o = st(e, Va);
        return i = typeof i == "function" ? i : r, i && o.pop(), o.length && o[0] === e[0] ? Fa(o, r, i) : [];
      });
      function Ty(e, i) {
        return e == null ? "" : Pp.call(e, i);
      }
      function Ar(e) {
        var i = e == null ? 0 : e.length;
        return i ? e[i - 1] : r;
      }
      function Ry(e, i, o) {
        var c = e == null ? 0 : e.length;
        if (!c)
          return -1;
        var f = c;
        return o !== r && (f = be(o), f = f < 0 ? Ut(c + f, 0) : Kt(f, c - 1)), i === i ? hp(e, i, f) : Ds(e, _u, f, !0);
      }
      function Cy(e, i) {
        return e && e.length ? Xu(e, be(i)) : r;
      }
      var $y = Se(Hh);
      function Hh(e, i) {
        return e && e.length && i && i.length ? Ma(e, i) : e;
      }
      function Dy(e, i, o) {
        return e && e.length && i && i.length ? Ma(e, i, he(o, 2)) : e;
      }
      function Fy(e, i, o) {
        return e && e.length && i && i.length ? Ma(e, i, r, o) : e;
      }
      var Uy = si(function(e, i) {
        var o = e == null ? 0 : e.length, c = Ra(e, i);
        return th(e, st(i, function(f) {
          return oi(f, o) ? +f : f;
        }).sort(lh)), c;
      });
      function jy(e, i) {
        var o = [];
        if (!(e && e.length))
          return o;
        var c = -1, f = [], w = e.length;
        for (i = he(i, 3); ++c < w; ) {
          var P = e[c];
          i(P, c, e) && (o.push(P), f.push(c));
        }
        return th(e, f), o;
      }
      function sc(e) {
        return e == null ? e : Tp.call(e);
      }
      function Ly(e, i, o) {
        var c = e == null ? 0 : e.length;
        return c ? (o && typeof o != "number" && tr(e, i, o) ? (i = 0, o = c) : (i = i == null ? 0 : be(i), o = o === r ? c : be(o)), Or(e, i, o)) : [];
      }
      function My(e, i) {
        return eo(e, i);
      }
      function qy(e, i, o) {
        return Ha(e, i, he(o, 2));
      }
      function zy(e, i) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var c = eo(e, i);
          if (c < o && jr(e[c], i))
            return c;
        }
        return -1;
      }
      function Hy(e, i) {
        return eo(e, i, !0);
      }
      function By(e, i, o) {
        return Ha(e, i, he(o, 2), !0);
      }
      function ky(e, i) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var c = eo(e, i, !0) - 1;
          if (jr(e[c], i))
            return c;
        }
        return -1;
      }
      function Vy(e) {
        return e && e.length ? ih(e) : [];
      }
      function Ky(e, i) {
        return e && e.length ? ih(e, he(i, 2)) : [];
      }
      function Wy(e) {
        var i = e == null ? 0 : e.length;
        return i ? Or(e, 1, i) : [];
      }
      function Gy(e, i, o) {
        return e && e.length ? (i = o || i === r ? 1 : be(i), Or(e, 0, i < 0 ? 0 : i)) : [];
      }
      function Jy(e, i, o) {
        var c = e == null ? 0 : e.length;
        return c ? (i = o || i === r ? 1 : be(i), i = c - i, Or(e, i < 0 ? 0 : i, c)) : [];
      }
      function Qy(e, i) {
        return e && e.length ? to(e, he(i, 3), !1, !0) : [];
      }
      function Yy(e, i) {
        return e && e.length ? to(e, he(i, 3)) : [];
      }
      var Xy = Se(function(e) {
        return Si(Bt(e, 1, Et, !0));
      }), Zy = Se(function(e) {
        var i = Ar(e);
        return Et(i) && (i = r), Si(Bt(e, 1, Et, !0), he(i, 2));
      }), em = Se(function(e) {
        var i = Ar(e);
        return i = typeof i == "function" ? i : r, Si(Bt(e, 1, Et, !0), r, i);
      });
      function tm(e) {
        return e && e.length ? Si(e) : [];
      }
      function rm(e, i) {
        return e && e.length ? Si(e, he(i, 2)) : [];
      }
      function im(e, i) {
        return i = typeof i == "function" ? i : r, e && e.length ? Si(e, r, i) : [];
      }
      function oc(e) {
        if (!(e && e.length))
          return [];
        var i = 0;
        return e = wi(e, function(o) {
          if (Et(o))
            return i = Ut(o.length, i), !0;
        }), Ia(i, function(o) {
          return st(e, ba(o));
        });
      }
      function Bh(e, i) {
        if (!(e && e.length))
          return [];
        var o = oc(e);
        return i == null ? o : st(o, function(c) {
          return Lt(i, r, c);
        });
      }
      var nm = Se(function(e, i) {
        return Et(e) ? qn(e, i) : [];
      }), sm = Se(function(e) {
        return ka(wi(e, Et));
      }), om = Se(function(e) {
        var i = Ar(e);
        return Et(i) && (i = r), ka(wi(e, Et), he(i, 2));
      }), am = Se(function(e) {
        var i = Ar(e);
        return i = typeof i == "function" ? i : r, ka(wi(e, Et), r, i);
      }), cm = Se(oc);
      function um(e, i) {
        return ah(e || [], i || [], Mn);
      }
      function hm(e, i) {
        return ah(e || [], i || [], Bn);
      }
      var lm = Se(function(e) {
        var i = e.length, o = i > 1 ? e[i - 1] : r;
        return o = typeof o == "function" ? (e.pop(), o) : r, Bh(e, o);
      });
      function kh(e) {
        var i = v(e);
        return i.__chain__ = !0, i;
      }
      function fm(e, i) {
        return i(e), e;
      }
      function ho(e, i) {
        return i(e);
      }
      var dm = si(function(e) {
        var i = e.length, o = i ? e[0] : 0, c = this.__wrapped__, f = function(w) {
          return Ra(w, e);
        };
        return i > 1 || this.__actions__.length || !(c instanceof Oe) || !oi(o) ? this.thru(f) : (c = c.slice(o, +o + (i ? 1 : 0)), c.__actions__.push({ func: ho, args: [f], thisArg: r }), new xr(c, this.__chain__).thru(function(w) {
          return i && !w.length && w.push(r), w;
        }));
      });
      function pm() {
        return kh(this);
      }
      function gm() {
        return new xr(this.value(), this.__chain__);
      }
      function ym() {
        this.__values__ === r && (this.__values__ = nl(this.value()));
        var e = this.__index__ >= this.__values__.length, i = e ? r : this.__values__[this.__index__++];
        return { done: e, value: i };
      }
      function mm() {
        return this;
      }
      function vm(e) {
        for (var i, o = this; o instanceof Js; ) {
          var c = jh(o);
          c.__index__ = 0, c.__values__ = r, i ? f.__wrapped__ = c : i = c;
          var f = c;
          o = o.__wrapped__;
        }
        return f.__wrapped__ = e, i;
      }
      function wm() {
        var e = this.__wrapped__;
        if (e instanceof Oe) {
          var i = e;
          return this.__actions__.length && (i = new Oe(this)), i = i.reverse(), i.__actions__.push({ func: ho, args: [sc], thisArg: r }), new xr(i, this.__chain__);
        }
        return this.thru(sc);
      }
      function bm() {
        return oh(this.__wrapped__, this.__actions__);
      }
      var _m = ro(function(e, i, o) {
        Me.call(e, o) ? ++e[o] : ii(e, o, 1);
      });
      function Em(e, i, o) {
        var c = we(e) ? wu : fg;
        return o && tr(e, i, o) && (i = r), c(e, he(i, 3));
      }
      function Im(e, i) {
        var o = we(e) ? wi : Bu;
        return o(e, he(i, 3));
      }
      var Sm = mh(Lh), xm = mh(Mh);
      function Pm(e, i) {
        return Bt(lo(e, i), 1);
      }
      function Om(e, i) {
        return Bt(lo(e, i), de);
      }
      function Am(e, i, o) {
        return o = o === r ? 1 : be(o), Bt(lo(e, i), o);
      }
      function Vh(e, i) {
        var o = we(e) ? Ir : Ii;
        return o(e, he(i, 3));
      }
      function Kh(e, i) {
        var o = we(e) ? Wd : Hu;
        return o(e, he(i, 3));
      }
      var Nm = ro(function(e, i, o) {
        Me.call(e, o) ? e[o].push(i) : ii(e, o, [i]);
      });
      function Tm(e, i, o, c) {
        e = ur(e) ? e : wn(e), o = o && !c ? be(o) : 0;
        var f = e.length;
        return o < 0 && (o = Ut(f + o, 0)), mo(e) ? o <= f && e.indexOf(i, o) > -1 : !!f && an(e, i, o) > -1;
      }
      var Rm = Se(function(e, i, o) {
        var c = -1, f = typeof i == "function", w = ur(e) ? M(e.length) : [];
        return Ii(e, function(P) {
          w[++c] = f ? Lt(i, P, o) : zn(P, i, o);
        }), w;
      }), Cm = ro(function(e, i, o) {
        ii(e, o, i);
      });
      function lo(e, i) {
        var o = we(e) ? st : Ju;
        return o(e, he(i, 3));
      }
      function $m(e, i, o, c) {
        return e == null ? [] : (we(i) || (i = i == null ? [] : [i]), o = c ? r : o, we(o) || (o = o == null ? [] : [o]), Zu(e, i, o));
      }
      var Dm = ro(function(e, i, o) {
        e[o ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function Fm(e, i, o) {
        var c = we(e) ? va : Iu, f = arguments.length < 3;
        return c(e, he(i, 4), o, f, Ii);
      }
      function Um(e, i, o) {
        var c = we(e) ? Gd : Iu, f = arguments.length < 3;
        return c(e, he(i, 4), o, f, Hu);
      }
      function jm(e, i) {
        var o = we(e) ? wi : Bu;
        return o(e, go(he(i, 3)));
      }
      function Lm(e) {
        var i = we(e) ? Lu : Tg;
        return i(e);
      }
      function Mm(e, i, o) {
        (o ? tr(e, i, o) : i === r) ? i = 1 : i = be(i);
        var c = we(e) ? ag : Rg;
        return c(e, i);
      }
      function qm(e) {
        var i = we(e) ? cg : $g;
        return i(e);
      }
      function zm(e) {
        if (e == null)
          return 0;
        if (ur(e))
          return mo(e) ? un(e) : e.length;
        var i = Wt(e);
        return i == _e || i == Ue ? e.size : ja(e).length;
      }
      function Hm(e, i, o) {
        var c = we(e) ? wa : Dg;
        return o && tr(e, i, o) && (i = r), c(e, he(i, 3));
      }
      var Bm = Se(function(e, i) {
        if (e == null)
          return [];
        var o = i.length;
        return o > 1 && tr(e, i[0], i[1]) ? i = [] : o > 2 && tr(i[0], i[1], i[2]) && (i = [i[0]]), Zu(e, Bt(i, 1), []);
      }), fo = Ip || function() {
        return Ae.Date.now();
      };
      function km(e, i) {
        if (typeof i != "function")
          throw new Sr(y);
        return e = be(e), function() {
          if (--e < 1)
            return i.apply(this, arguments);
        };
      }
      function Wh(e, i, o) {
        return i = o ? r : i, i = e && i == null ? e.length : i, ni(e, N, r, r, r, r, i);
      }
      function Gh(e, i) {
        var o;
        if (typeof i != "function")
          throw new Sr(y);
        return e = be(e), function() {
          return --e > 0 && (o = i.apply(this, arguments)), e <= 1 && (i = r), o;
        };
      }
      var ac = Se(function(e, i, o) {
        var c = te;
        if (o.length) {
          var f = _i(o, mn(ac));
          c |= g;
        }
        return ni(e, c, i, o, f);
      }), Jh = Se(function(e, i, o) {
        var c = te | ue;
        if (o.length) {
          var f = _i(o, mn(Jh));
          c |= g;
        }
        return ni(i, c, e, o, f);
      });
      function Qh(e, i, o) {
        i = o ? r : i;
        var c = ni(e, d, r, r, r, r, r, i);
        return c.placeholder = Qh.placeholder, c;
      }
      function Yh(e, i, o) {
        i = o ? r : i;
        var c = ni(e, m, r, r, r, r, r, i);
        return c.placeholder = Yh.placeholder, c;
      }
      function Xh(e, i, o) {
        var c, f, w, P, T, F, k = 0, V = !1, G = !1, ee = !0;
        if (typeof e != "function")
          throw new Sr(y);
        i = Nr(i) || 0, ht(o) && (V = !!o.leading, G = "maxWait" in o, w = G ? Ut(Nr(o.maxWait) || 0, i) : w, ee = "trailing" in o ? !!o.trailing : ee);
        function ce(It) {
          var Lr = c, ui = f;
          return c = f = r, k = It, P = e.apply(ui, Lr), P;
        }
        function le(It) {
          return k = It, T = Kn(xe, i), V ? ce(It) : P;
        }
        function Ee(It) {
          var Lr = It - F, ui = It - k, ml = i - Lr;
          return G ? Kt(ml, w - ui) : ml;
        }
        function fe(It) {
          var Lr = It - F, ui = It - k;
          return F === r || Lr >= i || Lr < 0 || G && ui >= w;
        }
        function xe() {
          var It = fo();
          if (fe(It))
            return Ne(It);
          T = Kn(xe, Ee(It));
        }
        function Ne(It) {
          return T = r, ee && c ? ce(It) : (c = f = r, P);
        }
        function vr() {
          T !== r && ch(T), k = 0, c = F = f = T = r;
        }
        function rr() {
          return T === r ? P : Ne(fo());
        }
        function wr() {
          var It = fo(), Lr = fe(It);
          if (c = arguments, f = this, F = It, Lr) {
            if (T === r)
              return le(F);
            if (G)
              return ch(T), T = Kn(xe, i), ce(F);
          }
          return T === r && (T = Kn(xe, i)), P;
        }
        return wr.cancel = vr, wr.flush = rr, wr;
      }
      var Vm = Se(function(e, i) {
        return zu(e, 1, i);
      }), Km = Se(function(e, i, o) {
        return zu(e, Nr(i) || 0, o);
      });
      function Wm(e) {
        return ni(e, Q);
      }
      function po(e, i) {
        if (typeof e != "function" || i != null && typeof i != "function")
          throw new Sr(y);
        var o = function() {
          var c = arguments, f = i ? i.apply(this, c) : c[0], w = o.cache;
          if (w.has(f))
            return w.get(f);
          var P = e.apply(this, c);
          return o.cache = w.set(f, P) || w, P;
        };
        return o.cache = new (po.Cache || ri)(), o;
      }
      po.Cache = ri;
      function go(e) {
        if (typeof e != "function")
          throw new Sr(y);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, i[0]);
            case 2:
              return !e.call(this, i[0], i[1]);
            case 3:
              return !e.call(this, i[0], i[1], i[2]);
          }
          return !e.apply(this, i);
        };
      }
      function Gm(e) {
        return Gh(2, e);
      }
      var Jm = Fg(function(e, i) {
        i = i.length == 1 && we(i[0]) ? st(i[0], gr(he())) : st(Bt(i, 1), gr(he()));
        var o = i.length;
        return Se(function(c) {
          for (var f = -1, w = Kt(c.length, o); ++f < w; )
            c[f] = i[f].call(this, c[f]);
          return Lt(e, this, c);
        });
      }), cc = Se(function(e, i) {
        var o = _i(i, mn(cc));
        return ni(e, g, r, i, o);
      }), Zh = Se(function(e, i) {
        var o = _i(i, mn(Zh));
        return ni(e, p, r, i, o);
      }), Qm = si(function(e, i) {
        return ni(e, x, r, r, r, i);
      });
      function Ym(e, i) {
        if (typeof e != "function")
          throw new Sr(y);
        return i = i === r ? i : be(i), Se(e, i);
      }
      function Xm(e, i) {
        if (typeof e != "function")
          throw new Sr(y);
        return i = i == null ? 0 : Ut(be(i), 0), Se(function(o) {
          var c = o[i], f = Pi(o, 0, i);
          return c && bi(f, c), Lt(e, this, f);
        });
      }
      function Zm(e, i, o) {
        var c = !0, f = !0;
        if (typeof e != "function")
          throw new Sr(y);
        return ht(o) && (c = "leading" in o ? !!o.leading : c, f = "trailing" in o ? !!o.trailing : f), Xh(e, i, { leading: c, maxWait: i, trailing: f });
      }
      function e0(e) {
        return Wh(e, 1);
      }
      function t0(e, i) {
        return cc(Ka(i), e);
      }
      function r0() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return we(e) ? e : [e];
      }
      function i0(e) {
        return Pr(e, H);
      }
      function n0(e, i) {
        return i = typeof i == "function" ? i : r, Pr(e, H, i);
      }
      function s0(e) {
        return Pr(e, A | H);
      }
      function o0(e, i) {
        return i = typeof i == "function" ? i : r, Pr(e, A | H, i);
      }
      function a0(e, i) {
        return i == null || qu(e, i, Mt(i));
      }
      function jr(e, i) {
        return e === i || e !== e && i !== i;
      }
      var c0 = oo(Da), u0 = oo(function(e, i) {
        return e >= i;
      }), ki = Ku(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Ku : function(e) {
        return vt(e) && Me.call(e, "callee") && !Cu.call(e, "callee");
      }, we = M.isArray, h0 = Zt ? gr(Zt) : vg;
      function ur(e) {
        return e != null && yo(e.length) && !ai(e);
      }
      function Et(e) {
        return vt(e) && ur(e);
      }
      function l0(e) {
        return e === !0 || e === !1 || vt(e) && er(e) == q;
      }
      var Oi = xp || wc, f0 = Dr ? gr(Dr) : wg;
      function d0(e) {
        return vt(e) && e.nodeType === 1 && !Wn(e);
      }
      function p0(e) {
        if (e == null)
          return !0;
        if (ur(e) && (we(e) || typeof e == "string" || typeof e.splice == "function" || Oi(e) || vn(e) || ki(e)))
          return !e.length;
        var i = Wt(e);
        if (i == _e || i == Ue)
          return !e.size;
        if (Vn(e))
          return !ja(e).length;
        for (var o in e)
          if (Me.call(e, o))
            return !1;
        return !0;
      }
      function g0(e, i) {
        return Hn(e, i);
      }
      function y0(e, i, o) {
        o = typeof o == "function" ? o : r;
        var c = o ? o(e, i) : r;
        return c === r ? Hn(e, i, r, o) : !!c;
      }
      function uc(e) {
        if (!vt(e))
          return !1;
        var i = er(e);
        return i == R || i == l || typeof e.message == "string" && typeof e.name == "string" && !Wn(e);
      }
      function m0(e) {
        return typeof e == "number" && Du(e);
      }
      function ai(e) {
        if (!ht(e))
          return !1;
        var i = er(e);
        return i == ae || i == ye || i == z || i == wt;
      }
      function el(e) {
        return typeof e == "number" && e == be(e);
      }
      function yo(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= X;
      }
      function ht(e) {
        var i = typeof e;
        return e != null && (i == "object" || i == "function");
      }
      function vt(e) {
        return e != null && typeof e == "object";
      }
      var tl = Er ? gr(Er) : _g;
      function v0(e, i) {
        return e === i || Ua(e, i, Za(i));
      }
      function w0(e, i, o) {
        return o = typeof o == "function" ? o : r, Ua(e, i, Za(i), o);
      }
      function b0(e) {
        return rl(e) && e != +e;
      }
      function _0(e) {
        if (ny(e))
          throw new me(h);
        return Wu(e);
      }
      function E0(e) {
        return e === null;
      }
      function I0(e) {
        return e == null;
      }
      function rl(e) {
        return typeof e == "number" || vt(e) && er(e) == Ce;
      }
      function Wn(e) {
        if (!vt(e) || er(e) != Pe)
          return !1;
        var i = Hs(e);
        if (i === null)
          return !0;
        var o = Me.call(i, "constructor") && i.constructor;
        return typeof o == "function" && o instanceof o && Ls.call(o) == wp;
      }
      var hc = Wr ? gr(Wr) : Eg;
      function S0(e) {
        return el(e) && e >= -X && e <= X;
      }
      var il = Cn ? gr(Cn) : Ig;
      function mo(e) {
        return typeof e == "string" || !we(e) && vt(e) && er(e) == Xe;
      }
      function mr(e) {
        return typeof e == "symbol" || vt(e) && er(e) == Ze;
      }
      var vn = Ui ? gr(Ui) : Sg;
      function x0(e) {
        return e === r;
      }
      function P0(e) {
        return vt(e) && Wt(e) == ze;
      }
      function O0(e) {
        return vt(e) && er(e) == et;
      }
      var A0 = oo(La), N0 = oo(function(e, i) {
        return e <= i;
      });
      function nl(e) {
        if (!e)
          return [];
        if (ur(e))
          return mo(e) ? Fr(e) : cr(e);
        if (Dn && e[Dn])
          return ap(e[Dn]());
        var i = Wt(e), o = i == _e ? xa : i == Ue ? Fs : wn;
        return o(e);
      }
      function ci(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Nr(e), e === de || e === -de) {
          var i = e < 0 ? -1 : 1;
          return i * W;
        }
        return e === e ? e : 0;
      }
      function be(e) {
        var i = ci(e), o = i % 1;
        return i === i ? o ? i - o : i : 0;
      }
      function sl(e) {
        return e ? qi(be(e), 0, Z) : 0;
      }
      function Nr(e) {
        if (typeof e == "number")
          return e;
        if (mr(e))
          return Y;
        if (ht(e)) {
          var i = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ht(i) ? i + "" : i;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Su(e);
        var o = ea.test(e);
        return o || ra.test(e) ? ve(e.slice(2), o ? 2 : 8) : Zo.test(e) ? Y : +e;
      }
      function ol(e) {
        return Jr(e, hr(e));
      }
      function T0(e) {
        return e ? qi(be(e), -X, X) : e === 0 ? e : 0;
      }
      function je(e) {
        return e == null ? "" : yr(e);
      }
      var R0 = gn(function(e, i) {
        if (Vn(i) || ur(i)) {
          Jr(i, Mt(i), e);
          return;
        }
        for (var o in i)
          Me.call(i, o) && Mn(e, o, i[o]);
      }), al = gn(function(e, i) {
        Jr(i, hr(i), e);
      }), vo = gn(function(e, i, o, c) {
        Jr(i, hr(i), e, c);
      }), C0 = gn(function(e, i, o, c) {
        Jr(i, Mt(i), e, c);
      }), $0 = si(Ra);
      function D0(e, i) {
        var o = pn(e);
        return i == null ? o : Mu(o, i);
      }
      var F0 = Se(function(e, i) {
        e = Je(e);
        var o = -1, c = i.length, f = c > 2 ? i[2] : r;
        for (f && tr(i[0], i[1], f) && (c = 1); ++o < c; )
          for (var w = i[o], P = hr(w), T = -1, F = P.length; ++T < F; ) {
            var k = P[T], V = e[k];
            (V === r || jr(V, ln[k]) && !Me.call(e, k)) && (e[k] = w[k]);
          }
        return e;
      }), U0 = Se(function(e) {
        return e.push(r, Sh), Lt(cl, r, e);
      });
      function j0(e, i) {
        return bu(e, he(i, 3), Gr);
      }
      function L0(e, i) {
        return bu(e, he(i, 3), $a);
      }
      function M0(e, i) {
        return e == null ? e : Ca(e, he(i, 3), hr);
      }
      function q0(e, i) {
        return e == null ? e : ku(e, he(i, 3), hr);
      }
      function z0(e, i) {
        return e && Gr(e, he(i, 3));
      }
      function H0(e, i) {
        return e && $a(e, he(i, 3));
      }
      function B0(e) {
        return e == null ? [] : Xs(e, Mt(e));
      }
      function k0(e) {
        return e == null ? [] : Xs(e, hr(e));
      }
      function lc(e, i, o) {
        var c = e == null ? r : zi(e, i);
        return c === r ? o : c;
      }
      function V0(e, i) {
        return e != null && Oh(e, i, pg);
      }
      function fc(e, i) {
        return e != null && Oh(e, i, gg);
      }
      var K0 = wh(function(e, i, o) {
        i != null && typeof i.toString != "function" && (i = Ms.call(i)), e[i] = o;
      }, pc(lr)), W0 = wh(function(e, i, o) {
        i != null && typeof i.toString != "function" && (i = Ms.call(i)), Me.call(e, i) ? e[i].push(o) : e[i] = [o];
      }, he), G0 = Se(zn);
      function Mt(e) {
        return ur(e) ? ju(e) : ja(e);
      }
      function hr(e) {
        return ur(e) ? ju(e, !0) : xg(e);
      }
      function J0(e, i) {
        var o = {};
        return i = he(i, 3), Gr(e, function(c, f, w) {
          ii(o, i(c, f, w), c);
        }), o;
      }
      function Q0(e, i) {
        var o = {};
        return i = he(i, 3), Gr(e, function(c, f, w) {
          ii(o, f, i(c, f, w));
        }), o;
      }
      var Y0 = gn(function(e, i, o) {
        Zs(e, i, o);
      }), cl = gn(function(e, i, o, c) {
        Zs(e, i, o, c);
      }), X0 = si(function(e, i) {
        var o = {};
        if (e == null)
          return o;
        var c = !1;
        i = st(i, function(w) {
          return w = xi(w, e), c || (c = w.length > 1), w;
        }), Jr(e, Ya(e), o), c && (o = Pr(o, A | j | H, Kg));
        for (var f = i.length; f--; )
          Ba(o, i[f]);
        return o;
      });
      function Z0(e, i) {
        return ul(e, go(he(i)));
      }
      var ev = si(function(e, i) {
        return e == null ? {} : Og(e, i);
      });
      function ul(e, i) {
        if (e == null)
          return {};
        var o = st(Ya(e), function(c) {
          return [c];
        });
        return i = he(i), eh(e, o, function(c, f) {
          return i(c, f[0]);
        });
      }
      function tv(e, i, o) {
        i = xi(i, e);
        var c = -1, f = i.length;
        for (f || (f = 1, e = r); ++c < f; ) {
          var w = e == null ? r : e[Qr(i[c])];
          w === r && (c = f, w = o), e = ai(w) ? w.call(e) : w;
        }
        return e;
      }
      function rv(e, i, o) {
        return e == null ? e : Bn(e, i, o);
      }
      function iv(e, i, o, c) {
        return c = typeof c == "function" ? c : r, e == null ? e : Bn(e, i, o, c);
      }
      var hl = Eh(Mt), ll = Eh(hr);
      function nv(e, i, o) {
        var c = we(e), f = c || Oi(e) || vn(e);
        if (i = he(i, 4), o == null) {
          var w = e && e.constructor;
          f ? o = c ? new w() : [] : ht(e) ? o = ai(w) ? pn(Hs(e)) : {} : o = {};
        }
        return (f ? Ir : Gr)(e, function(P, T, F) {
          return i(o, P, T, F);
        }), o;
      }
      function sv(e, i) {
        return e == null ? !0 : Ba(e, i);
      }
      function ov(e, i, o) {
        return e == null ? e : sh(e, i, Ka(o));
      }
      function av(e, i, o, c) {
        return c = typeof c == "function" ? c : r, e == null ? e : sh(e, i, Ka(o), c);
      }
      function wn(e) {
        return e == null ? [] : Sa(e, Mt(e));
      }
      function cv(e) {
        return e == null ? [] : Sa(e, hr(e));
      }
      function uv(e, i, o) {
        return o === r && (o = i, i = r), o !== r && (o = Nr(o), o = o === o ? o : 0), i !== r && (i = Nr(i), i = i === i ? i : 0), qi(Nr(e), i, o);
      }
      function hv(e, i, o) {
        return i = ci(i), o === r ? (o = i, i = 0) : o = ci(o), e = Nr(e), yg(e, i, o);
      }
      function lv(e, i, o) {
        if (o && typeof o != "boolean" && tr(e, i, o) && (i = o = r), o === r && (typeof i == "boolean" ? (o = i, i = r) : typeof e == "boolean" && (o = e, e = r)), e === r && i === r ? (e = 0, i = 1) : (e = ci(e), i === r ? (i = e, e = 0) : i = ci(i)), e > i) {
          var c = e;
          e = i, i = c;
        }
        if (o || e % 1 || i % 1) {
          var f = Fu();
          return Kt(e + f * (i - e + We("1e-" + ((f + "").length - 1))), i);
        }
        return qa(e, i);
      }
      var fv = yn(function(e, i, o) {
        return i = i.toLowerCase(), e + (o ? fl(i) : i);
      });
      function fl(e) {
        return dc(je(e).toLowerCase());
      }
      function dl(e) {
        return e = je(e), e && e.replace(Zr, rp).replace(ga, "");
      }
      function dv(e, i, o) {
        e = je(e), i = yr(i);
        var c = e.length;
        o = o === r ? c : qi(be(o), 0, c);
        var f = o;
        return o -= i.length, o >= 0 && e.slice(o, f) == i;
      }
      function pv(e) {
        return e = je(e), e && it.test(e) ? e.replace(Ri, ip) : e;
      }
      function gv(e) {
        return e = je(e), e && Nt.test(e) ? e.replace(gt, "\\$&") : e;
      }
      var yv = yn(function(e, i, o) {
        return e + (o ? "-" : "") + i.toLowerCase();
      }), mv = yn(function(e, i, o) {
        return e + (o ? " " : "") + i.toLowerCase();
      }), vv = yh("toLowerCase");
      function wv(e, i, o) {
        e = je(e), i = be(i);
        var c = i ? un(e) : 0;
        if (!i || c >= i)
          return e;
        var f = (i - c) / 2;
        return so(Ks(f), o) + e + so(Vs(f), o);
      }
      function bv(e, i, o) {
        e = je(e), i = be(i);
        var c = i ? un(e) : 0;
        return i && c < i ? e + so(i - c, o) : e;
      }
      function _v(e, i, o) {
        e = je(e), i = be(i);
        var c = i ? un(e) : 0;
        return i && c < i ? so(i - c, o) + e : e;
      }
      function Ev(e, i, o) {
        return o || i == null ? i = 0 : i && (i = +i), Np(je(e).replace(yt, ""), i || 0);
      }
      function Iv(e, i, o) {
        return (o ? tr(e, i, o) : i === r) ? i = 1 : i = be(i), za(je(e), i);
      }
      function Sv() {
        var e = arguments, i = je(e[0]);
        return e.length < 3 ? i : i.replace(e[1], e[2]);
      }
      var xv = yn(function(e, i, o) {
        return e + (o ? "_" : "") + i.toLowerCase();
      });
      function Pv(e, i, o) {
        return o && typeof o != "number" && tr(e, i, o) && (i = o = r), o = o === r ? Z : o >>> 0, o ? (e = je(e), e && (typeof i == "string" || i != null && !hc(i)) && (i = yr(i), !i && cn(e)) ? Pi(Fr(e), 0, o) : e.split(i, o)) : [];
      }
      var Ov = yn(function(e, i, o) {
        return e + (o ? " " : "") + dc(i);
      });
      function Av(e, i, o) {
        return e = je(e), o = o == null ? 0 : qi(be(o), 0, e.length), i = yr(i), e.slice(o, o + i.length) == i;
      }
      function Nv(e, i, o) {
        var c = v.templateSettings;
        o && tr(e, i, o) && (i = r), e = je(e), i = vo({}, i, c, Ih);
        var f = vo({}, i.imports, c.imports, Ih), w = Mt(f), P = Sa(f, w), T, F, k = 0, V = i.interpolate || Zi, G = "__p += '", ee = Pa((i.escape || Zi).source + "|" + V.source + "|" + (V === ut ? Xo : Zi).source + "|" + (i.evaluate || Zi).source + "|$", "g"), ce = "//# sourceURL=" + (Me.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ya + "]") + `
`;
        e.replace(ee, function(fe, xe, Ne, vr, rr, wr) {
          return Ne || (Ne = vr), G += e.slice(k, wr).replace(na, np), xe && (T = !0, G += `' +
__e(` + xe + `) +
'`), rr && (F = !0, G += `';
` + rr + `;
__p += '`), Ne && (G += `' +
((__t = (` + Ne + `)) == null ? '' : __t) +
'`), k = wr + fe.length, fe;
        }), G += `';
`;
        var le = Me.call(i, "variable") && i.variable;
        if (!le)
          G = `with (obj) {
` + G + `
}
`;
        else if (Qo.test(le))
          throw new me(b);
        G = (F ? G.replace(Vr, "") : G).replace(Xt, "$1").replace(Xr, "$1;"), G = "function(" + (le || "obj") + `) {
` + (le ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (T ? ", __e = _.escape" : "") + (F ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + G + `return __p
}`;
        var Ee = gl(function() {
          return Fe(w, ce + "return " + G).apply(r, P);
        });
        if (Ee.source = G, uc(Ee))
          throw Ee;
        return Ee;
      }
      function Tv(e) {
        return je(e).toLowerCase();
      }
      function Rv(e) {
        return je(e).toUpperCase();
      }
      function Cv(e, i, o) {
        if (e = je(e), e && (o || i === r))
          return Su(e);
        if (!e || !(i = yr(i)))
          return e;
        var c = Fr(e), f = Fr(i), w = xu(c, f), P = Pu(c, f) + 1;
        return Pi(c, w, P).join("");
      }
      function $v(e, i, o) {
        if (e = je(e), e && (o || i === r))
          return e.slice(0, Au(e) + 1);
        if (!e || !(i = yr(i)))
          return e;
        var c = Fr(e), f = Pu(c, Fr(i)) + 1;
        return Pi(c, 0, f).join("");
      }
      function Dv(e, i, o) {
        if (e = je(e), e && (o || i === r))
          return e.replace(yt, "");
        if (!e || !(i = yr(i)))
          return e;
        var c = Fr(e), f = xu(c, Fr(i));
        return Pi(c, f).join("");
      }
      function Fv(e, i) {
        var o = se, c = pe;
        if (ht(i)) {
          var f = "separator" in i ? i.separator : f;
          o = "length" in i ? be(i.length) : o, c = "omission" in i ? yr(i.omission) : c;
        }
        e = je(e);
        var w = e.length;
        if (cn(e)) {
          var P = Fr(e);
          w = P.length;
        }
        if (o >= w)
          return e;
        var T = o - un(c);
        if (T < 1)
          return c;
        var F = P ? Pi(P, 0, T).join("") : e.slice(0, T);
        if (f === r)
          return F + c;
        if (P && (T += F.length - T), hc(f)) {
          if (e.slice(T).search(f)) {
            var k, V = F;
            for (f.global || (f = Pa(f.source, je(_r.exec(f)) + "g")), f.lastIndex = 0; k = f.exec(V); )
              var G = k.index;
            F = F.slice(0, G === r ? T : G);
          }
        } else if (e.indexOf(yr(f), T) != T) {
          var ee = F.lastIndexOf(f);
          ee > -1 && (F = F.slice(0, ee));
        }
        return F + c;
      }
      function Uv(e) {
        return e = je(e), e && ft.test(e) ? e.replace(mi, lp) : e;
      }
      var jv = yn(function(e, i, o) {
        return e + (o ? " " : "") + i.toUpperCase();
      }), dc = yh("toUpperCase");
      function pl(e, i, o) {
        return e = je(e), i = o ? r : i, i === r ? op(e) ? pp(e) : Yd(e) : e.match(i) || [];
      }
      var gl = Se(function(e, i) {
        try {
          return Lt(e, r, i);
        } catch (o) {
          return uc(o) ? o : new me(o);
        }
      }), Lv = si(function(e, i) {
        return Ir(i, function(o) {
          o = Qr(o), ii(e, o, ac(e[o], e));
        }), e;
      });
      function Mv(e) {
        var i = e == null ? 0 : e.length, o = he();
        return e = i ? st(e, function(c) {
          if (typeof c[1] != "function")
            throw new Sr(y);
          return [o(c[0]), c[1]];
        }) : [], Se(function(c) {
          for (var f = -1; ++f < i; ) {
            var w = e[f];
            if (Lt(w[0], this, c))
              return Lt(w[1], this, c);
          }
        });
      }
      function qv(e) {
        return lg(Pr(e, A));
      }
      function pc(e) {
        return function() {
          return e;
        };
      }
      function zv(e, i) {
        return e == null || e !== e ? i : e;
      }
      var Hv = vh(), Bv = vh(!0);
      function lr(e) {
        return e;
      }
      function gc(e) {
        return Gu(typeof e == "function" ? e : Pr(e, A));
      }
      function kv(e) {
        return Qu(Pr(e, A));
      }
      function Vv(e, i) {
        return Yu(e, Pr(i, A));
      }
      var Kv = Se(function(e, i) {
        return function(o) {
          return zn(o, e, i);
        };
      }), Wv = Se(function(e, i) {
        return function(o) {
          return zn(e, o, i);
        };
      });
      function yc(e, i, o) {
        var c = Mt(i), f = Xs(i, c);
        o == null && !(ht(i) && (f.length || !c.length)) && (o = i, i = e, e = this, f = Xs(i, Mt(i)));
        var w = !(ht(o) && "chain" in o) || !!o.chain, P = ai(e);
        return Ir(f, function(T) {
          var F = i[T];
          e[T] = F, P && (e.prototype[T] = function() {
            var k = this.__chain__;
            if (w || k) {
              var V = e(this.__wrapped__), G = V.__actions__ = cr(this.__actions__);
              return G.push({ func: F, args: arguments, thisArg: e }), V.__chain__ = k, V;
            }
            return F.apply(e, bi([this.value()], arguments));
          });
        }), e;
      }
      function Gv() {
        return Ae._ === this && (Ae._ = bp), this;
      }
      function mc() {
      }
      function Jv(e) {
        return e = be(e), Se(function(i) {
          return Xu(i, e);
        });
      }
      var Qv = Ga(st), Yv = Ga(wu), Xv = Ga(wa);
      function yl(e) {
        return tc(e) ? ba(Qr(e)) : Ag(e);
      }
      function Zv(e) {
        return function(i) {
          return e == null ? r : zi(e, i);
        };
      }
      var e1 = bh(), t1 = bh(!0);
      function vc() {
        return [];
      }
      function wc() {
        return !1;
      }
      function r1() {
        return {};
      }
      function i1() {
        return "";
      }
      function n1() {
        return !0;
      }
      function s1(e, i) {
        if (e = be(e), e < 1 || e > X)
          return [];
        var o = Z, c = Kt(e, Z);
        i = he(i), e -= Z;
        for (var f = Ia(c, i); ++o < e; )
          i(o);
        return f;
      }
      function o1(e) {
        return we(e) ? st(e, Qr) : mr(e) ? [e] : cr(Uh(je(e)));
      }
      function a1(e) {
        var i = ++vp;
        return je(e) + i;
      }
      var c1 = no(function(e, i) {
        return e + i;
      }, 0), u1 = Ja("ceil"), h1 = no(function(e, i) {
        return e / i;
      }, 1), l1 = Ja("floor");
      function f1(e) {
        return e && e.length ? Ys(e, lr, Da) : r;
      }
      function d1(e, i) {
        return e && e.length ? Ys(e, he(i, 2), Da) : r;
      }
      function p1(e) {
        return Eu(e, lr);
      }
      function g1(e, i) {
        return Eu(e, he(i, 2));
      }
      function y1(e) {
        return e && e.length ? Ys(e, lr, La) : r;
      }
      function m1(e, i) {
        return e && e.length ? Ys(e, he(i, 2), La) : r;
      }
      var v1 = no(function(e, i) {
        return e * i;
      }, 1), w1 = Ja("round"), b1 = no(function(e, i) {
        return e - i;
      }, 0);
      function _1(e) {
        return e && e.length ? Ea(e, lr) : 0;
      }
      function E1(e, i) {
        return e && e.length ? Ea(e, he(i, 2)) : 0;
      }
      return v.after = km, v.ary = Wh, v.assign = R0, v.assignIn = al, v.assignInWith = vo, v.assignWith = C0, v.at = $0, v.before = Gh, v.bind = ac, v.bindAll = Lv, v.bindKey = Jh, v.castArray = r0, v.chain = kh, v.chunk = ly, v.compact = fy, v.concat = dy, v.cond = Mv, v.conforms = qv, v.constant = pc, v.countBy = _m, v.create = D0, v.curry = Qh, v.curryRight = Yh, v.debounce = Xh, v.defaults = F0, v.defaultsDeep = U0, v.defer = Vm, v.delay = Km, v.difference = py, v.differenceBy = gy, v.differenceWith = yy, v.drop = my, v.dropRight = vy, v.dropRightWhile = wy, v.dropWhile = by, v.fill = _y, v.filter = Im, v.flatMap = Pm, v.flatMapDeep = Om, v.flatMapDepth = Am, v.flatten = qh, v.flattenDeep = Ey, v.flattenDepth = Iy, v.flip = Wm, v.flow = Hv, v.flowRight = Bv, v.fromPairs = Sy, v.functions = B0, v.functionsIn = k0, v.groupBy = Nm, v.initial = Py, v.intersection = Oy, v.intersectionBy = Ay, v.intersectionWith = Ny, v.invert = K0, v.invertBy = W0, v.invokeMap = Rm, v.iteratee = gc, v.keyBy = Cm, v.keys = Mt, v.keysIn = hr, v.map = lo, v.mapKeys = J0, v.mapValues = Q0, v.matches = kv, v.matchesProperty = Vv, v.memoize = po, v.merge = Y0, v.mergeWith = cl, v.method = Kv, v.methodOf = Wv, v.mixin = yc, v.negate = go, v.nthArg = Jv, v.omit = X0, v.omitBy = Z0, v.once = Gm, v.orderBy = $m, v.over = Qv, v.overArgs = Jm, v.overEvery = Yv, v.overSome = Xv, v.partial = cc, v.partialRight = Zh, v.partition = Dm, v.pick = ev, v.pickBy = ul, v.property = yl, v.propertyOf = Zv, v.pull = $y, v.pullAll = Hh, v.pullAllBy = Dy, v.pullAllWith = Fy, v.pullAt = Uy, v.range = e1, v.rangeRight = t1, v.rearg = Qm, v.reject = jm, v.remove = jy, v.rest = Ym, v.reverse = sc, v.sampleSize = Mm, v.set = rv, v.setWith = iv, v.shuffle = qm, v.slice = Ly, v.sortBy = Bm, v.sortedUniq = Vy, v.sortedUniqBy = Ky, v.split = Pv, v.spread = Xm, v.tail = Wy, v.take = Gy, v.takeRight = Jy, v.takeRightWhile = Qy, v.takeWhile = Yy, v.tap = fm, v.throttle = Zm, v.thru = ho, v.toArray = nl, v.toPairs = hl, v.toPairsIn = ll, v.toPath = o1, v.toPlainObject = ol, v.transform = nv, v.unary = e0, v.union = Xy, v.unionBy = Zy, v.unionWith = em, v.uniq = tm, v.uniqBy = rm, v.uniqWith = im, v.unset = sv, v.unzip = oc, v.unzipWith = Bh, v.update = ov, v.updateWith = av, v.values = wn, v.valuesIn = cv, v.without = nm, v.words = pl, v.wrap = t0, v.xor = sm, v.xorBy = om, v.xorWith = am, v.zip = cm, v.zipObject = um, v.zipObjectDeep = hm, v.zipWith = lm, v.entries = hl, v.entriesIn = ll, v.extend = al, v.extendWith = vo, yc(v, v), v.add = c1, v.attempt = gl, v.camelCase = fv, v.capitalize = fl, v.ceil = u1, v.clamp = uv, v.clone = i0, v.cloneDeep = s0, v.cloneDeepWith = o0, v.cloneWith = n0, v.conformsTo = a0, v.deburr = dl, v.defaultTo = zv, v.divide = h1, v.endsWith = dv, v.eq = jr, v.escape = pv, v.escapeRegExp = gv, v.every = Em, v.find = Sm, v.findIndex = Lh, v.findKey = j0, v.findLast = xm, v.findLastIndex = Mh, v.findLastKey = L0, v.floor = l1, v.forEach = Vh, v.forEachRight = Kh, v.forIn = M0, v.forInRight = q0, v.forOwn = z0, v.forOwnRight = H0, v.get = lc, v.gt = c0, v.gte = u0, v.has = V0, v.hasIn = fc, v.head = zh, v.identity = lr, v.includes = Tm, v.indexOf = xy, v.inRange = hv, v.invoke = G0, v.isArguments = ki, v.isArray = we, v.isArrayBuffer = h0, v.isArrayLike = ur, v.isArrayLikeObject = Et, v.isBoolean = l0, v.isBuffer = Oi, v.isDate = f0, v.isElement = d0, v.isEmpty = p0, v.isEqual = g0, v.isEqualWith = y0, v.isError = uc, v.isFinite = m0, v.isFunction = ai, v.isInteger = el, v.isLength = yo, v.isMap = tl, v.isMatch = v0, v.isMatchWith = w0, v.isNaN = b0, v.isNative = _0, v.isNil = I0, v.isNull = E0, v.isNumber = rl, v.isObject = ht, v.isObjectLike = vt, v.isPlainObject = Wn, v.isRegExp = hc, v.isSafeInteger = S0, v.isSet = il, v.isString = mo, v.isSymbol = mr, v.isTypedArray = vn, v.isUndefined = x0, v.isWeakMap = P0, v.isWeakSet = O0, v.join = Ty, v.kebabCase = yv, v.last = Ar, v.lastIndexOf = Ry, v.lowerCase = mv, v.lowerFirst = vv, v.lt = A0, v.lte = N0, v.max = f1, v.maxBy = d1, v.mean = p1, v.meanBy = g1, v.min = y1, v.minBy = m1, v.stubArray = vc, v.stubFalse = wc, v.stubObject = r1, v.stubString = i1, v.stubTrue = n1, v.multiply = v1, v.nth = Cy, v.noConflict = Gv, v.noop = mc, v.now = fo, v.pad = wv, v.padEnd = bv, v.padStart = _v, v.parseInt = Ev, v.random = lv, v.reduce = Fm, v.reduceRight = Um, v.repeat = Iv, v.replace = Sv, v.result = tv, v.round = w1, v.runInContext = D, v.sample = Lm, v.size = zm, v.snakeCase = xv, v.some = Hm, v.sortedIndex = My, v.sortedIndexBy = qy, v.sortedIndexOf = zy, v.sortedLastIndex = Hy, v.sortedLastIndexBy = By, v.sortedLastIndexOf = ky, v.startCase = Ov, v.startsWith = Av, v.subtract = b1, v.sum = _1, v.sumBy = E1, v.template = Nv, v.times = s1, v.toFinite = ci, v.toInteger = be, v.toLength = sl, v.toLower = Tv, v.toNumber = Nr, v.toSafeInteger = T0, v.toString = je, v.toUpper = Rv, v.trim = Cv, v.trimEnd = $v, v.trimStart = Dv, v.truncate = Fv, v.unescape = Uv, v.uniqueId = a1, v.upperCase = jv, v.upperFirst = dc, v.each = Vh, v.eachRight = Kh, v.first = zh, yc(v, function() {
        var e = {};
        return Gr(v, function(i, o) {
          Me.call(v.prototype, o) || (e[o] = i);
        }), e;
      }(), { chain: !1 }), v.VERSION = s, Ir(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        v[e].placeholder = v;
      }), Ir(["drop", "take"], function(e, i) {
        Oe.prototype[e] = function(o) {
          o = o === r ? 1 : Ut(be(o), 0);
          var c = this.__filtered__ && !i ? new Oe(this) : this.clone();
          return c.__filtered__ ? c.__takeCount__ = Kt(o, c.__takeCount__) : c.__views__.push({ size: Kt(o, Z), type: e + (c.__dir__ < 0 ? "Right" : "") }), c;
        }, Oe.prototype[e + "Right"] = function(o) {
          return this.reverse()[e](o).reverse();
        };
      }), Ir(["filter", "map", "takeWhile"], function(e, i) {
        var o = i + 1, c = o == S || o == ie;
        Oe.prototype[e] = function(f) {
          var w = this.clone();
          return w.__iteratees__.push({ iteratee: he(f, 3), type: o }), w.__filtered__ = w.__filtered__ || c, w;
        };
      }), Ir(["head", "last"], function(e, i) {
        var o = "take" + (i ? "Right" : "");
        Oe.prototype[e] = function() {
          return this[o](1).value()[0];
        };
      }), Ir(["initial", "tail"], function(e, i) {
        var o = "drop" + (i ? "" : "Right");
        Oe.prototype[e] = function() {
          return this.__filtered__ ? new Oe(this) : this[o](1);
        };
      }), Oe.prototype.compact = function() {
        return this.filter(lr);
      }, Oe.prototype.find = function(e) {
        return this.filter(e).head();
      }, Oe.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, Oe.prototype.invokeMap = Se(function(e, i) {
        return typeof e == "function" ? new Oe(this) : this.map(function(o) {
          return zn(o, e, i);
        });
      }), Oe.prototype.reject = function(e) {
        return this.filter(go(he(e)));
      }, Oe.prototype.slice = function(e, i) {
        e = be(e);
        var o = this;
        return o.__filtered__ && (e > 0 || i < 0) ? new Oe(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), i !== r && (i = be(i), o = i < 0 ? o.dropRight(-i) : o.take(i - e)), o);
      }, Oe.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, Oe.prototype.toArray = function() {
        return this.take(Z);
      }, Gr(Oe.prototype, function(e, i) {
        var o = /^(?:filter|find|map|reject)|While$/.test(i), c = /^(?:head|last)$/.test(i), f = v[c ? "take" + (i == "last" ? "Right" : "") : i], w = c || /^find/.test(i);
        f && (v.prototype[i] = function() {
          var P = this.__wrapped__, T = c ? [1] : arguments, F = P instanceof Oe, k = T[0], V = F || we(P), G = function(xe) {
            var Ne = f.apply(v, bi([xe], T));
            return c && ee ? Ne[0] : Ne;
          };
          V && o && typeof k == "function" && k.length != 1 && (F = V = !1);
          var ee = this.__chain__, ce = !!this.__actions__.length, le = w && !ee, Ee = F && !ce;
          if (!w && V) {
            P = Ee ? P : new Oe(this);
            var fe = e.apply(P, T);
            return fe.__actions__.push({ func: ho, args: [G], thisArg: r }), new xr(fe, ee);
          }
          return le && Ee ? e.apply(this, T) : (fe = this.thru(G), le ? c ? fe.value()[0] : fe.value() : fe);
        });
      }), Ir(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var i = Us[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", c = /^(?:pop|shift)$/.test(e);
        v.prototype[e] = function() {
          var f = arguments;
          if (c && !this.__chain__) {
            var w = this.value();
            return i.apply(we(w) ? w : [], f);
          }
          return this[o](function(P) {
            return i.apply(we(P) ? P : [], f);
          });
        };
      }), Gr(Oe.prototype, function(e, i) {
        var o = v[i];
        if (o) {
          var c = o.name + "";
          Me.call(dn, c) || (dn[c] = []), dn[c].push({ name: i, func: o });
        }
      }), dn[io(r, ue).name] = [{ name: "wrapper", func: r }], Oe.prototype.clone = Up, Oe.prototype.reverse = jp, Oe.prototype.value = Lp, v.prototype.at = dm, v.prototype.chain = pm, v.prototype.commit = gm, v.prototype.next = ym, v.prototype.plant = vm, v.prototype.reverse = wm, v.prototype.toJSON = v.prototype.valueOf = v.prototype.value = bm, v.prototype.first = v.prototype.head, Dn && (v.prototype[Dn] = mm), v;
    }, hn = gp();
    _t ? ((_t.exports = hn)._ = hn, Ge._ = hn) : Ae._ = hn;
  }).call(ts);
})(Zc, Zc.exports);
var hx = Object.defineProperty, lx = Object.defineProperties, fx = Object.getOwnPropertyDescriptors, Ff = Object.getOwnPropertySymbols, dx = Object.prototype.hasOwnProperty, px = Object.prototype.propertyIsEnumerable, Uf = (n, t, r) => t in n ? hx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, Io = (n, t) => {
  for (var r in t || (t = {}))
    dx.call(t, r) && Uf(n, r, t[r]);
  if (Ff)
    for (var r of Ff(t))
      px.call(t, r) && Uf(n, r, t[r]);
  return n;
}, gx = (n, t) => lx(n, fx(t));
function Ni(n, t, r) {
  var s;
  const a = ex(n);
  return ((s = t.rpcMap) == null ? void 0 : s[a.reference]) || `${ux}?chainId=${a.namespace}:${a.reference}&projectId=${r}`;
}
function Xi(n) {
  return n.includes(":") ? n.split(":")[1] : n;
}
function kd(n) {
  return n.map((t) => `${t.split(":")[0]}:${t.split(":")[1]}`);
}
function yx(n, t) {
  const r = Object.keys(t.namespaces).filter((a) => a.includes(n));
  if (!r.length)
    return [];
  const s = [];
  return r.forEach((a) => {
    const h = t.namespaces[a].accounts;
    s.push(...h);
  }), s;
}
function mx(n = {}, t = {}) {
  const r = jf(n), s = jf(t);
  return Zc.exports.merge(r, s);
}
function jf(n) {
  var t, r, s, a;
  const h = {};
  if (!rx(n))
    return h;
  for (const [y, b] of Object.entries(n)) {
    const O = yu(y) ? [y] : b.chains, _ = b.methods || [], E = b.events || [], A = b.rpcMap || {}, j = ns(y);
    h[j] = gx(Io(Io({}, h[j]), b), { chains: Uc(O, (t = h[j]) == null ? void 0 : t.chains), methods: Uc(_, (r = h[j]) == null ? void 0 : r.methods), events: Uc(E, (s = h[j]) == null ? void 0 : s.events), rpcMap: Io(Io({}, A), (a = h[j]) == null ? void 0 : a.rpcMap) });
  }
  return h;
}
function vx(n) {
  return n.includes(":") ? n.split(":")[2] : n;
}
function wx(n) {
  const t = {};
  for (const [r, s] of Object.entries(n)) {
    const a = s.methods || [], h = s.events || [], y = s.accounts || [], b = yu(r) ? [r] : s.chains ? s.chains : kd(s.accounts);
    t[r] = { chains: b, methods: a, events: h, accounts: y };
  }
  return t;
}
function jc(n) {
  return typeof n == "number" ? n : n.includes("0x") ? parseInt(n, 16) : n.includes(":") ? Number(n.split(":")[1]) : Number(n);
}
const Vd = {}, ot = (n) => Vd[n], Lc = (n, t) => {
  Vd[n] = t;
};
class bx {
  constructor(t) {
    this.name = "polkadot", this.namespace = t.namespace, this.events = ot("events"), this.client = ot("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(yi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = Xi(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new gi(new Ti(s, ot("disableProviderPing")));
  }
}
class _x {
  constructor(t) {
    this.name = "eip155", this.namespace = t.namespace, this.events = ot("events"), this.client = ot("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(t) {
    switch (t.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(t);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(parseInt(t), r), this.chainId = parseInt(t), this.events.emit(yi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId.toString();
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  createHttpProvider(t, r) {
    const s = r || Ni(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new gi(new Ti(s, ot("disableProviderPing")));
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = parseInt(Xi(r));
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const t = this.chainId, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  async handleSwitchChain(t) {
    var r, s;
    let a = t.request.params ? (r = t.request.params[0]) == null ? void 0 : r.chainId : "0x0";
    a = a.startsWith("0x") ? a : `0x${a}`;
    const h = parseInt(a, 16);
    if (this.isChainApproved(h))
      this.setDefaultChain(`${h}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({ topic: t.topic, request: { method: t.request.method, params: [{ chainId: a }] }, chainId: (s = this.namespace.chains) == null ? void 0 : s[0] }), this.setDefaultChain(`${h}`);
    else
      throw new Error(`Failed to switch to chain 'eip155:${h}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(t) {
    return this.namespace.chains.includes(`${this.name}:${t}`);
  }
}
class Ex {
  constructor(t) {
    this.name = "solana", this.namespace = t.namespace, this.events = ot("events"), this.client = ot("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(yi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = Xi(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new gi(new Ti(s, ot("disableProviderPing")));
  }
}
class Ix {
  constructor(t) {
    this.name = "cosmos", this.namespace = t.namespace, this.events = ot("events"), this.client = ot("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(yi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = Xi(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new gi(new Ti(s, ot("disableProviderPing")));
  }
}
class Sx {
  constructor(t) {
    this.name = "cip34", this.namespace = t.namespace, this.events = ot("events"), this.client = ot("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(yi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      const s = this.getCardanoRPCUrl(r), a = Xi(r);
      t[a] = this.createHttpProvider(a, s);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  getCardanoRPCUrl(t) {
    const r = this.namespace.rpcMap;
    if (r)
      return r[t];
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || this.getCardanoRPCUrl(t);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new gi(new Ti(s, ot("disableProviderPing")));
  }
}
class xx {
  constructor(t) {
    this.name = "elrond", this.namespace = t.namespace, this.events = ot("events"), this.client = ot("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(yi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = Xi(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new gi(new Ti(s, ot("disableProviderPing")));
  }
}
class Px {
  constructor(t) {
    this.name = "multiversx", this.namespace = t.namespace, this.events = ot("events"), this.client = ot("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(yi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      const a = Xi(r);
      t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s)
      throw new Error(`No RPC url provided for chainId: ${t}`);
    return new gi(new Ti(s, ot("disableProviderPing")));
  }
}
class Ox {
  constructor(t) {
    this.name = "near", this.namespace = t.namespace, this.events = ot("events"), this.client = ot("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t)
      throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    if (this.chainId = t, !this.httpProviders[t]) {
      const s = r || Ni(`${this.name}:${t}`, this.namespace);
      if (!s)
        throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s);
    }
    this.events.emit(yi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((r) => {
      var s;
      t[r] = this.createHttpProvider(r, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, r = this.httpProviders[t];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace);
    return typeof s > "u" ? void 0 : new gi(new Ti(s, ot("disableProviderPing")));
  }
}
var Ax = Object.defineProperty, Nx = Object.defineProperties, Tx = Object.getOwnPropertyDescriptors, Lf = Object.getOwnPropertySymbols, Rx = Object.prototype.hasOwnProperty, Cx = Object.prototype.propertyIsEnumerable, Mf = (n, t, r) => t in n ? Ax(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, So = (n, t) => {
  for (var r in t || (t = {}))
    Rx.call(t, r) && Mf(n, r, t[r]);
  if (Lf)
    for (var r of Lf(t))
      Cx.call(t, r) && Mf(n, r, t[r]);
  return n;
}, Mc = (n, t) => Nx(n, Tx(t));
class mu {
  constructor(t) {
    this.events = new ru(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Te.pino(Te.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || $f })), this.disableProviderPing = (t == null ? void 0 : t.disableProviderPing) || !1;
  }
  static async init(t) {
    const r = new mu(t);
    return await r.initialize(), r;
  }
  async request(t, r) {
    const [s, a] = this.validateChain(r);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(s).request({ request: So({}, t), chainId: `${s}:${a}`, topic: this.session.topic });
  }
  sendAsync(t, r, s) {
    this.request(t, s).then((a) => r(null, a)).catch((a) => r(a, void 0));
  }
  async enable() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var t;
    if (!this.session)
      throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (t = this.session) == null ? void 0 : t.topic, reason: Af("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(t) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing)
      return await this.pair(t.pairingTopic);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(t) {
    this.shouldAbortPairingAttempt = !1;
    let r = 0;
    do {
      if (this.shouldAbortPairingAttempt)
        throw new Error("Pairing aborted");
      if (r >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: s, approval: a } = await this.client.connect({ pairingTopic: t, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      s && (this.uri = s, this.events.emit("display_uri", s)), await a().then((h) => {
        this.session = h, this.namespaces || (this.namespaces = wx(h.namespaces), this.persist("namespaces", this.namespaces));
      }).catch((h) => {
        if (h.message !== Hd)
          throw h;
        r++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(t, r) {
    try {
      if (!this.session)
        return;
      const [s, a] = this.validateChain(t);
      this.getProvider(s).setDefaultChain(a, r);
    } catch (s) {
      if (!/Please call connect/.test(s.message))
        throw s;
    }
  }
  async cleanupPendingPairings(t = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const r = this.client.pairing.getAll();
    if (Nf(r)) {
      for (const s of r)
        t.deletePairings ? this.client.core.expirer.set(s.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
      this.logger.info(`Inactive pairings cleared: ${r.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const t = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await YS.init({ logger: this.providerOpts.logger || $f, relayUrl: this.providerOpts.relayUrl || ox, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error("Session not initialized. Please call connect() before enable()");
    const t = [...new Set(Object.keys(this.session.namespaces).map((r) => ns(r)))];
    Lc("client", this.client), Lc("events", this.events), Lc("disableProviderPing", this.disableProviderPing), t.forEach((r) => {
      if (!this.session)
        return;
      const s = yx(r, this.session), a = kd(s), h = mx(this.namespaces, this.optionalNamespaces), y = Mc(So({}, h[r]), { accounts: s, chains: a });
      switch (r) {
        case "eip155":
          this.rpcProviders[r] = new _x({ namespace: y });
          break;
        case "solana":
          this.rpcProviders[r] = new Ex({ namespace: y });
          break;
        case "cosmos":
          this.rpcProviders[r] = new Ix({ namespace: y });
          break;
        case "polkadot":
          this.rpcProviders[r] = new bx({ namespace: y });
          break;
        case "cip34":
          this.rpcProviders[r] = new Sx({ namespace: y });
          break;
        case "elrond":
          this.rpcProviders[r] = new xx({ namespace: y });
          break;
        case "multiversx":
          this.rpcProviders[r] = new Px({ namespace: y });
          break;
        case "near":
          this.rpcProviders[r] = new Ox({ namespace: y });
          break;
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (t) => {
      this.events.emit("session_ping", t);
    }), this.client.on("session_event", (t) => {
      const { params: r } = t, { event: s } = r;
      if (s.name === "accountsChanged") {
        const a = s.data;
        a && Nf(a) && this.events.emit("accountsChanged", a.map(vx));
      } else if (s.name === "chainChanged") {
        const a = r.chainId, h = r.event.data, y = ns(a), b = jc(a) !== jc(h) ? `${y}:${jc(h)}` : a;
        this.onChainChanged(b);
      } else
        this.events.emit(s.name, s.data);
      this.events.emit("session_event", t);
    }), this.client.on("session_update", ({ topic: t, params: r }) => {
      var s;
      const { namespaces: a } = r, h = (s = this.client) == null ? void 0 : s.session.get(t);
      this.session = Mc(So({}, h), { namespaces: a }), this.onSessionUpdate(), this.events.emit("session_update", { topic: t, params: r });
    }), this.client.on("session_delete", async (t) => {
      await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", Mc(So({}, Af("USER_DISCONNECTED")), { data: t.topic }));
    }), this.on(yi.DEFAULT_CHAIN_CHANGED, (t) => {
      this.onChainChanged(t, !0);
    });
  }
  getProvider(t) {
    if (!this.rpcProviders[t])
      throw new Error(`Provider not found: ${t}`);
    return this.rpcProviders[t];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((t) => {
      var r;
      this.getProvider(t).updateNamespace((r = this.session) == null ? void 0 : r.namespaces[t]);
    });
  }
  setNamespaces(t) {
    const { namespaces: r, optionalNamespaces: s, sessionProperties: a } = t;
    r && Object.keys(r).length && (this.namespaces = r), s && Object.keys(s).length && (this.optionalNamespaces = s), this.sessionProperties = a, this.persist("namespaces", r), this.persist("optionalNamespaces", s);
  }
  validateChain(t) {
    const [r, s] = (t == null ? void 0 : t.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length)
      return [r, s];
    if (r && !Object.keys(this.namespaces || {}).map((y) => ns(y)).includes(r))
      throw new Error(`Namespace '${r}' is not configured. Please call connect() first with namespace config.`);
    if (r && s)
      return [r, s];
    const a = ns(Object.keys(this.namespaces)[0]), h = this.rpcProviders[a].getDefaultChain();
    return [a, h];
  }
  async requestAccounts() {
    const [t] = this.validateChain();
    return await this.getProvider(t).requestAccounts();
  }
  onChainChanged(t, r = !1) {
    var s;
    if (!this.namespaces)
      return;
    const [a, h] = this.validateChain(t);
    r || this.getProvider(a).setDefaultChain(h), ((s = this.namespaces[a]) != null ? s : this.namespaces[`${a}:${h}`]).defaultChain = h, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", h);
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(t, r) {
    this.client.core.storage.setItem(`${Df}/${t}`, r);
  }
  async getFromStore(t) {
    return await this.client.core.storage.getItem(`${Df}/${t}`);
  }
}
const $x = mu, Dx = "wc", Fx = "ethereum_provider", Ux = `${Dx}@2:${Fx}:`, jx = "https://rpc.walletconnect.com/v1/", eu = ["eth_sendTransaction", "personal_sign"], Lx = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"], tu = ["chainChanged", "accountsChanged"], Mx = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var qx = Object.defineProperty, zx = Object.defineProperties, Hx = Object.getOwnPropertyDescriptors, qf = Object.getOwnPropertySymbols, Bx = Object.prototype.hasOwnProperty, kx = Object.prototype.propertyIsEnumerable, zf = (n, t, r) => t in n ? qx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r, ss = (n, t) => {
  for (var r in t || (t = {}))
    Bx.call(t, r) && zf(n, r, t[r]);
  if (qf)
    for (var r of qf(t))
      kx.call(t, r) && zf(n, r, t[r]);
  return n;
}, Hf = (n, t) => zx(n, Hx(t));
function Fo(n) {
  return Number(n[0].split(":")[1]);
}
function qc(n) {
  return `0x${n.toString(16)}`;
}
function Vx(n) {
  const { chains: t, optionalChains: r, methods: s, optionalMethods: a, events: h, optionalEvents: y, rpcMap: b } = n;
  if (!Hc(t))
    throw new Error("Invalid chains");
  const O = { chains: t, methods: s || eu, events: h || tu, rpcMap: ss({}, t.length ? { [Fo(t)]: b[Fo(t)] } : {}) }, _ = h == null ? void 0 : h.filter((H) => !tu.includes(H)), E = s == null ? void 0 : s.filter((H) => !eu.includes(H));
  if (!r && !y && !a && !(_ != null && _.length) && !(E != null && E.length))
    return { required: t.length ? O : void 0 };
  const A = (_ == null ? void 0 : _.length) && (E == null ? void 0 : E.length) || !r, j = { chains: [...new Set(A ? O.chains.concat(r || []) : r)], methods: [...new Set(O.methods.concat(a != null && a.length ? a : Lx))], events: [...new Set(O.events.concat(y != null && y.length ? y : Mx))], rpcMap: b };
  return { required: t.length ? O : void 0, optional: r.length ? j : void 0 };
}
class vu {
  constructor() {
    this.events = new Cr.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = Ux, this.on = (t, r) => (this.events.on(t, r), this), this.once = (t, r) => (this.events.once(t, r), this), this.removeListener = (t, r) => (this.events.removeListener(t, r), this), this.off = (t, r) => (this.events.off(t, r), this), this.parseAccount = (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const r = new vu();
    return await r.initialize(t), r;
  }
  async request(t) {
    return await this.signer.request(t, this.formatChainId(this.chainId));
  }
  sendAsync(t, r) {
    this.signer.sendAsync(t, r, this.formatChainId(this.chainId));
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
  async connect(t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: r, optional: s } = Vx(this.rpc);
    try {
      const a = await new Promise(async (y, b) => {
        var O;
        this.rpc.showQrModal && ((O = this.modal) == null || O.subscribeModal((_) => {
          !_.open && !this.signer.session && (this.signer.abortPairingAttempt(), b(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(Hf(ss({ namespaces: ss({}, r && { [this.namespace]: r }) }, s && { optionalNamespaces: { [this.namespace]: s } }), { pairingTopic: t == null ? void 0 : t.pairingTopic })).then((_) => {
          y(_);
        }).catch((_) => {
          b(new Error(_.message));
        });
      });
      if (!a)
        return;
      const h = Z1(a.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : h), this.setAccounts(h), this.events.emit("connect", { chainId: qc(this.chainId) });
    } catch (a) {
      throw this.signer.logger.error(a), a;
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
    this.signer.on("session_event", (t) => {
      const { params: r } = t, { event: s } = r;
      s.name === "accountsChanged" ? (this.accounts = this.parseAccounts(s.data), this.events.emit("accountsChanged", this.accounts)) : s.name === "chainChanged" ? this.setChainId(this.formatChainId(s.data)) : this.events.emit(s.name, s.data), this.events.emit("session_event", t);
    }), this.signer.on("chainChanged", (t) => {
      const r = parseInt(t);
      this.chainId = r, this.events.emit("chainChanged", qc(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", Hf(ss({}, tw("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t) => {
      var r, s;
      this.rpc.showQrModal && ((r = this.modal) == null || r.closeModal(), (s = this.modal) == null || s.openModal({ uri: t })), this.events.emit("display_uri", t);
    });
  }
  switchEthereumChain(t) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const r = t.filter((s) => this.isCompatibleChainId(s)).map((s) => this.parseChainId(s));
    r.length && (this.chainId = r[0], this.events.emit("chainChanged", qc(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const r = this.parseChainId(t);
      this.chainId = r, this.switchEthereumChain(r);
    }
  }
  parseAccountId(t) {
    const [r, s, a] = t.split(":");
    return { chainId: `${r}:${s}`, address: a };
  }
  setAccounts(t) {
    this.accounts = t.filter((r) => this.parseChainId(this.parseAccountId(r).chainId) === this.chainId).map((r) => this.parseAccountId(r).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var r, s;
    const a = (r = t == null ? void 0 : t.chains) != null ? r : [], h = (s = t == null ? void 0 : t.optionalChains) != null ? s : [], y = a.concat(h);
    if (!y.length)
      throw new Error("No chains specified in either `chains` or `optionalChains`");
    const b = a.length ? (t == null ? void 0 : t.methods) || eu : [], O = a.length ? (t == null ? void 0 : t.events) || tu : [], _ = (t == null ? void 0 : t.optionalMethods) || [], E = (t == null ? void 0 : t.optionalEvents) || [], A = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(y, t.projectId), j = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return { chains: a == null ? void 0 : a.map((H) => this.formatChainId(H)), optionalChains: h.map((H) => this.formatChainId(H)), methods: b, events: O, optionalMethods: _, optionalEvents: E, rpcMap: A, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: j, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, r) {
    const s = {};
    return t.forEach((a) => {
      s[a] = this.getRpcUrl(a, r);
    }), s;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? Fo(this.rpc.chains) : Fo(this.rpc.optionalChains), this.signer = await $x.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storageOptions: t.storageOptions }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let r;
      try {
        const { WalletConnectModal: s } = await import("./index-TQcEAYt8.js").then((a) => a.i);
        r = s;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (r)
        try {
          this.modal = new r(ss({ walletConnectVersion: 2, projectId: this.rpc.projectId, standaloneChains: this.rpc.chains }, this.rpc.qrModalOptions));
        } catch (s) {
          throw this.signer.logger.error(s), new Error("Could not generate WalletConnectModal Instance");
        }
    }
  }
  loadConnectOpts(t) {
    if (!t)
      return;
    const { chains: r, optionalChains: s, rpcMap: a } = t;
    r && Hc(r) && (this.rpc.chains = r.map((h) => this.formatChainId(h)), r.forEach((h) => {
      this.rpc.rpcMap[h] = (a == null ? void 0 : a[h]) || this.getRpcUrl(h);
    })), s && Hc(s) && (this.rpc.optionalChains = [], this.rpc.optionalChains = s == null ? void 0 : s.map((h) => this.formatChainId(h)), s.forEach((h) => {
      this.rpc.rpcMap[h] = (a == null ? void 0 : a[h]) || this.getRpcUrl(h);
    }));
  }
  getRpcUrl(t, r) {
    var s;
    return ((s = this.rpc.rpcMap) == null ? void 0 : s[t]) || `${jx}?chainId=eip155:${t}&projectId=${r || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (!this.session)
      return;
    const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), r = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
    this.setChainIds(t ? [this.formatChainId(t)] : r == null ? void 0 : r.accounts), this.setAccounts(r == null ? void 0 : r.accounts);
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((r) => this.parseAccount(r));
  }
}
const fP = vu;
export {
  fP as EthereumProvider,
  Mx as OPTIONAL_EVENTS,
  Lx as OPTIONAL_METHODS,
  tu as REQUIRED_EVENTS,
  eu as REQUIRED_METHODS,
  vu as default
};
