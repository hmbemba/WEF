import { a9 as l, aa as w, ab as y, ac as p, ad as h, ae as g, af as k, ag as O, ah as L, ai as m, aj as E } from "./main-gOxGUjNF.js";
class x extends l {
  constructor({ callbackSelector: e, cause: a, data: o, extraData: c, sender: d, urls: r }) {
    var i;
    super(a.shortMessage || "An error occurred while fetching for an offchain result.", {
      cause: a,
      metaMessages: [
        ...a.metaMessages || [],
        (i = a.metaMessages) != null && i.length ? "" : [],
        "Offchain Gateway Call:",
        r && [
          "  Gateway URL(s):",
          ...r.map((u) => `    ${w(u)}`)
        ],
        `  Sender: ${d}`,
        `  Data: ${o}`,
        `  Callback selector: ${e}`,
        `  Extra data: ${c}`
      ].flat()
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "OffchainLookupError"
    });
  }
}
class M extends l {
  constructor({ result: e, url: a }) {
    super("Offchain gateway response is malformed. Response data must be a hex value.", {
      metaMessages: [
        `Gateway URL: ${w(a)}`,
        `Response: ${y(e)}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "OffchainLookupResponseMalformedError"
    });
  }
}
class R extends l {
  constructor({ sender: e, to: a }) {
    super("Reverted sender address does not match target contract address (`to`).", {
      metaMessages: [
        `Contract address: ${a}`,
        `OffchainLookup sender address: ${e}`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "OffchainLookupSenderMismatchError"
    });
  }
}
function $(n, e) {
  if (!p(n))
    throw new h({ address: n });
  if (!p(e))
    throw new h({ address: e });
  return n.toLowerCase() === e.toLowerCase();
}
const v = "0x556f1830", S = {
  name: "OffchainLookup",
  type: "error",
  inputs: [
    {
      name: "sender",
      type: "address"
    },
    {
      name: "urls",
      type: "string[]"
    },
    {
      name: "callData",
      type: "bytes"
    },
    {
      name: "callbackFunction",
      type: "bytes4"
    },
    {
      name: "extraData",
      type: "bytes"
    }
  ]
};
async function C(n, { blockNumber: e, blockTag: a, data: o, to: c }) {
  const { args: d } = g({
    data: o,
    abi: [S]
  }), [r, i, u, t, s] = d;
  try {
    if (!$(c, r))
      throw new R({ sender: r, to: c });
    const f = await A({ data: u, sender: r, urls: i }), { data: b } = await L(n, {
      blockNumber: e,
      blockTag: a,
      data: O([
        t,
        k([{ type: "bytes" }, { type: "bytes" }], [f, s])
      ]),
      to: c
    });
    return b;
  } catch (f) {
    throw new x({
      callbackSelector: t,
      cause: f,
      data: o,
      extraData: s,
      sender: r,
      urls: i
    });
  }
}
async function A({ data: n, sender: e, urls: a }) {
  var c;
  let o = new Error("An unknown error occurred.");
  for (let d = 0; d < a.length; d++) {
    const r = a[d], i = r.includes("{data}") ? "GET" : "POST", u = i === "POST" ? { data: n, sender: e } : void 0;
    try {
      const t = await fetch(r.replace("{sender}", e).replace("{data}", n), {
        body: JSON.stringify(u),
        method: i
      });
      let s;
      if ((c = t.headers.get("Content-Type")) != null && c.startsWith("application/json") ? s = (await t.json()).data : s = await t.text(), !t.ok) {
        o = new m({
          body: u,
          details: s != null && s.error ? y(s.error) : t.statusText,
          headers: t.headers,
          status: t.status,
          url: r
        });
        continue;
      }
      if (!E(s)) {
        o = new M({
          result: s,
          url: r
        });
        continue;
      }
      return s;
    } catch (t) {
      o = new m({
        body: u,
        details: t.message,
        url: r
      });
    }
  }
  throw o;
}
export {
  A as ccipFetch,
  C as offchainLookup,
  S as offchainLookupAbiItem,
  v as offchainLookupSignature
};
