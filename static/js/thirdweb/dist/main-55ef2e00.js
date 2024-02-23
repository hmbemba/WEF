function o0(n, e) {
  if (e.has(n))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function rr(n, e, t) {
  o0(n, e), e.set(n, t);
}
function gc(n, e) {
  return e.get ? e.get.call(n) : e.value;
}
function a0(n, e, t) {
  if (!e.has(n))
    throw new TypeError("attempted to " + t + " private field on non-instance");
  return e.get(n);
}
function be(n, e) {
  var t = a0(n, e, "get");
  return gc(n, t);
}
function mc(n, e, t) {
  if (e.set)
    e.set.call(n, t);
  else {
    if (!e.writable)
      throw new TypeError("attempted to set read only private field");
    e.value = t;
  }
}
function _i(n, e, t) {
  var r = a0(n, e, "set");
  return mc(n, r, t), t;
}
function Bi(n, e) {
  o0(n, e), e.add(n);
}
function yn(n, e, t) {
  if (!e.has(n))
    throw new TypeError("attempted to get private field on non-instance");
  return t;
}
function vc(n, e) {
  if (typeof n != "object" || n === null)
    return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function yc(n) {
  var e = vc(n, "string");
  return typeof e == "symbol" ? e : String(e);
}
function st(n, e, t) {
  return e = yc(e), e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
var f0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function en(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function wc(n) {
  if (n.__esModule)
    return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(n, r);
    Object.defineProperty(t, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return n[r];
      }
    });
  }), t;
}
var ho = { exports: {} };
const Ac = {}, Ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ac
}, Symbol.toStringTag, { value: "Module" })), _c = /* @__PURE__ */ wc(Ec);
ho.exports;
(function(n) {
  (function(e, t) {
    function r(w, f) {
      if (!w)
        throw new Error(f || "Assertion failed");
    }
    function i(w, f) {
      w.super_ = f;
      var d = function() {
      };
      d.prototype = f.prototype, w.prototype = new d(), w.prototype.constructor = w;
    }
    function s(w, f, d) {
      if (s.isBN(w))
        return w;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, w !== null && ((f === "le" || f === "be") && (d = f, f = 10), this._init(w || 0, f || 10, d || "be"));
    }
    typeof e == "object" ? e.exports = s : t.BN = s, s.BN = s, s.wordSize = 26;
    var o;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? o = window.Buffer : o = _c.Buffer;
    } catch {
    }
    s.isBN = function(f) {
      return f instanceof s ? !0 : f !== null && typeof f == "object" && f.constructor.wordSize === s.wordSize && Array.isArray(f.words);
    }, s.max = function(f, d) {
      return f.cmp(d) > 0 ? f : d;
    }, s.min = function(f, d) {
      return f.cmp(d) < 0 ? f : d;
    }, s.prototype._init = function(f, d, g) {
      if (typeof f == "number")
        return this._initNumber(f, d, g);
      if (typeof f == "object")
        return this._initArray(f, d, g);
      d === "hex" && (d = 16), r(d === (d | 0) && d >= 2 && d <= 36), f = f.toString().replace(/\s+/g, "");
      var v = 0;
      f[0] === "-" && (v++, this.negative = 1), v < f.length && (d === 16 ? this._parseHex(f, v, g) : (this._parseBase(f, d, v), g === "le" && this._initArray(this.toArray(), d, g)));
    }, s.prototype._initNumber = function(f, d, g) {
      f < 0 && (this.negative = 1, f = -f), f < 67108864 ? (this.words = [f & 67108863], this.length = 1) : f < 4503599627370496 ? (this.words = [
        f & 67108863,
        f / 67108864 & 67108863
      ], this.length = 2) : (r(f < 9007199254740992), this.words = [
        f & 67108863,
        f / 67108864 & 67108863,
        1
      ], this.length = 3), g === "le" && this._initArray(this.toArray(), d, g);
    }, s.prototype._initArray = function(f, d, g) {
      if (r(typeof f.length == "number"), f.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(f.length / 3), this.words = new Array(this.length);
      for (var v = 0; v < this.length; v++)
        this.words[v] = 0;
      var A, k, N = 0;
      if (g === "be")
        for (v = f.length - 1, A = 0; v >= 0; v -= 3)
          k = f[v] | f[v - 1] << 8 | f[v - 2] << 16, this.words[A] |= k << N & 67108863, this.words[A + 1] = k >>> 26 - N & 67108863, N += 24, N >= 26 && (N -= 26, A++);
      else if (g === "le")
        for (v = 0, A = 0; v < f.length; v += 3)
          k = f[v] | f[v + 1] << 8 | f[v + 2] << 16, this.words[A] |= k << N & 67108863, this.words[A + 1] = k >>> 26 - N & 67108863, N += 24, N >= 26 && (N -= 26, A++);
      return this._strip();
    };
    function a(w, f) {
      var d = w.charCodeAt(f);
      if (d >= 48 && d <= 57)
        return d - 48;
      if (d >= 65 && d <= 70)
        return d - 55;
      if (d >= 97 && d <= 102)
        return d - 87;
      r(!1, "Invalid character in " + w);
    }
    function l(w, f, d) {
      var g = a(w, d);
      return d - 1 >= f && (g |= a(w, d - 1) << 4), g;
    }
    s.prototype._parseHex = function(f, d, g) {
      this.length = Math.ceil((f.length - d) / 6), this.words = new Array(this.length);
      for (var v = 0; v < this.length; v++)
        this.words[v] = 0;
      var A = 0, k = 0, N;
      if (g === "be")
        for (v = f.length - 1; v >= d; v -= 2)
          N = l(f, d, v) << A, this.words[k] |= N & 67108863, A >= 18 ? (A -= 18, k += 1, this.words[k] |= N >>> 26) : A += 8;
      else {
        var p = f.length - d;
        for (v = p % 2 === 0 ? d + 1 : d; v < f.length; v += 2)
          N = l(f, d, v) << A, this.words[k] |= N & 67108863, A >= 18 ? (A -= 18, k += 1, this.words[k] |= N >>> 26) : A += 8;
      }
      this._strip();
    };
    function h(w, f, d, g) {
      for (var v = 0, A = 0, k = Math.min(w.length, d), N = f; N < k; N++) {
        var p = w.charCodeAt(N) - 48;
        v *= g, p >= 49 ? A = p - 49 + 10 : p >= 17 ? A = p - 17 + 10 : A = p, r(p >= 0 && A < g, "Invalid character"), v += A;
      }
      return v;
    }
    s.prototype._parseBase = function(f, d, g) {
      this.words = [0], this.length = 1;
      for (var v = 0, A = 1; A <= 67108863; A *= d)
        v++;
      v--, A = A / d | 0;
      for (var k = f.length - g, N = k % v, p = Math.min(k, k - N) + g, c = 0, m = g; m < p; m += v)
        c = h(f, m, m + v, d), this.imuln(A), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
      if (N !== 0) {
        var M = 1;
        for (c = h(f, m, f.length, d), m = 0; m < N; m++)
          M *= d;
        this.imuln(M), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
      }
      this._strip();
    }, s.prototype.copy = function(f) {
      f.words = new Array(this.length);
      for (var d = 0; d < this.length; d++)
        f.words[d] = this.words[d];
      f.length = this.length, f.negative = this.negative, f.red = this.red;
    };
    function x(w, f) {
      w.words = f.words, w.length = f.length, w.negative = f.negative, w.red = f.red;
    }
    if (s.prototype._move = function(f) {
      x(f, this);
    }, s.prototype.clone = function() {
      var f = new s(null);
      return this.copy(f), f;
    }, s.prototype._expand = function(f) {
      for (; this.length < f; )
        this.words[this.length++] = 0;
      return this;
    }, s.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, s.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        s.prototype[Symbol.for("nodejs.util.inspect.custom")] = b;
      } catch {
        s.prototype.inspect = b;
      }
    else
      s.prototype.inspect = b;
    function b() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var E = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], S = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], I = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    s.prototype.toString = function(f, d) {
      f = f || 10, d = d | 0 || 1;
      var g;
      if (f === 16 || f === "hex") {
        g = "";
        for (var v = 0, A = 0, k = 0; k < this.length; k++) {
          var N = this.words[k], p = ((N << v | A) & 16777215).toString(16);
          A = N >>> 24 - v & 16777215, v += 2, v >= 26 && (v -= 26, k--), A !== 0 || k !== this.length - 1 ? g = E[6 - p.length] + p + g : g = p + g;
        }
        for (A !== 0 && (g = A.toString(16) + g); g.length % d !== 0; )
          g = "0" + g;
        return this.negative !== 0 && (g = "-" + g), g;
      }
      if (f === (f | 0) && f >= 2 && f <= 36) {
        var c = S[f], m = I[f];
        g = "";
        var M = this.clone();
        for (M.negative = 0; !M.isZero(); ) {
          var u = M.modrn(m).toString(f);
          M = M.idivn(m), M.isZero() ? g = u + g : g = E[c - u.length] + u + g;
        }
        for (this.isZero() && (g = "0" + g); g.length % d !== 0; )
          g = "0" + g;
        return this.negative !== 0 && (g = "-" + g), g;
      }
      r(!1, "Base should be between 2 and 36");
    }, s.prototype.toNumber = function() {
      var f = this.words[0];
      return this.length === 2 ? f += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f : f;
    }, s.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, o && (s.prototype.toBuffer = function(f, d) {
      return this.toArrayLike(o, f, d);
    }), s.prototype.toArray = function(f, d) {
      return this.toArrayLike(Array, f, d);
    };
    var C = function(f, d) {
      return f.allocUnsafe ? f.allocUnsafe(d) : new f(d);
    };
    s.prototype.toArrayLike = function(f, d, g) {
      this._strip();
      var v = this.byteLength(), A = g || Math.max(1, v);
      r(v <= A, "byte array longer than desired length"), r(A > 0, "Requested array length <= 0");
      var k = C(f, A), N = d === "le" ? "LE" : "BE";
      return this["_toArrayLike" + N](k, v), k;
    }, s.prototype._toArrayLikeLE = function(f, d) {
      for (var g = 0, v = 0, A = 0, k = 0; A < this.length; A++) {
        var N = this.words[A] << k | v;
        f[g++] = N & 255, g < f.length && (f[g++] = N >> 8 & 255), g < f.length && (f[g++] = N >> 16 & 255), k === 6 ? (g < f.length && (f[g++] = N >> 24 & 255), v = 0, k = 0) : (v = N >>> 24, k += 2);
      }
      if (g < f.length)
        for (f[g++] = v; g < f.length; )
          f[g++] = 0;
    }, s.prototype._toArrayLikeBE = function(f, d) {
      for (var g = f.length - 1, v = 0, A = 0, k = 0; A < this.length; A++) {
        var N = this.words[A] << k | v;
        f[g--] = N & 255, g >= 0 && (f[g--] = N >> 8 & 255), g >= 0 && (f[g--] = N >> 16 & 255), k === 6 ? (g >= 0 && (f[g--] = N >> 24 & 255), v = 0, k = 0) : (v = N >>> 24, k += 2);
      }
      if (g >= 0)
        for (f[g--] = v; g >= 0; )
          f[g--] = 0;
    }, Math.clz32 ? s.prototype._countBits = function(f) {
      return 32 - Math.clz32(f);
    } : s.prototype._countBits = function(f) {
      var d = f, g = 0;
      return d >= 4096 && (g += 13, d >>>= 13), d >= 64 && (g += 7, d >>>= 7), d >= 8 && (g += 4, d >>>= 4), d >= 2 && (g += 2, d >>>= 2), g + d;
    }, s.prototype._zeroBits = function(f) {
      if (f === 0)
        return 26;
      var d = f, g = 0;
      return d & 8191 || (g += 13, d >>>= 13), d & 127 || (g += 7, d >>>= 7), d & 15 || (g += 4, d >>>= 4), d & 3 || (g += 2, d >>>= 2), d & 1 || g++, g;
    }, s.prototype.bitLength = function() {
      var f = this.words[this.length - 1], d = this._countBits(f);
      return (this.length - 1) * 26 + d;
    };
    function y(w) {
      for (var f = new Array(w.bitLength()), d = 0; d < f.length; d++) {
        var g = d / 26 | 0, v = d % 26;
        f[d] = w.words[g] >>> v & 1;
      }
      return f;
    }
    s.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var f = 0, d = 0; d < this.length; d++) {
        var g = this._zeroBits(this.words[d]);
        if (f += g, g !== 26)
          break;
      }
      return f;
    }, s.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, s.prototype.toTwos = function(f) {
      return this.negative !== 0 ? this.abs().inotn(f).iaddn(1) : this.clone();
    }, s.prototype.fromTwos = function(f) {
      return this.testn(f - 1) ? this.notn(f).iaddn(1).ineg() : this.clone();
    }, s.prototype.isNeg = function() {
      return this.negative !== 0;
    }, s.prototype.neg = function() {
      return this.clone().ineg();
    }, s.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, s.prototype.iuor = function(f) {
      for (; this.length < f.length; )
        this.words[this.length++] = 0;
      for (var d = 0; d < f.length; d++)
        this.words[d] = this.words[d] | f.words[d];
      return this._strip();
    }, s.prototype.ior = function(f) {
      return r((this.negative | f.negative) === 0), this.iuor(f);
    }, s.prototype.or = function(f) {
      return this.length > f.length ? this.clone().ior(f) : f.clone().ior(this);
    }, s.prototype.uor = function(f) {
      return this.length > f.length ? this.clone().iuor(f) : f.clone().iuor(this);
    }, s.prototype.iuand = function(f) {
      var d;
      this.length > f.length ? d = f : d = this;
      for (var g = 0; g < d.length; g++)
        this.words[g] = this.words[g] & f.words[g];
      return this.length = d.length, this._strip();
    }, s.prototype.iand = function(f) {
      return r((this.negative | f.negative) === 0), this.iuand(f);
    }, s.prototype.and = function(f) {
      return this.length > f.length ? this.clone().iand(f) : f.clone().iand(this);
    }, s.prototype.uand = function(f) {
      return this.length > f.length ? this.clone().iuand(f) : f.clone().iuand(this);
    }, s.prototype.iuxor = function(f) {
      var d, g;
      this.length > f.length ? (d = this, g = f) : (d = f, g = this);
      for (var v = 0; v < g.length; v++)
        this.words[v] = d.words[v] ^ g.words[v];
      if (this !== d)
        for (; v < d.length; v++)
          this.words[v] = d.words[v];
      return this.length = d.length, this._strip();
    }, s.prototype.ixor = function(f) {
      return r((this.negative | f.negative) === 0), this.iuxor(f);
    }, s.prototype.xor = function(f) {
      return this.length > f.length ? this.clone().ixor(f) : f.clone().ixor(this);
    }, s.prototype.uxor = function(f) {
      return this.length > f.length ? this.clone().iuxor(f) : f.clone().iuxor(this);
    }, s.prototype.inotn = function(f) {
      r(typeof f == "number" && f >= 0);
      var d = Math.ceil(f / 26) | 0, g = f % 26;
      this._expand(d), g > 0 && d--;
      for (var v = 0; v < d; v++)
        this.words[v] = ~this.words[v] & 67108863;
      return g > 0 && (this.words[v] = ~this.words[v] & 67108863 >> 26 - g), this._strip();
    }, s.prototype.notn = function(f) {
      return this.clone().inotn(f);
    }, s.prototype.setn = function(f, d) {
      r(typeof f == "number" && f >= 0);
      var g = f / 26 | 0, v = f % 26;
      return this._expand(g + 1), d ? this.words[g] = this.words[g] | 1 << v : this.words[g] = this.words[g] & ~(1 << v), this._strip();
    }, s.prototype.iadd = function(f) {
      var d;
      if (this.negative !== 0 && f.negative === 0)
        return this.negative = 0, d = this.isub(f), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && f.negative !== 0)
        return f.negative = 0, d = this.isub(f), f.negative = 1, d._normSign();
      var g, v;
      this.length > f.length ? (g = this, v = f) : (g = f, v = this);
      for (var A = 0, k = 0; k < v.length; k++)
        d = (g.words[k] | 0) + (v.words[k] | 0) + A, this.words[k] = d & 67108863, A = d >>> 26;
      for (; A !== 0 && k < g.length; k++)
        d = (g.words[k] | 0) + A, this.words[k] = d & 67108863, A = d >>> 26;
      if (this.length = g.length, A !== 0)
        this.words[this.length] = A, this.length++;
      else if (g !== this)
        for (; k < g.length; k++)
          this.words[k] = g.words[k];
      return this;
    }, s.prototype.add = function(f) {
      var d;
      return f.negative !== 0 && this.negative === 0 ? (f.negative = 0, d = this.sub(f), f.negative ^= 1, d) : f.negative === 0 && this.negative !== 0 ? (this.negative = 0, d = f.sub(this), this.negative = 1, d) : this.length > f.length ? this.clone().iadd(f) : f.clone().iadd(this);
    }, s.prototype.isub = function(f) {
      if (f.negative !== 0) {
        f.negative = 0;
        var d = this.iadd(f);
        return f.negative = 1, d._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(f), this.negative = 1, this._normSign();
      var g = this.cmp(f);
      if (g === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var v, A;
      g > 0 ? (v = this, A = f) : (v = f, A = this);
      for (var k = 0, N = 0; N < A.length; N++)
        d = (v.words[N] | 0) - (A.words[N] | 0) + k, k = d >> 26, this.words[N] = d & 67108863;
      for (; k !== 0 && N < v.length; N++)
        d = (v.words[N] | 0) + k, k = d >> 26, this.words[N] = d & 67108863;
      if (k === 0 && N < v.length && v !== this)
        for (; N < v.length; N++)
          this.words[N] = v.words[N];
      return this.length = Math.max(this.length, N), v !== this && (this.negative = 1), this._strip();
    }, s.prototype.sub = function(f) {
      return this.clone().isub(f);
    };
    function T(w, f, d) {
      d.negative = f.negative ^ w.negative;
      var g = w.length + f.length | 0;
      d.length = g, g = g - 1 | 0;
      var v = w.words[0] | 0, A = f.words[0] | 0, k = v * A, N = k & 67108863, p = k / 67108864 | 0;
      d.words[0] = N;
      for (var c = 1; c < g; c++) {
        for (var m = p >>> 26, M = p & 67108863, u = Math.min(c, f.length - 1), P = Math.max(0, c - w.length + 1); P <= u; P++) {
          var O = c - P | 0;
          v = w.words[O] | 0, A = f.words[P] | 0, k = v * A + M, m += k / 67108864 | 0, M = k & 67108863;
        }
        d.words[c] = M | 0, p = m | 0;
      }
      return p !== 0 ? d.words[c] = p | 0 : d.length--, d._strip();
    }
    var D = function(f, d, g) {
      var v = f.words, A = d.words, k = g.words, N = 0, p, c, m, M = v[0] | 0, u = M & 8191, P = M >>> 13, O = v[1] | 0, R = O & 8191, F = O >>> 13, J = v[2] | 0, q = J & 8191, j = J >>> 13, Ye = v[3] | 0, V = Ye & 8191, ee = Ye >>> 13, Mr = v[4] | 0, me = Mr & 8191, ve = Mr >>> 13, Nr = v[5] | 0, ye = Nr & 8191, we = Nr >>> 13, Tr = v[6] | 0, Ae = Tr & 8191, Ee = Tr >>> 13, Rr = v[7] | 0, _e = Rr & 8191, Se = Rr >>> 13, Br = v[8] | 0, ke = Br & 8191, Pe = Br >>> 13, Or = v[9] | 0, Ce = Or & 8191, Ie = Or >>> 13, Fr = A[0] | 0, Me = Fr & 8191, Ne = Fr >>> 13, Dr = A[1] | 0, Te = Dr & 8191, Re = Dr >>> 13, Lr = A[2] | 0, Be = Lr & 8191, Oe = Lr >>> 13, Ur = A[3] | 0, Fe = Ur & 8191, De = Ur >>> 13, Kr = A[4] | 0, Le = Kr & 8191, Ue = Kr >>> 13, Hr = A[5] | 0, Ke = Hr & 8191, He = Hr >>> 13, Gr = A[6] | 0, Ge = Gr & 8191, qe = Gr >>> 13, qr = A[7] | 0, ze = qr & 8191, je = qr >>> 13, zr = A[8] | 0, We = zr & 8191, Je = zr >>> 13, jr = A[9] | 0, Ve = jr & 8191, $e = jr >>> 13;
      g.negative = f.negative ^ d.negative, g.length = 19, p = Math.imul(u, Me), c = Math.imul(u, Ne), c = c + Math.imul(P, Me) | 0, m = Math.imul(P, Ne);
      var hr = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (hr >>> 26) | 0, hr &= 67108863, p = Math.imul(R, Me), c = Math.imul(R, Ne), c = c + Math.imul(F, Me) | 0, m = Math.imul(F, Ne), p = p + Math.imul(u, Te) | 0, c = c + Math.imul(u, Re) | 0, c = c + Math.imul(P, Te) | 0, m = m + Math.imul(P, Re) | 0;
      var dr = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (dr >>> 26) | 0, dr &= 67108863, p = Math.imul(q, Me), c = Math.imul(q, Ne), c = c + Math.imul(j, Me) | 0, m = Math.imul(j, Ne), p = p + Math.imul(R, Te) | 0, c = c + Math.imul(R, Re) | 0, c = c + Math.imul(F, Te) | 0, m = m + Math.imul(F, Re) | 0, p = p + Math.imul(u, Be) | 0, c = c + Math.imul(u, Oe) | 0, c = c + Math.imul(P, Be) | 0, m = m + Math.imul(P, Oe) | 0;
      var xr = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (xr >>> 26) | 0, xr &= 67108863, p = Math.imul(V, Me), c = Math.imul(V, Ne), c = c + Math.imul(ee, Me) | 0, m = Math.imul(ee, Ne), p = p + Math.imul(q, Te) | 0, c = c + Math.imul(q, Re) | 0, c = c + Math.imul(j, Te) | 0, m = m + Math.imul(j, Re) | 0, p = p + Math.imul(R, Be) | 0, c = c + Math.imul(R, Oe) | 0, c = c + Math.imul(F, Be) | 0, m = m + Math.imul(F, Oe) | 0, p = p + Math.imul(u, Fe) | 0, c = c + Math.imul(u, De) | 0, c = c + Math.imul(P, Fe) | 0, m = m + Math.imul(P, De) | 0;
      var pr = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (pr >>> 26) | 0, pr &= 67108863, p = Math.imul(me, Me), c = Math.imul(me, Ne), c = c + Math.imul(ve, Me) | 0, m = Math.imul(ve, Ne), p = p + Math.imul(V, Te) | 0, c = c + Math.imul(V, Re) | 0, c = c + Math.imul(ee, Te) | 0, m = m + Math.imul(ee, Re) | 0, p = p + Math.imul(q, Be) | 0, c = c + Math.imul(q, Oe) | 0, c = c + Math.imul(j, Be) | 0, m = m + Math.imul(j, Oe) | 0, p = p + Math.imul(R, Fe) | 0, c = c + Math.imul(R, De) | 0, c = c + Math.imul(F, Fe) | 0, m = m + Math.imul(F, De) | 0, p = p + Math.imul(u, Le) | 0, c = c + Math.imul(u, Ue) | 0, c = c + Math.imul(P, Le) | 0, m = m + Math.imul(P, Ue) | 0;
      var br = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (br >>> 26) | 0, br &= 67108863, p = Math.imul(ye, Me), c = Math.imul(ye, Ne), c = c + Math.imul(we, Me) | 0, m = Math.imul(we, Ne), p = p + Math.imul(me, Te) | 0, c = c + Math.imul(me, Re) | 0, c = c + Math.imul(ve, Te) | 0, m = m + Math.imul(ve, Re) | 0, p = p + Math.imul(V, Be) | 0, c = c + Math.imul(V, Oe) | 0, c = c + Math.imul(ee, Be) | 0, m = m + Math.imul(ee, Oe) | 0, p = p + Math.imul(q, Fe) | 0, c = c + Math.imul(q, De) | 0, c = c + Math.imul(j, Fe) | 0, m = m + Math.imul(j, De) | 0, p = p + Math.imul(R, Le) | 0, c = c + Math.imul(R, Ue) | 0, c = c + Math.imul(F, Le) | 0, m = m + Math.imul(F, Ue) | 0, p = p + Math.imul(u, Ke) | 0, c = c + Math.imul(u, He) | 0, c = c + Math.imul(P, Ke) | 0, m = m + Math.imul(P, He) | 0;
      var fs = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (fs >>> 26) | 0, fs &= 67108863, p = Math.imul(Ae, Me), c = Math.imul(Ae, Ne), c = c + Math.imul(Ee, Me) | 0, m = Math.imul(Ee, Ne), p = p + Math.imul(ye, Te) | 0, c = c + Math.imul(ye, Re) | 0, c = c + Math.imul(we, Te) | 0, m = m + Math.imul(we, Re) | 0, p = p + Math.imul(me, Be) | 0, c = c + Math.imul(me, Oe) | 0, c = c + Math.imul(ve, Be) | 0, m = m + Math.imul(ve, Oe) | 0, p = p + Math.imul(V, Fe) | 0, c = c + Math.imul(V, De) | 0, c = c + Math.imul(ee, Fe) | 0, m = m + Math.imul(ee, De) | 0, p = p + Math.imul(q, Le) | 0, c = c + Math.imul(q, Ue) | 0, c = c + Math.imul(j, Le) | 0, m = m + Math.imul(j, Ue) | 0, p = p + Math.imul(R, Ke) | 0, c = c + Math.imul(R, He) | 0, c = c + Math.imul(F, Ke) | 0, m = m + Math.imul(F, He) | 0, p = p + Math.imul(u, Ge) | 0, c = c + Math.imul(u, qe) | 0, c = c + Math.imul(P, Ge) | 0, m = m + Math.imul(P, qe) | 0;
      var cs = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (cs >>> 26) | 0, cs &= 67108863, p = Math.imul(_e, Me), c = Math.imul(_e, Ne), c = c + Math.imul(Se, Me) | 0, m = Math.imul(Se, Ne), p = p + Math.imul(Ae, Te) | 0, c = c + Math.imul(Ae, Re) | 0, c = c + Math.imul(Ee, Te) | 0, m = m + Math.imul(Ee, Re) | 0, p = p + Math.imul(ye, Be) | 0, c = c + Math.imul(ye, Oe) | 0, c = c + Math.imul(we, Be) | 0, m = m + Math.imul(we, Oe) | 0, p = p + Math.imul(me, Fe) | 0, c = c + Math.imul(me, De) | 0, c = c + Math.imul(ve, Fe) | 0, m = m + Math.imul(ve, De) | 0, p = p + Math.imul(V, Le) | 0, c = c + Math.imul(V, Ue) | 0, c = c + Math.imul(ee, Le) | 0, m = m + Math.imul(ee, Ue) | 0, p = p + Math.imul(q, Ke) | 0, c = c + Math.imul(q, He) | 0, c = c + Math.imul(j, Ke) | 0, m = m + Math.imul(j, He) | 0, p = p + Math.imul(R, Ge) | 0, c = c + Math.imul(R, qe) | 0, c = c + Math.imul(F, Ge) | 0, m = m + Math.imul(F, qe) | 0, p = p + Math.imul(u, ze) | 0, c = c + Math.imul(u, je) | 0, c = c + Math.imul(P, ze) | 0, m = m + Math.imul(P, je) | 0;
      var ls = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (ls >>> 26) | 0, ls &= 67108863, p = Math.imul(ke, Me), c = Math.imul(ke, Ne), c = c + Math.imul(Pe, Me) | 0, m = Math.imul(Pe, Ne), p = p + Math.imul(_e, Te) | 0, c = c + Math.imul(_e, Re) | 0, c = c + Math.imul(Se, Te) | 0, m = m + Math.imul(Se, Re) | 0, p = p + Math.imul(Ae, Be) | 0, c = c + Math.imul(Ae, Oe) | 0, c = c + Math.imul(Ee, Be) | 0, m = m + Math.imul(Ee, Oe) | 0, p = p + Math.imul(ye, Fe) | 0, c = c + Math.imul(ye, De) | 0, c = c + Math.imul(we, Fe) | 0, m = m + Math.imul(we, De) | 0, p = p + Math.imul(me, Le) | 0, c = c + Math.imul(me, Ue) | 0, c = c + Math.imul(ve, Le) | 0, m = m + Math.imul(ve, Ue) | 0, p = p + Math.imul(V, Ke) | 0, c = c + Math.imul(V, He) | 0, c = c + Math.imul(ee, Ke) | 0, m = m + Math.imul(ee, He) | 0, p = p + Math.imul(q, Ge) | 0, c = c + Math.imul(q, qe) | 0, c = c + Math.imul(j, Ge) | 0, m = m + Math.imul(j, qe) | 0, p = p + Math.imul(R, ze) | 0, c = c + Math.imul(R, je) | 0, c = c + Math.imul(F, ze) | 0, m = m + Math.imul(F, je) | 0, p = p + Math.imul(u, We) | 0, c = c + Math.imul(u, Je) | 0, c = c + Math.imul(P, We) | 0, m = m + Math.imul(P, Je) | 0;
      var us = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (us >>> 26) | 0, us &= 67108863, p = Math.imul(Ce, Me), c = Math.imul(Ce, Ne), c = c + Math.imul(Ie, Me) | 0, m = Math.imul(Ie, Ne), p = p + Math.imul(ke, Te) | 0, c = c + Math.imul(ke, Re) | 0, c = c + Math.imul(Pe, Te) | 0, m = m + Math.imul(Pe, Re) | 0, p = p + Math.imul(_e, Be) | 0, c = c + Math.imul(_e, Oe) | 0, c = c + Math.imul(Se, Be) | 0, m = m + Math.imul(Se, Oe) | 0, p = p + Math.imul(Ae, Fe) | 0, c = c + Math.imul(Ae, De) | 0, c = c + Math.imul(Ee, Fe) | 0, m = m + Math.imul(Ee, De) | 0, p = p + Math.imul(ye, Le) | 0, c = c + Math.imul(ye, Ue) | 0, c = c + Math.imul(we, Le) | 0, m = m + Math.imul(we, Ue) | 0, p = p + Math.imul(me, Ke) | 0, c = c + Math.imul(me, He) | 0, c = c + Math.imul(ve, Ke) | 0, m = m + Math.imul(ve, He) | 0, p = p + Math.imul(V, Ge) | 0, c = c + Math.imul(V, qe) | 0, c = c + Math.imul(ee, Ge) | 0, m = m + Math.imul(ee, qe) | 0, p = p + Math.imul(q, ze) | 0, c = c + Math.imul(q, je) | 0, c = c + Math.imul(j, ze) | 0, m = m + Math.imul(j, je) | 0, p = p + Math.imul(R, We) | 0, c = c + Math.imul(R, Je) | 0, c = c + Math.imul(F, We) | 0, m = m + Math.imul(F, Je) | 0, p = p + Math.imul(u, Ve) | 0, c = c + Math.imul(u, $e) | 0, c = c + Math.imul(P, Ve) | 0, m = m + Math.imul(P, $e) | 0;
      var hs = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (hs >>> 26) | 0, hs &= 67108863, p = Math.imul(Ce, Te), c = Math.imul(Ce, Re), c = c + Math.imul(Ie, Te) | 0, m = Math.imul(Ie, Re), p = p + Math.imul(ke, Be) | 0, c = c + Math.imul(ke, Oe) | 0, c = c + Math.imul(Pe, Be) | 0, m = m + Math.imul(Pe, Oe) | 0, p = p + Math.imul(_e, Fe) | 0, c = c + Math.imul(_e, De) | 0, c = c + Math.imul(Se, Fe) | 0, m = m + Math.imul(Se, De) | 0, p = p + Math.imul(Ae, Le) | 0, c = c + Math.imul(Ae, Ue) | 0, c = c + Math.imul(Ee, Le) | 0, m = m + Math.imul(Ee, Ue) | 0, p = p + Math.imul(ye, Ke) | 0, c = c + Math.imul(ye, He) | 0, c = c + Math.imul(we, Ke) | 0, m = m + Math.imul(we, He) | 0, p = p + Math.imul(me, Ge) | 0, c = c + Math.imul(me, qe) | 0, c = c + Math.imul(ve, Ge) | 0, m = m + Math.imul(ve, qe) | 0, p = p + Math.imul(V, ze) | 0, c = c + Math.imul(V, je) | 0, c = c + Math.imul(ee, ze) | 0, m = m + Math.imul(ee, je) | 0, p = p + Math.imul(q, We) | 0, c = c + Math.imul(q, Je) | 0, c = c + Math.imul(j, We) | 0, m = m + Math.imul(j, Je) | 0, p = p + Math.imul(R, Ve) | 0, c = c + Math.imul(R, $e) | 0, c = c + Math.imul(F, Ve) | 0, m = m + Math.imul(F, $e) | 0;
      var ds = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (ds >>> 26) | 0, ds &= 67108863, p = Math.imul(Ce, Be), c = Math.imul(Ce, Oe), c = c + Math.imul(Ie, Be) | 0, m = Math.imul(Ie, Oe), p = p + Math.imul(ke, Fe) | 0, c = c + Math.imul(ke, De) | 0, c = c + Math.imul(Pe, Fe) | 0, m = m + Math.imul(Pe, De) | 0, p = p + Math.imul(_e, Le) | 0, c = c + Math.imul(_e, Ue) | 0, c = c + Math.imul(Se, Le) | 0, m = m + Math.imul(Se, Ue) | 0, p = p + Math.imul(Ae, Ke) | 0, c = c + Math.imul(Ae, He) | 0, c = c + Math.imul(Ee, Ke) | 0, m = m + Math.imul(Ee, He) | 0, p = p + Math.imul(ye, Ge) | 0, c = c + Math.imul(ye, qe) | 0, c = c + Math.imul(we, Ge) | 0, m = m + Math.imul(we, qe) | 0, p = p + Math.imul(me, ze) | 0, c = c + Math.imul(me, je) | 0, c = c + Math.imul(ve, ze) | 0, m = m + Math.imul(ve, je) | 0, p = p + Math.imul(V, We) | 0, c = c + Math.imul(V, Je) | 0, c = c + Math.imul(ee, We) | 0, m = m + Math.imul(ee, Je) | 0, p = p + Math.imul(q, Ve) | 0, c = c + Math.imul(q, $e) | 0, c = c + Math.imul(j, Ve) | 0, m = m + Math.imul(j, $e) | 0;
      var xs = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (xs >>> 26) | 0, xs &= 67108863, p = Math.imul(Ce, Fe), c = Math.imul(Ce, De), c = c + Math.imul(Ie, Fe) | 0, m = Math.imul(Ie, De), p = p + Math.imul(ke, Le) | 0, c = c + Math.imul(ke, Ue) | 0, c = c + Math.imul(Pe, Le) | 0, m = m + Math.imul(Pe, Ue) | 0, p = p + Math.imul(_e, Ke) | 0, c = c + Math.imul(_e, He) | 0, c = c + Math.imul(Se, Ke) | 0, m = m + Math.imul(Se, He) | 0, p = p + Math.imul(Ae, Ge) | 0, c = c + Math.imul(Ae, qe) | 0, c = c + Math.imul(Ee, Ge) | 0, m = m + Math.imul(Ee, qe) | 0, p = p + Math.imul(ye, ze) | 0, c = c + Math.imul(ye, je) | 0, c = c + Math.imul(we, ze) | 0, m = m + Math.imul(we, je) | 0, p = p + Math.imul(me, We) | 0, c = c + Math.imul(me, Je) | 0, c = c + Math.imul(ve, We) | 0, m = m + Math.imul(ve, Je) | 0, p = p + Math.imul(V, Ve) | 0, c = c + Math.imul(V, $e) | 0, c = c + Math.imul(ee, Ve) | 0, m = m + Math.imul(ee, $e) | 0;
      var ps = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (ps >>> 26) | 0, ps &= 67108863, p = Math.imul(Ce, Le), c = Math.imul(Ce, Ue), c = c + Math.imul(Ie, Le) | 0, m = Math.imul(Ie, Ue), p = p + Math.imul(ke, Ke) | 0, c = c + Math.imul(ke, He) | 0, c = c + Math.imul(Pe, Ke) | 0, m = m + Math.imul(Pe, He) | 0, p = p + Math.imul(_e, Ge) | 0, c = c + Math.imul(_e, qe) | 0, c = c + Math.imul(Se, Ge) | 0, m = m + Math.imul(Se, qe) | 0, p = p + Math.imul(Ae, ze) | 0, c = c + Math.imul(Ae, je) | 0, c = c + Math.imul(Ee, ze) | 0, m = m + Math.imul(Ee, je) | 0, p = p + Math.imul(ye, We) | 0, c = c + Math.imul(ye, Je) | 0, c = c + Math.imul(we, We) | 0, m = m + Math.imul(we, Je) | 0, p = p + Math.imul(me, Ve) | 0, c = c + Math.imul(me, $e) | 0, c = c + Math.imul(ve, Ve) | 0, m = m + Math.imul(ve, $e) | 0;
      var bs = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (bs >>> 26) | 0, bs &= 67108863, p = Math.imul(Ce, Ke), c = Math.imul(Ce, He), c = c + Math.imul(Ie, Ke) | 0, m = Math.imul(Ie, He), p = p + Math.imul(ke, Ge) | 0, c = c + Math.imul(ke, qe) | 0, c = c + Math.imul(Pe, Ge) | 0, m = m + Math.imul(Pe, qe) | 0, p = p + Math.imul(_e, ze) | 0, c = c + Math.imul(_e, je) | 0, c = c + Math.imul(Se, ze) | 0, m = m + Math.imul(Se, je) | 0, p = p + Math.imul(Ae, We) | 0, c = c + Math.imul(Ae, Je) | 0, c = c + Math.imul(Ee, We) | 0, m = m + Math.imul(Ee, Je) | 0, p = p + Math.imul(ye, Ve) | 0, c = c + Math.imul(ye, $e) | 0, c = c + Math.imul(we, Ve) | 0, m = m + Math.imul(we, $e) | 0;
      var gs = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (gs >>> 26) | 0, gs &= 67108863, p = Math.imul(Ce, Ge), c = Math.imul(Ce, qe), c = c + Math.imul(Ie, Ge) | 0, m = Math.imul(Ie, qe), p = p + Math.imul(ke, ze) | 0, c = c + Math.imul(ke, je) | 0, c = c + Math.imul(Pe, ze) | 0, m = m + Math.imul(Pe, je) | 0, p = p + Math.imul(_e, We) | 0, c = c + Math.imul(_e, Je) | 0, c = c + Math.imul(Se, We) | 0, m = m + Math.imul(Se, Je) | 0, p = p + Math.imul(Ae, Ve) | 0, c = c + Math.imul(Ae, $e) | 0, c = c + Math.imul(Ee, Ve) | 0, m = m + Math.imul(Ee, $e) | 0;
      var ms = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (ms >>> 26) | 0, ms &= 67108863, p = Math.imul(Ce, ze), c = Math.imul(Ce, je), c = c + Math.imul(Ie, ze) | 0, m = Math.imul(Ie, je), p = p + Math.imul(ke, We) | 0, c = c + Math.imul(ke, Je) | 0, c = c + Math.imul(Pe, We) | 0, m = m + Math.imul(Pe, Je) | 0, p = p + Math.imul(_e, Ve) | 0, c = c + Math.imul(_e, $e) | 0, c = c + Math.imul(Se, Ve) | 0, m = m + Math.imul(Se, $e) | 0;
      var vs = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (vs >>> 26) | 0, vs &= 67108863, p = Math.imul(Ce, We), c = Math.imul(Ce, Je), c = c + Math.imul(Ie, We) | 0, m = Math.imul(Ie, Je), p = p + Math.imul(ke, Ve) | 0, c = c + Math.imul(ke, $e) | 0, c = c + Math.imul(Pe, Ve) | 0, m = m + Math.imul(Pe, $e) | 0;
      var ys = (N + p | 0) + ((c & 8191) << 13) | 0;
      N = (m + (c >>> 13) | 0) + (ys >>> 26) | 0, ys &= 67108863, p = Math.imul(Ce, Ve), c = Math.imul(Ce, $e), c = c + Math.imul(Ie, Ve) | 0, m = Math.imul(Ie, $e);
      var ws = (N + p | 0) + ((c & 8191) << 13) | 0;
      return N = (m + (c >>> 13) | 0) + (ws >>> 26) | 0, ws &= 67108863, k[0] = hr, k[1] = dr, k[2] = xr, k[3] = pr, k[4] = br, k[5] = fs, k[6] = cs, k[7] = ls, k[8] = us, k[9] = hs, k[10] = ds, k[11] = xs, k[12] = ps, k[13] = bs, k[14] = gs, k[15] = ms, k[16] = vs, k[17] = ys, k[18] = ws, N !== 0 && (k[19] = N, g.length++), g;
    };
    Math.imul || (D = T);
    function U(w, f, d) {
      d.negative = f.negative ^ w.negative, d.length = w.length + f.length;
      for (var g = 0, v = 0, A = 0; A < d.length - 1; A++) {
        var k = v;
        v = 0;
        for (var N = g & 67108863, p = Math.min(A, f.length - 1), c = Math.max(0, A - w.length + 1); c <= p; c++) {
          var m = A - c, M = w.words[m] | 0, u = f.words[c] | 0, P = M * u, O = P & 67108863;
          k = k + (P / 67108864 | 0) | 0, O = O + N | 0, N = O & 67108863, k = k + (O >>> 26) | 0, v += k >>> 26, k &= 67108863;
        }
        d.words[A] = N, g = k, k = v;
      }
      return g !== 0 ? d.words[A] = g : d.length--, d._strip();
    }
    function z(w, f, d) {
      return U(w, f, d);
    }
    s.prototype.mulTo = function(f, d) {
      var g, v = this.length + f.length;
      return this.length === 10 && f.length === 10 ? g = D(this, f, d) : v < 63 ? g = T(this, f, d) : v < 1024 ? g = U(this, f, d) : g = z(this, f, d), g;
    }, s.prototype.mul = function(f) {
      var d = new s(null);
      return d.words = new Array(this.length + f.length), this.mulTo(f, d);
    }, s.prototype.mulf = function(f) {
      var d = new s(null);
      return d.words = new Array(this.length + f.length), z(this, f, d);
    }, s.prototype.imul = function(f) {
      return this.clone().mulTo(f, this);
    }, s.prototype.imuln = function(f) {
      var d = f < 0;
      d && (f = -f), r(typeof f == "number"), r(f < 67108864);
      for (var g = 0, v = 0; v < this.length; v++) {
        var A = (this.words[v] | 0) * f, k = (A & 67108863) + (g & 67108863);
        g >>= 26, g += A / 67108864 | 0, g += k >>> 26, this.words[v] = k & 67108863;
      }
      return g !== 0 && (this.words[v] = g, this.length++), d ? this.ineg() : this;
    }, s.prototype.muln = function(f) {
      return this.clone().imuln(f);
    }, s.prototype.sqr = function() {
      return this.mul(this);
    }, s.prototype.isqr = function() {
      return this.imul(this.clone());
    }, s.prototype.pow = function(f) {
      var d = y(f);
      if (d.length === 0)
        return new s(1);
      for (var g = this, v = 0; v < d.length && d[v] === 0; v++, g = g.sqr())
        ;
      if (++v < d.length)
        for (var A = g.sqr(); v < d.length; v++, A = A.sqr())
          d[v] !== 0 && (g = g.mul(A));
      return g;
    }, s.prototype.iushln = function(f) {
      r(typeof f == "number" && f >= 0);
      var d = f % 26, g = (f - d) / 26, v = 67108863 >>> 26 - d << 26 - d, A;
      if (d !== 0) {
        var k = 0;
        for (A = 0; A < this.length; A++) {
          var N = this.words[A] & v, p = (this.words[A] | 0) - N << d;
          this.words[A] = p | k, k = N >>> 26 - d;
        }
        k && (this.words[A] = k, this.length++);
      }
      if (g !== 0) {
        for (A = this.length - 1; A >= 0; A--)
          this.words[A + g] = this.words[A];
        for (A = 0; A < g; A++)
          this.words[A] = 0;
        this.length += g;
      }
      return this._strip();
    }, s.prototype.ishln = function(f) {
      return r(this.negative === 0), this.iushln(f);
    }, s.prototype.iushrn = function(f, d, g) {
      r(typeof f == "number" && f >= 0);
      var v;
      d ? v = (d - d % 26) / 26 : v = 0;
      var A = f % 26, k = Math.min((f - A) / 26, this.length), N = 67108863 ^ 67108863 >>> A << A, p = g;
      if (v -= k, v = Math.max(0, v), p) {
        for (var c = 0; c < k; c++)
          p.words[c] = this.words[c];
        p.length = k;
      }
      if (k !== 0)
        if (this.length > k)
          for (this.length -= k, c = 0; c < this.length; c++)
            this.words[c] = this.words[c + k];
        else
          this.words[0] = 0, this.length = 1;
      var m = 0;
      for (c = this.length - 1; c >= 0 && (m !== 0 || c >= v); c--) {
        var M = this.words[c] | 0;
        this.words[c] = m << 26 - A | M >>> A, m = M & N;
      }
      return p && m !== 0 && (p.words[p.length++] = m), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, s.prototype.ishrn = function(f, d, g) {
      return r(this.negative === 0), this.iushrn(f, d, g);
    }, s.prototype.shln = function(f) {
      return this.clone().ishln(f);
    }, s.prototype.ushln = function(f) {
      return this.clone().iushln(f);
    }, s.prototype.shrn = function(f) {
      return this.clone().ishrn(f);
    }, s.prototype.ushrn = function(f) {
      return this.clone().iushrn(f);
    }, s.prototype.testn = function(f) {
      r(typeof f == "number" && f >= 0);
      var d = f % 26, g = (f - d) / 26, v = 1 << d;
      if (this.length <= g)
        return !1;
      var A = this.words[g];
      return !!(A & v);
    }, s.prototype.imaskn = function(f) {
      r(typeof f == "number" && f >= 0);
      var d = f % 26, g = (f - d) / 26;
      if (r(this.negative === 0, "imaskn works only with positive numbers"), this.length <= g)
        return this;
      if (d !== 0 && g++, this.length = Math.min(g, this.length), d !== 0) {
        var v = 67108863 ^ 67108863 >>> d << d;
        this.words[this.length - 1] &= v;
      }
      return this._strip();
    }, s.prototype.maskn = function(f) {
      return this.clone().imaskn(f);
    }, s.prototype.iaddn = function(f) {
      return r(typeof f == "number"), r(f < 67108864), f < 0 ? this.isubn(-f) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f ? (this.words[0] = f - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f), this.negative = 1, this) : this._iaddn(f);
    }, s.prototype._iaddn = function(f) {
      this.words[0] += f;
      for (var d = 0; d < this.length && this.words[d] >= 67108864; d++)
        this.words[d] -= 67108864, d === this.length - 1 ? this.words[d + 1] = 1 : this.words[d + 1]++;
      return this.length = Math.max(this.length, d + 1), this;
    }, s.prototype.isubn = function(f) {
      if (r(typeof f == "number"), r(f < 67108864), f < 0)
        return this.iaddn(-f);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(f), this.negative = 1, this;
      if (this.words[0] -= f, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var d = 0; d < this.length && this.words[d] < 0; d++)
          this.words[d] += 67108864, this.words[d + 1] -= 1;
      return this._strip();
    }, s.prototype.addn = function(f) {
      return this.clone().iaddn(f);
    }, s.prototype.subn = function(f) {
      return this.clone().isubn(f);
    }, s.prototype.iabs = function() {
      return this.negative = 0, this;
    }, s.prototype.abs = function() {
      return this.clone().iabs();
    }, s.prototype._ishlnsubmul = function(f, d, g) {
      var v = f.length + g, A;
      this._expand(v);
      var k, N = 0;
      for (A = 0; A < f.length; A++) {
        k = (this.words[A + g] | 0) + N;
        var p = (f.words[A] | 0) * d;
        k -= p & 67108863, N = (k >> 26) - (p / 67108864 | 0), this.words[A + g] = k & 67108863;
      }
      for (; A < this.length - g; A++)
        k = (this.words[A + g] | 0) + N, N = k >> 26, this.words[A + g] = k & 67108863;
      if (N === 0)
        return this._strip();
      for (r(N === -1), N = 0, A = 0; A < this.length; A++)
        k = -(this.words[A] | 0) + N, N = k >> 26, this.words[A] = k & 67108863;
      return this.negative = 1, this._strip();
    }, s.prototype._wordDiv = function(f, d) {
      var g = this.length - f.length, v = this.clone(), A = f, k = A.words[A.length - 1] | 0, N = this._countBits(k);
      g = 26 - N, g !== 0 && (A = A.ushln(g), v.iushln(g), k = A.words[A.length - 1] | 0);
      var p = v.length - A.length, c;
      if (d !== "mod") {
        c = new s(null), c.length = p + 1, c.words = new Array(c.length);
        for (var m = 0; m < c.length; m++)
          c.words[m] = 0;
      }
      var M = v.clone()._ishlnsubmul(A, 1, p);
      M.negative === 0 && (v = M, c && (c.words[p] = 1));
      for (var u = p - 1; u >= 0; u--) {
        var P = (v.words[A.length + u] | 0) * 67108864 + (v.words[A.length + u - 1] | 0);
        for (P = Math.min(P / k | 0, 67108863), v._ishlnsubmul(A, P, u); v.negative !== 0; )
          P--, v.negative = 0, v._ishlnsubmul(A, 1, u), v.isZero() || (v.negative ^= 1);
        c && (c.words[u] = P);
      }
      return c && c._strip(), v._strip(), d !== "div" && g !== 0 && v.iushrn(g), {
        div: c || null,
        mod: v
      };
    }, s.prototype.divmod = function(f, d, g) {
      if (r(!f.isZero()), this.isZero())
        return {
          div: new s(0),
          mod: new s(0)
        };
      var v, A, k;
      return this.negative !== 0 && f.negative === 0 ? (k = this.neg().divmod(f, d), d !== "mod" && (v = k.div.neg()), d !== "div" && (A = k.mod.neg(), g && A.negative !== 0 && A.iadd(f)), {
        div: v,
        mod: A
      }) : this.negative === 0 && f.negative !== 0 ? (k = this.divmod(f.neg(), d), d !== "mod" && (v = k.div.neg()), {
        div: v,
        mod: k.mod
      }) : this.negative & f.negative ? (k = this.neg().divmod(f.neg(), d), d !== "div" && (A = k.mod.neg(), g && A.negative !== 0 && A.isub(f)), {
        div: k.div,
        mod: A
      }) : f.length > this.length || this.cmp(f) < 0 ? {
        div: new s(0),
        mod: this
      } : f.length === 1 ? d === "div" ? {
        div: this.divn(f.words[0]),
        mod: null
      } : d === "mod" ? {
        div: null,
        mod: new s(this.modrn(f.words[0]))
      } : {
        div: this.divn(f.words[0]),
        mod: new s(this.modrn(f.words[0]))
      } : this._wordDiv(f, d);
    }, s.prototype.div = function(f) {
      return this.divmod(f, "div", !1).div;
    }, s.prototype.mod = function(f) {
      return this.divmod(f, "mod", !1).mod;
    }, s.prototype.umod = function(f) {
      return this.divmod(f, "mod", !0).mod;
    }, s.prototype.divRound = function(f) {
      var d = this.divmod(f);
      if (d.mod.isZero())
        return d.div;
      var g = d.div.negative !== 0 ? d.mod.isub(f) : d.mod, v = f.ushrn(1), A = f.andln(1), k = g.cmp(v);
      return k < 0 || A === 1 && k === 0 ? d.div : d.div.negative !== 0 ? d.div.isubn(1) : d.div.iaddn(1);
    }, s.prototype.modrn = function(f) {
      var d = f < 0;
      d && (f = -f), r(f <= 67108863);
      for (var g = (1 << 26) % f, v = 0, A = this.length - 1; A >= 0; A--)
        v = (g * v + (this.words[A] | 0)) % f;
      return d ? -v : v;
    }, s.prototype.modn = function(f) {
      return this.modrn(f);
    }, s.prototype.idivn = function(f) {
      var d = f < 0;
      d && (f = -f), r(f <= 67108863);
      for (var g = 0, v = this.length - 1; v >= 0; v--) {
        var A = (this.words[v] | 0) + g * 67108864;
        this.words[v] = A / f | 0, g = A % f;
      }
      return this._strip(), d ? this.ineg() : this;
    }, s.prototype.divn = function(f) {
      return this.clone().idivn(f);
    }, s.prototype.egcd = function(f) {
      r(f.negative === 0), r(!f.isZero());
      var d = this, g = f.clone();
      d.negative !== 0 ? d = d.umod(f) : d = d.clone();
      for (var v = new s(1), A = new s(0), k = new s(0), N = new s(1), p = 0; d.isEven() && g.isEven(); )
        d.iushrn(1), g.iushrn(1), ++p;
      for (var c = g.clone(), m = d.clone(); !d.isZero(); ) {
        for (var M = 0, u = 1; !(d.words[0] & u) && M < 26; ++M, u <<= 1)
          ;
        if (M > 0)
          for (d.iushrn(M); M-- > 0; )
            (v.isOdd() || A.isOdd()) && (v.iadd(c), A.isub(m)), v.iushrn(1), A.iushrn(1);
        for (var P = 0, O = 1; !(g.words[0] & O) && P < 26; ++P, O <<= 1)
          ;
        if (P > 0)
          for (g.iushrn(P); P-- > 0; )
            (k.isOdd() || N.isOdd()) && (k.iadd(c), N.isub(m)), k.iushrn(1), N.iushrn(1);
        d.cmp(g) >= 0 ? (d.isub(g), v.isub(k), A.isub(N)) : (g.isub(d), k.isub(v), N.isub(A));
      }
      return {
        a: k,
        b: N,
        gcd: g.iushln(p)
      };
    }, s.prototype._invmp = function(f) {
      r(f.negative === 0), r(!f.isZero());
      var d = this, g = f.clone();
      d.negative !== 0 ? d = d.umod(f) : d = d.clone();
      for (var v = new s(1), A = new s(0), k = g.clone(); d.cmpn(1) > 0 && g.cmpn(1) > 0; ) {
        for (var N = 0, p = 1; !(d.words[0] & p) && N < 26; ++N, p <<= 1)
          ;
        if (N > 0)
          for (d.iushrn(N); N-- > 0; )
            v.isOdd() && v.iadd(k), v.iushrn(1);
        for (var c = 0, m = 1; !(g.words[0] & m) && c < 26; ++c, m <<= 1)
          ;
        if (c > 0)
          for (g.iushrn(c); c-- > 0; )
            A.isOdd() && A.iadd(k), A.iushrn(1);
        d.cmp(g) >= 0 ? (d.isub(g), v.isub(A)) : (g.isub(d), A.isub(v));
      }
      var M;
      return d.cmpn(1) === 0 ? M = v : M = A, M.cmpn(0) < 0 && M.iadd(f), M;
    }, s.prototype.gcd = function(f) {
      if (this.isZero())
        return f.abs();
      if (f.isZero())
        return this.abs();
      var d = this.clone(), g = f.clone();
      d.negative = 0, g.negative = 0;
      for (var v = 0; d.isEven() && g.isEven(); v++)
        d.iushrn(1), g.iushrn(1);
      do {
        for (; d.isEven(); )
          d.iushrn(1);
        for (; g.isEven(); )
          g.iushrn(1);
        var A = d.cmp(g);
        if (A < 0) {
          var k = d;
          d = g, g = k;
        } else if (A === 0 || g.cmpn(1) === 0)
          break;
        d.isub(g);
      } while (!0);
      return g.iushln(v);
    }, s.prototype.invm = function(f) {
      return this.egcd(f).a.umod(f);
    }, s.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, s.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, s.prototype.andln = function(f) {
      return this.words[0] & f;
    }, s.prototype.bincn = function(f) {
      r(typeof f == "number");
      var d = f % 26, g = (f - d) / 26, v = 1 << d;
      if (this.length <= g)
        return this._expand(g + 1), this.words[g] |= v, this;
      for (var A = v, k = g; A !== 0 && k < this.length; k++) {
        var N = this.words[k] | 0;
        N += A, A = N >>> 26, N &= 67108863, this.words[k] = N;
      }
      return A !== 0 && (this.words[k] = A, this.length++), this;
    }, s.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, s.prototype.cmpn = function(f) {
      var d = f < 0;
      if (this.negative !== 0 && !d)
        return -1;
      if (this.negative === 0 && d)
        return 1;
      this._strip();
      var g;
      if (this.length > 1)
        g = 1;
      else {
        d && (f = -f), r(f <= 67108863, "Number is too big");
        var v = this.words[0] | 0;
        g = v === f ? 0 : v < f ? -1 : 1;
      }
      return this.negative !== 0 ? -g | 0 : g;
    }, s.prototype.cmp = function(f) {
      if (this.negative !== 0 && f.negative === 0)
        return -1;
      if (this.negative === 0 && f.negative !== 0)
        return 1;
      var d = this.ucmp(f);
      return this.negative !== 0 ? -d | 0 : d;
    }, s.prototype.ucmp = function(f) {
      if (this.length > f.length)
        return 1;
      if (this.length < f.length)
        return -1;
      for (var d = 0, g = this.length - 1; g >= 0; g--) {
        var v = this.words[g] | 0, A = f.words[g] | 0;
        if (v !== A) {
          v < A ? d = -1 : v > A && (d = 1);
          break;
        }
      }
      return d;
    }, s.prototype.gtn = function(f) {
      return this.cmpn(f) === 1;
    }, s.prototype.gt = function(f) {
      return this.cmp(f) === 1;
    }, s.prototype.gten = function(f) {
      return this.cmpn(f) >= 0;
    }, s.prototype.gte = function(f) {
      return this.cmp(f) >= 0;
    }, s.prototype.ltn = function(f) {
      return this.cmpn(f) === -1;
    }, s.prototype.lt = function(f) {
      return this.cmp(f) === -1;
    }, s.prototype.lten = function(f) {
      return this.cmpn(f) <= 0;
    }, s.prototype.lte = function(f) {
      return this.cmp(f) <= 0;
    }, s.prototype.eqn = function(f) {
      return this.cmpn(f) === 0;
    }, s.prototype.eq = function(f) {
      return this.cmp(f) === 0;
    }, s.red = function(f) {
      return new Q(f);
    }, s.prototype.toRed = function(f) {
      return r(!this.red, "Already a number in reduction context"), r(this.negative === 0, "red works only with positives"), f.convertTo(this)._forceRed(f);
    }, s.prototype.fromRed = function() {
      return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, s.prototype._forceRed = function(f) {
      return this.red = f, this;
    }, s.prototype.forceRed = function(f) {
      return r(!this.red, "Already a number in reduction context"), this._forceRed(f);
    }, s.prototype.redAdd = function(f) {
      return r(this.red, "redAdd works only with red numbers"), this.red.add(this, f);
    }, s.prototype.redIAdd = function(f) {
      return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f);
    }, s.prototype.redSub = function(f) {
      return r(this.red, "redSub works only with red numbers"), this.red.sub(this, f);
    }, s.prototype.redISub = function(f) {
      return r(this.red, "redISub works only with red numbers"), this.red.isub(this, f);
    }, s.prototype.redShl = function(f) {
      return r(this.red, "redShl works only with red numbers"), this.red.shl(this, f);
    }, s.prototype.redMul = function(f) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.mul(this, f);
    }, s.prototype.redIMul = function(f) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.imul(this, f);
    }, s.prototype.redSqr = function() {
      return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, s.prototype.redISqr = function() {
      return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, s.prototype.redSqrt = function() {
      return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, s.prototype.redInvm = function() {
      return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, s.prototype.redNeg = function() {
      return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, s.prototype.redPow = function(f) {
      return r(this.red && !f.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f);
    };
    var L = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function W(w, f) {
      this.name = w, this.p = new s(f, 16), this.n = this.p.bitLength(), this.k = new s(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    W.prototype._tmp = function() {
      var f = new s(null);
      return f.words = new Array(Math.ceil(this.n / 13)), f;
    }, W.prototype.ireduce = function(f) {
      var d = f, g;
      do
        this.split(d, this.tmp), d = this.imulK(d), d = d.iadd(this.tmp), g = d.bitLength();
      while (g > this.n);
      var v = g < this.n ? -1 : d.ucmp(this.p);
      return v === 0 ? (d.words[0] = 0, d.length = 1) : v > 0 ? d.isub(this.p) : d.strip !== void 0 ? d.strip() : d._strip(), d;
    }, W.prototype.split = function(f, d) {
      f.iushrn(this.n, 0, d);
    }, W.prototype.imulK = function(f) {
      return f.imul(this.k);
    };
    function Z() {
      W.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    i(Z, W), Z.prototype.split = function(f, d) {
      for (var g = 4194303, v = Math.min(f.length, 9), A = 0; A < v; A++)
        d.words[A] = f.words[A];
      if (d.length = v, f.length <= 9) {
        f.words[0] = 0, f.length = 1;
        return;
      }
      var k = f.words[9];
      for (d.words[d.length++] = k & g, A = 10; A < f.length; A++) {
        var N = f.words[A] | 0;
        f.words[A - 10] = (N & g) << 4 | k >>> 22, k = N;
      }
      k >>>= 22, f.words[A - 10] = k, k === 0 && f.length > 10 ? f.length -= 10 : f.length -= 9;
    }, Z.prototype.imulK = function(f) {
      f.words[f.length] = 0, f.words[f.length + 1] = 0, f.length += 2;
      for (var d = 0, g = 0; g < f.length; g++) {
        var v = f.words[g] | 0;
        d += v * 977, f.words[g] = d & 67108863, d = v * 64 + (d / 67108864 | 0);
      }
      return f.words[f.length - 1] === 0 && (f.length--, f.words[f.length - 1] === 0 && f.length--), f;
    };
    function Y() {
      W.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    i(Y, W);
    function ne() {
      W.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    i(ne, W);
    function fe() {
      W.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    i(fe, W), fe.prototype.imulK = function(f) {
      for (var d = 0, g = 0; g < f.length; g++) {
        var v = (f.words[g] | 0) * 19 + d, A = v & 67108863;
        v >>>= 26, f.words[g] = A, d = v;
      }
      return d !== 0 && (f.words[f.length++] = d), f;
    }, s._prime = function(f) {
      if (L[f])
        return L[f];
      var d;
      if (f === "k256")
        d = new Z();
      else if (f === "p224")
        d = new Y();
      else if (f === "p192")
        d = new ne();
      else if (f === "p25519")
        d = new fe();
      else
        throw new Error("Unknown prime " + f);
      return L[f] = d, d;
    };
    function Q(w) {
      if (typeof w == "string") {
        var f = s._prime(w);
        this.m = f.p, this.prime = f;
      } else
        r(w.gtn(1), "modulus must be greater than 1"), this.m = w, this.prime = null;
    }
    Q.prototype._verify1 = function(f) {
      r(f.negative === 0, "red works only with positives"), r(f.red, "red works only with red numbers");
    }, Q.prototype._verify2 = function(f, d) {
      r((f.negative | d.negative) === 0, "red works only with positives"), r(
        f.red && f.red === d.red,
        "red works only with red numbers"
      );
    }, Q.prototype.imod = function(f) {
      return this.prime ? this.prime.ireduce(f)._forceRed(this) : (x(f, f.umod(this.m)._forceRed(this)), f);
    }, Q.prototype.neg = function(f) {
      return f.isZero() ? f.clone() : this.m.sub(f)._forceRed(this);
    }, Q.prototype.add = function(f, d) {
      this._verify2(f, d);
      var g = f.add(d);
      return g.cmp(this.m) >= 0 && g.isub(this.m), g._forceRed(this);
    }, Q.prototype.iadd = function(f, d) {
      this._verify2(f, d);
      var g = f.iadd(d);
      return g.cmp(this.m) >= 0 && g.isub(this.m), g;
    }, Q.prototype.sub = function(f, d) {
      this._verify2(f, d);
      var g = f.sub(d);
      return g.cmpn(0) < 0 && g.iadd(this.m), g._forceRed(this);
    }, Q.prototype.isub = function(f, d) {
      this._verify2(f, d);
      var g = f.isub(d);
      return g.cmpn(0) < 0 && g.iadd(this.m), g;
    }, Q.prototype.shl = function(f, d) {
      return this._verify1(f), this.imod(f.ushln(d));
    }, Q.prototype.imul = function(f, d) {
      return this._verify2(f, d), this.imod(f.imul(d));
    }, Q.prototype.mul = function(f, d) {
      return this._verify2(f, d), this.imod(f.mul(d));
    }, Q.prototype.isqr = function(f) {
      return this.imul(f, f.clone());
    }, Q.prototype.sqr = function(f) {
      return this.mul(f, f);
    }, Q.prototype.sqrt = function(f) {
      if (f.isZero())
        return f.clone();
      var d = this.m.andln(3);
      if (r(d % 2 === 1), d === 3) {
        var g = this.m.add(new s(1)).iushrn(2);
        return this.pow(f, g);
      }
      for (var v = this.m.subn(1), A = 0; !v.isZero() && v.andln(1) === 0; )
        A++, v.iushrn(1);
      r(!v.isZero());
      var k = new s(1).toRed(this), N = k.redNeg(), p = this.m.subn(1).iushrn(1), c = this.m.bitLength();
      for (c = new s(2 * c * c).toRed(this); this.pow(c, p).cmp(N) !== 0; )
        c.redIAdd(N);
      for (var m = this.pow(c, v), M = this.pow(f, v.addn(1).iushrn(1)), u = this.pow(f, v), P = A; u.cmp(k) !== 0; ) {
        for (var O = u, R = 0; O.cmp(k) !== 0; R++)
          O = O.redSqr();
        r(R < P);
        var F = this.pow(m, new s(1).iushln(P - R - 1));
        M = M.redMul(F), m = F.redSqr(), u = u.redMul(m), P = R;
      }
      return M;
    }, Q.prototype.invm = function(f) {
      var d = f._invmp(this.m);
      return d.negative !== 0 ? (d.negative = 0, this.imod(d).redNeg()) : this.imod(d);
    }, Q.prototype.pow = function(f, d) {
      if (d.isZero())
        return new s(1).toRed(this);
      if (d.cmpn(1) === 0)
        return f.clone();
      var g = 4, v = new Array(1 << g);
      v[0] = new s(1).toRed(this), v[1] = f;
      for (var A = 2; A < v.length; A++)
        v[A] = this.mul(v[A - 1], f);
      var k = v[0], N = 0, p = 0, c = d.bitLength() % 26;
      for (c === 0 && (c = 26), A = d.length - 1; A >= 0; A--) {
        for (var m = d.words[A], M = c - 1; M >= 0; M--) {
          var u = m >> M & 1;
          if (k !== v[0] && (k = this.sqr(k)), u === 0 && N === 0) {
            p = 0;
            continue;
          }
          N <<= 1, N |= u, p++, !(p !== g && (A !== 0 || M !== 0)) && (k = this.mul(k, v[N]), p = 0, N = 0);
        }
        c = 26;
      }
      return k;
    }, Q.prototype.convertTo = function(f) {
      var d = f.umod(this.m);
      return d === f ? d.clone() : d;
    }, Q.prototype.convertFrom = function(f) {
      var d = f.clone();
      return d.red = null, d;
    }, s.mont = function(f) {
      return new pe(f);
    };
    function pe(w) {
      Q.call(this, w), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new s(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    i(pe, Q), pe.prototype.convertTo = function(f) {
      return this.imod(f.ushln(this.shift));
    }, pe.prototype.convertFrom = function(f) {
      var d = this.imod(f.mul(this.rinv));
      return d.red = null, d;
    }, pe.prototype.imul = function(f, d) {
      if (f.isZero() || d.isZero())
        return f.words[0] = 0, f.length = 1, f;
      var g = f.imul(d), v = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), A = g.isub(v).iushrn(this.shift), k = A;
      return A.cmp(this.m) >= 0 ? k = A.isub(this.m) : A.cmpn(0) < 0 && (k = A.iadd(this.m)), k._forceRed(this);
    }, pe.prototype.mul = function(f, d) {
      if (f.isZero() || d.isZero())
        return new s(0)._forceRed(this);
      var g = f.mul(d), v = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), A = g.isub(v).iushrn(this.shift), k = A;
      return A.cmp(this.m) >= 0 ? k = A.isub(this.m) : A.cmpn(0) < 0 && (k = A.iadd(this.m)), k._forceRed(this);
    }, pe.prototype.invm = function(f) {
      var d = this.imod(f._invmp(this.m).mul(this.r2));
      return d._forceRed(this);
    };
  })(n, f0);
})(ho);
var Sc = ho.exports;
const te = /* @__PURE__ */ en(Sc), kc = "logger/5.7.0";
let Vo = !1, $o = !1;
const Si = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let Yo = Si.default, As = null;
function Pc() {
  try {
    const n = [];
    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
      try {
        if ("test".normalize(e) !== "test")
          throw new Error("bad normalize");
      } catch {
        n.push(e);
      }
    }), n.length)
      throw new Error("missing " + n.join(", "));
    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769))
      throw new Error("broken implementation");
  } catch (n) {
    return n.message;
  }
  return null;
}
const Qo = Pc();
var js;
(function(n) {
  n.DEBUG = "DEBUG", n.INFO = "INFO", n.WARNING = "WARNING", n.ERROR = "ERROR", n.OFF = "OFF";
})(js || (js = {}));
var It;
(function(n) {
  n.UNKNOWN_ERROR = "UNKNOWN_ERROR", n.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", n.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", n.NETWORK_ERROR = "NETWORK_ERROR", n.SERVER_ERROR = "SERVER_ERROR", n.TIMEOUT = "TIMEOUT", n.BUFFER_OVERRUN = "BUFFER_OVERRUN", n.NUMERIC_FAULT = "NUMERIC_FAULT", n.MISSING_NEW = "MISSING_NEW", n.INVALID_ARGUMENT = "INVALID_ARGUMENT", n.MISSING_ARGUMENT = "MISSING_ARGUMENT", n.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", n.CALL_EXCEPTION = "CALL_EXCEPTION", n.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", n.NONCE_EXPIRED = "NONCE_EXPIRED", n.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", n.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", n.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", n.ACTION_REJECTED = "ACTION_REJECTED";
})(It || (It = {}));
const Zo = "0123456789abcdef";
class _ {
  constructor(e) {
    Object.defineProperty(this, "version", {
      enumerable: !0,
      value: e,
      writable: !1
    });
  }
  _log(e, t) {
    const r = e.toLowerCase();
    Si[r] == null && this.throwArgumentError("invalid log level name", "logLevel", e), !(Yo > Si[r]) && console.log.apply(console, t);
  }
  debug(...e) {
    this._log(_.levels.DEBUG, e);
  }
  info(...e) {
    this._log(_.levels.INFO, e);
  }
  warn(...e) {
    this._log(_.levels.WARNING, e);
  }
  makeError(e, t, r) {
    if ($o)
      return this.makeError("censored error", t, {});
    t || (t = _.errors.UNKNOWN_ERROR), r || (r = {});
    const i = [];
    Object.keys(r).forEach((l) => {
      const h = r[l];
      try {
        if (h instanceof Uint8Array) {
          let x = "";
          for (let b = 0; b < h.length; b++)
            x += Zo[h[b] >> 4], x += Zo[h[b] & 15];
          i.push(l + "=Uint8Array(0x" + x + ")");
        } else
          i.push(l + "=" + JSON.stringify(h));
      } catch {
        i.push(l + "=" + JSON.stringify(r[l].toString()));
      }
    }), i.push(`code=${t}`), i.push(`version=${this.version}`);
    const s = e;
    let o = "";
    switch (t) {
      case It.NUMERIC_FAULT: {
        o = "NUMERIC_FAULT";
        const l = e;
        switch (l) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            o += "-" + l;
            break;
          case "negative-power":
          case "negative-width":
            o += "-unsupported";
            break;
          case "unbound-bitwise-result":
            o += "-unbound-result";
            break;
        }
        break;
      }
      case It.CALL_EXCEPTION:
      case It.INSUFFICIENT_FUNDS:
      case It.MISSING_NEW:
      case It.NONCE_EXPIRED:
      case It.REPLACEMENT_UNDERPRICED:
      case It.TRANSACTION_REPLACED:
      case It.UNPREDICTABLE_GAS_LIMIT:
        o = t;
        break;
    }
    o && (e += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"), i.length && (e += " (" + i.join(", ") + ")");
    const a = new Error(e);
    return a.reason = s, a.code = t, Object.keys(r).forEach(function(l) {
      a[l] = r[l];
    }), a;
  }
  throwError(e, t, r) {
    throw this.makeError(e, t, r);
  }
  throwArgumentError(e, t, r) {
    return this.throwError(e, _.errors.INVALID_ARGUMENT, {
      argument: t,
      value: r
    });
  }
  assert(e, t, r, i) {
    e || this.throwError(t, r, i);
  }
  assertArgument(e, t, r, i) {
    e || this.throwArgumentError(t, r, i);
  }
  checkNormalize(e) {
    Qo && this.throwError("platform missing String.prototype.normalize", _.errors.UNSUPPORTED_OPERATION, {
      operation: "String.prototype.normalize",
      form: Qo
    });
  }
  checkSafeUint53(e, t) {
    typeof e == "number" && (t == null && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, _.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "out-of-safe-range",
      value: e
    }), e % 1 && this.throwError(t, _.errors.NUMERIC_FAULT, {
      operation: "checkSafeInteger",
      fault: "non-integer",
      value: e
    }));
  }
  checkArgumentCount(e, t, r) {
    r ? r = ": " + r : r = "", e < t && this.throwError("missing argument" + r, _.errors.MISSING_ARGUMENT, {
      count: e,
      expectedCount: t
    }), e > t && this.throwError("too many arguments" + r, _.errors.UNEXPECTED_ARGUMENT, {
      count: e,
      expectedCount: t
    });
  }
  checkNew(e, t) {
    (e === Object || e == null) && this.throwError("missing new", _.errors.MISSING_NEW, { name: t.name });
  }
  checkAbstract(e, t) {
    e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", _.errors.UNSUPPORTED_OPERATION, { name: e.name, operation: "new" }) : (e === Object || e == null) && this.throwError("missing new", _.errors.MISSING_NEW, { name: t.name });
  }
  static globalLogger() {
    return As || (As = new _(kc)), As;
  }
  static setCensorship(e, t) {
    if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", _.errors.UNSUPPORTED_OPERATION, {
      operation: "setCensorship"
    }), Vo) {
      if (!e)
        return;
      this.globalLogger().throwError("error censorship permanent", _.errors.UNSUPPORTED_OPERATION, {
        operation: "setCensorship"
      });
    }
    $o = !!e, Vo = !!t;
  }
  static setLogLevel(e) {
    const t = Si[e.toLowerCase()];
    if (t == null) {
      _.globalLogger().warn("invalid log level - " + e);
      return;
    }
    Yo = t;
  }
  static from(e) {
    return new _(e);
  }
}
_.errors = It;
_.levels = js;
const Cc = "bytes/5.7.0", Xe = new _(Cc);
function c0(n) {
  return !!n.toHexString;
}
function gn(n) {
  return n.slice || (n.slice = function() {
    const e = Array.prototype.slice.call(arguments);
    return gn(new Uint8Array(Array.prototype.slice.apply(n, e)));
  }), n;
}
function oi(n) {
  return re(n) && !(n.length % 2) || kr(n);
}
function Xo(n) {
  return typeof n == "number" && n == n && n % 1 === 0;
}
function kr(n) {
  if (n == null)
    return !1;
  if (n.constructor === Uint8Array)
    return !0;
  if (typeof n == "string" || !Xo(n.length) || n.length < 0)
    return !1;
  for (let e = 0; e < n.length; e++) {
    const t = n[e];
    if (!Xo(t) || t < 0 || t >= 256)
      return !1;
  }
  return !0;
}
function K(n, e) {
  if (e || (e = {}), typeof n == "number") {
    Xe.checkSafeUint53(n, "invalid arrayify value");
    const t = [];
    for (; n; )
      t.unshift(n & 255), n = parseInt(String(n / 256));
    return t.length === 0 && t.push(0), gn(new Uint8Array(t));
  }
  if (e.allowMissingPrefix && typeof n == "string" && n.substring(0, 2) !== "0x" && (n = "0x" + n), c0(n) && (n = n.toHexString()), re(n)) {
    let t = n.substring(2);
    t.length % 2 && (e.hexPad === "left" ? t = "0" + t : e.hexPad === "right" ? t += "0" : Xe.throwArgumentError("hex data is odd-length", "value", n));
    const r = [];
    for (let i = 0; i < t.length; i += 2)
      r.push(parseInt(t.substring(i, i + 2), 16));
    return gn(new Uint8Array(r));
  }
  return kr(n) ? gn(new Uint8Array(n)) : Xe.throwArgumentError("invalid arrayify value", "value", n);
}
function de(n) {
  const e = n.map((i) => K(i)), t = e.reduce((i, s) => i + s.length, 0), r = new Uint8Array(t);
  return e.reduce((i, s) => (r.set(s, i), i + s.length), 0), gn(r);
}
function Wt(n) {
  let e = K(n);
  if (e.length === 0)
    return e;
  let t = 0;
  for (; t < e.length && e[t] === 0; )
    t++;
  return t && (e = e.slice(t)), e;
}
function qn(n, e) {
  n = K(n), n.length > e && Xe.throwArgumentError("value out of range", "value", arguments[0]);
  const t = new Uint8Array(e);
  return t.set(n, e - n.length), gn(t);
}
function re(n, e) {
  return !(typeof n != "string" || !n.match(/^0x[0-9A-Fa-f]*$/) || e && n.length !== 2 + 2 * e);
}
const Es = "0123456789abcdef";
function G(n, e) {
  if (e || (e = {}), typeof n == "number") {
    Xe.checkSafeUint53(n, "invalid hexlify value");
    let t = "";
    for (; n; )
      t = Es[n & 15] + t, n = Math.floor(n / 16);
    return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00";
  }
  if (typeof n == "bigint")
    return n = n.toString(16), n.length % 2 ? "0x0" + n : "0x" + n;
  if (e.allowMissingPrefix && typeof n == "string" && n.substring(0, 2) !== "0x" && (n = "0x" + n), c0(n))
    return n.toHexString();
  if (re(n))
    return n.length % 2 && (e.hexPad === "left" ? n = "0x0" + n.substring(2) : e.hexPad === "right" ? n += "0" : Xe.throwArgumentError("hex data is odd-length", "value", n)), n.toLowerCase();
  if (kr(n)) {
    let t = "0x";
    for (let r = 0; r < n.length; r++) {
      let i = n[r];
      t += Es[(i & 240) >> 4] + Es[i & 15];
    }
    return t;
  }
  return Xe.throwArgumentError("invalid hexlify value", "value", n);
}
function Yt(n) {
  if (typeof n != "string")
    n = G(n);
  else if (!re(n) || n.length % 2)
    return null;
  return (n.length - 2) / 2;
}
function rt(n, e, t) {
  return typeof n != "string" ? n = G(n) : (!re(n) || n.length % 2) && Xe.throwArgumentError("invalid hexData", "value", n), e = 2 + 2 * e, t != null ? "0x" + n.substring(e, 2 + 2 * t) : "0x" + n.substring(e);
}
function bt(n) {
  let e = "0x";
  return n.forEach((t) => {
    e += G(t).substring(2);
  }), e;
}
function ai(n) {
  const e = l0(G(n, { hexPad: "left" }));
  return e === "0x" ? "0x0" : e;
}
function l0(n) {
  typeof n != "string" && (n = G(n)), re(n) || Xe.throwArgumentError("invalid hex string", "value", n), n = n.substring(2);
  let e = 0;
  for (; e < n.length && n[e] === "0"; )
    e++;
  return "0x" + n.substring(e);
}
function xe(n, e) {
  for (typeof n != "string" ? n = G(n) : re(n) || Xe.throwArgumentError("invalid hex string", "value", n), n.length > 2 * e + 2 && Xe.throwArgumentError("value out of range", "value", arguments[1]); n.length < 2 * e + 2; )
    n = "0x0" + n.substring(2);
  return n;
}
function tn(n) {
  const e = {
    r: "0x",
    s: "0x",
    _vs: "0x",
    recoveryParam: 0,
    v: 0,
    yParityAndS: "0x",
    compact: "0x"
  };
  if (oi(n)) {
    let t = K(n);
    t.length === 64 ? (e.v = 27 + (t[32] >> 7), t[32] &= 127, e.r = G(t.slice(0, 32)), e.s = G(t.slice(32, 64))) : t.length === 65 ? (e.r = G(t.slice(0, 32)), e.s = G(t.slice(32, 64)), e.v = t[64]) : Xe.throwArgumentError("invalid signature string", "signature", n), e.v < 27 && (e.v === 0 || e.v === 1 ? e.v += 27 : Xe.throwArgumentError("signature invalid v byte", "signature", n)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (t[32] |= 128), e._vs = G(t.slice(32, 64));
  } else {
    if (e.r = n.r, e.s = n.s, e.v = n.v, e.recoveryParam = n.recoveryParam, e._vs = n._vs, e._vs != null) {
      const i = qn(K(e._vs), 32);
      e._vs = G(i);
      const s = i[0] >= 128 ? 1 : 0;
      e.recoveryParam == null ? e.recoveryParam = s : e.recoveryParam !== s && Xe.throwArgumentError("signature recoveryParam mismatch _vs", "signature", n), i[0] &= 127;
      const o = G(i);
      e.s == null ? e.s = o : e.s !== o && Xe.throwArgumentError("signature v mismatch _vs", "signature", n);
    }
    if (e.recoveryParam == null)
      e.v == null ? Xe.throwArgumentError("signature missing v and recoveryParam", "signature", n) : e.v === 0 || e.v === 1 ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
    else if (e.v == null)
      e.v = 27 + e.recoveryParam;
    else {
      const i = e.v === 0 || e.v === 1 ? e.v : 1 - e.v % 2;
      e.recoveryParam !== i && Xe.throwArgumentError("signature recoveryParam mismatch v", "signature", n);
    }
    e.r == null || !re(e.r) ? Xe.throwArgumentError("signature missing or invalid r", "signature", n) : e.r = xe(e.r, 32), e.s == null || !re(e.s) ? Xe.throwArgumentError("signature missing or invalid s", "signature", n) : e.s = xe(e.s, 32);
    const t = K(e.s);
    t[0] >= 128 && Xe.throwArgumentError("signature s out of range", "signature", n), e.recoveryParam && (t[0] |= 128);
    const r = G(t);
    e._vs && (re(e._vs) || Xe.throwArgumentError("signature invalid _vs", "signature", n), e._vs = xe(e._vs, 32)), e._vs == null ? e._vs = r : e._vs !== r && Xe.throwArgumentError("signature _vs mismatch v and s", "signature", n);
  }
  return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e;
}
function Ws(n) {
  return n = tn(n), G(de([
    n.r,
    n.s,
    n.recoveryParam ? "0x1c" : "0x1b"
  ]));
}
const u0 = "bignumber/5.7.0";
var Qn = te.BN;
const nr = new _(u0), _s = {}, ea = 9007199254740991;
function Ic(n) {
  return n != null && (H.isBigNumber(n) || typeof n == "number" && n % 1 === 0 || typeof n == "string" && !!n.match(/^-?[0-9]+$/) || re(n) || typeof n == "bigint" || kr(n));
}
let ta = !1;
class H {
  constructor(e, t) {
    e !== _s && nr.throwError("cannot call constructor directly; use BigNumber.from", _.errors.UNSUPPORTED_OPERATION, {
      operation: "new (BigNumber)"
    }), this._hex = t, this._isBigNumber = !0, Object.freeze(this);
  }
  fromTwos(e) {
    return vt(se(this).fromTwos(e));
  }
  toTwos(e) {
    return vt(se(this).toTwos(e));
  }
  abs() {
    return this._hex[0] === "-" ? H.from(this._hex.substring(1)) : this;
  }
  add(e) {
    return vt(se(this).add(se(e)));
  }
  sub(e) {
    return vt(se(this).sub(se(e)));
  }
  div(e) {
    return H.from(e).isZero() && Pt("division-by-zero", "div"), vt(se(this).div(se(e)));
  }
  mul(e) {
    return vt(se(this).mul(se(e)));
  }
  mod(e) {
    const t = se(e);
    return t.isNeg() && Pt("division-by-zero", "mod"), vt(se(this).umod(t));
  }
  pow(e) {
    const t = se(e);
    return t.isNeg() && Pt("negative-power", "pow"), vt(se(this).pow(t));
  }
  and(e) {
    const t = se(e);
    return (this.isNegative() || t.isNeg()) && Pt("unbound-bitwise-result", "and"), vt(se(this).and(t));
  }
  or(e) {
    const t = se(e);
    return (this.isNegative() || t.isNeg()) && Pt("unbound-bitwise-result", "or"), vt(se(this).or(t));
  }
  xor(e) {
    const t = se(e);
    return (this.isNegative() || t.isNeg()) && Pt("unbound-bitwise-result", "xor"), vt(se(this).xor(t));
  }
  mask(e) {
    return (this.isNegative() || e < 0) && Pt("negative-width", "mask"), vt(se(this).maskn(e));
  }
  shl(e) {
    return (this.isNegative() || e < 0) && Pt("negative-width", "shl"), vt(se(this).shln(e));
  }
  shr(e) {
    return (this.isNegative() || e < 0) && Pt("negative-width", "shr"), vt(se(this).shrn(e));
  }
  eq(e) {
    return se(this).eq(se(e));
  }
  lt(e) {
    return se(this).lt(se(e));
  }
  lte(e) {
    return se(this).lte(se(e));
  }
  gt(e) {
    return se(this).gt(se(e));
  }
  gte(e) {
    return se(this).gte(se(e));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return se(this).isZero();
  }
  toNumber() {
    try {
      return se(this).toNumber();
    } catch {
      Pt("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {
    }
    return nr.throwError("this platform does not support BigInt", _.errors.UNSUPPORTED_OPERATION, {
      value: this.toString()
    });
  }
  toString() {
    return arguments.length > 0 && (arguments[0] === 10 ? ta || (ta = !0, nr.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? nr.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", _.errors.UNEXPECTED_ARGUMENT, {}) : nr.throwError("BigNumber.toString does not accept parameters", _.errors.UNEXPECTED_ARGUMENT, {})), se(this).toString(10);
  }
  toHexString() {
    return this._hex;
  }
  toJSON(e) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(e) {
    if (e instanceof H)
      return e;
    if (typeof e == "string")
      return e.match(/^-?0x[0-9a-f]+$/i) ? new H(_s, Zn(e)) : e.match(/^-?[0-9]+$/) ? new H(_s, Zn(new Qn(e))) : nr.throwArgumentError("invalid BigNumber string", "value", e);
    if (typeof e == "number")
      return e % 1 && Pt("underflow", "BigNumber.from", e), (e >= ea || e <= -ea) && Pt("overflow", "BigNumber.from", e), H.from(String(e));
    const t = e;
    if (typeof t == "bigint")
      return H.from(t.toString());
    if (kr(t))
      return H.from(G(t));
    if (t)
      if (t.toHexString) {
        const r = t.toHexString();
        if (typeof r == "string")
          return H.from(r);
      } else {
        let r = t._hex;
        if (r == null && t.type === "BigNumber" && (r = t.hex), typeof r == "string" && (re(r) || r[0] === "-" && re(r.substring(1))))
          return H.from(r);
      }
    return nr.throwArgumentError("invalid BigNumber value", "value", e);
  }
  static isBigNumber(e) {
    return !!(e && e._isBigNumber);
  }
}
function Zn(n) {
  if (typeof n != "string")
    return Zn(n.toString(16));
  if (n[0] === "-")
    return n = n.substring(1), n[0] === "-" && nr.throwArgumentError("invalid hex", "value", n), n = Zn(n), n === "0x00" ? n : "-" + n;
  if (n.substring(0, 2) !== "0x" && (n = "0x" + n), n === "0x")
    return "0x00";
  for (n.length % 2 && (n = "0x0" + n.substring(2)); n.length > 4 && n.substring(0, 4) === "0x00"; )
    n = "0x" + n.substring(4);
  return n;
}
function vt(n) {
  return H.from(Zn(n));
}
function se(n) {
  const e = H.from(n).toHexString();
  return e[0] === "-" ? new Qn("-" + e.substring(3), 16) : new Qn(e.substring(2), 16);
}
function Pt(n, e, t) {
  const r = { fault: n, operation: e };
  return t != null && (r.value = t), nr.throwError(n, _.errors.NUMERIC_FAULT, r);
}
function Mc(n) {
  return new Qn(n, 36).toString(16);
}
function Nc(n) {
  return new Qn(n, 16).toString(36);
}
const gt = new _(u0), zn = {}, h0 = H.from(0), d0 = H.from(-1);
function x0(n, e, t, r) {
  const i = { fault: e, operation: t };
  return r !== void 0 && (i.value = r), gt.throwError(n, _.errors.NUMERIC_FAULT, i);
}
let jn = "0";
for (; jn.length < 256; )
  jn += jn;
function xo(n) {
  if (typeof n != "number")
    try {
      n = H.from(n).toNumber();
    } catch {
    }
  return typeof n == "number" && n >= 0 && n <= 256 && !(n % 1) ? "1" + jn.substring(0, n) : gt.throwArgumentError("invalid decimal size", "decimals", n);
}
function ki(n, e) {
  e == null && (e = 0);
  const t = xo(e);
  n = H.from(n);
  const r = n.lt(h0);
  r && (n = n.mul(d0));
  let i = n.mod(t).toString();
  for (; i.length < t.length - 1; )
    i = "0" + i;
  i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const s = n.div(t).toString();
  return t.length === 1 ? n = s : n = s + "." + i, r && (n = "-" + n), n;
}
function Kt(n, e) {
  e == null && (e = 0);
  const t = xo(e);
  (typeof n != "string" || !n.match(/^-?[0-9.]+$/)) && gt.throwArgumentError("invalid decimal value", "value", n);
  const r = n.substring(0, 1) === "-";
  r && (n = n.substring(1)), n === "." && gt.throwArgumentError("missing value", "value", n);
  const i = n.split(".");
  i.length > 2 && gt.throwArgumentError("too many decimal points", "value", n);
  let s = i[0], o = i[1];
  for (s || (s = "0"), o || (o = "0"); o[o.length - 1] === "0"; )
    o = o.substring(0, o.length - 1);
  for (o.length > t.length - 1 && x0("fractional component exceeds decimals", "underflow", "parseFixed"), o === "" && (o = "0"); o.length < t.length - 1; )
    o += "0";
  const a = H.from(s), l = H.from(o);
  let h = a.mul(t).add(l);
  return r && (h = h.mul(d0)), h;
}
class mn {
  constructor(e, t, r, i) {
    e !== zn && gt.throwError("cannot use FixedFormat constructor; use FixedFormat.from", _.errors.UNSUPPORTED_OPERATION, {
      operation: "new FixedFormat"
    }), this.signed = t, this.width = r, this.decimals = i, this.name = (t ? "" : "u") + "fixed" + String(r) + "x" + String(i), this._multiplier = xo(i), Object.freeze(this);
  }
  static from(e) {
    if (e instanceof mn)
      return e;
    typeof e == "number" && (e = `fixed128x${e}`);
    let t = !0, r = 128, i = 18;
    if (typeof e == "string") {
      if (e !== "fixed")
        if (e === "ufixed")
          t = !1;
        else {
          const s = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
          s || gt.throwArgumentError("invalid fixed format", "format", e), t = s[1] !== "u", r = parseInt(s[2]), i = parseInt(s[3]);
        }
    } else if (e) {
      const s = (o, a, l) => e[o] == null ? l : (typeof e[o] !== a && gt.throwArgumentError("invalid fixed format (" + o + " not " + a + ")", "format." + o, e[o]), e[o]);
      t = s("signed", "boolean", t), r = s("width", "number", r), i = s("decimals", "number", i);
    }
    return r % 8 && gt.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r), i > 80 && gt.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", i), new mn(zn, t, r, i);
  }
}
class at {
  constructor(e, t, r, i) {
    e !== zn && gt.throwError("cannot use FixedNumber constructor; use FixedNumber.from", _.errors.UNSUPPORTED_OPERATION, {
      operation: "new FixedFormat"
    }), this.format = i, this._hex = t, this._value = r, this._isFixedNumber = !0, Object.freeze(this);
  }
  _checkFormat(e) {
    this.format.name !== e.format.name && gt.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e);
  }
  addUnsafe(e) {
    this._checkFormat(e);
    const t = Kt(this._value, this.format.decimals), r = Kt(e._value, e.format.decimals);
    return at.fromValue(t.add(r), this.format.decimals, this.format);
  }
  subUnsafe(e) {
    this._checkFormat(e);
    const t = Kt(this._value, this.format.decimals), r = Kt(e._value, e.format.decimals);
    return at.fromValue(t.sub(r), this.format.decimals, this.format);
  }
  mulUnsafe(e) {
    this._checkFormat(e);
    const t = Kt(this._value, this.format.decimals), r = Kt(e._value, e.format.decimals);
    return at.fromValue(t.mul(r).div(this.format._multiplier), this.format.decimals, this.format);
  }
  divUnsafe(e) {
    this._checkFormat(e);
    const t = Kt(this._value, this.format.decimals), r = Kt(e._value, e.format.decimals);
    return at.fromValue(t.mul(this.format._multiplier).div(r), this.format.decimals, this.format);
  }
  floor() {
    const e = this.toString().split(".");
    e.length === 1 && e.push("0");
    let t = at.from(e[0], this.format);
    const r = !e[1].match(/^(0*)$/);
    return this.isNegative() && r && (t = t.subUnsafe(ra.toFormat(t.format))), t;
  }
  ceiling() {
    const e = this.toString().split(".");
    e.length === 1 && e.push("0");
    let t = at.from(e[0], this.format);
    const r = !e[1].match(/^(0*)$/);
    return !this.isNegative() && r && (t = t.addUnsafe(ra.toFormat(t.format))), t;
  }
  // @TODO: Support other rounding algorithms
  round(e) {
    e == null && (e = 0);
    const t = this.toString().split(".");
    if (t.length === 1 && t.push("0"), (e < 0 || e > 80 || e % 1) && gt.throwArgumentError("invalid decimal count", "decimals", e), t[1].length <= e)
      return this;
    const r = at.from("1" + jn.substring(0, e), this.format), i = Tc.toFormat(this.format);
    return this.mulUnsafe(r).addUnsafe(i).floor().divUnsafe(r);
  }
  isZero() {
    return this._value === "0.0" || this._value === "0";
  }
  isNegative() {
    return this._value[0] === "-";
  }
  toString() {
    return this._value;
  }
  toHexString(e) {
    if (e == null)
      return this._hex;
    e % 8 && gt.throwArgumentError("invalid byte width", "width", e);
    const t = H.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
    return xe(t, e / 8);
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(e) {
    return at.fromString(this._value, e);
  }
  static fromValue(e, t, r) {
    return r == null && t != null && !Ic(t) && (r = t, t = null), t == null && (t = 0), r == null && (r = "fixed"), at.fromString(ki(e, t), mn.from(r));
  }
  static fromString(e, t) {
    t == null && (t = "fixed");
    const r = mn.from(t), i = Kt(e, r.decimals);
    !r.signed && i.lt(h0) && x0("unsigned value cannot be negative", "overflow", "value", e);
    let s = null;
    r.signed ? s = i.toTwos(r.width).toHexString() : (s = i.toHexString(), s = xe(s, r.width / 8));
    const o = ki(i, r.decimals);
    return new at(zn, s, o, r);
  }
  static fromBytes(e, t) {
    t == null && (t = "fixed");
    const r = mn.from(t);
    if (K(e).length > r.width / 8)
      throw new Error("overflow");
    let i = H.from(e);
    r.signed && (i = i.fromTwos(r.width));
    const s = i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(), o = ki(i, r.decimals);
    return new at(zn, s, o, r);
  }
  static from(e, t) {
    if (typeof e == "string")
      return at.fromString(e, t);
    if (kr(e))
      return at.fromBytes(e, t);
    try {
      return at.fromValue(e, 0, t);
    } catch (r) {
      if (r.code !== _.errors.INVALID_ARGUMENT)
        throw r;
    }
    return gt.throwArgumentError("invalid FixedNumber value", "value", e);
  }
  static isFixedNumber(e) {
    return !!(e && e._isFixedNumber);
  }
}
const ra = at.from(1), Tc = at.from("0.5"), Rc = "properties/5.7.0";
var Bc = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const Oi = new _(Rc);
function B(n, e, t) {
  Object.defineProperty(n, e, {
    enumerable: !0,
    value: t,
    writable: !1
  });
}
function lt(n, e) {
  for (let t = 0; t < 32; t++) {
    if (n[e])
      return n[e];
    if (!n.prototype || typeof n.prototype != "object")
      break;
    n = Object.getPrototypeOf(n.prototype).constructor;
  }
  return null;
}
function et(n) {
  return Bc(this, void 0, void 0, function* () {
    const e = Object.keys(n).map((r) => {
      const i = n[r];
      return Promise.resolve(i).then((s) => ({ key: r, value: s }));
    });
    return (yield Promise.all(e)).reduce((r, i) => (r[i.key] = i.value, r), {});
  });
}
function po(n, e) {
  (!n || typeof n != "object") && Oi.throwArgumentError("invalid object", "object", n), Object.keys(n).forEach((t) => {
    e[t] || Oi.throwArgumentError("invalid object key - " + t, "transaction:" + t, n);
  });
}
function ge(n) {
  const e = {};
  for (const t in n)
    e[t] = n[t];
  return e;
}
const Oc = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
function p0(n) {
  if (n == null || Oc[typeof n])
    return !0;
  if (Array.isArray(n) || typeof n == "object") {
    if (!Object.isFrozen(n))
      return !1;
    const e = Object.keys(n);
    for (let t = 0; t < e.length; t++) {
      let r = null;
      try {
        r = n[e[t]];
      } catch {
        continue;
      }
      if (!p0(r))
        return !1;
    }
    return !0;
  }
  return Oi.throwArgumentError(`Cannot deepCopy ${typeof n}`, "object", n);
}
function Fc(n) {
  if (p0(n))
    return n;
  if (Array.isArray(n))
    return Object.freeze(n.map((e) => mt(e)));
  if (typeof n == "object") {
    const e = {};
    for (const t in n) {
      const r = n[t];
      r !== void 0 && B(e, t, mt(r));
    }
    return e;
  }
  return Oi.throwArgumentError(`Cannot deepCopy ${typeof n}`, "object", n);
}
function mt(n) {
  return Fc(n);
}
class rn {
  constructor(e) {
    for (const t in e)
      this[t] = mt(e[t]);
  }
}
const fi = "abi/5.7.0", ae = new _(fi), Qr = {};
let na = { calldata: !0, memory: !0, storage: !0 }, Dc = { calldata: !0, memory: !0 };
function hi(n, e) {
  if (n === "bytes" || n === "string") {
    if (na[e])
      return !0;
  } else if (n === "address") {
    if (e === "payable")
      return !0;
  } else if ((n.indexOf("[") >= 0 || n === "tuple") && Dc[e])
    return !0;
  return (na[e] || e === "payable") && ae.throwArgumentError("invalid modifier", "name", e), !1;
}
function Lc(n, e) {
  let t = n;
  function r(a) {
    ae.throwArgumentError(`unexpected character at position ${a}`, "param", n);
  }
  n = n.replace(/\s/g, " ");
  function i(a) {
    let l = { type: "", name: "", parent: a, state: { allowType: !0 } };
    return e && (l.indexed = !1), l;
  }
  let s = { type: "", name: "", state: { allowType: !0 } }, o = s;
  for (let a = 0; a < n.length; a++) {
    let l = n[a];
    switch (l) {
      case "(":
        o.state.allowType && o.type === "" ? o.type = "tuple" : o.state.allowParams || r(a), o.state.allowType = !1, o.type = ln(o.type), o.components = [i(o)], o = o.components[0];
        break;
      case ")":
        delete o.state, o.name === "indexed" && (e || r(a), o.indexed = !0, o.name = ""), hi(o.type, o.name) && (o.name = ""), o.type = ln(o.type);
        let h = o;
        o = o.parent, o || r(a), delete h.parent, o.state.allowParams = !1, o.state.allowName = !0, o.state.allowArray = !0;
        break;
      case ",":
        delete o.state, o.name === "indexed" && (e || r(a), o.indexed = !0, o.name = ""), hi(o.type, o.name) && (o.name = ""), o.type = ln(o.type);
        let x = i(o.parent);
        o.parent.components.push(x), delete o.parent, o = x;
        break;
      case " ":
        o.state.allowType && o.type !== "" && (o.type = ln(o.type), delete o.state.allowType, o.state.allowName = !0, o.state.allowParams = !0), o.state.allowName && o.name !== "" && (o.name === "indexed" ? (e || r(a), o.indexed && r(a), o.indexed = !0, o.name = "") : hi(o.type, o.name) ? o.name = "" : o.state.allowName = !1);
        break;
      case "[":
        o.state.allowArray || r(a), o.type += l, o.state.allowArray = !1, o.state.allowName = !1, o.state.readArray = !0;
        break;
      case "]":
        o.state.readArray || r(a), o.type += l, o.state.readArray = !1, o.state.allowArray = !0, o.state.allowName = !0;
        break;
      default:
        o.state.allowType ? (o.type += l, o.state.allowParams = !0, o.state.allowArray = !0) : o.state.allowName ? (o.name += l, delete o.state.allowArray) : o.state.readArray ? o.type += l : r(a);
    }
  }
  return o.parent && ae.throwArgumentError("unexpected eof", "param", n), delete s.state, o.name === "indexed" ? (e || r(t.length - 7), o.indexed && r(t.length - 7), o.indexed = !0, o.name = "") : hi(o.type, o.name) && (o.name = ""), s.type = ln(s.type), s;
}
function Pi(n, e) {
  for (let t in e)
    B(n, t, e[t]);
}
const ce = Object.freeze({
  // Bare formatting, as is needed for computing a sighash of an event or function
  sighash: "sighash",
  // Human-Readable with Minimal spacing and without names (compact human-readable)
  minimal: "minimal",
  // Human-Readable with nice spacing, including all names
  full: "full",
  // JSON-format a la Solidity
  json: "json"
}), Uc = new RegExp(/^(.*)\[([0-9]*)\]$/);
class ot {
  constructor(e, t) {
    e !== Qr && ae.throwError("use fromString", _.errors.UNSUPPORTED_OPERATION, {
      operation: "new ParamType()"
    }), Pi(this, t);
    let r = this.type.match(Uc);
    r ? Pi(this, {
      arrayLength: parseInt(r[2] || "-1"),
      arrayChildren: ot.fromObject({
        type: r[1],
        components: this.components
      }),
      baseType: "array"
    }) : Pi(this, {
      arrayLength: null,
      arrayChildren: null,
      baseType: this.components != null ? "tuple" : this.type
    }), this._isParamType = !0, Object.freeze(this);
  }
  // Format the parameter fragment
  //   - sighash: "(uint256,address)"
  //   - minimal: "tuple(uint256,address) indexed"
  //   - full:    "tuple(uint256 foo, address bar) indexed baz"
  format(e) {
    if (e || (e = ce.sighash), ce[e] || ae.throwArgumentError("invalid format type", "format", e), e === ce.json) {
      let r = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: this.name || void 0
      };
      return typeof this.indexed == "boolean" && (r.indexed = this.indexed), this.components && (r.components = this.components.map((i) => JSON.parse(i.format(e)))), JSON.stringify(r);
    }
    let t = "";
    return this.baseType === "array" ? (t += this.arrayChildren.format(e), t += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]") : this.baseType === "tuple" ? (e !== ce.sighash && (t += this.type), t += "(" + this.components.map((r) => r.format(e)).join(e === ce.full ? ", " : ",") + ")") : t += this.type, e !== ce.sighash && (this.indexed === !0 && (t += " indexed"), e === ce.full && this.name && (t += " " + this.name)), t;
  }
  static from(e, t) {
    return typeof e == "string" ? ot.fromString(e, t) : ot.fromObject(e);
  }
  static fromObject(e) {
    return ot.isParamType(e) ? e : new ot(Qr, {
      name: e.name || null,
      type: ln(e.type),
      indexed: e.indexed == null ? null : !!e.indexed,
      components: e.components ? e.components.map(ot.fromObject) : null
    });
  }
  static fromString(e, t) {
    function r(i) {
      return ot.fromObject({
        name: i.name,
        type: i.type,
        indexed: i.indexed,
        components: i.components
      });
    }
    return r(Lc(e, !!t));
  }
  static isParamType(e) {
    return !!(e != null && e._isParamType);
  }
}
function Xn(n, e) {
  return Hc(n).map((t) => ot.fromString(t, e));
}
class zt {
  constructor(e, t) {
    e !== Qr && ae.throwError("use a static from method", _.errors.UNSUPPORTED_OPERATION, {
      operation: "new Fragment()"
    }), Pi(this, t), this._isFragment = !0, Object.freeze(this);
  }
  static from(e) {
    return zt.isFragment(e) ? e : typeof e == "string" ? zt.fromString(e) : zt.fromObject(e);
  }
  static fromObject(e) {
    if (zt.isFragment(e))
      return e;
    switch (e.type) {
      case "function":
        return Dt.fromObject(e);
      case "event":
        return qt.fromObject(e);
      case "constructor":
        return Ft.fromObject(e);
      case "error":
        return or.fromObject(e);
      case "fallback":
      case "receive":
        return null;
    }
    return ae.throwArgumentError("invalid fragment object", "value", e);
  }
  static fromString(e) {
    return e = e.replace(/\s/g, " "), e = e.replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " "), e = e.trim(), e.split(" ")[0] === "event" ? qt.fromString(e.substring(5).trim()) : e.split(" ")[0] === "function" ? Dt.fromString(e.substring(8).trim()) : e.split("(")[0].trim() === "constructor" ? Ft.fromString(e.trim()) : e.split(" ")[0] === "error" ? or.fromString(e.substring(5).trim()) : ae.throwArgumentError("unsupported fragment", "value", e);
  }
  static isFragment(e) {
    return !!(e && e._isFragment);
  }
}
class qt extends zt {
  format(e) {
    if (e || (e = ce.sighash), ce[e] || ae.throwArgumentError("invalid format type", "format", e), e === ce.json)
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((r) => JSON.parse(r.format(e)))
      });
    let t = "";
    return e !== ce.sighash && (t += "event "), t += this.name + "(" + this.inputs.map((r) => r.format(e)).join(e === ce.full ? ", " : ",") + ") ", e !== ce.sighash && this.anonymous && (t += "anonymous "), t.trim();
  }
  static from(e) {
    return typeof e == "string" ? qt.fromString(e) : qt.fromObject(e);
  }
  static fromObject(e) {
    if (qt.isEventFragment(e))
      return e;
    e.type !== "event" && ae.throwArgumentError("invalid event object", "value", e);
    const t = {
      name: ei(e.name),
      anonymous: e.anonymous,
      inputs: e.inputs ? e.inputs.map(ot.fromObject) : [],
      type: "event"
    };
    return new qt(Qr, t);
  }
  static fromString(e) {
    let t = e.match(ti);
    t || ae.throwArgumentError("invalid event string", "value", e);
    let r = !1;
    return t[3].split(" ").forEach((i) => {
      switch (i.trim()) {
        case "anonymous":
          r = !0;
          break;
        case "":
          break;
        default:
          ae.warn("unknown modifier: " + i);
      }
    }), qt.fromObject({
      name: t[1].trim(),
      anonymous: r,
      inputs: Xn(t[2], !0),
      type: "event"
    });
  }
  static isEventFragment(e) {
    return e && e._isFragment && e.type === "event";
  }
}
function b0(n, e) {
  e.gas = null;
  let t = n.split("@");
  return t.length !== 1 ? (t.length > 2 && ae.throwArgumentError("invalid human-readable ABI signature", "value", n), t[1].match(/^[0-9]+$/) || ae.throwArgumentError("invalid human-readable ABI signature gas", "value", n), e.gas = H.from(t[1]), t[0]) : n;
}
function g0(n, e) {
  e.constant = !1, e.payable = !1, e.stateMutability = "nonpayable", n.split(" ").forEach((t) => {
    switch (t.trim()) {
      case "constant":
        e.constant = !0;
        break;
      case "payable":
        e.payable = !0, e.stateMutability = "payable";
        break;
      case "nonpayable":
        e.payable = !1, e.stateMutability = "nonpayable";
        break;
      case "pure":
        e.constant = !0, e.stateMutability = "pure";
        break;
      case "view":
        e.constant = !0, e.stateMutability = "view";
        break;
      case "external":
      case "public":
      case "":
        break;
      default:
        console.log("unknown modifier: " + t);
    }
  });
}
function m0(n) {
  let e = {
    constant: !1,
    payable: !0,
    stateMutability: "payable"
  };
  return n.stateMutability != null ? (e.stateMutability = n.stateMutability, e.constant = e.stateMutability === "view" || e.stateMutability === "pure", n.constant != null && !!n.constant !== e.constant && ae.throwArgumentError("cannot have constant function with mutability " + e.stateMutability, "value", n), e.payable = e.stateMutability === "payable", n.payable != null && !!n.payable !== e.payable && ae.throwArgumentError("cannot have payable function with mutability " + e.stateMutability, "value", n)) : n.payable != null ? (e.payable = !!n.payable, n.constant == null && !e.payable && n.type !== "constructor" && ae.throwArgumentError("unable to determine stateMutability", "value", n), e.constant = !!n.constant, e.constant ? e.stateMutability = "view" : e.stateMutability = e.payable ? "payable" : "nonpayable", e.payable && e.constant && ae.throwArgumentError("cannot have constant payable function", "value", n)) : n.constant != null ? (e.constant = !!n.constant, e.payable = !e.constant, e.stateMutability = e.constant ? "view" : "payable") : n.type !== "constructor" && ae.throwArgumentError("unable to determine stateMutability", "value", n), e;
}
class Ft extends zt {
  format(e) {
    if (e || (e = ce.sighash), ce[e] || ae.throwArgumentError("invalid format type", "format", e), e === ce.json)
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas ? this.gas.toNumber() : void 0,
        inputs: this.inputs.map((r) => JSON.parse(r.format(e)))
      });
    e === ce.sighash && ae.throwError("cannot format a constructor for sighash", _.errors.UNSUPPORTED_OPERATION, {
      operation: "format(sighash)"
    });
    let t = "constructor(" + this.inputs.map((r) => r.format(e)).join(e === ce.full ? ", " : ",") + ") ";
    return this.stateMutability && this.stateMutability !== "nonpayable" && (t += this.stateMutability + " "), t.trim();
  }
  static from(e) {
    return typeof e == "string" ? Ft.fromString(e) : Ft.fromObject(e);
  }
  static fromObject(e) {
    if (Ft.isConstructorFragment(e))
      return e;
    e.type !== "constructor" && ae.throwArgumentError("invalid constructor object", "value", e);
    let t = m0(e);
    t.constant && ae.throwArgumentError("constructor cannot be constant", "value", e);
    const r = {
      name: null,
      type: e.type,
      inputs: e.inputs ? e.inputs.map(ot.fromObject) : [],
      payable: t.payable,
      stateMutability: t.stateMutability,
      gas: e.gas ? H.from(e.gas) : null
    };
    return new Ft(Qr, r);
  }
  static fromString(e) {
    let t = { type: "constructor" };
    e = b0(e, t);
    let r = e.match(ti);
    return (!r || r[1].trim() !== "constructor") && ae.throwArgumentError("invalid constructor string", "value", e), t.inputs = Xn(r[2].trim(), !1), g0(r[3].trim(), t), Ft.fromObject(t);
  }
  static isConstructorFragment(e) {
    return e && e._isFragment && e.type === "constructor";
  }
}
class Dt extends Ft {
  format(e) {
    if (e || (e = ce.sighash), ce[e] || ae.throwArgumentError("invalid format type", "format", e), e === ce.json)
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas ? this.gas.toNumber() : void 0,
        inputs: this.inputs.map((r) => JSON.parse(r.format(e))),
        outputs: this.outputs.map((r) => JSON.parse(r.format(e)))
      });
    let t = "";
    return e !== ce.sighash && (t += "function "), t += this.name + "(" + this.inputs.map((r) => r.format(e)).join(e === ce.full ? ", " : ",") + ") ", e !== ce.sighash && (this.stateMutability ? this.stateMutability !== "nonpayable" && (t += this.stateMutability + " ") : this.constant && (t += "view "), this.outputs && this.outputs.length && (t += "returns (" + this.outputs.map((r) => r.format(e)).join(", ") + ") "), this.gas != null && (t += "@" + this.gas.toString() + " ")), t.trim();
  }
  static from(e) {
    return typeof e == "string" ? Dt.fromString(e) : Dt.fromObject(e);
  }
  static fromObject(e) {
    if (Dt.isFunctionFragment(e))
      return e;
    e.type !== "function" && ae.throwArgumentError("invalid function object", "value", e);
    let t = m0(e);
    const r = {
      type: e.type,
      name: ei(e.name),
      constant: t.constant,
      inputs: e.inputs ? e.inputs.map(ot.fromObject) : [],
      outputs: e.outputs ? e.outputs.map(ot.fromObject) : [],
      payable: t.payable,
      stateMutability: t.stateMutability,
      gas: e.gas ? H.from(e.gas) : null
    };
    return new Dt(Qr, r);
  }
  static fromString(e) {
    let t = { type: "function" };
    e = b0(e, t);
    let r = e.split(" returns ");
    r.length > 2 && ae.throwArgumentError("invalid function string", "value", e);
    let i = r[0].match(ti);
    if (i || ae.throwArgumentError("invalid function signature", "value", e), t.name = i[1].trim(), t.name && ei(t.name), t.inputs = Xn(i[2], !1), g0(i[3].trim(), t), r.length > 1) {
      let s = r[1].match(ti);
      (s[1].trim() != "" || s[3].trim() != "") && ae.throwArgumentError("unexpected tokens", "value", e), t.outputs = Xn(s[2], !1);
    } else
      t.outputs = [];
    return Dt.fromObject(t);
  }
  static isFunctionFragment(e) {
    return e && e._isFragment && e.type === "function";
  }
}
function ia(n) {
  const e = n.format();
  return (e === "Error(string)" || e === "Panic(uint256)") && ae.throwArgumentError(`cannot specify user defined ${e} error`, "fragment", n), n;
}
class or extends zt {
  format(e) {
    if (e || (e = ce.sighash), ce[e] || ae.throwArgumentError("invalid format type", "format", e), e === ce.json)
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((r) => JSON.parse(r.format(e)))
      });
    let t = "";
    return e !== ce.sighash && (t += "error "), t += this.name + "(" + this.inputs.map((r) => r.format(e)).join(e === ce.full ? ", " : ",") + ") ", t.trim();
  }
  static from(e) {
    return typeof e == "string" ? or.fromString(e) : or.fromObject(e);
  }
  static fromObject(e) {
    if (or.isErrorFragment(e))
      return e;
    e.type !== "error" && ae.throwArgumentError("invalid error object", "value", e);
    const t = {
      type: e.type,
      name: ei(e.name),
      inputs: e.inputs ? e.inputs.map(ot.fromObject) : []
    };
    return ia(new or(Qr, t));
  }
  static fromString(e) {
    let t = { type: "error" }, r = e.match(ti);
    return r || ae.throwArgumentError("invalid error signature", "value", e), t.name = r[1].trim(), t.name && ei(t.name), t.inputs = Xn(r[2], !1), ia(or.fromObject(t));
  }
  static isErrorFragment(e) {
    return e && e._isFragment && e.type === "error";
  }
}
function ln(n) {
  return n.match(/^uint($|[^1-9])/) ? n = "uint256" + n.substring(4) : n.match(/^int($|[^1-9])/) && (n = "int256" + n.substring(3)), n;
}
const Kc = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
function ei(n) {
  return (!n || !n.match(Kc)) && ae.throwArgumentError(`invalid identifier "${n}"`, "value", n), n;
}
const ti = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
function Hc(n) {
  n = n.trim();
  let e = [], t = "", r = 0;
  for (let i = 0; i < n.length; i++) {
    let s = n[i];
    s === "," && r === 0 ? (e.push(t), t = "") : (t += s, s === "(" ? r++ : s === ")" && (r--, r === -1 && ae.throwArgumentError("unbalanced parenthesis", "value", n)));
  }
  return t && e.push(t), e;
}
const bo = new _(fi);
function v0(n) {
  const e = [], t = function(r, i) {
    if (Array.isArray(i))
      for (let s in i) {
        const o = r.slice();
        o.push(s);
        try {
          t(o, i[s]);
        } catch (a) {
          e.push({ path: o, error: a });
        }
      }
  };
  return t([], n), e;
}
class lr {
  constructor(e, t, r, i) {
    this.name = e, this.type = t, this.localName = r, this.dynamic = i;
  }
  _throwError(e, t) {
    bo.throwArgumentError(e, this.localName, t);
  }
}
class Js {
  constructor(e) {
    B(this, "wordSize", e || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(e);
  }
  get data() {
    return bt(this._data);
  }
  get length() {
    return this._dataLength;
  }
  _writeData(e) {
    return this._data.push(e), this._dataLength += e.length, e.length;
  }
  appendWriter(e) {
    return this._writeData(de(e._data));
  }
  // Arrayish items; padded on the right to wordSize
  writeBytes(e) {
    let t = K(e);
    const r = t.length % this.wordSize;
    return r && (t = de([t, this._padding.slice(r)])), this._writeData(t);
  }
  _getValue(e) {
    let t = K(H.from(e));
    return t.length > this.wordSize && bo.throwError("value out-of-bounds", _.errors.BUFFER_OVERRUN, {
      length: this.wordSize,
      offset: t.length
    }), t.length % this.wordSize && (t = de([this._padding.slice(t.length % this.wordSize), t])), t;
  }
  // BigNumberish items; padded on the left to wordSize
  writeValue(e) {
    return this._writeData(this._getValue(e));
  }
  writeUpdatableValue() {
    const e = this._data.length;
    return this._data.push(this._padding), this._dataLength += this.wordSize, (t) => {
      this._data[e] = this._getValue(t);
    };
  }
}
class Fi {
  constructor(e, t, r, i) {
    B(this, "_data", K(e)), B(this, "wordSize", t || 32), B(this, "_coerceFunc", r), B(this, "allowLoose", i), this._offset = 0;
  }
  get data() {
    return G(this._data);
  }
  get consumed() {
    return this._offset;
  }
  // The default Coerce function
  static coerce(e, t) {
    let r = e.match("^u?int([0-9]+)$");
    return r && parseInt(r[1]) <= 48 && (t = t.toNumber()), t;
  }
  coerce(e, t) {
    return this._coerceFunc ? this._coerceFunc(e, t) : Fi.coerce(e, t);
  }
  _peekBytes(e, t, r) {
    let i = Math.ceil(t / this.wordSize) * this.wordSize;
    return this._offset + i > this._data.length && (this.allowLoose && r && this._offset + t <= this._data.length ? i = t : bo.throwError("data out-of-bounds", _.errors.BUFFER_OVERRUN, {
      length: this._data.length,
      offset: this._offset + i
    })), this._data.slice(this._offset, this._offset + i);
  }
  subReader(e) {
    return new Fi(this._data.slice(this._offset + e), this.wordSize, this._coerceFunc, this.allowLoose);
  }
  readBytes(e, t) {
    let r = this._peekBytes(0, e, !!t);
    return this._offset += r.length, r.slice(0, e);
  }
  readValue() {
    return H.from(this.readBytes(this.wordSize));
  }
}
var y0 = { exports: {} };
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
(function(n) {
  (function() {
    var e = "input is invalid type", t = "finalize already called", r = typeof window == "object", i = r ? window : {};
    i.JS_SHA3_NO_WINDOW && (r = !1);
    var s = !r && typeof self == "object", o = !i.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    o ? i = f0 : s && (i = self);
    var a = !i.JS_SHA3_NO_COMMON_JS && !0 && n.exports, l = !i.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", h = "0123456789abcdef".split(""), x = [31, 7936, 2031616, 520093696], b = [4, 1024, 262144, 67108864], E = [1, 256, 65536, 16777216], S = [6, 1536, 393216, 100663296], I = [0, 8, 16, 24], C = [
      1,
      0,
      32898,
      0,
      32906,
      2147483648,
      2147516416,
      2147483648,
      32907,
      0,
      2147483649,
      0,
      2147516545,
      2147483648,
      32777,
      2147483648,
      138,
      0,
      136,
      0,
      2147516425,
      0,
      2147483658,
      0,
      2147516555,
      0,
      139,
      2147483648,
      32905,
      2147483648,
      32771,
      2147483648,
      32770,
      2147483648,
      128,
      2147483648,
      32778,
      0,
      2147483658,
      2147483648,
      2147516545,
      2147483648,
      32896,
      2147483648,
      2147483649,
      0,
      2147516424,
      2147483648
    ], y = [224, 256, 384, 512], T = [128, 256], D = ["hex", "buffer", "arrayBuffer", "array", "digest"], U = {
      128: 168,
      256: 136
    };
    (i.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(u) {
      return Object.prototype.toString.call(u) === "[object Array]";
    }), l && (i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(u) {
      return typeof u == "object" && u.buffer && u.buffer.constructor === ArrayBuffer;
    });
    for (var z = function(u, P, O) {
      return function(R) {
        return new c(u, P, u).update(R)[O]();
      };
    }, L = function(u, P, O) {
      return function(R, F) {
        return new c(u, P, F).update(R)[O]();
      };
    }, W = function(u, P, O) {
      return function(R, F, J, q) {
        return f["cshake" + u].update(R, F, J, q)[O]();
      };
    }, Z = function(u, P, O) {
      return function(R, F, J, q) {
        return f["kmac" + u].update(R, F, J, q)[O]();
      };
    }, Y = function(u, P, O, R) {
      for (var F = 0; F < D.length; ++F) {
        var J = D[F];
        u[J] = P(O, R, J);
      }
      return u;
    }, ne = function(u, P) {
      var O = z(u, P, "hex");
      return O.create = function() {
        return new c(u, P, u);
      }, O.update = function(R) {
        return O.create().update(R);
      }, Y(O, z, u, P);
    }, fe = function(u, P) {
      var O = L(u, P, "hex");
      return O.create = function(R) {
        return new c(u, P, R);
      }, O.update = function(R, F) {
        return O.create(F).update(R);
      }, Y(O, L, u, P);
    }, Q = function(u, P) {
      var O = U[u], R = W(u, P, "hex");
      return R.create = function(F, J, q) {
        return !J && !q ? f["shake" + u].create(F) : new c(u, P, F).bytepad([J, q], O);
      }, R.update = function(F, J, q, j) {
        return R.create(J, q, j).update(F);
      }, Y(R, W, u, P);
    }, pe = function(u, P) {
      var O = U[u], R = Z(u, P, "hex");
      return R.create = function(F, J, q) {
        return new m(u, P, J).bytepad(["KMAC", q], O).bytepad([F], O);
      }, R.update = function(F, J, q, j) {
        return R.create(F, q, j).update(J);
      }, Y(R, Z, u, P);
    }, w = [
      { name: "keccak", padding: E, bits: y, createMethod: ne },
      { name: "sha3", padding: S, bits: y, createMethod: ne },
      { name: "shake", padding: x, bits: T, createMethod: fe },
      { name: "cshake", padding: b, bits: T, createMethod: Q },
      { name: "kmac", padding: b, bits: T, createMethod: pe }
    ], f = {}, d = [], g = 0; g < w.length; ++g)
      for (var v = w[g], A = v.bits, k = 0; k < A.length; ++k) {
        var N = v.name + "_" + A[k];
        if (d.push(N), f[N] = v.createMethod(A[k], v.padding), v.name !== "sha3") {
          var p = v.name + A[k];
          d.push(p), f[p] = f[N];
        }
      }
    function c(u, P, O) {
      this.blocks = [], this.s = [], this.padding = P, this.outputBits = O, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (u << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = O >> 5, this.extraBytes = (O & 31) >> 3;
      for (var R = 0; R < 50; ++R)
        this.s[R] = 0;
    }
    c.prototype.update = function(u) {
      if (this.finalized)
        throw new Error(t);
      var P, O = typeof u;
      if (O !== "string") {
        if (O === "object") {
          if (u === null)
            throw new Error(e);
          if (l && u.constructor === ArrayBuffer)
            u = new Uint8Array(u);
          else if (!Array.isArray(u) && (!l || !ArrayBuffer.isView(u)))
            throw new Error(e);
        } else
          throw new Error(e);
        P = !0;
      }
      for (var R = this.blocks, F = this.byteCount, J = u.length, q = this.blockCount, j = 0, Ye = this.s, V, ee; j < J; ) {
        if (this.reset)
          for (this.reset = !1, R[0] = this.block, V = 1; V < q + 1; ++V)
            R[V] = 0;
        if (P)
          for (V = this.start; j < J && V < F; ++j)
            R[V >> 2] |= u[j] << I[V++ & 3];
        else
          for (V = this.start; j < J && V < F; ++j)
            ee = u.charCodeAt(j), ee < 128 ? R[V >> 2] |= ee << I[V++ & 3] : ee < 2048 ? (R[V >> 2] |= (192 | ee >> 6) << I[V++ & 3], R[V >> 2] |= (128 | ee & 63) << I[V++ & 3]) : ee < 55296 || ee >= 57344 ? (R[V >> 2] |= (224 | ee >> 12) << I[V++ & 3], R[V >> 2] |= (128 | ee >> 6 & 63) << I[V++ & 3], R[V >> 2] |= (128 | ee & 63) << I[V++ & 3]) : (ee = 65536 + ((ee & 1023) << 10 | u.charCodeAt(++j) & 1023), R[V >> 2] |= (240 | ee >> 18) << I[V++ & 3], R[V >> 2] |= (128 | ee >> 12 & 63) << I[V++ & 3], R[V >> 2] |= (128 | ee >> 6 & 63) << I[V++ & 3], R[V >> 2] |= (128 | ee & 63) << I[V++ & 3]);
        if (this.lastByteIndex = V, V >= F) {
          for (this.start = V - F, this.block = R[q], V = 0; V < q; ++V)
            Ye[V] ^= R[V];
          M(Ye), this.reset = !0;
        } else
          this.start = V;
      }
      return this;
    }, c.prototype.encode = function(u, P) {
      var O = u & 255, R = 1, F = [O];
      for (u = u >> 8, O = u & 255; O > 0; )
        F.unshift(O), u = u >> 8, O = u & 255, ++R;
      return P ? F.push(R) : F.unshift(R), this.update(F), F.length;
    }, c.prototype.encodeString = function(u) {
      var P, O = typeof u;
      if (O !== "string") {
        if (O === "object") {
          if (u === null)
            throw new Error(e);
          if (l && u.constructor === ArrayBuffer)
            u = new Uint8Array(u);
          else if (!Array.isArray(u) && (!l || !ArrayBuffer.isView(u)))
            throw new Error(e);
        } else
          throw new Error(e);
        P = !0;
      }
      var R = 0, F = u.length;
      if (P)
        R = F;
      else
        for (var J = 0; J < u.length; ++J) {
          var q = u.charCodeAt(J);
          q < 128 ? R += 1 : q < 2048 ? R += 2 : q < 55296 || q >= 57344 ? R += 3 : (q = 65536 + ((q & 1023) << 10 | u.charCodeAt(++J) & 1023), R += 4);
        }
      return R += this.encode(R * 8), this.update(u), R;
    }, c.prototype.bytepad = function(u, P) {
      for (var O = this.encode(P), R = 0; R < u.length; ++R)
        O += this.encodeString(u[R]);
      var F = P - O % P, J = [];
      return J.length = F, this.update(J), this;
    }, c.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var u = this.blocks, P = this.lastByteIndex, O = this.blockCount, R = this.s;
        if (u[P >> 2] |= this.padding[P & 3], this.lastByteIndex === this.byteCount)
          for (u[0] = u[O], P = 1; P < O + 1; ++P)
            u[P] = 0;
        for (u[O - 1] |= 2147483648, P = 0; P < O; ++P)
          R[P] ^= u[P];
        M(R);
      }
    }, c.prototype.toString = c.prototype.hex = function() {
      this.finalize();
      for (var u = this.blockCount, P = this.s, O = this.outputBlocks, R = this.extraBytes, F = 0, J = 0, q = "", j; J < O; ) {
        for (F = 0; F < u && J < O; ++F, ++J)
          j = P[F], q += h[j >> 4 & 15] + h[j & 15] + h[j >> 12 & 15] + h[j >> 8 & 15] + h[j >> 20 & 15] + h[j >> 16 & 15] + h[j >> 28 & 15] + h[j >> 24 & 15];
        J % u === 0 && (M(P), F = 0);
      }
      return R && (j = P[F], q += h[j >> 4 & 15] + h[j & 15], R > 1 && (q += h[j >> 12 & 15] + h[j >> 8 & 15]), R > 2 && (q += h[j >> 20 & 15] + h[j >> 16 & 15])), q;
    }, c.prototype.arrayBuffer = function() {
      this.finalize();
      var u = this.blockCount, P = this.s, O = this.outputBlocks, R = this.extraBytes, F = 0, J = 0, q = this.outputBits >> 3, j;
      R ? j = new ArrayBuffer(O + 1 << 2) : j = new ArrayBuffer(q);
      for (var Ye = new Uint32Array(j); J < O; ) {
        for (F = 0; F < u && J < O; ++F, ++J)
          Ye[J] = P[F];
        J % u === 0 && M(P);
      }
      return R && (Ye[F] = P[F], j = j.slice(0, q)), j;
    }, c.prototype.buffer = c.prototype.arrayBuffer, c.prototype.digest = c.prototype.array = function() {
      this.finalize();
      for (var u = this.blockCount, P = this.s, O = this.outputBlocks, R = this.extraBytes, F = 0, J = 0, q = [], j, Ye; J < O; ) {
        for (F = 0; F < u && J < O; ++F, ++J)
          j = J << 2, Ye = P[F], q[j] = Ye & 255, q[j + 1] = Ye >> 8 & 255, q[j + 2] = Ye >> 16 & 255, q[j + 3] = Ye >> 24 & 255;
        J % u === 0 && M(P);
      }
      return R && (j = J << 2, Ye = P[F], q[j] = Ye & 255, R > 1 && (q[j + 1] = Ye >> 8 & 255), R > 2 && (q[j + 2] = Ye >> 16 & 255)), q;
    };
    function m(u, P, O) {
      c.call(this, u, P, O);
    }
    m.prototype = new c(), m.prototype.finalize = function() {
      return this.encode(this.outputBits, !0), c.prototype.finalize.call(this);
    };
    var M = function(u) {
      var P, O, R, F, J, q, j, Ye, V, ee, Mr, me, ve, Nr, ye, we, Tr, Ae, Ee, Rr, _e, Se, Br, ke, Pe, Or, Ce, Ie, Fr, Me, Ne, Dr, Te, Re, Lr, Be, Oe, Ur, Fe, De, Kr, Le, Ue, Hr, Ke, He, Gr, Ge, qe, qr, ze, je, zr, We, Je, jr, Ve, $e, hr, dr, xr, pr, br;
      for (R = 0; R < 48; R += 2)
        F = u[0] ^ u[10] ^ u[20] ^ u[30] ^ u[40], J = u[1] ^ u[11] ^ u[21] ^ u[31] ^ u[41], q = u[2] ^ u[12] ^ u[22] ^ u[32] ^ u[42], j = u[3] ^ u[13] ^ u[23] ^ u[33] ^ u[43], Ye = u[4] ^ u[14] ^ u[24] ^ u[34] ^ u[44], V = u[5] ^ u[15] ^ u[25] ^ u[35] ^ u[45], ee = u[6] ^ u[16] ^ u[26] ^ u[36] ^ u[46], Mr = u[7] ^ u[17] ^ u[27] ^ u[37] ^ u[47], me = u[8] ^ u[18] ^ u[28] ^ u[38] ^ u[48], ve = u[9] ^ u[19] ^ u[29] ^ u[39] ^ u[49], P = me ^ (q << 1 | j >>> 31), O = ve ^ (j << 1 | q >>> 31), u[0] ^= P, u[1] ^= O, u[10] ^= P, u[11] ^= O, u[20] ^= P, u[21] ^= O, u[30] ^= P, u[31] ^= O, u[40] ^= P, u[41] ^= O, P = F ^ (Ye << 1 | V >>> 31), O = J ^ (V << 1 | Ye >>> 31), u[2] ^= P, u[3] ^= O, u[12] ^= P, u[13] ^= O, u[22] ^= P, u[23] ^= O, u[32] ^= P, u[33] ^= O, u[42] ^= P, u[43] ^= O, P = q ^ (ee << 1 | Mr >>> 31), O = j ^ (Mr << 1 | ee >>> 31), u[4] ^= P, u[5] ^= O, u[14] ^= P, u[15] ^= O, u[24] ^= P, u[25] ^= O, u[34] ^= P, u[35] ^= O, u[44] ^= P, u[45] ^= O, P = Ye ^ (me << 1 | ve >>> 31), O = V ^ (ve << 1 | me >>> 31), u[6] ^= P, u[7] ^= O, u[16] ^= P, u[17] ^= O, u[26] ^= P, u[27] ^= O, u[36] ^= P, u[37] ^= O, u[46] ^= P, u[47] ^= O, P = ee ^ (F << 1 | J >>> 31), O = Mr ^ (J << 1 | F >>> 31), u[8] ^= P, u[9] ^= O, u[18] ^= P, u[19] ^= O, u[28] ^= P, u[29] ^= O, u[38] ^= P, u[39] ^= O, u[48] ^= P, u[49] ^= O, Nr = u[0], ye = u[1], He = u[11] << 4 | u[10] >>> 28, Gr = u[10] << 4 | u[11] >>> 28, Ie = u[20] << 3 | u[21] >>> 29, Fr = u[21] << 3 | u[20] >>> 29, dr = u[31] << 9 | u[30] >>> 23, xr = u[30] << 9 | u[31] >>> 23, Le = u[40] << 18 | u[41] >>> 14, Ue = u[41] << 18 | u[40] >>> 14, Re = u[2] << 1 | u[3] >>> 31, Lr = u[3] << 1 | u[2] >>> 31, we = u[13] << 12 | u[12] >>> 20, Tr = u[12] << 12 | u[13] >>> 20, Ge = u[22] << 10 | u[23] >>> 22, qe = u[23] << 10 | u[22] >>> 22, Me = u[33] << 13 | u[32] >>> 19, Ne = u[32] << 13 | u[33] >>> 19, pr = u[42] << 2 | u[43] >>> 30, br = u[43] << 2 | u[42] >>> 30, We = u[5] << 30 | u[4] >>> 2, Je = u[4] << 30 | u[5] >>> 2, Be = u[14] << 6 | u[15] >>> 26, Oe = u[15] << 6 | u[14] >>> 26, Ae = u[25] << 11 | u[24] >>> 21, Ee = u[24] << 11 | u[25] >>> 21, qr = u[34] << 15 | u[35] >>> 17, ze = u[35] << 15 | u[34] >>> 17, Dr = u[45] << 29 | u[44] >>> 3, Te = u[44] << 29 | u[45] >>> 3, ke = u[6] << 28 | u[7] >>> 4, Pe = u[7] << 28 | u[6] >>> 4, jr = u[17] << 23 | u[16] >>> 9, Ve = u[16] << 23 | u[17] >>> 9, Ur = u[26] << 25 | u[27] >>> 7, Fe = u[27] << 25 | u[26] >>> 7, Rr = u[36] << 21 | u[37] >>> 11, _e = u[37] << 21 | u[36] >>> 11, je = u[47] << 24 | u[46] >>> 8, zr = u[46] << 24 | u[47] >>> 8, Hr = u[8] << 27 | u[9] >>> 5, Ke = u[9] << 27 | u[8] >>> 5, Or = u[18] << 20 | u[19] >>> 12, Ce = u[19] << 20 | u[18] >>> 12, $e = u[29] << 7 | u[28] >>> 25, hr = u[28] << 7 | u[29] >>> 25, De = u[38] << 8 | u[39] >>> 24, Kr = u[39] << 8 | u[38] >>> 24, Se = u[48] << 14 | u[49] >>> 18, Br = u[49] << 14 | u[48] >>> 18, u[0] = Nr ^ ~we & Ae, u[1] = ye ^ ~Tr & Ee, u[10] = ke ^ ~Or & Ie, u[11] = Pe ^ ~Ce & Fr, u[20] = Re ^ ~Be & Ur, u[21] = Lr ^ ~Oe & Fe, u[30] = Hr ^ ~He & Ge, u[31] = Ke ^ ~Gr & qe, u[40] = We ^ ~jr & $e, u[41] = Je ^ ~Ve & hr, u[2] = we ^ ~Ae & Rr, u[3] = Tr ^ ~Ee & _e, u[12] = Or ^ ~Ie & Me, u[13] = Ce ^ ~Fr & Ne, u[22] = Be ^ ~Ur & De, u[23] = Oe ^ ~Fe & Kr, u[32] = He ^ ~Ge & qr, u[33] = Gr ^ ~qe & ze, u[42] = jr ^ ~$e & dr, u[43] = Ve ^ ~hr & xr, u[4] = Ae ^ ~Rr & Se, u[5] = Ee ^ ~_e & Br, u[14] = Ie ^ ~Me & Dr, u[15] = Fr ^ ~Ne & Te, u[24] = Ur ^ ~De & Le, u[25] = Fe ^ ~Kr & Ue, u[34] = Ge ^ ~qr & je, u[35] = qe ^ ~ze & zr, u[44] = $e ^ ~dr & pr, u[45] = hr ^ ~xr & br, u[6] = Rr ^ ~Se & Nr, u[7] = _e ^ ~Br & ye, u[16] = Me ^ ~Dr & ke, u[17] = Ne ^ ~Te & Pe, u[26] = De ^ ~Le & Re, u[27] = Kr ^ ~Ue & Lr, u[36] = qr ^ ~je & Hr, u[37] = ze ^ ~zr & Ke, u[46] = dr ^ ~pr & We, u[47] = xr ^ ~br & Je, u[8] = Se ^ ~Nr & we, u[9] = Br ^ ~ye & Tr, u[18] = Dr ^ ~ke & Or, u[19] = Te ^ ~Pe & Ce, u[28] = Le ^ ~Re & Be, u[29] = Ue ^ ~Lr & Oe, u[38] = je ^ ~Hr & He, u[39] = zr ^ ~Ke & Gr, u[48] = pr ^ ~We & jr, u[49] = br ^ ~Je & Ve, u[0] ^= C[R], u[1] ^= C[R + 1];
    };
    if (a)
      n.exports = f;
    else
      for (g = 0; g < d.length; ++g)
        i[d[g]] = f[d[g]];
  })();
})(y0);
var Gc = y0.exports;
const qc = /* @__PURE__ */ en(Gc);
function he(n) {
  return "0x" + qc.keccak_256(K(n));
}
const zc = "rlp/5.7.0", Ht = new _(zc);
function sa(n) {
  const e = [];
  for (; n; )
    e.unshift(n & 255), n >>= 8;
  return e;
}
function oa(n, e, t) {
  let r = 0;
  for (let i = 0; i < t; i++)
    r = r * 256 + n[e + i];
  return r;
}
function w0(n) {
  if (Array.isArray(n)) {
    let r = [];
    if (n.forEach(function(s) {
      r = r.concat(w0(s));
    }), r.length <= 55)
      return r.unshift(192 + r.length), r;
    const i = sa(r.length);
    return i.unshift(247 + i.length), i.concat(r);
  }
  oi(n) || Ht.throwArgumentError("RLP object must be BytesLike", "object", n);
  const e = Array.prototype.slice.call(K(n));
  if (e.length === 1 && e[0] <= 127)
    return e;
  if (e.length <= 55)
    return e.unshift(128 + e.length), e;
  const t = sa(e.length);
  return t.unshift(183 + t.length), t.concat(e);
}
function Zr(n) {
  return G(w0(n));
}
function aa(n, e, t, r) {
  const i = [];
  for (; t < e + 1 + r; ) {
    const s = A0(n, t);
    i.push(s.result), t += s.consumed, t > e + 1 + r && Ht.throwError("child data too short", _.errors.BUFFER_OVERRUN, {});
  }
  return { consumed: 1 + r, result: i };
}
function A0(n, e) {
  if (n.length === 0 && Ht.throwError("data too short", _.errors.BUFFER_OVERRUN, {}), n[e] >= 248) {
    const t = n[e] - 247;
    e + 1 + t > n.length && Ht.throwError("data short segment too short", _.errors.BUFFER_OVERRUN, {});
    const r = oa(n, e + 1, t);
    return e + 1 + t + r > n.length && Ht.throwError("data long segment too short", _.errors.BUFFER_OVERRUN, {}), aa(n, e, e + 1 + t, t + r);
  } else if (n[e] >= 192) {
    const t = n[e] - 192;
    return e + 1 + t > n.length && Ht.throwError("data array too short", _.errors.BUFFER_OVERRUN, {}), aa(n, e, e + 1, t);
  } else if (n[e] >= 184) {
    const t = n[e] - 183;
    e + 1 + t > n.length && Ht.throwError("data array too short", _.errors.BUFFER_OVERRUN, {});
    const r = oa(n, e + 1, t);
    e + 1 + t + r > n.length && Ht.throwError("data array too short", _.errors.BUFFER_OVERRUN, {});
    const i = G(n.slice(e + 1 + t, e + 1 + t + r));
    return { consumed: 1 + t + r, result: i };
  } else if (n[e] >= 128) {
    const t = n[e] - 128;
    e + 1 + t > n.length && Ht.throwError("data too short", _.errors.BUFFER_OVERRUN, {});
    const r = G(n.slice(e + 1, e + 1 + t));
    return { consumed: 1 + t, result: r };
  }
  return { consumed: 1, result: G(n[e]) };
}
function Ji(n) {
  const e = K(n), t = A0(e, 0);
  return t.consumed !== e.length && Ht.throwArgumentError("invalid rlp data", "data", n), t.result;
}
const jc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Ji,
  encode: Zr
}, Symbol.toStringTag, { value: "Module" })), Wc = "address/5.7.0", yr = new _(Wc);
function fa(n) {
  re(n, 20) || yr.throwArgumentError("invalid address", "address", n), n = n.toLowerCase();
  const e = n.substring(2).split(""), t = new Uint8Array(40);
  for (let i = 0; i < 40; i++)
    t[i] = e[i].charCodeAt(0);
  const r = K(he(t));
  for (let i = 0; i < 40; i += 2)
    r[i >> 1] >> 4 >= 8 && (e[i] = e[i].toUpperCase()), (r[i >> 1] & 15) >= 8 && (e[i + 1] = e[i + 1].toUpperCase());
  return "0x" + e.join("");
}
const Jc = 9007199254740991;
function Vc(n) {
  return Math.log10 ? Math.log10(n) : Math.log(n) / Math.LN10;
}
const go = {};
for (let n = 0; n < 10; n++)
  go[String(n)] = String(n);
for (let n = 0; n < 26; n++)
  go[String.fromCharCode(65 + n)] = String(10 + n);
const ca = Math.floor(Vc(Jc));
function E0(n) {
  n = n.toUpperCase(), n = n.substring(4) + n.substring(0, 2) + "00";
  let e = n.split("").map((r) => go[r]).join("");
  for (; e.length >= ca; ) {
    let r = e.substring(0, ca);
    e = parseInt(r, 10) % 97 + e.substring(r.length);
  }
  let t = String(98 - parseInt(e, 10) % 97);
  for (; t.length < 2; )
    t = "0" + t;
  return t;
}
function le(n) {
  let e = null;
  if (typeof n != "string" && yr.throwArgumentError("invalid address", "address", n), n.match(/^(0x)?[0-9a-fA-F]{40}$/))
    n.substring(0, 2) !== "0x" && (n = "0x" + n), e = fa(n), n.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== n && yr.throwArgumentError("bad address checksum", "address", n);
  else if (n.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (n.substring(2, 4) !== E0(n) && yr.throwArgumentError("bad icap checksum", "address", n), e = Mc(n.substring(4)); e.length < 40; )
      e = "0" + e;
    e = fa("0x" + e);
  } else
    yr.throwArgumentError("invalid address", "address", n);
  return e;
}
function $c(n) {
  try {
    return le(n), !0;
  } catch {
  }
  return !1;
}
function Yc(n) {
  let e = Nc(le(n).substring(2)).toUpperCase();
  for (; e.length < 30; )
    e = "0" + e;
  return "XE" + E0("XE00" + e) + e;
}
function Vi(n) {
  let e = null;
  try {
    e = le(n.from);
  } catch {
    yr.throwArgumentError("missing from address", "transaction", n);
  }
  const t = Wt(K(H.from(n.nonce).toHexString()));
  return le(rt(he(Zr([e, t])), 12));
}
function Qc(n, e, t) {
  return Yt(e) !== 32 && yr.throwArgumentError("salt must be 32 bytes", "salt", e), Yt(t) !== 32 && yr.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", t), le(rt(he(de(["0xff", le(n), e, t])), 12));
}
class Zc extends lr {
  constructor(e) {
    super("address", "address", e, !1);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(e, t) {
    try {
      t = le(t);
    } catch (r) {
      this._throwError(r.message, t);
    }
    return e.writeValue(t);
  }
  decode(e) {
    return le(xe(e.readValue().toHexString(), 20));
  }
}
class Xc extends lr {
  constructor(e) {
    super(e.name, e.type, void 0, e.dynamic), this.coder = e;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(e, t) {
    return this.coder.encode(e, t);
  }
  decode(e) {
    return this.coder.decode(e);
  }
}
const dn = new _(fi);
function _0(n, e, t) {
  let r = null;
  if (Array.isArray(t))
    r = t;
  else if (t && typeof t == "object") {
    let l = {};
    r = e.map((h) => {
      const x = h.localName;
      return x || dn.throwError("cannot encode object for signature with missing names", _.errors.INVALID_ARGUMENT, {
        argument: "values",
        coder: h,
        value: t
      }), l[x] && dn.throwError("cannot encode object for signature with duplicate names", _.errors.INVALID_ARGUMENT, {
        argument: "values",
        coder: h,
        value: t
      }), l[x] = !0, t[x];
    });
  } else
    dn.throwArgumentError("invalid tuple value", "tuple", t);
  e.length !== r.length && dn.throwArgumentError("types/value length mismatch", "tuple", t);
  let i = new Js(n.wordSize), s = new Js(n.wordSize), o = [];
  e.forEach((l, h) => {
    let x = r[h];
    if (l.dynamic) {
      let b = s.length;
      l.encode(s, x);
      let E = i.writeUpdatableValue();
      o.push((S) => {
        E(S + b);
      });
    } else
      l.encode(i, x);
  }), o.forEach((l) => {
    l(i.length);
  });
  let a = n.appendWriter(i);
  return a += n.appendWriter(s), a;
}
function S0(n, e) {
  let t = [], r = n.subReader(0);
  e.forEach((s) => {
    let o = null;
    if (s.dynamic) {
      let a = n.readValue(), l = r.subReader(a.toNumber());
      try {
        o = s.decode(l);
      } catch (h) {
        if (h.code === _.errors.BUFFER_OVERRUN)
          throw h;
        o = h, o.baseType = s.name, o.name = s.localName, o.type = s.type;
      }
    } else
      try {
        o = s.decode(n);
      } catch (a) {
        if (a.code === _.errors.BUFFER_OVERRUN)
          throw a;
        o = a, o.baseType = s.name, o.name = s.localName, o.type = s.type;
      }
    o != null && t.push(o);
  });
  const i = e.reduce((s, o) => {
    const a = o.localName;
    return a && (s[a] || (s[a] = 0), s[a]++), s;
  }, {});
  e.forEach((s, o) => {
    let a = s.localName;
    if (!a || i[a] !== 1 || (a === "length" && (a = "_length"), t[a] != null))
      return;
    const l = t[o];
    l instanceof Error ? Object.defineProperty(t, a, {
      enumerable: !0,
      get: () => {
        throw l;
      }
    }) : t[a] = l;
  });
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    o instanceof Error && Object.defineProperty(t, s, {
      enumerable: !0,
      get: () => {
        throw o;
      }
    });
  }
  return Object.freeze(t);
}
class el extends lr {
  constructor(e, t, r) {
    const i = e.type + "[" + (t >= 0 ? t : "") + "]", s = t === -1 || e.dynamic;
    super("array", i, r, s), this.coder = e, this.length = t;
  }
  defaultValue() {
    const e = this.coder.defaultValue(), t = [];
    for (let r = 0; r < this.length; r++)
      t.push(e);
    return t;
  }
  encode(e, t) {
    Array.isArray(t) || this._throwError("expected array value", t);
    let r = this.length;
    r === -1 && (r = t.length, e.writeValue(t.length)), dn.checkArgumentCount(t.length, r, "coder array" + (this.localName ? " " + this.localName : ""));
    let i = [];
    for (let s = 0; s < t.length; s++)
      i.push(this.coder);
    return _0(e, i, t);
  }
  decode(e) {
    let t = this.length;
    t === -1 && (t = e.readValue().toNumber(), t * 32 > e._data.length && dn.throwError("insufficient data length", _.errors.BUFFER_OVERRUN, {
      length: e._data.length,
      count: t
    }));
    let r = [];
    for (let i = 0; i < t; i++)
      r.push(new Xc(this.coder));
    return e.coerce(this.name, S0(e, r));
  }
}
class tl extends lr {
  constructor(e) {
    super("bool", "bool", e, !1);
  }
  defaultValue() {
    return !1;
  }
  encode(e, t) {
    return e.writeValue(t ? 1 : 0);
  }
  decode(e) {
    return e.coerce(this.type, !e.readValue().isZero());
  }
}
class k0 extends lr {
  constructor(e, t) {
    super(e, e, t, !0);
  }
  defaultValue() {
    return "0x";
  }
  encode(e, t) {
    t = K(t);
    let r = e.writeValue(t.length);
    return r += e.writeBytes(t), r;
  }
  decode(e) {
    return e.readBytes(e.readValue().toNumber(), !0);
  }
}
class rl extends k0 {
  constructor(e) {
    super("bytes", e);
  }
  decode(e) {
    return e.coerce(this.name, G(super.decode(e)));
  }
}
class nl extends lr {
  constructor(e, t) {
    let r = "bytes" + String(e);
    super(r, r, t, !1), this.size = e;
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(e, t) {
    let r = K(t);
    return r.length !== this.size && this._throwError("incorrect data length", t), e.writeBytes(r);
  }
  decode(e) {
    return e.coerce(this.name, G(e.readBytes(this.size)));
  }
}
class il extends lr {
  constructor(e) {
    super("null", "", e, !1);
  }
  defaultValue() {
    return null;
  }
  encode(e, t) {
    return t != null && this._throwError("not null", t), e.writeBytes([]);
  }
  decode(e) {
    return e.readBytes(0), e.coerce(this.name, null);
  }
}
const P0 = "0x0000000000000000000000000000000000000000", C0 = /* @__PURE__ */ H.from(-1), mo = /* @__PURE__ */ H.from(0), I0 = /* @__PURE__ */ H.from(1), sl = /* @__PURE__ */ H.from(2), ol = /* @__PURE__ */ H.from("1000000000000000000"), M0 = /* @__PURE__ */ H.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), al = /* @__PURE__ */ H.from("-0x8000000000000000000000000000000000000000000000000000000000000000"), fl = /* @__PURE__ */ H.from("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), vo = "0x0000000000000000000000000000000000000000000000000000000000000000", cl = "Ξ", ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddressZero: P0,
  EtherSymbol: cl,
  HashZero: vo,
  MaxInt256: fl,
  MaxUint256: M0,
  MinInt256: al,
  NegativeOne: C0,
  One: I0,
  Two: sl,
  WeiPerEther: ol,
  Zero: mo
}, Symbol.toStringTag, { value: "Module" }));
class ul extends lr {
  constructor(e, t, r) {
    const i = (t ? "int" : "uint") + e * 8;
    super(i, i, r, !1), this.size = e, this.signed = t;
  }
  defaultValue() {
    return 0;
  }
  encode(e, t) {
    let r = H.from(t), i = M0.mask(e.wordSize * 8);
    if (this.signed) {
      let s = i.mask(this.size * 8 - 1);
      (r.gt(s) || r.lt(s.add(I0).mul(C0))) && this._throwError("value out-of-bounds", t);
    } else
      (r.lt(mo) || r.gt(i.mask(this.size * 8))) && this._throwError("value out-of-bounds", t);
    return r = r.toTwos(this.size * 8).mask(this.size * 8), this.signed && (r = r.fromTwos(this.size * 8).toTwos(8 * e.wordSize)), e.writeValue(r);
  }
  decode(e) {
    let t = e.readValue().mask(this.size * 8);
    return this.signed && (t = t.fromTwos(this.size * 8)), e.coerce(this.name, t);
  }
}
const hl = "strings/5.7.0", N0 = new _(hl);
var Qt;
(function(n) {
  n.current = "", n.NFC = "NFC", n.NFD = "NFD", n.NFKC = "NFKC", n.NFKD = "NFKD";
})(Qt || (Qt = {}));
var wt;
(function(n) {
  n.UNEXPECTED_CONTINUE = "unexpected continuation byte", n.BAD_PREFIX = "bad codepoint prefix", n.OVERRUN = "string overrun", n.MISSING_CONTINUE = "missing continuation byte", n.OUT_OF_RANGE = "out of UTF-8 range", n.UTF16_SURROGATE = "UTF-16 surrogate", n.OVERLONG = "overlong representation";
})(wt || (wt = {}));
function dl(n, e, t, r, i) {
  return N0.throwArgumentError(`invalid codepoint at offset ${e}; ${n}`, "bytes", t);
}
function T0(n, e, t, r, i) {
  if (n === wt.BAD_PREFIX || n === wt.UNEXPECTED_CONTINUE) {
    let s = 0;
    for (let o = e + 1; o < t.length && t[o] >> 6 === 2; o++)
      s++;
    return s;
  }
  return n === wt.OVERRUN ? t.length - e - 1 : 0;
}
function xl(n, e, t, r, i) {
  return n === wt.OVERLONG ? (r.push(i), 0) : (r.push(65533), T0(n, e, t));
}
const R0 = Object.freeze({
  error: dl,
  ignore: T0,
  replace: xl
});
function yo(n, e) {
  e == null && (e = R0.error), n = K(n);
  const t = [];
  let r = 0;
  for (; r < n.length; ) {
    const i = n[r++];
    if (!(i >> 7)) {
      t.push(i);
      continue;
    }
    let s = null, o = null;
    if ((i & 224) === 192)
      s = 1, o = 127;
    else if ((i & 240) === 224)
      s = 2, o = 2047;
    else if ((i & 248) === 240)
      s = 3, o = 65535;
    else {
      (i & 192) === 128 ? r += e(wt.UNEXPECTED_CONTINUE, r - 1, n, t) : r += e(wt.BAD_PREFIX, r - 1, n, t);
      continue;
    }
    if (r - 1 + s >= n.length) {
      r += e(wt.OVERRUN, r - 1, n, t);
      continue;
    }
    let a = i & (1 << 8 - s - 1) - 1;
    for (let l = 0; l < s; l++) {
      let h = n[r];
      if ((h & 192) != 128) {
        r += e(wt.MISSING_CONTINUE, r, n, t), a = null;
        break;
      }
      a = a << 6 | h & 63, r++;
    }
    if (a !== null) {
      if (a > 1114111) {
        r += e(wt.OUT_OF_RANGE, r - 1 - s, n, t, a);
        continue;
      }
      if (a >= 55296 && a <= 57343) {
        r += e(wt.UTF16_SURROGATE, r - 1 - s, n, t, a);
        continue;
      }
      if (a <= o) {
        r += e(wt.OVERLONG, r - 1 - s, n, t, a);
        continue;
      }
      t.push(a);
    }
  }
  return t;
}
function nt(n, e = Qt.current) {
  e != Qt.current && (N0.checkNormalize(), n = n.normalize(e));
  let t = [];
  for (let r = 0; r < n.length; r++) {
    const i = n.charCodeAt(r);
    if (i < 128)
      t.push(i);
    else if (i < 2048)
      t.push(i >> 6 | 192), t.push(i & 63 | 128);
    else if ((i & 64512) == 55296) {
      r++;
      const s = n.charCodeAt(r);
      if (r >= n.length || (s & 64512) !== 56320)
        throw new Error("invalid utf-8 string");
      const o = 65536 + ((i & 1023) << 10) + (s & 1023);
      t.push(o >> 18 | 240), t.push(o >> 12 & 63 | 128), t.push(o >> 6 & 63 | 128), t.push(o & 63 | 128);
    } else
      t.push(i >> 12 | 224), t.push(i >> 6 & 63 | 128), t.push(i & 63 | 128);
  }
  return K(t);
}
function Ss(n) {
  const e = "0000" + n.toString(16);
  return "\\u" + e.substring(e.length - 4);
}
function pl(n, e) {
  return '"' + yo(n, e).map((t) => {
    if (t < 256) {
      switch (t) {
        case 8:
          return "\\b";
        case 9:
          return "\\t";
        case 10:
          return "\\n";
        case 13:
          return "\\r";
        case 34:
          return '\\"';
        case 92:
          return "\\\\";
      }
      if (t >= 32 && t < 127)
        return String.fromCharCode(t);
    }
    return t <= 65535 ? Ss(t) : (t -= 65536, Ss((t >> 10 & 1023) + 55296) + Ss((t & 1023) + 56320));
  }).join("") + '"';
}
function Vs(n) {
  return n.map((e) => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10 & 1023) + 55296, (e & 1023) + 56320))).join("");
}
function nn(n, e) {
  return Vs(yo(n, e));
}
function Di(n, e = Qt.current) {
  return yo(nt(n, e));
}
function bl(n) {
  const e = nt(n);
  if (e.length > 31)
    throw new Error("bytes32 string must be less than 32 bytes");
  return G(de([e, vo]).slice(0, 32));
}
function gl(n) {
  const e = K(n);
  if (e.length !== 32)
    throw new Error("invalid bytes32 - not 32 bytes long");
  if (e[31] !== 0)
    throw new Error("invalid bytes32 string - no null terminator");
  let t = 31;
  for (; e[t - 1] === 0; )
    t--;
  return nn(e.slice(0, t));
}
function ml(n) {
  if (n.length % 4 !== 0)
    throw new Error("bad data");
  let e = [];
  for (let t = 0; t < n.length; t += 4)
    e.push(parseInt(n.substring(t, t + 4), 16));
  return e;
}
function wo(n, e) {
  e || (e = function(i) {
    return [parseInt(i, 16)];
  });
  let t = 0, r = {};
  return n.split(",").forEach((i) => {
    let s = i.split(":");
    t += parseInt(s[0], 16), r[t] = e(s[1]);
  }), r;
}
function B0(n) {
  let e = 0;
  return n.split(",").map((t) => {
    let r = t.split("-");
    r.length === 1 ? r[1] = "0" : r[1] === "" && (r[1] = "1");
    let i = e + parseInt(r[0], 16);
    return e = parseInt(r[1], 16), { l: i, h: e };
  });
}
function Ao(n, e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (t += i.l, n >= t && n <= t + i.h && (n - t) % (i.d || 1) === 0) {
      if (i.e && i.e.indexOf(n - t) !== -1)
        continue;
      return i;
    }
  }
  return null;
}
const vl = B0("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), yl = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((n) => parseInt(n, 16)), wl = [
  { h: 25, s: 32, l: 65 },
  { h: 30, s: 32, e: [23], l: 127 },
  { h: 54, s: 1, e: [48], l: 64, d: 2 },
  { h: 14, s: 1, l: 57, d: 2 },
  { h: 44, s: 1, l: 17, d: 2 },
  { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
  { h: 16, s: 1, l: 68, d: 2 },
  { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
  { h: 26, s: 32, e: [17], l: 435 },
  { h: 22, s: 1, l: 71, d: 2 },
  { h: 15, s: 80, l: 40 },
  { h: 31, s: 32, l: 16 },
  { h: 32, s: 1, l: 80, d: 2 },
  { h: 52, s: 1, l: 42, d: 2 },
  { h: 12, s: 1, l: 55, d: 2 },
  { h: 40, s: 1, e: [38], l: 15, d: 2 },
  { h: 14, s: 1, l: 48, d: 2 },
  { h: 37, s: 48, l: 49 },
  { h: 148, s: 1, l: 6351, d: 2 },
  { h: 88, s: 1, l: 160, d: 2 },
  { h: 15, s: 16, l: 704 },
  { h: 25, s: 26, l: 854 },
  { h: 25, s: 32, l: 55915 },
  { h: 37, s: 40, l: 1247 },
  { h: 25, s: -119711, l: 53248 },
  { h: 25, s: -119763, l: 52 },
  { h: 25, s: -119815, l: 52 },
  { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
  { h: 25, s: -119919, l: 52 },
  { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
  { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
  { h: 25, s: -120075, l: 52 },
  { h: 25, s: -120127, l: 52 },
  { h: 25, s: -120179, l: 52 },
  { h: 25, s: -120231, l: 52 },
  { h: 25, s: -120283, l: 52 },
  { h: 25, s: -120335, l: 52 },
  { h: 24, s: -119543, e: [17], l: 56 },
  { h: 24, s: -119601, e: [17], l: 58 },
  { h: 24, s: -119659, e: [17], l: 58 },
  { h: 24, s: -119717, e: [17], l: 58 },
  { h: 24, s: -119775, e: [17], l: 58 }
], Al = wo("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), El = wo("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), _l = wo("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", ml), Sl = B0("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
function kl(n) {
  return n.reduce((e, t) => (t.forEach((r) => {
    e.push(r);
  }), e), []);
}
function Pl(n) {
  return !!Ao(n, vl);
}
function Cl(n) {
  let e = Ao(n, wl);
  if (e)
    return [n + e.s];
  let t = Al[n];
  if (t)
    return t;
  let r = El[n];
  if (r)
    return [n + r[0]];
  let i = _l[n];
  return i || null;
}
function Il(n) {
  return !!Ao(n, Sl);
}
function Ml(n) {
  if (n.match(/^[a-z0-9-]*$/i) && n.length <= 59)
    return n.toLowerCase();
  let e = Di(n);
  e = kl(e.map((r) => {
    if (yl.indexOf(r) >= 0)
      return [];
    if (r >= 65024 && r <= 65039)
      return [];
    let i = Cl(r);
    return i || [r];
  })), e = Di(Vs(e), Qt.NFKC), e.forEach((r) => {
    if (Il(r))
      throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
  }), e.forEach((r) => {
    if (Pl(r))
      throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
  });
  let t = Vs(e);
  if (t.substring(0, 1) === "-" || t.substring(2, 4) === "--" || t.substring(t.length - 1) === "-")
    throw new Error("invalid hyphen");
  return t;
}
class Nl extends k0 {
  constructor(e) {
    super("string", e);
  }
  defaultValue() {
    return "";
  }
  encode(e, t) {
    return super.encode(e, nt(t));
  }
  decode(e) {
    return nn(super.decode(e));
  }
}
class di extends lr {
  constructor(e, t) {
    let r = !1;
    const i = [];
    e.forEach((o) => {
      o.dynamic && (r = !0), i.push(o.type);
    });
    const s = "tuple(" + i.join(",") + ")";
    super("tuple", s, t, r), this.coders = e;
  }
  defaultValue() {
    const e = [];
    this.coders.forEach((r) => {
      e.push(r.defaultValue());
    });
    const t = this.coders.reduce((r, i) => {
      const s = i.localName;
      return s && (r[s] || (r[s] = 0), r[s]++), r;
    }, {});
    return this.coders.forEach((r, i) => {
      let s = r.localName;
      !s || t[s] !== 1 || (s === "length" && (s = "_length"), e[s] == null && (e[s] = e[i]));
    }), Object.freeze(e);
  }
  encode(e, t) {
    return _0(e, this.coders, t);
  }
  decode(e) {
    return e.coerce(this.name, S0(e, this.coders));
  }
}
const xi = new _(fi), Tl = new RegExp(/^bytes([0-9]*)$/), Rl = new RegExp(/^(u?int)([0-9]*)$/);
class O0 {
  constructor(e) {
    B(this, "coerceFunc", e || null);
  }
  _getCoder(e) {
    switch (e.baseType) {
      case "address":
        return new Zc(e.name);
      case "bool":
        return new tl(e.name);
      case "string":
        return new Nl(e.name);
      case "bytes":
        return new rl(e.name);
      case "array":
        return new el(this._getCoder(e.arrayChildren), e.arrayLength, e.name);
      case "tuple":
        return new di((e.components || []).map((r) => this._getCoder(r)), e.name);
      case "":
        return new il(e.name);
    }
    let t = e.type.match(Rl);
    if (t) {
      let r = parseInt(t[2] || "256");
      return (r === 0 || r > 256 || r % 8 !== 0) && xi.throwArgumentError("invalid " + t[1] + " bit length", "param", e), new ul(r / 8, t[1] === "int", e.name);
    }
    if (t = e.type.match(Tl), t) {
      let r = parseInt(t[1]);
      return (r === 0 || r > 32) && xi.throwArgumentError("invalid bytes length", "param", e), new nl(r, e.name);
    }
    return xi.throwArgumentError("invalid type", "type", e.type);
  }
  _getWordSize() {
    return 32;
  }
  _getReader(e, t) {
    return new Fi(e, this._getWordSize(), this.coerceFunc, t);
  }
  _getWriter() {
    return new Js(this._getWordSize());
  }
  getDefaultValue(e) {
    const t = e.map((i) => this._getCoder(ot.from(i)));
    return new di(t, "_").defaultValue();
  }
  encode(e, t) {
    e.length !== t.length && xi.throwError("types/values length mismatch", _.errors.INVALID_ARGUMENT, {
      count: { types: e.length, values: t.length },
      value: { types: e, values: t }
    });
    const r = e.map((o) => this._getCoder(ot.from(o))), i = new di(r, "_"), s = this._getWriter();
    return i.encode(s, t), s.data;
  }
  decode(e, t, r) {
    const i = e.map((o) => this._getCoder(ot.from(o)));
    return new di(i, "_").decode(this._getReader(K(t), r));
  }
}
const F0 = new O0();
function wr(n) {
  return he(nt(n));
}
const D0 = "hash/5.7.0";
function Eo(n) {
  n = atob(n);
  const e = [];
  for (let t = 0; t < n.length; t++)
    e.push(n.charCodeAt(t));
  return K(e);
}
function _o(n) {
  n = K(n);
  let e = "";
  for (let t = 0; t < n.length; t++)
    e += String.fromCharCode(n[t]);
  return btoa(e);
}
const Bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Eo,
  encode: _o
}, Symbol.toStringTag, { value: "Module" }));
function L0(n, e) {
  e == null && (e = 1);
  const t = [], r = t.forEach, i = function(s, o) {
    r.call(s, function(a) {
      o > 0 && Array.isArray(a) ? i(a, o - 1) : t.push(a);
    });
  };
  return i(n, e), t;
}
function Ol(n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    e[r[0]] = r[1];
  }
  return e;
}
function Fl(n) {
  let e = 0;
  function t() {
    return n[e++] << 8 | n[e++];
  }
  let r = t(), i = 1, s = [0, 1];
  for (let L = 1; L < r; L++)
    s.push(i += t());
  let o = t(), a = e;
  e += o;
  let l = 0, h = 0;
  function x() {
    return l == 0 && (h = h << 8 | n[e++], l = 8), h >> --l & 1;
  }
  const b = 31, E = Math.pow(2, b), S = E >>> 1, I = S >> 1, C = E - 1;
  let y = 0;
  for (let L = 0; L < b; L++)
    y = y << 1 | x();
  let T = [], D = 0, U = E;
  for (; ; ) {
    let L = Math.floor(((y - D + 1) * i - 1) / U), W = 0, Z = r;
    for (; Z - W > 1; ) {
      let fe = W + Z >>> 1;
      L < s[fe] ? Z = fe : W = fe;
    }
    if (W == 0)
      break;
    T.push(W);
    let Y = D + Math.floor(U * s[W] / i), ne = D + Math.floor(U * s[W + 1] / i) - 1;
    for (; !((Y ^ ne) & S); )
      y = y << 1 & C | x(), Y = Y << 1 & C, ne = ne << 1 & C | 1;
    for (; Y & ~ne & I; )
      y = y & S | y << 1 & C >>> 1 | x(), Y = Y << 1 ^ S, ne = (ne ^ S) << 1 | S | 1;
    D = Y, U = 1 + ne - Y;
  }
  let z = r - 4;
  return T.map((L) => {
    switch (L - z) {
      case 3:
        return z + 65792 + (n[a++] << 16 | n[a++] << 8 | n[a++]);
      case 2:
        return z + 256 + (n[a++] << 8 | n[a++]);
      case 1:
        return z + n[a++];
      default:
        return L - 1;
    }
  });
}
function Dl(n) {
  let e = 0;
  return () => n[e++];
}
function Ll(n) {
  return Dl(Fl(n));
}
function Ul(n) {
  return n & 1 ? ~n >> 1 : n >> 1;
}
function Kl(n, e) {
  let t = Array(n);
  for (let r = 0; r < n; r++)
    t[r] = 1 + e();
  return t;
}
function la(n, e) {
  let t = Array(n);
  for (let r = 0, i = -1; r < n; r++)
    t[r] = i += 1 + e();
  return t;
}
function Hl(n, e) {
  let t = Array(n);
  for (let r = 0, i = 0; r < n; r++)
    t[r] = i += Ul(e());
  return t;
}
function Li(n, e) {
  let t = la(n(), n), r = n(), i = la(r, n), s = Kl(r, n);
  for (let o = 0; o < r; o++)
    for (let a = 0; a < s[o]; a++)
      t.push(i[o] + a);
  return e ? t.map((o) => e[o]) : t;
}
function Gl(n) {
  let e = [];
  for (; ; ) {
    let t = n();
    if (t == 0)
      break;
    e.push(zl(t, n));
  }
  for (; ; ) {
    let t = n() - 1;
    if (t < 0)
      break;
    e.push(jl(t, n));
  }
  return Ol(L0(e));
}
function ql(n) {
  let e = [];
  for (; ; ) {
    let t = n();
    if (t == 0)
      break;
    e.push(t);
  }
  return e;
}
function U0(n, e, t) {
  let r = Array(n).fill(void 0).map(() => []);
  for (let i = 0; i < e; i++)
    Hl(n, t).forEach((s, o) => r[o].push(s));
  return r;
}
function zl(n, e) {
  let t = 1 + e(), r = e(), i = ql(e), s = U0(i.length, 1 + n, e);
  return L0(s.map((o, a) => {
    const l = o[0], h = o.slice(1);
    return Array(i[a]).fill(void 0).map((x, b) => {
      let E = b * r;
      return [l + b * t, h.map((S) => S + E)];
    });
  }));
}
function jl(n, e) {
  let t = 1 + e();
  return U0(t, 1 + n, e).map((i) => [i[0], i.slice(1)]);
}
function Wl(n) {
  let e = Li(n).sort((r, i) => r - i);
  return t();
  function t() {
    let r = [];
    for (; ; ) {
      let h = Li(n, e);
      if (h.length == 0)
        break;
      r.push({ set: new Set(h), node: t() });
    }
    r.sort((h, x) => x.set.size - h.set.size);
    let i = n(), s = i % 3;
    i = i / 3 | 0;
    let o = !!(i & 1);
    i >>= 1;
    let a = i == 1, l = i == 2;
    return { branches: r, valid: s, fe0f: o, save: a, check: l };
  }
}
function Jl() {
  return Ll(Eo("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
}
const $i = Jl(), Vl = new Set(Li($i)), $l = new Set(Li($i)), Yl = Gl($i), Ql = Wl($i), ua = 45, ha = 95;
function K0(n) {
  return Di(n);
}
function Zl(n) {
  return n.filter((e) => e != 65039);
}
function H0(n) {
  for (let e of n.split(".")) {
    let t = K0(e);
    try {
      for (let r = t.lastIndexOf(ha) - 1; r >= 0; r--)
        if (t[r] !== ha)
          throw new Error("underscore only allowed at start");
      if (t.length >= 4 && t.every((r) => r < 128) && t[2] === ua && t[3] === ua)
        throw new Error("invalid label extension");
    } catch (r) {
      throw new Error(`Invalid label "${e}": ${r.message}`);
    }
  }
  return n;
}
function Xl(n) {
  return H0(eu(n, Zl));
}
function eu(n, e) {
  let t = K0(n).reverse(), r = [];
  for (; t.length; ) {
    let i = ru(t);
    if (i) {
      r.push(...e(i));
      continue;
    }
    let s = t.pop();
    if (Vl.has(s)) {
      r.push(s);
      continue;
    }
    if ($l.has(s))
      continue;
    let o = Yl[s];
    if (o) {
      r.push(...o);
      continue;
    }
    throw new Error(`Disallowed codepoint: 0x${s.toString(16).toUpperCase()}`);
  }
  return H0(tu(String.fromCodePoint(...r)));
}
function tu(n) {
  return n.normalize("NFC");
}
function ru(n, e) {
  var t;
  let r = Ql, i, s, o = [], a = n.length;
  for (e && (e.length = 0); a; ) {
    let l = n[--a];
    if (r = (t = r.branches.find((h) => h.set.has(l))) === null || t === void 0 ? void 0 : t.node, !r)
      break;
    if (r.save)
      s = l;
    else if (r.check && l === s)
      break;
    o.push(l), r.fe0f && (o.push(65039), a > 0 && n[a - 1] == 65039 && a--), r.valid && (i = o.slice(), r.valid == 2 && i.splice(1, 1), e && e.push(...n.slice(a).reverse()), n.length = a);
  }
  return i;
}
const nu = new _(D0), G0 = new Uint8Array(32);
G0.fill(0);
function da(n) {
  if (n.length === 0)
    throw new Error("invalid ENS name; empty component");
  return n;
}
function So(n) {
  const e = nt(Xl(n)), t = [];
  if (n.length === 0)
    return t;
  let r = 0;
  for (let i = 0; i < e.length; i++)
    e[i] === 46 && (t.push(da(e.slice(r, i))), r = i + 1);
  if (r >= e.length)
    throw new Error("invalid ENS name; empty component");
  return t.push(da(e.slice(r))), t;
}
function iu(n) {
  try {
    return So(n).length !== 0;
  } catch {
  }
  return !1;
}
function Wn(n) {
  typeof n != "string" && nu.throwArgumentError("invalid ENS name; not a string", "name", n);
  let e = G0;
  const t = So(n);
  for (; t.length; )
    e = he(de([e, he(t.pop())]));
  return G(e);
}
function q0(n) {
  return G(de(So(n).map((e) => {
    if (e.length > 63)
      throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
    const t = new Uint8Array(e.length + 1);
    return t.set(e, 1), t[0] = t.length - 1, t;
  }))) + "00";
}
const su = `Ethereum Signed Message:
`;
function ci(n) {
  return typeof n == "string" && (n = nt(n)), he(de([
    nt(su),
    nt(String(n.length)),
    n
  ]));
}
var ou = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const Ze = new _(D0), z0 = new Uint8Array(32);
z0.fill(0);
const au = H.from(-1), j0 = H.from(0), W0 = H.from(1), fu = H.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function cu(n) {
  const e = K(n), t = e.length % 32;
  return t ? bt([e, z0.slice(t)]) : G(e);
}
const lu = xe(W0.toHexString(), 32), uu = xe(j0.toHexString(), 32), xa = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
}, ks = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function pa(n) {
  return function(e) {
    return typeof e != "string" && Ze.throwArgumentError(`invalid domain value for ${JSON.stringify(n)}`, `domain.${n}`, e), e;
  };
}
const hu = {
  name: pa("name"),
  version: pa("version"),
  chainId: function(n) {
    try {
      return H.from(n).toString();
    } catch {
    }
    return Ze.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", n);
  },
  verifyingContract: function(n) {
    try {
      return le(n).toLowerCase();
    } catch {
    }
    return Ze.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", n);
  },
  salt: function(n) {
    try {
      const e = K(n);
      if (e.length !== 32)
        throw new Error("bad length");
      return G(e);
    } catch {
    }
    return Ze.throwArgumentError('invalid domain value "salt"', "domain.salt", n);
  }
};
function Ps(n) {
  {
    const e = n.match(/^(u?)int(\d*)$/);
    if (e) {
      const t = e[1] === "", r = parseInt(e[2] || "256");
      (r % 8 !== 0 || r > 256 || e[2] && e[2] !== String(r)) && Ze.throwArgumentError("invalid numeric width", "type", n);
      const i = fu.mask(t ? r - 1 : r), s = t ? i.add(W0).mul(au) : j0;
      return function(o) {
        const a = H.from(o);
        return (a.lt(s) || a.gt(i)) && Ze.throwArgumentError(`value out-of-bounds for ${n}`, "value", o), xe(a.toTwos(256).toHexString(), 32);
      };
    }
  }
  {
    const e = n.match(/^bytes(\d+)$/);
    if (e) {
      const t = parseInt(e[1]);
      return (t === 0 || t > 32 || e[1] !== String(t)) && Ze.throwArgumentError("invalid bytes width", "type", n), function(r) {
        return K(r).length !== t && Ze.throwArgumentError(`invalid length for ${n}`, "value", r), cu(r);
      };
    }
  }
  switch (n) {
    case "address":
      return function(e) {
        return xe(le(e), 32);
      };
    case "bool":
      return function(e) {
        return e ? lu : uu;
      };
    case "bytes":
      return function(e) {
        return he(e);
      };
    case "string":
      return function(e) {
        return wr(e);
      };
  }
  return null;
}
function ba(n, e) {
  return `${n}(${e.map(({ name: t, type: r }) => r + " " + t).join(",")})`;
}
class ct {
  constructor(e) {
    B(this, "types", Object.freeze(mt(e))), B(this, "_encoderCache", {}), B(this, "_types", {});
    const t = {}, r = {}, i = {};
    Object.keys(e).forEach((a) => {
      t[a] = {}, r[a] = [], i[a] = {};
    });
    for (const a in e) {
      const l = {};
      e[a].forEach((h) => {
        l[h.name] && Ze.throwArgumentError(`duplicate variable name ${JSON.stringify(h.name)} in ${JSON.stringify(a)}`, "types", e), l[h.name] = !0;
        const x = h.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
        x === a && Ze.throwArgumentError(`circular type reference to ${JSON.stringify(x)}`, "types", e), !Ps(x) && (r[x] || Ze.throwArgumentError(`unknown type ${JSON.stringify(x)}`, "types", e), r[x].push(a), t[a][x] = !0);
      });
    }
    const s = Object.keys(r).filter((a) => r[a].length === 0);
    s.length === 0 ? Ze.throwArgumentError("missing primary type", "types", e) : s.length > 1 && Ze.throwArgumentError(`ambiguous primary types or unused types: ${s.map((a) => JSON.stringify(a)).join(", ")}`, "types", e), B(this, "primaryType", s[0]);
    function o(a, l) {
      l[a] && Ze.throwArgumentError(`circular type reference to ${JSON.stringify(a)}`, "types", e), l[a] = !0, Object.keys(t[a]).forEach((h) => {
        r[h] && (o(h, l), Object.keys(l).forEach((x) => {
          i[x][h] = !0;
        }));
      }), delete l[a];
    }
    o(this.primaryType, {});
    for (const a in i) {
      const l = Object.keys(i[a]);
      l.sort(), this._types[a] = ba(a, e[a]) + l.map((h) => ba(h, e[h])).join("");
    }
  }
  getEncoder(e) {
    let t = this._encoderCache[e];
    return t || (t = this._encoderCache[e] = this._getEncoder(e)), t;
  }
  _getEncoder(e) {
    {
      const i = Ps(e);
      if (i)
        return i;
    }
    const t = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (t) {
      const i = t[1], s = this.getEncoder(i), o = parseInt(t[3]);
      return (a) => {
        o >= 0 && a.length !== o && Ze.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", a);
        let l = a.map(s);
        return this._types[i] && (l = l.map(he)), he(bt(l));
      };
    }
    const r = this.types[e];
    if (r) {
      const i = wr(this._types[e]);
      return (s) => {
        const o = r.map(({ name: a, type: l }) => {
          const h = this.getEncoder(l)(s[a]);
          return this._types[l] ? he(h) : h;
        });
        return o.unshift(i), bt(o);
      };
    }
    return Ze.throwArgumentError(`unknown type: ${e}`, "type", e);
  }
  encodeType(e) {
    const t = this._types[e];
    return t || Ze.throwArgumentError(`unknown type: ${JSON.stringify(e)}`, "name", e), t;
  }
  encodeData(e, t) {
    return this.getEncoder(e)(t);
  }
  hashStruct(e, t) {
    return he(this.encodeData(e, t));
  }
  encode(e) {
    return this.encodeData(this.primaryType, e);
  }
  hash(e) {
    return this.hashStruct(this.primaryType, e);
  }
  _visit(e, t, r) {
    if (Ps(e))
      return r(e, t);
    const i = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (i) {
      const o = i[1], a = parseInt(i[3]);
      return a >= 0 && t.length !== a && Ze.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t), t.map((l) => this._visit(o, l, r));
    }
    const s = this.types[e];
    return s ? s.reduce((o, { name: a, type: l }) => (o[a] = this._visit(l, t[a], r), o), {}) : Ze.throwArgumentError(`unknown type: ${e}`, "type", e);
  }
  visit(e, t) {
    return this._visit(this.primaryType, e, t);
  }
  static from(e) {
    return new ct(e);
  }
  static getPrimaryType(e) {
    return ct.from(e).primaryType;
  }
  static hashStruct(e, t, r) {
    return ct.from(t).hashStruct(e, r);
  }
  static hashDomain(e) {
    const t = [];
    for (const r in e) {
      const i = xa[r];
      i || Ze.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", e), t.push({ name: r, type: i });
    }
    return t.sort((r, i) => ks.indexOf(r.name) - ks.indexOf(i.name)), ct.hashStruct("EIP712Domain", { EIP712Domain: t }, e);
  }
  static encode(e, t, r) {
    return bt([
      "0x1901",
      ct.hashDomain(e),
      ct.from(t).hash(r)
    ]);
  }
  static hash(e, t, r) {
    return he(ct.encode(e, t, r));
  }
  // Replaces all address types with ENS names with their looked up address
  static resolveNames(e, t, r, i) {
    return ou(this, void 0, void 0, function* () {
      e = ge(e);
      const s = {};
      e.verifyingContract && !re(e.verifyingContract, 20) && (s[e.verifyingContract] = "0x");
      const o = ct.from(t);
      o.visit(r, (a, l) => (a === "address" && !re(l, 20) && (s[l] = "0x"), l));
      for (const a in s)
        s[a] = yield i(a);
      return e.verifyingContract && s[e.verifyingContract] && (e.verifyingContract = s[e.verifyingContract]), r = o.visit(r, (a, l) => a === "address" && s[l] ? s[l] : l), { domain: e, value: r };
    });
  }
  static getPayload(e, t, r) {
    ct.hashDomain(e);
    const i = {}, s = [];
    ks.forEach((l) => {
      const h = e[l];
      h != null && (i[l] = hu[l](h), s.push({ name: l, type: xa[l] }));
    });
    const o = ct.from(t), a = ge(t);
    return a.EIP712Domain ? Ze.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", t) : a.EIP712Domain = s, o.encode(r), {
      types: a,
      domain: i,
      primaryType: o.primaryType,
      message: o.visit(r, (l, h) => {
        if (l.match(/^bytes(\d*)/))
          return G(K(h));
        if (l.match(/^u?int/))
          return H.from(h).toString();
        switch (l) {
          case "address":
            return h.toLowerCase();
          case "bool":
            return !!h;
          case "string":
            return typeof h != "string" && Ze.throwArgumentError("invalid string", "value", h), h;
        }
        return Ze.throwArgumentError("unsupported type", "type", l);
      })
    };
  }
}
const Qe = new _(fi);
class J0 extends rn {
}
class V0 extends rn {
}
class du extends rn {
}
class Ui extends rn {
  static isIndexed(e) {
    return !!(e && e._isIndexed);
  }
}
const xu = {
  "0x08c379a0": { signature: "Error(string)", name: "Error", inputs: ["string"], reason: !0 },
  "0x4e487b71": { signature: "Panic(uint256)", name: "Panic", inputs: ["uint256"] }
};
function ga(n, e) {
  const t = new Error(`deferred error during ABI decoding triggered accessing ${n}`);
  return t.error = e, t;
}
class $s {
  constructor(e) {
    let t = [];
    typeof e == "string" ? t = JSON.parse(e) : t = e, B(this, "fragments", t.map((r) => zt.from(r)).filter((r) => r != null)), B(this, "_abiCoder", lt(new.target, "getAbiCoder")()), B(this, "functions", {}), B(this, "errors", {}), B(this, "events", {}), B(this, "structs", {}), this.fragments.forEach((r) => {
      let i = null;
      switch (r.type) {
        case "constructor":
          if (this.deploy) {
            Qe.warn("duplicate definition - constructor");
            return;
          }
          B(this, "deploy", r);
          return;
        case "function":
          i = this.functions;
          break;
        case "event":
          i = this.events;
          break;
        case "error":
          i = this.errors;
          break;
        default:
          return;
      }
      let s = r.format();
      if (i[s]) {
        Qe.warn("duplicate definition - " + s);
        return;
      }
      i[s] = r;
    }), this.deploy || B(this, "deploy", Ft.from({
      payable: !1,
      type: "constructor"
    })), B(this, "_isInterface", !0);
  }
  format(e) {
    e || (e = ce.full), e === ce.sighash && Qe.throwArgumentError("interface does not support formatting sighash", "format", e);
    const t = this.fragments.map((r) => r.format(e));
    return e === ce.json ? JSON.stringify(t.map((r) => JSON.parse(r))) : t;
  }
  // Sub-classes can override these to handle other blockchains
  static getAbiCoder() {
    return F0;
  }
  static getAddress(e) {
    return le(e);
  }
  static getSighash(e) {
    return rt(wr(e.format()), 0, 4);
  }
  static getEventTopic(e) {
    return wr(e.format());
  }
  // Find a function definition by any means necessary (unless it is ambiguous)
  getFunction(e) {
    if (re(e)) {
      for (const r in this.functions)
        if (e === this.getSighash(r))
          return this.functions[r];
      Qe.throwArgumentError("no matching function", "sighash", e);
    }
    if (e.indexOf("(") === -1) {
      const r = e.trim(), i = Object.keys(this.functions).filter((s) => s.split(
        "("
        /* fix:) */
      )[0] === r);
      return i.length === 0 ? Qe.throwArgumentError("no matching function", "name", r) : i.length > 1 && Qe.throwArgumentError("multiple matching functions", "name", r), this.functions[i[0]];
    }
    const t = this.functions[Dt.fromString(e).format()];
    return t || Qe.throwArgumentError("no matching function", "signature", e), t;
  }
  // Find an event definition by any means necessary (unless it is ambiguous)
  getEvent(e) {
    if (re(e)) {
      const r = e.toLowerCase();
      for (const i in this.events)
        if (r === this.getEventTopic(i))
          return this.events[i];
      Qe.throwArgumentError("no matching event", "topichash", r);
    }
    if (e.indexOf("(") === -1) {
      const r = e.trim(), i = Object.keys(this.events).filter((s) => s.split(
        "("
        /* fix:) */
      )[0] === r);
      return i.length === 0 ? Qe.throwArgumentError("no matching event", "name", r) : i.length > 1 && Qe.throwArgumentError("multiple matching events", "name", r), this.events[i[0]];
    }
    const t = this.events[qt.fromString(e).format()];
    return t || Qe.throwArgumentError("no matching event", "signature", e), t;
  }
  // Find a function definition by any means necessary (unless it is ambiguous)
  getError(e) {
    if (re(e)) {
      const r = lt(this.constructor, "getSighash");
      for (const i in this.errors) {
        const s = this.errors[i];
        if (e === r(s))
          return this.errors[i];
      }
      Qe.throwArgumentError("no matching error", "sighash", e);
    }
    if (e.indexOf("(") === -1) {
      const r = e.trim(), i = Object.keys(this.errors).filter((s) => s.split(
        "("
        /* fix:) */
      )[0] === r);
      return i.length === 0 ? Qe.throwArgumentError("no matching error", "name", r) : i.length > 1 && Qe.throwArgumentError("multiple matching errors", "name", r), this.errors[i[0]];
    }
    const t = this.errors[Dt.fromString(e).format()];
    return t || Qe.throwArgumentError("no matching error", "signature", e), t;
  }
  // Get the sighash (the bytes4 selector) used by Solidity to identify a function
  getSighash(e) {
    if (typeof e == "string")
      try {
        e = this.getFunction(e);
      } catch (t) {
        try {
          e = this.getError(e);
        } catch {
          throw t;
        }
      }
    return lt(this.constructor, "getSighash")(e);
  }
  // Get the topic (the bytes32 hash) used by Solidity to identify an event
  getEventTopic(e) {
    return typeof e == "string" && (e = this.getEvent(e)), lt(this.constructor, "getEventTopic")(e);
  }
  _decodeParams(e, t) {
    return this._abiCoder.decode(e, t);
  }
  _encodeParams(e, t) {
    return this._abiCoder.encode(e, t);
  }
  encodeDeploy(e) {
    return this._encodeParams(this.deploy.inputs, e || []);
  }
  decodeErrorResult(e, t) {
    typeof e == "string" && (e = this.getError(e));
    const r = K(t);
    return G(r.slice(0, 4)) !== this.getSighash(e) && Qe.throwArgumentError(`data signature does not match error ${e.name}.`, "data", G(r)), this._decodeParams(e.inputs, r.slice(4));
  }
  encodeErrorResult(e, t) {
    return typeof e == "string" && (e = this.getError(e)), G(de([
      this.getSighash(e),
      this._encodeParams(e.inputs, t || [])
    ]));
  }
  // Decode the data for a function call (e.g. tx.data)
  decodeFunctionData(e, t) {
    typeof e == "string" && (e = this.getFunction(e));
    const r = K(t);
    return G(r.slice(0, 4)) !== this.getSighash(e) && Qe.throwArgumentError(`data signature does not match function ${e.name}.`, "data", G(r)), this._decodeParams(e.inputs, r.slice(4));
  }
  // Encode the data for a function call (e.g. tx.data)
  encodeFunctionData(e, t) {
    return typeof e == "string" && (e = this.getFunction(e)), G(de([
      this.getSighash(e),
      this._encodeParams(e.inputs, t || [])
    ]));
  }
  // Decode the result from a function call (e.g. from eth_call)
  decodeFunctionResult(e, t) {
    typeof e == "string" && (e = this.getFunction(e));
    let r = K(t), i = null, s = "", o = null, a = null, l = null;
    switch (r.length % this._abiCoder._getWordSize()) {
      case 0:
        try {
          return this._abiCoder.decode(e.outputs, r);
        } catch {
        }
        break;
      case 4: {
        const h = G(r.slice(0, 4)), x = xu[h];
        if (x)
          o = this._abiCoder.decode(x.inputs, r.slice(4)), a = x.name, l = x.signature, x.reason && (i = o[0]), a === "Error" ? s = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(o[0])}` : a === "Panic" && (s = `; VM Exception while processing transaction: reverted with panic code ${o[0]}`);
        else
          try {
            const b = this.getError(h);
            o = this._abiCoder.decode(b.inputs, r.slice(4)), a = b.name, l = b.format();
          } catch {
          }
        break;
      }
    }
    return Qe.throwError("call revert exception" + s, _.errors.CALL_EXCEPTION, {
      method: e.format(),
      data: G(t),
      errorArgs: o,
      errorName: a,
      errorSignature: l,
      reason: i
    });
  }
  // Encode the result for a function call (e.g. for eth_call)
  encodeFunctionResult(e, t) {
    return typeof e == "string" && (e = this.getFunction(e)), G(this._abiCoder.encode(e.outputs, t || []));
  }
  // Create the filter for the event with search criteria (e.g. for eth_filterLog)
  encodeFilterTopics(e, t) {
    typeof e == "string" && (e = this.getEvent(e)), t.length > e.inputs.length && Qe.throwError("too many arguments for " + e.format(), _.errors.UNEXPECTED_ARGUMENT, {
      argument: "values",
      value: t
    });
    let r = [];
    e.anonymous || r.push(this.getEventTopic(e));
    const i = (s, o) => s.type === "string" ? wr(o) : s.type === "bytes" ? he(G(o)) : (s.type === "bool" && typeof o == "boolean" && (o = o ? "0x01" : "0x00"), s.type.match(/^u?int/) && (o = H.from(o).toHexString()), s.type === "address" && this._abiCoder.encode(["address"], [o]), xe(G(o), 32));
    for (t.forEach((s, o) => {
      let a = e.inputs[o];
      if (!a.indexed) {
        s != null && Qe.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + a.name, s);
        return;
      }
      s == null ? r.push(null) : a.baseType === "array" || a.baseType === "tuple" ? Qe.throwArgumentError("filtering with tuples or arrays not supported", "contract." + a.name, s) : Array.isArray(s) ? r.push(s.map((l) => i(a, l))) : r.push(i(a, s));
    }); r.length && r[r.length - 1] === null; )
      r.pop();
    return r;
  }
  encodeEventLog(e, t) {
    typeof e == "string" && (e = this.getEvent(e));
    const r = [], i = [], s = [];
    return e.anonymous || r.push(this.getEventTopic(e)), t.length !== e.inputs.length && Qe.throwArgumentError("event arguments/values mismatch", "values", t), e.inputs.forEach((o, a) => {
      const l = t[a];
      if (o.indexed)
        if (o.type === "string")
          r.push(wr(l));
        else if (o.type === "bytes")
          r.push(he(l));
        else {
          if (o.baseType === "tuple" || o.baseType === "array")
            throw new Error("not implemented");
          r.push(this._abiCoder.encode([o.type], [l]));
        }
      else
        i.push(o), s.push(l);
    }), {
      data: this._abiCoder.encode(i, s),
      topics: r
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(e, t, r) {
    if (typeof e == "string" && (e = this.getEvent(e)), r != null && !e.anonymous) {
      let E = this.getEventTopic(e);
      (!re(r[0], 32) || r[0].toLowerCase() !== E) && Qe.throwError("fragment/topic mismatch", _.errors.INVALID_ARGUMENT, { argument: "topics[0]", expected: E, value: r[0] }), r = r.slice(1);
    }
    let i = [], s = [], o = [];
    e.inputs.forEach((E, S) => {
      E.indexed ? E.type === "string" || E.type === "bytes" || E.baseType === "tuple" || E.baseType === "array" ? (i.push(ot.fromObject({ type: "bytes32", name: E.name })), o.push(!0)) : (i.push(E), o.push(!1)) : (s.push(E), o.push(!1));
    });
    let a = r != null ? this._abiCoder.decode(i, de(r)) : null, l = this._abiCoder.decode(s, t, !0), h = [], x = 0, b = 0;
    e.inputs.forEach((E, S) => {
      if (E.indexed)
        if (a == null)
          h[S] = new Ui({ _isIndexed: !0, hash: null });
        else if (o[S])
          h[S] = new Ui({ _isIndexed: !0, hash: a[b++] });
        else
          try {
            h[S] = a[b++];
          } catch (I) {
            h[S] = I;
          }
      else
        try {
          h[S] = l[x++];
        } catch (I) {
          h[S] = I;
        }
      if (E.name && h[E.name] == null) {
        const I = h[S];
        I instanceof Error ? Object.defineProperty(h, E.name, {
          enumerable: !0,
          get: () => {
            throw ga(`property ${JSON.stringify(E.name)}`, I);
          }
        }) : h[E.name] = I;
      }
    });
    for (let E = 0; E < h.length; E++) {
      const S = h[E];
      S instanceof Error && Object.defineProperty(h, E, {
        enumerable: !0,
        get: () => {
          throw ga(`index ${E}`, S);
        }
      });
    }
    return Object.freeze(h);
  }
  // Given a transaction, find the matching function fragment (if any) and
  // determine all its properties and call parameters
  parseTransaction(e) {
    let t = this.getFunction(e.data.substring(0, 10).toLowerCase());
    return t ? new V0({
      args: this._abiCoder.decode(t.inputs, "0x" + e.data.substring(10)),
      functionFragment: t,
      name: t.name,
      signature: t.format(),
      sighash: this.getSighash(t),
      value: H.from(e.value || "0")
    }) : null;
  }
  // @TODO
  //parseCallResult(data: BytesLike): ??
  // Given an event log, find the matching event fragment (if any) and
  // determine all its properties and values
  parseLog(e) {
    let t = this.getEvent(e.topics[0]);
    return !t || t.anonymous ? null : new J0({
      eventFragment: t,
      name: t.name,
      signature: t.format(),
      topic: this.getEventTopic(t),
      args: this.decodeEventLog(t, e.data, e.topics)
    });
  }
  parseError(e) {
    const t = G(e);
    let r = this.getError(t.substring(0, 10).toLowerCase());
    return r ? new du({
      args: this._abiCoder.decode(r.inputs, "0x" + t.substring(10)),
      errorFragment: r,
      name: r.name,
      signature: r.format(),
      sighash: this.getSighash(r)
    }) : null;
  }
  /*
  static from(value: Array<Fragment | string | JsonAbi> | string | Interface) {
      if (Interface.isInterface(value)) {
          return value;
      }
      if (typeof(value) === "string") {
          return new Interface(JSON.parse(value));
      }
      return new Interface(value);
  }
  */
  static isInterface(e) {
    return !!(e && e._isInterface);
  }
}
const pu = "abstract-provider/5.7.0";
var bu = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const gu = new _(pu);
class mu extends rn {
  static isForkEvent(e) {
    return !!(e && e._isForkEvent);
  }
}
class sn {
  constructor() {
    gu.checkAbstract(new.target, sn), B(this, "_isProvider", !0);
  }
  getFeeData() {
    return bu(this, void 0, void 0, function* () {
      const { block: e, gasPrice: t } = yield et({
        block: this.getBlock("latest"),
        gasPrice: this.getGasPrice().catch((o) => null)
      });
      let r = null, i = null, s = null;
      return e && e.baseFeePerGas && (r = e.baseFeePerGas, s = H.from("1500000000"), i = e.baseFeePerGas.mul(2).add(s)), { lastBaseFeePerGas: r, maxFeePerGas: i, maxPriorityFeePerGas: s, gasPrice: t };
    });
  }
  // Alias for "on"
  addListener(e, t) {
    return this.on(e, t);
  }
  // Alias for "off"
  removeListener(e, t) {
    return this.off(e, t);
  }
  static isProvider(e) {
    return !!(e && e._isProvider);
  }
}
const vu = "abstract-signer/5.7.0";
var Rt = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const Ct = new _(vu), yu = [
  "accessList",
  "ccipReadEnabled",
  "chainId",
  "customData",
  "data",
  "from",
  "gasLimit",
  "gasPrice",
  "maxFeePerGas",
  "maxPriorityFeePerGas",
  "nonce",
  "to",
  "type",
  "value"
], wu = [
  _.errors.INSUFFICIENT_FUNDS,
  _.errors.NONCE_EXPIRED,
  _.errors.REPLACEMENT_UNDERPRICED
];
class Pr {
  ///////////////////
  // Sub-classes MUST call super
  constructor() {
    Ct.checkAbstract(new.target, Pr), B(this, "_isSigner", !0);
  }
  ///////////////////
  // Sub-classes MAY override these
  getBalance(e) {
    return Rt(this, void 0, void 0, function* () {
      return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), e);
    });
  }
  getTransactionCount(e) {
    return Rt(this, void 0, void 0, function* () {
      return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), e);
    });
  }
  // Populates "from" if unspecified, and estimates the gas for the transaction
  estimateGas(e) {
    return Rt(this, void 0, void 0, function* () {
      this._checkProvider("estimateGas");
      const t = yield et(this.checkTransaction(e));
      return yield this.provider.estimateGas(t);
    });
  }
  // Populates "from" if unspecified, and calls with the transaction
  call(e, t) {
    return Rt(this, void 0, void 0, function* () {
      this._checkProvider("call");
      const r = yield et(this.checkTransaction(e));
      return yield this.provider.call(r, t);
    });
  }
  // Populates all fields in a transaction, signs it and sends it to the network
  sendTransaction(e) {
    return Rt(this, void 0, void 0, function* () {
      this._checkProvider("sendTransaction");
      const t = yield this.populateTransaction(e), r = yield this.signTransaction(t);
      return yield this.provider.sendTransaction(r);
    });
  }
  getChainId() {
    return Rt(this, void 0, void 0, function* () {
      return this._checkProvider("getChainId"), (yield this.provider.getNetwork()).chainId;
    });
  }
  getGasPrice() {
    return Rt(this, void 0, void 0, function* () {
      return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice();
    });
  }
  getFeeData() {
    return Rt(this, void 0, void 0, function* () {
      return this._checkProvider("getFeeData"), yield this.provider.getFeeData();
    });
  }
  resolveName(e) {
    return Rt(this, void 0, void 0, function* () {
      return this._checkProvider("resolveName"), yield this.provider.resolveName(e);
    });
  }
  // Checks a transaction does not contain invalid keys and if
  // no "from" is provided, populates it.
  // - does NOT require a provider
  // - adds "from" is not present
  // - returns a COPY (safe to mutate the result)
  // By default called from: (overriding these prevents it)
  //   - call
  //   - estimateGas
  //   - populateTransaction (and therefor sendTransaction)
  checkTransaction(e) {
    for (const r in e)
      yu.indexOf(r) === -1 && Ct.throwArgumentError("invalid transaction key: " + r, "transaction", e);
    const t = ge(e);
    return t.from == null ? t.from = this.getAddress() : t.from = Promise.all([
      Promise.resolve(t.from),
      this.getAddress()
    ]).then((r) => (r[0].toLowerCase() !== r[1].toLowerCase() && Ct.throwArgumentError("from address mismatch", "transaction", e), r[0])), t;
  }
  // Populates ALL keys for a transaction and checks that "from" matches
  // this Signer. Should be used by sendTransaction but NOT by signTransaction.
  // By default called from: (overriding these prevents it)
  //   - sendTransaction
  //
  // Notes:
  //  - We allow gasPrice for EIP-1559 as long as it matches maxFeePerGas
  populateTransaction(e) {
    return Rt(this, void 0, void 0, function* () {
      const t = yield et(this.checkTransaction(e));
      t.to != null && (t.to = Promise.resolve(t.to).then((i) => Rt(this, void 0, void 0, function* () {
        if (i == null)
          return null;
        const s = yield this.resolveName(i);
        return s == null && Ct.throwArgumentError("provided ENS name resolves to null", "tx.to", i), s;
      })), t.to.catch((i) => {
      }));
      const r = t.maxFeePerGas != null || t.maxPriorityFeePerGas != null;
      if (t.gasPrice != null && (t.type === 2 || r) ? Ct.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e) : (t.type === 0 || t.type === 1) && r && Ct.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e), (t.type === 2 || t.type == null) && t.maxFeePerGas != null && t.maxPriorityFeePerGas != null)
        t.type = 2;
      else if (t.type === 0 || t.type === 1)
        t.gasPrice == null && (t.gasPrice = this.getGasPrice());
      else {
        const i = yield this.getFeeData();
        if (t.type == null)
          if (i.maxFeePerGas != null && i.maxPriorityFeePerGas != null)
            if (t.type = 2, t.gasPrice != null) {
              const s = t.gasPrice;
              delete t.gasPrice, t.maxFeePerGas = s, t.maxPriorityFeePerGas = s;
            } else
              t.maxFeePerGas == null && (t.maxFeePerGas = i.maxFeePerGas), t.maxPriorityFeePerGas == null && (t.maxPriorityFeePerGas = i.maxPriorityFeePerGas);
          else
            i.gasPrice != null ? (r && Ct.throwError("network does not support EIP-1559", _.errors.UNSUPPORTED_OPERATION, {
              operation: "populateTransaction"
            }), t.gasPrice == null && (t.gasPrice = i.gasPrice), t.type = 0) : Ct.throwError("failed to get consistent fee data", _.errors.UNSUPPORTED_OPERATION, {
              operation: "signer.getFeeData"
            });
        else
          t.type === 2 && (t.maxFeePerGas == null && (t.maxFeePerGas = i.maxFeePerGas), t.maxPriorityFeePerGas == null && (t.maxPriorityFeePerGas = i.maxPriorityFeePerGas));
      }
      return t.nonce == null && (t.nonce = this.getTransactionCount("pending")), t.gasLimit == null && (t.gasLimit = this.estimateGas(t).catch((i) => {
        if (wu.indexOf(i.code) >= 0)
          throw i;
        return Ct.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", _.errors.UNPREDICTABLE_GAS_LIMIT, {
          error: i,
          tx: t
        });
      })), t.chainId == null ? t.chainId = this.getChainId() : t.chainId = Promise.all([
        Promise.resolve(t.chainId),
        this.getChainId()
      ]).then((i) => (i[1] !== 0 && i[0] !== i[1] && Ct.throwArgumentError("chainId address mismatch", "transaction", e), i[0])), yield et(t);
    });
  }
  ///////////////////
  // Sub-classes SHOULD leave these alone
  _checkProvider(e) {
    this.provider || Ct.throwError("missing provider", _.errors.UNSUPPORTED_OPERATION, {
      operation: e || "_checkProvider"
    });
  }
  static isSigner(e) {
    return !!(e && e._isSigner);
  }
}
class Yi extends Pr {
  constructor(e, t) {
    super(), B(this, "address", e), B(this, "provider", t || null);
  }
  getAddress() {
    return Promise.resolve(this.address);
  }
  _fail(e, t) {
    return Promise.resolve().then(() => {
      Ct.throwError(e, _.errors.UNSUPPORTED_OPERATION, { operation: t });
    });
  }
  signMessage(e) {
    return this._fail("VoidSigner cannot sign messages", "signMessage");
  }
  signTransaction(e) {
    return this._fail("VoidSigner cannot sign transactions", "signTransaction");
  }
  _signTypedData(e, t, r) {
    return this._fail("VoidSigner cannot sign typed data", "signTypedData");
  }
  connect(e) {
    return new Yi(this.address, e);
  }
}
var $0 = {}, oe = {}, li = Y0;
function Y0(n, e) {
  if (!n)
    throw new Error(e || "Assertion failed");
}
Y0.equal = function(e, t, r) {
  if (e != t)
    throw new Error(r || "Assertion failed: " + e + " != " + t);
};
var Ys = { exports: {} };
typeof Object.create == "function" ? Ys.exports = function(e, t) {
  t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : Ys.exports = function(e, t) {
  if (t) {
    e.super_ = t;
    var r = function() {
    };
    r.prototype = t.prototype, e.prototype = new r(), e.prototype.constructor = e;
  }
};
var Au = Ys.exports, Eu = li, _u = Au;
oe.inherits = _u;
function Su(n, e) {
  return (n.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= n.length ? !1 : (n.charCodeAt(e + 1) & 64512) === 56320;
}
function ku(n, e) {
  if (Array.isArray(n))
    return n.slice();
  if (!n)
    return [];
  var t = [];
  if (typeof n == "string")
    if (e) {
      if (e === "hex")
        for (n = n.replace(/[^a-z0-9]+/ig, ""), n.length % 2 !== 0 && (n = "0" + n), i = 0; i < n.length; i += 2)
          t.push(parseInt(n[i] + n[i + 1], 16));
    } else
      for (var r = 0, i = 0; i < n.length; i++) {
        var s = n.charCodeAt(i);
        s < 128 ? t[r++] = s : s < 2048 ? (t[r++] = s >> 6 | 192, t[r++] = s & 63 | 128) : Su(n, i) ? (s = 65536 + ((s & 1023) << 10) + (n.charCodeAt(++i) & 1023), t[r++] = s >> 18 | 240, t[r++] = s >> 12 & 63 | 128, t[r++] = s >> 6 & 63 | 128, t[r++] = s & 63 | 128) : (t[r++] = s >> 12 | 224, t[r++] = s >> 6 & 63 | 128, t[r++] = s & 63 | 128);
      }
  else
    for (i = 0; i < n.length; i++)
      t[i] = n[i] | 0;
  return t;
}
oe.toArray = ku;
function Pu(n) {
  for (var e = "", t = 0; t < n.length; t++)
    e += Z0(n[t].toString(16));
  return e;
}
oe.toHex = Pu;
function Q0(n) {
  var e = n >>> 24 | n >>> 8 & 65280 | n << 8 & 16711680 | (n & 255) << 24;
  return e >>> 0;
}
oe.htonl = Q0;
function Cu(n, e) {
  for (var t = "", r = 0; r < n.length; r++) {
    var i = n[r];
    e === "little" && (i = Q0(i)), t += X0(i.toString(16));
  }
  return t;
}
oe.toHex32 = Cu;
function Z0(n) {
  return n.length === 1 ? "0" + n : n;
}
oe.zero2 = Z0;
function X0(n) {
  return n.length === 7 ? "0" + n : n.length === 6 ? "00" + n : n.length === 5 ? "000" + n : n.length === 4 ? "0000" + n : n.length === 3 ? "00000" + n : n.length === 2 ? "000000" + n : n.length === 1 ? "0000000" + n : n;
}
oe.zero8 = X0;
function Iu(n, e, t, r) {
  var i = t - e;
  Eu(i % 4 === 0);
  for (var s = new Array(i / 4), o = 0, a = e; o < s.length; o++, a += 4) {
    var l;
    r === "big" ? l = n[a] << 24 | n[a + 1] << 16 | n[a + 2] << 8 | n[a + 3] : l = n[a + 3] << 24 | n[a + 2] << 16 | n[a + 1] << 8 | n[a], s[o] = l >>> 0;
  }
  return s;
}
oe.join32 = Iu;
function Mu(n, e) {
  for (var t = new Array(n.length * 4), r = 0, i = 0; r < n.length; r++, i += 4) {
    var s = n[r];
    e === "big" ? (t[i] = s >>> 24, t[i + 1] = s >>> 16 & 255, t[i + 2] = s >>> 8 & 255, t[i + 3] = s & 255) : (t[i + 3] = s >>> 24, t[i + 2] = s >>> 16 & 255, t[i + 1] = s >>> 8 & 255, t[i] = s & 255);
  }
  return t;
}
oe.split32 = Mu;
function Nu(n, e) {
  return n >>> e | n << 32 - e;
}
oe.rotr32 = Nu;
function Tu(n, e) {
  return n << e | n >>> 32 - e;
}
oe.rotl32 = Tu;
function Ru(n, e) {
  return n + e >>> 0;
}
oe.sum32 = Ru;
function Bu(n, e, t) {
  return n + e + t >>> 0;
}
oe.sum32_3 = Bu;
function Ou(n, e, t, r) {
  return n + e + t + r >>> 0;
}
oe.sum32_4 = Ou;
function Fu(n, e, t, r, i) {
  return n + e + t + r + i >>> 0;
}
oe.sum32_5 = Fu;
function Du(n, e, t, r) {
  var i = n[e], s = n[e + 1], o = r + s >>> 0, a = (o < r ? 1 : 0) + t + i;
  n[e] = a >>> 0, n[e + 1] = o;
}
oe.sum64 = Du;
function Lu(n, e, t, r) {
  var i = e + r >>> 0, s = (i < e ? 1 : 0) + n + t;
  return s >>> 0;
}
oe.sum64_hi = Lu;
function Uu(n, e, t, r) {
  var i = e + r;
  return i >>> 0;
}
oe.sum64_lo = Uu;
function Ku(n, e, t, r, i, s, o, a) {
  var l = 0, h = e;
  h = h + r >>> 0, l += h < e ? 1 : 0, h = h + s >>> 0, l += h < s ? 1 : 0, h = h + a >>> 0, l += h < a ? 1 : 0;
  var x = n + t + i + o + l;
  return x >>> 0;
}
oe.sum64_4_hi = Ku;
function Hu(n, e, t, r, i, s, o, a) {
  var l = e + r + s + a;
  return l >>> 0;
}
oe.sum64_4_lo = Hu;
function Gu(n, e, t, r, i, s, o, a, l, h) {
  var x = 0, b = e;
  b = b + r >>> 0, x += b < e ? 1 : 0, b = b + s >>> 0, x += b < s ? 1 : 0, b = b + a >>> 0, x += b < a ? 1 : 0, b = b + h >>> 0, x += b < h ? 1 : 0;
  var E = n + t + i + o + l + x;
  return E >>> 0;
}
oe.sum64_5_hi = Gu;
function qu(n, e, t, r, i, s, o, a, l, h) {
  var x = e + r + s + a + h;
  return x >>> 0;
}
oe.sum64_5_lo = qu;
function zu(n, e, t) {
  var r = e << 32 - t | n >>> t;
  return r >>> 0;
}
oe.rotr64_hi = zu;
function ju(n, e, t) {
  var r = n << 32 - t | e >>> t;
  return r >>> 0;
}
oe.rotr64_lo = ju;
function Wu(n, e, t) {
  return n >>> t;
}
oe.shr64_hi = Wu;
function Ju(n, e, t) {
  var r = n << 32 - t | e >>> t;
  return r >>> 0;
}
oe.shr64_lo = Ju;
var Pn = {}, ma = oe, Vu = li;
function Qi() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
Pn.BlockHash = Qi;
Qi.prototype.update = function(e, t) {
  if (e = ma.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
    e = this.pending;
    var r = e.length % this._delta8;
    this.pending = e.slice(e.length - r, e.length), this.pending.length === 0 && (this.pending = null), e = ma.join32(e, 0, e.length - r, this.endian);
    for (var i = 0; i < e.length; i += this._delta32)
      this._update(e, i, i + this._delta32);
  }
  return this;
};
Qi.prototype.digest = function(e) {
  return this.update(this._pad()), Vu(this.pending === null), this._digest(e);
};
Qi.prototype._pad = function() {
  var e = this.pendingTotal, t = this._delta8, r = t - (e + this.padLength) % t, i = new Array(r + this.padLength);
  i[0] = 128;
  for (var s = 1; s < r; s++)
    i[s] = 0;
  if (e <<= 3, this.endian === "big") {
    for (var o = 8; o < this.padLength; o++)
      i[s++] = 0;
    i[s++] = 0, i[s++] = 0, i[s++] = 0, i[s++] = 0, i[s++] = e >>> 24 & 255, i[s++] = e >>> 16 & 255, i[s++] = e >>> 8 & 255, i[s++] = e & 255;
  } else
    for (i[s++] = e & 255, i[s++] = e >>> 8 & 255, i[s++] = e >>> 16 & 255, i[s++] = e >>> 24 & 255, i[s++] = 0, i[s++] = 0, i[s++] = 0, i[s++] = 0, o = 8; o < this.padLength; o++)
      i[s++] = 0;
  return i;
};
var Cn = {}, tr = {}, $u = oe, Jt = $u.rotr32;
function Yu(n, e, t, r) {
  if (n === 0)
    return ef(e, t, r);
  if (n === 1 || n === 3)
    return rf(e, t, r);
  if (n === 2)
    return tf(e, t, r);
}
tr.ft_1 = Yu;
function ef(n, e, t) {
  return n & e ^ ~n & t;
}
tr.ch32 = ef;
function tf(n, e, t) {
  return n & e ^ n & t ^ e & t;
}
tr.maj32 = tf;
function rf(n, e, t) {
  return n ^ e ^ t;
}
tr.p32 = rf;
function Qu(n) {
  return Jt(n, 2) ^ Jt(n, 13) ^ Jt(n, 22);
}
tr.s0_256 = Qu;
function Zu(n) {
  return Jt(n, 6) ^ Jt(n, 11) ^ Jt(n, 25);
}
tr.s1_256 = Zu;
function Xu(n) {
  return Jt(n, 7) ^ Jt(n, 18) ^ n >>> 3;
}
tr.g0_256 = Xu;
function eh(n) {
  return Jt(n, 17) ^ Jt(n, 19) ^ n >>> 10;
}
tr.g1_256 = eh;
var wn = oe, th = Pn, rh = tr, Cs = wn.rotl32, Bn = wn.sum32, nh = wn.sum32_5, ih = rh.ft_1, nf = th.BlockHash, sh = [
  1518500249,
  1859775393,
  2400959708,
  3395469782
];
function Zt() {
  if (!(this instanceof Zt))
    return new Zt();
  nf.call(this), this.h = [
    1732584193,
    4023233417,
    2562383102,
    271733878,
    3285377520
  ], this.W = new Array(80);
}
wn.inherits(Zt, nf);
var oh = Zt;
Zt.blockSize = 512;
Zt.outSize = 160;
Zt.hmacStrength = 80;
Zt.padLength = 64;
Zt.prototype._update = function(e, t) {
  for (var r = this.W, i = 0; i < 16; i++)
    r[i] = e[t + i];
  for (; i < r.length; i++)
    r[i] = Cs(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
  var s = this.h[0], o = this.h[1], a = this.h[2], l = this.h[3], h = this.h[4];
  for (i = 0; i < r.length; i++) {
    var x = ~~(i / 20), b = nh(Cs(s, 5), ih(x, o, a, l), h, r[i], sh[x]);
    h = l, l = a, a = Cs(o, 30), o = s, s = b;
  }
  this.h[0] = Bn(this.h[0], s), this.h[1] = Bn(this.h[1], o), this.h[2] = Bn(this.h[2], a), this.h[3] = Bn(this.h[3], l), this.h[4] = Bn(this.h[4], h);
};
Zt.prototype._digest = function(e) {
  return e === "hex" ? wn.toHex32(this.h, "big") : wn.split32(this.h, "big");
};
var An = oe, ah = Pn, In = tr, fh = li, Bt = An.sum32, ch = An.sum32_4, lh = An.sum32_5, uh = In.ch32, hh = In.maj32, dh = In.s0_256, xh = In.s1_256, ph = In.g0_256, bh = In.g1_256, sf = ah.BlockHash, gh = [
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
];
function Xt() {
  if (!(this instanceof Xt))
    return new Xt();
  sf.call(this), this.h = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ], this.k = gh, this.W = new Array(64);
}
An.inherits(Xt, sf);
var of = Xt;
Xt.blockSize = 512;
Xt.outSize = 256;
Xt.hmacStrength = 192;
Xt.padLength = 64;
Xt.prototype._update = function(e, t) {
  for (var r = this.W, i = 0; i < 16; i++)
    r[i] = e[t + i];
  for (; i < r.length; i++)
    r[i] = ch(bh(r[i - 2]), r[i - 7], ph(r[i - 15]), r[i - 16]);
  var s = this.h[0], o = this.h[1], a = this.h[2], l = this.h[3], h = this.h[4], x = this.h[5], b = this.h[6], E = this.h[7];
  for (fh(this.k.length === r.length), i = 0; i < r.length; i++) {
    var S = lh(E, xh(h), uh(h, x, b), this.k[i], r[i]), I = Bt(dh(s), hh(s, o, a));
    E = b, b = x, x = h, h = Bt(l, S), l = a, a = o, o = s, s = Bt(S, I);
  }
  this.h[0] = Bt(this.h[0], s), this.h[1] = Bt(this.h[1], o), this.h[2] = Bt(this.h[2], a), this.h[3] = Bt(this.h[3], l), this.h[4] = Bt(this.h[4], h), this.h[5] = Bt(this.h[5], x), this.h[6] = Bt(this.h[6], b), this.h[7] = Bt(this.h[7], E);
};
Xt.prototype._digest = function(e) {
  return e === "hex" ? An.toHex32(this.h, "big") : An.split32(this.h, "big");
};
var Qs = oe, af = of;
function ar() {
  if (!(this instanceof ar))
    return new ar();
  af.call(this), this.h = [
    3238371032,
    914150663,
    812702999,
    4144912697,
    4290775857,
    1750603025,
    1694076839,
    3204075428
  ];
}
Qs.inherits(ar, af);
var mh = ar;
ar.blockSize = 512;
ar.outSize = 224;
ar.hmacStrength = 192;
ar.padLength = 64;
ar.prototype._digest = function(e) {
  return e === "hex" ? Qs.toHex32(this.h.slice(0, 7), "big") : Qs.split32(this.h.slice(0, 7), "big");
};
var Et = oe, vh = Pn, yh = li, Vt = Et.rotr64_hi, $t = Et.rotr64_lo, ff = Et.shr64_hi, cf = Et.shr64_lo, gr = Et.sum64, Is = Et.sum64_hi, Ms = Et.sum64_lo, wh = Et.sum64_4_hi, Ah = Et.sum64_4_lo, Eh = Et.sum64_5_hi, _h = Et.sum64_5_lo, lf = vh.BlockHash, Sh = [
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
];
function Ut() {
  if (!(this instanceof Ut))
    return new Ut();
  lf.call(this), this.h = [
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ], this.k = Sh, this.W = new Array(160);
}
Et.inherits(Ut, lf);
var uf = Ut;
Ut.blockSize = 1024;
Ut.outSize = 512;
Ut.hmacStrength = 192;
Ut.padLength = 128;
Ut.prototype._prepareBlock = function(e, t) {
  for (var r = this.W, i = 0; i < 32; i++)
    r[i] = e[t + i];
  for (; i < r.length; i += 2) {
    var s = Fh(r[i - 4], r[i - 3]), o = Dh(r[i - 4], r[i - 3]), a = r[i - 14], l = r[i - 13], h = Bh(r[i - 30], r[i - 29]), x = Oh(r[i - 30], r[i - 29]), b = r[i - 32], E = r[i - 31];
    r[i] = wh(
      s,
      o,
      a,
      l,
      h,
      x,
      b,
      E
    ), r[i + 1] = Ah(
      s,
      o,
      a,
      l,
      h,
      x,
      b,
      E
    );
  }
};
Ut.prototype._update = function(e, t) {
  this._prepareBlock(e, t);
  var r = this.W, i = this.h[0], s = this.h[1], o = this.h[2], a = this.h[3], l = this.h[4], h = this.h[5], x = this.h[6], b = this.h[7], E = this.h[8], S = this.h[9], I = this.h[10], C = this.h[11], y = this.h[12], T = this.h[13], D = this.h[14], U = this.h[15];
  yh(this.k.length === r.length);
  for (var z = 0; z < r.length; z += 2) {
    var L = D, W = U, Z = Th(E, S), Y = Rh(E, S), ne = kh(E, S, I, C, y), fe = Ph(E, S, I, C, y, T), Q = this.k[z], pe = this.k[z + 1], w = r[z], f = r[z + 1], d = Eh(
      L,
      W,
      Z,
      Y,
      ne,
      fe,
      Q,
      pe,
      w,
      f
    ), g = _h(
      L,
      W,
      Z,
      Y,
      ne,
      fe,
      Q,
      pe,
      w,
      f
    );
    L = Mh(i, s), W = Nh(i, s), Z = Ch(i, s, o, a, l), Y = Ih(i, s, o, a, l, h);
    var v = Is(L, W, Z, Y), A = Ms(L, W, Z, Y);
    D = y, U = T, y = I, T = C, I = E, C = S, E = Is(x, b, d, g), S = Ms(b, b, d, g), x = l, b = h, l = o, h = a, o = i, a = s, i = Is(d, g, v, A), s = Ms(d, g, v, A);
  }
  gr(this.h, 0, i, s), gr(this.h, 2, o, a), gr(this.h, 4, l, h), gr(this.h, 6, x, b), gr(this.h, 8, E, S), gr(this.h, 10, I, C), gr(this.h, 12, y, T), gr(this.h, 14, D, U);
};
Ut.prototype._digest = function(e) {
  return e === "hex" ? Et.toHex32(this.h, "big") : Et.split32(this.h, "big");
};
function kh(n, e, t, r, i) {
  var s = n & t ^ ~n & i;
  return s < 0 && (s += 4294967296), s;
}
function Ph(n, e, t, r, i, s) {
  var o = e & r ^ ~e & s;
  return o < 0 && (o += 4294967296), o;
}
function Ch(n, e, t, r, i) {
  var s = n & t ^ n & i ^ t & i;
  return s < 0 && (s += 4294967296), s;
}
function Ih(n, e, t, r, i, s) {
  var o = e & r ^ e & s ^ r & s;
  return o < 0 && (o += 4294967296), o;
}
function Mh(n, e) {
  var t = Vt(n, e, 28), r = Vt(e, n, 2), i = Vt(e, n, 7), s = t ^ r ^ i;
  return s < 0 && (s += 4294967296), s;
}
function Nh(n, e) {
  var t = $t(n, e, 28), r = $t(e, n, 2), i = $t(e, n, 7), s = t ^ r ^ i;
  return s < 0 && (s += 4294967296), s;
}
function Th(n, e) {
  var t = Vt(n, e, 14), r = Vt(n, e, 18), i = Vt(e, n, 9), s = t ^ r ^ i;
  return s < 0 && (s += 4294967296), s;
}
function Rh(n, e) {
  var t = $t(n, e, 14), r = $t(n, e, 18), i = $t(e, n, 9), s = t ^ r ^ i;
  return s < 0 && (s += 4294967296), s;
}
function Bh(n, e) {
  var t = Vt(n, e, 1), r = Vt(n, e, 8), i = ff(n, e, 7), s = t ^ r ^ i;
  return s < 0 && (s += 4294967296), s;
}
function Oh(n, e) {
  var t = $t(n, e, 1), r = $t(n, e, 8), i = cf(n, e, 7), s = t ^ r ^ i;
  return s < 0 && (s += 4294967296), s;
}
function Fh(n, e) {
  var t = Vt(n, e, 19), r = Vt(e, n, 29), i = ff(n, e, 6), s = t ^ r ^ i;
  return s < 0 && (s += 4294967296), s;
}
function Dh(n, e) {
  var t = $t(n, e, 19), r = $t(e, n, 29), i = cf(n, e, 6), s = t ^ r ^ i;
  return s < 0 && (s += 4294967296), s;
}
var Zs = oe, hf = uf;
function fr() {
  if (!(this instanceof fr))
    return new fr();
  hf.call(this), this.h = [
    3418070365,
    3238371032,
    1654270250,
    914150663,
    2438529370,
    812702999,
    355462360,
    4144912697,
    1731405415,
    4290775857,
    2394180231,
    1750603025,
    3675008525,
    1694076839,
    1203062813,
    3204075428
  ];
}
Zs.inherits(fr, hf);
var Lh = fr;
fr.blockSize = 1024;
fr.outSize = 384;
fr.hmacStrength = 192;
fr.padLength = 128;
fr.prototype._digest = function(e) {
  return e === "hex" ? Zs.toHex32(this.h.slice(0, 12), "big") : Zs.split32(this.h.slice(0, 12), "big");
};
Cn.sha1 = oh;
Cn.sha224 = mh;
Cn.sha256 = of;
Cn.sha384 = Lh;
Cn.sha512 = uf;
var df = {}, Xr = oe, Uh = Pn, pi = Xr.rotl32, va = Xr.sum32, On = Xr.sum32_3, ya = Xr.sum32_4, xf = Uh.BlockHash;
function er() {
  if (!(this instanceof er))
    return new er();
  xf.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
Xr.inherits(er, xf);
df.ripemd160 = er;
er.blockSize = 512;
er.outSize = 160;
er.hmacStrength = 192;
er.padLength = 64;
er.prototype._update = function(e, t) {
  for (var r = this.h[0], i = this.h[1], s = this.h[2], o = this.h[3], a = this.h[4], l = r, h = i, x = s, b = o, E = a, S = 0; S < 80; S++) {
    var I = va(
      pi(
        ya(r, wa(S, i, s, o), e[Gh[S] + t], Kh(S)),
        zh[S]
      ),
      a
    );
    r = a, a = o, o = pi(s, 10), s = i, i = I, I = va(
      pi(
        ya(l, wa(79 - S, h, x, b), e[qh[S] + t], Hh(S)),
        jh[S]
      ),
      E
    ), l = E, E = b, b = pi(x, 10), x = h, h = I;
  }
  I = On(this.h[1], s, b), this.h[1] = On(this.h[2], o, E), this.h[2] = On(this.h[3], a, l), this.h[3] = On(this.h[4], r, h), this.h[4] = On(this.h[0], i, x), this.h[0] = I;
};
er.prototype._digest = function(e) {
  return e === "hex" ? Xr.toHex32(this.h, "little") : Xr.split32(this.h, "little");
};
function wa(n, e, t, r) {
  return n <= 15 ? e ^ t ^ r : n <= 31 ? e & t | ~e & r : n <= 47 ? (e | ~t) ^ r : n <= 63 ? e & r | t & ~r : e ^ (t | ~r);
}
function Kh(n) {
  return n <= 15 ? 0 : n <= 31 ? 1518500249 : n <= 47 ? 1859775393 : n <= 63 ? 2400959708 : 2840853838;
}
function Hh(n) {
  return n <= 15 ? 1352829926 : n <= 31 ? 1548603684 : n <= 47 ? 1836072691 : n <= 63 ? 2053994217 : 0;
}
var Gh = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  7,
  4,
  13,
  1,
  10,
  6,
  15,
  3,
  12,
  0,
  9,
  5,
  2,
  14,
  11,
  8,
  3,
  10,
  14,
  4,
  9,
  15,
  8,
  1,
  2,
  7,
  0,
  6,
  13,
  11,
  5,
  12,
  1,
  9,
  11,
  10,
  0,
  8,
  12,
  4,
  13,
  3,
  7,
  15,
  14,
  5,
  6,
  2,
  4,
  0,
  5,
  9,
  7,
  12,
  2,
  10,
  14,
  1,
  3,
  8,
  11,
  6,
  15,
  13
], qh = [
  5,
  14,
  7,
  0,
  9,
  2,
  11,
  4,
  13,
  6,
  15,
  8,
  1,
  10,
  3,
  12,
  6,
  11,
  3,
  7,
  0,
  13,
  5,
  10,
  14,
  15,
  8,
  12,
  4,
  9,
  1,
  2,
  15,
  5,
  1,
  3,
  7,
  14,
  6,
  9,
  11,
  8,
  12,
  2,
  10,
  0,
  4,
  13,
  8,
  6,
  4,
  1,
  3,
  11,
  15,
  0,
  5,
  12,
  2,
  13,
  9,
  7,
  10,
  14,
  12,
  15,
  10,
  4,
  1,
  5,
  8,
  7,
  6,
  2,
  13,
  14,
  0,
  3,
  9,
  11
], zh = [
  11,
  14,
  15,
  12,
  5,
  8,
  7,
  9,
  11,
  13,
  14,
  15,
  6,
  7,
  9,
  8,
  7,
  6,
  8,
  13,
  11,
  9,
  7,
  15,
  7,
  12,
  15,
  9,
  11,
  7,
  13,
  12,
  11,
  13,
  6,
  7,
  14,
  9,
  13,
  15,
  14,
  8,
  13,
  6,
  5,
  12,
  7,
  5,
  11,
  12,
  14,
  15,
  14,
  15,
  9,
  8,
  9,
  14,
  5,
  6,
  8,
  6,
  5,
  12,
  9,
  15,
  5,
  11,
  6,
  8,
  13,
  12,
  5,
  12,
  13,
  14,
  11,
  8,
  5,
  6
], jh = [
  8,
  9,
  9,
  11,
  13,
  15,
  15,
  5,
  7,
  7,
  8,
  11,
  14,
  14,
  12,
  6,
  9,
  13,
  15,
  7,
  12,
  8,
  9,
  11,
  7,
  7,
  12,
  7,
  6,
  15,
  13,
  11,
  9,
  7,
  15,
  11,
  8,
  6,
  6,
  14,
  12,
  13,
  5,
  14,
  13,
  13,
  7,
  5,
  15,
  5,
  8,
  11,
  14,
  14,
  6,
  14,
  6,
  9,
  12,
  9,
  12,
  5,
  15,
  8,
  8,
  5,
  12,
  9,
  12,
  5,
  14,
  6,
  8,
  13,
  6,
  5,
  15,
  13,
  11,
  11
], Wh = oe, Jh = li;
function En(n, e, t) {
  if (!(this instanceof En))
    return new En(n, e, t);
  this.Hash = n, this.blockSize = n.blockSize / 8, this.outSize = n.outSize / 8, this.inner = null, this.outer = null, this._init(Wh.toArray(e, t));
}
var Vh = En;
En.prototype._init = function(e) {
  e.length > this.blockSize && (e = new this.Hash().update(e).digest()), Jh(e.length <= this.blockSize);
  for (var t = e.length; t < this.blockSize; t++)
    e.push(0);
  for (t = 0; t < e.length; t++)
    e[t] ^= 54;
  for (this.inner = new this.Hash().update(e), t = 0; t < e.length; t++)
    e[t] ^= 106;
  this.outer = new this.Hash().update(e);
};
En.prototype.update = function(e, t) {
  return this.inner.update(e, t), this;
};
En.prototype.digest = function(e) {
  return this.outer.update(this.inner.digest()), this.outer.digest(e);
};
(function(n) {
  var e = n;
  e.utils = oe, e.common = Pn, e.sha = Cn, e.ripemd = df, e.hmac = Vh, e.sha1 = e.sha.sha1, e.sha256 = e.sha.sha256, e.sha224 = e.sha.sha224, e.sha384 = e.sha.sha384, e.sha512 = e.sha.sha512, e.ripemd160 = e.ripemd.ripemd160;
})($0);
const yt = /* @__PURE__ */ en($0);
function Mn(n, e, t) {
  return t = {
    path: e,
    exports: {},
    require: function(r, i) {
      return $h(r, i ?? t.path);
    }
  }, n(t, t.exports), t.exports;
}
function $h() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var ko = pf;
function pf(n, e) {
  if (!n)
    throw new Error(e || "Assertion failed");
}
pf.equal = function(e, t, r) {
  if (e != t)
    throw new Error(r || "Assertion failed: " + e + " != " + t);
};
var Lt = Mn(function(n, e) {
  var t = e;
  function r(o, a) {
    if (Array.isArray(o))
      return o.slice();
    if (!o)
      return [];
    var l = [];
    if (typeof o != "string") {
      for (var h = 0; h < o.length; h++)
        l[h] = o[h] | 0;
      return l;
    }
    if (a === "hex") {
      o = o.replace(/[^a-z0-9]+/ig, ""), o.length % 2 !== 0 && (o = "0" + o);
      for (var h = 0; h < o.length; h += 2)
        l.push(parseInt(o[h] + o[h + 1], 16));
    } else
      for (var h = 0; h < o.length; h++) {
        var x = o.charCodeAt(h), b = x >> 8, E = x & 255;
        b ? l.push(b, E) : l.push(E);
      }
    return l;
  }
  t.toArray = r;
  function i(o) {
    return o.length === 1 ? "0" + o : o;
  }
  t.zero2 = i;
  function s(o) {
    for (var a = "", l = 0; l < o.length; l++)
      a += i(o[l].toString(16));
    return a;
  }
  t.toHex = s, t.encode = function(a, l) {
    return l === "hex" ? s(a) : a;
  };
}), kt = Mn(function(n, e) {
  var t = e;
  t.assert = ko, t.toArray = Lt.toArray, t.zero2 = Lt.zero2, t.toHex = Lt.toHex, t.encode = Lt.encode;
  function r(l, h, x) {
    var b = new Array(Math.max(l.bitLength(), x) + 1);
    b.fill(0);
    for (var E = 1 << h + 1, S = l.clone(), I = 0; I < b.length; I++) {
      var C, y = S.andln(E - 1);
      S.isOdd() ? (y > (E >> 1) - 1 ? C = (E >> 1) - y : C = y, S.isubn(C)) : C = 0, b[I] = C, S.iushrn(1);
    }
    return b;
  }
  t.getNAF = r;
  function i(l, h) {
    var x = [
      [],
      []
    ];
    l = l.clone(), h = h.clone();
    for (var b = 0, E = 0, S; l.cmpn(-b) > 0 || h.cmpn(-E) > 0; ) {
      var I = l.andln(3) + b & 3, C = h.andln(3) + E & 3;
      I === 3 && (I = -1), C === 3 && (C = -1);
      var y;
      I & 1 ? (S = l.andln(7) + b & 7, (S === 3 || S === 5) && C === 2 ? y = -I : y = I) : y = 0, x[0].push(y);
      var T;
      C & 1 ? (S = h.andln(7) + E & 7, (S === 3 || S === 5) && I === 2 ? T = -C : T = C) : T = 0, x[1].push(T), 2 * b === y + 1 && (b = 1 - b), 2 * E === T + 1 && (E = 1 - E), l.iushrn(1), h.iushrn(1);
    }
    return x;
  }
  t.getJSF = i;
  function s(l, h, x) {
    var b = "_" + h;
    l.prototype[h] = function() {
      return this[b] !== void 0 ? this[b] : this[b] = x.call(this);
    };
  }
  t.cachedProperty = s;
  function o(l) {
    return typeof l == "string" ? t.toArray(l, "hex") : l;
  }
  t.parseBytes = o;
  function a(l) {
    return new te(l, "hex", "le");
  }
  t.intFromLE = a;
}), Ki = kt.getNAF, Yh = kt.getJSF, Hi = kt.assert;
function Cr(n, e) {
  this.type = n, this.p = new te(e.p, 16), this.red = e.prime ? te.red(e.prime) : te.mont(this.p), this.zero = new te(0).toRed(this.red), this.one = new te(1).toRed(this.red), this.two = new te(2).toRed(this.red), this.n = e.n && new te(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var t = this.n && this.p.div(this.n);
  !t || t.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
}
var on = Cr;
Cr.prototype.point = function() {
  throw new Error("Not implemented");
};
Cr.prototype.validate = function() {
  throw new Error("Not implemented");
};
Cr.prototype._fixedNafMul = function(e, t) {
  Hi(e.precomputed);
  var r = e._getDoubles(), i = Ki(t, 1, this._bitLength), s = (1 << r.step + 1) - (r.step % 2 === 0 ? 2 : 1);
  s /= 3;
  var o = [], a, l;
  for (a = 0; a < i.length; a += r.step) {
    l = 0;
    for (var h = a + r.step - 1; h >= a; h--)
      l = (l << 1) + i[h];
    o.push(l);
  }
  for (var x = this.jpoint(null, null, null), b = this.jpoint(null, null, null), E = s; E > 0; E--) {
    for (a = 0; a < o.length; a++)
      l = o[a], l === E ? b = b.mixedAdd(r.points[a]) : l === -E && (b = b.mixedAdd(r.points[a].neg()));
    x = x.add(b);
  }
  return x.toP();
};
Cr.prototype._wnafMul = function(e, t) {
  var r = 4, i = e._getNAFPoints(r);
  r = i.wnd;
  for (var s = i.points, o = Ki(t, r, this._bitLength), a = this.jpoint(null, null, null), l = o.length - 1; l >= 0; l--) {
    for (var h = 0; l >= 0 && o[l] === 0; l--)
      h++;
    if (l >= 0 && h++, a = a.dblp(h), l < 0)
      break;
    var x = o[l];
    Hi(x !== 0), e.type === "affine" ? x > 0 ? a = a.mixedAdd(s[x - 1 >> 1]) : a = a.mixedAdd(s[-x - 1 >> 1].neg()) : x > 0 ? a = a.add(s[x - 1 >> 1]) : a = a.add(s[-x - 1 >> 1].neg());
  }
  return e.type === "affine" ? a.toP() : a;
};
Cr.prototype._wnafMulAdd = function(e, t, r, i, s) {
  var o = this._wnafT1, a = this._wnafT2, l = this._wnafT3, h = 0, x, b, E;
  for (x = 0; x < i; x++) {
    E = t[x];
    var S = E._getNAFPoints(e);
    o[x] = S.wnd, a[x] = S.points;
  }
  for (x = i - 1; x >= 1; x -= 2) {
    var I = x - 1, C = x;
    if (o[I] !== 1 || o[C] !== 1) {
      l[I] = Ki(r[I], o[I], this._bitLength), l[C] = Ki(r[C], o[C], this._bitLength), h = Math.max(l[I].length, h), h = Math.max(l[C].length, h);
      continue;
    }
    var y = [
      t[I],
      /* 1 */
      null,
      /* 3 */
      null,
      /* 5 */
      t[C]
      /* 7 */
    ];
    t[I].y.cmp(t[C].y) === 0 ? (y[1] = t[I].add(t[C]), y[2] = t[I].toJ().mixedAdd(t[C].neg())) : t[I].y.cmp(t[C].y.redNeg()) === 0 ? (y[1] = t[I].toJ().mixedAdd(t[C]), y[2] = t[I].add(t[C].neg())) : (y[1] = t[I].toJ().mixedAdd(t[C]), y[2] = t[I].toJ().mixedAdd(t[C].neg()));
    var T = [
      -3,
      /* -1 -1 */
      -1,
      /* -1 0 */
      -5,
      /* -1 1 */
      -7,
      /* 0 -1 */
      0,
      /* 0 0 */
      7,
      /* 0 1 */
      5,
      /* 1 -1 */
      1,
      /* 1 0 */
      3
      /* 1 1 */
    ], D = Yh(r[I], r[C]);
    for (h = Math.max(D[0].length, h), l[I] = new Array(h), l[C] = new Array(h), b = 0; b < h; b++) {
      var U = D[0][b] | 0, z = D[1][b] | 0;
      l[I][b] = T[(U + 1) * 3 + (z + 1)], l[C][b] = 0, a[I] = y;
    }
  }
  var L = this.jpoint(null, null, null), W = this._wnafT4;
  for (x = h; x >= 0; x--) {
    for (var Z = 0; x >= 0; ) {
      var Y = !0;
      for (b = 0; b < i; b++)
        W[b] = l[b][x] | 0, W[b] !== 0 && (Y = !1);
      if (!Y)
        break;
      Z++, x--;
    }
    if (x >= 0 && Z++, L = L.dblp(Z), x < 0)
      break;
    for (b = 0; b < i; b++) {
      var ne = W[b];
      ne !== 0 && (ne > 0 ? E = a[b][ne - 1 >> 1] : ne < 0 && (E = a[b][-ne - 1 >> 1].neg()), E.type === "affine" ? L = L.mixedAdd(E) : L = L.add(E));
    }
  }
  for (x = 0; x < i; x++)
    a[x] = null;
  return s ? L : L.toP();
};
function Nt(n, e) {
  this.curve = n, this.type = e, this.precomputed = null;
}
Cr.BasePoint = Nt;
Nt.prototype.eq = function() {
  throw new Error("Not implemented");
};
Nt.prototype.validate = function() {
  return this.curve.validate(this);
};
Cr.prototype.decodePoint = function(e, t) {
  e = kt.toArray(e, t);
  var r = this.p.byteLength();
  if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e.length - 1 === 2 * r) {
    e[0] === 6 ? Hi(e[e.length - 1] % 2 === 0) : e[0] === 7 && Hi(e[e.length - 1] % 2 === 1);
    var i = this.point(
      e.slice(1, 1 + r),
      e.slice(1 + r, 1 + 2 * r)
    );
    return i;
  } else if ((e[0] === 2 || e[0] === 3) && e.length - 1 === r)
    return this.pointFromX(e.slice(1, 1 + r), e[0] === 3);
  throw new Error("Unknown point format");
};
Nt.prototype.encodeCompressed = function(e) {
  return this.encode(e, !0);
};
Nt.prototype._encode = function(e) {
  var t = this.curve.p.byteLength(), r = this.getX().toArray("be", t);
  return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t));
};
Nt.prototype.encode = function(e, t) {
  return kt.encode(this._encode(t), e);
};
Nt.prototype.precompute = function(e) {
  if (this.precomputed)
    return this;
  var t = {
    doubles: null,
    naf: null,
    beta: null
  };
  return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this;
};
Nt.prototype._hasDoubles = function(e) {
  if (!this.precomputed)
    return !1;
  var t = this.precomputed.doubles;
  return t ? t.points.length >= Math.ceil((e.bitLength() + 1) / t.step) : !1;
};
Nt.prototype._getDoubles = function(e, t) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  for (var r = [this], i = this, s = 0; s < t; s += e) {
    for (var o = 0; o < e; o++)
      i = i.dbl();
    r.push(i);
  }
  return {
    step: e,
    points: r
  };
};
Nt.prototype._getNAFPoints = function(e) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;
  for (var t = [this], r = (1 << e) - 1, i = r === 1 ? null : this.dbl(), s = 1; s < r; s++)
    t[s] = t[s - 1].add(i);
  return {
    wnd: e,
    points: t
  };
};
Nt.prototype._getBeta = function() {
  return null;
};
Nt.prototype.dblp = function(e) {
  for (var t = this, r = 0; r < e; r++)
    t = t.dbl();
  return t;
};
var Po = Mn(function(n) {
  typeof Object.create == "function" ? n.exports = function(t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : n.exports = function(t, r) {
    if (r) {
      t.super_ = r;
      var i = function() {
      };
      i.prototype = r.prototype, t.prototype = new i(), t.prototype.constructor = t;
    }
  };
}), Qh = kt.assert;
function Tt(n) {
  on.call(this, "short", n), this.a = new te(n.a, 16).toRed(this.red), this.b = new te(n.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(n), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
Po(Tt, on);
var Zh = Tt;
Tt.prototype._getEndomorphism = function(e) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var t, r;
    if (e.beta)
      t = new te(e.beta, 16).toRed(this.red);
    else {
      var i = this._getEndoRoots(this.p);
      t = i[0].cmp(i[1]) < 0 ? i[0] : i[1], t = t.toRed(this.red);
    }
    if (e.lambda)
      r = new te(e.lambda, 16);
    else {
      var s = this._getEndoRoots(this.n);
      this.g.mul(s[0]).x.cmp(this.g.x.redMul(t)) === 0 ? r = s[0] : (r = s[1], Qh(this.g.mul(r).x.cmp(this.g.x.redMul(t)) === 0));
    }
    var o;
    return e.basis ? o = e.basis.map(function(a) {
      return {
        a: new te(a.a, 16),
        b: new te(a.b, 16)
      };
    }) : o = this._getEndoBasis(r), {
      beta: t,
      lambda: r,
      basis: o
    };
  }
};
Tt.prototype._getEndoRoots = function(e) {
  var t = e === this.p ? this.red : te.mont(e), r = new te(2).toRed(t).redInvm(), i = r.redNeg(), s = new te(3).toRed(t).redNeg().redSqrt().redMul(r), o = i.redAdd(s).fromRed(), a = i.redSub(s).fromRed();
  return [o, a];
};
Tt.prototype._getEndoBasis = function(e) {
  for (var t = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), r = e, i = this.n.clone(), s = new te(1), o = new te(0), a = new te(0), l = new te(1), h, x, b, E, S, I, C, y = 0, T, D; r.cmpn(0) !== 0; ) {
    var U = i.div(r);
    T = i.sub(U.mul(r)), D = a.sub(U.mul(s));
    var z = l.sub(U.mul(o));
    if (!b && T.cmp(t) < 0)
      h = C.neg(), x = s, b = T.neg(), E = D;
    else if (b && ++y === 2)
      break;
    C = T, i = r, r = T, a = s, s = D, l = o, o = z;
  }
  S = T.neg(), I = D;
  var L = b.sqr().add(E.sqr()), W = S.sqr().add(I.sqr());
  return W.cmp(L) >= 0 && (S = h, I = x), b.negative && (b = b.neg(), E = E.neg()), S.negative && (S = S.neg(), I = I.neg()), [
    { a: b, b: E },
    { a: S, b: I }
  ];
};
Tt.prototype._endoSplit = function(e) {
  var t = this.endo.basis, r = t[0], i = t[1], s = i.b.mul(e).divRound(this.n), o = r.b.neg().mul(e).divRound(this.n), a = s.mul(r.a), l = o.mul(i.a), h = s.mul(r.b), x = o.mul(i.b), b = e.sub(a).sub(l), E = h.add(x).neg();
  return { k1: b, k2: E };
};
Tt.prototype.pointFromX = function(e, t) {
  e = new te(e, 16), e.red || (e = e.toRed(this.red));
  var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b), i = r.redSqrt();
  if (i.redSqr().redSub(r).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var s = i.fromRed().isOdd();
  return (t && !s || !t && s) && (i = i.redNeg()), this.point(e, i);
};
Tt.prototype.validate = function(e) {
  if (e.inf)
    return !0;
  var t = e.x, r = e.y, i = this.a.redMul(t), s = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
  return r.redSqr().redISub(s).cmpn(0) === 0;
};
Tt.prototype._endoWnafMulAdd = function(e, t, r) {
  for (var i = this._endoWnafT1, s = this._endoWnafT2, o = 0; o < e.length; o++) {
    var a = this._endoSplit(t[o]), l = e[o], h = l._getBeta();
    a.k1.negative && (a.k1.ineg(), l = l.neg(!0)), a.k2.negative && (a.k2.ineg(), h = h.neg(!0)), i[o * 2] = l, i[o * 2 + 1] = h, s[o * 2] = a.k1, s[o * 2 + 1] = a.k2;
  }
  for (var x = this._wnafMulAdd(1, i, s, o * 2, r), b = 0; b < o * 2; b++)
    i[b] = null, s[b] = null;
  return x;
};
function ft(n, e, t, r) {
  on.BasePoint.call(this, n, "affine"), e === null && t === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new te(e, 16), this.y = new te(t, 16), r && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
}
Po(ft, on.BasePoint);
Tt.prototype.point = function(e, t, r) {
  return new ft(this, e, t, r);
};
Tt.prototype.pointFromJSON = function(e, t) {
  return ft.fromJSON(this, e, t);
};
ft.prototype._getBeta = function() {
  if (this.curve.endo) {
    var e = this.precomputed;
    if (e && e.beta)
      return e.beta;
    var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (e) {
      var r = this.curve, i = function(s) {
        return r.point(s.x.redMul(r.endo.beta), s.y);
      };
      e.beta = t, t.precomputed = {
        beta: null,
        naf: e.naf && {
          wnd: e.naf.wnd,
          points: e.naf.points.map(i)
        },
        doubles: e.doubles && {
          step: e.doubles.step,
          points: e.doubles.points.map(i)
        }
      };
    }
    return t;
  }
};
ft.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && {
    doubles: this.precomputed.doubles && {
      step: this.precomputed.doubles.step,
      points: this.precomputed.doubles.points.slice(1)
    },
    naf: this.precomputed.naf && {
      wnd: this.precomputed.naf.wnd,
      points: this.precomputed.naf.points.slice(1)
    }
  }] : [this.x, this.y];
};
ft.fromJSON = function(e, t, r) {
  typeof t == "string" && (t = JSON.parse(t));
  var i = e.point(t[0], t[1], r);
  if (!t[2])
    return i;
  function s(a) {
    return e.point(a[0], a[1], r);
  }
  var o = t[2];
  return i.precomputed = {
    beta: null,
    doubles: o.doubles && {
      step: o.doubles.step,
      points: [i].concat(o.doubles.points.map(s))
    },
    naf: o.naf && {
      wnd: o.naf.wnd,
      points: [i].concat(o.naf.points.map(s))
    }
  }, i;
};
ft.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
};
ft.prototype.isInfinity = function() {
  return this.inf;
};
ft.prototype.add = function(e) {
  if (this.inf)
    return e;
  if (e.inf)
    return this;
  if (this.eq(e))
    return this.dbl();
  if (this.neg().eq(e))
    return this.curve.point(null, null);
  if (this.x.cmp(e.x) === 0)
    return this.curve.point(null, null);
  var t = this.y.redSub(e.y);
  t.cmpn(0) !== 0 && (t = t.redMul(this.x.redSub(e.x).redInvm()));
  var r = t.redSqr().redISub(this.x).redISub(e.x), i = t.redMul(this.x.redSub(r)).redISub(this.y);
  return this.curve.point(r, i);
};
ft.prototype.dbl = function() {
  if (this.inf)
    return this;
  var e = this.y.redAdd(this.y);
  if (e.cmpn(0) === 0)
    return this.curve.point(null, null);
  var t = this.curve.a, r = this.x.redSqr(), i = e.redInvm(), s = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i), o = s.redSqr().redISub(this.x.redAdd(this.x)), a = s.redMul(this.x.redSub(o)).redISub(this.y);
  return this.curve.point(o, a);
};
ft.prototype.getX = function() {
  return this.x.fromRed();
};
ft.prototype.getY = function() {
  return this.y.fromRed();
};
ft.prototype.mul = function(e) {
  return e = new te(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e);
};
ft.prototype.mulAdd = function(e, t, r) {
  var i = [this, t], s = [e, r];
  return this.curve.endo ? this.curve._endoWnafMulAdd(i, s) : this.curve._wnafMulAdd(1, i, s, 2);
};
ft.prototype.jmulAdd = function(e, t, r) {
  var i = [this, t], s = [e, r];
  return this.curve.endo ? this.curve._endoWnafMulAdd(i, s, !0) : this.curve._wnafMulAdd(1, i, s, 2, !0);
};
ft.prototype.eq = function(e) {
  return this === e || this.inf === e.inf && (this.inf || this.x.cmp(e.x) === 0 && this.y.cmp(e.y) === 0);
};
ft.prototype.neg = function(e) {
  if (this.inf)
    return this;
  var t = this.curve.point(this.x, this.y.redNeg());
  if (e && this.precomputed) {
    var r = this.precomputed, i = function(s) {
      return s.neg();
    };
    t.precomputed = {
      naf: r.naf && {
        wnd: r.naf.wnd,
        points: r.naf.points.map(i)
      },
      doubles: r.doubles && {
        step: r.doubles.step,
        points: r.doubles.points.map(i)
      }
    };
  }
  return t;
};
ft.prototype.toJ = function() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);
  var e = this.curve.jpoint(this.x, this.y, this.curve.one);
  return e;
};
function ut(n, e, t, r) {
  on.BasePoint.call(this, n, "jacobian"), e === null && t === null && r === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new te(0)) : (this.x = new te(e, 16), this.y = new te(t, 16), this.z = new te(r, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
Po(ut, on.BasePoint);
Tt.prototype.jpoint = function(e, t, r) {
  return new ut(this, e, t, r);
};
ut.prototype.toP = function() {
  if (this.isInfinity())
    return this.curve.point(null, null);
  var e = this.z.redInvm(), t = e.redSqr(), r = this.x.redMul(t), i = this.y.redMul(t).redMul(e);
  return this.curve.point(r, i);
};
ut.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
ut.prototype.add = function(e) {
  if (this.isInfinity())
    return e;
  if (e.isInfinity())
    return this;
  var t = e.z.redSqr(), r = this.z.redSqr(), i = this.x.redMul(t), s = e.x.redMul(r), o = this.y.redMul(t.redMul(e.z)), a = e.y.redMul(r.redMul(this.z)), l = i.redSub(s), h = o.redSub(a);
  if (l.cmpn(0) === 0)
    return h.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var x = l.redSqr(), b = x.redMul(l), E = i.redMul(x), S = h.redSqr().redIAdd(b).redISub(E).redISub(E), I = h.redMul(E.redISub(S)).redISub(o.redMul(b)), C = this.z.redMul(e.z).redMul(l);
  return this.curve.jpoint(S, I, C);
};
ut.prototype.mixedAdd = function(e) {
  if (this.isInfinity())
    return e.toJ();
  if (e.isInfinity())
    return this;
  var t = this.z.redSqr(), r = this.x, i = e.x.redMul(t), s = this.y, o = e.y.redMul(t).redMul(this.z), a = r.redSub(i), l = s.redSub(o);
  if (a.cmpn(0) === 0)
    return l.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var h = a.redSqr(), x = h.redMul(a), b = r.redMul(h), E = l.redSqr().redIAdd(x).redISub(b).redISub(b), S = l.redMul(b.redISub(E)).redISub(s.redMul(x)), I = this.z.redMul(a);
  return this.curve.jpoint(E, S, I);
};
ut.prototype.dblp = function(e) {
  if (e === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!e)
    return this.dbl();
  var t;
  if (this.curve.zeroA || this.curve.threeA) {
    var r = this;
    for (t = 0; t < e; t++)
      r = r.dbl();
    return r;
  }
  var i = this.curve.a, s = this.curve.tinv, o = this.x, a = this.y, l = this.z, h = l.redSqr().redSqr(), x = a.redAdd(a);
  for (t = 0; t < e; t++) {
    var b = o.redSqr(), E = x.redSqr(), S = E.redSqr(), I = b.redAdd(b).redIAdd(b).redIAdd(i.redMul(h)), C = o.redMul(E), y = I.redSqr().redISub(C.redAdd(C)), T = C.redISub(y), D = I.redMul(T);
    D = D.redIAdd(D).redISub(S);
    var U = x.redMul(l);
    t + 1 < e && (h = h.redMul(S)), o = y, l = U, x = D;
  }
  return this.curve.jpoint(o, x.redMul(s), l);
};
ut.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
};
ut.prototype._zeroDbl = function() {
  var e, t, r;
  if (this.zOne) {
    var i = this.x.redSqr(), s = this.y.redSqr(), o = s.redSqr(), a = this.x.redAdd(s).redSqr().redISub(i).redISub(o);
    a = a.redIAdd(a);
    var l = i.redAdd(i).redIAdd(i), h = l.redSqr().redISub(a).redISub(a), x = o.redIAdd(o);
    x = x.redIAdd(x), x = x.redIAdd(x), e = h, t = l.redMul(a.redISub(h)).redISub(x), r = this.y.redAdd(this.y);
  } else {
    var b = this.x.redSqr(), E = this.y.redSqr(), S = E.redSqr(), I = this.x.redAdd(E).redSqr().redISub(b).redISub(S);
    I = I.redIAdd(I);
    var C = b.redAdd(b).redIAdd(b), y = C.redSqr(), T = S.redIAdd(S);
    T = T.redIAdd(T), T = T.redIAdd(T), e = y.redISub(I).redISub(I), t = C.redMul(I.redISub(e)).redISub(T), r = this.y.redMul(this.z), r = r.redIAdd(r);
  }
  return this.curve.jpoint(e, t, r);
};
ut.prototype._threeDbl = function() {
  var e, t, r;
  if (this.zOne) {
    var i = this.x.redSqr(), s = this.y.redSqr(), o = s.redSqr(), a = this.x.redAdd(s).redSqr().redISub(i).redISub(o);
    a = a.redIAdd(a);
    var l = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a), h = l.redSqr().redISub(a).redISub(a);
    e = h;
    var x = o.redIAdd(o);
    x = x.redIAdd(x), x = x.redIAdd(x), t = l.redMul(a.redISub(h)).redISub(x), r = this.y.redAdd(this.y);
  } else {
    var b = this.z.redSqr(), E = this.y.redSqr(), S = this.x.redMul(E), I = this.x.redSub(b).redMul(this.x.redAdd(b));
    I = I.redAdd(I).redIAdd(I);
    var C = S.redIAdd(S);
    C = C.redIAdd(C);
    var y = C.redAdd(C);
    e = I.redSqr().redISub(y), r = this.y.redAdd(this.z).redSqr().redISub(E).redISub(b);
    var T = E.redSqr();
    T = T.redIAdd(T), T = T.redIAdd(T), T = T.redIAdd(T), t = I.redMul(C.redISub(e)).redISub(T);
  }
  return this.curve.jpoint(e, t, r);
};
ut.prototype._dbl = function() {
  var e = this.curve.a, t = this.x, r = this.y, i = this.z, s = i.redSqr().redSqr(), o = t.redSqr(), a = r.redSqr(), l = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(s)), h = t.redAdd(t);
  h = h.redIAdd(h);
  var x = h.redMul(a), b = l.redSqr().redISub(x.redAdd(x)), E = x.redISub(b), S = a.redSqr();
  S = S.redIAdd(S), S = S.redIAdd(S), S = S.redIAdd(S);
  var I = l.redMul(E).redISub(S), C = r.redAdd(r).redMul(i);
  return this.curve.jpoint(b, I, C);
};
ut.prototype.trpl = function() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);
  var e = this.x.redSqr(), t = this.y.redSqr(), r = this.z.redSqr(), i = t.redSqr(), s = e.redAdd(e).redIAdd(e), o = s.redSqr(), a = this.x.redAdd(t).redSqr().redISub(e).redISub(i);
  a = a.redIAdd(a), a = a.redAdd(a).redIAdd(a), a = a.redISub(o);
  var l = a.redSqr(), h = i.redIAdd(i);
  h = h.redIAdd(h), h = h.redIAdd(h), h = h.redIAdd(h);
  var x = s.redIAdd(a).redSqr().redISub(o).redISub(l).redISub(h), b = t.redMul(x);
  b = b.redIAdd(b), b = b.redIAdd(b);
  var E = this.x.redMul(l).redISub(b);
  E = E.redIAdd(E), E = E.redIAdd(E);
  var S = this.y.redMul(x.redMul(h.redISub(x)).redISub(a.redMul(l)));
  S = S.redIAdd(S), S = S.redIAdd(S), S = S.redIAdd(S);
  var I = this.z.redAdd(a).redSqr().redISub(r).redISub(l);
  return this.curve.jpoint(E, S, I);
};
ut.prototype.mul = function(e, t) {
  return e = new te(e, t), this.curve._wnafMul(this, e);
};
ut.prototype.eq = function(e) {
  if (e.type === "affine")
    return this.eq(e.toJ());
  if (this === e)
    return !0;
  var t = this.z.redSqr(), r = e.z.redSqr();
  if (this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0) !== 0)
    return !1;
  var i = t.redMul(this.z), s = r.redMul(e.z);
  return this.y.redMul(s).redISub(e.y.redMul(i)).cmpn(0) === 0;
};
ut.prototype.eqXToP = function(e) {
  var t = this.z.redSqr(), r = e.toRed(this.curve.red).redMul(t);
  if (this.x.cmp(r) === 0)
    return !0;
  for (var i = e.clone(), s = this.curve.redN.redMul(t); ; ) {
    if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)
      return !1;
    if (r.redIAdd(s), this.x.cmp(r) === 0)
      return !0;
  }
};
ut.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
};
ut.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
var Ci = Mn(function(n, e) {
  var t = e;
  t.base = on, t.short = Zh, t.mont = /*RicMoo:ethers:require(./mont)*/
  null, t.edwards = /*RicMoo:ethers:require(./edwards)*/
  null;
}), Ii = Mn(function(n, e) {
  var t = e, r = kt.assert;
  function i(a) {
    a.type === "short" ? this.curve = new Ci.short(a) : a.type === "edwards" ? this.curve = new Ci.edwards(a) : this.curve = new Ci.mont(a), this.g = this.curve.g, this.n = this.curve.n, this.hash = a.hash, r(this.g.validate(), "Invalid curve"), r(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  t.PresetCurve = i;
  function s(a, l) {
    Object.defineProperty(t, a, {
      configurable: !0,
      enumerable: !0,
      get: function() {
        var h = new i(l);
        return Object.defineProperty(t, a, {
          configurable: !0,
          enumerable: !0,
          value: h
        }), h;
      }
    });
  }
  s("p192", {
    type: "short",
    prime: "p192",
    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
    hash: yt.sha256,
    gRed: !1,
    g: [
      "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
      "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
    ]
  }), s("p224", {
    type: "short",
    prime: "p224",
    p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
    b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
    n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
    hash: yt.sha256,
    gRed: !1,
    g: [
      "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
      "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
    ]
  }), s("p256", {
    type: "short",
    prime: null,
    p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
    a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
    b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
    n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
    hash: yt.sha256,
    gRed: !1,
    g: [
      "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
      "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
    ]
  }), s("p384", {
    type: "short",
    prime: null,
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
    a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
    b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
    n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
    hash: yt.sha384,
    gRed: !1,
    g: [
      "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
      "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
    ]
  }), s("p521", {
    type: "short",
    prime: null,
    p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
    a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
    b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
    n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
    hash: yt.sha512,
    gRed: !1,
    g: [
      "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
      "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
    ]
  }), s("curve25519", {
    type: "mont",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "76d06",
    b: "1",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: yt.sha256,
    gRed: !1,
    g: [
      "9"
    ]
  }), s("ed25519", {
    type: "edwards",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "-1",
    c: "1",
    // -121665 * (121666^(-1)) (mod P)
    d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: yt.sha256,
    gRed: !1,
    g: [
      "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
      // 4/5
      "6666666666666666666666666666666666666666666666666666666666666658"
    ]
  });
  var o;
  try {
    o = /*RicMoo:ethers:require(./precomputed/secp256k1)*/
    null.crash();
  } catch {
    o = void 0;
  }
  s("secp256k1", {
    type: "short",
    prime: "k256",
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
    a: "0",
    b: "7",
    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
    h: "1",
    hash: yt.sha256,
    // Precomputed endomorphism
    beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
    lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
    basis: [
      {
        a: "3086d221a7d46bcde86c90e49284eb15",
        b: "-e4437ed6010e88286f547fa90abfe4c3"
      },
      {
        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
        b: "3086d221a7d46bcde86c90e49284eb15"
      }
    ],
    gRed: !1,
    g: [
      "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
      "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
      o
    ]
  });
});
function Er(n) {
  if (!(this instanceof Er))
    return new Er(n);
  this.hash = n.hash, this.predResist = !!n.predResist, this.outLen = this.hash.outSize, this.minEntropy = n.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var e = Lt.toArray(n.entropy, n.entropyEnc || "hex"), t = Lt.toArray(n.nonce, n.nonceEnc || "hex"), r = Lt.toArray(n.pers, n.persEnc || "hex");
  ko(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ), this._init(e, t, r);
}
var bf = Er;
Er.prototype._init = function(e, t, r) {
  var i = e.concat(t).concat(r);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var s = 0; s < this.V.length; s++)
    this.K[s] = 0, this.V[s] = 1;
  this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656;
};
Er.prototype._hmac = function() {
  return new yt.hmac(this.hash, this.K);
};
Er.prototype._update = function(e) {
  var t = this._hmac().update(this.V).update([0]);
  e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest());
};
Er.prototype.reseed = function(e, t, r, i) {
  typeof t != "string" && (i = r, r = t, t = null), e = Lt.toArray(e, t), r = Lt.toArray(r, i), ko(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ), this._update(e.concat(r || [])), this._reseed = 1;
};
Er.prototype.generate = function(e, t, r, i) {
  if (this._reseed > this.reseedInterval)
    throw new Error("Reseed is required");
  typeof t != "string" && (i = r, r = t, t = null), r && (r = Lt.toArray(r, i || "hex"), this._update(r));
  for (var s = []; s.length < e; )
    this.V = this._hmac().update(this.V).digest(), s = s.concat(this.V);
  var o = s.slice(0, e);
  return this._update(r), this._reseed++, Lt.encode(o, t);
};
var Xs = kt.assert;
function xt(n, e) {
  this.ec = n, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
}
var Co = xt;
xt.fromPublic = function(e, t, r) {
  return t instanceof xt ? t : new xt(e, {
    pub: t,
    pubEnc: r
  });
};
xt.fromPrivate = function(e, t, r) {
  return t instanceof xt ? t : new xt(e, {
    priv: t,
    privEnc: r
  });
};
xt.prototype.validate = function() {
  var e = this.getPublic();
  return e.isInfinity() ? { result: !1, reason: "Invalid public key" } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" };
};
xt.prototype.getPublic = function(e, t) {
  return typeof e == "string" && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub;
};
xt.prototype.getPrivate = function(e) {
  return e === "hex" ? this.priv.toString(16, 2) : this.priv;
};
xt.prototype._importPrivate = function(e, t) {
  this.priv = new te(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n);
};
xt.prototype._importPublic = function(e, t) {
  if (e.x || e.y) {
    this.ec.curve.type === "mont" ? Xs(e.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Xs(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(e, t);
};
xt.prototype.derive = function(e) {
  return e.validate() || Xs(e.validate(), "public point not validated"), e.mul(this.priv).getX();
};
xt.prototype.sign = function(e, t, r) {
  return this.ec.sign(e, this, t, r);
};
xt.prototype.verify = function(e, t) {
  return this.ec.verify(e, t, this);
};
xt.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var Xh = kt.assert;
function Zi(n, e) {
  if (n instanceof Zi)
    return n;
  this._importDER(n, e) || (Xh(n.r && n.s, "Signature without r or s"), this.r = new te(n.r, 16), this.s = new te(n.s, 16), n.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = n.recoveryParam);
}
var Xi = Zi;
function ed() {
  this.place = 0;
}
function Ns(n, e) {
  var t = n[e.place++];
  if (!(t & 128))
    return t;
  var r = t & 15;
  if (r === 0 || r > 4)
    return !1;
  for (var i = 0, s = 0, o = e.place; s < r; s++, o++)
    i <<= 8, i |= n[o], i >>>= 0;
  return i <= 127 ? !1 : (e.place = o, i);
}
function Aa(n) {
  for (var e = 0, t = n.length - 1; !n[e] && !(n[e + 1] & 128) && e < t; )
    e++;
  return e === 0 ? n : n.slice(e);
}
Zi.prototype._importDER = function(e, t) {
  e = kt.toArray(e, t);
  var r = new ed();
  if (e[r.place++] !== 48)
    return !1;
  var i = Ns(e, r);
  if (i === !1 || i + r.place !== e.length || e[r.place++] !== 2)
    return !1;
  var s = Ns(e, r);
  if (s === !1)
    return !1;
  var o = e.slice(r.place, s + r.place);
  if (r.place += s, e[r.place++] !== 2)
    return !1;
  var a = Ns(e, r);
  if (a === !1 || e.length !== a + r.place)
    return !1;
  var l = e.slice(r.place, a + r.place);
  if (o[0] === 0)
    if (o[1] & 128)
      o = o.slice(1);
    else
      return !1;
  if (l[0] === 0)
    if (l[1] & 128)
      l = l.slice(1);
    else
      return !1;
  return this.r = new te(o), this.s = new te(l), this.recoveryParam = null, !0;
};
function Ts(n, e) {
  if (e < 128) {
    n.push(e);
    return;
  }
  var t = 1 + (Math.log(e) / Math.LN2 >>> 3);
  for (n.push(t | 128); --t; )
    n.push(e >>> (t << 3) & 255);
  n.push(e);
}
Zi.prototype.toDER = function(e) {
  var t = this.r.toArray(), r = this.s.toArray();
  for (t[0] & 128 && (t = [0].concat(t)), r[0] & 128 && (r = [0].concat(r)), t = Aa(t), r = Aa(r); !r[0] && !(r[1] & 128); )
    r = r.slice(1);
  var i = [2];
  Ts(i, t.length), i = i.concat(t), i.push(2), Ts(i, r.length);
  var s = i.concat(r), o = [48];
  return Ts(o, s.length), o = o.concat(s), kt.encode(o, e);
};
var td = (
  /*RicMoo:ethers:require(brorand)*/
  function() {
    throw new Error("unsupported");
  }
), gf = kt.assert;
function Mt(n) {
  if (!(this instanceof Mt))
    return new Mt(n);
  typeof n == "string" && (gf(
    Object.prototype.hasOwnProperty.call(Ii, n),
    "Unknown curve " + n
  ), n = Ii[n]), n instanceof Ii.PresetCurve && (n = { curve: n }), this.curve = n.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = n.curve.g, this.g.precompute(n.curve.n.bitLength() + 1), this.hash = n.hash || n.curve.hash;
}
var rd = Mt;
Mt.prototype.keyPair = function(e) {
  return new Co(this, e);
};
Mt.prototype.keyFromPrivate = function(e, t) {
  return Co.fromPrivate(this, e, t);
};
Mt.prototype.keyFromPublic = function(e, t) {
  return Co.fromPublic(this, e, t);
};
Mt.prototype.genKeyPair = function(e) {
  e || (e = {});
  for (var t = new bf({
    hash: this.hash,
    pers: e.pers,
    persEnc: e.persEnc || "utf8",
    entropy: e.entropy || td(this.hash.hmacStrength),
    entropyEnc: e.entropy && e.entropyEnc || "utf8",
    nonce: this.n.toArray()
  }), r = this.n.byteLength(), i = this.n.sub(new te(2)); ; ) {
    var s = new te(t.generate(r));
    if (!(s.cmp(i) > 0))
      return s.iaddn(1), this.keyFromPrivate(s);
  }
};
Mt.prototype._truncateToN = function(e, t) {
  var r = e.byteLength() * 8 - this.n.bitLength();
  return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e;
};
Mt.prototype.sign = function(e, t, r, i) {
  typeof r == "object" && (i = r, r = null), i || (i = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new te(e, 16));
  for (var s = this.n.byteLength(), o = t.getPrivate().toArray("be", s), a = e.toArray("be", s), l = new bf({
    hash: this.hash,
    entropy: o,
    nonce: a,
    pers: i.pers,
    persEnc: i.persEnc || "utf8"
  }), h = this.n.sub(new te(1)), x = 0; ; x++) {
    var b = i.k ? i.k(x) : new te(l.generate(this.n.byteLength()));
    if (b = this._truncateToN(b, !0), !(b.cmpn(1) <= 0 || b.cmp(h) >= 0)) {
      var E = this.g.mul(b);
      if (!E.isInfinity()) {
        var S = E.getX(), I = S.umod(this.n);
        if (I.cmpn(0) !== 0) {
          var C = b.invm(this.n).mul(I.mul(t.getPrivate()).iadd(e));
          if (C = C.umod(this.n), C.cmpn(0) !== 0) {
            var y = (E.getY().isOdd() ? 1 : 0) | (S.cmp(I) !== 0 ? 2 : 0);
            return i.canonical && C.cmp(this.nh) > 0 && (C = this.n.sub(C), y ^= 1), new Xi({ r: I, s: C, recoveryParam: y });
          }
        }
      }
    }
  }
};
Mt.prototype.verify = function(e, t, r, i) {
  e = this._truncateToN(new te(e, 16)), r = this.keyFromPublic(r, i), t = new Xi(t, "hex");
  var s = t.r, o = t.s;
  if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0 || o.cmpn(1) < 0 || o.cmp(this.n) >= 0)
    return !1;
  var a = o.invm(this.n), l = a.mul(e).umod(this.n), h = a.mul(s).umod(this.n), x;
  return this.curve._maxwellTrick ? (x = this.g.jmulAdd(l, r.getPublic(), h), x.isInfinity() ? !1 : x.eqXToP(s)) : (x = this.g.mulAdd(l, r.getPublic(), h), x.isInfinity() ? !1 : x.getX().umod(this.n).cmp(s) === 0);
};
Mt.prototype.recoverPubKey = function(n, e, t, r) {
  gf((3 & t) === t, "The recovery param is more than two bits"), e = new Xi(e, r);
  var i = this.n, s = new te(n), o = e.r, a = e.s, l = t & 1, h = t >> 1;
  if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h)
    throw new Error("Unable to find sencond key candinate");
  h ? o = this.curve.pointFromX(o.add(this.curve.n), l) : o = this.curve.pointFromX(o, l);
  var x = e.r.invm(i), b = i.sub(s).mul(x).umod(i), E = a.mul(x).umod(i);
  return this.g.mulAdd(b, o, E);
};
Mt.prototype.getKeyRecoveryParam = function(n, e, t, r) {
  if (e = new Xi(e, r), e.recoveryParam !== null)
    return e.recoveryParam;
  for (var i = 0; i < 4; i++) {
    var s;
    try {
      s = this.recoverPubKey(n, e, i);
    } catch {
      continue;
    }
    if (s.eq(t))
      return i;
  }
  throw new Error("Unable to find valid recovery factor");
};
var nd = Mn(function(n, e) {
  var t = e;
  t.version = "6.5.4", t.utils = kt, t.rand = /*RicMoo:ethers:require(brorand)*/
  function() {
    throw new Error("unsupported");
  }, t.curve = Ci, t.curves = Ii, t.ec = rd, t.eddsa = /*RicMoo:ethers:require(./elliptic/eddsa)*/
  null;
}), id = nd.ec;
const sd = "signing-key/5.7.0", eo = new _(sd);
let Rs = null;
function Gt() {
  return Rs || (Rs = new id("secp256k1")), Rs;
}
class $r {
  constructor(e) {
    B(this, "curve", "secp256k1"), B(this, "privateKey", G(e)), Yt(this.privateKey) !== 32 && eo.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
    const t = Gt().keyFromPrivate(K(this.privateKey));
    B(this, "publicKey", "0x" + t.getPublic(!1, "hex")), B(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")), B(this, "_isSigningKey", !0);
  }
  _addPoint(e) {
    const t = Gt().keyFromPublic(K(this.publicKey)), r = Gt().keyFromPublic(K(e));
    return "0x" + t.pub.add(r.pub).encodeCompressed("hex");
  }
  signDigest(e) {
    const t = Gt().keyFromPrivate(K(this.privateKey)), r = K(e);
    r.length !== 32 && eo.throwArgumentError("bad digest length", "digest", e);
    const i = t.sign(r, { canonical: !0 });
    return tn({
      recoveryParam: i.recoveryParam,
      r: xe("0x" + i.r.toString(16), 32),
      s: xe("0x" + i.s.toString(16), 32)
    });
  }
  computeSharedSecret(e) {
    const t = Gt().keyFromPrivate(K(this.privateKey)), r = Gt().keyFromPublic(K(Io(e)));
    return xe("0x" + t.derive(r.getPublic()).toString(16), 32);
  }
  static isSigningKey(e) {
    return !!(e && e._isSigningKey);
  }
}
function mf(n, e) {
  const t = tn(e), r = { r: K(t.r), s: K(t.s) };
  return "0x" + Gt().recoverPubKey(K(n), r, t.recoveryParam).encode("hex", !1);
}
function Io(n, e) {
  const t = K(n);
  if (t.length === 32) {
    const r = new $r(t);
    return e ? "0x" + Gt().keyFromPrivate(t).getPublic(!0, "hex") : r.publicKey;
  } else {
    if (t.length === 33)
      return e ? G(t) : "0x" + Gt().keyFromPublic(t).getPublic(!1, "hex");
    if (t.length === 65)
      return e ? "0x" + Gt().keyFromPublic(t).getPublic(!0, "hex") : G(t);
  }
  return eo.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
const od = "transactions/5.7.0", dt = new _(od);
var to;
(function(n) {
  n[n.legacy = 0] = "legacy", n[n.eip2930 = 1] = "eip2930", n[n.eip1559 = 2] = "eip1559";
})(to || (to = {}));
function Mo(n) {
  return n === "0x" ? null : le(n);
}
function ht(n) {
  return n === "0x" ? mo : H.from(n);
}
const ad = [
  { name: "nonce", maxLength: 32, numeric: !0 },
  { name: "gasPrice", maxLength: 32, numeric: !0 },
  { name: "gasLimit", maxLength: 32, numeric: !0 },
  { name: "to", length: 20 },
  { name: "value", maxLength: 32, numeric: !0 },
  { name: "data" }
], fd = {
  chainId: !0,
  data: !0,
  gasLimit: !0,
  gasPrice: !0,
  nonce: !0,
  to: !0,
  type: !0,
  value: !0
};
function Ar(n) {
  const e = Io(n);
  return le(rt(he(rt(e, 1)), 12));
}
function Nn(n, e) {
  return Ar(mf(K(n), e));
}
function _t(n, e) {
  const t = Wt(H.from(n).toHexString());
  return t.length > 32 && dt.throwArgumentError("invalid length for " + e, "transaction:" + e, n), t;
}
function Bs(n, e) {
  return {
    address: le(n),
    storageKeys: (e || []).map((t, r) => (Yt(t) !== 32 && dt.throwArgumentError("invalid access list storageKey", `accessList[${n}:${r}]`, t), t.toLowerCase()))
  };
}
function Ir(n) {
  if (Array.isArray(n))
    return n.map((t, r) => Array.isArray(t) ? (t.length > 2 && dt.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${r}]`, t), Bs(t[0], t[1])) : Bs(t.address, t.storageKeys));
  const e = Object.keys(n).map((t) => {
    const r = n[t].reduce((i, s) => (i[s] = !0, i), {});
    return Bs(t, Object.keys(r).sort());
  });
  return e.sort((t, r) => t.address.localeCompare(r.address)), e;
}
function vf(n) {
  return Ir(n).map((e) => [e.address, e.storageKeys]);
}
function yf(n, e) {
  if (n.gasPrice != null) {
    const r = H.from(n.gasPrice), i = H.from(n.maxFeePerGas || 0);
    r.eq(i) || dt.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
      gasPrice: r,
      maxFeePerGas: i
    });
  }
  const t = [
    _t(n.chainId || 0, "chainId"),
    _t(n.nonce || 0, "nonce"),
    _t(n.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    _t(n.maxFeePerGas || 0, "maxFeePerGas"),
    _t(n.gasLimit || 0, "gasLimit"),
    n.to != null ? le(n.to) : "0x",
    _t(n.value || 0, "value"),
    n.data || "0x",
    vf(n.accessList || [])
  ];
  if (e) {
    const r = tn(e);
    t.push(_t(r.recoveryParam, "recoveryParam")), t.push(Wt(r.r)), t.push(Wt(r.s));
  }
  return bt(["0x02", Zr(t)]);
}
function wf(n, e) {
  const t = [
    _t(n.chainId || 0, "chainId"),
    _t(n.nonce || 0, "nonce"),
    _t(n.gasPrice || 0, "gasPrice"),
    _t(n.gasLimit || 0, "gasLimit"),
    n.to != null ? le(n.to) : "0x",
    _t(n.value || 0, "value"),
    n.data || "0x",
    vf(n.accessList || [])
  ];
  if (e) {
    const r = tn(e);
    t.push(_t(r.recoveryParam, "recoveryParam")), t.push(Wt(r.r)), t.push(Wt(r.s));
  }
  return bt(["0x01", Zr(t)]);
}
function cd(n, e) {
  po(n, fd);
  const t = [];
  ad.forEach(function(o) {
    let a = n[o.name] || [];
    const l = {};
    o.numeric && (l.hexPad = "left"), a = K(G(a, l)), o.length && a.length !== o.length && a.length > 0 && dt.throwArgumentError("invalid length for " + o.name, "transaction:" + o.name, a), o.maxLength && (a = Wt(a), a.length > o.maxLength && dt.throwArgumentError("invalid length for " + o.name, "transaction:" + o.name, a)), t.push(G(a));
  });
  let r = 0;
  if (n.chainId != null ? (r = n.chainId, typeof r != "number" && dt.throwArgumentError("invalid transaction.chainId", "transaction", n)) : e && !oi(e) && e.v > 28 && (r = Math.floor((e.v - 35) / 2)), r !== 0 && (t.push(G(r)), t.push("0x"), t.push("0x")), !e)
    return Zr(t);
  const i = tn(e);
  let s = 27 + i.recoveryParam;
  return r !== 0 ? (t.pop(), t.pop(), t.pop(), s += r * 2 + 8, i.v > 28 && i.v !== s && dt.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", e)) : i.v !== s && dt.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", e), t.push(G(s)), t.push(Wt(K(i.r))), t.push(Wt(K(i.s))), Zr(t);
}
function ro(n, e) {
  if (n.type == null || n.type === 0)
    return n.accessList != null && dt.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", n), cd(n, e);
  switch (n.type) {
    case 1:
      return wf(n, e);
    case 2:
      return yf(n, e);
  }
  return dt.throwError(`unsupported transaction type: ${n.type}`, _.errors.UNSUPPORTED_OPERATION, {
    operation: "serializeTransaction",
    transactionType: n.type
  });
}
function Af(n, e, t) {
  try {
    const r = ht(e[0]).toNumber();
    if (r !== 0 && r !== 1)
      throw new Error("bad recid");
    n.v = r;
  } catch {
    dt.throwArgumentError("invalid v for transaction type: 1", "v", e[0]);
  }
  n.r = xe(e[1], 32), n.s = xe(e[2], 32);
  try {
    const r = he(t(n));
    n.from = Nn(r, { r: n.r, s: n.s, recoveryParam: n.v });
  } catch {
  }
}
function ld(n) {
  const e = Ji(n.slice(1));
  e.length !== 9 && e.length !== 12 && dt.throwArgumentError("invalid component count for transaction type: 2", "payload", G(n));
  const t = ht(e[2]), r = ht(e[3]), i = {
    type: 2,
    chainId: ht(e[0]).toNumber(),
    nonce: ht(e[1]).toNumber(),
    maxPriorityFeePerGas: t,
    maxFeePerGas: r,
    gasPrice: null,
    gasLimit: ht(e[4]),
    to: Mo(e[5]),
    value: ht(e[6]),
    data: e[7],
    accessList: Ir(e[8])
  };
  return e.length === 9 || (i.hash = he(n), Af(i, e.slice(9), yf)), i;
}
function ud(n) {
  const e = Ji(n.slice(1));
  e.length !== 8 && e.length !== 11 && dt.throwArgumentError("invalid component count for transaction type: 1", "payload", G(n));
  const t = {
    type: 1,
    chainId: ht(e[0]).toNumber(),
    nonce: ht(e[1]).toNumber(),
    gasPrice: ht(e[2]),
    gasLimit: ht(e[3]),
    to: Mo(e[4]),
    value: ht(e[5]),
    data: e[6],
    accessList: Ir(e[7])
  };
  return e.length === 8 || (t.hash = he(n), Af(t, e.slice(8), wf)), t;
}
function hd(n) {
  const e = Ji(n);
  e.length !== 9 && e.length !== 6 && dt.throwArgumentError("invalid raw transaction", "rawTransaction", n);
  const t = {
    nonce: ht(e[0]).toNumber(),
    gasPrice: ht(e[1]),
    gasLimit: ht(e[2]),
    to: Mo(e[3]),
    value: ht(e[4]),
    data: e[5],
    chainId: 0
  };
  if (e.length === 6)
    return t;
  try {
    t.v = H.from(e[6]).toNumber();
  } catch {
    return t;
  }
  if (t.r = xe(e[7], 32), t.s = xe(e[8], 32), H.from(t.r).isZero() && H.from(t.s).isZero())
    t.chainId = t.v, t.v = 0;
  else {
    t.chainId = Math.floor((t.v - 35) / 2), t.chainId < 0 && (t.chainId = 0);
    let r = t.v - 27;
    const i = e.slice(0, 6);
    t.chainId !== 0 && (i.push(G(t.chainId)), i.push("0x"), i.push("0x"), r -= t.chainId * 2 + 8);
    const s = he(Zr(i));
    try {
      t.from = Nn(s, { r: G(t.r), s: G(t.s), recoveryParam: r });
    } catch {
    }
    t.hash = he(n);
  }
  return t.type = null, t;
}
function Ef(n) {
  const e = K(n);
  if (e[0] > 127)
    return hd(e);
  switch (e[0]) {
    case 1:
      return ud(e);
    case 2:
      return ld(e);
  }
  return dt.throwError(`unsupported transaction type: ${e[0]}`, _.errors.UNSUPPORTED_OPERATION, {
    operation: "parseTransaction",
    transactionType: e[0]
  });
}
const dd = "contracts/5.7.0";
var _r = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const ue = new _(dd), xd = {
  chainId: !0,
  data: !0,
  from: !0,
  gasLimit: !0,
  gasPrice: !0,
  nonce: !0,
  to: !0,
  value: !0,
  type: !0,
  accessList: !0,
  maxFeePerGas: !0,
  maxPriorityFeePerGas: !0,
  customData: !0,
  ccipReadEnabled: !0
};
function Gi(n, e) {
  return _r(this, void 0, void 0, function* () {
    const t = yield e;
    typeof t != "string" && ue.throwArgumentError("invalid address or ENS name", "name", t);
    try {
      return le(t);
    } catch {
    }
    n || ue.throwError("a provider or signer is needed to resolve ENS names", _.errors.UNSUPPORTED_OPERATION, {
      operation: "resolveName"
    });
    const r = yield n.resolveName(t);
    return r == null && ue.throwArgumentError("resolver or addr is not configured for ENS name", "name", t), r;
  });
}
function Jn(n, e, t) {
  return _r(this, void 0, void 0, function* () {
    return Array.isArray(t) ? yield Promise.all(t.map((r, i) => Jn(n, Array.isArray(e) ? e[i] : e[r.name], r))) : t.type === "address" ? yield Gi(n, e) : t.type === "tuple" ? yield Jn(n, e, t.components) : t.baseType === "array" ? Array.isArray(e) ? yield Promise.all(e.map((r) => Jn(n, r, t.arrayChildren))) : Promise.reject(ue.makeError("invalid value for array", _.errors.INVALID_ARGUMENT, {
      argument: "value",
      value: e
    })) : e;
  });
}
function es(n, e, t) {
  return _r(this, void 0, void 0, function* () {
    let r = {};
    t.length === e.inputs.length + 1 && typeof t[t.length - 1] == "object" && (r = ge(t.pop())), ue.checkArgumentCount(t.length, e.inputs.length, "passed to contract"), n.signer ? r.from ? r.from = et({
      override: Gi(n.signer, r.from),
      signer: n.signer.getAddress()
    }).then((h) => _r(this, void 0, void 0, function* () {
      return le(h.signer) !== h.override && ue.throwError("Contract with a Signer cannot override from", _.errors.UNSUPPORTED_OPERATION, {
        operation: "overrides.from"
      }), h.override;
    })) : r.from = n.signer.getAddress() : r.from && (r.from = Gi(n.provider, r.from));
    const i = yield et({
      args: Jn(n.signer || n.provider, t, e.inputs),
      address: n.resolvedAddress,
      overrides: et(r) || {}
    }), s = n.interface.encodeFunctionData(e, i.args), o = {
      data: s,
      to: i.address
    }, a = i.overrides;
    if (a.nonce != null && (o.nonce = H.from(a.nonce).toNumber()), a.gasLimit != null && (o.gasLimit = H.from(a.gasLimit)), a.gasPrice != null && (o.gasPrice = H.from(a.gasPrice)), a.maxFeePerGas != null && (o.maxFeePerGas = H.from(a.maxFeePerGas)), a.maxPriorityFeePerGas != null && (o.maxPriorityFeePerGas = H.from(a.maxPriorityFeePerGas)), a.from != null && (o.from = a.from), a.type != null && (o.type = a.type), a.accessList != null && (o.accessList = Ir(a.accessList)), o.gasLimit == null && e.gas != null) {
      let h = 21e3;
      const x = K(s);
      for (let b = 0; b < x.length; b++)
        h += 4, x[b] && (h += 64);
      o.gasLimit = H.from(e.gas).add(h);
    }
    if (a.value) {
      const h = H.from(a.value);
      !h.isZero() && !e.payable && ue.throwError("non-payable method cannot override value", _.errors.UNSUPPORTED_OPERATION, {
        operation: "overrides.value",
        value: r.value
      }), o.value = h;
    }
    a.customData && (o.customData = ge(a.customData)), a.ccipReadEnabled && (o.ccipReadEnabled = !!a.ccipReadEnabled), delete r.nonce, delete r.gasLimit, delete r.gasPrice, delete r.from, delete r.value, delete r.type, delete r.accessList, delete r.maxFeePerGas, delete r.maxPriorityFeePerGas, delete r.customData, delete r.ccipReadEnabled;
    const l = Object.keys(r).filter((h) => r[h] != null);
    return l.length && ue.throwError(`cannot override ${l.map((h) => JSON.stringify(h)).join(",")}`, _.errors.UNSUPPORTED_OPERATION, {
      operation: "overrides",
      overrides: l
    }), o;
  });
}
function pd(n, e) {
  return function(...t) {
    return es(n, e, t);
  };
}
function bd(n, e) {
  const t = n.signer || n.provider;
  return function(...r) {
    return _r(this, void 0, void 0, function* () {
      t || ue.throwError("estimate require a provider or signer", _.errors.UNSUPPORTED_OPERATION, {
        operation: "estimateGas"
      });
      const i = yield es(n, e, r);
      return yield t.estimateGas(i);
    });
  };
}
function _f(n, e) {
  const t = e.wait.bind(e);
  e.wait = (r) => t(r).then((i) => (i.events = i.logs.map((s) => {
    let o = mt(s), a = null;
    try {
      a = n.interface.parseLog(s);
    } catch {
    }
    return a && (o.args = a.args, o.decode = (l, h) => n.interface.decodeEventLog(a.eventFragment, l, h), o.event = a.name, o.eventSignature = a.signature), o.removeListener = () => n.provider, o.getBlock = () => n.provider.getBlock(i.blockHash), o.getTransaction = () => n.provider.getTransaction(i.transactionHash), o.getTransactionReceipt = () => Promise.resolve(i), o;
  }), i));
}
function Sf(n, e, t) {
  const r = n.signer || n.provider;
  return function(...i) {
    return _r(this, void 0, void 0, function* () {
      let s;
      if (i.length === e.inputs.length + 1 && typeof i[i.length - 1] == "object") {
        const l = ge(i.pop());
        l.blockTag != null && (s = yield l.blockTag), delete l.blockTag, i.push(l);
      }
      n.deployTransaction != null && (yield n._deployed(s));
      const o = yield es(n, e, i), a = yield r.call(o, s);
      try {
        let l = n.interface.decodeFunctionResult(e, a);
        return t && e.outputs.length === 1 && (l = l[0]), l;
      } catch (l) {
        throw l.code === _.errors.CALL_EXCEPTION && (l.address = n.address, l.args = i, l.transaction = o), l;
      }
    });
  };
}
function gd(n, e) {
  return function(...t) {
    return _r(this, void 0, void 0, function* () {
      n.signer || ue.throwError("sending a transaction requires a signer", _.errors.UNSUPPORTED_OPERATION, {
        operation: "sendTransaction"
      }), n.deployTransaction != null && (yield n._deployed());
      const r = yield es(n, e, t), i = yield n.signer.sendTransaction(r);
      return _f(n, i), i;
    });
  };
}
function Ea(n, e, t) {
  return e.constant ? Sf(n, e, t) : gd(n, e);
}
function kf(n) {
  return n.address && (n.topics == null || n.topics.length === 0) ? "*" : (n.address || "*") + "@" + (n.topics ? n.topics.map((e) => Array.isArray(e) ? e.join("|") : e).join(":") : "");
}
class ri {
  constructor(e, t) {
    B(this, "tag", e), B(this, "filter", t), this._listeners = [];
  }
  addListener(e, t) {
    this._listeners.push({ listener: e, once: t });
  }
  removeListener(e) {
    let t = !1;
    this._listeners = this._listeners.filter((r) => t || r.listener !== e ? !0 : (t = !0, !1));
  }
  removeAllListeners() {
    this._listeners = [];
  }
  listeners() {
    return this._listeners.map((e) => e.listener);
  }
  listenerCount() {
    return this._listeners.length;
  }
  run(e) {
    const t = this.listenerCount();
    return this._listeners = this._listeners.filter((r) => {
      const i = e.slice();
      return setTimeout(() => {
        r.listener.apply(this, i);
      }, 0), !r.once;
    }), t;
  }
  prepareEvent(e) {
  }
  // Returns the array that will be applied to an emit
  getEmit(e) {
    return [e];
  }
}
class md extends ri {
  constructor() {
    super("error", null);
  }
}
class _a extends ri {
  constructor(e, t, r, i) {
    const s = {
      address: e
    };
    let o = t.getEventTopic(r);
    i ? (o !== i[0] && ue.throwArgumentError("topic mismatch", "topics", i), s.topics = i.slice()) : s.topics = [o], super(kf(s), s), B(this, "address", e), B(this, "interface", t), B(this, "fragment", r);
  }
  prepareEvent(e) {
    super.prepareEvent(e), e.event = this.fragment.name, e.eventSignature = this.fragment.format(), e.decode = (t, r) => this.interface.decodeEventLog(this.fragment, t, r);
    try {
      e.args = this.interface.decodeEventLog(this.fragment, e.data, e.topics);
    } catch (t) {
      e.args = null, e.decodeError = t;
    }
  }
  getEmit(e) {
    const t = v0(e.args);
    if (t.length)
      throw t[0].error;
    const r = (e.args || []).slice();
    return r.push(e), r;
  }
}
class Sa extends ri {
  constructor(e, t) {
    super("*", { address: e }), B(this, "address", e), B(this, "interface", t);
  }
  prepareEvent(e) {
    super.prepareEvent(e);
    try {
      const t = this.interface.parseLog(e);
      e.event = t.name, e.eventSignature = t.signature, e.decode = (r, i) => this.interface.decodeEventLog(t.eventFragment, r, i), e.args = t.args;
    } catch {
    }
  }
}
class Pf {
  constructor(e, t, r) {
    B(this, "interface", lt(new.target, "getInterface")(t)), r == null ? (B(this, "provider", null), B(this, "signer", null)) : Pr.isSigner(r) ? (B(this, "provider", r.provider || null), B(this, "signer", r)) : sn.isProvider(r) ? (B(this, "provider", r), B(this, "signer", null)) : ue.throwArgumentError("invalid signer or provider", "signerOrProvider", r), B(this, "callStatic", {}), B(this, "estimateGas", {}), B(this, "functions", {}), B(this, "populateTransaction", {}), B(this, "filters", {});
    {
      const o = {};
      Object.keys(this.interface.events).forEach((a) => {
        const l = this.interface.events[a];
        B(this.filters, a, (...h) => ({
          address: this.address,
          topics: this.interface.encodeFilterTopics(l, h)
        })), o[l.name] || (o[l.name] = []), o[l.name].push(a);
      }), Object.keys(o).forEach((a) => {
        const l = o[a];
        l.length === 1 ? B(this.filters, a, this.filters[l[0]]) : ue.warn(`Duplicate definition of ${a} (${l.join(", ")})`);
      });
    }
    if (B(this, "_runningEvents", {}), B(this, "_wrappedEmits", {}), e == null && ue.throwArgumentError("invalid contract address or ENS name", "addressOrName", e), B(this, "address", e), this.provider)
      B(this, "resolvedAddress", Gi(this.provider, e));
    else
      try {
        B(this, "resolvedAddress", Promise.resolve(le(e)));
      } catch {
        ue.throwError("provider is required to use ENS name as contract address", _.errors.UNSUPPORTED_OPERATION, {
          operation: "new Contract"
        });
      }
    this.resolvedAddress.catch((o) => {
    });
    const i = {}, s = {};
    Object.keys(this.interface.functions).forEach((o) => {
      const a = this.interface.functions[o];
      if (s[o]) {
        ue.warn(`Duplicate ABI entry for ${JSON.stringify(o)}`);
        return;
      }
      s[o] = !0;
      {
        const l = a.name;
        i[`%${l}`] || (i[`%${l}`] = []), i[`%${l}`].push(o);
      }
      this[o] == null && B(this, o, Ea(this, a, !0)), this.functions[o] == null && B(this.functions, o, Ea(this, a, !1)), this.callStatic[o] == null && B(this.callStatic, o, Sf(this, a, !0)), this.populateTransaction[o] == null && B(this.populateTransaction, o, pd(this, a)), this.estimateGas[o] == null && B(this.estimateGas, o, bd(this, a));
    }), Object.keys(i).forEach((o) => {
      const a = i[o];
      if (a.length > 1)
        return;
      o = o.substring(1);
      const l = a[0];
      try {
        this[o] == null && B(this, o, this[l]);
      } catch {
      }
      this.functions[o] == null && B(this.functions, o, this.functions[l]), this.callStatic[o] == null && B(this.callStatic, o, this.callStatic[l]), this.populateTransaction[o] == null && B(this.populateTransaction, o, this.populateTransaction[l]), this.estimateGas[o] == null && B(this.estimateGas, o, this.estimateGas[l]);
    });
  }
  static getContractAddress(e) {
    return Vi(e);
  }
  static getInterface(e) {
    return $s.isInterface(e) ? e : new $s(e);
  }
  // @TODO: Allow timeout?
  deployed() {
    return this._deployed();
  }
  _deployed(e) {
    return this._deployedPromise || (this.deployTransaction ? this._deployedPromise = this.deployTransaction.wait().then(() => this) : this._deployedPromise = this.provider.getCode(this.address, e).then((t) => (t === "0x" && ue.throwError("contract not deployed", _.errors.UNSUPPORTED_OPERATION, {
      contractAddress: this.address,
      operation: "getDeployed"
    }), this))), this._deployedPromise;
  }
  // @TODO:
  // estimateFallback(overrides?: TransactionRequest): Promise<BigNumber>
  // @TODO:
  // estimateDeploy(bytecode: string, ...args): Promise<BigNumber>
  fallback(e) {
    this.signer || ue.throwError("sending a transactions require a signer", _.errors.UNSUPPORTED_OPERATION, { operation: "sendTransaction(fallback)" });
    const t = ge(e || {});
    return ["from", "to"].forEach(function(r) {
      t[r] != null && ue.throwError("cannot override " + r, _.errors.UNSUPPORTED_OPERATION, { operation: r });
    }), t.to = this.resolvedAddress, this.deployed().then(() => this.signer.sendTransaction(t));
  }
  // Reconnect to a different signer or provider
  connect(e) {
    typeof e == "string" && (e = new Yi(e, this.provider));
    const t = new this.constructor(this.address, this.interface, e);
    return this.deployTransaction && B(t, "deployTransaction", this.deployTransaction), t;
  }
  // Re-attach to a different on-chain instance of this contract
  attach(e) {
    return new this.constructor(e, this.interface, this.signer || this.provider);
  }
  static isIndexed(e) {
    return Ui.isIndexed(e);
  }
  _normalizeRunningEvent(e) {
    return this._runningEvents[e.tag] ? this._runningEvents[e.tag] : e;
  }
  _getRunningEvent(e) {
    if (typeof e == "string") {
      if (e === "error")
        return this._normalizeRunningEvent(new md());
      if (e === "event")
        return this._normalizeRunningEvent(new ri("event", null));
      if (e === "*")
        return this._normalizeRunningEvent(new Sa(this.address, this.interface));
      const t = this.interface.getEvent(e);
      return this._normalizeRunningEvent(new _a(this.address, this.interface, t));
    }
    if (e.topics && e.topics.length > 0) {
      try {
        const r = e.topics[0];
        if (typeof r != "string")
          throw new Error("invalid topic");
        const i = this.interface.getEvent(r);
        return this._normalizeRunningEvent(new _a(this.address, this.interface, i, e.topics));
      } catch {
      }
      const t = {
        address: this.address,
        topics: e.topics
      };
      return this._normalizeRunningEvent(new ri(kf(t), t));
    }
    return this._normalizeRunningEvent(new Sa(this.address, this.interface));
  }
  _checkRunningEvents(e) {
    if (e.listenerCount() === 0) {
      delete this._runningEvents[e.tag];
      const t = this._wrappedEmits[e.tag];
      t && e.filter && (this.provider.off(e.filter, t), delete this._wrappedEmits[e.tag]);
    }
  }
  // Subclasses can override this to gracefully recover
  // from parse errors if they wish
  _wrapEvent(e, t, r) {
    const i = mt(t);
    return i.removeListener = () => {
      r && (e.removeListener(r), this._checkRunningEvents(e));
    }, i.getBlock = () => this.provider.getBlock(t.blockHash), i.getTransaction = () => this.provider.getTransaction(t.transactionHash), i.getTransactionReceipt = () => this.provider.getTransactionReceipt(t.transactionHash), e.prepareEvent(i), i;
  }
  _addEventListener(e, t, r) {
    if (this.provider || ue.throwError("events require a provider or a signer with a provider", _.errors.UNSUPPORTED_OPERATION, { operation: "once" }), e.addListener(t, r), this._runningEvents[e.tag] = e, !this._wrappedEmits[e.tag]) {
      const i = (s) => {
        let o = this._wrapEvent(e, s, t);
        if (o.decodeError == null)
          try {
            const a = e.getEmit(o);
            this.emit(e.filter, ...a);
          } catch (a) {
            o.decodeError = a.error;
          }
        e.filter != null && this.emit("event", o), o.decodeError != null && this.emit("error", o.decodeError, o);
      };
      this._wrappedEmits[e.tag] = i, e.filter != null && this.provider.on(e.filter, i);
    }
  }
  queryFilter(e, t, r) {
    const i = this._getRunningEvent(e), s = ge(i.filter);
    return typeof t == "string" && re(t, 32) ? (r != null && ue.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", r), s.blockHash = t) : (s.fromBlock = t ?? 0, s.toBlock = r ?? "latest"), this.provider.getLogs(s).then((o) => o.map((a) => this._wrapEvent(i, a, null)));
  }
  on(e, t) {
    return this._addEventListener(this._getRunningEvent(e), t, !1), this;
  }
  once(e, t) {
    return this._addEventListener(this._getRunningEvent(e), t, !0), this;
  }
  emit(e, ...t) {
    if (!this.provider)
      return !1;
    const r = this._getRunningEvent(e), i = r.run(t) > 0;
    return this._checkRunningEvents(r), i;
  }
  listenerCount(e) {
    return this.provider ? e == null ? Object.keys(this._runningEvents).reduce((t, r) => t + this._runningEvents[r].listenerCount(), 0) : this._getRunningEvent(e).listenerCount() : 0;
  }
  listeners(e) {
    if (!this.provider)
      return [];
    if (e == null) {
      const t = [];
      for (let r in this._runningEvents)
        this._runningEvents[r].listeners().forEach((i) => {
          t.push(i);
        });
      return t;
    }
    return this._getRunningEvent(e).listeners();
  }
  removeAllListeners(e) {
    if (!this.provider)
      return this;
    if (e == null) {
      for (const r in this._runningEvents) {
        const i = this._runningEvents[r];
        i.removeAllListeners(), this._checkRunningEvents(i);
      }
      return this;
    }
    const t = this._getRunningEvent(e);
    return t.removeAllListeners(), this._checkRunningEvents(t), this;
  }
  off(e, t) {
    if (!this.provider)
      return this;
    const r = this._getRunningEvent(e);
    return r.removeListener(t), this._checkRunningEvents(r), this;
  }
  removeListener(e, t) {
    return this.off(e, t);
  }
}
class qi extends Pf {
}
class vd {
  constructor(e, t, r) {
    let i = null;
    typeof t == "string" ? i = t : kr(t) ? i = G(t) : t && typeof t.object == "string" ? i = t.object : i = "!", i.substring(0, 2) !== "0x" && (i = "0x" + i), (!re(i) || i.length % 2) && ue.throwArgumentError("invalid bytecode", "bytecode", t), r && !Pr.isSigner(r) && ue.throwArgumentError("invalid signer", "signer", r), B(this, "bytecode", i), B(this, "interface", lt(new.target, "getInterface")(e)), B(this, "signer", r || null);
  }
  // @TODO: Future; rename to populateTransaction?
  getDeployTransaction(...e) {
    let t = {};
    if (e.length === this.interface.deploy.inputs.length + 1 && typeof e[e.length - 1] == "object") {
      t = ge(e.pop());
      for (const r in t)
        if (!xd[r])
          throw new Error("unknown transaction override " + r);
    }
    return ["data", "from", "to"].forEach((r) => {
      t[r] != null && ue.throwError("cannot override " + r, _.errors.UNSUPPORTED_OPERATION, { operation: r });
    }), t.value && !H.from(t.value).isZero() && !this.interface.deploy.payable && ue.throwError("non-payable constructor cannot override value", _.errors.UNSUPPORTED_OPERATION, {
      operation: "overrides.value",
      value: t.value
    }), ue.checkArgumentCount(e.length, this.interface.deploy.inputs.length, " in Contract constructor"), t.data = G(de([
      this.bytecode,
      this.interface.encodeDeploy(e)
    ])), t;
  }
  deploy(...e) {
    return _r(this, void 0, void 0, function* () {
      let t = {};
      e.length === this.interface.deploy.inputs.length + 1 && (t = e.pop()), ue.checkArgumentCount(e.length, this.interface.deploy.inputs.length, " in Contract constructor");
      const r = yield Jn(this.signer, e, this.interface.deploy.inputs);
      r.push(t);
      const i = this.getDeployTransaction(...r), s = yield this.signer.sendTransaction(i), o = lt(this.constructor, "getContractAddress")(s), a = lt(this.constructor, "getContract")(o, this.interface, this.signer);
      return _f(a, s), B(a, "deployTransaction", s), a;
    });
  }
  attach(e) {
    return this.constructor.getContract(e, this.interface, this.signer);
  }
  connect(e) {
    return new this.constructor(this.interface, this.bytecode, e);
  }
  static fromSolidity(e, t) {
    e == null && ue.throwError("missing compiler output", _.errors.MISSING_ARGUMENT, { argument: "compilerOutput" }), typeof e == "string" && (e = JSON.parse(e));
    const r = e.abi;
    let i = null;
    return e.bytecode ? i = e.bytecode : e.evm && e.evm.bytecode && (i = e.evm.bytecode), new this(r, i, t);
  }
  static getInterface(e) {
    return qi.getInterface(e);
  }
  static getContractAddress(e) {
    return Vi(e);
  }
  static getContract(e, t, r) {
    return new qi(e, t, r);
  }
}
class Cf {
  constructor(e) {
    B(this, "alphabet", e), B(this, "base", e.length), B(this, "_alphabetMap", {}), B(this, "_leader", e.charAt(0));
    for (let t = 0; t < e.length; t++)
      this._alphabetMap[e.charAt(t)] = t;
  }
  encode(e) {
    let t = K(e);
    if (t.length === 0)
      return "";
    let r = [0];
    for (let s = 0; s < t.length; ++s) {
      let o = t[s];
      for (let a = 0; a < r.length; ++a)
        o += r[a] << 8, r[a] = o % this.base, o = o / this.base | 0;
      for (; o > 0; )
        r.push(o % this.base), o = o / this.base | 0;
    }
    let i = "";
    for (let s = 0; t[s] === 0 && s < t.length - 1; ++s)
      i += this._leader;
    for (let s = r.length - 1; s >= 0; --s)
      i += this.alphabet[r[s]];
    return i;
  }
  decode(e) {
    if (typeof e != "string")
      throw new TypeError("Expected String");
    let t = [];
    if (e.length === 0)
      return new Uint8Array(t);
    t.push(0);
    for (let r = 0; r < e.length; r++) {
      let i = this._alphabetMap[e[r]];
      if (i === void 0)
        throw new Error("Non-base" + this.base + " character");
      let s = i;
      for (let o = 0; o < t.length; ++o)
        s += t[o] * this.base, t[o] = s & 255, s >>= 8;
      for (; s > 0; )
        t.push(s & 255), s >>= 8;
    }
    for (let r = 0; e[r] === this._leader && r < e.length - 1; ++r)
      t.push(0);
    return K(new Uint8Array(t.reverse()));
  }
}
new Cf("abcdefghijklmnopqrstuvwxyz234567");
const _n = new Cf("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
var Sn;
(function(n) {
  n.sha256 = "sha256", n.sha512 = "sha512";
})(Sn || (Sn = {}));
const yd = "sha2/5.7.0", wd = new _(yd);
function If(n) {
  return "0x" + yt.ripemd160().update(K(n)).digest("hex");
}
function cr(n) {
  return "0x" + yt.sha256().update(K(n)).digest("hex");
}
function Ad(n) {
  return "0x" + yt.sha512().update(K(n)).digest("hex");
}
function ni(n, e, t) {
  return Sn[n] || wd.throwError("unsupported algorithm " + n, _.errors.UNSUPPORTED_OPERATION, {
    operation: "hmac",
    algorithm: n
  }), "0x" + yt.hmac(yt[n], K(e)).update(K(t)).digest("hex");
}
function No(n, e, t, r, i) {
  n = K(n), e = K(e);
  let s, o = 1;
  const a = new Uint8Array(r), l = new Uint8Array(e.length + 4);
  l.set(e);
  let h, x;
  for (let b = 1; b <= o; b++) {
    l[e.length] = b >> 24 & 255, l[e.length + 1] = b >> 16 & 255, l[e.length + 2] = b >> 8 & 255, l[e.length + 3] = b & 255;
    let E = K(ni(i, n, l));
    s || (s = E.length, x = new Uint8Array(s), o = Math.ceil(r / s), h = r - (o - 1) * s), x.set(E);
    for (let C = 1; C < t; C++) {
      E = K(ni(i, n, E));
      for (let y = 0; y < s; y++)
        x[y] ^= E[y];
    }
    const S = (b - 1) * s, I = b === o ? h : s;
    a.set(K(x).slice(0, I), S);
  }
  return G(a);
}
const Ed = "wordlists/5.7.0", _d = new _(Ed);
class Tn {
  constructor(e) {
    _d.checkAbstract(new.target, Tn), B(this, "locale", e);
  }
  // Subclasses may override this
  split(e) {
    return e.toLowerCase().split(/ +/g);
  }
  // Subclasses may override this
  join(e) {
    return e.join(" ");
  }
  static check(e) {
    const t = [];
    for (let r = 0; r < 2048; r++) {
      const i = e.getWord(r);
      if (r !== e.getWordIndex(i))
        return "0x";
      t.push(i);
    }
    return wr(t.join(`
`) + `
`);
  }
  static register(e, t) {
    t || (t = e.locale);
  }
}
const Sd = "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo";
let Vn = null;
function ka(n) {
  if (Vn == null && (Vn = Sd.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), Tn.check(n) !== "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60"))
    throw Vn = null, new Error("BIP39 Wordlist for en (English) FAILED");
}
class kd extends Tn {
  constructor() {
    super("en");
  }
  getWord(e) {
    return ka(this), Vn[e];
  }
  getWordIndex(e) {
    return ka(this), Vn.indexOf(e);
  }
}
const Mf = new kd();
Tn.register(Mf);
const no = {
  en: Mf
}, Pd = "hdnode/5.7.0", ii = new _(Pd), Cd = H.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Id = nt("Bitcoin seed"), un = 2147483648;
function Nf(n) {
  return (1 << n) - 1 << 8 - n;
}
function Md(n) {
  return (1 << n) - 1;
}
function bi(n) {
  return xe(G(n), 32);
}
function Pa(n) {
  return _n.encode(de([n, rt(cr(cr(n)), 0, 4)]));
}
function To(n) {
  if (n == null)
    return no.en;
  if (typeof n == "string") {
    const e = no[n];
    return e == null && ii.throwArgumentError("unknown locale", "wordlist", n), e;
  }
  return n;
}
const an = {}, kn = "m/44'/60'/0'/0/0";
class St {
  /**
   *  This constructor should not be called directly.
   *
   *  Please use:
   *   - fromMnemonic
   *   - fromSeed
   */
  constructor(e, t, r, i, s, o, a, l) {
    if (e !== an)
      throw new Error("HDNode constructor cannot be called directly");
    if (t) {
      const h = new $r(t);
      B(this, "privateKey", h.privateKey), B(this, "publicKey", h.compressedPublicKey);
    } else
      B(this, "privateKey", null), B(this, "publicKey", G(r));
    B(this, "parentFingerprint", i), B(this, "fingerprint", rt(If(cr(this.publicKey)), 0, 4)), B(this, "address", Ar(this.publicKey)), B(this, "chainCode", s), B(this, "index", o), B(this, "depth", a), l == null ? (B(this, "mnemonic", null), B(this, "path", null)) : typeof l == "string" ? (B(this, "mnemonic", null), B(this, "path", l)) : (B(this, "mnemonic", l), B(this, "path", l.path));
  }
  get extendedKey() {
    if (this.depth >= 256)
      throw new Error("Depth too large!");
    return Pa(de([
      this.privateKey != null ? "0x0488ADE4" : "0x0488B21E",
      G(this.depth),
      this.parentFingerprint,
      xe(G(this.index), 4),
      this.chainCode,
      this.privateKey != null ? de(["0x00", this.privateKey]) : this.publicKey
    ]));
  }
  neuter() {
    return new St(an, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, this.path);
  }
  _derive(e) {
    if (e > 4294967295)
      throw new Error("invalid index - " + String(e));
    let t = this.path;
    t && (t += "/" + (e & ~un));
    const r = new Uint8Array(37);
    if (e & un) {
      if (!this.privateKey)
        throw new Error("cannot derive child of neutered node");
      r.set(K(this.privateKey), 1), t && (t += "'");
    } else
      r.set(K(this.publicKey));
    for (let b = 24; b >= 0; b -= 8)
      r[33 + (b >> 3)] = e >> 24 - b & 255;
    const i = K(ni(Sn.sha512, this.chainCode, r)), s = i.slice(0, 32), o = i.slice(32);
    let a = null, l = null;
    this.privateKey ? a = bi(H.from(s).add(this.privateKey).mod(Cd)) : l = new $r(G(s))._addPoint(this.publicKey);
    let h = t;
    const x = this.mnemonic;
    return x && (h = Object.freeze({
      phrase: x.phrase,
      path: t,
      locale: x.locale || "en"
    })), new St(an, a, l, this.fingerprint, bi(o), e, this.depth + 1, h);
  }
  derivePath(e) {
    const t = e.split("/");
    if (t.length === 0 || t[0] === "m" && this.depth !== 0)
      throw new Error("invalid path - " + e);
    t[0] === "m" && t.shift();
    let r = this;
    for (let i = 0; i < t.length; i++) {
      const s = t[i];
      if (s.match(/^[0-9]+'$/)) {
        const o = parseInt(s.substring(0, s.length - 1));
        if (o >= un)
          throw new Error("invalid path index - " + s);
        r = r._derive(un + o);
      } else if (s.match(/^[0-9]+$/)) {
        const o = parseInt(s);
        if (o >= un)
          throw new Error("invalid path index - " + s);
        r = r._derive(o);
      } else
        throw new Error("invalid path component - " + s);
    }
    return r;
  }
  static _fromSeed(e, t) {
    const r = K(e);
    if (r.length < 16 || r.length > 64)
      throw new Error("invalid seed");
    const i = K(ni(Sn.sha512, Id, r));
    return new St(an, bi(i.slice(0, 32)), null, "0x00000000", bi(i.slice(32)), 0, 0, t);
  }
  static fromMnemonic(e, t, r) {
    return r = To(r), e = rs(ts(e, r), r), St._fromSeed(Tf(e, t), {
      phrase: e,
      path: "m",
      locale: r.locale
    });
  }
  static fromSeed(e) {
    return St._fromSeed(e, null);
  }
  static fromExtendedKey(e) {
    const t = _n.decode(e);
    (t.length !== 82 || Pa(t.slice(0, 78)) !== e) && ii.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
    const r = t[4], i = G(t.slice(5, 9)), s = parseInt(G(t.slice(9, 13)).substring(2), 16), o = G(t.slice(13, 45)), a = t.slice(45, 78);
    switch (G(t.slice(0, 4))) {
      case "0x0488b21e":
      case "0x043587cf":
        return new St(an, null, G(a), i, o, s, r, null);
      case "0x0488ade4":
      case "0x04358394 ":
        if (a[0] !== 0)
          break;
        return new St(an, G(a.slice(1)), null, i, o, s, r, null);
    }
    return ii.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
  }
}
function Tf(n, e) {
  e || (e = "");
  const t = nt("mnemonic" + e, Qt.NFKD);
  return No(nt(n, Qt.NFKD), t, 2048, 64, "sha512");
}
function ts(n, e) {
  e = To(e), ii.checkNormalize();
  const t = e.split(n);
  if (t.length % 3 !== 0)
    throw new Error("invalid mnemonic");
  const r = K(new Uint8Array(Math.ceil(11 * t.length / 8)));
  let i = 0;
  for (let h = 0; h < t.length; h++) {
    let x = e.getWordIndex(t[h].normalize("NFKD"));
    if (x === -1)
      throw new Error("invalid mnemonic");
    for (let b = 0; b < 11; b++)
      x & 1 << 10 - b && (r[i >> 3] |= 1 << 7 - i % 8), i++;
  }
  const s = 32 * t.length / 3, o = t.length / 3, a = Nf(o);
  if ((K(cr(r.slice(0, s / 8)))[0] & a) !== (r[r.length - 1] & a))
    throw new Error("invalid checksum");
  return G(r.slice(0, s / 8));
}
function rs(n, e) {
  if (e = To(e), n = K(n), n.length % 4 !== 0 || n.length < 16 || n.length > 32)
    throw new Error("invalid entropy");
  const t = [0];
  let r = 11;
  for (let o = 0; o < n.length; o++)
    r > 8 ? (t[t.length - 1] <<= 8, t[t.length - 1] |= n[o], r -= 8) : (t[t.length - 1] <<= r, t[t.length - 1] |= n[o] >> 8 - r, t.push(n[o] & Md(8 - r)), r += 3);
  const i = n.length / 4, s = K(cr(n))[0] & Nf(i);
  return t[t.length - 1] <<= i, t[t.length - 1] |= s >> 8 - i, e.join(t.map((o) => e.getWord(o)));
}
function Nd(n, e) {
  try {
    return ts(n, e), !0;
  } catch {
  }
  return !1;
}
function Td(n) {
  return (typeof n != "number" || n < 0 || n >= un || n % 1) && ii.throwArgumentError("invalid account index", "index", n), `m/44'/60'/${n}'/0/0`;
}
const Rd = "random/5.7.0", io = new _(Rd);
function Bd() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}
const Ca = Bd();
let Mi = Ca.crypto || Ca.msCrypto;
(!Mi || !Mi.getRandomValues) && (io.warn("WARNING: Missing strong random number source"), Mi = {
  getRandomValues: function(n) {
    return io.throwError("no secure random source avaialble", _.errors.UNSUPPORTED_OPERATION, {
      operation: "crypto.getRandomValues"
    });
  }
});
function xn(n) {
  (n <= 0 || n > 1024 || n % 1 || n != n) && io.throwArgumentError("invalid length", "length", n);
  const e = new Uint8Array(n);
  return Mi.getRandomValues(e), K(e);
}
function Rf(n) {
  n = n.slice();
  for (let e = n.length - 1; e > 0; e--) {
    const t = Math.floor(Math.random() * (e + 1)), r = n[e];
    n[e] = n[t], n[t] = r;
  }
  return n;
}
var Bf = { exports: {} };
(function(n, e) {
  (function(t) {
    function r(p) {
      return parseInt(p) === p;
    }
    function i(p) {
      if (!r(p.length))
        return !1;
      for (var c = 0; c < p.length; c++)
        if (!r(p[c]) || p[c] < 0 || p[c] > 255)
          return !1;
      return !0;
    }
    function s(p, c) {
      if (p.buffer && ArrayBuffer.isView(p) && p.name === "Uint8Array")
        return c && (p.slice ? p = p.slice() : p = Array.prototype.slice.call(p)), p;
      if (Array.isArray(p)) {
        if (!i(p))
          throw new Error("Array contains invalid value: " + p);
        return new Uint8Array(p);
      }
      if (r(p.length) && i(p))
        return new Uint8Array(p);
      throw new Error("unsupported array-like object");
    }
    function o(p) {
      return new Uint8Array(p);
    }
    function a(p, c, m, M, u) {
      (M != null || u != null) && (p.slice ? p = p.slice(M, u) : p = Array.prototype.slice.call(p, M, u)), c.set(p, m);
    }
    var l = function() {
      function p(m) {
        var M = [], u = 0;
        for (m = encodeURI(m); u < m.length; ) {
          var P = m.charCodeAt(u++);
          P === 37 ? (M.push(parseInt(m.substr(u, 2), 16)), u += 2) : M.push(P);
        }
        return s(M);
      }
      function c(m) {
        for (var M = [], u = 0; u < m.length; ) {
          var P = m[u];
          P < 128 ? (M.push(String.fromCharCode(P)), u++) : P > 191 && P < 224 ? (M.push(String.fromCharCode((P & 31) << 6 | m[u + 1] & 63)), u += 2) : (M.push(String.fromCharCode((P & 15) << 12 | (m[u + 1] & 63) << 6 | m[u + 2] & 63)), u += 3);
        }
        return M.join("");
      }
      return {
        toBytes: p,
        fromBytes: c
      };
    }(), h = function() {
      function p(M) {
        for (var u = [], P = 0; P < M.length; P += 2)
          u.push(parseInt(M.substr(P, 2), 16));
        return u;
      }
      var c = "0123456789abcdef";
      function m(M) {
        for (var u = [], P = 0; P < M.length; P++) {
          var O = M[P];
          u.push(c[(O & 240) >> 4] + c[O & 15]);
        }
        return u.join("");
      }
      return {
        toBytes: p,
        fromBytes: m
      };
    }(), x = { 16: 10, 24: 12, 32: 14 }, b = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145], E = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], S = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125], I = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986], C = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766], y = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126], T = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436], D = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890], U = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935], z = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600], L = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480], W = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795], Z = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855], Y = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150], ne = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
    function fe(p) {
      for (var c = [], m = 0; m < p.length; m += 4)
        c.push(
          p[m] << 24 | p[m + 1] << 16 | p[m + 2] << 8 | p[m + 3]
        );
      return c;
    }
    var Q = function(p) {
      if (!(this instanceof Q))
        throw Error("AES must be instanitated with `new`");
      Object.defineProperty(this, "key", {
        value: s(p, !0)
      }), this._prepare();
    };
    Q.prototype._prepare = function() {
      var p = x[this.key.length];
      if (p == null)
        throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var c = 0; c <= p; c++)
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      for (var m = (p + 1) * 4, M = this.key.length / 4, u = fe(this.key), P, c = 0; c < M; c++)
        P = c >> 2, this._Ke[P][c % 4] = u[c], this._Kd[p - P][c % 4] = u[c];
      for (var O = 0, R = M, F; R < m; ) {
        if (F = u[M - 1], u[0] ^= E[F >> 16 & 255] << 24 ^ E[F >> 8 & 255] << 16 ^ E[F & 255] << 8 ^ E[F >> 24 & 255] ^ b[O] << 24, O += 1, M != 8)
          for (var c = 1; c < M; c++)
            u[c] ^= u[c - 1];
        else {
          for (var c = 1; c < M / 2; c++)
            u[c] ^= u[c - 1];
          F = u[M / 2 - 1], u[M / 2] ^= E[F & 255] ^ E[F >> 8 & 255] << 8 ^ E[F >> 16 & 255] << 16 ^ E[F >> 24 & 255] << 24;
          for (var c = M / 2 + 1; c < M; c++)
            u[c] ^= u[c - 1];
        }
        for (var c = 0, J, q; c < M && R < m; )
          J = R >> 2, q = R % 4, this._Ke[J][q] = u[c], this._Kd[p - J][q] = u[c++], R++;
      }
      for (var J = 1; J < p; J++)
        for (var q = 0; q < 4; q++)
          F = this._Kd[J][q], this._Kd[J][q] = W[F >> 24 & 255] ^ Z[F >> 16 & 255] ^ Y[F >> 8 & 255] ^ ne[F & 255];
    }, Q.prototype.encrypt = function(p) {
      if (p.length != 16)
        throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var c = this._Ke.length - 1, m = [0, 0, 0, 0], M = fe(p), u = 0; u < 4; u++)
        M[u] ^= this._Ke[0][u];
      for (var P = 1; P < c; P++) {
        for (var u = 0; u < 4; u++)
          m[u] = I[M[u] >> 24 & 255] ^ C[M[(u + 1) % 4] >> 16 & 255] ^ y[M[(u + 2) % 4] >> 8 & 255] ^ T[M[(u + 3) % 4] & 255] ^ this._Ke[P][u];
        M = m.slice();
      }
      for (var O = o(16), R, u = 0; u < 4; u++)
        R = this._Ke[c][u], O[4 * u] = (E[M[u] >> 24 & 255] ^ R >> 24) & 255, O[4 * u + 1] = (E[M[(u + 1) % 4] >> 16 & 255] ^ R >> 16) & 255, O[4 * u + 2] = (E[M[(u + 2) % 4] >> 8 & 255] ^ R >> 8) & 255, O[4 * u + 3] = (E[M[(u + 3) % 4] & 255] ^ R) & 255;
      return O;
    }, Q.prototype.decrypt = function(p) {
      if (p.length != 16)
        throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var c = this._Kd.length - 1, m = [0, 0, 0, 0], M = fe(p), u = 0; u < 4; u++)
        M[u] ^= this._Kd[0][u];
      for (var P = 1; P < c; P++) {
        for (var u = 0; u < 4; u++)
          m[u] = D[M[u] >> 24 & 255] ^ U[M[(u + 3) % 4] >> 16 & 255] ^ z[M[(u + 2) % 4] >> 8 & 255] ^ L[M[(u + 1) % 4] & 255] ^ this._Kd[P][u];
        M = m.slice();
      }
      for (var O = o(16), R, u = 0; u < 4; u++)
        R = this._Kd[c][u], O[4 * u] = (S[M[u] >> 24 & 255] ^ R >> 24) & 255, O[4 * u + 1] = (S[M[(u + 3) % 4] >> 16 & 255] ^ R >> 16) & 255, O[4 * u + 2] = (S[M[(u + 2) % 4] >> 8 & 255] ^ R >> 8) & 255, O[4 * u + 3] = (S[M[(u + 1) % 4] & 255] ^ R) & 255;
      return O;
    };
    var pe = function(p) {
      if (!(this instanceof pe))
        throw Error("AES must be instanitated with `new`");
      this.description = "Electronic Code Block", this.name = "ecb", this._aes = new Q(p);
    };
    pe.prototype.encrypt = function(p) {
      if (p = s(p), p.length % 16 !== 0)
        throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var c = o(p.length), m = o(16), M = 0; M < p.length; M += 16)
        a(p, m, 0, M, M + 16), m = this._aes.encrypt(m), a(m, c, M);
      return c;
    }, pe.prototype.decrypt = function(p) {
      if (p = s(p), p.length % 16 !== 0)
        throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var c = o(p.length), m = o(16), M = 0; M < p.length; M += 16)
        a(p, m, 0, M, M + 16), m = this._aes.decrypt(m), a(m, c, M);
      return c;
    };
    var w = function(p, c) {
      if (!(this instanceof w))
        throw Error("AES must be instanitated with `new`");
      if (this.description = "Cipher Block Chaining", this.name = "cbc", !c)
        c = o(16);
      else if (c.length != 16)
        throw new Error("invalid initialation vector size (must be 16 bytes)");
      this._lastCipherblock = s(c, !0), this._aes = new Q(p);
    };
    w.prototype.encrypt = function(p) {
      if (p = s(p), p.length % 16 !== 0)
        throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var c = o(p.length), m = o(16), M = 0; M < p.length; M += 16) {
        a(p, m, 0, M, M + 16);
        for (var u = 0; u < 16; u++)
          m[u] ^= this._lastCipherblock[u];
        this._lastCipherblock = this._aes.encrypt(m), a(this._lastCipherblock, c, M);
      }
      return c;
    }, w.prototype.decrypt = function(p) {
      if (p = s(p), p.length % 16 !== 0)
        throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var c = o(p.length), m = o(16), M = 0; M < p.length; M += 16) {
        a(p, m, 0, M, M + 16), m = this._aes.decrypt(m);
        for (var u = 0; u < 16; u++)
          c[M + u] = m[u] ^ this._lastCipherblock[u];
        a(p, this._lastCipherblock, 0, M, M + 16);
      }
      return c;
    };
    var f = function(p, c, m) {
      if (!(this instanceof f))
        throw Error("AES must be instanitated with `new`");
      if (this.description = "Cipher Feedback", this.name = "cfb", !c)
        c = o(16);
      else if (c.length != 16)
        throw new Error("invalid initialation vector size (must be 16 size)");
      m || (m = 1), this.segmentSize = m, this._shiftRegister = s(c, !0), this._aes = new Q(p);
    };
    f.prototype.encrypt = function(p) {
      if (p.length % this.segmentSize != 0)
        throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var c = s(p, !0), m, M = 0; M < c.length; M += this.segmentSize) {
        m = this._aes.encrypt(this._shiftRegister);
        for (var u = 0; u < this.segmentSize; u++)
          c[M + u] ^= m[u];
        a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(c, this._shiftRegister, 16 - this.segmentSize, M, M + this.segmentSize);
      }
      return c;
    }, f.prototype.decrypt = function(p) {
      if (p.length % this.segmentSize != 0)
        throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var c = s(p, !0), m, M = 0; M < c.length; M += this.segmentSize) {
        m = this._aes.encrypt(this._shiftRegister);
        for (var u = 0; u < this.segmentSize; u++)
          c[M + u] ^= m[u];
        a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(p, this._shiftRegister, 16 - this.segmentSize, M, M + this.segmentSize);
      }
      return c;
    };
    var d = function(p, c) {
      if (!(this instanceof d))
        throw Error("AES must be instanitated with `new`");
      if (this.description = "Output Feedback", this.name = "ofb", !c)
        c = o(16);
      else if (c.length != 16)
        throw new Error("invalid initialation vector size (must be 16 bytes)");
      this._lastPrecipher = s(c, !0), this._lastPrecipherIndex = 16, this._aes = new Q(p);
    };
    d.prototype.encrypt = function(p) {
      for (var c = s(p, !0), m = 0; m < c.length; m++)
        this._lastPrecipherIndex === 16 && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), c[m] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      return c;
    }, d.prototype.decrypt = d.prototype.encrypt;
    var g = function(p) {
      if (!(this instanceof g))
        throw Error("Counter must be instanitated with `new`");
      p !== 0 && !p && (p = 1), typeof p == "number" ? (this._counter = o(16), this.setValue(p)) : this.setBytes(p);
    };
    g.prototype.setValue = function(p) {
      if (typeof p != "number" || parseInt(p) != p)
        throw new Error("invalid counter value (must be an integer)");
      for (var c = 15; c >= 0; --c)
        this._counter[c] = p % 256, p = p >> 8;
    }, g.prototype.setBytes = function(p) {
      if (p = s(p, !0), p.length != 16)
        throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = p;
    }, g.prototype.increment = function() {
      for (var p = 15; p >= 0; p--)
        if (this._counter[p] === 255)
          this._counter[p] = 0;
        else {
          this._counter[p]++;
          break;
        }
    };
    var v = function(p, c) {
      if (!(this instanceof v))
        throw Error("AES must be instanitated with `new`");
      this.description = "Counter", this.name = "ctr", c instanceof g || (c = new g(c)), this._counter = c, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new Q(p);
    };
    v.prototype.encrypt = function(p) {
      for (var c = s(p, !0), m = 0; m < c.length; m++)
        this._remainingCounterIndex === 16 && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), c[m] ^= this._remainingCounter[this._remainingCounterIndex++];
      return c;
    }, v.prototype.decrypt = v.prototype.encrypt;
    function A(p) {
      p = s(p, !0);
      var c = 16 - p.length % 16, m = o(p.length + c);
      a(p, m);
      for (var M = p.length; M < m.length; M++)
        m[M] = c;
      return m;
    }
    function k(p) {
      if (p = s(p, !0), p.length < 16)
        throw new Error("PKCS#7 invalid length");
      var c = p[p.length - 1];
      if (c > 16)
        throw new Error("PKCS#7 padding byte out of range");
      for (var m = p.length - c, M = 0; M < c; M++)
        if (p[m + M] !== c)
          throw new Error("PKCS#7 invalid padding byte");
      var u = o(m);
      return a(p, u, 0, 0, m), u;
    }
    var N = {
      AES: Q,
      Counter: g,
      ModeOfOperation: {
        ecb: pe,
        cbc: w,
        cfb: f,
        ofb: d,
        ctr: v
      },
      utils: {
        hex: h,
        utf8: l
      },
      padding: {
        pkcs7: {
          pad: A,
          strip: k
        }
      },
      _arrayTest: {
        coerceArray: s,
        createArray: o,
        copyArray: a
      }
    };
    n.exports = N;
  })();
})(Bf);
var Od = Bf.exports;
const jt = /* @__PURE__ */ en(Od), Of = "json-wallets/5.7.0";
function Yr(n) {
  return typeof n == "string" && n.substring(0, 2) !== "0x" && (n = "0x" + n), K(n);
}
function Fn(n, e) {
  for (n = String(n); n.length < e; )
    n = "0" + n;
  return n;
}
function Ro(n) {
  return typeof n == "string" ? nt(n, Qt.NFKC) : K(n);
}
function tt(n, e) {
  let t = n;
  const r = e.toLowerCase().split("/");
  for (let i = 0; i < r.length; i++) {
    let s = null;
    for (const o in t)
      if (o.toLowerCase() === r[i]) {
        s = t[o];
        break;
      }
    if (s === null)
      return null;
    t = s;
  }
  return t;
}
function Fd(n) {
  const e = K(n);
  e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
  const t = G(e);
  return [
    t.substring(2, 10),
    t.substring(10, 14),
    t.substring(14, 18),
    t.substring(18, 22),
    t.substring(22, 34)
  ].join("-");
}
const Dd = new _(Of);
class Ld extends rn {
  isCrowdsaleAccount(e) {
    return !!(e && e._isCrowdsaleAccount);
  }
}
function Ff(n, e) {
  const t = JSON.parse(n);
  e = Ro(e);
  const r = le(tt(t, "ethaddr")), i = Yr(tt(t, "encseed"));
  (!i || i.length % 16 !== 0) && Dd.throwArgumentError("invalid encseed", "json", n);
  const s = K(No(e, e, 2e3, 32, "sha256")).slice(0, 16), o = i.slice(0, 16), a = i.slice(16), l = new jt.ModeOfOperation.cbc(s, o), h = jt.padding.pkcs7.strip(K(l.decrypt(a)));
  let x = "";
  for (let S = 0; S < h.length; S++)
    x += String.fromCharCode(h[S]);
  const b = nt(x), E = he(b);
  return new Ld({
    _isCrowdsaleAccount: !0,
    address: r,
    privateKey: E
  });
}
function Bo(n) {
  let e = null;
  try {
    e = JSON.parse(n);
  } catch {
    return !1;
  }
  return e.encseed && e.ethaddr;
}
function Oo(n) {
  let e = null;
  try {
    e = JSON.parse(n);
  } catch {
    return !1;
  }
  return !(!e.version || parseInt(e.version) !== e.version || parseInt(e.version) !== 3);
}
function Ud(n) {
  if (Bo(n))
    try {
      return le(JSON.parse(n).ethaddr);
    } catch {
      return null;
    }
  if (Oo(n))
    try {
      return le(JSON.parse(n).address);
    } catch {
      return null;
    }
  return null;
}
var Df = { exports: {} };
(function(n, e) {
  (function(t) {
    function i(C) {
      const y = new Uint32Array([
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
      let T = 1779033703, D = 3144134277, U = 1013904242, z = 2773480762, L = 1359893119, W = 2600822924, Z = 528734635, Y = 1541459225;
      const ne = new Uint32Array(64);
      function fe(v) {
        let A = 0, k = v.length;
        for (; k >= 64; ) {
          let N = T, p = D, c = U, m = z, M = L, u = W, P = Z, O = Y, R, F, J, q, j;
          for (F = 0; F < 16; F++)
            J = A + F * 4, ne[F] = (v[J] & 255) << 24 | (v[J + 1] & 255) << 16 | (v[J + 2] & 255) << 8 | v[J + 3] & 255;
          for (F = 16; F < 64; F++)
            R = ne[F - 2], q = (R >>> 17 | R << 32 - 17) ^ (R >>> 19 | R << 32 - 19) ^ R >>> 10, R = ne[F - 15], j = (R >>> 7 | R << 32 - 7) ^ (R >>> 18 | R << 32 - 18) ^ R >>> 3, ne[F] = (q + ne[F - 7] | 0) + (j + ne[F - 16] | 0) | 0;
          for (F = 0; F < 64; F++)
            q = (((M >>> 6 | M << 32 - 6) ^ (M >>> 11 | M << 32 - 11) ^ (M >>> 25 | M << 32 - 25)) + (M & u ^ ~M & P) | 0) + (O + (y[F] + ne[F] | 0) | 0) | 0, j = ((N >>> 2 | N << 32 - 2) ^ (N >>> 13 | N << 32 - 13) ^ (N >>> 22 | N << 32 - 22)) + (N & p ^ N & c ^ p & c) | 0, O = P, P = u, u = M, M = m + q | 0, m = c, c = p, p = N, N = q + j | 0;
          T = T + N | 0, D = D + p | 0, U = U + c | 0, z = z + m | 0, L = L + M | 0, W = W + u | 0, Z = Z + P | 0, Y = Y + O | 0, A += 64, k -= 64;
        }
      }
      fe(C);
      let Q, pe = C.length % 64, w = C.length / 536870912 | 0, f = C.length << 3, d = pe < 56 ? 56 : 120, g = C.slice(C.length - pe, C.length);
      for (g.push(128), Q = pe + 1; Q < d; Q++)
        g.push(0);
      return g.push(w >>> 24 & 255), g.push(w >>> 16 & 255), g.push(w >>> 8 & 255), g.push(w >>> 0 & 255), g.push(f >>> 24 & 255), g.push(f >>> 16 & 255), g.push(f >>> 8 & 255), g.push(f >>> 0 & 255), fe(g), [
        T >>> 24 & 255,
        T >>> 16 & 255,
        T >>> 8 & 255,
        T >>> 0 & 255,
        D >>> 24 & 255,
        D >>> 16 & 255,
        D >>> 8 & 255,
        D >>> 0 & 255,
        U >>> 24 & 255,
        U >>> 16 & 255,
        U >>> 8 & 255,
        U >>> 0 & 255,
        z >>> 24 & 255,
        z >>> 16 & 255,
        z >>> 8 & 255,
        z >>> 0 & 255,
        L >>> 24 & 255,
        L >>> 16 & 255,
        L >>> 8 & 255,
        L >>> 0 & 255,
        W >>> 24 & 255,
        W >>> 16 & 255,
        W >>> 8 & 255,
        W >>> 0 & 255,
        Z >>> 24 & 255,
        Z >>> 16 & 255,
        Z >>> 8 & 255,
        Z >>> 0 & 255,
        Y >>> 24 & 255,
        Y >>> 16 & 255,
        Y >>> 8 & 255,
        Y >>> 0 & 255
      ];
    }
    function s(C, y, T) {
      C = C.length <= 64 ? C : i(C);
      const D = 64 + y.length + 4, U = new Array(D), z = new Array(64);
      let L, W = [];
      for (L = 0; L < 64; L++)
        U[L] = 54;
      for (L = 0; L < C.length; L++)
        U[L] ^= C[L];
      for (L = 0; L < y.length; L++)
        U[64 + L] = y[L];
      for (L = D - 4; L < D; L++)
        U[L] = 0;
      for (L = 0; L < 64; L++)
        z[L] = 92;
      for (L = 0; L < C.length; L++)
        z[L] ^= C[L];
      function Z() {
        for (let Y = D - 1; Y >= D - 4; Y--) {
          if (U[Y]++, U[Y] <= 255)
            return;
          U[Y] = 0;
        }
      }
      for (; T >= 32; )
        Z(), W = W.concat(i(z.concat(i(U)))), T -= 32;
      return T > 0 && (Z(), W = W.concat(i(z.concat(i(U))).slice(0, T))), W;
    }
    function o(C, y, T, D, U) {
      let z;
      for (x(C, (2 * T - 1) * 16, U, 0, 16), z = 0; z < 2 * T; z++)
        h(C, z * 16, U, 16), l(U, D), x(U, 0, C, y + z * 16, 16);
      for (z = 0; z < T; z++)
        x(C, y + z * 2 * 16, C, z * 16, 16);
      for (z = 0; z < T; z++)
        x(C, y + (z * 2 + 1) * 16, C, (z + T) * 16, 16);
    }
    function a(C, y) {
      return C << y | C >>> 32 - y;
    }
    function l(C, y) {
      x(C, 0, y, 0, 16);
      for (let T = 8; T > 0; T -= 2)
        y[4] ^= a(y[0] + y[12], 7), y[8] ^= a(y[4] + y[0], 9), y[12] ^= a(y[8] + y[4], 13), y[0] ^= a(y[12] + y[8], 18), y[9] ^= a(y[5] + y[1], 7), y[13] ^= a(y[9] + y[5], 9), y[1] ^= a(y[13] + y[9], 13), y[5] ^= a(y[1] + y[13], 18), y[14] ^= a(y[10] + y[6], 7), y[2] ^= a(y[14] + y[10], 9), y[6] ^= a(y[2] + y[14], 13), y[10] ^= a(y[6] + y[2], 18), y[3] ^= a(y[15] + y[11], 7), y[7] ^= a(y[3] + y[15], 9), y[11] ^= a(y[7] + y[3], 13), y[15] ^= a(y[11] + y[7], 18), y[1] ^= a(y[0] + y[3], 7), y[2] ^= a(y[1] + y[0], 9), y[3] ^= a(y[2] + y[1], 13), y[0] ^= a(y[3] + y[2], 18), y[6] ^= a(y[5] + y[4], 7), y[7] ^= a(y[6] + y[5], 9), y[4] ^= a(y[7] + y[6], 13), y[5] ^= a(y[4] + y[7], 18), y[11] ^= a(y[10] + y[9], 7), y[8] ^= a(y[11] + y[10], 9), y[9] ^= a(y[8] + y[11], 13), y[10] ^= a(y[9] + y[8], 18), y[12] ^= a(y[15] + y[14], 7), y[13] ^= a(y[12] + y[15], 9), y[14] ^= a(y[13] + y[12], 13), y[15] ^= a(y[14] + y[13], 18);
      for (let T = 0; T < 16; ++T)
        C[T] += y[T];
    }
    function h(C, y, T, D) {
      for (let U = 0; U < D; U++)
        T[U] ^= C[y + U];
    }
    function x(C, y, T, D, U) {
      for (; U--; )
        T[D++] = C[y++];
    }
    function b(C) {
      if (!C || typeof C.length != "number")
        return !1;
      for (let y = 0; y < C.length; y++) {
        const T = C[y];
        if (typeof T != "number" || T % 1 || T < 0 || T >= 256)
          return !1;
      }
      return !0;
    }
    function E(C, y) {
      if (typeof C != "number" || C % 1)
        throw new Error("invalid " + y);
      return C;
    }
    function S(C, y, T, D, U, z, L) {
      if (T = E(T, "N"), D = E(D, "r"), U = E(U, "p"), z = E(z, "dkLen"), T === 0 || T & T - 1)
        throw new Error("N must be power of 2");
      if (T > 2147483647 / 128 / D)
        throw new Error("N too large");
      if (D > 2147483647 / 128 / U)
        throw new Error("r too large");
      if (!b(C))
        throw new Error("password must be an array or buffer");
      if (C = Array.prototype.slice.call(C), !b(y))
        throw new Error("salt must be an array or buffer");
      y = Array.prototype.slice.call(y);
      let W = s(C, y, U * 128 * D);
      const Z = new Uint32Array(U * 32 * D);
      for (let M = 0; M < Z.length; M++) {
        const u = M * 4;
        Z[M] = (W[u + 3] & 255) << 24 | (W[u + 2] & 255) << 16 | (W[u + 1] & 255) << 8 | (W[u + 0] & 255) << 0;
      }
      const Y = new Uint32Array(64 * D), ne = new Uint32Array(32 * D * T), fe = 32 * D, Q = new Uint32Array(16), pe = new Uint32Array(16), w = U * T * 2;
      let f = 0, d = null, g = !1, v = 0, A = 0, k, N;
      const p = L ? parseInt(1e3 / D) : 4294967295, c = typeof setImmediate < "u" ? setImmediate : setTimeout, m = function() {
        if (g)
          return L(new Error("cancelled"), f / w);
        let M;
        switch (v) {
          case 0:
            N = A * 32 * D, x(Z, N, Y, 0, fe), v = 1, k = 0;
          case 1:
            M = T - k, M > p && (M = p);
            for (let P = 0; P < M; P++)
              x(Y, 0, ne, (k + P) * fe, fe), o(Y, fe, D, Q, pe);
            if (k += M, f += M, L) {
              const P = parseInt(1e3 * f / w);
              if (P !== d) {
                if (g = L(null, f / w), g)
                  break;
                d = P;
              }
            }
            if (k < T)
              break;
            k = 0, v = 2;
          case 2:
            M = T - k, M > p && (M = p);
            for (let P = 0; P < M; P++) {
              const O = (2 * D - 1) * 16, R = Y[O] & T - 1;
              h(ne, R * fe, Y, fe), o(Y, fe, D, Q, pe);
            }
            if (k += M, f += M, L) {
              const P = parseInt(1e3 * f / w);
              if (P !== d) {
                if (g = L(null, f / w), g)
                  break;
                d = P;
              }
            }
            if (k < T)
              break;
            if (x(Y, 0, Z, N, fe), A++, A < U) {
              v = 0;
              break;
            }
            W = [];
            for (let P = 0; P < Z.length; P++)
              W.push(Z[P] >> 0 & 255), W.push(Z[P] >> 8 & 255), W.push(Z[P] >> 16 & 255), W.push(Z[P] >> 24 & 255);
            const u = s(C, W, z);
            return L && L(null, 1, u), u;
        }
        L && c(m);
      };
      if (!L)
        for (; ; ) {
          const M = m();
          if (M != null)
            return M;
        }
      m();
    }
    const I = {
      scrypt: function(C, y, T, D, U, z, L) {
        return new Promise(function(W, Z) {
          let Y = 0;
          L && L(0), S(C, y, T, D, U, z, function(ne, fe, Q) {
            if (ne)
              Z(ne);
            else if (Q)
              L && Y !== 1 && L(1), W(new Uint8Array(Q));
            else if (L && fe !== Y)
              return Y = fe, L(fe);
          });
        });
      },
      syncScrypt: function(C, y, T, D, U, z) {
        return new Uint8Array(S(C, y, T, D, U, z));
      }
    };
    n.exports = I;
  })();
})(Df);
var Kd = Df.exports;
const Fo = /* @__PURE__ */ en(Kd);
var Hd = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const so = new _(Of);
function Ia(n) {
  return n != null && n.mnemonic && n.mnemonic.phrase;
}
class Gd extends rn {
  isKeystoreAccount(e) {
    return !!(e && e._isKeystoreAccount);
  }
}
function qd(n, e, t) {
  if (tt(n, "crypto/cipher") === "aes-128-ctr") {
    const i = Yr(tt(n, "crypto/cipherparams/iv")), s = new jt.Counter(i), o = new jt.ModeOfOperation.ctr(e, s);
    return K(o.decrypt(t));
  }
  return null;
}
function Lf(n, e) {
  const t = Yr(tt(n, "crypto/ciphertext"));
  if (G(he(de([e.slice(16, 32), t]))).substring(2) !== tt(n, "crypto/mac").toLowerCase())
    throw new Error("invalid password");
  const i = qd(n, e.slice(0, 16), t);
  i || so.throwError("unsupported cipher", _.errors.UNSUPPORTED_OPERATION, {
    operation: "decrypt"
  });
  const s = e.slice(32, 64), o = Ar(i);
  if (n.address) {
    let l = n.address.toLowerCase();
    if (l.substring(0, 2) !== "0x" && (l = "0x" + l), le(l) !== o)
      throw new Error("address mismatch");
  }
  const a = {
    _isKeystoreAccount: !0,
    address: o,
    privateKey: G(i)
  };
  if (tt(n, "x-ethers/version") === "0.1") {
    const l = Yr(tt(n, "x-ethers/mnemonicCiphertext")), h = Yr(tt(n, "x-ethers/mnemonicCounter")), x = new jt.Counter(h), b = new jt.ModeOfOperation.ctr(s, x), E = tt(n, "x-ethers/path") || kn, S = tt(n, "x-ethers/locale") || "en", I = K(b.decrypt(l));
    try {
      const C = rs(I, S), y = St.fromMnemonic(C, null, S).derivePath(E);
      if (y.privateKey != a.privateKey)
        throw new Error("mnemonic mismatch");
      a.mnemonic = y.mnemonic;
    } catch (C) {
      if (C.code !== _.errors.INVALID_ARGUMENT || C.argument !== "wordlist")
        throw C;
    }
  }
  return new Gd(a);
}
function Uf(n, e, t, r, i) {
  return K(No(n, e, t, r, i));
}
function zd(n, e, t, r, i) {
  return Promise.resolve(Uf(n, e, t, r, i));
}
function Kf(n, e, t, r, i) {
  const s = Ro(e), o = tt(n, "crypto/kdf");
  if (o && typeof o == "string") {
    const a = function(l, h) {
      return so.throwArgumentError("invalid key-derivation function parameters", l, h);
    };
    if (o.toLowerCase() === "scrypt") {
      const l = Yr(tt(n, "crypto/kdfparams/salt")), h = parseInt(tt(n, "crypto/kdfparams/n")), x = parseInt(tt(n, "crypto/kdfparams/r")), b = parseInt(tt(n, "crypto/kdfparams/p"));
      (!h || !x || !b) && a("kdf", o), h & h - 1 && a("N", h);
      const E = parseInt(tt(n, "crypto/kdfparams/dklen"));
      return E !== 32 && a("dklen", E), r(s, l, h, x, b, 64, i);
    } else if (o.toLowerCase() === "pbkdf2") {
      const l = Yr(tt(n, "crypto/kdfparams/salt"));
      let h = null;
      const x = tt(n, "crypto/kdfparams/prf");
      x === "hmac-sha256" ? h = "sha256" : x === "hmac-sha512" ? h = "sha512" : a("prf", x);
      const b = parseInt(tt(n, "crypto/kdfparams/c")), E = parseInt(tt(n, "crypto/kdfparams/dklen"));
      return E !== 32 && a("dklen", E), t(s, l, b, E, h);
    }
  }
  return so.throwArgumentError("unsupported key-derivation function", "kdf", o);
}
function jd(n, e) {
  const t = JSON.parse(n), r = Kf(t, e, Uf, Fo.syncScrypt);
  return Lf(t, r);
}
function Wd(n, e, t) {
  return Hd(this, void 0, void 0, function* () {
    const r = JSON.parse(n), i = yield Kf(r, e, zd, Fo.scrypt, t);
    return Lf(r, i);
  });
}
function Jd(n, e, t, r) {
  try {
    if (le(n.address) !== Ar(n.privateKey))
      throw new Error("address/privateKey mismatch");
    if (Ia(n)) {
      const y = n.mnemonic;
      if (St.fromMnemonic(y.phrase, null, y.locale).derivePath(y.path || kn).privateKey != n.privateKey)
        throw new Error("mnemonic mismatch");
    }
  } catch (y) {
    return Promise.reject(y);
  }
  typeof t == "function" && !r && (r = t, t = {}), t || (t = {});
  const i = K(n.privateKey), s = Ro(e);
  let o = null, a = null, l = null;
  if (Ia(n)) {
    const y = n.mnemonic;
    o = K(ts(y.phrase, y.locale || "en")), a = y.path || kn, l = y.locale || "en";
  }
  let h = t.client;
  h || (h = "ethers.js");
  let x = null;
  t.salt ? x = K(t.salt) : x = xn(32);
  let b = null;
  if (t.iv) {
    if (b = K(t.iv), b.length !== 16)
      throw new Error("invalid iv");
  } else
    b = xn(16);
  let E = null;
  if (t.uuid) {
    if (E = K(t.uuid), E.length !== 16)
      throw new Error("invalid uuid");
  } else
    E = xn(16);
  let S = 1 << 17, I = 8, C = 1;
  return t.scrypt && (t.scrypt.N && (S = t.scrypt.N), t.scrypt.r && (I = t.scrypt.r), t.scrypt.p && (C = t.scrypt.p)), Fo.scrypt(s, x, S, I, C, 64, r).then((y) => {
    y = K(y);
    const T = y.slice(0, 16), D = y.slice(16, 32), U = y.slice(32, 64), z = new jt.Counter(b), L = new jt.ModeOfOperation.ctr(T, z), W = K(L.encrypt(i)), Z = he(de([D, W])), Y = {
      address: n.address.substring(2).toLowerCase(),
      id: Fd(E),
      version: 3,
      crypto: {
        cipher: "aes-128-ctr",
        cipherparams: {
          iv: G(b).substring(2)
        },
        ciphertext: G(W).substring(2),
        kdf: "scrypt",
        kdfparams: {
          salt: G(x).substring(2),
          n: S,
          dklen: 32,
          p: C,
          r: I
        },
        mac: Z.substring(2)
      }
    };
    if (o) {
      const ne = xn(16), fe = new jt.Counter(ne), Q = new jt.ModeOfOperation.ctr(U, fe), pe = K(Q.encrypt(o)), w = /* @__PURE__ */ new Date(), f = w.getUTCFullYear() + "-" + Fn(w.getUTCMonth() + 1, 2) + "-" + Fn(w.getUTCDate(), 2) + "T" + Fn(w.getUTCHours(), 2) + "-" + Fn(w.getUTCMinutes(), 2) + "-" + Fn(w.getUTCSeconds(), 2) + ".0Z";
      Y["x-ethers"] = {
        client: h,
        gethFilename: "UTC--" + f + "--" + Y.address,
        mnemonicCounter: G(ne).substring(2),
        mnemonicCiphertext: G(pe).substring(2),
        path: a,
        locale: l,
        version: "0.1"
      };
    }
    return JSON.stringify(Y);
  });
}
function Vd(n, e, t) {
  if (Bo(n)) {
    t && t(0);
    const r = Ff(n, e);
    return t && t(1), Promise.resolve(r);
  }
  return Oo(n) ? Wd(n, e, t) : Promise.reject(new Error("invalid JSON wallet"));
}
function $d(n, e) {
  if (Bo(n))
    return Ff(n, e);
  if (Oo(n))
    return jd(n, e);
  throw new Error("invalid JSON wallet");
}
const Yd = "wallet/5.7.0";
var Ma = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const fn = new _(Yd);
function Qd(n) {
  return n != null && re(n.privateKey, 32) && n.address != null;
}
function Zd(n) {
  const e = n.mnemonic;
  return e && e.phrase;
}
class Wr extends Pr {
  constructor(e, t) {
    if (super(), Qd(e)) {
      const r = new $r(e.privateKey);
      if (B(this, "_signingKey", () => r), B(this, "address", Ar(this.publicKey)), this.address !== le(e.address) && fn.throwArgumentError("privateKey/address mismatch", "privateKey", "[REDACTED]"), Zd(e)) {
        const i = e.mnemonic;
        B(this, "_mnemonic", () => ({
          phrase: i.phrase,
          path: i.path || kn,
          locale: i.locale || "en"
        }));
        const s = this.mnemonic, o = St.fromMnemonic(s.phrase, null, s.locale).derivePath(s.path);
        Ar(o.privateKey) !== this.address && fn.throwArgumentError("mnemonic/address mismatch", "privateKey", "[REDACTED]");
      } else
        B(this, "_mnemonic", () => null);
    } else {
      if ($r.isSigningKey(e))
        e.curve !== "secp256k1" && fn.throwArgumentError("unsupported curve; must be secp256k1", "privateKey", "[REDACTED]"), B(this, "_signingKey", () => e);
      else {
        typeof e == "string" && e.match(/^[0-9a-f]*$/i) && e.length === 64 && (e = "0x" + e);
        const r = new $r(e);
        B(this, "_signingKey", () => r);
      }
      B(this, "_mnemonic", () => null), B(this, "address", Ar(this.publicKey));
    }
    t && !sn.isProvider(t) && fn.throwArgumentError("invalid provider", "provider", t), B(this, "provider", t || null);
  }
  get mnemonic() {
    return this._mnemonic();
  }
  get privateKey() {
    return this._signingKey().privateKey;
  }
  get publicKey() {
    return this._signingKey().publicKey;
  }
  getAddress() {
    return Promise.resolve(this.address);
  }
  connect(e) {
    return new Wr(this, e);
  }
  signTransaction(e) {
    return et(e).then((t) => {
      t.from != null && (le(t.from) !== this.address && fn.throwArgumentError("transaction from address mismatch", "transaction.from", e.from), delete t.from);
      const r = this._signingKey().signDigest(he(ro(t)));
      return ro(t, r);
    });
  }
  signMessage(e) {
    return Ma(this, void 0, void 0, function* () {
      return Ws(this._signingKey().signDigest(ci(e)));
    });
  }
  _signTypedData(e, t, r) {
    return Ma(this, void 0, void 0, function* () {
      const i = yield ct.resolveNames(e, t, r, (s) => (this.provider == null && fn.throwError("cannot resolve ENS names without a provider", _.errors.UNSUPPORTED_OPERATION, {
        operation: "resolveName",
        value: s
      }), this.provider.resolveName(s)));
      return Ws(this._signingKey().signDigest(ct.hash(i.domain, t, i.value)));
    });
  }
  encrypt(e, t, r) {
    if (typeof t == "function" && !r && (r = t, t = {}), r && typeof r != "function")
      throw new Error("invalid callback");
    return t || (t = {}), Jd(this, e, t, r);
  }
  /**
   *  Static methods to create Wallet instances.
   */
  static createRandom(e) {
    let t = xn(16);
    e || (e = {}), e.extraEntropy && (t = K(rt(he(de([t, e.extraEntropy])), 0, 16)));
    const r = rs(t, e.locale);
    return Wr.fromMnemonic(r, e.path, e.locale);
  }
  static fromEncryptedJson(e, t, r) {
    return Vd(e, t, r).then((i) => new Wr(i));
  }
  static fromEncryptedJsonSync(e, t) {
    return new Wr($d(e, t));
  }
  static fromMnemonic(e, t, r) {
    return t || (t = kn), new Wr(St.fromMnemonic(e, null, r).derivePath(t));
  }
}
function Xd(n, e) {
  return Nn(ci(n), e);
}
function ex(n, e, t, r) {
  return Nn(ct.hash(n, e, t), r);
}
const tx = "networks/5.7.1", Na = new _(tx);
function rx(n) {
  return n && typeof n.renetwork == "function";
}
function sr(n) {
  const e = function(t, r) {
    r == null && (r = {});
    const i = [];
    if (t.InfuraProvider && r.infura !== "-")
      try {
        i.push(new t.InfuraProvider(n, r.infura));
      } catch {
      }
    if (t.EtherscanProvider && r.etherscan !== "-")
      try {
        i.push(new t.EtherscanProvider(n, r.etherscan));
      } catch {
      }
    if (t.AlchemyProvider && r.alchemy !== "-")
      try {
        i.push(new t.AlchemyProvider(n, r.alchemy));
      } catch {
      }
    if (t.PocketProvider && r.pocket !== "-") {
      const s = ["goerli", "ropsten", "rinkeby", "sepolia"];
      try {
        const o = new t.PocketProvider(n, r.pocket);
        o.network && s.indexOf(o.network.name) === -1 && i.push(o);
      } catch {
      }
    }
    if (t.CloudflareProvider && r.cloudflare !== "-")
      try {
        i.push(new t.CloudflareProvider(n));
      } catch {
      }
    if (t.AnkrProvider && r.ankr !== "-")
      try {
        const s = ["ropsten"], o = new t.AnkrProvider(n, r.ankr);
        o.network && s.indexOf(o.network.name) === -1 && i.push(o);
      } catch {
      }
    if (i.length === 0)
      return null;
    if (t.FallbackProvider) {
      let s = 1;
      return r.quorum != null ? s = r.quorum : n === "homestead" && (s = 2), new t.FallbackProvider(i, s);
    }
    return i[0];
  };
  return e.renetwork = function(t) {
    return sr(t);
  }, e;
}
function zi(n, e) {
  const t = function(r, i) {
    return r.JsonRpcProvider ? new r.JsonRpcProvider(n, e) : null;
  };
  return t.renetwork = function(r) {
    return zi(n, r);
  }, t;
}
const Ta = {
  chainId: 1,
  ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  name: "homestead",
  _defaultProvider: sr("homestead")
}, Ra = {
  chainId: 3,
  ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  name: "ropsten",
  _defaultProvider: sr("ropsten")
}, Ba = {
  chainId: 63,
  name: "classicMordor",
  _defaultProvider: zi("https://www.ethercluster.com/mordor", "classicMordor")
}, gi = {
  unspecified: { chainId: 0, name: "unspecified" },
  homestead: Ta,
  mainnet: Ta,
  morden: { chainId: 2, name: "morden" },
  ropsten: Ra,
  testnet: Ra,
  rinkeby: {
    chainId: 4,
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    name: "rinkeby",
    _defaultProvider: sr("rinkeby")
  },
  kovan: {
    chainId: 42,
    name: "kovan",
    _defaultProvider: sr("kovan")
  },
  goerli: {
    chainId: 5,
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    name: "goerli",
    _defaultProvider: sr("goerli")
  },
  kintsugi: { chainId: 1337702, name: "kintsugi" },
  sepolia: {
    chainId: 11155111,
    name: "sepolia",
    _defaultProvider: sr("sepolia")
  },
  // ETC (See: #351)
  classic: {
    chainId: 61,
    name: "classic",
    _defaultProvider: zi("https://www.ethercluster.com/etc", "classic")
  },
  classicMorden: { chainId: 62, name: "classicMorden" },
  classicMordor: Ba,
  classicTestnet: Ba,
  classicKotti: {
    chainId: 6,
    name: "classicKotti",
    _defaultProvider: zi("https://www.ethercluster.com/kotti", "classicKotti")
  },
  xdai: { chainId: 100, name: "xdai" },
  matic: {
    chainId: 137,
    name: "matic",
    _defaultProvider: sr("matic")
  },
  maticmum: { chainId: 80001, name: "maticmum" },
  optimism: {
    chainId: 10,
    name: "optimism",
    _defaultProvider: sr("optimism")
  },
  "optimism-kovan": { chainId: 69, name: "optimism-kovan" },
  "optimism-goerli": { chainId: 420, name: "optimism-goerli" },
  arbitrum: { chainId: 42161, name: "arbitrum" },
  "arbitrum-rinkeby": { chainId: 421611, name: "arbitrum-rinkeby" },
  "arbitrum-goerli": { chainId: 421613, name: "arbitrum-goerli" },
  bnb: { chainId: 56, name: "bnb" },
  bnbt: { chainId: 97, name: "bnbt" }
};
function Do(n) {
  if (n == null)
    return null;
  if (typeof n == "number") {
    for (const r in gi) {
      const i = gi[r];
      if (i.chainId === n)
        return {
          name: i.name,
          chainId: i.chainId,
          ensAddress: i.ensAddress || null,
          _defaultProvider: i._defaultProvider || null
        };
    }
    return {
      chainId: n,
      name: "unknown"
    };
  }
  if (typeof n == "string") {
    const r = gi[n];
    return r == null ? null : {
      name: r.name,
      chainId: r.chainId,
      ensAddress: r.ensAddress,
      _defaultProvider: r._defaultProvider || null
    };
  }
  const e = gi[n.name];
  if (!e)
    return typeof n.chainId != "number" && Na.throwArgumentError("invalid network chainId", "network", n), n;
  n.chainId !== 0 && n.chainId !== e.chainId && Na.throwArgumentError("network chainId mismatch", "network", n);
  let t = n._defaultProvider || null;
  return t == null && e._defaultProvider && (rx(e._defaultProvider) ? t = e._defaultProvider.renetwork(n) : t = e._defaultProvider), {
    name: n.name,
    chainId: e.chainId,
    ensAddress: n.ensAddress || e.ensAddress || null,
    _defaultProvider: t
  };
}
const nx = "web/5.7.1";
var ix = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
function sx(n, e) {
  return ix(this, void 0, void 0, function* () {
    e == null && (e = {});
    const t = {
      method: e.method || "GET",
      headers: e.headers || {},
      body: e.body || void 0
    };
    if (e.skipFetchSetup !== !0 && (t.mode = "cors", t.cache = "no-cache", t.credentials = "same-origin", t.redirect = "follow", t.referrer = "client"), e.fetchOptions != null) {
      const o = e.fetchOptions;
      o.mode && (t.mode = o.mode), o.cache && (t.cache = o.cache), o.credentials && (t.credentials = o.credentials), o.redirect && (t.redirect = o.redirect), o.referrer && (t.referrer = o.referrer);
    }
    const r = yield fetch(n, t), i = yield r.arrayBuffer(), s = {};
    return r.headers.forEach ? r.headers.forEach((o, a) => {
      s[a.toLowerCase()] = o;
    }) : r.headers.keys().forEach((o) => {
      s[o.toLowerCase()] = r.headers.get(o);
    }), {
      headers: s,
      statusCode: r.status,
      statusMessage: r.statusText,
      body: K(new Uint8Array(i))
    };
  });
}
var ox = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const Ot = new _(nx);
function Oa(n) {
  return new Promise((e) => {
    setTimeout(e, n);
  });
}
function mr(n, e) {
  if (n == null)
    return null;
  if (typeof n == "string")
    return n;
  if (oi(n)) {
    if (e && (e.split("/")[0] === "text" || e.split(";")[0].trim() === "application/json"))
      try {
        return nn(n);
      } catch {
      }
    return G(n);
  }
  return n;
}
function ax(n) {
  return nt(n.replace(/%([0-9a-f][0-9a-f])/gi, (e, t) => String.fromCharCode(parseInt(t, 16))));
}
function Hf(n, e, t) {
  const r = typeof n == "object" && n.throttleLimit != null ? n.throttleLimit : 12;
  Ot.assertArgument(r > 0 && r % 1 === 0, "invalid connection throttle limit", "connection.throttleLimit", r);
  const i = typeof n == "object" ? n.throttleCallback : null, s = typeof n == "object" && typeof n.throttleSlotInterval == "number" ? n.throttleSlotInterval : 100;
  Ot.assertArgument(s > 0 && s % 1 === 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", s);
  const o = typeof n == "object" ? !!n.errorPassThrough : !1, a = {};
  let l = null;
  const h = {
    method: "GET"
  };
  let x = !1, b = 2 * 60 * 1e3;
  if (typeof n == "string")
    l = n;
  else if (typeof n == "object") {
    if ((n == null || n.url == null) && Ot.throwArgumentError("missing URL", "connection.url", n), l = n.url, typeof n.timeout == "number" && n.timeout > 0 && (b = n.timeout), n.headers)
      for (const T in n.headers)
        a[T.toLowerCase()] = { key: T, value: String(n.headers[T]) }, ["if-none-match", "if-modified-since"].indexOf(T.toLowerCase()) >= 0 && (x = !0);
    if (h.allowGzip = !!n.allowGzip, n.user != null && n.password != null) {
      l.substring(0, 6) !== "https:" && n.allowInsecureAuthentication !== !0 && Ot.throwError("basic authentication requires a secure https url", _.errors.INVALID_ARGUMENT, { argument: "url", url: l, user: n.user, password: "[REDACTED]" });
      const T = n.user + ":" + n.password;
      a.authorization = {
        key: "Authorization",
        value: "Basic " + _o(nt(T))
      };
    }
    n.skipFetchSetup != null && (h.skipFetchSetup = !!n.skipFetchSetup), n.fetchOptions != null && (h.fetchOptions = ge(n.fetchOptions));
  }
  const E = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"), S = l ? l.match(E) : null;
  if (S)
    try {
      const T = {
        statusCode: 200,
        statusMessage: "OK",
        headers: { "content-type": S[1] || "text/plain" },
        body: S[2] ? Eo(S[3]) : ax(S[3])
      };
      let D = T.body;
      return t && (D = t(T.body, T)), Promise.resolve(D);
    } catch (T) {
      Ot.throwError("processing response error", _.errors.SERVER_ERROR, {
        body: mr(S[1], S[2]),
        error: T,
        requestBody: null,
        requestMethod: "GET",
        url: l
      });
    }
  e && (h.method = "POST", h.body = e, a["content-type"] == null && (a["content-type"] = { key: "Content-Type", value: "application/octet-stream" }), a["content-length"] == null && (a["content-length"] = { key: "Content-Length", value: String(e.length) }));
  const I = {};
  Object.keys(a).forEach((T) => {
    const D = a[T];
    I[D.key] = D.value;
  }), h.headers = I;
  const C = function() {
    let T = null;
    return { promise: new Promise(function(z, L) {
      b && (T = setTimeout(() => {
        T != null && (T = null, L(Ot.makeError("timeout", _.errors.TIMEOUT, {
          requestBody: mr(h.body, I["content-type"]),
          requestMethod: h.method,
          timeout: b,
          url: l
        })));
      }, b));
    }), cancel: function() {
      T != null && (clearTimeout(T), T = null);
    } };
  }(), y = function() {
    return ox(this, void 0, void 0, function* () {
      for (let T = 0; T < r; T++) {
        let D = null;
        try {
          if (D = yield sx(l, h), T < r) {
            if (D.statusCode === 301 || D.statusCode === 302) {
              const z = D.headers.location || "";
              if (h.method === "GET" && z.match(/^https:/)) {
                l = D.headers.location;
                continue;
              }
            } else if (D.statusCode === 429) {
              let z = !0;
              if (i && (z = yield i(T, l)), z) {
                let L = 0;
                const W = D.headers["retry-after"];
                typeof W == "string" && W.match(/^[1-9][0-9]*$/) ? L = parseInt(W) * 1e3 : L = s * parseInt(String(Math.random() * Math.pow(2, T))), yield Oa(L);
                continue;
              }
            }
          }
        } catch (z) {
          D = z.response, D == null && (C.cancel(), Ot.throwError("missing response", _.errors.SERVER_ERROR, {
            requestBody: mr(h.body, I["content-type"]),
            requestMethod: h.method,
            serverError: z,
            url: l
          }));
        }
        let U = D.body;
        if (x && D.statusCode === 304 ? U = null : !o && (D.statusCode < 200 || D.statusCode >= 300) && (C.cancel(), Ot.throwError("bad response", _.errors.SERVER_ERROR, {
          status: D.statusCode,
          headers: D.headers,
          body: mr(U, D.headers ? D.headers["content-type"] : null),
          requestBody: mr(h.body, I["content-type"]),
          requestMethod: h.method,
          url: l
        })), t)
          try {
            const z = yield t(U, D);
            return C.cancel(), z;
          } catch (z) {
            if (z.throttleRetry && T < r) {
              let L = !0;
              if (i && (L = yield i(T, l)), L) {
                const W = s * parseInt(String(Math.random() * Math.pow(2, T)));
                yield Oa(W);
                continue;
              }
            }
            C.cancel(), Ot.throwError("processing response error", _.errors.SERVER_ERROR, {
              body: mr(U, D.headers ? D.headers["content-type"] : null),
              error: z,
              requestBody: mr(h.body, I["content-type"]),
              requestMethod: h.method,
              url: l
            });
          }
        return C.cancel(), U;
      }
      return Ot.throwError("failed response", _.errors.SERVER_ERROR, {
        requestBody: mr(h.body, I["content-type"]),
        requestMethod: h.method,
        url: l
      });
    });
  }();
  return Promise.race([C.promise, y]);
}
function Rn(n, e, t) {
  let r = (s, o) => {
    let a = null;
    if (s != null)
      try {
        a = JSON.parse(nn(s));
      } catch (l) {
        Ot.throwError("invalid JSON", _.errors.SERVER_ERROR, {
          body: s,
          error: l
        });
      }
    return t && (a = t(a, o)), a;
  }, i = null;
  if (e != null) {
    i = nt(e);
    const s = typeof n == "string" ? { url: n } : ge(n);
    s.headers ? Object.keys(s.headers).filter((a) => a.toLowerCase() === "content-type").length !== 0 || (s.headers = ge(s.headers), s.headers["content-type"] = "application/json") : s.headers = { "content-type": "application/json" }, n = s;
  }
  return Hf(n, i, r);
}
function Vr(n, e) {
  return e || (e = {}), e = ge(e), e.floor == null && (e.floor = 0), e.ceiling == null && (e.ceiling = 1e4), e.interval == null && (e.interval = 250), new Promise(function(t, r) {
    let i = null, s = !1;
    const o = () => s ? !1 : (s = !0, i && clearTimeout(i), !0);
    e.timeout && (i = setTimeout(() => {
      o() && r(new Error("timeout"));
    }, e.timeout));
    const a = e.retryLimit;
    let l = 0;
    function h() {
      return n().then(function(x) {
        if (x !== void 0)
          o() && t(x);
        else if (e.oncePoll)
          e.oncePoll.once("poll", h);
        else if (e.onceBlock)
          e.onceBlock.once("block", h);
        else if (!s) {
          if (l++, l > a) {
            o() && r(new Error("retry limit reached"));
            return;
          }
          let b = e.interval * parseInt(String(Math.random() * Math.pow(2, l)));
          b < e.floor && (b = e.floor), b > e.ceiling && (b = e.ceiling), setTimeout(h, b);
        }
        return null;
      }, function(x) {
        o() && r(x);
      });
    }
    h();
  });
}
var ji = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", oo = {};
for (var mi = 0; mi < ji.length; mi++) {
  var Os = ji.charAt(mi);
  if (oo[Os] !== void 0)
    throw new TypeError(Os + " is ambiguous");
  oo[Os] = mi;
}
function vn(n) {
  var e = n >> 25;
  return (n & 33554431) << 5 ^ -(e >> 0 & 1) & 996825010 ^ -(e >> 1 & 1) & 642813549 ^ -(e >> 2 & 1) & 513874426 ^ -(e >> 3 & 1) & 1027748829 ^ -(e >> 4 & 1) & 705979059;
}
function Gf(n) {
  for (var e = 1, t = 0; t < n.length; ++t) {
    var r = n.charCodeAt(t);
    if (r < 33 || r > 126)
      return "Invalid prefix (" + n + ")";
    e = vn(e) ^ r >> 5;
  }
  for (e = vn(e), t = 0; t < n.length; ++t) {
    var i = n.charCodeAt(t);
    e = vn(e) ^ i & 31;
  }
  return e;
}
function fx(n, e, t) {
  if (t = t || 90, n.length + 7 + e.length > t)
    throw new TypeError("Exceeds length limit");
  n = n.toLowerCase();
  var r = Gf(n);
  if (typeof r == "string")
    throw new Error(r);
  for (var i = n + "1", s = 0; s < e.length; ++s) {
    var o = e[s];
    if (o >> 5)
      throw new Error("Non 5-bit word");
    r = vn(r) ^ o, i += ji.charAt(o);
  }
  for (s = 0; s < 6; ++s)
    r = vn(r);
  for (r ^= 1, s = 0; s < 6; ++s) {
    var a = r >> (5 - s) * 5 & 31;
    i += ji.charAt(a);
  }
  return i;
}
function qf(n, e) {
  if (e = e || 90, n.length < 8)
    return n + " too short";
  if (n.length > e)
    return "Exceeds length limit";
  var t = n.toLowerCase(), r = n.toUpperCase();
  if (n !== t && n !== r)
    return "Mixed-case string " + n;
  n = t;
  var i = n.lastIndexOf("1");
  if (i === -1)
    return "No separator character for " + n;
  if (i === 0)
    return "Missing prefix for " + n;
  var s = n.slice(0, i), o = n.slice(i + 1);
  if (o.length < 6)
    return "Data too short";
  var a = Gf(s);
  if (typeof a == "string")
    return a;
  for (var l = [], h = 0; h < o.length; ++h) {
    var x = o.charAt(h), b = oo[x];
    if (b === void 0)
      return "Unknown character " + x;
    a = vn(a) ^ b, !(h + 6 >= o.length) && l.push(b);
  }
  return a !== 1 ? "Invalid checksum for " + n : { prefix: s, words: l };
}
function cx() {
  var n = qf.apply(null, arguments);
  if (typeof n == "object")
    return n;
}
function lx(n) {
  var e = qf.apply(null, arguments);
  if (typeof e == "object")
    return e;
  throw new Error(e);
}
function ns(n, e, t, r) {
  for (var i = 0, s = 0, o = (1 << t) - 1, a = [], l = 0; l < n.length; ++l)
    for (i = i << e | n[l], s += e; s >= t; )
      s -= t, a.push(i >> s & o);
  if (r)
    s > 0 && a.push(i << t - s & o);
  else {
    if (s >= e)
      return "Excess padding";
    if (i << t - s & o)
      return "Non-zero padding";
  }
  return a;
}
function ux(n) {
  var e = ns(n, 8, 5, !0);
  if (Array.isArray(e))
    return e;
}
function hx(n) {
  var e = ns(n, 8, 5, !0);
  if (Array.isArray(e))
    return e;
  throw new Error(e);
}
function dx(n) {
  var e = ns(n, 5, 8, !1);
  if (Array.isArray(e))
    return e;
}
function xx(n) {
  var e = ns(n, 5, 8, !1);
  if (Array.isArray(e))
    return e;
  throw new Error(e);
}
var px = {
  decodeUnsafe: cx,
  decode: lx,
  encode: fx,
  toWordsUnsafe: ux,
  toWords: hx,
  fromWordsUnsafe: dx,
  fromWords: xx
};
const Fa = /* @__PURE__ */ en(px), pt = "providers/5.7.2", Dn = new _(pt);
class $ {
  constructor() {
    this.formats = this.getDefaultFormats();
  }
  getDefaultFormats() {
    const e = {}, t = this.address.bind(this), r = this.bigNumber.bind(this), i = this.blockTag.bind(this), s = this.data.bind(this), o = this.hash.bind(this), a = this.hex.bind(this), l = this.number.bind(this), h = this.type.bind(this), x = (b) => this.data(b, !0);
    return e.transaction = {
      hash: o,
      type: h,
      accessList: $.allowNull(this.accessList.bind(this), null),
      blockHash: $.allowNull(o, null),
      blockNumber: $.allowNull(l, null),
      transactionIndex: $.allowNull(l, null),
      confirmations: $.allowNull(l, null),
      from: t,
      // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas)
      // must be set
      gasPrice: $.allowNull(r),
      maxPriorityFeePerGas: $.allowNull(r),
      maxFeePerGas: $.allowNull(r),
      gasLimit: r,
      to: $.allowNull(t, null),
      value: r,
      nonce: l,
      data: s,
      r: $.allowNull(this.uint256),
      s: $.allowNull(this.uint256),
      v: $.allowNull(l),
      creates: $.allowNull(t, null),
      raw: $.allowNull(s)
    }, e.transactionRequest = {
      from: $.allowNull(t),
      nonce: $.allowNull(l),
      gasLimit: $.allowNull(r),
      gasPrice: $.allowNull(r),
      maxPriorityFeePerGas: $.allowNull(r),
      maxFeePerGas: $.allowNull(r),
      to: $.allowNull(t),
      value: $.allowNull(r),
      data: $.allowNull(x),
      type: $.allowNull(l),
      accessList: $.allowNull(this.accessList.bind(this), null)
    }, e.receiptLog = {
      transactionIndex: l,
      blockNumber: l,
      transactionHash: o,
      address: t,
      topics: $.arrayOf(o),
      data: s,
      logIndex: l,
      blockHash: o
    }, e.receipt = {
      to: $.allowNull(this.address, null),
      from: $.allowNull(this.address, null),
      contractAddress: $.allowNull(t, null),
      transactionIndex: l,
      // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
      root: $.allowNull(a),
      gasUsed: r,
      logsBloom: $.allowNull(s),
      blockHash: o,
      transactionHash: o,
      logs: $.arrayOf(this.receiptLog.bind(this)),
      blockNumber: l,
      confirmations: $.allowNull(l, null),
      cumulativeGasUsed: r,
      effectiveGasPrice: $.allowNull(r),
      status: $.allowNull(l),
      type: h
    }, e.block = {
      hash: $.allowNull(o),
      parentHash: o,
      number: l,
      timestamp: l,
      nonce: $.allowNull(a),
      difficulty: this.difficulty.bind(this),
      gasLimit: r,
      gasUsed: r,
      miner: $.allowNull(t),
      extraData: s,
      transactions: $.allowNull($.arrayOf(o)),
      baseFeePerGas: $.allowNull(r)
    }, e.blockWithTransactions = ge(e.block), e.blockWithTransactions.transactions = $.allowNull($.arrayOf(this.transactionResponse.bind(this))), e.filter = {
      fromBlock: $.allowNull(i, void 0),
      toBlock: $.allowNull(i, void 0),
      blockHash: $.allowNull(o, void 0),
      address: $.allowNull(t, void 0),
      topics: $.allowNull(this.topics.bind(this), void 0)
    }, e.filterLog = {
      blockNumber: $.allowNull(l),
      blockHash: $.allowNull(o),
      transactionIndex: l,
      removed: $.allowNull(this.boolean.bind(this)),
      address: t,
      data: $.allowFalsish(s, "0x"),
      topics: $.arrayOf(o),
      transactionHash: o,
      logIndex: l
    }, e;
  }
  accessList(e) {
    return Ir(e || []);
  }
  // Requires a BigNumberish that is within the IEEE754 safe integer range; returns a number
  // Strict! Used on input.
  number(e) {
    return e === "0x" ? 0 : H.from(e).toNumber();
  }
  type(e) {
    return e === "0x" || e == null ? 0 : H.from(e).toNumber();
  }
  // Strict! Used on input.
  bigNumber(e) {
    return H.from(e);
  }
  // Requires a boolean, "true" or  "false"; returns a boolean
  boolean(e) {
    if (typeof e == "boolean")
      return e;
    if (typeof e == "string") {
      if (e = e.toLowerCase(), e === "true")
        return !0;
      if (e === "false")
        return !1;
    }
    throw new Error("invalid boolean - " + e);
  }
  hex(e, t) {
    return typeof e == "string" && (!t && e.substring(0, 2) !== "0x" && (e = "0x" + e), re(e)) ? e.toLowerCase() : Dn.throwArgumentError("invalid hash", "value", e);
  }
  data(e, t) {
    const r = this.hex(e, t);
    if (r.length % 2 !== 0)
      throw new Error("invalid data; odd-length - " + e);
    return r;
  }
  // Requires an address
  // Strict! Used on input.
  address(e) {
    return le(e);
  }
  callAddress(e) {
    if (!re(e, 32))
      return null;
    const t = le(rt(e, 12));
    return t === P0 ? null : t;
  }
  contractAddress(e) {
    return Vi(e);
  }
  // Strict! Used on input.
  blockTag(e) {
    if (e == null)
      return "latest";
    if (e === "earliest")
      return "0x0";
    switch (e) {
      case "earliest":
        return "0x0";
      case "latest":
      case "pending":
      case "safe":
      case "finalized":
        return e;
    }
    if (typeof e == "number" || re(e))
      return ai(e);
    throw new Error("invalid blockTag");
  }
  // Requires a hash, optionally requires 0x prefix; returns prefixed lowercase hash.
  hash(e, t) {
    const r = this.hex(e, t);
    return Yt(r) !== 32 ? Dn.throwArgumentError("invalid hash", "value", e) : r;
  }
  // Returns the difficulty as a number, or if too large (i.e. PoA network) null
  difficulty(e) {
    if (e == null)
      return null;
    const t = H.from(e);
    try {
      return t.toNumber();
    } catch {
    }
    return null;
  }
  uint256(e) {
    if (!re(e))
      throw new Error("invalid uint256");
    return xe(e, 32);
  }
  _block(e, t) {
    e.author != null && e.miner == null && (e.miner = e.author);
    const r = e._difficulty != null ? e._difficulty : e.difficulty, i = $.check(t, e);
    return i._difficulty = r == null ? null : H.from(r), i;
  }
  block(e) {
    return this._block(e, this.formats.block);
  }
  blockWithTransactions(e) {
    return this._block(e, this.formats.blockWithTransactions);
  }
  // Strict! Used on input.
  transactionRequest(e) {
    return $.check(this.formats.transactionRequest, e);
  }
  transactionResponse(e) {
    e.gas != null && e.gasLimit == null && (e.gasLimit = e.gas), e.to && H.from(e.to).isZero() && (e.to = "0x0000000000000000000000000000000000000000"), e.input != null && e.data == null && (e.data = e.input), e.to == null && e.creates == null && (e.creates = this.contractAddress(e)), (e.type === 1 || e.type === 2) && e.accessList == null && (e.accessList = []);
    const t = $.check(this.formats.transaction, e);
    if (e.chainId != null) {
      let r = e.chainId;
      re(r) && (r = H.from(r).toNumber()), t.chainId = r;
    } else {
      let r = e.networkId;
      r == null && t.v == null && (r = e.chainId), re(r) && (r = H.from(r).toNumber()), typeof r != "number" && t.v != null && (r = (t.v - 35) / 2, r < 0 && (r = 0), r = parseInt(r)), typeof r != "number" && (r = 0), t.chainId = r;
    }
    return t.blockHash && t.blockHash.replace(/0/g, "") === "x" && (t.blockHash = null), t;
  }
  transaction(e) {
    return Ef(e);
  }
  receiptLog(e) {
    return $.check(this.formats.receiptLog, e);
  }
  receipt(e) {
    const t = $.check(this.formats.receipt, e);
    if (t.root != null)
      if (t.root.length <= 4) {
        const r = H.from(t.root).toNumber();
        r === 0 || r === 1 ? (t.status != null && t.status !== r && Dn.throwArgumentError("alt-root-status/status mismatch", "value", { root: t.root, status: t.status }), t.status = r, delete t.root) : Dn.throwArgumentError("invalid alt-root-status", "value.root", t.root);
      } else
        t.root.length !== 66 && Dn.throwArgumentError("invalid root hash", "value.root", t.root);
    return t.status != null && (t.byzantium = !0), t;
  }
  topics(e) {
    return Array.isArray(e) ? e.map((t) => this.topics(t)) : e != null ? this.hash(e, !0) : null;
  }
  filter(e) {
    return $.check(this.formats.filter, e);
  }
  filterLog(e) {
    return $.check(this.formats.filterLog, e);
  }
  static check(e, t) {
    const r = {};
    for (const i in e)
      try {
        const s = e[i](t[i]);
        s !== void 0 && (r[i] = s);
      } catch (s) {
        throw s.checkKey = i, s.checkValue = t[i], s;
      }
    return r;
  }
  // if value is null-ish, nullValue is returned
  static allowNull(e, t) {
    return function(r) {
      return r == null ? t : e(r);
    };
  }
  // If value is false-ish, replaceValue is returned
  static allowFalsish(e, t) {
    return function(r) {
      return r ? e(r) : t;
    };
  }
  // Requires an Array satisfying check
  static arrayOf(e) {
    return function(t) {
      if (!Array.isArray(t))
        throw new Error("not an array");
      const r = [];
      return t.forEach(function(i) {
        r.push(e(i));
      }), r;
    };
  }
}
function zf(n) {
  return n && typeof n.isCommunityResource == "function";
}
function ao(n) {
  return zf(n) && n.isCommunityResource();
}
let Da = !1;
function ui() {
  Da || (Da = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), console.log("=========================="));
}
var X = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const ie = new _(pt), bx = 10;
function La(n) {
  return n == null ? "null" : (Yt(n) !== 32 && ie.throwArgumentError("invalid topic", "topic", n), n.toLowerCase());
}
function Ua(n) {
  for (n = n.slice(); n.length > 0 && n[n.length - 1] == null; )
    n.pop();
  return n.map((e) => {
    if (Array.isArray(e)) {
      const t = {};
      e.forEach((i) => {
        t[La(i)] = !0;
      });
      const r = Object.keys(t);
      return r.sort(), r.join("|");
    } else
      return La(e);
  }).join("&");
}
function gx(n) {
  return n === "" ? [] : n.split(/&/g).map((e) => {
    if (e === "")
      return [];
    const t = e.split("|").map((r) => r === "null" ? null : r);
    return t.length === 1 ? t[0] : t;
  });
}
function cn(n) {
  if (typeof n == "string") {
    if (n = n.toLowerCase(), Yt(n) === 32)
      return "tx:" + n;
    if (n.indexOf(":") === -1)
      return n;
  } else {
    if (Array.isArray(n))
      return "filter:*:" + Ua(n);
    if (mu.isForkEvent(n))
      throw ie.warn("not implemented"), new Error("not implemented");
    if (n && typeof n == "object")
      return "filter:" + (n.address || "*") + ":" + Ua(n.topics || []);
  }
  throw new Error("invalid event - " + n);
}
function Ln() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Ka(n) {
  return new Promise((e) => {
    setTimeout(e, n);
  });
}
const mx = ["block", "network", "pending", "poll"];
class vx {
  constructor(e, t, r) {
    B(this, "tag", e), B(this, "listener", t), B(this, "once", r), this._lastBlockNumber = -2, this._inflight = !1;
  }
  get event() {
    switch (this.type) {
      case "tx":
        return this.hash;
      case "filter":
        return this.filter;
    }
    return this.tag;
  }
  get type() {
    return this.tag.split(":")[0];
  }
  get hash() {
    const e = this.tag.split(":");
    return e[0] !== "tx" ? null : e[1];
  }
  get filter() {
    const e = this.tag.split(":");
    if (e[0] !== "filter")
      return null;
    const t = e[1], r = gx(e[2]), i = {};
    return r.length > 0 && (i.topics = r), t && t !== "*" && (i.address = t), i;
  }
  pollable() {
    return this.tag.indexOf(":") >= 0 || mx.indexOf(this.tag) >= 0;
  }
}
const yx = {
  0: { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" },
  2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
  3: { symbol: "doge", p2pkh: 30, p2sh: 22 },
  60: { symbol: "eth", ilk: "eth" },
  61: { symbol: "etc", ilk: "eth" },
  700: { symbol: "xdai", ilk: "eth" }
};
function Fs(n) {
  return xe(H.from(n).toHexString(), 32);
}
function Ha(n) {
  return _n.encode(de([n, rt(cr(cr(n)), 0, 4)]));
}
const jf = new RegExp("^(ipfs)://(.*)$", "i"), Ga = [
  new RegExp("^(https)://(.*)$", "i"),
  new RegExp("^(data):(.*)$", "i"),
  jf,
  new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
];
function Ni(n, e) {
  try {
    return nn(si(n, e));
  } catch {
  }
  return null;
}
function si(n, e) {
  if (n === "0x")
    return null;
  const t = H.from(rt(n, e, e + 32)).toNumber(), r = H.from(rt(n, t, t + 32)).toNumber();
  return rt(n, t + 32, t + 32 + r);
}
function Ds(n) {
  return n.match(/^ipfs:\/\/ipfs\//i) ? n = n.substring(12) : n.match(/^ipfs:\/\//i) ? n = n.substring(7) : ie.throwArgumentError("unsupported IPFS format", "link", n), `https://gateway.ipfs.io/ipfs/${n}`;
}
function qa(n) {
  const e = K(n);
  if (e.length > 32)
    throw new Error("internal; should not happen");
  const t = new Uint8Array(32);
  return t.set(e, 32 - e.length), t;
}
function wx(n) {
  if (n.length % 32 === 0)
    return n;
  const e = new Uint8Array(Math.ceil(n.length / 32) * 32);
  return e.set(n), e;
}
function Wf(n) {
  const e = [];
  let t = 0;
  for (let r = 0; r < n.length; r++)
    e.push(null), t += 32;
  for (let r = 0; r < n.length; r++) {
    const i = K(n[r]);
    e[r] = qa(t), e.push(qa(i.length)), e.push(wx(i)), t += 32 + Math.ceil(i.length / 32) * 32;
  }
  return bt(e);
}
class fo {
  // The resolvedAddress is only for creating a ReverseLookup resolver
  constructor(e, t, r, i) {
    B(this, "provider", e), B(this, "name", r), B(this, "address", e.formatter.address(t)), B(this, "_resolvedAddress", i);
  }
  supportsWildcard() {
    return this._supportsEip2544 || (this._supportsEip2544 = this.provider.call({
      to: this.address,
      data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
    }).then((e) => H.from(e).eq(1)).catch((e) => {
      if (e.code === _.errors.CALL_EXCEPTION)
        return !1;
      throw this._supportsEip2544 = null, e;
    })), this._supportsEip2544;
  }
  _fetch(e, t) {
    return X(this, void 0, void 0, function* () {
      const r = {
        to: this.address,
        ccipReadEnabled: !0,
        data: bt([e, Wn(this.name), t || "0x"])
      };
      let i = !1;
      (yield this.supportsWildcard()) && (i = !0, r.data = bt(["0x9061b923", Wf([q0(this.name), r.data])]));
      try {
        let s = yield this.provider.call(r);
        return K(s).length % 32 === 4 && ie.throwError("resolver threw error", _.errors.CALL_EXCEPTION, {
          transaction: r,
          data: s
        }), i && (s = si(s, 0)), s;
      } catch (s) {
        if (s.code === _.errors.CALL_EXCEPTION)
          return null;
        throw s;
      }
    });
  }
  _fetchBytes(e, t) {
    return X(this, void 0, void 0, function* () {
      const r = yield this._fetch(e, t);
      return r != null ? si(r, 0) : null;
    });
  }
  _getAddress(e, t) {
    const r = yx[String(e)];
    if (r == null && ie.throwError(`unsupported coin type: ${e}`, _.errors.UNSUPPORTED_OPERATION, {
      operation: `getAddress(${e})`
    }), r.ilk === "eth")
      return this.provider.formatter.address(t);
    const i = K(t);
    if (r.p2pkh != null) {
      const s = t.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
      if (s) {
        const o = parseInt(s[1], 16);
        if (s[2].length === o * 2 && o >= 1 && o <= 75)
          return Ha(de([[r.p2pkh], "0x" + s[2]]));
      }
    }
    if (r.p2sh != null) {
      const s = t.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
      if (s) {
        const o = parseInt(s[1], 16);
        if (s[2].length === o * 2 && o >= 1 && o <= 75)
          return Ha(de([[r.p2sh], "0x" + s[2]]));
      }
    }
    if (r.prefix != null) {
      const s = i[1];
      let o = i[0];
      if (o === 0 ? s !== 20 && s !== 32 && (o = -1) : o = -1, o >= 0 && i.length === 2 + s && s >= 1 && s <= 75) {
        const a = Fa.toWords(i.slice(2));
        return a.unshift(o), Fa.encode(r.prefix, a);
      }
    }
    return null;
  }
  getAddress(e) {
    return X(this, void 0, void 0, function* () {
      if (e == null && (e = 60), e === 60)
        try {
          const i = yield this._fetch("0x3b3b57de");
          return i === "0x" || i === vo ? null : this.provider.formatter.callAddress(i);
        } catch (i) {
          if (i.code === _.errors.CALL_EXCEPTION)
            return null;
          throw i;
        }
      const t = yield this._fetchBytes("0xf1cb7e06", Fs(e));
      if (t == null || t === "0x")
        return null;
      const r = this._getAddress(e, t);
      return r == null && ie.throwError("invalid or unsupported coin data", _.errors.UNSUPPORTED_OPERATION, {
        operation: `getAddress(${e})`,
        coinType: e,
        data: t
      }), r;
    });
  }
  getAvatar() {
    return X(this, void 0, void 0, function* () {
      const e = [{ type: "name", content: this.name }];
      try {
        const t = yield this.getText("avatar");
        if (t == null)
          return null;
        for (let r = 0; r < Ga.length; r++) {
          const i = t.match(Ga[r]);
          if (i == null)
            continue;
          const s = i[1].toLowerCase();
          switch (s) {
            case "https":
              return e.push({ type: "url", content: t }), { linkage: e, url: t };
            case "data":
              return e.push({ type: "data", content: t }), { linkage: e, url: t };
            case "ipfs":
              return e.push({ type: "ipfs", content: t }), { linkage: e, url: Ds(t) };
            case "erc721":
            case "erc1155": {
              const o = s === "erc721" ? "0xc87b56dd" : "0x0e89341c";
              e.push({ type: s, content: t });
              const a = this._resolvedAddress || (yield this.getAddress()), l = (i[2] || "").split("/");
              if (l.length !== 2)
                return null;
              const h = yield this.provider.formatter.address(l[0]), x = xe(H.from(l[1]).toHexString(), 32);
              if (s === "erc721") {
                const C = this.provider.formatter.callAddress(yield this.provider.call({
                  to: h,
                  data: bt(["0x6352211e", x])
                }));
                if (a !== C)
                  return null;
                e.push({ type: "owner", content: C });
              } else if (s === "erc1155") {
                const C = H.from(yield this.provider.call({
                  to: h,
                  data: bt(["0x00fdd58e", xe(a, 32), x])
                }));
                if (C.isZero())
                  return null;
                e.push({ type: "balance", content: C.toString() });
              }
              const b = {
                to: this.provider.formatter.address(l[0]),
                data: bt([o, x])
              };
              let E = Ni(yield this.provider.call(b), 0);
              if (E == null)
                return null;
              e.push({ type: "metadata-url-base", content: E }), s === "erc1155" && (E = E.replace("{id}", x.substring(2)), e.push({ type: "metadata-url-expanded", content: E })), E.match(/^ipfs:/i) && (E = Ds(E)), e.push({ type: "metadata-url", content: E });
              const S = yield Rn(E);
              if (!S)
                return null;
              e.push({ type: "metadata", content: JSON.stringify(S) });
              let I = S.image;
              if (typeof I != "string")
                return null;
              if (!I.match(/^(https:\/\/|data:)/i)) {
                if (I.match(jf) == null)
                  return null;
                e.push({ type: "url-ipfs", content: I }), I = Ds(I);
              }
              return e.push({ type: "url", content: I }), { linkage: e, url: I };
            }
          }
        }
      } catch {
      }
      return null;
    });
  }
  getContentHash() {
    return X(this, void 0, void 0, function* () {
      const e = yield this._fetchBytes("0xbc1c58d1");
      if (e == null || e === "0x")
        return null;
      const t = e.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
      if (t) {
        const o = parseInt(t[3], 16);
        if (t[4].length === o * 2)
          return "ipfs://" + _n.encode("0x" + t[1]);
      }
      const r = e.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
      if (r) {
        const o = parseInt(r[3], 16);
        if (r[4].length === o * 2)
          return "ipns://" + _n.encode("0x" + r[1]);
      }
      const i = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
      if (i && i[1].length === 32 * 2)
        return "bzz://" + i[1];
      const s = e.match(/^0x90b2c605([0-9a-f]*)$/);
      if (s && s[1].length === 34 * 2) {
        const o = { "=": "", "+": "-", "/": "_" };
        return "sia://" + _o("0x" + s[1]).replace(/[=+\/]/g, (l) => o[l]);
      }
      return ie.throwError("invalid or unsupported content hash data", _.errors.UNSUPPORTED_OPERATION, {
        operation: "getContentHash()",
        data: e
      });
    });
  }
  getText(e) {
    return X(this, void 0, void 0, function* () {
      let t = nt(e);
      t = de([Fs(64), Fs(t.length), t]), t.length % 32 !== 0 && (t = de([t, xe("0x", 32 - e.length % 32)]));
      const r = yield this._fetchBytes("0x59d1d43c", G(t));
      return r == null || r === "0x" ? null : nn(r);
    });
  }
}
let Ls = null, Ax = 1;
class is extends sn {
  /**
   *  ready
   *
   *  A Promise<Network> that resolves only once the provider is ready.
   *
   *  Sub-classes that call the super with a network without a chainId
   *  MUST set this. Standard named networks have a known chainId.
   *
   */
  constructor(e) {
    if (super(), this._events = [], this._emitted = { block: -2 }, this.disableCcipRead = !1, this.formatter = new.target.getFormatter(), B(this, "anyNetwork", e === "any"), this.anyNetwork && (e = this.detectNetwork()), e instanceof Promise)
      this._networkPromise = e, e.catch((t) => {
      }), this._ready().catch((t) => {
      });
    else {
      const t = lt(new.target, "getNetwork")(e);
      t ? (B(this, "_network", t), this.emit("network", t, null)) : ie.throwArgumentError("invalid network", "network", e);
    }
    this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._maxFilterBlockRange = 10, this._pollingInterval = 4e3, this._fastQueryDate = 0;
  }
  _ready() {
    return X(this, void 0, void 0, function* () {
      if (this._network == null) {
        let e = null;
        if (this._networkPromise)
          try {
            e = yield this._networkPromise;
          } catch {
          }
        e == null && (e = yield this.detectNetwork()), e || ie.throwError("no network detected", _.errors.UNKNOWN_ERROR, {}), this._network == null && (this.anyNetwork ? this._network = e : B(this, "_network", e), this.emit("network", e, null));
      }
      return this._network;
    });
  }
  // This will always return the most recently established network.
  // For "any", this can change (a "network" event is emitted before
  // any change is reflected); otherwise this cannot change
  get ready() {
    return Vr(() => this._ready().then((e) => e, (e) => {
      if (!(e.code === _.errors.NETWORK_ERROR && e.event === "noNetwork"))
        throw e;
    }));
  }
  // @TODO: Remove this and just create a singleton formatter
  static getFormatter() {
    return Ls == null && (Ls = new $()), Ls;
  }
  // @TODO: Remove this and just use getNetwork
  static getNetwork(e) {
    return Do(e ?? "homestead");
  }
  ccipReadFetch(e, t, r) {
    return X(this, void 0, void 0, function* () {
      if (this.disableCcipRead || r.length === 0)
        return null;
      const i = e.to.toLowerCase(), s = t.toLowerCase(), o = [];
      for (let a = 0; a < r.length; a++) {
        const l = r[a], h = l.replace("{sender}", i).replace("{data}", s), x = l.indexOf("{data}") >= 0 ? null : JSON.stringify({ data: s, sender: i }), b = yield Rn({ url: h, errorPassThrough: !0 }, x, (S, I) => (S.status = I.statusCode, S));
        if (b.data)
          return b.data;
        const E = b.message || "unknown error";
        if (b.status >= 400 && b.status < 500)
          return ie.throwError(`response not found during CCIP fetch: ${E}`, _.errors.SERVER_ERROR, { url: l, errorMessage: E });
        o.push(E);
      }
      return ie.throwError(`error encountered during CCIP fetch: ${o.map((a) => JSON.stringify(a)).join(", ")}`, _.errors.SERVER_ERROR, {
        urls: r,
        errorMessages: o
      });
    });
  }
  // Fetches the blockNumber, but will reuse any result that is less
  // than maxAge old or has been requested since the last request
  _getInternalBlockNumber(e) {
    return X(this, void 0, void 0, function* () {
      if (yield this._ready(), e > 0)
        for (; this._internalBlockNumber; ) {
          const i = this._internalBlockNumber;
          try {
            const s = yield i;
            if (Ln() - s.respTime <= e)
              return s.blockNumber;
            break;
          } catch {
            if (this._internalBlockNumber === i)
              break;
          }
        }
      const t = Ln(), r = et({
        blockNumber: this.perform("getBlockNumber", {}),
        networkError: this.getNetwork().then((i) => null, (i) => i)
      }).then(({ blockNumber: i, networkError: s }) => {
        if (s)
          throw this._internalBlockNumber === r && (this._internalBlockNumber = null), s;
        const o = Ln();
        return i = H.from(i).toNumber(), i < this._maxInternalBlockNumber && (i = this._maxInternalBlockNumber), this._maxInternalBlockNumber = i, this._setFastBlockNumber(i), { blockNumber: i, reqTime: t, respTime: o };
      });
      return this._internalBlockNumber = r, r.catch((i) => {
        this._internalBlockNumber === r && (this._internalBlockNumber = null);
      }), (yield r).blockNumber;
    });
  }
  poll() {
    return X(this, void 0, void 0, function* () {
      const e = Ax++, t = [];
      let r = null;
      try {
        r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2);
      } catch (i) {
        this.emit("error", i);
        return;
      }
      if (this._setFastBlockNumber(r), this.emit("poll", e, r), r === this._lastBlockNumber) {
        this.emit("didPoll", e);
        return;
      }
      if (this._emitted.block === -2 && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3)
        ie.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`), this.emit("error", ie.makeError("network block skew detected", _.errors.NETWORK_ERROR, {
          blockNumber: r,
          event: "blockSkew",
          previousBlockNumber: this._emitted.block
        })), this.emit("block", r);
      else
        for (let i = this._emitted.block + 1; i <= r; i++)
          this.emit("block", i);
      this._emitted.block !== r && (this._emitted.block = r, Object.keys(this._emitted).forEach((i) => {
        if (i === "block")
          return;
        const s = this._emitted[i];
        s !== "pending" && r - s > 12 && delete this._emitted[i];
      })), this._lastBlockNumber === -2 && (this._lastBlockNumber = r - 1), this._events.forEach((i) => {
        switch (i.type) {
          case "tx": {
            const s = i.hash;
            let o = this.getTransactionReceipt(s).then((a) => (!a || a.blockNumber == null || (this._emitted["t:" + s] = a.blockNumber, this.emit(s, a)), null)).catch((a) => {
              this.emit("error", a);
            });
            t.push(o);
            break;
          }
          case "filter": {
            if (!i._inflight) {
              i._inflight = !0, i._lastBlockNumber === -2 && (i._lastBlockNumber = r - 1);
              const s = i.filter;
              s.fromBlock = i._lastBlockNumber + 1, s.toBlock = r;
              const o = s.toBlock - this._maxFilterBlockRange;
              o > s.fromBlock && (s.fromBlock = o), s.fromBlock < 0 && (s.fromBlock = 0);
              const a = this.getLogs(s).then((l) => {
                i._inflight = !1, l.length !== 0 && l.forEach((h) => {
                  h.blockNumber > i._lastBlockNumber && (i._lastBlockNumber = h.blockNumber), this._emitted["b:" + h.blockHash] = h.blockNumber, this._emitted["t:" + h.transactionHash] = h.blockNumber, this.emit(s, h);
                });
              }).catch((l) => {
                this.emit("error", l), i._inflight = !1;
              });
              t.push(a);
            }
            break;
          }
        }
      }), this._lastBlockNumber = r, Promise.all(t).then(() => {
        this.emit("didPoll", e);
      }).catch((i) => {
        this.emit("error", i);
      });
    });
  }
  // Deprecated; do not use this
  resetEventsBlock(e) {
    this._lastBlockNumber = e - 1, this.polling && this.poll();
  }
  get network() {
    return this._network;
  }
  // This method should query the network if the underlying network
  // can change, such as when connected to a JSON-RPC backend
  detectNetwork() {
    return X(this, void 0, void 0, function* () {
      return ie.throwError("provider does not support network detection", _.errors.UNSUPPORTED_OPERATION, {
        operation: "provider.detectNetwork"
      });
    });
  }
  getNetwork() {
    return X(this, void 0, void 0, function* () {
      const e = yield this._ready(), t = yield this.detectNetwork();
      if (e.chainId !== t.chainId) {
        if (this.anyNetwork)
          return this._network = t, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", t, e), yield Ka(0), this._network;
        const r = ie.makeError("underlying network changed", _.errors.NETWORK_ERROR, {
          event: "changed",
          network: e,
          detectedNetwork: t
        });
        throw this.emit("error", r), r;
      }
      return e;
    });
  }
  get blockNumber() {
    return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then((e) => {
      this._setFastBlockNumber(e);
    }, (e) => {
    }), this._fastBlockNumber != null ? this._fastBlockNumber : -1;
  }
  get polling() {
    return this._poller != null;
  }
  set polling(e) {
    e && !this._poller ? (this._poller = setInterval(() => {
      this.poll();
    }, this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout(() => {
      this.poll(), this._bootstrapPoll = setTimeout(() => {
        this._poller || this.poll(), this._bootstrapPoll = null;
      }, this.pollingInterval);
    }, 0))) : !e && this._poller && (clearInterval(this._poller), this._poller = null);
  }
  get pollingInterval() {
    return this._pollingInterval;
  }
  set pollingInterval(e) {
    if (typeof e != "number" || e <= 0 || parseInt(String(e)) != e)
      throw new Error("invalid polling interval");
    this._pollingInterval = e, this._poller && (clearInterval(this._poller), this._poller = setInterval(() => {
      this.poll();
    }, this._pollingInterval));
  }
  _getFastBlockNumber() {
    const e = Ln();
    return e - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = e, this._fastBlockNumberPromise = this.getBlockNumber().then((t) => ((this._fastBlockNumber == null || t > this._fastBlockNumber) && (this._fastBlockNumber = t), this._fastBlockNumber))), this._fastBlockNumberPromise;
  }
  _setFastBlockNumber(e) {
    this._fastBlockNumber != null && e < this._fastBlockNumber || (this._fastQueryDate = Ln(), (this._fastBlockNumber == null || e > this._fastBlockNumber) && (this._fastBlockNumber = e, this._fastBlockNumberPromise = Promise.resolve(e)));
  }
  waitForTransaction(e, t, r) {
    return X(this, void 0, void 0, function* () {
      return this._waitForTransaction(e, t ?? 1, r || 0, null);
    });
  }
  _waitForTransaction(e, t, r, i) {
    return X(this, void 0, void 0, function* () {
      const s = yield this.getTransactionReceipt(e);
      return (s ? s.confirmations : 0) >= t ? s : new Promise((o, a) => {
        const l = [];
        let h = !1;
        const x = function() {
          return h ? !0 : (h = !0, l.forEach((E) => {
            E();
          }), !1);
        }, b = (E) => {
          E.confirmations < t || x() || o(E);
        };
        if (this.on(e, b), l.push(() => {
          this.removeListener(e, b);
        }), i) {
          let E = i.startBlock, S = null;
          const I = (C) => X(this, void 0, void 0, function* () {
            h || (yield Ka(1e3), this.getTransactionCount(i.from).then((y) => X(this, void 0, void 0, function* () {
              if (!h) {
                if (y <= i.nonce)
                  E = C;
                else {
                  {
                    const T = yield this.getTransaction(e);
                    if (T && T.blockNumber != null)
                      return;
                  }
                  for (S == null && (S = E - 3, S < i.startBlock && (S = i.startBlock)); S <= C; ) {
                    if (h)
                      return;
                    const T = yield this.getBlockWithTransactions(S);
                    for (let D = 0; D < T.transactions.length; D++) {
                      const U = T.transactions[D];
                      if (U.hash === e)
                        return;
                      if (U.from === i.from && U.nonce === i.nonce) {
                        if (h)
                          return;
                        const z = yield this.waitForTransaction(U.hash, t);
                        if (x())
                          return;
                        let L = "replaced";
                        U.data === i.data && U.to === i.to && U.value.eq(i.value) ? L = "repriced" : U.data === "0x" && U.from === U.to && U.value.isZero() && (L = "cancelled"), a(ie.makeError("transaction was replaced", _.errors.TRANSACTION_REPLACED, {
                          cancelled: L === "replaced" || L === "cancelled",
                          reason: L,
                          replacement: this._wrapTransaction(U),
                          hash: e,
                          receipt: z
                        }));
                        return;
                      }
                    }
                    S++;
                  }
                }
                h || this.once("block", I);
              }
            }), (y) => {
              h || this.once("block", I);
            }));
          });
          if (h)
            return;
          this.once("block", I), l.push(() => {
            this.removeListener("block", I);
          });
        }
        if (typeof r == "number" && r > 0) {
          const E = setTimeout(() => {
            x() || a(ie.makeError("timeout exceeded", _.errors.TIMEOUT, { timeout: r }));
          }, r);
          E.unref && E.unref(), l.push(() => {
            clearTimeout(E);
          });
        }
      });
    });
  }
  getBlockNumber() {
    return X(this, void 0, void 0, function* () {
      return this._getInternalBlockNumber(0);
    });
  }
  getGasPrice() {
    return X(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const e = yield this.perform("getGasPrice", {});
      try {
        return H.from(e);
      } catch (t) {
        return ie.throwError("bad result from backend", _.errors.SERVER_ERROR, {
          method: "getGasPrice",
          result: e,
          error: t
        });
      }
    });
  }
  getBalance(e, t) {
    return X(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const r = yield et({
        address: this._getAddress(e),
        blockTag: this._getBlockTag(t)
      }), i = yield this.perform("getBalance", r);
      try {
        return H.from(i);
      } catch (s) {
        return ie.throwError("bad result from backend", _.errors.SERVER_ERROR, {
          method: "getBalance",
          params: r,
          result: i,
          error: s
        });
      }
    });
  }
  getTransactionCount(e, t) {
    return X(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const r = yield et({
        address: this._getAddress(e),
        blockTag: this._getBlockTag(t)
      }), i = yield this.perform("getTransactionCount", r);
      try {
        return H.from(i).toNumber();
      } catch (s) {
        return ie.throwError("bad result from backend", _.errors.SERVER_ERROR, {
          method: "getTransactionCount",
          params: r,
          result: i,
          error: s
        });
      }
    });
  }
  getCode(e, t) {
    return X(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const r = yield et({
        address: this._getAddress(e),
        blockTag: this._getBlockTag(t)
      }), i = yield this.perform("getCode", r);
      try {
        return G(i);
      } catch (s) {
        return ie.throwError("bad result from backend", _.errors.SERVER_ERROR, {
          method: "getCode",
          params: r,
          result: i,
          error: s
        });
      }
    });
  }
  getStorageAt(e, t, r) {
    return X(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const i = yield et({
        address: this._getAddress(e),
        blockTag: this._getBlockTag(r),
        position: Promise.resolve(t).then((o) => ai(o))
      }), s = yield this.perform("getStorageAt", i);
      try {
        return G(s);
      } catch (o) {
        return ie.throwError("bad result from backend", _.errors.SERVER_ERROR, {
          method: "getStorageAt",
          params: i,
          result: s,
          error: o
        });
      }
    });
  }
  // This should be called by any subclass wrapping a TransactionResponse
  _wrapTransaction(e, t, r) {
    if (t != null && Yt(t) !== 32)
      throw new Error("invalid response - sendTransaction");
    const i = e;
    return t != null && e.hash !== t && ie.throwError("Transaction hash mismatch from Provider.sendTransaction.", _.errors.UNKNOWN_ERROR, { expectedHash: e.hash, returnedHash: t }), i.wait = (s, o) => X(this, void 0, void 0, function* () {
      s == null && (s = 1), o == null && (o = 0);
      let a;
      s !== 0 && r != null && (a = {
        data: e.data,
        from: e.from,
        nonce: e.nonce,
        to: e.to,
        value: e.value,
        startBlock: r
      });
      const l = yield this._waitForTransaction(e.hash, s, o, a);
      return l == null && s === 0 ? null : (this._emitted["t:" + e.hash] = l.blockNumber, l.status === 0 && ie.throwError("transaction failed", _.errors.CALL_EXCEPTION, {
        transactionHash: e.hash,
        transaction: e,
        receipt: l
      }), l);
    }), i;
  }
  sendTransaction(e) {
    return X(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const t = yield Promise.resolve(e).then((s) => G(s)), r = this.formatter.transaction(e);
      r.confirmations == null && (r.confirmations = 0);
      const i = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
      try {
        const s = yield this.perform("sendTransaction", { signedTransaction: t });
        return this._wrapTransaction(r, s, i);
      } catch (s) {
        throw s.transaction = r, s.transactionHash = r.hash, s;
      }
    });
  }
  _getTransactionRequest(e) {
    return X(this, void 0, void 0, function* () {
      const t = yield e, r = {};
      return ["from", "to"].forEach((i) => {
        t[i] != null && (r[i] = Promise.resolve(t[i]).then((s) => s ? this._getAddress(s) : null));
      }), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach((i) => {
        t[i] != null && (r[i] = Promise.resolve(t[i]).then((s) => s ? H.from(s) : null));
      }), ["type"].forEach((i) => {
        t[i] != null && (r[i] = Promise.resolve(t[i]).then((s) => s ?? null));
      }), t.accessList && (r.accessList = this.formatter.accessList(t.accessList)), ["data"].forEach((i) => {
        t[i] != null && (r[i] = Promise.resolve(t[i]).then((s) => s ? G(s) : null));
      }), this.formatter.transactionRequest(yield et(r));
    });
  }
  _getFilter(e) {
    return X(this, void 0, void 0, function* () {
      e = yield e;
      const t = {};
      return e.address != null && (t.address = this._getAddress(e.address)), ["blockHash", "topics"].forEach((r) => {
        e[r] != null && (t[r] = e[r]);
      }), ["fromBlock", "toBlock"].forEach((r) => {
        e[r] != null && (t[r] = this._getBlockTag(e[r]));
      }), this.formatter.filter(yield et(t));
    });
  }
  _call(e, t, r) {
    return X(this, void 0, void 0, function* () {
      r >= bx && ie.throwError("CCIP read exceeded maximum redirections", _.errors.SERVER_ERROR, {
        redirects: r,
        transaction: e
      });
      const i = e.to, s = yield this.perform("call", { transaction: e, blockTag: t });
      if (r >= 0 && t === "latest" && i != null && s.substring(0, 10) === "0x556f1830" && Yt(s) % 32 === 4)
        try {
          const o = rt(s, 4), a = rt(o, 0, 32);
          H.from(a).eq(i) || ie.throwError("CCIP Read sender did not match", _.errors.CALL_EXCEPTION, {
            name: "OffchainLookup",
            signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
            transaction: e,
            data: s
          });
          const l = [], h = H.from(rt(o, 32, 64)).toNumber(), x = H.from(rt(o, h, h + 32)).toNumber(), b = rt(o, h + 32);
          for (let T = 0; T < x; T++) {
            const D = Ni(b, T * 32);
            D == null && ie.throwError("CCIP Read contained corrupt URL string", _.errors.CALL_EXCEPTION, {
              name: "OffchainLookup",
              signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
              transaction: e,
              data: s
            }), l.push(D);
          }
          const E = si(o, 64);
          H.from(rt(o, 100, 128)).isZero() || ie.throwError("CCIP Read callback selector included junk", _.errors.CALL_EXCEPTION, {
            name: "OffchainLookup",
            signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
            transaction: e,
            data: s
          });
          const S = rt(o, 96, 100), I = si(o, 128), C = yield this.ccipReadFetch(e, E, l);
          C == null && ie.throwError("CCIP Read disabled or provided no URLs", _.errors.CALL_EXCEPTION, {
            name: "OffchainLookup",
            signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
            transaction: e,
            data: s
          });
          const y = {
            to: i,
            data: bt([S, Wf([C, I])])
          };
          return this._call(y, t, r + 1);
        } catch (o) {
          if (o.code === _.errors.SERVER_ERROR)
            throw o;
        }
      try {
        return G(s);
      } catch (o) {
        return ie.throwError("bad result from backend", _.errors.SERVER_ERROR, {
          method: "call",
          params: { transaction: e, blockTag: t },
          result: s,
          error: o
        });
      }
    });
  }
  call(e, t) {
    return X(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const r = yield et({
        transaction: this._getTransactionRequest(e),
        blockTag: this._getBlockTag(t),
        ccipReadEnabled: Promise.resolve(e.ccipReadEnabled)
      });
      return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1);
    });
  }
  estimateGas(e) {
    return X(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const t = yield et({
        transaction: this._getTransactionRequest(e)
      }), r = yield this.perform("estimateGas", t);
      try {
        return H.from(r);
      } catch (i) {
        return ie.throwError("bad result from backend", _.errors.SERVER_ERROR, {
          method: "estimateGas",
          params: t,
          result: r,
          error: i
        });
      }
    });
  }
  _getAddress(e) {
    return X(this, void 0, void 0, function* () {
      e = yield e, typeof e != "string" && ie.throwArgumentError("invalid address or ENS name", "name", e);
      const t = yield this.resolveName(e);
      return t == null && ie.throwError("ENS name not configured", _.errors.UNSUPPORTED_OPERATION, {
        operation: `resolveName(${JSON.stringify(e)})`
      }), t;
    });
  }
  _getBlock(e, t) {
    return X(this, void 0, void 0, function* () {
      yield this.getNetwork(), e = yield e;
      let r = -128;
      const i = {
        includeTransactions: !!t
      };
      if (re(e, 32))
        i.blockHash = e;
      else
        try {
          i.blockTag = yield this._getBlockTag(e), re(i.blockTag) && (r = parseInt(i.blockTag.substring(2), 16));
        } catch {
          ie.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", e);
        }
      return Vr(() => X(this, void 0, void 0, function* () {
        const s = yield this.perform("getBlock", i);
        if (s == null)
          return i.blockHash != null && this._emitted["b:" + i.blockHash] == null || i.blockTag != null && r > this._emitted.block ? null : void 0;
        if (t) {
          let o = null;
          for (let l = 0; l < s.transactions.length; l++) {
            const h = s.transactions[l];
            if (h.blockNumber == null)
              h.confirmations = 0;
            else if (h.confirmations == null) {
              o == null && (o = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
              let x = o - h.blockNumber + 1;
              x <= 0 && (x = 1), h.confirmations = x;
            }
          }
          const a = this.formatter.blockWithTransactions(s);
          return a.transactions = a.transactions.map((l) => this._wrapTransaction(l)), a;
        }
        return this.formatter.block(s);
      }), { oncePoll: this });
    });
  }
  getBlock(e) {
    return this._getBlock(e, !1);
  }
  getBlockWithTransactions(e) {
    return this._getBlock(e, !0);
  }
  getTransaction(e) {
    return X(this, void 0, void 0, function* () {
      yield this.getNetwork(), e = yield e;
      const t = { transactionHash: this.formatter.hash(e, !0) };
      return Vr(() => X(this, void 0, void 0, function* () {
        const r = yield this.perform("getTransaction", t);
        if (r == null)
          return this._emitted["t:" + e] == null ? null : void 0;
        const i = this.formatter.transactionResponse(r);
        if (i.blockNumber == null)
          i.confirmations = 0;
        else if (i.confirmations == null) {
          let o = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - i.blockNumber + 1;
          o <= 0 && (o = 1), i.confirmations = o;
        }
        return this._wrapTransaction(i);
      }), { oncePoll: this });
    });
  }
  getTransactionReceipt(e) {
    return X(this, void 0, void 0, function* () {
      yield this.getNetwork(), e = yield e;
      const t = { transactionHash: this.formatter.hash(e, !0) };
      return Vr(() => X(this, void 0, void 0, function* () {
        const r = yield this.perform("getTransactionReceipt", t);
        if (r == null)
          return this._emitted["t:" + e] == null ? null : void 0;
        if (r.blockHash == null)
          return;
        const i = this.formatter.receipt(r);
        if (i.blockNumber == null)
          i.confirmations = 0;
        else if (i.confirmations == null) {
          let o = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - i.blockNumber + 1;
          o <= 0 && (o = 1), i.confirmations = o;
        }
        return i;
      }), { oncePoll: this });
    });
  }
  getLogs(e) {
    return X(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const t = yield et({ filter: this._getFilter(e) }), r = yield this.perform("getLogs", t);
      return r.forEach((i) => {
        i.removed == null && (i.removed = !1);
      }), $.arrayOf(this.formatter.filterLog.bind(this.formatter))(r);
    });
  }
  getEtherPrice() {
    return X(this, void 0, void 0, function* () {
      return yield this.getNetwork(), this.perform("getEtherPrice", {});
    });
  }
  _getBlockTag(e) {
    return X(this, void 0, void 0, function* () {
      if (e = yield e, typeof e == "number" && e < 0) {
        e % 1 && ie.throwArgumentError("invalid BlockTag", "blockTag", e);
        let t = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
        return t += e, t < 0 && (t = 0), this.formatter.blockTag(t);
      }
      return this.formatter.blockTag(e);
    });
  }
  getResolver(e) {
    return X(this, void 0, void 0, function* () {
      let t = e;
      for (; ; ) {
        if (t === "" || t === "." || e !== "eth" && t === "eth")
          return null;
        const r = yield this._getResolver(t, "getResolver");
        if (r != null) {
          const i = new fo(this, r, e);
          return t !== e && !(yield i.supportsWildcard()) ? null : i;
        }
        t = t.split(".").slice(1).join(".");
      }
    });
  }
  _getResolver(e, t) {
    return X(this, void 0, void 0, function* () {
      t == null && (t = "ENS");
      const r = yield this.getNetwork();
      r.ensAddress || ie.throwError("network does not support ENS", _.errors.UNSUPPORTED_OPERATION, { operation: t, network: r.name });
      try {
        const i = yield this.call({
          to: r.ensAddress,
          data: "0x0178b8bf" + Wn(e).substring(2)
        });
        return this.formatter.callAddress(i);
      } catch {
      }
      return null;
    });
  }
  resolveName(e) {
    return X(this, void 0, void 0, function* () {
      e = yield e;
      try {
        return Promise.resolve(this.formatter.address(e));
      } catch (r) {
        if (re(e))
          throw r;
      }
      typeof e != "string" && ie.throwArgumentError("invalid ENS name", "name", e);
      const t = yield this.getResolver(e);
      return t ? yield t.getAddress() : null;
    });
  }
  lookupAddress(e) {
    return X(this, void 0, void 0, function* () {
      e = yield e, e = this.formatter.address(e);
      const t = e.substring(2).toLowerCase() + ".addr.reverse", r = yield this._getResolver(t, "lookupAddress");
      if (r == null)
        return null;
      const i = Ni(yield this.call({
        to: r,
        data: "0x691f3431" + Wn(t).substring(2)
      }), 0);
      return (yield this.resolveName(i)) != e ? null : i;
    });
  }
  getAvatar(e) {
    return X(this, void 0, void 0, function* () {
      let t = null;
      if (re(e)) {
        const s = this.formatter.address(e).substring(2).toLowerCase() + ".addr.reverse", o = yield this._getResolver(s, "getAvatar");
        if (!o)
          return null;
        t = new fo(this, o, s);
        try {
          const a = yield t.getAvatar();
          if (a)
            return a.url;
        } catch (a) {
          if (a.code !== _.errors.CALL_EXCEPTION)
            throw a;
        }
        try {
          const a = Ni(yield this.call({
            to: o,
            data: "0x691f3431" + Wn(s).substring(2)
          }), 0);
          t = yield this.getResolver(a);
        } catch (a) {
          if (a.code !== _.errors.CALL_EXCEPTION)
            throw a;
          return null;
        }
      } else if (t = yield this.getResolver(e), !t)
        return null;
      const r = yield t.getAvatar();
      return r == null ? null : r.url;
    });
  }
  perform(e, t) {
    return ie.throwError(e + " not implemented", _.errors.NOT_IMPLEMENTED, { operation: e });
  }
  _startEvent(e) {
    this.polling = this._events.filter((t) => t.pollable()).length > 0;
  }
  _stopEvent(e) {
    this.polling = this._events.filter((t) => t.pollable()).length > 0;
  }
  _addEventListener(e, t, r) {
    const i = new vx(cn(e), t, r);
    return this._events.push(i), this._startEvent(i), this;
  }
  on(e, t) {
    return this._addEventListener(e, t, !1);
  }
  once(e, t) {
    return this._addEventListener(e, t, !0);
  }
  emit(e, ...t) {
    let r = !1, i = [], s = cn(e);
    return this._events = this._events.filter((o) => o.tag !== s ? !0 : (setTimeout(() => {
      o.listener.apply(this, t);
    }, 0), r = !0, o.once ? (i.push(o), !1) : !0)), i.forEach((o) => {
      this._stopEvent(o);
    }), r;
  }
  listenerCount(e) {
    if (!e)
      return this._events.length;
    let t = cn(e);
    return this._events.filter((r) => r.tag === t).length;
  }
  listeners(e) {
    if (e == null)
      return this._events.map((r) => r.listener);
    let t = cn(e);
    return this._events.filter((r) => r.tag === t).map((r) => r.listener);
  }
  off(e, t) {
    if (t == null)
      return this.removeAllListeners(e);
    const r = [];
    let i = !1, s = cn(e);
    return this._events = this._events.filter((o) => o.tag !== s || o.listener != t || i ? !0 : (i = !0, r.push(o), !1)), r.forEach((o) => {
      this._stopEvent(o);
    }), this;
  }
  removeAllListeners(e) {
    let t = [];
    if (e == null)
      t = this._events, this._events = [];
    else {
      const r = cn(e);
      this._events = this._events.filter((i) => i.tag !== r ? !0 : (t.push(i), !1));
    }
    return t.forEach((r) => {
      this._stopEvent(r);
    }), this;
  }
}
var ir = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const it = new _(pt), Ex = ["call", "estimateGas"];
function $n(n, e) {
  if (n == null)
    return null;
  if (typeof n.message == "string" && n.message.match("reverted")) {
    const t = re(n.data) ? n.data : null;
    if (!e || t)
      return { message: n.message, data: t };
  }
  if (typeof n == "object") {
    for (const t in n) {
      const r = $n(n[t], e);
      if (r)
        return r;
    }
    return null;
  }
  if (typeof n == "string")
    try {
      return $n(JSON.parse(n), e);
    } catch {
    }
  return null;
}
function Jf(n, e, t) {
  const r = t.transaction || t.signedTransaction;
  if (n === "call") {
    const s = $n(e, !0);
    if (s)
      return s.data;
    it.throwError("missing revert data in call exception; Transaction reverted without a reason string", _.errors.CALL_EXCEPTION, {
      data: "0x",
      transaction: r,
      error: e
    });
  }
  if (n === "estimateGas") {
    let s = $n(e.body, !1);
    s == null && (s = $n(e, !1)), s && it.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", _.errors.UNPREDICTABLE_GAS_LIMIT, {
      reason: s.message,
      method: n,
      transaction: r,
      error: e
    });
  }
  let i = e.message;
  throw e.code === _.errors.SERVER_ERROR && e.error && typeof e.error.message == "string" ? i = e.error.message : typeof e.body == "string" ? i = e.body : typeof e.responseText == "string" && (i = e.responseText), i = (i || "").toLowerCase(), i.match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) && it.throwError("insufficient funds for intrinsic transaction cost", _.errors.INSUFFICIENT_FUNDS, {
    error: e,
    method: n,
    transaction: r
  }), i.match(/nonce (is )?too low/i) && it.throwError("nonce has already been used", _.errors.NONCE_EXPIRED, {
    error: e,
    method: n,
    transaction: r
  }), i.match(/replacement transaction underpriced|transaction gas price.*too low/i) && it.throwError("replacement fee too low", _.errors.REPLACEMENT_UNDERPRICED, {
    error: e,
    method: n,
    transaction: r
  }), i.match(/only replay-protected/i) && it.throwError("legacy pre-eip-155 transactions not supported", _.errors.UNSUPPORTED_OPERATION, {
    error: e,
    method: n,
    transaction: r
  }), Ex.indexOf(n) >= 0 && i.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/) && it.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", _.errors.UNPREDICTABLE_GAS_LIMIT, {
    error: e,
    method: n,
    transaction: r
  }), e;
}
function za(n) {
  return new Promise(function(e) {
    setTimeout(e, n);
  });
}
function _x(n) {
  if (n.error) {
    const e = new Error(n.error.message);
    throw e.code = n.error.code, e.data = n.error.data, e;
  }
  return n.result;
}
function Un(n) {
  return n && n.toLowerCase();
}
const co = {};
class Lo extends Pr {
  constructor(e, t, r) {
    if (super(), e !== co)
      throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
    B(this, "provider", t), r == null && (r = 0), typeof r == "string" ? (B(this, "_address", this.provider.formatter.address(r)), B(this, "_index", null)) : typeof r == "number" ? (B(this, "_index", r), B(this, "_address", null)) : it.throwArgumentError("invalid address or index", "addressOrIndex", r);
  }
  connect(e) {
    return it.throwError("cannot alter JSON-RPC Signer connection", _.errors.UNSUPPORTED_OPERATION, {
      operation: "connect"
    });
  }
  connectUnchecked() {
    return new Sx(co, this.provider, this._address || this._index);
  }
  getAddress() {
    return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then((e) => (e.length <= this._index && it.throwError("unknown account #" + this._index, _.errors.UNSUPPORTED_OPERATION, {
      operation: "getAddress"
    }), this.provider.formatter.address(e[this._index])));
  }
  sendUncheckedTransaction(e) {
    e = ge(e);
    const t = this.getAddress().then((r) => (r && (r = r.toLowerCase()), r));
    if (e.gasLimit == null) {
      const r = ge(e);
      r.from = t, e.gasLimit = this.provider.estimateGas(r);
    }
    return e.to != null && (e.to = Promise.resolve(e.to).then((r) => ir(this, void 0, void 0, function* () {
      if (r == null)
        return null;
      const i = yield this.provider.resolveName(r);
      return i == null && it.throwArgumentError("provided ENS name resolves to null", "tx.to", r), i;
    }))), et({
      tx: et(e),
      sender: t
    }).then(({ tx: r, sender: i }) => {
      r.from != null ? r.from.toLowerCase() !== i && it.throwArgumentError("from address mismatch", "transaction", e) : r.from = i;
      const s = this.provider.constructor.hexlifyTransaction(r, { from: !0 });
      return this.provider.send("eth_sendTransaction", [s]).then((o) => o, (o) => (typeof o.message == "string" && o.message.match(/user denied/i) && it.throwError("user rejected transaction", _.errors.ACTION_REJECTED, {
        action: "sendTransaction",
        transaction: r
      }), Jf("sendTransaction", o, s)));
    });
  }
  signTransaction(e) {
    return it.throwError("signing transactions is unsupported", _.errors.UNSUPPORTED_OPERATION, {
      operation: "signTransaction"
    });
  }
  sendTransaction(e) {
    return ir(this, void 0, void 0, function* () {
      const t = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval), r = yield this.sendUncheckedTransaction(e);
      try {
        return yield Vr(() => ir(this, void 0, void 0, function* () {
          const i = yield this.provider.getTransaction(r);
          if (i !== null)
            return this.provider._wrapTransaction(i, r, t);
        }), { oncePoll: this.provider });
      } catch (i) {
        throw i.transactionHash = r, i;
      }
    });
  }
  signMessage(e) {
    return ir(this, void 0, void 0, function* () {
      const t = typeof e == "string" ? nt(e) : e, r = yield this.getAddress();
      try {
        return yield this.provider.send("personal_sign", [G(t), r.toLowerCase()]);
      } catch (i) {
        throw typeof i.message == "string" && i.message.match(/user denied/i) && it.throwError("user rejected signing", _.errors.ACTION_REJECTED, {
          action: "signMessage",
          from: r,
          messageData: e
        }), i;
      }
    });
  }
  _legacySignMessage(e) {
    return ir(this, void 0, void 0, function* () {
      const t = typeof e == "string" ? nt(e) : e, r = yield this.getAddress();
      try {
        return yield this.provider.send("eth_sign", [r.toLowerCase(), G(t)]);
      } catch (i) {
        throw typeof i.message == "string" && i.message.match(/user denied/i) && it.throwError("user rejected signing", _.errors.ACTION_REJECTED, {
          action: "_legacySignMessage",
          from: r,
          messageData: e
        }), i;
      }
    });
  }
  _signTypedData(e, t, r) {
    return ir(this, void 0, void 0, function* () {
      const i = yield ct.resolveNames(e, t, r, (o) => this.provider.resolveName(o)), s = yield this.getAddress();
      try {
        return yield this.provider.send("eth_signTypedData_v4", [
          s.toLowerCase(),
          JSON.stringify(ct.getPayload(i.domain, t, i.value))
        ]);
      } catch (o) {
        throw typeof o.message == "string" && o.message.match(/user denied/i) && it.throwError("user rejected signing", _.errors.ACTION_REJECTED, {
          action: "_signTypedData",
          from: s,
          messageData: { domain: i.domain, types: t, value: i.value }
        }), o;
      }
    });
  }
  unlock(e) {
    return ir(this, void 0, void 0, function* () {
      const t = this.provider, r = yield this.getAddress();
      return t.send("personal_unlockAccount", [r.toLowerCase(), e, null]);
    });
  }
}
class Sx extends Lo {
  sendTransaction(e) {
    return this.sendUncheckedTransaction(e).then((t) => ({
      hash: t,
      nonce: null,
      gasLimit: null,
      gasPrice: null,
      data: null,
      value: null,
      chainId: null,
      confirmations: 0,
      from: null,
      wait: (r) => this.provider.waitForTransaction(t, r)
    }));
  }
}
const kx = {
  chainId: !0,
  data: !0,
  gasLimit: !0,
  gasPrice: !0,
  nonce: !0,
  to: !0,
  value: !0,
  type: !0,
  accessList: !0,
  maxFeePerGas: !0,
  maxPriorityFeePerGas: !0
};
class Sr extends is {
  constructor(e, t) {
    let r = t;
    r == null && (r = new Promise((i, s) => {
      setTimeout(() => {
        this.detectNetwork().then((o) => {
          i(o);
        }, (o) => {
          s(o);
        });
      }, 0);
    })), super(r), e || (e = lt(this.constructor, "defaultUrl")()), typeof e == "string" ? B(this, "connection", Object.freeze({
      url: e
    })) : B(this, "connection", Object.freeze(ge(e))), this._nextId = 42;
  }
  get _cache() {
    return this._eventLoopCache == null && (this._eventLoopCache = {}), this._eventLoopCache;
  }
  static defaultUrl() {
    return "http://localhost:8545";
  }
  detectNetwork() {
    return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(), setTimeout(() => {
      this._cache.detectNetwork = null;
    }, 0)), this._cache.detectNetwork;
  }
  _uncachedDetectNetwork() {
    return ir(this, void 0, void 0, function* () {
      yield za(0);
      let e = null;
      try {
        e = yield this.send("eth_chainId", []);
      } catch {
        try {
          e = yield this.send("net_version", []);
        } catch {
        }
      }
      if (e != null) {
        const t = lt(this.constructor, "getNetwork");
        try {
          return t(H.from(e).toNumber());
        } catch (r) {
          return it.throwError("could not detect network", _.errors.NETWORK_ERROR, {
            chainId: e,
            event: "invalidNetwork",
            serverError: r
          });
        }
      }
      return it.throwError("could not detect network", _.errors.NETWORK_ERROR, {
        event: "noNetwork"
      });
    });
  }
  getSigner(e) {
    return new Lo(co, this, e);
  }
  getUncheckedSigner(e) {
    return this.getSigner(e).connectUnchecked();
  }
  listAccounts() {
    return this.send("eth_accounts", []).then((e) => e.map((t) => this.formatter.address(t)));
  }
  send(e, t) {
    const r = {
      method: e,
      params: t,
      id: this._nextId++,
      jsonrpc: "2.0"
    };
    this.emit("debug", {
      action: "request",
      request: mt(r),
      provider: this
    });
    const i = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
    if (i && this._cache[e])
      return this._cache[e];
    const s = Rn(this.connection, JSON.stringify(r), _x).then((o) => (this.emit("debug", {
      action: "response",
      request: r,
      response: o,
      provider: this
    }), o), (o) => {
      throw this.emit("debug", {
        action: "response",
        error: o,
        request: r,
        provider: this
      }), o;
    });
    return i && (this._cache[e] = s, setTimeout(() => {
      this._cache[e] = null;
    }, 0)), s;
  }
  prepareRequest(e, t) {
    switch (e) {
      case "getBlockNumber":
        return ["eth_blockNumber", []];
      case "getGasPrice":
        return ["eth_gasPrice", []];
      case "getBalance":
        return ["eth_getBalance", [Un(t.address), t.blockTag]];
      case "getTransactionCount":
        return ["eth_getTransactionCount", [Un(t.address), t.blockTag]];
      case "getCode":
        return ["eth_getCode", [Un(t.address), t.blockTag]];
      case "getStorageAt":
        return ["eth_getStorageAt", [Un(t.address), xe(t.position, 32), t.blockTag]];
      case "sendTransaction":
        return ["eth_sendRawTransaction", [t.signedTransaction]];
      case "getBlock":
        return t.blockTag ? ["eth_getBlockByNumber", [t.blockTag, !!t.includeTransactions]] : t.blockHash ? ["eth_getBlockByHash", [t.blockHash, !!t.includeTransactions]] : null;
      case "getTransaction":
        return ["eth_getTransactionByHash", [t.transactionHash]];
      case "getTransactionReceipt":
        return ["eth_getTransactionReceipt", [t.transactionHash]];
      case "call":
        return ["eth_call", [lt(this.constructor, "hexlifyTransaction")(t.transaction, { from: !0 }), t.blockTag]];
      case "estimateGas":
        return ["eth_estimateGas", [lt(this.constructor, "hexlifyTransaction")(t.transaction, { from: !0 })]];
      case "getLogs":
        return t.filter && t.filter.address != null && (t.filter.address = Un(t.filter.address)), ["eth_getLogs", [t.filter]];
    }
    return null;
  }
  perform(e, t) {
    return ir(this, void 0, void 0, function* () {
      if (e === "call" || e === "estimateGas") {
        const i = t.transaction;
        if (i && i.type != null && H.from(i.type).isZero() && i.maxFeePerGas == null && i.maxPriorityFeePerGas == null) {
          const s = yield this.getFeeData();
          s.maxFeePerGas == null && s.maxPriorityFeePerGas == null && (t = ge(t), t.transaction = ge(i), delete t.transaction.type);
        }
      }
      const r = this.prepareRequest(e, t);
      r == null && it.throwError(e + " not implemented", _.errors.NOT_IMPLEMENTED, { operation: e });
      try {
        return yield this.send(r[0], r[1]);
      } catch (i) {
        return Jf(e, i, t);
      }
    });
  }
  _startEvent(e) {
    e.tag === "pending" && this._startPending(), super._startEvent(e);
  }
  _startPending() {
    if (this._pendingFilter != null)
      return;
    const e = this, t = this.send("eth_newPendingTransactionFilter", []);
    this._pendingFilter = t, t.then(function(r) {
      function i() {
        e.send("eth_getFilterChanges", [r]).then(function(s) {
          if (e._pendingFilter != t)
            return null;
          let o = Promise.resolve();
          return s.forEach(function(a) {
            e._emitted["t:" + a.toLowerCase()] = "pending", o = o.then(function() {
              return e.getTransaction(a).then(function(l) {
                return e.emit("pending", l), null;
              });
            });
          }), o.then(function() {
            return za(1e3);
          });
        }).then(function() {
          if (e._pendingFilter != t) {
            e.send("eth_uninstallFilter", [r]);
            return;
          }
          return setTimeout(function() {
            i();
          }, 0), null;
        }).catch((s) => {
        });
      }
      return i(), r;
    }).catch((r) => {
    });
  }
  _stopEvent(e) {
    e.tag === "pending" && this.listenerCount("pending") === 0 && (this._pendingFilter = null), super._stopEvent(e);
  }
  // Convert an ethers.js transaction into a JSON-RPC transaction
  //  - gasLimit => gas
  //  - All values hexlified
  //  - All numeric values zero-striped
  //  - All addresses are lowercased
  // NOTE: This allows a TransactionRequest, but all values should be resolved
  //       before this is called
  // @TODO: This will likely be removed in future versions and prepareRequest
  //        will be the preferred method for this.
  static hexlifyTransaction(e, t) {
    const r = ge(kx);
    if (t)
      for (const s in t)
        t[s] && (r[s] = !0);
    po(e, r);
    const i = {};
    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(function(s) {
      if (e[s] == null)
        return;
      const o = ai(H.from(e[s]));
      s === "gasLimit" && (s = "gas"), i[s] = o;
    }), ["from", "to", "data"].forEach(function(s) {
      e[s] != null && (i[s] = G(e[s]));
    }), e.accessList && (i.accessList = Ir(e.accessList)), i;
  }
}
let Yn = null;
try {
  if (Yn = WebSocket, Yn == null)
    throw new Error("inject please");
} catch {
  const e = new _(pt);
  Yn = function() {
    e.throwError("WebSockets not supported in this environment", _.errors.UNSUPPORTED_OPERATION, {
      operation: "new WebSocket()"
    });
  };
}
var Us = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const vi = new _(pt);
let Px = 1;
class ss extends Sr {
  constructor(e, t) {
    t === "any" && vi.throwError("WebSocketProvider does not support 'any' network yet", _.errors.UNSUPPORTED_OPERATION, {
      operation: "network:any"
    }), typeof e == "string" ? super(e, t) : super("_websocket", t), this._pollingInterval = -1, this._wsReady = !1, typeof e == "string" ? B(this, "_websocket", new Yn(this.connection.url)) : B(this, "_websocket", e), B(this, "_requests", {}), B(this, "_subs", {}), B(this, "_subIds", {}), B(this, "_detectNetwork", super.detectNetwork()), this.websocket.onopen = () => {
      this._wsReady = !0, Object.keys(this._requests).forEach((i) => {
        this.websocket.send(this._requests[i].payload);
      });
    }, this.websocket.onmessage = (i) => {
      const s = i.data, o = JSON.parse(s);
      if (o.id != null) {
        const a = String(o.id), l = this._requests[a];
        if (delete this._requests[a], o.result !== void 0)
          l.callback(null, o.result), this.emit("debug", {
            action: "response",
            request: JSON.parse(l.payload),
            response: o.result,
            provider: this
          });
        else {
          let h = null;
          o.error ? (h = new Error(o.error.message || "unknown error"), B(h, "code", o.error.code || null), B(h, "response", s)) : h = new Error("unknown error"), l.callback(h, void 0), this.emit("debug", {
            action: "response",
            error: h,
            request: JSON.parse(l.payload),
            provider: this
          });
        }
      } else if (o.method === "eth_subscription") {
        const a = this._subs[o.params.subscription];
        a && a.processFunc(o.params.result);
      } else
        console.warn("this should not happen");
    };
    const r = setInterval(() => {
      this.emit("poll");
    }, 1e3);
    r.unref && r.unref();
  }
  // Cannot narrow the type of _websocket, as that is not backwards compatible
  // so we add a getter and let the WebSocket be a public API.
  get websocket() {
    return this._websocket;
  }
  detectNetwork() {
    return this._detectNetwork;
  }
  get pollingInterval() {
    return 0;
  }
  resetEventsBlock(e) {
    vi.throwError("cannot reset events block on WebSocketProvider", _.errors.UNSUPPORTED_OPERATION, {
      operation: "resetEventBlock"
    });
  }
  set pollingInterval(e) {
    vi.throwError("cannot set polling interval on WebSocketProvider", _.errors.UNSUPPORTED_OPERATION, {
      operation: "setPollingInterval"
    });
  }
  poll() {
    return Us(this, void 0, void 0, function* () {
      return null;
    });
  }
  set polling(e) {
    e && vi.throwError("cannot set polling on WebSocketProvider", _.errors.UNSUPPORTED_OPERATION, {
      operation: "setPolling"
    });
  }
  send(e, t) {
    const r = Px++;
    return new Promise((i, s) => {
      function o(l, h) {
        return l ? s(l) : i(h);
      }
      const a = JSON.stringify({
        method: e,
        params: t,
        id: r,
        jsonrpc: "2.0"
      });
      this.emit("debug", {
        action: "request",
        request: JSON.parse(a),
        provider: this
      }), this._requests[String(r)] = { callback: o, payload: a }, this._wsReady && this.websocket.send(a);
    });
  }
  static defaultUrl() {
    return "ws://localhost:8546";
  }
  _subscribe(e, t, r) {
    return Us(this, void 0, void 0, function* () {
      let i = this._subIds[e];
      i == null && (i = Promise.all(t).then((o) => this.send("eth_subscribe", o)), this._subIds[e] = i);
      const s = yield i;
      this._subs[s] = { tag: e, processFunc: r };
    });
  }
  _startEvent(e) {
    switch (e.type) {
      case "block":
        this._subscribe("block", ["newHeads"], (t) => {
          const r = H.from(t.number).toNumber();
          this._emitted.block = r, this.emit("block", r);
        });
        break;
      case "pending":
        this._subscribe("pending", ["newPendingTransactions"], (t) => {
          this.emit("pending", t);
        });
        break;
      case "filter":
        this._subscribe(e.tag, ["logs", this._getFilter(e.filter)], (t) => {
          t.removed == null && (t.removed = !1), this.emit(e.filter, this.formatter.filterLog(t));
        });
        break;
      case "tx": {
        const t = (r) => {
          const i = r.hash;
          this.getTransactionReceipt(i).then((s) => {
            s && this.emit(i, s);
          });
        };
        t(e), this._subscribe("tx", ["newHeads"], (r) => {
          this._events.filter((i) => i.type === "tx").forEach(t);
        });
        break;
      }
      case "debug":
      case "poll":
      case "willPoll":
      case "didPoll":
      case "error":
        break;
      default:
        console.log("unhandled:", e);
        break;
    }
  }
  _stopEvent(e) {
    let t = e.tag;
    if (e.type === "tx") {
      if (this._events.filter((i) => i.type === "tx").length)
        return;
      t = "tx";
    } else if (this.listenerCount(e.event))
      return;
    const r = this._subIds[t];
    r && (delete this._subIds[t], r.then((i) => {
      this._subs[i] && (delete this._subs[i], this.send("eth_unsubscribe", [i]));
    }));
  }
  destroy() {
    return Us(this, void 0, void 0, function* () {
      this.websocket.readyState === Yn.CONNECTING && (yield new Promise((e) => {
        this.websocket.onopen = function() {
          e(!0);
        }, this.websocket.onerror = function() {
          e(!1);
        };
      })), this.websocket.close(1e3);
    });
  }
}
var Cx = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const Hn = new _(pt);
class Vf extends Sr {
  detectNetwork() {
    const e = Object.create(null, {
      detectNetwork: { get: () => super.detectNetwork }
    });
    return Cx(this, void 0, void 0, function* () {
      let t = this.network;
      return t == null && (t = yield e.detectNetwork.call(this), t || Hn.throwError("no network detected", _.errors.UNKNOWN_ERROR, {}), this._network == null && (B(this, "_network", t), this.emit("network", t, null))), t;
    });
  }
}
class ur extends Vf {
  constructor(e, t) {
    Hn.checkAbstract(new.target, ur), e = lt(new.target, "getNetwork")(e), t = lt(new.target, "getApiKey")(t);
    const r = lt(new.target, "getUrl")(e, t);
    super(r, e), typeof t == "string" ? B(this, "apiKey", t) : t != null && Object.keys(t).forEach((i) => {
      B(this, i, t[i]);
    });
  }
  _startPending() {
    Hn.warn("WARNING: API provider does not support pending filters");
  }
  isCommunityResource() {
    return !1;
  }
  getSigner(e) {
    return Hn.throwError("API provider does not support signing", _.errors.UNSUPPORTED_OPERATION, { operation: "getSigner" });
  }
  listAccounts() {
    return Promise.resolve([]);
  }
  // Return a defaultApiKey if null, otherwise validate the API key
  static getApiKey(e) {
    return e;
  }
  // Returns the url or connection for the given network and API key. The
  // API key will have been sanitized by the getApiKey first, so any validation
  // or transformations can be done there.
  static getUrl(e, t) {
    return Hn.throwError("not implemented; sub-classes must override getUrl", _.errors.NOT_IMPLEMENTED, {
      operation: "getUrl"
    });
  }
}
const ja = new _(pt), Ti = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
class $f extends ss {
  constructor(e, t) {
    const r = new Uo(e, t), i = r.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi.");
    super(i, r.network), B(this, "apiKey", r.apiKey);
  }
  isCommunityResource() {
    return this.apiKey === Ti;
  }
}
class Uo extends ur {
  static getWebSocketProvider(e, t) {
    return new $f(e, t);
  }
  static getApiKey(e) {
    return e == null ? Ti : (e && typeof e != "string" && ja.throwArgumentError("invalid apiKey", "apiKey", e), e);
  }
  static getUrl(e, t) {
    let r = null;
    switch (e.name) {
      case "homestead":
        r = "eth-mainnet.alchemyapi.io/v2/";
        break;
      case "goerli":
        r = "eth-goerli.g.alchemy.com/v2/";
        break;
      case "matic":
        r = "polygon-mainnet.g.alchemy.com/v2/";
        break;
      case "maticmum":
        r = "polygon-mumbai.g.alchemy.com/v2/";
        break;
      case "arbitrum":
        r = "arb-mainnet.g.alchemy.com/v2/";
        break;
      case "arbitrum-goerli":
        r = "arb-goerli.g.alchemy.com/v2/";
        break;
      case "optimism":
        r = "opt-mainnet.g.alchemy.com/v2/";
        break;
      case "optimism-goerli":
        r = "opt-goerli.g.alchemy.com/v2/";
        break;
      default:
        ja.throwArgumentError("unsupported network", "network", arguments[0]);
    }
    return {
      allowGzip: !0,
      url: "https://" + r + t,
      throttleCallback: (i, s) => (t === Ti && ui(), Promise.resolve(!0))
    };
  }
  isCommunityResource() {
    return this.apiKey === Ti;
  }
}
const Ix = new _(pt), yi = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
function Mx(n) {
  switch (n) {
    case "homestead":
      return "rpc.ankr.com/eth/";
    case "ropsten":
      return "rpc.ankr.com/eth_ropsten/";
    case "rinkeby":
      return "rpc.ankr.com/eth_rinkeby/";
    case "goerli":
      return "rpc.ankr.com/eth_goerli/";
    case "matic":
      return "rpc.ankr.com/polygon/";
    case "arbitrum":
      return "rpc.ankr.com/arbitrum/";
  }
  return Ix.throwArgumentError("unsupported network", "name", n);
}
class Yf extends ur {
  isCommunityResource() {
    return this.apiKey === yi;
  }
  static getApiKey(e) {
    return e ?? yi;
  }
  static getUrl(e, t) {
    t == null && (t = yi);
    const r = {
      allowGzip: !0,
      url: "https://" + Mx(e.name) + t,
      throttleCallback: (i, s) => (t.apiKey === yi && ui(), Promise.resolve(!0))
    };
    return t.projectSecret != null && (r.user = "", r.password = t.projectSecret), r;
  }
}
var Nx = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const Wa = new _(pt);
class Qf extends ur {
  static getApiKey(e) {
    return e != null && Wa.throwArgumentError("apiKey not supported for cloudflare", "apiKey", e), null;
  }
  static getUrl(e, t) {
    let r = null;
    switch (e.name) {
      case "homestead":
        r = "https://cloudflare-eth.com/";
        break;
      default:
        Wa.throwArgumentError("unsupported network", "network", arguments[0]);
    }
    return r;
  }
  perform(e, t) {
    const r = Object.create(null, {
      perform: { get: () => super.perform }
    });
    return Nx(this, void 0, void 0, function* () {
      return e === "getBlockNumber" ? (yield r.perform.call(this, "getBlock", { blockTag: "latest" })).number : r.perform.call(this, e, t);
    });
  }
}
var wi = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const vr = new _(pt);
function Ja(n) {
  const e = {};
  for (let t in n) {
    if (n[t] == null)
      continue;
    let r = n[t];
    t === "type" && r === 0 || ({ type: !0, gasLimit: !0, gasPrice: !0, maxFeePerGs: !0, maxPriorityFeePerGas: !0, nonce: !0, value: !0 }[t] ? r = ai(G(r)) : t === "accessList" ? r = "[" + Ir(r).map((i) => `{address:"${i.address}",storageKeys:["${i.storageKeys.join('","')}"]}`).join(",") + "]" : r = G(r), e[t] = r);
  }
  return e;
}
function Tx(n) {
  if (n.status == 0 && (n.message === "No records found" || n.message === "No transactions found"))
    return n.result;
  if (n.status != 1 || typeof n.message != "string" || !n.message.match(/^OK/)) {
    const e = new Error("invalid response");
    throw e.result = JSON.stringify(n), (n.result || "").toLowerCase().indexOf("rate limit") >= 0 && (e.throttleRetry = !0), e;
  }
  return n.result;
}
function Va(n) {
  if (n && n.status == 0 && n.message == "NOTOK" && (n.result || "").toLowerCase().indexOf("rate limit") >= 0) {
    const e = new Error("throttled response");
    throw e.result = JSON.stringify(n), e.throttleRetry = !0, e;
  }
  if (n.jsonrpc != "2.0") {
    const e = new Error("invalid response");
    throw e.result = JSON.stringify(n), e;
  }
  if (n.error) {
    const e = new Error(n.error.message || "unknown error");
    throw n.error.code && (e.code = n.error.code), n.error.data && (e.data = n.error.data), e;
  }
  return n.result;
}
function $a(n) {
  if (n === "pending")
    throw new Error("pending not supported");
  return n === "latest" ? n : parseInt(n.substring(2), 16);
}
function Ks(n, e, t) {
  if (n === "call" && e.code === _.errors.SERVER_ERROR) {
    const i = e.error;
    if (i && (i.message.match(/reverted/i) || i.message.match(/VM execution error/i))) {
      let s = i.data;
      if (s && (s = "0x" + s.replace(/^.*0x/i, "")), re(s))
        return s;
      vr.throwError("missing revert data in call exception", _.errors.CALL_EXCEPTION, {
        error: e,
        data: "0x"
      });
    }
  }
  let r = e.message;
  throw e.code === _.errors.SERVER_ERROR && (e.error && typeof e.error.message == "string" ? r = e.error.message : typeof e.body == "string" ? r = e.body : typeof e.responseText == "string" && (r = e.responseText)), r = (r || "").toLowerCase(), r.match(/insufficient funds/) && vr.throwError("insufficient funds for intrinsic transaction cost", _.errors.INSUFFICIENT_FUNDS, {
    error: e,
    method: n,
    transaction: t
  }), r.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && vr.throwError("nonce has already been used", _.errors.NONCE_EXPIRED, {
    error: e,
    method: n,
    transaction: t
  }), r.match(/another transaction with same nonce/) && vr.throwError("replacement fee too low", _.errors.REPLACEMENT_UNDERPRICED, {
    error: e,
    method: n,
    transaction: t
  }), r.match(/execution failed due to an exception|execution reverted/) && vr.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", _.errors.UNPREDICTABLE_GAS_LIMIT, {
    error: e,
    method: n,
    transaction: t
  }), e;
}
class Zf extends is {
  constructor(e, t) {
    super(e), B(this, "baseUrl", this.getBaseUrl()), B(this, "apiKey", t || null);
  }
  getBaseUrl() {
    switch (this.network ? this.network.name : "invalid") {
      case "homestead":
        return "https://api.etherscan.io";
      case "goerli":
        return "https://api-goerli.etherscan.io";
      case "sepolia":
        return "https://api-sepolia.etherscan.io";
      case "matic":
        return "https://api.polygonscan.com";
      case "maticmum":
        return "https://api-testnet.polygonscan.com";
      case "arbitrum":
        return "https://api.arbiscan.io";
      case "arbitrum-goerli":
        return "https://api-goerli.arbiscan.io";
      case "optimism":
        return "https://api-optimistic.etherscan.io";
      case "optimism-goerli":
        return "https://api-goerli-optimistic.etherscan.io";
    }
    return vr.throwArgumentError("unsupported network", "network", this.network.name);
  }
  getUrl(e, t) {
    const r = Object.keys(t).reduce((s, o) => {
      const a = t[o];
      return a != null && (s += `&${o}=${a}`), s;
    }, ""), i = this.apiKey ? `&apikey=${this.apiKey}` : "";
    return `${this.baseUrl}/api?module=${e}${r}${i}`;
  }
  getPostUrl() {
    return `${this.baseUrl}/api`;
  }
  getPostData(e, t) {
    return t.module = e, t.apikey = this.apiKey, t;
  }
  fetch(e, t, r) {
    return wi(this, void 0, void 0, function* () {
      const i = r ? this.getPostUrl() : this.getUrl(e, t), s = r ? this.getPostData(e, t) : null, o = e === "proxy" ? Va : Tx;
      this.emit("debug", {
        action: "request",
        request: i,
        provider: this
      });
      const a = {
        url: i,
        throttleSlotInterval: 1e3,
        throttleCallback: (x, b) => (this.isCommunityResource() && ui(), Promise.resolve(!0))
      };
      let l = null;
      s && (a.headers = { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" }, l = Object.keys(s).map((x) => `${x}=${s[x]}`).join("&"));
      const h = yield Rn(a, l, o || Va);
      return this.emit("debug", {
        action: "response",
        request: i,
        response: mt(h),
        provider: this
      }), h;
    });
  }
  detectNetwork() {
    return wi(this, void 0, void 0, function* () {
      return this.network;
    });
  }
  perform(e, t) {
    const r = Object.create(null, {
      perform: { get: () => super.perform }
    });
    return wi(this, void 0, void 0, function* () {
      switch (e) {
        case "getBlockNumber":
          return this.fetch("proxy", { action: "eth_blockNumber" });
        case "getGasPrice":
          return this.fetch("proxy", { action: "eth_gasPrice" });
        case "getBalance":
          return this.fetch("account", {
            action: "balance",
            address: t.address,
            tag: t.blockTag
          });
        case "getTransactionCount":
          return this.fetch("proxy", {
            action: "eth_getTransactionCount",
            address: t.address,
            tag: t.blockTag
          });
        case "getCode":
          return this.fetch("proxy", {
            action: "eth_getCode",
            address: t.address,
            tag: t.blockTag
          });
        case "getStorageAt":
          return this.fetch("proxy", {
            action: "eth_getStorageAt",
            address: t.address,
            position: t.position,
            tag: t.blockTag
          });
        case "sendTransaction":
          return this.fetch("proxy", {
            action: "eth_sendRawTransaction",
            hex: t.signedTransaction
          }, !0).catch((i) => Ks("sendTransaction", i, t.signedTransaction));
        case "getBlock":
          if (t.blockTag)
            return this.fetch("proxy", {
              action: "eth_getBlockByNumber",
              tag: t.blockTag,
              boolean: t.includeTransactions ? "true" : "false"
            });
          throw new Error("getBlock by blockHash not implemented");
        case "getTransaction":
          return this.fetch("proxy", {
            action: "eth_getTransactionByHash",
            txhash: t.transactionHash
          });
        case "getTransactionReceipt":
          return this.fetch("proxy", {
            action: "eth_getTransactionReceipt",
            txhash: t.transactionHash
          });
        case "call": {
          if (t.blockTag !== "latest")
            throw new Error("EtherscanProvider does not support blockTag for call");
          const i = Ja(t.transaction);
          i.module = "proxy", i.action = "eth_call";
          try {
            return yield this.fetch("proxy", i, !0);
          } catch (s) {
            return Ks("call", s, t.transaction);
          }
        }
        case "estimateGas": {
          const i = Ja(t.transaction);
          i.module = "proxy", i.action = "eth_estimateGas";
          try {
            return yield this.fetch("proxy", i, !0);
          } catch (s) {
            return Ks("estimateGas", s, t.transaction);
          }
        }
        case "getLogs": {
          const i = { action: "getLogs" };
          if (t.filter.fromBlock && (i.fromBlock = $a(t.filter.fromBlock)), t.filter.toBlock && (i.toBlock = $a(t.filter.toBlock)), t.filter.address && (i.address = t.filter.address), t.filter.topics && t.filter.topics.length > 0 && (t.filter.topics.length > 1 && vr.throwError("unsupported topic count", _.errors.UNSUPPORTED_OPERATION, { topics: t.filter.topics }), t.filter.topics.length === 1)) {
            const a = t.filter.topics[0];
            (typeof a != "string" || a.length !== 66) && vr.throwError("unsupported topic format", _.errors.UNSUPPORTED_OPERATION, { topic0: a }), i.topic0 = a;
          }
          const s = yield this.fetch("logs", i);
          let o = {};
          for (let a = 0; a < s.length; a++) {
            const l = s[a];
            if (l.blockHash == null) {
              if (o[l.blockNumber] == null) {
                const h = yield this.getBlock(l.blockNumber);
                h && (o[l.blockNumber] = h.hash);
              }
              l.blockHash = o[l.blockNumber];
            }
          }
          return s;
        }
        case "getEtherPrice":
          return this.network.name !== "homestead" ? 0 : parseFloat((yield this.fetch("stats", { action: "ethprice" })).ethusd);
      }
      return r.perform.call(this, e, t);
    });
  }
  // Note: The `page` page parameter only allows pagination within the
  //       10,000 window available without a page and offset parameter
  //       Error: Result window is too large, PageNo x Offset size must
  //              be less than or equal to 10000
  getHistory(e, t, r) {
    return wi(this, void 0, void 0, function* () {
      const i = {
        action: "txlist",
        address: yield this.resolveName(e),
        startblock: t ?? 0,
        endblock: r ?? 99999999,
        sort: "asc"
      };
      return (yield this.fetch("account", i)).map((o) => {
        ["contractAddress", "to"].forEach(function(l) {
          o[l] == "" && delete o[l];
        }), o.creates == null && o.contractAddress != null && (o.creates = o.contractAddress);
        const a = this.formatter.transactionResponse(o);
        return o.timeStamp && (a.timestamp = parseInt(o.timeStamp)), a;
      });
    });
  }
  isCommunityResource() {
    return this.apiKey == null;
  }
}
var Wi = globalThis && globalThis.__awaiter || function(n, e, t, r) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function a(x) {
      try {
        h(r.next(x));
      } catch (b) {
        o(b);
      }
    }
    function l(x) {
      try {
        h(r.throw(x));
      } catch (b) {
        o(b);
      }
    }
    function h(x) {
      x.done ? s(x.value) : i(x.value).then(a, l);
    }
    h((r = r.apply(n, e || [])).next());
  });
};
const Jr = new _(pt);
function Ai() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Ya(n) {
  let e = null;
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    if (r == null)
      return null;
    e ? e.name === r.name && e.chainId === r.chainId && (e.ensAddress === r.ensAddress || e.ensAddress == null && r.ensAddress == null) || Jr.throwArgumentError("provider mismatch", "networks", n) : e = r;
  }
  return e;
}
function Qa(n, e) {
  n = n.slice().sort();
  const t = Math.floor(n.length / 2);
  if (n.length % 2)
    return n[t];
  const r = n[t - 1], i = n[t];
  return e != null && Math.abs(r - i) > e ? null : (r + i) / 2;
}
function pn(n) {
  if (n === null)
    return "null";
  if (typeof n == "number" || typeof n == "boolean")
    return JSON.stringify(n);
  if (typeof n == "string")
    return n;
  if (H.isBigNumber(n))
    return n.toString();
  if (Array.isArray(n))
    return JSON.stringify(n.map((e) => pn(e)));
  if (typeof n == "object") {
    const e = Object.keys(n);
    return e.sort(), "{" + e.map((t) => {
      let r = n[t];
      return typeof r == "function" ? r = "[function]" : r = pn(r), JSON.stringify(t) + ":" + r;
    }).join(",") + "}";
  }
  throw new Error("unknown value type: " + typeof n);
}
let Rx = 1;
function Za(n) {
  let e = null, t = null, r = new Promise((o) => {
    e = function() {
      t && (clearTimeout(t), t = null), o();
    }, t = setTimeout(e, n);
  });
  const i = (o) => (r = r.then(o), r);
  function s() {
    return r;
  }
  return { cancel: e, getPromise: s, wait: i };
}
const Bx = [
  _.errors.CALL_EXCEPTION,
  _.errors.INSUFFICIENT_FUNDS,
  _.errors.NONCE_EXPIRED,
  _.errors.REPLACEMENT_UNDERPRICED,
  _.errors.UNPREDICTABLE_GAS_LIMIT
], Ox = [
  "address",
  "args",
  "errorArgs",
  "errorSignature",
  "method",
  "transaction"
];
function Ei(n, e) {
  const t = {
    weight: n.weight
  };
  return Object.defineProperty(t, "provider", { get: () => n.provider }), n.start && (t.start = n.start), e && (t.duration = e - n.start), n.done && (n.error ? t.error = n.error : t.result = n.result || null), t;
}
function Fx(n, e) {
  return function(t) {
    const r = {};
    t.forEach((s) => {
      const o = n(s.result);
      r[o] || (r[o] = { count: 0, result: s.result }), r[o].count++;
    });
    const i = Object.keys(r);
    for (let s = 0; s < i.length; s++) {
      const o = r[i[s]];
      if (o.count >= e)
        return o.result;
    }
  };
}
function Dx(n, e, t) {
  let r = pn;
  switch (e) {
    case "getBlockNumber":
      return function(i) {
        const s = i.map((a) => a.result);
        let o = Qa(i.map((a) => a.result), 2);
        if (o != null)
          return o = Math.ceil(o), s.indexOf(o + 1) >= 0 && o++, o >= n._highestBlockNumber && (n._highestBlockNumber = o), n._highestBlockNumber;
      };
    case "getGasPrice":
      return function(i) {
        const s = i.map((o) => o.result);
        return s.sort(), s[Math.floor(s.length / 2)];
      };
    case "getEtherPrice":
      return function(i) {
        return Qa(i.map((s) => s.result));
      };
    case "getBalance":
    case "getTransactionCount":
    case "getCode":
    case "getStorageAt":
    case "call":
    case "estimateGas":
    case "getLogs":
      break;
    case "getTransaction":
    case "getTransactionReceipt":
      r = function(i) {
        return i == null ? null : (i = ge(i), i.confirmations = -1, pn(i));
      };
      break;
    case "getBlock":
      t.includeTransactions ? r = function(i) {
        return i == null ? null : (i = ge(i), i.transactions = i.transactions.map((s) => (s = ge(s), s.confirmations = -1, s)), pn(i));
      } : r = function(i) {
        return i == null ? null : pn(i);
      };
      break;
    default:
      throw new Error("unknown method: " + e);
  }
  return Fx(r, n.quorum);
}
function Kn(n, e) {
  return Wi(this, void 0, void 0, function* () {
    const t = n.provider;
    return t.blockNumber != null && t.blockNumber >= e || e === -1 ? t : Vr(() => new Promise((r, i) => {
      setTimeout(function() {
        return t.blockNumber >= e ? r(t) : n.cancelled ? r(null) : r(void 0);
      }, 0);
    }), { oncePoll: t });
  });
}
function Lx(n, e, t, r) {
  return Wi(this, void 0, void 0, function* () {
    let i = n.provider;
    switch (t) {
      case "getBlockNumber":
      case "getGasPrice":
        return i[t]();
      case "getEtherPrice":
        if (i.getEtherPrice)
          return i.getEtherPrice();
        break;
      case "getBalance":
      case "getTransactionCount":
      case "getCode":
        return r.blockTag && re(r.blockTag) && (i = yield Kn(n, e)), i[t](r.address, r.blockTag || "latest");
      case "getStorageAt":
        return r.blockTag && re(r.blockTag) && (i = yield Kn(n, e)), i.getStorageAt(r.address, r.position, r.blockTag || "latest");
      case "getBlock":
        return r.blockTag && re(r.blockTag) && (i = yield Kn(n, e)), i[r.includeTransactions ? "getBlockWithTransactions" : "getBlock"](r.blockTag || r.blockHash);
      case "call":
      case "estimateGas":
        return r.blockTag && re(r.blockTag) && (i = yield Kn(n, e)), t === "call" && r.blockTag ? i[t](r.transaction, r.blockTag) : i[t](r.transaction);
      case "getTransaction":
      case "getTransactionReceipt":
        return i[t](r.transactionHash);
      case "getLogs": {
        let s = r.filter;
        return (s.fromBlock && re(s.fromBlock) || s.toBlock && re(s.toBlock)) && (i = yield Kn(n, e)), i.getLogs(s);
      }
    }
    return Jr.throwError("unknown method error", _.errors.UNKNOWN_ERROR, {
      method: t,
      params: r
    });
  });
}
class Xf extends is {
  constructor(e, t) {
    e.length === 0 && Jr.throwArgumentError("missing providers", "providers", e);
    const r = e.map((o, a) => {
      if (sn.isProvider(o)) {
        const x = ao(o) ? 2e3 : 750;
        return Object.freeze({ provider: o, weight: 1, stallTimeout: x, priority: 1 });
      }
      const l = ge(o);
      l.priority == null && (l.priority = 1), l.stallTimeout == null && (l.stallTimeout = ao(o) ? 2e3 : 750), l.weight == null && (l.weight = 1);
      const h = l.weight;
      return (h % 1 || h > 512 || h < 1) && Jr.throwArgumentError("invalid weight; must be integer in [1, 512]", `providers[${a}].weight`, h), Object.freeze(l);
    }), i = r.reduce((o, a) => o + a.weight, 0);
    t == null ? t = i / 2 : t > i && Jr.throwArgumentError("quorum will always fail; larger than total weight", "quorum", t);
    let s = Ya(r.map((o) => o.provider.network));
    s == null && (s = new Promise((o, a) => {
      setTimeout(() => {
        this.detectNetwork().then(o, a);
      }, 0);
    })), super(s), B(this, "providerConfigs", Object.freeze(r)), B(this, "quorum", t), this._highestBlockNumber = -1;
  }
  detectNetwork() {
    return Wi(this, void 0, void 0, function* () {
      const e = yield Promise.all(this.providerConfigs.map((t) => t.provider.getNetwork()));
      return Ya(e);
    });
  }
  perform(e, t) {
    return Wi(this, void 0, void 0, function* () {
      if (e === "sendTransaction") {
        const l = yield Promise.all(this.providerConfigs.map((h) => h.provider.sendTransaction(t.signedTransaction).then((x) => x.hash, (x) => x)));
        for (let h = 0; h < l.length; h++) {
          const x = l[h];
          if (typeof x == "string")
            return x;
        }
        throw l[0];
      }
      this._highestBlockNumber === -1 && e !== "getBlockNumber" && (yield this.getBlockNumber());
      const r = Dx(this, e, t), i = Rf(this.providerConfigs.map(ge));
      i.sort((l, h) => l.priority - h.priority);
      const s = this._highestBlockNumber;
      let o = 0, a = !0;
      for (; ; ) {
        const l = Ai();
        let h = i.filter((S) => S.runner && l - S.start < S.stallTimeout).reduce((S, I) => S + I.weight, 0);
        for (; h < this.quorum && o < i.length; ) {
          const S = i[o++], I = Rx++;
          S.start = Ai(), S.staller = Za(S.stallTimeout), S.staller.wait(() => {
            S.staller = null;
          }), S.runner = Lx(S, s, e, t).then((C) => {
            S.done = !0, S.result = C, this.listenerCount("debug") && this.emit("debug", {
              action: "request",
              rid: I,
              backend: Ei(S, Ai()),
              request: { method: e, params: mt(t) },
              provider: this
            });
          }, (C) => {
            S.done = !0, S.error = C, this.listenerCount("debug") && this.emit("debug", {
              action: "request",
              rid: I,
              backend: Ei(S, Ai()),
              request: { method: e, params: mt(t) },
              provider: this
            });
          }), this.listenerCount("debug") && this.emit("debug", {
            action: "request",
            rid: I,
            backend: Ei(S, null),
            request: { method: e, params: mt(t) },
            provider: this
          }), h += S.weight;
        }
        const x = [];
        i.forEach((S) => {
          S.done || !S.runner || (x.push(S.runner), S.staller && x.push(S.staller.getPromise()));
        }), x.length && (yield Promise.race(x));
        const b = i.filter((S) => S.done && S.error == null);
        if (b.length >= this.quorum) {
          const S = r(b);
          if (S !== void 0)
            return i.forEach((I) => {
              I.staller && I.staller.cancel(), I.cancelled = !0;
            }), S;
          a || (yield Za(100).getPromise()), a = !1;
        }
        const E = i.reduce((S, I) => {
          if (!I.done || I.error == null)
            return S;
          const C = I.error.code;
          return Bx.indexOf(C) >= 0 && (S[C] || (S[C] = { error: I.error, weight: 0 }), S[C].weight += I.weight), S;
        }, {});
        if (Object.keys(E).forEach((S) => {
          const I = E[S];
          if (I.weight < this.quorum)
            return;
          i.forEach((T) => {
            T.staller && T.staller.cancel(), T.cancelled = !0;
          });
          const C = I.error, y = {};
          Ox.forEach((T) => {
            C[T] != null && (y[T] = C[T]);
          }), Jr.throwError(C.reason || C.message, S, y);
        }), i.filter((S) => !S.done).length === 0)
          break;
      }
      return i.forEach((l) => {
        l.staller && l.staller.cancel(), l.cancelled = !0;
      }), Jr.throwError("failed to meet quorum", _.errors.SERVER_ERROR, {
        method: e,
        params: t,
        //results: configs.map((c) => c.result),
        //errors: configs.map((c) => c.error),
        results: i.map((l) => Ei(l)),
        provider: this
      });
    });
  }
}
const ec = null, Ri = new _(pt), Gn = "84842078b09946638c03157f83405213";
class tc extends ss {
  constructor(e, t) {
    const r = new Ko(e, t), i = r.connection;
    i.password && Ri.throwError("INFURA WebSocket project secrets unsupported", _.errors.UNSUPPORTED_OPERATION, {
      operation: "InfuraProvider.getWebSocketProvider()"
    });
    const s = i.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/");
    super(s, e), B(this, "apiKey", r.projectId), B(this, "projectId", r.projectId), B(this, "projectSecret", r.projectSecret);
  }
  isCommunityResource() {
    return this.projectId === Gn;
  }
}
class Ko extends ur {
  static getWebSocketProvider(e, t) {
    return new tc(e, t);
  }
  static getApiKey(e) {
    const t = {
      apiKey: Gn,
      projectId: Gn,
      projectSecret: null
    };
    return e == null || (typeof e == "string" ? t.projectId = e : e.projectSecret != null ? (Ri.assertArgument(typeof e.projectId == "string", "projectSecret requires a projectId", "projectId", e.projectId), Ri.assertArgument(typeof e.projectSecret == "string", "invalid projectSecret", "projectSecret", "[REDACTED]"), t.projectId = e.projectId, t.projectSecret = e.projectSecret) : e.projectId && (t.projectId = e.projectId), t.apiKey = t.projectId), t;
  }
  static getUrl(e, t) {
    let r = null;
    switch (e ? e.name : "unknown") {
      case "homestead":
        r = "mainnet.infura.io";
        break;
      case "goerli":
        r = "goerli.infura.io";
        break;
      case "sepolia":
        r = "sepolia.infura.io";
        break;
      case "matic":
        r = "polygon-mainnet.infura.io";
        break;
      case "maticmum":
        r = "polygon-mumbai.infura.io";
        break;
      case "optimism":
        r = "optimism-mainnet.infura.io";
        break;
      case "optimism-goerli":
        r = "optimism-goerli.infura.io";
        break;
      case "arbitrum":
        r = "arbitrum-mainnet.infura.io";
        break;
      case "arbitrum-goerli":
        r = "arbitrum-goerli.infura.io";
        break;
      default:
        Ri.throwError("unsupported network", _.errors.INVALID_ARGUMENT, {
          argument: "network",
          value: e
        });
    }
    const i = {
      allowGzip: !0,
      url: "https://" + r + "/v3/" + t.projectId,
      throttleCallback: (s, o) => (t.projectId === Gn && ui(), Promise.resolve(!0))
    };
    return t.projectSecret != null && (i.user = "", i.password = t.projectSecret), i;
  }
  isCommunityResource() {
    return this.projectId === Gn;
  }
}
class Ux extends Sr {
  send(e, t) {
    const r = {
      method: e,
      params: t,
      id: this._nextId++,
      jsonrpc: "2.0"
    };
    this._pendingBatch == null && (this._pendingBatch = []);
    const i = { request: r, resolve: null, reject: null }, s = new Promise((o, a) => {
      i.resolve = o, i.reject = a;
    });
    return this._pendingBatch.push(i), this._pendingBatchAggregator || (this._pendingBatchAggregator = setTimeout(() => {
      const o = this._pendingBatch;
      this._pendingBatch = null, this._pendingBatchAggregator = null;
      const a = o.map((l) => l.request);
      return this.emit("debug", {
        action: "requestBatch",
        request: mt(a),
        provider: this
      }), Rn(this.connection, JSON.stringify(a)).then((l) => {
        this.emit("debug", {
          action: "response",
          request: a,
          response: l,
          provider: this
        }), o.forEach((h, x) => {
          const b = l[x];
          if (b.error) {
            const E = new Error(b.error.message);
            E.code = b.error.code, E.data = b.error.data, h.reject(E);
          } else
            h.resolve(b.result);
        });
      }, (l) => {
        this.emit("debug", {
          action: "response",
          error: l,
          request: a,
          provider: this
        }), o.forEach((h) => {
          h.reject(l);
        });
      });
    }, 10)), s;
  }
}
const Hs = new _(pt), Kx = "ETHERS_JS_SHARED";
class rc extends ur {
  static getApiKey(e) {
    return e && typeof e != "string" && Hs.throwArgumentError("invalid apiKey", "apiKey", e), e || Kx;
  }
  static getUrl(e, t) {
    Hs.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");
    let r = null;
    switch (e.name) {
      case "homestead":
        r = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
        break;
      case "ropsten":
        r = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
        break;
      case "rinkeby":
        r = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
        break;
      case "goerli":
        r = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
        break;
      case "kovan":
        r = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
        break;
      default:
        Hs.throwArgumentError("unsupported network", "network", arguments[0]);
    }
    return r + "?apiKey=" + t;
  }
}
const Xa = new _(pt), e0 = "62e1ad51b37b8e00394bda3b";
class nc extends ur {
  static getApiKey(e) {
    const t = {
      applicationId: null,
      loadBalancer: !0,
      applicationSecretKey: null
    };
    return e == null ? t.applicationId = e0 : typeof e == "string" ? t.applicationId = e : e.applicationSecretKey != null ? (t.applicationId = e.applicationId, t.applicationSecretKey = e.applicationSecretKey) : e.applicationId ? t.applicationId = e.applicationId : Xa.throwArgumentError("unsupported PocketProvider apiKey", "apiKey", e), t;
  }
  static getUrl(e, t) {
    let r = null;
    switch (e ? e.name : "unknown") {
      case "goerli":
        r = "eth-goerli.gateway.pokt.network";
        break;
      case "homestead":
        r = "eth-mainnet.gateway.pokt.network";
        break;
      case "kovan":
        r = "poa-kovan.gateway.pokt.network";
        break;
      case "matic":
        r = "poly-mainnet.gateway.pokt.network";
        break;
      case "maticmum":
        r = "polygon-mumbai-rpc.gateway.pokt.network";
        break;
      case "rinkeby":
        r = "eth-rinkeby.gateway.pokt.network";
        break;
      case "ropsten":
        r = "eth-ropsten.gateway.pokt.network";
        break;
      default:
        Xa.throwError("unsupported network", _.errors.INVALID_ARGUMENT, {
          argument: "network",
          value: e
        });
    }
    const i = `https://${r}/v1/lb/${t.applicationId}`, s = { headers: {}, url: i };
    return t.applicationSecretKey != null && (s.user = "", s.password = t.applicationSecretKey), s;
  }
  isCommunityResource() {
    return this.applicationId === e0;
  }
}
const t0 = new _(pt);
let Hx = 1;
function r0(n, e) {
  const t = "Web3LegacyFetcher";
  return function(r, i) {
    const s = {
      method: r,
      params: i,
      id: Hx++,
      jsonrpc: "2.0"
    };
    return new Promise((o, a) => {
      this.emit("debug", {
        action: "request",
        fetcher: t,
        request: mt(s),
        provider: this
      }), e(s, (l, h) => {
        if (l)
          return this.emit("debug", {
            action: "response",
            fetcher: t,
            error: l,
            request: s,
            provider: this
          }), a(l);
        if (this.emit("debug", {
          action: "response",
          fetcher: t,
          request: s,
          response: h,
          provider: this
        }), h.error) {
          const x = new Error(h.error.message);
          return x.code = h.error.code, x.data = h.error.data, a(x);
        }
        o(h.result);
      });
    });
  };
}
function Gx(n) {
  return function(e, t) {
    t == null && (t = []);
    const r = { method: e, params: t };
    return this.emit("debug", {
      action: "request",
      fetcher: "Eip1193Fetcher",
      request: mt(r),
      provider: this
    }), n.request(r).then((i) => (this.emit("debug", {
      action: "response",
      fetcher: "Eip1193Fetcher",
      request: r,
      response: i,
      provider: this
    }), i), (i) => {
      throw this.emit("debug", {
        action: "response",
        fetcher: "Eip1193Fetcher",
        request: r,
        error: i,
        provider: this
      }), i;
    });
  };
}
class ic extends Sr {
  constructor(e, t) {
    e == null && t0.throwArgumentError("missing provider", "provider", e);
    let r = null, i = null, s = null;
    typeof e == "function" ? (r = "unknown:", i = e) : (r = e.host || e.path || "", !r && e.isMetaMask && (r = "metamask"), s = e, e.request ? (r === "" && (r = "eip-1193:"), i = Gx(e)) : e.sendAsync ? i = r0(e, e.sendAsync.bind(e)) : e.send ? i = r0(e, e.send.bind(e)) : t0.throwArgumentError("unsupported provider", "provider", e), r || (r = "unknown:")), super(r, t), B(this, "jsonRpcFetchFunc", i), B(this, "provider", s);
  }
  send(e, t) {
    return this.jsonRpcFetchFunc(e, t);
  }
}
const n0 = new _(pt);
function sc(n, e) {
  if (n == null && (n = "homestead"), typeof n == "string") {
    const r = n.match(/^(ws|http)s?:/i);
    if (r)
      switch (r[1].toLowerCase()) {
        case "http":
        case "https":
          return new Sr(n);
        case "ws":
        case "wss":
          return new ss(n);
        default:
          n0.throwArgumentError("unsupported URL scheme", "network", n);
      }
  }
  const t = Do(n);
  return (!t || !t._defaultProvider) && n0.throwError("unsupported getDefaultProvider network", _.errors.NETWORK_ERROR, {
    operation: "getDefaultProvider",
    network: n
  }), t._defaultProvider({
    FallbackProvider: Xf,
    AlchemyProvider: Uo,
    AnkrProvider: Yf,
    CloudflareProvider: Qf,
    EtherscanProvider: Zf,
    InfuraProvider: Ko,
    JsonRpcProvider: Sr,
    NodesmithProvider: rc,
    PocketProvider: nc,
    Web3Provider: ic,
    IpcProvider: ec
  }, e);
}
const qx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlchemyProvider: Uo,
  AlchemyWebSocketProvider: $f,
  AnkrProvider: Yf,
  BaseProvider: is,
  CloudflareProvider: Qf,
  EtherscanProvider: Zf,
  FallbackProvider: Xf,
  Formatter: $,
  InfuraProvider: Ko,
  InfuraWebSocketProvider: tc,
  IpcProvider: ec,
  JsonRpcBatchProvider: Ux,
  JsonRpcProvider: Sr,
  JsonRpcSigner: Lo,
  NodesmithProvider: rc,
  PocketProvider: nc,
  Provider: sn,
  Resolver: fo,
  StaticJsonRpcProvider: Vf,
  UrlJsonRpcProvider: ur,
  Web3Provider: ic,
  WebSocketProvider: ss,
  getDefaultProvider: sc,
  getNetwork: Do,
  isCommunityResourcable: zf,
  isCommunityResource: ao,
  showThrottleMessage: ui
}, Symbol.toStringTag, { value: "Module" })), zx = "solidity/5.7.0", jx = new RegExp("^bytes([0-9]+)$"), Wx = new RegExp("^(u?int)([0-9]*)$"), Jx = new RegExp("^(.*)\\[([0-9]*)\\]$"), Vx = "0000000000000000000000000000000000000000000000000000000000000000", hn = new _(zx);
function oc(n, e, t) {
  switch (n) {
    case "address":
      return t ? qn(e, 32) : K(e);
    case "string":
      return nt(e);
    case "bytes":
      return K(e);
    case "bool":
      return e = e ? "0x01" : "0x00", t ? qn(e, 32) : K(e);
  }
  let r = n.match(Wx);
  if (r) {
    let i = parseInt(r[2] || "256");
    return (r[2] && String(i) !== r[2] || i % 8 !== 0 || i === 0 || i > 256) && hn.throwArgumentError("invalid number type", "type", n), t && (i = 256), e = H.from(e).toTwos(i), qn(e, i / 8);
  }
  if (r = n.match(jx), r) {
    const i = parseInt(r[1]);
    return (String(i) !== r[1] || i === 0 || i > 32) && hn.throwArgumentError("invalid bytes type", "type", n), K(e).byteLength !== i && hn.throwArgumentError(`invalid value for ${n}`, "value", e), t ? K((e + Vx).substring(0, 66)) : e;
  }
  if (r = n.match(Jx), r && Array.isArray(e)) {
    const i = r[1];
    parseInt(r[2] || String(e.length)) != e.length && hn.throwArgumentError(`invalid array length for ${n}`, "value", e);
    const o = [];
    return e.forEach(function(a) {
      o.push(oc(i, a, !0));
    }), de(o);
  }
  return hn.throwArgumentError("invalid type", "type", n);
}
function Ho(n, e) {
  n.length != e.length && hn.throwArgumentError("wrong number of values; expected ${ types.length }", "values", e);
  const t = [];
  return n.forEach(function(r, i) {
    t.push(oc(r, e[i]));
  }), G(de(t));
}
function $x(n, e) {
  return he(Ho(n, e));
}
function Yx(n, e) {
  return cr(Ho(n, e));
}
const Qx = "units/5.7.0", ac = new _(Qx), fc = [
  "wei",
  "kwei",
  "mwei",
  "gwei",
  "szabo",
  "finney",
  "ether"
];
function Zx(n) {
  const e = String(n).split(".");
  (e.length > 2 || !e[0].match(/^-?[0-9]*$/) || e[1] && !e[1].match(/^[0-9]*$/) || n === "." || n === "-.") && ac.throwArgumentError("invalid value", "value", n);
  let t = e[0], r = "";
  for (t.substring(0, 1) === "-" && (r = "-", t = t.substring(1)); t.substring(0, 1) === "0"; )
    t = t.substring(1);
  t === "" && (t = "0");
  let i = "";
  for (e.length === 2 && (i = "." + (e[1] || "0")); i.length > 2 && i[i.length - 1] === "0"; )
    i = i.substring(0, i.length - 1);
  const s = [];
  for (; t.length; )
    if (t.length <= 3) {
      s.unshift(t);
      break;
    } else {
      const o = t.length - 3;
      s.unshift(t.substring(o)), t = t.substring(0, o);
    }
  return r + s.join(",") + i;
}
function cc(n, e) {
  if (typeof e == "string") {
    const t = fc.indexOf(e);
    t !== -1 && (e = 3 * t);
  }
  return ki(n, e ?? 18);
}
function lc(n, e) {
  if (typeof n != "string" && ac.throwArgumentError("value must be a string", "value", n), typeof e == "string") {
    const t = fc.indexOf(e);
    t !== -1 && (e = 3 * t);
  }
  return Kt(n, e ?? 18);
}
function Xx(n) {
  return cc(n, 18);
}
function e1(n) {
  return lc(n, 18);
}
const t1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbiCoder: O0,
  ConstructorFragment: Ft,
  ErrorFragment: or,
  EventFragment: qt,
  FormatTypes: ce,
  Fragment: zt,
  FunctionFragment: Dt,
  HDNode: St,
  Indexed: Ui,
  Interface: $s,
  LogDescription: J0,
  Logger: _,
  ParamType: ot,
  RLP: jc,
  SigningKey: $r,
  get SupportedAlgorithm() {
    return Sn;
  },
  TransactionDescription: V0,
  get TransactionTypes() {
    return to;
  },
  get UnicodeNormalizationForm() {
    return Qt;
  },
  Utf8ErrorFuncs: R0,
  get Utf8ErrorReason() {
    return wt;
  },
  _TypedDataEncoder: ct,
  _fetchData: Hf,
  _toEscapedUtf8String: pl,
  accessListify: Ir,
  arrayify: K,
  base58: _n,
  base64: Bl,
  checkProperties: po,
  checkResultErrors: v0,
  commify: Zx,
  computeAddress: Ar,
  computeHmac: ni,
  computePublicKey: Io,
  concat: de,
  deepCopy: mt,
  defaultAbiCoder: F0,
  defaultPath: kn,
  defineReadOnly: B,
  dnsEncode: q0,
  entropyToMnemonic: rs,
  fetchJson: Rn,
  formatBytes32String: bl,
  formatEther: Xx,
  formatUnits: cc,
  getAccountPath: Td,
  getAddress: le,
  getContractAddress: Vi,
  getCreate2Address: Qc,
  getIcapAddress: Yc,
  getJsonWalletAddress: Ud,
  getStatic: lt,
  hashMessage: ci,
  hexConcat: bt,
  hexDataLength: Yt,
  hexDataSlice: rt,
  hexStripZeros: l0,
  hexValue: ai,
  hexZeroPad: xe,
  hexlify: G,
  id: wr,
  isAddress: $c,
  isBytes: kr,
  isBytesLike: oi,
  isHexString: re,
  isValidMnemonic: Nd,
  isValidName: iu,
  joinSignature: Ws,
  keccak256: he,
  mnemonicToEntropy: ts,
  mnemonicToSeed: Tf,
  namehash: Wn,
  nameprep: Ml,
  parseBytes32String: gl,
  parseEther: e1,
  parseTransaction: Ef,
  parseUnits: lc,
  poll: Vr,
  randomBytes: xn,
  recoverAddress: Nn,
  recoverPublicKey: mf,
  resolveProperties: et,
  ripemd160: If,
  serializeTransaction: ro,
  sha256: cr,
  sha512: Ad,
  shallowCopy: ge,
  shuffled: Rf,
  solidityKeccak256: $x,
  solidityPack: Ho,
  soliditySha256: Yx,
  splitSignature: tn,
  stripZeros: Wt,
  toUtf8Bytes: nt,
  toUtf8CodePoints: Di,
  toUtf8String: nn,
  verifyMessage: Xd,
  verifyTypedData: ex,
  zeroPad: qn
}, Symbol.toStringTag, { value: "Module" })), uc = "ethers/5.7.2", r1 = new _(uc), n1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseContract: Pf,
  BigNumber: H,
  Contract: qi,
  ContractFactory: vd,
  FixedNumber: at,
  Signer: Pr,
  VoidSigner: Yi,
  Wallet: Wr,
  Wordlist: Tn,
  constants: ll,
  get errors() {
    return It;
  },
  getDefaultProvider: sc,
  logger: r1,
  providers: qx,
  utils: t1,
  version: uc,
  wordlists: no
}, Symbol.toStringTag, { value: "Module" }));
try {
  const n = window;
  n._ethers == null && (n._ethers = n1);
} catch {
}
var hc = { exports: {} };
(function(n) {
  var e = Object.prototype.hasOwnProperty, t = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (t = !1));
  function i(l, h, x) {
    this.fn = l, this.context = h, this.once = x || !1;
  }
  function s(l, h, x, b, E) {
    if (typeof x != "function")
      throw new TypeError("The listener must be a function");
    var S = new i(x, b || l, E), I = t ? t + h : h;
    return l._events[I] ? l._events[I].fn ? l._events[I] = [l._events[I], S] : l._events[I].push(S) : (l._events[I] = S, l._eventsCount++), l;
  }
  function o(l, h) {
    --l._eventsCount === 0 ? l._events = new r() : delete l._events[h];
  }
  function a() {
    this._events = new r(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var h = [], x, b;
    if (this._eventsCount === 0)
      return h;
    for (b in x = this._events)
      e.call(x, b) && h.push(t ? b.slice(1) : b);
    return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(x)) : h;
  }, a.prototype.listeners = function(h) {
    var x = t ? t + h : h, b = this._events[x];
    if (!b)
      return [];
    if (b.fn)
      return [b.fn];
    for (var E = 0, S = b.length, I = new Array(S); E < S; E++)
      I[E] = b[E].fn;
    return I;
  }, a.prototype.listenerCount = function(h) {
    var x = t ? t + h : h, b = this._events[x];
    return b ? b.fn ? 1 : b.length : 0;
  }, a.prototype.emit = function(h, x, b, E, S, I) {
    var C = t ? t + h : h;
    if (!this._events[C])
      return !1;
    var y = this._events[C], T = arguments.length, D, U;
    if (y.fn) {
      switch (y.once && this.removeListener(h, y.fn, void 0, !0), T) {
        case 1:
          return y.fn.call(y.context), !0;
        case 2:
          return y.fn.call(y.context, x), !0;
        case 3:
          return y.fn.call(y.context, x, b), !0;
        case 4:
          return y.fn.call(y.context, x, b, E), !0;
        case 5:
          return y.fn.call(y.context, x, b, E, S), !0;
        case 6:
          return y.fn.call(y.context, x, b, E, S, I), !0;
      }
      for (U = 1, D = new Array(T - 1); U < T; U++)
        D[U - 1] = arguments[U];
      y.fn.apply(y.context, D);
    } else {
      var z = y.length, L;
      for (U = 0; U < z; U++)
        switch (y[U].once && this.removeListener(h, y[U].fn, void 0, !0), T) {
          case 1:
            y[U].fn.call(y[U].context);
            break;
          case 2:
            y[U].fn.call(y[U].context, x);
            break;
          case 3:
            y[U].fn.call(y[U].context, x, b);
            break;
          case 4:
            y[U].fn.call(y[U].context, x, b, E);
            break;
          default:
            if (!D)
              for (L = 1, D = new Array(T - 1); L < T; L++)
                D[L - 1] = arguments[L];
            y[U].fn.apply(y[U].context, D);
        }
    }
    return !0;
  }, a.prototype.on = function(h, x, b) {
    return s(this, h, x, b, !1);
  }, a.prototype.once = function(h, x, b) {
    return s(this, h, x, b, !0);
  }, a.prototype.removeListener = function(h, x, b, E) {
    var S = t ? t + h : h;
    if (!this._events[S])
      return this;
    if (!x)
      return o(this, S), this;
    var I = this._events[S];
    if (I.fn)
      I.fn === x && (!E || I.once) && (!b || I.context === b) && o(this, S);
    else {
      for (var C = 0, y = [], T = I.length; C < T; C++)
        (I[C].fn !== x || E && !I[C].once || b && I[C].context !== b) && y.push(I[C]);
      y.length ? this._events[S] = y.length === 1 ? y[0] : y : o(this, S);
    }
    return this;
  }, a.prototype.removeAllListeners = function(h) {
    var x;
    return h ? (x = t ? t + h : h, this._events[x] && o(this, x)) : (this._events = new r(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = t, a.EventEmitter = a, n.exports = a;
})(hc);
var i1 = hc.exports;
const dc = /* @__PURE__ */ en(i1);
function s1(n) {
  return `https://${n}.rpc.thirdweb.com`;
}
const o1 = ["function isValidSignature(bytes32 _message, bytes _signature) public view returns (bytes4)"], a1 = "0x1626ba7e";
async function f1(n, e, t, r) {
  const i = new Sr(s1(r)), s = new qi(t, o1, i), o = ci(n);
  try {
    return await s.isValidSignature(o, e) === a1;
  } catch {
    return !1;
  }
}
class c1 extends dc {
  constructor() {
    super(...arguments), st(this, "type", "evm");
  }
  /**
   * @returns the account address from connected wallet
   */
  async getAddress() {
    return (await this.getSigner()).getAddress();
  }
  /**
   * @returns the chain id from connected wallet
   */
  async getChainId() {
    return (await this.getSigner()).getChainId();
  }
  /**
   * @returns the signature of the message
   */
  async signMessage(e) {
    return await (await this.getSigner()).signMessage(e);
  }
  /**
   * verify the signature of a message
   * @returns `true` if the signature is valid, `false` otherwise
   */
  async verifySignature(e, t, r, i) {
    try {
      const s = ci(e), o = K(s);
      if (Nn(o, t) === r)
        return !0;
    } catch {
    }
    if (i !== void 0)
      try {
        return await f1(e, t, r, i || 1);
      } catch {
      }
    return !1;
  }
}
var l1 = {
  name: "Ethereum Mainnet",
  chain: "ETH",
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  rpc: ["https://ethereum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://mainnet.infura.io/v3/${INFURA_API_KEY}", "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}", "https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com", "https://ethereum.publicnode.com"],
  features: [{
    name: "EIP1559"
  }, {
    name: "EIP155"
  }],
  faucets: [],
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  infoURL: "https://ethereum.org",
  shortName: "eth",
  chainId: 1,
  networkId: 1,
  slip44: 60,
  ens: {
    registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
  },
  explorers: [{
    name: "etherscan",
    url: "https://etherscan.io",
    standard: "EIP3091"
  }],
  testnet: !1,
  slug: "ethereum"
}, u1 = {
  name: "Goerli",
  title: "Ethereum Testnet Goerli",
  chain: "ETH",
  rpc: ["https://goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://goerli.infura.io/v3/${INFURA_API_KEY}", "wss://goerli.infura.io/v3/${INFURA_API_KEY}", "https://rpc.goerli.mudit.blog/", "https://ethereum-goerli.publicnode.com"],
  faucets: ["https://faucet.paradigm.xyz/", "http://fauceth.komputing.org?chain=5&address=${ADDRESS}", "https://goerli-faucet.slock.it?address=${ADDRESS}", "https://faucet.goerli.mudit.blog"],
  nativeCurrency: {
    name: "Goerli Ether",
    symbol: "ETH",
    decimals: 18
  },
  infoURL: "https://goerli.net/#about",
  shortName: "gor",
  chainId: 5,
  networkId: 5,
  ens: {
    registry: "0x112234455c3a32fd11230c42e7bccd4a84e02010"
  },
  explorers: [{
    name: "etherscan-goerli",
    url: "https://goerli.etherscan.io",
    standard: "EIP3091"
  }],
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  testnet: !0,
  slug: "goerli"
}, h1 = {
  name: "Optimism",
  chain: "ETH",
  rpc: ["https://optimism.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://optimism-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://mainnet.optimism.io/"],
  faucets: [],
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  infoURL: "https://optimism.io",
  shortName: "oeth",
  chainId: 10,
  networkId: 10,
  explorers: [{
    name: "etherscan",
    url: "https://optimistic.etherscan.io",
    standard: "EIP3091"
  }],
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  testnet: !1,
  slug: "optimism"
}, d1 = {
  name: "Binance Smart Chain Mainnet",
  chain: "BSC",
  rpc: ["https://binance.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "wss://bsc-ws-node.nariox.org", "https://bsc.publicnode.com", "https://bsc-dataseed4.ninicoin.io", "https://bsc-dataseed3.ninicoin.io", "https://bsc-dataseed2.ninicoin.io", "https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed4.defibit.io", "https://bsc-dataseed3.defibit.io", "https://bsc-dataseed2.defibit.io", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed4.binance.org", "https://bsc-dataseed3.binance.org", "https://bsc-dataseed2.binance.org", "https://bsc-dataseed1.binance.org"],
  faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
  nativeCurrency: {
    name: "Binance Chain Native Token",
    symbol: "BNB",
    decimals: 18
  },
  infoURL: "https://www.binance.org",
  shortName: "bnb",
  chainId: 56,
  networkId: 56,
  slip44: 714,
  explorers: [{
    name: "bscscan",
    url: "https://bscscan.com",
    standard: "EIP3091"
  }],
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  testnet: !1,
  slug: "binance"
}, x1 = {
  name: "Binance Smart Chain Testnet",
  chain: "BSC",
  rpc: ["https://binance-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://bsc-testnet.publicnode.com", "https://data-seed-prebsc-2-s3.binance.org:8545", "https://data-seed-prebsc-1-s3.binance.org:8545", "https://data-seed-prebsc-2-s2.binance.org:8545", "https://data-seed-prebsc-1-s2.binance.org:8545", "https://data-seed-prebsc-2-s1.binance.org:8545", "https://data-seed-prebsc-1-s1.binance.org:8545"],
  faucets: ["https://testnet.binance.org/faucet-smart"],
  nativeCurrency: {
    name: "Binance Chain Native Token",
    symbol: "tBNB",
    decimals: 18
  },
  infoURL: "https://testnet.binance.org/",
  shortName: "bnbt",
  chainId: 97,
  networkId: 97,
  explorers: [{
    name: "bscscan-testnet",
    url: "https://testnet.bscscan.com",
    standard: "EIP3091"
  }],
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  testnet: !0,
  slug: "binance-testnet"
}, p1 = {
  name: "Polygon Mainnet",
  chain: "Polygon",
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  rpc: ["https://polygon.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://polygon-rpc.com/", "https://rpc-mainnet.matic.network", "https://matic-mainnet.chainstacklabs.com", "https://rpc-mainnet.maticvigil.com", "https://rpc-mainnet.matic.quiknode.pro", "https://matic-mainnet-full-rpc.bwarelabs.com", "https://polygon-bor.publicnode.com"],
  faucets: [],
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18
  },
  infoURL: "https://polygon.technology/",
  shortName: "matic",
  chainId: 137,
  networkId: 137,
  slip44: 966,
  explorers: [{
    name: "polygonscan",
    url: "https://polygonscan.com",
    standard: "EIP3091"
  }],
  testnet: !1,
  slug: "polygon"
}, b1 = {
  name: "Fantom Opera",
  chain: "FTM",
  rpc: ["https://fantom.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://fantom.publicnode.com", "https://rpc.ftm.tools"],
  faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
  nativeCurrency: {
    name: "Fantom",
    symbol: "FTM",
    decimals: 18
  },
  infoURL: "https://fantom.foundation",
  shortName: "ftm",
  chainId: 250,
  networkId: 250,
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/fantom/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  explorers: [{
    name: "ftmscan",
    url: "https://ftmscan.com",
    icon: {
      url: "ipfs://QmRqbK449Fo9sJ3xMpkPbg6uV1weQj4yVV1xNMP9cdPmjf",
      width: 73,
      height: 73,
      format: "png"
    },
    standard: "EIP3091"
  }],
  testnet: !1,
  slug: "fantom"
}, g1 = {
  name: "Optimism Goerli Testnet",
  chain: "ETH",
  rpc: ["https://optimism-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://opt-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://optimism-goerli.infura.io/v3/${INFURA_API_KEY}", "https://goerli.optimism.io/"],
  faucets: ["https://coinbase.com/faucets/optimism-goerli-faucet"],
  nativeCurrency: {
    name: "Goerli Ether",
    symbol: "ETH",
    decimals: 18
  },
  infoURL: "https://optimism.io",
  shortName: "ogor",
  chainId: 420,
  networkId: 420,
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  testnet: !0,
  slug: "optimism-goerli"
}, m1 = {
  name: "Fantom Testnet",
  chain: "FTM",
  rpc: ["https://fantom-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://fantom-testnet.publicnode.com", "https://rpc.testnet.fantom.network"],
  faucets: ["https://faucet.fantom.network"],
  nativeCurrency: {
    name: "Fantom",
    symbol: "FTM",
    decimals: 18
  },
  infoURL: "https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet",
  shortName: "tftm",
  chainId: 4002,
  networkId: 4002,
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/fantom/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  explorers: [{
    name: "ftmscan",
    url: "https://testnet.ftmscan.com",
    icon: {
      url: "ipfs://QmRqbK449Fo9sJ3xMpkPbg6uV1weQj4yVV1xNMP9cdPmjf",
      width: 73,
      height: 73,
      format: "png"
    },
    standard: "EIP3091"
  }],
  testnet: !0,
  slug: "fantom-testnet"
}, v1 = {
  name: "Arbitrum One",
  chainId: 42161,
  shortName: "arb1",
  chain: "ETH",
  networkId: 42161,
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpc: ["https://arbitrum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://arb1.arbitrum.io/rpc"],
  faucets: [],
  explorers: [{
    name: "Arbitrum Explorer",
    url: "https://explorer.arbitrum.io",
    standard: "EIP3091"
  }, {
    name: "Arbiscan",
    url: "https://arbiscan.io",
    standard: "EIP3091"
  }],
  infoURL: "https://arbitrum.io",
  parent: {
    type: "L2",
    chain: "eip155-1",
    bridges: [{
      url: "https://bridge.arbitrum.io"
    }]
  },
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/arbitrum/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  testnet: !1,
  slug: "arbitrum"
}, y1 = {
  name: "Avalanche Fuji Testnet",
  chain: "AVAX",
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  rpc: ["https://avalanche-fuji.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://avalanche-fuji.infura.io/v3/${INFURA_API_KEY}", "https://api.avax-test.network/ext/bc/C/rpc", "https://avalanche-fuji-c-chain.publicnode.com"],
  faucets: ["https://faucet.avax.network/", "https://faucet.avax-test.network/"],
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18
  },
  infoURL: "https://cchain.explorer.avax-test.network",
  shortName: "Fuji",
  chainId: 43113,
  networkId: 1,
  explorers: [{
    name: "snowtrace",
    url: "https://testnet.snowtrace.io",
    standard: "EIP3091"
  }],
  testnet: !0,
  slug: "avalanche-fuji"
}, w1 = {
  name: "Avalanche C-Chain",
  chain: "AVAX",
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  rpc: ["https://avalanche.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://avalanche-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://api.avax.network/ext/bc/C/rpc", "https://avalanche-c-chain.publicnode.com"],
  features: [{
    name: "EIP1559"
  }],
  faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18
  },
  infoURL: "https://www.avax.network/",
  shortName: "avax",
  chainId: 43114,
  networkId: 43114,
  slip44: 9005,
  explorers: [{
    name: "snowtrace",
    url: "https://snowtrace.io",
    standard: "EIP3091"
  }],
  testnet: !1,
  slug: "avalanche"
}, A1 = {
  name: "Mumbai",
  title: "Polygon Testnet Mumbai",
  chain: "Polygon",
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  rpc: ["https://mumbai.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}", "https://matic-mumbai.chainstacklabs.com", "https://rpc-mumbai.maticvigil.com", "https://matic-testnet-archive-rpc.bwarelabs.com", "https://polygon-mumbai-bor.publicnode.com"],
  faucets: ["https://faucet.polygon.technology/"],
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18
  },
  infoURL: "https://polygon.technology/",
  shortName: "maticmum",
  chainId: 80001,
  networkId: 80001,
  explorers: [{
    name: "polygonscan",
    url: "https://mumbai.polygonscan.com",
    standard: "EIP3091"
  }],
  testnet: !0,
  slug: "mumbai"
}, E1 = {
  name: "Base Goerli Testnet",
  chain: "ETH",
  rpc: ["https://base-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.base.org"],
  faucets: ["https://www.coinbase.com/faucets/base-ethereum-goerli-faucet"],
  nativeCurrency: {
    name: "Goerli Ether",
    symbol: "ETH",
    decimals: 18
  },
  infoURL: "https://base.org",
  shortName: "basegor",
  chainId: 84531,
  networkId: 84531,
  explorers: [{
    name: "basescout",
    url: "https://base-goerli.blockscout.com",
    standard: "none"
  }, {
    name: "basescan",
    url: "https://goerli.basescan.org",
    standard: "none"
  }],
  testnet: !0,
  icon: {
    url: "ipfs://QmW5Vn15HeRkScMfPcW12ZdZcC2yUASpu6eCsECRdEmjjj/base-512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  slug: "base-goerli"
}, _1 = {
  name: "Arbitrum Goerli",
  title: "Arbitrum Goerli Rollup Testnet",
  chainId: 421613,
  shortName: "arb-goerli",
  chain: "ETH",
  networkId: 421613,
  nativeCurrency: {
    name: "Arbitrum Goerli Ether",
    symbol: "AGOR",
    decimals: 18
  },
  rpc: ["https://arbitrum-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://arb-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://abritrum-goerli.infura.io/v3/${INFURA_API_KEY}", "https://goerli-rollup.arbitrum.io/rpc/"],
  faucets: [],
  infoURL: "https://arbitrum.io/",
  explorers: [{
    name: "Arbitrum Goerli Rollup Explorer",
    url: "https://goerli-rollup-explorer.arbitrum.io",
    standard: "EIP3091"
  }],
  parent: {
    type: "L2",
    chain: "eip155-5",
    bridges: [{
      url: "https://bridge.arbitrum.io/"
    }]
  },
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/arbitrum/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  testnet: !0,
  slug: "arbitrum-goerli"
}, S1 = {
  name: "Localhost",
  chain: "ETH",
  rpc: ["http://localhost:8545"],
  faucets: [],
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
    height: 512,
    width: 512,
    format: "png"
  },
  shortName: "local",
  chainId: 1337,
  networkId: 1337,
  testnet: !0,
  slug: "localhost"
};
const k1 = [l1, u1, E1, p1, A1, v1, _1, h1, g1, d1, x1, b1, m1, w1, y1, S1], Gs = "__TW__";
class P1 {
  constructor(e) {
    st(this, "name", void 0), this.name = e;
  }
  getItem(e) {
    return new Promise((t) => {
      t(localStorage.getItem(`${Gs}/${this.name}/${e}`));
    });
  }
  setItem(e, t) {
    return new Promise((r, i) => {
      try {
        localStorage.setItem(`${Gs}/${this.name}/${e}`, t), r();
      } catch (s) {
        i(s);
      }
    });
  }
  removeItem(e) {
    return new Promise((t) => {
      localStorage.removeItem(`${Gs}/${this.name}/${e}`), t();
    });
  }
}
function C1(n) {
  return new P1(n);
}
const I1 = {
  name: "thirdweb powered dApp",
  url: "https://thirdweb.com",
  description: "thirdweb powered dApp",
  logoUrl: "https://thirdweb.com/favicon.ico",
  isDarkMode: !0
};
var qs = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakSet(), xc = /* @__PURE__ */ new WeakSet();
class Go extends c1 {
  getMeta() {
    return this.constructor.meta;
  }
  constructor(e, t) {
    super(), Bi(this, xc), Bi(this, zs), st(this, "walletId", void 0), st(this, "walletStorage", void 0), st(this, "chains", void 0), st(this, "dappMetadata", void 0), st(this, "options", void 0), rr(this, qs, {
      writable: !0,
      value: void 0
    }), this.walletId = e, this.options = t, this.chains = (t == null ? void 0 : t.chains) || k1, this.dappMetadata = (t == null ? void 0 : t.dappMetadata) || I1, this.walletStorage = (t == null ? void 0 : t.walletStorage) || C1(this.walletId);
  }
  /**
   * tries to auto connect to the wallet
   */
  async autoConnect(e) {
    const t = e ? {
      ...e,
      chainId: void 0
    } : void 0;
    return yn(this, zs, i0).call(this, !0, t);
  }
  /**
   * connect to the wallet
   */
  async connect(e) {
    _i(this, qs, e);
    const t = await yn(this, zs, i0).call(this, !1, e);
    if (!t)
      throw new Error("Failed to connect to the wallet.");
    return t;
  }
  getConnectParams() {
    return be(this, qs);
  }
  async getSigner() {
    const e = await this.getConnector();
    if (!e)
      throw new Error("Wallet not connected");
    return await e.getSigner();
  }
  async disconnect() {
    const e = await this.getConnector();
    e && (await e.disconnect(), this.emit("disconnect"), e.removeAllListeners());
  }
  async switchChain(e) {
    const t = await this.getConnector();
    if (!t)
      throw new Error("Wallet not connected");
    if (!t.switchChain)
      throw new Error("Wallet does not support switching chains");
    return await t.switchChain(e);
  }
  async updateChains(e) {
    this.chains = e, (await this.getConnector()).updateChains(e);
  }
  /**
   * If the wallet uses a personal wallet under the hood, return it
   */
  getPersonalWallet() {
  }
}
async function i0(n, e) {
  const t = await this.getConnector();
  if (yn(this, xc, M1).call(this, t), await t.isConnected()) {
    const s = await t.getAddress();
    return t.setupListeners(), e != null && e.chainId && await t.switchChain(e == null ? void 0 : e.chainId), this.emit("connect", {
      address: s,
      chainId: await this.getChainId()
    }), s;
  }
  if (n)
    throw new Error("Failed to auto connect to the wallet.");
  return await t.connect(e);
}
async function M1(n) {
  n.on("connect", (e) => {
    var t;
    this.emit("connect", {
      address: e.account,
      chainId: (t = e.chain) == null ? void 0 : t.id
    });
  }), n.on("change", (e) => {
    var t;
    this.emit("change", {
      address: e.account,
      chainId: (t = e.chain) == null ? void 0 : t.id
    });
  }), n.on("message", (e) => {
    this.emit("message", e);
  }), n.on("disconnect", async () => {
    this.emit("disconnect");
  }), n.on("error", (e) => this.emit("error", e));
}
st(Go, "meta", void 0);
const pc = {
  coinbase: "coinbase",
  metamask: "metamask",
  localWallet: "localWallet",
  smartWallet: "smartWallet",
  safe: "safe",
  walletConnectV1: "walletConnectV1",
  walletConnect: "walletConnect",
  magicLink: "magicLink",
  paper: "paper"
}, N1 = "145769e410f16970a79ff77b2d89a1e0";
class T1 extends dc {
}
class lo extends T1 {
  constructor(e) {
    super(), st(this, "wagmiConnector", void 0), this.wagmiConnector = e;
  }
  async connect(e) {
    return this.setupConnectorListeners(), (await this.wagmiConnector.connect(e)).account;
  }
  disconnect() {
    return this.wagmiConnector.removeAllListeners("connect"), this.wagmiConnector.removeAllListeners("change"), this.wagmiConnector.disconnect();
  }
  isConnected() {
    return this.wagmiConnector.isAuthorized();
  }
  getAddress() {
    return this.wagmiConnector.getAccount();
  }
  getSigner() {
    return this.wagmiConnector.getSigner();
  }
  getProvider() {
    return this.wagmiConnector.getProvider();
  }
  async switchChain(e) {
    if (!this.wagmiConnector.switchChain)
      throw new Error("Switch chain not supported");
    await this.wagmiConnector.switchChain(e);
  }
  setupConnectorListeners() {
    this.wagmiConnector.addListener("connect", (e) => {
      this.emit("connect", e);
    }), this.wagmiConnector.addListener("change", (e) => {
      this.emit("change", e);
    }), this.wagmiConnector.addListener("disconnect", () => {
      this.emit("disconnect");
    });
  }
  async setupListeners() {
    this.setupConnectorListeners(), await this.wagmiConnector.setupListeners();
  }
  updateChains(e) {
    this.wagmiConnector.updateChains(e);
  }
}
function R1(n) {
  return typeof n < "u" && "ethereum" in n;
}
class os extends Go {
  get walletName() {
    return "MetaMask";
  }
  constructor(e) {
    var t;
    super(os.id, e), st(this, "connector", void 0), st(this, "walletConnectConnector", void 0), st(this, "metamaskConnector", void 0), st(this, "isInjected", void 0), R1(globalThis.window) ? this.isInjected = !!((t = globalThis.window.ethereum) != null && t.isMetaMask) : this.isInjected = !1;
  }
  async getConnector() {
    var e;
    if (!this.connector)
      if (this.isInjected) {
        const {
          MetaMaskConnector: t
        } = await import("./thirdweb-dev-wallets-evm-connectors-metamask.browser.esm-69c9fb1d.js"), r = new t({
          chains: this.chains,
          connectorStorage: this.walletStorage,
          options: {
            shimDisconnect: !0
          }
        });
        this.metamaskConnector = r, this.connector = new lo(r);
      } else {
        const {
          WalletConnectV1Connector: t
        } = await import("./thirdweb-dev-wallets-evm-connectors-wallet-connect-v1.browser.esm-4a7a546c.js"), r = new t({
          chains: this.chains,
          storage: this.walletStorage,
          options: {
            clientMeta: {
              name: this.dappMetadata.name,
              description: this.dappMetadata.description || "",
              url: this.dappMetadata.url,
              icons: [this.dappMetadata.logoUrl || ""]
            },
            qrcode: (e = this.options) == null ? void 0 : e.qrcode
          }
        });
        this.walletConnectConnector = r, this.connector = new lo(r);
      }
    return this.connector;
  }
  /**
   * connect to wallet with QR code
   *
   * @example
   * ```typescript
   * metamask.connectWithQrCode({
   *  chainId: 1,
   *  onQrCodeUri(qrCodeUri) {
   *    // render the QR code with `qrCodeUri`
   *  },
   *  onConnected(accountAddress)  {
   *    // update UI to show connected state
   *  },
   * })
   * ```
   */
  async connectWithQrCode(e) {
    await this.getConnector();
    const t = this.walletConnectConnector;
    if (!t)
      throw new Error("WalletConnect connector not found");
    const r = await t.getProvider();
    r.connector.on("display_uri", (i, s) => {
      e.onQrCodeUri(s.params[0]);
    }), await r.enable(), this.connect({
      chainId: e.chainId
    }).then(e.onConnected);
  }
  async switchAccount() {
    if (!this.metamaskConnector)
      throw new Error("Can not switch Account");
    await this.metamaskConnector.switchAccount();
  }
}
st(os, "meta", {
  name: "MetaMask",
  iconURL: "ipfs://QmZZHcw7zcXursywnLDAyY6Hfxzqop5GKgwoq8NB9jjrkN/metamask.svg",
  urls: {
    chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
    android: "https://play.google.com/store/apps/details?id=io.metamask",
    ios: "https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202"
  }
});
st(os, "id", pc.metamask);
var At = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), B1 = /* @__PURE__ */ new WeakMap(), qo = /* @__PURE__ */ new WeakMap(), zo = /* @__PURE__ */ new WeakMap(), jo = /* @__PURE__ */ new WeakMap(), Wo = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), s0 = /* @__PURE__ */ new WeakSet(), uo = /* @__PURE__ */ new WeakSet();
class as extends Go {
  get walletName() {
    return "WalletConnect";
  }
  constructor(e) {
    super((e == null ? void 0 : e.walletId) || as.id, e), Bi(this, uo), Bi(this, s0), rr(this, At, {
      writable: !0,
      value: void 0
    }), rr(this, bn, {
      writable: !0,
      value: void 0
    }), st(this, "connector", void 0), st(this, "projectId", void 0), st(this, "qrcode", void 0), rr(this, B1, {
      writable: !0,
      value: (t) => {
        if (t)
          throw t;
      }
    }), rr(this, qo, {
      writable: !0,
      value: (t) => {
        if (_i(this, bn, t.provider), !be(this, bn))
          throw new Error("WalletConnect provider not found after connecting.");
      }
    }), rr(this, zo, {
      writable: !0,
      value: () => {
        yn(this, uo, bc).call(this);
      }
    }), rr(this, jo, {
      writable: !0,
      value: async (t) => {
        t.chain || t.account;
      }
    }), rr(this, Wo, {
      writable: !0,
      value: (t) => {
        switch (t.type) {
          case "display_uri":
            this.emit("open_wallet", t.data);
            break;
        }
      }
    }), rr(this, Jo, {
      writable: !0,
      value: () => {
        this.emit("open_wallet");
      }
    }), this.projectId = (e == null ? void 0 : e.projectId) || N1, this.qrcode = (e == null ? void 0 : e.qrcode) !== !1;
  }
  async getConnector() {
    var e;
    if (!this.connector) {
      const {
        WalletConnectConnector: t
      } = await import("./thirdweb-dev-wallets-evm-connectors-wallet-connect.browser.esm-f6bb55d9.js");
      _i(this, At, new t({
        chains: this.chains,
        options: {
          qrcode: this.qrcode,
          projectId: this.projectId,
          dappMetadata: this.dappMetadata,
          storage: this.walletStorage,
          qrModalOptions: (e = this.options) == null ? void 0 : e.qrModalOptions
        }
      })), this.connector = new lo(be(this, At)), _i(this, bn, await be(this, At).getProvider()), yn(this, s0, O1).call(this);
    }
    return this.connector;
  }
}
function O1() {
  var n;
  be(this, At) && (yn(this, uo, bc).call(this), be(this, At).on("connect", be(this, qo)), be(this, At).on("disconnect", be(this, zo)), be(this, At).on("change", be(this, jo)), be(this, At).on("message", be(this, Wo)), (n = be(this, bn)) == null || n.signer.client.on("session_request_sent", be(this, Jo)));
}
function bc() {
  var n;
  be(this, At) && (be(this, At).removeListener("connect", be(this, qo)), be(this, At).removeListener("disconnect", be(this, zo)), be(this, At).removeListener("change", be(this, jo)), be(this, At).removeListener("message", be(this, Wo)), (n = be(this, bn)) == null || n.signer.client.removeListener("session_request_sent", be(this, Jo)));
}
st(as, "id", pc.walletConnect);
st(as, "meta", {
  name: "WalletConnect",
  iconURL: "ipfs://QmX58KPRaTC9JYZ7KriuBzeoEaV2P9eZcA3qbFnTHZazKw/wallet-connect.svg"
});
var F1 = {
  chain: "ETH",
  chainId: 1,
  ens: {
    registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
  },
  explorers: [{
    name: "etherscan",
    url: "https://etherscan.io",
    standard: "EIP3091"
  }, {
    name: "blockscout",
    url: "https://eth.blockscout.com",
    standard: "EIP3091",
    icon: {
      url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
      width: 551,
      height: 540,
      format: "png"
    }
  }, {
    name: "dexguru",
    url: "https://ethereum.dex.guru",
    standard: "EIP3091",
    icon: {
      url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
      width: 83,
      height: 82,
      format: "svg"
    }
  }],
  faucets: [],
  features: [{
    name: "EIP155"
  }, {
    name: "EIP1559"
  }],
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
    width: 512,
    height: 512,
    format: "png"
  },
  infoURL: "https://ethereum.org",
  name: "Ethereum Mainnet",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  networkId: 1,
  redFlags: [],
  rpc: ["https://ethereum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.infura.io/v3/${INFURA_API_KEY}", "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}", "https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com", "https://ethereum.publicnode.com", "wss://ethereum.publicnode.com", "https://mainnet.gateway.tenderly.co", "wss://mainnet.gateway.tenderly.co", "https://rpc.blocknative.com/boost", "https://rpc.flashbots.net/fast", "https://rpc.mevblocker.io/fullprivacy"],
  shortName: "eth",
  slip44: 60,
  slug: "ethereum",
  testnet: !1
}, D1 = {
  chain: "ETH",
  chainId: 5,
  ens: {
    registry: "0x112234455c3a32fd11230c42e7bccd4a84e02010"
  },
  explorers: [{
    name: "etherscan-goerli",
    url: "https://goerli.etherscan.io",
    standard: "EIP3091"
  }, {
    name: "blockscout-goerli",
    url: "https://eth-goerli.blockscout.com",
    standard: "EIP3091",
    icon: {
      url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
      width: 551,
      height: 540,
      format: "png"
    }
  }],
  faucets: ["http://fauceth.komputing.org?chain=5&address=${ADDRESS}", "https://goerli-faucet.slock.it?address=${ADDRESS}", "https://faucet.goerli.mudit.blog"],
  features: [],
  icon: {
    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
    width: 512,
    height: 512,
    format: "png"
  },
  infoURL: "https://goerli.net/#about",
  name: "Goerli",
  nativeCurrency: {
    name: "Goerli Ether",
    symbol: "ETH",
    decimals: 18
  },
  networkId: 5,
  redFlags: [],
  rpc: ["https://goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://5.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.infura.io/v3/${INFURA_API_KEY}", "wss://goerli.infura.io/v3/${INFURA_API_KEY}", "https://rpc.goerli.mudit.blog/", "https://ethereum-goerli.publicnode.com", "wss://ethereum-goerli.publicnode.com", "https://goerli.gateway.tenderly.co", "wss://goerli.gateway.tenderly.co"],
  shortName: "gor",
  slug: "goerli",
  testnet: !0,
  title: "Ethereum Testnet Goerli"
};
export {
  dc as E,
  os as M,
  ic as W,
  st as _,
  rr as a,
  _i as b,
  be as c,
  R1 as d,
  Bi as e,
  yn as f,
  le as g,
  ai as h,
  k1 as i,
  en as j,
  wc as k,
  f0 as l,
  n1 as m,
  as as n,
  F1 as o,
  D1 as p,
  _c as r,
  pc as w
};
